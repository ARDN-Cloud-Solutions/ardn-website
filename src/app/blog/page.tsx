import type { Metadata } from "next";
import { fetchPosts, fetchCategories } from "@/lib/wordpress/api";
import BlogListItem from "@/components/blog/BlogListItem";
import Pagination from "@/components/blog/Pagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogHero from "@/components/blog/BlogHero";

const PER_PAGE = 6;

export const dynamic = "force-dynamic";

// Title expanded with target keywords + OG image added.
export const metadata: Metadata = {
    title:
        "Salesforce & AI Development Blog | Ardn Cloud Solutions",
    description:
        "Expert perspectives on Salesforce consulting, AI app development, cloud architecture, and digital transformation from the Orlando-based Ardn team.",
    alternates: {
        canonical: "https://ardncloudsolutions.com/blog",
        languages: {
            "en-US": "https://ardncloudsolutions.com/blog",
            "x-default": "https://ardncloudsolutions.com/blog",
        },
    },
    openGraph: {
        title:
            "Salesforce & AI Development Blog | Ardn Cloud Solutions",
        description:
            "Expert perspectives on Salesforce consulting, AI app development, cloud architecture, and digital transformation.",
        url: "https://ardncloudsolutions.com/blog",
        siteName: "Ardn Cloud Solutions",
        images: [
            {
                url: "/images/ardn-home-hero.webp",
                width: 1200,
                height: 630,
                alt: "Ardn Cloud Solutions Blog — Salesforce, AI app development, and digital transformation perspectives",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Salesforce & AI Development Blog | Ardn Cloud Solutions",
        description:
            "Expert perspectives on Salesforce, AI app development, and digital transformation.",
        site: "@ardn_cloud_sol",
        images: ["/images/ardn-home-hero.webp"],
    },
};

export default async function BlogIndexPage() {
    const [{ posts, totalPages }, categories, { posts: latestPosts }] =
        await Promise.all([
            fetchPosts(1, PER_PAGE),
            fetchCategories(),
            fetchPosts(1, 3),
        ]);

    const hasPosts = posts.length > 0;

    // Enriched JSON-LD: Blog (Schema.org type for a blog index) + CollectionPage
    // (semantic type for a page that lists content) + BreadcrumbList. Publisher
    // resolves to the site-wide Organization via @id.
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Blog",
                "@id": "https://ardncloudsolutions.com/blog#blog",
                name: "Ardn Cloud Solutions Blog",
                url: "https://ardncloudsolutions.com/blog",
                description:
                    "Expert perspectives on Salesforce consulting, AI app development, cloud architecture, and digital transformation from the Orlando-based Ardn team.",
                publisher: {
                    "@id": "https://ardncloudsolutions.com/#organization",
                },
                inLanguage: "en-US",
            },
            {
                "@type": "CollectionPage",
                "@id": "https://ardncloudsolutions.com/blog",
                url: "https://ardncloudsolutions.com/blog",
                name: "Salesforce & AI Development Blog | Ardn Cloud Solutions",
                description:
                    "Expert perspectives on Salesforce, AI app development, and digital transformation.",
                inLanguage: "en-US",
                isPartOf: { "@id": "https://ardncloudsolutions.com/blog#blog" },
                breadcrumb: { "@id": "https://ardncloudsolutions.com/blog#breadcrumb" },
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://ardncloudsolutions.com/blog#breadcrumb",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
                    { "@type": "ListItem", position: 2, name: "Blog", item: "https://ardncloudsolutions.com/blog" },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen bg-white pt-[70px] lg:pt-[154px]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BlogHero />

            <section className="container py-12 md:py-16">
                <div className="grid lg:grid-cols-[1fr_360px] gap-10 xl:gap-14 items-start">

                    {/* ─── Left: post list ─────────────────────────────────── */}
                    <div className="min-w-0">
                        {hasPosts ? (
                            posts.map((post) => (
                                <BlogListItem key={post.id} post={post} />
                            ))
                        ) : (
                            <div className="py-24 text-center space-y-3">
                                <p className="text-xl font-semibold text-heading-dark">No articles found</p>
                                <p className="text-muted">Check back soon for new content.</p>
                            </div>
                        )}

                        {totalPages > 1 && (
                            <div className="mt-10 md:mt-12">
                                <Pagination
                                    currentPage={1}
                                    totalPages={totalPages}
                                    basePath="/blog/page"
                                />
                            </div>
                        )}
                    </div>

                    {/* ─── Right: sidebar ──────────────────────────────────── */}
                    <BlogSidebar
                        categories={categories}
                        latestPosts={latestPosts}
                    />
                </div>
            </section>
        </main>
    );
}
