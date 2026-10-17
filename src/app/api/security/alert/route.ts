import crypto from "node:crypto";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as store from "@/lib/proposals/store";

export const dynamic = "force-dynamic";

/**
 * The Invited Clubs apps report here when an AI tool or crawler tries to read a page.
 * The apps refuse it with a 403 first; this records who it was (IP, place, network,
 * bot) and emails Deep and Jaimin, at most once an hour for the same bot and IP.
 *
 * Callers send SECURITY_ALERT_KEY in x-alert-key; anything else is refused.
 * Records go in proposal_events under the slug "invited-app-security".
 */
const SLUG = "invited-app-security";
const NOTIFY = ["deep.patel@ardncloudsolutions.com", "jaimin.patel@ardncloudsolutions.com"];
const HOUR = 60 * 60 * 1000;

type Report = { app?: string; host?: string; path?: string; ip?: string; country?: string; userAgent?: string; bot?: string };
type Place = { city?: string; region?: string; country?: string; org?: string };

const same = (a: string, b: string) => a.length === b.length && crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
const clip = (v: unknown, n = 300) => (typeof v === "string" ? v.slice(0, n) : "");

// Where the IP is and whose network it is on (ipwho.is: free, no key). Nothing is lost if it fails.
async function place(ip: string): Promise<Place> {
  if (!ip) return {};
  try {
    const r = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}`, { signal: AbortSignal.timeout(3000) });
    const d = (await r.json()) as { success?: boolean; city?: string; region?: string; country?: string; connection?: { org?: string; isp?: string } };
    return d.success ? { city: d.city, region: d.region, country: d.country, org: d.connection?.org || d.connection?.isp } : {};
  } catch {
    return {};
  }
}

export async function POST(req: Request) {
  const key = process.env.SECURITY_ALERT_KEY ?? "";
  if (!key || !same(req.headers.get("x-alert-key") ?? "", key)) return new NextResponse("Forbidden", { status: 403 });

  const body = (await req.json().catch(() => ({}))) as Report;
  const r = { app: clip(body.app, 60), host: clip(body.host, 120), path: clip(body.path, 500), ip: clip(body.ip, 60), country: clip(body.country, 8), userAgent: clip(body.userAgent, 500), bot: clip(body.bot, 60) || "Unknown bot" };
  const where = await place(r.ip);
  const at = new Date();

  const recent = await store.listEvents(5000).catch(() => []);
  const seen = recent.some((e) => e.slug === SLUG && e.email === r.bot && (e.data as Report | null)?.ip === r.ip && at.getTime() - Date.parse(e.created_at) < HOUR);

  await store.insertEvent({ slug: SLUG, email: r.bot, session_id: null, type: "ai-crawler", page: `${r.host}${r.path}`, data: { ...r, ...where, emailed: !seen } });
  if (seen) return NextResponse.json({ ok: true, emailed: false });

  const placeLine = [where.city, where.region, where.country || r.country].filter(Boolean).join(", ") || "Unknown";
  const lines = [
    `${r.bot} tried to read the Invited Clubs ${r.app || "app"} and was refused.`,
    "",
    `Page: https://${r.host}${r.path}`,
    `IP: ${r.ip || "Unknown"}`,
    `Location: ${placeLine}`,
    `Network: ${where.org || "Unknown"}`,
    `Browser or bot: ${r.userAgent || "Unknown"}`,
    `Time: ${at.toLocaleString("en-US", { timeZone: "America/Chicago", dateStyle: "medium", timeStyle: "short" })} CT`,
    "",
    "An AI company's crawler fetches pages from that company's own servers, so the IP and network belong to the company, not to the person who asked it. Further attempts from this bot and IP in the next hour are logged without another email.",
  ];
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({ from: `"Ardn Security" <${process.env.SMTP_USER}>`, to: NOTIFY.join(", "), subject: `AI scan blocked: ${r.bot} on ${r.host}`, text: lines.join("\n") });
  } catch (e) {
    console.error("security alert email failed", e);
    return NextResponse.json({ ok: true, emailed: false });
  }
  return NextResponse.json({ ok: true, emailed: true });
}
