import { BellRing, Calculator, ClipboardList, FileText, Lock, MailCheck, PlayCircle, Route, Table2 } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";

// Interactive sales proposals, sold as a done-for-you service (owner
// decision 2026-10-16): Ardn builds and hosts the proposal for one big deal.
// Truth guardrails (checked against src/lib/proposals, src/components/proposals
// and src/app/proposals on 2026-10-16):
// - Real: emailed sign-in code, access locked to the buyer's domain/emails;
//   savings and return calculator (sunset/keep per system, typed costs,
//   presets, 5-year net, payback, return, optional revenue upside); demo
//   videos that start at a set moment; fit-gap table, phased roadmap,
//   investment; one-page board brief (browser print to PDF); opened-alert
//   email, visit summary (sections, videos, every number changed), PDF-export
//   alert, activity dashboard.
// - NOT built, never claim: AI writing, e-signature / online accept,
//   payments, self-serve signup, the seller's own branding on sign-in emails,
//   custom domains, live alerts straight to the seller's inbox (Ardn's team
//   receives and forwards them). Never claim escrow, uptime credits or
//   automatic monthly exports (not in place as of 2026-10-16).
// - Screens: a sample Club Steward proposal for a fictional client
//   ("Lakeshore Club Group"). No real client names. No prices.

export const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";
const IMG = (f: string) => `/images/proposals/${f}.webp`;

export const FAQS = [
  {
    q: "What is an interactive sales proposal?",
    a: "A private web page for one deal, instead of a PDF. Your buyer opens it with a code sent to their work email, plays with their own numbers in a savings and return calculator, watches short demo clips, reads the plan and prints a one-page brief for their board. You see what they explored.",
  },
  {
    q: "Is this software we log into, or a service?",
    a: "A service. Ardn builds the proposal for your deal from your discovery notes, pricing, plan and product videos, hosts it, and sends you what your buyer did on it. There is nothing for your team to learn or license.",
  },
  {
    q: "What do we see after we send it?",
    a: "When someone opens it, we know who and when. When they leave, a visit summary lists the sections they read, the videos they played and every number they changed, in order, with the final totals. You also hear about it when someone saves the board brief or the full proposal as a PDF.",
  },
  {
    q: "Who can open the proposal?",
    a: "Only the people you allow. Access is locked to your buyer's company email domain, or to named addresses. Each visit starts with a one-time code sent to that email, so every view is tied to a real person, and pages are kept out of search engines.",
  },
  {
    q: "What kind of deals is this for?",
    a: "Large B2B deals where a committee or board decides and the business case matters: software, platforms, managed services and multi-site rollouts. If your buyer has to justify the spend to someone else, an interactive proposal does that work for them.",
  },
  {
    q: "Can it carry our brand?",
    a: "The proposal is written and designed around your company, your product and your buyer's numbers. Today proposals are hosted by Ardn and the sign-in email comes from Ardn. If you need your own branding end to end, tell us on the call and we will scope it.",
  },
  {
    q: "Does it replace e-signature?",
    a: "No. The proposal makes the case and gets the decision; your contract still goes through the e-signature tool you use today.",
  },
];

export const INTERACTIVE_PROPOSALS: ProductPageContent = {
  slug: "interactive-sales-proposals",
  theme: {
    accent: "#86efac",
    accentSoft: "#bbf7d0",
    accentRgb: "134, 239, 172",
    accentInk: "#052e1c",
    accent2: "#15803d",
    accent2Deep: "#0b4a35",
    accent2Rgb: "21, 128, 61",
  },
  hero: {
    eyebrow: "Built for you by Ardn · For big B2B deals",
    eyebrowOutsideH1: true,
    title: "Interactive sales proposals",
    titleEm: "your buyer's board actually opens.",
    lede: "Ardn turns your next big deal into an interactive sales proposal: a private page where your buyer tries their own numbers in a savings and return calculator, watches your product at the right moment and prints a one-page brief for the board. We show you what they explored.",
    primaryCta: { label: "Book a 30-min call", href: CALL },
    secondaryCta: { label: "See a sample proposal", href: "#tour" },
    proof: ["Private, emailed-code access", "Buyers try their own numbers", "We show you what they read and changed"],
    shot: {
      src: IMG("overview"),
      alt: "Interactive sales proposal overview for a fictional multi-club operator, with the board memo and the headline numbers",
      url: "Sample proposal · Overview",
    },
    caption: "A real proposal built by Ardn, shown with a fictional client.",
  },
  trust: ["Orlando, FL-based US team", "30+ yrs technology & consulting", "Replies within 4 business hours", "Built and used on our own deals"],
  pains: {
    kicker: "Why PDFs lose deals",
    title: "A PDF proposal goes quiet the moment you send it.",
    sub: "Big deals are decided in meetings you're not in. A static document can't answer the questions asked there.",
    items: [
      { label: "No idea what happened", text: "You can't tell who opened it, what they read or where they stopped." },
      { label: "Your numbers, not theirs", text: "The ROI page shows your assumptions. The CFO wants to try their own." },
      { label: "Forwarded and flattened", text: "Your champion has to re-explain the deal to a board that never saw the demo." },
      { label: "Follow-up by guesswork", text: "\"Just checking in\" emails, because you don't know what they care about." },
    ],
  },
  promises: {
    kicker: "What's inside",
    title: "Everything a buying committee needs, on one private page.",
    sub: "Each proposal is built around your deal. These are the pieces we use.",
    items: [
      { icon: Calculator, title: "Savings and return calculator", body: "Buyers switch each current system between retire and keep, type what they really pay, and see savings, payback, 5-year net and return update as they go." },
      { icon: PlayCircle, title: "Demo clips at the right moment", body: "Short product videos that start exactly where the feature they're reading about begins." },
      { icon: Table2, title: "Fit-gap table", body: "Every requirement marked fit, configure, integrate or build, with a filter and search." },
      { icon: Route, title: "Phased rollout plan", body: "What happens in each phase and which systems retire when, so the plan is easy to approve." },
      { icon: FileText, title: "One-page board brief", body: "The ask, the numbers and the first step on one page, saved as a PDF for the board pack." },
      { icon: Lock, title: "Private by default", body: "Locked to the buyer's company email, opened with a one-time code, and hidden from search engines." },
    ],
  },
  tour: {
    kicker: "Inside a sample proposal",
    title: "See what your buyer sees.",
    sub: "Real screens from a proposal Ardn built for its own product, shown with a fictional client.",
    rows: [
      {
        kicker: "The business case",
        title: "Their numbers, not your assumptions",
        body: "We pre-fill sensible estimates. The buyer switches any system between retire and keep and types what they really pay, and the yearly savings update on the spot.",
        points: ["Retire or keep, system by system", "Their costs replace your estimates", "Totals update as they type"],
        shot: { src: IMG("savings"), alt: "Savings table where the buyer chooses which systems to retire and types their own yearly costs", url: "Sample proposal · Choose what to sunset" },
      },
      {
        kicker: "Build your plan",
        title: "A calculator the CFO will actually use",
        body: "Presets for quick wins, your proposal or everything, then a five-year view with net savings, payback year, return on spend and staff time freed. An optional revenue-upside calculator sits beside it, kept separate from the savings.",
        points: ["Quick wins, your proposal or everything", "Five-year net, payback and return", "Revenue upside shown separately"],
        shot: { src: IMG("plan"), alt: "Build-your-plan calculator with yearly costs, a five-year cumulative net chart and return on spend", url: "Sample proposal · Build your plan" },
      },
      {
        kicker: "The detail",
        title: "Every requirement answered, honestly",
        body: "A fit-gap table shows what fits today, what needs configuring, what integrates and what gets built, with the phase it lands in. Buyers can filter and search it.",
        points: ["Fit, configure, integrate or build", "Filter and search", "Linked to the rollout phase"],
        shot: { src: IMG("fit-gap"), alt: "Fit-gap table with coverage bar, status filters and requirement rows", url: "Sample proposal · Full proposal" },
      },
      {
        kicker: "For the board",
        title: "A one-page brief your champion can forward",
        body: "The ask, the four numbers that matter and why it scales, on one page. Your champion saves it as a PDF and drops it into the board pack.",
        points: ["The ask in one sentence", "EBITDA, payback, 5-year net", "Saved as a PDF from the browser"],
        shot: { src: IMG("board-brief"), alt: "One-page board brief with the ask, EBITDA added, payback, five-year net and planned projects avoided", url: "Sample proposal · Board brief" },
      },
      {
        kicker: "After you send it",
        title: "Know exactly what they explored",
        body: "When your buyer leaves, a visit summary lists the sections they read, the videos they played and every number they changed, in order. Your next call starts where their questions are.",
        points: ["Opened alerts", "Sections, videos and every change", "PDF-download alerts"],
        shot: { src: IMG("visit-changes"), alt: "Visit summary email listing every change the buyer made, in order, with times and new values", url: "Visit summary · Every change, in order" },
      },
    ],
    cta: { text: "Have a big deal that needs a better proposal?", action: { label: "Book a 30-min call", href: CALL } },
  },
  gallery: {
    kicker: "More screens",
    title: "Built to read well on any screen.",
    items: [
      { img: IMG("roadmap"), title: "Phased rollout", body: "Each phase with what it delivers and what it retires.", alt: "Four rollout phase cards with what retires in each" },
      { img: IMG("investment"), title: "Investment and return", body: "Pricing, run-rate and net savings by year in one view.", alt: "Investment section with pricing cards, run-rate bars and net savings by year" },
      { img: IMG("visit-email"), title: "Visit summary", body: "Who visited, for how long, and what they saw last.", alt: "Visit summary email header with time on page and the last numbers the buyer saw" },
      { img: IMG("mobile"), title: "On a phone", body: "The overview and calculator work on mobile too.", alt: "Interactive proposal overview on a phone" },
    ],
  },
  steps: {
    kicker: "How it works",
    title: "From discovery call to a proposal they can't ignore.",
    sub: "You bring the deal. We build, host and report on the proposal.",
    items: [
      { title: "Share the deal", body: "Your discovery notes, pricing, the plan you're proposing and any product videos. A 30-minute call is enough to start." },
      { title: "We build it", body: "Ardn writes and builds the proposal around your buyer's systems, costs and decision: calculator, plan, fit-gap and board brief." },
      { title: "You send a private link", body: "Access is locked to your buyer's company email. Each visit opens with a one-time code." },
      { title: "See what they explored", body: "Opened alerts, visit summaries and PDF alerts, so every follow-up is about what they actually care about." },
    ],
  },
  modules: {
    kicker: "What you get back",
    title: "Signals, not guesses.",
    sub: "Every visit is tied to a real person at your buyer's company.",
    items: [
      { icon: BellRing, title: "Opened alert", body: "We tell you when someone at the buyer opens the proposal, and who." },
      { icon: MailCheck, title: "Visit summary", body: "Time on page, sections read, videos played and every number changed, in order." },
      { icon: ClipboardList, title: "Activity report", body: "Viewers, opens, video plays, scenarios tried and the cost figures they entered, on request." },
    ],
  },
  compare: {
    kicker: "Compared",
    title: "Why not just send a PDF?",
    sub: "A PDF is fine for small deals. This is for the one deal that has to land.",
    cols: ["PDF proposal"],
    ours: "Ardn interactive proposal",
    rows: [
      { feature: "Who builds it", cells: ["Your team"], ours: "Ardn, around your deal" },
      { feature: "Buyer tries their own numbers", cells: ["No"], ours: "Full savings and return calculator" },
      { feature: "What you learn after sending", cells: ["Nothing"], ours: "Sections, videos and every number changed" },
      { feature: "Board-ready summary", cells: ["Written separately"], ours: "One-page brief built in" },
      { feature: "Who can open it", cells: ["Anyone it's forwarded to"], ours: "Only people at their company, by emailed code" },
    ],
  },
  faqs: FAQS,
  form: {
    heading: "Tell us about the deal",
    sub: "A sentence or two is plenty. We'll reply within 4 business hours to set up a 30-minute call.",
    submitLabel: "Request a call",
    messageLabel: "What are you selling, to whom, and what does the buyer need to decide?",
  },
  final: {
    title: "Your next big deal deserves",
    titleEm: "more than a PDF.",
    lede: "Book a 30-minute call. Bring the deal; we'll show you how the proposal would work for it.",
    cta: { label: "Book a 30-min call", href: CALL },
    links: [
      { label: "See everything we've launched", href: "/work" },
      { label: "Read the case studies", href: "/case-studies" },
    ],
  },
  sampleNote: "Screens show a sample proposal with a fictional client. Figures are illustrative.",
};
