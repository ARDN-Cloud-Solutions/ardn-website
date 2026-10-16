/* Builds ymca-st-pete.html.
 *
 * The formatting is not re-invented here. The stylesheet is lifted verbatim
 * from invited-clubs.html (the <style> block, lines 7-455) so the two
 * proposals are the same page with different contents, and only the brand
 * tokens are redefined underneath it. If the Invited stylesheet moves, this
 * script finds it by its markers rather than by line number.
 *
 * Run: node src/content/proposals/sites/ymca-st-pete.build.mjs
 * Then: node src/content/proposals/sites/build.mjs ymca-st-pete
 */
import fs from "node:fs";
import { SYS, AREAS, FATE, TALLY, D1 } from "./ymca-st-pete.data.js";

const dir = new URL(".", import.meta.url).pathname;
const src = fs.readFileSync(dir + "invited-clubs.html", "utf8");

// Lift the stylesheet by marker, not by line number.
const a = src.indexOf("<style>"), b = src.indexOf("</style>");
if (a < 0 || b < 0) throw new Error("invited-clubs.html: no <style> block to inherit");
const baseCss = src.slice(a + 7, b);

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* The Y's colours over Invited's structure. Only tokens change; every rule in
   the inherited stylesheet is written against these, so nothing else moves. */
const brand = `
:root{
  --ink:#12284C; --soft:#23395F; --muted:#5B6880;
  --brass:#0071CE; --brass2:#00457C; --gold:#92278F; --sand:#B07A1E; --teal:#007398;
  --slate:#6B7280; --alarm:#E4002B; --good:#00A94F;
  --goldrgb:146,39,143; --bluergb:0,113,206; --alarmrgb:228,0,43; --slatergb:107,114,128; --goodrgb:0,169,79;
  --fgrgb:18,40,76;
  --navy:#12284C; --indigo:#00457C; --violet:#92278F;
  --bar-today:#C9D2E2; --bar-a:#12284C; --bar-b:#0071CE;
}
.side,#v-admin{
  --ink:#F2F6FC; --soft:#DCE6F5; --muted:#9BA8BF;
  --night:#12284C; --deep:#1B355E; --raise:#234373; --field:#12284C;
  --brass:#7FB9F0; --brass2:#A9D2F7; --gold:#D9A6D7; --sand:#E0BE7A; --teal:#5FC2DE;
  --fgrgb:242,246,252;
}
/* the estate table, the one piece Invited draws with script and we draw in markup */
.es{display:grid;gap:.5em}
.es-area{font-size:max(13px,.74em);letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:700;margin:.5em 0 .1em}
.es-row{display:grid;grid-template-columns:minmax(10em,1.1fr) 7.2em minmax(12em,1.4fr) minmax(12em,1.6fr);gap:.2em .9em;align-items:start;padding:.5em .7em;border:1px solid rgba(var(--fgrgb),.12);border-radius:9px;background:var(--deep)}
.es-row b{font-weight:600;color:var(--ink);font-size:max(14px,.92em)}
.es-row small{display:block;color:var(--muted);font-size:max(12px,.78em);line-height:1.35;margin-top:.15em}
.es-f{font-size:max(12px,.72em);font-weight:700;letter-spacing:.07em;text-transform:uppercase;padding:.18em .55em;border-radius:999px;border:1px solid;white-space:nowrap;justify-self:start}
.es-t{color:var(--soft);font-size:max(13px,.85em)}
.es-o{color:var(--ink);font-size:max(13px,.85em)}
.es-why{grid-column:1/-1;margin-top:.3em;padding-top:.35em;border-top:1px dashed rgba(var(--fgrgb),.16);color:var(--soft);font-size:max(13px,.83em)}
.es-why b{color:var(--teal);font-weight:700;font-size:max(12px,.74em);letter-spacing:.1em;text-transform:uppercase;display:block;margin-bottom:.1em}
.d1{display:inline-block;margin-left:.45em;font-size:max(11px,.64em);font-weight:700;letter-spacing:.08em;color:var(--alarm);border:1px solid var(--alarm);border-radius:999px;padding:.05em .4em;vertical-align:.15em}
@media (max-width:860px){.es-row{grid-template-columns:1fr;gap:.3em}.es-f{justify-self:start}}
.kpi{display:grid;grid-template-columns:repeat(auto-fit,minmax(9em,1fr));gap:.7em}
.kpi>div{background:var(--deep);border:1px solid rgba(var(--fgrgb),.13);border-radius:11px;padding:.7em .9em}
.kpi b{display:block;font:500 2em/1.05 'Source Serif 4',Georgia,serif;color:var(--ink)}
.kpi span{display:block;font-size:max(13px,.8em);color:var(--muted);margin-top:.2em}
.wrap{max-width:74em;margin:0 auto;padding:1.4em clamp(1em,3vw,2.6em) 3em;display:flex;flex-direction:column;gap:1em}
.lede{font-size:max(15px,1.05em);color:var(--soft);line-height:1.5;max-width:46em}
.note{background:rgba(var(--goldrgb),.07);border-left:3px solid var(--gold);border-radius:0 9px 9px 0;padding:.7em 1em;color:var(--soft);font-size:max(14px,.92em);line-height:1.5}
`;

const fateStyle = (f) => `border-color:${FATE[f][0]};color:${FATE[f][0]};background:${FATE[f][1]}`;

const estate = AREAS.map((area) => {
  const rows = SYS.filter((r) => r[1] === area);
  if (!rows.length) return "";
  return `<div class="es-area">${esc(area)} · ${rows.length}</div>` + rows.map((r) => {
    const [name, , fate, d1, today, ours, why] = r;
    return `<div class="es-row">
<div><b>${esc(name)}</b>${d1 ? '<span class="d1">DAY 1</span>' : ""}</div>
<div class="es-f" style="${fateStyle(fate)}">${esc(FATE[fate][2])}</div>
<div class="es-t"><small style="margin:0 0 .2em">Today</small>${esc(today)}</div>
<div class="es-o"><small style="margin:0 0 .2em">On Ardn</small>${esc(ours)}</div>
${why ? `<div class="es-why"><b>What this depends on</b>${esc(why)}</div>` : ""}
</div>`;
  }).join("");
}).join("");

const navItems = [
  ["home", "Home"],
  ["summary", "Executive Summary"],
  ["estate", "Your Systems"],
  ["build", "What We Build"],
  ["plan", "Plan"],
];

const tabs = navItems.map(([id, label]) => `<a href="#${id}"><span class="ic"></span><span class="lbl">${esc(label)}</span></a>`).join("");

/* The reading-order cards on the Home screen, mirroring Invited's. */
const HOME_CARDS = [
  ["summary", "Executive Summary", "What we found, and the two places the 15 October sheet has moved on.", `${SYS.length} capabilities reviewed`],
  ["estate", "Your Systems", "Every system, what happens to it, and what that depends on.", `${TALLY.retire} retire · ${TALLY.partial} in part`],
  ["build", "What We Build", "The genuine gaps, named. They set the schedule.", "6 build items"],
  ["plan", "Plan", "What moves first, what waits, and on whom.", "DocuSign ends in April"],
];

const view = (id, inner) => `<div class="view" id="v-${id}" data-view="${id}" data-tab="${id}" hidden>${inner}</div>`;

const body = `
<title>Ardn for the YMCA of Greater St. Petersburg</title>
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Ardn's proposal to the YMCA of Greater St. Petersburg: one membership platform in place of the systems the Y runs today.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${baseCss}${brand}</style>

<div class="px" id="px">
<aside class="side" id="side">
  <div class="side-top"><span class="logo"><img src="/proposal-sites/ymca-st-pete/img/ardn-logo-white.svg" alt="Ardn"></span><button type="button" id="menuBtn" class="menubtn" aria-label="Menu" aria-controls="tabs" aria-expanded="false"></button></div>
  <nav class="tabs" id="tabs" aria-label="Proposal">${tabs}</nav>
  <div class="side-bot"><span class="hold">Checked against the code on 16 October 2026</span></div>
</aside>
<div class="col">
<div class="views" id="views">

${view("home", `<main class="hs" data-screen-label="01 Home"><div class="hs-scene" aria-hidden="true" id="hsScene"></div>
<section class="hs-hero">
  <div class="hs-eyebrow">Prepared for the YMCA of Greater St. Petersburg</div>
  <h1 id="hsTitle">One platform, in place of ${SYS.length} systems</h1>
  <p class="hs-sub">Built, run, tested and supported by Ardn. Checked against working code, not a roadmap.</p>
  <dl class="hs-fig" id="hsFig">
    <div><dt>Contracts End</dt><dd>${TALLY.retire}</dd></div>
    <div><dt>Retire in Part</dt><dd>${TALLY.partial}</dd></div>
    <div><dt>You Keep, We Feed</dt><dd>${TALLY.connect}</dd></div>
    <div><dt>On the Day 1 List</dt><dd>${D1.length}</dd></div>
  </dl>
  <a class="cta hs-cta" href="#summary">Begin With the Executive Summary &rarr;</a>
</section>
<nav class="hs-card" aria-label="Proposal, in Reading Order"><ol id="homeCards" class="hs-holes" style="--cols:2">${
  HOME_CARDS.map(([k, name, line, fig], i) => `<li class="hs-hole" style="--h:${i}"><a class="hs-link" href="#${k}" aria-label="${esc(name)}"></a><span class="hs-no" aria-hidden="true">${i + 1}</span><span class="hs-name">${esc(name)}</span><span class="hs-line">${esc(line)}</span><span class="hs-figure">${esc(fig)}</span></li>`).join("")
}</ol></nav></main>`)}

${view("summary", `<div class="wrap">
<h1 class="xh1">What this proposal says</h1>
<p class="lede">The Y runs ${SYS.length} distinct capabilities across about seventeen vendors. We went through every one of them against two codebases we already own, and the answer is not uniform — so this proposal does not pretend it is.</p>

<div class="kpi">
  <div><b>${TALLY.retire}</b><span>systems retire outright</span></div>
  <div><b>${TALLY.partial}</b><span>retire in part</span></div>
  <div><b>${TALLY.connect}</b><span>the Y keeps, we connect</span></div>
  <div><b>${TALLY.keep}</b><span>the Y keeps, untouched</span></div>
</div>

<h2 class="xh2">Why we can say this with confidence</h2>
<p class="lede">Ardn has two membership products. The YMCA product has ${"26"} feature modules. The Invited Clubs product — which was built on the YMCA codebase — has around a hundred. Everything Invited has can come back the way it went out.</p>
<p class="lede">So the question for each row was not &ldquo;could we build this?&rdquo; but &ldquo;is it already built, and where?&rdquo; Every claim below is tied to a file count and a line count in one of those two repositories. Where nothing exists in either, the row says so.</p>

<div class="note"><b>Two things on the 15 October sheet have moved.</b> Salesforce was listed as needing a lead importer — Invited has three working Salesforce importers with 886 lines of tests behind them. Listen360 was listed as a port — Invited's survey engine is further along than that, with five shipped survey types and a 644-line test suite. Both are now straight retires.</p></div>

<h2 class="xh2">The one thing that sets the date</h2>
<p class="lede">Licensed childcare is the largest build in the programme, and it is the only reason the Daxko contract cannot close completely. We checked both codebases for staff-to-child ratios, licensing packets, classroom ratios and school-readiness reporting. There were zero matches in either product. That is net-new work and it is the critical path — everything else on the Day 1 list is a port, a connector, or a gap measured in weeks.</p>

<h2 class="xh2">What we are not claiming</h2>
<p class="lede">Four things are genuinely absent from both products and are named as such: licensed childcare, sports leagues, the Welld insurance feed, and migration tooling to get data off Daxko. A fifth — national sex-offender registry data — is a vendor feed to buy, not code to write. None of these are hidden in a footnote; they each have a row.</p>
</div>`)}

${view("estate", `<div class="wrap">
<h1 class="xh1">Your systems, one by one</h1>
<p class="lede">Every capability the Y uses today, what happens to it, and what it depends on. <b>Day 1</b> marks Craig's list.</p>
<div style="display:flex;flex-wrap:wrap;gap:.4em 1.2em;font-size:max(13px,.86em);align-items:center;margin:.2em 0 .4em">
${Object.entries(FATE).map(([k, v]) => `<span style="display:flex;align-items:center;gap:.4em"><i style="width:.8em;height:.8em;border-radius:2px;background:${v[0]}"></i><b style="color:var(--ink)">${TALLY[k] || 0}</b> ${esc(v[2])}</span>`).join("")}
</div>
<div class="es">${estate}</div>
<div class="note" style="margin-top:1em">No system is switched off until everything that depends on it is live, and the Y's data is archived first.</div>
</div>`)}

${view("build", `<div class="wrap">
<h1 class="xh1">What has to be built</h1>
<p class="lede">These are the gaps. They are listed first because they set the schedule, and because a proposal that buries them is not worth reading.</p>

<h2 class="xh2">1. Licensed childcare and preschool <span class="d1">DAY 1</span></h2>
<p class="lede">Parent sign in and out, staff-to-child ratios, incident records, health records, and ELC reimbursement reporting. Nothing exists in either product — we checked for each of those concepts by name and found zero matches. This is the largest single build and the critical path to closing Daxko.</p>

<h2 class="xh2">2. Migration off Daxko <span class="d1">DAY 1</span></h2>
<p class="lede">Members, families, barcodes, stored cards and history. No import tooling exists yet; it needs Daxko export access and an NDA before it can even be designed. Stored cards move processor-to-processor and never pass through us.</p>

<h2 class="xh2">3. Online program and camp registration <span class="d1">DAY 1</span></h2>
<p class="lede">A parent cannot yet register a child online, early-bird pricing is not charged, and waivers are not enforced. Programs and Classes exist; these three behaviours do not.</p>

<h2 class="xh2">4. Sports leagues</h2>
<p class="lede">TeamSideline cannot integrate, and nothing in either product covers leagues. Buildable for what the Y actually uses — but run TeamSideline alongside for one season rather than racing it.</p>

<h2 class="xh2">5. The Welld insurance feed</h2>
<p class="lede">A daily member-usage file. Blocked on Welld publishing its format, not on engineering effort.</p>

<h2 class="xh2">6. Sex-offender registry data</h2>
<p class="lede">The screening workflow and its audit trail exist in Invited. The national registry data source does not, in either product. That is a feed to buy.</p>

<div class="note">Three further items are small but real: the daily sales-and-joins tracker Craig keeps in Excel, corporate-partner discounts and promo codes, and PT package expiry, refunds and balances.</div>
</div>`)}

${view("plan", `<div class="wrap">
<h1 class="xh1">How this runs</h1>
<p class="lede">Nothing is switched off before its replacement is live and the Y has signed off on it. The order below follows what blocks what, not what is easiest to show.</p>

<h2 class="xh2">What moves first, because it has a date on it</h2>
<p class="lede"><b>DocuSign ends at the end of April.</b> Invited's contracts and e-signature — templates, prefill, reminders, signed PDFs — is a port, not a build. It needs the state's own PDF field-filling added. This is the one item with an external deadline, so it goes first.</p>

<h2 class="xh2">Then the ports, because they are already written</h2>
<p class="lede">The member mobile app, surveys, Salesforce replacement, appointments and tours, and financial assistance are all working code in Invited. These come back across in the order the Y wants them, and each one ends a contract.</p>

<h2 class="xh2">In parallel, the long build</h2>
<p class="lede">Licensed childcare starts on day one and runs alongside everything else, because it is the critical path and it is the only thing standing between the Y and a closed Daxko contract.</p>

<h2 class="xh2">Last, the things that need someone else first</h2>
<p class="lede">The Welld feed waits on Welld's file format. Operate.Fit waits on Carla's requirements. Clarissa waits on the vendor's integration detail. Daxko migration waits on export access and an NDA. We will not promise dates on these until the dependency clears, and we will say which ones are waiting at every check-in.</p>

<div class="note"><b>Still open, and they are the Y's calls.</b> Which 19 reports the Y actually needs. Whether the website moves off Accrisoft — Susie's decision. Whether Raiser's Edge stays connected or is replaced by Invited's fundraising suite once the Y has seen it. Whether SGA stays as the accounting system of record.</div>
</div>`)}

</div>
<footer class="pxfoot">Prepared by Ardn for the YMCA of Greater St. Petersburg. Confidential. Every status in this document was checked against working code on 16 October 2026.</footer>
</div>
</div>

<script>
(function(){
  var views=${JSON.stringify(navItems.map((n) => n[0]))};
  function show(id){
    if(views.indexOf(id)<0)id=views[0];
    views.forEach(function(v){var el=document.getElementById('v-'+v);if(el)el.hidden=(v!==id);});
    document.querySelectorAll('#tabs a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+id);});
    try{window.scrollTo(0,0);}catch(e){}
  }
  function fromHash(){show((location.hash||'#home').slice(1));}
  window.addEventListener('hashchange',fromHash);
  fromHash();
  var mb=document.getElementById('menuBtn'),px=document.getElementById('px');
  if(mb&&px)mb.addEventListener('click',function(){var o=px.classList.toggle('sopen');mb.setAttribute('aria-expanded',o?'true':'false');});
  var side=document.getElementById('side');
  if(side&&px){side.addEventListener('mouseenter',function(){px.classList.add('sopen');});side.addEventListener('mouseleave',function(){px.classList.remove('sopen');});}
})();
</script>
`;

fs.writeFileSync(dir + "ymca-st-pete.html", body);
console.log("ymca-st-pete.html", body.length, "bytes ·", SYS.length, "systems ·", JSON.stringify(TALLY));
