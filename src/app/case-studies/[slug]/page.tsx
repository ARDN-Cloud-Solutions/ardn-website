import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import {
    fetchCaseStudyBySlug,
    fetchAllCaseStudySlugs,
    fetchCaseStudies,
} from "@/lib/wordpress/case-studies";
import {
    getExcerptText,
    getFeaturedImageUrl,
    getFeaturedImageAlt,
    formatDate,
} from "@/lib/wordpress/utils";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudySidebar from "@/components/case-studies/CaseStudySidebar";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await fetchCaseStudyBySlug(slug);

    if (!post) return { title: "Case Study Not Found" };

    const yoast = post.yoast_head_json;
    const titleText = post.title.rendered.replace(/<[^>]+>/g, "");
    const fallbackDescription = getExcerptText(post.content.rendered, 160);
    const fallbackImage = getFeaturedImageUrl(post);

    const metaTitle = yoast?.title ?? `${titleText} | ARDN Case Studies`;
    const metaDescription = yoast?.description ?? fallbackDescription;
    const ogTitle = yoast?.og_title ?? titleText;
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
            canonical: `/case-studies/${slug}`,
            languages: {
                "en-US": `https://ardncloudsolutions.com/case-studies/${slug}`,
                "x-default": `https://ardncloudsolutions.com/case-studies/${slug}`,
            },
        },
        openGraph: {
            title: ogTitle,
            description: ogDescription,
            type: "article",
            url: yoast?.og_url ?? `https://ardncloudsolutions.com/case-studies/${slug}`,
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
        const slugs = await fetchAllCaseStudySlugs();
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

export default async function CaseStudyDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await fetchCaseStudyBySlug(slug);

    if (!post) notFound();

    const featuredImage = getFeaturedImageUrl(post);
    const imageAlt = getFeaturedImageAlt(post);
    const readTime = estimateReadTime(post.content.rendered);
    const titleText = post.title.rendered.replace(/<[^>]+>/g, "");

    const { posts: allLatest } = await fetchCaseStudies(1, 20);
    const latestPosts = allLatest.filter((p) => (p["case-study-categories"]?.length ?? 0) > 0).slice(0, 10);

    const pageUrl = `https://ardncloudsolutions.com/case-studies/${slug}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": titleText,
        "datePublished": post.date,
        ...(featuredImage && { "image": featuredImage }),
        "mainEntityOfPage": pageUrl,
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://ardncloudsolutions.com/case-studies" },
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
            <CaseStudyHero title={titleText} />

            <section className="container py-12 md:py-16">
                <div className="grid lg:grid-cols-[1fr_360px] gap-10 xl:gap-14 items-start">
                    {/* ─── Left: case study content ────────────────────────── */}
                    <article className="min-w-0">
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

                        {/* Back link */}
                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                            >
                                ← View all case studies
                            </Link>
                        </div>
                    </article>

                    {/* ─── Right: sidebar ──────────────────────────────────── */}
                    <CaseStudySidebar latestCaseStudies={latestPosts} />
                </div>
            </section>
        </main>
    );
}
