import { NextResponse } from "next/server";
import { isArdnStaff } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";
import { getPub } from "@/lib/proposals/team";

export const dynamic = "force-dynamic";

// Every signed-in viewer of the proposal. Reads only the published document,
// which holds headcount, hours and client-facing numbers: never a rate or a margin.
// canEdit lets the page show the staff tab; it says nothing about the team.
export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug") || "";
  const s = await getSession(slug).catch(() => null);
  if (!s) return NextResponse.json({ ok: false }, { status: 401 });
  const canEdit = isArdnStaff(s.email);
  try {
    const pub = await getPub(slug);
    if (!pub) return NextResponse.json({ ok: true, published: false, canEdit }, { headers: { "Cache-Control": "no-store" } });
    const { peopleMs, hoursMs, peopleImpl, hoursImpl } = pub.snap;
    return NextResponse.json({ ok: true, published: true, peopleMs, hoursMs, peopleImpl, hoursImpl, nums: pub.nums, canEdit }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("team-public", err);
    return NextResponse.json({ ok: true, published: false, canEdit }, { headers: { "Cache-Control": "no-store" } });
  }
}
