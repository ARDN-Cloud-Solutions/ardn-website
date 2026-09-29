import type { FetchPostsResult, WPCategory, WPPost } from "./types";
import postsData from "@/content/posts.json";
import categoriesData from "@/content/categories.json";

// Blog content lives in the repo (src/content/*.json), migrated off WordPress
// on 2026-09-28 by scripts/wp-export/process.py. The shapes still follow the
// WP REST API so the blog components didn't need to change. Functions stay
// async so callers are unaffected.

const POSTS = postsData as unknown as WPPost[];
const CATEGORIES = categoriesData as unknown as WPCategory[];

function paginate(list: WPPost[], page: number, perPage: number): FetchPostsResult {
    const total = list.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const start = (page - 1) * perPage;
    return { posts: list.slice(start, start + perPage), totalPages: total ? totalPages : 0, total };
}

// ─── Posts ────────────────────────────────────────────────────────────────────

/** Paginated posts, newest first, optionally filtered by category. */
export async function fetchPosts(page = 1, perPage = 9, categoryId?: number): Promise<FetchPostsResult> {
    const list = categoryId ? POSTS.filter((p) => p.categories.includes(categoryId)) : POSTS;
    return paginate(list, page, perPage);
}

/** A single post by slug (used on the [slug] detail page). */
export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
    return POSTS.find((p) => p.slug === slug) ?? null;
}

/** All post slugs (generateStaticParams + sitemap). */
export async function fetchAllPostSlugs(): Promise<string[]> {
    return POSTS.map((p) => p.slug);
}

/** Keyword search over title, excerpt and body. */
export async function searchPosts(query: string, perPage = 20): Promise<WPPost[]> {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const text = (p: WPPost) =>
        `${p.title.rendered} ${p.excerpt.rendered} ${p.content.rendered}`.replace(/<[^>]+>/g, " ").toLowerCase();
    return POSTS.filter((p) => {
        const t = text(p);
        return terms.every((w) => t.includes(w));
    }).slice(0, perPage);
}

// ─── Categories ───────────────────────────────────────────────────────────────

/** All non-empty categories. */
export async function fetchCategories(): Promise<WPCategory[]> {
    return CATEGORIES;
}

/** A single category by slug. */
export async function fetchCategoryBySlug(slug: string): Promise<WPCategory | null> {
    return CATEGORIES.find((c) => c.slug === slug) ?? null;
}
