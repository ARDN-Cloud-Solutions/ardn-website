"use client";

import { useEffect } from "react";
import { sendEvent } from "@/lib/proposals/dc-runtime";
import { money, paybackLabel, proposedRoi, type Proposal } from "@/lib/proposals/model";
import { C } from "./shared";

const ROWS = ["How it's priced", "Built for a multi-club operator", "Who runs it", "Changes to fit you", "AI"];

/** One-page board brief, sized for US Letter. "Download PDF" opens the browser's save-as-PDF. */
export default function Brief({ p }: { p: Proposal }) {
  const r = proposedRoi(p);
  const avoided = p.avoided.reduce((a, x) => a + x.amount, 0);
  const rows = p.compare.enabled ? p.compare.rows.filter((x) => ROWS.includes(x.criterion)) : [];
  const pilot = p.phases[0];
  useEffect(() => sendEvent(p.slug, "view", "brief"), [p.slug]);
  const download = () => {
    sendEvent(p.slug, "section", "brief", { id: "download" });
    window.print();
  };
  const cell: React.CSSProperties = { padding: "6px 8px", borderTop: `1px solid ${C.line}`, verticalAlign: "top", fontSize: 10.5, lineHeight: 1.35 };

  return (
    <div style={{ background: "#E9EAEE", minHeight: "100vh", padding: "24px 12px" }} className="brief-bg">
      <style>{`
        @page { size: letter; margin: 0.45in; }
        @media print {
          .brief-bg { background: #FFFFFF !important; padding: 0 !important; }
          .brief-actions { display: none !important; }
          .brief-sheet { box-shadow: none !important; margin: 0 !important; width: auto !important; padding: 0 !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
      <div className="brief-actions" style={{ maxWidth: "8.5in", margin: "0 auto 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <a href={`/proposals/${p.slug}`} style={{ color: C.green, fontSize: 15 }}>‹ Back to the proposal</a>
        <button type="button" onClick={download} style={{ height: 44, padding: "0 22px", border: 0, borderRadius: 22, background: C.green, color: "#FFFFFF", fontFamily: "inherit", fontSize: 15, fontWeight: 600, cursor: "pointer" }}>Download PDF</button>
      </div>

      <div className="brief-sheet" style={{ width: "8.5in", maxWidth: "100%", margin: "0 auto", background: "#FFFFFF", boxShadow: "0 10px 40px rgba(10,15,44,0.12)", padding: "0.45in", boxSizing: "border-box", color: C.ink, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, borderBottom: `2px solid ${C.green}`, paddingBottom: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/ardn_logo.png" alt="Ardn" style={{ height: 24, width: "auto" }} />
          <div style={{ fontSize: 10, color: C.slate, textAlign: "right" }}>
            Board brief · {p.product} for {p.client}<br />
            {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} · Confidential
          </div>
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.green }}>The ask</div>
          <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.35, marginTop: 4 }}>{p.memo.ask || `Approve ${p.product} for ${p.client}.`}</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {[
            [money(r.ebitda), "added to EBITDA every year at full rollout"],
            [paybackLabel(r), r.paybackMonths != null && r.paybackMonths <= 12 ? `cash-positive; fees billed only as ${p.pricing.locationLabel}s go live` : "to payback"],
            [money(r.net5), "net over five years, after every fee"],
            ...(avoided ? [[money(avoided), "of planned IT projects no longer needed"]] : []),
          ].map(([v, l], i) => (
            <div key={i} style={{ background: i === 0 ? C.green : "#F5F6F9", color: i === 0 ? "#FFFFFF" : C.ink, borderRadius: 8, padding: "10px 12px" }}>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{v}</div>
              <div style={{ fontSize: 9.5, lineHeight: 1.3, opacity: 0.9 }}>{l}</div>
            </div>
          ))}
        </div>

        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.green }}>Why it scales</div>
          <ul style={{ margin: "4px 0 0", paddingLeft: 16, listStyle: "disc", fontSize: 11, lineHeight: 1.45 }}>
            {p.strategic ? <li>{p.strategic}</li> : null}
            <li>Cost grows only with {p.pricing.locationLabel}s, never with staff: no per-seat or per-license fees as you add people.</li>
            <li>One member record across every {p.pricing.locationLabel}, so benefits, billing and reporting work the same at the 10th {p.pricing.locationLabel} and the 200th.</li>
            <li>{p.systems.filter((s) => s.prop === "sunset").length} systems retired, so every new {p.pricing.locationLabel} onboards onto one platform instead of a dozen.</li>
          </ul>
        </div>

        {rows.length ? (
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.green }}>Against the platforms you evaluated</div>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 4, tableLayout: "fixed" }}>
              <thead>
                <tr>
                  <th style={{ ...cell, borderTop: 0, width: "16%", textAlign: "left", fontSize: 9.5, color: C.slate }}></th>
                  <th style={{ ...cell, borderTop: 0, textAlign: "left", fontSize: 9.5, color: C.green }}>{p.product}</th>
                  {p.compare.competitors.map((c) => <th key={c} style={{ ...cell, borderTop: 0, textAlign: "left", fontSize: 9.5, color: C.slate }}>{c}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.criterion}>
                    <td style={{ ...cell, fontWeight: 700 }}>{row.criterion}</td>
                    <td style={{ ...cell, fontWeight: 600, color: C.green, background: "#F1F7F4" }}>{row.us}</td>
                    {p.compare.competitors.map((c, j) => <td key={c} style={{ ...cell, color: C.slate }}>{row.others[j] || "—"}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {p.risk.enabled ? (
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.green }}>Risk controls, in the agreement</div>
              <ul style={{ margin: "4px 0 0", paddingLeft: 16, listStyle: "disc", fontSize: 10.5, lineHeight: 1.45 }}>
                {p.risk.items.map((x, i) => <li key={i}>{x.title}</li>)}
              </ul>
            </div>
          ) : null}
          {pilot ? (
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.green }}>First step · {pilot.when}</div>
              <div style={{ fontSize: 12, fontWeight: 700, marginTop: 4 }}>{pilot.title}</div>
              <div style={{ fontSize: 10.5, lineHeight: 1.45, color: C.slate }}>{pilot.body}</div>
              <div style={{ fontSize: 10.5, lineHeight: 1.45, marginTop: 6 }}>
                ${p.pricing.corePerLocation} per {p.pricing.locationLabel} per month for core, ${p.pricing.addonPerLocation} per add-on. {p.pricing.implementation ? `$${p.pricing.implementation.toLocaleString("en-US")} implementation.` : "No implementation fee."}
              </div>
            </div>
          ) : null}
        </div>

        <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 8, fontSize: 8.5, lineHeight: 1.4, color: C.slate }}>
          Savings use {p.client}&apos;s IT cost categories and Ardn&apos;s pricing; full model at ardncloudsolutions.com/proposals/{p.slug}. Competitor details from public vendor pages and review sites (Capterra, Software Advice, G2), October 2026. Contact: {p.contact.email}.
        </div>
      </div>
    </div>
  );
}
