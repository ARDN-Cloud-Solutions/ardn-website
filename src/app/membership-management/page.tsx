import { Metadata } from "next";
import MembershipContent from "./MembershipContent";

// SEO/positioning: Membership Management is Category 2 (AI-built, CRM-agnostic).
// All "Salesforce-native" language has been removed and replaced with copy that
// positions the product as a flexible standalone platform for the YMCA / gym /
// studio / association model. Canonical URLs also corrected — the previous
// values pointed to /membership-platform which is not a real route on this site
// and was silently breaking Google's canonical signal.
export const metadata: Metadata = {
  title:
    "Membership Management Platform for Gyms, YMCAs & Clubs | Ardn Cloud Solutions",
  description:
    "A flexible, AI-built membership management platform for YMCAs, gyms, studios, and clubs. Sign-ups, recurring billing, class scheduling, and a member portal — runs standalone or alongside your existing tools. Built by our Orlando-based team.",
  // SEO hybrid: lead with the product-true intents (membership platform,
  // YMCA/gym/studio software), then preserve Salesforce buyer-intent
  // queries — the platform IS Salesforce-capable and the company is a
  // Salesforce expert, so we want to remain findable for SF-membership
  // searchers who are evaluating alternatives or integrations.
  keywords: [
    "membership management software",
    "membership management platform",
    "YMCA membership software",
    "gym membership management",
    "studio membership software",
    "club membership platform",
    "recurring billing membership",
    "membership portal",
    "Salesforce membership management",
    "Salesforce membership integration",
    "membership platform for Salesforce",
    "Ardn Membership Management",
  ],
  alternates: {
    // Self-referencing canonical now matches the real route.
    canonical: "https://ardncloudsolutions.com/membership-management",
    languages: {
      "en-US": "https://ardncloudsolutions.com/membership-management",
      "x-default": "https://ardncloudsolutions.com/membership-management",
    },
  },
  openGraph: {
    title:
      "Membership Management Platform for Gyms, YMCAs & Clubs | Ardn Cloud Solutions",
    description:
      "Flexible, AI-built membership platform. Run sign-ups, dues, classes, attendance, and retention from one system — standalone or alongside your existing stack.",
    url: "https://ardncloudsolutions.com/membership-management",
    siteName: "Ardn Cloud Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Membership Management Platform for Gyms, YMCAs & Clubs | Ardn Cloud Solutions",
    description:
      "Flexible, AI-built membership platform. Run sign-ups, dues, classes, attendance, and retention from one system.",
    site: "@ardn_cloud_sol",
  },
};

export default function MembershipManagementPage() {
  // SEO: SoftwareApplication schema is the right primary type for a product
  // page. Publisher references the site-wide Organization (defined in root
  // layout) via @id so Google can resolve the entity graph. WebPage +
  // BreadcrumbList are kept for the page-level crawl context.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id":
          "https://ardncloudsolutions.com/membership-management#software",
        name: "Ardn Membership Management",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Membership Management Software",
        operatingSystem: "Web",
        description:
          "A flexible, AI-built membership management platform for YMCAs, gyms, studios, clubs, and associations. Runs standalone or alongside whatever CRM or back-office systems you already use.",
        url: "https://ardncloudsolutions.com/membership-management",
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "YMCAs, gyms, fitness studios, yoga and dance studios, associations, and member-driven clubs",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/membership-management",
        url: "https://ardncloudsolutions.com/membership-management",
        name: "Membership Management Platform for Gyms, YMCAs & Clubs | Ardn Cloud Solutions",
        description:
          "Flexible, AI-built membership platform. Run sign-ups, dues, classes, attendance, and retention from one system — standalone or alongside your existing stack.",
        breadcrumb: {
          "@id":
            "https://ardncloudsolutions.com/membership-management#breadcrumb",
        },
        inLanguage: "en-US",
        about: {
          "@id":
            "https://ardncloudsolutions.com/membership-management#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://ardncloudsolutions.com/membership-management#breadcrumb",
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
            name: "Membership Management",
            item: "https://ardncloudsolutions.com/membership-management",
          },
        ],
      },
    ],
  };

  return (
    // Semantic HTML5: <main> as the primary page landmark, single per route.
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MembershipContent />
    </main>
  );
}
