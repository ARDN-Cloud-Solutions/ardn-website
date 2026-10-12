import { NextResponse } from "next/server";
import { COOKIE, getSession, revokeSession } from "@/lib/proposals/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || "invited-clubs";
  const s = await getSession("*").catch(() => null);
  if (s) await revokeSession(s.id).catch(() => undefined);
  const dest = slug === "admin" ? "/proposals/admin/sign-in" : `/proposals/${encodeURIComponent(slug)}/sign-in`;
  const res = NextResponse.redirect(new URL(dest, url.origin));
  res.cookies.delete(COOKIE);
  return res;
}
