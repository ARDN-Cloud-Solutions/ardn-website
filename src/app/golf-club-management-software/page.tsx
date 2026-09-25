import { Metadata } from "next";
import GolfClubContent from "./GolfClubContent";
import "./golf.css";

/**
 * /golf-club-management-software — golf & private club vertical page.
 *
 * Slug chosen for the highest-intent commercial query a club GM/COO actually
 * searches. Sits in the same spoke-page family as /ai-for-insurance and
 * /ai-for-membership-organizations: one vertical, one conversion path, cross-
 * linked from the footer Solutions column and the sitemap.
 *
 * Product truth for every claim: ARDN-Cloud-Solutions/membership →
 * docs/REQUIREMENTS.md. No client names or client metrics appear here.
 */

const URL = "https://ardncloudsolutions.com/golf-club-management-software";
const TITLE = "Golf Club Management Software | Ardn";
const DESC =
  "Club membership, dues, family billing, tournaments & member portal in one platform. One flat monthly fee, unlimited staff logins, built and run for you.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "golf club management software",
    "private club management software",
    "country club membership software",
    "golf club membership management",
    "club dues billing software",
    "club member portal",
    "golf club CRM",
    "club management system",
    "Salesforce alternative for clubs",
    "membership management platform",
    "club tournament registration software",
    "no per-user fee club software",
  ],
  alternates: {
    canonical: URL,
    languages: {
      "en-US": URL,
      "x-default": URL,
    },
  },
  openGraph: {
    title: TITLE,
    description:
      "One platform for club membership, dues, family billing, tournaments, clinics, check-in and member comms — on your brand, for one flat monthly fee. No per-seat licensing.",
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Golf and private club management software by Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golf Club Management Software | Ardn",
    description:
      "Membership, dues, family billing, tournaments and a branded member portal — one flat monthly fee, unlimited staff logins.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

// Mirrors the FAQS array in GolfClubContent. Keep the two in sync — Google
// penalises FAQ markup that does not appear as visible page content.
const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      q: "We are on Salesforce today. Is this a rip-and-replace?",
      a: "Not necessarily. Plenty of clubs keep Salesforce where it genuinely earns its licence — usually a small finance or development team — and move the hundred-plus front-desk, pro shop and food-and-beverage staff onto this platform, where they cost nothing per head. That alone is usually where the savings are.",
    },
    {
      q: "What happens to our historical member data?",
      a: "It migrates. Members, households, categories, subscription history, invoices, payments and status history all come across, and the lifecycle history stays queryable and exportable per member. We reconcile the migration against your current system for a full billing cycle before cutover.",
    },
    {
      q: "Is it really no per-user fee?",
      a: "Yes. The commercial model is one flat monthly fee for the club. Front desk, pro shop, starters, F&B, instructors, the GM and the board can all have their own logins with their own permissions, and none of them change the invoice.",
    },
    {
      q: "How is member data kept separate from other clubs?",
      a: "Every record carries a tenant identifier and isolation is enforced in the database itself with Postgres row-level security, running under a role that cannot bypass it. Every create, update and delete is also written to an immutable audit log.",
    },
    {
      q: "Can members pay by card and bank transfer?",
      a: "Both. Card and ACH, saved per payer, captured inline on your branded pages. Payments run through Payment Cloud into your club's own merchant account, so the processing relationship and the money stay yours.",
    },
    {
      q: "What does it cost, and what is the contract?",
      a: "One flat monthly subscription plus a one-time implementation, quoted in writing before you commit — never a percentage of your club's revenue and never a per-member or per-seat fee. The standard agreement is a 12-month term with annual increases capped at CPI (maximum 4%). A month-to-month option is available at a higher monthly rate.",
    },
    {
      q: "What if it does not work out?",
      a: "There is a 60-day go-live guarantee. If it is not working in the first 60 days after go-live, you can exit and have your subscription fees for that period refunded.",
    },
    {
      q: "How does this compare to Jonas or Clubessential?",
      a: "Those suites cover a genuinely wide surface and are well established. The difference is how you buy. Neither publishes a rate card, and capability tends to arrive as separately negotiated modules, so a club adding one thing a year negotiates each addition without a published ceiling. Our model is one flat fee, a fixed written quote up front, and new capability built as part of the managed service.",
    },
    {
      q: "Who supports it after launch?",
      a: "We do. This is sold as a managed service, not a licence with a support portal. The same team that builds it runs it, and ongoing changes are part of the monthly fee.",
    },
  ].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Golf & Private Club Management Platform",
  serviceType: "Club membership management software",
  description: DESC,
  url: URL,
  provider: {
    "@type": "Organization",
    name: "Ardn Cloud Solutions",
    url: "https://ardncloudsolutions.com",
  },
  areaServed: { "@type": "Country", name: "United States" },
  audience: {
    "@type": "Audience",
    audienceType: "Golf clubs, country clubs and private membership clubs",
  },
  offers: {
    "@type": "Offer",
    description:
      "One flat monthly subscription plus a one-time implementation, covering the platform, unlimited staff logins and ongoing managed service. Never per member or per seat. Fixed written quote before commitment; 12-month standard term with CPI-capped increases, or month-to-month at a higher rate.",
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
