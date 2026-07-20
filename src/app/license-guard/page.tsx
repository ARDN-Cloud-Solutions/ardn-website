import { Metadata } from "next";
import LicenseGuardContent from "./LicenseGuardContent";

// SEO/positioning: License Guard is Category 1 (Salesforce-native). Metadata
// optimised for high-intent Salesforce-cost-reduction and license-audit
// queries. The product is free on AppExchange, so we lead with that hook.
export const metadata: Metadata = {
  title:
    "License Guard — Free Salesforce License Audit | Ardn",
  description:
    "Free Salesforce-native AppExchange tool that finds inactive seats, warns users & deactivates per policy. Reclaim unused licenses and cut renewal costs.",
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
      "License Guard — Free Salesforce License Audit | Ardn",
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
        // Downgraded from SoftwareApplication → Service to resolve Google's
        // aggregateRating/review rich-result requirement (License Guard has
        // only one real AppExchange review, not enough for a useful
        // aggregateRating). Service is still semantically appropriate for a
        // free Salesforce-native tool offered under a no-cost Offer.
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/license-guard#service",
        name: "License Guard",
        serviceType:
          "Salesforce license audit and user-inactivity automation",
        category: "Salesforce license management",
        description:
          "Salesforce-native tool that tracks inactive users, sends customizable warning emails, and automatically deactivates per your policy. Built 100% on Salesforce (Apex + Flows) with no third-party dependencies. Free on AppExchange.",
        url: "https://ardncloudsolutions.com/license-guard",
        provider: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/license-guard",
        url: "https://ardncloudsolutions.com/license-guard",
        name: "License Guard — Free Salesforce License Audit | Ardn",
        description:
          "License Guard by Ardn is a free Salesforce-native tool that detects inactive seats, warns users, and deactivates per policy. Reclaim 15–30% of Salesforce license spend.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/license-guard#breadcrumb",
        },
        inLanguage: "en-US",
        about: {
          "@id": "https://ardncloudsolutions.com/license-guard#service",
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
      // Standalone Review JSON-LD removed (per Google audit on 2026-06-03)
      // because the rich Review-snippet requires a numeric reviewRating AND
      // visibly-displayed star rating on the page; we have neither.
      // The Jay Vashi testimonial remains visible on the page itself.
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
