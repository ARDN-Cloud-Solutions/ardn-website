import { Metadata } from "next";
import SalesforceWebflowAutomationContent from "./SalesforceWebflowAutomationContent";

// SEO: Cat 1 — Salesforce workflow automation buyers. Previously the page
// had only a WebPage in its JSON-LD; enriched here with the full Article +
// BreadcrumbList + ItemList pattern used across the rest of the buyers' guides.
export const metadata: Metadata = {
  title:
    "Best Salesforce Workflow Automation Tools (2026) | Ardn",
  description:
    "Compare the best Salesforce workflow automation tools in 2026 — simplify processes, cut manual effort, and keep your org clean as you scale.",
  keywords: [
    "Salesforce workflow automation",
    "Salesforce automation tools",
    "Salesforce Flow alternatives",
    "Salesforce Process Builder",
    "Salesforce automation 2026",
    "Mulesoft alternatives",
    "Zapier Salesforce",
    "Workato Salesforce",
    "Ardn AI Forge automation",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
      "x-default":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
    },
  },
  openGraph: {
    title:
      "Best Salesforce Workflow Automation Tools: 2026 Buyer's Guide | Ardn Cloud Solutions",
    description:
      "Compare the best Salesforce workflow automation tools in 2026 — simplify processes, reduce manual effort, and keep your Salesforce org clean as you scale.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Buyer's guide comparing the best Salesforce workflow automation tools",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Salesforce Workflow Automation Tools: 2026 Buyer's Guide",
    description:
      "Compare the best Salesforce workflow automation tools in 2026.",
    images: ["/buyers-guide/ardn-all-in-one-ecommerce.webp"],
  },
};

export default function Page() {
  const url =
    "https://ardncloudsolutions.com/buyers-guide/salesforce-workflow-automation-tools";
  const image =
    "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: "Best Salesforce Workflow Automation Tools: 2026 Buyer's Guide | Ardn Cloud Solutions",
        description:
          "Compare the best Salesforce workflow automation tools in 2026.",
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
          "Comparison of the best Salesforce workflow automation tools",
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline:
          "Best Salesforce Workflow Automation Tools: A 2026 Buyer's Guide",
        name: "Best Salesforce Workflow Automation Tools: A 2026 Buyer's Guide",
        url,
        mainEntityOfPage: { "@id": url },
        image: { "@id": `${url}#primaryimage` },
        inLanguage: "en-US",
        datePublished: "2026-05-27T00:00:00-04:00",
        dateModified: "2026-06-02T00:00:00-04:00",
        author: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        publisher: {
          "@id": "https://ardncloudsolutions.com/#organization",
        },
        about: [
          { "@type": "Thing", name: "Salesforce workflow automation" },
          { "@type": "Thing", name: "Salesforce Flow Builder" },
          { "@type": "Thing", name: "Mulesoft" },
          { "@type": "Thing", name: "Zapier" },
          { "@type": "Thing", name: "Workato" },
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
            name: "Salesforce Workflow Automation Tools",
            item: url,
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
      <SalesforceWebflowAutomationContent />
    </>
  );
}
