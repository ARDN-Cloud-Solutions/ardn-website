import { redirect } from "next/navigation";
import AdminBar from "@/components/proposals/AdminBar";
import { isArdnStaff } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";
import { findPause, stillPaused } from "@/lib/proposals/sitePause";

export const dynamic = "force-dynamic";

const fmt = (iso: string) => new Date(iso).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short", timeZone: "America/Chicago" }) + " CT";

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const q = await searchParams;
  const id = q.id ?? "";
  const s = await getSession("admin").catch(() => null);
  if (!s || !isArdnStaff(s.email)) redirect(`/proposals/admin/sign-in?next=${encodeURIComponent(`/proposals/admin/security/resume?id=${id}`)}`);

  const p = await findPause(id);
  const paused = p ? await stillPaused(p) : null;
  const card: React.CSSProperties = { maxWidth: 560, margin: "48px auto", padding: 32, background: "#FFFFFF", border: "1px solid #E3E7F2", borderRadius: 12, fontFamily: "system-ui, sans-serif", color: "#0A1226" };
  const line: React.CSSProperties = { margin: "8px 0", fontSize: 15, color: "#4A5372" };

  return (
    <div style={{ minHeight: "100vh", background: "#F5F7FC" }}>
      <AdminBar email={s.email} active="activity" />
      <div style={card}>
        <h1 style={{ fontSize: 22, margin: "0 0 16px" }}>Invited Test Sites</h1>
        {!p ? (
          <p style={line}>This link is not valid. Use the link in the newest alert email.</p>
        ) : (
          <>
            <p style={line}>Paused by {p.bot || "an AI crawler"} on {p.host}, {fmt(p.at)}.</p>
            <p style={line}>IP {p.ip || "Unknown"}</p>
            {q.done && <p style={{ ...line, color: "#1F7A4D", fontWeight: 600 }}>Both test sites are back on. They will be reachable everywhere within a minute.</p>}
            {q.failed && <p style={{ ...line, color: "#B42318", fontWeight: 600 }}>The sites could not be turned back on. Try again in a minute.</p>}
            {paused === false && !q.done && <p style={{ ...line, fontWeight: 600 }}>The sites are already on.</p>}
            {paused !== false && !q.done && (
              <form method="post" action="/api/security/resume" style={{ marginTop: 24 }}>
                <input type="hidden" name="id" value={p.rid} />
                <button type="submit" style={{ font: "inherit", fontWeight: 600, padding: "10px 20px", border: 0, borderRadius: 8, background: "#3B4BDB", color: "#FFFFFF", cursor: "pointer" }}>
                  Turn Sites Back On
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
