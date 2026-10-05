import { BarChart3, CalendarDays, CreditCard, HandCoins, HeartHandshake, KeyRound, ScanLine, ShieldCheck, Users } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";
import { FAQS } from "./faqs";

// Nonprofit Management page content (the Ardn membership platform for YMCAs,
// JCCs, community centers and member-based nonprofits). Offer, pricing and
// guarantee are owner-approved (2026-08-24) and live in the FAQ.
// Truth guardrails: no claims of POS/day passes, childcare compliance,
// dunning/returned drafts, SilverSneakers, SMS, nationwide reciprocity, GL
// export, mobile app, or production customers.
// Screens: captured from a local demo with fictional data (2026-09-28),
// re-lettered "Harborview Community Center". Never use client data.

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";
const IMG = (f: string) => `/images/nonprofit/${f}.webp`;

export const NONPROFIT: ProductPageContent = {
  slug: "nonprofit-management-software",
  theme: {
    accent: "#f2a3c2",
    accentSoft: "#f8cfdf",
    accentRgb: "242, 163, 194",
    accentInk: "#3d0a20",
    accent2: "#c2185b",
    accent2Deep: "#7a0f39",
    accent2Rgb: "194, 24, 91",
  },
  hero: {
    eyebrow: "Nonprofit Management Software",
    title: "Members and donors in one record.",
    titleEm: "One flat fee.",
    lede: "Membership, billing, front-desk check-in, programs and a full fundraising CRM for YMCAs, JCCs and community nonprofits. Never a percentage of your revenue, and you can try it in your own branding before you sign.",
    primaryCta: { label: "Start a free pilot", href: "#talk" },
    secondaryCta: { label: "See the product", href: "#tour" },
    proof: ["Free pilot in your branding", "60-day go-live guarantee", "Built for multi-branch organizations"],
    shot: { src: IMG("operations-overview-dashboard"), alt: "Operations overview for a community center with active members, revenue, donations, check-ins and revenue by location", url: "Nonprofit Management · Operations" },
    float: { label: "Sample organization · this month", stats: [{ value: "125", label: "Active members" }, { value: "$20.7k", label: "Revenue, trailing 30 days" }] },
    caption: "Real product screens from a demo organization with fictional people and figures.",
  },
  trust: ["US-based team", "30+ yrs building software", "4-hour response SLA", "60-day go-live guarantee"],
  video: {
    video: "nonprofitOverview",
    kicker: "Watch",
    title: "One community. One record.",
    sub: "Seventy seconds on members and donors living on the same record: households with split billing, one-scan check-in, programs and waitlists, campaigns beside membership, and board-ready numbers by branch.",
  },
  figures: [
    { value: "1", label: "record for each member, donor and volunteer" },
    { value: "0%", label: "of your revenue paid to us, ever" },
    { value: "$0", label: "for a pilot in your own branding" },
    { value: "60", label: "day go-live money-back guarantee" },
  ],
  pains: {
    kicker: "The problem",
    title: "The way nonprofit software is sold works against the mission.",
    sub: "None of this is your team's fault. It's how legacy platforms are built and priced, and every piece of it is a choice a vendor made.",
    items: [
      { label: "A cut of your growth", text: "Fees tied to your revenue mean every campaign you win raises your software bill." },
      { label: "Two systems", text: "Operations in one platform, donors in another, reconciled by hand every month." },
      { label: "Hard screens", text: "Part-time front-desk staff wrestle click-heavy screens at the busiest hours." },
      { label: "Board questions", text: "Simple questions from the board take days and a spreadsheet to answer." },
    ],
  },
  promises: {
    kicker: "The difference",
    title: "The parent who pays for swim lessons and gives to the campaign is one person.",
    sub: "Here she's one record: memberships, registrations, check-ins, gifts and volunteer hours on one timeline your membership team and development office both see.",
    items: [
      { icon: HeartHandshake, title: "Members and donors together", body: "Fundraising lives next to membership, not in a second system." },
      { icon: CreditCard, title: "A flat fee", body: "Never a percentage of revenue. Payments settle into your own merchant account." },
      { icon: ScanLine, title: "A front desk that flows", body: "One scan screen for members, guests and walk-ins, even at peak hours." },
      { icon: BarChart3, title: "Answers for the board", body: "Reports by branch and program, built by the person who was asked." },
    ],
  },
  tour: {
    kicker: "See the product",
    title: "The real product, doing real community work.",
    sub: "Every screen below is the actual platform running a demo organization with fictional people. No mockups.",
    rows: [
      {
        kicker: "Front desk",
        title: "Arrivals in seconds, not clicks.",
        body: "Scan a barcode or guest pass, or search by name. Staff see today's classes and who's checked in, with every arrival recorded.",
        points: ["Barcodes, guest passes and name search", "Today's classes at this location", "A live record of who arrived"],
        shot: { src: IMG("front-desk-check-in"), alt: "Front-desk check-in with scan field, today's classes and recent check-ins", url: "Operations · Check-in" },
      },
      {
        kicker: "Households",
        title: "Families billed the way they actually pay.",
        body: "A household holds everyone in the family, with guardians, children and the billing arrangement that fits: one payer, alternating months, a split or a custom schedule.",
        points: ["Guardians and dependents", "Single, split or alternating billing", "Every member with their own barcode"],
        shot: { src: IMG("household-record"), alt: "Household record for a family of five with members and billing arrangement options", url: "People · Households" },
      },
      {
        kicker: "Membership plans",
        title: "Real pricing, without the spreadsheet.",
        body: "Family, individual, senior and youth plans with per-location pricing. Historical pricing is locked, so existing members keep the rate they joined at when prices change.",
        points: ["Per-location pricing and join fees", "Discount variants and financial assistance", "Versioned plans with locked history"],
        shot: { src: IMG("membership-plans"), alt: "Membership plans with pricing, subscribers per location and versioning", url: "Pricing · Membership plans" },
      },
      {
        kicker: "Fundraising",
        title: "A development office inside the same system.",
        body: "Campaigns with goals and progress, donations by branch and campaign, and public giving pages. The same people your front desk checks in are the donors your development team stewards.",
        points: ["Campaigns with goals and public giving pages", "Gifts by branch and campaign", "Donor records linked to members"],
        shot: { src: IMG("fundraising-campaigns"), alt: "Fundraising campaigns with goals, amounts raised and status", url: "Donations · Campaigns" },
      },
    ],
    cta: { text: "See it in your own branding. We'll stand up a free pilot themed to your organization, no signature required.", action: { label: "Request a free pilot", href: "#talk" } },
  },
  sampleNote: "Screens show a demo organization with fictional people and figures.",
  feature: {
    kicker: "Member portal",
    title: "Your brand, not ours.",
    sub: "Members join, register for programs, book classes, give and manage payment methods on a portal with your logo and colours.",
    points: ["Digital member barcode", "Programs, events and personal training", "Payment methods for the household", "Class browsing with booking and waitlists"],
    shot: { src: IMG("member-portal-classes"), alt: "Branded member portal showing classes to browse and book", url: "members.harborview.org/classes" },
  },
  modules: {
    kicker: "One platform",
    title: "Everything the association runs on, in one login.",
    sub: "Workspaces for operations, fundraising, marketing and administration, each showing people exactly what their job needs.",
    items: [
      { icon: Users, title: "Membership & billing", body: "Versioned plans, households, split billing, proration and financial-assistance rates." },
      { icon: ScanLine, title: "Front-desk check-in", body: "One scan screen for barcodes, guest passes and name lookup." },
      { icon: CalendarDays, title: "Programs, classes & camps", body: "Per-branch pricing, capacity, waitlists, rosters and attendance." },
      { icon: HandCoins, title: "Fundraising CRM", body: "Campaigns, donations, pledges, gift batches, acknowledgments and grants." },
      { icon: BarChart3, title: "Reporting", body: "A report builder, dashboards and revenue by branch and region." },
      { icon: ShieldCheck, title: "Security & roles", body: "Branch-scoped roles, multi-factor sign-in and an audit log." },
    ],
  },
  gallery: {
    kicker: "More of the platform",
    title: "More screens your team will live in.",
    items: [
      { img: IMG("donations"), title: "Donations", body: "Every gift by branch and campaign, with totals and status.", alt: "Donations list with collected totals and campaign filters" },
      { img: IMG("classes-calendar"), title: "Classes", body: "The week's schedule across every branch at a glance.", alt: "Weekly class calendar across branches" },
      { img: IMG("revenue"), title: "Revenue", body: "Membership, class, program and donation revenue by location.", alt: "Revenue by category and location" },
      { img: IMG("reports-analytics"), title: "Reports", body: "A standard report library, from leads to check-ins.", alt: "Reports and analytics catalog" },
    ],
  },
  security: {
    kicker: "Built for a real workforce",
    title: "From executive director to lifeguard.",
    sub: "A handful of full-time power users and hundreds of part-timers who need one narrow screen, each scoped to their branch.",
    items: [
      { icon: ShieldCheck, title: "Isolation in the database", body: "Your organization's data is separated with row-level security at the database layer." },
      { icon: KeyRound, title: "Least privilege", body: "Roles by job and branch, multi-factor sign-in, and an audit log of sensitive actions." },
      { icon: CreditCard, title: "Money handled like money", body: "The front desk can charge but not refund; refunds sit behind finance-only permissions." },
      { icon: Users, title: "Your data, exportable", body: "Every record exports to CSV. No exit fee for your own data, ever." },
    ],
  },
  steps: {
    kicker: "How it works",
    title: "Three steps, no leaps of faith.",
    sub: "Platform switches fail on surprise, not software. The pilot exists so everyone has seen their own workflow before anyone commits.",
    items: [
      { title: "A 15-minute demo", body: "We walk leadership through a live multi-branch demo and map it to how you run today." },
      { title: "A free pilot in your branding", body: "Your logo, colours, branches and plans, with logins for each director." },
      { title: "Guided go-live, guaranteed", body: "Cutover planned around your program calendar, with a written money-back guarantee." },
    ],
  },
  faqs: FAQS,
  form: {
    heading: "Start with a free pilot in your branding",
    sub: "Tell us about your organization: branches, current system and what hurts most. We'll reply within 4 business hours with pilot next steps.",
    submitLabel: "Request my free pilot",
    messageLabel: "What would you most like to fix first?",
  },
  final: {
    title: "Your mission grows.",
    titleEm: "Your software bill shouldn't.",
    lede: "Book a 15-minute demo. If it looks right, we'll stand up a free pilot in your branding and you decide with your whole team.",
    cta: { label: "Book a 15-minute demo", href: CALL },
    links: [
      { label: "Case study: a membership and fundraising platform for community nonprofits", href: "/case-studies/membership-and-fundraising-platform-community-nonprofits" },
      { label: "Membership Management", href: "/membership-management" },
      { label: "AI for membership organizations", href: "/ai-for-membership-organizations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
};
