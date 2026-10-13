import { NextResponse } from "next/server";
import { getProposalSite } from "@/content/proposals/sites";
import { getSession } from "@/lib/proposals/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const html = await getProposalSite(slug);
  if (!html) return new NextResponse("Not found", { status: 404 });
  const session = await getSession(slug).catch(() => null);
  if (!session) return NextResponse.redirect(new URL(`/proposals/${slug}/sign-in`, req.url));
  return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" } });
}
