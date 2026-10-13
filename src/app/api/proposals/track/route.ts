import { NextResponse, after } from "next/server";
import { getSession, logEvent, notifyVisit } from "@/lib/proposals/server";

const TYPES = new Set(["view", "section", "video", "state", "leave", "export"]);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { slug?: string; type?: string; page?: string; data?: unknown };
    const slug = String(body.slug || "");
    const type = String(body.type || "");
    if (!TYPES.has(type)) return NextResponse.json({ ok: false }, { status: 400 });
    const s = await getSession(slug);
    if (!s) return NextResponse.json({ ok: false }, { status: 401 });
    const raw = JSON.stringify(body.data ?? null);
    if (raw.length > 60_000) return NextResponse.json({ ok: false }, { status: 413 });
    await logEvent({ slug, email: s.email, session_id: s.id, type, page: String(body.page || "").slice(0, 40), data: body.data ?? null });
    // Wait a few seconds for the last debounced change to land, then email the visit to Ardn.
    if (type === "leave") after(async () => { await new Promise((r) => setTimeout(r, 4000)); await notifyVisit(slug, s.id, s.email); });
    // An export carries every number on screen; email it at once.
    if (type === "export") after(() => notifyVisit(slug, s.id, s.email, "export"));
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("track", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
