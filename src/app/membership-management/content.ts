import { BarChart3, CalendarDays, CreditCard, Dumbbell, HeartHandshake, LayoutDashboard, ScanLine, ShieldCheck, Workflow } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";
import { FAQS } from "./faqs";

// Membership Management page content (the general product page for gyms,
// studios, clubs and associations). Owns "membership management software";
// nonprofit/YMCA terms belong to /nonprofit-management-software and golf
// terms to /golf-club-management-software. Offer and pricing (from $699/mo,
// free pilot, 60-day guarantee, 12-month term) are owner-approved and live in
// the FAQ. Screens: local demo with fictional data, shared with the
// nonprofit page (same platform).

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";
const IMG = (f: string) => `/images/nonprofit/${f}.webp`;

export const MEMBERSHIP: ProductPageContent = {
  slug: "membership-management",
  theme: {
    accent: "#8ec5ff",
    accentSoft: "#c3e0ff",
    accentRgb: "142, 197, 255",
    accentInk: "#062443",
    accent2: "#2563eb",
    accent2Deep: "#1e3a8a",
    accent2Rgb: "37, 99, 235",
  },
  hero: {
    eyebrow: "Membership Management Software",
    title: "Run your members on one platform,",
    titleEm: "for one flat fee.",
    lede: "Sign-ups, recurring billing, classes, check-in, events and a branded member portal for gyms, studios, clubs and associations. No per-member fees, no per-seat fees, and no commission on your own customers.",
    primaryCta: { label: "Book a demo", href: CALL },
    secondaryCta: { label: "See the product", href: "#tour" },
    proof: ["Free pilot in your branding", "60-day go-live guarantee", "Your own merchant account"],
    shot: { src: IMG("classes-calendar"), alt: "Weekly class calendar across locations with dozens of scheduled classes", url: "Membership Management · Classes" },
    float: { label: "Sample club · this week", stats: [{ value: "92", label: "Classes scheduled" }, { value: "125", label: "Active members" }] },
    caption: "Real product screens from a demo organization with fictional people and figures.",
  },
  trust: ["US-based team", "30+ yrs building software", "4-hour response SLA", "60-day go-live guarantee"],
  figures: [
    { value: "$0", label: "per-member or per-seat fees" },
    { value: "0%", label: "commission on bookings or sales in your portal" },
    { value: "1", label: "platform for billing, classes, events and giving" },
    { value: "60", label: "day go-live guarantee" },
  ],
  pains: {
    kicker: "The problem",
    title: "Growing shouldn't make your software bill grow faster.",
    sub: "Most membership software charges per location, per member or per booking, then sells the features you actually need as add-ons.",
    items: [
      { label: "Per-member fees", text: "Every new member costs you twice: once to win, once to your software." },
      { label: "Commissions", text: "Marketplaces take a cut of bookings from customers you already had." },
      { label: "Add-ons", text: "Events, forms, automation and giving are extra, or missing entirely." },
      { label: "Their brand", text: "Members book through someone else's app instead of yours." },
    ],
  },
  promises: {
    kicker: "Why it's different",
    title: "Your brand, your merchant account, your data.",
    sub: "A flat monthly fee for the platform, and everything you'd normally pay extra for is already in it.",
    items: [
      { icon: CreditCard, title: "Flat pricing", body: "One monthly fee for the platform. No per-member, per-seat or booking fees." },
      { icon: LayoutDashboard, title: "Your brand", body: "A member portal with your logo, colours and voice, on your own domain." },
      { icon: HeartHandshake, title: "Your money", body: "Payments settle into your own merchant account through the processor you use." },
      { icon: ShieldCheck, title: "Your data", body: "Isolated at the database layer, exportable any time, no exit fee." },
    ],
  },
  tour: {
    kicker: "See the product",
    title: "The real product, running a real schedule.",
    sub: "Every screen below is the actual platform running a demo organization with fictional people. No mockups.",
    rows: [
      {
        kicker: "Classes",
        title: "The whole week, every location, one screen.",
        body: "Recurring classes with capacity and waitlists that fill themselves, rosters and attendance a click away, and templates so a new season takes minutes.",
        points: ["Recurring schedules and templates", "Capacity and self-promoting waitlists", "Rosters and attendance"],
        shot: { src: IMG("classes-calendar"), alt: "Weekly class calendar with classes across two locations", url: "Operations · Classes" },
      },
      {
        kicker: "Members",
        title: "Every member, plan and location at a glance.",
        body: "Search the whole membership, filter by location, and open any member to see their plan, household, bookings and billing in one place.",
        points: ["Members across every location", "Plans, households and status", "Export to CSV any time"],
        shot: { src: IMG("members-directory"), alt: "Members directory with plans, contact details, locations and status", url: "People · Members" },
      },
      {
        kicker: "Member portal",
        title: "Members book themselves, in your brand.",
        body: "Members browse and book classes, join programs, manage their household's payment methods and sign waivers on a portal that looks like your organization.",
        points: ["Class browsing and booking", "Programs, events and training", "No app download required"],
        shot: { src: IMG("member-portal-classes"), alt: "Branded member portal with classes to browse and book", url: "members.yourclub.com/classes" },
      },
    ],
    cta: { text: "See it in your own branding. We'll stand up a free pilot themed to your organization, no signature required.", action: { label: "Request a free pilot", href: "#talk" } },
  },
  sampleNote: "Screens show a demo organization with fictional people and figures.",
  modules: {
    kicker: "Everything included",
    title: "One platform. Every workspace.",
    sub: "Each person sees exactly what their job needs, scoped to their location.",
    items: [
      { icon: CreditCard, title: "Memberships & billing", body: "Versioned plans, households, split billing, proration, autopay and saved cards." },
      { icon: Dumbbell, title: "Classes & appointments", body: "Recurring classes, programs with waitlists, personal training and session packs." },
      { icon: ScanLine, title: "Front-desk check-in", body: "One scan screen for barcodes, guest passes and name lookup." },
      { icon: CalendarDays, title: "Events & volunteers", body: "Event pages with RSVP, volunteer shifts and hour logging." },
      { icon: Workflow, title: "Forms & workflows", body: "Multi-page forms and no-code automation triggered by real events." },
      { icon: BarChart3, title: "Reporting", body: "A report builder, dashboards and revenue by location." },
    ],
  },
  gallery: {
    kicker: "More of the platform",
    title: "More screens your team will live in.",
    items: [
      { img: IMG("membership-plans"), title: "Plans", body: "Plans with per-location pricing, variants and locked history.", alt: "Membership plans with pricing and subscribers" },
      { img: IMG("front-desk-check-in"), title: "Check-in", body: "Scan, search or add a walk-in, with today's classes alongside.", alt: "Front-desk check-in screen" },
      { img: IMG("households"), title: "Households", body: "Families with guardians, dependents and shared billing.", alt: "Households list" },
      { img: IMG("member-portal-home"), title: "Member home", body: "Barcode, bookings and payment methods in the member's account.", alt: "Member portal home with barcode and account tiles" },
    ],
  },
  steps: {
    kicker: "How it works",
    title: "Try it in your branding first.",
    sub: "The pilot means your team has used their own workspace before anyone signs.",
    items: [
      { title: "A short demo", body: "We walk through the platform on a live demo and map it to how you run today." },
      { title: "A free pilot", body: "A private sandbox in your branding with your locations and plans." },
      { title: "Go live, guaranteed", body: "We plan the cutover with you, train your staff and back it with a 60-day guarantee." },
    ],
  },
  faqs: FAQS,
  form: {
    heading: "See it in your own branding",
    sub: "Tell us about your organization and what you use today. We'll reply within 4 business hours with pilot next steps and a fixed quote.",
    submitLabel: "Request my free pilot",
    messageLabel: "What would you most like to fix first?",
  },
  final: {
    title: "More members.",
    titleEm: "Not more fees.",
    lede: "Book a demo, then try the platform in your own branding before you decide.",
    cta: { label: "Book a demo", href: CALL },
    links: [
      { label: "Case study: members and donors on one record", href: "/case-studies/membership-and-fundraising-platform-community-nonprofits" },
      { label: "Nonprofit Management", href: "/nonprofit-management-software" },
      { label: "Club Steward for golf clubs", href: "/golf-club-management-software" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
};
