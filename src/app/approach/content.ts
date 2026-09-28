import { Compass, Layers, LineChart, Map, Rocket, Server, Sparkles, Users, Workflow } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";

// "Our Approach" page: Ardn's AI-first, platform-as-a-service go-to-market
// (owner's positioning, 2026-09-28). Replaces "Cut CRM Costs" in the header.
// Screens are an EXAMPLE engagement rendered as mockups with fictional data.

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

export const APPROACH: ProductPageContent = {
  slug: "approach",
  theme: {
    accent: "#b8b2ff",
    accentSoft: "#d9d6ff",
    accentRgb: "184, 178, 255",
    accentInk: "#15104a",
    accent2: "#4840e0",
    accent2Deep: "#2d24b0",
    accent2Rgb: "72, 64, 224",
  },
  hero: {
    eyebrow: "Our approach · AI-first",
    title: "Don't teach old systems AI.",
    titleEm: "Build AI-first.",
    lede: "Most companies try to bolt AI onto legacy systems. We think that model is backwards. We map how your business really works, then build and run an AI-first platform around it, so your team is ready for the new way of working.",
    primaryCta: { label: "Book a free 30-minute call", href: CALL },
    secondaryCta: { label: "See how it works", href: "#tour" },
    proof: ["AI-first by design", "A roadmap you can actually deliver", "Technology run for you"],
    shot: { src: "/images/approach/roadmap.webp", alt: "Example AI-first roadmap with phased capabilities, stakeholders and outcomes", url: "Ardn Discovery · Roadmap" },
    float: { label: "Example engagement", stats: [{ value: "42", label: "Processes mapped" }, { value: "19 h → 6 h", label: "Duplicate entry per week" }] },
    caption: "Example engagement with a fictional company and figures.",
  },
  trust: ["US-based team", "30+ yrs technology & consulting", "4-hour response SLA", "Platform as a service"],
  figures: [
    { value: "1", label: "partner for the technology, the support and the product" },
    { value: "100%", label: "of your systems and processes catalogued" },
    { value: "Weeks", label: "between releases, not years" },
    { value: "0", label: "infrastructure for your team to run" },
  ],
  pains: {
    kicker: "The backwards model",
    title: "Legacy systems weren't built for AI, and forcing them costs you years.",
    sub: "Bolting AI onto old platforms adds more tools, more integrations and more manual work. Technology ends up restricting how the business grows instead of enabling it.",
    items: [
      { label: "Bolted on", text: "AI added to systems that were never designed for it." },
      { label: "Manual work", text: "People re-key the same data into three different systems." },
      { label: "No map", text: "Nobody has a full picture of the systems, processes and who depends on them." },
      { label: "Slow change", text: "Every new capability becomes a year-long project." },
    ],
  },
  promises: {
    kicker: "What makes us different",
    title: "We're not a product company. We're your platform partner.",
    sub: "Ardn is a platform-as-a-service partner: we provide the technology, the product and the support behind it, so your business can stay hands-off from the technology and focus on growth.",
    items: [
      { icon: Sparkles, title: "AI-first, not AI-added", body: "Systems designed around AI from the start, ready for how your team will work next." },
      { icon: Server, title: "Technology run for you", body: "We host, support and improve the platform, so there's nothing for your team to maintain." },
      { icon: Rocket, title: "Technology as an enabler", body: "Instead of restricting how you grow, the platform grows with the business." },
      { icon: LineChart, title: "Built to scale", body: "An AI-centric team and platform that scale as your industry and competitors do." },
    ],
  },
  tour: {
    kicker: "How it works",
    title: "We start by understanding how you actually work.",
    sub: "Before building anything, we map your systems, people and processes. Then we turn that map into a roadmap you can deliver piece by piece.",
    rows: [
      {
        kicker: "Step 1 · Catalogue",
        title: "Every system, capability and process, mapped.",
        body: "We learn how your team uses today's systems, who the stakeholders are and how they're affected, what's done by hand and what's automated, and where the same data is typed more than once. The result is a catalogue of your systems, capabilities, processes and sub-processes.",
        points: ["Systems and who relies on them", "Manual vs automated work", "Duplicate data entry, measured"],
        shot: { src: "/images/approach/process-catalogue.webp", alt: "Example process catalogue showing stakeholders, systems, manual work, duplicate entry and AI-first opportunities", url: "Ardn Discovery · Process catalogue" },
      },
      {
        kicker: "Step 2 · Roadmap",
        title: "A roadmap that chips away, capability by capability.",
        body: "We turn the catalogue into a phased plan for the capabilities the business wants in the short and long term. Each phase ships something real, so you see results every few weeks instead of waiting for one big launch.",
        points: ["Ranked by business impact", "Short-term wins and long-term goals", "Results you can see every few weeks"],
        shot: { src: "/images/approach/roadmap.webp", alt: "Example phased AI-first roadmap with stakeholders and outcomes", url: "Ardn Discovery · Roadmap" },
      },
    ],
    cta: { text: "Want an AI-first roadmap for your business? It starts with a 30-minute conversation.", action: { label: "Book a free 30-minute call", href: CALL } },
  },
  sampleNote: "Example engagement shown with a fictional company and figures.",
  modules: {
    kicker: "What you get",
    title: "A true partner, from first map to everyday operation.",
    sub: "One team that understands your business, builds the platform and keeps it running.",
    items: [
      { icon: Compass, title: "Discovery", body: "Interviews, system inventory and process mapping with your stakeholders." },
      { icon: Layers, title: "Capability catalogue", body: "Every system, capability, process and sub-process in one living map." },
      { icon: Map, title: "AI-first roadmap", body: "A phased project plan for the short and long term, ranked by impact." },
      { icon: Workflow, title: "Build & automate", body: "Remove manual steps and duplicate entry, one capability at a time." },
      { icon: Server, title: "Platform as a service", body: "Hosting, support and ongoing improvements, all included." },
      { icon: Users, title: "Partnership", body: "Regular roadmap reviews as your business and priorities change." },
    ],
  },
  steps: {
    kicker: "The engagement",
    title: "From first conversation to an AI-first business.",
    sub: "A clear path, delivered in phases, with one accountable partner.",
    items: [
      { title: "Understand", body: "How you work today: systems, stakeholders, and how each is affected." },
      { title: "Catalogue", body: "Every process and sub-process, what's manual, and where data is duplicated." },
      { title: "Roadmap", body: "A phased plan for the capabilities you need next." },
      { title: "Build & run", body: "We deliver each phase and run the platform for you." },
    ],
  },
  faqs: [
    { q: "What does \"AI-first\" mean in practice?", a: "It means designing systems around AI from the start instead of adding AI to platforms built for a different era. Work that people do by hand today, like re-keying data, chasing status or sorting requests, is built into the platform as automation from day one." },
    { q: "Are you a software product company?", a: "No. Ardn is a platform-as-a-service partner. We provide the technology, the product and the ongoing support, so your business can stay hands-off from the technology while it enables how you grow." },
    { q: "Where does an engagement start?", a: "With understanding how you work: the systems you use, who the stakeholders are and how they're affected, what's manual and what's automated, and where data is entered more than once. That becomes a catalogue of your systems, capabilities and processes." },
    { q: "Do we have to replace everything at once?", a: "No. The roadmap is phased, so we chip away at capabilities in order of impact. Some systems are kept and connected; others are retired as the new platform takes over their job." },
    { q: "How quickly will we see results?", a: "Each phase is designed to ship something real within weeks, so the business sees progress continuously rather than waiting for a single large launch." },
    { q: "Who runs the platform after it's built?", a: "We do. Hosting, monitoring, support and ongoing improvements are part of the service, so your team doesn't have to maintain the technology." },
  ],
  form: {
    heading: "Start your AI-first roadmap",
    sub: "Tell us a little about your business and the systems you use today. We'll reply within 4 business hours.",
    submitLabel: "Start the conversation",
    messageLabel: "What takes your team the most manual effort today?",
  },
  final: {
    title: "Stop forcing legacy systems to do AI.",
    titleEm: "Start AI-first.",
    lede: "Book a free 30-minute call and we'll show you what an AI-first roadmap could look like for your business.",
    cta: { label: "Book a free 30-minute call", href: CALL },
    links: [
      { label: "AI Forge", href: "/ai-forge" },
      { label: "Products & services", href: "/our-products" },
      { label: "About Ardn", href: "/about-ardn" },
    ],
  },
};
