import type { FetchPostsResult, WPCategory, WPPost } from "./types";

const WP_BASE = process.env.NEXT_PUBLIC_WP_API_URL;
const WP_API = WP_BASE ? `${WP_BASE}/wp-json` : null;

function getApiBase(): string {
    if (!WP_API) throw new Error("NEXT_PUBLIC_WP_API_URL is not set");
    return WP_API;
}

// NOTE: _fields is intentionally NOT used on any endpoint that needs _embed/featured images.
// WordPress REST API strips _embedded data entirely when _fields is present — this is a
// known WP Core limitation. Without _fields the payload is larger but featured images work.

// ─── Posts ────────────────────────────────────────────────────────────────────

/**
 * Fetch a paginated list of posts, optionally filtered by category.
 * Reads pagination metadata from response headers (X-WP-TotalPages, X-WP-Total).
 */
export async function fetchPosts(
    page = 1,
    perPage = 9,
    categoryId?: number
): Promise<FetchPostsResult> {
    try {
        const params = new URLSearchParams({
            page: String(page),
            per_page: String(perPage),
        });

        if (categoryId) params.set("categories", String(categoryId));

        const res = await fetch(`${getApiBase()}/wp/v2/posts?${params}&_embed`, {
            next: { revalidate: 60 },
        });

        if (res.status === 400) return { posts: [], totalPages: 0, total: 0 };
        if (!res.ok) return { posts: [], totalPages: 0, total: 0 };

        const posts: WPPost[] = await res.json();
        const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
        const total = Number(res.headers.get("X-WP-Total") ?? posts.length);

        return { posts, totalPages, total };
    } catch {
        return { posts: [], totalPages: 0, total: 0 };
    }
}

/**
 * Fetch a single post by slug (used on the [slug] detail page).
 */
export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
    try {
        const params = new URLSearchParams({ slug });

        const res = await fetch(`${getApiBase()}/wp/v2/posts?${params}&_embed`, {
            next: { revalidate: 60 },
        });

        if (!res.ok) return null;

        const posts: WPPost[] = await res.json();
        return posts[0] ?? null;
    } catch {
        return null;
    }
}

/**
 * Fetch all post slugs across all pages (used for generateStaticParams).
 */
export async function fetchAllPostSlugs(): Promise<string[]> {
    try {
        let page = 1;
        const slugs: string[] = [];

        while (true) {
            const params = new URLSearchParams({
                page: String(page),
                per_page: "100",
                _fields: "slug",
            });

            const res = await fetch(`${getApiBase()}/wp/v2/posts?${params}`, {
                next: { revalidate: 3600 },
            });

            if (!res.ok) break;

            const posts: { slug: string }[] = await res.json();
            if (!posts.length) break;

            slugs.push(...posts.map((p) => p.slug));

            const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? 1);
            if (page >= totalPages) break;
            page++;
        }

        return slugs;
    } catch {
        return [];
    }
}

/**
 * Search posts by keyword. Not cached (no-store) since queries are dynamic.
 */
export async function searchPosts(query: string, perPage = 20): Promise<WPPost[]> {
    try {
        const params = new URLSearchParams({
            search: query,
            per_page: String(perPage),
        });

        const res = await fetch(`${getApiBase()}/wp/v2/posts?${params}&_embed`, {
            cache: "no-store",
        });

        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

// ─── Categories ───────────────────────────────────────────────────────────────

/**
 * Fetch all non-empty categories. Cached for 5 minutes.
 * Note: _fields is intentionally omitted — WordPress taxonomy endpoints
 * can return only 1 result when _fields is present (known WP REST API quirk).
 */
export async function fetchCategories(): Promise<WPCategory[]> {
    try {
        const res = await fetch(
            `${getApiBase()}/wp/v2/categories?per_page=100&hide_empty=true`,
            { next: { revalidate: 300 } }
        );

        if (!res.ok) return [];
        return res.json();
    } catch {
        return [];
    }
}

/**
 * Fetch a single category by slug.
 */
export async function fetchCategoryBySlug(slug: string): Promise<WPCategory | null> {
    try {
        const res = await fetch(
            `${getApiBase()}/wp/v2/categories?slug=${encodeURIComponent(slug)}&hide_empty=true`,
            { next: { revalidate: 300 } }
        );

        if (!res.ok) return null;
        const data: WPCategory[] = await res.json();
        return data[0] ?? null;
    } catch {
        return null;
    }
}

