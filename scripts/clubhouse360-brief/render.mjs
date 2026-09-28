// Renders brief.html to public/downloads/clubhouse360-executive-brief.pdf.
// Run from the repo root: node scripts/clubhouse360-brief/render.mjs
// Needs Playwright (npx playwright install chromium) and network for fonts.
import { chromium } from "playwright";
import path from "node:path";

const dir = path.dirname(new URL(import.meta.url).pathname);
const out = path.resolve(dir, "../../public/downloads/clubhouse360-executive-brief.pdf");
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${dir}/brief.html`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, format: "Letter", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("wrote", out);
