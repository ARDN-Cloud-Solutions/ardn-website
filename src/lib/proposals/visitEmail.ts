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
const PAGE: Record<string, string> = { site: "Proposal", overview: "Overview", plan: "Build your plan", details: "Full proposal", brief: "Brief" };
const UPSIDE: Record<string, string> = { dues: "Yearly dues revenue", retention: "Retention gain (%)", events: "Yearly event revenue", eventsPct: "Event revenue gain (%)" };

/** One flat map of every input on a page, keyed so two snapshots can be compared. */
function flatten(p: Proposal, page: string, data: unknown): Record<string, { label: string; value: string }> {
  const out: Record<string, { label: string; value: string }> = {};
  const d = (data || {}) as Record<string, unknown>;
  const sys = new Map(p.systems.map((s) => [s.id, s]));
  const name = (id: string) => sys.get(id)?.name || id;
  // The full proposal site sends every input on the page, already labeled.
  if (page === "site") return { ...((d.inputs || {}) as Record<string, { label: string; value: string }>) };
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
  if (page === "site") {
    const rows = (m: unknown): Line[] => Object.values((m || {}) as Record<string, { label: string; value: string }>).map((x) => [x.label, x.value]);
    return { inputs: rows(d.inputs), figures: rows(d.outputs), years: [] };
  }
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
  // An export carries what every page showed at that moment; read it as one more change per page.
  const exports = ev.filter((e) => e.type === "export");
  const states = ev.flatMap((e) =>
    e.type === "state" ? [e] : e.type === "export" ? Object.entries(((e.data as { states?: Record<string, unknown> })?.states) || {}).filter(([pg]) => pg === "site" || pg === "overview" || pg === "plan" || pg === "details").map(([pg, data]) => ({ ...e, type: "state", page: pg, data })) : [],
  );
  const pagesSeen = Array.from(new Set(ev.filter((e) => e.type === "view").map((e) => e.page)));
  const leaveSeconds = ev.filter((e) => e.type === "leave").reduce((a, e) => a + num((e.data as { seconds?: number })?.seconds), 0);
  // No leave yet (an export sends at once): count from the first event to the last.
  const seconds = leaveSeconds || (ev.length ? (Date.parse(ev[ev.length - 1].created_at) - Date.parse(ev[0].created_at)) / 1000 : 0);
  const videos = ev.filter((e) => e.type === "video").map((e) => String((e.data as { id?: string })?.id || ""));
  const sections = Array.from(new Set(ev.filter((e) => e.type === "section").map((e) => String((e.data as { id?: string })?.id || ""))));
  if (!pagesSeen.length && !states.length) return null;

  // Changes, page by page: each snapshot against the one before (or the page's starting values).
  const changes: Change[] = [];
  const last = new Map<string, Record<string, { label: string; value: string }>>();
  for (const e of states) {
    // The site's first snapshot is what it opened on, so it is the baseline, not a change.
    const prev = last.get(e.page) ?? (e.page === "site" ? flatten(p, e.page, e.data) : flatten(p, e.page, startOf(p, e.page)));
    const next = flatten(p, e.page, e.data);
    for (const k of new Set([...Object.keys(prev), ...Object.keys(next)])) {
      const a = prev[k]?.value ?? "blank", b = next[k]?.value ?? "blank";
      // "1000" and "$1,000" are the same number, shown two ways while typing.
      const same = (x: string, y: string) => x === y || (/\d/.test(x) && x.replace(/[$,\s]/g, "") === y.replace(/[$,\s]/g, ""));
      if (!same(a, b)) changes.push({ at: e.created_at, page: e.page, label: (next[k] || prev[k]).label, from: a, to: b });
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
    ["Exported to PDF", exports.length ? exports.map((e) => `${et(e.created_at)} (${PAGE[e.page] || e.page})`).join(", ") : "No"],
  ];

  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
  const table = (rows: Line[]) =>
    `<table style="border-collapse:collapse;width:100%;font-size:14px">${rows.map(([a, b]) => `<tr><td style="padding:6px 12px 6px 0;color:#4A5170;border-bottom:1px solid #EEE;vertical-align:top">${esc(a)}</td><td style="padding:6px 0;border-bottom:1px solid #EEE;text-align:right;font-weight:600">${esc(b)}</td></tr>`).join("")}</table>`;
  const h = (t: string) => `<h2 style="font-size:18px;margin:28px 0 8px;color:#0A0F2C">${esc(t)}</h2>`;
  let html = `<div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;padding:24px;color:#0A0F2C"><h1 style="font-size:22px;margin:0 0 12px">${esc(email)} on the ${esc(p.client)} proposal</h1>${table(head)}`;
  let text = `${email} on the ${p.client} proposal\n\n${head.map(([a, b]) => `${a}: ${b}`).join("\n")}\n`;
  for (const { page, s } of finals) {
    if (!s) continue;
    const rep = page === "site" ? siteReport(states.filter((e) => e.page === page).pop()!.data) : null;
    if (rep) {
      html += reportHtml(rep, esc, h);
      text += reportText(rep);
      html += h("Every input on the page") + table(s.inputs);
      continue;
    }
    html += h(`What they saw last: ${PAGE[page] || page}`) + table(s.figures);
    if (s.years.length) html += `<table style="border-collapse:collapse;width:100%;font-size:13px;margin-top:10px"><tr>${["Year", "Saved", "Spent", "Net", "Running total"].map((x) => `<th style="text-align:right;padding:4px;color:#4A5170">${x}</th>`).join("")}</tr>${s.years.map((y) => `<tr>${[String(y.year), money(y.saving), money(y.spend), money(y.net), money(y.cum)].map((x) => `<td style="text-align:right;padding:4px">${x}</td>`).join("")}</tr>`).join("")}</table>`;
    html += h(page === "site" ? "Every input on the page" : `Each system: ${PAGE[page] || page}`) + table(s.inputs);
    text += `\nWhat they saw last (${PAGE[page] || page})\n${s.figures.map(([a, b]) => `  ${a}: ${b}`).join("\n")}\n${s.years.map((y) => `  ${y.year}: saved ${money(y.saving)}, spent ${money(y.spend)}, net ${money(y.net)}, running ${money(y.cum)}`).join("\n")}\nEach system\n${s.inputs.map(([a, b]) => `  ${a}: ${b}`).join("\n")}\n`;
  }
  if (changes.length) {
    html += h("Every change, in order") + `<ol style="font-size:14px;padding-left:20px;margin:0">${changes.map((c) => `<li style="margin:4px 0"><span style="color:#4A5170">${esc(et(c.at))} · ${esc(PAGE[c.page] || c.page)}</span><br>${esc(c.label)}: ${esc(c.from)} → <b>${esc(c.to)}</b></li>`).join("")}</ol>`;
    text += `\nEvery change, in order\n${changes.map((c) => `  ${et(c.at)} · ${PAGE[c.page] || c.page} · ${c.label}: ${c.from} → ${c.to}`).join("\n")}\n`;
  }
  html += `</div>`;
  const did = changes.length ? `made ${changes.length} change${changes.length === 1 ? "" : "s"}` : "visited";
  const subject = `${p.client} proposal: ${email} ${exports.length ? `exported a PDF and ${did}` : did}`;
  return { subject, text, html };
}

type Report = {
  title: string;
  assumptions: Line[];
  groups: { name: string; note: string; license: string; support: string; total: string; rows: { name: string; detail: string; qty: string; price?: string; license: string; support: string; total: string; decision: string }[] }[];
  totals: { license: string; support: string; total: string };
  today: { gross: string; verdict: string; perClub: string; room: string; roomPer: string };
  proposal: { fee: string; clubs: string; net: string; perClub: [string, string, string][] };
  p1: { today: string; steward: string };
};

function siteReport(data: unknown): Report | null {
  const r = (data as { report?: Report } | null)?.report;
  return r && Array.isArray(r.groups) ? r : null;
}

/** The proposal's calculator as the visitor left it: their cost today next to Club Steward, then system by system. */
function reportHtml(r: Report, esc: (s: string) => string, h: (t: string) => string): string {
  const td = "padding:5px 6px;border-bottom:1px solid #EEE;text-align:right;white-space:nowrap";
  const th = "padding:5px 6px;border-bottom:1px solid #EEE;text-align:left";
  let o = h("Their cost today and Club Steward");
  o += `<table style="border-collapse:collapse;width:100%;font-size:14px"><tr>
<td style="width:50%;padding:12px;border:1px solid #D9DCE8;vertical-align:top"><div style="font-size:12px;color:#4A5170;font-weight:600">Today, before Ardn's fee</div><div style="font-size:24px;font-weight:700;margin:4px 0">${esc(r.today.gross)}</div><div style="font-size:12px;color:#4A5170">${esc(r.today.verdict)}</div></td>
<td style="width:50%;padding:12px;border:1px solid #F6BD60;background:#FFF8EC;vertical-align:top"><div style="font-size:12px;color:#4A5170;font-weight:600">Club Steward</div><div style="font-size:24px;font-weight:700;margin:4px 0">${r.proposal.fee ? esc(r.proposal.fee) + " a club a month" : "No fee entered"}</div><div style="font-size:12px;color:#4A5170">${esc(r.proposal.clubs)} clubs. ${esc(r.proposal.net)}</div></td></tr></table>`;
  if (r.proposal.perClub.length)
    o += `<table style="border-collapse:collapse;width:100%;font-size:14px;margin-top:8px">${r.proposal.perClub.map(([a, n, b]) => `<tr><td style="${th}">${esc(a)}${n ? `<div style="font-size:11px;color:#6A7090">${esc(n)}</div>` : ""}</td><td style="${td};font-weight:700">${esc(b)}</td></tr>`).join("")}</table>`;
  o += `<p style="font-size:12px;color:#4A5170;margin:6px 0">${esc(r.today.perClub)} Room for Ardn's fee with the $10M target met: ${esc(r.today.room)}. ${esc(r.today.roomPer)}</p>`;
  o += h("Current cost, system by system");
  o += `<p style="font-size:12px;color:#4A5170;margin:0 0 6px">${r.assumptions.map(([a, b]) => `${esc(a)}: <b>${esc(b)}</b>`).join(" · ")}</p>`;
  o += `<table style="border-collapse:collapse;width:100%;font-size:12.5px"><tr>${["System", "How many", "Cost per user a month", "License a year", "Support a year", "Total a year", "Plan"].map((x, i) => `<th style="${i ? td : th};color:#4A5170;font-size:11px;border-bottom:2px solid #0A0F2C">${x}</th>`).join("")}</tr>`;
  for (const g of r.groups) {
    o += `<tr style="background:#F3F4F9"><td colspan="3" style="${th};font-weight:700">${esc(g.name)}</td><td style="${td};font-weight:700">${esc(g.license)}</td><td style="${td};font-weight:700">${esc(g.support)}</td><td style="${td};font-weight:700">${esc(g.total)}</td><td style="${td}"></td></tr>`;
    for (const x of g.rows) {
      const c = x.decision === "Keep" ? ";color:#8A8FA8" : "";
      o += `<tr><td style="${th}${c}">${esc(x.name)}</td><td style="${td}${c}">${esc(x.qty)}</td><td style="${td}${c}">${esc(x.price || "")}</td><td style="${td}${c}">${esc(x.license)}</td><td style="${td}${c}">${esc(x.support)}</td><td style="${td}${c}">${esc(x.total)}</td><td style="${td}${c}">${esc(x.decision)}</td></tr>`;
    }
  }
  o += `<tr><td colspan="3" style="${th};font-weight:700;border-top:2px solid #0A0F2C">Taken out each year, before Ardn's fee</td><td style="${td};font-weight:700;border-top:2px solid #0A0F2C">${esc(r.totals.license)}</td><td style="${td};font-weight:700;border-top:2px solid #0A0F2C">${esc(r.totals.support)}</td><td style="${td};font-weight:700;border-top:2px solid #0A0F2C">${esc(r.totals.total)}</td><td style="${td};border-top:2px solid #0A0F2C"></td></tr></table>`;
  if (r.p1.today) o += h("One critical defect (P1)") + `<table style="border-collapse:collapse;width:100%;font-size:14px"><tr><td style="${th}">Today</td><td style="${td};font-weight:700">${esc(r.p1.today)}</td></tr><tr><td style="${th}">On Club Steward</td><td style="${td};font-weight:700">${esc(r.p1.steward)}</td></tr></table>`;
  return o;
}

function reportText(r: Report): string {
  let t = `\nTheir cost today and Club Steward\n  Today, before Ardn's fee: ${r.today.gross}\n  Club Steward: ${r.proposal.fee || "no fee entered"} a club a month, ${r.proposal.clubs} clubs. ${r.proposal.net}\n`;
  t += r.proposal.perClub.map(([a, , b]) => `  ${a}: ${b}`).join("\n") + "\n\nCurrent cost, system by system\n";
  for (const g of r.groups) {
    t += `  ${g.name}: license ${g.license}, support ${g.support}, total ${g.total}\n`;
    t += g.rows.map((x) => `    ${x.name}${x.qty ? ` · ${x.qty}` : ""}${x.price ? ` at ${x.price}` : ""} · license ${x.license || "—"} · support ${x.support || "—"} · total ${x.total || "—"}${x.decision ? ` · ${x.decision}` : ""}`).join("\n") + "\n";
  }
  return t + `  Taken out each year, before Ardn's fee: license ${r.totals.license}, support ${r.totals.support}, total ${r.totals.total}\n`;
}
