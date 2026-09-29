import { Metadata } from "next";
import OurProductsContent from "./OurProductsContent";

// Product hub: named products, services, industries, and one Salesforce
// solutions section. Metadata leads with the products, not Salesforce.
const DESC =
  "Club Steward for golf clubs, Nonprofit Management and Membership Management, plus custom software and AI built and run for you by a US team.";

export const metadata: Metadata = {
  title: "Products & Services | Ardn Cloud Solutions",
  description: DESC,
  keywords: [
    "Ardn products",
    "golf club management software",
    "nonprofit management software",
    "membership management software",
    "AI customer support",
    "custom software development",
    "custom AI applications",
    "AI Forge Framework",
    "managed software services",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/our-products",
    languages: {
      "en-US": "https://ardncloudsolutions.com/our-products",
      "x-default": "https://ardncloudsolutions.com/our-products",
    },
  },
  openGraph: {
    title: "Software built for the industries we know | Ardn",
    description: DESC,
    url: "https://ardncloudsolutions.com/our-products",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/product-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ardn products and services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products & Services | Ardn Cloud Solutions",
    description: DESC,
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
        name: "Ardn Products & Services",
        description: DESC,
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
        name: "Ardn Products & Services",
        numberOfItems: 6,
        // Products are pointers (name/url/description), with no offers: the
        // detail pages own pricing, and Club Steward pricing is undecided.
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "SoftwareApplication",
              name: "Club Steward",
              url: "https://ardncloudsolutions.com/golf-club-management-software",
              applicationCategory: "BusinessApplication",
              description: "Golf and country club management software for multi-club operators.",
              provider: { "@id": "https://ardncloudsolutions.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "SoftwareApplication",
              name: "Ardn Nonprofit Management",
              url: "https://ardncloudsolutions.com/nonprofit-management-software",
              applicationCategory: "BusinessApplication",
              description: "Membership, billing, check-in, programs and fundraising for YMCAs, JCCs and community nonprofits.",
              provider: { "@id": "https://ardncloudsolutions.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "SoftwareApplication",
              name: "Ardn Membership Management",
              url: "https://ardncloudsolutions.com/membership-management",
              applicationCategory: "BusinessApplication",
              description: "Membership platform for gyms, studios, clubs and associations.",
              provider: { "@id": "https://ardncloudsolutions.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "Service",
              name: "AI Forge",
              url: "https://ardncloudsolutions.com/ai-forge",
              description: "Custom AI applications designed, built, hosted and improved for you under one monthly subscription.",
              provider: { "@id": "https://ardncloudsolutions.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "SoftwareApplication",
              name: "Storefronts",
              url: "https://ardncloudsolutions.com/storefronts",
              applicationCategory: "BusinessApplication",
              description: "Ecommerce that runs inside Salesforce.",
              provider: { "@id": "https://ardncloudsolutions.com/#organization" },
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "SoftwareApplication",
              name: "License Guard",
              url: "https://ardncloudsolutions.com/license-guard",
              applicationCategory: "BusinessApplication",
              description: "Finds and deactivates inactive Salesforce users on your schedule.",
              provider: { "@id": "https://ardncloudsolutions.com/#organization" },
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
