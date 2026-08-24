import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { fetchPostBySlug, fetchAllPostSlugs, fetchCategories, fetchPosts } from "@/lib/wordpress/api";
import {
    cleanSeoTitle,
    getExcerptText,
    getFeaturedImageUrl,
    getFeaturedImageAlt,
    getPostCategories,
    formatDate,
} from "@/lib/wordpress/utils";
import BlogHero from "@/components/blog/BlogHero";
import BlogSidebar from "@/components/blog/BlogSidebar";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await fetchPostBySlug(slug);

    if (!post) return { title: "Post Not Found" };

    const yoast = post.yoast_head_json;
    const titleText = post.title.rendered.replace(/<[^>]+>/g, "");
    const fallbackDescription = getExcerptText(post.excerpt.rendered, 160);
    const fallbackImage = getFeaturedImageUrl(post);

    const metaTitle = cleanSeoTitle(yoast?.title) ?? `${titleText} | ARDN Blog`;
    const metaDescription = yoast?.description ?? fallbackDescription;
    const ogTitle = cleanSeoTitle(yoast?.og_title) ?? titleText;
    const ogDescription = yoast?.og_description ?? fallbackDescription;

    const ogImages =
        yoast?.og_image?.map((img) => ({
            url: img.url,
            width: img.width,
            height: img.height,
            alt: ogTitle,
            type: img.type,
        })) ??
        (fallbackImage ? [{ url: fallbackImage, width: 1200, height: 630, alt: titleText }] : []);


    return {
        title: metaTitle,
        description: metaDescription,
        robots: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
        alternates: {
            canonical: `/blog/${slug}`,
            languages: {
                "en-US": `https://ardncloudsolutions.com/blog/${slug}`,
                "x-default": `https://ardncloudsolutions.com/blog/${slug}`,
            },
        },
        openGraph: {
            title: ogTitle,
            description: ogDescription,
            type: "article",
            url: yoast?.og_url ?? `https://ardncloudsolutions.com/blog/${slug}`,
            siteName: yoast?.og_site_name,
            locale: yoast?.og_locale ?? "en_US",
            publishedTime: post.date,
            modifiedTime: yoast?.article_modified_time ?? post.modified,
            images: ogImages,
        },
        twitter: {
            card: (yoast?.twitter_card as "summary_large_image" | "summary" | "player" | "app") ?? "summary_large_image",
            title: ogTitle,
            description: ogDescription,
            images: ogImages.map((img) => img.url),
        },
    };
}

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
    try {
        const slugs = await fetchAllPostSlugs();
        return slugs.map((slug) => ({ slug }));
    } catch {
        return [];
    }
}

// ─── Estimated read time ─────────────────────────────────────────────────────

function estimateReadTime(html: string): number {
    const words = html.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await fetchPostBySlug(slug);

    if (!post) notFound();

    const featuredImage = getFeaturedImageUrl(post);
    const imageAlt = getFeaturedImageAlt(post);
    const categories = getPostCategories(post);
    const readTime = estimateReadTime(post.content.rendered);
    const firstCategory = categories[0];

    const [sidebarCategories, { posts: latestPosts }] = await Promise.all([
        fetchCategories(),
        fetchPosts(1, 3),
    ]);

    const titleText = post.title.rendered.replace(/<[^>]+>/g, "");
    const pageUrl = `https://ardncloudsolutions.com/blog/${slug}`;

    let faqSchema: object | null = null;
    if (post.meta?.faq_schema) {
        try {
            faqSchema = JSON.parse(post.meta.faq_schema);
        } catch {
            faqSchema = null;
        }
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": titleText,
        "name": titleText,
        "datePublished": post.date,
        "url": pageUrl,
        ...(featuredImage && { "image": featuredImage }),
        ...(firstCategory && { "articleSection": firstCategory.name }),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ardncloudsolutions.com/blog" },
            { "@type": "ListItem", "position": 3, "name": titleText, "item": pageUrl },
        ],
    };

    return (
        <main className="min-h-screen bg-white pt-[70px] lg:pt-[154px]">
            {/* JSON-LD structured data from Yoast */}
            {post.yoast_head_json?.schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(post.yoast_head_json.schema),
                    }}
                />
            )}
            {/* Article schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            {/* BreadcrumbList schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* FAQPage schema (only if present in post meta) */}
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <BlogHero
                categoryName={firstCategory?.name}
                title={post.title.rendered.replace(/<[^>]+>/g, "")}
            />

            <section className="container py-12 md:py-16">
                <div className="grid lg:grid-cols-[1fr_360px] gap-10 xl:gap-14 items-start">

                    {/* ─── Left: post content ──────────────────────────────── */}
                    <article className="min-w-0">
                        {/* Category pills */}
                        {categories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-5">
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.id}
                                        href={`/blog/category/${cat.slug}`}
                                        className="inline-flex items-center gap-1 text-xs font-medium bg-primary-light text-primary px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h2
                            className="text-3xl md:text-4xl font-semibold text-heading-dark leading-tight mb-5"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />

                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-8">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 shrink-0" />
                                <time dateTime={post.date}>{formatDate(post.date)}</time>
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 shrink-0" />
                                {readTime} min read
                            </span>
                        </div>

                        {/* Featured image */}
                        {featuredImage && (
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md mb-8">
                                <Image
                                    src={featuredImage}
                                    alt={imageAlt}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                />
                            </div>
                        )}

                        {/* Post content */}
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />

                        {/* Related-solutions CTA — funnels equity from the
                            blog corpus into the per-seat cost-reduction wedge.
                            Every post (many on CRM cost / per-seat / verticals)
                            previously linked only to /blog and other posts. */}
                        <aside className="mt-12 rounded-2xl border border-primary/15 bg-primary-light/60 p-6 md:p-8">
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                                Paying per seat for light CRM users?
                            </p>
                            <h3 className="text-xl md:text-2xl font-semibold text-heading-dark mb-3">
                                Keep your CRM. Cut the bill.
                            </h3>
                            <p className="text-muted text-[15px] leading-relaxed mb-5">
                                ARDN builds custom portals that move light users off per-seat
                                licenses onto one flat monthly fee — integrated with your
                                existing CRM, no rip-and-replace. See where the savings are.
                            </p>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
                                <Link href="/reduce-crm-licensing-costs" className="text-primary hover:underline">
                                    How to cut CRM licensing costs →
                                </Link>
                                <Link href="/savings-calculator" className="text-primary hover:underline">
                                    Calculate your per-seat savings →
                                </Link>
                                <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="text-primary hover:underline">
                                    Salesforce seat-cost vs. a custom portal →
                                </Link>
                                <Link href="/custom-portal-development" className="text-primary hover:underline">
                                    Replace per-seat licenses with a custom portal →
                                </Link>
                            </div>
                        </aside>

                        {/* Back link */}
                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                            >
                                ← View all articles
                            </Link>
                        </div>
                    </article>

                    {/* ─── Right: sidebar ──────────────────────────────────── */}
                    <BlogSidebar
                        categories={sidebarCategories}
                        latestPosts={latestPosts}
                        activeCategorySlug={firstCategory?.slug}
                    />
                </div>
            </section>
        </main>
    );
}
