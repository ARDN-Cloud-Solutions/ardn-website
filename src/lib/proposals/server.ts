import crypto from "node:crypto";
import { cookies, headers } from "next/headers";
import nodemailer from "nodemailer";
import * as store from "./store";
import { getProposal } from "@/content/proposals";
import { visitEmail } from "./visitEmail";

/**
 * Server side of the proposal area.
 * Storage: the ardn-website Supabase project (see store.ts).
 * Email: the site's existing SMTP settings (same as /api/contact).
 *
 * Optional env:
 *   PROPOSALS_NOTIFY_EMAIL   where "opened" alerts and visit summaries go (default CONTACT_RECEIVER_EMAIL)
 *   PROPOSALS_SECRET         signing secret (required)
 */

const CODE_TTL_MIN = 10;
const SESSION_TTL_HOURS = 4;
const MAX_ATTEMPTS = 5;
const MAX_CODES_PER_HOUR = 5;
export const COOKIE = "prp_session";

// ── Crypto helpers ──────────────────────────────────────────────────────────

const hmac = (s: string) => crypto.createHmac("sha256", store.secret()).update(s).digest("hex");

export function newCode(): string {
  return String(crypto.randomInt(0, 1_000_000)).padStart(6, "0");
}

async function clientInfo() {
  const h = await headers();
  return {
    ip: (h.get("x-forwarded-for") || "").split(",")[0].trim() || null,
    user_agent: h.get("user-agent") || null,
  };
}

// ── Codes ───────────────────────────────────────────────────────────────────

export async function issueCode(slug: string, email: string): Promise<"ok" | "rate_limited"> {
  const since = new Date(Date.now() - 3600_000).toISOString();
  if ((await store.countRecentCodes(slug, email, since)) >= MAX_CODES_PER_HOUR) return "rate_limited";
  const code = newCode();
  await store.insertCode({
    slug,
    email,
    code_hash: hmac(`${slug}:${email}:${code}`),
    expires_at: new Date(Date.now() + CODE_TTL_MIN * 60_000).toISOString(),
  });
  await sendMail(
    email,
    `Your sign-in code: ${code}`,
    `Your code to open the Club Steward proposal is ${code}.\n\nIt expires in ${CODE_TTL_MIN} minutes. If you did not ask for it, you can ignore this email.\n\nArdn Cloud Solutions`,
    codeHtml(code),
  );
  await logEvent({ slug, email, session_id: null, type: "code_sent", page: "sign-in", data: null });
  return "ok";
}

export async function verifyCode(slug: string, email: string, code: string): Promise<string | null> {
  const now = new Date().toISOString();
  const row = await store.latestOpenCode(slug, email);
  if (!row || row.attempts >= MAX_ATTEMPTS) return null;
  const want = Buffer.from(row.code_hash);
  const got = Buffer.from(hmac(`${slug}:${email}:${code.trim()}`));
  if (want.length !== got.length || !crypto.timingSafeEqual(want, got)) {
    await store.patchCode(row.id, { attempts: row.attempts + 1 });
    return null;
  }
  await store.patchCode(row.id, { used_at: now });
  const info = await clientInfo();
  const session = await store.insertSession({
    slug,
    email,
    expires_at: new Date(Date.now() + SESSION_TTL_HOURS * 3600_000).toISOString(),
    ...info,
  });
  await logEvent({ slug, email, session_id: session.id, type: "open", page: "sign-in", data: null });
  void notifyOpen(slug, email);
  return session.id;
}

// ── Sessions ────────────────────────────────────────────────────────────────

export function sessionCookieValue(id: string) {
  return `${id}.${hmac(id)}`;
}

export type Session = { id: string; slug: string; email: string };

/** Reads and checks the viewer's session. A browser-session cookie plus a
 *  4-hour server expiry means a new code on every visit. */
export async function getSession(slug: string): Promise<Session | null> {
  const raw = (await cookies()).get(COOKIE)?.value;
  if (!raw) return null;
  const [id, sig] = raw.split(".");
  if (!id || !sig || hmac(id) !== sig) return null;
  const s = await store.findSession(id);
  if (!s) return null;
  if (slug !== "*" && s.slug !== slug) return null;
  return s;
}

export async function revokeSession(id: string) {
  await store.patchSession(id, { revoked_at: new Date().toISOString() });
}

export async function logEvent(e: {
  slug: string;
  email: string;
  session_id: string | null;
  type: string;
  page: string;
  data: unknown;
}) {
  await store.insertEvent(e);
}

// ── Email ───────────────────────────────────────────────────────────────────

async function sendMail(to: string, subject: string, text: string, html?: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({ from: `"Ardn Cloud Solutions" <${process.env.SMTP_USER}>`, to, subject, text, html });
}

async function notifyOpen(slug: string, email: string) {
  const to = process.env.PROPOSALS_NOTIFY_EMAIL || process.env.CONTACT_RECEIVER_EMAIL;
  if (!to) return;
  try {
    await sendMail(to, `Proposal opened: ${slug} by ${email}`, `${email} just opened the ${slug} proposal.\n\nSee activity: ${process.env.NEXT_PUBLIC_BASE_URL || ""}/proposals/admin`);
  } catch {
    /* an alert failure must not block the viewer */
  }
}

/**
 * After a visitor leaves (or switches tabs), email Ardn what they had on screen
 * and every change they made in this visit (see visitEmail.ts). Sent only when
 * something happened since the last summary for the session, so a tab switch
 * with no new activity sends nothing.
 */
export async function notifyVisit(slug: string, sessionId: string, email: string, reason: "leave" | "export" = "leave") {
  const to = process.env.PROPOSALS_NOTIFY_EMAIL || process.env.CONTACT_RECEIVER_EMAIL;
  if (!to || slug === "admin") return;
  try {
    const events = (await store.listEvents(5000)).filter((e) => e.session_id === sessionId);
    const lastSummary = Math.max(0, ...events.filter((e) => e.type === "summary").map((e) => e.id));
    if (reason === "leave" && !events.some((e) => e.id > lastSummary && (e.type === "state" || e.type === "view" || e.type === "export"))) return;
    const p = await getProposal(slug);
    if (!p) return;
    const mail = visitEmail(p, email, events.filter((e) => e.type !== "summary"));
    if (!mail) return;
    await logEvent({ slug, email, session_id: sessionId, type: "summary", page: "", data: { upTo: Math.max(...events.map((e) => e.id)) } });
    await sendMail(to, mail.subject, mail.text, mail.html);
  } catch (err) {
    console.error("notifyVisit", err);
  }
}

function codeHtml(code: string) {
  return `<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:32px;color:#0A0F2C">
  <p style="margin:0 0 8px;font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:#073D2E">Club Steward proposal</p>
  <h1 style="margin:0 0 16px;font-size:24px">Your sign-in code</h1>
  <p style="margin:0 0 24px;font-size:36px;letter-spacing:.3em;font-weight:700">${code}</p>
  <p style="margin:0;font-size:14px;color:#4A5170">It expires in ${CODE_TTL_MIN} minutes. If you did not ask for it, you can ignore this email.</p>
  <p style="margin:24px 0 0;font-size:13px;color:#4A5170">Ardn Cloud Solutions</p></div>`;
}
