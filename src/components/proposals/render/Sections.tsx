"use client";

import Link from "next/link";
import { money, paybackLabel, type Proposal, type RoiResult } from "@/lib/proposals/model";
import { AI_COMPARE, AI_STEPS, WHY_LAYERS, WHY_MODELS, WHY_POINTS, fill } from "@/lib/proposals/library";
import { C, Center, Kicker, card, container, h2, lede, section } from "./shared";

/** Default memo points, written from the live numbers. */
export function memoPoints(p: Proposal, r: RoiResult, avoidedTotal: number): string[] {
  if (p.memo.points.filter(Boolean).length) return p.memo.points.filter(Boolean);
  const pts = [
    `${money(r.ebitda)} added to EBITDA every year at full rollout: ${p.systems.filter((s) => s.prop === "sunset").length} systems retired, minus every ${p.product} fee.`,
    p.pricing.implementation ? `${money(p.pricing.implementation)} implementation, then fees billed only as each ${p.pricing.locationLabel} goes live.` : `No implementation fee. Fees are billed only as each ${p.pricing.locationLabel} goes live, so year 1 is ${r.years[0].net >= 0 ? "cash-positive" : "near cash-neutral"}.`,
    `${paybackLabel(r)} ${r.paybackMonths != null && r.paybackMonths <= 12 ? "cash-positive" : "to payback"}; ${money(r.net5)} net over five years.`,
  ];
  if (avoidedTotal) pts.push(`${money(avoidedTotal)} of planned IT projects no longer needed, on top of the EBITDA figure.`);
  if (p.risk.enabled) pts.push("Risk controls in the agreement: source-code escrow, monthly data export, uptime commitment with service credits, named team, written exit plan.");
  return pts;
}

export function BoardMemo({ p, r, avoidedTotal, dark }: { p: Proposal; r: RoiResult; avoidedTotal: number; dark?: boolean }) {
  if (!p.memo.enabled) return null;
  const fg = dark ? "#F4F2EC" : C.ink;
  const muted = dark ? "#C9D4CF" : C.slate;
  return (
    <div id="memo" style={{ ...container, maxWidth: 1080, padding: "0 24px 64px" }}>
      <div style={{ background: dark ? "#1F2654" : "#FFFFFF", border: dark ? "none" : `1px solid ${C.line}`, borderRadius: 22, padding: "36px 40px", display: "flex", flexDirection: "column", gap: 18, color: fg }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: dark ? C.gold : C.green }}>{p.memo.title}</div>
        {p.memo.ask ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 13, color: muted }}>The ask</div>
            <div style={{ fontSize: 20, lineHeight: 1.45, fontWeight: 600 }}>{p.memo.ask}</div>
          </div>
        ) : null}
        <ul style={{ margin: 0, paddingLeft: 22, listStyle: "disc", display: "flex", flexDirection: "column", gap: 8, fontSize: 16, lineHeight: 1.55, color: dark ? "#DCE4E0" : C.ink }}>
          {memoPoints(p, r, avoidedTotal).map((x, i) => <li key={i}>{x}</li>)}
        </ul>
        <div><a href={`/proposals/${p.slug}/brief`} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", height: 44, padding: "0 20px", borderRadius: 22, background: dark ? C.gold : C.green, color: dark ? C.dark : "#FFFFFF", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>Download the one-page board brief (PDF)</a></div>
      </div>
    </div>
  );
}

export function RiskSection({ p, id = "risk" }: { p: Proposal; id?: string }) {
  if (!p.risk.enabled) return null;
  return (
    <div id={id} style={{ background: C.canvas }}>
      <div style={{ ...container, ...section, display: "flex", flexDirection: "column", gap: 40 }}>
        <Center max={820}>
          <Kicker>Risk</Kicker>
          <h2 style={h2}>{p.risk.title}</h2>
          <p style={lede}>A fair question for any platform partner. Here is what the agreement puts in writing.</p>
        </Center>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {p.risk.items.map((x, i) => (
            <div key={i} style={{ ...card, gap: 8 }}>
              <div style={{ fontSize: 19, fontWeight: 600, color: C.ink }}>{x.title}</div>
              <div style={{ fontSize: 15, lineHeight: 1.55, color: C.slate }}>{x.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CompareSection({ p }: { p: Proposal }) {
  if (!p.compare.enabled) return null;
  const cols = [p.product, ...p.compare.competitors];
  return (
    <div id="compare" style={{ ...container, maxWidth: 1240, padding: "72px 24px 40px", display: "flex", flexDirection: "column", gap: 28 }}>
      <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B5210" }}>Compared</div>
        <h2 style={{ ...h2, fontSize: 36 }}>{p.compare.title}</h2>
      </div>
      <div style={{ overflowX: "auto", background: "#FFFFFF", border: `1px solid ${C.line}`, borderRadius: 14 }}>
        <div style={{ minWidth: 760 }}>
          <div style={{ display: "grid", gridTemplateColumns: `1.4fr repeat(${cols.length}, 1fr)`, gap: 16, padding: "14px 20px", background: C.canvas, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.slate }}>
            <div></div>{cols.map((c, i) => <div key={i} style={{ color: i === 0 ? C.green : C.slate }}>{c}</div>)}
          </div>
          {p.compare.rows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: `1.4fr repeat(${cols.length}, 1fr)`, gap: 16, padding: "14px 20px", borderTop: "1px solid #ECE8DE", fontSize: 14, lineHeight: 1.45 }}>
              <div style={{ fontWeight: 600 }}>{row.criterion}</div>
              <div style={{ fontWeight: 600, color: C.green }}>{row.us}</div>
              {p.compare.competitors.map((_, j) => <div key={j} style={{ color: C.slate }}>{row.others[j] || "—"}</div>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WhyArdnSection({ p }: { p: Proposal }) {
  const f = (s: string) => fill(s, p.client, p.pricing.locations, p.pricing.locationLabel);
  return (
    <>
      {p.sections.whyArdn ? (
        <div id="why" style={{ background: C.canvas }}>
          <div style={{ ...container, ...section, display: "flex", flexDirection: "column", gap: 40 }}>
            <Center max={820}>
              <Kicker>Why Ardn</Kicker>
              <h2 style={h2}>Not another software vendor. The platform and the people behind it.</h2>
              <p style={lede}>A SaaS vendor sells you a login and leaves the rest to your team. Ardn runs {p.product} for you as a managed platform: the infrastructure, the application, the integrations and the people who keep it all working.</p>
            </Center>
            <div style={{ overflowX: "auto", background: "#FFFFFF", borderRadius: 22, padding: 24 }}>
              <div style={{ minWidth: 760, display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)", gap: 10, alignItems: "stretch" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.slate, alignSelf: "end", paddingBottom: 8 }}>Who handles it</div>
                {WHY_MODELS.map(([name, sub]) => (
                  <div key={name} style={{ padding: 14, borderRadius: 14, display: "flex", flexDirection: "column", gap: 4, background: name === "Ardn" ? C.green : "#EDEDF0", color: name === "Ardn" ? "#FFFFFF" : C.ink }}>
                    <div style={{ fontSize: 17, fontWeight: 700 }}>{name}</div>
                    <div style={{ fontSize: 12, opacity: 0.85 }}>{f(sub)}</div>
                  </div>
                ))}
                {WHY_LAYERS.map((l) => (
                  <div key={l[0]} style={{ display: "contents" }}>
                    <div style={{ padding: "10px 0", display: "flex", flexDirection: "column" }}><div style={{ fontSize: 15, fontWeight: 600 }}>{f(l[0])}</div><div style={{ fontSize: 13, color: C.slate }}>{f(l[1])}</div></div>
                    {[l[2], l[3], l[4], "A"].map((c, i) => (
                      <div key={i} style={{ height: 40, alignSelf: "center", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, background: c === "Y" ? "#F1E4E0" : c === "V" ? "#EDEDF0" : C.green, color: c === "Y" ? "#8F2F12" : c === "V" ? "#3A3A3F" : "#FFFFFF" }}>{c === "Y" ? "Your team" : c === "V" ? "Vendor" : "Ardn"}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
              {WHY_POINTS.map((x) => (
                <div key={x.title} style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 18, borderTop: `2px solid ${C.green}` }}>
                  <div style={{ fontSize: 22, fontWeight: 600 }}>{x.title}</div>
                  <div style={{ fontSize: 16, lineHeight: 1.5, color: C.slate }}>{f(x.body)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

    </>
  );
}

export function AiSupportSection({ p }: { p: Proposal }) {
  const f = (s: string) => fill(s, p.client, p.pricing.locations, p.pricing.locationLabel);
  return (
    <>
      {p.sections.aiSupport ? (
        <div id="ai" style={{ ...container, ...section, display: "flex", flexDirection: "column", gap: 40 }}>
          <Center max={820}>
            <h2 style={h2}>Built AI native. We know before you call.</h2>
            <p style={lede}>Error tracking is built into {p.product}. When anything goes wrong for any user, we are notified at the same moment they are, and triage starts right away.</p>
          </Center>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
            {AI_STEPS.map((a) => (
              <div key={a.n} style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 18, borderTop: `2px solid ${C.green}` }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.green }}>{a.n}</div>
                <div style={{ fontSize: 22, fontWeight: 600 }}>{a.title}</div>
                <div style={{ fontSize: 16, lineHeight: 1.5, color: C.slate }}>{f(a.body)}</div>
              </div>
            ))}
          </div>
          <div style={{ overflowX: "auto", background: C.canvas, borderRadius: 22 }}>
            <div style={{ minWidth: 640 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.1fr 2fr 2fr", gap: 20, padding: "18px 28px", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.slate }}>
                <div>When something breaks</div><div>Off-the-shelf products</div><div style={{ color: C.green }}>{p.product}</div>
              </div>
              {AI_COMPARE.map((c) => (
                <div key={c.k} style={{ display: "grid", gridTemplateColumns: "1.1fr 2fr 2fr", gap: 20, padding: "18px 28px", borderTop: `1px solid ${C.line}`, fontSize: 16, lineHeight: 1.5 }}>
                  <div style={{ fontWeight: 600 }}>{c.k}</div><div style={{ color: C.slate }}>{f(c.them)}</div><div>{f(c.us)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

    </>
  );
}

/** Short comparison on the overview: the four rows that decide it. */
export function WhyUs({ p }: { p: Proposal }) {
  if (!p.compare.enabled) return null;
  const keys = ["How it's priced", "Built for a multi-club operator", "Who runs it", "AI"];
  const rows = p.compare.rows.filter((r) => keys.includes(r.criterion));
  if (!rows.length) return null;
  return (
    <div id="whyus" style={{ background: C.canvas }}>
      <div style={{ ...container, ...section, display: "flex", flexDirection: "column", gap: 36 }}>
        <Center max={760}>
          <Kicker>Why {p.product}</Kicker>
          <h2 style={h2}>Built to scale with every {p.pricing.locationLabel} you add.</h2>
          <p style={lede}>Compared with the platforms you have already evaluated.</p>
        </Center>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {rows.map((r) => (
            <div key={r.criterion} style={{ ...card, gap: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.slate, textTransform: "uppercase", letterSpacing: "0.06em" }}>{r.criterion}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: C.green, lineHeight: 1.35 }}>{r.us}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: C.slate }}>
                {p.compare.competitors.map((c, i) => (r.others[i] ? <div key={c}><strong style={{ color: C.ink }}>{c}:</strong> {r.others[i]}</div> : null))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}><Link href={`/proposals/${p.slug}/details#compare`} style={{ fontSize: 17, fontWeight: 500, color: C.green, textDecoration: "none" }}>See the full comparison ›</Link></div>
      </div>
    </div>
  );
}
