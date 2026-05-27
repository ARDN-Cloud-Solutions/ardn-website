import Image from "next/image";
import Link from "next/link";
import { User, MessageSquare, Tag, Calendar } from "lucide-react";
import type { WPPost } from "@/lib/wordpress/types";
import {
    getExcerptText,
    getPostCategories,
    getPostAuthor,
    getFeaturedImageUrl,
    getFeaturedImageAlt,
    formatDate,
} from "@/lib/wordpress/utils";

interface BlogListItemProps {
    post: WPPost;
}

export default function BlogListItem({ post }: BlogListItemProps) {
    const excerpt = getExcerptText(post.excerpt.rendered, 220);
    const categories = getPostCategories(post);
    const author = getPostAuthor(post);
    const firstCategory = categories[0];
    const featuredImage = getFeaturedImageUrl(post);
    const imageAlt = getFeaturedImageAlt(post);

    return (
        <article className="border border-gray-200 rounded bg-white mb-6 last:mb-0 overflow-hidden">
            {/* Featured image */}
            {featuredImage && (
                <div className="p-5 pb-0">
                    <Link href={`/blog/${post.slug}`} className="relative block aspect-video w-full bg-gray-100 overflow-hidden rounded">
                        <Image
                            src={featuredImage}
                            alt={imageAlt}
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 800px"
                        />
                    </Link>
                </div>
            )}

            <div className="p-6 md:p-8">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted mb-4">
                    {/* Author */}
                    <span className="flex items-center gap-2.5">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 shrink-0">
                            <User className="w-4 h-4" />
                        </span>
                        <span>By {author}</span>
                    </span>

                    {/* Category */}
                    {firstCategory && (
                        <Link
                            href={`/blog/category/${firstCategory.slug}`}
                            className="flex items-center gap-2.5 hover:text-primary transition-colors"
                        >
                            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 shrink-0">
                                <Tag className="w-4 h-4" />
                            </span>
                            <span>{firstCategory.name}</span>
                        </Link>
                    )}

                    {/* Date */}
                    <time dateTime={post.date} className="flex items-center gap-2.5">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 shrink-0">
                            <Calendar className="w-4 h-4" />
                        </span>
                        <span>{formatDate(post.date)}</span>
                    </time>

                    {/* Comments */}
                    <span className="flex items-center gap-2.5">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 shrink-0">
                            <MessageSquare className="w-4 h-4" />
                        </span>
                        <span>No Comments</span>
                    </span>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 mb-5" />

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-heading-dark leading-snug mb-4">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="relative inline hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-[width] after:duration-300 after:ease-out"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                </h2>

                {/* Excerpt */}
                <p className="text-paragraph leading-relaxed mb-6">{excerpt}</p>

                {/* Continue Reading */}
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-3 font-medium text-heading-dark hover:text-primary transition-colors"
                >
                    Continue Reading
                    <span className="inline-block" aria-hidden="true">——→</span>
                </Link>
            </div>
        </article>
    );
}
