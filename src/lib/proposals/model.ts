/**
 * One proposal = one JSON document, created and edited in /proposals/admin.
 * Everything a proposal page shows comes from here.
 */

export type Stat = { value: string; label: string };
export type Phase = { when: string; title: string; body: string; retires?: string };
export type Module = { key: string; name: string; core: boolean };
export type SystemRow = {
  id: string;
  name: string;
  does: string;
  group: string;
  kind: "SaaS" | "Homegrown" | "Licensed" | "Vendor" | "Other";
  /** "sunset" = Ardn proposes to retire it; "keep" = stays, integrated. */
  prop: "sunset" | "keep";
  /** Which module replaces it (module key); empty for "keep". */
  module: string;
  /** Yearly cost estimate ($), used until the viewer types their own. */
  estimate: number;
  /** First full year of savings after it retires. */
  start: number;
  why: string;
};
export type FitRow = {
  area: string;
  capability: string;
  current: string;
  feature: string;
  status: "fit" | "partial" | "gap" | "integrate" | "out";
  note: string;
  phase: string;
  video: string;
};
export type GapRow = { gap: string; how: string; phase: string };
/** Planned spend the client avoids by choosing the platform (one-time or multi-year). */
export type AvoidedRow = { label: string; amount: number; note: string };
export type RiskItem = { title: string; body: string };
export type CompareRow = { criterion: string; us: string; others: string[] };

export type Proposal = {
  slug: string;
  client: string;
  product: string;
  status: "draft" | "live";
  access: { domains: string[]; emails: string[] };
  hero: { eyebrow: string; headline: string; intro: string };
  stats: Stat[];
  sections: { aiFirst: boolean; whyArdn: boolean; aiSupport: boolean };
  /** Show yearly EBITDA improvement and months to payback as the first two big numbers. */
  leadWithRoi: boolean;
  /** One line under the big numbers, e.g. how this fits the owner's strategy. */
  strategic: string;
  /** Demo ids from the video library (src/content/proposals/videos.ts). */
  videos: string[];
  systems: SystemRow[];
  phases: Phase[];
  modules: Module[];
  pricing: {
    corePerLocation: number;
    addonPerLocation: number;
    locations: number;
    locationLabel: string;
    implementation: number;
    supportMonthly: number;
    /** Share of the platform fee billed in year 1 and year 2 (clubs go live in waves). */
    rampYear1: number;
    rampYear2: number;
    /** Yearly internal staff cost freed once homegrown systems retire. */
    staffFreed: number;
  };
  gaps: GapRow[];
  /** Capital and project spend the client no longer needs. Shown as the second bucket of value. */
  avoided: AvoidedRow[];
  /** Show the revenue-upside levers (retention, events, collections) on the plan page. */
  showUpside: boolean;
  /** One-page board memo at the top of the overview and full proposal. Empty points = written from the numbers. */
  memo: { enabled: boolean; title: string; ask: string; points: string[] };
  /** "What if Ardn disappears" and security answers. */
  risk: { enabled: boolean; title: string; items: RiskItem[] };
  /** Comparison against vendors the client already looked at. Blank cells show as "—". */
  compare: { enabled: boolean; title: string; competitors: string[]; rows: CompareRow[] };
  fitRows: FitRow[];
  nextSteps: string[];
  contact: { email: string; ctaLabel: string };
  firstYear: number;
  updatedAt?: string;
  updatedBy?: string;
};

export const FIRST_YEAR = new Date().getFullYear() + 1;

export const DEFAULT_RISK: RiskItem[] = [
  { title: "Source code in escrow", body: "The full platform source and build instructions sit with an independent escrow agent, released to you if Ardn stops operating or stops supporting the platform." },
  { title: "Your data, in a standard format, any time", body: "A complete export of your data in open formats (CSV, JSON, PDF for signed documents) on request and automatically every month. Nothing is locked in." },
  { title: "Uptime commitment with teeth", body: "99.9% monthly uptime for member-facing and billing services, with service credits when we miss it, written into the agreement." },
  { title: "A named team, not a queue", body: "The engineers and support staff assigned to your account are named in the agreement, with a US lead and a response time for every severity." },
  { title: "Payments and security", body: "Card payments run through a PCI Level 1 processor; card numbers never touch our systems. Every club's data is walled off in the database, every action is logged, and access is per club and per permission." },
  { title: "Written exit plan", body: "A documented, tested procedure to move you to another system: data export, document archive, and 90 days of parallel access after any termination." },
];

export const DEFAULT_COMPARE: CompareRow[] = [
  { criterion: "How it's priced", us: "Flat per location, unlimited staff; published here", others: ["Quote only, priced per module; customers report paying per license", "Quote only; one club reports about $20K up front plus about $21K a year in service fees", "Quote based, from about $299 a month per course; extra modules priced separately"] },
  { criterion: "Who runs it", us: "Ardn: hosting, upkeep, changes and support, one named team", others: ["Vendor hosts; your team configures; changes follow the vendor roadmap", "Vendor hosts; reviewers cite a complex implementation and ongoing service fees", "Vendor hosts; monthly updates driven by course feedback"] },
  { criterion: "Built for a multi-club operator", us: "Yes: benefits follow members to every club; corporate view across all clubs", others: ["Serves clubs of 20 to 20,000 members; cross-club member benefits not marketed", "1,000+ clubs on the platform; cross-club member benefits not marketed", "Multi-course operators supported; cross-club member benefits not marketed"] },
  { criterion: "Contracts and e-signature", us: "Built in, no DocuSign", others: ["Not marketed", "Not marketed", "Not marketed"] },
  { criterion: "AI", us: "Native; bring your own model (Copilot, Claude, others)", others: ["Not marketed", "Automation and real-time insights; AI not marketed", "Not marketed"] },
  { criterion: "Changes to fit you", us: "Built to your needs in weeks, as part of the fee", others: ["Reviewers: hard to make non-standard billing work", "Reviewers: documentation outdated or lacking", "Standard product; customization not marketed"] },
  { criterion: "Who owns the vendor", us: "Independent, US team in Orlando", others: ["Constellation Software (CSU.TO); 2,500+ clubs in 20 countries with Club Caddie", "Northstar Technologies, founded 2003", "Jonas / Constellation Software since 2020"] },
  { criterion: "What users say", us: "No public reviews yet; reference calls available", others: ["Comprehensive but dated; clunky (public forums)", "4.0 of 5 on 21 reviews; value for money 3.8", "4.8 of 5 on 29 reviews; value for money 4.9"] },
];

export function emptyProposal(slug = "", client = ""): Proposal {
  return {
    slug,
    client,
    product: "Club Steward",
    status: "draft",
    access: { domains: [], emails: [] },
    hero: {
      eyebrow: `A proposal for ${client || "[Client]"}`,
      headline: "One platform. Every location.",
      intro: "Replace the patchwork of systems behind your members, one phase at a time.",
    },
    stats: [
      { value: "", label: "" },
      { value: "", label: "" },
      { value: "", label: "" },
    ],
    sections: { aiFirst: true, whyArdn: true, aiSupport: true },
    leadWithRoi: true,
    strategic: "",
    videos: ["V04", "V03", "V08", "V19", "V22", "V15"],
    systems: [],
    phases: [
      { when: "Months 0–2", title: "Connect", body: "Single sign-on, reporting feed and sync with the systems that stay. Nothing changes for staff." },
      { when: "Months 2–6", title: "Quick wins", body: "Point tools retire first.", retires: "" },
      { when: "Months 6–20", title: "Members and billing", body: "Staff work from one member record, then billing moves.", retires: "" },
    ],
    modules: [
      { key: "core", name: "Core: members, sales, contracts, reports", core: true },
      { key: "web", name: "Marketing and websites", core: false },
      { key: "billing", name: "Billing and books", core: false },
      { key: "golf", name: "Golf and pro shop", core: false },
      { key: "amenity", name: "Courts, classes and amenities", core: false },
      { key: "events", name: "Events and catering", core: false },
      { key: "pos", name: "Dining and POS", core: false },
    ],
    pricing: {
      corePerLocation: 300,
      addonPerLocation: 100,
      locations: 1,
      locationLabel: "club",
      implementation: 0,
      supportMonthly: 0,
      rampYear1: 0.25,
      rampYear2: 0.6,
      staffFreed: 0,
    },
    gaps: [],
    avoided: [],
    showUpside: true,
    memo: { enabled: true, title: "For the board", ask: "", points: [] },
    risk: { enabled: true, title: "If Ardn disappeared tomorrow", items: DEFAULT_RISK },
    compare: { enabled: false, title: "How this compares", competitors: ["Jonas", "Northstar", "Club Caddie"], rows: DEFAULT_COMPARE },
    fitRows: [],
    nextSteps: ["Confirm current spend by system.", "Agree on phase 1 scope and start date."],
    contact: { email: "jaimin@ardncloudsolutions.com", ctaLabel: "Book a working session" },
    firstYear: FIRST_YEAR,
  };
}

// ── Money and calculations shared by the pages and the calculator ───────────

export const money = (n: number) => {
  const a = Math.abs(n);
  const t = a >= 1e6 ? (a / 1e6).toFixed(2) + "M" : a >= 1e3 ? Math.round(a / 1e3) + "K" : String(Math.round(a));
  return (n < 0 ? "-$" : "$") + t;
};

export const num = (v: unknown) => parseInt(String(v ?? "").replace(/[^0-9]/g, ""), 10) || 0;

export function perLocation(p: Proposal, moduleKeys: string[]) {
  const core = p.modules.filter((m) => m.core).length ? p.pricing.corePerLocation : 0;
  const addons = p.modules.filter((m) => !m.core && moduleKeys.includes(m.key)).length;
  return core + addons * p.pricing.addonPerLocation;
}

export function allModulesPerLocation(p: Proposal) {
  return perLocation(
    p,
    p.modules.map((m) => m.key),
  );
}

export type RoiInput = {
  /** system ids chosen to retire */
  on: string[];
  /** cost overrides by system id (yearly $) */
  costs: Record<string, number>;
  locations: number;
};

export type RoiResult = {
  count: number;
  moduleKeys: string[];
  perLocation: number;
  feeYear: number;
  supportYear: number;
  savingFull: number;
  staffFreed: number;
  years: { year: number; saving: number; spend: number; net: number; cum: number }[];
  net5: number;
  payback: string;
  paybackMonths: number | null;
  /** Yearly EBITDA improvement at full rollout: savings minus platform and support fees. */
  ebitda: number;
  roi: number | null;
};

export function roi(p: Proposal, input: RoiInput): RoiResult {
  const chosen = p.systems.filter((s) => input.on.includes(s.id));
  const cost = (s: SystemRow) => (input.costs[s.id] != null && input.costs[s.id] > 0 ? input.costs[s.id] : s.estimate);
  const moduleKeys = Array.from(new Set(["core", ...chosen.map((s) => s.module).filter(Boolean)]));
  const per = perLocation(p, moduleKeys);
  const feeYear = per * input.locations * 12;
  const supportYear = p.pricing.supportMonthly * 12;
  const homegrown = p.systems.filter((s) => s.kind === "Homegrown");
  const freed = homegrown.length ? Math.round(p.pricing.staffFreed * (chosen.filter((s) => s.kind === "Homegrown").length / homegrown.length)) : 0;
  const savingFull = chosen.reduce((a, s) => a + cost(s), 0) + freed;
  let cum = 0;
  let cost5 = 0;
  let payback = "Not in 5 yrs";
  let paybackMonths: number | null = null;
  const years = [0, 1, 2, 3, 4].map((i) => {
    const year = p.firstYear + i;
    // A system retired during a year saves half that year's cost, then the full amount.
    const saving = chosen.reduce((a, s) => a + (s.start < year ? cost(s) : s.start === year ? cost(s) / 2 : 0), 0) + (i >= 1 ? freed : 0);
    const ramp = i === 0 ? p.pricing.rampYear1 : i === 1 ? p.pricing.rampYear2 : 1;
    const spend = feeYear * ramp + supportYear + (i === 0 ? p.pricing.implementation : 0);
    cost5 += spend;
    const prev = cum;
    cum += saving - spend;
    if (cum >= 0 && payback === "Not in 5 yrs") {
      payback = String(year);
      const net = saving - spend;
      paybackMonths = Math.max(1, Math.round(i * 12 + (net > 0 ? (-prev / net) * 12 : 0)));
    }
    return { year, saving, spend, net: saving - spend, cum };
  });
  const ebitda = savingFull - feeYear - supportYear;
  return { count: chosen.length, moduleKeys, perLocation: per, feeYear, supportYear, savingFull, staffFreed: freed, years, net5: cum, payback, paybackMonths, ebitda, roi: cost5 > 0 ? Math.round((cum / cost5) * 100) : null };
}

export function proposedRoi(p: Proposal) {
  return roi(p, { on: p.systems.filter((s) => s.prop === "sunset").map((s) => s.id), costs: {}, locations: p.pricing.locations });
}

/** "Year 1" when the plan is cash-positive from the first year, else "N months". */
export function paybackLabel(r: RoiResult) {
  if (r.paybackMonths == null) return r.payback;
  return r.paybackMonths <= 12 ? "Year 1" : `${r.paybackMonths} months`;
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
