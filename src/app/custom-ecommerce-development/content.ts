import { BarChart3, Plug, Repeat, Shirt, ShoppingBag, Truck } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";
import { FAQS } from "./faqs";

// Custom Ecommerce Development page content (a service). Pricing and the new-customer
// free-build offer are the owner-published AI Forge terms and live in the FAQ.
// Screens are EXAMPLE builds rendered as mockups with fictional data
// (scripts/product-mockups) and are labelled as examples on the page.

export const CUSTOM_ECOMMERCE: ProductPageContent = {
  slug: "custom-ecommerce-development",
  theme: {
  "accent": "#fca5a5",
  "accentSoft": "#fed2d2",
  "accentRgb": "252, 165, 165",
  "accentInk": "#450a0a",
  "accent2": "#b91c1c",
  "accent2Deep": "#7f1d1d",
  "accent2Rgb": "185, 28, 28"
},
  hero: {
  "eyebrow": "Custom Ecommerce Development",
  "title": "A store built for how you sell,",
  "titleEm": "run for you.",
  "lede": "Merch stores, memberships, subscriptions, personalised products and complex catalogs that templates can't handle. We build it, host it and keep it running for one monthly fee.",
  "primaryCta": {
    "label": "Book a free 30-minute call",
    "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
  },
  "secondaryCta": {
    "label": "See an example store",
    "href": "#tour"
  },
  "proof": [
    "Live in weeks",
    "Personalisation and team orders",
    "You own the store"
  ],
  "shot": {
    "src": "/images/services/ecommerce-store.webp",
    "alt": "Example custom store for a football club with personalised jerseys and memberships",
    "url": "shop.tidewaterfc.com"
  },
  "float": {
    "label": "Example store · launch month",
    "stats": [
      {
        "value": "1,946",
        "label": "Orders"
      },
      {
        "value": "3,408",
        "label": "Active memberships"
      }
    ]
  },
  "caption": "Example store with a fictional club and figures."
},
  trust: [
  "US-based team",
  "30+ yrs building software",
  "4-hour response SLA",
  "You own the store"
],
  figures: [
  {
    "value": "48h",
    "label": "to a fixed quote"
  },
  {
    "value": "1",
    "label": "store for products, memberships and subscriptions"
  },
  {
    "value": "0",
    "label": "app fees stacked on top"
  },
  {
    "value": "$0",
    "label": "build fee for new customers"
  }
],
  pains: {
  "kicker": "When templates stop fitting",
  "title": "Your products don't fit a template, so the workarounds pile up.",
  "sub": "Personalisation, memberships, team orders and custom pricing turn a simple store into a stack of plugins.",
  "items": [
    {
      "label": "Plugin stacks",
      "text": "Five apps to do what one store should."
    },
    {
      "label": "Manual orders",
      "text": "Team and bulk orders handled in spreadsheets."
    },
    {
      "label": "Two systems",
      "text": "Memberships in one tool, merchandise in another."
    },
    {
      "label": "Fees on fees",
      "text": "Platform, app and transaction fees on every sale."
    }
  ]
},
  promises: {
    kicker: "How it helps",
    title: "One store that does exactly what you sell.",
    sub: "Built around your products and your fulfilment, then run for you.",
    items: [
      { icon: Shirt, title: "Personalised products", body: "Names, numbers, sizes and options, priced correctly." },
      { icon: Repeat, title: "Memberships & subscriptions", body: "Recurring billing and renewals in the same store." },
      { icon: Truck, title: "Your fulfilment", body: "Shipping, pickup, print queues and team orders." },
      { icon: Plug, title: "Connected", body: "Links to your accounting, CRM and email." },
    ],
  },
  tour: {
  "kicker": "Example build",
  "title": "What a custom store can look like.",
  "sub": "An example store for a football club selling personalised kits, team orders and season memberships.",
  "rows": [
    {
      "kicker": "The store",
      "title": "Personalised kits, memberships and pre-orders.",
      "body": "Fans personalise jerseys, join as members for store discounts, pre-order new items and choose shipping or stadium pickup.",
      "points": [
        "Name and number personalisation",
        "Memberships with member pricing",
        "Pre-orders and pickup"
      ],
      "shot": {
        "src": "/images/services/ecommerce-store.webp",
        "alt": "Club store with personalised jerseys, training kits, memberships and scarves",
        "url": "shop.tidewaterfc.com"
      }
    },
    {
      "kicker": "Behind the scenes",
      "title": "Orders, print queue and team orders in one admin.",
      "body": "The club sees revenue, memberships and every order's fulfilment status, with a print queue for personalised items and bulk pricing for youth teams.",
      "points": [
        "Personalisation print queue",
        "Team orders with bulk pricing",
        "Memberships and renewals"
      ],
      "shot": {
        "src": "/images/services/ecommerce-admin.webp",
        "alt": "Store admin with revenue, orders to fulfil and top sellers",
        "url": "Store Admin · Overview"
      }
    }
  ],
  "cta": {
    "text": "Selling something a template can't handle? We'll scope your store and send a fixed quote within 48 hours.",
    "action": {
      "label": "Book a free 30-minute call",
      "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
    }
  }
},
  sampleNote: "Example builds shown with fictional companies, people and figures.",
  modules: {
    kicker: "What we build",
    title: "Stores for the things templates can't do.",
    sub: "From branded merch shops to complex B2B catalogs.",
    items: [
      { icon: ShoppingBag, title: "Merch & brand stores", body: "For teams, schools, clubs and brands." },
      { icon: Repeat, title: "Subscriptions", body: "Recurring orders, memberships and renewals." },
      { icon: Shirt, title: "Personalisation", body: "Options, names, numbers and custom pricing." },
      { icon: Truck, title: "Fulfilment", body: "Shipping, pickup, print queues and team orders." },
      { icon: BarChart3, title: "Reporting", body: "Sales, members and inventory at a glance." },
      { icon: Plug, title: "Integrations", body: "Accounting, CRM, email and payments." },
    ],
  },
  steps: {
  "kicker": "How it works",
  "title": "Live in weeks, then run for you.",
  "sub": "A fixed quote up front and a store you own.",
  "items": [
    {
      "title": "Scope",
      "body": "Your products, pricing and fulfilment, with a fixed quote in 48 hours."
    },
    {
      "title": "Build",
      "body": "Weekly demos of the real store."
    },
    {
      "title": "Launch",
      "body": "Go live with payments, shipping and training."
    },
    {
      "title": "Run & grow",
      "body": "Hosting, updates and new features included."
    }
  ]
},
  faqs: FAQS,
  form: {
  "heading": "Tell us what you sell",
  "sub": "A sentence or two about your products and how you sell them. We'll reply within 4 business hours.",
  "submitLabel": "Start the conversation",
  "messageLabel": "What would your store need to do?"
},
  final: {
  "title": "Sell it the way you want.",
  "titleEm": "We'll run the store.",
  "lede": "Book a free call and get a fixed quote within 48 hours.",
  "cta": {
    "label": "Book a free 30-minute call",
    "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
  },
  "links": [
    {
      "label": "Custom software",
      "href": "/custom-software-development"
    },
    {
      "label": "GLP-1 & telehealth ecommerce",
      "href": "/glp-1-ecommerce"
    },
    {
      "label": "Storefronts for Salesforce",
      "href": "/storefronts"
    }
  ]
},
};
