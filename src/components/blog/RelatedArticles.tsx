import Link from "next/link";
import type { WPPost } from "@/lib/content/types";
import { getExcerptText } from "@/lib/content/utils";

// Server-rendered "Related articles" block at the end of each post. Plain
// links so crawlers follow them without running any JavaScript.
export default function RelatedArticles({ posts }: { posts: WPPost[] }) {
    if (!posts.length) return null;
    return (
        <section aria-labelledby="related-articles" className="mt-12 pt-8 border-t border-gray-100">
            <h2 id="related-articles" className="text-xl md:text-2xl font-bold text-heading-dark mb-5">
                Related articles
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
                {posts.map((p) => (
                    <li key={p.slug} className="border border-gray-200 rounded p-4 hover:border-primary transition-colors">
                        <Link
                            href={`/blog/${p.slug}`}
                            className="font-semibold text-heading-dark leading-snug hover:text-primary transition-colors"
                        >
                            {getExcerptText(p.title.rendered, 200)}
                        </Link>
                        <p className="text-sm text-paragraph leading-relaxed mt-2">
                            {getExcerptText(p.excerpt.rendered, 120)}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
