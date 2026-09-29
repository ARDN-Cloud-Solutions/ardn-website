import type { WPPost, WPTerm, FetchPostsResult } from "./types";
import caseStudiesData from "@/content/case-studies.json";
import caseStudyCategoriesData from "@/content/case-study-categories.json";

// Case studies live in the repo (src/content/case-studies.json), migrated off
// WordPress on 2026-09-28. Shapes follow the WP REST API.

const CASE_STUDIES = caseStudiesData as unknown as WPPost[];
const CATEGORIES = caseStudyCategoriesData as unknown as WPTerm[];

/** All non-empty case-study categories. */
export async function fetchCaseStudyCategories(): Promise<WPTerm[]> {
    return CATEGORIES.filter((t) => (t.count ?? 0) > 0);
}

/** Paginated case studies, optionally filtered by category term id. */
export async function fetchCaseStudies(page = 1, perPage = 9, termId?: number): Promise<FetchPostsResult> {
    const list = termId !== undefined ? CASE_STUDIES.filter((c) => c["case-study-categories"].includes(termId)) : CASE_STUDIES;
    const total = list.length;
    const start = (page - 1) * perPage;
    return { posts: list.slice(start, start + perPage), totalPages: total ? Math.ceil(total / perPage) : 0, total };
}

/** A single case study by slug. */
export async function fetchCaseStudyBySlug(slug: string): Promise<WPPost | null> {
    return CASE_STUDIES.find((c) => c.slug === slug) ?? null;
}

/** All case study slugs (generateStaticParams + sitemap). */
export async function fetchAllCaseStudySlugs(): Promise<string[]> {
    return CASE_STUDIES.map((c) => c.slug);
}
