// WordPress REST API response types

export interface WPAuthor {
    id: number;
    name: string;
    slug: string;
    avatar_urls?: Record<string, string>;
}

export interface WPFeaturedMedia {
    source_url: string;
    alt_text: string;
    media_details?: {
        sizes?: {
            medium?: { source_url: string; width: number; height: number };
            medium_large?: { source_url: string; width: number; height: number };
            large?: { source_url: string; width: number; height: number };
            full?: { source_url: string; width: number; height: number };
        };
    };
}

export interface WPTerm {
    id: number;
    name: string;
    slug: string;
    taxonomy: string;
    count?: number;
}

export interface YoastRobots {
    index?: string;
    follow?: string;
    "max-snippet"?: string;
    "max-image-preview"?: string;
    "max-video-preview"?: string;
}

export interface YoastOgImage {
    width?: number;
    height?: number;
    url: string;
    type?: string;
}

export interface YoastHeadJson {
    title?: string;
    description?: string;
    robots?: YoastRobots;
    og_locale?: string;
    og_type?: string;
    og_title?: string;
    og_description?: string;
    og_url?: string;
    og_site_name?: string;
    article_modified_time?: string;
    og_image?: YoastOgImage[];
    twitter_card?: string;
    twitter_misc?: Record<string, string>;
    schema?: Record<string, unknown>;
}

export interface WPPost {
    id: number;
    slug: string;
    date: string;
    modified: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    categories: number[];
    "case-study-categories": number[];
    meta?: {
        faq_schema?: string;
        footnotes?: string;
    };
    yoast_head_json?: YoastHeadJson;
    _embedded?: {
        "wp:featuredmedia"?: WPFeaturedMedia[];
        "wp:term"?: WPTerm[][];
        author?: WPAuthor[];
    };
}

export interface WPCategory {
    id: number;
    name: string;
    slug: string;
    count: number;
    description: string;
    yoast_head_json?: YoastHeadJson;
}

export interface FetchPostsResult {
    posts: WPPost[];
    totalPages: number;
    total: number;
}
