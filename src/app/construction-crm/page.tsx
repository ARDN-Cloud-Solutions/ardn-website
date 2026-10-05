import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { CONSTRUCTION_CRM } from "./content";

// Construction CRM: Ardn CRM for roofing, windows and home improvement,
// residential and commercial general contractors, and real estate. Built
// and launched by Ardn; the standalone product site is ardnai.com.
// Truth guardrails: priced by modules and locations (never per seat) with a
// setup fee and optional managed service, but no dollar figures; no customer
// names or counts. Screens come from a demo company with fictional data.

const URL = "https://ardncloudsolutions.com/construction-crm";
const DESC =
  "A CRM for roofing, home improvement, residential and commercial general contractors, and real estate: pipeline, quotes that convert to jobs, service desk with SLA clocks, dispatch and work orders. Priced by modules and locations, never per seat.";

export const metadata: Metadata = {
  title: "Construction CRM for Contractors | Ardn",
  description: DESC,
  keywords: [
    "construction CRM",
    "roofing CRM",
    "home improvement CRM",
    "general contractor CRM",
    "field service CRM",
    "contractor CRM with dispatch",
    "CRM with work orders",
    "service desk for contractors",
  ],
  alternates: {
    canonical: URL,
    languages: { "en-US": URL, "x-default": URL },
  },
  openGraph: {
    title: "Construction CRM: Sales, Jobs, Service and Dispatch on One Record | Ardn",
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/crm/dashboard.webp",
        width: 1440,
        height: 900,
        alt: "Ardn CRM business-health dashboard for a contractor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction CRM for Contractors | Ardn",
    description: "Pipeline, quotes to jobs, service desk with SLA clocks, dispatch and work orders. Never priced per seat.",
    images: ["/images/crm/dashboard.webp"],
  },
};

export default function Page() {
  const jsonLd = productJsonLd(CONSTRUCTION_CRM, {
    path: "/construction-crm",
    name: "Ardn CRM for Construction",
    kind: "SoftwareApplication",
    category: "Construction and field service CRM",
    description: DESC,
    image: "/images/crm/dashboard.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={CONSTRUCTION_CRM} />
    </>
  );
}
