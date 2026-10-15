import { NextResponse } from "next/server";
import { isArdnStaff } from "@/content/proposals";
import { getProposalSite, getProposalStaffParts } from "@/content/proposals/sites";
import { getSession } from "@/lib/proposals/server";
import { getPub } from "@/lib/proposals/team";

export const dynamic = "force-dynamic";

// JSON inside a <script> must not be able to close it.
const inline = (v: unknown) => JSON.stringify(v).replace(/</g, "\\u003c");

export async function GET(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let html = await getProposalSite(slug);
  if (!html) return new NextResponse("Not found", { status: 404 });
  const session = await getSession(slug).catch(() => null);
  if (!session) return NextResponse.redirect(new URL(`/proposals/${slug}/sign-in`, req.url));

  // The figures Ardn published go into the page here, so the first paint is already right.
  // The document holds headcount, hours and client-facing numbers only, never a rate or a margin.
  const pub = await getPub(slug).catch(() => null);
  const staff = isArdnStaff(session.email);
  const state = { nums: pub?.nums ?? null, snap: pub?.snap ?? null, hash: pub?.hash ?? "", canEdit: staff };
  html = html.replace("<!--STATE-->", () => `<script>window.__PROPOSAL_STATE__=${inline(state)}</script>`);

  // The team admin tab, its markup and its script exist only in the page a staff member is sent.
  const parts = staff ? await getProposalStaffParts(slug) : null;
  for (const name of ["STAFF-TAB", "STAFF-VIEW", "STAFF-SCRIPT"]) html = html.replace(`<!--${name}-->`, () => parts?.[name] ?? "");

  return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" } });
}
