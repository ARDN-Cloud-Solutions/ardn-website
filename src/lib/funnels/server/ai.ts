// The AI consulting funnel's lead handling: answer checks, call prep, the
// team email, the confirmation email and the optional arndai hub mirror.
// Moved here from src/app/api/lead/route.ts WITHOUT changes to behaviour or
// wording; only the shared plumbing (validation, renderer) moved to ./shared.

import {
  CURRENT_SYSTEMS_MAX,
  MAIN_PROBLEM_MAX,
  MAIN_PROBLEM_MIN,
  SELECT_CODES,
  calendlyLink,
  label,
  options,
  routeLead,
  type Routing,
} from "@/lib/leadFunnel";
import {
  Invalid,
  SITE,
  confirmationMail,
  contactRows,
  lower,
  oneLine,
  loose,
  received,
  renderSections,
  sourceRows,
  text,
  type LeadMeta,
  type Row,
  type Section,
  type ServerFunnel,
} from "./shared";

function pick(v: unknown, code: (typeof SELECT_CODES)[number]): string {
  if (typeof v !== "string" || !options(code).some((o) => o.value === v)) throw new Invalid(`${code} is not a known answer`);
  return v;
}

function parseAnswers(a: Record<string, unknown>) {
  const wantValues = options("want").map((o) => o.value);
  if (!Array.isArray(a.want) || a.want.length > wantValues.length) throw new Invalid("want must be a list");
  const want = a.want.map((w) => {
    if (typeof w !== "string" || !wantValues.includes(w)) throw new Invalid("want is not a known answer");
    return w;
  });
  if (new Set(want).size !== want.length) throw new Invalid("want has duplicates");

  return {
    want,
    industry: pick(a.industry, "industry"),
    main_problem: text(a.main_problem, "problem", MAIN_PROBLEM_MAX, { required: true, min: MAIN_PROBLEM_MIN, multiline: true }),
    role: pick(a.role, "role"),
    timeline: pick(a.timeline, "timeline"),
    budget_band: pick(a.budget_band, "budget_band"),
    current_systems: text(a.current_systems, "systems", CURRENT_SYSTEMS_MAX, { multiline: true }),
  };
}

type AiAnswers = ReturnType<typeof parseAnswers>;
type Lead = LeadMeta & { answers: AiAnswers };

// ── call prep ───────────────────────────────────────────────────────────────

function wantsInWords(want: string[]) {
  return want.map((w) => lower(label("want", w))).join("; ") || "nothing picked";
}

function showThem(l: Lead): { what: string; url: string }[] {
  const out: { what: string; url: string }[] = [];
  const byIndustry: Record<string, { what: string; url: string }[]> = {
    construction_trades: [
      { what: "Ardn CRM for contractors", url: `${SITE}/construction-crm` },
      { what: "Ardn CRM video: leave HubSpot, keep everything (96 s)", url: "https://www.youtube.com/watch?v=nQP5pO0KOkc" },
    ],
    clubs_hospitality: [{ what: "Club Steward (golf and country club platform)", url: `${SITE}/golf-club-management-software` }],
    nonprofit_membership: [{ what: "Membership & Fundraising platform", url: `${SITE}/nonprofit-management-software` }],
    healthcare: [{ what: "Rx-Dr white-label telehealth case study", url: `${SITE}/case-studies/rx-dr-white-label-telehealth-platform` }],
  };
  out.push(...(byIndustry[l.answers.industry] ?? []));
  const w = l.answers.want;
  if (w.includes("ai_agents") || w.includes("ai_assistant")) out.push({ what: "AI agent development", url: `${SITE}/ai-agent-development` });
  if (w.includes("custom_software")) out.push({ what: "Our launches and case studies", url: `${SITE}/work` });
  if (w.includes("salesforce")) out.push({ what: "Salesforce consulting", url: `${SITE}/salesforce-consulting-orlando` });
  if (!out.length) out.push({ what: "Our launches and case studies", url: `${SITE}/work` });
  return out;
}

const CRM = /\b(hubspot|salesforce|zoho|pipedrive|dynamics|monday|keap|infusion ?soft|jobber|servicetitan|buildertrend|procore|crm)\b/i;

function askThem(l: Lead): string[] {
  const a = l.answers;
  const qs: string[] = [];
  const crm = a.current_systems.match(CRM)?.[0];
  if (crm) qs.push(`You mentioned ${crm}: what would you keep, and what would you happily replace?`);
  else if (!a.current_systems) qs.push("Where does this work live today: spreadsheets, email, an existing system?");
  if (a.timeline === "now") qs.push("What triggered this now, and what happens if it isn't fixed this month?");
  if (a.budget_band === "not_sure") qs.push("How will you measure success: which number changes if this works?");
  if (a.role === "manager") qs.push("Who else is involved in the decision, and who signs off?");
  if (a.budget_band === "under_10k") qs.push("What is the one deliverable that would make the biggest difference first?");
  if (a.role === "agency") qs.push("Who is the end client, and can they join the next call?");
  if (a.want.includes("ai_assistant") || a.want.includes("ai_agents")) {
    qs.push("What data would the AI need to work from, and where does it live today?");
  }
  if (a.want.includes("automation")) qs.push("Walk me through the manual step once: who does it, how often, how long does it take?");
  if (a.want.includes("custom_software")) qs.push("Who would use it day to day: your team, your customers, or both?");
  if (a.want.includes("salesforce")) qs.push("Which Salesforce edition and clouds are you on, and is there an admin in-house?");
  for (const fallback of [
    "What have you already tried, and why didn't it stick?",
    "What does a good result look like 90 days after launch?",
  ]) {
    if (qs.length < 3) qs.push(fallback);
  }
  return qs.slice(0, 4);
}

function watchFor(l: Lead, r: Routing): string {
  const a = l.answers;
  if (r.status === "disqualified") return `Not a fit (${lower(r.reason)}). Only call if they reach out again with a real project.`;
  if (a.role === "agency") return "Agency reselling for a client: confirm who owns the client relationship, the budget and the final decision.";
  if (a.timeline === "exploring") return "Just exploring: this may be research, not a buying decision. Find out early whether there is a real project and a date.";
  if (a.timeline === "later") return "Start is 3–6 months out: agree a concrete next step so it doesn't go cold.";
  if (a.budget_band === "not_sure") return "No budget set yet: anchor on the value of fixing the problem before talking price.";
  if (a.role === "manager") return "Not the owner or IT lead: find out who the economic buyer is and how to get them on the next call.";
  return "No obvious red flags. Confirm the budget range still fits once you hear the scope.";
}

// ── email ───────────────────────────────────────────────────────────────────

const OFFER_NAME: Record<string, string> = {
  "ai-consulting": "AI consulting",
  "custom-software": "Custom software",
  salesforce: "Salesforce",
};

function buildEmail(l: Lead, r: Routing) {
  const { answers: a, contact: c } = l;
  const company = oneLine(c.company);
  const subject =
    r.status === "qualified" ? `[Qualified lead · ${r.grade}] ${company} — ${r.offer}` : `[Not a fit] ${company}`;
  const when = received();

  const who = `${c.name}, ${lower(label("role", a.role))} at ${c.company} (${lower(label("industry", a.industry))}).`;
  const what = `Wants: ${wantsInWords(a.want)}. Start: ${lower(label("timeline", a.timeline))}; budget: ${lower(label("budget_band", a.budget_band))}.`;
  const fit =
    r.status === "qualified"
      ? `Grade ${r.grade} · ${OFFER_NAME[r.offer]}. ${r.gradeReason}`
      : `Not a fit: ${r.reason}.`;

  const sections: Section[] = [
    {
      title: "CALL PREP",
      lines: [
        who,
        what,
        ...(a.budget_band === "under_10k" ? ["Scope: small one-time project — propose a fixed, focused first deliverable."] : []),
      ],
    },
    { title: "Their problem, in their words", quote: a.main_problem },
    { title: "Fit", lines: [fit] },
    { title: "Show them", links: showThem(l) },
    { title: "Ask them", list: askThem(l) },
    { title: "Watch for", lines: [watchFor(l, r)] },
    { title: "Contact", rows: contactRows(c) },
    {
      title: "All answers",
      rows: [
        ["Wants help with", a.want.map((w) => label("want", w)).join("; ") || "—"],
        ["Industry", label("industry", a.industry)],
        ["Problem", a.main_problem],
        ["Role", label("role", a.role)],
        ["Start", label("timeline", a.timeline)],
        ["Budget", label("budget_band", a.budget_band)],
        ["Systems today", a.current_systems || "—"],
      ],
    },
    { title: "Source", rows: sourceRows(l, when) },
  ];

  return { subject, ...renderSections(sections) };
}

// ── confirmation to the lead (qualified only) ──────────────────────────────

const CONFIRM_SUBJECT = "Your Ardn call: next step";
const PROBLEM_QUOTE_MAX = 280;

function buildConfirmationEmail(l: Lead) {
  const { contact: c, answers: a } = l;
  const first = oneLine(c.name).split(" ")[0] ?? "";
  const book = calendlyLink(c.name, c.email);
  book.searchParams.set("utm_source", "lead-email");
  book.searchParams.set("utm_medium", "email");
  book.searchParams.set("utm_content", l.hook);
  const problem = oneLine(a.main_problem);
  const quoted = problem.length > PROBLEM_QUOTE_MAX ? `${problem.slice(0, PROBLEM_QUOTE_MAX).trimEnd()}…` : problem;
  const tools = oneLine(a.current_systems);
  return confirmationMail({
    subject: CONFIRM_SUBJECT,
    hello: first ? `Hi ${first},` : "Hi,",
    thanks: "Thanks for telling us about your project. The next step is a free 30-minute call with our team.",
    url: book.toString(),
    ready: [
      `1–2 real examples of the problem you described: "${quoted}"`,
      tools ? `The tools you use today (you mentioned: ${tools}), and what you like or dislike about them` : "The tools you use today, and what you like or dislike about them",
    ],
  });
}

// ── hub mirror (optional) ───────────────────────────────────────────────────

const HUB_BASE = (process.env.NEXT_PUBLIC_FUNNEL_API_BASE ?? "https://ardnai.com").replace(/\/$/, "");
const HUB_FUNNEL = "ardn-ai-consulting";

async function hubPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${HUB_BASE}/api/funnels/${HUB_FUNNEL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(3000),
  });
  if (!res.ok) throw new Error(`hub ${path}: HTTP ${res.status}`);
  return (await res.json().catch(() => ({}))) as T;
}

/** start → progress → complete on the hub. Never throws. */
async function mirrorToHub(l: Lead) {
  try {
    const { answers: a, contact: c, attribution: at } = l;
    const started = await hubPost<{ submissionId?: string; sessionKey?: string }>("start", {
      query: at.query,
      landingUrl: at.landingUrl || `${SITE}/start/${l.hook}`,
      referrer: at.referrer || null,
      page: l.hook,
      ref: null,
    });
    if (!started.submissionId || !started.sessionKey) throw new Error("hub start: no session");
    const s = { submissionId: started.submissionId, sessionKey: started.sessionKey };
    const answers: Record<string, unknown> = {
      want: a.want,
      industry: a.industry,
      main_problem: a.main_problem,
      role: a.role,
      timeline: a.timeline,
      budget_band: a.budget_band,
    };
    if (a.current_systems) answers.current_systems = a.current_systems;
    await hubPost("progress", { ...s, answers, lastQuestionCode: "budget_band", name: null, company: null, email: null, phone: null });
    await hubPost("complete", {
      ...s,
      answers: { ...answers, name: c.name, company: c.company, email: c.email, ...(c.phone ? { phone: c.phone } : {}) },
      name: c.name,
      company: c.company,
      email: c.email,
      phone: c.phone || null,
    });
  } catch (error) {
    console.warn("Lead hub mirror failed (lead still emailed):", error instanceof Error ? error.message : error);
  }
}

// ── partial ────────────────────────────────────────────────────────────────

function partialRows(a: Record<string, unknown>): Row[] {
  const wantValues = options("want").map((o) => o.value);
  const want = Array.isArray(a.want) ? [...new Set(a.want.filter((w): w is string => typeof w === "string" && wantValues.includes(w)))] : [];
  const picked: Partial<Record<(typeof SELECT_CODES)[number], string>> = {};
  for (const code of SELECT_CODES) {
    const v = a[code];
    if (typeof v === "string" && options(code).some((o) => o.value === v)) picked[code] = v;
  }
  const main_problem = loose(a.main_problem, MAIN_PROBLEM_MAX, true);
  const current_systems = loose(a.current_systems, CURRENT_SYSTEMS_MAX, true);
  return [
    ...(want.length ? ([["Wants help with", want.map((w) => label("want", w)).join("; ")]] as Row[]) : []),
    ...(picked.industry ? ([["Industry", label("industry", picked.industry)]] as Row[]) : []),
    ...(main_problem ? ([["Problem", main_problem]] as Row[]) : []),
    ...(current_systems ? ([["Tools today", current_systems]] as Row[]) : []),
    ...(picked.role ? ([["Role", label("role", picked.role)]] as Row[]) : []),
    ...(picked.timeline ? ([["Start", label("timeline", picked.timeline)]] as Row[]) : []),
    ...(picked.budget_band ? ([["Budget", label("budget_band", picked.budget_band)]] as Row[]) : []),
  ];
}

export const AI_SERVER: ServerFunnel = {
  id: "ardn-ai-consulting",
  accept(raw) {
    const answers = parseAnswers(raw);
    const routing = routeLead(answers);
    const lead = (m: LeadMeta): Lead => ({ ...m, answers });
    return {
      routing,
      email: (m) => buildEmail(lead(m), routing),
      confirmation: (m) => buildConfirmationEmail(lead(m)),
      mirror: (m) => mirrorToHub(lead(m)),
    };
  },
  partialRows,
  partialSuffix: "",
  partialOffer: "the free 30-minute call",
};
