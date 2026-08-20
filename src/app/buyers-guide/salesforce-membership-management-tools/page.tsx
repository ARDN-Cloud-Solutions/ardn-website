import { Metadata } from "next";
import SalesforceMembershipContent from "./SalesforceMembershipContent";

// SEO: This buyers' guide ranks for Salesforce-membership-tool buyer queries.
// We deliberately keep the SF-membership keyword targeting intact (the page
// is bringing traffic) and only enrich the JSON-LD with the fields that
// Article rich results actually need: datePublished, dateModified, author,
// image, mainEntityOfPage, plus publisher → site Organization via @id so the
// entity graph stays coherent across the site.
export const metadata: Metadata = {
  title:
    "Salesforce Membership Management Tools (2026) | Ardn",
  description:
    "Compare the best Salesforce membership management tools in 2026 — Nimble AMS, Fonteva, MemberSmart & Ardn. Evaluation criteria, pitfalls & buying questions.",
  keywords: [
    "Salesforce membership management tools",
    "Salesforce membership software",
    "best Salesforce membership platform",
    "Nimble AMS vs Fonteva",
    "Salesforce association management",
    "Salesforce member portal",
    "Salesforce recurring billing membership",
    "membership management platform 2026",
    "Ardn Membership Management",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/buyers-guide/salesforce-membership-management-tools",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-membership-management-tools",
      "x-default":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-membership-management-tools",
    },
  },
  openGraph: {
    title:
      "Top Salesforce Membership Management Tools: 2026 Buyer's Guide | Ardn Cloud Solutions",
    description:
      "Compare the best Salesforce membership management tools in 2026 — Nimble AMS, Fonteva, AC MemberSmart, SubscriptionFlow, and Ardn. Expert evaluation criteria and buying questions.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-membership-management-tools",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        // Outcome-focused alt — describes what the image conveys.
        alt: "Buyer's guide comparing top Salesforce membership management tools — Nimble AMS, Fonteva, AC MemberSmart, SubscriptionFlow, and Ardn",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Salesforce Membership Management Tools: 2026 Buyer's Guide",
    description:
      "Compare the best Salesforce membership management tools in 2026. Expert evaluation criteria and buying questions.",
    images: [
      "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp",
    ],
  },
};

export default function Page() {
  // SEO: enriched Article schema with the fields Google actually requires for
  // Article rich results — datePublished, dateModified, author, image,
  // mainEntityOfPage. Publisher references the site-wide Organization by @id
  // (defined in root layout) so the entity graph is coherent.
  const url =
    "https://ardncloudsolutions.com/buyers-guide/salesforce-membership-management-tools";
  const image =
    "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: "Top Salesforce Membership Management Tools: 2026 Buyer's Guide | Ardn Cloud Solutions",
        description:
          "Compare the best Salesforce membership management tools in 2026. Expert evaluation criteria, pitfalls, and buying questions.",
        inLanguage: "en-US",
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: image,
        width: 1200,
        height: 630,
        caption:
          "Buyer's guide comparing top Salesforce membership management tools",
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline:
          "Top Salesforce Membership Management Tools: 2026 Buyer's Guide",
        name: "Top Salesforce Membership Management Tools: 2026 Buyer's Guide",
        url,
        mainEntityOfPage: { "@id": url },
        image: { "@id": `${url}#primaryimage` },
        inLanguage: "en-US",
        // ISO-8601 timestamps. datePublished reflects the original asset
        // creation date in May 2026; dateModified updated as the page is
        // refreshed (this is the SEO-meaningful field for freshness signals).
        datePublished: "2026-05-27T00:00:00-04:00",
        dateModified: "2026-06-02T00:00:00-04:00",
        author: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        articleSection: [
          "What is Salesforce Membership Management?",
          "Best Salesforce Membership Management Tools",
          "Let's Compare the Best Salesforce Membership Management Tools!",
          "What to Look for in a Salesforce Membership Platform",
          "Common Mistakes You Must Avoid!",
          "Don't Hit 'Buy' Yet! Ask These Questions First",
          "Finding What Truly Fits!",
        ],
        about: [
          { "@type": "Thing", name: "Salesforce Membership Management" },
          { "@type": "Thing", name: "Ardn Membership Management" },
          { "@type": "Thing", name: "Nimble AMS" },
          { "@type": "Thing", name: "Fonteva" },
          { "@type": "Thing", name: "AC MemberSmart" },
          { "@type": "Thing", name: "SubscriptionFlow" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
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
            name: "Buyers Guide",
            item: "https://ardncloudsolutions.com/buyers-guide",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Salesforce Membership Management Tools",
            item: url,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#productlist`,
        name: "Best Salesforce Membership Management Tools (2026)",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ardn Membership Management & Storefronts — flexible, AI-built, Salesforce-capable",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Nimble AMS — upgrade-proof platform for growing associations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Fonteva — enterprise-level flexibility and event power",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "AC MemberSmart — unified platform for member engagement and community",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "SubscriptionFlow — smarter billing and retention with AI insights",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SalesforceMembershipContent />
    </>
  );
}
