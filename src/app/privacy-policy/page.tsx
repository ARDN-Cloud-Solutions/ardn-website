import { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Ardn Cloud Solutions Privacy Policy | How We Use Your Data",
  description:
    "Learn how Ardn Cloud Solutions collects, uses & protects your personal data. Read our Privacy Policy to understand your rights and how we handle your data.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/privacy-policy",
    languages: {
      "en-US": "https://ardncloudsolutions.com/privacy-policy",
      "x-default": "https://ardncloudsolutions.com/privacy-policy",
    },
  },
  openGraph: {
    title: "Ardn Cloud Solutions Privacy Policy | How We Use Your Data",
    description:
      "Learn how Ardn Cloud Solutions collects, uses & protects your personal data. Read our Privacy Policy to understand your rights and how we handle your data.",
    url: "https://ardncloudsolutions.com/privacy-policy",
    siteName: "Ardn Cloud Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardn Cloud Solutions Privacy Policy | How We Use Your Data",
    description:
      "Learn how Ardn Cloud Solutions collects, uses & protects your personal data. Read our Privacy Policy to understand your rights and how we handle your data.",
    site: "@ardn_cloud_sol",
  },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/privacy-policy",
        url: "https://ardncloudsolutions.com/privacy-policy",
        name: "Ardn Cloud Solutions Privacy Policy | How We Use Your Data",
        description:
          "Read the Ardn Cloud Solutions Privacy Policy to understand how we collect, use, and protect your personal data.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/privacy-policy#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/privacy-policy#breadcrumb",
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
            name: "Privacy Policy",
            item: "https://ardncloudsolutions.com/privacy-policy",
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
      <PrivacyPolicyContent />
    </>
  );
}
