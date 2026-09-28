// Renders each walkthrough scene to a 1920x1080 PNG, then builds the MP4
// with ffmpeg: slow push-in per scene, crossfades between scenes.
import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import path from "node:path";

const dir = path.dirname(new URL(import.meta.url).pathname);
const img = (f) => `file://${path.resolve(dir, "../../public/images/golf", f)}.webp`;

const SCENES = [
  { kind: "title", dur: 5 },
  { step: "The corporate view", title: "Every club, <em>side by side.</em>", body: "Enquiries, conversion, pipeline and new members for the whole portfolio. The same view scopes itself to each VP and GM.", img: "corporate-dashboard", url: "Corporate · All clubs", dur: 8 },
  { step: "1 · The club website", title: "A prospect joins <em>online.</em>", body: "Six steps in the club's own look: plan, household, add-ons, signature, autopay, payment.", img: "online-join-plans", url: "yourclub.com/join", dur: 8 },
  { step: "2 · Membership sales", title: "No lead is <em>ever lost.</em>", body: "A shared pool with first-claim routing. Unclaimed enquiries escalate to the GM automatically.", img: "sales-pipeline", url: "Membership sales · Pipeline", dur: 8 },
  { step: "3 · Contracts", title: "Signed before <em>money moves.</em>", body: "Built-in e-signature against the exact version shown. Payment is refused until it's signed.", img: "contracts-esign", url: "Contracts · Envelopes", dur: 8 },
  { step: "4 · Benefits", title: "Benefits that <em>follow the member.</em>", body: "Rounds, guest passes and discounts, capped per club or across the network, shared by the household.", img: "member-benefits", url: "members.yourclub.com/benefits", dur: 8 },
  { step: "5 · The tee sheet", title: "Book a tee time, <em>use the allowance.</em>", body: "Rate grids, booking windows and carts, with the member's allowance drawn down as they book.", img: "tee-sheet", url: "Golf · Tee sheet", dur: 8 },
  { step: "6 · Golf performance", title: "What every <em>round is worth.</em>", body: "Utilization, average ticket and revenue per available tee time, straight from the bookings.", img: "golf-performance", url: "Golf · Performance", dur: 8 },
  { step: "7 · The member", title: "One app, <em>in the club's brand.</em>", body: "Digital card, benefits, bills and tee times for every household member.", img: "member-home", url: "members.yourclub.com", dur: 8 },
  { kind: "end", dur: 6 },
];

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const files = [];
for (const [i, s] of SCENES.entries()) {
  const q = new URLSearchParams(s.kind ? { kind: s.kind } : { ...s, img: img(s.img), dur: "" });
  await page.goto(`file://${dir}/scene.html?${q}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const f = path.join(dir, `scene-${String(i).padStart(2, "0")}.png`);
  await page.screenshot({ path: f });
  files.push({ f, dur: s.dur });
}
await browser.close();

// ffmpeg: each still -> push-in clip, then chain xfades.
const FPS = 30, XF = 0.8;
const args = ["-y"];
// One frame per input: zoompan expands it to `dur` seconds on its own.
files.forEach(({ f }) => args.push("-i", f));
const parts = files.map(({ dur }, i) =>
  `[${i}:v]scale=3840:2160,zoompan=z='1+0.035*on/${dur * FPS}':d=${dur * FPS}:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1920x1080:fps=${FPS},format=yuv420p,setsar=1[v${i}]`);
let prev = "v0", offset = files[0].dur - XF;
for (let i = 1; i < files.length; i++) {
  const out = i === files.length - 1 ? "vout" : `x${i}`;
  parts.push(`[${prev}][v${i}]xfade=transition=fade:duration=${XF}:offset=${offset.toFixed(2)}[${out}]`);
  prev = out; offset += files[i].dur - XF;
}
args.push("-filter_complex", parts.join(";"), "-map", "[vout]",
  "-c:v", "libx264", "-preset", "slow", "-crf", "21", "-profile:v", "high", "-pix_fmt", "yuv420p",
  "-movflags", "+faststart", "-an", process.argv[2]);
execFileSync("ffmpeg", args, { stdio: ["ignore", "ignore", "inherit"] });
console.log("total seconds", (offset + XF).toFixed(1));
