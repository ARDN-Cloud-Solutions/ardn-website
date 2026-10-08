import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AI_CRAWLERS, PRIVATE_PATHS } from "./lib/aiCrawlers";

/**
 * Keeps AI crawlers off the Club Steward proposal page and its product
 * screens. A crawler that names itself gets a 403; every response on these
 * paths also tells any other robot not to index, archive or train on it.
 * robots.ts repeats the same rule for crawlers that read robots.txt first.
 */

const BOT = new RegExp(AI_CRAWLERS.map((b) => b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "i");

function isPrivate(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  // next/image serves a resized copy at /_next/image?url=<the original path>.
  const path = pathname === "/_next/image" ? (searchParams.get("url") ?? "") : pathname;
  return PRIVATE_PATHS.some((p) => path.startsWith(p));
}

export function proxy(request: NextRequest) {
  if (!isPrivate(request)) return NextResponse.next();
  if (BOT.test(request.headers.get("user-agent") ?? "")) {
    return new NextResponse("Not available to automated crawlers.", {
      status: 403,
      headers: { "X-Robots-Tag": "noindex, nofollow, noarchive, noimageindex, noai, noimageai" },
    });
  }
  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, noimageindex, noai, noimageai");
  return res;
}

export const config = {
  matcher: ["/golf-club-management-software/proposal/:path*", "/images/club-steward/:path*", "/_next/image"],
};
