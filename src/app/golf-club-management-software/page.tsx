import { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import GolfClubContent from "./GolfClubContent";
import { FAQS } from "./faqs";
import { videoObject } from "@/components/media/video-jsonld";
import "./golf.css";

/**
 * /golf-club-management-software — Club Steward, the golf & country club
 * vertical page.
 *
 * Slug chosen for the highest-intent commercial query a club GM/COO actually
 * searches. Cross-linked from the footer Solutions column and the sitemap.
 *
 * Product truth for every claim: the Club Steward Marketing Kit (2026-09-25)
 * and its INTERNAL claims guardrails — see the header comment in
 * GolfClubContent before changing copy. No client names or client metrics.
 */

// Display serif for headlines only — the same family Club Steward's member
// portal uses, so the marketing page reads like the product. Scoped to this
// page via a CSS variable consumed in golf.css.
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--gc-serif",
  display: "swap",
});

const URL = "https://ardncloudsolutions.com/golf-club-management-software";
const TITLE = "Golf & Country Club Management Software | Club Steward";
const DESC =
  "Golf and country club management software for multi-club operators: websites, online join, sales, e-signed contracts, dues, tee sheet and pro shop in one.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "golf club management software",
    "country club management software",
    "private club management software",
    "multi-club management software",
    "golf course membership software",
    "country club membership software",
    "golf club CRM",
    "club management system",
    "tee sheet software",
    "reciprocal club access software",
    "club dues billing software",
    "Club Steward",
  ],
  alternates: {
    canonical: URL,
    languages: {
      "en-US": URL,
      "x-default": URL,
    },
  },
  openGraph: {
    title: "Club Steward — Every club in your portfolio, one member record",
    description:
      "One platform for multi-club golf and country club operators, from the first website visit to the 18th green: websites, join, sales, contracts, dues, tee sheet, pro shop, events and reporting.",
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/golf/og-club-steward.jpg",
        width: 1200,
        height: 630,
        alt: "Club Steward: every club in your portfolio, one member record",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Websites, online join, membership sales, contracts, dues, tee sheet, pro shop and reporting — one system for every club in your portfolio.",
    site: "@ardn_cloud_sol",
    images: ["/images/golf/og-club-steward.jpg"],
  },
};

// One connected graph: every node links by @id, and the provider is the
// site-wide Organization from layout.tsx (#organization), so search engines
// and AI answer engines resolve Club Steward as an Ardn product. No `offers`:
// pricing isn't decided, and nothing about price goes public until it is.
const ORG = { "@id": "https://ardncloudsolutions.com/#organization" };
const IMG = (f: string) => `https://ardncloudsolutions.com/images/golf/${f}.webp`;

// The four self-hosted videos on the page (overview first). Names,
// descriptions, durations and transcripts come from the video registry and
// the .vtt files, so they can't drift from what plays.
const VIDEOS = (["clubStewardOverview", "clubStewardEvents", "clubStewardPos", "clubStewardService"] as const).map((k) =>
  videoObject(k, URL, { "@id": `${URL}#software` }),
);

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESC,
      inLanguage: "en-US",
      isPartOf: { "@id": "https://ardncloudsolutions.com/#website" },
      about: { "@id": `${URL}#software` },
      primaryImageOfPage: IMG("corporate-dashboard"),
      breadcrumb: { "@id": `${URL}#breadcrumb` },
      video: VIDEOS.map((v) => ({ "@id": v["@id"] })),
      publisher: ORG,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
        { "@type": "ListItem", position: 2, name: "Our Products", item: "https://ardncloudsolutions.com/our-products" },
        { "@type": "ListItem", position: 3, name: "Golf & Country Club Management Software", item: URL },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${URL}#software`,
      name: "Club Steward",
      alternateName: "Club Steward by Ardn",
      description:
        "Golf and country club management software for multi-club operators: club websites, online join, membership sales CRM, e-signed contracts, dues and payments, onboarding, member portal and golf app, benefits and reciprocal access, tee sheet and carts, pro shop, events, and reporting on one member record.",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Golf and country club management software",
      operatingSystem: "Web",
      url: URL,
      publisher: ORG,
      provider: ORG,
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Multi-club golf and country club operators, club management companies and private clubs",
      },
      areaServed: { "@type": "Country", name: "United States" },
      featureList: [
        "Branded website and six-step online join for every club",
        "Membership sales CRM with shared lead pool and escalation",
        "Contracts with built-in e-signature; payment blocked until signed",
        "Dues on card and ACH autopay with automatic retries",
        "Member portal and per-club golf app with digital card",
        "Benefits and reciprocal access across a portfolio of clubs",
        "Tee sheet with rate grids, booking windows and cart fleet",
        "Golf performance reporting including revenue per available tee time",
        "Pro shop and online store with inventory ledger",
        "Private events with first- and second-option room holds",
        "Reports scoped to club, region or corporate automatically",
        "Club-level data isolation enforced in the database",
      ],
      screenshot: [
        "corporate-dashboard", "online-join-plans", "tee-sheet", "golf-performance", "member-home",
      ].map(IMG),
    },
    ...VIDEOS,
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function GolfClubManagementSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <div className={serif.variable}>
        <GolfClubContent />
      </div>
    </>
  );
}
