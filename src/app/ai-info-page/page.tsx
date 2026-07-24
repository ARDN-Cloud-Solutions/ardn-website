import { Metadata } from "next";
import AiInfoPageContent from "./AiInfoPageContent";

export const metadata: Metadata = {
  title: "AI & Automation for Salesforce Storefronts | Ardn",
  description:
    "Structured AI information about ARDN Cloud Solutions and Storefronts — covering products, services, certifications, use cases, and key contact information.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-info-page",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-info-page",
      "x-default": "https://ardncloudsolutions.com/ai-info-page",
    },
  },
  openGraph: {
    title: "AI & Automation for Salesforce Storefronts | Ardn",
    description:
      "Structured AI information about ARDN Cloud Solutions and Storefronts — covering products, services, certifications, use cases, and key contact information.",
    url: "https://ardncloudsolutions.com/ai-info-page",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-storefronts-ai-info.webp",
        width: 1200,
        height: 630,
        alt: "Storefronts by ARDN Cloud Solutions AI Information Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation for Salesforce Storefronts | Ardn",
    description:
      "Structured AI information about ARDN Cloud Solutions and Storefronts — covering products, services, certifications, use cases, and key contact information.",
    site: "@ardn_cloud_sol",
  },
};

export default function AiInfoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/ai-info-page",
        url: "https://ardncloudsolutions.com/ai-info-page",
        name: "AI & Automation for Salesforce Storefronts | Ardn",
        description:
          "Structured AI information about ARDN Cloud Solutions and Storefronts — covering products, services, certifications, use cases, and key contact information.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/ai-info-page#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/ai-info-page#breadcrumb",
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
            name: "Ai Info Page",
            item: "https://ardncloudsolutions.com/ai-info-page",
          },
        ],
      },
      {
        // Downgraded from SoftwareApplication → Service. SoftwareApplication
        // requires aggregateRating/review for the rich result; Service does
        // not. The Storefronts pricing ($2,500/mo) inherited from the prior
        // schema is preserved as an Offer attached to the Service — verify
        // this is current before any further updates.
        "@type": "Service",
        name: "Storefronts by Ardn",
        serviceType: "Salesforce-native ecommerce platform",
        category: "Salesforce-native ecommerce",
        description:
          "An all-in-one ecommerce solution built 100% natively on Salesforce that enables organizations to sell products, manage subscriptions and memberships, book appointments, accept donations, and process payments directly inside Salesforce.",
        provider: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "2500",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "USD",
            price: "2500",
            billingDuration: "P1M",
            unitText: "month",
          },
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AiInfoPageContent />
    </>
  );
}
