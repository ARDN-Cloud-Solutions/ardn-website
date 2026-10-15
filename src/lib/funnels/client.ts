// What the form (FunnelForm) needs to know about each funnel: its questions,
// how to save and send the answers, where to book, and the words on the
// screens around the questions. Server-side email copy lives in ./server.
//
// The AI consulting funnel keeps every id, value, storage key, payload and
// event exactly as before this registry existed: its entry only wraps
// @/lib/leadFunnel and the code that used to sit in FunnelForm.

import { QUESTIONS, SELECT_CODES, calendlyLink, label, type Answers } from "@/lib/leadFunnel";
import { CS_CALENDLY, CS_ID, CS_QUESTIONS, csLabel, csPayload } from "./clubSteward";
import { CRM_CALENDLY, CRM_ID, CRM_QUESTIONS, crmIndustry, crmLabel, crmPayload } from "./ardnCrm";
import { asList, asText, prefilled, type FormAnswers, type FunnelId, type FunnelQuestion } from "./types";

export type FunnelCopy = {
  /** Help line under the contact step's title. */
  contactHelp: string;
  /** Label of the contact step's company field. */
  companyLabel: string;
  /** Under "You're a great fit… Pick a time that works." */
  qualifiedText: string;
  calendlyTitle: string;
  disqualifiedText: string;
  /** Subject of the fallback email when sending fails. */
  failSubject: string;
};

export type ClientFunnel = {
  id: FunnelId;
  questions: FunnelQuestion[];
  empty: FormAnswers;
  /** Shorter tile labels on phones only ("code:value" → label). Display only. */
  shortLabels: Record<string, string>;
  /** localStorage / sessionStorage key for the draft. */
  storeKey: string;
  /** sessionStorage key for this tab's lead id (Google Ads transaction_id). */
  leadIdKey: string;
  /** Added to every GA4 event the form sends. Empty for the AI funnel (unchanged reports). */
  eventExtra: Record<string, string>;
  payload(a: FormAnswers): Record<string, unknown>;
  /** One line of answers, for the "couldn't send" email fallback. */
  summary(a: FormAnswers, hook: string): string;
  /** One line for Calendly's a1 field. */
  calendlyNote(a: FormAnswers): string;
  calendly(name: string, email: string): URL;
  copy: FunnelCopy;
};

const oneLine = (s: string) => s.replace(/\s+/g, " ").trim();
const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n)}…` : s);

// ── AI consulting (unchanged) ──────────────────────────────────────────────

const ai = (a: FormAnswers) => a as unknown as Answers;

const AI: ClientFunnel = {
  id: "ardn-ai-consulting",
  questions: QUESTIONS,
  empty: { want: [], main_problem: "", current_systems: "" },
  shortLabels: {
    "want:ai_assistant": "AI assistant on our own data",
    "want:automation": "Automate manual work",
    "want:ai_agents": "AI agents in our systems",
    "want:custom_software": "Custom software, portal or app",
    "want:salesforce": "Salesforce help",
    "want:not_sure": "Not sure yet — want advice",
  },
  storeKey: "ardn-funnel:ardn-ai-consulting",
  leadIdKey: "ardn-lead-id",
  eventExtra: {},
  payload(f) {
    const a = ai(f);
    const out: Record<string, unknown> = { want: a.want, main_problem: a.main_problem.trim(), current_systems: a.current_systems.trim() };
    for (const k of SELECT_CODES) if (a[k]) out[k] = a[k];
    return out;
  },
  summary(f, hook) {
    const a = ai(f);
    const wants = a.want.map((w) => label("want", w)).join(", ");
    return [
      wants && `Wants: ${wants}`,
      a.industry && `Industry: ${label("industry", a.industry)}`,
      a.main_problem.trim() && `Problem: ${a.main_problem.trim()}`,
      a.current_systems.trim() && `Tools: ${a.current_systems.trim()}`,
      a.role && `Role: ${label("role", a.role)}`,
      a.timeline && `Start: ${label("timeline", a.timeline)}`,
      a.budget_band && `Budget: ${label("budget_band", a.budget_band)}`,
      `From: ad page ${hook}`,
    ]
      .filter(Boolean)
      .join(" · ");
  },
  calendlyNote(f) {
    const a = ai(f);
    const problem = oneLine(a.main_problem);
    return [
      `Wants: ${a.want.map((w) => label("want", w)).join(", ")}`,
      a.industry && `Industry: ${label("industry", a.industry)}`,
      problem && `Problem: ${problem.length > 150 ? `${problem.slice(0, 150)}…` : problem}`,
    ]
      .filter(Boolean)
      .join("; ");
  },
  calendly: calendlyLink,
  copy: {
    contactHelp: "We'll use these to set up your free 30-minute call.",
    companyLabel: "Company",
    qualifiedText: "Your free 30-minute call. Your answers come with you, so we start from what you told us.",
    calendlyTitle: "Pick a time for your free call with Ardn",
    disqualifiedText:
      "These calls are for businesses planning a project, so we'll skip the booking. If you're learning about AI and software, our blog is a good place to start. And if you'd like to work with us, take a look at our open roles.",
    failSubject: "Free 30-minute call",
  },
};

// ── Club Steward ───────────────────────────────────────────────────────────

const CS: ClientFunnel = {
  id: CS_ID,
  questions: CS_QUESTIONS,
  empty: { fix: [], current_systems: "" },
  shortLabels: {
    "club_type:multi_club_operator": "Multi-club operator",
    "club_type:golf_course": "Public or semi-private course",
  },
  storeKey: `ardn-funnel:${CS_ID}`,
  leadIdKey: `ardn-lead-id:${CS_ID}`,
  eventExtra: { funnel: CS_ID },
  payload: csPayload,
  summary(a, hook) {
    const fix = asList(a.fix).map((v) => csLabel("fix", v)).join(", ");
    const systems = asText(a.current_systems).trim();
    return [
      a.club_type && `Club: ${csLabel("club_type", asText(a.club_type))}`,
      a.clubs && `Clubs: ${csLabel("clubs", asText(a.clubs))}`,
      fix && `Fix: ${fix}`,
      systems && `Runs today: ${systems}`,
      a.role && `Role: ${csLabel("role", asText(a.role))}`,
      a.timeline && `Change: ${csLabel("timeline", asText(a.timeline))}`,
      `From: ad page ${hook}`,
    ]
      .filter(Boolean)
      .join(" · ");
  },
  calendlyNote(a) {
    const systems = oneLine(asText(a.current_systems));
    return [
      `Club Steward: ${csLabel("club_type", asText(a.club_type))}, ${csLabel("clubs", asText(a.clubs))} club(s)`,
      `Fix: ${asList(a.fix).map((v) => csLabel("fix", v)).join(", ")}`,
      systems && `Runs today: ${clip(systems, 150)}`,
    ]
      .filter(Boolean)
      .join("; ");
  },
  calendly: (name, email) => prefilled(CS_CALENDLY, name, email),
  copy: {
    contactHelp: "We'll use these to set up your 30-minute Club Steward walkthrough.",
    companyLabel: "Club or company",
    qualifiedText: "Your 30-minute Club Steward walkthrough. Your answers come with you, so we start from how your club runs.",
    calendlyTitle: "Pick a time for your Club Steward walkthrough",
    disqualifiedText:
      "These walkthroughs are for clubs choosing software, so we'll skip the booking. Our blog is a good place to start, and if you'd like to work with us, take a look at our open roles.",
    failSubject: "Club Steward walkthrough",
  },
};

// ── Ardn CRM ───────────────────────────────────────────────────────────────

const CRM: ClientFunnel = {
  id: CRM_ID,
  questions: CRM_QUESTIONS,
  empty: { priorities: [], industry_other: "" },
  shortLabels: {
    "industry:home_improvement": "Home improvement",
    "industry:hvac_plumbing_electrical": "HVAC, plumbing, electrical",
    "role:manager": "Office or operations manager",
    "role:consultant": "Consultant or agency",
  },
  storeKey: `ardn-funnel:${CRM_ID}`,
  leadIdKey: `ardn-lead-id:${CRM_ID}`,
  eventExtra: { funnel: CRM_ID },
  payload: crmPayload,
  summary(a, hook) {
    const wants = asList(a.priorities).map((v) => crmLabel("priorities", v)).join(", ");
    return [
      a.industry && `Industry: ${crmIndustry({ industry: asText(a.industry), industry_other: asText(a.industry_other).trim() })}`,
      a.revenue && `Revenue: ${crmLabel("revenue", asText(a.revenue))}`,
      a.current_crm && `Uses: ${crmLabel("current_crm", asText(a.current_crm))}`,
      wants && `Wants: ${wants}`,
      a.role && `Role: ${crmLabel("role", asText(a.role))}`,
      a.timeline && `Switch: ${crmLabel("timeline", asText(a.timeline))}`,
      `From: ad page ${hook}`,
    ]
      .filter(Boolean)
      .join(" · ");
  },
  calendlyNote(a) {
    return [
      `Ardn CRM: ${crmIndustry({ industry: asText(a.industry), industry_other: oneLine(asText(a.industry_other)) })}, revenue ${crmLabel("revenue", asText(a.revenue))}`,
      `Uses: ${crmLabel("current_crm", asText(a.current_crm))}`,
      `Wants: ${asList(a.priorities).map((v) => crmLabel("priorities", v)).join(", ")}`,
    ].join("; ");
  },
  calendly: (name, email) => prefilled(CRM_CALENDLY, name, email),
  copy: {
    contactHelp: "We'll use these to set up your 30-minute Ardn CRM walkthrough.",
    companyLabel: "Company",
    qualifiedText: "Your 30-minute Ardn CRM walkthrough. Your answers come with you, so we start from how your team works.",
    calendlyTitle: "Pick a time for your Ardn CRM walkthrough",
    disqualifiedText:
      "These walkthroughs are for businesses choosing a CRM, so we'll skip the booking. Our blog is a good place to start, and if you'd like to work with us, take a look at our open roles.",
    failSubject: "Ardn CRM walkthrough",
  },
};

export const CLIENT_FUNNELS: Record<FunnelId, ClientFunnel> = { "ardn-ai-consulting": AI, "club-steward": CS, "ardn-crm": CRM };
