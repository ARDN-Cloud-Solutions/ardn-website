// Server-side pieces every funnel's lead handling shares: boundary checks,
// the email renderer and the shape each funnel plugs into /api/lead with.
// (Moved out of src/app/api/lead/route.ts unchanged.)

import type { FunnelId, Routing } from "../types";

export const SITE = "https://ardncloudsolutions.com";

export class Invalid extends Error {}

// Control characters other than newline / tab are never wanted in an email.
export const CONTROL = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;
export const oneLine = (v: string) => v.replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " ");

export function text(v: unknown, field: string, max: number, { required = false, min = 0, multiline = false } = {}): string {
  if (v === undefined || v === null) v = "";
  if (typeof v !== "string") throw new Invalid(`${field} must be text`);
  let s = v.replace(CONTROL, "").trim();
  if (!multiline) s = oneLine(s);
  if (required && !s) throw new Invalid(`Please enter your ${field}.`);
  if (s && s.length < min) throw new Invalid(`${field} must be at least ${min} characters.`);
  if (s.length > max) throw new Invalid(`${field} must be at most ${max} characters.`);
  return s;
}

export function obj(v: unknown, field: string): Record<string, unknown> {
  if (!v || typeof v !== "object" || Array.isArray(v)) throw new Invalid(`${field} is missing`);
  return v as Record<string, unknown>;
}

/** Lenient text for the partial beacon: keep what is valid, trim to size. */
export function loose(v: unknown, max: number, multiline = false) {
  if (typeof v !== "string") return "";
  const s = v.replace(CONTROL, "").trim();
  return (multiline ? s : oneLine(s)).slice(0, max);
}

// Sentence case for a label mid-sentence, leaving acronyms ("AI", "IT") alone.
export const lower = (s: string) => (/^[A-Z]{2}/.test(s) ? s : s.charAt(0).toLowerCase() + s.slice(1));
/** `lower`, also leaving "F&B"-style abbreviations alone (new funnels only; the AI funnel keeps `lower`). */
export const lowerLabel = (s: string) => (/^[A-Z]&[A-Z]/.test(s) ? s : lower(s));

export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export type Row = [string, string];
export type LinkItem = { what: string; url: string };
export type Section = { title: string; lines?: string[]; rows?: Row[]; links?: LinkItem[]; list?: string[]; quote?: string };

/** The team's lead email body (HTML and plain text) from its sections. */
export function renderSections(sections: Section[]) {
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

  return { html, text: textBody };
}

export const ATTR_LONG = ["query", "landingUrl", "referrer"] as const;
export const ATTR_SHORT = ["gclid", "gbraid", "wbraid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
export type Attribution = Record<(typeof ATTR_LONG)[number] | (typeof ATTR_SHORT)[number], string>;
export type Contact = { name: string; company: string; email: string; phone: string };

/** Everything about a lead except its answers (each funnel keeps those typed to itself). */
export type LeadMeta = { hook: string; contact: Contact; attribution: Attribution; leadId: string };

export type MailContent = { subject: string; html: string; text: string };

/** A funnel's answers, validated: the routing and everything that depends on them. */
export type Accepted = {
  routing: Routing;
  /**
   * False keeps a qualified lead out of the Google Ads "Qualified lead"
   * conversion (it is still emailed and still a GA4 qualified_lead), so ad
   * results only count leads our pricing fits. Omitted = true.
   */
  adsConversion?: boolean;
  email(meta: LeadMeta): MailContent;
  /** The "next step" email to a qualified lead. */
  confirmation(meta: LeadMeta): MailContent;
  /** Optional best-effort mirror after the response (AI funnel → arndai hub). */
  mirror?(meta: LeadMeta): Promise<void>;
};

export type ServerFunnel = {
  id: FunnelId;
  /** Validates the answers (throws Invalid with a message for the page). */
  accept(answers: Record<string, unknown>): Accepted;
  /** Lenient read of a partial beacon's answers: the rows worth showing, in order. */
  partialRows(answers: Record<string, unknown>): Row[];
  /** Appended to the "[Started, not finished] <who>" subject ("" for the AI funnel). */
  partialSuffix: string;
  /** What to offer in the follow-up ("the free 30-minute call" for the AI funnel). */
  partialOffer: string;
};

export const received = () => `${new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" })} ET`;

/** The Source section every team lead email ends with. */
export function sourceRows(m: LeadMeta, when: string): Row[] {
  const at = m.attribution;
  return [
    ["Lead id", m.leadId],
    ["Ad page", `${SITE}/start/${m.hook}`],
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
  ];
}

export const contactRows = (c: Contact): Row[] => [
  ["Name", c.name],
  ["Company", c.company],
  ["Email", c.email],
  ["Phone", c.phone || "—"],
];

/** The "next step" email to a qualified lead, from its parts (same layout for every funnel). */
export function confirmationMail(o: { subject: string; hello: string; thanks: string; url: string; ready: string[] }): MailContent {
  const reply = "We reply within 4 business hours. If you have a question before then, just reply to this email.";
  const sig = "Ardn Cloud Solutions · (407) 815-5303 · ardncloudsolutions.com";
  const html = `<div style="font-family:Arial,sans-serif;line-height:1.55;color:#222;max-width:560px;font-size:15px">
<p style="margin:0 0 12px">${esc(o.hello)}</p>
<p style="margin:0 0 16px">${esc(o.thanks)}</p>
<p style="margin:0 0 18px"><a href="${esc(o.url)}" style="display:inline-block;background:#0f8f7c;color:#ffffff;text-decoration:none;font-weight:bold;padding:11px 20px;border-radius:8px">Pick a time</a></p>
<p style="margin:0 0 6px">To make the most of the call, have ready:</p>
<ul style="margin:0 0 16px;padding-left:20px">${o.ready.map((x) => `<li style="margin:0 0 4px">${esc(x)}</li>`).join("")}</ul>
<p style="margin:0 0 20px">${esc(reply)}</p>
<p style="margin:0;color:#555;font-size:13px">${esc(sig)}</p>
</div>`;
  const textBody = [o.hello, "", o.thanks, "", `Pick a time: ${o.url}`, "", "To make the most of the call, have ready:", ...o.ready.map((x) => `- ${x}`), "", reply, "", "--", sig].join("\n");
  return { subject: o.subject, html, text: textBody };
}
