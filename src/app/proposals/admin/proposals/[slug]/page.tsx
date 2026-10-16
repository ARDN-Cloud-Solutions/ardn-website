import { notFound, redirect } from "next/navigation";
import { isArdnStaff, getProposal } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";
import AdminBar from "@/components/proposals/AdminBar";
import Editor from "@/components/proposals/Editor";
import { deleteProposal } from "../actions";
import { listComments, nameFromEmail } from "@/lib/proposals/comments";

const when = (iso: string) => new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "America/New_York" });

export const dynamic = "force-dynamic";

export default async function EditPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = await getSession("admin").catch(() => null);
  if (!s || !isArdnStaff(s.email)) redirect("/proposals/admin/sign-in");
  const { slug } = await params;
  const p = await getProposal(slug);
  if (!p) notFound();
  const comments = await listComments(slug).catch(() => []);
  const threads = comments.filter((c) => !c.parentId);
  return (
    <div style={{ minHeight: "100vh", background: "#FAF9F7" }}>
      <AdminBar email={s.email} active="proposals" />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 80px", display: "flex", flexDirection: "column", gap: 16 }}>
        <h1 style={{ margin: 0, fontSize: 40, color: "#0A0F2C" }}>{p.client}</h1>
        <section style={{ background: "#FFFFFF", border: "1px solid #E6E8F2", borderRadius: 16, padding: "20px 24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
            <h2 style={{ margin: 0, fontSize: 22, color: "#0A0F2C" }}>Comments ({comments.length})</h2>
            <a href={`/proposals/${p.slug}/site#comments`} style={{ fontSize: 14, fontWeight: 600, color: "#3A4289" }}>
              Reply on the proposal
            </a>
            <span style={{ fontSize: 13, color: "#4A5170" }}>Sign in to the proposal with your Ardn email; your answers show as Ardn.</span>
          </div>
          {threads.length === 0 && <p style={{ margin: "12px 0 0", fontSize: 14, color: "#4A5170" }}>No comments yet.</p>}
          {threads.map((t) => (
            <div key={t.id} style={{ borderTop: "1px solid #EEF0F6", marginTop: 14, paddingTop: 14 }}>
              {[t, ...comments.filter((c) => c.parentId === t.id)].map((c) => (
                <div key={c.id} style={{ marginLeft: c.parentId ? 24 : 0, marginTop: c.parentId ? 10 : 0, padding: "10px 14px", borderRadius: 12, background: c.side === "ardn" ? "#EEF3FF" : "#FAF9F7" }}>
                  <div style={{ fontSize: 13, color: "#4A5170" }}>
                    <b style={{ color: "#0A0F2C" }}>{nameFromEmail(c.email)}</b> · {c.email} · {when(c.createdAt)}
                    {c.where ? ` · ${c.where}` : ""}
                  </div>
                  <div style={{ fontSize: 15, color: "#0A0F2C", whiteSpace: "pre-wrap", marginTop: 4 }}>{c.text}</div>
                </div>
              ))}
            </div>
          ))}
        </section>
        <Editor initial={p} />
        <form action={deleteProposal} style={{ marginTop: 24 }}>
          <input type="hidden" name="slug" value={p.slug} />
          <button type="submit" style={{ height: 40, padding: "0 16px", borderRadius: 999, border: "1px solid #D8DBE8", background: "#FFFFFF", color: "#B42318", fontFamily: "inherit", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
            {p.slug === "invited-clubs" ? "Take offline (set to draft)" : "Delete this proposal"}
          </button>
        </form>
      </div>
    </div>
  );
}
