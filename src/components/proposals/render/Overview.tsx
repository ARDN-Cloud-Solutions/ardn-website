"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { money, num, paybackLabel, proposedRoi, roi, type Proposal, type SystemRow } from "@/lib/proposals/model";
import { AI_PRODUCTS, fill } from "@/lib/proposals/library";
import { DEMO_VIDEOS } from "@/content/proposals/videos";
import { C, Center, Footer, Kicker, TopBar, VideoModal, btnGhost, btnPrimary, card, container, h2, input, lede, section, useTracking } from "./shared";
import { BoardMemo, WhyUs } from "./Sections";


type TableProps = { p: Proposal; rows: SystemRow[]; title: string; on: Record<string, boolean>; vals: Record<string, string>; setOn: (v: Record<string, boolean>) => void; setVals: (v: Record<string, string>) => void };

const seg = (active: boolean, dark: string): React.CSSProperties => ({ minWidth: 72, height: 40, padding: "0 14px", border: 0, fontFamily: "inherit", fontSize: 14, fontWeight: 600, cursor: "pointer", background: active ? dark : "#FFFFFF", color: active ? "#FFFFFF" : C.slate });

function SystemRowView({ s, on, vals, setOn, setVals }: { s: SystemRow } & Omit<TableProps, "p" | "rows" | "title">) {
  const active = on[s.id] !== undefined ? on[s.id] : s.prop === "sunset";
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1.4fr 1.3fr 2fr", gap: 20, padding: "18px 24px", borderTop: "1px solid #F0F0F3", alignItems: "start", fontSize: 15, lineHeight: 1.45 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontWeight: 600 }}>{s.name}</div>
        <div style={{ fontSize: 13, color: C.slate }}>{s.does}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start" }}>
        <span style={{ display: "inline-block", padding: "4px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, background: s.prop === "sunset" ? "#E3F0E9" : "#EDEDF0", color: s.prop === "sunset" ? C.green : "#3A3A3F" }}>{s.prop === "sunset" ? "Sunset" : "Keep"}</span>
        <div style={{ fontSize: 13, color: C.slate }}>{s.why}</div>
      </div>
      <div role="group" aria-label={`Sunset or keep ${s.name}`} style={{ display: "flex", border: `1px solid ${C.line2}`, borderRadius: 22, overflow: "hidden", alignSelf: "start" }}>
        <button type="button" onClick={() => setOn({ ...on, [s.id]: true })} aria-pressed={active} style={seg(active, C.green)}>Sunset</button>
        <button type="button" onClick={() => setOn({ ...on, [s.id]: false })} aria-pressed={!active} style={seg(!active, C.slate)}>Keep</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {(["sw", "sup"] as const).map((k) => {
          const key = s.id + "_" + k;
          return (
            <div key={key} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 8, alignItems: "center" }}>
              <label htmlFor={"cost-" + key} style={{ fontSize: 13, color: C.slate }}>{k === "sw" ? "Software" : "Support"}</label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 12, top: 10, color: C.slate, fontSize: 15 }}>$</span>
                <input id={"cost-" + key} inputMode="numeric" placeholder={k === "sw" && s.estimate ? "est. " + s.estimate.toLocaleString("en-US") : "0"} value={vals[key] || ""} onChange={(e) => setVals({ ...vals, [key]: e.target.value.replace(/[^0-9,]/g, "") })} style={input} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SystemTable({ p, rows, title, on, vals, setOn, setVals }: TableProps) {
  if (!rows.length) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700, letterSpacing: "-0.01em", color: C.ink }}>
        {title} <span style={{ color: C.slate, fontWeight: 500 }}>{rows.length} systems</span>
      </h3>
      <div style={{ overflowX: "auto", background: "#FFFFFF", borderRadius: 22 }}>
        <div style={{ minWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1.4fr 1.3fr 2fr", gap: 20, padding: "16px 24px", borderBottom: `1px solid ${C.line}`, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.slate }}>
            <div>System</div><div>Our proposal</div><div>Your choice</div><div>What you pay, per year</div>
          </div>
          {rows.map((s) => <SystemRowView key={s.id} s={s} on={on} vals={vals} setOn={setOn} setVals={setVals} />)}
        </div>
      </div>
      <span style={{ display: "none" }}>{p.slug}</span>
    </div>
  );
}

export default function Overview({ p }: { p: Proposal }) {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const [vals, setVals] = useState<Record<string, string>>({});
  const [video, setVideo] = useState<string | null>(null);
  const [from, setFrom] = useState<string>("");
  const state = useMemo(() => ({ on, vals }), [on, vals]);
  useTracking("overview", state, video);

  const f = (s: string) => fill(s, p.client, p.pricing.locations, p.pricing.locationLabel);
  const isOn = (s: SystemRow) => (on[s.id] !== undefined ? on[s.id] : s.prop === "sunset");
  const costs: Record<string, number> = {};
  for (const s of p.systems) {
    const v = num(vals[s.id + "_sw"]) + num(vals[s.id + "_sup"]);
    if (v > 0) costs[s.id] = v;
  }
  const r = roi(p, { on: p.systems.filter(isOn).map((s) => s.id), costs, locations: p.pricing.locations });
  const base = proposedRoi(p);
  const avoidedTotal = p.avoided.reduce((a, x) => a + x.amount, 0);
  const entered = Object.keys(costs).length > 0;
  const changed = p.systems.filter((s) => isOn(s) !== (s.prop === "sunset")).length;
  const stats: { value: string; label: string; green?: boolean }[] = [
    ...(p.leadWithRoi && base.ebitda > 0 ? [
      { value: money(base.ebitda), label: `added to EBITDA every year at full rollout`, green: true },
      { value: paybackLabel(base), label: base.paybackMonths != null && base.paybackMonths <= 12 ? `cash-positive, with fees billed only as ${p.pricing.locationLabel}s go live` : `to payback, with fees billed only as ${p.pricing.locationLabel}s go live` },
    ] : []),
    ...p.stats.filter((s) => s.value).map((s) => ({ value: s.value, label: s.label })),
  ];
  const sunsetRows = p.systems.filter((s) => s.prop === "sunset");
  const keepRows = p.systems.filter((s) => s.prop === "keep");
  const anchors = [
    ...(p.memo.enabled ? [{ href: "#memo", label: "For the board" }] : []),
    ...(p.sections.aiFirst ? [{ href: "#aifirst", label: "AI first" }] : []),
    ...(p.compare.enabled ? [{ href: "#whyus", label: "Why us" }] : []),
    ...(p.videos.length ? [{ href: "#see", label: "See it work" }] : []),
    { href: "#plan", label: "The plan" },
    { href: "#savings", label: "Savings" },
  ];

  return (
    <div data-proposal-root style={{ color: C.ink, background: "#FFFFFF", minHeight: "100vh" }}>
      <TopBar p={p} active="overview" anchors={anchors} />

      <div style={{ ...container, padding: "88px 24px 64px" }}>
        <Center max={900}>
          <Kicker>{p.hero.eyebrow}</Kicker>
          <h1 style={{ margin: 0, fontSize: 80, lineHeight: 1.02, fontWeight: 700, letterSpacing: "-0.035em" }}>{p.hero.headline}</h1>
          <p style={{ ...lede, fontSize: 24, maxWidth: 720 }}>{p.hero.intro}</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, paddingTop: 8 }}>
            {p.videos.length ? <a href="#see" style={btnPrimary}>See it work</a> : <Link href={`/proposals/${p.slug}/plan`} style={btnPrimary}>Build your plan</Link>}
            <Link href={`/proposals/${p.slug}/details`} style={btnGhost}>Read the full proposal</Link>
          </div>
        </Center>
      </div>

      <BoardMemo p={p} r={base} avoidedTotal={avoidedTotal} />

      {stats.length ? (
        <div style={{ background: C.canvas }}>
          <div style={{ ...container, padding: "96px 24px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, textAlign: "center" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: "-0.03em", color: s.green ? C.green : C.ink }}>{s.value}</div>
                <div style={{ fontSize: 17, lineHeight: 1.45, color: C.slate }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ ...container, padding: `${p.strategic ? 56 : 96}px 24px 96px`, textAlign: "center" }}>
            {p.strategic ? <p style={{ margin: "0 auto", maxWidth: 820, fontSize: 19, lineHeight: 1.5, color: C.ink, fontWeight: 500 }}>{p.strategic}</p> : null}
          </div>
        </div>
      ) : null}


      {(p.leadWithRoi && (p.avoided.length || p.showUpside)) ? (
        <div id="value" style={{ ...container, ...section, display: "flex", flexDirection: "column", gap: 40 }}>
          <Center max={820}>
            <Kicker>Where the value comes from</Kicker>
            <h2 style={h2}>Three buckets. Only the first one is in the headline number.</h2>
            <p style={lede}>We count hard savings first. The other two buckets are real money too, and the full proposal shows the sources.</p>
          </Center>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <div style={{ ...card, background: C.canvas, gap: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.green }}>1 · Hard savings, every year</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em" }}>{money(base.ebitda)}</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: C.slate }}>Software, licences and support retired, minus every {p.product} fee. Counted in EBITDA.</div>
            </div>
            {p.avoided.length ? (
              <div style={{ ...card, background: C.canvas, gap: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.green }}>2 · Spend you no longer need</div>
                <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em" }}>{money(avoidedTotal)}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5, color: C.slate }}>Projects in your own IT plan that {p.product} replaces: {p.avoided.slice(0, 3).map((a) => a.label).join(", ")}{p.avoided.length > 3 ? " and more" : ""}.</div>
              </div>
            ) : null}
            {p.showUpside ? (
              <div style={{ ...card, background: C.canvas, gap: 10 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.green }}>3 · Revenue upside</div>
                <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em" }}>Your numbers</div>
                <div style={{ fontSize: 15, lineHeight: 1.5, color: C.slate }}>Retention, instant event quotes and faster collections. Enter your revenue on the plan page and see what one point of improvement is worth.</div>
              </div>
            ) : null}
          </div>
          <div style={{ textAlign: "center" }}><Link href={`/proposals/${p.slug}/plan`} style={btnPrimary}>Build your plan</Link></div>
        </div>
      ) : null}

      <WhyUs p={p} />

      {p.sections.aiFirst ? (
        <div id="aifirst" style={{ ...container, ...section, display: "flex", flexDirection: "column", gap: 40 }}>
          <Center>
            <Kicker>AI first</Kicker>
            <h2 style={h2}>Built in from day one. Not bolted on.</h2>
            <p style={lede}>{p.product} was designed around AI. These capabilities run natively for every {p.pricing.locationLabel}, as part of the platform.</p>
          </Center>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {AI_PRODUCTS.slice(0, 3).map((a) => (
              <div key={a.title} style={{ ...card, background: C.canvas, gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: C.green, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d={a.icon} fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <div style={{ fontSize: 21, fontWeight: 600 }}>{a.title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5, color: C.slate }}>{f(a.body)}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{a.tags.map((t) => <span key={t} style={{ padding: "4px 10px", borderRadius: 12, background: "#FFFFFF", fontSize: 12, fontWeight: 600, color: C.green }}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {p.videos.length ? (
        <div id="see" style={{ background: C.canvas }}>
          <div style={{ ...container, ...section, display: "flex", flexDirection: "column", gap: 40 }}>
            <Center>
              <h2 style={h2}>See it work.</h2>
              <p style={lede}>Short demos of the moments your teams live in every day.</p>
            </Center>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
              {p.videos.slice(0, 3).map((id) => {
                const v = DEMO_VIDEOS[id];
                if (!v) return null;
                return (
                  <button key={id} type="button" onClick={() => { setFrom(v.name); setVideo(id); }} aria-label={`Play: ${v.name}`} style={{ textAlign: "left", border: 0, padding: 0, background: "#FFFFFF", borderRadius: 20, overflow: "hidden", cursor: "pointer", fontFamily: "inherit", color: C.ink, display: "flex", flexDirection: "column" }}>
                    <div style={{ aspectRatio: "16 / 10", width: "100%", backgroundImage: `url(/videos/${v.slug}-poster.webp)`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 56, height: 56, borderRadius: 28, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }}>
                        <svg width="18" height="18" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.5 1.8v8.4l6.5-4.2z" fill={C.green}></path></svg>
                      </div>
                    </div>
                    <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: 6 }}>
                      <div style={{ fontSize: 19, fontWeight: 600 }}>{v.name}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            {p.fitRows.length ? <div style={{ textAlign: "center" }}><Link href={`/proposals/${p.slug}/details#fitgap`} style={{ fontSize: 17, fontWeight: 500, color: C.green, textDecoration: "none" }}>See every capability and demo ›</Link></div> : null}
          </div>
        </div>
      ) : null}

      <div id="plan" style={{ ...container, ...section, display: "flex", flexDirection: "column", gap: 48 }}>
        <Center max={640}>
          <h2 style={h2}>No big bang.</h2>
          <p style={lede}>Each step retires systems before the next begins.</p>
        </Center>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 28 }}>
          {p.phases.map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 18, borderTop: `2px solid ${C.green}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.green }}>{s.when}</div>
              <div style={{ fontSize: 20, fontWeight: 600 }}>{s.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: C.slate }}>{s.body}</div>
            </div>
          ))}
        </div>
      </div>

      <div id="savings" style={{ background: C.canvas }}>
        <div style={{ ...container, ...section, maxWidth: 1180, display: "flex", flexDirection: "column", gap: 40 }}>
          <Center>
            <h2 style={h2}>Choose what to sunset.</h2>
            <p style={lede}>We have marked the systems {p.product} can replace. Switch any system between Sunset and Keep, add what you pay for it, and your savings update as you go.</p>
          </Center>
          <div style={{ background: "#FFFFFF", borderRadius: 22, padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, alignItems: "end" }}>
            <div><div style={{ fontSize: 14, color: C.slate }}>Systems to sunset</div><div style={{ fontSize: 36, fontWeight: 700 }}>{r.count}</div><div style={{ fontSize: 13, color: C.slate }}>{changed ? `${changed} changed from our proposal` : "Our proposal"}</div></div>
            <div><div style={{ fontSize: 14, color: C.slate }}>Their cost, per year</div><div style={{ fontSize: 36, fontWeight: 700 }}>{money(r.savingFull)}</div><div style={{ fontSize: 13, color: C.slate }}>{entered ? "Includes the numbers you entered" : "Estimates until you enter your numbers"}</div></div>
            <div><div style={{ fontSize: 14, color: C.slate }}>{p.product} at full rollout</div><div style={{ fontSize: 36, fontWeight: 700 }}>{money(r.feeYear + r.supportYear)}</div><div style={{ fontSize: 13, color: C.slate }}>${r.perLocation.toLocaleString("en-US")} per {p.pricing.locationLabel} per month, {p.pricing.locations} {p.pricing.locationLabel}s{r.supportYear ? ", plus support" : ""}</div></div>
            <div><div style={{ fontSize: 14, color: C.slate }}>Yearly savings</div><div style={{ fontSize: 44, fontWeight: 700, color: r.savingFull - r.feeYear - r.supportYear >= 0 ? C.green : C.red }}>{money(r.savingFull - r.feeYear - r.supportYear)}</div><div style={{ fontSize: 13, color: C.slate }}>At full rollout</div></div>
            <div style={{ gridColumn: "1 / -1", paddingTop: 16, borderTop: `1px solid ${C.line}`, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, color: C.slate }}>Your entries save automatically and are shared with the Ardn team.</span>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href={`/proposals/${p.slug}/plan`} style={{ ...btnPrimary, height: 44, fontSize: 15 }}>See payback and 5-year return</Link>
                <button type="button" onClick={() => { setOn({}); setVals({}); }} style={{ ...btnGhost, height: 44, fontSize: 15 }}>Reset to our proposal</button>
              </div>
            </div>
          </div>
          <SystemTable p={p} rows={sunsetRows} title="We propose to sunset" on={on} vals={vals} setOn={setOn} setVals={setVals} />
          {keepRows.length ? (
            <details>
              <summary style={{ cursor: "pointer", fontSize: 17, fontWeight: 600, color: C.green, padding: "8px 0" }}>Show the {keepRows.length} systems we propose to keep</summary>
              <div style={{ paddingTop: 16 }}><SystemTable p={p} rows={keepRows} title="We propose to keep" on={on} vals={vals} setOn={setOn} setVals={setVals} /></div>
            </details>
          ) : null}
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: C.slate, textAlign: "center" }}>Our proposal alone saves {money(base.savingFull - base.feeYear - base.supportYear)} a year at full rollout.</p>
        </div>
      </div>

      <div style={{ ...container, padding: "120px 24px 136px" }}>
        <Center>
          <h2 style={{ ...h2, fontSize: 56 }}>${p.pricing.corePerLocation.toLocaleString("en-US")} per {p.pricing.locationLabel}, per month.</h2>
          <p style={{ ...lede, fontSize: 22 }}>Core modules included. Add-on modules ${p.pricing.addonPerLocation} per {p.pricing.locationLabel}, per month each. Unlimited staff. No per-seat pricing.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, paddingTop: 12 }}>
            <a href={`mailto:${p.contact.email}?subject=${encodeURIComponent(`${p.client} x ${p.product} working session`)}`} style={btnPrimary}>{p.contact.ctaLabel}</a>
            <Link href={`/proposals/${p.slug}/details`} style={btnGhost}>Read the full proposal</Link>
          </div>
        </Center>
      </div>
      <Footer p={p} />
      <VideoModal id={video} from={from} onClose={() => setVideo(null)} />
    </div>
  );
}
