import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { APPROACH } from "./content";

// Our Approach: Ardn's AI-first, platform-as-a-service model.

const URL = "https://ardncloudsolutions.com/approach";
const DESC =
  "Ardn's AI-first approach: we catalogue your systems and processes, build a phased roadmap, and run an AI-first platform for you as a PaaS partner.";

export const metadata: Metadata = {
  title: "Our Approach: AI-First Development | Ardn Cloud Solutions",
  description: DESC,
  keywords: ["AI-first development", "AI transformation roadmap", "platform as a service", "business process mapping", "AI consulting", "legacy system modernization"],
  alternates: { canonical: URL },
  openGraph: {
    title: "Don't teach old systems AI. Build AI-first. | Ardn",
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [{ url: "/images/ardn-share.jpg", width: 1200, height: 630, alt: "Ardn Cloud Solutions: software built for your industry, run for you" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Our Approach: AI-First Development | Ardn", description: DESC, images: ["/images/ardn-share.jpg"] },
};

export default function Page() {
  const jsonLd = productJsonLd(APPROACH, {
    path: "/approach",
    name: "Ardn AI-First Approach",
    kind: "Service",
    category: "AI-first development and platform as a service",
    description: DESC,
    image: "/images/approach/roadmap.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={APPROACH} />
    </>
  );
}
