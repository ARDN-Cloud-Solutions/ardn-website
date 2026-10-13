import { notFound, redirect } from "next/navigation";
import { isArdnStaff, getProposal } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";
import AdminBar from "@/components/proposals/AdminBar";
import Editor from "@/components/proposals/Editor";
import { deleteProposal } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = await getSession("admin").catch(() => null);
  if (!s || !isArdnStaff(s.email)) redirect("/proposals/admin/sign-in");
  const { slug } = await params;
  const p = await getProposal(slug);
  if (!p) notFound();
  return (
    <div style={{ minHeight: "100vh", background: "#FAF9F7" }}>
      <AdminBar email={s.email} active="proposals" />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 80px", display: "flex", flexDirection: "column", gap: 16 }}>
        <h1 style={{ margin: 0, fontSize: 40, color: "#0A0F2C" }}>{p.client}</h1>
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
