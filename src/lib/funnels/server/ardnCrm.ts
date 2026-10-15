// Ardn CRM funnel: answer checks, call prep and emails. Links in "Show them"
// go only to pages and videos that /construction-crm already links.

import { CRM_CALENDLY, CRM_OTHER_MAX, CRM_QUESTIONS, crmIndustry, crmLabel, crmTooSmall, routeArdnCrm, type CrmAnswers } from "../ardnCrm";
import { optionsOf, prefilled, type Routing } from "../types";
import {
  Invalid,
  SITE,
  confirmationMail,
  contactRows,
  loose,
  lower,
  oneLine,
  received,
  renderSections,
  sourceRows,
  text,
  type LeadMeta,
  type LinkItem,
  type Row,
  type Section,
  type ServerFunnel,
} from "./shared";

const PAGE = `${SITE}/construction-crm`;
const LEAVE_HUBSPOT = "https://www.youtube.com/watch?v=nQP5pO0KOkc"; // VIDEOS.crmLeaveHubspot
const GROW_TEAM = "https://www.youtube.com/watch?v=sIEMYaZgK1w"; // VIDEOS.crmGrowYourTeam

const known = (code: string) => optionsOf(CRM_QUESTIONS, code).map((o) => o.value);

function pick(v: unknown, code: string): string {
  if (typeof v !== "string" || !known(code).includes(v)) throw new Invalid(`${code} is not a known answer`);
  return v;
}

function parseAnswers(a: Record<string, unknown>): CrmAnswers {
  const values = known("priorities");
  if (!Array.isArray(a.priorities) || a.priorities.length === 0 || a.priorities.length > values.length) throw new Invalid("priorities must be a list");
  const priorities = a.priorities.map((v) => {
    if (typeof v !== "string" || !values.includes(v)) throw new Invalid("priorities is not a known answer");
    return v;
  });
  if (new Set(priorities).size !== priorities.length) throw new Invalid("priorities has duplicates");
  const industry = pick(a.industry, "industry");
  return {
    industry,
    industry_other: industry === "other" ? text(a.industry_other, "industry", CRM_OTHER_MAX) : "",
    revenue: pick(a.revenue, "revenue"),
    current_crm: pick(a.current_crm, "current_crm"),
    priorities,
    role: pick(a.role, "role"),
    timeline: pick(a.timeline, "timeline"),
  };
}

type Lead = LeadMeta & { answers: CrmAnswers };

// ── call prep ───────────────────────────────────────────────────────────────

const PRIORITY_LINKS: Record<string, LinkItem[]> = {
  per_seat: [
    { what: "Video: grow your team, not your CRM bill (59 s)", url: GROW_TEAM },
    { what: "Buyer's guide: contractor CRMs without per-seat pricing", url: `${SITE}/buyers-guide/contractor-crm-without-per-seat-pricing` },
  ],
  quotes_jobs: [{ what: "Video chapter: deals and quote to job (0:33)", url: `${LEAVE_HUBSPOT}&t=33` }],
  service: [{ what: "Video chapter: service on the clock (0:50)", url: `${LEAVE_HUBSPOT}&t=50` }],
  dispatch: [{ what: "Product tour: dispatch board", url: `${PAGE}#tour` }],
  reporting: [{ what: "Modules, including reports and locations", url: `${PAGE}#modules` }],
  migration: [{ what: "Video chapter: switching, data moved for you (1:18)", url: `${LEAVE_HUBSPOT}&t=78` }],
};

function showThem(l: Lead): LinkItem[] {
  const a = l.answers;
  const out: LinkItem[] = [{ what: "Ardn CRM for construction & field service", url: PAGE }];
  if (a.current_crm === "hubspot") out.push({ what: "Video: Ardn CRM, leave HubSpot, keep everything (96 s)", url: LEAVE_HUBSPOT });
  for (const p of a.priorities) out.push(...(PRIORITY_LINKS[p] ?? []));
  out.push({ what: "Case study: Ardn CRM for construction", url: `${SITE}/case-studies/construction-crm-jobs-service-dispatch` });
  const seen = new Set<string>();
  return out.filter((x) => (seen.has(x.url) ? false : (seen.add(x.url), true)));
}

const NAMED_CRM = ["hubspot", "salesforce", "jobnimbus", "acculynx", "servicetitan"];

function askThem(l: Lead): string[] {
  const a = l.answers;
  const qs: string[] = [];
  const crm = crmLabel("current_crm", a.current_crm);
  if (NAMED_CRM.includes(a.current_crm) || a.current_crm === "other") {
    qs.push(`They use ${a.current_crm === "other" ? "another CRM" : crm} today: how many people log in, what do they pay for it, and what would they keep?`);
  } else {
    qs.push("Where do leads, quotes and jobs live today, and who keeps them up to date?");
  }
  if (a.priorities.includes("per_seat")) qs.push("How many people would log in if seats cost nothing: office, estimators, crew leads?");
  if (a.priorities.includes("quotes_jobs")) qs.push("Walk me through one quote: who builds it, from what price list, and what happens when the customer says yes?");
  if (a.priorities.includes("dispatch")) qs.push("How are crews scheduled today, and how does the office know who is where?");
  if (a.priorities.includes("service")) qs.push("How do service requests and callbacks come in, and how do you know one has slipped?");
  if (a.priorities.includes("migration")) qs.push("Roughly how many accounts, contacts and open deals would we move, and from where?");
  if (a.priorities.includes("reporting")) qs.push("Which number do you check first every week, and where does it come from today?");
  if (a.role === "manager") qs.push("Who signs off on a CRM change?");
  if (a.role === "consultant") qs.push("Who is the end client, and can they join the next call?");
  return qs.slice(0, 4);
}

function watchFor(l: Lead, r: Routing): string[] {
  const a = l.answers;
  if (r.status === "disqualified") return [`Not a fit (${lower(r.reason)}). Only call if they reach out again with a real business.`];
  const out: string[] = [];
  if (crmTooSmall(a)) out.push("Revenue under $2M: likely too small for current pricing (ardnai.com/pricing starts at $10M+). Be upfront early.");
  else if (a.revenue === "2_10m") out.push("Revenue $2–10M: below the $10M+ fit on ardnai.com/pricing. Qualify scope and budget before a deep demo.");
  if (a.role === "consultant") out.push("Consultant or agency: confirm who owns the client relationship, the budget and the final decision.");
  if (a.timeline === "exploring") out.push("Just exploring: find out early whether there is a real switch and a date.");
  if (a.timeline === "3_6_months") out.push("Switch is 3–6 months out: agree a concrete next step so it doesn't go cold.");
  if (["jobnimbus", "acculynx", "servicetitan"].includes(a.current_crm))
    out.push(`They use ${crmLabel("current_crm", a.current_crm)}, a trade-specific tool: find out what it does for them before promising parity.`);
  if (["hvac_plumbing_electrical", "landscaping", "other_field_service", "other"].includes(a.industry))
    out.push("Trade outside the ones the public pages name (roofing, home improvement, GCs, real estate): map their workflow before the demo.");
  if (!out.length) out.push("No obvious red flags. Pricing is by modules and locations: never quote per-seat numbers.");
  return out;
}

// ── email ───────────────────────────────────────────────────────────────────

function buildEmail(l: Lead, r: Routing) {
  const { answers: a, contact: c } = l;
  const company = oneLine(c.company);
  const industry = oneLine(crmIndustry(a));
  const subject = r.status === "qualified" ? `[Qualified lead · ${r.grade}] ${company} — Ardn CRM (${industry})` : `[Not a fit] ${company} — Ardn CRM (${industry})`;
  const when = received();
  const wants = a.priorities.map((p) => crmLabel("priorities", p));

  const who = `${c.name}, ${lower(crmLabel("role", a.role))} at ${c.company} (${lower(industry)}, revenue ${lower(crmLabel("revenue", a.revenue))}).`;
  const what = `Uses: ${crmLabel("current_crm", a.current_crm)}. Wants: ${wants.map(lower).join("; ")}. Switch: ${lower(crmLabel("timeline", a.timeline))}.`;
  const fit = r.status === "qualified" ? `Grade ${r.grade} · Ardn CRM. ${r.gradeReason}` : `Not a fit: ${r.reason}.`;

  const sections: Section[] = [
    { title: "CALL PREP", lines: [who, what] },
    { title: "Fit", lines: [fit] },
    { title: "Show them", links: showThem(l) },
    { title: "Ask them", list: askThem(l) },
    { title: "Watch for", lines: watchFor(l, r) },
    { title: "Contact", rows: contactRows(c) },
    {
      title: "All answers",
      rows: [
        ["Industry", crmLabel("industry", a.industry) + (a.industry === "other" && a.industry_other ? `: ${a.industry_other}` : "")],
        ["Annual revenue", crmLabel("revenue", a.revenue)],
        ["Uses today", crmLabel("current_crm", a.current_crm)],
        ["Matters most", wants.join("; ")],
        ["Role", crmLabel("role", a.role)],
        ["Switch", crmLabel("timeline", a.timeline)],
      ],
    },
    { title: "Source", rows: sourceRows(l, when) },
  ];
  return { subject, ...renderSections(sections) };
}

function buildConfirmationEmail(l: Lead) {
  const { contact: c, answers: a } = l;
  const first = oneLine(c.name).split(" ")[0] ?? "";
  const book = prefilled(CRM_CALENDLY, c.name, c.email);
  book.searchParams.set("utm_source", "lead-email");
  book.searchParams.set("utm_medium", "email");
  book.searchParams.set("utm_content", l.hook);
  const crm = NAMED_CRM.includes(a.current_crm) ? crmLabel("current_crm", a.current_crm) : a.current_crm === "other" ? "your current CRM" : "";
  return confirmationMail({
    subject: "Your Ardn CRM walkthrough: next step",
    hello: first ? `Hi ${first},` : "Hi,",
    thanks: "Thanks for telling us about your business. The next step is a 30-minute Ardn CRM walkthrough with our team.",
    url: book.toString(),
    ready: [
      crm ? `How you use ${crm} today, and what you like or dislike about it` : "Where your leads, quotes and jobs live today",
      `What matters most to you (you picked: ${a.priorities.map((p) => lower(crmLabel("priorities", p))).join(", ")})`,
      "Roughly how many people in the office and the field would use it",
    ],
  });
}

function partialRows(a: Record<string, unknown>): Row[] {
  const one = (code: string) => {
    const v = a[code];
    return typeof v === "string" && known(code).includes(v) ? crmLabel(code, v) : "";
  };
  const pri = Array.isArray(a.priorities) ? [...new Set(a.priorities.filter((v): v is string => typeof v === "string" && known("priorities").includes(v)))] : [];
  const other = a.industry === "other" ? loose(a.industry_other, CRM_OTHER_MAX) : "";
  const rows: [string, string][] = [
    ["Industry", one("industry") + (other ? `: ${other}` : "")],
    ["Annual revenue", one("revenue")],
    ["Uses today", one("current_crm")],
    ["Matters most", pri.map((v) => crmLabel("priorities", v)).join("; ")],
    ["Role", one("role")],
    ["Switch", one("timeline")],
  ];
  return rows.filter(([, v]) => v);
}

export const CRM_SERVER: ServerFunnel = {
  id: "ardn-crm",
  accept(raw) {
    const answers = parseAnswers(raw);
    const routing = routeArdnCrm(answers);
    const lead = (m: LeadMeta): Lead => ({ ...m, answers });
    return {
      routing,
      // Under $2M a year is below current pricing: still a lead, not an ad win.
      adsConversion: !crmTooSmall(answers),
      email: (m) => buildEmail(lead(m), routing),
      confirmation: (m) => buildConfirmationEmail(lead(m)),
    };
  },
  partialRows,
  partialSuffix: " — Ardn CRM",
  partialOffer: "a 30-minute Ardn CRM walkthrough",
};
