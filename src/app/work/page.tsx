import { Metadata } from "next";
import WorkContent from "./WorkContent";
import { LAUNCHES } from "./launches";

// /work: what Ardn has built and launched. Each card points at the product
// page and its case study. Ardn is the vendor that designed, built and runs
// each product; the external product sites belong to their own companies.

const SITE = "https://ardncloudsolutions.com";
const URL = `${SITE}/work`;
const DESC =
  "Industry software Ardn has built and launched: Club Steward for golf clubs, a membership and fundraising platform for nonprofits, Ardn CRM for construction, Rx-Dr white-label telehealth and the Research Only storefront.";

export const metadata: Metadata = {
  title: "Software We've Launched | Ardn Cloud Solutions",
  description: DESC,
  keywords: ["Ardn products", "software built by Ardn", "golf club software", "nonprofit membership software", "construction CRM", "white-label telehealth platform", "custom ecommerce"],
  alternates: { canonical: URL, languages: { "en-US": URL, "x-default": URL } },
  openGraph: {
    title: "Products we've built and launched | Ardn",
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [{ url: "/images/work/work-montage-og.webp", width: 1200, height: 630, alt: "Five software products built and launched by Ardn Cloud Solutions, shown on laptop and phone screens" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Software We've Launched | Ardn", description: DESC, images: ["/images/work/work-montage-og.webp"] },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${URL}#webpage`,
        url: URL,
        name: "Software We've Launched | Ardn Cloud Solutions",
        description: DESC,
        inLanguage: "en-US",
        isPartOf: { "@id": `${SITE}/#website` },
        publisher: { "@id": `${SITE}/#organization` },
        breadcrumb: { "@id": `${URL}#breadcrumb` },
        mainEntity: { "@id": `${URL}#launches` },
      },
      {
        "@type": "ItemList",
        "@id": `${URL}#launches`,
        name: "Products built and launched by Ardn",
        numberOfItems: LAUNCHES.length,
        itemListElement: LAUNCHES.map((l, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "SoftwareApplication",
            name: l.name,
            url: `${SITE}${l.productHref}`,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: l.category,
            operatingSystem: "Web",
            image: `${SITE}${l.image}`,
            description: l.outcome,
            provider: { "@id": `${SITE}/#organization` },
            ...(l.externalHref ? { sameAs: l.externalHref } : {}),
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Our Work", item: URL },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WorkContent />
    </>
  );
}
