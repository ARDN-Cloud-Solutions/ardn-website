import { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import GolfClubContent from "./GolfClubContent";
import { FAQS } from "./faqs";
import "./golf.css";

/**
 * /golf-club-management-software — Clubhouse360, the golf & country club
 * vertical page.
 *
 * Slug chosen for the highest-intent commercial query a club GM/COO actually
 * searches. Cross-linked from the footer Solutions column and the sitemap.
 *
 * Product truth for every claim: the Clubhouse360 Marketing Kit (2026-09-25)
 * and its INTERNAL claims guardrails — see the header comment in
 * GolfClubContent before changing copy. No client names or client metrics.
 */

// Display serif for headlines only — the same family Clubhouse360's member
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
const TITLE = "Golf & Country Club Management Software | Clubhouse360";
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
    "Clubhouse360",
  ],
  alternates: {
    canonical: URL,
    languages: {
      "en-US": URL,
      "x-default": URL,
    },
  },
  openGraph: {
    title: "Clubhouse360 — Every club in your portfolio, one member record",
    description:
      "One platform for multi-club golf and country club operators, from the first website visit to the 18th green: websites, join, sales, contracts, dues, tee sheet, pro shop, events and reporting.",
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/golf/og-clubhouse360.jpg",
        width: 1200,
        height: 630,
        alt: "Clubhouse360: every club in your portfolio, one member record",
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
    images: ["/images/golf/og-clubhouse360.jpg"],
  },
};

// One connected graph: every node links by @id, and the provider is the
// site-wide Organization from layout.tsx (#organization), so search engines
// and AI answer engines resolve Clubhouse360 as an Ardn product. No `offers`:
// pricing isn't decided, and nothing about price goes public until it is.
const ORG = { "@id": "https://ardncloudsolutions.com/#organization" };
const IMG = (f: string) => `https://ardncloudsolutions.com/images/golf/${f}.webp`;

const VIDEO_TRANSCRIPT = [
  "If you run more than one club, this is for you.",
  "This is Clubhouse360. Every club in your portfolio, side by side. And the same view narrows itself to each regional VP and GM.",
  "It starts on the club's own website. A prospect picks a plan, adds the family, signs, and pays, in six steps, without a phone call.",
  "Every enquiry lands in a shared pool for your membership directors. If nobody claims it, it escalates. Nothing slips through.",
  "Contracts are signed inside the platform, against the exact version they read. And no money moves until they do.",
  "Benefits are real numbers, not bullet points. Rounds, guest passes, discounts, tracked across every club they can play.",
  "Book a tee time, and the allowance comes down on its own. Rate grids, booking windows, and carts, all in one sheet.",
  "Then you see what every round is worth. Utilization, average ticket, and revenue per available tee time.",
  "And your members get one app, in their club's brand. Their card, their benefits, their bills, their tee times.",
  "More clubs. Not more systems. Book a thirty-minute walkthrough.",
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
      name: "Clubhouse360",
      alternateName: "Clubhouse360 by Ardn",
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
    {
      "@type": "VideoObject",
      "@id": `${URL}#video`,
      name: "Clubhouse360 walkthrough",
      description:
        "A 1:23 walkthrough of Clubhouse360 on a sample multi-club portfolio, from the club website and online join to the tee sheet, golf performance and the member app.",
      thumbnailUrl: "https://ardncloudsolutions.com/videos/clubhouse360-walkthrough-poster.webp",
      contentUrl: "https://ardncloudsolutions.com/videos/clubhouse360-walkthrough.mp4",
      uploadDate: "2026-09-28",
      duration: "PT1M23S",
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
