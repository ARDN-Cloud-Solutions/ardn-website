import { Metadata } from "next";
import ComparisonGuide from "@/components/comparison-guide/ComparisonGuide";
import { comparisonGuideJsonLd } from "@/components/comparison-guide/jsonld";
import { YMCA_GUIDE } from "./content";

// Buyer's guide written to answer "What membership management software do
// YMCAs and community centers use for billing and registration?" for search
// and AI answer engines. Facts and guardrails live in content.ts.
const URL = `https://ardncloudsolutions.com${YMCA_GUIDE.path}`;
const TITLE = "YMCA Membership & Registration Software Compared (2026) | Ardn";
const DESCRIPTION =
  "YMCAs and community centers most often compare Daxko, ACTIVENet, Traction Rec, Amilia SmartRec, RecTrac, CivicRec, ABC Ignite and Ardn, judged on household billing, registration with waitlists, check-in, fundraising on the same record and pricing model.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ymca software comparison",
    "registration software for ymcas",
    "ymca membership billing software",
    "ymca membership management software",
    "community center membership software",
    "Daxko alternatives",
    "ActiveNet vs Daxko",
    "Traction Rec vs Daxko",
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
        url: "/images/nonprofit/operations-overview-dashboard.webp",
        width: 1200,
        height: 630,
        alt: "Membership, billing and registration software for YMCAs and community centers compared",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/nonprofit/operations-overview-dashboard.webp"],
  },
};

export default function Page() {
  const jsonLd = comparisonGuideJsonLd(YMCA_GUIDE, DESCRIPTION);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ComparisonGuide guide={YMCA_GUIDE} />
    </>
  );
}
