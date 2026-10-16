/* Builds ymca-st-pete.html.
 *
 * LAYOUT IS INVITED'S, and that is the whole point of this file. The
 * stylesheet is lifted verbatim from invited-clubs.html and only the brand
 * tokens are redefined. The layout rule is lifted too: EVERY VIEW IS ONE
 * SCREEN. Each <main> is flex:1 with justify-content:center, every size is in
 * em, and Invited's root font-size follows the viewport
 * (clamp(14px, calc(1.1vh + .48vw), 20px)) so a view shrinks to fit rather
 * than scrolls. Copy is written to that budget: panels, chips and strips,
 * never prose. The estate uses Invited's own pattern -- chips grouped by area
 * on the left, one detail panel on the right -- so 24 systems sit on a screen.
 *
 * CONTENT follows Shipley (the rfp-responder skill): fit scored
 * STRONG/PARTIAL/GAP, every claim carrying a proof point, gaps surfaced rather
 * than written around, four win themes each threading two or more rows. The
 * executive summary is SCQA and every view title is an action title (the
 * McKinsey storyline skill).
 *
 * Run: node src/content/proposals/sites/ymca-st-pete.build.mjs
 * Then: node src/content/proposals/sites/build.mjs ymca-st-pete
 */
import fs from "node:fs";
import { SYS, AREAS, FATE, TALLY, D1 } from "./ymca-st-pete.data.js";

const dir = new URL(".", import.meta.url).pathname;
const src = fs.readFileSync(dir + "invited-clubs.html", "utf8");
const a = src.indexOf("<style>"), b = src.indexOf("</style>");
if (a < 0 || b < 0) throw new Error("invited-clubs.html: no <style> block to inherit");
let baseCss = src.slice(a + 7, b);
// The stylesheet is inherited from another client's proposal, and its comments
// name that client. They would ship inside this page, so they are removed here
// rather than edited at the source: this page must carry no reference to any
// client but the Y.
baseCss = baseCss.replace(/\/\*[\s\S]*?\*\//g, (c) => (/invited/i.test(c) ? "" : c));

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const brand = `
:root{
  --ink:#12284C; --soft:#23395F; --muted:#5B6880;
  --brass:#0071CE; --brass2:#00457C; --gold:#92278F; --sand:#A8700F; --teal:#00748F;
  --slate:#6B7280; --alarm:#D1002B; --good:#00874A;
  --goldrgb:146,39,143; --bluergb:0,113,206; --alarmrgb:209,0,43; --slatergb:107,114,128; --goodrgb:0,135,74;
  --fgrgb:18,40,76; --navy:#12284C; --indigo:#00457C; --violet:#92278F;
}
.side,#v-admin{
  --ink:#F2F6FC; --soft:#DCE6F5; --muted:#9BA8BF;
  --night:#12284C; --deep:#1B355E; --raise:#234373; --field:#12284C;
  --brass:#7FB9F0; --brass2:#A9D2F7; --gold:#D9A6D7; --sand:#E0BE7A; --teal:#5FC2DE;
  --fgrgb:242,246,252;
}
.side-bot .hold{white-space:normal;line-height:1.35}
/* one-screen helpers; every size in em so it rides the viewport-scaled root */
.scr{flex:1;display:flex;flex-direction:column;justify-content:center;gap:.85em;padding:.7em 1.8em;min-height:0}
.eyeb{font-size:max(14px,.82em);letter-spacing:.14em;text-transform:uppercase;color:var(--brass);font-weight:700}
.ttl{font-family:var(--serif);font-weight:500;font-size:2em;line-height:1.14;margin:0;text-wrap:balance;color:var(--ink)}
.sub{margin:.35em 0 0;color:var(--soft);font-size:1.02em;line-height:1.4;max-width:44em}
.card{background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.75em 1em;display:flex;flex-direction:column;gap:.3em;min-width:0}
.card .ch{font-size:max(14px,.8em);letter-spacing:.13em;text-transform:uppercase;color:var(--brass);font-weight:700}
.card .cb{font-family:var(--serif);font-weight:500;font-size:1.22em;line-height:1.16;color:var(--ink)}
.card p{margin:0;font-size:max(14px,.88em);line-height:1.4;color:var(--soft)}
.card .foot{margin-top:auto;padding-top:.4em;border-top:1px solid rgba(var(--fgrgb),.12);font-size:max(13px,.78em);color:var(--muted)}
.grid{display:grid;gap:.7em;min-height:0}
.strip{display:grid;grid-template-columns:repeat(4,auto);border:1px solid rgba(var(--bluergb),.35);border-radius:12px}
.strip>div{padding:.6em 1em}
.strip>div+div{border-left:1px solid rgba(var(--bluergb),.2)}
.strip b{display:block;font-family:var(--serif);font-weight:500;font-size:2em;color:var(--brass);line-height:1;font-variant-numeric:tabular-nums}
.strip span{display:block;font-size:max(14px,.86em);color:var(--soft);margin-top:.25em}
.bar{display:flex;height:1.6em;border-radius:3px;overflow:hidden;font-size:max(13px,.82em);font-weight:700;color:#fff}
.bar div{display:flex;align-items:center;justify-content:center;white-space:nowrap;overflow:hidden;padding:0 .4em}
.sq{display:grid;gap:.4em;margin:0}
.sq>div{display:grid;grid-template-columns:8em minmax(0,1fr);gap:.8em;align-items:baseline;padding:.45em .8em;border-left:2px solid rgba(var(--fgrgb),.16);background:var(--deep);border-radius:0 8px 8px 0}
.sq>div:last-child{border-left-color:var(--brass);background:rgba(var(--bluergb),.07)}
.sq dt{font-size:max(13px,.74em);font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:0}
.sq>div:last-child dt{color:var(--brass)}
.sq dd{margin:0;font-size:max(14px,.9em);line-height:1.4;color:var(--soft)}
.sq b{color:var(--ink);font-weight:600}
.sqp>div{background:transparent;border-left:0;padding:.1em 0;grid-template-columns:5.5em minmax(0,1fr)}
.sqp>div:last-child{background:transparent}
.chipw{display:flex;flex-wrap:wrap;gap:.3em}
.sysb{font:inherit;font-size:max(13px,.78em);line-height:1.2;padding:.26em .5em;border-radius:6px;cursor:pointer;color:var(--ink);text-align:left}
.d1{display:inline-block;margin-left:.3em;font-size:max(10px,.62em);font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--alarm);border:1px solid var(--alarm);border-radius:999px;padding:0 .3em;vertical-align:.1em}
.ptab{width:100%;border-collapse:collapse;font-size:max(13px,.8em)}
.ptab th,.ptab td{text-align:left;padding:.3em .55em;border-bottom:1px solid rgba(var(--fgrgb),.1);vertical-align:top}
.ptab thead th{font-size:max(12px,.7em);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);border-bottom:1.5px solid rgba(var(--fgrgb),.28)}
.ptab td.n{color:var(--ink);font-weight:600}
.ptab td.e{font-family:ui-monospace,Menlo,monospace;font-size:max(12px,.76em);color:var(--soft)}
.ptab .y{color:var(--good);font-weight:700}
.note{background:rgba(var(--goldrgb),.07);border-left:3px solid var(--gold);border-radius:0 9px 9px 0;padding:.6em .9em;color:var(--soft);font-size:max(14px,.86em);line-height:1.45}
.note b{color:var(--ink)}
.legend{display:flex;flex-wrap:wrap;gap:.3em 1.1em;align-items:center;font-size:max(14px,.84em);color:var(--muted)}
.legend span{display:inline-flex;align-items:center;gap:.35em}
.legend i{width:.75em;height:.75em;border-radius:2px}
.legend b{color:var(--ink)}
/* rollout plan: a label, a track, phase bars positioned by month */
.pl{display:flex;flex-direction:column;gap:.15em;min-width:0;width:100%}
.pl-head{display:grid;grid-template-columns:var(--lbl) minmax(0,1fr);gap:.6em;align-items:end}
.pl-ax{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr))}
.pl-mo{font-size:max(10px,.6em);font-weight:700;color:var(--muted);text-align:center;letter-spacing:.02em;line-height:1.15;padding-bottom:.25em}
.pl-mo b{display:block;font-weight:400;font-size:.9em;color:var(--muted);opacity:.8}
.pl-mo.apr{color:var(--alarm)}
.pl-row{display:grid;grid-template-columns:var(--lbl) minmax(0,1fr);gap:.6em;width:100%;align-items:center;background:none;border:0;padding:.12em 0;font:inherit;text-align:left;cursor:pointer;border-radius:5px}
.pl-row:hover{background:rgba(var(--fgrgb),.05)}
.pl-row.on{background:rgba(var(--bluergb),.1)}
.pl-lbl{font-size:max(12px,.76em);font-weight:600;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.3}
.pl-area{position:relative;height:1.5em;width:100%;background:repeating-linear-gradient(90deg,rgba(var(--fgrgb),.07) 0 1px,transparent 1px calc(100% / var(--n)));border-radius:3px}
.pl-seg{position:absolute;top:.3em;height:.9em;border-radius:3px}
.pl-dia{position:absolute;top:.42em;width:.66em;height:.66em;background:var(--alarm);transform:translateX(-50%) rotate(45deg);border-radius:1px}
.pl-apr{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--alarm);pointer-events:none}
.pl-leg{display:flex;flex-wrap:wrap;gap:.3em 1em;font-size:max(12px,.74em);color:var(--muted);align-items:center}
.pl-leg span{display:inline-flex;align-items:center;gap:.35em}
.pl-leg i{width:.8em;height:.55em;border-radius:2px;display:block}
.pl-row.crit .pl-lbl{color:var(--alarm)}
.pl-risk{display:inline-grid;place-items:center;width:1.1em;height:1.1em;border-radius:50%;background:var(--sand);color:#fff;font-size:.72em;font-weight:800;font-style:normal;margin-right:.35em;vertical-align:.05em}
.pl-leg i.d{width:.6em;height:.6em;background:var(--alarm);transform:rotate(45deg);border-radius:1px}
@media (max-width:900px){.scr{padding:.7em 1em;justify-content:flex-start;overflow-y:auto}.strip{grid-template-columns:repeat(2,1fr)}.sq>div{grid-template-columns:1fr;gap:.15em}}
`;

const P = {
  team: '<path d="M16 19v-1.5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3V19"/><circle cx="9.5" cy="7.5" r="3"/><path d="M21 19v-1.5a3 3 0 0 0-2.2-2.9"/><path d="M15.5 4.7a3 3 0 0 1 0 5.6"/>',
  org: '<rect x="9" y="3" width="6" height="4" rx="1"/><rect x="2" y="15" width="6" height="4" rx="1"/><rect x="16" y="15" width="6" height="4" rx="1"/><path d="M12 7v4M5 15v-2h14v2"/>',
  plan: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M8 14h5"/><path d="M11 18h6"/>',
  value: '<path d="M12 2v20M17 6.5C17 4.6 14.8 4 12 4s-5 .9-5 3 2.2 2.8 5 3.3 5 1.2 5 3.2-2.2 3-5 3-5-.8-5-2.7"/>',
  compare: '<path d="M4 7h7M4 12h7M4 17h7"/><path d="M15 5h6v14h-6z"/><path d="m16.5 12 1.5 1.5 3-3"/>',
  detail: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  summary: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h7M9 17h5"/>',
  why: '<path d="M12 3 4 7v5c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V7z"/><path d="m9 12 2 2 4-4"/>',
  estate: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
  build: '<path d="M14 6.5a3.5 3.5 0 1 0 3.5 3.5"/><path d="m13 11-9 9 2.5 2.5 9-9"/><path d="M17.5 10H21"/>',
  sga: '<path d="M4 20V10M10 20V5M16 20v-8M22 20H2"/>',
  quality: '<path d="M12 2 3 6v6c0 5.2 3.8 9.4 9 10 5.2-.6 9-4.8 9-10V6z"/><path d="m8.5 12 2.5 2.5 5-5"/>',
  plan: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/><path d="m9 16 2 2 4-4"/>',
};
const ico = (k) => `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[k]}</svg>`;

/* The tab set. Three of them (team, org, value) are
   driven by the commercial figures and stay out until the Y's spend and our
   price exist; they are not shipped with invented numbers. */
const NAV = [["home", "Home"], ["summary", "Executive Summary"], ["value", "Value"], ["plan", "Plan"], ["compare", "Compare"], ["detail", "Detail"]];

/* Commercials as quoted to Patricia. Every derived figure below is computed
   from these four, never typed twice, so the page cannot drift from the quote. */
const PRICE = { impl: 9500, implStdLo: 45000, implStdHi: 55000, mo: 11000, integrations: 4, integrationEach: 45000, termMonths: 36, cpiCap: 0.04 };
const yr1Run = PRICE.mo * 12;
const yearOne = PRICE.impl + yr1Run;
const termFlat = PRICE.impl + PRICE.mo * PRICE.termMonths;
const y2 = yr1Run * (1 + PRICE.cpiCap), y3 = y2 * (1 + PRICE.cpiCap);
const termCapped = PRICE.impl + yr1Run + y2 + y3;
const integrationsValue = PRICE.integrations * PRICE.integrationEach;
const valueLo = PRICE.implStdLo - PRICE.impl + integrationsValue;
const valueHi = PRICE.implStdHi - PRICE.impl + integrationsValue;
/* The figure Patricia was already given is ~$220k, which is the midpoint of the
   build range less the fee, plus the integrations. Quote that, not the top of
   the range -- the proposal must agree with the email she already has. */
const valueComputed = (PRICE.implStdLo + PRICE.implStdHi) / 2 - PRICE.impl + integrationsValue; // 220,500
const valueStated = 220000; // quoted to Patricia as "roughly $220,000"; computed 220,500, so the quote is the conservative one
const usd = (n) => "$" + Math.round(n).toLocaleString("en-US");
const usdK = (n) => "$" + Math.round(n / 1000) + "k";
const tabs = NAV.map(([id, l]) => `<a href="#${id}"><span class="ic">${ico(id)}</span><span class="lbl">${esc(l)}</span></a>`).join("");

const GAPS = new Set(["Daxko · data migration", "Daxko Attendance Tracker · licensed childcare"]);
const fitOf = (r) => (GAPS.has(r[0]) ? "GAP" : r[2] === "partial" ? "PARTIAL" : "STRONG");
const d1Fit = D1.reduce((m, r) => ((m[fitOf(r)] = (m[fitOf(r)] || 0) + 1), m), { STRONG: 0, PARTIAL: 0, GAP: 0 });
const noRisk = TALLY.retire + TALLY.connect + TALLY.keep;

/* The Home scene: dawn over the water at St. Petersburg, with the
   pier silhouette on the horizon and swimming-pool lane ropes running out
   of the foreground. Drawn, not photographed, and kept behind the text. */
const hsScene = (() => {
  const lanes = [0, 1, 2, 3, 4, 5].map((i) => {
    const y = 600 + i * i * 10 + i * 26;
    const inset = 150 - i * 26;
    return `<path d="M${inset} ${y} Q800 ${y - 10} ${1600 - inset} ${y}" fill="none" stroke="#7FB9F0" stroke-opacity="${(0.42 - i * 0.05).toFixed(2)}" stroke-width="${(2.4 + i * 0.7).toFixed(1)}" stroke-dasharray="${18 + i * 7} ${12 + i * 5}" stroke-linecap="round"/>`;
  }).join("");
  const sparkle = [240, 520, 900, 1280, 1460].map((x, i) => `<ellipse cx="${x}" cy="${575 + i * 9}" rx="${34 - i * 4}" ry="1.6" fill="#A9D2F7" opacity="${(0.3 - i * 0.04).toFixed(2)}"/>`).join("");
  // St. Petersburg's horizon: the inverted-pyramid Pier, a few towers, palms
  const sky = `<linearGradient id="ySky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A1A33"/><stop offset=".42" stop-color="#12284C"/><stop offset=".74" stop-color="#1E4C86"/><stop offset=".9" stop-color="#3D7FC4"/><stop offset="1" stop-color="#7FB9F0"/></linearGradient>`;
  const glow = `<radialGradient id="yGlow" cx="1120" cy="545" r="460" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#92278F" stop-opacity=".30"/><stop offset="1" stop-color="#92278F" stop-opacity="0"/></radialGradient>`;
  return `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
  <defs>${sky}${glow}</defs>
  <rect width="1600" height="900" fill="url(#ySky)"/>
  <rect width="1600" height="900" fill="url(#yGlow)"/>
  <circle cx="1120" cy="546" r="46" fill="#F2C4EC" opacity=".22"/>
  <g fill="#0C1C38" opacity=".95">
    <rect x="120" y="470" width="34" height="78"/><rect x="166" y="496" width="22" height="52"/>
    <rect x="300" y="452" width="28" height="96"/><rect x="340" y="486" width="40" height="62"/>
    <rect x="1320" y="462" width="30" height="86"/><rect x="1362" y="492" width="24" height="56"/>
    <path d="M980 548 L1046 498 L1112 548Z"/><rect x="1040" y="498" width="12" height="50"/>
    <path d="M700 548 L742 508 L784 548Z" opacity=".8"/>
  </g>
  <g stroke="#0C1C38" stroke-width="4" fill="none" opacity=".9">
    <path d="M232 548 V514"/><path d="M232 514 q-26 -16 -40 -4 M232 514 q26 -16 40 -4 M232 512 q-14 -24 -2 -34 M232 512 q14 -24 2 -34"/>
    <path d="M1248 548 V518"/><path d="M1248 518 q-22 -14 -34 -4 M1248 518 q22 -14 34 -4 M1248 516 q-12 -20 -2 -30"/>
  </g>
  <rect y="548" width="1600" height="352" fill="#0A1A33"/>
  ${sparkle}
  ${lanes}
  </svg>`;
})();

const view = (id, inner) => `<div class="view" id="v-${id}" data-view="${id}" data-tab="${id}" hidden>${inner}</div>`;
const scr = (n, label, inner) => `<main data-screen-label="${n} ${label}" class="scr">${inner}</main>`;

/* Short labels so 24 chips fit the column grid without wrapping into a wall. */
const shortName = (n) => n.replace(/^Daxko Operations · /, "Daxko · ").replace(/^Daxko Attendance Tracker · /, "Attendance · ").replace(/ \(and FA Check\)/, "");

const areaCols = AREAS.map((area) => {
  const list = SYS.filter((r) => r[1] === area);
  return `<div><div style="font-size:max(14px,.8em);font-weight:700;color:var(--soft);margin-bottom:.3em;">${esc(area)} <span style="color:var(--muted);font-weight:400;">· ${list.length}</span></div><div class="chipw">${
    list.map((r) => `<button type="button" class="sysb" data-sys="${esc(r[0])}" style="border:1px solid ${FATE[r[2]][0]};background:${FATE[r[2]][1]};">${esc(shortName(r[0]))}${r[3] ? '<span class="d1">D1</span>' : ""}</button>`).join("")
  }</div></div>`;
}).join("");

const SYSJSON = JSON.stringify(SYS.map((r) => ({ n: r[0], a: r[1], f: r[2], t: r[4], o: r[5], w: r[6], e: r[7], fit: fitOf(r) })));
const FATEJSON = JSON.stringify(FATE);

const PROOF = [
  ["Member mobile app", "Club platform", "sw.js · web-push-crypto · worker-push-dispatch · wallet 297 ln"],
  ["Contracts, e-signature", "Club platform", "contracts 2,317 · forms 4,742 · acknowledgments 604 ln"],
  ["Surveys and NPS", "Club platform", "5 survey migrations · surveys.test.ts 644 ln"],
  ["Salesforce replacement", "Club platform", "leads 2,822 · sales-pipeline 4,221 · 3 importers · 886 ln tests"],
  ["Financial assistance", "Club platform", "financial-assistance 450 ln"],
  ["Accounting", "Club platform", "books 207 files / 53,190 ln · history-import · feeds-out"],
  ["Fundraising", "Club platform", "pledges · grants · soft-credits · gift-batches · moves = 6,534 ln"],
  ["Reporting", "Y platform", "builder, 20 standard reports, dashboards — merged 2026-10-15"],
  ["Membership, billing, check-in", "Y platform", "members · households · memberships · billing · checkin · roles"],
];

/* Compare: the four honest ways to run the Y's estate. y = yes, p = partial, n = no. */
const CMP = [
  ["Member records, billing, check-in", "y One vendor", "y One vendor", "p You build it", "y Carried"],
  ["Program and camp registration", "p No online child reg", "y If you buy one", "p You build it", "p Named gap, bounded"],
  ["Licensed childcare and ELC", "y Attendance Tracker", "y Attendance Tracker", "n Specialist domain", "p The one real build"],
  ["Member mobile app", "y Daxko app", "y Daxko app", "n Two app stores", "y Already built"],
  ["E-signature after April", "n DocuSign ends", "y Buy another", "n You build it", "y Built, 2,317 ln"],
  ["Surveys and NPS", "n Listen360 extra", "y Listen360", "n You build it", "y Built, 644 ln tests"],
  ["Fundraising beside members", "n Raiser's Edge apart", "p Connector", "n You build it", "y 6,534 ln, or connect"],
  ["Accounting", "n SGA apart", "p Connector", "n You build it", "y Connect or replace"],
  ["Who fixes it at 7am", "p Vendor queue", "n ~17 queues", "y Your team", "y Ardn, named team"],
  ["Who carries the integrations", "p Vendor decides", "n The Y does", "y The Y does", "y Ardn does"],
];

/* ---- The rollout plan, in Invited's Rollout Plan shape ----
   Month 1 is Nov 2026. Each system carries design/build/test/deploy/parallel
   spans as [firstMonth, lastMonth], and `retire` is the month the Y stops
   paying for it. The one fixed date is DocuSign at M6 (April 2027); every
   span before it is sized to clear that, and nothing retires before its
   parallel run has finished. */
const PL_M1 = { y: 2026, m: 10 }; // Nov 2026, zero-indexed month
const PL_PH = { design: ["Design", "#7A86A8"], build: ["Build", "#0071CE"], test: ["Test", "#00748F"], deploy: ["Deploy", "#00874A"], parallel: ["Parallel run", "#8A94B8"] };
const PLAN = [
  { n: "Licensed childcare and preschool", lane: "Childcare", retire: 9, ends: "Daxko Attendance Tracker", crit: true, risk: true,
    note: "Started first, because the Y leaves all of Daxko in July and this is the only part with nothing to build on. Ratios, incidents, health records, ELC reimbursement and parent sign in and out. The build window is five months rather than the eight it would take unpressured, and that compression is the single largest risk in the programme.",
    phases: { design: [1, 2], build: [2, 6], test: [6, 7], deploy: [7, 7], parallel: [7, 9] } },
  { n: "Contracts and e-signature", lane: "Operations & IT", retire: 6, ends: "DocuSign", crit: true,
    note: "The first fixed date. A port of our contracts module, plus the state's own PDF field-filling.",
    phases: { design: [1, 1], build: [2, 3], test: [4, 4], deploy: [5, 5], parallel: [5, 6] } },

  { n: "Membership, billing, check-in", lane: "Membership & Billing", retire: 9, ends: "Daxko", crit: true,
    note: "Live in both products today, so this is configuration for the Y rather than a build. It has to be signed off before the June cutover.",
    phases: { design: [1, 2], build: [2, 4], test: [4, 5], deploy: [5, 6], parallel: [6, 8] } },
  { n: "Kid Zone child watch", lane: "Childcare", retire: 0, ends: "",
    note: "Check-in works today and our Play Center is the richer version. Moves with the rest of Operations in June.",
    phases: { design: [1, 1], build: [2, 3], test: [4, 4], deploy: [5, 5], parallel: [6, 8] } },
  { n: "Reports and the daily tracker", lane: "Membership & Billing", retire: 0, ends: "",
    note: "Builder and 20 standard reports shipped 15 Oct. Adds the daily sales-and-joins tracker and the Y's own 19 reports.",
    phases: { design: [2, 2], build: [3, 4], test: [5, 5], deploy: [6, 6], parallel: [6, 8] } },
  { n: "Online program and camp registration", lane: "Programs & Camp", retire: 0, ends: "", risk: true,
    note: "A gap today, and it cannot slip past the cutover: the Y cannot leave Daxko Operations without somewhere for parents to register. Online child registration, early-bird pricing and waiver enforcement.",
    phases: { design: [2, 2], build: [3, 5], test: [6, 6], deploy: [7, 7], parallel: [7, 8] } },
  { n: "PT packages", lane: "Programs & Camp", retire: 0, ends: "",
    note: "Sell, book and redeem already work. Adds expiry, refunds and the desk-or-trainer balance before cutover.",
    phases: { design: [3, 3], build: [4, 5], test: [6, 6], deploy: [7, 7], parallel: [7, 8] } },
  { n: "Financial assistance", lane: "Finance & Giving", retire: 0, ends: "",
    note: "Staff side and the discount work today. Adds the family's online application.",
    phases: { design: [3, 3], build: [4, 6], test: [6, 6], deploy: [7, 7], parallel: [7, 8] } },
  { n: "Sex-offender screening", lane: "Operations & IT", retire: 0, ends: "", risk: true,
    note: "The workflow and audit trail port across. The national registry feed is bought, not built, and it has to be contracted in time for the cutover.",
    phases: { design: [3, 3], build: [4, 5], test: [6, 6], deploy: [7, 7], parallel: [7, 8] } },
  { n: "Member mobile app", lane: "Membership & Billing", retire: 9, ends: "Daxko app",
    note: "Our installable app with push and a wallet card. Goes when Daxko Operations goes, so members are never without one.",
    phases: { design: [4, 4], build: [5, 6], test: [7, 7], deploy: [7, 7], parallel: [8, 9] } },
  { n: "Migration off Daxko", lane: "Membership & Billing", retire: 9, ends: "Daxko, in full", crit: true,
    note: "Members, families, barcodes, childcare records and history. Design cannot start until the NDA and export access exist, which is why those are the first things we ask for. Stored cards move processor to processor and never pass through us. Cutover is end of June; the Y runs parallel for a month either side.",
    phases: { design: [2, 3], build: [4, 6], test: [6, 7], deploy: [8, 8], parallel: [7, 9] } },

  { n: "Appointments and tours", lane: "Programs & Camp", retire: 10, ends: "Appointment King",
    note: "Not on the Daxko critical path, so it lands just after the cutover rather than competing with it.",
    phases: { design: [7, 7], build: [8, 9], test: [9, 9], deploy: [10, 10], parallel: [10, 10] } },
  { n: "Leads and sales pipeline", lane: "Marketing & Web", retire: 11, ends: "Salesforce",
    note: "Three working Salesforce importers already exist, so the move brings the history across rather than abandoning it.",
    phases: { design: [7, 7], build: [8, 10], test: [10, 10], deploy: [11, 11], parallel: [11, 11] } },
  { n: "Surveys and NPS", lane: "Marketing & Web", retire: 11, ends: "Listen360",
    note: "Five shipped survey types and a 644-line test suite. Public survey links for non-members.",
    phases: { design: [8, 8], build: [9, 10], test: [10, 10], deploy: [11, 11], parallel: [11, 11] } },

];
const PL_END = Math.max(...PLAN.map((x) => Math.max(x.retire || 0, ...Object.values(x.phases).map((r) => r[1]))));
const plMonth = (m) => new Date(PL_M1.y, PL_M1.m + m - 1, 1).toLocaleString("en-US", { month: "short", year: "numeric" });
const plShort = (m) => new Date(PL_M1.y, PL_M1.m + m - 1, 1).toLocaleString("en-US", { month: "short" });
const plYearAt = (m) => { const d = new Date(PL_M1.y, PL_M1.m + m - 1, 1); return d.getMonth() === 0 || m === 1 ? d.getFullYear() : ""; };
const RETIRES = PLAN.filter((x) => x.retire).sort((a, b) => a.retire - b.retire);

const planRows = PLAN.map((x) => {
  const segs = Object.entries(PL_PH).map(([k, [, col]]) => {
    const r = x.phases[k]; if (!r) return "";
    const par = k === "parallel";
    return `<div class="pl-seg" title="${esc(x.n)} — ${esc(PL_PH[k][0])}: ${esc(plMonth(r[0]))}${r[1] > r[0] ? " to " + esc(plMonth(r[1])) : ""}" style="left:${(((r[0] - 1) / PL_END) * 100).toFixed(3)}%;width:${(((r[1] - r[0] + 1) / PL_END) * 100).toFixed(3)}%;${par ? `top:60%;height:.45em;background:repeating-linear-gradient(45deg,${col} 0 3px,transparent 3px 6px);border:1px solid ${col};` : `background:${col};`}"></div>`;
  }).join("");
  const ret = x.retire ? `<div class="pl-dia" title="${esc(x.ends)} retires — ${esc(plMonth(x.retire))}" style="left:${(((x.retire - 0.5) / PL_END) * 100).toFixed(3)}%;"></div>` : "";
  return `<button type="button" class="pl-row${x.crit ? " crit" : ""}" data-plan="${esc(x.n)}"><span class="pl-lbl">${x.risk ? '<i class="pl-risk" title="Carries risk against the cutover">!</i>' : ""}${esc(x.n)}</span><span class="pl-area">${segs}${ret}</span></button>`;
}).join("");

const planAxis = Array.from({ length: PL_END }, (_, i) => {
  const m = i + 1, yr = plYearAt(m), apr = m === 6 || m === 8;
  return `<span class="pl-mo${apr ? " apr" : ""}">${plShort(m)}${yr ? `<b>${yr}</b>` : ""}</span>`;
}).join("");


/* The rollout. The only hard external date the Y has is DocuSign ending at
   the end of April 2027, so Wave 1 lands in April and everything before it is
   sized to clear that. Months run Nov 2026 to Dec 2027; a wave's bar is
   [startIndex, span]. "retires" is what the Y stops paying for at that wave. */
const MONTHS = ["Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const YEARMARK = { 0: "2026", 2: "2027" };
const WAVES = [
  { n: "Scope and access", at: [0, 2], when: "Nov – Dec 2026", kind: "prep",
    live: "Nothing goes live. We get the things that block everything else: the NDA and Daxko export access, the childcare licensing and ELC requirements, confirmation that the Y's Raiser's Edge tier allows production API access, Welld's file format, and the Y's Operate.Fit requirements.",
    retires: "", dep: "Daxko export access and an NDA. Without them the migration cannot even be designed." },
  { n: "Build", at: [1, 4], when: "Dec 2026 – Mar 2027", kind: "prep",
    live: "The e-signature port, the membership and billing configuration for the Y, and the first slice of licensed childcare. Childcare starts here, not later, because it is the longest build and it gates the Daxko exit.",
    retires: "", dep: "Runs in parallel with Wave 1 preparation." },
  { n: "Wave 1 — first go-live", at: [5, 1], when: "April 2027", kind: "live",
    live: "Contracts and e-signature, membership, billing, check-in, Kid Zone child watch, and reporting. Staff work in Ardn from this point.",
    retires: "DocuSign", dep: "DOCUSIGN ENDS AT THE END OF APRIL. This date is set by the Y's contract, not by us, and the wave is sized backwards from it." },
  { n: "Wave 2 — the ports", at: [6, 3], when: "May – Jul 2027", kind: "live",
    live: "The member mobile app, appointments and tours, surveys and NPS, leads and the sales pipeline with the Salesforce import, and financial assistance. All working code already running, brought across.",
    retires: "Appointment King · Salesforce · Listen360", dep: "Each one ends a contract on the day it goes live." },
  { n: "Wave 3 — childcare and the migration", at: [9, 4], when: "Aug – Nov 2027", kind: "live",
    live: "Licensed childcare and preschool in full — ratios, incidents, health records, ELC reimbursement — plus online program and camp registration, and the member and family data moved off Daxko.",
    retires: "Daxko, in full", dep: "The childcare build started in Dec 2026. This is where it lands, and it is the only thing that lets the Daxko contract close." },
  { n: "As dependencies clear", at: [6, 8], when: "When the vendor answers", kind: "wait",
    live: "The Welld usage feed, Operate.Fit, Clarissa, and sports leagues. We will not put a date on any of these until the thing they wait on arrives.",
    retires: "", dep: "Welld's format · the Y's Operate.Fit requirements · Clarissa's integration detail · a league season to build against." },
];

const HOME_CARDS = [
  ["summary", "Executive Summary", "The answer, and the two builds that set the date.", `${SYS.length} capabilities`],
  ["value", "Value", "What it costs, and what comes with it at no charge.", `${usd(PRICE.impl)} + ${usd(PRICE.mo)}/mo`],
  ["plan", "Plan", "What we are doing, month by month, and when each contract ends.", "First go-live Apr 2027"],
  ["compare", "Compare", "Four ways to run it. One takes the running off the Y.", "~17 vendors today"],
  ["detail", "Detail", "Every system, the gaps, the testing, the rollout, the proof.", `${TALLY.retire} retire · ${TALLY.partial} in part`],
];

const body = `
<title>Ardn for the YMCA of Greater St. Petersburg</title>
<meta name="description" content="Ardn's proposal to the YMCA of Greater St. Petersburg: one membership platform in place of the systems the Y runs today.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${baseCss}${brand}</style>

<div class="px" id="px">
<aside class="side" id="side">
  <div class="side-top"><span class="logo"><img src="/proposal-sites/ymca-st-pete/img/ardn-logo-white.svg" alt="Ardn"></span><button type="button" id="menuBtn" class="menubtn" aria-label="Menu" aria-controls="tabs" aria-expanded="false"></button></div>
  <nav class="tabs" id="tabs" aria-label="Proposal">${tabs}</nav>
  <div class="side-bot"><span class="hold">Checked against code<br>16 Oct 2026</span></div>
</aside>
<div class="col">
<div class="views" id="views">

${view("home", `<main class="hs" data-screen-label="01 Home"><div class="hs-scene" aria-hidden="true" id="hsScene">${hsScene}</div>
<section class="hs-hero">
  <div class="hs-eyebrow">Prepared for the YMCA of Greater St. Petersburg</div>
  <h1 id="hsTitle">One platform, in place of ${SYS.length} systems</h1>
  <p class="hs-sub">Membership, programs, childcare and giving on one platform &mdash; built, run and supported by Ardn. Every status in here was checked against working code, and where nothing exists yet, we say so.</p>
  <dl class="hs-fig" id="hsFig">
    <div><dt>Contracts End</dt><dd>${TALLY.retire}</dd></div>
    <div><dt>Retire in Part</dt><dd>${TALLY.partial}</dd></div>
    <div><dt>You Keep, We Feed</dt><dd>${TALLY.connect}</dd></div>
    <div><dt>True Gaps</dt><dd>${GAPS.size}</dd></div>
  </dl>
  <a class="cta hs-cta" href="#summary">Begin With the Executive Summary &rarr;</a>
</section>
<nav class="hs-card" aria-label="Proposal, in Reading Order"><ol id="homeCards" class="hs-holes" style="--cols:${Math.ceil(HOME_CARDS.length / 2)}">${
  HOME_CARDS.map(([k, name, line, fig], i) => `<li class="hs-hole" style="--h:${i}"><a class="hs-link" href="#${k}" aria-label="${esc(name)}"></a><span class="hs-no" aria-hidden="true">${i + 1}</span><span class="hs-name">${esc(name)}</span><span class="hs-line">${esc(line)}</span><span class="hs-figure">${esc(fig)}</span></li>`).join("")
}</ol></nav></main>`)}

${view("summary", scr("01", "Summary", `
<section style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:.8em 2.4em;">
  <div style="flex:1 1 28em;max-width:44em;">
    <div class="eyeb" style="margin-bottom:.4em;">Executive Summary</div>
    <h1 class="ttl">${TALLY.retire} contracts can end this year. Two builds decide when Daxko does.</h1>
  </div>
  <div class="strip">
    <div><b>${TALLY.retire}</b><span>retire outright</span></div>
    <div><b>${TALLY.partial}</b><span>retire in part</span></div>
    <div><b>${TALLY.connect}</b><span>you keep, we feed</span></div>
    <div><b>${GAPS.size}</b><span>true gaps</span></div>
  </div>
</section>

<dl class="sq">
  <div><dt>Situation</dt><dd>The Y runs <b>${SYS.length} capabilities</b> across about seventeen vendors, with Daxko underneath membership, programs, reports, screening, PT packages, child watch and licensed childcare.</dd></div>
  <div><dt>Complication</dt><dd>Daxko cannot simply be switched off. One thing it does &mdash; <b>licensed childcare</b> &mdash; has no equivalent in any product Ardn owns, and we verified that rather than assumed it. Meanwhile <b>DocuSign expires at the end of April</b> regardless.</dd></div>
  <div><dt>Question</dt><dd>What can the Y retire now, what must be built first, and in what order &mdash; with no gap at a front desk or on a childcare licence?</dd></div>
  <div><dt>Recommendation</dt><dd>Retire <b>${TALLY.retire}</b> outright and connect <b>${TALLY.connect}</b> more, starting with DocuSign because it has a date. Put <b>licensed childcare on the critical path from day one</b>, parallel to the ports. Treat SGA as a connection now, a decision later.</dd></div>
</dl>

<section class="grid" style="grid-template-columns:repeat(auto-fit,minmax(17em,1fr));">
  <div class="card">
    <div class="ch">The Answer</div>
    <div class="cb">${noRisk} of ${SYS.length} carry no build risk.</div>
    <div class="bar">
      <div style="flex:${TALLY.retire};background:#0071CE;">${TALLY.retire} Retire</div>
      <div style="flex:${TALLY.partial};background:#A8700F;">${TALLY.partial} In Part</div>
      <div style="flex:${TALLY.connect + TALLY.keep};background:#6B7280;">${TALLY.connect + TALLY.keep} Stay</div>
    </div>
    <div class="foot">On the Y's Day 1 list: ${d1Fit.STRONG} strong, ${d1Fit.PARTIAL} partial, ${d1Fit.GAP} gap.</div>
  </div>
  <div class="card">
    <div class="ch">Why We Can Say It</div>
    <p>The Y's product has <b style="color:var(--ink)">26 modules</b>. Our club platform &mdash; built on the Y's own codebase &mdash; has <b style="color:var(--ink)">about a hundred</b>. What left can come back.</p>
    <div class="foot">Every row names its files and line counts, so the Y can check our work instead of trusting it.</div>
  </div>
  <div class="card" style="border-color:rgba(var(--goldrgb),.45);">
    <div class="ch" style="color:var(--gold);">Two Rows Moved Your Way</div>
    <p><b style="color:var(--ink)">Salesforce</b> &mdash; three working importers, 886 ln of tests. Now a straight retire.</p>
    <p><b style="color:var(--ink)">Listen360</b> &mdash; five shipped survey types, 644 ln test suite. Also a retire.</p>
    <div class="foot">We corrected our own 15 October sheet against the code.</div>
  </div>
</section>`))}

${view("value", scr("02", "Value", `
<section style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:.7em 2.4em;">
  <div style="flex:1 1 27em;max-width:42em;">
    <div class="eyeb" style="margin-bottom:.4em;">Value and Pricing</div>
    <h1 class="ttl">${usd(PRICE.impl)} to build it. ${usd(PRICE.mo)} a month to run it.</h1>
    <p class="sub">About ${usdK(valueStated)} of build and integration work is included at no cost, as part of the partnership.</p>
  </div>
  <div class="strip">
    <div><b>${usd(PRICE.impl)}</b><span>one-time build</span></div>
    <div><b>${usd(PRICE.mo)}</b><span>a month, all in</span></div>
    <div><b>${usd(yearOne)}</b><span>year one, total</span></div>
    <div><b>~${usdK(valueStated)}</b><span>included at no cost</span></div>
  </div>
</section>

<section style="flex:1;display:flex;flex-wrap:wrap;gap:.8em;min-height:0;align-items:stretch;">
  <div style="flex:1.6 1 28em;background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.7em 1em;display:flex;flex-direction:column;min-height:0;overflow:auto;">
    <table class="ptab" style="font-size:max(13px,.86em);">
      <thead><tr><th>Line item</th><th style="text-align:right;">Standard</th><th style="text-align:right;">Partnership</th></tr></thead>
      <tbody>
        <tr><td class="n">Implementation<small style="display:block;color:var(--muted);font-weight:400;">one-time build and launch</small></td><td style="text-align:right;color:var(--muted);text-decoration:line-through;">${usdK(PRICE.implStdLo)}&ndash;${usdK(PRICE.implStdHi)}</td><td style="text-align:right;font-weight:700;color:var(--ink);">${usd(PRICE.impl)}</td></tr>
        <tr><td class="n">Platform integrations<small style="display:block;color:var(--muted);font-weight:400;">up to ${PRICE.integrations}, including Raiser&rsquo;s Edge</small></td><td style="text-align:right;color:var(--muted);text-decoration:line-through;">~${usdK(integrationsValue)}</td><td style="text-align:right;font-weight:700;color:var(--good);">Included</td></tr>
        <tr><td class="n">Dedicated support team<small style="display:block;color:var(--muted);font-weight:400;">production support and fractional IT, from day one</small></td><td style="text-align:right;color:var(--muted);">&mdash;</td><td style="text-align:right;font-weight:700;color:var(--good);">Included</td></tr>
        <tr><td class="n">Monthly subscription<small style="display:block;color:var(--muted);font-weight:400;">hosting, licence fees, updates, full access</small></td><td style="text-align:right;color:var(--muted);">&mdash;</td><td style="text-align:right;font-weight:700;color:var(--ink);">${usd(PRICE.mo)}/mo</td></tr>
      </tbody>
      <tfoot>
        <tr><th style="padding-top:.6em;">Year one, all in</th><td></td><td style="text-align:right;font-weight:800;color:var(--brass);padding-top:.6em;font-size:1.15em;">${usd(yearOne)}</td></tr>
        <tr><th>Each year after</th><td></td><td style="text-align:right;font-weight:700;color:var(--ink);">${usd(yr1Run)}</td></tr>
        <tr><th>${PRICE.termMonths}-month term<small style="display:block;color:var(--muted);font-weight:400;">flat, to ${usd(termCapped)} if CPI runs at the ${PRICE.cpiCap * 100}% cap every year</small></th><td></td><td style="text-align:right;font-weight:700;color:var(--ink);">${usd(termFlat)}</td></tr>
      </tfoot>
    </table>
  </div>

  <div style="flex:1 1 20em;display:flex;flex-direction:column;gap:.7em;min-width:0;">
    <div class="card" style="border-color:rgba(var(--goodrgb),.45);background:rgba(var(--goodrgb),.07);">
      <div class="ch" style="color:var(--good);">Included At No Cost</div>
      <div class="cb" style="font-size:1.9em;color:var(--good);">~${usdK(valueStated)}</div>
      <p>${usdK(PRICE.implStdLo)}&ndash;${usdK(PRICE.implStdHi)} of build, less the ${usd(PRICE.impl)} charged, plus ${PRICE.integrations} integrations at about ${usdK(PRICE.integrationEach)} each.</p>
      <div class="foot">Integrations are at no cost where each vendor&rsquo;s API is reachable under the Y&rsquo;s current subscription. For Raiser&rsquo;s Edge we confirm the tier supports production API access during scoping.</div>
    </div>
    <div class="card">
      <div class="ch">What You Pay Today</div>
      <p style="margin-bottom:.3em;">Put in what the Y spends a year across the ~17 vendors and we will work from your figure, not ours.</p>
      <label style="display:flex;align-items:center;gap:.5em;font-size:max(14px,.88em);color:var(--soft);">
        <span style="white-space:nowrap;">Today, a year</span>
        <input id="todaySpend" name="todaySpend" type="text" inputmode="numeric" placeholder="e.g. 180,000" aria-label="What the Y spends a year today" style="flex:1;min-width:0;font:inherit;font-size:max(14px,.92em);padding:.3em .5em;border-radius:7px;border:1px solid rgba(var(--fgrgb),.3);background:var(--field);color:var(--ink);">
      </label>
      <div id="spendOut" style="font-size:max(13px,.86em);color:var(--muted);line-height:1.4;margin-top:.1em;">Against ${usd(yr1Run)} a year on Ardn.</div>
      <div class="foot">We have not guessed this number. It is the Y&rsquo;s to supply, and whatever is typed here comes back to us with the proposal.</div>
    </div>
  </div>
</section>
<div class="note" style="font-size:max(13px,.84em);"><b>Terms.</b> ${PRICE.termMonths}-month term &middot; annual CPI escalation capped at ${PRICE.cpiCap * 100}% &middot; the dedicated support team starts at launch, not after it.</div>`))}

${view("plan", scr("03", "Plan", `
<section style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:.5em 2em;">
  <div style="flex:1 1 26em;"><div class="eyeb" style="margin-bottom:.35em;">Rollout Plan</div>
  <h1 class="ttl" style="font-size:1.75em;">Two fixed dates: DocuSign in April, off Daxko entirely by the end of June</h1></div>
  <div class="strip" style="grid-template-columns:repeat(3,auto);">
    <div><b>6</b><span>months to DocuSign</span></div>
    <div><b>8</b><span>months to the Daxko cutover</span></div>
    <div><b>${PLAN.filter((x) => x.crit).length}</b><span>on the critical path</span></div>
  </div>
</section>

<div style="display:flex;flex-wrap:wrap;gap:.6em;">
  <div class="note" style="flex:1 1 22em;border-left-color:var(--alarm);background:rgba(var(--alarmrgb),.07);"><b>Two dates are fixed, and neither is ours.</b> DocuSign ends end of April 2027 (month 6). The Y comes off <b>Daxko entirely &mdash; end of June, beginning of July 2027</b> (month 8). Everything before each one is sized to clear it, and nothing is switched off until its parallel run has finished.</div>
  <div class="note" style="flex:1 1 22em;border-left-color:var(--alarm);background:rgba(var(--alarmrgb),.07);"><b>Licensed childcare is started first, and it is the risk.</b> Leaving all of Daxko means the childcare build cannot wait its turn: it is the one capability with nothing to build on, so it begins in month one and gets a <b>five-month build rather than eight</b>. That compression is the largest risk here, and we would rather name it now than discover it in May.</div>
</div>

<section style="flex:1;background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.8em 1em;display:flex;flex-direction:column;gap:.5em;min-height:0;overflow:auto;">
  <div class="pl" style="--n:${PL_END};--lbl:min(14em,22%);min-width:36em;">
    <div class="pl-head"><div></div><div class="pl-ax">${planAxis}</div></div>
    ${planRows}
  </div>
  <div class="pl-leg" style="margin-top:.3em;">
    ${Object.entries(PL_PH).map(([k, [n, c]]) => `<span><i style="${k === "parallel" ? `background:repeating-linear-gradient(45deg,${c} 0 3px,transparent 3px 6px);border:1px solid ${c}` : `background:${c}`}"></i>${esc(n)}</span>`).join("")}
    <span><i class="d"></i>Contract ends</span><span><i style="background:var(--sand);border-radius:50%;width:.6em;height:.6em"></i>Risk against the cutover</span><span style="color:var(--alarm);font-weight:700;">Red label &middot; critical path</span>
    <span style="color:var(--alarm);font-weight:700;margin-left:auto;">Apr 2027 DocuSign &middot; Jun 2027 Daxko</span>
  </div>
</section>

<section style="display:flex;flex-wrap:wrap;gap:.7em;">
  <div class="card" style="flex:2 1 24em;">
    <div style="display:flex;justify-content:space-between;align-items:baseline;gap:.5em;flex-wrap:wrap;">
      <span class="cb" id="planName"></span><span id="planWhen" style="font-size:max(12px,.76em);font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--brass);white-space:nowrap;"></span>
    </div>
    <p id="planNote"></p>
    <div class="foot"><span id="planPhases"></span></div>
  </div>
  <div class="card" style="flex:1 1 15em;border-color:rgba(var(--goodrgb),.4);">
    <div class="ch" style="color:var(--good);">What Stops Being Paid For</div>
    <div class="cb" id="planEnds" style="font-size:1.1em;"></div>
    <div class="foot">Licence notices timed to each renewal. The Y pays twice only during a parallel run, and data is archived before anything is switched off.</div>
  </div>
</section>`))}

${view("compare", scr("03", "Compare", `
<section style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:.6em 2.4em;">
  <div style="flex:1 1 30em;"><div class="eyeb" style="margin-bottom:.45em;">Why Ardn</div>
  <h1 class="ttl">Four ways to run the Y's systems. <em style="color:var(--brass2);font-style:normal;">One takes the running off the Y.</em></h1></div>
  <p style="flex:1 1 20em;max-width:34em;margin:0;color:var(--soft);font-size:1.02em;line-height:1.45;">Daxko is one vendor for part of it. A best-of-breed stack is ${SYS.length} vendors to hold together. Only a managed product carries the whole job.</p>
</section>
<section style="flex:1;background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.6em 1em .4em;overflow:auto;min-height:0;">
<table style="width:100%;border-collapse:separate;border-spacing:0;font-size:1em;min-width:42em;">
<thead><tr>
  <th style="text-align:left;vertical-align:bottom;padding:.5em .6em .5em 0;font-size:max(14px,.8em);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:700;">The Job</th>
  <th style="padding:.5em .6em;vertical-align:bottom;"><div style="font-weight:700;color:var(--ink);font-size:max(14px,.88em);">Stay on Daxko</div><div style="font-size:max(14px,.76em);color:var(--muted);">Today</div></th>
  <th style="padding:.5em .6em;vertical-align:bottom;"><div style="font-weight:700;color:var(--ink);font-size:max(14px,.88em);">Daxko + Point Tools</div><div style="font-size:max(14px,.76em);color:var(--muted);">${SYS.length} vendors</div></th>
  <th style="padding:.5em .6em;vertical-align:bottom;"><div style="font-weight:700;color:var(--ink);font-size:max(14px,.88em);">Build In-House</div><div style="font-size:max(14px,.76em);color:var(--muted);">Your own team</div></th>
  <th style="position:relative;padding:.9em .6em .5em;vertical-align:bottom;background:linear-gradient(180deg,rgba(var(--bluergb),.22),rgba(var(--bluergb),.08));border:2px solid var(--brass);border-bottom:0;border-radius:12px 12px 0 0;">
    <span style="position:absolute;top:-.85em;left:50%;transform:translateX(-50%);background:var(--brass);color:#fff;font-size:max(14px,.68em);font-weight:800;letter-spacing:.1em;text-transform:uppercase;padding:.25em .7em;border-radius:999px;white-space:nowrap;">Recommended</span>
    <div style="font-weight:800;color:var(--ink);font-size:1em;">Ardn Membership</div><div style="font-size:max(14px,.76em);color:var(--muted);">Managed product</div></th>
</tr></thead>
<tbody>${CMP.map(([job, a2, b2, c2, d2]) => `<tr>
  <th scope="row" style="text-align:left;padding:.45em .6em .45em 0;font-weight:600;color:var(--ink);font-size:max(14px,.9em);border-top:1px solid rgba(var(--fgrgb),.1);">${esc(job)}</th>
  ${[a2, b2, c2].map((v) => `<td style="padding:.45em .6em;text-align:center;border-top:1px solid rgba(var(--fgrgb),.1);font-size:max(14px,.85em);color:${v[0] === "y" ? "var(--good)" : v[0] === "p" ? "var(--sand)" : "var(--muted)"};">${v[0] === "y" ? "&#10003; " : v[0] === "p" ? "~ " : "&mdash; "}${esc(v.slice(2))}</td>`).join("")}
  <td style="padding:.45em .6em;text-align:center;border-top:1px solid rgba(var(--fgrgb),.1);border-left:2px solid var(--brass);border-right:2px solid var(--brass);background:rgba(var(--bluergb),.06);font-size:max(14px,.85em);font-weight:600;color:${d2[0] === "y" ? "var(--good)" : "var(--sand)"};">${d2[0] === "y" ? "&#10003; " : "~ "}${esc(d2.slice(2))}</td>
</tr>`).join("")}</tbody>
<tfoot><tr><th scope="row" style="text-align:left;padding:.5em .6em;font-size:max(14px,.8em);color:var(--muted);">Vendors the Y manages</th>
  <td style="text-align:center;padding:.5em .6em;font-weight:700;">~17</td><td style="text-align:center;padding:.5em .6em;font-weight:700;">~17</td><td style="text-align:center;padding:.5em .6em;font-weight:700;">~17 + a dev team</td>
  <td style="text-align:center;padding:.5em .6em;font-weight:800;color:var(--brass);border-left:2px solid var(--brass);border-right:2px solid var(--brass);border-bottom:2px solid var(--brass);background:rgba(var(--bluergb),.06);">${TALLY.connect + TALLY.keep} + Ardn</td></tr></tfoot>
</table></section>`))}

${view("detail", scr("04", "Detail", `
<section style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:.5em 2em;">
  <div><div class="eyeb" style="margin-bottom:.35em;">Detail</div><h1 class="ttl" style="font-size:1.75em;" id="dTitle"></h1></div>
  <div class="legend" id="dLegend"></div>
</section>
<nav style="display:flex;flex-wrap:wrap;gap:.4em;">
  <button class="dchip" type="button" data-dt="estate">Systems We Retire</button>
  <button class="dchip" type="button" data-dt="gaps">What We Build</button>
  <button class="dchip" type="button" data-dt="qa">Testing Built In</button>
  <button class="dchip" type="button" data-dt="rollout">Rollout</button>
  <button class="dchip" type="button" data-dt="proof">Proof &amp; Risk</button>
</nav>

<div data-dch="estate" style="display:contents">
<section style="flex:1;display:flex;flex-wrap:wrap;gap:.8em;min-height:0;">
  <div style="flex:2.3 1 32em;background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.7em 1em;display:flex;flex-direction:column;gap:.5em;min-height:0;overflow:auto;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(13em,1fr));gap:.6em 1em;align-content:start;">${areaCols}</div>
    <div style="margin-top:auto;padding-top:.4em;font-size:max(13px,.78em);color:var(--muted);">Select a system for what it does today, what replaces it, and the proof.</div>
  </div>
  <div style="flex:1 1 19em;background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.7em 1em;display:flex;flex-direction:column;gap:.45em;min-height:0;overflow:auto;">
    <div style="display:flex;justify-content:space-between;align-items:baseline;gap:.5em;"><span style="font-family:var(--serif);font-weight:500;font-size:1.3em;line-height:1.15;" id="sysName"></span><span id="sysFateW" style="font-size:max(12px,.72em);font-weight:700;letter-spacing:.07em;text-transform:uppercase;padding:.15em .55em;border-radius:999px;border:1px solid;white-space:nowrap;"><span id="sysFate"></span></span></div>
    <div style="font-size:max(13px,.78em);color:var(--muted);"><span id="sysArea"></span> · Fit <b id="sysFit" style="color:var(--ink);"></b></div>
    <div><div style="font-size:max(12px,.7em);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:700;">Today It Does</div><div style="font-size:max(14px,.88em);color:var(--soft);line-height:1.4;" id="sysUse"></div></div>
    <div><div style="font-size:max(12px,.7em);letter-spacing:.12em;text-transform:uppercase;color:var(--brass);font-weight:700;">On Ardn</div><div style="font-size:max(14px,.88em);color:var(--ink);line-height:1.4;" id="sysOurs"></div></div>
    <div id="sysWhyW"><div style="font-size:max(12px,.7em);letter-spacing:.12em;text-transform:uppercase;color:var(--teal);font-weight:700;">What It Depends On</div><div style="font-size:max(14px,.86em);color:var(--soft);line-height:1.4;" id="sysWhy"></div></div>
    <div id="sysEvW" style="margin-top:auto;padding-top:.45em;border-top:1px solid rgba(var(--fgrgb),.13);"><div style="font-size:max(12px,.7em);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);font-weight:700;">Proof</div><div style="font-size:max(12px,.76em);color:var(--muted);font-family:ui-monospace,Menlo,monospace;line-height:1.4;" id="sysEv"></div></div>
  </div>
</section></div>

<div data-dch="gaps" style="display:contents">
<section class="grid" style="flex:1;grid-template-columns:repeat(auto-fit,minmax(16em,1fr));align-content:center;">
  <div class="card" style="border-color:rgba(var(--alarmrgb),.4);"><div class="ch" style="color:var(--alarm);">Gap · Day 1</div><div class="cb">Licensed childcare and preschool</div><p>Parent sign in and out, staff-to-child ratios, incidents, health records, ELC reimbursement. <b style="color:var(--ink)">Zero matches in either product</b> — we checked each concept by name. Largest build, started first, and the July Daxko exit rests on it. Five months of build rather than eight.</p></div>
  <div class="card" style="border-color:rgba(var(--alarmrgb),.4);"><div class="ch" style="color:var(--alarm);">Gap · Day 1</div><div class="cb">Migration off Daxko</div><p>Members, families, barcodes, stored cards, history. No import tooling exists; it needs Daxko export access and an NDA before it can be designed. Cards move processor-to-processor, never through us.</p></div>
  <div class="card"><div class="ch" style="color:var(--sand);">Partial · Day 1</div><div class="cb">Online program and camp registration</div><p>Programs and Classes work. A parent cannot yet register a child online, early-bird is not charged, and waivers are not enforced.</p></div>
  <div class="card"><div class="ch" style="color:var(--slate);">Not Day 1</div><div class="cb">Sports leagues</div><p>TeamSideline cannot integrate and nothing covers leagues. Run it alongside for one season and build against a real league in flight.</p></div>
  <div class="card"><div class="ch" style="color:var(--teal);">Blocked On A Vendor</div><div class="cb">Welld insurance feed</div><p>A daily member-usage file. Waiting on Welld's format, not on engineering effort.</p></div>
  <div class="card"><div class="ch" style="color:var(--teal);">Buy, Not Build</div><div class="cb">Sex-offender registry data</div><p>The screening workflow and audit trail already exist. The national registry data source does not, in either product.</p></div>
</section></div>

<div data-dch="qa" style="display:contents">
<section style="flex:1;display:flex;flex-direction:column;gap:.8em;justify-content:center;">
  <div class="strip"><div><b>370,471</b><span>lines of test code</span></div><div><b>1,379</b><span>test files</span></div><div><b>945</b><span>on the backend</span></div><div><b>Every PR</b><span>typecheck, build, suite</span></div></div>
  <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(15em,1fr));">
    <div class="card"><div class="ch">Real Database, Not Mocks</div><p>The Y's suite runs against a live Postgres with the same roles and row-level-security policies production uses, so a permission bug fails in the pipeline instead of at a front desk.</p></div>
    <div class="card"><div class="ch">A Shared Oracle</div><p>In the accounting engine the SQL rules and the TypeScript rules run the same cases and must agree. That found a defect where a month-end statement could never post — before a customer met it.</p></div>
    <div class="card"><div class="ch">Nothing Merges On A Promise</div><p>CI runs the typecheck, the build and the suite on every pull request. Before it existed, &ldquo;the tests pass&rdquo; was a claim checked once on a laptop. Now it is a gate.</p></div>
  </div>
</section></div>

<div data-dch="rollout" style="display:contents">
<section style="flex:1;display:flex;flex-direction:column;gap:.6em;min-height:0;justify-content:center;">
  <div class="note" style="border-left-color:var(--alarm);background:rgba(var(--alarmrgb),.07);"><b>One date is fixed, and it is not ours.</b> DocuSign ends at the end of April 2027. Wave 1 is sized backwards from it, which is why first go-live is April and not later. Everything after that is sequenced by what blocks what.</div>

  <div style="background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.7em 1em;overflow:auto;min-height:0;">
    <div style="display:grid;grid-template-columns:11em repeat(${MONTHS.length}, minmax(1.6em,1fr));gap:.15em .1em;align-items:center;min-width:34em;">
      <div></div>
      ${MONTHS.map((m, i) => `<div style="text-align:center;font-size:max(11px,.66em);font-weight:700;color:${i === 5 ? "var(--alarm)" : "var(--muted)"};letter-spacing:.04em;">${m}${YEARMARK[i] ? `<span style="display:block;font-weight:400;font-size:.85em;color:var(--muted);">${YEARMARK[i]}</span>` : ""}</div>`).join("")}
      ${WAVES.map((w) => {
        const c = w.kind === "live" ? "var(--brass)" : w.kind === "wait" ? "var(--slate)" : "var(--sand)";
        const bg = w.kind === "live" ? "rgba(var(--bluergb),.85)" : w.kind === "wait" ? "rgba(var(--slatergb),.45)" : "rgba(var(--goldrgb),.3)";
        return `<button type="button" data-wave="${esc(w.n)}" style="text-align:left;font:inherit;font-size:max(12px,.76em);font-weight:600;color:var(--ink);background:none;border:0;cursor:pointer;padding:.2em 0;line-height:1.2;">${esc(w.n)}</button>` +
          MONTHS.map((_, i) => {
            const on = i >= w.at[0] && i < w.at[0] + w.at[1];
            const first = i === w.at[0];
            return `<div style="height:1.5em;${on ? `background:${bg};${first ? "border-radius:4px 0 0 4px;" : ""}${i === w.at[0] + w.at[1] - 1 ? "border-radius:0 4px 4px 0;" : ""}` : ""}${i === 5 ? "box-shadow:inset 1px 0 0 var(--alarm), inset -1px 0 0 var(--alarm);" : ""}"></div>`;
          }).join("");
      }).join("")}
    </div>
    <div style="display:flex;gap:.3em 1.1em;flex-wrap:wrap;margin-top:.5em;font-size:max(12px,.74em);color:var(--muted);">
      <span style="display:inline-flex;align-items:center;gap:.35em;"><i style="width:.75em;height:.75em;border-radius:2px;background:rgba(var(--goldrgb),.3);"></i>Build, nothing live yet</span>
      <span style="display:inline-flex;align-items:center;gap:.35em;"><i style="width:.75em;height:.75em;border-radius:2px;background:rgba(var(--bluergb),.85);"></i>Goes live, a contract ends</span>
      <span style="display:inline-flex;align-items:center;gap:.35em;"><i style="width:.75em;height:.75em;border-radius:2px;background:rgba(var(--slatergb),.45);"></i>Waiting on someone else</span>
      <span style="color:var(--alarm);font-weight:700;">April 2027 · DocuSign ends</span>
    </div>
  </div>

  <div style="display:flex;flex-wrap:wrap;gap:.7em;">
    <div class="card" style="flex:2 1 24em;" id="waveCard">
      <div style="display:flex;justify-content:space-between;align-items:baseline;gap:.5em;flex-wrap:wrap;">
        <span class="cb" id="waveName"></span>
        <span id="waveWhen" style="font-size:max(12px,.76em);font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--brass);white-space:nowrap;"></span>
      </div>
      <p id="waveLive"></p>
      <div id="waveDepW" style="margin-top:.2em;"><span style="font-size:max(11px,.68em);font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);">What it turns on</span><p id="waveDep" style="font-size:max(13px,.84em);"></p></div>
    </div>
    <div class="card" style="flex:1 1 15em;border-color:rgba(var(--goodrgb),.4);">
      <div class="ch" style="color:var(--good);">What Stops Being Paid For</div>
      <div class="cb" id="waveRet" style="font-size:1.1em;"></div>
      <div class="foot">No system is switched off until its replacement is live and the Y has signed it off. Data is archived first.</div>
    </div>
  </div>
</section></div>

<div data-dch="proof" style="display:contents">
<section style="flex:1;display:flex;flex-direction:column;gap:.7em;justify-content:center;min-height:0;">
  <div style="background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.5em 1em;overflow:auto;min-height:0;">
  <table class="ptab"><thead><tr><th>Capability</th><th>Where</th><th>Evidence an evaluator can open</th><th>Verifiable</th></tr></thead><tbody>
  ${PROOF.map(([c, w, e]) => `<tr><td class="n">${esc(c)}</td><td>${esc(w)}</td><td class="e">${esc(e)}</td><td class="y">Yes</td></tr>`).join("")}
  </tbody></table></div>
  <div class="note"><b>Risk, stated plainly.</b> On the Y's Day 1 list of ${D1.length}: ${d1Fit.STRONG} strong, ${d1Fit.PARTIAL} partial, ${d1Fit.GAP} gap. We corrected two of our own rows against the code while writing this — Salesforce and Listen360 both moved in the Y's favour. Nothing is switched off until its replacement is live and the Y has signed it off.</div>
</section></div>`))}


</div>
<footer class="pxfoot">Prepared by Ardn for the YMCA of Greater St. Petersburg. Confidential. Sources: the 15 October 2026 working sheet, re-checked on 16 October 2026 against both of Ardn's membership codebases.</footer>
</div>
</div>

<script>
(function(){
  var SYS=${SYSJSON}, FATE=${FATEJSON};
  var views=${JSON.stringify(NAV.map((n) => n[0]))};
  function show(id){
    if(views.indexOf(id)<0)id=views[0];
    views.forEach(function(v){var el=document.getElementById('v-'+v);if(el)el.hidden=(v!==id);});
    document.querySelectorAll('#tabs a').forEach(function(a){
      var on=a.getAttribute('href')==='#'+id;
      a.classList.toggle('on',on);
      if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
  }
  function paint(name){
    var s=null;for(var i=0;i<SYS.length;i++){if(SYS[i].n===name){s=SYS[i];break;}}
    if(!s)s=SYS[0];
    var f=FATE[s.f];
    function set(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
    set('sysName',s.n);set('sysFate',f[2]);set('sysArea',s.a);set('sysFit',s.fit);
    set('sysUse',s.t);set('sysOurs',s.o);set('sysWhy',s.w||'');set('sysEv',s.e||'');
    var w=document.getElementById('sysFateW');if(w){w.style.borderColor=f[0];w.style.color=f[0];w.style.background=f[1];}
    var ww=document.getElementById('sysWhyW');if(ww)ww.hidden=!s.w;
    var ew=document.getElementById('sysEvW');if(ew)ew.hidden=!s.e;
    document.querySelectorAll('[data-sys]').forEach(function(bt){
      var on=bt.getAttribute('data-sys')===s.n;
      bt.style.outline=on?'2px solid var(--ink)':'none';
      bt.style.outlineOffset='1px';
    });
  }
  document.addEventListener('click',function(e){
    var bt=e.target.closest&&e.target.closest('[data-sys]');
    if(bt)paint(bt.getAttribute('data-sys'));
  });
  // Detail sub-tabs. Each title asserts the finding.
  var DTITLE={
    estate:'Of ${SYS.length} systems, ${TALLY.retire} retire and ${TALLY.partial} retire in part',
    gaps:'Two true gaps set the date; the rest is bounded work',
    qa:'Testing is built into the product, not bolted on',
    rollout:'First go-live in April 2027, because DocuSign ends then',
    proof:'Already built, and the Y can check every claim'
  };
  var DLEG={
    estate:'${Object.entries(FATE).map(([k, v]) => `<span><i style="background:${v[0]}"></i><b>${TALLY[k] || 0}</b> ${esc(v[2])}</span>`).join("")}<span style="color:var(--alarm);font-weight:700;">D1 · the Y&rsquo;s Day 1</span>',
    gaps:'<span><b>${GAPS.size}</b> true gaps</span><span><b>${d1Fit.PARTIAL}</b> named partials</span>',
    qa:'<span><b>370,471</b> lines of tests</span>',
    rollout:'<span><b>6</b> months to first go-live</span><span><b>${WAVES.filter(w=>w.kind==="live").length}</b> live waves</span>',
    proof:'<span><b>${d1Fit.STRONG}</b> strong · <b>${d1Fit.PARTIAL}</b> partial · <b>${d1Fit.GAP}</b> gap</span>'
  };
  var dch='estate';
  function paintDetail(){
    var t=document.getElementById('dTitle'); if(t)t.textContent=DTITLE[dch]||'';
    var lg=document.getElementById('dLegend'); if(lg)lg.innerHTML=DLEG[dch]||'';
    document.querySelectorAll('[data-dt]').forEach(function(b){b.classList.toggle('on',b.dataset.dt===dch);});
    document.querySelectorAll('[data-dch]').forEach(function(c){c.hidden=c.dataset.dch!==dch;});
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-dt]');
    if(b){dch=b.dataset.dt;paintDetail();}
  });
  paintDetail();
  var PLAN=${JSON.stringify(PLAN.map((x) => ({ n: x.n, note: x.note, ends: x.ends, retire: x.retire, when: plMonth(Math.min(...Object.values(x.phases).map((r) => r[0]))) + " – " + plMonth(Math.max(...Object.values(x.phases).map((r) => r[1]))), ph: Object.entries(x.phases).map(([k, r]) => PL_PH[k][0] + " " + (r[0] === r[1] ? "M" + r[0] : "M" + r[0] + "–" + r[1])).join(" · "), retMonth: x.retire ? plMonth(x.retire) : "" })))};
  function paintPlan(name){
    var x=PLAN.filter(function(p){return p.n===name;})[0]||PLAN[0];
    function set(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
    set('planName',x.n);set('planWhen',x.when);set('planNote',x.note);set('planPhases',x.ph);
    set('planEnds',x.ends?x.ends+' — '+x.retMonth:'Nothing on its own. This one has to be live for the June cutover, and it retires as part of Daxko Operations.');
    var pe=document.getElementById('planEnds');if(pe)pe.style.color=x.ends?'var(--good)':'var(--muted)';
    document.querySelectorAll('[data-plan]').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-plan')===x.n);});
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-plan]');
    if(b)paintPlan(b.getAttribute('data-plan'));
  });
  paintPlan('Contracts and e-signature');
  var WAVES=${JSON.stringify(WAVES)};
  function paintWave(name){
    var w=WAVES.filter(function(x){return x.n===name;})[0]||WAVES[2];
    function set(id,v){var e=document.getElementById(id);if(e)e.textContent=v;}
    set('waveName',w.n);set('waveWhen',w.when);set('waveLive',w.live);set('waveDep',w.dep);
    set('waveRet',w.retires||'Nothing yet — this is build, not go-live.');
    var rw=document.getElementById('waveRet');if(rw)rw.style.color=w.retires?'var(--good)':'var(--muted)';
    document.querySelectorAll('[data-wave]').forEach(function(b){
      b.style.color=b.getAttribute('data-wave')===w.n?'var(--brass)':'var(--ink)';
    });
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-wave]');
    if(b)paintWave(b.getAttribute('data-wave'));
  });
  paintWave('Wave 1 — first go-live');
  var ts=document.getElementById('todaySpend'), so=document.getElementById('spendOut');
  var ARDN_YR=${yr1Run};
  if(ts&&so)ts.addEventListener('input',function(){
    var n=parseFloat(ts.value.replace(/[^0-9.]/g,''));
    if(!isFinite(n)||n<=0){so.textContent='Against '+ARDN_YR.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0})+' a year on Ardn.';so.style.color='var(--muted)';return;}
    var d=n-ARDN_YR, pct=Math.round(Math.abs(d)/n*100);
    var f=function(x){return x.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});};
    so.textContent=d>0?(f(d)+' less a year on Ardn — '+pct+'% of what you spend now.'):(f(-d)+' more a year, before anything retires.');
    so.style.color=d>0?'var(--good)':'var(--sand)';
  });
  function fromHash(){show((location.hash||'#home').slice(1));}
  window.addEventListener('hashchange',fromHash);
  fromHash();
  paint(SYS[0].n);
  /* The sidebar: an icon rail that opens on hover and
     pushes the page over, keeps itself open for keyboard focus, folds back
     after a beat, and becomes a drawer with its own button on a phone. */
  var px=document.getElementById('px'), side=document.getElementById('side'), mb=document.getElementById('menuBtn');
  if(px&&side){
    var phone=function(){return matchMedia('(max-width:760px)').matches;};
    var t=0, over=false;
    var open=function(on){
      clearTimeout(t);
      if(phone()||px.classList.contains('sopen')===on)return;
      px.classList.toggle('sopen',on);
    };
    var kbIn=function(){
      return side.contains(document.activeElement)&&document.activeElement.matches&&document.activeElement.matches(':focus-visible');
    };
    var later=function(){clearTimeout(t);t=setTimeout(function(){if(!over&&!kbIn())open(false);},300);};
    side.addEventListener('pointerenter',function(e){if(e.pointerType==='touch')return;over=true;clearTimeout(t);open(true);});
    side.addEventListener('pointerleave',function(e){if(e.pointerType==='touch')return;over=false;later();});
    side.addEventListener('focusin',function(){if(kbIn())open(true);});
    side.addEventListener('focusout',function(e){if(!side.contains(e.relatedTarget))later();});
    document.addEventListener('keydown',function(e){
      if(e.key!=='Escape')return;
      if(px.classList.contains('menuopen')){closeMenu();if(mb)mb.focus();return;}
      if(!px.classList.contains('sopen'))return;
      if(side.contains(document.activeElement)&&document.activeElement.blur)document.activeElement.blur();
      over=false;open(false);
    });
    document.addEventListener('pointerdown',function(e){
      if(e.pointerType==='touch'){ if(side.contains(e.target))open(true); else open(false); return; }
      if(px.classList.contains('menuopen')&&!e.target.closest('#side'))closeMenu();
    });
    var closeMenu=function(){px.classList.remove('menuopen');if(mb)mb.setAttribute('aria-expanded','false');};
    if(mb)mb.addEventListener('click',function(){
      var o=px.classList.toggle('menuopen');
      mb.setAttribute('aria-expanded',o?'true':'false');
    });
    var tabsEl=document.getElementById('tabs');
    if(tabsEl)tabsEl.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu();});
  }
})();
</script>
`;

fs.writeFileSync(dir + "ymca-st-pete.html", body);
console.log("ymca-st-pete.html", body.length, "bytes ·", SYS.length, "systems ·", JSON.stringify(TALLY), "· Day1", JSON.stringify(d1Fit));
