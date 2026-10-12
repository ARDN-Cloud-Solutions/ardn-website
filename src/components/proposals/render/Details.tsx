"use client";

import { useMemo, useState } from "react";
import { allModulesPerLocation, money, paybackLabel, proposedRoi, type FitRow, type Proposal } from "@/lib/proposals/model";
import { C, Footer, TopBar, VideoModal, btnPrimary, card, container, h2, pill, useTracking } from "./shared";
import { AiSupportSection, BoardMemo, CompareSection, RiskSection, WhyArdnSection } from "./Sections";

const STATUS: Record<FitRow["status"], { l: string; bg: string; fg: string }> = {
  fit: { l: "Fit today", bg: "#DCEBE2", fg: "#17503A" },
  partial: { l: "Configure", bg: "#F8E7C2", fg: "#6E4A07" },
  gap: { l: "Build", bg: "#F6D6CC", fg: "#8E3015" },
  integrate: { l: "Integrate", bg: "#DCE6F2", fg: "#22497A" },
  out: { l: "Out of scope", bg: "#E8E6E0", fg: "#3F4844" },
};

export default function Details({ p }: { p: Proposal }) {
  const [status, setStatus] = useState("all");
  const [q, setQ] = useState("");
  const [video, setVideo] = useState<string | null>(null);
  const [from, setFrom] = useState("");
  const state = useMemo(() => ({ status, q }), [status, q]);
  useTracking("details", state, video);

  const r = proposedRoi(p);
  const per = allModulesPerLocation(p);
  const avoidedTotal = p.avoided.reduce((a, x) => a + x.amount, 0);
  const sunset = p.systems.filter((s) => s.prop === "sunset");
  const rows = p.fitRows.filter((x) => (status === "all" || x.status === status) && (!q || `${x.capability} ${x.current} ${x.feature} ${x.area}`.toLowerCase().includes(q.toLowerCase())));
  const counts = { fit: 0, partial: 0, gap: 0, integrate: 0, out: 0 } as Record<string, number>;
  for (const x of p.fitRows) counts[x.status] += 1;
  const covered = p.fitRows.length ? Math.round(((counts.fit + counts.partial) / p.fitRows.length) * 100) : 0;
  const chip = (active: boolean): React.CSSProperties => ({ height: 44, padding: "0 16px", borderRadius: 22, fontFamily: "inherit", fontSize: 14, fontWeight: 600, cursor: "pointer", border: `1px solid ${active ? C.green : C.line2}`, background: active ? C.green : "#FFFFFF", color: active ? "#FFFFFF" : C.ink });
  const anchors = [
    ...(p.fitRows.length ? [{ href: "#fitgap", label: "Fit-gap" }] : []),
    { href: "#systems", label: "Systems" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#investment", label: "Investment" },
    ...(p.compare.enabled ? [{ href: "#compare", label: "Compared" }] : []),
    ...(p.sections.whyArdn ? [{ href: "#why", label: "Why Ardn" }] : []),
    ...(p.risk.enabled ? [{ href: "#risk-details", label: "Risk" }] : []),
    ...(p.gaps.length ? [{ href: "#gaps", label: "Gaps" }] : []),
    { href: "#next", label: "Next steps" },
  ];
  const maxAbs = Math.max(1, ...r.years.map((y) => Math.abs(y.net)));

  return (
    <div data-proposal-root style={{ color: C.ink, background: C.canvas, minHeight: "100vh" }}>
      <TopBar p={p} active="details" anchors={anchors} />
      <div style={{ background: C.dark, color: "#F4F2EC" }}>
        <div style={{ ...container, maxWidth: 1240, padding: "72px 24px 80px", display: "flex", flexDirection: "column", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 820 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold }}>Full proposal · {p.product} for {p.client}</div>
            <h1 style={{ margin: 0, fontSize: 52, lineHeight: 1.08, fontWeight: 600, color: "#FFFFFF" }}>{p.hero.headline}</h1>
            <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, color: "#C9D4CF" }}>{p.hero.intro}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              ...(p.fitRows.length ? [[String(p.fitRows.length), "capabilities reviewed"], [covered + "%", "covered today or by configuration"]] : []),
              [String(sunset.length), "systems we propose to sunset, phase by phase"],
              ...(r.ebitda > 0 ? [[money(r.ebitda), "added to EBITDA every year at full rollout"]] : []),
              [r.paybackMonths != null ? paybackLabel(r) : money(r.net5), r.paybackMonths != null ? `${r.paybackMonths <= 12 ? "cash-positive" : "to payback"} · ${money(r.net5)} net over five years` : "net over five years, after every fee"],
            ].map(([v, l], i, arr) => (
              <div key={l} style={{ background: i === arr.length - 1 ? C.gold : "#1F2654", color: i === arr.length - 1 ? C.dark : "#F4F2EC", borderRadius: 14, padding: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontSize: 40, fontWeight: 600 }}>{v}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {p.memo.enabled ? <div style={{ paddingTop: 64 }}><BoardMemo p={p} r={r} avoidedTotal={avoidedTotal} /></div> : null}

      {p.fitRows.length ? (
        <div id="fitgap" style={{ ...container, maxWidth: 1240, padding: "88px 24px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B5210" }}>Fit-gap analysis</div>
            <h2 style={{ ...h2, fontSize: 36 }}>Every capability, mapped. Press play to see it in {p.product}.</h2>
          </div>
          <div style={{ display: "flex", height: 18, borderRadius: 9, overflow: "hidden", background: "#E8E6E0" }}>
            {(["fit", "partial", "gap", "integrate", "out"] as const).map((k) => <div key={k} style={{ width: `${(counts[k] / p.fitRows.length) * 100}%`, background: k === "fit" ? C.turf : k === "partial" ? "#E3B04B" : k === "gap" ? C.red : k === "integrate" ? "#4840E0" : "#8C948F" }}></div>)}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
            <button type="button" onClick={() => setStatus("all")} aria-pressed={status === "all"} style={chip(status === "all")}>All {p.fitRows.length}</button>
            {(Object.keys(STATUS) as FitRow["status"][]).map((k) => <button key={k} type="button" onClick={() => setStatus(k)} aria-pressed={status === k} style={chip(status === k)}>{STATUS[k].l} {counts[k]}</button>)}
            <input type="search" aria-label="Search capabilities or systems" placeholder="Search capabilities or systems" value={q} onChange={(e) => setQ(e.target.value)} style={{ flex: "1 1 220px", height: 44, padding: "0 14px", fontSize: 15, fontFamily: "inherit", border: `1px solid ${C.line2}`, borderRadius: 10, background: "#FFFFFF" }} />
          </div>
          <div style={{ fontSize: 14, color: C.slate }}>Showing {rows.length} of {p.fitRows.length} capabilities</div>
          <div style={{ overflowX: "auto", background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 14 }}>
            <div style={{ minWidth: 1020 }}>
              <div style={{ display: "grid", gridTemplateColumns: "2.6fr 2fr 2.6fr 1.3fr 1.3fr 1fr", gap: 16, padding: "14px 20px", background: C.canvas, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.slate }}>
                <div>Capability</div><div>Used today</div><div>In {p.product}</div><div>Status</div><div>Phase</div><div>Demo</div>
              </div>
              {rows.map((x, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "2.6fr 2fr 2.6fr 1.3fr 1.3fr 1fr", gap: 16, padding: "16px 20px", borderTop: "1px solid #ECE8DE", alignItems: "start", fontSize: 14, lineHeight: 1.45 }}>
                  <div><div style={{ fontWeight: 600 }}>{x.capability}</div><div style={{ fontSize: 12, color: C.slate }}>{x.area}</div></div>
                  <div style={{ color: C.slate }}>{x.current}</div>
                  <div><div>{x.feature}</div>{x.note ? <div style={{ fontSize: 12, color: C.slate }}>{x.note}</div> : null}</div>
                  <div><span style={{ ...pill(STATUS[x.status].bg, STATUS[x.status].fg), fontSize: 12, fontWeight: 600 }}>{STATUS[x.status].l}</span></div>
                  <div style={{ fontSize: 13 }}>{x.phase}</div>
                  <div>{x.video ? <button type="button" onClick={() => { setFrom(x.capability); setVideo(x.video); }} aria-label={`Play demo for ${x.capability}`} style={{ height: 40, padding: "0 14px", borderRadius: 20, border: `1px solid ${C.green}`, background: "#FFFFFF", color: C.green, fontFamily: "inherit", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>▶ Watch</button> : <span style={{ fontSize: 12, color: C.slate }}>No demo</span>}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div id="systems" style={{ ...container, maxWidth: 1240, padding: "72px 24px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B5210" }}>Systems</div>
          <h2 style={{ ...h2, fontSize: 36 }}>What retires, what stays.</h2>
        </div>
        <div style={{ overflowX: "auto", background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 14 }}>
          <div style={{ minWidth: 820 }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 2.4fr 1.2fr 1.6fr 1.4fr", gap: 16, padding: "14px 20px", background: C.canvas, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.slate }}>
              <div>System</div><div>What it does today</div><div>Proposal</div><div>When</div><div>Yearly estimate</div>
            </div>
            {p.systems.map((s) => (
              <div key={s.id} style={{ display: "grid", gridTemplateColumns: "2fr 2.4fr 1.2fr 1.6fr 1.4fr", gap: 16, padding: "14px 20px", borderTop: "1px solid #ECE8DE", fontSize: 14, lineHeight: 1.45 }}>
                <div style={{ fontWeight: 600 }}>{s.name}<div style={{ fontSize: 12, color: C.slate, fontWeight: 400 }}>{s.kind}</div></div>
                <div style={{ color: C.slate }}>{s.does}</div>
                <div><span style={{ ...pill(s.prop === "sunset" ? "#E3F0E9" : "#EDEDF0", s.prop === "sunset" ? C.green : "#3A3A3F"), fontSize: 12, fontWeight: 600 }}>{s.prop === "sunset" ? "Sunset" : "Keep"}</span></div>
                <div style={{ fontSize: 13, color: C.slate }}>{s.why}</div>
                <div style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 13 }}>{s.prop === "sunset" && s.estimate ? money(s.estimate) : "—"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="roadmap" style={{ ...container, maxWidth: 1240, padding: "72px 24px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B5210" }}>Phased roadmap</div>
          <h2 style={{ ...h2, fontSize: 36 }}>No big bang. Each phase retires systems and pays for the next.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 16 }}>
          {p.phases.map((ph, i) => (
            <div key={i} style={{ ...card, border: `1px solid ${C.line}`, padding: 22, gap: 10 }}>
              <div style={{ fontSize: 12, color: "#6B5210" }}>Phase {i + 1} · {ph.when}</div>
              <div style={{ fontSize: 19, fontWeight: 600 }}>{ph.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: C.slate }}>{ph.body}</div>
              {ph.retires ? <div style={{ fontSize: 13, lineHeight: 1.5 }}><strong>Retires:</strong> {ph.retires}</div> : null}
            </div>
          ))}
        </div>
      </div>

      <div id="investment" style={{ ...container, maxWidth: 1240, padding: "72px 24px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
        <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B5210" }}>Investment and return</div>
          <h2 style={{ ...h2, fontSize: 36 }}>Flat price per {p.pricing.locationLabel}. Unlimited staff users.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          <div style={{ ...card, border: `1px solid ${C.line}` }}><div style={{ fontSize: 14, color: C.slate }}>Core modules</div><div style={{ fontSize: 32, fontWeight: 600 }}>${p.pricing.corePerLocation} <span style={{ fontSize: 15, fontWeight: 500, color: C.slate }}>/ {p.pricing.locationLabel} / month</span></div><div style={{ fontSize: 13, color: C.slate }}>Add-on modules ${p.pricing.addonPerLocation} each · all modules ${per}</div></div>
          <div style={{ ...card, border: `1px solid ${C.line}` }}><div style={{ fontSize: 14, color: C.slate }}>One-time implementation</div><div style={{ fontSize: 32, fontWeight: 600 }}>{p.pricing.implementation ? "$" + p.pricing.implementation.toLocaleString("en-US") : "Waived"}</div><div style={{ fontSize: 13, color: C.slate }}>Data migration, integrations, training{p.pricing.implementation ? "" : " included"}</div></div>
          <div style={{ ...card, border: `1px solid ${C.line}` }}><div style={{ fontSize: 14, color: C.slate }}>Billing</div><div style={{ fontSize: 32, fontWeight: 600 }}>As you go live</div><div style={{ fontSize: 13, color: C.slate }}>Each {p.pricing.locationLabel} is billed only from the month it runs on {p.product}</div></div>
          {p.pricing.supportMonthly ? <div style={{ ...card, border: `1px solid ${C.line}` }}><div style={{ fontSize: 14, color: C.slate }}>Production support (tier 2)</div><div style={{ fontSize: 32, fontWeight: 600 }}>${p.pricing.supportMonthly.toLocaleString("en-US")} <span style={{ fontSize: 15, fontWeight: 500, color: C.slate }}>/ month</span></div><div style={{ fontSize: 13, color: C.slate }}>{p.client} keeps tier 1 in-house</div></div> : null}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <div style={{ ...card, flex: "1 1 420px", border: `1px solid ${C.line}`, gap: 18 }}>
            <div style={{ fontSize: 19, fontWeight: 600 }}>Yearly run-rate at full rollout</div>
            <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>Today: spend {p.product} retires</span><strong>{money(r.savingFull)}</strong></div><div style={{ height: 28, background: C.red, borderRadius: 6, width: "100%", marginTop: 8 }}></div></div>
            <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}><span>With {p.product}</span><strong>{money(r.feeYear + r.supportYear)}</strong></div><div style={{ height: 28, background: C.turf, borderRadius: 6, width: `${Math.min(100, Math.round(((r.feeYear + r.supportYear) / Math.max(1, r.savingFull)) * 100))}%`, marginTop: 8 }}></div><div style={{ fontSize: 12, color: C.slate, marginTop: 6 }}>{money(r.feeYear)} platform ({p.pricing.locations} {p.pricing.locationLabel}s){r.supportYear ? ` + ${money(r.supportYear)} support` : ""}</div></div>
          </div>
          <div style={{ ...card, flex: "1 1 420px", border: `1px solid ${C.line}`, gap: 18 }}>
            <div style={{ fontSize: 19, fontWeight: 600 }}>Net savings by year</div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 220, borderBottom: `1px solid ${C.line2}` }}>
              {r.years.map((y) => (
                <div key={y.year} style={{ flex: "1 1 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 6, height: "100%" }}>
                  <div style={{ fontSize: 12 }}>{money(y.net)}</div>
                  <div style={{ width: "100%", maxWidth: 64, borderRadius: "6px 6px 0 0", height: Math.round((Math.abs(y.net) / maxAbs) * 170), background: y.net < 0 ? C.red : C.turf }}></div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 14 }}>{r.years.map((y) => <div key={y.year} style={{ flex: "1 1 0", textAlign: "center", fontSize: 13, color: C.slate }}>{y.year}</div>)}</div>
            <div style={{ fontSize: 14, lineHeight: 1.5 }}>Cumulative net reaches <strong>{money(r.net5)}</strong> by {p.firstYear + 4}. {r.paybackMonths != null && r.paybackMonths <= 12 ? "Cash-positive from the first year." : `Break-even ${r.payback}.`}</div>
          </div>
        </div>

        {p.avoided.length ? (
          <div style={{ ...card, border: `1px solid ${C.line}`, gap: 12 }}>
            <div style={{ fontSize: 19, fontWeight: 600 }}>Planned spend you no longer need</div>
            <div style={{ fontSize: 14, color: C.slate }}>Projects in {p.client}&apos;s own IT plan that {p.product} replaces. Not counted in the EBITDA number above.</div>
            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: 560 }}>
                {p.avoided.map((a, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gap: 16, padding: "10px 0", borderTop: "1px solid #ECE8DE", fontSize: 14 }}>
                    <div style={{ fontWeight: 600 }}>{a.label}</div><div style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>{money(a.amount)}</div><div style={{ color: C.slate }}>{a.note}</div>
                  </div>
                ))}
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 2fr", gap: 16, padding: "10px 0", borderTop: `2px solid ${C.ink}`, fontSize: 14, fontWeight: 700 }}>
                  <div>Total avoided</div><div style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>{money(avoidedTotal)}</div><div style={{ color: C.slate, fontWeight: 400 }}>Five-year total with hard savings: {money(r.net5 + avoidedTotal)}</div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <CompareSection p={p} />
      <WhyArdnSection p={p} />
      <RiskSection p={p} id="risk-details" />
      <div style={{ background: "#FFFFFF" }}><AiSupportSection p={p} /></div>

      {p.gaps.length ? (
        <div id="gaps" style={{ ...container, maxWidth: 1240, padding: "72px 24px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B5210" }}>Open gaps</div>
            <h2 style={{ ...h2, fontSize: 36 }}>The gaps we close before each system retires.</h2>
          </div>
          <div style={{ overflowX: "auto", background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 14 }}>
            <div style={{ minWidth: 680 }}>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr 1.2fr", gap: 16, padding: "14px 20px", background: C.canvas, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.slate }}><div>Gap</div><div>How we close it</div><div>Before</div></div>
              {p.gaps.map((g, i) => <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 3fr 1.2fr", gap: 16, padding: "16px 20px", borderTop: "1px solid #ECE8DE", fontSize: 14, lineHeight: 1.5 }}><div style={{ fontWeight: 600 }}>{g.gap}</div><div style={{ color: C.slate }}>{g.how}</div><div>{g.phase}</div></div>)}
            </div>
          </div>
        </div>
      ) : null}

      <div id="next" style={{ ...container, maxWidth: 1240, padding: "72px 24px 96px" }}>
        <div style={{ background: C.dark, color: "#F4F2EC", borderRadius: 20, padding: 48, display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ ...h2, fontSize: 34, color: "#FFFFFF" }}>Next steps</h2>
            <ol style={{ margin: 0, paddingLeft: 22, listStyle: "decimal", display: "flex", flexDirection: "column", gap: 12, fontSize: 16, lineHeight: 1.55, color: "#DCE4E0" }}>{p.nextSteps.map((s, i) => <li key={i}>{s}</li>)}</ol>
          </div>
          <div style={{ flex: "0 1 320px", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
            <a href={`mailto:${p.contact.email}?subject=${encodeURIComponent(`${p.client} x ${p.product} working session`)}`} style={{ ...btnPrimary, background: C.gold, color: C.dark, justifyContent: "center" }}>{p.contact.ctaLabel}</a>
          </div>
        </div>
      </div>
      <Footer p={p} />
      <VideoModal id={video} from={from} onClose={() => setVideo(null)} />
    </div>
  );
}
