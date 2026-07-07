import { Metadata } from "next";
import SavingsCalculatorContent from "./SavingsCalculatorContent";

// Lead-magnet positioning: this page is the highest-intent free-tool entry
// point on the site. Metadata refresh adds "free" intent, software-cost-
// reduction keywords, and Salesforce-spend keywords so it surfaces for both
// the Cat 2 (replace your stack) and the Cat 1 (Salesforce cost optimization)
// buyer searches.
export const metadata: Metadata = {
  title:
    "Free Software Savings Calculator | Ardn",
  description:
    "Free 60-second calculator. See exactly how much your business overpays for Mindbody, Zenoti, Salesforce, HubSpot, or Daxko — and what a custom platform from our Orlando-based team would cost instead. No email required to see your number.",
  keywords: [
    "software savings calculator",
    "Salesforce cost calculator",
    "Salesforce spend optimization",
    "Mindbody alternative cost",
    "Zenoti alternative",
    "Daxko alternative",
    "HubSpot cost reduction",
    "custom software cost",
    "license guard savings",
    "Salesforce license audit",
    "Orlando custom software",
    "Florida AI development",
    "Ardn savings calculator",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/savings-calculator",
    languages: {
      "en-US": "https://ardncloudsolutions.com/savings-calculator",
      "x-default": "https://ardncloudsolutions.com/savings-calculator",
    },
  },
  openGraph: {
    title:
      "Free Software Savings Calculator | Ardn",
    description:
      "Free 60-second calculator. See exactly what your business overpays for Mindbody, Zenoti, Salesforce, HubSpot, or Daxko — and what a custom Ardn platform costs instead.",
    url: "https://ardncloudsolutions.com/savings-calculator",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Free Software Savings Calculator from Ardn Cloud Solutions — calculate Salesforce, Mindbody, and HubSpot overspend",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Free Software Savings Calculator | Ardn",
    description:
      "Free 60-second calculator. See exactly what your business overpays for Mindbody, Zenoti, Salesforce, HubSpot, or Daxko — and what a custom Ardn platform costs instead.",
    site: "@ardn_cloud_sol",
  },
};

export default function SavingsCalculatorPage() {
  // SEO/lead-magnet: WebApplication + Service + FAQPage triad. The
  // WebApplication describes the calculator itself (free tool, online,
  // BusinessApplication category), the Service points it to the consulting
  // engagement it warms up, and the FAQ targets long-tail "how much does X
  // cost" intent.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Downgraded from WebApplication → CreativeWork ("tool"). WebApplication
        // inherits SoftwareApplication and therefore inherits the same Google
        // aggregateRating/review requirement that triggered the audit error.
        // CreativeWork is the cleanest parent type for a free embedded
        // calculator: no rating requirement, still semantically accurate.
        "@type": "CreativeWork",
        "@id":
          "https://ardncloudsolutions.com/savings-calculator#tool",
        name: "Software Savings Calculator",
        url: "https://ardncloudsolutions.com/savings-calculator",
        description:
          "A free 60-second calculator that estimates how much your business overpays for tools like Mindbody, Zenoti, Salesforce, HubSpot, and Daxko — and compares that to the cost of a custom Ardn-built platform.",
        isAccessibleForFree: true,
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id":
          "https://ardncloudsolutions.com/savings-calculator#service",
        name: "Software Stack Cost Audit & Custom Platform Quote",
        description:
          "After using the free Software Savings Calculator, Ardn's Orlando-based team can deliver a written audit of your current software stack and a fixed quote for a custom replacement platform — typically built in 2–6 weeks via the AI Forge Framework.",
        provider: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
        serviceType: "Custom software cost audit and replacement build",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://ardncloudsolutions.com/savings-calculator#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does Mindbody cost vs a custom Ardn platform?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mindbody plans typically range from $129 to over $700 per month for the base subscription, with branded-app add-ons of $299/mo and marketplace commissions on top. A custom Ardn-built platform replaces the entire stack for one fixed monthly rate — the calculator gives you the exact comparison for your business.",
            },
          },
          {
            "@type": "Question",
            name: "Can Ardn audit our Salesforce spend?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Ardn has 30+ years of Salesforce expertise and offers Salesforce license audits and managed-services engagements that identify unused seats (via our License Guard product), redundant orgs, and over-licensed teams. The Savings Calculator gives you a fast first estimate; we follow up with a written audit on a free 30-minute call.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to give my email to see results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. The calculator runs entirely in your browser and you see your number immediately. If you want a written audit and a quote for a custom replacement, you can book a free 30-minute call with our Orlando-based team.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://ardncloudsolutions.com/savings-calculator#breadcrumb",
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
            name: "Savings Calculator",
            item: "https://ardncloudsolutions.com/savings-calculator",
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
      <SavingsCalculatorContent />
    </>
  );
}
