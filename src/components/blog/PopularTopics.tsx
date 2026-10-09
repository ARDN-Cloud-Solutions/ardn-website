import Link from "next/link";

// "Popular topics" strip under the blog hero: links the topic hubs from the
// blog index so crawlers reach every hub (and through it, every post) in two
// hops from the home page.
const TOPICS = [
    { label: "Software cost comparisons", href: "/blog/topics/software-cost-comparisons" },
    { label: "Salesforce e-commerce", href: "/blog/topics/salesforce-ecommerce" },
];

export default function PopularTopics() {
    return (
        <nav aria-label="Popular topics" className="container pt-8 md:pt-10">
            <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-heading-dark">Popular topics:</span>
                {TOPICS.map((t) => (
                    <Link
                        key={t.href}
                        href={t.href}
                        className="text-sm font-medium bg-primary-light text-primary px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                        {t.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
