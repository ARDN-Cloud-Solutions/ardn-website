import { BadgeDollarSign, BookOpen, Handshake, Plug, Server, ShieldCheck } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";
import { FAQS } from "./faqs";

// Custom Partner Portal Development page content (a service). Pricing and the new-customer
// free-build offer are the owner-published AI Forge terms and live in the FAQ.
// Screens are EXAMPLE builds rendered as mockups with fictional data
// (scripts/product-mockups) and are labelled as examples on the page.

export const PARTNER_PORTAL: ProductPageContent = {
  slug: "custom-partner-portal-development",
  theme: {
  "accent": "#d8b4fe",
  "accentSoft": "#ead5ff",
  "accentRgb": "216, 180, 254",
  "accentInk": "#2e1065",
  "accent2": "#7c3aed",
  "accent2Deep": "#4c1d95",
  "accent2Rgb": "124, 58, 237"
},
  hero: {
  "eyebrow": "Custom Partner Portal Development",
  "title": "A partner portal that grows",
  "titleEm": "without the per-login bill.",
  "lede": "Deal registration, commissions, training and marketing assets for partners, dealers and distributors, connected live to your CRM. One flat fee, however big your partner network gets.",
  "primaryCta": {
    "label": "Book a free 30-minute call",
    "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
  },
  "secondaryCta": {
    "label": "See an example",
    "href": "#tour"
  },
  "proof": [
    "Deal registration with conflict checks",
    "Commissions partners can see",
    "One flat fee, unlimited partners"
  ],
  "shot": {
    "src": "/images/services/partner-portal-deals.webp",
    "alt": "Example partner portal with registered deals, commissions and tier progress",
    "url": "partners.yourcompany.com"
  },
  "float": {
    "label": "Example partner · this quarter",
    "stats": [
      {
        "value": "$486k",
        "label": "Partner pipeline"
      },
      {
        "value": "1 day",
        "label": "Average deal approval"
      }
    ]
  },
  "caption": "Example portal with fictional partners and figures."
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
    "label": "flat fee for your whole partner network"
  },
  {
    "value": "90",
    "label": "days of deal protection, or your own policy"
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
  "kicker": "The per-login problem",
  "title": "Partner licenses bill for every login, not for the value each partner brings.",
  "sub": "The bigger and more seasonal your partner network, the more a per-login model overcharges you.",
  "items": [
    {
      "label": "Per-login fees",
      "text": "Every reseller, dealer and broker costs a license."
    },
    {
      "label": "Channel conflict",
      "text": "Two partners chase the same deal and nobody knows who registered first."
    },
    {
      "label": "Commission questions",
      "text": "Partners email to ask what they've earned."
    },
    {
      "label": "Scattered assets",
      "text": "Price lists and slides live in email threads."
    }
  ]
},
  promises: {
    kicker: "How it helps",
    title: "Everything partners need, in one place.",
    sub: "Your channel team spends less time answering questions, and partners sell more.",
    items: [
      { icon: Handshake, title: "Deal registration", body: "Partners register deals, with conflict checks and protection periods." },
      { icon: BadgeDollarSign, title: "Visible commissions", body: "Earnings and statements partners can check any time." },
      { icon: BookOpen, title: "Assets and training", body: "Price lists, slides and courses, always current." },
      { icon: Plug, title: "Live CRM sync", body: "Deals and partners stay in step with your CRM." },
    ],
  },
  tour: {
  "kicker": "Example portal",
  "title": "What partners see when they log in.",
  "sub": "An example partner portal for a software company's reseller channel.",
  "rows": [
    {
      "kicker": "Partner dashboard",
      "title": "Deals, protection and commissions at a glance.",
      "body": "Partners see every deal they've registered, its stage and protection date, what they've earned, and how close they are to the next tier.",
      "points": [
        "Registered deals with stages",
        "Commission statements",
        "Tier progress and incentives"
      ],
      "shot": {
        "src": "/images/services/partner-portal-deals.webp",
        "alt": "Partner dashboard with registered deals and commissions",
        "url": "Partner Portal · My deals"
      }
    },
    {
      "kicker": "Deal registration",
      "title": "Register a deal in two minutes.",
      "body": "Partners enter the customer and deal details, the portal checks for conflicts instantly, and your channel manager approves it, usually within a day.",
      "points": [
        "Instant conflict check",
        "Approval workflow for your channel team",
        "Protection period applied automatically"
      ],
      "shot": {
        "src": "/images/services/partner-portal-register.webp",
        "alt": "Deal registration form with a conflict check",
        "url": "Partner Portal · Register a deal"
      }
    }
  ],
  "cta": {
    "text": "Paying per-login fees for your partner network? We'll show you what a flat-fee portal would change.",
    "action": {
      "label": "Book a free 30-minute call",
      "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
    }
  }
},
  sampleNote: "Example builds shown with fictional companies, people and figures.",
  modules: {
    kicker: "Built for your channel",
    title: "For any partner you pay a login for.",
    sub: "Resellers, dealers, distributors, brokers, franchisees and suppliers.",
    items: [
      { icon: Handshake, title: "Deal registration", body: "Conflict checks, approvals and protection periods." },
      { icon: BadgeDollarSign, title: "Commissions", body: "Statements, payouts and incentive tracking." },
      { icon: BookOpen, title: "Enablement", body: "Training, price lists and marketing assets." },
      { icon: Plug, title: "CRM integration", body: "Two-way sync with Salesforce, HubSpot and more." },
      { icon: ShieldCheck, title: "Access control", body: "Per-partner data, roles and audit trails." },
      { icon: Server, title: "Run for you", body: "Hosting, monitoring and changes included." },
    ],
  },
  steps: {
  "kicker": "How it works",
  "title": "Live in weeks, alongside your CRM.",
  "sub": "Your channel team keeps working in the CRM; partners get a portal built for them.",
  "items": [
    {
      "title": "Map your channel",
      "body": "Who your partners are, and what they need most."
    },
    {
      "title": "Build",
      "body": "Deal registration and the dashboard first, with weekly demos."
    },
    {
      "title": "Connect",
      "body": "Two-way sync with your CRM, tested on real data."
    },
    {
      "title": "Launch & grow",
      "body": "Onboard partners in waves, and add features as you go."
    }
  ]
},
  faqs: FAQS,
  form: {
  "heading": "See what a partner portal could save",
  "sub": "Tell us how many partners you have and what you use today. We'll reply within 4 business hours.",
  "submitLabel": "Get my estimate",
  "messageLabel": "How many partners, and what do they need?"
},
  final: {
  "title": "Grow your partner network.",
  "titleEm": "Not your license bill.",
  "lede": "Book a free call and get a fixed quote within 48 hours.",
  "cta": {
    "label": "Book a free 30-minute call",
    "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
  },
  "links": [
    {
      "label": "Custom portals",
      "href": "/custom-portal-development"
    },
    {
      "label": "Cut CRM licensing costs",
      "href": "/reduce-crm-licensing-costs"
    },
    {
      "label": "Custom software",
      "href": "/custom-software-development"
    }
  ]
},
};
