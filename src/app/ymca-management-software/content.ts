import { BarChart3, CalendarDays, CreditCard, HandCoins, HeartHandshake, ScanLine, ShieldCheck, Users } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";
import { NONPROFIT } from "../nonprofit-management-software/content";
import { FAQS } from "./faqs";

// Audience page: Ardn's Membership & Fundraising platform described for
// YMCA-style community associations. Same product, screens, theme and offer as
// /nonprofit-management-software; copy reorganised around YMCA search intent
// (membership billing, registration, check-in, fundraising, multi-branch
// reporting, switching).
//
// LEGAL GUARDRAILS (owner decision, 2026-10):
// - "YMCA" is a descriptive audience term only. Never say or imply that any
//   YMCA uses Ardn or is a customer, partner, pilot or endorser.
// - Never name a Y association or branch, never use YMCA logos, colours or
//   red-Y imagery, never "official", no testimonials or case studies.
// - No negative comparisons with named competitors.
// - Reuse only claims already made on /nonprofit-management-software (or the
//   same platform's /membership-management). NOT promised: free data migration.
// - Screens are the fictional "Harborview Community Center" demo (checked
//   2026-10-14: no real branch names appear).

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";
const IMG = (f: string) => `/images/nonprofit/${f}.webp`;

export const DISCLAIMER =
  "YMCA is a registered trademark of YMCA of the USA. Ardn Cloud Solutions is not affiliated with, sponsored by or endorsed by YMCA of the USA or any YMCA association.";

export const YMCA: ProductPageContent = {
  slug: "ymca-management-software",
  theme: NONPROFIT.theme,
  hero: {
    eyebrow: "Membership & Fundraising",
    eyebrowOutsideH1: true,
    title: "Membership and fundraising software for YMCAs",
    titleEm: "and community centers",
    lede: "Household membership billing, program and camp registration with waitlists, front-desk check-in, fundraising campaigns and reporting by branch, on one record for every member and donor. A flat monthly fee, never a percentage of your revenue, and a free pilot in your own branding before you sign.",
    primaryCta: { label: "Start a free pilot", href: "#talk" },
    secondaryCta: { label: "See the product", href: "#tour" },
    proof: ["Free pilot in your branding", "60-day go-live guarantee", "Built for multi-branch organizations"],
    shot: { src: IMG("operations-overview-dashboard"), alt: "Operations overview for a fictional community center with active members, revenue, donations, check-ins and revenue by branch", url: "Membership & Fundraising · Operations" },
    float: { label: "Sample organization · this month", stats: [{ value: "125", label: "Active members" }, { value: "$20.7k", label: "Revenue, trailing 30 days" }] },
    caption: "Real product screens from a demo organization with fictional people and figures.",
  },
  trust: NONPROFIT.trust,
  video: {
    video: "nonprofitOverview",
    kicker: "Watch",
    title: "One community. One record.",
    sub: "Seventy seconds on members and donors living on the same record: households with split billing, one-scan check-in, programs and waitlists, campaigns beside membership, and board-ready numbers by branch.",
  },
  figures: NONPROFIT.figures,
  pains: {
    kicker: "What a multi-branch association needs",
    title: "Families, programs, donors and branches, in one system.",
    sub: "A YMCA-style community association runs a gym, a swim school, a summer camp and a development office at once. The software has to handle all of it without a second system for donors or a spreadsheet for the board.",
    items: [
      { label: "Family billing", text: "Households with several members and more than one payer, billed the way they actually pay." },
      { label: "Busy registration", text: "Swim lessons, youth sports and camps that fill fast and need fair, automatic waitlists." },
      { label: "A busy front desk", text: "Part-time staff checking in members, guests and walk-ins at peak hours." },
      { label: "Board questions", text: "Revenue, donations and attendance by branch, without a week of spreadsheets." },
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
    title: "Everything a community association runs on.",
    sub: "Every screen below is the actual platform running a demo organization with fictional people. No mockups.",
    rows: [
      {
        kicker: "Membership billing",
        title: "Households billed the way families actually pay.",
        body: "A household holds everyone in the family, with guardians, children and the billing arrangement that fits: one payer, alternating months, a split by percentage or a custom schedule. Billing setup, activity and payment methods sit on the household record, and autopay runs from saved cards.",
        points: ["Single, split, alternating or custom payers", "Autopay from saved cards", "Every member with their own barcode"],
        shot: { src: IMG("household-record"), alt: "Household record for a fictional family of five with members and billing arrangement options", url: "People · Households" },
      },
      {
        kicker: "Membership plans",
        title: "Family, adult, senior and youth plans, priced per branch.",
        body: "Per-location pricing and join fees, discount variants and financial-assistance rates. Historical pricing is locked, so existing members keep the rate they joined at when prices change.",
        points: ["Per-location pricing and join fees", "Discount variants and financial assistance", "Versioned plans with proration"],
        shot: { src: IMG("membership-plans"), alt: "Membership plans with pricing, subscribers per branch and versioning", url: "Pricing · Membership plans" },
      },
      {
        kicker: "Program registration",
        title: "Classes, swim lessons and camps with waitlists that fill themselves.",
        body: "Programs, classes and camps with per-branch pricing, member and non-member rates, capacity and automatic waitlists. Families book and join waitlists themselves on a portal in your branding, and staff get rosters and attendance.",
        points: ["Per-branch pricing, capacity and waitlists", "Member and non-member rates", "Rosters and attendance"],
        shot: { src: IMG("member-portal-classes"), alt: "Branded member portal for a fictional community center showing classes to book and a waitlist", url: "members.harborview.org/classes" },
      },
      {
        kicker: "Front-desk check-in",
        title: "Arrivals in seconds, not clicks.",
        body: "Scan a barcode or guest pass, or search by name. Staff see today's classes at their branch and who's checked in, with every arrival recorded.",
        points: ["Barcodes, guest passes and name search", "Today's classes at this branch", "A live record of who arrived"],
        shot: { src: IMG("front-desk-check-in"), alt: "Front-desk check-in with scan field, today's classes and recent check-ins", url: "Operations · Check-in" },
      },
      {
        kicker: "Fundraising",
        title: "Annual and capital campaigns on the same record.",
        body: "Campaigns with goals and progress, donations by branch and campaign, and public giving pages. The same people your front desk checks in are the donors your development team stewards.",
        points: ["Campaigns with goals and public giving pages", "Gifts by branch and campaign", "Donor records linked to members"],
        shot: { src: IMG("fundraising-campaigns"), alt: "Fundraising campaigns with goals, amounts raised and status", url: "Donations · Campaigns" },
      },
      {
        kicker: "Multi-branch reporting",
        title: "Every branch on one screen.",
        body: "Membership, program and donation revenue by branch and region, pulled live, with a report builder and dashboards for the questions the board asks next.",
        points: ["Revenue by branch and category", "A report builder and dashboards", "Branch-scoped roles for staff"],
        shot: { src: IMG("revenue"), alt: "Revenue by category and by branch for a fictional two-branch organization", url: "Reporting · Revenue" },
      },
    ],
    cta: { text: "See it in your own branding. We'll stand up a free pilot themed to your organization, no signature required.", action: { label: "Request a free pilot", href: "#talk" } },
  },
  sampleNote: "Screens show a demo organization with fictional people and figures.",
  modules: {
    kicker: "One platform",
    title: "Everything the association runs on, in one login.",
    sub: "Workspaces for operations, fundraising, marketing and administration, each showing people exactly what their job needs.",
    items: [
      { icon: Users, title: "Membership & billing", body: "Versioned plans, households, split billing, proration, autopay and financial-assistance rates." },
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
      { img: IMG("classes-calendar"), title: "Classes", body: "The week's schedule across every branch at a glance.", alt: "Weekly class calendar across branches" },
      { img: IMG("donations"), title: "Donations", body: "Every gift by branch and campaign, with totals and status.", alt: "Donations list with collected totals and campaign filters" },
      { img: IMG("reports-analytics"), title: "Reports", body: "A standard report library, from leads to check-ins.", alt: "Reports and analytics catalog" },
      { img: IMG("operations-overview-dashboard"), title: "Operations", body: "Members, revenue, donations and check-ins on one screen.", alt: "Operations overview dashboard" },
    ],
  },
  steps: {
    kicker: "Switching from your current system",
    title: "Switch without a leap of faith.",
    sub: "Platform switches fail on surprise, not software. Ardn is never a percentage of your revenue, and the free pilot exists so everyone has seen their own workflow before anyone commits.",
    items: [
      { title: "A free pilot in your branding", body: "Your logo, colours, branches and membership plan structure, with logins for each director. No charge and no obligation." },
      { title: "Scope what you depend on", body: "Anything your association relies on outside the core is scoped explicitly during the pilot, so there are no surprises at go-live." },
      { title: "Guided go-live, guaranteed", body: "Cutover planned around your program calendar, with a written 60-day money-back guarantee. Your data stays yours and exports to CSV with no exit fee." },
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
      { label: "Nonprofit management software", href: "/nonprofit-management-software" },
      { label: "YMCA membership software compared", href: "/buyers-guide/ymca-membership-software" },
      { label: "Membership Management", href: "/membership-management" },
      { label: "AI for membership organizations", href: "/ai-for-membership-organizations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  disclaimer: DISCLAIMER,
};
