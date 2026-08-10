import type { WPPost, WPTerm } from "./types";

/**
 * Yoast builds SEO titles as "%title% - %sitename%", and the headless
 * WordPress install's site name is the internal hostname
 * "cms.ardncloudsolutions.com" — it must never surface in a public title.
 * Replaces that suffix with the real brand name; returns undefined untouched
 * so callers can keep their own fallbacks.
 */
export function cleanSeoTitle(title: string | undefined): string | undefined {
    if (!title) return undefined;
    const cleaned = title.replace(/\s*[-–—|]\s*cms\.ardncloudsolutions\.com\s*$/i, "");
    if (cleaned === title) return title;
    return `${cleaned} | ARDN Cloud Solutions`;
}

/**
 * Strip HTML tags and decode common entities, returning plain text.
 * Optionally truncate to maxLength characters.
 */
export function getExcerptText(html: string, maxLength = 160): string {
    const text = html
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "…" : text;
}

/**
 * Returns the best available featured image URL for a post.
 * Prefers large → medium_large → medium → source_url.
 */
export function getFeaturedImageUrl(post: WPPost): string | null {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    if (!media) return null;
    const sizes = media.media_details?.sizes;
    return (
        sizes?.large?.source_url ??
        sizes?.medium_large?.source_url ??
        sizes?.medium?.source_url ??
        media.source_url ??
        null
    );
}

/**
 * Returns the alt text for a post's featured image, falling back to the post title.
 */
export function getFeaturedImageAlt(post: WPPost): string {
    return (
        post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
        post.title.rendered.replace(/<[^>]+>/g, "")
    );
}

/**
 * Returns the category terms embedded on the post.
 */
export function getPostCategories(post: WPPost): WPTerm[] {
    const terms = post._embedded?.["wp:term"];
    if (!terms) return [];
    // wp:term[0] = categories, wp:term[1] = tags
    return terms[0]?.filter((t) => t.taxonomy === "category") ?? [];
}

/**
 * Returns the display name of the post author.
 * Falls back to "ARDN Team" if the name looks like a raw email address.
 */
export function getPostAuthor(post: WPPost): string {
    const name = post._embedded?.author?.[0]?.name;
    if (!name || name.includes("@")) return "ARDN Team";
    return name;
}

/**
 * Formats an ISO date string to a human-readable date.
 */
export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
