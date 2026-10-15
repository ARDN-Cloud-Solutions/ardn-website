import { NextResponse } from "next/server";
import { getSession } from "@/lib/proposals/server";
import { getPub } from "@/lib/proposals/team";

export const dynamic = "force-dynamic";

// What a signed-in viewer's open page polls: the published figures and their hash, nothing else.
// The stored document holds headcount, hours and client-facing numbers only, never a rate or a margin.
export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug") || "";
  const s = await getSession(slug).catch(() => null);
  if (!s) return NextResponse.json({ ok: false }, { status: 401 });
  try {
    const pub = await getPub(slug);
    return NextResponse.json({ ok: true, hash: pub?.hash ?? "", nums: pub?.nums ?? null, snap: pub?.snap ?? null }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("published-numbers", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
