import { Metadata } from "next";
import SalesforceEcommerceContent from "./SalesforceEcommerceContent";

export const metadata: Metadata = {
  title: "Best Salesforce E-commerce Solutions | ARDN Solutions",
  description: "Compare Salesforce-native commerce solutions and integrations and find the right fit with tips, features, and pitfalls to guide your choice.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
    languages: {
      "en-US": "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
      "x-default": "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
    },
  },
  openGraph: {
    title: "Best Salesforce E-commerce Solutions | ARDN Solutions",
    description: "Compare Salesforce-native commerce solutions and integrations and find the right fit with tips, features, and pitfalls to guide your choice.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/buyers-guide/ARDN-Storefronts-as-the-all-in-one-Salesforce-native.webp",
        width: 1200,
        height: 630,
        alt: "Best Salesforce E-commerce Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salesforce E-commerce Solutions | ARDN Solutions",
    description: "Compare Salesforce-native commerce solutions and integrations and find the right fit with tips, features, and pitfalls to guide your choice.",
    images: ["/buyers-guide/ARDN-Storefronts-as-the-all-in-one-Salesforce-native.webp"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
        "url": "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions",
        "name": "Best Salesforce E-commerce Solutions | ARDN Solutions",
        "description": "Compare Salesforce-native commerce solutions and integrations and find the right fit with tips, features, and pitfalls to guide your choice.",
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
        "headline": "Best Salesforce e-commerce Solutions: A Buyer's Guide",
        "name": "Best Salesforce e-commerce Solutions: A Buyer's Guide"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
          { "@type": "ListItem", "position": 2, "name": "Buyers Guide", "item": "https://ardncloudsolutions.com/buyers-guide" },
          { "@type": "ListItem", "position": 3, "name": "Salesforce Ecommerce Solutions", "item": "https://ardncloudsolutions.com/buyers-guide/salesforce-ecommerce-solutions" }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Best Salesforce Native E-commerce Solutions",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ARDN Storefront: The All-in-One Native Salesforce Commerce Solution" },
          { "@type": "ListItem", "position": 2, "name": "Commerce Studio by 1440: For Multi-Channel Order & Inventory Orchestration" },
          { "@type": "ListItem", "position": 3, "name": "StoreConnect: For Vertical-Specific Businesses and POS for Multi-Location" },
          { "@type": "ListItem", "position": 4, "name": "Fonteva eCommerce: for Membership-Driven Organizations" },
          { "@type": "ListItem", "position": 5, "name": "Nexternal Solutions: For B2B Brands That Need Procurement-Ready Ordering" },
          { "@type": "ListItem", "position": 6, "name": "Shopify Plus: For High-Growth D2C & Omnichannel Brands" },
          { "@type": "ListItem", "position": 7, "name": "Adobe Commerce (Magento): for Enterprise-Scale B2B & B2C Brands" }
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
      <SalesforceEcommerceContent />
    </>
  );
}
