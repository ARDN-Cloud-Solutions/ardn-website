import { roi, paybackLabel, type Proposal, type RoiResult } from "./model";

/**
 * The email Ardn gets after someone's visit to a proposal: everything they had
 * on screen when they left, and every change they made on the way, in order.
 *
 * The pages send only their inputs ("state" events). The figures are worked
 * out here with the same roi() the pages use, so the email shows exactly what
 * the person saw.
 */

export type VisitEvent = { id: number; type: string; page: string; data: unknown; created_at: string };

type Line = [label: string, value: string];
type Change = { at: string; page: string; label: string; from: string; to: string };

const money = (n: number) => (n < 0 ? "−" : "") + "$" + Math.round(Math.abs(n)).toLocaleString("en-US");
const num = (s: unknown) => Number(String(s ?? "").replace(/[^0-9.]/g, "")) || 0;
const et = (iso: string) =>
  new Date(iso).toLocaleString("en-US", { timeZone: "America/New_York", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) + " ET";
const PAGE: Record<string, string> = { overview: "Overview", plan: "Build your plan", details: "Full proposal", brief: "Brief" };
const UPSIDE: Record<string, string> = { dues: "Yearly dues revenue", retention: "Retention gain (%)", events: "Yearly event revenue", eventsPct: "Event revenue gain (%)" };

/** One flat map of every input on a page, keyed so two snapshots can be compared. */
function flatten(p: Proposal, page: string, data: unknown): Record<string, { label: string; value: string }> {
  const out: Record<string, { label: string; value: string }> = {};
  const d = (data || {}) as Record<string, unknown>;
  const sys = new Map(p.systems.map((s) => [s.id, s]));
  const name = (id: string) => sys.get(id)?.name || id;
  if (page === "overview") {
    const on = (d.on || {}) as Record<string, boolean>;
    for (const s of p.systems) {
      const v = on[s.id] !== undefined ? on[s.id] : s.prop === "sunset";
      out["on:" + s.id] = { label: `${s.name}: sunset or keep`, value: v ? "Sunset" : "Keep" };
    }
    for (const [k, v] of Object.entries((d.vals || {}) as Record<string, string>)) {
      const [id, part] = [k.replace(/_(sw|sup)$/, ""), k.endsWith("_sup") ? "support" : "software"];
      out["val:" + k] = { label: `${name(id)}: ${part} a year`, value: num(v) ? money(num(v)) : "blank" };
    }
  } else if (page === "plan") {
    const on = new Set(Array.isArray(d.on) ? (d.on as string[]) : []);
    for (const s of p.systems.filter((x) => x.module)) out["on:" + s.id] = { label: `${s.name}: retire`, value: on.has(s.id) ? "Yes" : "No" };
    for (const [id, v] of Object.entries((d.costs || {}) as Record<string, string>)) out["cost:" + id] = { label: `${name(id)}: cost a year`, value: num(v) ? money(num(v)) : "blank" };
    out.locations = { label: `${cap(p.pricing.locationLabel)}s`, value: String(d.locations ?? "") };
    out.preset = { label: "Starting point", value: d.preset ? PRESET[String(d.preset)] || String(d.preset) : "Changed by hand" };
    for (const [k, v] of Object.entries((d.upside || {}) as Record<string, string>)) out["up:" + k] = { label: UPSIDE[k] || k, value: String(v || "blank") };
  } else {
    for (const [k, v] of Object.entries(d)) out[k] = { label: k === "q" ? "Searched for" : k === "status" ? "Filter" : k, value: String(v ?? "") };
  }
  return out;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const PRESET: Record<string, string> = { quick: "Quick wins", proposal: "Our proposal", all: "Everything", none: "Start blank" };

/** What each page shows before the visitor touches anything (keep in step with Overview.tsx and Plan.tsx). */
function startOf(p: Proposal, page: string): unknown {
  if (page === "plan") return { on: p.systems.filter((s) => s.prop === "sunset").map((s) => s.id), costs: {}, locations: String(p.pricing.locations), preset: "proposal", upside: {} };
  return null;
}

/** What the page showed for this state: the same inputs through the same roi(). */
function screen(p: Proposal, page: string, data: unknown): { inputs: Line[]; figures: Line[]; years: RoiResult["years"] } | null {
  const d = (data || {}) as Record<string, unknown>;
  let on: string[];
  const costs: Record<string, number> = {};
  let locations = p.pricing.locations;
  if (page === "overview") {
    const pick = (d.on || {}) as Record<string, boolean>;
    on = p.systems.filter((s) => (pick[s.id] !== undefined ? pick[s.id] : s.prop === "sunset")).map((s) => s.id);
    for (const s of p.systems) {
      const vals = (d.vals || {}) as Record<string, string>;
      const v = num(vals[s.id + "_sw"]) + num(vals[s.id + "_sup"]);
      if (v > 0) costs[s.id] = v;
    }
  } else if (page === "plan") {
    on = Array.isArray(d.on) ? (d.on as string[]) : [];
    for (const [k, v] of Object.entries((d.costs || {}) as Record<string, string>)) if (num(v) > 0) costs[k] = num(v);
    locations = num(d.locations) || 1;
  } else return null;
  const r = roi(p, { on, costs, locations });
  const chosen = new Set(on);
  const inputs: Line[] = p.systems.map((s) => [
    s.name,
    `${chosen.has(s.id) ? "Retire" : "Keep"} · ${costs[s.id] ? money(costs[s.id]) + " a year, typed" : s.estimate ? money(s.estimate) + " a year, our estimate" : "no cost"}`,
  ]);
  const L = p.pricing.locationLabel;
  const figures: Line[] = [
    [`${cap(L)}s`, locations.toLocaleString("en-US")],
    ["Systems retired", String(r.count)],
    [`Fee per ${L} a month`, money(r.perLocation)],
    ["Fees a year", money(r.feeYear)],
    ["Support a year", money(r.supportYear)],
    ["Saved a year at full rollout", money(r.savingFull)],
    ["Staff time freed a year", money(r.staffFreed)],
    ["Added to EBITDA a year", money(r.ebitda)],
    ["Payback", paybackLabel(r)],
    ["Net over 5 years", money(r.net5)],
    ["Return over 5 years", r.roi == null ? "—" : r.roi + "%"],
  ];
  return { inputs, figures, years: r.years };
}

/** The summary of one visit, or null when there is nothing worth sending. */
export function visitEmail(p: Proposal, email: string, events: VisitEvent[]): { subject: string; text: string; html: string } | null {
  const ev = [...events].sort((a, b) => a.id - b.id);
  const states = ev.filter((e) => e.type === "state");
  const pagesSeen = Array.from(new Set(ev.filter((e) => e.type === "view").map((e) => e.page)));
  const seconds = ev.filter((e) => e.type === "leave").reduce((a, e) => a + num((e.data as { seconds?: number })?.seconds), 0);
  const videos = ev.filter((e) => e.type === "video").map((e) => String((e.data as { id?: string })?.id || ""));
  const sections = Array.from(new Set(ev.filter((e) => e.type === "section").map((e) => String((e.data as { id?: string })?.id || ""))));
  if (!pagesSeen.length && !states.length) return null;

  // Changes, page by page: each snapshot against the one before (or the page's starting values).
  const changes: Change[] = [];
  const last = new Map<string, Record<string, { label: string; value: string }>>();
  for (const e of states) {
    const prev = last.get(e.page) ?? flatten(p, e.page, startOf(p, e.page));
    const next = flatten(p, e.page, e.data);
    for (const k of new Set([...Object.keys(prev), ...Object.keys(next)])) {
      const a = prev[k]?.value ?? "blank", b = next[k]?.value ?? "blank";
      if (a !== b) changes.push({ at: e.created_at, page: e.page, label: (next[k] || prev[k]).label, from: a, to: b });
    }
    last.set(e.page, next);
  }
  const finals = Array.from(last.keys()).map((page) => ({ page, s: screen(p, page, states.filter((e) => e.page === page).pop()!.data) }));
  const head: Line[] = [
    ["Who", email],
    ["Proposal", `${p.client} (${p.slug})`],
    ["When", ev.length ? `${et(ev[0].created_at)} to ${et(ev[ev.length - 1].created_at)}` : "—"],
    ["Time on page", `${Math.max(1, Math.round(seconds / 60))} min`],
    ["Pages", pagesSeen.map((x) => PAGE[x] || x).join(", ") || "—"],
    ["Sections seen", sections.join(", ") || "—"],
    ["Videos played", videos.join(", ") || "None"],
    ["Changes made", String(changes.length)],
  ];

  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
  const table = (rows: Line[]) =>
    `<table style="border-collapse:collapse;width:100%;font-size:14px">${rows.map(([a, b]) => `<tr><td style="padding:6px 12px 6px 0;color:#4A5170;border-bottom:1px solid #EEE;vertical-align:top">${esc(a)}</td><td style="padding:6px 0;border-bottom:1px solid #EEE;text-align:right;font-weight:600">${esc(b)}</td></tr>`).join("")}</table>`;
  const h = (t: string) => `<h2 style="font-size:18px;margin:28px 0 8px;color:#0A0F2C">${esc(t)}</h2>`;
  let html = `<div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;padding:24px;color:#0A0F2C"><h1 style="font-size:22px;margin:0 0 12px">${esc(email)} on the ${esc(p.client)} proposal</h1>${table(head)}`;
  let text = `${email} on the ${p.client} proposal\n\n${head.map(([a, b]) => `${a}: ${b}`).join("\n")}\n`;
  for (const { page, s } of finals) {
    if (!s) continue;
    html += h(`What they saw when they left: ${PAGE[page] || page}`) + table(s.figures);
    html += `<table style="border-collapse:collapse;width:100%;font-size:13px;margin-top:10px"><tr>${["Year", "Saved", "Spent", "Net", "Running total"].map((x) => `<th style="text-align:right;padding:4px;color:#4A5170">${x}</th>`).join("")}</tr>${s.years.map((y) => `<tr>${[String(y.year), money(y.saving), money(y.spend), money(y.net), money(y.cum)].map((x) => `<td style="text-align:right;padding:4px">${x}</td>`).join("")}</tr>`).join("")}</table>`;
    html += h(`Each system: ${PAGE[page] || page}`) + table(s.inputs);
    text += `\nWhat they saw when they left (${PAGE[page] || page})\n${s.figures.map(([a, b]) => `  ${a}: ${b}`).join("\n")}\n${s.years.map((y) => `  ${y.year}: saved ${money(y.saving)}, spent ${money(y.spend)}, net ${money(y.net)}, running ${money(y.cum)}`).join("\n")}\nEach system\n${s.inputs.map(([a, b]) => `  ${a}: ${b}`).join("\n")}\n`;
  }
  if (changes.length) {
    html += h("Every change, in order") + `<ol style="font-size:14px;padding-left:20px;margin:0">${changes.map((c) => `<li style="margin:4px 0"><span style="color:#4A5170">${esc(et(c.at))} · ${esc(PAGE[c.page] || c.page)}</span><br>${esc(c.label)}: ${esc(c.from)} → <b>${esc(c.to)}</b></li>`).join("")}</ol>`;
    text += `\nEvery change, in order\n${changes.map((c) => `  ${et(c.at)} · ${PAGE[c.page] || c.page} · ${c.label}: ${c.from} → ${c.to}`).join("\n")}\n`;
  }
  html += `</div>`;
  const subject = `${p.client} proposal: ${email} ${changes.length ? `made ${changes.length} change${changes.length === 1 ? "" : "s"}` : "visited"}`;
  return { subject, text, html };
}
