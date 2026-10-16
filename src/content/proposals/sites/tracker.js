/* Ardn proposal tracking for a full proposal site: views, sections, time,
   every input on the page as it changes, and Export to PDF. */
(function () {
  var slug = window.__PROPOSAL_SLUG__, started = Date.now(), lastSent = "", timer = null;
  function send(type, data, beacon) {
    var body = JSON.stringify({ slug: slug, type: type, page: "site", data: data || null });
    if (beacon && navigator.sendBeacon) { navigator.sendBeacon("/api/proposals/track", new Blob([body], { type: "application/json" })); return; }
    fetch("/api/proposals/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: body, keepalive: true }).catch(function () {});
  }
  function txt(el) { return el ? (el.innerText || el.textContent || "") : ""; }
  function clean(t) { return String(t || "").replace(/\s+/g, " ").trim().slice(0, 90); }
  function human(id) { return clean(String(id).replace(/([a-z])([A-Z0-9])/g, "$1 $2").replace(/[-_]+/g, " ")); }
  function labelFor(el) {
    var t = el.getAttribute("aria-label");
    if (!t && el.id) { var l = document.querySelector('label[for="' + el.id + '"]'); if (l) t = txt(l); }
    if (!t && el.closest("label")) t = txt(el.closest("label"));
    if (!t) { var row = el.closest("tr,li,.row,.field,div"); if (row) t = txt(row); }
    return clean(t) || human(el.id || el.name || "Input");
  }
  function visible(el) { return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length); }
  function snap() {
    var inputs = {};
    document.querySelectorAll("input,select,textarea").forEach(function (el, i) {
      if (el.type === "hidden" || el.closest(".ardn-track-ui")) return;
      var key = el.id || el.name || "i" + i, v;
      if (el.type === "checkbox") {
        var al = el.getAttribute("aria-label") || "";
        if (/^Retire /.test(al)) { inputs[key] = { label: clean(al.slice(7)) + ": retire or keep", value: el.checked ? "Retire" : "Keep" }; return; }
        v = el.checked ? "On" : "Off";
      }
      else if (el.type === "radio") { if (!el.checked) return; key = el.name || key; v = clean(labelFor(el)) || el.value; }
      else if (el.tagName === "SELECT") v = el.selectedIndex >= 0 ? clean(el.options[el.selectedIndex].text) : "";
      else v = el.value === "" ? "blank" : el.value;
      inputs[key] = { label: labelFor(el), value: String(v) };
    });
    return { inputs: inputs, report: report() };
  }
  function queue() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      var s = snap(), j = JSON.stringify(s.inputs);
      if (j === lastSent) return;
      lastSent = j;
      send("state", s);
    }, 1200);
  }

  // ── The report: the calculator as the visitor left it, current cost next to Club Steward ──
  function q(sel, root) { return (root || document).querySelector(sel); }
  function cell(el) {
    if (!el) return "";
    var i = el.querySelector("input:not([type=checkbox])");
    if (i) return clean(i.value) || "";
    return clean(txt(el)).replace(/^—$/, "");
  }
  function withValues(el) {
    if (!el) return "";
    var c = el.cloneNode(true), src = el.querySelectorAll("input");
    c.querySelectorAll("input").forEach(function (x, k) { x.replaceWith(document.createTextNode(src[k].value)); });
    return clean(c.textContent).replace(/\s+·/g, " ·");
  }
  function report() {
    var body = q("#ctBody"); if (!body) return null;
    var groups = [], g = null;
    Array.prototype.forEach.call(body.children, function (el) {
      if (el.classList.contains("ct-bucket")) {
        var h = q("h3", el);
        g = { name: clean(h && h.firstChild ? h.firstChild.textContent : ""), note: clean(txt(q("h3 small", el))), license: cell(q("[data-l=License]", el)), support: cell(q("[data-l=Support]", el)), total: cell(q("[data-l=Total]", el)), rows: [] };
        groups.push(g);
      } else if (el.classList.contains("ct-row") && g) {
        var nm = q(".ct-name > span:last-child", el), cb = q("input[type=checkbox]", el), qty = q('[data-l="How many"]', el), pc = q('[data-l="Cost per user a month"]', el);
        g.rows.push({
          name: clean(nm && nm.firstChild ? nm.firstChild.textContent : ""),
          detail: withValues(q("small", nm)),
          qty: qty ? clean((q("input", qty) || {}).value + " " + txt(q("small", qty))) : "",
          price: pc ? clean((q("input", pc) || {}).value + " " + txt(q("small", pc))) : "",
          license: cell(q("[data-l=License]", el)), support: cell(q("[data-l=Support]", el)), total: cell(q("[data-l=Total]", el)),
          decision: cb ? (cb.checked ? "Retire" : "Keep") : "",
        });
      }
    });
    var ba = [];
    document.querySelectorAll("#ba dt").forEach(function (dt) { ba.push([clean(dt.firstChild ? dt.firstChild.textContent : txt(dt)), clean(txt(q("small", dt))), clean(txt(dt.nextElementSibling))]); });
    var val = function (id) { var e = q("#" + id); return e ? clean(e.tagName === "INPUT" ? e.value : txt(e)) : ""; };
    return {
      title: val("calcTitle"),
      assumptions: [["Discount off list price", val("discOut")], ["Support per license dollar", val("multOut")]],
      groups: groups,
      totals: { license: val("tLic"), support: val("tSup"), total: val("tAll") },
      today: { gross: val("gross"), verdict: val("verdict"), perClub: val("perClub"), room: val("room"), roomPer: val("roomPer") },
      proposal: { fee: val("fee"), clubs: val("clubs"), net: val("net"), perClub: ba },
      p1: { today: val("p1Cost"), steward: val("p1UsCost") },
    };
  }
  window.__ardnReport = report;
  // The page reports video plays and the like through the same call.
  window.__ardnTrack = function (type, data) { send(type, data); };
  function esc(x) { return String(x == null ? "" : x).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function printHtml(r) {
    var d = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    var h = '<header><div class="pr-brand">Club Steward · prepared for Invited by Ardn</div><h1>Your figures, ' + esc(d) + '</h1><p class="pr-lede">' + esc(r.title) + '</p></header>';
    h += '<div class="pr-cards"><div class="pr-card"><span>Today, before Ardn’s fee</span><b>' + esc(r.today.gross) + '</b><small>a year taken out by retiring these systems</small></div>';
    h += '<div class="pr-card pr-cs"><span>Club Steward</span><b>' + esc(r.proposal.fee ? "$" + String(r.proposal.fee).replace(/^\$/, "") + " / club / month" : "Fee not entered") + '</b><small>' + esc(r.proposal.clubs) + ' clubs · ' + esc(r.proposal.net) + '</small></div></div>';
    if (r.proposal.perClub.length) h += '<table class="pr-ba">' + r.proposal.perClub.map(function (x) { return '<tr><th>' + esc(x[0]) + (x[1] ? '<small>' + esc(x[1]) + '</small>' : '') + '</th><td>' + esc(x[2]) + '</td></tr>'; }).join("") + '</table>';
    h += '<p class="pr-note">' + esc(r.today.verdict) + ' ' + esc(r.today.perClub) + '</p>';
    h += '<h2>Current cost, system by system</h2><p class="pr-note">' + r.assumptions.map(function (a) { return esc(a[0]) + ": <b>" + esc(a[1]) + "</b>"; }).join(" · ") + '</p>';
    h += '<table class="pr-t"><thead><tr><th>System</th><th>How many</th><th>Cost per user a month</th><th>License a year</th><th>Support a year</th><th>Total a year</th><th>Plan</th></tr></thead>';
    r.groups.forEach(function (g) {
      h += '<tbody><tr class="pr-g"><th colspan="3">' + esc(g.name) + '<small>' + esc(g.note) + '</small></th><td>' + esc(g.license) + '</td><td>' + esc(g.support) + '</td><td>' + esc(g.total) + '</td><td></td></tr>';
      h += g.rows.map(function (x) { return '<tr' + (x.decision === "Keep" ? ' class="pr-keep"' : '') + '><th>' + esc(x.name) + '<small>' + esc(x.detail) + '</small></th><td>' + esc(x.qty) + '</td><td>' + esc(x.price) + '</td><td>' + esc(x.license) + '</td><td>' + esc(x.support) + '</td><td>' + esc(x.total) + '</td><td>' + esc(x.decision) + '</td></tr>'; }).join("") + '</tbody>';
    });
    h += '<tfoot><tr><th colspan="3">Taken out each year, before Ardn’s fee</th><td>' + esc(r.totals.license) + '</td><td>' + esc(r.totals.support) + '</td><td>' + esc(r.totals.total) + '</td><td></td></tr></tfoot></table>';
    if (r.p1.today) h += '<h2>One critical defect (P1)</h2><table class="pr-ba"><tr><th>Today</th><td>' + esc(r.p1.today) + '</td></tr><tr><th>On Club Steward</th><td>' + esc(r.p1.steward) + '</td></tr></table>';
    h += '<footer>Prepared by Ardn for Invited. Confidential. Figures are public list prices, Invited’s own figures where entered, and labeled assumptions.</footer>';
    return h;
  }
  var pr = document.createElement("div"); pr.id = "ardnPrint"; pr.className = "ardn-track-ui-print";
  function preparePrint() { var r = report(); if (r) pr.innerHTML = printHtml(r); return r; }
  send("view");
  setTimeout(queue, 1500);
  ["input", "change", "click"].forEach(function (t) { document.addEventListener(t, queue, true); });
  var seen = {};
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { var id = e.target.id; if (e.isIntersecting && id && !seen[id]) { seen[id] = 1; send("section", { id: id }); } });
  }, { threshold: 0.35 });
  document.querySelectorAll("section[id]").forEach(function (el) { io.observe(el); });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
      var s = snap(); if (JSON.stringify(s.inputs) !== lastSent) { lastSent = JSON.stringify(s.inputs); send("state", s, true); }
      send("leave", { seconds: Math.round((Date.now() - started) / 1000) }, true);
    } else started = Date.now();
  });
  window.addEventListener("beforeprint", function () { preparePrint(); send("export", { states: { site: snap() } }); });
  var b = document.createElement("button");
  b.className = "ardn-track-ui"; b.type = "button"; b.textContent = "Export to PDF";
  b.setAttribute("style", "position:fixed;right:18px;bottom:18px;z-index:2147483000;background:#F6BD60;color:#08113B;border:0;border-radius:22px;padding:11px 20px;font:600 14px Manrope,system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.35);cursor:pointer");
  b.onclick = function () { preparePrint(); window.print(); };
  var st = document.createElement("style");
  st.textContent = "#ardnPrint{display:none}" +
    "@media print{@page{size:letter;margin:14mm 12mm}html,body{background:#fff!important;color:#0A0F2C!important}body>*:not(#ardnPrint){display:none!important}#ardnPrint{display:block!important;font:400 10.5px/1.45 Manrope,system-ui,sans-serif;color:#0A0F2C}" +
    "#ardnPrint h1{font:400 26px/1.15 'Instrument Serif',Georgia,serif;margin:2px 0 6px}#ardnPrint h2{font:600 13px/1.3 Manrope,sans-serif;margin:18px 0 6px;color:#0F206C;break-after:avoid}" +
    "#ardnPrint .pr-brand{font-size:10px;color:#3A4289;font-weight:600;letter-spacing:.02em}#ardnPrint .pr-lede{margin:0 0 12px;color:#4A5170;font-size:12px}" +
    "#ardnPrint .pr-cards{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 10px}#ardnPrint .pr-card{border:1px solid #D9DCE8;border-radius:8px;padding:10px 12px}#ardnPrint .pr-card span{display:block;font-size:10px;color:#4A5170;font-weight:600}#ardnPrint .pr-card b{display:block;font:400 22px/1.2 'Instrument Serif',Georgia,serif;margin:2px 0}#ardnPrint .pr-card small{color:#4A5170;font-size:9.5px}#ardnPrint .pr-cs{border-color:#F6BD60;background:#FFF8EC}" +
    "#ardnPrint table{width:100%;border-collapse:collapse}#ardnPrint th,#ardnPrint td{padding:4px 6px;border-bottom:1px solid #ECEEF4;vertical-align:top;text-align:right}#ardnPrint th{text-align:left;font-weight:600}#ardnPrint th small{display:block;font-weight:400;color:#6A7090;font-size:8.5px;line-height:1.3}" +
    "#ardnPrint thead th{font-size:9px;color:#4A5170;text-align:right;border-bottom:1.5px solid #0A0F2C}#ardnPrint thead th:first-child{text-align:left}#ardnPrint tr{break-inside:avoid}#ardnPrint .pr-g th,#ardnPrint .pr-g td{background:#F3F4F9;font-weight:700;padding-top:6px}#ardnPrint .pr-keep th,#ardnPrint .pr-keep td{color:#8A8FA8}" +
    "#ardnPrint tfoot th,#ardnPrint tfoot td{font-weight:700;border-top:1.5px solid #0A0F2C;border-bottom:0}#ardnPrint .pr-ba th{font-weight:500}#ardnPrint .pr-ba td{font-weight:700;white-space:nowrap}#ardnPrint .pr-note{color:#4A5170;margin:6px 0}#ardnPrint footer{margin-top:16px;padding-top:8px;border-top:1px solid #D9DCE8;color:#6A7090;font-size:9px}}" +
    "@media print{.ardn-track-ui{display:none!important}}";
  // Only a page with the cost calculator gets this print layout and button. Any other page prints as itself.
  if (q("#ctBody")) { document.head.appendChild(st); document.body.appendChild(b); document.body.appendChild(pr); }
})();
