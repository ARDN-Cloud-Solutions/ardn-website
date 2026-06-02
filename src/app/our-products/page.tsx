import { Metadata } from "next";
import OurProductsContent from "./OurProductsContent";

// SEO/positioning: Our Products is the dual-pillar product hub. It surfaces
// BOTH Cat 1 (Salesforce-native) and Cat 2 (AI-built, Salesforce-capable)
// product lines under one roof. Metadata covers both intent buckets.
export const metadata: Metadata = {
  title:
    "Ardn Product Suite — Custom AI Apps & Salesforce-Native Cloud Products | Ardn Cloud Solutions",
  description:
    "Six focused products from our Orlando-based team. AI Forge (custom AI development), Membership Management (AI-built platform for YMCAs and gyms), Storefronts, License Guard, Salesforce Payments, and ReplyCX — Salesforce-native where it counts, AI-built where it matters.",
  keywords: [
    "Ardn product suite",
    "Salesforce-native products",
    "Salesforce AppExchange products",
    "custom AI applications",
    "AI Forge Framework",
    "membership management software",
    "Salesforce commerce",
    "Salesforce license audit",
    "Salesforce payments",
    "AI customer support",
    "Orlando cloud products",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/our-products",
    languages: {
      "en-US": "https://ardncloudsolutions.com/our-products",
      "x-default": "https://ardncloudsolutions.com/our-products",
    },
  },
  openGraph: {
    title:
      "Ardn Product Suite — Custom AI Apps & Salesforce-Native Cloud Products | Ardn Cloud Solutions",
    description:
      "Six focused products. AI Forge (custom AI development) + Membership Management + Storefronts + License Guard + Salesforce Payments + ReplyCX. Florida-based team, 30+ years Salesforce expertise.",
    url: "https://ardncloudsolutions.com/our-products",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/product-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ardn product suite — AI-built custom applications and Salesforce-native cloud products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ardn Product Suite — Custom AI Apps & Salesforce-Native Cloud Products",
    description:
      "Six focused products from a Florida-based team. AI Forge + Membership Management + Storefronts + License Guard + Salesforce Payments + ReplyCX.",
    site: "@ardn_cloud_sol",
  },
};

export default function OurProductsPage() {
  // SEO: ItemList of all 6 products — each entry is a SoftwareApplication
  // pointer back to its detail page. CollectionPage is the right primary type
  // for a product hub. The whole thing references the site-wide Organization.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ardncloudsolutions.com/our-products",
        url: "https://ardncloudsolutions.com/our-products",
        name: "Ardn Product Suite",
        description:
          "Six focused products from Ardn Cloud Solutions: custom AI applications via the AI Forge Framework, an AI-built membership platform, and four Salesforce-native cloud products.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/our-products#breadcrumb",
        },
        inLanguage: "en-US",
        about: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        mainEntity: {
          "@id": "https://ardncloudsolutions.com/our-products#productlist",
        },
      },
      {
        "@type": "ItemList",
        "@id":
          "https://ardncloudsolutions.com/our-products#productlist",
        name: "Ardn Product Suite",
        numberOfItems: 6,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "SoftwareApplication",
              name: "AI Forge",
              url: "https://ardncloudsolutions.com/ai-forge",
              applicationCategory: "BusinessApplication",
              applicationSubCategory:
                "Custom AI application development service",
              description:
                "Productized custom AI development practice powered by the proprietary AI Forge Framework. Designed, built, deployed, and operated under one monthly subscription.",
              operatingSystem: "Web",
              publisher: {
                "@id": "https://ardncloudsolutions.com/#organization",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "SoftwareApplication",
              name: "Ardn Membership Management",
              url: "https://ardncloudsolutions.com/membership-management",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Membership Management Software",
              description:
                "Standalone, AI-built membership platform for YMCAs, gyms, studios, clubs, and associations. Integrates cleanly with Salesforce, HubSpot, and other CRMs.",
              operatingSystem: "Web",
              publisher: {
                "@id": "https://ardncloudsolutions.com/#organization",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "SoftwareApplication",
              name: "Ardn Storefronts",
              url: "https://ardncloudsolutions.com/storefronts",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Salesforce-native ecommerce",
              description:
                "Salesforce-native ecommerce platform. Catalog, inventory, checkout, orders, memberships, events, and appointments — all native, no middleware.",
              operatingSystem: "Web",
              publisher: {
                "@id": "https://ardncloudsolutions.com/#organization",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "SoftwareApplication",
              name: "License Guard",
              url: "https://ardncloudsolutions.com/license-guard",
              applicationCategory: "BusinessApplication",
              applicationSubCategory:
                "Salesforce license optimization & audit",
              description:
                "Salesforce-native watchdog for unused licenses. Detects inactivity, warns the user, and deactivates per your rules. Typically pays back its annual cost in one quarter.",
              operatingSystem: "Web",
              publisher: {
                "@id": "https://ardncloudsolutions.com/#organization",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "SoftwareApplication",
              name: "Salesforce Payments by Ardn",
              url: "https://ardncloudsolutions.com/salesforce-payments",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "Salesforce-native payments",
              description:
                "From quote to cash inside Salesforce. Branded checkout, real-time status, automated reconciliation — no tab-switching, no PCI scope creep.",
              operatingSystem: "Web",
              publisher: {
                "@id": "https://ardncloudsolutions.com/#organization",
              },
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "SoftwareApplication",
              name: "ReplyCX (AI-Powered Support)",
              url: "https://ardncloudsolutions.com/ai-powered-support",
              applicationCategory: "BusinessApplication",
              applicationSubCategory:
                "AI customer support automation",
              description:
                "AI-built support automation across WhatsApp, email, chat, and social. Automates around 70% of routine queries; no-code agent builder on your existing knowledge base.",
              operatingSystem: "Web",
              publisher: {
                "@id": "https://ardncloudsolutions.com/#organization",
              },
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/our-products#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ardncloudsolutions.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Products",
            item: "https://ardncloudsolutions.com/our-products",
          },
        ],
      },
    ],
  };

  return (
    // Semantic HTML5: <main> primary landmark.
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OurProductsContent />
    </main>
  );
}
