// Ardn CRM funnel (any industry; contractors and field service first): the
// questions and the rule that routes a finished lead. Shared by the form and
// /api/lead so values and labels can never drift apart. New industries are
// new hooks in src/app/start/crmHooks.ts; the questions stay the same.

import { CALENDLY_URL } from "@/lib/leadFunnel";
import { asList, asText, labelOf, type FunnelQuestion, type Routing } from "./types";

export const CRM_ID = "ardn-crm" as const;
export const CRM_PRODUCT = "Ardn CRM";
/** The same booking link /construction-crm uses (construction-crm/content.ts `CALL`). */
export const CRM_CALENDLY = CALENDLY_URL;
export const CRM_OTHER_MAX = 120;

export const CRM_QUESTIONS: FunnelQuestion[] = [
  {
    code: "industry",
    label: "What kind of work does your business do?",
    options: [
      { value: "roofing", label: "Roofing" },
      { value: "general_contractor", label: "General contractor" },
      { value: "home_improvement", label: "Home improvement & remodeling" },
      { value: "hvac_plumbing_electrical", label: "HVAC, plumbing or electrical" },
      { value: "landscaping", label: "Landscaping & outdoor" },
      { value: "other_field_service", label: "Other field service" },
      { value: "other", label: "Other" },
    ],
    detail: {
      value: "other",
      field: { code: "industry_other", label: "Your industry (optional)", placeholder: "e.g. property management", min: 0, max: CRM_OTHER_MAX },
    },
  },
  {
    code: "revenue",
    label: "What's your annual revenue?",
    help: "A range is fine. It tells us which setup fits.",
    options: [
      { value: "under_2m", label: "Under $2M" },
      { value: "2_10m", label: "$2M–$10M" },
      { value: "10_20m", label: "$10M–$20M" },
      { value: "20_50m", label: "$20M–$50M" },
      { value: "50m_plus", label: "$50M+" },
    ],
  },
  {
    code: "current_crm",
    label: "What do you use today?",
    options: [
      { value: "hubspot", label: "HubSpot" },
      { value: "salesforce", label: "Salesforce" },
      { value: "jobnimbus", label: "JobNimbus" },
      { value: "acculynx", label: "AccuLynx" },
      { value: "servicetitan", label: "ServiceTitan" },
      { value: "spreadsheets", label: "Spreadsheets" },
      { value: "other", label: "Another CRM" },
      { value: "none", label: "Nothing yet" },
    ],
  },
  {
    code: "priorities",
    label: "What matters most to you?",
    help: "Pick all that apply.",
    multi: true,
    options: [
      { value: "per_seat", label: "Stop paying per seat" },
      { value: "quotes_jobs", label: "Quotes that become jobs" },
      { value: "dispatch", label: "Scheduling & dispatch" },
      { value: "service", label: "Service requests" },
      { value: "reporting", label: "Reporting" },
      { value: "migration", label: "Move my data" },
    ],
  },
  {
    code: "role",
    label: "Which best describes you?",
    options: [
      { value: "owner_exec", label: "Owner / executive" },
      { value: "manager", label: "Office, sales or operations manager" },
      { value: "it_lead", label: "IT / technology lead" },
      { value: "consultant", label: "Consultant or agency (for a client)" },
      { value: "student_jobseeker", label: "Student or looking for a job" },
    ],
  },
  {
    code: "timeline",
    label: "When would you like to switch?",
    options: [
      { value: "this_month", label: "This month" },
      { value: "1_3_months", label: "In 1–3 months" },
      { value: "3_6_months", label: "In 3–6 months" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
];

export const crmLabel = (code: string, value?: string | null) => labelOf(CRM_QUESTIONS, code, value);

export type CrmAnswers = {
  industry: string;
  industry_other: string;
  revenue: string;
  current_crm: string;
  priorities: string[];
  role: string;
  timeline: string;
};

/** "Roofing", or what they typed for "Other" (falls back to "Other"). */
export const crmIndustry = (a: Pick<CrmAnswers, "industry" | "industry_other">) =>
  a.industry === "other" && a.industry_other ? a.industry_other : crmLabel("industry", a.industry);

/** Under $2M a year: still emailed (as C), flagged for the caller. */
export const crmTooSmall = (a: Pick<CrmAnswers, "revenue">) => a.revenue === "under_2m";

/**
 * Disqualified only for students / job seekers. Grades (current pricing fits
 * $10M+ a year; see ardnai.com/pricing, never shown on the page):
 *   A: owner/exec, revenue $10M+, switching within 3 months
 *   B: revenue $10M+, or $2–10M and switching within 3 months
 *   C: everything else that qualified (under $2M flagged as likely too small)
 */
export function routeArdnCrm(a: CrmAnswers): Routing {
  if (a.role === "student_jobseeker") return { status: "disqualified", offer: null, reason: "Student or job seeker" };
  const offer = CRM_ID;
  const r = crmLabel("role", a.role);
  const t = crmLabel("timeline", a.timeline).toLowerCase();
  const rev = `revenue ${crmLabel("revenue", a.revenue).replace(/^Under/, "under")}`;
  const owner = a.role === "owner_exec";
  const big = a.revenue === "10_20m" || a.revenue === "20_50m" || a.revenue === "50m_plus";
  const mid = a.revenue === "2_10m";
  const soon = a.timeline === "this_month" || a.timeline === "1_3_months";

  if (owner && big && soon) return { status: "qualified", offer, grade: "A", gradeReason: `${r}, ${rev}, switching ${t}.` };
  if (big) {
    const missing = !owner ? `not the owner (${r})` : `timeline is ${t}`;
    return { status: "qualified", offer, grade: "B", gradeReason: `${rev[0].toUpperCase()}${rev.slice(1)}; ${missing}.` };
  }
  if (mid && soon) return { status: "qualified", offer, grade: "B", gradeReason: `Switching ${t}, ${rev} (below the $10M+ fit).` };
  const small = crmTooSmall(a) ? " Likely too small for current pricing." : "";
  return { status: "qualified", offer, grade: "C", gradeReason: `Qualified, but ${rev} and timeline is ${t}.${small}` };
}

/** Answers out of the form's state, for the request body (and the saved draft). */
export function crmPayload(a: Record<string, unknown>) {
  const out: Record<string, unknown> = { priorities: asList(a.priorities) };
  for (const k of ["industry", "revenue", "current_crm", "role", "timeline"]) if (asText(a[k])) out[k] = a[k];
  const other = asText(a.industry_other).trim();
  if (a.industry === "other" && other) out.industry_other = other;
  return out;
}
