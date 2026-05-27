import type { Metadata } from "next";
import { fetchCaseStudies, fetchCaseStudyCategories } from "@/lib/wordpress/case-studies";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CaseStudyGridSection from "@/components/case-studies/CaseStudyGridSection";

const PER_PAGE = 9;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Case Studies | ARDN Cloud Solutions",
    description:
        "Explore real-world Salesforce transformation stories and success cases from ARDN Cloud Solutions.",
    alternates: {
        canonical: "https://ardncloudsolutions.com/case-studies",
        languages: {
            "en-US": "https://ardncloudsolutions.com/case-studies",
            "x-default": "https://ardncloudsolutions.com/case-studies",
        },
    },
    openGraph: {
        title: "Case Studies | ARDN Cloud Solutions",
        description:
            "Explore real-world Salesforce transformation stories and success cases from ARDN Cloud Solutions.",
        type: "website",
    },
};

export default async function CaseStudiesIndexPage() {
    const [{ posts, totalPages, total }, categories] = await Promise.all([
        fetchCaseStudies(1, PER_PAGE),
        fetchCaseStudyCategories(),
    ]);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
            { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://ardncloudsolutions.com/case-studies" }
        ]
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
