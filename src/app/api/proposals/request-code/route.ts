import { NextResponse } from "next/server";
import { ARDN_DOMAIN, emailAllowed, getProposal } from "@/content/proposals";
import { issueCode } from "@/lib/proposals/server";

export async function POST(req: Request) {
  try {
    const { slug, email } = (await req.json()) as { slug?: string; email?: string };
    const s = String(slug || "");
    const e = String(email || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      return NextResponse.json({ error: "Enter a valid work email." }, { status: 400 });
    }
    const isArdn = e.endsWith("@" + ARDN_DOMAIN);
    let allowed = false;
    if (s === "admin") allowed = isArdn;
    else {
      const p = await getProposal(s);
      if (!p) return NextResponse.json({ error: "Unknown proposal." }, { status: 404 });
      // Drafts are visible to Ardn only.
      allowed = isArdn || (p.status === "live" && emailAllowed(p, e));
    }
    // Same answer whether or not the address is allowed, so the list of
    // approved addresses can't be probed.
    if (allowed) {
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
