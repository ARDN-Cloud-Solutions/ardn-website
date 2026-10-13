// Google Ads landing pages (/start/<hook>). One entry per ad hook; the slug
// is sent to the arndai funnel as `page`, and matches the hub's
// funnel_landing_pages slugs for the `ardn-ai-consulting` funnel.
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

export const SHOTS = [
  { src: "/images/golf/corporate-dashboard.webp", alt: "Golf and country club platform: corporate dashboard across several clubs", label: "Golf & country clubs" },
  { src: "/images/crm/dashboard.webp", alt: "CRM for contractors: business-health dashboard", label: "Contractors" },
  { src: "/images/nonprofit/operations-overview-dashboard.webp", alt: "Nonprofit membership and fundraising platform: operations overview", label: "Nonprofits" },
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
    subhead: "Tell us what you want AI to do for your business. A few quick questions, then a free 30-minute call and a fixed quote after it.",
    cta: "See if we're a fit",
  },
  "ai-development-company": {
    slug: "ai-development-company",
    title: "AI Development Company | Ardn Cloud Solutions",
    description: "AI development from first build to running in production. One US team builds it, launches it and keeps it running.",
    eyebrow: "AI development · US team",
    headline: "AI development, from first build to running in production",
    subhead: "Assistants that answer from your own data, automations that remove manual work, agents that act in your systems. One US team builds, launches and runs it.",
    cta: "See if we're a fit",
  },
  "custom-software-company": {
    slug: "custom-software-company",
    title: "Custom Software Company | Ardn Cloud Solutions",
    description: "Custom software, a portal or an app, built, launched and run for you by an Orlando-based US team.",
    eyebrow: "Custom software · US team",
    headline: "Custom software, a portal or an app. Built, launched and run for you",
    subhead: "Tell us what you need. A few quick questions, a free 30-minute call, then a fixed quote before anything starts.",
    cta: "See if we're a fit",
  },
  "ai-agent-development": {
    slug: "ai-agent-development",
    title: "AI Agent Development | Ardn Cloud Solutions",
    description: "AI agents that take actions in the tools you already use, built and run by an Orlando-based US team.",
    eyebrow: "AI agent development · US team",
    headline: "AI agents that do real work in your systems",
    subhead: "Not a chatbot demo. Agents that take actions in the tools you already use, built by a team that also runs them after launch.",
    cta: "See if we're a fit",
  },
  "ai-implementation": {
    slug: "ai-implementation",
    title: "AI Implementation Services | Ardn Cloud Solutions",
    description: "AI implementation that ends in a working system your team uses every day, run for you after launch.",
    eyebrow: "AI implementation · US team",
    headline: "AI implementation that ends in a working system, not a slide deck",
    subhead: "We take an AI idea from scoping to a system your team uses every day, and keep running it after launch.",
    cta: "See if we're a fit",
  },
};

export const HOOK_SLUGS = Object.keys(HOOKS) as HookSlug[];

export function getHook(slug: string): Hook | undefined {
  return (HOOKS as Record<string, Hook>)[slug];
}
