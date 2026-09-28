import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { CUSTOM_ECOMMERCE } from "./content";

// Solution page anchored to real delivered builds: custom ecommerce stores
// (incl. merch storefronts) that are NOT necessarily Salesforce-native. This
// is the off-platform counterpart to the /storefronts product (which is
// Salesforce-native). No client names / metrics (no proof cleared yet).
export const metadata: Metadata = {
  title:
    "Custom Ecommerce Development — Built & Run for You | Ardn",
  description:
    "Custom ecommerce stores — merch shops, subscriptions, memberships & complex catalogs — built and run for you. Live in weeks. New customers: free build.",
  keywords: [
    "custom ecommerce development",
    "custom online store development",
    "merch store development",
    "subscription ecommerce development",
    "headless ecommerce development",
    "ecommerce development company",
    "bespoke ecommerce platform",
    "custom shopping cart development",
    "AI Forge Framework",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-ecommerce-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-ecommerce-development",
      "x-default": "https://ardncloudsolutions.com/custom-ecommerce-development",
    },
  },
  openGraph: {
    title:
      "Custom Ecommerce Development — Built & Run for You | Ardn",
    description:
      "Custom ecommerce stores — merch, subscriptions, memberships, complex catalogs — built to fit your business and run for you. New customers: free build.",
    url: "https://ardncloudsolutions.com/custom-ecommerce-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/services/ecommerce-store.webp",
        width: 2880,
        height: 1800,
        alt: "Custom ecommerce development — online stores built and run by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Ecommerce Development | Ardn",
    description:
      "Custom online stores — merch, subscriptions, memberships — built and run for you. New customers: free build.",
    site: "@ardn_cloud_sol",
    images: ["/images/services/ecommerce-store.webp"],
  },
};

export default function Page() {
  const jsonLd = productJsonLd(CUSTOM_ECOMMERCE, {
    path: "/custom-ecommerce-development",
    name: "Custom Ecommerce Development",
    kind: "Service",
    category: "Custom ecommerce development",
    description: "Custom stores for merch, memberships, subscriptions and personalised products, built and run for you.",
    image: "/images/services/ecommerce-store.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={CUSTOM_ECOMMERCE} />
    </>
  );
}
