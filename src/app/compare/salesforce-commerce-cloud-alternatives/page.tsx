import { Metadata } from "next";
import SalesforceCommerceCloudAlternativesContent from "./SalesforceCommerceCloudAlternativesContent";

// SEO: high-intent "alternatives" page — buyers comparing Salesforce Commerce
// Cloud against cheaper / simpler options. This page had the thinnest schema
// (only WebPage); enriched here with Article, BreadcrumbList, ItemList, and
// FAQPage so the rich-result surface matches the other buyers' guides.
export const metadata: Metadata = {
  title:
    "Top Salesforce Commerce Cloud Alternatives in 2026 | Ardn Cloud Solutions",
  description:
    "Compare the best Salesforce Commerce Cloud alternatives in 2026 — Ardn Storefronts, Shopify Plus, Adobe Commerce (Magento), BigCommerce, WooCommerce, and StoreConnect. Real pricing, fit, and pitfalls to guide your decision.",
  keywords: [
    "Salesforce Commerce Cloud alternatives",
    "Salesforce Commerce Cloud vs",
    "cheaper than Salesforce Commerce Cloud",
    "Commerce Cloud replacement",
    "Salesforce ecommerce alternatives",
    "Ardn Storefronts vs Commerce Cloud",
    "Shopify Plus vs Salesforce",
    "Magento vs Salesforce",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
      "x-default":
        "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
    },
  },
  openGraph: {
    title:
      "Top Salesforce Commerce Cloud Alternatives in 2026 | Ardn Cloud Solutions",
    description:
      "Compare top Salesforce Commerce Cloud alternatives in 2026 — Ardn Storefronts, Shopify Plus, Magento, BigCommerce, WooCommerce, and StoreConnect.",
    url: "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Comparison guide of top Salesforce Commerce Cloud alternatives",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Salesforce Commerce Cloud Alternatives in 2026 | Ardn Cloud Solutions",
    description:
      "Compare top Salesforce Commerce Cloud alternatives in 2026.",
    images: ["/buyers-guide/ardn-all-in-one-ecommerce.webp"],
  },
};

export default function Page() {
  const url =
    "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives";
  const image =
    "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: "Top Salesforce Commerce Cloud Alternatives in 2026 | Ardn Cloud Solutions",
        description:
          "Compare top Salesforce Commerce Cloud alternatives in 2026 — Ardn, Shopify Plus, Magento, BigCommerce, WooCommerce, StoreConnect.",
        inLanguage: "en-US",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: image,
        width: 1200,
        height: 630,
        caption:
          "Comparison of top Salesforce Commerce Cloud alternatives in 2026",
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline:
          "Top Salesforce Commerce Cloud Alternatives in 2026",
        name: "Top Salesforce Commerce Cloud Alternatives in 2026",
        url,
        mainEntityOfPage: { "@id": url },
        image: { "@id": `${url}#primaryimage` },
        inLanguage: "en-US",
        datePublished: "2026-05-27T00:00:00-04:00",
        dateModified: "2026-06-02T00:00:00-04:00",
        author: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        about: [
          { "@type": "Thing", name: "Salesforce Commerce Cloud alternatives" },
          { "@type": "Thing", name: "Ardn Storefronts" },
          { "@type": "Thing", name: "Shopify Plus" },
          { "@type": "Thing", name: "Adobe Commerce (Magento)" },
          { "@type": "Thing", name: "BigCommerce" },
          { "@type": "Thing", name: "WooCommerce" },
          { "@type": "Thing", name: "StoreConnect" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ardncloudsolutions.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Compare",
            item: "https://ardncloudsolutions.com/compare",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Salesforce Commerce Cloud Alternatives",
            item: url,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#productlist`,
        name: "Top Salesforce Commerce Cloud Alternatives (2026)",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ardn Storefronts — Salesforce-native, cheaper-than-Commerce-Cloud alternative",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Shopify Plus — High-growth D2C & omnichannel alternative",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Adobe Commerce (Magento) — Enterprise-scale B2B & B2C alternative",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "BigCommerce — Mid-market multi-storefront alternative",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "WooCommerce — Self-hosted WordPress ecommerce alternative",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "StoreConnect — Salesforce-native POS-and-online alternative",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SalesforceCommerceCloudAlternativesContent />
    </>
  );
}
