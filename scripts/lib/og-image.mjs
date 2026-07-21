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

function template({ title, eyebrow }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;background:#2A2580}
.card{width:${W}px;height:${H}px;background:linear-gradient(135deg,#4840E0 0%,#2A2580 100%);color:#fff;font-family:Arial,Helvetica,sans-serif;padding:76px 80px;position:relative;overflow:hidden}
.card::after{content:"";position:absolute;right:-140px;top:-140px;width:460px;height:460px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.14),transparent)}
.ey{font-size:22px;letter-spacing:.18em;text-transform:uppercase;opacity:.85;font-weight:700}
h1{font-size:58px;line-height:1.1;margin-top:24px;max-width:17ch;font-weight:800;position:relative;z-index:1}
.foot{position:absolute;left:80px;right:80px;bottom:60px;display:flex;align-items:center;justify-content:space-between;z-index:1}
.mark{font-size:28px;font-weight:800;letter-spacing:.01em}
.badge{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.35);border-radius:100px;padding:10px 20px;font-size:19px;font-weight:700}
</style></head><body><div class="card"><div class="ey">${esc(eyebrow || "Ardn Cloud Solutions")}</div><h1>${esc(title)}</h1><div class="foot"><div class="mark">ardn</div><div class="badge">ardncloudsolutions.com</div></div></div></body></html>`;
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
