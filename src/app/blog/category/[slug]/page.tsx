import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { fetchPosts, fetchCategories, fetchCategoryBySlug } from "@/lib/wordpress/api";
import BlogListItem from "@/components/blog/BlogListItem";
import Pagination from "@/components/blog/Pagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogHero from "@/components/blog/BlogHero";

const PER_PAGE = 6;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = await fetchCategoryBySlug(slug);
    if (!category) return {};

    const yoast = category.yoast_head_json;
    const categoryName = category.name.replace(/<[^>]+>/g, "");
    const fallbackDescription = category.description || `Browse all posts in ${categoryName}.`;

    const metaTitle = yoast?.title ?? `${categoryName} | Blog | ARDN Cloud Solutions`;
    const metaDescription = yoast?.description ?? fallbackDescription;
    const ogTitle = yoast?.og_title ?? categoryName;
    const ogDescription = yoast?.og_description ?? fallbackDescription;

    const ogImages = yoast?.og_image?.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: ogTitle,
        type: img.type,
    }));

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
            canonical: `/blog/category/${slug}`,
            languages: {
                "en-US": `https://ardncloudsolutions.com/blog/category/${slug}`,
                "x-default": `https://ardncloudsolutions.com/blog/category/${slug}`,
            },
        },
        openGraph: {
            title: ogTitle,
            description: ogDescription,
            type: "website",
            url: yoast?.og_url ?? `https://ardncloudsolutions.com/blog/category/${slug}`,
            siteName: yoast?.og_site_name,
            locale: yoast?.og_locale ?? "en_US",
            ...(ogImages && { images: ogImages }),
        },
        twitter: {
            card: (yoast?.twitter_card as "summary_large_image" | "summary" | "player" | "app") ?? "summary_large_image",
            title: ogTitle,
            description: ogDescription,
            ...(ogImages && { images: ogImages.map((img) => img.url) }),
        },
    };
}

export const dynamicParams = true;

export async function generateStaticParams() {
    try {
        const categories = await fetchCategories();
        return categories.map((cat) => ({ slug: cat.slug }));
    } catch {
        return [];
    }
}

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;

    const [category, categories, { posts: latestPosts }] = await Promise.all([
        fetchCategoryBySlug(slug),
        fetchCategories(),
        fetchPosts(1, 3),
    ]);

    if (!category) notFound();

    const { posts, totalPages } = await fetchPosts(1, PER_PAGE, category.id);
    const hasPosts = posts.length > 0;

    return (
        <main className="min-h-screen bg-white pt-[70px] lg:pt-[154px]">
            <BlogHero categoryName={category.name} />

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
                                <p className="text-muted">There are no posts in this category yet.</p>
                                <Link
                                    href="/blog"
                                    className="mt-2 inline-block text-sm text-primary hover:underline"
                                >
                                    View all articles
                                </Link>
                            </div>
                        )}

                        {totalPages > 1 && (
                            <div className="mt-10 md:mt-12">
                                <Pagination
                                    currentPage={1}
                                    totalPages={totalPages}
                                    basePath="/blog/page"
                                    categorySlug={slug}
                                />
                            </div>
                        )}
                    </div>

                    {/* ─── Right: sidebar ──────────────────────────────────── */}
                    <BlogSidebar
                        categories={categories}
                        latestPosts={latestPosts}
                        activeCategorySlug={slug}
                    />
                </div>
            </section>
        </main>
    );
}
