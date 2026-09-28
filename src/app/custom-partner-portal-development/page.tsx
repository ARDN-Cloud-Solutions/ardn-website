import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { PARTNER_PORTAL } from "./content";

// WEDGE spoke page: custom PARTNER / VENDOR / DISTRIBUTOR portals. Distinct from
// /custom-portal-development (general seller/ops/customer portals) — this page
// owns the highest per-seat external bill: Salesforce Partner Community / PRM
// login licenses and per-partner Experience Cloud seats. Positioning is the
// same wedge — "keep your CRM, cut the bill" — applied to the external partner
// network, which turns over and scales worst under per-seat pricing. No client
// names / invented metrics; publicly listed license mechanics only, framed as
// value prop. Targets "Salesforce Partner Community alternative", "partner
// portal software", "vendor/distributor portal cost".
export const metadata: Metadata = {
  title: "Custom Partner Portal — Cut Per-Seat CRM Costs | Ardn",
  description:
    "Custom partner, vendor & distributor portals that replace pricey Partner Community login seats — synced to your CRM, one flat fee. New customers: free build.",
  keywords: [
    "custom partner portal development",
    "partner portal software",
    "vendor portal development",
    "distributor portal",
    "Salesforce Partner Community alternative",
    "Salesforce PRM alternative",
    "partner relationship management portal",
    "reduce Partner Community license cost",
    "external user portal cost",
    "flat-fee partner portal",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-partner-portal-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-partner-portal-development",
      "x-default": "https://ardncloudsolutions.com/custom-partner-portal-development",
    },
  },
  openGraph: {
    title: "Custom Partner & Vendor Portal Development | Ardn",
    description:
      "Replace per-login Partner Community seats with a custom partner, vendor & distributor portal wired to your CRM — one flat fee, any number of partners. New customers: free build.",
    url: "https://ardncloudsolutions.com/custom-partner-portal-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/services/partner-portal-deals.webp",
        width: 2880,
        height: 1800,
        alt: "Custom partner and vendor portal development that cuts per-seat CRM costs, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Partner & Vendor Portal Development | Ardn",
    description:
      "Replace per-login Partner Community seats with a flat-fee custom portal wired to your CRM. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/services/partner-portal-deals.webp"],
  },
};

export default function Page() {
  const jsonLd = productJsonLd(PARTNER_PORTAL, {
    path: "/custom-partner-portal-development",
    name: "Custom Partner Portal Development",
    kind: "Service",
    category: "Custom partner portal development",
    description: "Partner, dealer and distributor portals with deal registration and commissions, connected to your CRM, for one flat fee.",
    image: "/images/services/partner-portal-deals.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={PARTNER_PORTAL} />
    </>
  );
}
