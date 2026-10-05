import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { MEMBERSHIP } from "./content";

// CANONICAL product page for Ardn Membership Management — rebuilt 2026-08 on
// the current landing-page skeleton (reduce-crm-licensing-costs pattern):
// server component, real product screenshots, LeadForm, risk-reversal strip.
//
// Positioning: Category 2 — AI-built, CRM-agnostic, all-in-one membership
// platform for community centers, gyms, studios, clubs, and associations.
// Salesforce/HubSpot remain integration targets only (SEO intent), never
// "Salesforce-native".
//
// Keyword split (deliberate, 2026-08): this page OWNS "membership management
// software/platform", gym/studio/club terms. It CEDES all YMCA terms to
// /nonprofit-management-software — do not re-add "YMCA membership software" here.
// Golf / country / private club terms belong to /golf-club-management-software
// (Club Steward) — keep them off this page too.
//
// Offer (owner-approved 2026-08-24): free pilot sandbox in the org's branding
// + a 60-day go-live guarantee. NOT promised: free migration, month-to-month
// terms, and — corrected 2026-09-30 — NOT a refund of any kind.
// Pricing (owner decision 2026-08-24): general page holds the $699/mo anchor;
// the YMCA page carries the $9,000/mo + $9,500 partnership pricing.
//
// Guarantee (owner ruling 2026-09-29, CORRECTION): the 60-day go-live
// guarantee is REAL but CONDITIONAL on agreed requirements and complexity. It
// is a delivery commitment, NOT money-back. This page previously published
// "60 day go-live money-back guarantee" and an FAQ promising refunded
// subscription fees; neither is offered, and a published refund promise is
// what gets quoted in a dispute. Do not reintroduce the word "refund" or
// "money-back" here without a new owner ruling.
// Truth guardrails: no POS/day-pass, childcare-compliance, dunning, SMS, or
// mobile-app claims. Screenshots are real product UI on a seeded demo tenant.
export const metadata: Metadata = {
  title: "Membership Management Platform for Gyms & Clubs | Ardn",
  description:
    "One platform for memberships, recurring billing, classes, events, fundraising, and a branded member portal — flat monthly fee. Try a free pilot in your branding.",
  keywords: [
    "membership management software",
    "membership management platform",
    "gym membership management",
    "studio membership software",
    "club membership platform",
    "community center software",
    "recurring billing membership",
    "membership portal",
    "Mindbody alternative",
    "Salesforce membership management",
    "Salesforce membership integration",
    "Ardn Membership Management",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/membership-management",
    languages: {
      "en-US": "https://ardncloudsolutions.com/membership-management",
      "x-default": "https://ardncloudsolutions.com/membership-management",
    },
  },
  openGraph: {
    title: "Membership Management — One Platform, One Flat Fee | Ardn",
    description:
      "Memberships, billing, classes, events, fundraising, and a branded member portal in one system. Flat monthly fee — try a free pilot in your branding.",
    url: "https://ardncloudsolutions.com/membership-management",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/nonprofit/classes-calendar.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Membership Management plan catalog with versioned pricing and per-location plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Management Platform | Ardn",
    description:
      "Memberships, billing, classes, events, fundraising, and a branded member portal — one platform, one flat monthly fee.",
    images: ["/images/nonprofit/classes-calendar.webp"],
  },
};

export default function Page() {
  const jsonLd = productJsonLd(MEMBERSHIP, {
    path: "/membership-management",
    name: "Ardn Membership Management",
    kind: "SoftwareApplication",
    category: "Membership management software",
    description: "Recurring billing, classes, check-in, events and a branded member portal for gyms, studios, clubs and associations, for one flat monthly fee.",
    image: "/images/nonprofit/classes-calendar.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={MEMBERSHIP} />
    </>
  );
}
