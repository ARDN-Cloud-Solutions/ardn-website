import type { Metadata } from "next";
import AiConsultingPage from "./AiConsultingPage";
import { cityJsonLd } from "./jsonld";
import { CALL, CITY_LINKS, FAQ_AFTER, FAQ_COST, FAQ_RESULTS, FAQ_SYSTEMS, OFFER, PROOF, SITE, STEPS, THEME, TRUST, WHY } from "./shared";
import type { AiConsultingContent } from "./types";

// Florida city pages for AI consulting. Each city has its own framing,
// industries and use cases; engagement, proof and core FAQs are shared with
// the hub. Orlando is HQ (in-person workshops); other metros get "on-site
// sessions available by arrangement", never a promise of a local office.

type CityKey = "orlando" | "tampa" | "miami" | "jacksonville";

type City = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  hero: { title: string; titleEm: string; lede: string };
  shot: AiConsultingContent["hero"]["shot"];
  caption: string;
  intro: AiConsultingContent["intro"];
  industries: AiConsultingContent["industries"];
  localFaqs: { q: string; a: string }[];
  salesforceHref: string;
  final: { title: string; titleEm: string };
};

const SHOTS = {
  roadmap: { src: "/images/approach/roadmap.webp", alt: "Example AI roadmap with phased capabilities, stakeholders and outcomes", url: "AI assessment · Roadmap" },
  catalogue: { src: "/images/approach/process-catalogue.webp", alt: "Example process catalogue showing manual work, duplicate data entry and AI opportunities", url: "AI assessment · Process catalogue" },
  claims: { src: "/images/ai-forge/claims-intake-assistant.webp", alt: "Example AI build: a claims intake assistant with a review queue and auto-filled fields", url: "Example build · Claims intake" },
  invoices: { src: "/images/ai-forge/invoice-extraction.webp", alt: "Example AI build: invoice processing with extracted fields and approval status", url: "Example build · Invoice desk" },
};

const CITIES: Record<CityKey, City> = {
  orlando: {
    name: "Orlando",
    title: "AI Consulting Services in Orlando, FL | Ardn",
    description:
      "AI consulting services in Orlando from an AI consulting company headquartered here: AI strategy, implementation and support for hospitality, healthcare and professional services.",
    keywords: ["AI consulting services Orlando", "AI consulting company Orlando", "AI implementation Orlando", "AI consultant Orlando", "AI consulting Orlando", "AI consulting services Orlando FL", "AI implementation Orlando", "AI automation Orlando", "AI consultant near me Orlando", "AI for hospitality Orlando"],
    hero: {
      title: "AI consulting services in Orlando,",
      titleEm: "from a team that's based here.",
      lede: "Ardn is headquartered in Orlando. We sit down with your team, find the work AI can reliably take over, build it into the systems you already use, and run it for you after launch.",
    },
    shot: SHOTS.catalogue,
    caption: "Example process catalogue with a fictional company and figures.",
    intro: {
      kicker: "Local to Orlando",
      title: "Hiring an AI consultant in Orlando? We're a short drive away.",
      sub: "Orlando is home. That means workshops at your office, a team on your time zone, and people you can meet before you sign anything.",
      items: [
        { label: "Headquartered here", text: "Ardn's team is based in Orlando, Florida, with 30+ years of technology and consulting experience." },
        { label: "In-person workshops", text: "Assessment and roadmap workshops can run at your office with the people who do the work." },
        { label: "Same time zone", text: "Eastern Time, so reviews, demos and support happen in your business hours." },
        { label: "Fast replies", text: "We reply to every inquiry within 4 business hours, and the first 30-minute call is free." },
      ],
      links: [
        { label: "Salesforce consulting in Orlando", href: "/salesforce-consulting-orlando" },
        { label: "AI consulting across the US", href: "/ai-consulting" },
      ],
    },
    industries: {
      kicker: "Where AI helps Orlando businesses",
      title: "Use cases for the industries that run Central Florida.",
      sub: "Hospitality and tourism, healthcare and professional services make up much of the Orlando economy. Here's where we'd look first in each.",
      items: [
        {
          name: "Hospitality & tourism",
          why: "High volumes of guest questions, group inquiries and reviews, often after hours.",
          uses: [
            { title: "Guest messaging assistant", body: "Answers questions about bookings, policies and amenities from your own information, around the clock, and hands off to staff when needed." },
            { title: "Group and event inquiry intake", body: "Reads incoming inquiries, captures dates, headcounts and requirements, and drafts a proposal for your sales team to review." },
            { title: "Review and feedback triage", body: "Sorts reviews and surveys by theme and urgency, flags service issues, and drafts responses for approval." },
          ],
        },
        {
          name: "Healthcare",
          why: "Front-office paperwork, referrals and scheduling take staff time away from patients.",
          uses: [
            { title: "Referral and intake document processing", body: "Reads referrals, intake forms and insurance cards and fills your system, with staff confirming before anything is saved." },
            { title: "Scheduling and reminders assistant", body: "Handles routine rescheduling and reminder replies by text, and routes anything clinical to your team." },
            { title: "Staff policy assistant", body: "Answers internal questions from your own procedures and policies, so new staff stop waiting on a supervisor. HIPAA requirements are scoped in from day one." },
          ],
        },
        {
          name: "Professional services",
          why: "Senior people spend hours on proposals, document review and CRM updates.",
          uses: [
            { title: "Proposal and SOW drafting", body: "Builds first drafts from your past proposals, rate structures and the client's request, for a partner to edit." },
            { title: "Contract and document review", body: "Pulls key terms, dates and obligations out of contracts and flags anything unusual for a person to check." },
            { title: "Meeting notes to CRM", body: "Turns call notes into CRM updates, follow-up tasks and client emails, so the pipeline stays current." },
          ],
        },
      ],
    },
    localFaqs: [
      { q: "Is Ardn actually based in Orlando?", a: "Yes. Ardn Cloud Solutions is headquartered in Orlando, Florida, and our US team has 30+ years of technology and consulting experience. Orlando businesses can meet us in person, and assessment workshops can run at your office." },
      { q: "Can you run an AI workshop with our team in person?", a: "Yes. For Orlando-area clients, the assessment and roadmap workshops can happen on-site with the people who do the work day to day, which is usually where the best AI opportunities come from." },
    ],
    salesforceHref: "/salesforce-consulting-orlando",
    final: { title: "Talk to an AI consultant", titleEm: "in Orlando." },
  },
  tampa: {
    name: "Tampa",
    title: "AI Consulting Services in Tampa, FL | Ardn",
    description:
      "AI consulting services in Tampa for financial services, insurance and healthcare: AI strategy, implementation and a managed service from a Florida AI consulting company.",
    keywords: ["AI consulting services Tampa", "AI consulting company Tampa", "AI consultant Tampa", "AI consulting Tampa", "AI consulting services Tampa FL", "AI implementation Tampa", "AI for insurance Tampa", "AI for financial services Tampa", "AI consultant near me Tampa"],
    hero: {
      title: "AI consulting services in Tampa",
      titleEm: "for teams buried in documents and requests.",
      lede: "Tampa Bay runs on financial services, insurance and healthcare, and all three run on paperwork. We find the work AI can reliably take over, build it with people in control, and run it for you.",
    },
    shot: SHOTS.claims,
    caption: "Example build with sample data. Yours is designed around your workflow.",
    intro: {
      kicker: "Serving Tampa Bay",
      title: "Hiring an AI consultant in Tampa? We're a Florida team up I-4.",
      sub: "We're based in Orlando and work with Tampa Bay businesses remotely and in person. On-site sessions are available by arrangement.",
      items: [
        { label: "Florida-based", text: "A US team headquartered in Orlando with 30+ years of technology and consulting experience." },
        { label: "On-site sessions available", text: "Workshops at your Tampa office can be arranged for assessments and roadmap reviews." },
        { label: "Built for regulated work", text: "Review steps, audit trails and clear limits on what the AI decides on its own." },
        { label: "Fast replies", text: "We reply within 4 business hours, and the first 30-minute call is free." },
      ],
      links: [
        { label: "Salesforce consulting in Tampa", href: "/salesforce-consulting-tampa" },
        { label: "AI consulting across the US", href: "/ai-consulting" },
      ],
    },
    industries: {
      kicker: "Where AI helps Tampa businesses",
      title: "Use cases for Tampa Bay's biggest industries.",
      sub: "Financial services, insurance and healthcare share a pattern: high volumes of documents and requests that need accuracy and a clear audit trail.",
      items: [
        {
          name: "Financial services",
          why: "Applications, client servicing and compliance reviews all depend on reading documents carefully.",
          uses: [
            { title: "Application document processing", body: "Reads statements, IDs and supporting documents, checks them against your requirements, and lists what's missing." },
            { title: "Client meeting prep", body: "Summarizes account history, recent activity and open items from your CRM into a one-page brief before each meeting." },
            { title: "Compliance review queue", body: "Flags communications and files that need a compliance look, with the reason, so reviewers spend time where it matters." },
          ],
        },
        {
          name: "Insurance",
          why: "Claims and submissions arrive in every format and every hour, and speed matters to customers.",
          uses: [
            { title: "Claims intake assistant", body: "Takes first notice of loss by chat, text or email, gathers the details and documents, and hands adjusters a ready file." },
            { title: "Submission intake for underwriting", body: "Reads applications, loss runs and supporting documents into structured data, so underwriters start with a complete picture." },
            { title: "Policy service answers", body: "Answers routine coverage and billing questions from the policy documents, and routes anything judgment-based to a person." },
          ],
        },
        {
          name: "Healthcare",
          why: "Revenue cycle and front-office work involve repetitive steps that are easy to get wrong.",
          uses: [
            { title: "Denial sorting and follow-up", body: "Groups claim denials by reason, drafts the next action for each, and tracks follow-up so nothing ages out." },
            { title: "Referral and intake processing", body: "Turns faxed and emailed referrals into complete records in your system, with staff confirming each one." },
            { title: "Staff procedures assistant", body: "Answers questions from your own SOPs and payer rules, so staff get consistent answers. HIPAA requirements are scoped in from day one." },
          ],
        },
      ],
    },
    localFaqs: [
      { q: "Do you work with Tampa Bay businesses in person?", a: "Yes. Ardn is based in Orlando, and we work with Tampa, St. Petersburg and Clearwater businesses remotely and in person. On-site sessions for assessments and roadmap workshops are available by arrangement." },
      { q: "Can AI be used safely in insurance and financial services?", a: "Yes, when it's designed for it. We build in people-in-the-loop review for regulated decisions, audit trails for what the AI did and why, and clear limits on what it can do on its own. Your compliance requirements are part of the scope from the first call." },
    ],
    salesforceHref: "/salesforce-consulting-tampa",
    final: { title: "Talk to an AI consultant", titleEm: "serving Tampa Bay." },
  },
  miami: {
    name: "Miami",
    title: "AI Consulting Services in Miami, FL | Ardn",
    description:
      "AI consulting services in Miami for hospitality, real estate and logistics, including AI assistants that serve customers in English and Spanish. Florida AI consulting company.",
    keywords: ["AI consulting services Miami", "AI consulting company Miami", "AI consultant Miami", "AI consulting Miami", "AI consulting services Miami FL", "AI implementation Miami", "Spanish AI chatbot Miami", "AI for real estate Miami", "AI consultant near me Miami"],
    hero: {
      title: "AI consulting services in Miami",
      titleEm: "for businesses that serve customers in two languages.",
      lede: "Hospitality, real estate and trade move fast in Miami, and many customers prefer Spanish. We build AI that answers, sorts and processes work in the language your customers use, then run it for you.",
    },
    shot: SHOTS.roadmap,
    caption: "Example roadmap with a fictional company and figures.",
    intro: {
      kicker: "Serving South Florida",
      title: "Hiring an AI consultant in Miami? We're a Florida team.",
      sub: "We're based in Orlando and work with Miami businesses remotely and in person. On-site sessions are available by arrangement.",
      items: [
        { label: "Florida-based", text: "A US team headquartered in Orlando with 30+ years of technology and consulting experience." },
        { label: "English and Spanish", text: "Assistants and automations designed to understand and reply in the language each customer writes in." },
        { label: "On-site sessions available", text: "Workshops at your Miami office can be arranged for assessments and roadmap reviews." },
        { label: "Fast replies", text: "We reply within 4 business hours, and the first 30-minute call is free." },
      ],
      links: [
        { label: "Salesforce consulting in Miami", href: "/salesforce-consulting-miami" },
        { label: "AI consulting across the US", href: "/ai-consulting" },
      ],
    },
    industries: {
      kicker: "Where AI helps Miami businesses",
      title: "Use cases for hospitality, real estate and trade.",
      sub: "Three of Miami's biggest industries, each with customers and partners who expect fast answers, often in Spanish.",
      items: [
        {
          name: "Hospitality",
          why: "Guests write at all hours, in more than one language, about the same handful of things.",
          uses: [
            { title: "Bilingual guest concierge", body: "Answers reservation, amenity and policy questions in English or Spanish from your own information, and hands off to staff when needed." },
            { title: "Event and group inquiries", body: "Captures dates, headcounts and requirements from inquiries and drafts a proposal for your team to send." },
            { title: "Demand and staffing signals", body: "Pulls bookings, events and history together into a plain-English weekly outlook for scheduling and purchasing." },
          ],
        },
        {
          name: "Real estate",
          why: "Leads go cold in minutes, and leases and contracts are long and detailed.",
          uses: [
            { title: "Lead response assistant", body: "Replies to listing inquiries day and night in English or Spanish, answers common questions and books showings on your agents' calendars." },
            { title: "Lease and contract abstraction", body: "Pulls rent, dates, renewal terms and obligations out of leases into a clean summary for review." },
            { title: "Maintenance request triage", body: "Sorts tenant requests by urgency and trade, asks for photos, and routes them to the right vendor." },
          ],
        },
        {
          name: "Logistics & trade",
          why: "Shipping documents, status questions and customs paperwork pile up for import and export teams.",
          uses: [
            { title: "Shipping document extraction", body: "Reads commercial invoices, bills of lading and packing lists into your system and flags mismatches." },
            { title: "Shipment status assistant", body: "Answers customers' where-is-my-shipment questions in English or Spanish from your tracking data." },
            { title: "Customs paperwork prep", body: "Assembles the data and documents a filing needs, ready for your broker or team to review and submit." },
          ],
        },
      ],
    },
    localFaqs: [
      { q: "Can your AI assistants work in Spanish?", a: "Yes. The assistants and automations we build can understand and reply in English or Spanish, matching the language each customer writes in, and use the same rules and handoffs either way. We test both languages with your team before launch." },
      { q: "Do you work with Miami businesses in person?", a: "Yes. Ardn is based in Orlando, and we work with Miami-Dade, Broward and Palm Beach businesses remotely and in person. On-site sessions for assessments and roadmap workshops are available by arrangement." },
    ],
    salesforceHref: "/salesforce-consulting-miami",
    final: { title: "Talk to an AI consultant", titleEm: "serving Miami." },
  },
  jacksonville: {
    name: "Jacksonville",
    title: "AI Consulting Services in Jacksonville, FL | Ardn",
    description:
      "AI consulting services in Jacksonville for logistics, financial services and healthcare: AI strategy, implementation and a managed service from a Florida AI consulting company.",
    keywords: ["AI consulting services Jacksonville", "AI consulting company Jacksonville", "AI consultant Jacksonville", "AI consulting Jacksonville", "AI consulting services Jacksonville FL", "AI implementation Jacksonville", "AI for logistics Jacksonville", "AI consultant near me Jacksonville"],
    hero: {
      title: "AI consulting services in Jacksonville",
      titleEm: "for teams that move freight, money and patients.",
      lede: "Jacksonville's logistics, financial services and healthcare companies all fight the same thing: work that arrives as emails and documents. We find what AI can take over, build it into your systems, and run it.",
    },
    shot: SHOTS.invoices,
    caption: "Example build with sample data. Yours is designed around your workflow.",
    intro: {
      kicker: "Serving Northeast Florida",
      title: "Hiring an AI consultant in Jacksonville? We're a Florida team.",
      sub: "We're based in Orlando and work with Jacksonville businesses remotely and in person. On-site sessions are available by arrangement.",
      items: [
        { label: "Florida-based", text: "A US team headquartered in Orlando with 30+ years of technology and consulting experience." },
        { label: "On-site sessions available", text: "Workshops at your Jacksonville office can be arranged for assessments and roadmap reviews." },
        { label: "Connected to your systems", text: "AI that reads from and writes to your TMS, CRM, ERP or practice systems." },
        { label: "Fast replies", text: "We reply within 4 business hours, and the first 30-minute call is free." },
      ],
      links: [
        { label: "Salesforce consulting in Jacksonville", href: "/salesforce-consulting-jacksonville" },
        { label: "AI consulting across the US", href: "/ai-consulting" },
      ],
    },
    industries: {
      kicker: "Where AI helps Jacksonville businesses",
      title: "Use cases for the industries that anchor the First Coast.",
      sub: "Logistics, financial services and healthcare all depend on fast, accurate handling of documents and requests.",
      items: [
        {
          name: "Logistics & transportation",
          why: "Load tenders, delivery paperwork and status calls eat dispatcher and back-office time.",
          uses: [
            { title: "Load tender and order intake", body: "Reads tenders and orders from email and attachments and creates loads in your TMS for a dispatcher to confirm." },
            { title: "Proof of delivery and freight bill audit", body: "Matches PODs, rate confirmations and invoices, and flags discrepancies before they're paid or billed." },
            { title: "Customer status assistant", body: "Answers where-is-my-load questions from your tracking data, so dispatchers stop fielding the same calls." },
          ],
        },
        {
          name: "Financial services",
          why: "Onboarding, servicing and reporting involve the same document checks over and over.",
          uses: [
            { title: "Onboarding document checks", body: "Reads identity and account documents, checks them against your requirements, and lists what's missing." },
            { title: "Internal policy assistant", body: "Answers staff questions from your own procedures and product rules, with a link to the source every time." },
            { title: "Report narratives", body: "Drafts the written commentary for recurring reports from your data, for an analyst to review and finalize." },
          ],
        },
        {
          name: "Healthcare",
          why: "Scheduling, referrals and provider paperwork stretch administrative teams thin.",
          uses: [
            { title: "Referral and scheduling intake", body: "Turns referrals into complete records and proposed appointments, with staff confirming each one." },
            { title: "Provider credentialing paperwork", body: "Gathers and checks the documents credentialing needs, tracks expirations and drafts reminders." },
            { title: "Patient FAQ assistant", body: "Answers common questions about locations, preparation and billing from your own information. HIPAA requirements are scoped in from day one." },
          ],
        },
      ],
    },
    localFaqs: [
      { q: "Do you work with Jacksonville businesses in person?", a: "Yes. Ardn is based in Orlando, and we work with Jacksonville and First Coast businesses remotely and in person. On-site sessions for assessments and roadmap workshops are available by arrangement." },
      { q: "Can AI connect to our TMS or logistics software?", a: "In most cases, yes. We connect AI to transportation management, CRM, accounting and document systems through their APIs or integrations, and the assessment confirms what's possible with your specific systems before you commit to a build." },
    ],
    salesforceHref: "/salesforce-consulting-jacksonville",
    final: { title: "Talk to an AI consultant", titleEm: "serving Jacksonville." },
  },
};

const pathOf = (key: CityKey) => `/ai-consulting-${key}`;

export function cityMetadata(key: CityKey): Metadata {
  const c = CITIES[key];
  const url = `${SITE}${pathOf(key)}`;
  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: url, languages: { "en-US": url, "x-default": url } },
    openGraph: {
      title: c.title,
      description: c.description,
      url,
      siteName: "Ardn Cloud Solutions",
      images: [{ url: "/images/ardn-share.jpg", width: 1200, height: 630, alt: `AI consulting in ${c.name}, Florida by Ardn Cloud Solutions` }],
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: c.title, description: c.description, site: "@ardn_cloud_sol", images: ["/images/ardn-share.jpg"] },
  };
}

function cityContent(key: CityKey): AiConsultingContent {
  const c = CITIES[key];
  return {
    slug: `ai-consulting-${key}`,
    theme: THEME,
    hero: {
      eyebrow: `AI consulting company · ${c.name}, FL`,
      ...c.hero,
      primaryCta: { label: "Book a free 30-min AI assessment call", href: CALL },
      secondaryCta: { label: "See use cases", href: "#use-cases" },
      proof: ["Fixed quote before any build", key === "orlando" ? "In-person workshops in Orlando" : "On-site sessions available", "Run for you after launch"],
      shot: c.shot,
      caption: c.caption,
    },
    trust: TRUST,
    intro: c.intro,
    industries: c.industries,
    offer: OFFER,
    steps: STEPS,
    proof: PROOF,
    why: WHY,
    faqs: [...c.localFaqs, FAQ_COST, FAQ_SYSTEMS, FAQ_RESULTS, FAQ_AFTER],
    related: {
      kicker: "Related",
      title: `More for ${c.name} businesses`,
      links: [
        { label: "AI consulting services across the US", href: "/ai-consulting" },
        { label: `Salesforce consulting in ${c.name}`, href: c.salesforceHref },
        { label: "How much does AI consulting cost?", href: "/ai-consulting/cost" },
        { label: "AI app development in Florida", href: "/ai-app-development-florida" },
        ...CITY_LINKS.filter((l) => l.href !== pathOf(key)),
      ],
    },
    form: {
      heading: `Tell us about your ${c.name} business`,
      sub: "A sentence or two about where the work piles up is plenty. We'll reply within 4 business hours to set up your free 30-minute call.",
      submitLabel: "Request my free assessment call",
      messageLabel: "What would you most like AI to take off your team's plate?",
    },
    final: {
      ...c.final,
      lede: "Book a free 30-minute AI assessment call. We'll talk through where AI fits in your business and follow up with a fixed quote for the first phase.",
      cta: { label: "Book a free 30-min AI assessment call", href: CALL },
    },
    sampleNote: "Use cases are examples of what we build; each project is scoped to your workflow.",
  };
}

export function CityPage({ city: key }: { city: CityKey }) {
  const c = CITIES[key];
  const content = cityContent(key);
  const jsonLd = cityJsonLd(content, {
    path: pathOf(key),
    city: c.name,
    name: c.title.replace(/ \| Ardn$/, ""),
    description: c.description,
    image: c.shot.src,
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AiConsultingPage content={content} />
    </>
  );
}
