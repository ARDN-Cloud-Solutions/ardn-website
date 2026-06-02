import { Metadata } from "next";
import LicenseGuardContent from "./LicenseGuardContent";

// SEO/positioning: License Guard is Category 1 (Salesforce-native). Metadata
// optimised for high-intent Salesforce-cost-reduction and license-audit
// queries. The product is free on AppExchange, so we lead with that hook.
export const metadata: Metadata = {
  title:
    "License Guard — Free Salesforce License Audit & Optimization | Ardn Cloud Solutions",
  description:
    "License Guard by Ardn is a free Salesforce-native AppExchange tool that detects inactive seats, warns users, and deactivates per your policy. Reclaim unused Salesforce licenses and cut renewal costs by 15–30%. Built by our Orlando-based team.",
  keywords: [
    "Salesforce license audit",
    "Salesforce license optimization",
    "free Salesforce license tool",
    "Salesforce unused licenses",
    "Salesforce cost reduction",
    "Salesforce user inactivity",
    "Salesforce AppExchange free app",
    "Salesforce license management",
    "Salesforce admin tools",
    "Ardn License Guard",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/license-guard",
    languages: {
      "en-US": "https://ardncloudsolutions.com/license-guard",
      "x-default": "https://ardncloudsolutions.com/license-guard",
    },
  },
  openGraph: {
    title:
      "License Guard — Free Salesforce License Audit & Optimization | Ardn Cloud Solutions",
    description:
      "Free AppExchange tool. Detects inactive Salesforce users, sends warnings, and deactivates per your policy. Most customers reclaim 15–30% of license spend at renewal.",
    url: "https://ardncloudsolutions.com/license-guard",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/License-Guard-For-Salesforce.webp",
        width: 1200,
        height: 630,
        // Outcome-focused alt — describes what the image conveys.
        alt: "License Guard for Salesforce — free AppExchange tool to detect inactive users and reclaim unused licenses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "License Guard — Free Salesforce License Audit & Optimization",
    description:
      "Free AppExchange tool. Detects inactive Salesforce users, sends warnings, and deactivates per your policy. Reclaim 15–30% of license spend at renewal.",
    site: "@ardn_cloud_sol",
  },
};

export default function LicenseGuardPage() {
  // SEO: SoftwareApplication primary type (was missing). Publisher resolves
  // to the site-wide Organization via @id. Free product so the Offer carries
  // price 0. Review + FAQPage kept and refined.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://ardncloudsolutions.com/license-guard#software",
        name: "License Guard",
        applicationCategory: "BusinessApplication",
        applicationSubCategory:
          "Salesforce license audit and user-inactivity automation",
        operatingSystem: "Salesforce",
        description:
          "Salesforce-native tool that tracks inactive users, sends customizable warning emails, and automatically deactivates per your policy. Built 100% on Salesforce (Apex + Flows) with no third-party dependencies. Free on AppExchange.",
        url: "https://ardncloudsolutions.com/license-guard",
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        featureList: [
          "Detects inactive users based on last-login date",
          "Configurable inactivity threshold (30 / 60 / 90+ days)",
          "Pre-deactivation warning emails with custom templates",
          "Exclusion lists by profile, permission set, or user ID",
          "100% Salesforce-native — no third-party dependencies",
          "Free on the AppExchange",
        ],
        isAccessibleForFree: true,
      },
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/license-guard",
        url: "https://ardncloudsolutions.com/license-guard",
        name: "License Guard — Free Salesforce License Audit & Optimization | Ardn Cloud Solutions",
        description:
          "License Guard by Ardn is a free Salesforce-native tool that detects inactive seats, warns users, and deactivates per policy. Reclaim 15–30% of Salesforce license spend.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/license-guard#breadcrumb",
        },
        inLanguage: "en-US",
        about: {
          "@id": "https://ardncloudsolutions.com/license-guard#software",
        },
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
          "@id":
            "https://ardncloudsolutions.com/license-guard#software",
        },
        reviewBody:
          "Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business. Their strategic focus on high-impact efficiencies transformed our operations, delivering substantial cost reductions and measurable improvements throughout our processes.",
        author: {
          "@type": "Person",
          name: "Jay Vashi",
          // Role generalised to align with the site-wide dual-pillar
          // positioning.
          jobTitle: "Senior Delivery Manager",
          worksFor: {
            "@type": "Organization",
            name: "Fortune 500 insurance company",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/license-guard#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is License Guard?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "License Guard is a Salesforce-native tool that tracks inactive users, sends warning emails, and automatically deactivates them — helping you reclaim unused licenses and cut renewal costs.",
            },
          },
          {
            "@type": "Question",
            name: "How does it detect inactive users?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "License Guard checks each user's last-login date. You define the inactivity threshold (e.g., 60 or 90 days) based on your organization's policy.",
            },
          },
          {
            "@type": "Question",
            name: "Can I warn users before deactivation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. License Guard sends automated warning emails using your custom email templates a few days before deactivation, so users have the chance to log back in.",
            },
          },
          {
            "@type": "Question",
            name: "What if I want to exclude certain users?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can exempt users by profile, permission set, or individual user ID — full control over who is monitored.",
            },
          },
          {
            "@type": "Question",
            name: "Is License Guard secure and native to Salesforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. License Guard is built 100% on Salesforce using Apex and Flows, with no third-party dependencies, no external storage, and no data leaving your org.",
            },
          },
          {
            "@type": "Question",
            name: "How can I change the inactivity period?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Go to the License Guard Settings tab inside the app and update the Inactivity Period (Days) field. Customize to match your internal policy — 30, 60, 90 days, or more.",
            },
          },
          {
            "@type": "Question",
            name: "Is License Guard really free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. License Guard is free on the Salesforce AppExchange. If you need help configuring inactivity rules, integrating with your renewal process, or running a paid license audit across multiple orgs, our Orlando-based Salesforce consulting team can help.",
            },
          },
        ],
      },
    ],
  };

  return (
    // Semantic HTML5: <main> primary landmark.
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LicenseGuardContent />
    </main>
  );
}
