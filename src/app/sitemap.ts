import type { MetadataRoute } from "next";
import { fetchAllPostSlugs } from "@/lib/wordpress/api";
import { fetchAllCaseStudySlugs } from "@/lib/wordpress/case-studies";

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
        url: `${BASE_URL}/salesforce-payments`,
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
        url: `${BASE_URL}/ai-forge`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/ai-powered-support`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
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
        // National hub for the core "custom AI app development company" keyword
        // family — top-of-funnel destination for AI Forge organic traffic.
        url: `${BASE_URL}/ai-app-development`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
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
