import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { NONPROFIT } from "./content";

// Nonprofit management software: the Ardn membership platform for YMCAs,
// JCCs, community centers and other member-based nonprofits (renamed from
// /ymca-management-software on 2026-09-28; the old URL 301s here). It owns the
// "nonprofit management software" / "nonprofit membership software" keyword
// set and keeps YMCA terms as secondary keywords. /membership-management (the
// general product page) cedes these terms to avoid cannibalization.
//
// Positioning, verified against the product docs (2026-07):
// - Incumbent platforms often price as a percentage of the organization's
//   revenue. We sell the opposite: flat monthly fee, your own merchant
//   account, your data. Name no single payment processor.
// - The demo that lands: a member and a donor are the SAME RECORD, so
//   operations and fundraising stop being reconciled by hand.
// - Offer (owner-approved 2026-08-24): free pilot sandbox in the
//   organization's branding + 60-day money-back guarantee. NOT promised: free
//   data migration, month-to-month contract at the standard rate.
// - Truth guardrails: no claims of POS/day passes, childcare compliance,
//   dunning/returned drafts, SilverSneakers, SMS, nationwide reciprocity, GL
//   export, mobile app, or production customers.
// - Pricing (owner-confirmed 2026-08-24): $9,000/mo + $9,500 implementation,
//   CPI-capped escalation (max 4%/yr).
// - Screenshots come from a seeded demo. Branch names were re-lettered to
//   fictional ones on 2026-09-28; never publish real client locations.
// All screenshots are real product UI from the seeded multi-branch demo
// association (synthetic data only).
export const metadata: Metadata = {
  title: "Nonprofit Management Software | Ardn",
  description:
    "Membership, programs, check-in, and fundraising for YMCAs, JCCs and community nonprofits in one platform — flat monthly fee, never a percentage of your revenue. Free pilot in your branding.",
  keywords: [
    "nonprofit management software",
    "nonprofit membership management software",
    "YMCA management software",
    "YMCA membership software",
    "Daxko alternative",
    "Daxko Operations alternative",
    "YMCA software",
    "community center management software",
    "JCC management software",
    "nonprofit membership software",
    "YMCA fundraising software",
    "membership and donor management in one system",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/nonprofit-management-software",
    languages: {
      "en-US": "https://ardncloudsolutions.com/nonprofit-management-software",
      "x-default": "https://ardncloudsolutions.com/nonprofit-management-software",
    },
  },
  openGraph: {
    title: "Nonprofit Management Software — Members & Donors in One System | Ardn",
    description:
      "One platform for YMCAs, JCCs and community nonprofits: membership, billing, check-in, programs, and a full fundraising CRM. Flat monthly fee — never a percentage of your revenue.",
    url: "https://ardncloudsolutions.com/nonprofit-management-software",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/nonprofit/operations-overview-dashboard.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Nonprofit Management operations dashboard for a multi-branch association",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nonprofit Management Software | Ardn",
    description:
      "Membership, programs, check-in, and fundraising for community nonprofits — flat monthly fee, never a percentage of your revenue.",
    images: ["/images/nonprofit/operations-overview-dashboard.webp"],
  },
};

export default function Page() {
  const jsonLd = productJsonLd(NONPROFIT, {
    path: "/nonprofit-management-software",
    name: "Ardn Nonprofit Management",
    kind: "SoftwareApplication",
    category: "Nonprofit management software",
    description: "Membership, billing, check-in, programs and a fundraising CRM for YMCAs, JCCs and community nonprofits, for one flat monthly fee.",
    image: "/images/nonprofit/operations-overview-dashboard.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={NONPROFIT} />
    </>
  );
}
