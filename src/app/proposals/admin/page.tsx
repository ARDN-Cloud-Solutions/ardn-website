import AdminBar from "@/components/proposals/AdminBar";
import { redirect } from "next/navigation";
import { ARDN_DOMAIN } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";
import { listEvents, listSessions, type EventRow, type SessionRow } from "@/lib/proposals/store";

export const dynamic = "force-dynamic";

type Ev = Omit<EventRow, "data"> & { data: Record<string, unknown> | null };
type Sess = SessionRow;

const fmt = (iso: string) =>
  new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "America/New_York" });
const nice = (id: string) => id.replace(/_sw$/, " (software)").replace(/_sup$/, " (support)").replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const money = (v: unknown) => {
  const n = parseInt(String(v ?? "").replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(n) ? "$" + n.toLocaleString("en-US") : String(v);
};

function costEntries(data: Record<string, unknown> | null): [string, string][] {
  if (!data) return [];
  const out: [string, string][] = [];
  for (const key of ["costs", "vals"]) {
    const m = data[key] as Record<string, unknown> | undefined;
    if (m && typeof m === "object") for (const [k, val] of Object.entries(m)) if (String(val ?? "").trim()) out.push([nice(k), money(val)]);
  }
  if (data.clubs) out.push(["Clubs", String(data.clubs)]);
  return out;
}

function scenario(e: Ev): string {
  const d = e.data || {};
  const on = d.on as Record<string, unknown> | undefined;
  const parts: string[] = [];
  if (on && typeof on === "object") {
    if (e.page === "plan") {
      const ids = Object.keys(on).filter((k) => on[k]);
      parts.push(ids.length ? "Retire: " + ids.map(nice).join(", ") : "Nothing selected");
    } else {
      const sunset = Object.keys(on).filter((k) => on[k] === true).map(nice);
      const keep = Object.keys(on).filter((k) => on[k] === false).map(nice);
      if (sunset.length) parts.push("Changed to sunset: " + sunset.join(", "));
      if (keep.length) parts.push("Changed to keep: " + keep.join(", "));
      if (!sunset.length && !keep.length) parts.push("Our proposal, unchanged");
    }
  }
  if (typeof d.preset === "string" && e.page === "plan") parts.push(`Preset: ${d.preset}`);
  const costs = costEntries(d);
  if (costs.length) parts.push(costs.map(([k, v]) => `${k} ${v}`).join(" · "));
  return parts.join(" — ") || JSON.stringify(d).slice(0, 160);
}

const card: React.CSSProperties = { background: "#FFFFFF", border: "1px solid #E6E8F2", borderRadius: 16, overflowX: "auto" };
const th: React.CSSProperties = { textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#4A5170", background: "#FAF9F7", whiteSpace: "nowrap" };
const td: React.CSSProperties = { padding: "12px 16px", fontSize: 14, borderTop: "1px solid #EEF0F6", verticalAlign: "top" };

export default async function AdminPage() {
  const s = await getSession("admin").catch(() => null);
  if (!s || !s.email.endsWith("@" + ARDN_DOMAIN)) redirect("/proposals/admin/sign-in");

  const sessions: Sess[] = (await listSessions(600)).filter((x) => x.slug !== "admin").slice(0, 500);
  const events = (await listEvents(5000)).filter((e) => e.slug !== "admin") as Ev[];

  const viewers = new Map<string, { email: string; slug: string; opens: number; last: string; seconds: number; videos: number; sections: Map<string, number> }>();
  for (const x of sessions) {
    const k = x.slug + "|" + x.email;
    const v = viewers.get(k) || { email: x.email, slug: x.slug, opens: 0, last: x.created_at, seconds: 0, videos: 0, sections: new Map() };
    v.opens += 1;
    if (x.created_at > v.last) v.last = x.created_at;
    viewers.set(k, v);
  }
  for (const e of events) {
    const v = viewers.get(e.slug + "|" + e.email);
    if (!v) continue;
    if (e.type === "leave") v.seconds += Number((e.data as { seconds?: number })?.seconds || 0);
    if (e.type === "video") v.videos += 1;
    if (e.type === "section") {
      const id = String((e.data as { id?: string })?.id || "");
      v.sections.set(id, (v.sections.get(id) || 0) + 1);
    }
  }
  const states = events.filter((e) => e.type === "state");
  const costRows = states.flatMap((e) => costEntries(e.data).map(([field, value]) => ({ e, field, value })));
  const latestCost = new Map<string, { e: Ev; field: string; value: string }>();
  for (const r of costRows) {
    const k = r.e.email + "|" + r.field;
    if (!latestCost.has(k)) latestCost.set(k, r); // events are newest first
  }
  const tiles = [
    ["Unique viewers", viewers.size],
    ["Total opens", sessions.length],
    ["Video plays", events.filter((e) => e.type === "video").length],
    ["Scenarios tried", states.length],
    ["Cost fields entered", latestCost.size],
  ] as const;

  return (
    <div style={{ minHeight: "100vh", background: "#FAF9F7" }}>
      <AdminBar email={s.email} active="activity" />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "40px 24px 80px", display: "flex", flexDirection: "column", gap: 28 }}>
        <h1 style={{ margin: 0, fontSize: 44, color: "#0A0F2C" }}>Proposal activity</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
          {tiles.map(([label, value]) => (
            <div key={label} style={{ ...card, padding: 20 }}>
              <div style={{ fontSize: 14, color: "#4A5170" }}>{label}</div>
              <div style={{ fontSize: 34, fontWeight: 700, color: "#0A0F2C" }}>{value}</div>
            </div>
          ))}
        </div>

        <Section title="Viewers">
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 860 }}>
            <thead><tr>{["Viewer", "Proposal", "Opens", "Last opened (ET)", "Time on page", "Videos", "Most viewed"].map((h) => <th key={h} style={th}>{h}</th>)}</tr></thead>
            <tbody>
              {[...viewers.values()].sort((a, b) => (a.last < b.last ? 1 : -1)).map((v) => {
                const top = [...v.sections.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "—";
                return (
                  <tr key={v.slug + v.email}>
                    <td style={{ ...td, fontWeight: 600 }}>{v.email}</td><td style={td}>{v.slug}</td><td style={td}>{v.opens}</td>
                    <td style={td}>{fmt(v.last)}</td><td style={td}>{Math.round(v.seconds / 60)} min</td><td style={td}>{v.videos}</td><td style={td}>{top}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Section>

        <Section title="Scenarios tried" note="Captured automatically on every change. Newest first.">
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 860 }}>
            <thead><tr>{["When (ET)", "Viewer", "Page", "What they tried"].map((h) => <th key={h} style={th}>{h}</th>)}</tr></thead>
            <tbody>
              {states.slice(0, 300).map((e) => (
                <tr key={e.id}><td style={{ ...td, whiteSpace: "nowrap" }}>{fmt(e.created_at)}</td><td style={{ ...td, fontWeight: 600 }}>{e.email}</td><td style={td}>{e.page}</td><td style={{ ...td, color: "#4A5170" }}>{scenario(e)}</td></tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Cost numbers entered" note="The latest value each viewer typed for each field.">
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
            <thead><tr>{["Viewer", "Field", "Value", "Page", "When (ET)"].map((h) => <th key={h} style={th}>{h}</th>)}</tr></thead>
            <tbody>
              {[...latestCost.values()].map((r) => (
                <tr key={r.e.email + r.field}><td style={{ ...td, fontWeight: 600 }}>{r.e.email}</td><td style={td}>{r.field}</td><td style={{ ...td, fontFamily: "ui-monospace, Menlo, monospace" }}>{r.value}</td><td style={td}>{r.e.page}</td><td style={td}>{fmt(r.e.created_at)}</td></tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Activity log" note="Last 200 events.">
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}>
            <thead><tr>{["When (ET)", "Viewer", "Event", "Page", "Detail"].map((h) => <th key={h} style={th}>{h}</th>)}</tr></thead>
            <tbody>
              {events.filter((e) => e.type !== "state").slice(0, 200).map((e) => (
                <tr key={e.id}><td style={{ ...td, whiteSpace: "nowrap" }}>{fmt(e.created_at)}</td><td style={td}>{e.email}</td><td style={td}>{e.type}</td><td style={td}>{e.page}</td><td style={{ ...td, color: "#4A5170" }}>{e.data ? JSON.stringify(e.data).slice(0, 120) : ""}</td></tr>
              ))}
            </tbody>
          </table>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <div style={card}>
      <div style={{ padding: "18px 16px 10px" }}>
        <h2 style={{ margin: 0, fontSize: 28, color: "#0A0F2C" }}>{title}</h2>
        {note ? <div style={{ fontSize: 13, color: "#4A5170", marginTop: 4 }}>{note}</div> : null}
      </div>
      {children}
    </div>
  );
}
