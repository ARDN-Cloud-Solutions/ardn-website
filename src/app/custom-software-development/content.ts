import { Hammer, LineChart, Lock, Plug, RefreshCw, Server, ShieldCheck, Smartphone, Workflow } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";
import { FAQS } from "./faqs";

// Custom Software Development page content (a service). Pricing and the new-customer
// free-build offer are the owner-published AI Forge terms and live in the FAQ.
// Screens are EXAMPLE builds rendered as mockups with fictional data
// (scripts/product-mockups) and are labelled as examples on the page.

export const CUSTOM_SOFTWARE: ProductPageContent = {
  slug: "custom-software-development",
  theme: {
  "accent": "#f6c177",
  "accentSoft": "#fbdcaa",
  "accentRgb": "246, 193, 119",
  "accentInk": "#3a2204",
  "accent2": "#c2410c",
  "accent2Deep": "#7c2d12",
  "accent2Rgb": "194, 65, 12"
},
  hero: {
  "eyebrow": "Custom Software Development",
  "title": "Software shaped around",
  "titleEm": "how you actually work.",
  "lede": "Replace the spreadsheets, workarounds and stack of subscriptions with one system built for your process. We design it, build it in weeks, then host it and keep improving it for one monthly fee.",
  "primaryCta": {
    "label": "Book a free 30-minute call",
    "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
  },
  "secondaryCta": {
    "label": "See example builds",
    "href": "#tour"
  },
  "proof": [
    "First version in 2–6 weeks",
    "Fixed quote within 48 hours",
    "You own the software"
  ],
  "shot": {
    "src": "/images/services/custom-software-dispatch.webp",
    "alt": "Example custom build: a field-service dispatch board with jobs, technicians and invoices",
    "url": "FieldOps · Dispatch board"
  },
  "float": {
    "label": "Example build · today",
    "stats": [
      {
        "value": "62",
        "label": "Jobs dispatched"
      },
      {
        "value": "94%",
        "label": "On-time arrivals"
      }
    ]
  },
  "caption": "Example builds with fictional companies and figures."
},
  trust: [
  "US-based team",
  "30+ yrs building software",
  "4-hour response SLA",
  "You own the IP"
],
  figures: [
  {
    "value": "2–6",
    "label": "weeks to a production-ready first version"
  },
  {
    "value": "48h",
    "label": "to a fixed quote and delivery date"
  },
  {
    "value": "1",
    "label": "system instead of a stack of tools"
  },
  {
    "value": "$0",
    "label": "build fee for new customers"
  }
],
  pains: {
  "kicker": "The workaround tax",
  "title": "Off-the-shelf tools make you bend your process to fit them.",
  "sub": "Then they charge per user as you grow, and leave gaps you patch with more tools and more spreadsheets.",
  "items": [
    {
      "label": "Spreadsheets",
      "text": "Critical work lives in files only one person understands."
    },
    {
      "label": "Tool sprawl",
      "text": "Five subscriptions that each do a fifth of the job."
    },
    {
      "label": "Re-keying",
      "text": "The same data typed into three systems, with errors."
    },
    {
      "label": "Per-user bills",
      "text": "Every new hire makes the software bill bigger."
    }
  ]
},
  promises: {
    kicker: "How we work",
    title: "We build it. We run it. We keep improving it.",
    sub: "One accountable team from the first call to the hundredth improvement.",
    items: [
      { icon: Hammer, title: "Built for your workflow", body: "Designed around how your team actually works, not a vendor's template." },
      { icon: Server, title: "Hosted and run for you", body: "Hosting, monitoring, security and updates included." },
      { icon: RefreshCw, title: "Improved every month", body: "New features and changes as your business evolves." },
      { icon: Lock, title: "Yours to keep", body: "You own the IP and the data, with a full export any time." },
    ],
  },
  tour: {
  "kicker": "Example builds",
  "title": "What custom software can look like.",
  "sub": "Every build is different. These examples show the kind of work that moves off spreadsheets and into one system.",
  "rows": [
    {
      "kicker": "Operations · field service",
      "title": "One board for every job, technician and invoice.",
      "body": "Dispatchers assign jobs, technicians update status from the road, customers get arrival texts, and invoices go out the moment work is done.",
      "points": [
        "Replaces spreadsheets and group chats",
        "Customers get automatic ETAs",
        "Invoices sent from the job"
      ],
      "shot": {
        "src": "/images/services/custom-software-dispatch.webp",
        "alt": "Dispatch board with unassigned, en route and completed jobs",
        "url": "FieldOps · Dispatch board"
      }
    },
    {
      "kicker": "Finance · approvals",
      "title": "Purchase requests that route themselves.",
      "body": "Requests go to the right approver by amount and department, with the budget impact shown before anyone clicks approve. Small requests approve automatically.",
      "points": [
        "Routing by amount and department",
        "Budget impact before approval",
        "Full history for audits"
      ],
      "shot": {
        "src": "/images/services/custom-software-approvals.webp",
        "alt": "Purchase request approvals queue with budget details",
        "url": "Requests · My approvals"
      }
    }
  ],
  "cta": {
    "text": "Tell us which process eats your team's week. We'll scope it and send a fixed quote within 48 hours.",
    "action": {
      "label": "Book a free 30-minute call",
      "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
    }
  }
},
  sampleNote: "Example builds shown with fictional companies, people and figures.",
  modules: {
    kicker: "What we build",
    title: "If you can describe the process, we can build it.",
    sub: "Internal tools, operations platforms and customer-facing apps, connected to what you already run.",
    items: [
      { icon: Workflow, title: "Operations platforms", body: "Scheduling, dispatch, job tracking and field work." },
      { icon: LineChart, title: "Internal tools", body: "Approvals, reporting and dashboards your team will use." },
      { icon: Smartphone, title: "Customer-facing apps", body: "Portals, booking and self-service on any device." },
      { icon: Plug, title: "Integrations", body: "Connects to your CRM, accounting, ERP and email." },
      { icon: ShieldCheck, title: "Security built in", body: "Roles, audit trails and single sign-on." },
      { icon: RefreshCw, title: "Replatforming", body: "Move off legacy systems without losing history." },
    ],
  },
  steps: {
  "kicker": "How it works",
  "title": "From first call to live software in weeks.",
  "sub": "You see working software every week, not a spec document.",
  "items": [
    {
      "title": "Discovery",
      "body": "We map the process and agree the first version. Fixed quote within 48 hours."
    },
    {
      "title": "Build",
      "body": "Weekly demos on real infrastructure."
    },
    {
      "title": "Launch",
      "body": "Go live with training and monitoring."
    },
    {
      "title": "Run & improve",
      "body": "We host it and keep adding what you ask for."
    }
  ]
},
  faqs: FAQS,
  form: {
  "heading": "Tell us what you want to build",
  "sub": "A sentence or two about the process is plenty. We'll reply within 4 business hours.",
  "submitLabel": "Start the conversation",
  "messageLabel": "Which process should we fix first?"
},
  final: {
  "title": "Stop working around your software.",
  "titleEm": "Make it work for you.",
  "lede": "Book a free call and get a fixed quote within 48 hours.",
  "cta": {
    "label": "Book a free 30-minute call",
    "href": "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
  },
  "links": [
    {
      "label": "AI Forge",
      "href": "/ai-forge"
    },
    {
      "label": "Custom portals",
      "href": "/custom-portal-development"
    },
    {
      "label": "Custom ecommerce",
      "href": "/custom-ecommerce-development"
    }
  ]
},
};
