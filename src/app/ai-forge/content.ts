import { Gauge, Hammer, LineChart, Lock, Plug, RefreshCw, Server, Sparkles, Wrench } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";

// AI Forge page content (managed custom AI development). Pricing tiers and the
// new-customer free-build offer are owner-published; keep them in sync with
// /our-products and the AI Forge FAQ. Screens are EXAMPLE builds rendered as
// mockups with sample data (scripts/product-mockups) and are labelled so.

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

export const AI_FORGE: ProductPageContent = {
  slug: "ai-forge",
  theme: {
    accent: "#a59cff",
    accentSoft: "#cdc8ff",
    accentRgb: "165, 156, 255",
    accentInk: "#15104a",
    accent2: "#5b4be8",
    accent2Deep: "#2d24b0",
    accent2Rgb: "91, 75, 232",
  },
  hero: {
    eyebrow: "AI Forge · Custom AI apps",
    title: "Your custom AI app,",
    titleEm: "built and run for you.",
    lede: "Our team designs a custom AI app around your exact workflow, has it live in weeks, then hosts it, watches it and keeps improving it, all for one predictable monthly fee.",
    primaryCta: { label: "Book a free discovery call", href: CALL },
    secondaryCta: { label: "See pricing", href: "#pricing" },
    proof: ["Live in 2–6 weeks", "New customers: $0 build fee", "You own your app and data"],
    shot: { src: "/images/ai-forge/claims-intake-assistant.webp", alt: "Example AI Forge build: a claims intake assistant with a review queue, claimant chat and auto-filled fields", url: "Intake Assistant · Claims queue" },
    float: { label: "Example build · today", stats: [{ value: "47", label: "Claims taken, 31 after hours" }, { value: "6 min", label: "To a ready file" }] },
    caption: "Example build with sample data. Yours is designed around your workflow.",
  },
  trust: ["US-based team", "30+ yrs building software", "4-hour response SLA", "You own the IP"],
  figures: [
    { value: "2–6", label: "weeks from discovery to a live app" },
    { value: "$0", label: "build fee for new customers" },
    { value: "48h", label: "to a fixed quote and delivery date" },
    { value: "1", label: "monthly fee for hosting, support and improvements" },
  ],
  pains: {
    kicker: "Why most AI stalls",
    title: "The technology isn't the problem. The way it gets built is.",
    sub: "Most businesses are stuck between DIY tools that don't fit, agencies that disappear after delivery, and in-house hires that take a year to find.",
    items: [
      { label: "80% fail", text: "Of AI projects fail, twice the rate of traditional IT projects (RAND Corporation)." },
      { label: "88% stall", text: "Of pilots never leave proof-of-concept: built in a sandbox, never deployed (CIO)." },
      { label: "42% scrapped", text: "Of companies abandoned most AI initiatives, up from 17% a year earlier (S&P Global)." },
      { label: "No owner", text: "When the build is done, nobody is accountable for keeping it working." },
    ],
  },
  promises: {
    kicker: "How AI Forge works",
    title: "We build it. We run it. We keep improving it.",
    sub: "An operating partnership, not a one-off project, so your app keeps working as your business and the models change.",
    items: [
      { icon: Hammer, title: "We build it", body: "A custom AI app to your specs, integrated with your tools, on a fixed quote and fixed timeline." },
      { icon: Server, title: "We run it", body: "Hosting, monitoring, security patches and model upgrades. You never touch the infrastructure." },
      { icon: RefreshCw, title: "We improve it", body: "New features and tuning every month, from a service-credit pool included in your plan." },
      { icon: Lock, title: "You own it", body: "Your IP and your data. Leave any time with a full export and documentation." },
    ],
  },
  tour: {
    kicker: "Example builds",
    title: "What an AI Forge app can look like.",
    sub: "Every build is custom. These examples show the kind of work AI Forge apps take off a team's plate, and how we report back each month.",
    rows: [
      {
        kicker: "Insurance · claims intake",
        title: "First notice of loss, handled around the clock.",
        body: "The assistant takes the first report by text, chat, email or phone, pulls the policy, reads photos and documents, and hands adjusters a ready file. Anything unusual goes straight to a person.",
        points: ["Works after hours and on weekends", "Fills the claim file from the conversation", "Routes injuries and coverage questions to people"],
        shot: { src: "/images/ai-forge/claims-intake-assistant.webp", alt: "Claims intake assistant with review queue and claimant conversation", url: "Intake Assistant · Claims queue" },
      },
      {
        kicker: "Finance · invoice processing",
        title: "Invoices read, matched and ready to approve.",
        body: "The app reads each invoice, matches it to the purchase order and goods receipt, codes it, and applies your approval rules. Your team only looks at the exceptions.",
        points: ["Three-way match before approval", "Duplicate and missing-PO checks", "Posts approved invoices to accounting"],
        shot: { src: "/images/ai-forge/invoice-extraction.webp", alt: "Invoice processing app showing an invoice, extracted fields and approval status", url: "Invoice Desk · Needs review" },
      },
      {
        kicker: "Every month",
        title: "A report on what your app did, and what we improved.",
        body: "Usage, uptime and the changes we shipped from your requests, plus what's next on the roadmap and how many service credits are left.",
        points: ["Improvements shipped every month", "Uptime and response time tracked", "Unused credits roll over"],
        shot: { src: "/images/ai-forge/monthly-report.webp", alt: "AI Forge monthly report with usage, uptime, shipped improvements and roadmap", url: "AI Forge · Monthly report" },
      },
    ],
    cta: { text: "Have a workflow that eats your team's week? We'll scope it and send a fixed quote within 48 hours.", action: { label: "Book a free discovery call", href: CALL } },
  },
  sampleNote: "Example builds shown with fictional companies, people and figures.",
  modules: {
    kicker: "What we build",
    title: "If you can describe the problem, we can scope the build.",
    sub: "Customer-facing assistants, internal automations and industry-specific apps, built to your exact specifications rather than from a template.",
    items: [
      { icon: Sparkles, title: "Customer assistants", body: "Chat, text and email assistants that answer, book and escalate like your best staff." },
      { icon: Wrench, title: "Workflow automation", body: "Take the repetitive steps out of intake, approvals, scheduling and follow-up." },
      { icon: LineChart, title: "Document processing", body: "Read invoices, forms, contracts and claims, and put the data where it belongs." },
      { icon: Gauge, title: "Analytics & forecasting", body: "Dashboards and forecasts that explain themselves in plain English." },
      { icon: Plug, title: "Integrated with your stack", body: "Connects to your CRM, accounting, data warehouse and internal systems." },
      { icon: Lock, title: "Built for compliance", body: "People-in-the-loop review, audit trails and SOC 2 or HIPAA support on Enterprise." },
    ],
  },
  compare: {
    kicker: "Why AI Forge",
    title: "The options most businesses are choosing between.",
    sub: "DIY tools, agencies and in-house teams each leave a gap. AI Forge is built to close it.",
    cols: ["DIY tools", "AI agency", "In-house hire"],
    ours: "AI Forge",
    rows: [
      { feature: "Time to launch", cells: ["Days, but limited", "3–6 months", "6–12 months"], ours: "2–6 weeks" },
      { feature: "Built for your workflow", cells: ["Off-the-shelf only", "Custom", "Custom"], ours: "Fully custom" },
      { feature: "Who runs it after launch", cells: ["You're on your own", "Gone after delivery", "You hire and train"], ours: "We run it" },
      { feature: "What it costs", cells: ["Per-seat plus compute", "Big upfront, surprise bills", "$250K+ per engineer"], ours: "One monthly subscription" },
      { feature: "Keeps improving", cells: ["You do it", "New contract each time", "If they keep up"], ours: "Included every month" },
    ],
  },
  plans: {
    kicker: "Pricing",
    title: "One monthly fee. Build included for new customers.",
    sub: "Your subscription starts the day your app goes live, not before. New customers on Launch and Scale pay no build fee.",
    items: [
      {
        name: "Launch",
        for: "For small businesses validating their first AI workflow. 1–25 employees.",
        price: "$3,000",
        priceNote: "per month",
        extra: "Build fee $7,500, waived for new customers",
        features: ["1 production AI app", "Up to 3 user accounts", "500K AI tokens and 10 service credits a month", "Email support, 48-hour response", "Monthly performance report"],
        cta: { label: "Start with Launch", href: CALL },
      },
      {
        name: "Scale",
        for: "For growing businesses running AI across several workflows. 25–250 employees.",
        price: "$4,500",
        priceNote: "per month",
        extra: "Build fee $25,000, waived for new customers",
        features: ["Up to 3 production AI apps", "Up to 25 user accounts", "2.5M AI tokens and 40 service credits a month", "Priority support, 24-hour response", "Integration with your existing stack", "Custom domains and branding"],
        cta: { label: "Start with Scale", href: CALL },
        featured: true,
      },
      {
        name: "Enterprise",
        for: "For organizations with mission-critical AI. 250+ employees.",
        price: "From $12K",
        priceNote: "per month · build from $75K",
        features: ["Unlimited apps and users, SSO included", "10M+ AI tokens and 120+ service credits", "Dedicated team, 4-hour SLA, phone support", "Dedicated infrastructure or private cloud", "SOC 2 / HIPAA support and custom terms"],
        cta: { label: "Talk to us", href: CALL },
      },
    ],
    note: "One service credit is one hour of senior engineering or design. Unused credits roll over up to 30% of your monthly allocation.",
  },
  steps: {
    kicker: "From discovery to deployment",
    title: "Live in weeks, not months.",
    sub: "Most clients are in production inside 30 days, with a clear roadmap for what comes next.",
    items: [
      { title: "Discovery · week 1", body: "We map your workflow, find the highest-value opportunity and scope it. Fixed quote and delivery date within 48 hours." },
      { title: "Build · weeks 1–4", body: "We build and test on production-grade infrastructure, with a demo every week." },
      { title: "Deploy · weeks 4–6", body: "Go live with monitoring, a security review and team training. Your subscription starts here." },
      { title: "Operate · ongoing", body: "We run it: hosting, model updates, security, new features and support, all in your plan." },
    ],
  },
  faqs: [
    { q: "What kinds of AI apps do you build?", a: "Customer-facing assistants and support agents, internal workflow automations, document processing and data extraction, sales tools, analytics and forecasting, and industry-specific apps. We don't sell templates; we build to your specifications." },
    { q: "What's a service credit?", a: "One service credit is one hour of senior engineering or design work, used for new features, changes, integrations or reporting. Unused credits roll over up to 30% of your monthly allocation." },
    { q: "What if we use more AI than our plan includes?", a: "You get usage dashboards and alerts at 50%, 75% and 90% of your allocation. Overages are passed through at cost, or you can move up a tier mid-cycle. We also tune prompts continuously to keep usage down." },
    { q: "Do we own the app you build?", a: "You own the IP and the data. We keep the rights to the frameworks and tooling we use across clients. If you ever leave, you get a full export of your data and complete documentation." },
    { q: "Is there a minimum contract?", a: "Launch and Scale are month-to-month once your app is delivered. Enterprise usually includes a 12-month commitment in exchange for negotiated rates and dedicated capacity. Any tier can change or cancel with 30 days' notice." },
    { q: "Can you integrate with our systems?", a: "Yes. AI Forge apps routinely read from and write to CRMs such as Salesforce, HubSpot and Microsoft Dynamics, plus data warehouses, internal APIs, billing systems and thousands of other tools." },
    { q: "What if our needs change?", a: "That's expected. Models and businesses both change, so your subscription includes ongoing iteration: new features, model upgrades, prompt tuning and integration changes, drawn from your service credits." },
  ],
  form: {
    heading: "Tell us about the workflow",
    sub: "A sentence or two about what takes your team the most time is plenty. We'll reply within 4 business hours to set up discovery.",
    submitLabel: "Start my discovery",
    messageLabel: "What would you like an AI app to handle?",
  },
  final: {
    title: "Stop piloting AI.",
    titleEm: "Put it to work.",
    lede: "Book a free discovery call. You'll have a fixed quote and a delivery date within 48 hours.",
    cta: { label: "Book a free discovery call", href: CALL },
    links: [
      { label: "Custom AI app development", href: "/ai-app-development" },
      { label: "AI for insurance", href: "/ai-for-insurance" },
      { label: "Case studies", href: "/case-studies" },
    ],
  },
};
