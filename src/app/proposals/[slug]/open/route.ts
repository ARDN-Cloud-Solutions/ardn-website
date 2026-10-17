import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { isArdnStaff } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";

export const dynamic = "force-dynamic";

/**
 * The only way into the Invited Clubs test sites. A Demo link on the proposal comes here;
 * a signed-in viewer (an Invited or Ardn email) is sent on to the site with a two-minute
 * ticket, which the site's Worker trades for its own cookie (siteGate.ts in the monorepo).
 * Anyone else is sent to the proposal sign-in first.
 *
 * Ticket: base64url(JSON {e, h, x, k:"t"}) + "." + hex HMAC-SHA256(gateKey, payload), where
 * gateKey = HMAC-SHA256(SECURITY_ALERT_KEY, "invited-site-gate").
 */
const SITES: Record<string, Record<string, string>> = {
  "invited-clubs": {
    staff: "qa-invited-clubs-tenant-admin-web.developer-bef.workers.dev",
    member: "qa-invited-clubs-member-portal-web.developer-bef.workers.dev",
  },
};
const ALLOWED = /@(invitedclubs\.com|ardncloudsolutions\.com)$/i;

function ticket(email: string, host: string): string {
  const gateKey = crypto.createHmac("sha256", process.env.SECURITY_ALERT_KEY ?? "").update("invited-site-gate").digest();
  const payload = Buffer.from(JSON.stringify({ e: email, h: host, x: Math.floor(Date.now() / 1000) + 120, k: "t" })).toString("base64url");
  return `${payload}.${crypto.createHmac("sha256", gateKey).update(payload).digest("hex")}`;
}

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const url = new URL(req.url);
  const host = SITES[slug]?.[url.searchParams.get("app") ?? ""];
  if (!host || !process.env.SECURITY_ALERT_KEY) return new NextResponse("Not found", { status: 404 });

  const to = url.searchParams.get("to") ?? "/";
  const next = to.startsWith("/") && !to.startsWith("//") && !to.startsWith("/\\") ? to : "/";

  const s = (await getSession(slug).catch(() => null)) ?? (await getSession("admin").catch(() => null));
  const ok = s && (s.slug === slug || isArdnStaff(s.email)) && ALLOWED.test(s.email);
  if (!ok) return NextResponse.redirect(new URL(`/proposals/${slug}/sign-in`, req.url));

  const go = `https://${host}/__gate?t=${encodeURIComponent(ticket(s.email.toLowerCase(), host))}&next=${encodeURIComponent(next)}`;
  return NextResponse.redirect(go, { headers: { "Cache-Control": "no-store" } });
}
