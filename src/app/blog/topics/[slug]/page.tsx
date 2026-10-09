import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchCategories, fetchPosts } from "@/lib/content/api";
import { getTopicHub, hubPostCount, TOPIC_SLUGS } from "@/lib/content/topics";
import BlogHero from "@/components/blog/BlogHero";
import BlogSidebar from "@/components/blog/BlogSidebar";

// Topic hubs: one crawlable page that links every post on a topic, grouped
// for readers. Strong internal links help search engines find and recrawl
// the restored posts quickly. Groups come from rules in lib/content/topics.

const BASE = "https://ardncloudsolutions.com";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
    return TOPIC_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const hub = getTopicHub(slug);
    if (!hub) return {};
    const url = `${BASE}/blog/topics/${slug}`;
    return {
        title: hub.metaTitle,
        description: hub.description,
        robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
        alternates: {
            canonical: url,
            languages: { "en-US": url, "x-default": url },
        },
        openGraph: {
            title: hub.metaTitle,
            description: hub.description,
            url,
            siteName: "Ardn Cloud Solutions",
            images: [{ url: "/images/ardn-share.jpg", width: 1200, height: 630, alt: hub.name }],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: hub.metaTitle,
            description: hub.description,
            site: "@ardn_cloud_sol",
            images: ["/images/ardn-share.jpg"],
        },
    };
}

const groupId = (heading: string) =>
    heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default async function TopicHubPage({ params }: PageProps) {
    const { slug } = await params;
    const hub = getTopicHub(slug);
    if (!hub) notFound();

    const [categories, { posts: latestPosts }] = await Promise.all([fetchCategories(), fetchPosts(1, 3)]);

    const url = `${BASE}/blog/topics/${slug}`;
    const all = hub.groups.flatMap((g) => g.posts);
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": url,
                url,
                name: hub.name,
                description: hub.description,
                inLanguage: "en-US",
                isPartOf: { "@id": `${BASE}/blog#blog` },
                breadcrumb: { "@id": `${url}#breadcrumb` },
                mainEntity: { "@id": `${url}#list` },
            },
            {
                "@type": "ItemList",
                "@id": `${url}#list`,
                name: hub.name,
                numberOfItems: all.length,
                itemListElement: all.map((p, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    url: `${BASE}/blog/${p.slug}`,
                    name: p.title,
                })),
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
                    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
                    { "@type": "ListItem", position: 3, name: hub.name, item: url },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen bg-white pt-[70px] lg:pt-[154px]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <BlogHero categoryName={hub.name} />

            <section className="container py-12 md:py-16">
                <div className="grid lg:grid-cols-[1fr_360px] gap-10 xl:gap-14 items-start">
                    <div className="min-w-0">
                        <p className="text-paragraph text-lg leading-relaxed mb-6">{hub.intro}</p>
                        <p className="text-sm text-muted mb-8">{hubPostCount(hub)} articles</p>

                        {hub.groups.length > 1 && (
                            <nav aria-label="Sections" className="flex flex-wrap gap-2 mb-10">
                                {hub.groups.map((g) => (
                                    <a
                                        key={g.heading}
                                        href={`#${groupId(g.heading)}`}
                                        className="text-xs font-medium bg-primary-light text-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                                    >
                                        {g.heading} ({g.posts.length})
                                    </a>
                                ))}
                            </nav>
                        )}

                        {hub.groups.map((g) => (
                            <section key={g.heading} id={groupId(g.heading)} className="mb-10 scroll-mt-40">
                                <h2 className="text-xl md:text-2xl font-bold text-heading-dark leading-snug mb-4 pb-3 border-b border-gray-200">
                                    {g.heading}
                                </h2>
                                <ul className="space-y-4">
                                    {g.posts.map((p) => (
                                        <li key={p.slug}>
                                            <Link
                                                href={`/blog/${p.slug}`}
                                                className="font-semibold text-heading-dark hover:text-primary transition-colors"
                                            >
                                                {p.title}
                                            </Link>
                                            {p.excerpt && <p className="text-sm text-paragraph leading-relaxed mt-1">{p.excerpt}</p>}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}

                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                                ← View all articles
                            </Link>
                        </div>
                    </div>

                    <BlogSidebar categories={categories} latestPosts={latestPosts} />
                </div>
            </section>
        </main>
    );
}
