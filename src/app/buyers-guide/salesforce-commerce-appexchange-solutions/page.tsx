import { Metadata } from "next";
import SalesforceAppExchangeContent from "./SalesforceAppExchangeContent";

export const metadata: Metadata = {
  title: "Best Salesforce Commerce AppExchange Solutions 2026",
  description: "Compare the top Salesforce Commerce AppExchange solutions including ARDN Storefronts, StoreConnect, and more. Find the right native tool for your business.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
    languages: {
      "en-US": "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
      "x-default": "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
    },
  },
  openGraph: {
    title: "Best Salesforce Commerce AppExchange Solutions 2026",
    description: "Compare the top Salesforce Commerce AppExchange solutions including ARDN Storefronts, StoreConnect, and more. Find the right native tool for your business.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Top Salesforce Commerce AppExchange Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salesforce Commerce AppExchange Solutions 2026",
    description: "Compare the top Salesforce Commerce AppExchange solutions including ARDN Storefronts, StoreConnect, and more. Find the right native tool for your business.",
    images: ["https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
        "url": "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions",
        "name": "Best Salesforce Commerce AppExchange Solutions 2026",
        "description": "Compare the top Salesforce Commerce AppExchange solutions including ARDN Storefronts, StoreConnect, and more. Find the right native tool for your business.",
        "inLanguage": "en-US",
        "publisher": {
          "@type": "Organization",
          "name": "Ardn Cloud Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ardncloudsolutions.com/logo/ardn_logo.png"
          }
        }
      },
      {
        "@type": "Article",
        "headline": "Top Salesforce Commerce AppExchange Solutions You Should Try",
        "name": "Top Salesforce Commerce AppExchange Solutions You Should Try"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
          { "@type": "ListItem", "position": 2, "name": "Buyers Guide", "item": "https://ardncloudsolutions.com/buyers-guide" },
          { "@type": "ListItem", "position": 3, "name": "Salesforce Commerce Appexchange Solutions", "item": "https://ardncloudsolutions.com/buyers-guide/salesforce-commerce-appexchange-solutions" }
        ]
      },
      {
        "@type": "ItemList",
        "name": "A Comparison: The Best Salesforce Commerce AppExchange Solutions",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ARDN Storefronts" },
          { "@type": "ListItem", "position": 2, "name": "StoreConnect" },
          { "@type": "ListItem", "position": 3, "name": "Commerce Studio by 1440" },
          { "@type": "ListItem", "position": 4, "name": "EPOSLY" },
          { "@type": "ListItem", "position": 5, "name": "Nexternal Commerce" },
          { "@type": "ListItem", "position": 6, "name": "Live Story Inc." },
          { "@type": "ListItem", "position": 7, "name": "Narvar" }
        ]
      }
    ]
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
