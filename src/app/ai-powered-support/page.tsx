import { Metadata } from "next";
import AiPoweredSupportContent from "./AiPoweredContent";

// SEO/positioning: AI-Powered Support (ReplyCX) sits at the intersection of
// both pillars — it is Salesforce-capable (works inside Salesforce CX) AND
// AI-built. Metadata leans on both intents: "AI customer support" for the
// AI-buyer searches, and "Salesforce-native customer support" for the SF-
// buyer searches that drive the existing managed-services traffic.
export const metadata: Metadata = {
  title:
    "ReplyCX — AI Customer Support for Salesforce | Ardn",
  description:
    "ReplyCX by Ardn is AI-built customer support that automates around 70% of routine queries across WhatsApp, email, chat, and social. No-code agent builder on your knowledge base, Salesforce-native CRM sync, and one omnichannel inbox. Built by our Orlando-based team.",
  keywords: [
    "AI customer support",
    "AI-powered customer support",
    "Salesforce AI support",
    "Salesforce customer service automation",
    "AI support automation",
    "no-code AI agent",
    "omnichannel customer support",
    "WhatsApp customer support",
    "Salesforce Service Cloud AI",
    "ReplyCX",
    "Ardn AI-Powered Support",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-powered-support",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-powered-support",
      "x-default": "https://ardncloudsolutions.com/ai-powered-support",
    },
  },
  openGraph: {
    title:
      "ReplyCX — AI Customer Support for Salesforce | Ardn",
    description:
      "AI-built customer support. Automates ~70% of routine queries across WhatsApp, email, chat, and social. No-code agent builder, Salesforce-native CRM sync, omnichannel inbox.",
    url: "https://ardncloudsolutions.com/ai-powered-support",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/AI-Powered-Support.webp",
        width: 1200,
        height: 630,
        // Outcome-focused alt.
        alt: "ReplyCX by Ardn — AI-powered omnichannel customer support automation for Salesforce and beyond",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ReplyCX — AI-Powered Customer Support for Salesforce & Beyond",
    description:
      "AI-built customer support. Automates ~70% of routine queries across WhatsApp, email, chat, and social.",
    site: "@ardn_cloud_sol",
  },
};

export default function AiPoweredSupportPage() {
  // SEO: SoftwareApplication primary type added (was missing). FAQPage
  // added with on-page-friendly Q/As (questions a real ReplyCX buyer
  // searches for). Publisher and Review both resolve to the site
  // Organization via @id.
  const url = "https://ardncloudsolutions.com/ai-powered-support";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Downgraded from SoftwareApplication → Service per Google audit
        // (SoftwareApplication requires aggregateRating/review for the rich
        // result; ReplyCX is delivered as a managed setup + ongoing service
        // anyway, so Service is the more semantically accurate type).
        "@type": "Service",
        "@id": `${url}#service`,
        name: "ReplyCX (AI-Powered Support by Ardn)",
        serviceType:
          "AI customer support automation & omnichannel helpdesk",
        category: "AI customer support",
        description:
          "AI-built customer support automation. ReplyCX automates roughly 70% of routine queries across WhatsApp, email, chat, and social — in one omnichannel inbox with a no-code agent builder on your existing knowledge base. Salesforce-native CRM sync available.",
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
        name: "ReplyCX — AI Customer Support for Salesforce | Ardn",
        description:
          "AI-built customer support that automates around 70% of routine queries across WhatsApp, email, chat, and social. Salesforce-native CRM sync.",
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
            name: "AI-Powered Support",
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
            name: "What is ReplyCX?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ReplyCX is Ardn's AI-powered customer support product. It automates roughly 70% of routine support queries across WhatsApp, email, chat, and social — using a no-code agent builder grounded in your existing knowledge base — and presents the rest in a single omnichannel inbox for your human agents.",
            },
          },
          {
            "@type": "Question",
            name: "Does ReplyCX work with Salesforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. ReplyCX integrates natively with Salesforce — Cases, Contacts, Accounts, and custom objects all sync. Ardn has 30+ years of Salesforce expertise, so the Salesforce integration is deeper than most off-the-shelf customer-support tools. ReplyCX also works alongside HubSpot, Zendesk, Intercom, and Microsoft Dynamics.",
            },
          },
          {
            "@type": "Question",
            name: "What channels does ReplyCX support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WhatsApp, SMS, email, live chat, and the major social inboxes. All channels feed a single omnichannel inbox, with auto-routing, priority logic, and SLA timers.",
            },
          },
          {
            "@type": "Question",
            name: "How is the AI agent trained?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Point ReplyCX at your existing knowledge base, help docs, FAQs, and past tickets. The no-code agent builder ingests the content, builds an answer model, and lets you control which questions the agent answers autonomously versus routes to a human.",
            },
          },
          {
            "@type": "Question",
            name: "How long does implementation take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most customers go live in one sprint (two weeks). Larger deployments — multi-language, multi-region, deep Salesforce custom-object work — typically take three to six weeks end to end.",
            },
          },
          {
            "@type": "Question",
            name: "How does ReplyCX differ from Salesforce Einstein or Service Cloud?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "ReplyCX is a productized AI support layer that installs over your existing channels — including Salesforce Service Cloud if you have it — without requiring Einstein licensing or a heavy Service Cloud rebuild. For Salesforce-only shops, we can also build deeper Salesforce-native AI agents via our AI Forge Framework.",
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
      <AiPoweredSupportContent />
    </main>
  );
}
