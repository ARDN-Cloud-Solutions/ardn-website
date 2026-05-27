import type { WPPost, WPTerm, FetchPostsResult } from "./types";

const WP_BASE = process.env.NEXT_PUBLIC_WP_API_URL;
const WP_API = WP_BASE ? `${WP_BASE}/wp-json` : null;

function getApiBase(): string {
    if (!WP_API) throw new Error("NEXT_PUBLIC_WP_API_URL is not set");
    return WP_API;
}

/**
 * Fetch all case-study-category terms from the dedicated endpoint.
 */
export async function fetchCaseStudyCategories(): Promise<WPTerm[]> {
    try {
        const params = new URLSearchParams({ per_page: "100" });
        const res = await fetch(
            `${getApiBase()}/wp/v2/case-study-categories?${params}`,
            { next: { revalidate: 300 } }
        );
        if (!res.ok) return [];
        const terms: WPTerm[] = await res.json();
        return terms.filter((t) => (t.count ?? 0) > 0);
    } catch {
        return [];
    }
}

/**
 * Fetch a paginated list of case studies.
 * Optionally filter by a case-study-category term id.
 */
export async function fetchCaseStudies(
    page = 1,
    perPage = 9,
    termId?: number
): Promise<FetchPostsResult> {
    try {
        const params = new URLSearchParams({
            page: String(page),
            per_page: String(perPage),
        });

        if (termId !== undefined) {
            params.set("case-study-categories", String(termId));
        }

        const res = await fetch(
            `${getApiBase()}/wp/v2/case-studies?${params}&_embed`,
            { next: { revalidate: 60 } }
        );

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
 * Fetch a single case study by slug.
 */
export async function fetchCaseStudyBySlug(slug: string): Promise<WPPost | null> {
    try {
        const params = new URLSearchParams({ slug });

        const res = await fetch(
            `${getApiBase()}/wp/v2/case-studies?${params}&_embed`,
            { next: { revalidate: 60 } }
        );

        if (!res.ok) return null;

        const posts: WPPost[] = await res.json();
        return posts[0] ?? null;
    } catch {
        return null;
    }
}

/**
 * Fetch all case study slugs across all pages (for generateStaticParams + sitemap).
 */
export async function fetchAllCaseStudySlugs(): Promise<string[]> {
    try {
        let page = 1;
        const slugs: string[] = [];

        while (true) {
            const params = new URLSearchParams({
                page: String(page),
                per_page: "100",
                _fields: "slug",
            });

            const res = await fetch(
                `${getApiBase()}/wp/v2/case-studies?${params}`,
                { next: { revalidate: 3600 } }
            );

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
