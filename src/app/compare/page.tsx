import type { Metadata } from "next";
import Link from "next/link";
import { metadata as customSoftwareVsSaas } from "./custom-software-vs-saas/page";
import { metadata as hubspotSeatCost } from "./hubspot-seat-cost-vs-custom-portal/page";
import { metadata as commerceCloudAlternatives } from "./salesforce-commerce-cloud-alternatives/page";
import { metadata as experienceCloudVsPortal } from "./salesforce-experience-cloud-vs-custom-portal/page";
import { metadata as salesforceSeatCost } from "./salesforce-seat-cost-vs-custom-portal/page";

// /compare used to 308 to the homepage (a soft 404 in Search Console). It is
// now a real index of the comparison pages. Card copy is read from each
// page's own metadata so the index never drifts from the pages it lists.

const BASE_URL = "https://ardncloudsolutions.com";
const PAGE_URL = `${BASE_URL}/compare`;

const PAGES: { slug: string; meta: Metadata }[] = [
    { slug: "custom-software-vs-saas", meta: customSoftwareVsSaas },
    { slug: "salesforce-seat-cost-vs-custom-portal", meta: salesforceSeatCost },
    { slug: "hubspot-seat-cost-vs-custom-portal", meta: hubspotSeatCost },
    { slug: "salesforce-experience-cloud-vs-custom-portal", meta: experienceCloudVsPortal },
    { slug: "salesforce-commerce-cloud-alternatives", meta: commerceCloudAlternatives },
];

// Strip the " | Ardn" brand suffix from the page title for the card heading.
const cardTitle = (meta: Metadata) =>
    String(meta.title ?? "").replace(/\s*\|\s*Ardn.*$/, "").trim();

const ITEMS = PAGES.map(({ slug, meta }) => ({
    href: `/compare/${slug}`,
    title: cardTitle(meta),
    description: String(meta.description ?? ""),
}));

const TITLE = "Software Cost Comparisons | Ardn";
const DESCRIPTION =
    "Side-by-side comparisons of per-seat SaaS and CRM pricing against flat-fee custom software: Salesforce, HubSpot, Experience Cloud, Commerce Cloud and more.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: PAGE_URL,
        languages: { "en-US": PAGE_URL, "x-default": PAGE_URL },
    },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        siteName: "Ardn Cloud Solutions",
        images: [{ url: "/images/ardn-share.jpg", width: 1200, height: 630, alt: "Software cost comparisons by Ardn Cloud Solutions" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        images: ["/images/ardn-share.jpg"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "CollectionPage",
            "@id": `${PAGE_URL}#webpage`,
            url: PAGE_URL,
            name: "Software Cost Comparisons",
            description: DESCRIPTION,
            inLanguage: "en-US",
            isPartOf: { "@id": `${BASE_URL}/#website` },
            breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
            mainEntity: { "@id": `${PAGE_URL}#itemlist` },
        },
        {
            "@type": "ItemList",
            "@id": `${PAGE_URL}#itemlist`,
            numberOfItems: ITEMS.length,
            itemListElement: ITEMS.map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: item.title,
                url: `${BASE_URL}${item.href}`,
            })),
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${PAGE_URL}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                { "@type": "ListItem", position: 2, name: "Compare", item: PAGE_URL },
            ],
        },
    ],
};

export default function CompareIndexPage() {
    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="ardn-page">
                <section className="hero-editorial">
                    <div className="container">
                        <div className="hero-copy">
                            <span className="eyebrow">Compare</span>
                            <h1 className="display reveal">
                                Software cost comparisons. <em>Seats vs. flat fee.</em>
                            </h1>
                            <p className="lede reveal reveal-d2">
                                Per-seat pricing grows every time you hire. These guides put the
                                platforms you already pay for next to a flat-fee custom build, so
                                you can see where the money goes and where a custom portal or app
                                pays for itself.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="grid-3">
                            {ITEMS.map((item, i) => (
                                <Link href={item.href} className="card" key={item.href}>
                                    <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                                    <h2 className="h3">{item.title}</h2>
                                    <p className="body">{item.description}</p>
                                </Link>
                            ))}
                        </div>
                        <p className="body mt-4">
                            Want more?{" "}
                            <Link
                                href="/blog/topics/software-cost-comparisons"
                                className="text-heading-dark underline decoration-[#ff9b29] underline-offset-4"
                            >
                                Read every software cost comparison on the blog →
                            </Link>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
