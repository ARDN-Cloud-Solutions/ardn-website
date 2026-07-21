#!/usr/bin/env node
/**
 * publish-to-wordpress.mjs — headless publisher for the ARDN blog.
 *
 * Reads post files from content/blog/*.md (frontmatter + HTML body) and
 * creates/updates them via the WordPress REST API. Idempotent: matches on
 * slug, so re-running updates the existing post instead of duplicating it.
 *
 * Requires three environment variables (set in the Claude Code environment's
 * secrets — NOT committed, NOT prefixed NEXT_PUBLIC_ so they never reach the
 * browser bundle):
 *   WP_API_URL       e.g. https://cms.ardncloudsolutions.com
 *   WP_USERNAME      e.g. claudeuser
 *   WP_APP_PASSWORD  a WordPress Application Password (Users -> Profile)
 *
 * Auth uses HTTP Basic with the application password, which is the WordPress-
 * supported scheme for REST writes over HTTPS.
 *
 * Usage:
 *   node scripts/publish-to-wordpress.mjs            # dry run (default, safe)
 *   node scripts/publish-to-wordpress.mjs --publish  # create/update as published
 *   node scripts/publish-to-wordpress.mjs --draft    # create/update as draft
 *   node scripts/publish-to-wordpress.mjs --file content/blog/foo.md --draft
 *
 * Nothing is written to WordPress unless --publish or --draft is passed.
 */

import { readFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";

// Node's built-in fetch (undici) ignores HTTPS_PROXY unless NODE_USE_ENV_PROXY
// is set at startup (Node >= 22.21). In sandboxed environments outbound HTTPS
// only succeeds through that proxy, so re-exec once with the flag — scheduled
// runs then route correctly without the caller having to remember it.
if (process.env.HTTPS_PROXY && process.env.NODE_USE_ENV_PROXY !== "1") {
  const { spawnSync } = await import("node:child_process");
  const r = spawnSync(process.execPath, [import.meta.filename, ...process.argv.slice(2)], {
    stdio: "inherit",
    env: { ...process.env, NODE_USE_ENV_PROXY: "1" },
  });
  process.exit(r.status ?? 0);
}

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const BLOG_DIR = join(ROOT, "content", "blog");

const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const argVal = (f) => {
  const i = args.indexOf(f);
  return i >= 0 ? args[i + 1] : undefined;
};

// Default is a DRY RUN. A write only happens with --publish or --draft.
const doPublish = has("--publish");
const doDraft = has("--draft");
const dryRun = !doPublish && !doDraft;
const status = doPublish ? "publish" : "draft";
const onlyFile = argVal("--file");

const { WP_API_URL, WP_USERNAME, WP_APP_PASSWORD } = process.env;

function fail(msg) {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

if (!dryRun) {
  if (!WP_API_URL) fail("WP_API_URL is not set. Add it to the environment secrets.");
  if (!WP_USERNAME) fail("WP_USERNAME is not set. Add it to the environment secrets.");
  if (!WP_APP_PASSWORD) fail("WP_APP_PASSWORD is not set. Add a WordPress Application Password to the environment secrets.");
}

const API = WP_API_URL ? `${WP_API_URL.replace(/\/$/, "")}/wp-json/wp/v2` : null;
const authHeader = WP_APP_PASSWORD
  ? "Basic " + Buffer.from(`${WP_USERNAME}:${WP_APP_PASSWORD.replace(/\s+/g, "")}`).toString("base64")
  : null;

/** Minimal frontmatter parser: `---` fenced key: value block, then HTML body. */
function parseFrontmatter(raw) {
  const m = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!m) throw new Error("missing frontmatter block (--- ... ---)");
  const meta = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    let val = kv[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (key === "tags" || key === "categories") {
      meta[key] = val ? val.split(",").map((s) => s.trim()).filter(Boolean) : [];
    } else {
      meta[key] = val;
    }
  }
  return { meta, body: m[2].trim() };
}

async function wp(path, opts = {}) {
  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
      ...(opts.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`WP ${opts.method || "GET"} ${path} -> ${res.status} ${res.statusText} ${text.slice(0, 300)}`);
  }
  return res.json();
}

/** Resolve a taxonomy term name to an ID, creating it if it doesn't exist. */
async function resolveTerm(taxonomy, name) {
  const found = await wp(`/${taxonomy}?search=${encodeURIComponent(name)}&per_page=100`);
  const exact = found.find((t) => t.name.toLowerCase() === name.toLowerCase());
  if (exact) return exact.id;
  const created = await wp(`/${taxonomy}`, { method: "POST", body: JSON.stringify({ name }) });
  return created.id;
}

async function findPostBySlug(slug) {
  const posts = await wp(`/posts?slug=${encodeURIComponent(slug)}&status=publish,draft,future,pending&per_page=1`);
  return posts[0] || null;
}

async function processFile(file) {
  const raw = await readFile(file, "utf8");
  const { meta, body } = parseFrontmatter(raw);
  if (!meta.title) throw new Error(`${file}: frontmatter missing 'title'`);
  if (!meta.slug) throw new Error(`${file}: frontmatter missing 'slug'`);

  console.log(`\n• ${meta.slug}`);
  console.log(`  title: ${meta.title}`);
  console.log(`  status: ${status}${dryRun ? " (DRY RUN — nothing written)" : ""}`);
  if (meta.categories?.length) console.log(`  categories: ${meta.categories.join(", ")}`);
  if (meta.tags?.length) console.log(`  tags: ${meta.tags.join(", ")}`);

  if (dryRun) {
    console.log(`  body: ${body.length} chars of HTML ready`);
    return;
  }

  const categories = [];
  for (const c of meta.categories || []) categories.push(await resolveTerm("categories", c));
  const tags = [];
  for (const t of meta.tags || []) tags.push(await resolveTerm("tags", t));

  const payload = {
    title: meta.title,
    slug: meta.slug,
    status,
    content: body,
    excerpt: meta.excerpt || "",
    ...(categories.length ? { categories } : {}),
    ...(tags.length ? { tags } : {}),
  };

  const existing = await findPostBySlug(meta.slug);
  if (existing) {
    await wp(`/posts/${existing.id}`, { method: "POST", body: JSON.stringify(payload) });
    console.log(`  ✓ updated post #${existing.id}`);
  } else {
    const created = await wp(`/posts`, { method: "POST", body: JSON.stringify(payload) });
    console.log(`  ✓ created post #${created.id} (${created.link})`);
  }
}

async function main() {
  let files;
  if (onlyFile) {
    files = [resolve(ROOT, onlyFile)];
  } else {
    const entries = await readdir(BLOG_DIR).catch(() => []);
    files = entries.filter((f) => f.endsWith(".md")).map((f) => join(BLOG_DIR, f));
  }

  if (!files.length) fail(`No post files found in ${BLOG_DIR}`);

  console.log(`WordPress publisher — ${files.length} file(s)${dryRun ? " — DRY RUN" : ` — target: ${WP_API_URL}`}`);

  let ok = 0;
  for (const f of files) {
    try {
      await processFile(f);
      ok++;
    } catch (e) {
      console.error(`  ✗ ${e.message}`);
    }
  }
  console.log(`\nDone: ${ok}/${files.length} processed${dryRun ? " (dry run)" : ""}.\n`);
}

main().catch((e) => fail(e.message));
