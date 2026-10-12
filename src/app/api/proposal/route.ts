import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Receives a Club Steward proposal from /golf-club-management-software/proposal
 * and emails it to the team, so the figures people try are kept somewhere
 * other than their browser.
 *
 * A "printed" snapshot carries figures only. A "sent" one also carries the
 * name and email the person typed to ask us for a reply. Everything is checked
 * here, at the boundary, and every string is escaped before it goes into the
 * email.
 */

const MAX_BODY = 60_000;
const MAX_TEXT = 300;
const MAX_MONEY = 1_000_000_000_000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A light per-address brake against a script posting in a loop. In memory, so
// it resets with the server; enough for a noindex page shared by link.
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

function text(v: unknown, field: string, max = MAX_TEXT): string {
  if (v === undefined || v === null) return "";
  if (typeof v !== "string") throw new Invalid(`${field} must be text`);
  return v.trim().slice(0, max);
}

function money(v: unknown, field: string): number | null {
  if (v === null || v === undefined) return null;
  if (typeof v !== "number" || !Number.isFinite(v) || v < 0 || v > MAX_MONEY) throw new Invalid(`${field} must be an amount`);
  return Math.round(v);
}

function signedMoney(v: unknown, field: string): number {
  if (typeof v !== "number" || !Number.isFinite(v) || Math.abs(v) > MAX_MONEY * 10) throw new Invalid(`${field} must be an amount`);
  return Math.round(v);
}

function list(v: unknown, field: string, max: number): unknown[] {
  if (!Array.isArray(v) || v.length > max) throw new Invalid(`${field} must be a list`);
  return v;
}

function obj(v: unknown, field: string): Record<string, unknown> {
  if (!v || typeof v !== "object" || Array.isArray(v)) throw new Invalid(`${field} is missing`);
  return v as Record<string, unknown>;
}

const COST_KEYS = ["currentPlatform", "currentSupport", "futurePlatform", "futureSupport"] as const;

function parse(raw: unknown) {
  const body = obj(raw, "body");
  const reason = body.reason;
  if (reason !== "printed" && reason !== "sent") throw new Invalid("reason must be printed or sent");
  const s = obj(body.snapshot, "snapshot");

  const apps = list(s.apps, "apps", 60).map((x, i) => {
    const a = obj(x, `apps[${i}]`);
    const costs = obj(a.costs, `apps[${i}].costs`);
    return {
      name: text(a.name, "app name", 80),
      move: a.move === true,
      systems: text(a.systems, "systems"),
      costs: Object.fromEntries(COST_KEYS.map((k) => [k, money(costs[k], `${k}`)])) as Record<(typeof COST_KEYS)[number], number | null>,
    };
  });
  const estate = list(s.estate, "estate", 20).map((x, i) => {
    const e = obj(x, `estate[${i}]`);
    return { name: text(e.name, "estate name", 80), today: money(e.today, "today"), future: money(e.future, "future") };
  });
  const w = obj(s.whatIf, "whatIf");
  const years = w.years;
  if (years !== 1 && years !== 3 && years !== 5) throw new Invalid("years must be 1, 3 or 5");
  const rise = Number(w.rise);
  const adjust = Number(w.adjust);
  if (!Number.isFinite(rise) || rise < 0 || rise > 25) throw new Invalid("rise is out of range");
  if (!Number.isFinite(adjust) || adjust < -50 || adjust > 50) throw new Invalid("adjust is out of range");
  const o = obj(s.outlook, "outlook");
  const y = obj(s.yearly, "yearly");

  let sentBy: { name: string; email: string; preparedFor: string; note: string } | null = null;
  if (reason === "sent") {
    const b = obj(body.sentBy, "sentBy");
    sentBy = {
      name: text(b.name, "name", 120),
      email: text(b.email, "email", 200),
      preparedFor: text(b.preparedFor, "prepared for", 160),
      note: text(b.note, "note", 2000),
    };
    if (sentBy.name.length < 2) throw new Invalid("Please enter your name");
    if (!EMAIL.test(sentBy.email)) throw new Invalid("Please enter a valid email address");
  }

  return {
    reason,
    page: text(body.page, "page", 200),
    website: text(body.website, "website"),
    apps,
    estate,
    whatIf: { years, rise, adjust },
    outlook: {
      today: signedMoney(o.today, "outlook.today"),
      future: signedMoney(o.future, "outlook.future"),
      steward: signedMoney(o.steward, "outlook.steward"),
      saving: signedMoney(o.saving, "outlook.saving"),
    },
    yearly: { today: signedMoney(y.today, "yearly.today"), future: signedMoney(y.future, "yearly.future") },
    sentBy,
  };
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const usd = (n: number | null) =>
  n === null
    ? "—"
    : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const cell = "padding:6px 10px;border:1px solid #ddd;";

export async function POST(req: Request) {
  const raw = await req.text();
  if (raw.length > MAX_BODY) return NextResponse.json({ error: "Proposal is too large" }, { status: 413 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowed(ip)) return NextResponse.json({ error: "Too many proposals from this address; try again later." }, { status: 429 });

  let p: ReturnType<typeof parse>;
  try {
    p = parse(JSON.parse(raw));
  } catch (error) {
    if (error instanceof Invalid) return NextResponse.json({ error: error.message }, { status: 400 });
    if (error instanceof SyntaxError) return NextResponse.json({ error: "Proposal is not valid JSON" }, { status: 400 });
    throw error;
  }

  // The send form has a field people never see; a filled one is a bot. Answer
  // as if it worked so it learns nothing.
  if (p.website) return NextResponse.json({ ok: true });

  const moved = p.apps.filter((a) => a.move).length;
  const oneLine = (v: string) => v.replace(/[\r\n\t]+/g, " ");
  const who = p.sentBy ? oneLine(`${p.sentBy.name}${p.sentBy.preparedFor ? ` for ${p.sentBy.preparedFor}` : ""}`) : "anonymous";
  const subject =
    p.reason === "sent"
      ? `Club Steward proposal sent by ${who}`
      : `Club Steward proposal printed (${moved} app${moved === 1 ? "" : "s"} moved)`;

  const appRows = p.apps
    .map(
      (a) => `<tr>
  <td style="${cell}">${esc(a.name)}</td>
  <td style="${cell}">${esc(a.systems) || "—"}</td>
  <td style="${cell}text-align:right">${usd(a.costs.currentPlatform)}</td>
  <td style="${cell}text-align:right">${usd(a.costs.currentSupport)}</td>
  <td style="${cell}">${a.move ? "Moves" : "Stays"}</td>
  <td style="${cell}text-align:right">${a.move ? usd(a.costs.futurePlatform) : "—"}</td>
  <td style="${cell}text-align:right">${a.move ? usd(a.costs.futureSupport) : "—"}</td>
</tr>`,
    )
    .join("");
  const estateRows = p.estate
    .filter((e) => e.today !== null || e.future !== null)
    .map(
      (e) => `<tr><td style="${cell}">${esc(e.name)}</td><td style="${cell}text-align:right">${usd(e.today)}</td><td style="${cell}text-align:right">${usd(e.future)}</td></tr>`,
    )
    .join("");
  const span = `${p.whatIf.years} year${p.whatIf.years === 1 ? "" : "s"}`;

  const html = `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#222">
<h2 style="color:#121c27">${p.reason === "sent" ? "Proposal sent to Ardn" : "Proposal printed"}</h2>
${
  p.sentBy
    ? `<p><b>From:</b> ${esc(p.sentBy.name)} &lt;${esc(p.sentBy.email)}&gt;<br><b>Prepared for:</b> ${esc(p.sentBy.preparedFor) || "—"}${p.sentBy.note ? `<br><b>Note:</b> ${esc(p.sentBy.note).replace(/\n/g, "<br>")}` : ""}</p>`
    : "<p>Figures only; the person did not send their name.</p>"
}
<p><b>Per year:</b> today ${usd(p.yearly.today)}, with Club Steward ${usd(p.yearly.future)}.<br>
<b>Over ${span}</b> (today's costs rising ${p.whatIf.rise}% a year, Club Steward costs ${p.whatIf.adjust >= 0 ? "+" : ""}${p.whatIf.adjust}%):
today ${usd(p.outlook.today)}, with Club Steward ${usd(p.outlook.future)}, difference ${usd(p.outlook.saving)}.</p>
<h3>Apps</h3>
<table style="border-collapse:collapse;font-size:13px">
<tr><th style="${cell}">App</th><th style="${cell}">Today runs on</th><th style="${cell}">Platform today</th><th style="${cell}">Support today</th><th style="${cell}">Choice</th><th style="${cell}">Club Steward platform</th><th style="${cell}">Club Steward support</th></tr>
${appRows}
</table>
${estateRows ? `<h3>Across the estate</h3><table style="border-collapse:collapse;font-size:13px"><tr><th style="${cell}">Cost</th><th style="${cell}">Today</th><th style="${cell}">Future</th></tr>${estateRows}</table>` : ""}
<p style="color:#666;font-size:12px">From ${esc(p.page) || "the proposal page"}.</p>
</div>`;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"Club Steward proposal" <${process.env.SMTP_USER}>`,
      replyTo: p.sentBy?.email,
      to: process.env.CONTACT_RECEIVER_EMAIL || "contactus@ardncloudsolutions.com",
      subject,
      html,
    });
  } catch (error) {
    console.error("Proposal email failed:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "We could not send the proposal. Please try again later." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
