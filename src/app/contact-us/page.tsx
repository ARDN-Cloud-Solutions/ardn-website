import { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us - Ardn Cloud Solutions",
  description: "Have a question or ready to get started? Contact the ARDN Cloud Solutions team today. We're here to help you get the most from your Salesforce investment.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/contact-us",
    languages: {
      "en-US": "https://ardncloudsolutions.com/contact-us",
      "x-default": "https://ardncloudsolutions.com/contact-us",
    },
  },
  openGraph: {
    title: "Contact Us - Ardn Cloud Solutions",
    description: "Have a question or ready to get started? Contact the ARDN Cloud Solutions team today. We're here to help you get the most from your Salesforce investment.",
    url: "https://ardncloudsolutions.com/contact-us",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/contact-hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Contact Us - Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Ardn Cloud Solutions",
    description: "Have a question or ready to get started? Contact the ARDN Cloud Solutions team today. We're here to help you get the most from your Salesforce investment.",
    site: "@ardn_cloud_sol",
  },
};

export default function ContactUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/contact-us",
        "url": "https://ardncloudsolutions.com/contact-us",
        "name": "Contact Us - Ardn Cloud Solutions",
        "description": "Have a question or ready to get started? Contact the ARDN Cloud Solutions team today. We're here to help you get the most from your Salesforce investment.",
        "breadcrumb": { "@id": "https://ardncloudsolutions.com/contact-us#breadcrumb" },
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/contact-us#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ardncloudsolutions.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact Us",
            "item": "https://ardncloudsolutions.com/contact-us",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen pt-[70px] lg:pt-[154px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageContent />
    </div>
  );
}
