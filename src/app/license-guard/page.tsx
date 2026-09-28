import { Metadata } from "next";
import ProductPage from "@/components/product-page/ProductPage";
import { productJsonLd } from "@/components/product-page/jsonld";
import { LICENSE_GUARD } from "./content";

// SEO/positioning: License Guard is Category 1 (Salesforce-native). Metadata
// optimised for high-intent Salesforce-cost-reduction and license-audit
// queries. The product is free on AppExchange, so we lead with that hook.
export const metadata: Metadata = {
  title:
    "License Guard — Free Salesforce License Audit | Ardn",
  description:
    "Free Salesforce-native AppExchange tool that finds inactive seats, warns users & deactivates per policy. Reclaim unused licenses and cut renewal costs.",
  keywords: [
    "Salesforce license audit",
    "Salesforce license optimization",
    "free Salesforce license tool",
    "Salesforce unused licenses",
    "Salesforce cost reduction",
    "Salesforce user inactivity",
    "Salesforce AppExchange free app",
    "Salesforce license management",
    "Salesforce admin tools",
    "Ardn License Guard",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/license-guard",
    languages: {
      "en-US": "https://ardncloudsolutions.com/license-guard",
      "x-default": "https://ardncloudsolutions.com/license-guard",
    },
  },
  openGraph: {
    title:
      "License Guard — Free Salesforce License Audit | Ardn",
    description:
      "Free AppExchange tool. Detects inactive Salesforce users, sends warnings, and deactivates per your policy. Every action logged, free on AppExchange.",
    url: "https://ardncloudsolutions.com/license-guard",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/license-guard/reporting.webp",
        width: 2880,
        height: 1800,
        // Outcome-focused alt — describes what the image conveys.
        alt: "License Guard for Salesforce — free AppExchange tool to detect inactive users and reclaim unused licenses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "License Guard — Free Salesforce License Audit & Optimization",
    description:
      "Free AppExchange tool. Detects inactive Salesforce users, sends warnings, and deactivates per your policy. Free on AppExchange.",
    site: "@ardn_cloud_sol",
  },
};

export default function LicenseGuardPage() {
  // Service (not SoftwareApplication): Google's SoftwareApplication rich
  // result wants aggregate ratings, which License Guard doesn't have enough of.
  const jsonLd = productJsonLd(LICENSE_GUARD, {
    path: "/license-guard",
    name: "License Guard",
    kind: "Service",
    category: "Salesforce license management",
    description: "Free Salesforce app that finds inactive users, warns them, frees their licenses on your schedule, and logs every action.",
    image: "/images/license-guard/reporting.webp",
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPage content={LICENSE_GUARD} />
    </>
  );
}
