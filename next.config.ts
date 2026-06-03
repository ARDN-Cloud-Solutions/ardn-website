import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
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
