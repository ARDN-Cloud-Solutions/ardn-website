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
        // Downgraded from SoftwareApplication → Service per Google's rich-
        // result eligibility audit. Service does not require
        // aggregateRating/review, removing the validation error while keeping
        // the semantic meaning (AI Forge is a managed-service productized
        // engagement, which Service describes more accurately than
        // SoftwareApplication anyway). The three tiers are represented as a
        // hasOfferCatalog of OfferCatalog → Offer entries.
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/ai-forge#service",
        name: "AI Forge by Ardn",
        serviceType:
          "Custom AI Application Development & Operating Partnership",
        category: "Business custom software development",
        description:
          "AI Forge is a productized custom development practice. Our Orlando-based team designs, builds, deploys, and operates bespoke AI applications under one predictable monthly subscription, powered by the proprietary AI Forge Framework.",
        url: "https://ardncloudsolutions.com/ai-forge",
        provider: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Forge tiers",
          itemListElement: [
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
          "@id": "https://ardncloudsolutions.com/ai-forge#service",
        },
      },
      {
        // SEO/rich snippets: FAQPage markup. Questions mirror the on-page
        // FAQ exactly. Google requires Q/A content to be visible on the
        // rendered page for the rich result to fire.
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/ai-forge#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What kinds of AI apps do you build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Anything that modern AI can do. Customer-facing chatbots and support agents. Internal workflow automations. Document processing and data extraction. Sales enablement tools. Analytics and forecasting systems. Industry-specific vertical apps. If you can describe the problem, we can scope the build. We don't sell templates — we build to your exact specifications.",
            },
          },
          {
            "@type": "Question",
            name: "How is this different from your AI-Powered Support product?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "AI-Powered Support is a productized, no-code support automation tool. AI Forge is custom development — we build whatever AI application your business needs, from scratch, to your exact specs. Think of AI-Powered Support as off-the-shelf and AI Forge as tailor-made.",
            },
          },
          {
            "@type": "Question",
            name: "What is a service credit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "One service credit equals one hour of senior engineering or design work. You use them for new features, change requests, integrations, custom reporting, or anything else that needs human work. Unused credits roll over up to 30% of your monthly allocation. Overages are billed at our standard hourly rate.",
            },
          },
          {
            "@type": "Question",
            name: "What if I burn through my AI credits?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You get real-time usage dashboards and alerts at 50%, 75%, and 90% of your monthly allocation. If you exceed the pool, overages are passed through at cost (no markup) or you can upgrade your tier mid-cycle and we prorate. We also continuously optimize your prompts to reduce token consumption — usually 30–50% over the first quarter.",
            },
          },
          {
            "@type": "Question",
            name: "Do I own the app you build?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You own the IP and the data. We retain rights to the underlying frameworks and tooling we use across clients. If you ever leave, you get a complete export of your data and full documentation of your application. We have no interest in lock-in — our model only works if you want to stay.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a minimum contract?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No long-term contract required on Launch or Scale tiers — month-to-month after the build is delivered. Enterprise engagements typically include a 12-month commitment in exchange for negotiated rates and dedicated capacity. You can upgrade, downgrade, or cancel any tier with 30 days notice.",
            },
          },
          {
            "@type": "Question",
            name: "Can you integrate with Salesforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — Salesforce integration is one of our specialties. Ardn has 30+ years of Salesforce experience as a company, so AI Forge applications routinely read from, write to, and orchestrate work inside Salesforce. We also integrate with HubSpot, Microsoft Dynamics, your data warehouse, internal APIs, billing systems, and 5,000+ other tools — whichever stack your business actually runs on.",
            },
          },
          {
            "@type": "Question",
            name: "What if my AI needs change?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "That's the whole point. Models evolve, your business evolves, and your AI app needs to evolve with it. Your monthly subscription includes ongoing iteration — new features, model upgrades, prompt tuning, and integration changes — all drawn from your service credit pool. You won't need a new contract every time something changes.",
            },
          },
        ],
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
