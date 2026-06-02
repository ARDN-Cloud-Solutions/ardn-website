import { Metadata } from "next";
import AiForgeContent from "./AiForgeContent";

// SEO/positioning: AI Forge is Category 2 (Agile Custom Development Agency,
// powered by our proprietary AI Forge Framework). Salesforce keywords removed
// from metadata so the page does not get anchored on Salesforce intent in
// search — keywords now target the agile custom dev / AI app development
// queries this page is actually built to win.
export const metadata: Metadata = {
  title:
    "AI Forge — Custom AI Apps & Software, Built in Weeks | Ardn Cloud Solutions",
  description:
    "Our Orlando-based development team uses the proprietary AI Forge Framework to design, build, and ship custom AI applications and business software in weeks, not months — then runs them as a managed service.",
  // SEO hybrid: lead with custom-AI / agile-dev intent (Cat 2 positioning),
  // but explicitly preserve Salesforce-AI and Salesforce-integration queries so
  // the page still wins managed-services-adjacent searches. Ardn's 30+ years
  // of SF expertise is a credibility asset we want findable from this page.
  keywords: [
    "custom AI app development",
    "AI development agency",
    "custom software development",
    "agile development agency",
    "AI as a service",
    "AI Forge Framework",
    "AI implementation partner",
    "AI Salesforce integration",
    "Salesforce AI development",
    "Salesforce managed services",
    "Orlando AI development",
    "Florida custom software",
    "Ardn AI Forge",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-forge",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-forge",
      "x-default": "https://ardncloudsolutions.com/ai-forge",
    },
  },
  openGraph: {
    title:
      "AI Forge — Custom AI Apps & Software, Built in Weeks | Ardn Cloud Solutions",
    description:
      "80% of AI projects fail. Ours don't — because we build them AND run them. The AI Forge Framework ships custom apps in 2–6 weeks under one predictable monthly subscription.",
    url: "https://ardncloudsolutions.com/ai-forge",
    siteName: "Ardn Cloud Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Forge — Custom AI Apps & Software, Built in Weeks | Ardn Cloud Solutions",
    description:
      "80% of AI projects fail. Ours don't — because we build them AND run them.",
    site: "@ardn_cloud_sol",
  },
};

export default function AiForgePage() {
  // SEO: SoftwareApplication is the appropriate primary type — AI Forge is a
  // productized service that delivers a software application per engagement.
  // Publisher resolves back to the site-wide Organization (root layout).
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://ardncloudsolutions.com/ai-forge#software",
        name: "AI Forge by Ardn",
        applicationCategory: "BusinessApplication",
        applicationSubCategory:
          "Custom AI Application Development & Operating Partnership",
        operatingSystem: "Web",
        description:
          "AI Forge is a productized custom development practice. Our Orlando-based team designs, builds, deploys, and operates bespoke AI applications under one predictable monthly subscription, powered by the proprietary AI Forge Framework.",
        url: "https://ardncloudsolutions.com/ai-forge",
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        offers: [
          {
            "@type": "Offer",
            name: "AI Forge — Launch tier",
            priceCurrency: "USD",
            price: "1500",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "USD",
              price: "1500",
              unitText: "month",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "AI Forge — Scale tier",
            priceCurrency: "USD",
            price: "4500",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "USD",
              price: "4500",
              unitText: "month",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "AI Forge — Enterprise tier",
            priceCurrency: "USD",
            price: "12000",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              priceCurrency: "USD",
              price: "12000",
              unitText: "month",
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/ai-forge",
        url: "https://ardncloudsolutions.com/ai-forge",
        name: "AI Forge — Custom AI Apps & Software, Built in Weeks | Ardn Cloud Solutions",
        description:
          "Our Orlando-based team builds and runs custom AI applications under one monthly subscription. AI Forge Framework — production-ready in 2–6 weeks.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/ai-forge#breadcrumb",
        },
        inLanguage: "en-US",
        about: {
          "@id": "https://ardncloudsolutions.com/ai-forge#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/ai-forge#breadcrumb",
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
            name: "AI Forge",
            item: "https://ardncloudsolutions.com/ai-forge",
          },
        ],
      },
    ],
  };

  return (
    // Semantic HTML5: <main> wrapper ensures AiForgeContent (a <div>) is
    // exposed as the page's primary landmark for assistive tech and crawlers.
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AiForgeContent />
    </main>
  );
}
