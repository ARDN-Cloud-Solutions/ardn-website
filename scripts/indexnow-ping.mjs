#!/usr/bin/env node
// Tell IndexNow (Bing, Yandex, Seznam, Naver and others) about every URL in
// the live sitemap so new and changed pages are recrawled quickly.
//
// Run after each deploy:   node scripts/indexnow-ping.mjs
//
// The key must stay in sync with public/<key>.txt, which IndexNow fetches to
// verify the site owns the key. Requires Node 18+ (global fetch).

const HOST = "ardncloudsolutions.com";
const KEY = "11e8ce3726225423664ca602643ac2a9";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH = 1000;

const res = await fetch(SITEMAP);
if (!res.ok) {
    console.error(`Could not fetch ${SITEMAP}: HTTP ${res.status}`);
    process.exit(1);
}
const xml = await res.text();
const urls = [...new Set([...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]))]
    // <loc> also appears inside image/video entries; only submit our own pages.
    .filter((u) => new URL(u).host === HOST && !/\.(webp|png|jpe?g|mp4|webm)$/i.test(u));

console.log(`Found ${urls.length} URLs in ${SITEMAP}`);

let failed = false;
for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH);
    const r = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    });
    const body = await r.text();
    console.log(`Batch ${i / BATCH + 1} (${urlList.length} URLs): HTTP ${r.status} ${r.statusText}${body ? ` ${body}` : ""}`);
    // 200 = received, 202 = received, key validation pending.
    if (r.status !== 200 && r.status !== 202) failed = true;
}

process.exit(failed ? 1 : 0);
