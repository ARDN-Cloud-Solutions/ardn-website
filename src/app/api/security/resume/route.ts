import { NextResponse } from "next/server";
import { isArdnStaff } from "@/content/proposals";
import { getSession, logEvent } from "@/lib/proposals/server";
import { findPause, resume } from "@/lib/proposals/sitePause";

export const dynamic = "force-dynamic";

// Only Deep or Jaimin, signed in to the admin, may turn the Invited test sites back on.
export async function POST(req: Request) {
  const s = await getSession("admin").catch(() => null);
  if (!s || !isArdnStaff(s.email)) return new NextResponse("Forbidden", { status: 403 });
  const id = String((await req.formData().catch(() => null))?.get("id") ?? "");
  const p = await findPause(id);
  if (!p) return new NextResponse("Not found", { status: 404 });
  const ok = await resume(p).catch(() => false);
  await logEvent({ slug: "invited-app-security", email: s.email, session_id: s.id, type: "site-resumed", page: p.host, data: { rid: p.rid, ok } }).catch(() => {});
  return NextResponse.redirect(new URL(`/proposals/admin/security/resume?id=${id}&${ok ? "done" : "failed"}=1`, req.url), 303);
}
