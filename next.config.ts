import type { NextConfig } from "next";

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
];

const nextConfig: NextConfig = {
    async redirects() {
        return [
            // ── Legacy WordPress URL structure (GSC 404 cleanup, Aug 2026) ──
            // Old root-level posts → /blog/<slug>. Also catches their /feed/
            // children via the :suffix(feed) segment.
            ...LEGACY_ROOT_POST_SLUGS.map((slug) => ({
                source: `/${slug}`,
                destination: `/blog/${slug}`,
                permanent: true,
            })),
            ...LEGACY_ROOT_POST_SLUGS.map((slug) => ({
                source: `/${slug}/feed`,
                destination: `/blog/${slug}`,
                permanent: true,
            })),
            // Old category archives (incl. pagination and feeds) → new blog
            // category pages. Order matters: deeper patterns first.
            {
                source: "/category/:slug/page/:page",
                destination: "/blog/category/:slug",
                permanent: true,
            },
            {
                source: "/category/:slug/feed",
                destination: "/blog/category/:slug",
                permanent: true,
            },
            {
                source: "/category/:slug",
                destination: "/blog/category/:slug",
                permanent: true,
            },
            // WP taxonomies with no equivalent on the new site → blog index.
            { source: "/tag/:path*", destination: "/blog", permanent: true },
            { source: "/author/:path*", destination: "/blog", permanent: true },
            // Old case-study category archives and removed case studies → hub.
            { source: "/case-studie-categorie/:path*", destination: "/case-studies", permanent: true },
            { source: "/case-studies/business-development-planning", destination: "/case-studies", permanent: true },
            { source: "/case-studies/hotel-success-story", destination: "/case-studies", permanent: true },
            // Old service/industry pages with no successor → home.
            { source: "/service/:path*", destination: "/", permanent: true },
            { source: "/service", destination: "/", permanent: true },
            { source: "/industries/:path*", destination: "/", permanent: true },
            { source: "/industries-category/:path*", destination: "/", permanent: true },
            // One-offs.
            { source: "/about-us", destination: "/about-ardn", permanent: true },
            { source: "/get-storefronts", destination: "/storefronts", permanent: true },
            { source: "/salesforce-transacts", destination: "/salesforce-payments", permanent: true },
            { source: "/salesforce-ecommerce-integration-boost-sal", destination: "/storefronts", permanent: true },
            {
                source: "/buyers-guide/salesforce-event-and-ticketing-platforms",
                destination: "/buyers-guide/salesforce-event-ticketing-platform",
                permanent: true,
            },
            // Section roots that have no index page of their own.
            { source: "/buyers-guide", destination: "/", permanent: true },
            { source: "/compare", destination: "/", permanent: true },
            { source: "/lp", destination: "/", permanent: true },
            // www → apex (existing).
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.ardncloudsolutions.com" }],
                destination: "https://ardncloudsolutions.com/:path*",
                permanent: true,
            },
            // SEO consolidation: legacy /ai-app duplicated content with the
            // canonical /ai-forge page. 301 (permanent) consolidates ranking
            // signal into the canonical URL.
            {
                source: "/ai-app",
                destination: "/ai-forge",
                permanent: true,
            },
            // SEO consolidation: legacy /membership pitch page (was marked
            // noindex) overlapped intent with /membership-management.
            {
                source: "/membership",
                destination: "/membership-management",
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "darkslateblue-cat-374844.hostingersite.com",
                pathname: "/wp-content/uploads/**",
            },
            // Fallback for any subdomain of hostingersite.com
            {
                protocol: "https",
                hostname: "*.hostingersite.com",
                pathname: "/wp-content/uploads/**",
            },
            {
                protocol: "https",
                hostname: "cms.ardncloudsolutions.com",
                pathname: "/wp-content/uploads/**",
            },
        ],
    },
};

export default nextConfig;
