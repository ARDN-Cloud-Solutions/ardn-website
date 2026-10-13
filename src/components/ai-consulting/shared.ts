import { Bot, ClipboardCheck, Compass, FileText, Hammer, Map, Plug, Server, Sparkles, Workflow } from "lucide-react";
import type { Theme } from "@/components/product-page/types";
import { LAUNCHES } from "@/app/work/launches";
import type { AiConsultingContent } from "./types";

// Shared content for the AI consulting hub (/ai-consulting), the Florida city
// pages and the cost guide. Truth guardrails: only owner-confirmed facts
// (Orlando HQ, US team, 30+ years, builds and runs what it ships, launched
// products, 4-business-hour replies, free 30-minute call). No Ardn prices,
// no client names, no invented stats, reviews or certifications.

export const SITE = "https://ardncloudsolutions.com";
export const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

export const THEME: Theme = {
  accent: "#74d6c4",
  accentSoft: "#b9ede3",
  accentRgb: "116, 214, 196",
  accentInk: "#062f29",
  accent2: "#0f8f7c",
  accent2Deep: "#075347",
  accent2Rgb: "15, 143, 124",
};

export const TRUST = ["Orlando, FL-based US team", "30+ yrs technology & consulting", "Replies within 4 business hours", "We build and run what we ship"];

export const OFFER: AiConsultingContent["offer"] = {
  kicker: "What you get",
  title: "AI strategy, AI implementation and support, from one team.",
  sub: "An assessment and roadmap you can act on, then the build, then a team that keeps it running. Our AI consulting services include:",
  items: [
    { icon: Compass, title: "AI strategy consulting", body: "An AI opportunity assessment and a phased roadmap: which uses pay off first, what they need, and which to skip." },
    { icon: Workflow, title: "AI implementation and automation", body: "Take the copy-paste, re-keying and chasing out of intake, approvals, scheduling and follow-up." },
    { icon: Bot, title: "Generative AI consulting: assistants and agents", body: "Assistants that answer from your own documents and records, with review steps and clear rules for when to hand off to a person." },
    { icon: FileText, title: "Document processing", body: "Read invoices, forms, contracts and applications, check them, and put the data where it belongs." },
    { icon: Plug, title: "AI inside your CRM or ERP", body: "Summaries, next steps and data entry inside the systems your team already lives in, including Salesforce." },
    { icon: Sparkles, title: "Custom AI apps", body: "When no tool fits, a purpose-built app shaped around your workflow, hosted and supported by us." },
  ],
};

export const STEPS: AiConsultingContent["steps"] = {
  kicker: "How engagements work",
  title: "AI implementation in phases: fixed scope, then run for you.",
  sub: "No open-ended hourly billing. Each phase has an agreed scope and a fixed quote before work starts, and after launch the service continues on a flat monthly fee.",
  items: [
    { icon: ClipboardCheck, title: "AI opportunity assessment", body: "We map how the work actually gets done, where time goes, and which AI uses would pay off first, and which would not." },
    { icon: Map, title: "Roadmap", body: "A phased plan ranked by impact, with the scope, the systems involved and what each phase changes for your team." },
    { icon: Hammer, title: "Build", body: "We build the first phase against your real data and systems, test it with your people, and launch it." },
    { icon: Server, title: "Run", body: "A flat monthly managed service: hosting, monitoring, model updates, support and ongoing improvements." },
  ],
};

/** Launched products, linked to their pages and case studies. The regulated
 *  store is described, not named. */
export const PROOF: AiConsultingContent["proof"] = {
  kicker: "Proof, not slides",
  title: "We've built and launched real platforms, and we still run them.",
  sub: "Every one of these was designed, built and launched by Ardn and is run as a managed service by the same team you'd work with.",
  items: LAUNCHES.map((l) => ({
    name: l.slug === "research-only" ? "Compliance-first e-commerce store" : l.slug === "rx-dr" ? "Rx-Dr (built and launched by Ardn)" : l.name,
    industry: l.industry,
    outcome: l.outcome,
    image: l.image,
    imageAlt: l.slug === "research-only" ? "Eligibility confirmation before entering a compliance-first e-commerce store" : l.imageAlt,
    href: l.productHref,
    caseStudyHref: l.caseStudyHref,
  })),
};

export const WHY: AiConsultingContent["why"] = {
  kicker: "Why a consultant who also builds and runs it",
  title: "Advice is cheap. AI that keeps working is the hard part.",
  sub: "Most AI efforts stall between the strategy deck and day-to-day use. Hiring one team for the whole path removes the handoffs where projects die.",
  cols: ["Strategy-only consultant", "Freelancer or tool reseller"],
  ours: "Ardn",
  rows: [
    { feature: "What you're left with", cells: ["A report and a recommendation", "A tool set up, sometimes"], ours: "Working software in production" },
    { feature: "Fit to your workflow", cells: ["Generic best practice", "Whatever the tool does"], ours: "Built around how you work" },
    { feature: "Connected to your systems", cells: ["Out of scope", "Basic connectors"], ours: "CRM, ERP and data integrated" },
    { feature: "After launch", cells: ["Engagement ends", "Ad hoc, if available"], ours: "Run as a managed service" },
    { feature: "How it's priced", cells: ["Day rates or retainers", "Hourly or per seat"], ours: "Fixed quotes, then a flat monthly fee" },
  ],
};

export const FAQ_COST = {
  q: "How much does an AI consultant cost?",
  a: "It depends on what you're buying: an assessment, a pilot, a production build or an ongoing managed service are priced very differently. The biggest cost drivers are how many workflows are in scope, how ready your data is, how many systems the AI must connect to, your security and compliance requirements, and who runs it after launch. We don't publish a rate card; after a free 30-minute call we give you a fixed quote for a clearly defined scope. Our guide at ardncloudsolutions.com/ai-consulting/cost explains what drives the price and what you should get for it.",
};

export const FAQ_AFTER = {
  q: "What happens after the AI goes live?",
  a: "We keep running it. After launch the service continues on a flat monthly fee that covers hosting, monitoring, model and security updates, support and ongoing improvements, so nobody on your team has to become an AI engineer to keep it working.",
};

export const FAQ_SYSTEMS = {
  q: "Will AI work with the systems we already use?",
  a: "Usually, yes. We connect AI to the CRM, ERP, accounting, document storage and line-of-business systems you already run, including Salesforce, HubSpot and Microsoft tools. The assessment tells you which connections are straightforward and which need more work, before you commit to a build.",
};

export const FAQ_RESULTS = {
  q: "How quickly will we see results?",
  a: "The roadmap is phased so the first phase ships something your team actually uses within weeks rather than months, instead of waiting on one large launch. How fast depends on the scope and how ready your data and systems are, and we tell you that in the fixed quote.",
};

export const HUB_FAQS: AiConsultingContent["faqs"] = [
  FAQ_COST,
  {
    q: "What does an AI consultant actually do?",
    a: "A good one starts with your business, not the technology: how work flows today, where time and money leak, and which tasks AI can reliably take over. From there you should get a prioritized roadmap and, ideally, the build itself. Ardn does all of it: assessment, roadmap, build and running the result as a managed service.",
  },
  {
    q: "Is AI consulting worth it for a small or mid-size business?",
    a: "It is when it's aimed at a specific, repetitive piece of work, like intake, document handling, follow-up or answering the same questions all day. It isn't when it's a science project with no owner. We'll tell you on the first call if we don't see a use that's worth paying for.",
  },
  {
    q: "Do we need clean data or an in-house data team first?",
    a: "No. Part of the assessment is checking what data you have, where it lives and how usable it is. Many good first projects work on documents, emails and records you already have. If cleanup is needed, it's scoped into the plan so there are no surprises.",
  },
  FAQ_SYSTEMS,
  FAQ_RESULTS,
  FAQ_AFTER,
  {
    q: "Do you only work with companies in Florida?",
    a: "No. Ardn is based in Orlando, Florida and works with businesses across the United States, remotely or on-site. Florida clients can meet us in person; we also have local pages for Orlando, Tampa, Miami and Jacksonville.",
  },
];

export const CITY_LINKS = [
  { label: "AI consulting in Orlando", href: "/ai-consulting-orlando" },
  { label: "AI consulting in Tampa", href: "/ai-consulting-tampa" },
  { label: "AI consulting in Miami", href: "/ai-consulting-miami" },
  { label: "AI consulting in Jacksonville", href: "/ai-consulting-jacksonville" },
];
