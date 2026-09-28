import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { STOREFRONTS } from "./content";

// SEO/positioning: Storefronts is Category 1 (Salesforce-native). Metadata is
// optimized for Salesforce-specific B2B ecommerce buyer queries. The product
// IS Salesforce-native and we want every "Salesforce ecommerce", "Salesforce
// B2B commerce", "Salesforce-native storefront" search to find this page.
export const metadata: Metadata = {
  title:
    "Storefronts — Salesforce-Native Ecommerce | Ardn",
  description:
    "Salesforce-native ecommerce for B2B & B2C — catalog, checkout, orders, memberships and appointments, all inside your Salesforce org. No middleware, no per-user fees.",
  keywords: [
    "Salesforce ecommerce",
    "Salesforce-native ecommerce platform",
    "Salesforce B2B commerce",
    "Salesforce B2C commerce",
    "Salesforce commerce cloud alternative",
    "Salesforce storefront app",
    "Salesforce ecommerce AppExchange",
    "Salesforce online store",
    "Salesforce-native commerce",
    "Ardn Storefronts",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/storefronts",
    languages: {
      "en-US": "https://ardncloudsolutions.com/storefronts",
      "x-default": "https://ardncloudsolutions.com/storefronts",
    },
  },
  openGraph: {
    title:
      "Storefronts — Salesforce-Native Ecommerce | Ardn",
    description:
      "Run your store inside Salesforce. Catalog, inventory, checkout, orders, memberships and appointments — all native, no middleware. Built by an Orlando-based team.",
    url: "https://ardncloudsolutions.com/storefronts",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/All-in-One-Ecommerce-Solution.webp",
        width: 1200,
        height: 630,
        // Outcome-focused alt — describes what the image conveys.
        alt: "Storefronts by Ardn — Salesforce-native ecommerce platform for B2B and B2C orgs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Storefronts — Salesforce-Native Ecommerce | Ardn",
    description:
      "Run your store inside Salesforce. Catalog, inventory, checkout, orders — all native, no middleware. Orlando-based team.",
    site: "@ardn_cloud_sol",
  },
};

export default function StorefrontsPage() {
  const jsonLd = productJsonLd(STOREFRONTS, {
    path: "/storefronts",
    name: "Storefronts",
    kind: "Service",
    category: "Salesforce-native ecommerce",
    description: "A branded online store that runs inside Salesforce: products, memberships and appointments, with every order on the customer record.",
    image: "/images/storefronts/store.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={STOREFRONTS} />
    </>
  );
}
