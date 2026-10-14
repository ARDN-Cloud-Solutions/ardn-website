// Buyer's guide: CRM for roofing & home improvement contractors without
// per-seat pricing. The core of the guide is each vendor's pricing model, read
// from its own pricing page in October 2026 (see sources on each vendor).
// Ardn CRM facts come only from /construction-crm: priced by modules and
// locations, never per seat; no dollar figures.

export const URL = "https://ardncloudsolutions.com/buyers-guide/contractor-crm-without-per-seat-pricing";
export const TITLE = "Best CRM for Roofing & Home Improvement Contractors Without Per-Seat Pricing (2026)";
export const DATE_PUBLISHED = "2026-10-14T00:00:00-04:00";
export const DATE_MODIFIED = "2026-10-14T00:00:00-04:00";

const NOT_STATED = "Not detailed on the vendor pages we reviewed";

export interface Vendor {
  id: string;
  name: string;
  model: string;
  bestFit: string;
  summary: string;
  facts: string[];
  watch: string;
  pricing: string;
  sources: { label: string; href: string }[];
}

export const VENDORS: Vendor[] = [
  {
    id: "ardn-crm",
    name: "Ardn CRM",
    model: "Modules and locations, never per seat",
    bestFit:
      "Best fit if your work is a mix of sales and service, you want the whole office and every crew lead in the CRM, and you want your old CRM's data moved for you.",
    summary:
      "Ardn CRM is a CRM built around jobs, work orders, sites, service requests and bookings for roofing, home improvement, residential and commercial general contractors, and real estate.",
    facts: [
      "\"Priced by modules and locations, never per seat.\" Adding office staff or crew leads does not change the bill. There is a one-time setup fee and an optional managed service.",
      "Pipeline and deals with stages, a shared board and deal pages with a timeline of every touch.",
      "Quotes built from your product list, versioned, and converted to a job in one click.",
      "Jobs and work orders; a dispatch board of crews and work orders by day and location.",
      "Service desk with SLA clocks by priority, automatic escalation and customer ratings on close.",
      "Accounts and sites with lifetime value; reports on conversion funnel, revenue by source and service performance; several branches or markets with reporting rolled up or by location.",
      "\"Ardn migrates your accounts, contacts, open deals, job history and notes from the previous CRM as part of setup.\"",
    ],
    watch:
      "Ardn CRM does not include roof measurement reports, and Ardn does not publish prices on its site, so you'll need a quote. If self-serve sign-up with a published price is a must, look at Roofr, Projul or Contractor Foreman.",
    pricing: "Pricing not published — quote-based, by modules and locations",
    sources: [{ label: "Ardn CRM for construction", href: "https://ardncloudsolutions.com/construction-crm" }],
  },
  {
    id: "roofr",
    name: "Roofr",
    model: "Flat monthly plans, unlimited users",
    bestFit: "Best fit for roofing companies that want measurements, proposals and a job board with a published, flat price.",
    summary: "Roofr is roofing software that combines roof measurement reports, a CRM job board, proposals, invoicing and payments.",
    facts: [
      "Its pricing FAQ says: \"Roofr does not charge per seat.\" Each plan card lists unlimited users.",
      "Plans billed monthly: Starter $0/mo, Measure+ $109/mo, Essentials $249/mo and Scale $349/mo; Essentials is $209/mo and Scale $299/mo billed yearly.",
      "Measurement reports are paid per report: $19 on Starter and $13 on paid plans.",
      "Scale adds 7 customizable job boards, crew management, a performance dashboard, profit margins and job costs, QuickBooks integration and role-based permissions.",
      "Add-ons include Instant Estimator, Roofr Sites and an AI Receptionist.",
    ],
    watch: "Measurement reports and add-ons are charged on top of the plan, and a service desk with SLA tracking was not detailed on the pages we reviewed.",
    pricing: "Published: $0–$349/mo billed monthly, no per-seat charge",
    sources: [
      { label: "Roofr pricing", href: "https://roofr.com/pricing" },
      { label: "roofr.com", href: "https://roofr.com/" },
    ],
  },
  {
    id: "buildertrend",
    name: "Buildertrend",
    model: "Custom quote, unlimited users",
    bestFit: "Best fit for home builders and remodelers who want lead, project, financial and client management in one subscription.",
    summary: "Buildertrend is construction management software for builders and remodelers.",
    facts: [
      "Subscriptions include unlimited users, all core features, onboarding and support.",
      "Pricing is a custom quote based on builder type, annual revenue and business needs.",
      "Every plan includes lead, project, financial and client management.",
    ],
    watch: "Prices are not published, and the quote depends on annual revenue rather than headcount.",
    pricing: "Pricing not published — quote-based (unlimited users)",
    sources: [
      { label: "Buildertrend pricing", href: "https://buildertrend.com/pricing/" },
      { label: "Buildertrend software pricing", href: "https://buildertrend.com/construction-software-pricing/" },
    ],
  },
  {
    id: "contractor-foreman",
    name: "Contractor Foreman",
    model: "Tiers by user count; flat Unlimited tier",
    bestFit: "Best fit for small to mid-size contractors who want low published prices and can move to the Unlimited tier as they grow.",
    summary: "Contractor Foreman is construction management software covering projects, estimates, scheduling, time cards and documents.",
    facts: [
      "Its FAQ says: \"The fee listed on the website is the fee for the company as a whole.\"",
      "Billed annually: Basic $49/mo (1 user), Standard $105/mo (up to 3 users), Plus $166/mo (up to 8), Pro $221/mo (up to 15) and Unlimited $332/mo (unlimited users).",
      "Billed monthly: Standard $139/mo, Plus $199/mo, Pro $279/mo and Unlimited $399/mo.",
      "Includes scheduling, work orders, estimates, invoicing, change orders, crew scheduling and time cards; integrations include QuickBooks, Stripe, Zapier, Angi Leads and CompanyCam.",
      "Free setup and implementation on Pro and Unlimited.",
    ],
    watch: "Below the Unlimited tier the price steps up as you pass each plan's user cap.",
    pricing: "Published: $49–$399/mo; user caps below the Unlimited tier",
    sources: [{ label: "Contractor Foreman pricing", href: "https://contractorforeman.com/pricing/" }],
  },
  {
    id: "projul",
    name: "Projul",
    model: "Flat tiers with user caps; unlimited on Pro",
    bestFit: "Best fit for contractors who want published flat pricing for CRM, estimating, scheduling and job costing in one tool.",
    summary: "Projul is construction management software for general, specialty and commercial contractors, home builders and remodelers.",
    facts: [
      "Billed annually: Starter $199/mo (up to 3 users), Core $399/mo (up to 10), Core+ $599/mo (up to 20) and Pro $1,199/mo (unlimited users). Billed monthly: $249, $529, $799 and $1,599.",
      "Starter covers lead management, estimating, invoicing and scheduling; Core adds CRM, e-signatures and lead capture and payment processing; Core+ adds job costing, progress billing and QuickBooks Online.",
      "Pro adds Projul AI Connect, field takeoffs, daily logs and GPS geofencing.",
      "Projul says teams typically start using it within one week.",
    ],
    watch: "Each tier caps users until Pro, so a team that grows past 20 users jumps to the top tier.",
    pricing: "Published: $199–$1,599/mo; unlimited users on Pro",
    sources: [
      { label: "Projul pricing", href: "https://projul.com/pricing/" },
      { label: "projul.com", href: "https://projul.com/" },
    ],
  },
  {
    id: "quoteiq",
    name: "QuoteIQ",
    model: "Tiers with user allowances, plus $25 per extra user",
    bestFit: "Best fit for small home service crews that want low-cost quoting, scheduling and invoicing with satellite measurements.",
    summary: "QuoteIQ is field service and CRM software for home service contractors across 50+ trades, including roofing.",
    facts: [
      "Five monthly plans: Essentials $29.99 (1 user), Beginner $99.99 (2 users), Pro $199.99 (4 users), Elite $299.99 (10 users) and Max $699.99 (20 users).",
      "\"Extra users: $25/per-additional-user/mo on every plan.\" Yearly billing saves two months.",
      "Estimates, scheduling and dispatch with route optimization, invoicing and payments, MapMeasure Pro satellite measurements and AI tools; QuickBooks Online integration.",
      "14-day free trial on every plan.",
    ],
    watch: "Users beyond the plan allowance are billed per user, so this is partly per-seat pricing.",
    pricing: "Published: $29.99–$699.99/mo, then $25 per extra user",
    sources: [
      { label: "QuoteIQ pricing", href: "https://myquoteiq.com/pricing/" },
      { label: "myquoteiq.com", href: "https://myquoteiq.com/" },
    ],
  },
  {
    id: "jobnimbus",
    name: "JobNimbus",
    model: "Tiers by user count; prices on request",
    bestFit: "Best fit for roofing and exterior contractors who want a roofing-focused CRM with boards, estimates and an ecosystem of integrations.",
    summary: "JobNimbus is a CRM and business management platform for exterior contractors: roofing, siding, gutters, fencing, restoration and solar.",
    facts: [
      "\"JobNimbus pricing is based on the plan you choose, the number of users you need, and the features or add-ons that fit your business.\" Prices are not listed.",
      "Plans: Essentials (up to 3 users), Pro (up to 10), Premium (up to 19) and Enterprise (20+); multi-location support on Enterprise.",
      "Sales CRM, job boards, scheduling, work orders, estimates with SumoQuote proposals, invoicing and payments; EagleView aerial measurements and QuickBooks Online integrations.",
      "\"No required setup or onboarding fees\"; JobNimbus Scout (beta) AI assistant; 14-day free trial.",
    ],
    watch: "The price depends on the number of users, so adding people can move you to a higher plan.",
    pricing: "Pricing not published — quote-based, by plan and number of users",
    sources: [
      { label: "JobNimbus pricing", href: "https://www.jobnimbus.com/pricing" },
      { label: "jobnimbus.com", href: "https://www.jobnimbus.com/" },
    ],
  },
  {
    id: "acculynx",
    name: "AccuLynx",
    model: "Per user license, monthly",
    bestFit: "Best fit for established roofing companies that want deep roofing production, supplements and financial tracking and are comfortable with per-user licensing.",
    summary: "AccuLynx describes itself as all-in-one roofing software covering sales/CRM, production, finance and business management.",
    facts: [
      "\"Customers are charged a monthly fee for each user license.\" No long-term contracts.",
      "Two plans, Pro and Elite, priced by custom quote.",
      "Both plans include leads/CRM, aerial measurement ordering, AI-based automatic lead scoring, estimates and contracts, labor management and work orders, and supplier direct ordering.",
      "Elite adds multiple company location set-up, production calendar, supplement and permit tracking, and commissions.",
    ],
    watch: "This is per-seat pricing: every additional user adds a monthly license.",
    pricing: "Pricing not published — quote-based, monthly fee per user license",
    sources: [
      { label: "AccuLynx plan options", href: "https://acculynx.com/plan-options/" },
      { label: "AccuLynx pricing", href: "https://acculynx.com/pricing/" },
      { label: "AccuLynx: common questions", href: "https://acculynx.com/debunking-8-common-myths-about-acculynx-roofing-software/" },
    ],
  },
];

export const TABLE_COLUMNS = ["Pricing model", "Published price", "Roofing measurements", "Service / dispatch", "Migration help"] as const;

export const TABLE: { vendor: string; cells: string[] }[] = [
  { vendor: "Ardn CRM", cells: ["Modules + locations, never per seat", "Not published", "Not included", "Service desk with SLA clocks; dispatch board", "Ardn migrates your old CRM"] },
  { vendor: "Roofr", cells: ["Flat plans, unlimited users", "$0–$349/mo", "Reports $13–$19 each", "Crew management (Scale)", "Onboarding and setup at no extra charge (Essentials, Scale)"] },
  { vendor: "Buildertrend", cells: ["Custom quote, unlimited users", "Not published", NOT_STATED, NOT_STATED, "Onboarding included"] },
  { vendor: "Contractor Foreman", cells: ["Tiers by user cap; flat Unlimited", "$49–$399/mo", NOT_STATED, "Work orders, crew scheduling", "Free setup on Pro / Unlimited"] },
  { vendor: "Projul", cells: ["Flat tiers with user caps; unlimited on Pro", "$199–$1,599/mo", "Not listed (field takeoffs on Pro)", "Drag-and-drop crew scheduling", "Typically live within a week"] },
  { vendor: "QuoteIQ", cells: ["Tiers + $25 per extra user", "$29.99–$699.99/mo", "MapMeasure Pro (satellite)", "Scheduling, dispatch, route optimization", NOT_STATED] },
  { vendor: "JobNimbus", cells: ["Tiers by user count", "Not published", "EagleView integration", "Scheduling, work orders", "No required onboarding fees"] },
  { vendor: "AccuLynx", cells: ["Monthly fee per user license", "Not published", "Aerial measurement ordering", "Work orders; production calendar (Elite)", "Guided setup"] },
];

export const CRITERIA: { title: string; body: string }[] = [
  { title: "Pricing model", body: "Per user, tiers capped by user count, flat with unlimited users, or priced by modules and locations. This decides whether adding a crew lead or an office hire changes your bill." },
  { title: "Pipeline and quotes", body: "Lead capture, stages, proposals or quotes from your own price list, e-signature, and how a signed quote turns into a job." },
  { title: "Job management", body: "Jobs, work orders, change orders, job costing and the status the office and field both see." },
  { title: "Scheduling and dispatch", body: "A board of crews by day, drag-and-drop scheduling, and what the crew sees on their phone." },
  { title: "Service desk", body: "Warranty calls and service requests with an owner, a due time and escalation, so repeat customers aren't lost after the job closes." },
  { title: "Integrations", body: "QuickBooks, payments, suppliers and measurement providers. Check which tier unlocks each integration." },
  { title: "Data migration help", body: "Who moves your contacts, open deals and job history from the old system, and whether that costs extra." },
  { title: "Roofing-specific features", body: "Roof measurement reports, material ordering and supplements. Only some vendors include them, and reports are often charged per report." },
];

export const HOW_TO_CHOOSE: { if: string; then: string }[] = [
  { if: "headcount must never change the bill", then: "shortlist Roofr (flat, unlimited users), Buildertrend (unlimited users, custom quote) and Ardn CRM (modules and locations), or the top tiers of Contractor Foreman (Unlimited) and Projul (Pro)." },
  { if: "you're a roofer who lives on measurement reports and proposals", then: "start with Roofr, JobNimbus or AccuLynx, and check how each charges for reports and users." },
  { if: "you're a small crew that wants a low published price today", then: "look at QuoteIQ and Contractor Foreman, and work out what the bill becomes when you add people." },
  { if: "service calls, warranty work and dispatch matter as much as new sales, or you run several locations", then: "shortlist Ardn CRM and compare it with JobNimbus Enterprise and AccuLynx Elite on multi-location support." },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the best CRM for a roofing or home improvement contractor that doesn't charge per seat?",
    a: "On the vendors' own pricing pages, Roofr says it does not charge per seat and lists unlimited users on every plan, Buildertrend includes unlimited users in a custom-quoted subscription, and Ardn CRM is priced by modules and locations, never per seat. Contractor Foreman (Unlimited) and Projul (Pro) have flat top tiers with unlimited users. Pick Roofr if measurement reports and proposals are the core, Buildertrend for builders and remodelers, and Ardn CRM if service, dispatch and several locations matter as much as sales.",
  },
  {
    q: "Which contractor CRMs charge per user?",
    a: "AccuLynx says customers are charged a monthly fee for each user license. QuoteIQ includes a user allowance in each plan and charges $25 per additional user per month. JobNimbus prices by plan and number of users, and Contractor Foreman and Projul cap users on their lower tiers.",
  },
  {
    q: "Does Ardn CRM charge per seat?",
    a: "No. Ardn CRM is priced by the modules you turn on and the locations you run, never per seat, with a one-time setup fee and an optional managed service. Ardn does not publish prices on its site; ask for a quote.",
  },
  {
    q: "Which roofing CRMs include roof measurements?",
    a: "Roofr sells measurement reports ($19 on Starter, $13 on paid plans). AccuLynx includes aerial measurement ordering on its plans, JobNimbus integrates with EagleView, and QuoteIQ includes MapMeasure Pro satellite measurements. Ardn CRM does not include roof measurement reports.",
  },
  {
    q: "Will the vendor move my data from my current CRM?",
    a: "Ardn migrates accounts, contacts, open deals, job history and notes as part of setup. JobNimbus says there are no required setup or onboarding fees, Contractor Foreman includes free setup and implementation on Pro and Unlimited, and Buildertrend includes onboarding. Ask each vendor exactly which records they move and whether it costs extra.",
  },
];
