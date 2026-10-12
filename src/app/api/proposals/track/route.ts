import { NextResponse } from "next/server";
import { getSession, logEvent } from "@/lib/proposals/server";

const TYPES = new Set(["view", "section", "video", "state", "leave"]);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { slug?: string; type?: string; page?: string; data?: unknown };
    const slug = String(body.slug || "");
    const type = String(body.type || "");
    if (!TYPES.has(type)) return NextResponse.json({ ok: false }, { status: 400 });
    const s = await getSession(slug);
    if (!s) return NextResponse.json({ ok: false }, { status: 401 });
    const raw = JSON.stringify(body.data ?? null);
    if (raw.length > 20_000) return NextResponse.json({ ok: false }, { status: 413 });
    await logEvent({ slug, email: s.email, session_id: s.id, type, page: String(body.page || "").slice(0, 40), data: body.data ?? null });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("track", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
