import { Metadata } from "next";
import SalesforceEventTicketingContent from "./SalesforceEventTicketingContent";

// SEO: Cat 1 — Salesforce event ticketing buyers. High-intent product
// category for associations, nonprofits, and event-driven businesses.
export const metadata: Metadata = {
  title:
    "7 Best Salesforce Event Ticketing Platforms (2026) | Ardn",
  description:
    "Compare the top 7 Salesforce event ticketing platforms in 2026 — Ardn Storefronts, Blackthorn.io, Fonteva Events, AC Events Enterprise, EVA, Ticketbud, and Eventbrite. Native solutions for events, registrations, and payments inside Salesforce.",
  keywords: [
    "Salesforce event ticketing",
    "Salesforce event registration",
    "Salesforce event management",
    "Salesforce-native event platform",
    "Blackthorn vs Fonteva Events",
    "best Salesforce ticketing app",
    "Salesforce event app 2026",
    "Ardn Storefronts events",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
      "x-default":
        "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
    },
  },
  openGraph: {
    title:
      "7 Best Salesforce Event Ticketing Platforms (2026) | Ardn",
    description:
      "Compare top Salesforce event ticketing platforms in 2026. Ardn Storefronts, Blackthorn, Fonteva Events, AC Events, EVA, Ticketbud, Eventbrite.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Buyer's guide comparing the top 7 Salesforce event ticketing platforms",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "7 Best Salesforce Event Ticketing Platforms Compared (2026)",
    description:
      "Compare top Salesforce event ticketing platforms in 2026.",
    images: [
      "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp",
    ],
  },
};

export default function Page() {
  const url =
    "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform";
  const image =
    "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: "7 Best Salesforce Event Ticketing Platforms (2026) | Ardn",
        description:
          "Compare top Salesforce event ticketing platforms in 2026.",
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
          "Comparison of the top 7 Salesforce event ticketing platforms",
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "7 Top Salesforce Event and Ticketing Platforms",
        name: "7 Top Salesforce Event and Ticketing Platforms",
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
          { "@type": "Thing", name: "Salesforce event ticketing" },
          { "@type": "Thing", name: "Ardn Storefronts" },
          { "@type": "Thing", name: "Blackthorn.io" },
          { "@type": "Thing", name: "Fonteva Events" },
          { "@type": "Thing", name: "AC Events Enterprise" },
          { "@type": "Thing", name: "EVA Event Registration" },
          { "@type": "Thing", name: "Ticketbud" },
          { "@type": "Thing", name: "Eventbrite" },
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
            name: "Salesforce Event Ticketing Platform",
            item: url,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#productlist`,
        name: "Best Event and Ticketing Platforms for Salesforce (2026)",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ardn Storefronts — All-in-one Salesforce-native solution",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blackthorn.io — Advanced analytics and AI-powered insights",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Fonteva Events — Multi-track conferences and association events",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "AC Events Enterprise — Flexible pricing with unified checkout",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "EVA Event Registration — All-in-one attendee engagement",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Ticketbud — Pay-per-ticket pricing and customer support",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Eventbrite — Mass-market event ticketing with global reach",
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
      <SalesforceEventTicketingContent />
    </>
  );
}
