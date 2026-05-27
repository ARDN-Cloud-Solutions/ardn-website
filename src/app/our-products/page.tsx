import { Metadata } from "next";
import OurProductsContent from "./OurProductsContent";

export const metadata: Metadata = {
  title: "Our Products - Ardn Cloud Solutions",
  description: "Explore our innovative Salesforce products designed to power up your business and maximize your investment.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/our-products",
    languages: {
      "en-US": "https://ardncloudsolutions.com/our-products",
      "x-default": "https://ardncloudsolutions.com/our-products",
    },
  },
  openGraph: {
    title: "Our Products - Ardn Cloud Solutions",
    description: "Explore our innovative Salesforce products designed to power up your business and maximize your investment.",
    url: "https://ardncloudsolutions.com/our-products",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/product-hero.webp",
        width: 1200,
        height: 630,
        alt: "Our Products - Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products - Ardn Cloud Solutions",
    description: "Explore our innovative Salesforce products designed to power up your business and maximize your investment.",
    site: "@ardn_cloud_sol",
  },
};

export default function OurProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/our-products",
        "url": "https://ardncloudsolutions.com/our-products",
        "name": "Our Products - Ardn Cloud Solutions",
        "description": "Explore our innovative Salesforce products designed to power up your business and maximize your investment.",
        "breadcrumb": { "@id": "https://ardncloudsolutions.com/our-products#breadcrumb" },
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/our-products#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ardncloudsolutions.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Our Products",
            "item": "https://ardncloudsolutions.com/our-products",
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OurProductsContent />
    </main>
  );
}
