// Club Steward motion walkthrough: kinetic headlines, product screens and
// pop-up stat cards, timed to the voiceover, with an original music bed.
//
//   node scripts/club-steward-video/motion.mjs <out.mp4> <voDir>
//
// voDir comes from voiceover.py (vo-XX.wav, vo-durations.json, vo-lines.json).
// Needs Playwright with Chrome, ffmpeg, and PYTHON pointing at a Python with
// numpy/scipy/soundfile (the same venv as voiceover.py) for music.py.
//
// Every figure on screen comes from the product kit. No prices, savings or
// customer results: nothing is in production yet (see the kit guardrails).
import { chromium } from "playwright";
import { spawn, execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const dir = path.dirname(new URL(import.meta.url).pathname);
const IMG = (f) => `file://${path.resolve(dir, "../../public/images/golf", f)}.webp`;
const [OUT, VO] = process.argv.slice(2);
if (!OUT || !VO) throw new Error("usage: node motion.mjs <out.mp4> <voDir>");
const PY = process.env.PYTHON || "python3";

// ---------------------------------------------------------------- scenes
// kind: intro | problem | screen | end. Stats: {n, pre, suf} count up; {t} is text.
const SCENES = [
  { kind: "intro" },
  { kind: "problem" },
  { kind: "screen", img: "corporate-dashboard", url: "Corporate · All clubs", kicker: "The corporate view", title: "Every club, side by side.",
    stats: [{ n: 1, label: "view of every club" }, { t: "Auto-scoped", label: "to each regional VP and GM" }] },
  { kind: "screen", img: "online-join-plans", url: "yourclub.com/join", kicker: "Online join", title: "Join online in six steps.",
    stats: [{ n: 6, label: "steps to a paid member" }, { n: 0, label: "phone calls needed" }, { t: "Signed · paid · active", label: "in one flow" }] },
  { kind: "screen", img: "sales-pipeline", url: "Membership sales", kicker: "Membership sales", title: "No enquiry left behind.",
    stats: [{ t: "Claimed or escalated", label: "every enquiry, automatically" }, { t: "Guest rounds → leads", label: "your warmest prospects" }] },
  { kind: "screen", img: "contracts-esign", url: "Contracts", kicker: "Contracts", title: "Signed before money moves.",
    stats: [{ n: 100, suf: "%", label: "signed before payment" }, { t: "Built-in e-sign", label: "no third-party tool" }] },
  { kind: "screen", img: "dues-standing", url: "Billing · Dues", kicker: "Dues & payments", title: "Dues that collect themselves.",
    stats: [{ t: "Card + ACH", label: "autopay" }, { t: "Day 3 · 5 · 7", label: "automatic retries" }, { n: 0, label: "double charges" }] },
  { kind: "screen", img: "member-benefits", url: "members.yourclub.com", kicker: "Benefits", title: "Benefits that travel with the member.",
    stats: [{ t: "Every club", label: "in the network" }, { t: "Auto draw-down", label: "at every tee time" }] },
  { kind: "screen", img: "golf-performance", url: "Golf · Performance", kicker: "Golf performance", title: "What every round is worth.",
    stats: [{ t: "RevPATT", label: "revenue per available tee time" }, { t: "Utilization", label: "and no-show rate, from the bookings" }] },
  { kind: "screen", img: "pro-shop-tee-time", url: "yourclub.com/shop", kicker: "Pro shop", title: "Ready at the tee time.",
    stats: [{ t: "Order ahead", label: "with the round" }, { t: "On the cart", label: "when they arrive" }] },
  { kind: "screen", img: "permissions", url: "Settings · Who can do what", kicker: "Security", title: "Every club, sealed off.",
    stats: [{ n: 100, suf: "%", label: "of tables isolated per club" }, { n: 400, suf: "+", label: "permissions you control" }, { n: 30, suf: "-day", label: "recycle bin" }] },
  { kind: "screen", img: "member-home", url: "members.yourclub.com", kicker: "Member app", title: "One app, in your club's brand.",
    stats: [{ t: "Digital card", label: "for every household member" }, { t: "Club-branded", label: "for every club" }] },
  { kind: "end" },
];

// ---------------------------------------------------------------- timing
const FPS = 30, XF = 0.5, LEAD = 0.55, TAIL = 0.75;
const vo = JSON.parse(fs.readFileSync(path.join(VO, "vo-durations.json"), "utf8"));
const lines = JSON.parse(fs.readFileSync(path.join(VO, "vo-lines.json"), "utf8"));
if (vo.length !== SCENES.length) throw new Error(`need ${SCENES.length} VO lines, got ${vo.length}`);
const minDur = (s) => ({ intro: 4.2, problem: 5.2, screen: 5.2, end: 6.5 }[s.kind]);
let t = 0;
SCENES.forEach((s, i) => {
  s.start = t;
  s.voAt = t + (i === 0 ? 0.35 : LEAD);
  s.dur = Math.max(minDur(s), (s.voAt - t) + vo[i] + (s.kind === "end" ? 1.8 : TAIL + XF));
  t += s.dur - XF;
});
const TOTAL = +(t + XF).toFixed(2);
const pops = [], whooshes = [];

// ---------------------------------------------------------------- html
const esc = (x) => String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;");
let css = "", kf = "", uid = 0;
// An element's animations: [name, dur, delay, easing, fill]
const anim = (list) => list.map(([n, d, at, e = "cubic-bezier(.2,.8,.2,1)", f = "both"]) => `${n} ${d}s ${e} ${at.toFixed(3)}s ${f}`).join(", ");
const sceneWrap = (s, inner) => {
  const out = s.start + s.dur - XF;
  return `<section class="scene" style="animation:${anim([["sceneIn", XF, s.start], ["sceneOut", XF, out, "ease-in", "forwards"]])}">${inner}</section>`;
};
const words = (text, at, cls = "") => text.split(" ").map((w, k) =>
  `<span class="w ${cls}" style="animation:${anim([["wordIn", 0.7, at + k * 0.07]])}">${esc(w)}</span>`).join(" ");
const counter = (n, at) => {
  const id = `c${uid++}`;
  kf += `@keyframes ${id}{from{--n:0}to{--n:${n}}}`;
  css += `.${id}{animation:${id} ${n > 10 ? 1.3 : 0.7}s cubic-bezier(.2,.8,.2,1) ${at.toFixed(3)}s both;counter-reset:n var(--n)}`;
  return `<span class="num ${id}"></span>`;
};
const stat = (st, at) => {
  pops.push(at + 0.05);
  const big = st.n !== undefined
    ? `${st.pre ? esc(st.pre) : ""}${counter(st.n, at + 0.1)}${st.suf ? `<small>${esc(st.suf)}</small>` : ""}`
    : `<span class="txt">${esc(st.t)}</span>`;
  return `<div class="stat" style="animation:${anim([["popIn", 0.75, at, "cubic-bezier(.34,1.56,.64,1)"]])}">
    <b>${big}</b><span>${esc(st.label)}</span></div>`;
};

function sceneHTML(s, i) {
  const at = s.start;
  if (i > 0) whooshes.push(at + 0.15);
  if (s.kind === "intro") {
    return sceneWrap(s, `<div class="center">
      <span class="kick" style="animation:${anim([["fadeUp", 0.8, at + 0.2]])}">Golf &amp; country club management</span>
      <h1 class="mark">${words("Club Steward", at + 0.45, "big")}</h1>
      <p class="tag">${words("Every club. One member record.", at + 1.2)}</p></div>`);
  }
  if (s.kind === "problem") {
    const chips = ["Tee sheet", "Back office", "Websites", "Sales CRM", "E-signature", "Spreadsheets"];
    const collapse = at + s.dur * 0.55;
    const chipEls = chips.map((c, k) => {
      const ang = (k / chips.length) * Math.PI * 2, x = Math.cos(ang) * 330, y = Math.sin(ang) * 190;
      const id = `ch${uid++}`;
      kf += `@keyframes ${id}{0%{opacity:0;transform:translate(${x * 1.4}px,${y * 1.4}px) scale(.6)}15%{opacity:1;transform:translate(${x}px,${y}px) scale(1)}70%{opacity:1;transform:translate(${x}px,${y}px) scale(1)}100%{opacity:0;transform:translate(0,0) scale(.3)}}`;
      pops.push(at + 0.3 + k * 0.12);
      return `<span class="chip" style="animation:${id} ${(collapse - (at + 0.3 + k * 0.12)) / 0.75 + 0.01}s cubic-bezier(.5,0,.2,1) ${(at + 0.3 + k * 0.12).toFixed(3)}s both">${c}</span>`;
    }).join("");
    pops.push(collapse + 0.1);
    return sceneWrap(s, `<div class="center">
      <span class="kick" style="animation:${anim([["fadeUp", 0.6, at + 0.1]])}">The patchwork</span>
      <div class="orbit">${chipEls}
        <div class="one" style="animation:${anim([["popIn", 0.8, collapse + 0.05, "cubic-bezier(.34,1.56,.64,1)"]])}">
          <b>${counter(6, collapse + 0.15)}<small> → 1</small></b><span>systems → one platform</span></div>
      </div></div>`);
  }
  if (s.kind === "end") {
    pops.push(at + 1.6);
    return sceneWrap(s, `<div class="center">
      <span class="kick" style="animation:${anim([["fadeUp", 0.6, at + 0.2]])}">See it on a portfolio like yours</span>
      <h1 class="endh">${words("More clubs.", at + 0.4)} <em>${words("Not more systems.", at + 0.8)}</em></h1>
      <span class="pill" style="animation:${anim([["popIn", 0.8, at + 1.6, "cubic-bezier(.34,1.56,.64,1)"]])}">Book a 30-minute walkthrough</span>
      <span class="ask" style="animation:${anim([["fadeUp", 0.7, at + 2.2]])}">Ask us about pricing for your portfolio</span>
      <span class="url" style="animation:${anim([["fadeUp", 0.7, at + 2.5]])}">ardncloudsolutions.com/golf-club-management-software</span></div>`);
  }
  // screen
  const statStart = at + 1.0, gap = Math.min(0.9, (s.dur - 2.2) / s.stats.length);
  return sceneWrap(s, `<div class="split">
    <div class="copy">
      <span class="kick" style="animation:${anim([["fadeUp", 0.6, at + 0.15]])}">${esc(s.kicker)}</span>
      <h2>${words(s.title, at + 0.3)}</h2>
      <div class="stats">${s.stats.map((st, k) => stat(st, statStart + k * gap)).join("")}</div>
    </div>
    <div class="shot" style="animation:${anim([["shotIn", 1.0, at + 0.1]])}">
      <div class="bar"><i></i><i></i><i></i><span>${esc(s.url)}</span></div>
      <div class="imgwrap"><img src="${IMG(s.img)}" style="animation:${anim([["drift", s.dur, at, "linear"]])}"></div>
    </div></div>`);
}

const body = SCENES.map(sceneHTML).join("\n");
const chapterTicks = SCENES.slice(1, -1).map((s) => `<i style="left:${(s.start / TOTAL) * 100}%"></i>`).join("");
const html = `<!doctype html><html><head><meta charset="utf-8"><title>Club Steward Motion</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Public+Sans:wght@500;600;700;800&display=block" rel="stylesheet">
<style>
@property --n{syntax:'<integer>';inherits:false;initial-value:0}
:root{--ink0:#050b16;--ink1:#0a1226;--gold:#d4b25a;--gold2:#e8ce8f;--turf:#0f9870}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1920px;height:1080px;overflow:hidden;background:var(--ink0)}
body{font-family:"Public Sans",Arial,sans-serif;color:#eef1fb;position:relative}
.bg{position:absolute;inset:0;background:linear-gradient(168deg,var(--ink1),var(--ink0) 60%,#07100c)}
.blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.55}
.b1{width:900px;height:900px;left:-200px;top:380px;background:rgba(15,152,112,.55);animation:float1 ${TOTAL}s linear 0s both}
.b2{width:1000px;height:800px;right:-260px;top:-300px;background:rgba(72,64,224,.6);animation:float2 ${TOTAL}s linear 0s both}
.b3{width:600px;height:600px;left:700px;top:-200px;background:rgba(212,178,90,.18);animation:float1 ${TOTAL}s linear 0s both reverse}
@keyframes float1{from{transform:translate(0,0)}to{transform:translate(260px,-120px)}}
@keyframes float2{from{transform:translate(0,0)}to{transform:translate(-220px,160px)}}
.grain{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:80px 80px}
.scene{position:absolute;inset:0}
@keyframes sceneIn{from{opacity:0;transform:scale(1.03)}to{opacity:1;transform:none}}
@keyframes sceneOut{from{opacity:1}to{opacity:0;transform:scale(.98)}}
@keyframes wordIn{from{opacity:0;transform:translateY(38px);filter:blur(8px)}to{opacity:1;transform:none;filter:none}}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes popIn{0%{opacity:0;transform:scale(.5) translateY(30px)}100%{opacity:1;transform:none}}
@keyframes shotIn{from{opacity:0;transform:perspective(1800px) translateX(220px) rotateY(-18deg) scale(.92)}to{opacity:1;transform:perspective(1800px) rotateY(-7deg) rotateX(2deg)}}
@keyframes drift{from{transform:scale(1.0)}to{transform:scale(1.07) translateY(-1.5%)}}
.w{display:inline-block}
.kick{display:inline-flex;align-items:center;gap:14px;font-size:20px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--gold2)}
.kick::before{content:"";width:40px;height:3px;border-radius:3px;background:linear-gradient(90deg,var(--gold),var(--turf))}
.center{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;text-align:center;gap:30px}
.mark{font-family:"Cormorant Garamond",Georgia,serif;font-weight:600;font-size:190px;line-height:.95;letter-spacing:-.02em;color:#fff}
.tag{font-family:"Cormorant Garamond",serif;font-style:italic;font-size:64px;color:var(--gold2)}
.orbit{position:relative;width:1100px;height:620px;display:grid;place-items:center}
.chip{position:absolute;padding:20px 34px;border-radius:999px;font-size:30px;font-weight:700;color:#fff;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(6px);box-shadow:0 20px 50px rgba(0,0,0,.35)}
.one{display:grid;justify-items:center;gap:10px;padding:40px 70px;border-radius:30px;background:rgba(10,18,38,.7);border:1px solid rgba(212,178,90,.45);box-shadow:0 40px 120px rgba(0,0,0,.5),0 0 90px rgba(212,178,90,.2)}
.one b{font-family:"Cormorant Garamond",serif;font-size:170px;line-height:1;color:var(--gold2);font-variant-numeric:lining-nums}
.one b small{font-size:.6em;color:#fff}
.one span{font-size:28px;font-weight:700;letter-spacing:.04em;color:rgba(226,232,248,.85)}
.split{position:absolute;inset:0;display:grid;grid-template-columns:640px 1fr;gap:40px;align-items:center;padding-left:120px}
.copy{display:grid;gap:26px}
h2{font-family:"Cormorant Garamond",Georgia,serif;font-weight:600;font-size:80px;line-height:1.02;text-wrap:balance;letter-spacing:-.015em;color:#fff}
.stats{display:grid;gap:16px;margin-top:14px}
.stat{display:grid;gap:4px;padding:20px 26px;border-radius:20px;background:rgba(255,255,255,.055);border:1px solid rgba(212,178,90,.32);box-shadow:0 24px 60px rgba(0,0,0,.35);backdrop-filter:blur(10px);width:560px}
.stat b{font-family:"Cormorant Garamond",serif;font-size:66px;line-height:1;font-weight:600;color:var(--gold2);font-variant-numeric:lining-nums tabular-nums}
.stat b small{font-size:.55em;margin-left:4px}
.stat b .txt{font-size:46px;color:#fff}
.stat>span{font-size:21px;font-weight:600;color:rgba(226,232,248,.72)}
.num::after{content:counter(n)}
.shot{width:1260px;margin-right:-200px;border-radius:22px;overflow:hidden;background:#111a33;border:1px solid rgba(212,178,90,.28);box-shadow:0 60px 140px rgba(0,0,0,.6)}
.bar{display:flex;gap:10px;align-items:center;padding:15px 22px;background:#111a33}
.bar i{width:12px;height:12px;border-radius:50%;background:rgba(255,255,255,.2)}
.bar span{margin-left:12px;font-size:18px;color:rgba(226,232,248,.5)}
.imgwrap{overflow:hidden}
.imgwrap img{display:block;width:100%;transform-origin:30% 30%;filter:saturate(1.12) contrast(1.04)}
.endh{font-family:"Cormorant Garamond",serif;font-weight:600;font-size:128px;line-height:1;color:#fff}
.endh em{font-style:italic;font-weight:500;color:var(--gold2)}
.pill{margin-top:10px;padding:28px 60px;border-radius:999px;font-size:34px;font-weight:800;color:#241c07;background:linear-gradient(135deg,var(--gold2),var(--gold));box-shadow:0 20px 70px rgba(212,178,90,.45)}
.ask{font-size:28px;font-weight:700;color:#fff}
.url{font-size:22px;color:rgba(226,232,248,.55)}
.brand{position:absolute;left:120px;bottom:52px;font-family:"Cormorant Garamond",serif;font-size:34px;font-weight:600;color:rgba(255,255,255,.9)}
.brand small{font-family:"Public Sans";font-size:14px;letter-spacing:.2em;text-transform:uppercase;color:rgba(226,232,248,.45);margin-left:16px;font-weight:700}
.prog{position:absolute;left:120px;right:120px;bottom:34px;height:4px;border-radius:4px;background:rgba(255,255,255,.1)}
.prog b{position:absolute;inset:0;border-radius:4px;background:linear-gradient(90deg,var(--turf),var(--gold));transform-origin:left;animation:prog ${TOTAL}s linear 0s both}
.prog i{position:absolute;top:-3px;width:2px;height:10px;background:rgba(255,255,255,.35)}
@keyframes prog{from{transform:scaleX(0)}to{transform:scaleX(1)}}
${kf}${css}
</style></head><body>
<div class="bg"></div><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div><div class="grain"></div>
${body}
<div class="brand">Club Steward<small>Sample portfolio</small></div>
<div class="prog"><b></b>${chapterTicks}</div>
</body></html>`;

// ---------------------------------------------------------------- render frames
const work = fs.mkdtempSync(path.join(os.tmpdir(), "cs-motion-"));
const htmlPath = path.join(work, "motion.html");
fs.writeFileSync(htmlPath, html);
const silent = path.join(work, "video.mp4");

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => document.getAnimations().forEach((a) => a.pause()));

// PREVIEW="3.5,9,20" renders just those timestamps as PNGs next to OUT, then exits.
if (process.env.PREVIEW) {
  for (const sec of process.env.PREVIEW.split(",").map(Number)) {
    await page.evaluate((ms) => document.getAnimations().forEach((a) => { a.currentTime = ms; }), sec * 1000);
    await page.screenshot({ path: OUT.replace(/\.mp4$/, `-${sec}s.png`) });
  }
  console.log("scene starts", SCENES.map((s) => s.start.toFixed(1)).join(" "), "total", TOTAL);
  await browser.close();
  process.exit(0);
}

const ff = spawn("ffmpeg", ["-y", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
  "-c:v", "libx264", "-preset", "medium", "-crf", "19", "-pix_fmt", "yuv420p", "-movflags", "+faststart", silent],
  { stdio: ["pipe", "ignore", "inherit"] });
const frames = Math.round(TOTAL * FPS);
for (let f = 0; f < frames; f++) {
  const ms = (f / FPS) * 1000;
  await page.evaluate((ms) => document.getAnimations().forEach((a) => { a.currentTime = ms; }), ms);
  const buf = await page.screenshot({ type: "jpeg", quality: 92 });
  if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
  if (f % 300 === 0) console.log(`frame ${f}/${frames}`);
}
ff.stdin.end();
await new Promise((r) => ff.on("close", r));
await browser.close();

// ---------------------------------------------------------------- audio
const timeline = { total: TOTAL, drop: SCENES[1].start + 0.1, end: SCENES.at(-1).start + 0.3, pops, whooshes };
fs.writeFileSync(path.join(work, "timeline.json"), JSON.stringify(timeline));
execFileSync(PY, [path.join(dir, "music.py"), path.join(work, "timeline.json"), work], { stdio: "inherit" });

const args = ["-y", "-i", silent, "-i", path.join(work, "music.wav"), "-i", path.join(work, "sfx.wav")];
const parts = [];
SCENES.forEach((s, i) => {
  args.push("-i", path.join(VO, `vo-${String(i).padStart(2, "0")}.wav`));
  const ms = Math.round(s.voAt * 1000);
  parts.push(`[${3 + i}:a]aresample=44100,aformat=channel_layouts=stereo,adelay=${ms}|${ms}[v${i}]`);
});
parts.push(`${SCENES.map((_, i) => `[v${i}]`).join("")}amix=inputs=${SCENES.length}:normalize=0,apad[vo]`);
parts.push(`[vo]asplit=2[vomix][vokey]`);
// Duck the music under the narration, then mix voice + music + sfx.
parts.push(`[1:a]volume=0.4[mus]`);
parts.push(`[mus][vokey]sidechaincompress=threshold=0.015:ratio=10:attack=10:release=450:makeup=1[duck]`);
parts.push(`[2:a]volume=0.8[fx]`);
parts.push(`[duck][vomix][fx]amix=inputs=3:normalize=0:duration=first,loudnorm=I=-14:TP=-1.2:LRA=9,aresample=48000[aout]`);
args.push("-filter_complex", parts.join(";"), "-map", "0:v", "-map", "[aout]",
  "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", "-movflags", "+faststart", OUT);
execFileSync("ffmpeg", args, { stdio: ["ignore", "ignore", "inherit"] });

// Captions, timed as the narration was laid in.
const ts = (x) => { const m = Math.floor(x / 60), s = (x % 60).toFixed(3).padStart(6, "0"); return `00:${String(m).padStart(2, "0")}:${s}`; };
const vtt = "WEBVTT\n\n" + SCENES.map((s, i) => `${i + 1}\n${ts(s.voAt)} --> ${ts(s.voAt + vo[i])}\n${lines[i]}\n`).join("\n");
fs.writeFileSync(OUT.replace(/\.mp4$/, ".vtt"), vtt);
console.log("total", TOTAL, "s ·", frames, "frames ·", pops.length, "pops · work dir", work);
