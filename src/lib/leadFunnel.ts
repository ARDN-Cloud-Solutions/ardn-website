// The Google Ads qualification form (/start/<hook>): its questions, and the
// rules that route a finished lead. Shared by the form (FunnelForm) and the
// route that receives it (/api/lead), so the option values and labels can
// never drift apart. Codes match the arndai hub seed for the
// `ardn-ai-consulting` funnel, which the route can still mirror to.

export type Opt = { value: string; label: string };
export type SelectCode = "want" | "industry" | "role" | "timeline" | "budget_band";
export type TextCode = "main_problem" | "current_systems";
export type TextField = {
  code: TextCode;
  label: string;
  placeholder: string;
  /** Characters, after trimming. 0 = optional. */
  min: number;
  max: number;
};
export type Question =
  | { code: SelectCode; label: string; help?: string; multi?: boolean; options: Opt[] }
  | {
      code: "main_problem";
      label: string;
      help?: string;
      text: true;
      /** The fields on this step: the problem, then the optional tools field. */
      fields: TextField[];
    };

export const MAIN_PROBLEM_MIN = 10;
export const MAIN_PROBLEM_MAX = 600;
export const CURRENT_SYSTEMS_MAX = 600;

export const QUESTIONS: Question[] = [
  {
    code: "want",
    label: "What would you like help with?",
    help: "Pick all that apply.",
    multi: true,
    options: [
      { value: "ai_assistant", label: "An AI assistant or chatbot that answers from our own data" },
      { value: "automation", label: "Automate manual work and data entry" },
      { value: "ai_agents", label: "AI agents that take actions in our systems" },
      { value: "custom_software", label: "Custom software, a portal or an app" },
      { value: "salesforce", label: "Salesforce help" },
      { value: "not_sure", label: "Not sure yet — I want an expert's view" },
    ],
  },
  {
    code: "industry",
    label: "What industry are you in?",
    options: [
      { value: "construction_trades", label: "Construction or home services" },
      { value: "clubs_hospitality", label: "Golf, country club or hospitality" },
      { value: "nonprofit_membership", label: "Nonprofit or membership organization" },
      { value: "healthcare", label: "Healthcare or wellness" },
      { value: "professional_services", label: "Professional services" },
      { value: "retail_ecommerce", label: "Retail or e-commerce" },
      { value: "other", label: "Other" },
    ],
  },
  {
    code: "main_problem",
    label: "In a sentence or two, what's the problem you want to solve?",
    help: "Plain words are perfect. It lets the call start on your problem, not on introductions.",
    text: true,
    fields: [
      {
        code: "main_problem",
        label: "The problem",
        placeholder: "e.g. Our office re-types every job from email into QuickBooks and things get missed",
        min: MAIN_PROBLEM_MIN,
        max: MAIN_PROBLEM_MAX,
      },
      {
        code: "current_systems",
        label: "Tools you use today (optional)",
        placeholder: "e.g. HubSpot, QuickBooks, a lot of spreadsheets",
        min: 0,
        max: CURRENT_SYSTEMS_MAX,
      },
    ],
  },
  {
    code: "role",
    label: "Which best describes you?",
    options: [
      { value: "owner_exec", label: "Owner / executive" },
      { value: "manager", label: "Department or operations manager" },
      { value: "it_lead", label: "IT / technology lead" },
      { value: "agency", label: "Consultant or agency (for a client)" },
      { value: "student_jobseeker", label: "Student or looking for a job" },
    ],
  },
  {
    code: "timeline",
    label: "When would you like to start?",
    options: [
      { value: "now", label: "This month" },
      { value: "quarter", label: "In 1–3 months" },
      { value: "later", label: "In 3–6 months" },
      { value: "exploring", label: "Just exploring" },
    ],
  },
  {
    code: "budget_band",
    label: "What budget are you planning for?",
    help: "A range is fine. Smaller one-time projects are welcome.",
    options: [
      { value: "under_10k", label: "Under $10,000 (a focused one-time project)" },
      { value: "10_25k", label: "$10,000–$25,000" },
      { value: "25_75k", label: "$25,000–$75,000" },
      { value: "75k_plus", label: "$75,000+" },
      { value: "not_sure", label: "Not sure yet" },
    ],
  },
];

export type Answers = {
  want: string[];
  industry?: string;
  main_problem: string;
  role?: string;
  timeline?: string;
  budget_band?: string;
  current_systems: string;
};

export const SELECT_CODES = ["industry", "role", "timeline", "budget_band"] as const;

export function options(code: SelectCode): Opt[] {
  const q = QUESTIONS.find((x) => x.code === code);
  return q && "options" in q ? q.options : [];
}

export const label = (code: SelectCode, value?: string | null) =>
  options(code).find((o) => o.value === value)?.label ?? "";

export type Offer = "ai-consulting" | "custom-software" | "salesforce";
export type Grade = "A" | "B" | "C";
export type Routing =
  | { status: "qualified"; offer: Offer; grade: Grade; gradeReason: string }
  | { status: "disqualified"; offer: null; reason: string };

const AI_WANTS = ["ai_assistant", "automation", "ai_agents", "not_sure"];

/**
 * Disqualified only for students / job seekers, or nothing picked. Small
 * budgets are welcome (a focused one-time project). Otherwise the offer
 * follows what they want (AI first, then custom software, else Salesforce).
 * Qualified leads also get a fit grade so the caller knows how hard to
 * prepare:
 *   A: owner/exec or IT lead, starting within 3 months, budget $25k+
 *   B: starting within 3 months, or budget $10k+
 *   C: everything else that qualified
 */
export function routeLead(a: {
  want: string[];
  role: string;
  timeline: string;
  budget_band: string;
}): Routing {
  if (a.role === "student_jobseeker") return { status: "disqualified", offer: null, reason: "Student or job seeker" };
  if (a.want.length === 0) return { status: "disqualified", offer: null, reason: "Picked nothing they want help with" };

  const offer: Offer = a.want.some((w) => AI_WANTS.includes(w))
    ? "ai-consulting"
    : a.want.includes("custom_software")
      ? "custom-software"
      : "salesforce";

  const decider = a.role === "owner_exec" || a.role === "it_lead";
  const soon = a.timeline === "now" || a.timeline === "quarter";
  const bigBudget = a.budget_band === "25_75k" || a.budget_band === "75k_plus";
  const someBudget = bigBudget || a.budget_band === "10_25k";
  const r = label("role", a.role);
  const t = label("timeline", a.timeline).toLowerCase();
  const b = label("budget_band", a.budget_band);

  if (decider && soon && bigBudget) {
    return { status: "qualified", offer, grade: "A", gradeReason: `${r}, starting ${t}, budget ${b}.` };
  }
  if (soon || someBudget) {
    const why = [soon && `starting ${t}`, someBudget && `budget ${b}`].filter(Boolean).join(" and ");
    const missing = !decider ? `; not the owner or IT lead (${r})` : !soon ? `; timeline is ${t}` : `; budget is ${b}`;
    return { status: "qualified", offer, grade: "B", gradeReason: `${why[0].toUpperCase()}${why.slice(1)}${missing}.` };
  }
  return {
    status: "qualified",
    offer,
    grade: "C",
    gradeReason: `Qualified, but timeline is ${t} and budget is ${b.toLowerCase()}.`,
  };
}

/** The booking page for qualified leads (the form embeds it; the confirmation email links to it). */
export const CALENDLY_URL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

/** The Calendly link prefilled with the lead's name and email. */
export function calendlyLink(name: string, email: string): URL {
  const u = new URL(CALENDLY_URL);
  if (name.trim()) u.searchParams.set("name", name.trim());
  if (email.trim()) u.searchParams.set("email", email.trim());
  return u;
}

/**
 * A US phone number in E.164 (+1XXXXXXXXXX) for Google Ads enhanced
 * conversions, or "" when it isn't a 10-digit US number (an 11-digit one
 * starting with 1 is fine too). Anything else is left out rather than guessed.
 */
export function toE164(phone: string): string {
  const d = phone.replace(/\D/g, "");
  if (d.length === 10 && /^[2-9]/.test(d)) return `+1${d}`;
  if (d.length === 11 && d.startsWith("1") && /^[2-9]/.test(d.slice(1))) return `+${d}`;
  return "";
}

/** Lead ids are made in the browser (crypto.randomUUID); anything else is replaced. */
export const LEAD_ID_RE = /^[A-Za-z0-9-]{8,64}$/;
