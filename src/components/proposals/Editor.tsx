"use client";

import { useState } from "react";
import { saveProposal } from "@/app/proposals/admin/proposals/actions";
import { DEMO_VIDEOS } from "@/content/proposals/videos";
import { AI_PRODUCTS, AI_STEPS, WHY_POINTS } from "@/lib/proposals/library";
import { memoPoints } from "@/components/proposals/render/Sections";
import { money, paybackLabel, proposedRoi, type AvoidedRow, type FitRow, type GapRow, type Phase, type Proposal, type SystemRow } from "@/lib/proposals/model";

const card: React.CSSProperties = { background: "#FFFFFF", border: "1px solid #E6E8F2", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 14 };
const input: React.CSSProperties = { height: 42, padding: "0 12px", fontSize: 14, fontFamily: "inherit", border: "1px solid #D8DBE8", borderRadius: 10, background: "#FFFFFF", color: "#0A0F2C", width: "100%", boxSizing: "border-box" };
const area: React.CSSProperties = { ...input, height: 80, padding: 10, resize: "vertical" };
const label: React.CSSProperties = { fontSize: 13, fontWeight: 600, color: "#0A0F2C", display: "flex", flexDirection: "column", gap: 6, minWidth: 0 };
const help: React.CSSProperties = { fontSize: 13, color: "#4A5170", lineHeight: 1.5, margin: 0 };
const btn: React.CSSProperties = { height: 44, padding: "0 20px", border: 0, borderRadius: 999, background: "#073D2E", color: "#FFFFFF", fontFamily: "inherit", fontSize: 15, fontWeight: 600, cursor: "pointer" };
const btnLite: React.CSSProperties = { ...btn, height: 36, fontSize: 13, background: "#FFFFFF", color: "#073D2E", border: "1px solid #D8DBE8" };
const h2: React.CSSProperties = { margin: 0, fontSize: 26, color: "#0A0F2C" };

export default function Editor({ initial }: { initial: Proposal }) {
  const [p, setP] = useState<Proposal>(initial);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const up = (patch: Partial<Proposal>) => setP({ ...p, ...patch });
  const r = proposedRoi(p);
  const lines = (s: string) => s.split(/[\n,;]+/).map((x) => x.trim()).filter(Boolean);
  const numv = (v: string) => parseInt(v.replace(/[^0-9]/g, ""), 10) || 0;

  async function save() {
    setSaving(true);
    setMsg("");
    const res = await saveProposal(p.slug, p);
    setSaving(false);
    setMsg(res.ok ? "Saved. The live page is updated." : "Could not save: " + res.error);
  }

  const setSystem = (i: number, patch: Partial<SystemRow>) => up({ systems: p.systems.map((s, j) => (j === i ? { ...s, ...patch } : s)) });
  const setPhase = (i: number, patch: Partial<Phase>) => up({ phases: p.phases.map((s, j) => (j === i ? { ...s, ...patch } : s)) });
  const setAvoided = (i: number, patch: Partial<AvoidedRow>) => up({ avoided: p.avoided.map((s, j) => (j === i ? { ...s, ...patch } : s)) });
  const setGap = (i: number, patch: Partial<GapRow>) => up({ gaps: p.gaps.map((s, j) => (j === i ? { ...s, ...patch } : s)) });
  const setFit = (i: number, patch: Partial<FitRow>) => up({ fitRows: p.fitRows.map((s, j) => (j === i ? { ...s, ...patch } : s)) });
  const newId = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24) || "sys" + Date.now();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Save bar */}
      <div style={{ position: "sticky", top: 0, zIndex: 5, background: "#FAF9F7", padding: "12px 0", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, borderBottom: "1px solid #E6E8F2" }}>
        <div style={{ fontSize: 14, color: "#4A5170" }}>
          /proposals/{p.slug} · 5-year net at our proposal <strong style={{ color: r.net5 >= 0 ? "#0F9870" : "#B3401E" }}>{money(r.net5)}</strong> · {r.count} systems retire
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          {msg ? <span style={{ fontSize: 13, color: msg.startsWith("Saved") ? "#0F9870" : "#B3401E" }}>{msg}</span> : null}
          <a href={`/proposals/${p.slug}`} target="_blank" rel="noreferrer" style={{ ...btnLite, display: "inline-flex", alignItems: "center", textDecoration: "none" }}>View</a>
          <button type="button" onClick={save} disabled={saving} style={btn}>{saving ? "Saving…" : "Save"}</button>
        </div>
      </div>

      {/* Basics */}
      <div style={card}>
        <h2 style={h2}>Basics</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          <label style={label}>Client name<input value={p.client} onChange={(e) => up({ client: e.target.value })} style={input} /></label>
          <label style={label}>Product<input value={p.product} onChange={(e) => up({ product: e.target.value })} style={input} /></label>
          <label style={label}>Status
            <select value={p.status} onChange={(e) => up({ status: e.target.value as Proposal["status"] })} style={input}>
              <option value="draft">Draft: only Ardn can open it</option>
              <option value="live">Live: the client can open it</option>
            </select>
          </label>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14 }}>
          <label style={label}>Allowed email domains (one per line)<textarea value={p.access.domains.join("\n")} onChange={(e) => up({ access: { ...p.access, domains: lines(e.target.value) } })} style={area} placeholder="invitedclubs.com" /></label>
          <label style={label}>Allowed individual addresses (optional)<textarea value={p.access.emails.join("\n")} onChange={(e) => up({ access: { ...p.access, emails: lines(e.target.value) } })} style={area} placeholder="name@partner.com" /></label>
        </div>
        <p style={help}>Anyone with an allowed domain or address can request a sign-in code once the proposal is Live. Ardn addresses always can.</p>
      </div>

      {/* Headline */}
      <div style={card}>
        <h2 style={h2}>Headline</h2>
        <label style={label}>Small line above the headline<input value={p.hero.eyebrow} onChange={(e) => up({ hero: { ...p.hero, eyebrow: e.target.value } })} style={input} /></label>
        <label style={label}>Headline<input value={p.hero.headline} onChange={(e) => up({ hero: { ...p.hero, headline: e.target.value } })} style={input} /></label>
        <label style={label}>Intro sentence<textarea value={p.hero.intro} onChange={(e) => up({ hero: { ...p.hero, intro: e.target.value } })} style={area} /></label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {p.stats.map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={label}>Big number {i + 1}<input value={s.value} onChange={(e) => up({ stats: p.stats.map((x, j) => (j === i ? { ...x, value: e.target.value } : x)) })} style={input} placeholder="87%" /></label>
              <label style={label}>What it means<input value={s.label} onChange={(e) => up({ stats: p.stats.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)) })} style={input} placeholder="of your capabilities covered today" /></label>
            </div>
          ))}
        </div>
        <p style={help}>Leave a big number empty to hide it.</p>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 0", borderTop: "1px solid #F0F0F3" }}>
          <input id="lead-roi" type="checkbox" checked={p.leadWithRoi} onChange={(e) => up({ leadWithRoi: e.target.checked })} style={{ width: 20, height: 20, marginTop: 2 }} />
          <label htmlFor="lead-roi" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 600 }}>Lead with EBITDA and payback</span>
            <span style={{ fontSize: 13, color: "#4A5170", lineHeight: 1.5 }}>Puts two computed numbers first: yearly EBITDA improvement at full rollout ({money(r.ebitda)}) and payback ({paybackLabel(r)}). What a private-equity owner looks at first.</span>
          </label>
        </div>
        <label style={label}>Strategic line under the big numbers (optional)<textarea value={p.strategic} onChange={(e) => up({ strategic: e.target.value })} style={area} placeholder="Built to run Invited and Heritage on one member record…" /></label>
      </div>

      {/* Sections */}
      <div style={card}>
        <h2 style={h2}>Standard sections</h2>
        <p style={help}>Three sections Deep wrote for Invited that apply to most Ardn proposals. Turn each on if it fits this client. Below each switch is an example of what the client will read.</p>
        {([
          ["aiFirst", "AI first: built in from day one", `Six cards on what runs natively in ${p.product}. Example card: “${AI_PRODUCTS[0].title}: ${AI_PRODUCTS[0].body}”`],
          ["whyArdn", "Why Ardn: managed platform, not a SaaS login", `A table comparing IaaS, PaaS, SaaS and Ardn on who handles hosting, uptime, setup, data migration, integrations, errors and changes, then three points. Example point: “${WHY_POINTS[0].title}: ${WHY_POINTS[0].body}”`],
          ["aiSupport", "AI-native support: we know before you call", `Three steps and a comparison table on built-in error tracking. Example step: “${AI_STEPS[0].title}: ${AI_STEPS[0].body}”`],
        ] as [keyof Proposal["sections"], string, string][]).map(([k, title, ex]) => (
          <div key={k} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 0", borderTop: "1px solid #F0F0F3" }}>
            <input id={"sec-" + k} type="checkbox" checked={p.sections[k]} onChange={(e) => up({ sections: { ...p.sections, [k]: e.target.checked } })} style={{ width: 20, height: 20, marginTop: 2 }} />
            <label htmlFor={"sec-" + k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 15, fontWeight: 600 }}>{title}</span>
              <span style={{ fontSize: 13, color: "#4A5170", lineHeight: 1.5 }}>{ex.replace(/\{client\}/g, p.client).replace(/\{label\}/g, p.pricing.locationLabel).replace(/\{locations\}/g, `${p.pricing.locations} ${p.pricing.locationLabel}s`)}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Videos */}
      <div style={card}>
        <h2 style={h2}>Demo videos on the overview</h2>
        <p style={help}>Tick up to six. They play from the site&apos;s video library, each from the matching moment.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 8 }}>
          {Object.entries(DEMO_VIDEOS).map(([id, v]) => (
            <label key={id} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14 }}>
              <input type="checkbox" checked={p.videos.includes(id)} onChange={(e) => up({ videos: e.target.checked ? [...p.videos, id].slice(-6) : p.videos.filter((x) => x !== id) })} />
              <span>{v.name} <span style={{ color: "#4A5170" }}>· {id}</span></span>
            </label>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div style={card}>
        <h2 style={h2}>Pricing</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
          <label style={label}>Core, per location per month<input inputMode="numeric" value={p.pricing.corePerLocation} onChange={(e) => up({ pricing: { ...p.pricing, corePerLocation: numv(e.target.value) } })} style={input} /></label>
          <label style={label}>Each add-on, per location per month<input inputMode="numeric" value={p.pricing.addonPerLocation} onChange={(e) => up({ pricing: { ...p.pricing, addonPerLocation: numv(e.target.value) } })} style={input} /></label>
          <label style={label}>Number of locations<input inputMode="numeric" value={p.pricing.locations} onChange={(e) => up({ pricing: { ...p.pricing, locations: numv(e.target.value) || 1 } })} style={input} /></label>
          <label style={label}>What a location is called<input value={p.pricing.locationLabel} onChange={(e) => up({ pricing: { ...p.pricing, locationLabel: e.target.value || "location" } })} style={input} placeholder="club" /></label>
          <label style={label}>One-time implementation ($)<input inputMode="numeric" value={p.pricing.implementation} onChange={(e) => up({ pricing: { ...p.pricing, implementation: numv(e.target.value) } })} style={input} /></label>
          <label style={label}>Production support ($ per month)<input inputMode="numeric" value={p.pricing.supportMonthly} onChange={(e) => up({ pricing: { ...p.pricing, supportMonthly: numv(e.target.value) } })} style={input} /></label>
          <label style={label}>Client staff cost freed per year ($)<input inputMode="numeric" value={p.pricing.staffFreed} onChange={(e) => up({ pricing: { ...p.pricing, staffFreed: numv(e.target.value) } })} style={input} /></label>
          <label style={label}>First year of the rollout<input inputMode="numeric" value={p.firstYear} onChange={(e) => up({ firstYear: numv(e.target.value) || p.firstYear })} style={input} /></label>
        </div>
        <p style={help}>Platform fees are billed as locations go live: {Math.round(p.pricing.rampYear1 * 100)}% in year 1, {Math.round(p.pricing.rampYear2 * 100)}% in year 2, then 100%. Staff cost freed counts only when homegrown systems retire.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Modules</div>
          {p.modules.map((m, i) => (
            <div key={m.key} style={{ display: "grid", gridTemplateColumns: "110px 1fr 90px 80px", gap: 8, alignItems: "center" }}>
              <input value={m.key} onChange={(e) => up({ modules: p.modules.map((x, j) => (j === i ? { ...x, key: e.target.value.replace(/[^a-z0-9]/g, "") } : x)) })} style={input} aria-label="Module key" />
              <input value={m.name} onChange={(e) => up({ modules: p.modules.map((x, j) => (j === i ? { ...x, name: e.target.value } : x)) })} style={input} aria-label="Module name" />
              <label style={{ fontSize: 13, display: "flex", gap: 6, alignItems: "center" }}><input type="checkbox" checked={m.core} onChange={(e) => up({ modules: p.modules.map((x, j) => (j === i ? { ...x, core: e.target.checked } : x)) })} />Core</label>
              <button type="button" onClick={() => up({ modules: p.modules.filter((_, j) => j !== i) })} style={btnLite}>Remove</button>
            </div>
          ))}
          <div><button type="button" onClick={() => up({ modules: [...p.modules, { key: "mod" + (p.modules.length + 1), name: "New module", core: false }] })} style={btnLite}>Add module</button></div>
        </div>
      </div>

      {/* Systems */}
      <div style={card}>
        <h2 style={h2}>Their systems</h2>
        <p style={help}>One row per system the client runs today. “Sunset” means {p.product} replaces it, and you pick which module does. The yearly estimate is what the calculator uses until the client types their own number. “Savings from” is the first full year after it retires.</p>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 1100, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1.8fr 1.1fr 0.9fr 0.8fr 1fr 0.9fr 0.8fr 1.4fr 70px", gap: 8, fontSize: 12, fontWeight: 600, color: "#4A5170" }}>
              <div>Name</div><div>What it does</div><div>Group</div><div>Kind</div><div>Proposal</div><div>Module</div><div>Yearly est. $</div><div>Savings from</div><div>Why / when</div><div></div>
            </div>
            {p.systems.map((s, i) => (
              <div key={s.id} style={{ display: "grid", gridTemplateColumns: "1.4fr 1.8fr 1.1fr 0.9fr 0.8fr 1fr 0.9fr 0.8fr 1.4fr 70px", gap: 8, alignItems: "center" }}>
                <input value={s.name} onChange={(e) => setSystem(i, { name: e.target.value })} style={input} aria-label="System name" />
                <input value={s.does} onChange={(e) => setSystem(i, { does: e.target.value })} style={input} aria-label="What it does" />
                <input value={s.group} onChange={(e) => setSystem(i, { group: e.target.value })} style={input} aria-label="Group" list="groups" />
                <select value={s.kind} onChange={(e) => setSystem(i, { kind: e.target.value as SystemRow["kind"] })} style={input} aria-label="Kind">{["SaaS", "Homegrown", "Licensed", "Vendor", "Other"].map((k) => <option key={k}>{k}</option>)}</select>
                <select value={s.prop} onChange={(e) => setSystem(i, { prop: e.target.value as SystemRow["prop"], module: e.target.value === "keep" ? "" : s.module || "core" })} style={input} aria-label="Proposal"><option value="sunset">Sunset</option><option value="keep">Keep</option></select>
                <select value={s.module} onChange={(e) => setSystem(i, { module: e.target.value })} style={input} aria-label="Module" disabled={s.prop === "keep"}><option value="">—</option>{p.modules.map((m) => <option key={m.key} value={m.key}>{m.name.split(":")[0]}</option>)}</select>
                <input inputMode="numeric" value={s.estimate || ""} onChange={(e) => setSystem(i, { estimate: numv(e.target.value) })} style={input} aria-label="Yearly estimate" />
                <input inputMode="numeric" value={s.start} onChange={(e) => setSystem(i, { start: numv(e.target.value) || p.firstYear })} style={input} aria-label="Savings from year" />
                <input value={s.why} onChange={(e) => setSystem(i, { why: e.target.value })} style={input} aria-label="Why or when" />
                <button type="button" onClick={() => up({ systems: p.systems.filter((_, j) => j !== i) })} style={btnLite}>✕</button>
              </div>
            ))}
            <datalist id="groups">{Array.from(new Set(p.systems.map((s) => s.group))).map((g) => <option key={g} value={g} />)}</datalist>
          </div>
        </div>
        <div><button type="button" onClick={() => up({ systems: [...p.systems, { id: newId("new" + p.systems.length), name: "", does: "", group: "Other", kind: "SaaS", prop: "sunset", module: "core", estimate: 0, start: p.firstYear + 1, why: "" }] })} style={btnLite}>Add system</button></div>
      </div>

      {/* Phases */}
      <div style={card}>
        <h2 style={h2}>Rollout phases</h2>
        {p.phases.map((ph, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr 2fr 1.4fr 70px", gap: 8, alignItems: "center" }}>
            <input value={ph.when} onChange={(e) => setPhase(i, { when: e.target.value })} style={input} placeholder="Months 0–2" aria-label="When" />
            <input value={ph.title} onChange={(e) => setPhase(i, { title: e.target.value })} style={input} placeholder="Connect" aria-label="Title" />
            <input value={ph.body} onChange={(e) => setPhase(i, { body: e.target.value })} style={input} placeholder="What happens" aria-label="Body" />
            <input value={ph.retires || ""} onChange={(e) => setPhase(i, { retires: e.target.value })} style={input} placeholder="Systems that retire" aria-label="Retires" />
            <button type="button" onClick={() => up({ phases: p.phases.filter((_, j) => j !== i) })} style={btnLite}>✕</button>
          </div>
        ))}
        <div><button type="button" onClick={() => up({ phases: [...p.phases, { when: "", title: "", body: "", retires: "" }] })} style={btnLite}>Add phase</button></div>
      </div>

      {/* Value buckets */}
      <div style={card}>
        <h2 style={h2}>Where the value comes from</h2>
        <p style={help}>Bucket 1 (hard savings) is computed from their systems. Bucket 2 lists spend in the client&apos;s own IT plan that the platform makes unnecessary; use their numbers and say where each came from. Bucket 3 lets the client enter revenue and see what a one-point improvement is worth.</p>
        <div style={{ fontSize: 14, fontWeight: 600 }}>Bucket 2: planned spend they no longer need</div>
        {p.avoided.map((a, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 120px 2fr 70px", gap: 8, alignItems: "center" }}>
            <input value={a.label} onChange={(e) => setAvoided(i, { label: e.target.value })} style={input} placeholder="Next Gen rebuild" aria-label="Item" />
            <input inputMode="numeric" value={a.amount || ""} onChange={(e) => setAvoided(i, { amount: numv(e.target.value) })} style={input} placeholder="$" aria-label="Amount" />
            <input value={a.note} onChange={(e) => setAvoided(i, { note: e.target.value })} style={input} placeholder="Source, e.g. 2025 IT capital plan" aria-label="Note" />
            <button type="button" onClick={() => up({ avoided: p.avoided.filter((_, j) => j !== i) })} style={btnLite}>✕</button>
          </div>
        ))}
        <div><button type="button" onClick={() => up({ avoided: [...p.avoided, { label: "", amount: 0, note: "" }] })} style={btnLite}>Add item</button></div>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 0", borderTop: "1px solid #F0F0F3" }}>
          <input id="show-upside" type="checkbox" checked={p.showUpside} onChange={(e) => up({ showUpside: e.target.checked })} style={{ width: 20, height: 20, marginTop: 2 }} />
          <label htmlFor="show-upside" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 15, fontWeight: 600 }}>Bucket 3: revenue upside levers on the plan page</span>
            <span style={{ fontSize: 13, color: "#4A5170", lineHeight: 1.5 }}>Dues revenue × retention improvement, and event revenue × more events booked. Shown as the client&apos;s own numbers, never ours.</span>
          </label>
        </div>
      </div>

      {/* Board memo, risk, comparison */}
      <div style={card}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <input id="memo-on" type="checkbox" checked={p.memo.enabled} onChange={(e) => up({ memo: { ...p.memo, enabled: e.target.checked } })} style={{ width: 20, height: 20 }} />
          <label htmlFor="memo-on"><h2 style={h2}>Board memo (one page at the top)</h2></label>
        </div>
        <p style={help}>Shown first on the overview and the full proposal. Leave the points empty and they are written from the live numbers; type your own to replace them.</p>
        <label style={label}>Title<input value={p.memo.title} onChange={(e) => up({ memo: { ...p.memo, title: e.target.value } })} style={input} /></label>
        <label style={label}>The ask<textarea value={p.memo.ask} onChange={(e) => up({ memo: { ...p.memo, ask: e.target.value } })} style={area} placeholder="Approve a 10-club, 90-day pilot…" /></label>
        <label style={label}>Points (one per line; empty = automatic)<textarea value={p.memo.points.join("\n")} onChange={(e) => up({ memo: { ...p.memo, points: e.target.value.split("\n") } })} onBlur={(e) => up({ memo: { ...p.memo, points: e.target.value.split("\n").map((x) => x.trim()).filter(Boolean) } })} style={{ ...area, height: 120 }} placeholder={memoPoints({ ...p, memo: { ...p.memo, points: [] } }, r, p.avoided.reduce((a, x) => a + x.amount, 0)).join("\n")} /></label>
      </div>

      <div style={card}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <input id="risk-on" type="checkbox" checked={p.risk.enabled} onChange={(e) => up({ risk: { ...p.risk, enabled: e.target.checked } })} style={{ width: 20, height: 20 }} />
          <label htmlFor="risk-on"><h2 style={h2}>Risk controls (&quot;If Ardn disappeared tomorrow&quot;)</h2></label>
        </div>
        <p style={help}>The first objection a CIO or board raises about a small vendor. Each card is a promise that goes into the agreement, so only keep what you will sign. </p>
        <label style={label}>Section title<input value={p.risk.title} onChange={(e) => up({ risk: { ...p.risk, title: e.target.value } })} style={input} /></label>
        {p.risk.items.map((x, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2.4fr 70px", gap: 8, alignItems: "start" }}>
            <input value={x.title} onChange={(e) => up({ risk: { ...p.risk, items: p.risk.items.map((y, j) => (j === i ? { ...y, title: e.target.value } : y)) } })} style={input} aria-label="Risk control title" />
            <textarea value={x.body} onChange={(e) => up({ risk: { ...p.risk, items: p.risk.items.map((y, j) => (j === i ? { ...y, body: e.target.value } : y)) } })} style={{ ...area, height: 64 }} aria-label="Risk control text" />
            <button type="button" onClick={() => up({ risk: { ...p.risk, items: p.risk.items.filter((_, j) => j !== i) } })} style={btnLite}>✕</button>
          </div>
        ))}
        <div><button type="button" onClick={() => up({ risk: { ...p.risk, items: [...p.risk.items, { title: "", body: "" }] } })} style={btnLite}>Add control</button></div>
      </div>

      <div style={card}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <input id="cmp-on" type="checkbox" checked={p.compare.enabled} onChange={(e) => up({ compare: { ...p.compare, enabled: e.target.checked } })} style={{ width: 20, height: 20 }} />
          <label htmlFor="cmp-on"><h2 style={h2}>Comparison against vendors they looked at</h2></label>
        </div>
        <p style={help}>Shown on the full proposal. Competitor cells start from public sources (review sites, vendor pages) as of October 2026. Change anything you know better; a blank cell shows as &quot;—&quot;.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 14 }}>
          <label style={label}>Section title<input value={p.compare.title} onChange={(e) => up({ compare: { ...p.compare, title: e.target.value } })} style={input} /></label>
          <label style={label}>Competitors (comma-separated)<input value={p.compare.competitors.join(", ")} onChange={(e) => up({ compare: { ...p.compare, competitors: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) } })} style={input} /></label>
        </div>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 900, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "grid", gridTemplateColumns: `1.2fr 1.4fr repeat(${p.compare.competitors.length}, 1fr) 70px`, gap: 8, fontSize: 12, fontWeight: 600, color: "#4A5170" }}>
              <div>Criterion</div><div>{p.product}</div>{p.compare.competitors.map((c) => <div key={c}>{c}</div>)}<div></div>
            </div>
            {p.compare.rows.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: `1.2fr 1.4fr repeat(${p.compare.competitors.length}, 1fr) 70px`, gap: 8, alignItems: "center" }}>
                <input value={row.criterion} onChange={(e) => up({ compare: { ...p.compare, rows: p.compare.rows.map((y, j) => (j === i ? { ...y, criterion: e.target.value } : y)) } })} style={input} aria-label="Criterion" />
                <input value={row.us} onChange={(e) => up({ compare: { ...p.compare, rows: p.compare.rows.map((y, j) => (j === i ? { ...y, us: e.target.value } : y)) } })} style={input} aria-label="Ours" />
                {p.compare.competitors.map((c, k) => (
                  <input key={c} value={row.others[k] || ""} onChange={(e) => { const o = [...row.others]; o[k] = e.target.value; up({ compare: { ...p.compare, rows: p.compare.rows.map((y, j) => (j === i ? { ...y, others: o } : y)) } }); }} style={input} aria-label={c} placeholder="—" />
                ))}
                <button type="button" onClick={() => up({ compare: { ...p.compare, rows: p.compare.rows.filter((_, j) => j !== i) } })} style={btnLite}>✕</button>
              </div>
            ))}
            <div><button type="button" onClick={() => up({ compare: { ...p.compare, rows: [...p.compare.rows, { criterion: "", us: "", others: [] }] } })} style={btnLite}>Add row</button></div>
          </div>
        </div>
      </div>

      {/* Gaps and next steps */}
      <div style={card}>
        <h2 style={h2}>Open gaps (optional)</h2>
        {p.gaps.map((g, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 2fr 100px 70px", gap: 8, alignItems: "center" }}>
            <input value={g.gap} onChange={(e) => setGap(i, { gap: e.target.value })} style={input} placeholder="Gap" aria-label="Gap" />
            <input value={g.how} onChange={(e) => setGap(i, { how: e.target.value })} style={input} placeholder="How we close it" aria-label="How" />
            <input value={g.phase} onChange={(e) => setGap(i, { phase: e.target.value })} style={input} placeholder="P3" aria-label="Before phase" />
            <button type="button" onClick={() => up({ gaps: p.gaps.filter((_, j) => j !== i) })} style={btnLite}>✕</button>
          </div>
        ))}
        <div><button type="button" onClick={() => up({ gaps: [...p.gaps, { gap: "", how: "", phase: "" }] })} style={btnLite}>Add gap</button></div>
        <h2 style={{ ...h2, marginTop: 10 }}>Next steps</h2>
        <textarea value={p.nextSteps.join("\n")} onChange={(e) => up({ nextSteps: e.target.value.split("\n") })} onBlur={(e) => up({ nextSteps: e.target.value.split("\n").map((x) => x.trim()).filter(Boolean) })} style={{ ...area, height: 100 }} placeholder="One step per line" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
          <label style={label}>Contact email for the button<input value={p.contact.email} onChange={(e) => up({ contact: { ...p.contact, email: e.target.value } })} style={input} /></label>
          <label style={label}>Button text<input value={p.contact.ctaLabel} onChange={(e) => up({ contact: { ...p.contact, ctaLabel: e.target.value } })} style={input} /></label>
        </div>
      </div>

      {/* Fit-gap */}
      <div style={card}>
        <h2 style={h2}>Fit-gap rows (optional, {p.fitRows.length})</h2>
        <p style={help}>One row per capability the client listed. Shown as the filterable table on the full proposal. Leave empty for a client without a capability list.</p>
        {p.fitRows.length ? (
          <details>
            <summary style={{ cursor: "pointer", fontSize: 14, fontWeight: 600 }}>Show and edit rows</summary>
            <div style={{ overflowX: "auto", marginTop: 12 }}>
              <div style={{ minWidth: 1100, display: "flex", flexDirection: "column", gap: 6 }}>
                {p.fitRows.map((x, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1.4fr 1.6fr 110px 1fr 70px 60px", gap: 6, alignItems: "center" }}>
                    <input value={x.area} onChange={(e) => setFit(i, { area: e.target.value })} style={input} aria-label="Area" />
                    <input value={x.capability} onChange={(e) => setFit(i, { capability: e.target.value })} style={input} aria-label="Capability" />
                    <input value={x.current} onChange={(e) => setFit(i, { current: e.target.value })} style={input} aria-label="Current system" />
                    <input value={x.feature} onChange={(e) => setFit(i, { feature: e.target.value })} style={input} aria-label="Feature" />
                    <select value={x.status} onChange={(e) => setFit(i, { status: e.target.value as FitRow["status"] })} style={input} aria-label="Status">{["fit", "partial", "gap", "integrate", "out"].map((s) => <option key={s}>{s}</option>)}</select>
                    <input value={x.phase} onChange={(e) => setFit(i, { phase: e.target.value })} style={input} aria-label="Phase" />
                    <input value={x.video} onChange={(e) => setFit(i, { video: e.target.value })} style={input} aria-label="Video id" placeholder="V04" />
                    <button type="button" onClick={() => up({ fitRows: p.fitRows.filter((_, j) => j !== i) })} style={btnLite}>✕</button>
                  </div>
                ))}
              </div>
            </div>
          </details>
        ) : null}
        <div><button type="button" onClick={() => up({ fitRows: [...p.fitRows, { area: "", capability: "", current: "", feature: "", status: "fit", note: "", phase: "", video: "" }] })} style={btnLite}>Add row</button></div>
      </div>
    </div>
  );
}
