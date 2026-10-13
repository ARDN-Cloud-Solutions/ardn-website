import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { CUSTOM_SOFTWARE } from "./content";

// Broad-money-keyword HUB page for the repositioned brand: "custom software /
// platform / application development." This is the top-of-cluster page that
// captures the high-intent commercial demand ("custom software development
// company") and links down to every solution spoke (portals, ecommerce,
// AI Forge, verticals). Positioning: replace/simplify/connect your tech stack
// in weeks, flat monthly fee, no per-seat, built AND run for you. AI is one
// capability, not the whole pitch. Primary term (Google Keyword Planner,
// 2026-10): "custom software development company", the highest-bid term in
// Florida; secondary "software development company".
export const metadata: Metadata = {
  title: "Custom Software Development Company, Florida | Ardn",
  description:
    "Ardn is a custom software development company in Orlando, Florida, serving clients across the US: software built around your process, then hosted and run for you.",
  keywords: [
    "custom software development company",
    "software development company",
    "custom software development company Florida",
    "custom software development Orlando",
    "custom software development",
    "custom platform development",
    "custom application development",
    "custom web application development",
    "build custom software",
    "bespoke software development",
    "custom portal development",
    "system integration services",
    "business process automation",
    "replace software stack",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-software-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-software-development",
      "x-default": "https://ardncloudsolutions.com/custom-software-development",
    },
  },
  openGraph: {
    title: "Custom Software Development Company, Florida | Ardn",
    description:
      "Ardn is a custom software development company in Orlando, Florida, serving clients across the US: software built around your process, then hosted and run for you.",
    url: "https://ardncloudsolutions.com/custom-software-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/services/custom-software-dispatch.webp",
        width: 2880,
        height: 1800,
        alt: "Example build by Ardn, a custom software development company in Orlando, Florida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company, Florida | Ardn",
    description:
      "Ardn is a custom software development company in Orlando, Florida, serving clients across the US: software built around your process, then hosted and run for you.",
    site: "@ardn_cloud_sol",
    images: ["/images/services/custom-software-dispatch.webp"],
  },
};

const DESC_LD =
  "Custom software development company in Orlando, Florida, serving clients across the US: software built around your process, then hosted and improved for one monthly fee.";

export default function Page() {
  const jsonLd = productJsonLd(CUSTOM_SOFTWARE, {
    path: "/custom-software-development",
    name: "Custom Software Development Company",
    kind: "Service",
    category: "Custom software development",
    description: DESC_LD,
    image: "/images/services/custom-software-dispatch.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={CUSTOM_SOFTWARE} />
    </>
  );
}
