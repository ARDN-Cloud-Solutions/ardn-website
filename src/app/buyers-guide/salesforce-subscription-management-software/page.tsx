import { Metadata } from "next";
import SalesforceSubscriptionContent from "./SalesforceSubscriptionContent";

export const metadata: Metadata = {
  title: "8 Best Salesforce Subscription Management Software Tools",
  description: "Not sure which Salesforce subscription management software fits your setup? Get a simple breakdown of tools, pricing, and what to expect before you commit.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/buyers-guide/salesforce-subscription-management-software",
    languages: {
      "en-US": "https://ardncloudsolutions.com/buyers-guide/salesforce-subscription-management-software",
      "x-default": "https://ardncloudsolutions.com/buyers-guide/salesforce-subscription-management-software",
    },
  },
  openGraph: {
    title: "8 Best Salesforce Subscription Management Software Tools",
    description: "Not sure which Salesforce subscription management software fits your setup? Get a simple breakdown of tools, pricing, and what to expect before you commit.",
    url: "https://ardncloudsolutions.com/buyers-guide/salesforce-subscription-management-software",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/buyers-guide/ardn-all-in-one-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Best Salesforce Subscription Management Tools",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "8 Best Salesforce Subscription Management Software Tools",
    description: "Not sure which Salesforce subscription management software fits your setup? Get a simple breakdown of tools, pricing, and what to expect before you commit.",
    images: ["/buyers-guide/ardn-all-in-one-ecommerce.webp"],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ardncloudsolutions.com/buyers-guide/salesforce-subscription-management-software",
        "url": "https://ardncloudsolutions.com/buyers-guide/salesforce-subscription-management-software",
        "name": "8 Best Salesforce Subscription Management Software Tools",
        "description": "Not sure which Salesforce subscription management software fits your setup? Get a simple breakdown of tools, pricing, and what to expect before you commit.",
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
        "headline": "8 Best Salesforce Subscription Management Software Tools",
        "name": "8 Best Salesforce Subscription Management Software Tools"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ardncloudsolutions.com" },
          { "@type": "ListItem", "position": 2, "name": "Buyers Guide", "item": "https://ardncloudsolutions.com/buyers-guide" },
          { "@type": "ListItem", "position": 3, "name": "Salesforce Subscription Management Software", "item": "https://ardncloudsolutions.com/buyers-guide/salesforce-subscription-management-software" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Salesforce Subscription Management?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Salesforce subscription management is how you run all your subscription billing, renewals, and recurring revenue from inside Salesforce instead of using separate billing tools. When a deal closes in Salesforce, the subscription starts, invoices go out, payments sync, and every team sees the same customer info without chasing multiple systems."
            }
          },
          {
            "@type": "Question",
            "name": "Can I manage subscriptions in Salesforce without Revenue Cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, for sure. Revenue Cloud is for huge enterprises. Most companies use a native Salesforce app like ARDN or Fonteva, or an external tool like Chargebee or Recurly. It's faster, cheaper, and easier than spending months and hundreds of thousands on Revenue Cloud."
            }
          },
          {
            "@type": "Question",
            "name": "What's the best subscription tool for nonprofits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you're a smaller nonprofit with simple needs, ARDN is a more affordable option. Fonteva is also a good fit but is better suited for membership-focused companies. It handles renewals, events, and community features without workarounds"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Best Salesforce Subscription Management Software",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "ARDN Storefronts: Your All-in-one Salesforce Native Solution" },
          { "@type": "ListItem", "position": 2, "name": "Fonteva: For Associations, Nonprofits & Member-Driven Subscriptions" },
          { "@type": "ListItem", "position": 3, "name": "StoreConnect: For Multi-Location Retail, Nonprofits & Unified Commerce" },
          { "@type": "ListItem", "position": 4, "name": "Chargebee: For SaaS, Subscription-First Companies with Usage-Based & Hybrid Billing Models" },
          { "@type": "ListItem", "position": 5, "name": "Stripe Billing: For SaaS Startups & Subscription-First SMBs" },
          { "@type": "ListItem", "position": 6, "name": "Recurly: For Mid-Market to Enterprise Subscription Businesses with Complex Billing" },
          { "@type": "ListItem", "position": 7, "name": "Zuora: For Enterprise Subscription & Monetization with Complex Billing" },
          { "@type": "ListItem", "position": 8, "name": "Maxio: For Mid-Market SaaS With Complex Billing" }
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
      <SalesforceSubscriptionContent />
    </>
  );
}
