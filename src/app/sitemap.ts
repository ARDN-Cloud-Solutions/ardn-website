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
        // Local-intent landing page for AI custom development.
        url: `${BASE_URL}/ai-app-development-florida`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
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
