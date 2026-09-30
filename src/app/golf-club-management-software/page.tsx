import { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import GolfClubContent from "./GolfClubContent";
import { FAQS } from "./faqs";
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

const VIDEO_TRANSCRIPT = [
  "Running more than one club? Meet Club Steward.",
  "Six systems that never talk to each other, replaced by one platform and one member record.",
  "See every club side by side. And every regional VP and GM sees exactly their slice.",
  "Prospects join online in six steps. Signed, paid, and active, without a phone call.",
  "Every inquiry gets claimed or escalated, and guest rounds turn into leads.",
  "Contracts are e-signed in the platform, and no money moves until they are.",
  "Dues run on autopay, with automatic retries that never charge twice.",
  "Benefits follow members to every club, and each tee time draws down their allowance.",
  "Know what every round is worth, right down to revenue per available tee time.",
  "The pro shop sells online, and orders are waiting on the cart at tee time.",
  "Every table is isolated per club, with over four hundred permissions you control.",
  "And members get one app, in their own club's brand.",
  "More clubs. Not more systems. Book a walkthrough, and ask us about pricing.",
].join(" ");

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
      video: { "@id": `${URL}#video` },
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
        "Golf and country club management software for multi-club operators. Core: Membership Sales and the Members App. Add-on modules: Website & Marketing, HR, Tee-Times, Events & Catering, Point of Sale, e-Commerce, Subscription Billing & Dues, Member Service with Chatbot and an Accounting Suite, with Property Management coming soon, on one member record. An optional Active AI layer adds real-time AI across every flow.",
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
        "Website & Marketing: branded club sites and six-step online join",
        "HR: job postings, AI-ranked applicants, scorecards and staff scheduling",
        "Membership Sales (core): shared lead pool, contracts with e-signature, onboarding",
        "Members App (core): digital card, benefits, bills and bookings",
        "Tee-Times: rate grids, booking windows, cart fleet and revenue per tee time",
        "Events & Catering: room holds, instant quotes, host portal, kitchen and staffing",
        "Point of Sale: one checkout charged to the member account",
        "e-Commerce: online pro shop with pre-orders to the tee time",
        "Subscription Billing & Dues: card and ACH autopay with automatic retries",
        "Member Service with Chatbot: website chat, live chat and cases",
        "Accounting Suite (preview): a general ledger fed by the club",
        "Property Management (coming soon)",
        "Active AI: optional real-time AI across every flow, bring your own AI provider",
      ],
      screenshot: [
        "corporate-dashboard", "online-join-plans", "tee-sheet", "golf-performance", "member-home",
      ].map(IMG),
    },
    {
      "@type": "VideoObject",
      "@id": `${URL}#video`,
      name: "Club Steward walkthrough",
      description:
        "A 1:13 walkthrough of Club Steward on a sample multi-club portfolio: online join, membership sales, contracts, dues, cross-club benefits, the tee sheet, the pro shop, security and the member app.",
      thumbnailUrl: "https://ardncloudsolutions.com/videos/club-steward-walkthrough-poster.webp",
      contentUrl: "https://ardncloudsolutions.com/videos/club-steward-walkthrough.mp4",
      uploadDate: "2026-09-28",
      duration: "PT1M13S",
      inLanguage: "en-US",
      transcript: VIDEO_TRANSCRIPT,
      publisher: ORG,
      about: { "@id": `${URL}#software` },
    },
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
