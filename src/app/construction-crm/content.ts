import { BarChart3, Building2, ClipboardList, Database, FileSignature, Headset, KanbanSquare, MapPinned, ShieldCheck, Truck, Users, Wrench } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";

// Ardn CRM for construction: jobs, work orders, sites, service requests and
// bookings for roofing, windows and home improvement, residential and
// commercial general contractors, and real estate. Built and launched by
// Ardn; the product site is ardnai.com.
// Truth guardrails: no dollar figures (priced by modules and locations, never
// per seat; setup fee; optional managed service), no customer names or
// counts. Screens come from a demo company ("Harborline Services") with
// fictional data.

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";
const PRODUCT_SITE = "https://www.ardnai.com";
const IMG = (f: string) => `/images/crm/${f}.webp`;

export const FAQS = [
  {
    q: "Who is Ardn CRM for construction built for?",
    a: "Contractors whose work is a mix of sales and service: roofing, windows and home improvement, residential and commercial general contractors, and real estate operators who manage properties and trades. If your day is quotes, jobs, service calls and crews, it fits.",
  },
  {
    q: "How is it priced?",
    a: "By the modules you turn on and the locations you run, never per seat. Add your whole office and every crew lead without the bill growing. There is a one-time setup fee, and an optional managed service if you would rather we run it for you.",
  },
  {
    q: "Can you move our data from the CRM we use now?",
    a: "Yes. Ardn migrates your accounts, contacts, open deals, job history and notes from the previous CRM as part of setup, and checks the result with you before go-live.",
  },
  {
    q: "What happens between a quote and a job?",
    a: "A quote is built from your product and service list, so pricing is consistent. When the customer says yes, one click turns the quote into a job with the line items, site and contact already filled in. Nothing is re-typed.",
  },
  {
    q: "How does the service desk keep a request from being forgotten?",
    a: "Every service request gets an SLA clock based on its priority. If it is not picked up or resolved in time it escalates automatically to the next person, and when it closes the customer is asked for a rating, so you see how service actually feels.",
  },
  {
    q: "Is this a managed service or software we run ourselves?",
    a: "Either. Many teams run it themselves after setup. If you prefer, Ardn hosts, supports and keeps improving it under the optional managed service, the same way we run our other products.",
  },
];

export const CONSTRUCTION_CRM: ProductPageContent = {
  slug: "construction-crm",
  theme: {
    accent: "#93c5fd",
    accentSoft: "#bfdbfe",
    accentRgb: "147, 197, 253",
    accentInk: "#0b1f4d",
    accent2: "#2563eb",
    accent2Deep: "#4f46e5",
    accent2Rgb: "37, 99, 235",
  },
  hero: {
    eyebrow: "Ardn CRM · Construction & field service",
    title: "From first call to finished job,",
    titleEm: "on one record.",
    lede: "A CRM built around jobs, work orders, sites, service requests and bookings for roofing, home improvement, residential and commercial general contractors, and real estate. Priced by modules and locations, never per seat.",
    primaryCta: { label: "Book a walkthrough", href: CALL },
    secondaryCta: { label: "See the product", href: "#tour" },
    proof: ["Built and launched by Ardn", "Never priced per seat", "We migrate your data"],
    shot: { src: IMG("dashboard"), alt: "Ardn CRM business-health dashboard for a contractor, with pipeline, jobs, service requests and revenue", url: "Ardn CRM · Dashboard" },
    float: { label: "Demo company · this week", stats: [{ value: "1", label: "record per customer, site and job" }, { value: "0", label: "per-seat licenses" }] },
    caption: "Real product screens from a demo company with fictional people and figures.",
  },
  trust: ["US-based team", "30+ yrs building software", "4-hour response SLA", "Optional managed service"],
  figures: [
    { value: "1", label: "click from accepted quote to open job" },
    { value: "0", label: "per-seat fees, for the office or the field" },
    { value: "SLA", label: "clocks on every service request" },
    { value: "All", label: "of your data moved from the old CRM" },
  ],
  pains: {
    kicker: "The problem",
    title: "Generic CRMs were built for software sales, not for crews.",
    sub: "So contractors end up with a sales tool in the office, a scheduling app in the truck and a spreadsheet in between.",
    items: [
      { label: "Per-seat pricing", text: "Every crew lead who needs to see a job is another license, so most of the team is kept out." },
      { label: "No idea of a job", text: "Deals close and then disappear. The work that follows lives somewhere else." },
      { label: "Service falls through", text: "A callback sits in someone's inbox until the customer calls again, angrier." },
      { label: "Dispatch by text", text: "Who is where today is answered by phone, not by a board everyone can see." },
    ],
  },
  promises: {
    kicker: "The difference",
    title: "The customer, the site, the quote, the job and the service call are one story.",
    sub: "Ardn CRM keeps them together, so the office and the field work from the same facts.",
    items: [
      { icon: KanbanSquare, title: "Sales that becomes work", body: "A quote converts to a job in one click, with everything already filled in." },
      { icon: Headset, title: "Service with a clock", body: "Requests get SLA timers, automatic escalation and a customer rating when they close." },
      { icon: Truck, title: "Dispatch everyone can see", body: "A board of crews, work orders and bookings by day and location." },
      { icon: Users, title: "Room for the whole team", body: "Priced by modules and locations, so adding people costs nothing." },
    ],
  },
  tour: {
    kicker: "See the product",
    title: "The real product, running a real contractor's week.",
    sub: "Every screen below is the actual platform on a demo company with fictional people. No mockups.",
    rows: [
      {
        kicker: "Pipeline",
        title: "Every open deal, by stage, on one board.",
        body: "Leads from your website, referrals and calls land in one pipeline. Drag a card to move it, open it to see every call, email and site visit on a timeline.",
        points: ["Stages you define", "Deal pages with a full timeline", "Source tracked from the first touch"],
        shot: { src: IMG("pipeline"), alt: "Ardn CRM pipeline board with deals grouped by stage", url: "Ardn CRM · Pipeline" },
      },
      {
        kicker: "Quotes to jobs",
        title: "Quote from the product list. Convert in one click.",
        body: "Quotes are built from your products and services, so pricing is consistent across estimators. When the customer accepts, one click creates the job with line items, site and contact already in place.",
        points: ["Line items from your catalog", "Versions and approvals", "Accepted quote becomes a job instantly"],
        shot: { src: IMG("quote"), alt: "Ardn CRM quote built from the product list with a convert-to-job action", url: "Ardn CRM · Quote" },
      },
      {
        kicker: "Service desk",
        title: "No request waits in an inbox.",
        body: "Service requests carry an SLA clock set by priority. Miss it and the request escalates on its own. When it closes, the customer rates the visit.",
        points: ["SLA clocks by priority", "Automatic escalation", "Customer ratings on close"],
        shot: { src: IMG("service-desk"), alt: "Ardn CRM service desk with open requests, SLA timers and priorities", url: "Ardn CRM · Service desk" },
      },
      {
        kicker: "Dispatch",
        title: "Who is where, today, without a phone call.",
        body: "A dispatch board shows crews, work orders and bookings by day and location. Assign from the board and the work order updates for the crew.",
        points: ["Crews and work orders by day", "Bookings and site visits", "Reassign by drag and drop"],
        shot: { src: IMG("dispatch"), alt: "Ardn CRM dispatch board with crews and work orders scheduled by day", url: "Ardn CRM · Dispatch" },
      },
    ],
    cta: { text: "Want to see it on your own jobs? We'll walk through the product with your pipeline and service flow in mind.", action: { label: "Book a walkthrough", href: CALL } },
  },
  sampleNote: "Screens show a demo company with fictional people and figures.",
  feature: {
    kicker: "Accounts",
    title: "Every customer, with what they are worth to you.",
    sub: "An account holds the sites, contacts, quotes, jobs and service requests for one customer, with lifetime value on the page, so repeat work and referrals are obvious.",
    points: ["Sites and contacts per account", "Lifetime value calculated for you", "Every quote, job and service call in one place", "Notes and files where the team looks for them"],
    shot: { src: IMG("account"), alt: "Ardn CRM account page with sites, contacts, jobs and lifetime value", url: "Ardn CRM · Account" },
  },
  modules: {
    kicker: "One platform",
    title: "Modules for how contractors work.",
    sub: "Turn on what you need. Pricing follows modules and locations, not head count.",
    items: [
      { icon: KanbanSquare, title: "Pipeline & deals", body: "Stages, a shared board and deal pages with a timeline of every touch." },
      { icon: FileSignature, title: "Quotes", body: "Built from your product list, versioned, and converted to jobs in one click." },
      { icon: ClipboardList, title: "Jobs & work orders", body: "Scope, sites, crews and status from kickoff to close." },
      { icon: Headset, title: "Service desk", body: "Requests with SLA clocks, automatic escalation and customer ratings." },
      { icon: Truck, title: "Dispatch & bookings", body: "A board of crews and work orders by day and location." },
      { icon: Building2, title: "Accounts & sites", body: "Customers, properties and contacts, with lifetime value on every account." },
      { icon: BarChart3, title: "Reports", body: "Conversion funnel, revenue by source, service performance and more." },
      { icon: MapPinned, title: "Locations", body: "Run several branches or markets with reporting rolled up or by location." },
    ],
  },
  gallery: {
    kicker: "More of the platform",
    title: "More screens your team will live in.",
    items: [
      { img: IMG("deal"), title: "Deal page", body: "Every call, email, visit and quote on one timeline.", alt: "Ardn CRM deal page with activity timeline" },
      { img: IMG("work-orders"), title: "Work orders", body: "What is scheduled, in progress and done, by crew.", alt: "Ardn CRM work orders list" },
      { img: IMG("service-request"), title: "Service request", body: "Priority, SLA clock, assignment and the customer's rating.", alt: "Ardn CRM service request detail with SLA timer" },
      { img: IMG("reports"), title: "Reports", body: "Conversion funnel and revenue by source.", alt: "Ardn CRM reports showing conversion funnel and revenue by source" },
    ],
  },
  security: {
    kicker: "Setup and migration",
    title: "You bring the history. We bring it over.",
    sub: "Switching CRMs fails on data, not features. Migration is part of setup, not a project you run alone.",
    items: [
      { icon: Database, title: "Data migrated by Ardn", body: "Accounts, contacts, deals, job history and notes moved from your previous CRM and checked with you." },
      { icon: Wrench, title: "Configured to your trade", body: "Stages, products, service priorities and locations set up before your first login." },
      { icon: ShieldCheck, title: "Roles by job", body: "Office, estimators, crew leads and owners each see what their work needs." },
      { icon: Users, title: "Optional managed service", body: "Hosting, support and ongoing improvements, if you would rather we run it." },
    ],
  },
  steps: {
    kicker: "How it works",
    title: "Three steps to a CRM that matches your work.",
    sub: "A short walkthrough, a setup that includes your data, and a go-live your team is ready for.",
    items: [
      { title: "A 30-minute walkthrough", body: "We show the product on a demo company and map it to how you sell and serve today." },
      { title: "Setup with your data", body: "Modules, locations, products and stages configured, and your previous CRM migrated." },
      { title: "Go live, run it your way", body: "Your team takes over, or Ardn runs it for you under the managed service." },
    ],
  },
  faqs: FAQS,
  form: {
    heading: "Talk to us about your CRM",
    sub: "Tell us your trade, how many locations you run and what you use today. We'll reply within 4 business hours.",
    submitLabel: "Request a walkthrough",
    messageLabel: "What would you most like to fix first?",
  },
  final: {
    title: "Sales, jobs and service.",
    titleEm: "One system, no per-seat bill.",
    lede: "Book a 30-minute walkthrough and see Ardn CRM on a contractor's real week.",
    cta: { label: "Book a walkthrough", href: CALL },
    links: [
      { label: "Case study: Ardn CRM for construction", href: "/case-studies/construction-crm-jobs-service-dispatch" },
      { label: "Product site: ardnai.com", href: PRODUCT_SITE },
      { label: "Everything we've launched", href: "/work" },
      { label: "Custom software development", href: "/custom-software-development" },
    ],
  },
};
