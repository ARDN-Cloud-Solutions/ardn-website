import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { INTERACTIVE_PROPOSALS } from "./content";

// Interactive sales proposals as a done-for-you service for large B2B deals.
// Keyword Planner (US, Oct 2025–Sep 2026): "interactive proposal" 20/mo,
// "digital sales room" 480, "proposal software" 590 (software intent). The
// service terms are small, so this page is for search, AI answers and sales
// links, not paid ads. Truth guardrails are in ./content.ts.

const URL = "https://ardncloudsolutions.com/interactive-sales-proposals";
const TITLE = "Interactive Sales Proposals, Built for You | Ardn";
const DESC =
  "Ardn builds interactive sales proposals for big B2B deals: a private page with a savings and return calculator, demo clips, a fit-gap and a board brief. We show you what the buyer explored.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "interactive sales proposal",
    "interactive proposal",
    "interactive proposals",
    "digital sales room",
    "proposal design services",
    "sales proposal writing services",
    "interactive ROI calculator",
    "business case for the board",
    "proposal tracking",
  ],
  alternates: { canonical: URL, languages: { "en-US": URL, "x-default": URL } },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [{ url: "/images/proposals/plan.webp", width: 2400, height: 1500, alt: "Interactive sales proposal calculator with five-year net and return" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, site: "@ardn_cloud_sol", images: ["/images/proposals/plan.webp"] },
};

export default function Page() {
  const jsonLd = productJsonLd(INTERACTIVE_PROPOSALS, {
    path: "/interactive-sales-proposals",
    name: "Interactive Sales Proposals by Ardn",
    kind: "Service",
    category: "Interactive sales proposal design and hosting",
    description: DESC,
    image: "/images/proposals/plan.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={INTERACTIVE_PROPOSALS} />
    </>
  );
}
