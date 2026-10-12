"use client";

import { useMemo, useState } from "react";
import { money, num, roi, type Proposal } from "@/lib/proposals/model";
import { C, Center, Footer, TopBar, container, input, lede, useTracking } from "./shared";

export default function Plan({ p }: { p: Proposal }) {
  const sunset = p.systems.filter((s) => s.prop === "sunset").map((s) => s.id);
  const quick = p.systems.filter((s) => s.prop === "sunset" && s.start === Math.min(...p.systems.filter((x) => x.prop === "sunset").map((x) => x.start))).map((s) => s.id);
  const presets = [
    { k: "quick", label: "Quick wins", ids: quick },
    { k: "proposal", label: "Our proposal", ids: sunset },
    { k: "all", label: "Everything", ids: p.systems.filter((s) => s.module).map((s) => s.id) },
    { k: "none", label: "Start blank", ids: [] as string[] },
  ];
  const [on, setOn] = useState<string[]>(sunset);
  const [preset, setPreset] = useState("proposal");
  const [costs, setCosts] = useState<Record<string, string>>({});
  const [locations, setLocations] = useState(String(p.pricing.locations));
  const [up, setUp] = useState<Record<string, string>>({});
  const state = useMemo(() => ({ on, costs, locations, preset, upside: up }), [on, costs, locations, preset, up]);
  const upside = p.showUpside ? Math.round((num(up.dues) * (parseFloat(up.retention || "0") || 0)) / 100 + (num(up.events) * (parseFloat(up.eventsPct || "0") || 0)) / 100) : 0;
  useTracking("plan", state, null);

  const costNums: Record<string, number> = {};
  for (const [k, v] of Object.entries(costs)) if (num(v) > 0) costNums[k] = num(v);
  const r = roi(p, { on, costs: costNums, locations: num(locations) || 1 });
  const groups = Array.from(new Set(p.systems.filter((s) => s.module).map((s) => s.group)));
  const maxAbs = Math.max(1, ...r.years.map((y) => Math.abs(y.cum)));
  const card: React.CSSProperties = { background: "#FFFFFF", borderRadius: 20, padding: 24, display: "flex", flexDirection: "column", gap: 12 };

  return (
    <div data-proposal-root style={{ color: C.ink, background: C.canvas, minHeight: "100vh" }}>
      <TopBar p={p} active="plan" />
      <div style={{ background: "#FFFFFF" }}>
        <div style={{ ...container, maxWidth: 1180, padding: "72px 24px 40px" }}>
          <Center max={700}>
            <h1 style={{ margin: 0, fontSize: 64, lineHeight: 1.04, fontWeight: 700, letterSpacing: "-0.035em" }}>Build your plan.</h1>
            <p style={{ ...lede, fontSize: 21 }}>Choose the systems you would retire. Add what each costs if you know it. Your return updates as you go.</p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, padding: 5, background: C.canvas, borderRadius: 26, marginTop: 12 }}>
              {presets.map((x) => (
                <button key={x.k} type="button" aria-pressed={preset === x.k} onClick={() => { setOn(x.ids); setPreset(x.k); }} style={{ height: 44, padding: "0 18px", border: 0, borderRadius: 22, fontFamily: "inherit", fontSize: 15, fontWeight: 500, cursor: "pointer", background: preset === x.k ? "#FFFFFF" : "transparent", color: C.ink, boxShadow: preset === x.k ? "0 1px 3px rgba(0,0,0,0.12)" : "none" }}>{x.label}</button>
              ))}
            </div>
          </Center>
        </div>
      </div>
      <div style={{ background: "#FFFFFF", borderBottom: `1px solid ${C.line}` }}>
        <div style={{ ...container, maxWidth: 1180, padding: "8px 24px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 24, textAlign: "center" }}>
          {[
            [String(r.count), "systems retired"],
            [money(r.savingFull), "saved per year at full run"],
            [money(r.feeYear + r.supportYear), `${p.product} per year`],
            [money(r.net5 + upside * 4), upside ? "net over 5 years, with upside" : "net over 5 years"],
            [r.payback, "pays for itself"],
          ].map(([v, l], i) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: i === 3 ? (r.net5 >= 0 ? C.green : C.red) : C.ink }}>{v}</div>
              <div style={{ fontSize: 14, color: C.slate }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...container, maxWidth: 1180, padding: "40px 24px 96px", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 600px", minWidth: 0, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ ...card, flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", padding: "20px 24px" }}>
            <label htmlFor="plan-locations" style={{ fontSize: 16, fontWeight: 600 }}>{p.pricing.locationLabel[0].toUpperCase() + p.pricing.locationLabel.slice(1)}s on {p.product}</label>
            <input id="plan-locations" inputMode="numeric" value={locations} onChange={(e) => setLocations(e.target.value.replace(/[^0-9]/g, ""))} style={{ ...input, width: 120, padding: "0 14px", textAlign: "right" }} />
          </div>
          {groups.map((g) => {
            const items = p.systems.filter((s) => s.group === g && s.module);
            const est = items.reduce((a, s) => a + s.estimate, 0);
            const entered = items.some((s) => costNums[s.id]);
            return (
              <div key={g} style={{ ...card, gap: 4 }}>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 8, paddingBottom: 8 }}>
                  <div style={{ fontSize: 19, fontWeight: 600 }}>{g}</div>
                  <div style={{ fontSize: 13, color: C.slate }}>{entered ? "Using your numbers" : est ? `Estimate ${money(est)}/yr` : ""}</div>
                </div>
                {items.map((s) => {
                  const active = on.includes(s.id);
                  return (
                    <div key={s.id} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14, padding: "12px 0", borderTop: "1px solid #F0F0F3" }}>
                      <button type="button" role="switch" aria-checked={active} aria-label={`Retire ${s.name}`} onClick={() => { setOn(active ? on.filter((x) => x !== s.id) : [...on, s.id]); setPreset("custom"); }} style={{ width: 60, height: 44, flex: "none", border: 0, background: "none", padding: "6px 4px", cursor: "pointer", display: "flex", alignItems: "center" }}>
                        <span style={{ width: 52, height: 32, borderRadius: 16, display: "flex", alignItems: "center", padding: 2, boxSizing: "border-box", background: active ? C.green : "#C7C7CC", justifyContent: active ? "flex-end" : "flex-start" }}>
                          <span style={{ width: 28, height: 28, borderRadius: 14, background: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.25)" }}></span>
                        </span>
                      </button>
                      <div style={{ flex: "1 1 200px", minWidth: 0 }}>
                        <div style={{ fontSize: 16, fontWeight: 600 }}>{s.name}</div>
                        <div style={{ fontSize: 13, color: C.slate }}>{s.kind} · {s.does} · savings from {s.start}</div>
                      </div>
                      <div style={{ flex: "0 1 190px", display: "flex", flexDirection: "column", gap: 2 }}>
                        <label htmlFor={"cost-" + s.id} style={{ fontSize: 12, color: C.slate }}>Yearly cost (optional)</label>
                        <div style={{ position: "relative" }}>
                          <span style={{ position: "absolute", left: 12, top: 11, color: C.slate, fontSize: 15 }}>$</span>
                          <input id={"cost-" + s.id} inputMode="numeric" placeholder={s.estimate ? "Est. " + s.estimate.toLocaleString("en-US") : "0"} value={costs[s.id] || ""} onChange={(e) => setCosts({ ...costs, [s.id]: e.target.value.replace(/[^0-9,]/g, "") })} style={input} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: C.slate }}>Estimates are Ardn&apos;s, based on what you have shared with us. Any cost you enter replaces the estimate for that system.</p>
        </div>

        <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={card}>
            <div style={{ fontSize: 19, fontWeight: 600 }}>{p.product} apps you need</div>
            {p.modules.filter((m) => r.moduleKeys.includes(m.key)).map((m) => (
              <div key={m.key} style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15 }}>
                <span>{m.name}</span><span style={{ color: C.slate }}>{m.core ? `$${p.pricing.corePerLocation}` : `$${p.pricing.addonPerLocation}`}</span>
              </div>
            ))}
            <div style={{ height: 1, background: C.line }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 15, fontWeight: 600 }}><span>Per {p.pricing.locationLabel}, per month</span><span>${r.perLocation.toLocaleString("en-US")}</span></div>
          </div>
          <div style={card}>
            <div style={{ fontSize: 19, fontWeight: 600 }}>Five years</div>
            {r.years.map((y) => (
              <div key={y.year} style={{ display: "grid", gridTemplateColumns: "48px 1fr 72px", gap: 10, alignItems: "center", fontSize: 13 }}>
                <span style={{ color: C.slate }}>{y.year}</span>
                <div style={{ height: 14, background: C.canvas, borderRadius: 7, overflow: "hidden" }}><div style={{ height: "100%", borderRadius: 7, width: `${Math.round((Math.abs(y.cum) / maxAbs) * 100)}%`, background: y.cum < 0 ? C.red : C.green }}></div></div>
                <span style={{ textAlign: "right", fontWeight: 600 }}>{money(y.cum)}</span>
              </div>
            ))}
            <div style={{ fontSize: 13, lineHeight: 1.5, color: C.slate }}>Cumulative net, after implementation, platform and support fees. Savings start the year after each system retires.</div>
            <div style={{ height: 1, background: C.line }}></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}><span>Return on spend, 5 years</span><strong>{r.roi == null ? "—" : r.roi + "%"}</strong></div>
            {r.staffFreed ? <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}><span>Staff time freed per year</span><strong>{money(r.staffFreed)}</strong></div> : null}
          </div>
          {p.showUpside ? (
            <div style={card}>
              <div style={{ fontSize: 19, fontWeight: 600 }}>Revenue upside (optional)</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: C.slate }}>Not counted in the savings above. Enter your numbers to see what a one-point improvement is worth. Counted from year 2.</div>
              {([
                ["dues", "Yearly dues revenue ($)", "e.g. 500,000,000"],
                ["retention", "Retention improvement (% points)", "e.g. 1"],
                ["events", "Yearly private-event revenue ($)", "e.g. 150,000,000"],
                ["eventsPct", "More events booked (%)", "e.g. 2"],
              ] as const).map(([k, l, ph]) => (
                <label key={k} style={{ fontSize: 13, fontWeight: 600, display: "flex", flexDirection: "column", gap: 4 }}>
                  {l}
                  <input inputMode="decimal" value={up[k] || ""} onChange={(e) => setUp({ ...up, [k]: e.target.value.replace(/[^0-9.,]/g, "") })} placeholder={ph} style={{ ...input, padding: "0 12px" }} />
                </label>
              ))}
              <div style={{ height: 1, background: C.line }}></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}><span>Upside per year</span><strong style={{ color: C.green }}>{money(upside)}</strong></div>
            </div>
          ) : null}
          <div style={{ ...card, fontSize: 13, lineHeight: 1.5, color: C.slate }}>Every combination you try is saved and shared with the Ardn team so we can build the final proposal around it.</div>
        </div>
      </div>
      <Footer p={p} />
    </div>
  );
}
