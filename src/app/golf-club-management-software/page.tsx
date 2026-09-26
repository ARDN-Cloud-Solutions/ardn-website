import { Metadata } from "next";
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

const URL = "https://ardncloudsolutions.com/golf-club-management-software";
const TITLE = "Golf & Country Club Management Software | Clubhouse360";
const DESC =
  "Clubhouse360 runs multi-club golf and country clubs on one platform: websites, online join, membership sales, e-signed contracts, dues, tee sheet, pro shop and reporting.";

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
        url: "/images/golf/corporate-dashboard.webp",
        width: 1920,
        height: 1200,
        alt: "Clubhouse360 corporate dashboard comparing every club side by side",
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
    images: ["/images/golf/corporate-dashboard.webp"],
  },
};

// Built from the same FAQS array the page renders, so the markup always
// matches the visible content.
const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Clubhouse360 by Ardn",
  serviceType: "Golf and country club management software",
  description: DESC,
  url: URL,
  image: "https://ardncloudsolutions.com/images/golf/corporate-dashboard.webp",
  provider: {
    "@type": "Organization",
    name: "Ardn Cloud Solutions",
    url: "https://ardncloudsolutions.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "Audience",
    audienceType:
      "Multi-club golf and country club operators, club management companies and private clubs",
  },
};

export default function GolfClubManagementSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <GolfClubContent />
    </>
  );
}
