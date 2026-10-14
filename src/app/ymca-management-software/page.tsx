import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { YMCA } from "./content";

// Audience page for YMCA-style community associations (restored at its old
// URL on 2026-10-14; the 301 to /nonprofit-management-software was removed
// because Search Console still showed YMCA queries ranking for this slug).
// Legal guardrails live in content.ts: "YMCA" is a descriptive audience term
// only, no implied customers/partners/endorsement, no branch names, no Y
// branding, visible trademark disclaimer at the foot of the page.
const URL = "https://ardncloudsolutions.com/ymca-management-software";
const DESCRIPTION =
  "Membership billing for households, program and camp registration with waitlists, front-desk check-in, fundraising and multi-branch reporting for YMCAs and community centers. Flat monthly fee, free pilot in your branding.";

export const metadata: Metadata = {
  title: "Membership & Fundraising Software for YMCAs | Ardn",
  description: DESCRIPTION,
  keywords: [
    "ymca management software",
    "ymca membership software",
    "ymca management platform",
    "registration software for ymcas",
    "ymca membership billing",
    "ymca software comparison",
    "community center membership software",
    "membership and fundraising software",
  ],
  alternates: {
    canonical: URL,
    languages: { "en-US": URL, "x-default": URL },
  },
  openGraph: {
    title: "Membership & Fundraising Software for YMCAs and Community Centers | Ardn",
    description: DESCRIPTION,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/nonprofit/operations-overview-dashboard.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Membership & Fundraising operations dashboard for a fictional multi-branch community center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership & Fundraising Software for YMCAs | Ardn",
    description: DESCRIPTION,
    images: ["/images/nonprofit/operations-overview-dashboard.webp"],
  },
};

export default function Page() {
  const jsonLd = productJsonLd(YMCA, {
    path: "/ymca-management-software",
    name: "Ardn Membership & Fundraising",
    kind: "SoftwareApplication",
    category: "Membership and fundraising software",
    description:
      "Membership billing, program registration with waitlists, front-desk check-in, a fundraising CRM and multi-branch reporting for community centers and member-based nonprofits, for one flat monthly fee.",
    image: "/images/nonprofit/operations-overview-dashboard.webp",
  });
  // Audience is generic (nonprofits and community centers); no third-party
  // brand appears in brand/author/publisher fields.
  const graph = jsonLd["@graph"].map((node) =>
    node["@type"] === "SoftwareApplication"
      ? { ...node, audience: { "@type": "Audience", audienceType: "Nonprofit organizations and community centers" } }
      : node,
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...jsonLd, "@graph": graph }) }}
      />
      <ProductPage content={YMCA} />
    </>
  );
}
