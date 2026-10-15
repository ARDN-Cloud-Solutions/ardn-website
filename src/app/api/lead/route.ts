import { after, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { funnelOf } from "@/app/start/registry";
import { LEAD_ID_RE } from "@/lib/leadFunnel";
import { SERVER_FUNNELS } from "@/lib/funnels/server";
import {
  ATTR_LONG,
  ATTR_SHORT,
  Invalid,
  SITE,
  esc,
  loose,
  obj,
  oneLine,
  received,
  text,
  type Accepted,
  type Attribution,
  type LeadMeta,
  type Row,
  type ServerFunnel,
} from "@/lib/funnels/server/shared";

/**
 * Receives a finished Google Ads qualification form (/start/<hook>), routes
 * it (qualified + offer + fit grade, or not a fit) and emails every lead to
 * the team with a call-prep brief on top. The hook decides the funnel
 * (src/app/start/registry.ts): AI consulting, Club Steward or Ardn CRM, each
 * with its own questions, routing and email copy (src/lib/funnels/server).
 * Nothing here depends on the arndai hub; when FUNNEL_HUB_ENABLED is "true"
 * an AI consulting lead is also mirrored there after the response, best
 * effort. A `partial: true` beacon (email typed, page left before
 * submitting) sends a short "started, not finished" note.
 *
 * Qualified leads also get an instant "next step" email from us (Calendly
 * link, what to have ready); it is sent after the response and never holds
 * up or fails the lead.
 *
 * Everything is checked at the boundary (known option values only, lengths,
 * email shape) and every string is escaped before it goes into the email.
 *
 * LEAD_EMAIL_LOG=1 (local testing only): when SMTP isn't configured, also
 * log the plain-text body of each email that would have been sent.
 */

const MAX_BODY = 20_000;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TEAM_EMAIL = "contactus@ardncloudsolutions.com";

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

function parse(raw: unknown) {
  const body = obj(raw, "body");
  const hook = body.hook;
  const id = typeof hook === "string" ? funnelOf(hook) : undefined;
  if (typeof hook !== "string" || !id) throw new Invalid("hook is not a known page");

  const accepted = SERVER_FUNNELS[id].accept(obj(body.answers, "answers"));

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

  // Made in the browser per submission (also the Google Ads transaction_id);
  // a missing or odd one is replaced so every lead email carries an id.
  const leadId = typeof body.leadId === "string" && LEAD_ID_RE.test(body.leadId) ? body.leadId : crypto.randomUUID();

  const meta: LeadMeta = { hook, contact, attribution, leadId };
  return { meta, accepted, website: text(body.website, "website", 300) };
}

// ── partial (started, not finished) ────────────────────────────────────────

// When someone has typed a valid email on the contact step but leaves before
// submitting, the page sends one beacon with `partial: true`. Each email gets
// at most one "started" note per 24 h (in memory, so it resets with the
// server), and none once the full form has come in.
const PARTIAL_TTL_MS = 24 * 60 * 60_000;
const partialSeen = new Map<string, number>();

function claimPartial(email: string) {
  const now = Date.now();
  for (const [k, t] of partialSeen) if (now - t > PARTIAL_TTL_MS) partialSeen.delete(k);
  const key = email.toLowerCase();
  if (partialSeen.has(key)) return false;
  partialSeen.set(key, now);
  return true;
}
const markFinished = (email: string) => partialSeen.set(email.toLowerCase(), Date.now());

/** Lenient: keep whatever is valid, drop the rest. Only the email is required. */
function parsePartial(body: Record<string, unknown>) {
  const id = typeof body.hook === "string" ? funnelOf(body.hook) : undefined;
  if (!id) throw new Invalid("hook is not a known page");
  const hook = body.hook as string;
  const email = loose(body.email, 200);
  if (!EMAIL.test(email)) throw new Invalid("Please enter a valid work email.");
  const a = body.answers && typeof body.answers === "object" && !Array.isArray(body.answers) ? (body.answers as Record<string, unknown>) : {};
  const at = body.attribution && typeof body.attribution === "object" ? (body.attribution as Record<string, unknown>) : {};
  const funnel: ServerFunnel = SERVER_FUNNELS[id];
  return {
    hook,
    funnel,
    email,
    name: loose(body.name, 120),
    company: loose(body.company, 160),
    phone: loose(body.phone, 40),
    answerRows: funnel.partialRows(a),
    gclid: loose(at.gclid, 300),
    utm_campaign: loose(at.utm_campaign, 300),
    utm_term: loose(at.utm_term, 300),
    website: loose(body.website, 300),
  };
}

function buildPartialEmail(p: ReturnType<typeof parsePartial>) {
  const who = oneLine(p.company || p.email);
  const subject = `[Started, not finished] ${who}${p.funnel.partialSuffix}`;
  const when = received();
  const rows: Row[] = [
    ["Email", p.email],
    ...(p.name ? ([["Name", p.name]] as Row[]) : []),
    ...(p.company ? ([["Company", p.company]] as Row[]) : []),
    ...(p.phone ? ([["Phone", p.phone]] as Row[]) : []),
    ...p.answerRows,
    ["Ad page", `${SITE}/start/${p.hook}`],
    ...(p.gclid ? ([["gclid", p.gclid]] as Row[]) : []),
    ...(p.utm_campaign ? ([["utm_campaign", p.utm_campaign]] as Row[]) : []),
    ...(p.utm_term ? ([["utm_term", p.utm_term]] as Row[]) : []),
    ["Received", when],
  ];
  const intro = `They reached the last step and typed their email, then left before submitting. A short, friendly follow-up usually works: offer ${p.funnel.partialOffer}.`;
  const cell = "padding:4px 10px;border:1px solid #ddd;vertical-align:top;";
  const html = `<div style="font-family:Arial,sans-serif;line-height:1.5;color:#222;max-width:720px">
<h2 style="color:#121c27;margin:0 0 6px">Started, not finished</h2>
<p style="margin:0 0 10px">${esc(intro)}</p>
<table style="border-collapse:collapse;font-size:13px">${rows.map(([k, v]) => `<tr><th style="${cell}text-align:left;white-space:nowrap">${esc(k)}</th><td style="${cell}">${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>
</div>`;
  const textBody = ["STARTED, NOT FINISHED", intro, "", ...rows.map(([k, v]) => `${k}: ${v}`)].join("\n");
  return { subject, html, text: textBody, replyTo: p.email };
}

// ── confirmation to the lead (qualified only) ──────────────────────────────

/** Best effort, after the response: logs, never throws. */
async function sendConfirmation(accepted: Accepted, meta: LeadMeta) {
  try {
    const sent = await sendMail({
      ...accepted.confirmation(meta),
      to: meta.contact.email,
      replyTo: TEAM_EMAIL,
      fromName: "Ardn Cloud Solutions",
      kind: "Lead confirmation email",
    });
    if (sent) console.info(`Lead confirmation email sent (lead ${meta.leadId}).`);
  } catch (error) {
    console.error(`Lead confirmation email failed (lead ${meta.leadId}; the lead itself was received):`, error instanceof Error ? error.message : error);
  }
}

// ── send ────────────────────────────────────────────────────────────────────

type Mail = {
  subject: string;
  html: string;
  text: string;
  replyTo: string;
  /** Defaults to the team inbox. */
  to?: string;
  /** Display name on the From address (the address is always SMTP_USER). */
  fromName?: string;
  /** What this email is, for the "skipped" log line. */
  kind?: string;
};

/** false when SMTP isn't configured (logged); throws when sending fails. */
async function sendMail(m: Mail): Promise<boolean> {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(`${m.kind ?? "Lead email"} skipped: SMTP_HOST / SMTP_USER / SMTP_PASS are not set. Subject: ${m.subject}`);
    if (process.env.LEAD_EMAIL_LOG === "1") console.warn(`----- ${m.kind ?? "Lead email"} (not sent) to ${m.to ?? "team"} -----\n${m.text}\n----- end -----`);
    return false;
  }
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  await transporter.sendMail({
    from: `"${m.fromName ?? "Ardn ad lead"}" <${SMTP_USER}>`,
    replyTo: m.replyTo,
    to: m.to ?? (process.env.CONTACT_RECEIVER_EMAIL || TEAM_EMAIL),
    subject: m.subject,
    html: m.html,
    text: m.text,
  });
  return true;
}

async function handlePartial(body: Record<string, unknown>) {
  let p: ReturnType<typeof parsePartial>;
  try {
    p = parsePartial(body);
  } catch (error) {
    if (error instanceof Invalid) return NextResponse.json({ error: error.message }, { status: 422 });
    throw error;
  }
  // Honeypot filled, or this email already noted (or finished) in the last 24 h.
  if (p.website || !claimPartial(p.email)) return new NextResponse(null, { status: 204 });
  try {
    await sendMail(buildPartialEmail(p));
  } catch (error) {
    console.error("Partial lead email failed:", error instanceof Error ? error.message : error);
  }
  return new NextResponse(null, { status: 204 });
}

// ── handler ─────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  const raw = await req.text();
  if (raw.length > MAX_BODY) return NextResponse.json({ error: "Your answers are too long." }, { status: 413 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowed(ip)) return NextResponse.json({ error: "Too many submissions from this address; try again later." }, { status: 429 });

  let lead: ReturnType<typeof parse>;
  try {
    const body: unknown = JSON.parse(raw);
    if (body && typeof body === "object" && (body as { partial?: unknown }).partial === true) {
      return handlePartial(body as Record<string, unknown>);
    }
    lead = parse(body);
  } catch (error) {
    if (error instanceof Invalid) return NextResponse.json({ error: error.message }, { status: 422 });
    if (error instanceof SyntaxError) return NextResponse.json({ error: "Your answers could not be read." }, { status: 422 });
    throw error;
  }

  // A field people never see; a filled one is a bot. Answer like a real
  // "not a fit" so it learns nothing, and send nothing.
  if (lead.website) return NextResponse.json({ status: "disqualified", offer: null });

  const { meta, accepted } = lead;
  const routing = accepted.routing;
  const mirror = accepted.mirror;
  if (mirror && process.env.FUNNEL_HUB_ENABLED === "true") after(() => mirror(meta));

  const { subject, html, text: textBody } = accepted.email(meta);
  const result = { status: routing.status, offer: routing.offer };

  try {
    await sendMail({ subject, html, text: textBody, replyTo: meta.contact.email });
    markFinished(meta.contact.email);
    if (routing.status === "qualified") {
      console.info(`Lead confirmation email queued (lead ${meta.leadId}).`);
      after(() => sendConfirmation(accepted, meta));
    }
  } catch (error) {
    // The email is the only record of the lead, so tell the page: it shows
    // the email / phone fallback with the answers prefilled.
    console.error("Lead email failed:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "We could not send your answers. Please try again." }, { status: 502 });
  }
  return NextResponse.json(result);
}
