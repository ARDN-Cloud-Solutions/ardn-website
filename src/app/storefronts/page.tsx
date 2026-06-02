import { Metadata } from "next";
import StorefrontsContent from "./StorefrontsContent";

// SEO/positioning: Storefronts is Category 1 (Salesforce-native). Metadata is
// optimized for Salesforce-specific B2B ecommerce buyer queries. The product
// IS Salesforce-native and we want every "Salesforce ecommerce", "Salesforce
// B2B commerce", "Salesforce-native storefront" search to find this page.
export const metadata: Metadata = {
  title:
    "Storefronts — Salesforce-Native Ecommerce Platform | Ardn Cloud Solutions",
  description:
    "Storefronts by Ardn is a Salesforce-native ecommerce platform for B2B and B2C. Catalog, inventory, checkout, orders, memberships, events, and appointments — all inside your Salesforce org. No middleware, no syncing, no per-user fees. Built by our Orlando-based team.",
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
      "Storefronts — Salesforce-Native Ecommerce Platform | Ardn Cloud Solutions",
    description:
      "Run your store inside Salesforce. Catalog, inventory, checkout, orders, memberships, events, and appointments — all native, no middleware. Built by an Orlando-based team.",
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
      "Storefronts — Salesforce-Native Ecommerce Platform | Ardn Cloud Solutions",
    description:
      "Run your store inside Salesforce. Catalog, inventory, checkout, orders — all native, no middleware. Orlando-based team.",
    site: "@ardn_cloud_sol",
  },
};

export default function StorefrontsPage() {
  // SEO: SoftwareApplication is now the primary type for the page (was
  // missing). Publisher → site-wide Organization via @id. Review, FAQPage,
  // and BreadcrumbList kept and refined.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://ardncloudsolutions.com/storefronts#software",
        name: "Ardn Storefronts",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Salesforce-native ecommerce platform",
        operatingSystem: "Salesforce, Web",
        description:
          "Salesforce-native ecommerce platform for B2B and B2C. Catalog, inventory, checkout, orders, memberships, events, and appointments — all inside Salesforce. Eliminates middleware, syncing, and per-user fees that scale against you.",
        url: "https://ardncloudsolutions.com/storefronts",
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        featureList: [
          "Catalog, inventory, and order management",
          "B2B and B2C checkout",
          "Memberships, subscriptions, events, ticketing",
          "Native to Salesforce — no middleware",
          "Stripe, Paymentus, Apple Pay, Google Pay, Venmo",
          "Launch in days, not quarters",
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/storefronts",
        url: "https://ardncloudsolutions.com/storefronts",
        name: "Storefronts — Salesforce-Native Ecommerce Platform | Ardn Cloud Solutions",
        description:
          "Storefronts by Ardn is a Salesforce-native ecommerce platform for B2B and B2C. Run your store inside Salesforce — no middleware, no syncing.",
        breadcrumb: {
          "@id": "https://ardncloudsolutions.com/storefronts#breadcrumb",
        },
        inLanguage: "en-US",
        about: {
          "@id": "https://ardncloudsolutions.com/storefronts#software",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/storefronts#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ardncloudsolutions.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Storefronts",
            item: "https://ardncloudsolutions.com/storefronts",
          },
        ],
      },
      {
        "@type": "Review",
        itemReviewed: {
          "@id": "https://ardncloudsolutions.com/storefronts#software",
        },
        reviewBody:
          "Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business. Their strategic focus on high-impact efficiencies transformed our operations, delivering substantial cost reductions and measurable improvements throughout our processes.",
        author: {
          "@type": "Person",
          name: "Jay Vashi",
          // Role generalised to align with the site-wide dual-pillar
          // positioning; still a Salesforce-Cat-1 page, so the customer's
          // Salesforce context is implicit from the product page itself.
          jobTitle: "Senior Delivery Manager",
          worksFor: {
            "@type": "Organization",
            name: "Fortune 500 insurance company",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/storefronts#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does Storefronts integrate with Salesforce?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Storefronts is Salesforce-native — it installs directly into your Salesforce org. Customers, orders, products, and inventory live on standard Salesforce objects, so there is no middleware, no syncing, and no parallel database.",
            },
          },
          {
            "@type": "Question",
            name: "Can I customise my store?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Storefronts offers extensive customisation for branding, layout, checkout flow, and field configuration to match your business model — built on standard Salesforce metadata.",
            },
          },
          {
            "@type": "Question",
            name: "What payment methods are supported?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Storefronts supports cards, ACH, Apple Pay, Google Pay, Venmo, and major processors including Stripe and Paymentus. Bring your own merchant account or use ours.",
            },
          },
          {
            "@type": "Question",
            name: "Is Storefronts scalable for growing businesses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Storefronts is designed for high-volume, multi-location B2B and B2C operations. Most customers launch in days, not quarters, and scale on the same Salesforce infrastructure they already use.",
            },
          },
          {
            "@type": "Question",
            name: "What does it cost vs. Salesforce Commerce Cloud?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Storefronts typically costs a fraction of Salesforce Commerce Cloud because it eliminates the middleware, the per-transaction commerce-cloud fees, and the multi-org licensing. We can run a side-by-side TCO comparison on a free 30-minute call.",
            },
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
      <StorefrontsContent />
    </main>
  );
}
