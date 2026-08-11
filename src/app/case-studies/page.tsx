import type { Metadata } from "next";
import { fetchCaseStudies, fetchCaseStudyCategories } from "@/lib/wordpress/case-studies";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyGridSection from "@/components/case-studies/CaseStudyGridSection";

const PER_PAGE = 9;

export const dynamic = "force-dynamic";

// Title expanded with target keywords and twitter card + OG image added so
// the page renders cleanly in shared previews.
export const metadata: Metadata = {
    title:
        "Salesforce & AI Customer Case Studies | Ardn Cloud Solutions",
    description:
        "Salesforce transformation and AI implementation case studies from Ardn — enterprise deployments, mid-market launches, and measurable cost-savings outcomes.",
    alternates: {
        canonical: "https://ardncloudsolutions.com/case-studies",
        languages: {
            "en-US": "https://ardncloudsolutions.com/case-studies",
            "x-default": "https://ardncloudsolutions.com/case-studies",
        },
    },
    openGraph: {
        title:
            "Salesforce & AI Customer Case Studies | Ardn Cloud Solutions",
        description:
            "Real-world Salesforce transformation and AI implementation case studies from Ardn Cloud Solutions.",
        url: "https://ardncloudsolutions.com/case-studies",
        siteName: "Ardn Cloud Solutions",
        images: [
            {
                url: "/images/ardn-home-hero.webp",
                width: 1200,
                height: 630,
                alt: "Ardn Cloud Solutions customer case studies — Salesforce transformation and AI implementation outcomes",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Salesforce & AI Customer Case Studies | Ardn Cloud Solutions",
        description:
            "Real-world Salesforce transformation and AI implementation case studies.",
        site: "@ardn_cloud_sol",
        images: ["/images/ardn-home-hero.webp"],
    },
};

export default async function CaseStudiesIndexPage() {
    const [{ posts, totalPages, total }, categories] = await Promise.all([
        fetchCaseStudies(1, PER_PAGE),
        fetchCaseStudyCategories(),
    ]);

    // Enriched JSON-LD: CollectionPage (proper type for a list of case
    // studies) + BreadcrumbList. Publisher → site Organization via @id.
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://ardncloudsolutions.com/case-studies",
                url: "https://ardncloudsolutions.com/case-studies",
                name: "Salesforce & AI Customer Case Studies | Ardn Cloud Solutions",
                description:
                    "Real-world Salesforce transformation and AI implementation case studies from Ardn Cloud Solutions.",
                inLanguage: "en-US",
                publisher: {
                    "@id": "https://ardncloudsolutions.com/#organization",
                },
                breadcrumb: { "@id": "https://ardncloudsolutions.com/case-studies#breadcrumb" },
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://ardncloudsolutions.com/case-studies#breadcrumb",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
                    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://ardncloudsolutions.com/case-studies" },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen bg-white pt-[70px] lg:pt-[154px]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CaseStudyHero title="ARDN Client Case Studies & Success Stories" />

            <section className="container py-12 md:py-16">
                <CaseStudyGridSection
                    initialPosts={posts}
                    totalPages={totalPages}
                    perPage={PER_PAGE}
                    total={total}
                    categories={categories}
                />
            </section>
        </main>
    );
}
