"use client";

import { useState, useCallback } from "react";
import type { WPPost, WPTerm, FetchPostsResult } from "@/lib/wordpress/types";
import CaseStudyCard from "./CaseStudyCard";

interface CaseStudyGridSectionProps {
    initialPosts: WPPost[];
    totalPages: number;
    perPage: number;
    total: number;
    categories: WPTerm[];
}

export default function CaseStudyGridSection({
    initialPosts,
    totalPages: initialTotalPages,
    perPage,
    total,
    categories,
}: CaseStudyGridSectionProps) {
    const [posts, setPosts] = useState<WPPost[]>(initialPosts);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTotalPages, setCurrentTotalPages] = useState(initialTotalPages);
    const [activeCategory, setActiveCategory] = useState<WPTerm | null>(null);
    const [loading, setLoading] = useState(false);
    const [filtering, setFiltering] = useState(false);

    const hasMorePages = currentPage < currentTotalPages;

    const buildUrl = (page: number, term: WPTerm | null) => {
        const params = new URLSearchParams({
            page: String(page),
            per_page: String(perPage),
        });
        if (term) {
            params.set("term_id", String(term.id));
        }
        return `/api/case-studies?${params}`;
    };

    const handleCategoryChange = useCallback(
        async (term: WPTerm | null) => {
            if (filtering) return;
            setFiltering(true);
            setActiveCategory(term);
            try {
                const res = await fetch(buildUrl(1, term));
                if (!res.ok) throw new Error("Failed to fetch");
                const data: FetchPostsResult = await res.json();
                setPosts(data.posts);
                setCurrentPage(1);
                setCurrentTotalPages(data.totalPages);
            } catch (err) {
                console.error("Category filter failed:", err);
            } finally {
                setFiltering(false);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [filtering, perPage]
    );

    const loadMore = useCallback(async () => {
        if (loading || !hasMorePages) return;
        setLoading(true);
        try {
            const nextPage = currentPage + 1;
            const res = await fetch(buildUrl(nextPage, activeCategory));
            if (!res.ok) throw new Error("Failed to fetch");
            const data: FetchPostsResult = await res.json();
            setPosts((prev) => [...prev, ...data.posts]);
            setCurrentPage(nextPage);
            setCurrentTotalPages(data.totalPages);
        } catch (err) {
            console.error("Load more failed:", err);
        } finally {
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, hasMorePages, currentPage, activeCategory, perPage]);

    return (
        <div>
            {/* Category filter tabs */}
            {categories.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                    <button
                        onClick={() => handleCategoryChange(null)}
                        disabled={filtering}
                        className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
                            activeCategory === null
                                ? "bg-heading-dark text-white border-heading-dark"
                                : "bg-white text-paragraph border-gray-200 hover:border-heading-dark hover:text-heading-dark"
                        }`}
                    >
                        All Case <span className="text-xs font-semibold">{total}</span>
                    </button>

                    {categories.map((term) => (
                        <button
                            key={term.id}
                            onClick={() => handleCategoryChange(term)}
                            disabled={filtering}
                            className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed ${
                                activeCategory?.id === term.id
                                    ? "bg-heading-dark text-white border-heading-dark"
                                    : "bg-white text-paragraph border-gray-200 hover:border-heading-dark hover:text-heading-dark"
                            }`}
                        >
                            {term.name}
                            {term.count !== undefined && (
                                <> <span className="text-xs font-semibold">{term.count}</span></>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Grid */}
            {posts.length > 0 ? (
                <div className={`transition-opacity duration-200 ${filtering ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <CaseStudyCard key={post.id} post={post} />
                        ))}
                    </div>

                    {hasMorePages && (
                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={loadMore}
                                disabled={loading || filtering}
                                className="px-8 py-3 rounded-full bg-heading-dark text-white text-sm font-medium hover:bg-heading-dark/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Loading…" : "Load More Projects"}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="py-24 text-center space-y-3">
                    <p className="text-xl font-semibold text-heading-dark">
                        No case studies found
                    </p>
                    <p className="text-muted">Check back soon for new content.</p>
                </div>
            )}
        </div>
    );
}
