import { NextResponse } from "next/server";
import { isArdnStaff } from "@/content/proposals";
import { getSession, logEvent } from "@/lib/proposals/server";
import { publishDraft } from "@/lib/proposals/team";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { slug?: string };
    const slug = String(body.slug || "");
    const s = await getSession(slug).catch(() => null);
    if (!s) return NextResponse.json({ ok: false }, { status: 401 });
    if (!isArdnStaff(s.email)) return NextResponse.json({ ok: false, message: "Only Ardn can publish." }, { status: 403 });
    const pub = await publishDraft(slug, s.email);
    if (!pub) return NextResponse.json({ ok: false, message: "Save the draft first." }, { status: 409 });
    await logEvent({ slug, email: s.email, session_id: s.id, type: "team-publish", page: "site", data: pub.snap });
    return NextResponse.json({ ok: true, published: { at: pub.at, by: pub.by, hash: pub.hash }, snap: pub.snap, nums: pub.nums });
  } catch (err) {
    console.error("team-publish", err);
    return NextResponse.json({ ok: false, message: "The publish didn’t go through. Try again." }, { status: 500 });
  }
}
