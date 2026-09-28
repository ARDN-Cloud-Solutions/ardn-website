import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { CUSTOM_PORTAL } from "./content";

// Solution page anchored to a real delivered build: custom seller + operations
// portals that integrate with the client's CRM and offload light users from
// expensive per-seat licenses — cutting cost WITHOUT replacing the CRM.
// Positioning is "keep your tech, cut the cost," NOT "replace Salesforce."
// No client names / specific numbers (no proof cleared yet) — value-prop framing.
export const metadata: Metadata = {
  title:
    "Custom Portal Development — Cut CRM Costs | Ardn",
  description:
    "Custom seller, ops, partner & customer portals synced to your CRM — move light users off per-seat licenses onto one flat fee. New customers: free build.",
  keywords: [
    "custom portal development",
    "seller portal development",
    "operations portal",
    "partner portal development",
    "customer portal development",
    "client portal software",
    "customer portal software",
    "reduce CRM licensing costs",
    "reduce per-seat license costs",
    "Salesforce portal integration",
    "Experience Cloud alternative",
    "custom CRM portal",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-portal-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-portal-development",
      "x-default": "https://ardncloudsolutions.com/custom-portal-development",
    },
  },
  openGraph: {
    title: "Custom Portal Development — Cut CRM Costs | Ardn",
    description:
      "Custom portals that integrate with your CRM and move light users off per-seat licenses onto a flat fee. Cut costs without switching. New customers: free build.",
    url: "https://ardncloudsolutions.com/custom-portal-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/services/customer-portal.webp",
        width: 2880,
        height: 1800,
        alt: "Custom portal development — cut CRM costs while keeping your existing tech, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Portal Development — Cut CRM Costs, Keep Your Tech | Ardn",
    description:
      "Custom portals that integrate with your CRM and cut per-seat costs without switching platforms. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/services/customer-portal.webp"],
  },
};

export default function Page() {
  const jsonLd = productJsonLd(CUSTOM_PORTAL, {
    path: "/custom-portal-development",
    name: "Custom Portal Development",
    kind: "Service",
    category: "Custom customer and seller portal development",
    description: "Customer, seller and staff portals connected live to your CRM, for one flat monthly fee.",
    image: "/images/services/customer-portal.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={CUSTOM_PORTAL} />
    </>
  );
}
