// The page under the hero for each product funnel: proof bullets, the
// screens (scroll stage), the apps, the video, how it works, the FAQ and the
// closing call to action. Wherever possible the copy is READ from the live
// product pages' own data (golf-club-management-software/content.ts and
// faqs.ts, construction-crm/content.ts), so it cannot drift from what the
// site says. Hand-written lines carry their source: see productHooks.ts for
// the source keys. No prices, no client names, no invented numbers.

import { MODULES, STEPS as CS_STEPS } from "@/app/golf-club-management-software/content";
import { FAQS as CS_FAQS } from "@/app/golf-club-management-software/faqs";
import { CONSTRUCTION_CRM, FAQS as CRM_FAQS } from "@/app/construction-crm/content";
import { VIDEOS, type VideoMeta } from "@/components/media/videos";
import type { FunnelId } from "@/lib/funnels/types";
import type { App, AppIcon, Faq, Platform } from "./hooks";

export type ProductPage = {
  funnel: Exclude<FunnelId, "ardn-ai-consulting">;
  proof: string[];
  /** Small "who it fits" line under the proof bullets. */
  fit?: string;
  stage: { kicker: string; title: string; intro: string; footnote?: string; platforms: Platform[] };
  apps: { kicker: string; title: string; intro: string; items: App[]; cta: string };
  video: { kicker: string; title: string; sub: string; meta: VideoMeta };
  steps: { title: string; items: { title: string; body: string }[] };
  faqs: Faq[];
  final: { title: string; lede: string; cta: string };
};

// ── Club Steward ───────────────────────────────────────────────────────────

const GOLF = (f: string) => `/images/golf/${f}.webp`;
const GC = "/golf-club-management-software";

/** An app card straight from the live MODULES list: its title, one-liner and first two points. */
function csApp(slug: string, icon: AppIcon, img: string, alt: string, opts: { tag?: string; points?: [string, string] } = {}): App {
  const m = MODULES.find((x) => x.slug === slug);
  if (!m) throw new Error(`Club Steward module ${slug} not found`);
  const points = opts.points ?? ([m.points?.[0], m.points?.[1]] as [string, string]);
  if (!points[0] || !points[1]) throw new Error(`Club Steward module ${slug} needs two points`);
  return { name: m.title, benefit: m.short, points, icon, src: GOLF(img), alt, tag: opts.tag };
}

// The FAQ as published, minus "What about point of sale and court booking?"
// (it still calls POS "planned" while the same page lists the Point of Sale
// app) and the security answer (it says 400+ permissions where the page says
// 550+). Neither contradiction is ours to resolve on an ad page.
const CS_FAQ_SKIP = ["What about point of sale and court booking?", "How is our data kept separate and secure?"];

export const CLUB_PAGE: ProductPage = {
  funnel: "club-steward",
  proof: [
    "One member record shared by every module and every club", // [GC] STATS
    "Built for multi-club operators; a single club runs on exactly the same platform", // [GC] PROOF + FAQ "Who is Club Steward built for?"
    "Run for you as a managed service by a US-based team, with a 4-hour response SLA", // [GC] SWITCH
  ],
  stage: {
    kicker: "See it run",
    title: "Real screens from a sample multi-club portfolio.", // [GC] hero caption
    intro: "The corporate view, the tee sheet, online join and the membership sales desk, from the product itself.",
    footnote: "Screens show a sample club with fictional people and figures.", // [GC] video footnote
    platforms: [
      {
        name: "The corporate view",
        audience: "Built for the portfolio", // [GC] #multi-club kicker
        outcome: "One corporate view. Every club, every region, every GM.", // [GC] #multi-club h2
        points: [
          // [GC] #multi-club ticks
          "Every club keeps its own branded website, settings and books, consolidated when you need them",
          "Benefits and reciprocal access capped per club, per network of clubs, or both",
          "New clubs stood up from a template club, so rollout is a repeatable process",
        ],
        src: GOLF("corporate-dashboard"),
        alt: "Club Steward corporate dashboard comparing every club side by side: inquiries, new members, conversion, SLA compliance and pipeline value",
        width: 2880,
        height: 1800,
        href: `${GC}#multi-club`,
        linkLabel: "See the multi-club view",
        tone: 1,
      },
      {
        name: "Tee sheet & carts",
        audience: "Golf operations",
        outcome: "A full tee sheet, with the member's allowance live while booking.", // [GCF] TOUR
        points: ["Members-only windows and holds", "Suspended members refused automatically", "Pro-shop items pre-ordered to the tee time"], // [GCF] TOUR
        src: GOLF("tee-sheet"),
        alt: "Day tee sheet for a course with booked groups and open times",
        width: 2880,
        height: 1800,
        href: `${GC}/features#tee-times`,
        linkLabel: "See Tee-Times in detail",
        tone: 2,
      },
      {
        name: "Club websites & online join",
        audience: "Membership growth",
        outcome: "From the website to a signed, paid membership, without a phone call.", // [GCF] TOUR
        points: ["Plan, household, dues & add-ons, sign, autopay, pay", "Prorated first period and promotions", "Old web addresses redirect — rankings carry over"], // [GCF] TOUR
        src: GOLF("online-join-plans"),
        alt: "Six-step online join showing membership categories, what each plan includes, and director-sold plans",
        width: 2880,
        height: 1800,
        href: `${GC}/features#website-marketing`,
        linkLabel: "See Website & Marketing",
        tone: 3,
      },
      {
        name: "Membership sales desk",
        audience: "Membership sales",
        outcome: "A real sales desk, inside the system that runs the club.", // [GCF] TOUR
        points: ["Pipeline by stage with guidance at every stage", "Tour board and nurture follow-ups", "“Present to Customer” tablet checkout"], // [GCF] TOUR
        src: GOLF("sales-pipeline"),
        alt: "Membership sales pipeline with opportunities by stage",
        width: 2880,
        height: 1800,
        href: `${GC}/features#membership-sales`,
        linkLabel: "See Membership Sales",
        tone: 4,
      },
    ],
  },
  apps: {
    kicker: "What it runs",
    title: "Every department, one login.", // [GC] #apps
    intro: "Start with the core, Membership Sales and the Members App, then add the apps each club needs. Every app switches on or off per club.", // [GC] #apps
    cta: "Tell us what you want to fix",
    items: [
      csApp("membership-sales", "crm", "sales-pipeline", "Membership sales pipeline with opportunities by stage", { tag: "Core" }),
      csApp("members-app", "phone", "member-home", "Member portal home with digital membership card, plan details and benefits", { tag: "Core" }),
      csApp("tee-times", "golf", "tee-sheet", "Day tee sheet for a course with booked groups and open times"),
      csApp("point-of-sale", "pos", "pos-register", "Point of Sale: end-of-day close-out by outlet"),
      csApp("events-catering", "events", "events-plan", "Events & Catering: planning a private event"),
      csApp("billing-dues", "billing", "member-billing", "Member billing page with monthly dues, autopay status and last payment"),
      csApp("website-marketing", "marketing", "online-join-plans", "Online join showing membership categories and what each plan includes"),
      csApp("e-commerce", "shop", "pro-shop-tee-time", "Online pro shop section 'Ready at your tee time' with items to pre-order with a round", {
        // [GC] MODULES e-Commerce body: "An online pro shop with member prices and pre-orders waiting on the member's cart at tee time, with inventory tracked across clubs."
        points: ["Member prices in the online pro shop", "Inventory tracked across clubs"],
      }),
      csApp("member-service", "service", "service-console", "Service dashboard with chats answered by the assistant, chats handed to a person and cases"),
      csApp("hr", "hr", "people-hiring", "HR: a job posting with ranked applicants"),
      csApp("accounting", "books", "accounting-overview", "Accounting: revenue, expenses and budget with department results"),
    ],
  },
  video: {
    kicker: "Watch it run", // [GC] #video
    title: "Two minutes, the whole club.",
    sub: "The product on a sample club: the membership sales and members app core, then every add-on app. Captions are built in.",
    meta: VIDEOS.clubStewardOverview,
  },
  steps: { title: "How it works", items: CS_STEPS }, // [GCF] #rollout
  faqs: CS_FAQS.filter((f) => !CS_FAQ_SKIP.includes(f.q)),
  final: {
    title: "More clubs. Not more systems.", // [GC] final
    lede: "See one member record carry a prospect from your website to a signed, paid membership — and on to their first tee time.", // [GC] final
    cta: "Book a 30-minute walkthrough",
  },
};

// ── Ardn CRM ───────────────────────────────────────────────────────────────

const CRM_IMG = (f: string) => `/images/crm/${f}.webp`;
const crmModule = (title: string) => {
  const m = CONSTRUCTION_CRM.modules?.items.find((x) => x.title === title);
  if (!m) throw new Error(`Ardn CRM module ${title} not found`);
  return m.body;
};

const TONES: Platform["tone"][] = [1, 2, 3, 4];

export const CRM_PAGE: ProductPage = {
  funnel: "ardn-crm",
  proof: [
    "Priced by modules and locations, never per seat", // [CRM] hero lede
    "Ardn moves your accounts, contacts, open deals, job history and notes from the CRM you use now", // [CRM] FAQ "Can you move our data…"
    "US-based team, with a 4-hour response SLA", // [CRM] trust
  ],
  // [CRM] FAQ "Contractors whose work is a mix of sales and service…";
  // [AAI] /pricing "active crews, multiple jobs running, and an office team",
  // home + pricing tiers "for $10M–$50M operators", Enterprise "$50M+".
  fit: "Best fit: contractors whose work is a mix of sales and service, with crews in the field and an office team, doing $10M or more a year.",
  stage: {
    kicker: CONSTRUCTION_CRM.tour?.kicker ?? "See the product",
    title: CONSTRUCTION_CRM.tour?.title ?? "",
    intro: CONSTRUCTION_CRM.tour?.sub ?? "",
    footnote: CONSTRUCTION_CRM.sampleNote,
    platforms: (CONSTRUCTION_CRM.tour?.rows ?? []).slice(0, 4).map((r, i) => ({
      name: r.kicker,
      audience: "Ardn CRM",
      outcome: r.title,
      points: [r.points[0], r.points[1], r.points[2]] as [string, string, string],
      src: r.shot.src,
      alt: r.shot.alt,
      width: 2880,
      height: 1800,
      href: "/construction-crm#tour",
      linkLabel: "See it on the Ardn CRM page",
      tone: TONES[i],
    })),
  },
  apps: {
    kicker: CONSTRUCTION_CRM.modules?.kicker ?? "One platform",
    title: CONSTRUCTION_CRM.modules?.title ?? "",
    intro: CONSTRUCTION_CRM.modules?.sub ?? "",
    cta: "Tell us what you need",
    // Bodies from [CRM] modules; points from [CRM] tour, gallery and account sections.
    items: [
      { name: "Pipeline & deals", benefit: crmModule("Pipeline & deals"), points: ["Stages you define", "Deal pages with a full timeline"], icon: "crm", src: CRM_IMG("pipeline"), alt: "Ardn CRM pipeline board with deals grouped by stage" },
      { name: "Quotes", benefit: crmModule("Quotes"), points: ["Line items from your catalog", "Accepted quote becomes a job instantly"], icon: "quote", src: CRM_IMG("quote"), alt: "Ardn CRM quote built from the product list with a convert-to-job action" },
      { name: "Jobs & work orders", benefit: crmModule("Jobs & work orders"), points: ["What is scheduled, in progress and done, by crew", "Assign from the board and the work order updates for the crew"], icon: "jobs", src: CRM_IMG("work-orders"), alt: "Ardn CRM work orders list" },
      { name: "Service desk", benefit: crmModule("Service desk"), points: ["SLA clocks by priority", "Automatic escalation, and customer ratings on close"], icon: "service", src: CRM_IMG("service-desk"), alt: "Ardn CRM service desk with open requests, SLA timers and priorities" },
      { name: "Dispatch & bookings", benefit: crmModule("Dispatch & bookings"), points: ["Crews and work orders by day", "Reassign by drag and drop"], icon: "dispatch", src: CRM_IMG("dispatch"), alt: "Ardn CRM dispatch board with crews and work orders scheduled by day" },
      { name: "Accounts & sites", benefit: crmModule("Accounts & sites"), points: ["Sites and contacts per account", "Lifetime value calculated for you"], icon: "accounts", src: CRM_IMG("account"), alt: "Ardn CRM account page with sites, contacts, jobs and lifetime value" },
      { name: "Reports", benefit: crmModule("Reports"), points: ["Conversion funnel and revenue by source", "Reporting rolled up or by location"], icon: "reports", src: CRM_IMG("reports"), alt: "Ardn CRM reports showing conversion funnel and revenue by source" },
    ],
  },
  video: {
    kicker: "Watch",
    title: CONSTRUCTION_CRM.videoLower?.title ?? "Grow your team, not your CRM bill.",
    sub: CONSTRUCTION_CRM.videoLower?.sub ?? "",
    meta: VIDEOS.crmGrowYourTeam,
  },
  steps: { title: CONSTRUCTION_CRM.steps?.title ?? "How it works", items: CONSTRUCTION_CRM.steps?.items ?? [] },
  faqs: CRM_FAQS,
  final: {
    title: `${CONSTRUCTION_CRM.final?.title ?? ""} ${CONSTRUCTION_CRM.final?.titleEm ?? ""}`.trim(),
    lede: CONSTRUCTION_CRM.final?.lede ?? "",
    cta: "Book a walkthrough",
  },
};
