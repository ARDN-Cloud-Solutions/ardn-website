import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.ardncloudsolutions.com" }],
                destination: "https://ardncloudsolutions.com/:path*",
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
