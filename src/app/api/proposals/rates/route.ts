import { NextResponse } from "next/server";
import { isArdnStaff } from "@/content/proposals";
import { getSession, logEvent } from "@/lib/proposals/server";
import { getRates, saveRates, validRate, MIN_RATE, MAX_RATE } from "@/lib/proposals/rates";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug") || "";
  const s = await getSession(slug).catch(() => null);
  if (!s) return NextResponse.json({ ok: false }, { status: 401 });
  return NextResponse.json({ ok: true, rates: await getRates(slug), canEdit: isArdnStaff(s.email) }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { slug?: string; onshore?: unknown; offshore?: unknown };
    const slug = String(body.slug || "");
    const s = await getSession(slug).catch(() => null);
    if (!s) return NextResponse.json({ ok: false }, { status: 401 });
    if (!isArdnStaff(s.email)) return NextResponse.json({ ok: false, message: "Only Ardn can change the rates." }, { status: 403 });
    const onshore = validRate(body.onshore);
    const offshore = validRate(body.offshore);
    if (onshore === null || offshore === null) {
      return NextResponse.json({ ok: false, message: `Enter whole dollars from ${MIN_RATE.toLocaleString("en-US")} to ${MAX_RATE.toLocaleString("en-US")}.` }, { status: 400 });
    }
    const rates = await saveRates(slug, s.email, { onshore, offshore });
    await logEvent({ slug, email: s.email, session_id: s.id, type: "rates", page: "site", data: { onshore, offshore } });
    return NextResponse.json({ ok: true, rates });
  } catch (err) {
    console.error("rates", err);
    return NextResponse.json({ ok: false, message: "The rates didn’t save. Try again." }, { status: 500 });
  }
}
