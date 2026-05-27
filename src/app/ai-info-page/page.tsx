import { Metadata } from "next";
import AiInfoPageContent from "./AiInfoPageContent";

export const metadata: Metadata = {
  title: "ARDN Storefronts: AI Information Page | Ardn Cloud",
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
    title: "ARDN Storefronts: AI Information Page | Ardn Cloud",
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
    title: "ARDN Storefronts: AI Information Page | Ardn Cloud",
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
        name: "ARDN Storefronts: AI Information Page | Ardn Cloud",
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
        "@type": "SoftwareApplication",
        name: "Storefronts",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Salesforce",
        description:
          "An all-in-one ecommerce solution built 100% natively on Salesforce that enables organizations to sell products, manage subscriptions and memberships, book appointments, accept donations, and process payments directly inside Salesforce.",
        offers: {
          "@type": "Offer",
          price: "2500",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            billingDuration: "P1M",
          },
        },
        creator: {
          "@type": "Organization",
          name: "ARDN Cloud Solutions",
          url: "https://ardncloudsolutions.com/",
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
