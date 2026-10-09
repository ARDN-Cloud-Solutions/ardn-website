import type { WPPost } from "./types";
import postsData from "@/content/posts.json";
import { getExcerptText } from "./utils";

// Topic hubs (/blog/topics/<slug>) and the "Related articles" picker.
// Hubs group posts with plain slug rules so every new post that fits a rule
// joins its hub automatically; nothing here needs hand-maintained lists.

const POSTS = postsData as unknown as WPPost[];

export interface TopicLink {
    slug: string;
    title: string;
    excerpt: string;
}

export interface TopicGroup {
    heading: string;
    posts: TopicLink[];
}

export interface TopicHub {
    slug: string;
    name: string;
    metaTitle: string;
    description: string;
    intro: string;
    groups: TopicGroup[];
}

const plainTitle = (p: WPPost) =>
    getExcerptText(p.title.rendered, 300);

const toLink = (p: WPPost): TopicLink => ({
    slug: p.slug,
    title: plainTitle(p),
    excerpt: getExcerptText(p.excerpt.rendered, 160),
});

const has = (slug: string, re: RegExp) => re.test(slug);

// ─── Salesforce e-commerce hub ───────────────────────────────────────────────

const LICENSE_RE = /license-guard|licen[cs]e|user-activity-report/;
const PAYMENTS_RE = /payment|billing|financial|subscription/;
const ECOM_RE = /e-?commerce|storefront|checkout|cart|merchandis|web-store|woocommerce|commerce-cloud|retail/;

function isSalesforceEcommerce(p: WPPost): boolean {
    const s = p.slug;
    if (has(s, /hubspot|shopify|ecommerce-cs-/)) return false;
    // Restored cost posts that mention licenses belong to the cost hub; the
    // License Guard group is the older product-led license posts.
    if (has(s, LICENSE_RE)) return has(s, /license-guard|unused-salesforce-licenses|license-deactivation|license-sprawl|user-activity-report/);
    return has(s, ECOM_RE) || (has(s, PAYMENTS_RE) && !has(s, /cost$/));
}

function salesforceEcommerceGroups(): TopicGroup[] {
    const posts = POSTS.filter(isSalesforceEcommerce);
    const lic = posts.filter((p) => has(p.slug, LICENSE_RE));
    const pay = posts.filter((p) => !lic.includes(p) && has(p.slug, PAYMENTS_RE) && !has(p.slug, /storefront/));
    const ecom = posts.filter((p) => !lic.includes(p) && !pay.includes(p));
    return [
        { heading: "Storefronts and Salesforce e-commerce", posts: ecom.map(toLink) },
        { heading: "Payments, billing and subscriptions", posts: pay.map(toLink) },
        { heading: "License Guard and Salesforce license waste", posts: lic.map(toLink) },
    ].filter((g) => g.posts.length);
}

// ─── Software cost comparisons hub ───────────────────────────────────────────

const COST_CATEGORIES = new Set([18, 24, 70, 74, 78, 79, 312, 316]);
const COST_RE = /cost|pricing|price|seat|fee|tco|per-|spend|renewal|licen[cs]e|stacking|jump|sprawl|flat-fee/;

function isCostPost(p: WPPost): boolean {
    if (isSalesforceEcommerce(p) && !has(p.slug, /commerce-cloud/)) return false;
    return p.categories.some((c) => COST_CATEGORIES.has(c)) || has(p.slug, COST_RE);
}

// Ordered: the first matching vertical wins.
const VERTICALS: [string, RegExp][] = [
    ["Healthcare and wellness", /dental|chiropractic|veterinary|senior-living|medical|healthcare|patient|med-spa|salon|gym/],
    ["Real estate and property", /real-estate|property|apartment|hoa-|self-storage/],
    ["Construction, field service and trades", /construction|gc-|landscaping|field-service/],
    ["Hospitality and clubs", /hotel|restaurant|country-club|hospitality/],
    ["Education", /daycare|school|lms-/],
    ["Automotive", /automotive|car-wash/],
    ["Manufacturing and logistics", /manufacturing|logistics/],
    ["Professional services", /accounting|law-firm|agency|professional-services|funeral/],
    ["Insurance", /insurance/],
    ["Nonprofits, associations and member organizations", /nonprofit|member-portal|chapter|association/],
];

function costGroups(): TopicGroup[] {
    const hubspot: WPPost[] = [];
    const salesforce: WPPost[] = [];
    const other: WPPost[] = [];
    const general: WPPost[] = [];
    const vertical = new Map<string, WPPost[]>(VERTICALS.map(([name]) => [name, []]));

    for (const p of POSTS.filter(isCostPost)) {
        const s = p.slug;
        if (has(s, /hubspot/)) hubspot.push(p);
        else if (has(s, /salesforce/)) salesforce.push(p);
        else if (has(s, /microsoft|dynamics|zoho|zendesk|freshdesk|servicenow|shopify|ecommerce-cs/)) other.push(p);
        else {
            const v = VERTICALS.find(([, re]) => re.test(s));
            if (v) vertical.get(v[0])!.push(p);
            else general.push(p);
        }
    }

    return [
        { heading: "HubSpot", posts: hubspot.map(toLink) },
        { heading: "Salesforce", posts: salesforce.map(toLink) },
        { heading: "Microsoft, Zoho, Zendesk, ServiceNow and other platforms", posts: other.map(toLink) },
        ...[...vertical].map(([name, list]) => ({ heading: `Industry software: ${name}`, posts: list.map(toLink) })),
        { heading: "Cost strategy and buyer guides", posts: general.map(toLink) },
    ].filter((g) => g.posts.length);
}

// ─── Hubs ────────────────────────────────────────────────────────────────────

export const TOPIC_SLUGS = ["software-cost-comparisons", "salesforce-ecommerce"] as const;

export function getTopicHub(slug: string): TopicHub | null {
    if (slug === "software-cost-comparisons") {
        return {
            slug,
            name: "Software cost comparisons",
            metaTitle: "Software Cost Comparisons: CRM, SaaS and Industry Software | Ardn",
            description:
                "Every Ardn breakdown of what CRM and industry software really costs, grouped by vendor: HubSpot, Salesforce, Microsoft, Zoho, Zendesk, ServiceNow and vertical software.",
            intro:
                "Per-seat licenses, add-ons and tier jumps make most software bills grow faster than the team using them. These guides break down how HubSpot, Salesforce and the leading industry platforms charge, where the costs hide, and when a flat-fee alternative makes more sense. Pick your vendor or your industry below.",
            groups: costGroups(),
        };
    }
    if (slug === "salesforce-ecommerce") {
        return {
            slug,
            name: "Salesforce e-commerce",
            metaTitle: "Salesforce E-commerce, Storefronts and Payments Guides | Ardn",
            description:
                "Guides to running e-commerce natively inside Salesforce: Storefronts, checkout, payments, billing, subscriptions and License Guard for reclaiming unused licenses.",
            intro:
                "Selling inside Salesforce keeps every order, payment and subscription on the customer record instead of in a disconnected web store. These articles cover native storefronts, checkout and payments, billing and subscriptions, and how to stop paying for Salesforce licenses nobody uses.",
            groups: salesforceEcommerceGroups(),
        };
    }
    return null;
}

export const hubPostCount = (hub: TopicHub) => hub.groups.reduce((n, g) => n + g.posts.length, 0);

// ─── Related articles ────────────────────────────────────────────────────────

const STOP = new Set(["a", "an", "and", "the", "to", "of", "for", "in", "on", "with", "how", "your", "is", "it", "vs", "what", "why", "you", "are", "2025", "2026"]);
const words = (slug: string) => new Set(slug.split("-").filter((w) => w.length > 1 && !STOP.has(w)));

/** Up to `n` related posts: shared categories first, then slug-keyword overlap. */
export function getRelatedPosts(post: WPPost, n = 4): WPPost[] {
    const mine = words(post.slug);
    const cats = new Set(post.categories);
    return POSTS.filter((p) => p.slug !== post.slug)
        .map((p) => {
            const shared = p.categories.filter((c) => cats.has(c)).length;
            let overlap = 0;
            for (const w of words(p.slug)) if (mine.has(w)) overlap++;
            return { p, shared, overlap };
        })
        .filter((x) => x.shared > 0 || x.overlap > 0)
        .sort((a, b) => b.shared - a.shared || b.overlap - a.overlap)
        .slice(0, n)
        .map((x) => x.p);
}
