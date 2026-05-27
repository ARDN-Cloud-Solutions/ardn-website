import { Metadata } from "next";
import MembershipContent from "./MembershipContent";

export const metadata: Metadata = {
  title: "Membership Platform - Ardn Cloud Solutions",
  description:
    "Run your members inside Salesforce. Sign-up, recurring billing, member portal, class scheduling, and analytics — all native to your CRM.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/membership-platform",
    languages: {
      "en-US": "https://ardncloudsolutions.com/membership-platform",
      "x-default": "https://ardncloudsolutions.com/membership-platform",
    },
  },
  openGraph: {
    title: "Membership Platform - Ardn Cloud Solutions",
    description:
      "Run your members inside Salesforce. Sign-up, recurring billing, member portal, class scheduling, and analytics — all native to your CRM.",
    url: "https://ardncloudsolutions.com/membership-platform",
    siteName: "Ardn Cloud Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Platform - Ardn Cloud Solutions",
    description:
      "Run your members inside Salesforce. Sign-up, recurring billing, member portal, class scheduling, and analytics — all native to your CRM.",
    site: "@ardn_cloud_sol",
  },
};

export default function MembershipPlatformPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/membership-platform",
        url: "https://ardncloudsolutions.com/membership-platform",
        name: "Membership Platform - Ardn Cloud Solutions",
        description:
          "Run your members inside Salesforce. Sign-up, recurring billing, member portal, class scheduling, and analytics — all native to your CRM.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/membership-platform#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/membership-platform#breadcrumb",
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
            name: "Membership Platform",
            item: "https://ardncloudsolutions.com/membership-platform",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MembershipContent />
    </main>
  );
}
