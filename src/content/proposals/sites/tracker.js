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
    var inputs = {}, outputs = {}, n = 0;
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
    // Figures on screen: short numeric text in elements with an id and no child elements.
    document.querySelectorAll("[id]").forEach(function (el) {
      if (n >= 120 || el.children.length || /^(INPUT|SELECT|TEXTAREA|SCRIPT|STYLE|OPTION)$/.test(el.tagName) || !visible(el)) return;
      var t = clean(el.textContent);
      if (!t || t.length > 40 || !/\d/.test(t)) return;
      var row = el.closest("tr,li,dd,div,p"), lab = el.getAttribute("aria-label") || "";
      if (!lab && row) { lab = clean(txt(row.tagName === "DD" && row.previousElementSibling ? row.previousElementSibling : row).replace(t, " ")); }
      outputs[el.id] = { label: lab || human(el.id), value: t };
      n++;
    });
    return { inputs: inputs, outputs: outputs };
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
  window.addEventListener("beforeprint", function () { send("export", { states: { site: snap() } }); });
  var b = document.createElement("button");
  b.className = "ardn-track-ui"; b.type = "button"; b.textContent = "Export to PDF";
  b.setAttribute("style", "position:fixed;right:18px;bottom:18px;z-index:2147483000;background:#0B4A3B;color:#fff;border:0;border-radius:22px;padding:11px 20px;font:600 14px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.25);cursor:pointer");
  b.onclick = function () { window.print(); };
  var st = document.createElement("style"); st.textContent = "@media print{.ardn-track-ui{display:none!important}}";
  document.head.appendChild(st); document.body.appendChild(b);
})();
