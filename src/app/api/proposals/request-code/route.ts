import { NextResponse } from "next/server";
import { emailAllowed, getProposal, isArdnStaff } from "@/content/proposals";
import { issueCode } from "@/lib/proposals/server";

export async function POST(req: Request) {
  try {
    const { slug, email } = (await req.json()) as { slug?: string; email?: string };
    const s = String(slug || "");
    const e = String(email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
    }
    const isArdn = isArdnStaff(e);
    let allowed = false;
    if (s === "admin") allowed = isArdn;
    else {
      const p = await getProposal(s);
      if (!p) return NextResponse.json({ error: "Unknown proposal." }, { status: 404 });
      // Drafts are visible to Ardn only.
      allowed = isArdn || (p.status === "live" && emailAllowed(p, e));
    }
    if (!allowed) {
      return NextResponse.json({ error: "This email is not approved for this proposal. Ask your Ardn contact for access." }, { status: 403 });
    }
    {
      const r = await issueCode(s, e);
      if (r === "rate_limited") {
        return NextResponse.json({ error: "Too many codes requested. Try again in an hour." }, { status: 429 });
      }
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("request-code", err);
    return NextResponse.json({ error: "We could not send a code right now." }, { status: 500 });
  }
}
