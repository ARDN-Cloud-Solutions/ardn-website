import type { ComparisonGuideData } from "./types";

const SITE = "https://ardncloudsolutions.com";
const ORG = { "@id": `${SITE}/#organization` };

/** Article + WebPage + BreadcrumbList + ItemList + FAQPage graph for a comparison guide. */
export function comparisonGuideJsonLd(guide: ComparisonGuideData, description: string) {
  const url = `${SITE}${guide.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: guide.h1,
        description,
        inLanguage: "en-US",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        publisher: ORG,
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.h1,
        name: guide.h1,
        description,
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        datePublished: guide.datePublished,
        dateModified: guide.dateModified,
        author: ORG,
        publisher: ORG,
        about: guide.vendors.map((v) => ({ "@type": "Thing", name: v.name })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: guide.shortName, item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        name: guide.shortName,
        numberOfItems: guide.vendors.length,
        itemListElement: guide.vendors.map((v, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: v.name,
          url: `${url}#${v.id}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: guide.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
