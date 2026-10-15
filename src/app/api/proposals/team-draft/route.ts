import { NextResponse } from "next/server";
import { isArdnStaff } from "@/content/proposals";
import { getSession, logEvent } from "@/lib/proposals/server";
import { cleanDraftInput, defaultTeam, DEFAULT_RATE_CARD, getDraft, getPub, saveDraft } from "@/lib/proposals/team";

export const dynamic = "force-dynamic";

// Ardn staff only: this document holds cost and bill rates.
export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug") || "";
  const s = await getSession(slug).catch(() => null);
  if (!s) return NextResponse.json({ ok: false }, { status: 401 });
  if (!isArdnStaff(s.email)) return NextResponse.json({ ok: false }, { status: 403 });
  try {
    const [draft, pub] = await Promise.all([getDraft(slug), getPub(slug)]);
    return NextResponse.json(
      { ok: true, draft, published: pub ? { at: pub.at, by: pub.by, hash: pub.hash } : null, defaults: { team: defaultTeam(), rates: DEFAULT_RATE_CARD } },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (err) {
    console.error("team-draft", err);
    return NextResponse.json({ ok: false, message: "The team didn’t load. Try again." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { slug?: string; team?: unknown; rates?: unknown; nums?: unknown };
    const slug = String(body.slug || "");
    const s = await getSession(slug).catch(() => null);
    if (!s) return NextResponse.json({ ok: false }, { status: 401 });
    if (!isArdnStaff(s.email)) return NextResponse.json({ ok: false, message: "Only Ardn can change the team." }, { status: 403 });
    const input = cleanDraftInput(body);
    if (!input) return NextResponse.json({ ok: false, message: "Some figures are out of range. Check the team and the numbers." }, { status: 400 });
    const draft = await saveDraft(slug, s.email, input);
    await logEvent({ slug, email: s.email, session_id: s.id, type: "team-draft", page: "site", data: { people: draft.team.length } });
    return NextResponse.json({ ok: true, draft });
  } catch (err) {
    console.error("team-draft", err);
    return NextResponse.json({ ok: false, message: "The draft didn’t save. Try again." }, { status: 500 });
  }
}
