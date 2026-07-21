/**
 * og-image.mjs — generate on-brand featured/OG images for blog posts.
 *
 * Renders an HTML card (ARDN indigo gradient) with the pre-installed Chromium,
 * then crops to an exact 1200x630 WebP with sharp. No external image services,
 * no stock photos, no fabricated content — just the post's own title + topic.
 *
 * Chromium's headless viewport is ~87px shorter than the requested window
 * height, so we render at 630+PAD and crop the top 1200x630 to get a fully
 * covered card.
 */
import { spawnSync } from "node:child_process";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

const CHROME =
  process.env.CHROME_BIN || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const W = 1200;
const H = 630;
const PAD = 100; // > the ~87px headless viewport offset

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Centered, crop-safe composition. Blog/social themes commonly center-crop a
// featured image toward square, so ALL content lives in a centered column
// (~540px wide, vertically centered) that survives a 1:1 center crop. A topical
// motif (declining bars + down arrow = cost reduction) makes the card relate to
// the content instead of just repeating the title.
function template({ title, eyebrow }) {
  const motif = `<svg width="84" height="84" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="30" width="14" height="52" rx="3" fill="#ffffff" fill-opacity="0.92"/>
<rect x="24" y="44" width="14" height="38" rx="3" fill="#ffffff" fill-opacity="0.68"/>
<rect x="44" y="56" width="14" height="26" rx="3" fill="#ffffff" fill-opacity="0.46"/>
<path d="M70 18 L70 60 M56 47 L70 63 L84 47" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;background:#2A2580}
.card{width:${W}px;height:${H}px;background:linear-gradient(135deg,#4840E0 0%,#2A2580 100%);color:#fff;font-family:Arial,Helvetica,sans-serif;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center}
.card::before{content:"";position:absolute;left:50%;top:-160px;transform:translateX(-50%);width:620px;height:620px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.12),transparent)}
.inner{position:relative;z-index:1;width:540px;display:flex;flex-direction:column;align-items:center}
.motif{margin-bottom:26px;opacity:.95}
.ey{font-size:19px;letter-spacing:.2em;text-transform:uppercase;opacity:.82;font-weight:700;margin-bottom:20px}
h1{font-size:44px;line-height:1.14;font-weight:800}
.brand{margin-top:34px;font-size:18px;font-weight:700;opacity:.9;letter-spacing:.01em}
.brand span{opacity:.6;margin:0 8px}
</style></head><body><div class="card"><div class="inner"><div class="motif">${motif}</div><div class="ey">${esc(eyebrow || "Ardn Cloud Solutions")}</div><h1>${esc(title)}</h1><div class="brand">ardn<span>·</span>ardncloudsolutions.com</div></div></div></body></html>`;
}

/**
 * Generate a 1200x630 WebP featured image. Returns { buffer, contentType, ext }.
 */
export async function generateOgImage({ title, eyebrow }) {
  const dir = await mkdtemp(join(tmpdir(), "ardn-og-"));
  const htmlPath = join(dir, "card.html");
  const rawPng = join(dir, "raw.png");
  try {
    await writeFile(htmlPath, template({ title, eyebrow }), "utf8");
    const res = spawnSync(
      CHROME,
      [
        "--headless=new",
        "--no-sandbox",
        "--disable-gpu",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        `--window-size=${W},${H + PAD}`,
        `--screenshot=${rawPng}`,
        `file://${htmlPath}`,
      ],
      { encoding: "utf8" }
    );
    if (res.status !== 0 && !(await fileExists(rawPng))) {
      throw new Error(`Chromium screenshot failed: ${(res.stderr || "").slice(0, 300)}`);
    }
    const buffer = await sharp(await readFile(rawPng))
      .extract({ left: 0, top: 0, width: W, height: H })
      .webp({ quality: 82 })
      .toBuffer();
    return { buffer, contentType: "image/webp", ext: "webp" };
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

async function fileExists(p) {
  try {
    await readFile(p);
    return true;
  } catch {
    return false;
  }
}
