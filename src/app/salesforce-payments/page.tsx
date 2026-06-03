import { Metadata } from "next";
import SalesforcePaymentContent from "./SalesforcePaymentContent";

// SEO/positioning: Salesforce Payments is Category 1 (Salesforce-native).
// The product name itself contains the primary keyword we want to rank for,
// so we lean into it across title, description, and keywords. Metadata
// emphasises the Salesforce-native, no-middleware, quote-to-cash positioning.
export const metadata: Metadata = {
  title:
    "Salesforce Payments — Native Quote-to-Cash & PCI-Compliant Checkout | Ardn Cloud Solutions",
  description:
    "Salesforce Payments by Ardn is a Salesforce-native payment platform. Cards, ACH, Apple Pay, Google Pay, and Venmo — collected inside your Salesforce org with branded checkout, real-time status, automated reconciliation, and PCI compliance built in. No middleware. Built by our Orlando-based team.",
  keywords: [
    "Salesforce payments",
    "Salesforce-native payments",
    "Salesforce quote to cash",
    "Salesforce checkout",
    "Salesforce billing",
    "Salesforce ACH payments",
    "Salesforce credit card processing",
    "Salesforce digital wallet payments",
    "Salesforce PCI compliance",
    "Salesforce payment integration",
    "Ardn Salesforce Payments",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/salesforce-payments",
    languages: {
      "en-US": "https://ardncloudsolutions.com/salesforce-payments",
      "x-default": "https://ardncloudsolutions.com/salesforce-payments",
    },
  },
  openGraph: {
    title:
      "Salesforce Payments — Native Quote-to-Cash & PCI-Compliant Checkout | Ardn Cloud Solutions",
    description:
      "Salesforce-native payment platform. Cards, ACH, Apple Pay, Google Pay, Venmo — collected inside your Salesforce org with branded checkout, real-time status, and automated reconciliation.",
    url: "https://ardncloudsolutions.com/salesforce-payments",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/Seamless-Transactions-Complete-Control.webp",
        width: 1200,
        height: 630,
        // Outcome-focused alt — describes what the image conveys.
        alt: "Salesforce Payments by Ardn — Salesforce-native quote-to-cash and branded checkout",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Salesforce Payments — Native Quote-to-Cash & PCI-Compliant Checkout",
    description:
      "Salesforce-native payment platform. Cards, ACH, Apple Pay, Google Pay, Venmo — collected inside your Salesforce org.",
    site: "@ardn_cloud_sol",
  },
};

export default function SalesforcePaymentsPage() {
  // SEO: SoftwareApplication primary type added (was missing). Publisher
  // references the site-wide Organization via @id so the entity graph
  // is coherent. Review now references the SoftwareApplication via @id
  // (was a generic Organization review). FAQPage refined and re-scoped.
  const url = "https://ardncloudsolutions.com/salesforce-payments";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Downgraded from SoftwareApplication → Service per Google audit
        // (SoftwareApplication requires aggregateRating/review for the rich
        // result; we don't have public ratings on this product).
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Ardn Salesforce Payments",
        serviceType: "Salesforce-native payments & checkout",
        category: "Salesforce-native payments",
        description:
          "Salesforce-native payments and quote-to-cash platform. Cards, ACH, Apple Pay, Google Pay, and Venmo collected inside Salesforce. Branded checkout, real-time payment status, automated reconciliation, and PCI compliance with no middleware.",
        url,
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
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: "Salesforce Payments — Native Quote-to-Cash & PCI-Compliant Checkout | Ardn Cloud Solutions",
        description:
          "Salesforce-native payments. Cards, ACH, Apple Pay, Google Pay, Venmo — collected inside your Salesforce org. PCI compliant.",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-US",
        about: { "@id": `${url}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
            name: "Salesforce Payments",
            item: url,
          },
        ],
      },
      // Standalone Review JSON-LD removed (per Google audit on 2026-06-03)
      // because the rich Review-snippet requires a numeric reviewRating AND
      // visibly-displayed star rating on the page; we have neither.
      // The Jay Vashi testimonial remains visible on the page itself.
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Is Salesforce Payments compatible with all Salesforce editions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Salesforce Payments by Ardn installs across all major Salesforce editions — Enterprise, Unlimited, Professional (where applicable), and partner-managed orgs. We will run a fit check on your edition during the free 30-minute call.",
            },
          },
          {
            "@type": "Question",
            name: "Can we customise the checkout experience?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The checkout UI is fully brandable — logo, colors, copy, fields, and flow are all configurable to match your business model and your Salesforce org's branding standards.",
            },
          },
          {
            "@type": "Question",
            name: "What payment methods are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cards, ACH, Apple Pay, Google Pay, and Venmo, with support for major US processors including Stripe and Paymentus. Bring your own merchant account for the lowest rates, or use ours.",
            },
          },
          {
            "@type": "Question",
            name: "Is Salesforce Payments secure and PCI compliant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Salesforce Payments is fully PCI compliant out of the box. Cardholder data is tokenised at the processor; nothing sensitive lands in your Salesforce org. Audit-ready for SOC 2 and HIPAA controls when paired with the right processor.",
            },
          },
          {
            "@type": "Question",
            name: "Can Ardn assist with implementation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our Orlando-based team has 30+ years of Salesforce experience and can run the full implementation — processor onboarding, checkout customisation, reconciliation rules, and reporting setup — typically inside a single sprint.",
            },
          },
          {
            "@type": "Question",
            name: "How does it differ from Salesforce Billing or Revenue Cloud?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Salesforce Billing and Revenue Cloud are enterprise platforms built around subscription billing complexity and per-user licensing. Ardn Salesforce Payments is a lightweight, productized native payment layer — branded checkout, multi-method support, and reconciliation — typically at a fraction of the cost and implementation time.",
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
      <SalesforcePaymentContent />
    </main>
  );
}
