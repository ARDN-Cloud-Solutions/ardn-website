// The Google Ads qualification form (/start/<hook>): its questions, and the
// rules that route a finished lead. Shared by the form (FunnelForm) and the
// route that receives it (/api/lead), so the option values and labels can
// never drift apart. Codes match the arndai hub seed for the
// `ardn-ai-consulting` funnel, which the route can still mirror to.

export type Opt = { value: string; label: string };
export type SelectCode = "want" | "industry" | "company_size" | "role" | "timeline" | "budget_band";
export type TextCode = "main_problem" | "current_systems";
export type Question =
  | { code: SelectCode; label: string; help?: string; multi?: boolean; options: Opt[] }
  | {
      code: TextCode;
      label: string;
      help?: string;
      text: true;
      placeholder: string;
      /** Characters, after trimming. 0 = optional. */
      min: number;
      max: number;
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
    placeholder: "e.g. Our office re-types every job from email into QuickBooks and things get missed",
    min: MAIN_PROBLEM_MIN,
    max: MAIN_PROBLEM_MAX,
  },
  {
    code: "company_size",
    label: "How many people work at your company?",
    options: [
      { value: "1_10", label: "1–10 people" },
      { value: "11_50", label: "11–50 people" },
      { value: "51_200", label: "51–200 people" },
      { value: "201_1000", label: "201–1,000 people" },
      { value: "1000_plus", label: "More than 1,000" },
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
    label: "What budget range are you working with?",
    help: "A range is fine. You get a fixed quote after the call.",
    options: [
      { value: "under_10k", label: "Under $10,000" },
      { value: "10_25k", label: "$10,000–$25,000" },
      { value: "25_75k", label: "$25,000–$75,000" },
      { value: "75k_plus", label: "$75,000+" },
      { value: "not_sure", label: "Not sure yet" },
    ],
  },
  {
    code: "current_systems",
    label: "What systems do you use today?",
    help: "Optional. CRM, ERP, spreadsheets… It lets the call start from what you already have.",
    text: true,
    placeholder: "e.g. HubSpot, QuickBooks, a lot of spreadsheets",
    min: 0,
    max: CURRENT_SYSTEMS_MAX,
  },
];

export type Answers = {
  want: string[];
  industry?: string;
  main_problem: string;
  company_size?: string;
  role?: string;
  timeline?: string;
  budget_band?: string;
  current_systems: string;
};

export const SELECT_CODES = ["industry", "company_size", "role", "timeline", "budget_band"] as const;

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
 * Same routing as the hub seed: disqualified for students / job seekers,
 * budgets under $10k, or nothing picked; otherwise the offer follows what
 * they want (AI first, then custom software, else Salesforce). Qualified
 * leads also get a fit grade so the caller knows how hard to prepare.
 */
export function routeLead(a: {
  want: string[];
  role: string;
  timeline: string;
  budget_band: string;
}): Routing {
  if (a.role === "student_jobseeker") return { status: "disqualified", offer: null, reason: "Student or job seeker" };
  if (a.budget_band === "under_10k") return { status: "disqualified", offer: null, reason: "Budget under $10,000" };
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
