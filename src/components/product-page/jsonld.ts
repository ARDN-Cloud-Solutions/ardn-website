import type { ProductPageContent } from "./types";

const SITE = "https://ardncloudsolutions.com";
const ORG = { "@id": `${SITE}/#organization` };

/** JSON-LD graph for a kit page: WebPage, BreadcrumbList, the product or
 *  service node, and FAQPage (mirrors the visible FAQ). No offers — pricing
 *  lives on the page copy or /pricing, never invented here. */
export function productJsonLd(
  c: ProductPageContent,
  opts: { path: string; name: string; kind: "SoftwareApplication" | "Service"; category: string; description: string; image: string },
) {
  const url = `${SITE}${opts.path}`;
  const main =
    opts.kind === "SoftwareApplication"
      ? {
          "@type": "SoftwareApplication",
          "@id": `${url}#product`,
          name: opts.name,
          applicationCategory: "BusinessApplication",
          applicationSubCategory: opts.category,
          operatingSystem: "Web",
          description: opts.description,
          url,
          image: `${SITE}${opts.image}`,
          publisher: ORG,
          provider: ORG,
        }
      : {
          "@type": "Service",
          "@id": `${url}#product`,
          name: opts.name,
          serviceType: opts.category,
          description: opts.description,
          url,
          image: `${SITE}${opts.image}`,
          provider: ORG,
          areaServed: { "@type": "Country", name: "United States" },
        };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${url}#product` },
        publisher: ORG,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Products & Services", item: `${SITE}/our-products` },
          { "@type": "ListItem", position: 3, name: opts.name, item: url },
        ],
      },
      main,
      {
        "@type": "FAQPage",
        mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}
