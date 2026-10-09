import type { NextConfig } from "next";
import cutContent from "./src/content/redirects.json";

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

// Blog posts that lived at the domain root on the old WordPress site and now
// live under /blog/ on the headless rebuild. Each target was verified live
// (HTTP 200) before being added. Source of the list: GSC "Not found (404)"
// report, Aug 2026.
const LEGACY_ROOT_POST_SLUGS = [
    "5-common-salesforce-billing-challenges-and-how-to-solve-them",
    "5-cost-effective-ways-to-optimize-salesforce",
    "5-salesforce-reports-every-admin-should-build-with-license-guard-data",
    "7-compelling-reasons-to-choose-storefronts-for-building-your-salesforce-e-commerce-website",
    "beyond-the-dashboard-what-your-salesforce-user-activity-report-isnt-telling-you",
    "customize-license-deactivation-in-salesforce-exemptions-flexibility",
    "ditch-the-integration-maze-how-storefronts-simplifies-e-commerce-operations",
    "edtech-has-evolved-has-your-salesforce-caught-up",
    "enhancing-financial-visibility-through-integrated-salesforce-financial-reporting",
    "from-chaos-to-clarity-streamlining-e-commerce-operations-with-storefronts",
    "from-product-showcase-to-seamless-checkout-4-proven-ways-to-enhance-customer-experience-on-your-salesforce-ecommerce-platform",
    "hipaa-to-handoff-delivering-compliant-seamless-healthcare-commerce-experiences-in-2025-with-storefronts",
    "how-to-reduce-e-commerce-operational-costs-without-compromising-growth",
    "how-to-run-e-commerce-inside-salesforce-in-72-hours",
    "how-to-stop-wasting-money-on-unused-salesforce-licenses",
    "license-guard-is-now-on-appexchange-and-its-absolutely-free-forever",
    "license-sprawl-is-real-how-to-detect-and-stop-it-with-license-guard",
    "leveraging-storefronts-for-nonprofit-e-commerce-initiatives-on-salesforce",
    "migrating-from-woocommerce-why-storefronts-is-the-better-choice-for-salesforce-users",
    "multi-storefront-one-brain-how-global-brands-are-managing-diverse-markets-with-salesforce-in-2025",
    "reducing-salesforce-payment-processing-costs-for-high-volume-businesses-strategies-for-significant-savings",
    "salesforce-winter-26-release-the-features-you-should-know",
    "stop-leaving-money-on-the-table-how-storefronts-turns-abandoned-carts-into-revenue-with-salesforce-automation",
    "streamlining-checkout-processes-how-storefronts-pci-compliant-3-step-checkout-enhances-security-and-user-experience",
    "subscriptions-services-in-ecommerce-how-salesforce-streamlines-it-all",
    "the-best-native-salesforce-ecommerce-solutions",
    "the-hidden-costs-of-using-non-native-ecommerce-platforms-with-salesforce",
    "the-problem-with-traditional-web-store-builders-and-what-to-do-instead",
    "the-roi-of-working-with-a-salesforce-certified-consultant-unlocking-business-potential",
    "the-true-cost-of-disconnected-ecommerce-and-how-storefronts-fixes-it",
    "transforming-salesforce-efficiency-ardn-cloud-solutions",
    "unlocking-luxury-and-high-end-retail-potential-creating-exclusive-experiences-with-salesforce-ecommerce-platform",
    "unlocking-the-power-of-salesforce-e-commerce-integration-a-complete-guide",
    "why-e-commerce-founders-should-consider-native-salesforce-integration",
    "why-on-demand-salesforce-talent-is-faster-than-traditional-hiring",
    "why-the-salesforce-e-commerce-platform-is-the-smartest-choice-for-modern-brands-in-2025",
    "license-guard-eliminate-license-waste-and-maximize-salesforce-roi",
    ...RESTORED_ROOT_POSTS,
].filter((slug, i, all) => !(slug in CUT_BLOG) && all.indexOf(slug) === i); // cut ones are handled by the CUT_BLOG rules

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
            // YMCA page renamed to nonprofit management software, 2026-09-28.
            r301(`/ymca-management-software${S}`, "/nonprofit-management-software"),
            r301(`/buyers-guide/salesforce-event-and-ticketing-platforms${S}`, "/buyers-guide/salesforce-event-ticketing-platform"),
            // Section roots that have no index page of their own.
            r301(`/buyers-guide${S}`, "/"),
            r301(`/compare${S}`, "/"),
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
