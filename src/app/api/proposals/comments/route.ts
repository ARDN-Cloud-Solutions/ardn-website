import { NextResponse, after } from "next/server";
import { getSession, logEvent, notifyComment } from "@/lib/proposals/server";
import { addComment, listComments, MAX_COMMENT, nameFromEmail, type ProposalComment } from "@/lib/proposals/comments";

export const dynamic = "force-dynamic";

/** What the page shows: a name rather than the raw address for the other side. */
const shown = (c: ProposalComment, me: string) => ({
  id: c.id,
  parentId: c.parentId,
  name: c.side === "ardn" ? `${nameFromEmail(c.email)}, Ardn` : nameFromEmail(c.email),
  side: c.side,
  mine: c.email === me,
  text: c.text,
  where: c.where,
  createdAt: c.createdAt,
});

export async function GET(req: Request) {
  const slug = new URL(req.url).searchParams.get("slug") || "";
  const s = await getSession(slug).catch(() => null);
  if (!s) return NextResponse.json({ ok: false }, { status: 401 });
  const me = s.email.toLowerCase();
  return NextResponse.json({ ok: true, me: nameFromEmail(me), comments: (await listComments(slug)).map((c) => shown(c, me)) }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { slug?: string; text?: string; parentId?: string; where?: string };
    const slug = String(body.slug || "");
    const s = await getSession(slug).catch(() => null);
    if (!s) return NextResponse.json({ ok: false }, { status: 401 });
    const text = String(body.text || "").trim();
    if (!text) return NextResponse.json({ ok: false, message: "Write a comment first." }, { status: 400 });
    if (text.length > MAX_COMMENT) return NextResponse.json({ ok: false, message: `Keep a comment under ${MAX_COMMENT.toLocaleString("en-US")} characters.` }, { status: 413 });
    const c = await addComment(slug, s.email, { text, parentId: body.parentId, where: body.where });
    const thread = await listComments(slug);
    await logEvent({ slug, email: s.email, session_id: s.id, type: "comment", page: "site", data: { id: c.id, parentId: c.parentId, where: c.where, text: c.text.slice(0, 300) } });
    after(() => notifyComment(slug, c, thread));
    const me = s.email.toLowerCase();
    return NextResponse.json({ ok: true, comments: thread.map((x) => shown(x, me)) });
  } catch (err) {
    console.error("comments", err);
    return NextResponse.json({ ok: false, message: "Your comment didn’t send. Try again." }, { status: 500 });
  }
}
