import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { fetchPosts, fetchCategories } from "@/lib/wordpress/api";
import BlogListItem from "@/components/blog/BlogListItem";
import Pagination from "@/components/blog/Pagination";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogHero from "@/components/blog/BlogHero";

const PER_PAGE = 6;

interface PageProps {
    params: Promise<{ page: string }>;
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { page } = await params;
    const pageNum = Number(page);
    const siteUrl = process.env.NEXT_PUBLIC_WP_API_URL ?? "";

    const title =
        pageNum === 1
            ? "Blog & Insights | Ardn Cloud Solutions"
            : `Blog – Page ${pageNum} | Ardn Cloud Solutions`;

    const description =
        "Expert perspectives on Salesforce, cloud architecture, and digital transformation from the Ardn team.";

    // Page 1 renders the same posts as /blog, so it canonicalizes to /blog to
    // avoid a duplicate-content pair. Pages 2+ self-canonicalize.
    const canonicalPath = pageNum === 1 ? "/blog" : `/blog/page/${pageNum}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalPath,
            languages: {
                "en-US": `https://ardncloudsolutions.com${canonicalPath}`,
                "x-default": `https://ardncloudsolutions.com${canonicalPath}`,
            },
        },
        openGraph: {
            title,
            description,
            type: "website",
            url: `${siteUrl}/blog/page/${pageNum}`,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
    try {
        const { totalPages } = await fetchPosts(1, PER_PAGE);
        return Array.from({ length: totalPages }, (_, i) => ({ page: String(i + 1) }));
    } catch {
        return [{ page: "1" }];
    }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogListPage({ params }: PageProps) {
    const { page } = await params;

    const pageNum = Number(page);
    if (!Number.isInteger(pageNum) || pageNum < 1) notFound();
    if (pageNum === 1) redirect("/blog");

    const [{ posts, totalPages }, categories, { posts: latestPosts }] =
        await Promise.all([
            fetchPosts(pageNum, PER_PAGE),
            fetchCategories(),
            fetchPosts(1, 3),
        ]);

    if (pageNum > totalPages && totalPages > 0) notFound();

    const hasPosts = posts.length > 0;

    return (
        <main className="min-h-screen bg-white pt-[70px] lg:pt-[154px]">
            {/* ── Hero Banner ─────────────────────────────────────────────────── */}
            <BlogHero />

            {/* ── Main content + Sidebar ──────────────────────────────────────── */}
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

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-10 md:mt-12">
                                <Pagination
                                    currentPage={pageNum}
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
