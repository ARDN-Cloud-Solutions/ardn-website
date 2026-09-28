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
// capability, not the whole pitch.
export const metadata: Metadata = {
  title: "Custom Software & Platform Development | Ardn",
  description:
    "We design, build & run custom software, platforms & portals that replace or connect your tools — live in weeks, one flat fee. New customers build free.",
  keywords: [
    "custom software development",
    "custom software development company",
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
    title: "Custom Software & Platform Development | Ardn",
    description:
      "Custom software, platforms & portals that replace or connect your tools — built and run for you in weeks, one flat monthly fee. New customers build free.",
    url: "https://ardncloudsolutions.com/custom-software-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/services/custom-software-dispatch.webp",
        width: 2880,
        height: 1800,
        alt: "Custom software & platform development — built and run for you by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & Platform Development | Ardn",
    description:
      "Custom software, platforms & portals — built and run for you in weeks, one flat monthly fee. New customers build free.",
    site: "@ardn_cloud_sol",
    images: ["/images/services/custom-software-dispatch.webp"],
  },
};

export default function Page() {
  const jsonLd = productJsonLd(CUSTOM_SOFTWARE, {
    path: "/custom-software-development",
    name: "Custom Software Development",
    kind: "Service",
    category: "Custom software development",
    description: "Custom software built around your process, then hosted and improved for one monthly fee.",
    image: "/images/services/custom-software-dispatch.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={CUSTOM_SOFTWARE} />
    </>
  );
}
