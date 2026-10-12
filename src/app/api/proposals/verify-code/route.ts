import { NextResponse } from "next/server";
import { getProposal } from "@/content/proposals";
import { COOKIE, sessionCookieValue, verifyCode } from "@/lib/proposals/server";

export async function POST(req: Request) {
  try {
    const { slug, email, code } = (await req.json()) as { slug?: string; email?: string; code?: string };
    const s = String(slug || "");
    const p = s === "admin" ? { slug: "admin" } : await getProposal(s);
    const e = String(email || "").trim().toLowerCase();
    if (!p || !e || !/^\d{6}$/.test(String(code || "").trim())) {
      return NextResponse.json({ error: "Enter the 6-digit code." }, { status: 400 });
    }
    const sessionId = await verifyCode(p.slug, e, String(code));
    if (!sessionId) {
      return NextResponse.json({ error: "That code is wrong or has expired." }, { status: 401 });
    }
    const res = NextResponse.json({ ok: true, next: p.slug === "admin" ? "/proposals/admin" : `/proposals/${p.slug}` });
    // No maxAge: the cookie ends with the browser session, so every new visit needs a new code.
    res.cookies.set(COOKIE, sessionCookieValue(sessionId), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return res;
  } catch (err) {
    console.error("verify-code", err);
    return NextResponse.json({ error: "We could not check the code right now." }, { status: 500 });
  }
}
