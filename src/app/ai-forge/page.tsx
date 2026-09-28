import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { AI_FORGE } from "./content";

// SEO/positioning: AI Forge is Category 2 (Agile Custom Development Agency,
// powered by our proprietary AI Forge Framework). Salesforce keywords removed
// from metadata so the page does not get anchored on Salesforce intent in
// search — keywords now target the agile custom dev / AI app development
// queries this page is actually built to win.
export const metadata: Metadata = {
  title:
    "AI Forge — Custom AI Apps, Built & Run for You | Ardn",
  description:
    "Custom AI apps designed, built, hosted & improved for one flat monthly fee. New customers: we build your app free. Live in weeks, not months.",
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
      "AI Forge — Custom AI Apps, Built & Run for You | Ardn",
    description:
      "80% of AI projects fail. Ours don't — because we build them AND run them. Custom AI apps in 2–6 weeks under one monthly fee. New customers: free custom AI build.",
    url: "https://ardncloudsolutions.com/ai-forge",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-share.jpg",
        width: 1200,
        height: 630,
        // Outcome-focused alt describing what AI Forge does for the searcher.
        alt: "AI Forge by Ardn — custom AI applications built and operated by our expert team using the AI Forge Framework",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Forge — Custom AI Apps, Built & Run for You | Ardn",
    description:
      "80% of AI projects fail. Ours don't — because we build them AND run them. New customers: free custom AI build.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-share.jpg"],
  },
};

export default function AiForgePage() {
  const jsonLd = productJsonLd(AI_FORGE, {
    path: "/ai-forge",
    name: "AI Forge",
    kind: "Service",
    category: "Custom AI application development and managed service",
    description: "Custom AI apps designed, built, hosted and continuously improved for one monthly fee. New customers pay no build fee on Launch and Scale.",
    image: "/images/ai-forge/claims-intake-assistant.webp",
  });
  // Published tiers as offers on the service node.
  const service = jsonLd["@graph"][2] as Record<string, unknown>;
  service.offers = AI_FORGE.plans!.items
    .filter((p) => /^\$[\d,]+$/.test(p.price))
    .map((p) => ({
      "@type": "Offer",
      name: `AI Forge ${p.name}`,
      priceCurrency: "USD",
      price: p.price.replace(/[$,]/g, ""),
      priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "USD", price: p.price.replace(/[$,]/g, ""), unitText: "month" },
      availability: "https://schema.org/InStock",
    }));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={AI_FORGE} />
    </>
  );
}
