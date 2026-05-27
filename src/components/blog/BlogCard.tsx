import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";
import type { WPPost } from "@/lib/wordpress/types";
import {
    getFeaturedImageUrl,
    getFeaturedImageAlt,
    getExcerptText,
    getPostCategories,
    formatDate,
} from "@/lib/wordpress/utils";

interface BlogCardProps {
    post: WPPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const featuredImage = getFeaturedImageUrl(post);
    const imageAlt = getFeaturedImageAlt(post);
    const excerpt = getExcerptText(post.excerpt.rendered, 120);
    const categories = getPostCategories(post);

    return (
        <article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            {/* Featured image */}
            <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-video bg-gray-100 overflow-hidden shrink-0"
                aria-label={`Read ${post.title.rendered}`}
            >
                {featuredImage ? (
                    <Image
                        src={featuredImage}
                        alt={imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <span className="font-bold text-6xl text-primary/20 select-none">A</span>
                    </div>
                )}
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 md:p-6">
                {/* Category badges */}
                {categories.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {categories.slice(0, 2).map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/blog/category/${cat.slug}`}
                                className="text-xs font-medium bg-primary-light text-primary px-2.5 py-0.5 rounded-full hover:bg-primary hover:text-white transition-colors"
                            >
                                {cat.name}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h2 className="text-base md:text-lg font-semibold text-heading-dark leading-snug mb-2 line-clamp-2">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="relative inline hover:text-primary transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-[width] after:duration-300 after:ease-out"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-paragraph leading-relaxed mb-4 flex-1 line-clamp-3">
                    {excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                        <Calendar className="w-3.5 h-3.5 shrink-0" />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                        Read more
                        <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
