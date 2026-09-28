import { BellRing, CalendarClock, FileSearch, History, ShieldCheck, SlidersHorizontal, UserCheck, UserX, Wallet } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";

// License Guard page content. Claims are limited to what the LicenseGuard
// managed package does (repo: ARDN-Cloud-Solutions/LicenseGuard): last-login
// inactivity rules, warning emails from your templates, exemptions, license
// + permission-set removal, scheduled runs, logs and a savings estimate.
// Screens are mockups with sample data (scripts/product-mockups).

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

export const LICENSE_GUARD: ProductPageContent = {
  slug: "license-guard",
  theme: {
    accent: "#7cc4ff",
    accentSoft: "#b9e0ff",
    accentRgb: "124, 196, 255",
    accentInk: "#06223f",
    accent2: "#1b7fe0",
    accent2Deep: "#014486",
    accent2Rgb: "27, 127, 224",
  },
  hero: {
    eyebrow: "License Guard · For Salesforce",
    title: "Stop paying for Salesforce licenses",
    titleEm: "nobody is using.",
    lede: "License Guard finds users who haven't logged in, gives them a friendly warning, and frees their license on your schedule. Every action is logged, and you see the money it saves.",
    primaryCta: { label: "Get a free license check", href: CALL },
    secondaryCta: { label: "See how it works", href: "#tour" },
    proof: ["Free on the Salesforce AppExchange", "Runs inside your Salesforce org", "Set up in minutes"],
    shot: { src: "/images/license-guard/reporting.webp", alt: "License Guard reporting screen showing licenses reclaimed, estimated annual savings and the inactive user queue", url: "License Guard · Reporting" },
    float: { label: "Last 90 days · sample org", stats: [{ value: "38", label: "Licenses reclaimed" }, { value: "$57k", label: "Estimated annual savings" }] },
    caption: "Screens show a sample Salesforce org.",
  },
  trust: ["US-based team", "30+ yrs building software", "4-hour response SLA", "Free on AppExchange"],
  figures: [
    { value: "0", label: "lines of code to set up" },
    { value: "7", label: "day warning before any license is removed, or your own period" },
    { value: "100%", label: "of actions written to an audit log" },
    { value: "$0", label: "to install from the AppExchange" },
  ],
  pains: {
    kicker: "The quiet cost",
    title: "Every inactive user is a license you keep paying for.",
    sub: "People change roles, contractors finish, seasonal staff go home. Their Salesforce licenses stay active and renew every year, until someone has time to audit a spreadsheet.",
    items: [
      { label: "Renewals", text: "You renew seats you can't prove anyone uses." },
      { label: "Manual audits", text: "Someone exports login history every quarter and cleans it up by hand." },
      { label: "Surprises", text: "Deactivating the wrong person means an angry call from the field." },
      { label: "No record", text: "Nobody can show auditors who was removed, when, and why." },
    ],
  },
  promises: {
    kicker: "How it helps",
    title: "Set the rules once. License Guard keeps your org clean.",
    sub: "It works the way a careful admin would, every week, without the spreadsheet.",
    items: [
      { icon: FileSearch, title: "Finds inactive users", body: "Flags anyone who hasn't logged in within the period you choose, like 60 or 90 days." },
      { icon: BellRing, title: "Warns them first", body: "Sends your own email template before anything happens. Logging in cancels the warning." },
      { icon: UserX, title: "Frees the license", body: "Deactivates on schedule and removes their permission sets, so the seat is ready to reuse." },
      { icon: Wallet, title: "Shows the savings", body: "Tracks licenses reclaimed and estimates what you save at your own license cost." },
    ],
  },
  tour: {
    kicker: "See it working",
    title: "Everything happens inside Salesforce.",
    sub: "No new logins, no data leaving your org. License Guard installs as an app and runs on Salesforce's own scheduler.",
    rows: [
      {
        kicker: "Reporting",
        title: "Know exactly what you're getting back.",
        body: "Licenses reclaimed by month, estimated annual savings, users currently flagged, and who logged back in after a warning.",
        points: ["Savings at your average license cost", "Action queue with every user's status", "Export for finance and renewals"],
        shot: { src: "/images/license-guard/reporting.webp", alt: "License Guard reporting with monthly reclaimed licenses and inactive user queue", url: "License Guard · Reporting" },
      },
      {
        kicker: "Rules & schedule",
        title: "Your policy, applied the same way every time.",
        body: "Choose the inactivity period, the warning period, which profiles it applies to, and who is always exempt. Preview the impact before you save.",
        points: ["Weekly, monthly or one-off runs", "Exemptions for executives, contractors and integrations", "Preview impact before anything changes"],
        shot: { src: "/images/license-guard/settings.webp", alt: "License Guard settings with inactivity period, warning email, schedule and exemptions", url: "License Guard · Settings" },
      },
    ],
    cta: { text: "Want to see what License Guard would find in your org? We'll run a free check in 30 minutes.", action: { label: "Book a free license check", href: CALL } },
  },
  modules: {
    kicker: "What's included",
    title: "Small app. Big savings.",
    sub: "Everything you need to keep licenses matched to the people who use them.",
    items: [
      { icon: SlidersHorizontal, title: "Flexible rules", body: "Inactivity period, batch size and profiles, all set in a simple admin screen." },
      { icon: BellRing, title: "Warning emails", body: "Your templates, your sender name, sent a set number of days before deactivation." },
      { icon: UserCheck, title: "Exemptions", body: "Keep executives, contractors, board members and integration users licensed." },
      { icon: CalendarClock, title: "Scheduling", body: "Run once, weekly or monthly, with a preview of the next run." },
      { icon: History, title: "Audit log", body: "Every warning, deactivation and failure recorded with the time and reason." },
      { icon: ShieldCheck, title: "Stays in Salesforce", body: "Built on Salesforce itself, with no outside services and no data leaving your org." },
    ],
  },
  steps: {
    kicker: "Getting started",
    title: "Live in an afternoon.",
    sub: "Most teams are set up in one sitting and see their first flagged users on the next run.",
    items: [
      { title: "Install", body: "Install License Guard from the AppExchange into a sandbox or production org." },
      { title: "Set your rules", body: "Choose the inactivity and warning periods, profiles and exemptions." },
      { title: "Preview", body: "See who would be warned and what you'd save, before anything changes." },
      { title: "Switch it on", body: "Schedule the run and let License Guard handle warnings, deactivations and the log." },
    ],
  },
  faqs: [
    { q: "How does License Guard decide someone is inactive?", a: "By their last login. You choose the period, such as 60 or 90 days, and which profiles the rule applies to." },
    { q: "Will people get a warning first?", a: "Yes. License Guard can email them with your template a set number of days before their license is removed. If they log in, the warning is cancelled." },
    { q: "Can I exclude certain users?", a: "Yes. Add exemptions for anyone who should always stay licensed, such as executives, contractors, board members or integration users." },
    { q: "Does it run inside Salesforce?", a: "Yes. It installs from the AppExchange and runs entirely inside your Salesforce org, with no data sent to outside services." },
    { q: "What happens to a deactivated user's records?", a: "Deactivation frees the license and removes their permission sets. The user record and its history stay in Salesforce, so you can reactivate them later if needed." },
    { q: "What does it cost?", a: "License Guard is free on the Salesforce AppExchange. If you'd like help setting it up or reviewing your wider license spend, our team can do that too." },
  ],
  form: {
    heading: "Get a free license check",
    sub: "Tell us roughly how many Salesforce licenses you have. We'll show you what License Guard would flag and what it could save.",
    submitLabel: "Request my free check",
  },
  final: {
    title: "Pay for the people",
    titleEm: "who actually log in.",
    lede: "Install License Guard, set your rules once, and watch unused licenses come back every week.",
    cta: { label: "Book a free license check", href: CALL },
    links: [
      { label: "Salesforce solutions", href: "/our-products#salesforce" },
      { label: "Cut CRM licensing costs", href: "/reduce-crm-licensing-costs" },
      { label: "Savings calculator", href: "/savings-calculator" },
    ],
  },
  sampleNote: "Screens show a sample Salesforce org with fictional people and figures.",
};
