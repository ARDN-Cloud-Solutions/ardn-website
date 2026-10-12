import Link from "next/link";
import { redirect } from "next/navigation";
import { ARDN_DOMAIN, listProposals } from "@/content/proposals";
import { getSession } from "@/lib/proposals/server";
import { money, proposedRoi } from "@/lib/proposals/model";
import { createProposal } from "./actions";
import AdminBar from "@/components/proposals/AdminBar";

export const dynamic = "force-dynamic";

const card: React.CSSProperties = { background: "#FFFFFF", border: "1px solid #E6E8F2", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 14 };
const input: React.CSSProperties = { height: 44, padding: "0 14px", fontSize: 15, fontFamily: "inherit", border: "1px solid #D8DBE8", borderRadius: 10, background: "#FFFFFF", color: "#0A0F2C", width: "100%", boxSizing: "border-box" };
const btn: React.CSSProperties = { height: 44, padding: "0 20px", border: 0, borderRadius: 999, background: "#073D2E", color: "#FFFFFF", fontFamily: "inherit", fontSize: 15, fontWeight: 600, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center" };

export default async function ProposalsPage() {
  const s = await getSession("admin").catch(() => null);
  if (!s || !s.email.endsWith("@" + ARDN_DOMAIN)) redirect("/proposals/admin/sign-in");
  const all = (await listProposals());

  return (
    <div style={{ minHeight: "100vh", background: "#FAF9F7" }}>
      <AdminBar email={s.email} active="proposals" />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "flex", flexDirection: "column", gap: 24 }}>
        <h1 style={{ margin: 0, fontSize: 44, color: "#0A0F2C" }}>Proposals</h1>

        {all.map((p) => {
          const r = proposedRoi(p);
          return (
            <div key={p.slug} style={card}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: 28, color: "#0A0F2C" }}>{p.client}</h2>
                  <div style={{ fontSize: 13, color: "#4A5170" }}>
                    {p.product} · /proposals/{p.slug} · <strong style={{ color: p.status === "live" ? "#0F9870" : "#B45309" }}>{p.status === "live" ? "Live" : "Draft (Ardn only)"}</strong>
                    {p.updatedAt ? ` · saved ${new Date(p.updatedAt).toLocaleDateString("en-US")} by ${p.updatedBy}` : ""}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link href={`/proposals/admin/proposals/${p.slug}`} style={btn}>Edit</Link>
                  <a href={`/proposals/${p.slug}`} target="_blank" rel="noreferrer" style={{ ...btn, background: "#FFFFFF", color: "#073D2E", border: "1px solid #D8DBE8" }}>View</a>
                  <form action={createProposal}>
                    <input type="hidden" name="copyFrom" value={p.slug} />
                    <input type="hidden" name="client" value={`${p.client} copy`} />
                    <button type="submit" style={{ ...btn, background: "#FFFFFF", color: "#073D2E", border: "1px solid #D8DBE8" }}>Duplicate</button>
                  </form>
                </div>
              </div>
              <div style={{ fontSize: 14, color: "#4A5170" }}>
                {p.systems.filter((x) => x.prop === "sunset").length} systems to sunset · {p.pricing.locations} {p.pricing.locationLabel}s · ${p.pricing.corePerLocation} core + ${p.pricing.addonPerLocation} per add-on · 5-year net {money(r.net5)} · access: {p.access.domains.join(", ") || "no domains yet"}
              </div>
            </div>
          );
        })}

        <form action={createProposal} style={{ ...card, borderStyle: "dashed" }}>
          <h2 style={{ margin: 0, fontSize: 28, color: "#0A0F2C" }}>New proposal</h2>
          <p style={{ margin: 0, fontSize: 14, color: "#4A5170", lineHeight: 1.5 }}>Starts from a blank template with Ardn&apos;s standard pricing. You fill in the client&apos;s systems, phases and access on the next screen.</p>
          <label style={{ fontSize: 13, fontWeight: 600, display: "flex", flexDirection: "column", gap: 6 }}>Client name<input name="client" required placeholder="Acme Golf Group" style={input} /></label>
          <label style={{ fontSize: 13, fontWeight: 600, display: "flex", flexDirection: "column", gap: 6 }}>Product<input name="product" defaultValue="Club Steward" style={input} /></label>
          <div><button type="submit" style={btn}>Create and edit</button></div>
        </form>
      </div>
    </div>
  );
}
