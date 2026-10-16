import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";
import cutContent from "./src/content/redirects.json";
import postsData from "./src/content/posts.json";

// Cut slug → most relevant live page. Only fall back to an index when
// nothing on the site matches the topic: Google treats mass redirects to an
// index page as soft 404s and drops the old page's ranking.
const CUT_BLOG: Record<string, string> = cutContent.blog;
const CUT_CASE_STUDIES: Record<string, string> = cutContent.caseStudies;
const CUT_CATEGORIES: Record<string, string> = cutContent.categories;
// Cut posts restored on 2026-10-09 (scripts/wp-export/restore.py). They live
// at /blog/<slug> again; their old root-level URLs 301 there in one hop.
const RESTORED_ROOT_POSTS: string[] = cutContent.restoredRootPosts;

// skipTrailingSlashRedirect is on (see below), so every legacy source must
// match with and without a trailing slash to land in one hop.
const S = "{/}?";
const r301 = (source: string, destination: string) => ({ source, destination, permanent: true });

// Blog posts lived at the domain root on the old WordPress site and now live
// under /blog/ on the headless rebuild. Every post in posts.json gets a
// /<slug> → /blog/<slug> redirect (Google still crawls the root URLs; a
// hand-maintained list here missed 33 of them). A slug that matches a real
// top-level route under src/app is skipped so the redirect never shadows a
// page; the build logs a warning naming any such slug so it gets a decision.
const TOP_LEVEL_ROUTES = new Set(
    fs
        .readdirSync(path.join(process.cwd(), "src/app"), { withFileTypes: true })
        .filter((d) => d.isDirectory() && !/^[([_@]/.test(d.name)) // skip route groups, private, dynamic, slots
        .map((d) => d.name),
);
const ROOT_ROUTE_COLLISIONS = postsData.map((p) => p.slug).filter((slug) => TOP_LEVEL_ROUTES.has(slug));
if (ROOT_ROUTE_COLLISIONS.length > 0) {
    console.warn(`[next.config] posts not redirected from the root (collide with a top-level route): ${ROOT_ROUTE_COLLISIONS.join(", ")}`);
}
const LEGACY_ROOT_POST_SLUGS = [...postsData.map((p) => p.slug), ...RESTORED_ROOT_POSTS].filter(
    (slug, i, all) => !(slug in CUT_BLOG) && !TOP_LEVEL_ROUTES.has(slug) && all.indexOf(slug) === i,
); // cut ones are handled by the CUT_BLOG rules

// Old WordPress tag archives with a clear successor; other tags → /blog.
const LEGACY_TAGS: Record<string, string> = {
    costeffective: "/reduce-crm-licensing-costs",
    "e-commerce": "/storefronts",
    integration: "/blog/category/integration-solutions",
    "salesforce-e-commerce-integration": "/storefronts",
    salesforce: "/salesforce-consulting-orlando",
    salesforceoptimization: "/blog/category/salesforce-optimization",
};

// Old one-off WordPress pages that still get traffic (GSC 404s, Oct 2026).
const LEGACY_PAGES: Record<string, string> = {
    about: "/about-ardn",
    careers: "/career",
    jobs: "/career",
    "job-dashboard": "/career",
    "case-study": "/case-studies",
    "staff-augmentation": "/salesforce-consulting-orlando",
    "storefronts-request-a-demo": "/storefronts",
    "thank-you": "/",
    "coming-soon": "/",
    "test-g": "/",
};

const nextConfig: NextConfig = {
    // Trailing slashes are stripped by the last rule in redirects() instead,
    // so legacy /slug/ URLs reach their destination in a single redirect.
    skipTrailingSlashRedirect: true,
    async headers() {
        const robots = "noindex, nofollow, noarchive, nosnippet, noimageindex, noai, noimageai";
        return [
            { source: "/proposals/:path*", headers: [{ key: "X-Robots-Tag", value: robots }, { key: "Cache-Control", value: "private, no-store" }] },
            { source: "/proposal-sites/:path*", headers: [{ key: "X-Robots-Tag", value: robots }] },
        ];
    },
    async redirects() {
        return [
            // ReplyCX retired (2026-09-28); AI Forge is the closest AI offer.
            r301(`/ai-powered-support${S}`, "/ai-forge"),
            // ── Content cut in the WordPress migration (2026-09-28) ──
            // Each cut post / case study / category goes to its mapped page
            // (src/content/redirects.json). Posts also lived at the domain
            // root on the old WordPress site, with /feed/ children.
            ...Object.entries(CUT_BLOG).map(([slug, dest]) => r301(`/{blog/}?${slug}{/feed}?${S}`, dest)),
            ...Object.entries(CUT_CASE_STUDIES).map(([slug, dest]) => r301(`/case-studies/${slug}${S}`, dest)),
            ...Object.entries(CUT_CATEGORIES).map(([slug, dest]) => r301(`/{blog/}?category/${slug}/:rest*${S}`, dest)),
            // ── Legacy WordPress URL structure (GSC 404 cleanup, Aug 2026) ──
            // Old root-level posts (kept and restored) → /blog/<slug>.
            ...LEGACY_ROOT_POST_SLUGS.map((slug) => r301(`/${slug}{/feed}?${S}`, `/blog/${slug}`)),
            ...RESTORED_ROOT_POSTS.map((slug) => r301(`/blog/${slug}/feed${S}`, `/blog/${slug}`)),
            ...Object.entries(LEGACY_PAGES).map(([slug, dest]) => r301(`/${slug}${S}`, dest)),
            // Old category archives (incl. pagination and feeds) → new blog
            // category pages. Order matters: deeper patterns first.
            r301(`/category/:slug/page/:page${S}`, "/blog/category/:slug"),
            r301(`/category/:slug/feed${S}`, "/blog/category/:slug"),
            r301(`/category/:slug${S}`, "/blog/category/:slug"),
            ...Object.entries(LEGACY_TAGS).map(([slug, dest]) => r301(`/tag/${slug}/:rest*${S}`, dest)),
            // WP taxonomies with no equivalent on the new site.
            r301(`/tag/:path*${S}`, "/blog"),
            r301(`/author/:path*${S}`, "/about-ardn"),
            // Old case-study category archives → the matching case study.
            r301(`/case-studie-categorie/airline/:rest*${S}`, "/case-studies/revolutionizing-airline-customer-service-with-salesforce-customer360-console"),
            r301(`/case-studie-categorie/timeshare/:rest*${S}`, "/case-studies/transforming-the-timeshare-industry-with-a-digitized-tour-management-platform"),
            r301(`/case-studie-categorie/:path*${S}`, "/case-studies"),
            r301(`/case-studies/business-development-planning${S}`, "/case-studies/enhancing-b2b-engagement-with-a-centralized-sales-portal"),
            r301(`/case-studies/hotel-success-story${S}`, "/ai-for-hospitality"),
            // Old WordPress Salesforce service pages → Salesforce consulting
            // & managed services (Orlando HQ page).
            r301(`/service/:path*${S}`, "/salesforce-consulting-orlando"),
            r301(`/service-category/:path*${S}`, "/salesforce-consulting-orlando"),
            // Old industry pages → the industry software we've launched.
            r301(`/industries/:path*${S}`, "/work"),
            r301(`/industries-category/:path*${S}`, "/work"),
            // One-offs.
            r301(`/about-us${S}`, "/about-ardn"),
            r301(`/get-storefronts${S}`, "/storefronts"),
            // Salesforce Payments page retired 2026-09-28 (the product is
            // Paymentus-only and no longer promoted). Old URLs land on the
            // Salesforce solutions section of Our Products.
            r301(`/salesforce-transacts${S}`, "/our-products#salesforce"),
            r301(`/salesforce-payments${S}`, "/our-products#salesforce"),
            // /ymca-management-software is a live audience page again (2026-10-14);
            // the 2026-09-28 redirect to /nonprofit-management-software was removed.
            r301(`/buyers-guide/salesforce-event-and-ticketing-platforms${S}`, "/buyers-guide/salesforce-event-ticketing-platform"),
            // Section roots that have no index page of their own.
            r301(`/buyers-guide${S}`, "/"),
            r301(`/lp${S}`, "/"),
            // www → apex (existing). Strip a trailing slash in the same hop.
            {
                source: "/:path+/",
                has: [{ type: "host", value: "www.ardncloudsolutions.com" }],
                destination: "https://ardncloudsolutions.com/:path+",
                permanent: true,
            },
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.ardncloudsolutions.com" }],
                destination: "https://ardncloudsolutions.com/:path*",
                permanent: true,
            },
            // SEO consolidation: legacy /ai-app duplicated content with the
            // canonical /ai-forge page. 301 (permanent) consolidates ranking
            // signal into the canonical URL.
            r301(`/ai-app${S}`, "/ai-forge"),
            // SEO consolidation: legacy /membership pitch page (was marked
            // noindex) overlapped intent with /membership-management.
            r301(`/membership${S}`, "/membership-management"),
            // Next's own trailing-slash redirect is switched off
            // (skipTrailingSlashRedirect) because it ran before every rule
            // above and turned old /slug/ URLs into two hops. This restores
            // it for everything else, last.
            { source: "/:path+/", destination: "/:path+", permanent: true },
        ];
    },
    images: {
        // 90 is used for full-resolution product screenshots (golf page).
        qualities: [75, 90],
    },
};

export default nextConfig;
