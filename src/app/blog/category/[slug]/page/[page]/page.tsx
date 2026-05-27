import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { fetchPosts, fetchCategories, fetchCategoryBySlug } from "@/lib/wordpress/api";
import BlogListItem from "@/components/blog/BlogListItem";
import Pagination from "@/components/blog/Pagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogHero from "@/components/blog/BlogHero";

const PER_PAGE = 6;

interface PageProps {
    params: Promise<{ slug: string; page: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug, page } = await params;
    const pageNum = Number(page);
    const category = await fetchCategoryBySlug(slug);
    if (!category) return {};

    const yoast = category.yoast_head_json;
    const categoryName = category.name.replace(/<[^>]+>/g, "");
    const baseTitle = yoast?.title ?? `${categoryName} | Blog | ARDN Cloud Solutions`;
    const title = `${baseTitle} | Page ${pageNum}`;
    const description = yoast?.description || `Page ${pageNum} of posts in ${categoryName}.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/blog/category/${slug}/page/${pageNum}`,
            languages: {
                "en-US": `https://ardncloudsolutions.com/blog/category/${slug}/page/${pageNum}`,
                "x-default": `https://ardncloudsolutions.com/blog/category/${slug}/page/${pageNum}`,
            },
        },
        openGraph: { title, description, type: "website" },
    };
}

export const dynamicParams = true;

export async function generateStaticParams() {
    try {
        const categories = await fetchCategories();
        const results: { slug: string; page: string }[] = [];

        await Promise.all(
            categories.map(async (cat) => {
                const { totalPages } = await fetchPosts(1, PER_PAGE, cat.id);
                for (let i = 2; i <= totalPages; i++) {
                    results.push({ slug: cat.slug, page: String(i) });
                }
            })
        );

        return results;
    } catch {
        return [];
    }
}

export default async function CategoryPaginatedPage({ params }: PageProps) {
    const { slug, page } = await params;

    const pageNum = Number(page);
    if (!Number.isInteger(pageNum) || pageNum < 1) notFound();
    if (pageNum === 1) redirect(`/blog/category/${slug}`);

    const [category, categories, { posts: latestPosts }] = await Promise.all([
        fetchCategoryBySlug(slug),
        fetchCategories(),
        fetchPosts(1, 3),
    ]);

    if (!category) notFound();

    const { posts, totalPages } = await fetchPosts(pageNum, PER_PAGE, category.id);

    if (pageNum > totalPages && totalPages > 0) notFound();

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
                                    currentPage={pageNum}
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
