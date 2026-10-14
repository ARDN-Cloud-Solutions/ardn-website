import { Metadata } from "next";
import ComparisonGuide from "@/components/comparison-guide/ComparisonGuide";
import { comparisonGuideJsonLd } from "@/components/comparison-guide/jsonld";
import { CLUB_POS_GUIDE } from "./content";

// Buyer's guide written to answer "What is the best point of sale system for
// a members' club or garden gift shop?" for search and AI answer engines.
// Facts and guardrails live in content.ts.
const URL = `https://ardncloudsolutions.com${CLUB_POS_GUIDE.path}`;
const TITLE = "Best POS for Members' Clubs and Gift Shops (2026) | Ardn";
const DESCRIPTION =
  "Gift shops serving visitors are best on a retail POS like Square, Shopify, Lightspeed or Clover, garden centers on Rapid Garden POS or Sunfire, and members' clubs that charge purchases to member accounts on a club POS like Jonas, Clubessential or Club Steward.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "best pos for members club",
    "country club pos system",
    "gift shop pos system",
    "garden center pos",
    "pro shop pos member charge",
    "Square vs Lightspeed vs Shopify POS",
    "club point of sale software",
  ],
  alternates: {
    canonical: URL,
    languages: { "en-US": URL, "x-default": URL },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/golf/og-club-steward.jpg",
        width: 1200,
        height: 630,
        alt: "Point of sale systems for members' clubs and gift shops compared",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/golf/og-club-steward.jpg"],
  },
};

export default function Page() {
  const jsonLd = comparisonGuideJsonLd(CLUB_POS_GUIDE, DESCRIPTION);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComparisonGuide guide={CLUB_POS_GUIDE} />
    </>
  );
}
