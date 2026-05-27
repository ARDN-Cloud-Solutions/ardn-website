import { Metadata } from "next";
import SalesforceCommerceCloudAlternativesContent from "./SalesforceCommerceCloudAlternativesContent";

export const metadata: Metadata = {
  title: "Salesforce Commerce Cloud Alternatives | ARDN Solutions",
  description: "Explore top Salesforce Commerce Cloud alternatives, like ARDN Storefronts, Shopify, Magento, and more, to find the right fit for your business needs.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
    languages: {
      "en-US": "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
      "x-default": "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
    },
  },
  openGraph: {
    title: "Salesforce Commerce Cloud Alternatives | ARDN Solutions",
    description: "Explore top Salesforce Commerce Cloud alternatives, like ARDN Storefronts, Shopify, Magento, and more, to find the right fit for your business needs.",
    url: "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Best Salesforce Commerce Cloud Alternatives",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Commerce Cloud Alternatives | ARDN Solutions",
    description: "Explore top Salesforce Commerce Cloud alternatives, like ARDN Storefronts, Shopify, Magento, and more, to find the right fit for your business needs.",
    images: ["/buyers-guide/ardn-all-in-one-ecommerce.webp"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
        "url": "https://ardncloudsolutions.com/compare/salesforce-commerce-cloud-alternatives",
        "name": "Salesforce Commerce Cloud Alternatives | ARDN Solutions",
        "description": "Explore top Salesforce Commerce Cloud alternatives, like ARDN Storefronts, Shopify, Magento, and more, to find the right fit for your business needs.",
        "inLanguage": "en-US",
        "publisher": {
          "@type": "Organization",
          "name": "Ardn Cloud Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ardncloudsolutions.com/logo/ardn_logo.png"
          }
        }
      }
    ]
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
