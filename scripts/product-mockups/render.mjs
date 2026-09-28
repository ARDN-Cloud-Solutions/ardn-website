// Renders each mockup in mockups.html to public/images/<folder>/<name>.webp
// at 2880x1800 (1440x900 @2x). Run from the repo root:
//   node scripts/product-mockups/render.mjs
// Needs Playwright with Chrome and `cwebp` on the PATH.
import { chromium } from "playwright";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const dir = path.dirname(new URL(import.meta.url).pathname);
const pub = path.resolve(dir, "../../public/images");
const SHOTS = [
  ["lg-report", "license-guard/reporting"],
  ["lg-settings", "license-guard/settings"],
  ["sf-store", "storefronts/store"],
  ["sf-checkout", "storefronts/checkout"],
  ["sf-orders", "storefronts/orders"],
  ["af-claims", "ai-forge/claims-intake-assistant"],
  ["af-docs", "ai-forge/invoice-extraction"],
  ["af-ops", "ai-forge/monthly-report"],
  ["cs-dispatch", "services/custom-software-dispatch"],
  ["cs-approvals", "services/custom-software-approvals"],
  ["portal-customer", "services/customer-portal"],
  ["portal-seller", "services/seller-portal"],
  ["partner-deals", "services/partner-portal-deals"],
  ["partner-register", "services/partner-portal-register"],
  ["ecom-store", "services/ecommerce-store"],
  ["ecom-admin", "services/ecommerce-admin"],
];

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "mockups-"));
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
for (const [id, out] of SHOTS) {
  await page.goto(`file://${dir}/mockups.html?s=${id}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const png = path.join(tmp, `${id}.png`);
  await page.screenshot({ path: png });
  const dest = path.join(pub, `${out}.webp`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  execFileSync("cwebp", ["-quiet", "-q", "90", "-sharp_yuv", png, "-o", dest]);
  console.log("wrote", path.relative(process.cwd(), dest));
}
await browser.close();
