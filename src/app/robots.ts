import type { MetadataRoute } from "next";
import { AI_CRAWLERS, PRIVATE_PATHS } from "@/lib/aiCrawlers";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/admin/", "/_next/", ...PRIVATE_PATHS],
            },
            // AI crawlers: same as everyone, and never the proposal page or its screens.
            // proxy.ts turns them away from those paths even if they skip this file.
            {
                userAgent: AI_CRAWLERS,
                disallow: ["/api/", "/admin/", "/_next/", ...PRIVATE_PATHS],
            },
        ],
        sitemap: "https://ardncloudsolutions.com/sitemap.xml",
    };
}
