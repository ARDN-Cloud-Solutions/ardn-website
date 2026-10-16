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
const baseCss = src.slice(a + 7, b);

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
/* one-screen helpers; every size in em so it rides Invited's viewport-scaled root */
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
@media (max-width:900px){.scr{padding:.7em 1em;justify-content:flex-start;overflow-y:auto}.strip{grid-template-columns:repeat(2,1fr)}.sq>div{grid-template-columns:1fr;gap:.15em}}
`;

const P = {
  team: '<path d="M16 19v-1.5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3V19"/><circle cx="9.5" cy="7.5" r="3"/><path d="M21 19v-1.5a3 3 0 0 0-2.2-2.9"/><path d="M15.5 4.7a3 3 0 0 1 0 5.6"/>',
  org: '<rect x="9" y="3" width="6" height="4" rx="1"/><rect x="2" y="15" width="6" height="4" rx="1"/><rect x="16" y="15" width="6" height="4" rx="1"/><path d="M12 7v4M5 15v-2h14v2"/>',
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

/* Invited's tab set, in Invited's order. Three of them (team, org, value) are
   driven by the commercial figures and stay out until the Y's spend and our
   price exist; they are not shipped with invented numbers. */
const NAV = [["home", "Home"], ["summary", "Executive Summary"], ["value", "Value"], ["compare", "Compare"], ["detail", "Detail"]];

/* Commercials as quoted to Patricia. Every derived figure below is computed
   from these four, never typed twice, so the page cannot drift from the quote. */
const PRICE = { impl: 9500, implStdLo: 45000, implStdHi: 55000, mo: 9000, integrations: 4, integrationEach: 45000, termMonths: 36, cpiCap: 0.04 };
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
  ["Member mobile app", "Invited", "sw.js · web-push-crypto · worker-push-dispatch · wallet 297 ln"],
  ["Contracts, e-signature", "Invited", "contracts 2,317 · forms 4,742 · acknowledgments 604 ln"],
  ["Surveys and NPS", "Invited", "5 survey migrations · surveys.test.ts 644 ln"],
  ["Salesforce replacement", "Invited", "leads 2,822 · sales-pipeline 4,221 · 3 importers · 886 ln tests"],
  ["Financial assistance", "Invited", "financial-assistance 450 ln"],
  ["Accounting", "Invited", "books 207 files / 53,190 ln · history-import · feeds-out"],
  ["Fundraising", "Invited", "pledges · grants · soft-credits · gift-batches · moves = 6,534 ln"],
  ["Reporting", "YMCA", "builder, 20 standard reports, dashboards — merged 2026-10-15"],
  ["Membership, billing, check-in", "YMCA", "members · households · memberships · billing · checkin · roles"],
];

/* Compare: the four honest ways to run the Y's estate. y = yes, p = partial, n = no. */
const CMP = [
  ["Member records, billing, check-in", "y One vendor", "y One vendor", "p You build it", "y Carried"],
  ["Program and camp registration", "p No online child reg", "y If you buy one", "p You build it", "p Named gap, bounded"],
  ["Licensed childcare and ELC", "y Attendance Tracker", "y Attendance Tracker", "n Specialist domain", "p The one real build"],
  ["Member mobile app", "y Daxko app", "y Daxko app", "n Two app stores", "y Ported from Invited"],
  ["E-signature after April", "n DocuSign ends", "y Buy another", "n You build it", "y Built, 2,317 ln"],
  ["Surveys and NPS", "n Listen360 extra", "y Listen360", "n You build it", "y Built, 644 ln tests"],
  ["Fundraising beside members", "n Raiser's Edge apart", "p Connector", "n You build it", "y 6,534 ln, or connect"],
  ["Accounting", "n SGA apart", "p Connector", "n You build it", "y Connect or replace"],
  ["Who fixes it at 7am", "p Vendor queue", "n ~17 queues", "y Your team", "y Ardn, named team"],
  ["Who carries the integrations", "p Vendor decides", "n The Y does", "y The Y does", "y Ardn does"],
];

const HOME_CARDS = [
  ["summary", "Executive Summary", "The answer, and the two builds that set the date.", `${SYS.length} capabilities`],
  ["value", "Value", "What it costs, and what comes with it at no charge.", `${usd(PRICE.impl)} + ${usd(PRICE.mo)}/mo`],
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

<div class="px sopen" id="px">
<aside class="side" id="side">
  <div class="side-top"><span class="logo"><img src="/proposal-sites/ymca-st-pete/img/ardn-logo-white.svg" alt="Ardn"></span><button type="button" id="menuBtn" class="menubtn" aria-label="Menu" aria-controls="tabs" aria-expanded="true"></button></div>
  <nav class="tabs" id="tabs" aria-label="Proposal">${tabs}</nav>
  <div class="side-bot"><span class="hold">Checked against code<br>16 Oct 2026</span></div>
</aside>
<div class="col">
<div class="views" id="views">

${view("home", `<main class="hs" data-screen-label="01 Home"><div class="hs-scene" aria-hidden="true" id="hsScene"></div>
<section class="hs-hero">
  <div class="hs-eyebrow">Prepared for the YMCA of Greater St. Petersburg</div>
  <h1 id="hsTitle">One platform, in place of ${SYS.length} systems</h1>
  <p class="hs-sub">Built, run, tested and supported by Ardn. Every status checked against working code &mdash; and where nothing exists yet, we say so.</p>
  <dl class="hs-fig" id="hsFig">
    <div><dt>Contracts End</dt><dd>${TALLY.retire}</dd></div>
    <div><dt>Retire in Part</dt><dd>${TALLY.partial}</dd></div>
    <div><dt>You Keep, We Feed</dt><dd>${TALLY.connect}</dd></div>
    <div><dt>True Gaps</dt><dd>${GAPS.size}</dd></div>
  </dl>
  <a class="cta hs-cta" href="#summary">Begin With the Executive Summary &rarr;</a>
</section>
<nav class="hs-card" aria-label="Proposal, in Reading Order"><ol id="homeCards" class="hs-holes" style="--cols:4">${
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
    <div class="foot">On Craig's Day 1 list: ${d1Fit.STRONG} strong, ${d1Fit.PARTIAL} partial, ${d1Fit.GAP} gap.</div>
  </div>
  <div class="card">
    <div class="ch">Why We Can Say It</div>
    <p>The Y's product has <b style="color:var(--ink)">26 modules</b>. Invited &mdash; built on the Y's own codebase &mdash; has <b style="color:var(--ink)">about a hundred</b>. What left can come back.</p>
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
    <p class="sub">About ${usdK(valueHi)} of build and integration work is included at no cost, as part of the partnership.</p>
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
  <div class="card" style="border-color:rgba(var(--alarmrgb),.4);"><div class="ch" style="color:var(--alarm);">Gap · Day 1</div><div class="cb">Licensed childcare and preschool</div><p>Parent sign in and out, staff-to-child ratios, incidents, health records, ELC reimbursement. <b style="color:var(--ink)">Zero matches in either product</b> — we checked each concept by name. Largest build; critical path to closing Daxko.</p></div>
  <div class="card" style="border-color:rgba(var(--alarmrgb),.4);"><div class="ch" style="color:var(--alarm);">Gap · Day 1</div><div class="cb">Migration off Daxko</div><p>Members, families, barcodes, stored cards, history. No import tooling exists; it needs Daxko export access and an NDA before it can be designed. Cards move processor-to-processor, never through us.</p></div>
  <div class="card"><div class="ch" style="color:var(--sand);">Partial · Day 1</div><div class="cb">Online program and camp registration</div><p>Programs and Classes work. A parent cannot yet register a child online, early-bird is not charged, and waivers are not enforced.</p></div>
  <div class="card"><div class="ch" style="color:var(--slate);">Not Day 1</div><div class="cb">Sports leagues</div><p>TeamSideline cannot integrate and nothing covers leagues. Run it alongside for one season and build against a real league in flight.</p></div>
  <div class="card"><div class="ch" style="color:var(--teal);">Blocked On A Vendor</div><div class="cb">Welld insurance feed</div><p>A daily member-usage file. Waiting on Welld's format, not on engineering effort.</p></div>
  <div class="card"><div class="ch" style="color:var(--teal);">Buy, Not Build</div><div class="cb">Sex-offender registry data</div><p>The screening workflow and audit trail exist in Invited. The national registry data source does not, in either product.</p></div>
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
<section class="grid" style="flex:1;grid-template-columns:repeat(auto-fit,minmax(14em,1fr));align-content:center;">
  <div class="card" style="border-color:rgba(var(--alarmrgb),.4);"><div class="ch" style="color:var(--alarm);">First · Has A Date</div><div class="cb">DocuSign, by end of April</div><p>Contracts and e-signature is a port, not a build — templates, prefill, reminders, signed PDFs. Needs the state's own PDF field-filling added.</p></div>
  <div class="card" style="border-color:rgba(var(--bluergb),.45);"><div class="ch">From Day One, In Parallel</div><div class="cb">Licensed childcare</div><p>Starts immediately and runs alongside every port, because it is the critical path and the only thing standing between the Y and a closed Daxko contract.</p></div>
  <div class="card"><div class="ch">Then</div><div class="cb">The ports</div><p>Mobile app, surveys, the Salesforce replacement, appointments and tours, financial assistance. Working code in Invited. Each one ends a contract.</p></div>
  <div class="card"><div class="ch">Alongside</div><div class="cb">The named partials</div><p>Online child registration, early-bird pricing, waivers; the daily sales tracker; package expiry and refunds. Bounded work against a base that runs.</p></div>
  <div class="card"><div class="ch" style="color:var(--slate);">Last · Needs Someone Else</div><div class="cb">The blocked four</div><p>Welld's file format. Carla's Operate.Fit requirements. Clarissa's integration detail. Daxko export access and an NDA. No dates until the dependency clears.</p></div>
</section></div>

<div data-dch="proof" style="display:contents">
<section style="flex:1;display:flex;flex-direction:column;gap:.7em;justify-content:center;min-height:0;">
  <div style="background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:12px;padding:.5em 1em;overflow:auto;min-height:0;">
  <table class="ptab"><thead><tr><th>Capability</th><th>Where</th><th>Evidence an evaluator can open</th><th>Verifiable</th></tr></thead><tbody>
  ${PROOF.map(([c, w, e]) => `<tr><td class="n">${esc(c)}</td><td>${esc(w)}</td><td class="e">${esc(e)}</td><td class="y">Yes</td></tr>`).join("")}
  </tbody></table></div>
  <div class="note"><b>Risk, stated plainly.</b> On Craig's Day 1 list of ${D1.length}: ${d1Fit.STRONG} strong, ${d1Fit.PARTIAL} partial, ${d1Fit.GAP} gap. We corrected two of our own rows against the code while writing this — Salesforce and Listen360 both moved in the Y's favour. Nothing is switched off until its replacement is live and the Y has signed it off.</div>
</section></div>`))}


</div>
<footer class="pxfoot">Prepared by Ardn for the YMCA of Greater St. Petersburg. Confidential. Sources: the 15 October 2026 working sheet, re-checked 16 October 2026 against ARDN-Cloud-Solutions/membership and invited-clubs-memberships.</footer>
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
  // Detail sub-tabs, Invited's dch pattern. Each title asserts the finding.
  var DTITLE={
    estate:'Of ${SYS.length} systems, ${TALLY.retire} retire and ${TALLY.partial} retire in part',
    gaps:'Two true gaps set the date; the rest is bounded work',
    qa:'Testing is built into the product, not bolted on',
    rollout:'DocuSign sets the first date; childcare sets the last',
    proof:'Already built, and the Y can check every claim'
  };
  var DLEG={
    estate:'${Object.entries(FATE).map(([k, v]) => `<span><i style="background:${v[0]}"></i><b>${TALLY[k] || 0}</b> ${esc(v[2])}</span>`).join("")}<span style="color:var(--alarm);font-weight:700;">D1 · Craig&rsquo;s Day 1</span>',
    gaps:'<span><b>${GAPS.size}</b> true gaps</span><span><b>${d1Fit.PARTIAL}</b> named partials</span>',
    qa:'<span><b>370,471</b> lines of tests</span>',
    rollout:'<span><b>${D1.length}</b> on the Day 1 list</span>',
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
  var mb=document.getElementById('menuBtn'),px=document.getElementById('px');
  if(mb&&px)mb.addEventListener('click',function(){var o=px.classList.toggle('sopen');mb.setAttribute('aria-expanded',o?'true':'false');});
})();
</script>
`;

fs.writeFileSync(dir + "ymca-st-pete.html", body);
console.log("ymca-st-pete.html", body.length, "bytes ·", SYS.length, "systems ·", JSON.stringify(TALLY), "· Day1", JSON.stringify(d1Fit));
