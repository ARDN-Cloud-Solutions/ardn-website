import Image from "next/image";
import Link from "next/link";
import type { WPCategory, WPPost } from "@/lib/wordpress/types";
import { getFeaturedImageUrl, formatDate } from "@/lib/wordpress/utils";
import SidebarSearch from "@/components/blog/SidebarSearch";
import NewsletterWidget from "@/components/blog/NewsletterWidget";

interface BlogSidebarProps {
    categories: WPCategory[];
    latestPosts: WPPost[];
    activeCategorySlug?: string;
}

// ─── Shared widget header ─────────────────────────────────────────────────────

function WidgetHeader({ title }: { title: string }) {
    return (
        <div className="bg-heading-dark text-white px-4 py-3.5">
            <h3 className="text-white text-base font-semibold tracking-wide">{title}</h3>
        </div>
    );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export default function BlogSidebar({
    categories,
    latestPosts,
    activeCategorySlug,
}: BlogSidebarProps) {
    return (
        <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            {/* Search */}
            <SidebarSearch />

            {/* Categories */}
            {categories.length > 0 && (
                <div className="border border-gray-100 overflow-hidden">
                    <WidgetHeader title="Categories" />
                    <ul>
                        {categories.map((cat, i) => (
                            <li key={cat.id}>
                                <Link
                                    href={`/blog/category/${cat.slug}`}
                                    className={`flex items-center justify-between px-4 py-3 text-sm transition-colors
                                        ${i < categories.length - 1 ? "border-b border-gray-100" : ""}
                                        ${activeCategorySlug === cat.slug
                                            ? "bg-primary-light text-primary font-semibold"
                                            : "text-paragraph hover:bg-gray-50 hover:text-primary"
                                        }`}
                                >
                                    <span>{cat.name}</span>
                                    <span className="w-6 h-6 flex items-center justify-center text-xs bg-gray-100 rounded-full text-muted shrink-0">
                                        {cat.count}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Latest Posts */}
            {latestPosts.length > 0 && (
                <div className="border border-gray-100 overflow-hidden">
                    <WidgetHeader title="Latest Posts" />
                    <ul>
                        {latestPosts.map((post, i) => {
                            const thumb = getFeaturedImageUrl(post);
                            const title = post.title.rendered.replace(/<[^>]+>/g, "");
                            return (
                                <li
                                    key={post.id}
                                    className={`p-3 ${i < latestPosts.length - 1 ? "border-b border-gray-100" : ""}`}
                                >
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="flex items-start gap-3 group"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded bg-gray-100">
                                            {thumb ? (
                                                <Image
                                                    src={thumb}
                                                    alt={title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    sizes="64px"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                                                    <span className="text-primary/30 font-bold text-xl">A</span>
                                                </div>
                                            )}
                                        </div>
                                        {/* Title + date */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-heading-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                                {title}
                                            </p>
                                            <p className="text-xs text-muted mt-1">
                                                {formatDate(post.date)}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            {/* Wedge CTA — surfaces the per-seat cost-reduction wedge on every
                blog post and listing page (the highest-traffic section), which
                otherwise had zero editorial links into the wedge cluster. */}
            <div className="border border-gray-100 overflow-hidden">
                <WidgetHeader title="Cut Your Software Bill" />
                <div className="p-4 bg-white">
                    <p className="text-sm text-paragraph leading-snug mb-3">
                        Paying per-seat for Salesforce or HubSpot licenses? See how a
                        custom portal moves light users onto one flat fee — keep your
                        CRM, cut the bill.
                    </p>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link
                                href="/reduce-crm-licensing-costs"
                                className="text-sm font-semibold text-primary hover:underline"
                            >
                                Cut your CRM per-seat licensing costs →
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/savings-calculator"
                                className="text-sm font-semibold text-primary hover:underline"
                            >
                                Calculate your per-seat savings →
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Newsletter */}
            <div className="border border-gray-100 overflow-hidden">
                <WidgetHeader title="Subscribe Newsletter" />
                <NewsletterWidget />
            </div>
        </aside>
    );
}
