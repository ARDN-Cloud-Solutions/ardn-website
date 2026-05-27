import type { Metadata } from "next";
import { searchPosts, fetchCategories, fetchPosts } from "@/lib/wordpress/api";
import BlogListItem from "@/components/blog/BlogListItem";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogHero from "@/components/blog/BlogHero";

interface PageProps {
    searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
    const { q } = await searchParams;
    const title = q ? `Search: "${q}" | ARDN Blog` : "Search | ARDN Blog";
    return {
        title,
        description: `Search results for "${q}" on the ARDN Cloud Solutions blog.`,
        robots: { index: true, follow: true },
    };
}

export default async function BlogSearchPage({ searchParams }: PageProps) {
    const { q } = await searchParams;
    const query = q?.trim() ?? "";

    const [posts, categories, { posts: latestPosts }] = await Promise.all([
        query ? searchPosts(query, 20) : Promise.resolve([]),
        fetchCategories(),
        fetchPosts(1, 3),
    ]);

    const title = query ? `Search: "${query}"` : "Search";

    return (
        <main className="min-h-screen bg-white pt-[70px] lg:pt-[154px]">
            <BlogHero categoryName={title} />

            <section className="container py-12 md:py-16">
                <div className="grid lg:grid-cols-[1fr_360px] gap-10 xl:gap-14 items-start">

                    {/* ─── Left: results ───────────────────────────────────── */}
                    <div className="min-w-0">
                        {!query ? (
                            <div className="py-24 text-center space-y-3">
                                <p className="text-muted text-lg">Enter a search query to find articles.</p>
                            </div>
                        ) : posts.length === 0 ? (
                            <div className="py-24 text-center space-y-3">
                                <p className="text-xl font-semibold text-heading-dark">No articles found</p>
                                <p className="text-muted">Try a different search term.</p>
                            </div>
                        ) : (
                            posts.map((post) => (
                                <BlogListItem key={post.id} post={post} />
                            ))
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
