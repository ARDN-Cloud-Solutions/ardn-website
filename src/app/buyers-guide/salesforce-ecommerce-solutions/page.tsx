import { Metadata } from "next";
import SalesforceEcommerceContent from "./SalesforceEcommerceContent";

// SEO: Cat 1 buyers' guide for Salesforce-native ecommerce buyers. Keywords
// kept narrow to the SF ecommerce intent the page is already ranking for.
export const metadata: Metadata = {
  title: "Best Salesforce E-commerce Solutions (2026) | Ardn",
  description:
    "Compare the best Salesforce-native ecommerce solutions for 2026 — Ardn Storefronts, Commerce Studio by 1440, StoreConnect, Shopify Plus & more.",
  keywords: [
    "Salesforce ecommerce",
    "Salesforce ecommerce solutions",
    "Salesforce-native ecommerce",
    "best Salesforce commerce platform",
    "Salesforce commerce cloud alternative",
    "Salesforce B2B ecommerce",
    "Salesforce B2C ecommerce",
    "Salesforce storefront app",
    "Salesforce ecommerce 2026",
    "Ardn Storefronts",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
      "x-default":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
    },
  },
  openGraph: {
    title:
      "Best Salesforce E-commerce Solutions: 2026 Buyer's Guide | Ardn Cloud Solutions",
    description:
      "Compare top Salesforce-native ecommerce solutions for B2B and B2C in 2026. Ardn Storefronts, Commerce Studio, StoreConnect, Fonteva, Shopify Plus and more.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/buyers-guide/ARDN-Storefronts-as-the-all-in-one-Salesforce-native.webp",
        width: 1200,
        height: 630,
        alt: "Buyer's guide comparing the best Salesforce-native ecommerce solutions for B2B and B2C",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Salesforce E-commerce Solutions: 2026 Buyer's Guide | Ardn Cloud Solutions",
    description:
      "Compare top Salesforce-native ecommerce solutions for B2B and B2C in 2026.",
    images: [
      "/buyers-guide/ARDN-Storefronts-as-the-all-in-one-Salesforce-native.webp",
    ],
  },
};

export default function Page() {
  // SEO: enriched Article schema with required rich-result fields and
  // publisher → site Organization via @id.
  const url =
    "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions";
  const image =
    "https://ardncloudsolutions.com/buyers-guide/ARDN-Storefronts-as-the-all-in-one-Salesforce-native.webp";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: "Best Salesforce E-commerce Solutions: 2026 Buyer's Guide | Ardn Cloud Solutions",
        description:
          "Compare the best Salesforce-native ecommerce solutions for B2B and B2C in 2026.",
        inLanguage: "en-US",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: image,
        width: 1200,
        height: 630,
        caption:
          "Buyer's guide comparing top Salesforce-native ecommerce solutions",
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline:
          "Best Salesforce E-commerce Solutions: A 2026 Buyer's Guide",
        name: "Best Salesforce E-commerce Solutions: A 2026 Buyer's Guide",
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
          { "@type": "Thing", name: "Salesforce-native ecommerce" },
          { "@type": "Thing", name: "Ardn Storefronts" },
          { "@type": "Thing", name: "Commerce Studio by 1440" },
          { "@type": "Thing", name: "StoreConnect" },
          { "@type": "Thing", name: "Fonteva eCommerce" },
          { "@type": "Thing", name: "Nexternal Solutions" },
          { "@type": "Thing", name: "Shopify Plus" },
          { "@type": "Thing", name: "Adobe Commerce" },
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
            name: "Salesforce Ecommerce Solutions",
            item: url,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#productlist`,
        name: "Best Salesforce-Native E-commerce Solutions (2026)",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ardn Storefronts: The all-in-one Salesforce-native commerce solution",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Commerce Studio by 1440: Multi-channel order & inventory orchestration",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "StoreConnect: Vertical-specific businesses and POS for multi-location",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Fonteva eCommerce: Membership-driven organizations",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Nexternal Solutions: B2B brands needing procurement-ready ordering",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Shopify Plus: High-growth D2C & omnichannel brands",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Adobe Commerce (Magento): Enterprise-scale B2B & B2C brands",
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
      <SalesforceEcommerceContent />
    </>
  );
}
