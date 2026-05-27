import { Metadata } from "next";
import SalesforceEventTicketingContent from "./SalesforceEventTicketingContent";

export const metadata: Metadata = {
  title: "7 Best Salesforce Event Ticketing Platforms Compared | ARDN",
  description: "Compare the top 7 Salesforce event ticketing platforms. Find the best native solution for managing events, registrations, and payments inside Salesforce.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
    languages: {
      "en-US": "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
      "x-default": "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
    },
  },
  openGraph: {
    title: "7 Best Salesforce Event Ticketing Platforms Compared | ARDN",
    description: "Compare the top 7 Salesforce event ticketing platforms. Find the best native solution for managing events, registrations, and payments inside Salesforce.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "7 Top Salesforce Event and Ticketing Platforms",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Best Salesforce Event Ticketing Platforms Compared | ARDN",
    description: "Compare the top 7 Salesforce event ticketing platforms. Find the best native solution for managing events, registrations, and payments inside Salesforce.",
    images: ["https://ardncloudsolutions.com/buyers-guide/ardn-all-in-one-ecommerce.webp"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
        "url": "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform",
        "name": "7 Best Salesforce Event Ticketing Platforms Compared | ARDN",
        "description": "Compare the top 7 Salesforce event ticketing platforms. Find the best native solution for managing events, registrations, and payments inside Salesforce.",
        "inLanguage": "en-US",
        "publisher": {
          "@type": "Organization",
          "name": "Ardn Cloud Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ardncloudsolutions.com/logo/ardn_logo.png"
          }
        }
      },
      {
        "@type": "Article",
        "headline": "7 Top Salesforce Event and Ticketing Platforms",
        "name": "7 Top Salesforce Event and Ticketing Platforms",
        "url": "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
          { "@type": "ListItem", "position": 2, "name": "Buyers Guide", "item": "https://ardncloudsolutions.com/buyers-guide" },
          { "@type": "ListItem", "position": 3, "name": "Salesforce Event Ticketing Platform", "item": "https://ardncloudsolutions.com/buyers-guide/salesforce-event-ticketing-platform" }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Best Event and Ticketing Platforms for Salesforce",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ARDN Storefronts: The All-in-one Salesforce-native Solution" },
          { "@type": "ListItem", "position": 2, "name": "Blackthorn.io: For Advanced Analytics and AI-Powered Insights" },
          { "@type": "ListItem", "position": 3, "name": "Fonteva Events: For Multi-Track Conferences and Association Events" },
          { "@type": "ListItem", "position": 4, "name": "AC Events Enterprise: For Flexible Pricing with Unified Checkout" },
          { "@type": "ListItem", "position": 5, "name": "EVA Event Registration: For All-in-One Attendee Engagement" },
          { "@type": "ListItem", "position": 6, "name": "Ticketbud: For Pay-Per-Ticket Pricing and Customer Support" },
          { "@type": "ListItem", "position": 7, "name": "Eventbrite: For Mass-Market Event Ticketing with Global Reach" }
        ]
      }
    ]
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
