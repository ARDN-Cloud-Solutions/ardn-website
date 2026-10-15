// Google Ads landing pages (/start/<hook>). One entry per ad hook; the slug
// is sent to /api/lead as `hook` (and, when the optional hub mirror is on,
// to the arndai funnel as `page`, matching the hub's
// funnel_landing_pages slugs for the `ardn-ai-consulting` funnel).
// Facts only: no prices, no client names.

export type HookSlug =
  | "ai-consulting-company"
  | "ai-development-company"
  | "custom-software-company"
  | "ai-agent-development"
  | "ai-implementation";

export type Faq = { q: string; a: string };

export type Hook = {
  slug: HookSlug;
  /** Browser tab title. */
  title: string;
  /** Meta description (the page is noindex; this is for link previews). */
  description: string;
  eyebrow: string;
  headline: string;
  /** Shorter headline for phones (7 words max), so the form starts above the fold. */
  mobileHeadline: string;
  subhead: string;
  /** Overrides the shared proof bullets when set. */
  proof?: string[];
  /** Label on the repeat CTA lower down the page. */
  cta: string;
};

export const PROOF = [
  "Orlando-based US team",
  "30+ years of technology and consulting experience",
  "Launched platforms for golf clubs, contractors and nonprofits, plus a telehealth platform built and launched by Ardn",
];

export const STEPS = [
  { title: "Free 30-minute call", body: "Tell us the problem and the systems involved. We tell you plainly whether AI or custom software is the right answer." },
  { title: "Fixed quote", body: "You get the scope and a fixed price in writing before any work starts. No hourly meter." },
  { title: "We build it", body: "Our US team builds around the tools and data you already use, with working software to review along the way." },
  { title: "We run it", body: "After launch we keep it running: monitoring, fixes, updates and support, so it doesn't stall when the project ends." },
];

// "Platforms we've built and run": the scroll stage under How it works.
// Say "built for" / "running at" an industry; never name a client, never call
// these case studies, no prices. Rx-Dr is built and launched by Ardn.
export type Platform = {
  name: string;
  /** Who it is built for (the eyebrow). */
  audience: string;
  outcome: string;
  points: [string, string, string];
  src: string;
  alt: string;
  width: number;
  height: number;
  href: string;
  /** Link text; defaults to "See <name>". */
  linkLabel?: string;
  /** Picks the ambient light colour behind the screen (1-4). */
  tone: 1 | 2 | 3 | 4;
};

export const PLATFORMS: Platform[] = [
  {
    name: "Club Steward",
    audience: "Built for golf & country clubs and multi-club operators",
    outcome: "Runs the whole club on one platform: members, tee times, events, dining, the pro shop and billing.",
    points: ["Tee times, events and dining booked to one member record", "Dues on autopay, statements and house accounts", "Every club side by side for multi-club groups"],
    src: "/images/golf/corporate-dashboard.webp",
    alt: "Club Steward: corporate dashboard comparing inquiries, conversion and events across several clubs",
    width: 2880,
    height: 1800,
    href: "/golf-club-management-software",
    tone: 1,
  },
  {
    name: "Ardn CRM",
    audience: "Built for contractors & field-service teams",
    outcome: "Sales, quotes, jobs and service on one record, without per-seat pricing.",
    points: ["Lead to quote to job without re-typing anything", "Dispatch and the service desk on the same customer", "No per-seat fees, so the whole crew gets access"],
    src: "/images/crm/pipeline.webp",
    alt: "Ardn CRM: sales pipeline board with deals in each stage",
    width: 2880,
    height: 1800,
    href: "/construction-crm",
    tone: 2,
  },
  {
    name: "Membership & Fundraising",
    audience: "Built for community nonprofits & membership organizations",
    outcome: "Members, households, check-in, classes and donations on one record.",
    points: ["Front-desk check-in with member barcodes", "Classes, programs and events with online booking", "Every donation tied to the household"],
    src: "/images/nonprofit/operations-overview-dashboard.webp",
    alt: "Membership and fundraising platform: operations overview with members, revenue, check-ins and donations",
    width: 2880,
    height: 1800,
    href: "/nonprofit-management-software",
    tone: 3,
  },
  {
    name: "Rx-Dr",
    audience: "White-label telehealth, built and launched by Ardn",
    outcome: "Lets a brand launch online care under its own name: intake, clinician review, pharmacy, payments.",
    points: ["Online intake built for each treatment", "Clinician review and pharmacy routing", "Payments and a patient portal under the brand's name"],
    src: "/media/case-studies/rx-dr/white-label.webp",
    alt: "Rx-Dr: white-label telehealth page for brands launching online care",
    width: 1920,
    height: 1200,
    href: "/case-studies/rx-dr-white-label-telehealth-platform",
    tone: 4,
  },
];

// "Apps your team can start with". Always "apps", never "modules": each one
// works on its own. `icon` is a key the client grid maps to a lucide icon.
export type AppIcon =
  | "hr"
  | "crm"
  | "marketing"
  | "pos"
  | "service"
  | "dispatch"
  | "events"
  | "billing"
  | "phone"
  | "giving"
  | "ai"
  | "reports"
  | "books"
  | "golf"
  | "shop"
  | "quote"
  | "jobs"
  | "accounts";

export type App = {
  name: string;
  benefit: string;
  points: [string, string];
  icon: AppIcon;
  src: string;
  alt: string;
  /** Shown as a small "Preview" label: not generally available yet. */
  preview?: boolean;
  /** A small label of its own (e.g. "Core"); wins over `preview`. */
  tag?: string;
};

export const APPS: App[] = [
  { name: "HR & Hiring", benefit: "Hire, onboard, schedule and pay your team.", points: ["Applicants ranked against each posting", "Onboarding, schedules and timesheets in one flow"], icon: "hr", src: "/images/golf/people-hiring.webp", alt: "HR & Hiring app: a job posting with ranked applicants" },
  { name: "CRM & Sales", benefit: "Every lead, deal and quote on one board.", points: ["Drag deals through stages as values roll up", "Quotes and follow-ups tied to each lead"], icon: "crm", src: "/images/crm/pipeline.webp", alt: "CRM & Sales app: pipeline board" },
  { name: "Marketing", benefit: "Campaigns, email journeys and your website, in one place.", points: ["Email journeys that start on what people do", "One campaign running across every location"], icon: "marketing", src: "/images/golf/marketing-journeys.webp", alt: "Marketing app: an automated email journey" },
  { name: "Point of Sale", benefit: "One checkout for every register, with stock and close-out.", points: ["Every outlet closes out on one end-of-day screen", "Charge cards or accounts at the register"], icon: "pos", src: "/images/golf/pos-register.webp", alt: "Point of Sale app: end-of-day close-out by outlet" },
  { name: "Service Desk", benefit: "Requests on an SLA clock, with automatic escalation.", points: ["Every request carries its own SLA timer", "Overdue work escalates to the right person"], icon: "service", src: "/images/crm/service-desk.webp", alt: "Service Desk app: requests with SLA status" },
  { name: "Scheduling & Dispatch", benefit: "Book the right person and route the work.", points: ["Every technician's day on one board", "Assign by skill, location and availability"], icon: "dispatch", src: "/images/crm/dispatch.webp", alt: "Scheduling & Dispatch app: dispatch board" },
  { name: "Events & Catering", benefit: "From inquiry to invoice, with instant quotes.", points: ["Step-by-step planning, from rooms to menus", "Quotes priced from your own price book"], icon: "events", src: "/images/golf/events-plan.webp", alt: "Events & Catering app: planning a private event" },
  { name: "Billing & Payments", benefit: "Autopay, statements and card or bank payments.", points: ["Recurring charges on autopay, with a receipt for each", "Card or bank payments and emailed statements"], icon: "billing", src: "/images/golf/member-billing.webp", alt: "Billing & Payments app: dues, autopay and wallet" },
  { name: "Member & Customer App", benefit: "Your brand on their phone: bookings, bills and benefits.", points: ["Bookings, bills and a digital member card", "Your name, colours and logo throughout"], icon: "phone", src: "/images/golf/member-home.webp", alt: "Member & Customer App: a member's home screen with savings and a digital card" },
  { name: "Fundraising", benefit: "Campaigns and gifts on the same record as the family.", points: ["Campaign goals and progress at a glance", "Every gift linked to the household record"], icon: "giving", src: "/images/nonprofit/fundraising-campaigns.webp", alt: "Fundraising app: campaigns with goals and progress" },
  { name: "AI Assistant", benefit: "Answers from your own data, 24/7, and hands off to a person.", points: ["Plain-English answers from your own reports", "Hands off to a person when it should"], icon: "ai", src: "/images/golf/platform-ai-helper.webp", alt: "AI Assistant app: answering a question from live membership data" },
  { name: "Reporting", benefit: "Every location and team on one dashboard.", points: ["Revenue, pipeline and service in one view", "Compare every location side by side"], icon: "reports", src: "/images/crm/reports.webp", alt: "Reporting app: business reports dashboard" },
  { name: "Accounting", benefit: "General ledger, payables and bank reconciliation.", points: ["Profit and loss by department, month by month", "Aging and house accounts in one view"], icon: "books", src: "/images/golf/accounting-overview.webp", alt: "Accounting app: revenue, expenses and budget with department results", preview: true },
];

export const FAQS: Faq[] = [
  {
    q: "What happens on the free call?",
    a: "Thirty minutes with someone who builds this work. We go through what you want to fix and the systems involved, and tell you honestly whether and where AI or custom software would help. There is no obligation.",
  },
  {
    q: "How is the price set?",
    a: "After the call we send a fixed quote, so you know the scope and the cost before anything starts. You never pay by the hour for us to figure things out.",
  },
  {
    q: "Do you work with the systems we already have?",
    a: "Yes. We build around your CRM, ERP, inboxes and spreadsheets rather than asking you to replace them. Bring a list of what you use today and the call starts from there.",
  },
  {
    q: "What happens after launch?",
    a: "We run what we build. Monitoring, fixes, updates and support stay with the same US team, so the system keeps working as your business changes.",
  },
];

export const HOOKS: Record<HookSlug, Hook> = {
  "ai-consulting-company": {
    slug: "ai-consulting-company",
    title: "AI Consulting Company | Ardn Cloud Solutions",
    description: "An AI consulting company that builds and runs what it recommends. Orlando-based US team. Free 30-minute call, fixed quote after it.",
    eyebrow: "AI consulting · US team",
    headline: "An AI consulting company that builds and runs what it recommends",
    mobileHeadline: "AI consulting that builds and runs it",
    subhead: "Tell us what you want AI to do for your business. A few quick questions, then a free 30-minute call and a fixed quote after it.",
    cta: "See if we're a fit",
  },
  "ai-development-company": {
    slug: "ai-development-company",
    title: "AI Development Company | Ardn Cloud Solutions",
    description: "AI development from first build to running in production. One US team builds it, launches it and keeps it running.",
    eyebrow: "AI development · US team",
    headline: "AI development, from first build to running in production",
    mobileHeadline: "AI development, built and run for you",
    subhead: "Assistants that answer from your own data, automations that remove manual work, agents that act in your systems. One US team builds, launches and runs it.",
    cta: "See if we're a fit",
  },
  "custom-software-company": {
    slug: "custom-software-company",
    title: "Custom Software Company | Ardn Cloud Solutions",
    description: "Custom software, a portal or an app, built, launched and run for you by an Orlando-based US team.",
    eyebrow: "Custom software · US team",
    headline: "Custom software, a portal or an app. Built, launched and run for you",
    mobileHeadline: "Custom software, built and run for you",
    subhead: "Tell us what you need. A few quick questions, a free 30-minute call, then a fixed quote before anything starts.",
    cta: "See if we're a fit",
  },
  "ai-agent-development": {
    slug: "ai-agent-development",
    title: "AI Agent Development | Ardn Cloud Solutions",
    description: "AI agents that take actions in the tools you already use, built and run by an Orlando-based US team.",
    eyebrow: "AI agent development · US team",
    headline: "AI agents that do real work in your systems",
    mobileHeadline: "AI agents that work in your systems",
    subhead: "Not a chatbot demo. Agents that take actions in the tools you already use, built by a team that also runs them after launch.",
    cta: "See if we're a fit",
  },
  "ai-implementation": {
    slug: "ai-implementation",
    title: "AI Implementation Services | Ardn Cloud Solutions",
    description: "AI implementation that ends in a working system your team uses every day, run for you after launch.",
    eyebrow: "AI implementation · US team",
    headline: "AI implementation that ends in a working system, not a slide deck",
    mobileHeadline: "AI implementation that ends in working systems",
    subhead: "We take an AI idea from scoping to a system your team uses every day, and keep running it after launch.",
    cta: "See if we're a fit",
  },
};

export const HOOK_SLUGS = Object.keys(HOOKS) as HookSlug[];

export function getHook(slug: string): Hook | undefined {
  return (HOOKS as Record<string, Hook>)[slug];
}
