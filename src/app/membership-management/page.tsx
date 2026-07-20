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
    "Membership Management Platform for Gyms & Clubs | Ardn",
  description:
    "AI-built membership platform for YMCAs, gyms, studios & clubs — sign-ups, billing, class scheduling & a member portal. Runs standalone or alongside your tools.",
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
      "Membership Management Platform for Gyms & Clubs | Ardn",
    description:
      "Flexible, AI-built membership platform. Run sign-ups, dues, classes, attendance, and retention from one system — standalone or alongside your existing stack.",
    url: "https://ardncloudsolutions.com/membership-management",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Membership Management — flexible AI-built platform for YMCAs, gyms, studios, and clubs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Membership Management Platform for Gyms & Clubs | Ardn",
    description:
      "Flexible, AI-built membership platform. Run sign-ups, dues, classes, attendance, and retention from one system.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
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
        // Downgraded from SoftwareApplication → Service per Google audit
        // (aggregateRating/review requirement). Service is appropriate
        // here — Membership Management is delivered as a managed AI-built
        // platform engagement, not a self-serve packaged software product.
        "@type": "Service",
        "@id":
          "https://ardncloudsolutions.com/membership-management#service",
        name: "Ardn Membership Management",
        serviceType: "Membership Management Platform",
        category: "Membership management software",
        description:
          "A flexible, AI-built membership management platform for YMCAs, gyms, studios, clubs, and associations. Runs standalone or alongside whatever CRM or back-office systems you already use.",
        url: "https://ardncloudsolutions.com/membership-management",
        provider: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
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
        name: "Membership Management Platform for Gyms & Clubs | Ardn",
        description:
          "Flexible, AI-built membership platform. Run sign-ups, dues, classes, attendance, and retention from one system — standalone or alongside your existing stack.",
        breadcrumb: {
          "@id":
            "https://ardncloudsolutions.com/membership-management#breadcrumb",
        },
        inLanguage: "en-US",
        about: {
          "@id":
            "https://ardncloudsolutions.com/membership-management#service",
        },
      },
      {
        // SEO/rich snippets: FAQPage markup makes the page eligible for FAQ
        // rich results in Google SERPs. Questions and answers mirror the
        // on-page FAQ — Google requires the content to be visible on the
        // rendered page for the rich result to fire.
        "@type": "FAQPage",
        "@id":
          "https://ardncloudsolutions.com/membership-management#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does it integrate with Salesforce and other CRMs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Membership Management runs standalone, and it integrates cleanly with Salesforce, HubSpot, Microsoft Dynamics, your accounting and marketing tools, and your reporting tools. Ardn has 30+ years of Salesforce expertise, so the Salesforce integration in particular is deep and well-tested — you keep your existing CRM as your main system if you want to.",
            },
          },
          {
            "@type": "Question",
            name: "Can it replace our current membership software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For most YMCAs, studios, and associations, yes. It handles sign-up, billing, scheduling, the member portal, and analytics in one platform. We map your requirements against the product before you buy.",
            },
          },
          {
            "@type": "Question",
            name: "What payment methods are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cards, ACH, Apple Pay, Google Pay, and Venmo. Bring your own processor or use ours. Recurring billing and automatic late-payment recovery are built in.",
            },
          },
          {
            "@type": "Question",
            name: "Can members manage their own accounts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The member portal lets members update payment, change plans, pause, cancel, and view their history without contacting staff.",
            },
          },
          {
            "@type": "Question",
            name: "How long does implementation take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most customers go live in 2–4 weeks. Complex migrations with large member databases typically take 4–8 weeks end to end.",
            },
          },
          {
            "@type": "Question",
            name: "Can we migrate our existing member data?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We map your existing data into the platform and migrate it cleanly. You do not start from zero, and you keep historical context.",
            },
          },
          {
            "@type": "Question",
            name: "Does it work for multiple locations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Multi-location, multi-plan, and multi-currency are all supported. Each location can have its own class schedules and membership tiers.",
            },
          },
        ],
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
