import { Hammer, LayoutDashboard, Plug, RefreshCw, ShieldCheck, Users, Wallet } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";
import { FAQS } from "./faqs";

// Custom Portal Development page content (a service). Pricing and the new-customer
// free-build offer are the owner-published AI Forge terms and live in the FAQ.
// Screens are EXAMPLE builds rendered as mockups with fictional data
// (scripts/product-mockups) and are labelled as examples on the page.

export const CUSTOM_PORTAL: ProductPageContent = {
  slug: "custom-portal-development",
  theme: {
  "accent": "#93c5fd",
  "accentSoft": "#c7dffe",
  "accentRgb": "147, 197, 253",
  "accentInk": "#0b2447",
  "accent2": "#1d4ed8",
  "accent2Deep": "#1e3a8a",
  "accent2Rgb": "29, 78, 216"
},
  hero: {
  "eyebrow": "Custom Portal Development",
  "title": "Give every user exactly the screen",
  "titleEm": "they need.",
  "lede": "Customer, seller and staff portals connected live to your CRM, so light users stop needing a full per-seat license. One flat monthly fee, no matter how many people log in.",
  "primaryCta": {
    "label": "Book a free 30-minute call",
    "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
  },
  "secondaryCta": {
    "label": "See example portals",
    "href": "#tour"
  },
  "proof": [
    "Two-way sync with your CRM",
    "One flat fee, unlimited users",
    "No migration, no retraining"
  ],
  "shot": {
    "src": "/images/services/customer-portal.webp",
    "alt": "Example customer portal with orders, invoices and support",
    "url": "portal.northwindsupply.com"
  },
  "float": {
    "label": "Example portal · this month",
    "stats": [
      {
        "value": "3",
        "label": "Open orders"
      },
      {
        "value": "1",
        "label": "Support ticket, 4 h reply"
      }
    ]
  },
  "caption": "Example portals with fictional companies and figures."
},
  trust: [
  "US-based team",
  "30+ yrs building software",
  "4-hour response SLA",
  "Keeps your CRM"
],
  figures: [
  {
    "value": "1",
    "label": "flat fee, however many users log in"
  },
  {
    "value": "0",
    "label": "data migrations: your CRM stays the source"
  },
  {
    "value": "2–6",
    "label": "weeks to a live first version"
  },
  {
    "value": "$0",
    "label": "build fee for new customers"
  }
],
  pains: {
  "kicker": "The per-seat problem",
  "title": "You're paying full CRM licenses for people who use a sliver of it.",
  "sub": "Sellers checking stock, ops staff updating orders, customers checking invoices. Each one costs a full seat, every month.",
  "items": [
    {
      "label": "Full seats",
      "text": "A license built for power users, bought for someone who checks one screen."
    },
    {
      "label": "Clunky views",
      "text": "Stripped-down CRM screens that are still too much for light users."
    },
    {
      "label": "Growing bill",
      "text": "Every new customer or seller adds to the renewal."
    },
    {
      "label": "Portal tiers",
      "text": "Built-in portal licenses still bill per user and limit what you can build."
    }
  ]
},
  promises: {
    kicker: "How it helps",
    title: "A focused portal beats a stripped-down CRM view.",
    sub: "Faster for your users, cheaper for you, and your CRM stays exactly as it is.",
    items: [
      { icon: Users, title: "Built for one group", body: "Each portal fits one group's job: customers, sellers, ops or partners." },
      { icon: Plug, title: "Live two-way sync", body: "Changes land in your CRM instantly, so there's one source of truth." },
      { icon: Wallet, title: "One flat fee", body: "A predictable monthly fee instead of per-seat licenses." },
      { icon: ShieldCheck, title: "Yours and secure", body: "Role-based access, audit trails, and you own the portal." },
    ],
  },
  tour: {
  "kicker": "Example portals",
  "title": "Portals your users will actually open.",
  "sub": "Two examples of portals that take light users off full CRM licenses.",
  "rows": [
    {
      "kicker": "Customer portal",
      "title": "Orders, invoices and support in one place.",
      "body": "Customers check orders, pay invoices, raise tickets and reorder without calling your team. Everything they do shows up on their CRM record.",
      "points": [
        "Order tracking and one-click reorder",
        "Online invoice payment",
        "Support tickets with your team's replies"
      ],
      "shot": {
        "src": "/images/services/customer-portal.webp",
        "alt": "Customer portal home with orders, invoices and support",
        "url": "portal.northwindsupply.com"
      }
    },
    {
      "kicker": "Seller portal",
      "title": "Stock, quotes and orders without a CRM seat.",
      "body": "Sellers look up live inventory across warehouses, build quotes and place orders. Every quote is saved to the right opportunity in the CRM.",
      "points": [
        "Live stock across locations",
        "Quotes saved to the CRM opportunity",
        "Works on a phone in the field"
      ],
      "shot": {
        "src": "/images/services/seller-portal.webp",
        "alt": "Seller portal inventory lookup with a quote in progress",
        "url": "Seller Hub · Inventory"
      }
    }
  ],
  "cta": {
    "text": "Want to see where a portal cuts your per-seat bill? We'll look at how your users actually use the CRM.",
    "action": {
      "label": "Book a free 30-minute call",
      "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
    }
  }
},
  sampleNote: "Example builds shown with fictional companies, people and figures.",
  modules: {
    kicker: "Portals we build",
    title: "One portal per group, each built to its job.",
    sub: "Connected to Salesforce, HubSpot, Dynamics or the CRM you already run.",
    items: [
      { icon: Users, title: "Customer portals", body: "Orders, invoices, documents and support." },
      { icon: LayoutDashboard, title: "Seller portals", body: "Inventory, quotes, orders and commissions." },
      { icon: Hammer, title: "Ops & staff portals", body: "Order updates, tasks and field work." },
      { icon: Plug, title: "CRM integration", body: "Two-way sync with your existing CRM." },
      { icon: ShieldCheck, title: "Access control", body: "Roles, single sign-on and audit trails." },
      { icon: RefreshCw, title: "Run for you", body: "Hosting, monitoring and changes included." },
    ],
  },
  steps: {
  "kicker": "How it works",
  "title": "Live in weeks, alongside your CRM.",
  "sub": "No migration and no retraining for the people who use the CRM every day.",
  "items": [
    {
      "title": "Map your users",
      "body": "We look at who uses what, and where a portal saves the most."
    },
    {
      "title": "Build",
      "body": "A focused portal for one group first, with weekly demos."
    },
    {
      "title": "Connect",
      "body": "Two-way sync with your CRM, tested on real data."
    },
    {
      "title": "Run & expand",
      "body": "We host it and add the next group when you're ready."
    }
  ]
},
  faqs: FAQS,
  form: {
  "heading": "See what a portal could save you",
  "sub": "Tell us which CRM you use and who needs access. We'll reply within 4 business hours.",
  "submitLabel": "Get my estimate",
  "messageLabel": "Who needs a portal, and what do they do today?"
},
  final: {
  "title": "Keep your CRM.",
  "titleEm": "Stop paying for seats nobody needs.",
  "lede": "Book a free call. We'll show you where a portal cuts the bill and send a fixed quote within 48 hours.",
  "cta": {
    "label": "Book a free 30-minute call",
    "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
  },
  "links": [
    {
      "label": "Partner portals",
      "href": "/custom-partner-portal-development"
    },
    {
      "label": "Cut CRM licensing costs",
      "href": "/reduce-crm-licensing-costs"
    },
    {
      "label": "Savings calculator",
      "href": "/savings-calculator"
    }
  ]
},
};
