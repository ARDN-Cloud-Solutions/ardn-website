import { Metadata } from "next";
import LicenseGuardContent from "./LicenseGuardContent";

export const metadata: Metadata = {
  title: "License Guard - Ardn Cloud Solutions",
  description:
    "License Guard helps Salesforce admins track and optimise user licences — completely free on AppExchange. Stop overpaying for unused Salesforce seats today.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/license-guard",
    languages: {
      "en-US": "https://ardncloudsolutions.com/license-guard",
      "x-default": "https://ardncloudsolutions.com/license-guard",
    },
  },
  openGraph: {
    title: "License Guard - Ardn Cloud Solutions",
    description:
      "License Guard helps Salesforce admins track and optimise user licences — completely free on AppExchange. Stop overpaying for unused Salesforce seats today.",
    url: "https://ardncloudsolutions.com/license-guard",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/License-Guard-For-Salesforce.webp",
        width: 1200,
        height: 630,
        alt: "License Guard For Salesforce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "License Guard - Ardn Cloud Solutions",
    description:
      "License Guard helps Salesforce admins track and optimise user licences — completely free on AppExchange. Stop overpaying for unused Salesforce seats today.",
    site: "@ardn_cloud_sol",
  },
};

export default function LicenseGuardPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/license-guard",
        url: "https://ardncloudsolutions.com/license-guard",
        name: "License Guard - Ardn Cloud Solutions",
        description:
          "License Guard helps Salesforce admins track and optimise user licences — completely free on AppExchange. Stop overpaying for unused Salesforce seats today.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/license-guard#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/license-guard#breadcrumb",
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
            name: "License Guard",
            item: "https://ardncloudsolutions.com/license-guard",
          },
        ],
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@type": "Organization",
          name: "Ardn Cloud Solutions",
        },
        reviewBody:
          "Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business. Their strategic focus on high-impact efficiencies transformed our operations, delivering substantial cost reductions and measurable improvements throughout our processes.",
        author: {
          "@type": "Person",
          name: "Jay Vashi",
          jobTitle: "Salesforce Delivery Manager",
          worksFor: {
            "@type": "Organization",
            name: "Fortune 500 insurance company",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is License Guard?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "License Guard is a Salesforce-native tool that tracks inactive users, sends warning emails, and automatically deactivates them—helping you reclaim unused licenses and reduce unnecessary costs.",
            },
          },
          {
            "@type": "Question",
            name: "How does it detect inactive users?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It checks users' last login activity. You can define the inactivity threshold (e.g., 60 or 90 days) based on your organization's needs.",
            },
          },
          {
            "@type": "Question",
            name: "Can I warn users before deactivation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can send automated warning emails using your custom templates a few days before deactivation.",
            },
          },
          {
            "@type": "Question",
            name: "What if I want to exclude certain users?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can easily exempt users by profile, permission set, or individual user ID—ensuring complete control over who's monitored.",
            },
          },
          {
            "@type": "Question",
            name: "Is License Guard secure and native to Salesforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. It's built 100% on Salesforce using Apex and Flows, with no third-party dependencies.",
            },
          },
          {
            "@type": "Question",
            name: "How can I change the inactivity period?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Simply go to the License Guard Settings tab within the app, and update the \"Inactivity Period (Days)\" field. You can customize this to match your internal policy—whether it's 30, 60, 90 days or more.",
            },
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
      < LicenseGuardContent />
    </main>
  );
}
