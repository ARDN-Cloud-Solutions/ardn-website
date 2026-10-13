import { after, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { HOOK_SLUGS } from "@/app/start/hooks";
import {
  CURRENT_SYSTEMS_MAX,
  MAIN_PROBLEM_MAX,
  MAIN_PROBLEM_MIN,
  SELECT_CODES,
  label,
  options,
  routeLead,
  type Routing,
} from "@/lib/leadFunnel";

/**
 * Receives a finished Google Ads qualification form (/start/<hook>), routes
 * it (qualified + offer + fit grade, or not a fit) and emails every lead to
 * the team with a call-prep brief on top. Nothing here depends on the arndai
 * hub; when FUNNEL_HUB_ENABLED is "true" the lead is also mirrored there
 * after the response, best effort.
 *
 * Everything is checked at the boundary (known option values only, lengths,
 * email shape) and every string is escaped before it goes into the email.
 */

const MAX_BODY = 20_000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE = "https://ardncloudsolutions.com";

// A light per-address brake against a script posting in a loop. In memory, so
// it resets with the server; same as the proposal route.
const WINDOW_MS = 10 * 60_000;
const PER_WINDOW = 20;
const recent = new Map<string, number[]>();

function allowed(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (hits.length >= PER_WINDOW) return false;
  hits.push(now);
  recent.set(ip, hits);
  return true;
}

class Invalid extends Error {}

// Control characters other than newline / tab are never wanted in an email.
const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;
const oneLine = (v: string) => v.replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " ");

function text(v: unknown, field: string, max: number, { required = false, min = 0, multiline = false } = {}): string {
  if (v === undefined || v === null) v = "";
  if (typeof v !== "string") throw new Invalid(`${field} must be text`);
  let s = v.replace(CONTROL, "").trim();
  if (!multiline) s = oneLine(s);
  if (required && !s) throw new Invalid(`Please enter your ${field}.`);
  if (s && s.length < min) throw new Invalid(`${field} must be at least ${min} characters.`);
  if (s.length > max) throw new Invalid(`${field} must be at most ${max} characters.`);
  return s;
}

function obj(v: unknown, field: string): Record<string, unknown> {
  if (!v || typeof v !== "object" || Array.isArray(v)) throw new Invalid(`${field} is missing`);
  return v as Record<string, unknown>;
}

function pick(v: unknown, code: (typeof SELECT_CODES)[number]): string {
  if (typeof v !== "string" || !options(code).some((o) => o.value === v)) throw new Invalid(`${code} is not a known answer`);
  return v;
}

const ATTR_LONG = ["query", "landingUrl", "referrer"] as const;
const ATTR_SHORT = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
type Attribution = Record<(typeof ATTR_LONG)[number] | (typeof ATTR_SHORT)[number], string>;

function parse(raw: unknown) {
  const body = obj(raw, "body");
  const hook = body.hook;
  if (typeof hook !== "string" || !(HOOK_SLUGS as string[]).includes(hook)) throw new Invalid("hook is not a known page");

  const a = obj(body.answers, "answers");
  const wantValues = options("want").map((o) => o.value);
  if (!Array.isArray(a.want) || a.want.length > wantValues.length) throw new Invalid("want must be a list");
  const want = a.want.map((w) => {
    if (typeof w !== "string" || !wantValues.includes(w)) throw new Invalid("want is not a known answer");
    return w;
  });
  if (new Set(want).size !== want.length) throw new Invalid("want has duplicates");

  const answers = {
    want,
    industry: pick(a.industry, "industry"),
    main_problem: text(a.main_problem, "problem", MAIN_PROBLEM_MAX, { required: true, min: MAIN_PROBLEM_MIN, multiline: true }),
    company_size: pick(a.company_size, "company_size"),
    role: pick(a.role, "role"),
    timeline: pick(a.timeline, "timeline"),
    budget_band: pick(a.budget_band, "budget_band"),
    current_systems: text(a.current_systems, "systems", CURRENT_SYSTEMS_MAX, { multiline: true }),
  };

  const contact = {
    name: text(body.name, "name", 120, { required: true, min: 2 }),
    company: text(body.company, "company", 160, { required: true }),
    email: text(body.email, "email", 200, { required: true }),
    phone: text(body.phone, "phone", 40),
  };
  if (!EMAIL.test(contact.email)) throw new Invalid("Please enter a valid work email.");
  if (contact.phone && contact.phone.replace(/\D/g, "").length < 7) throw new Invalid("Please enter a valid phone number.");

  const at = body.attribution === undefined || body.attribution === null ? {} : obj(body.attribution, "attribution");
  const attribution = {} as Attribution;
  for (const k of ATTR_LONG) attribution[k] = text(at[k], k, 2000);
  for (const k of ATTR_SHORT) attribution[k] = text(at[k], k, 300);

  return { hook, answers, contact, attribution, website: text(body.website, "website", 300) };
}

type Lead = ReturnType<typeof parse>;

// ── call prep ───────────────────────────────────────────────────────────────

// Sentence case for a label mid-sentence, leaving acronyms ("AI", "IT") alone.
const lower = (s: string) => (/^[A-Z]{2}/.test(s) ? s : s.charAt(0).toLowerCase() + s.slice(1));

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
  if (["51_200", "201_1000", "1000_plus"].includes(a.company_size) || a.role === "manager") {
    qs.push("Who else is involved in the decision, and who signs off?");
  }
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
  if (a.company_size === "1_10" && a.budget_band === "75k_plus") return "Budget is large for a 1–10 person company: confirm where the money comes from.";
  if (a.role === "manager") return "Not the owner or IT lead: find out who the economic buyer is and how to get them on the next call.";
  return "No obvious red flags. Confirm the budget range still fits once you hear the scope.";
}

// ── email ───────────────────────────────────────────────────────────────────

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const OFFER_NAME: Record<string, string> = {
  "ai-consulting": "AI consulting",
  "custom-software": "Custom software",
  salesforce: "Salesforce",
};

type Row = [string, string];
type Section = { title: string; lines?: string[]; rows?: Row[]; links?: { what: string; url: string }[]; list?: string[]; quote?: string };

function buildEmail(l: Lead, r: Routing) {
  const { answers: a, contact: c, attribution: at } = l;
  const company = oneLine(c.company);
  const subject =
    r.status === "qualified" ? `[Qualified lead · ${r.grade}] ${company} — ${r.offer}` : `[Not a fit] ${company}`;
  const when = `${new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" })} ET`;

  const who = `${c.name}, ${lower(label("role", a.role))} at ${c.company} (${lower(label("industry", a.industry))}, ${lower(label("company_size", a.company_size))}).`;
  const what = `Wants: ${wantsInWords(a.want)}. Start: ${lower(label("timeline", a.timeline))}; budget: ${lower(label("budget_band", a.budget_band))}.`;
  const fit =
    r.status === "qualified"
      ? `Grade ${r.grade} · ${OFFER_NAME[r.offer]}. ${r.gradeReason}`
      : `Not a fit: ${r.reason}.`;

  const sections: Section[] = [
    { title: "CALL PREP", lines: [who, what] },
    { title: "Their problem, in their words", quote: a.main_problem },
    { title: "Fit", lines: [fit] },
    { title: "Show them", links: showThem(l) },
    { title: "Ask them", list: askThem(l) },
    { title: "Watch for", lines: [watchFor(l, r)] },
    {
      title: "Contact",
      rows: [
        ["Name", c.name],
        ["Company", c.company],
        ["Email", c.email],
        ["Phone", c.phone || "—"],
      ],
    },
    {
      title: "All answers",
      rows: [
        ["Wants help with", a.want.map((w) => label("want", w)).join("; ") || "—"],
        ["Industry", label("industry", a.industry)],
        ["Problem", a.main_problem],
        ["Company size", label("company_size", a.company_size)],
        ["Role", label("role", a.role)],
        ["Start", label("timeline", a.timeline)],
        ["Budget", label("budget_band", a.budget_band)],
        ["Systems today", a.current_systems || "—"],
      ],
    },
    {
      title: "Source",
      rows: [
        ["Ad page", `${SITE}/start/${l.hook}`],
        ["Landing URL", at.landingUrl || "—"],
        ["Referrer", at.referrer || "—"],
        ["gclid", at.gclid || "—"],
        ...(at.gbraid ? ([["gbraid", at.gbraid]] as Row[]) : []),
        ...(at.wbraid ? ([["wbraid", at.wbraid]] as Row[]) : []),
        ["utm_source", at.utm_source || "—"],
        ["utm_medium", at.utm_medium || "—"],
        ["utm_campaign", at.utm_campaign || "—"],
        ["utm_term", at.utm_term || "—"],
        ["utm_content", at.utm_content || "—"],
        ["Received", when],
      ],
    },
  ];

  const cell = "padding:4px 10px;border:1px solid #ddd;vertical-align:top;";
  const br = (s: string) => esc(s).replace(/\n/g, "<br>");
  const html = `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#222;max-width:720px">
${sections
  .map((s, i) => {
    const h = i === 0 ? `<h2 style="color:#121c27;margin:0 0 6px">${esc(s.title)}</h2>` : `<h3 style="color:#121c27;margin:18px 0 6px">${esc(s.title)}</h3>`;
    const parts = [
      s.lines?.map((x) => `<p style="margin:0 0 4px">${br(x)}</p>`).join("") ?? "",
      s.quote ? `<blockquote style="margin:0;padding:6px 12px;border-left:3px solid #3b82f6;background:#f5f8ff">${br(s.quote)}</blockquote>` : "",
      s.links ? `<ul style="margin:0;padding-left:20px">${s.links.map((x) => `<li>${esc(x.what)}: <a href="${esc(x.url)}">${esc(x.url)}</a></li>`).join("")}</ul>` : "",
      s.list ? `<ol style="margin:0;padding-left:20px">${s.list.map((x) => `<li>${esc(x)}</li>`).join("")}</ol>` : "",
      s.rows
        ? `<table style="border-collapse:collapse;font-size:13px">${s.rows.map(([k, v]) => `<tr><th style="${cell}text-align:left;white-space:nowrap">${esc(k)}</th><td style="${cell}">${br(v)}</td></tr>`).join("")}</table>`
        : "",
    ];
    return h + parts.join("");
  })
  .join("\n")}
</div>`;

  const textBody = sections
    .map((s) => {
      const parts = [
        s.title.toUpperCase(),
        ...(s.lines ?? []),
        ...(s.quote ? s.quote.split("\n").map((x) => `> ${x}`) : []),
        ...(s.links ?? []).map((x) => `- ${x.what}: ${x.url}`),
        ...(s.list ?? []).map((x, i) => `${i + 1}. ${x}`),
        ...(s.rows ?? []).map(([k, v]) => `${k}: ${v}`),
      ];
      return parts.join("\n");
    })
    .join("\n\n");

  return { subject, html, text: textBody };
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
      company_size: a.company_size,
      role: a.role,
      timeline: a.timeline,
      budget_band: a.budget_band,
    };
    if (a.current_systems) answers.current_systems = a.current_systems;
    await hubPost("progress", { ...s, answers, lastQuestionCode: "current_systems", name: null, company: null, email: null, phone: null });
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

// ── handler ─────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  const raw = await req.text();
  if (raw.length > MAX_BODY) return NextResponse.json({ error: "Your answers are too long." }, { status: 413 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowed(ip)) return NextResponse.json({ error: "Too many submissions from this address; try again later." }, { status: 429 });

  let lead: Lead;
  try {
    lead = parse(JSON.parse(raw));
  } catch (error) {
    if (error instanceof Invalid) return NextResponse.json({ error: error.message }, { status: 422 });
    if (error instanceof SyntaxError) return NextResponse.json({ error: "Your answers could not be read." }, { status: 422 });
    throw error;
  }

  // A field people never see; a filled one is a bot. Answer like a real
  // "not a fit" so it learns nothing, and send nothing.
  if (lead.website) return NextResponse.json({ status: "disqualified", offer: null });

  const routing = routeLead(lead.answers);
  if (process.env.FUNNEL_HUB_ENABLED === "true") after(() => mirrorToHub(lead));

  const { subject, html, text: textBody } = buildEmail(lead, routing);
  const result = { status: routing.status, offer: routing.offer };

  const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(`Lead email skipped: SMTP_HOST / SMTP_USER / SMTP_PASS are not set. Lead: ${subject}`);
    return NextResponse.json(result);
  }
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"Ardn ad lead" <${SMTP_USER}>`,
      replyTo: lead.contact.email,
      to: process.env.CONTACT_RECEIVER_EMAIL || "contactus@ardncloudsolutions.com",
      subject,
      html,
      text: textBody,
    });
  } catch (error) {
    // The email is the only record of the lead, so tell the page: it shows
    // the email / phone fallback with the answers prefilled.
    console.error("Lead email failed:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "We could not send your answers. Please try again." }, { status: 502 });
  }
  return NextResponse.json(result);
}
