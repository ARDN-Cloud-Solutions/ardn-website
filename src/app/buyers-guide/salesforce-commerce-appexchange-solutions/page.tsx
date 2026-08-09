import { Metadata } from "next";
import SalesforceAppExchangeContent from "./SalesforceAppExchangeContent";

// SEO: Cat 1 — Salesforce AppExchange buyers searching for commerce apps.
// High-intent SF-native query. Metadata sharpened with 2026, B2B/B2C
// modifiers and the AppExchange-specific phrasing.
export const metadata: Metadata = {
  title:
    "Best Salesforce Commerce AppExchange Solutions (2026) | Ardn",
  description:
    "Compare the top Salesforce Commerce AppExchange solutions for 2026 — Ardn Storefronts, StoreConnect, Commerce Studio by 1440, EPOSLY & more.",
  keywords: [
    "Salesforce Commerce AppExchange",
    "Salesforce ecommerce AppExchange",
    "Salesforce-native commerce app",
    "AppExchange commerce solutions",
    "Salesforce commerce apps 2026",
    "ARDN Storefronts AppExchange",
    "StoreConnect Salesforce",
    "Commerce Studio 1440",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
      "x-default":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
    },
  },
  openGraph: {
    title:
      "Best Salesforce Commerce AppExchange Solutions: 2026 Buyer's Guide | Ardn Cloud Solutions",
    description:
      "Compare top Salesforce Commerce AppExchange solutions in 2026. Ardn Storefronts, StoreConnect, Commerce Studio by 1440, EPOSLY, and more.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Buyer's guide comparing the best Salesforce Commerce AppExchange solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Salesforce Commerce AppExchange Solutions: 2026 Buyer's Guide",
    description:
      "Compare top Salesforce Commerce AppExchange solutions in 2026.",
    images: [
      "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp",
    ],
  },
};

export default function Page() {
  const url =
    "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions";
  const image =
    "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: "Best Salesforce Commerce AppExchange Solutions: 2026 Buyer's Guide | Ardn Cloud Solutions",
        description:
          "Compare the top Salesforce Commerce AppExchange solutions in 2026.",
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
          "Comparison of the best Salesforce Commerce AppExchange solutions",
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline:
          "Top Salesforce Commerce AppExchange Solutions You Should Try",
        name: "Top Salesforce Commerce AppExchange Solutions You Should Try",
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
          { "@type": "Thing", name: "Salesforce AppExchange commerce apps" },
          { "@type": "Thing", name: "Ardn Storefronts" },
          { "@type": "Thing", name: "StoreConnect" },
          { "@type": "Thing", name: "Commerce Studio by 1440" },
          { "@type": "Thing", name: "EPOSLY" },
          { "@type": "Thing", name: "Nexternal Commerce" },
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
            name: "Buyers Guide",
            item: "https://ardncloudsolutions.com/buyers-guide",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Salesforce Commerce AppExchange Solutions",
            item: url,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#productlist`,
        name: "Best Salesforce Commerce AppExchange Solutions (2026)",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ardn Storefronts" },
          { "@type": "ListItem", position: 2, name: "StoreConnect" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Commerce Studio by 1440",
          },
          { "@type": "ListItem", position: 4, name: "EPOSLY" },
          { "@type": "ListItem", position: 5, name: "Nexternal Commerce" },
          { "@type": "ListItem", position: 6, name: "Live Story Inc." },
          { "@type": "ListItem", position: 7, name: "Narvar" },
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
      <SalesforceAppExchangeContent />
    </>
  );
}
