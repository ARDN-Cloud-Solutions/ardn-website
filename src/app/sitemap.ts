import type { MetadataRoute } from "next";
import { fetchAllPostSlugs } from "@/lib/content/api";
import { fetchAllCaseStudySlugs } from "@/lib/content/case-studies";
import { sitemapVideo } from "@/components/media/video-jsonld";

const BASE_URL = "https://ardncloudsolutions.com";

const staticRoutes: MetadataRoute.Sitemap = [
    {
        url: BASE_URL,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
    },
    {
        url: `${BASE_URL}/about-ardn`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Our Approach: AI-first, platform-as-a-service model (header nav).
        url: `${BASE_URL}/approach`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // One page to request pricing for every product (header "Pricing").
        url: `${BASE_URL}/pricing`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Launches hub: what Ardn has built and runs (header "Our Work").
        url: `${BASE_URL}/work`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // Ardn CRM for construction and field service.
        url: `${BASE_URL}/construction-crm`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
        images: ["dashboard", "pipeline", "quote", "service-desk", "dispatch", "reports"].map((f) => `${BASE_URL}/images/crm/${f}.webp`),
        videos: [sitemapVideo("crmLeaveHubspot"), sitemapVideo("crmGrowYourTeam")],
    },
    {
        url: `${BASE_URL}/our-products`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/storefronts`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/license-guard`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/membership-management`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Nonprofit management software (was /ymca-management-software).
        url: `${BASE_URL}/nonprofit-management-software`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
        videos: [sitemapVideo("nonprofitOverview")],
    },
    {
        url: `${BASE_URL}/ai-forge`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // Free lead-magnet calculator — high-intent landing page.
        url: `${BASE_URL}/savings-calculator`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Local-intent landing page targeting Salesforce-Orlando / -Florida
        // buyer queries. Highest priority among the new landings since the
        // Salesforce managed-services line is a core revenue stream.
        url: `${BASE_URL}/salesforce-consulting-orlando`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // South Florida service-area landing page.
        url: `${BASE_URL}/salesforce-consulting-miami`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // Tampa Bay service-area landing page.
        url: `${BASE_URL}/salesforce-consulting-tampa`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // North Florida / Jacksonville service-area landing page.
        url: `${BASE_URL}/salesforce-consulting-jacksonville`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // Local-intent landing page for AI custom development.
        url: `${BASE_URL}/ai-app-development-florida`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // Broad-money-keyword HUB (custom software / platform development).
        // Top of the solution cluster; highest priority among the new pages.
        url: `${BASE_URL}/custom-software-development`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // National hub for the core "custom AI app development company" keyword
        // family — top-of-funnel destination for AI Forge organic traffic.
        url: `${BASE_URL}/ai-app-development`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // Vertical landing page — Club Steward, golf & country clubs.
        // Images and the four product videos are listed so Google Images and
        // video search can index them against this page.
        url: `${BASE_URL}/golf-club-management-software`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
        images: [
            "corporate-dashboard", "online-join-plans", "sales-pipeline", "contracts-esign",
            "member-benefits", "tee-sheet", "golf-performance", "member-home",
        ].map((f) => `${BASE_URL}/images/golf/${f}.webp`),
        videos: [
            sitemapVideo("clubStewardOverview"),
            sitemapVideo("clubStewardEvents"),
            sitemapVideo("clubStewardPos"),
            sitemapVideo("clubStewardService"),
        ],
    },
    {
        // Vertical AI landing page — insurance ICP (claims/underwriting).
        url: `${BASE_URL}/ai-for-insurance`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Vertical AI landing page — hospitality ICP (guest service at scale).
        url: `${BASE_URL}/ai-for-hospitality`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Vertical AI landing page — membership-org ICP (retention/renewals).
        url: `${BASE_URL}/ai-for-membership-organizations`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Solution page — custom portals that cut per-seat CRM costs by
        // integration (NOT replacement). High commercial intent.
        url: `${BASE_URL}/custom-portal-development`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Wedge spoke — custom PARTNER/VENDOR/DISTRIBUTOR portals that replace
        // per-login Partner Community / PRM seats. Highest external per-seat
        // bill; distinct commercial intent from the general portal page.
        url: `${BASE_URL}/custom-partner-portal-development`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
    },
    {
        // Solution page — chapter/dues management (fraternities, sororities,
        // clubs). Niche, low-competition, high-intent.
        url: `${BASE_URL}/chapter-management-software`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Solution page — GLP-1 / telehealth ecommerce. Hot niche.
        url: `${BASE_URL}/glp-1-ecommerce`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Solution page — custom ecommerce (merch stores, subscriptions);
        // off-platform counterpart to the Salesforce-native Storefronts product.
        url: `${BASE_URL}/custom-ecommerce-development`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/ai-info-page`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/career`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/contact-us`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/buyers-guide/salesforce-commerce-appexchange-solutions`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/buyers-guide/salesforce-ecommerce-solutions`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/buyers-guide/salesforce-event-ticketing-platform`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/buyers-guide/salesforce-membership-management-tools`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/buyers-guide/salesforce-subscription-management-software`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/buyers-guide/ai-app-development`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/buyers-guide/salesforce-workflow-automation-tools`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
    },
    {
        url: `${BASE_URL}/case-studies`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/compare/salesforce-commerce-cloud-alternatives`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
    },
    {
        // New comparison/content-gap page: custom software vs. SaaS total
        // cost of ownership. Feeds the hub cluster's cost-objection FAQ.
        url: `${BASE_URL}/compare/custom-software-vs-saas`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Priority wedge content: Salesforce/HubSpot seat-cost math vs. a
        // flat-fee custom portal. Feeds the per-seat cost-reduction wedge.
        url: `${BASE_URL}/compare/salesforce-seat-cost-vs-custom-portal`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
    },
    {
        // Wedge PILLAR: "how to cut CRM licensing costs" decision framework.
        // Anchors the cost-reduction content cluster (problem-intent head term),
        // distinct from the portal product page and the seat-cost comparison.
        url: `${BASE_URL}/reduce-crm-licensing-costs`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        // Wedge comparison spoke: Salesforce Experience Cloud vs. a flat-fee
        // custom portal. Captures Experience Cloud / Community Cloud cost intent.
        url: `${BASE_URL}/compare/salesforce-experience-cloud-vs-custom-portal`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    },
    {
        // Wedge comparison spoke — HubSpot parity for the seat-cost math.
        // Captures "reduce HubSpot costs / HubSpot seat cost vs custom portal"
        // intent; mirrors the Salesforce seat-cost page for the other core CRM.
        url: `${BASE_URL}/compare/hubspot-seat-cost-vs-custom-portal`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
    },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let blogRoutes: MetadataRoute.Sitemap = [];

    try {
        const slugs = await fetchAllPostSlugs();
        blogRoutes = slugs.map((slug) => ({
            url: `${BASE_URL}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));
    } catch {
        // If WordPress API is unavailable at build time, skip blog entries
    }

    let caseStudyRoutes: MetadataRoute.Sitemap = [];

    try {
        const slugs = await fetchAllCaseStudySlugs();
        caseStudyRoutes = slugs.map((slug) => ({
            url: `${BASE_URL}/case-studies/${slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }));
    } catch {
        // If WordPress API is unavailable at build time, skip case study entries
    }

    return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes];
}
