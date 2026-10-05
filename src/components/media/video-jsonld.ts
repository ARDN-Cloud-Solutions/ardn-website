import fs from "node:fs";
import path from "node:path";
import { VIDEOS, isoDuration, videoCaptions, videoPoster, videoSrc, type Chapter, type VideoKey, type VideoMeta } from "./videos";

// Server-only helpers: read a video's .vtt from public/videos at build time
// and emit a schema.org VideoObject (with the transcript) for a page's
// JSON-LD graph. Never import this from a client component.

const SITE = "https://ardncloudsolutions.com";
const ORG = { "@id": `${SITE}/#organization` };

type Cue = { start: number; text: string };

function parseTime(t: string) {
  const [h, m, s] = t.trim().split(":").map(Number);
  return h * 3600 + m * 60 + s;
}

/** Parse the cues of a WebVTT file: start time (seconds) and plain text. */
export function parseVtt(vtt: string): Cue[] {
  const cues: Cue[] = [];
  for (const block of vtt.replace(/\r/g, "").split(/\n\n+/)) {
    const lines = block.split("\n").filter(Boolean);
    const i = lines.findIndex((l) => l.includes("-->"));
    if (i === -1) continue;
    const start = parseTime(lines[i].split("-->")[0]);
    const text = lines
      .slice(i + 1)
      .join(" ")
      .replace(/<[^>]+>/g, "")
      .trim();
    if (text) cues.push({ start, text });
  }
  return cues;
}

function readVtt(v: VideoMeta) {
  const file = path.join(process.cwd(), "public", videoCaptions(v));
  return parseVtt(fs.readFileSync(file, "utf8"));
}

/** The spoken words of a video, joined into one paragraph. */
export function transcript(v: VideoMeta) {
  return readVtt(v)
    .map((c) => c.text)
    .join(" ");
}

/** One chapter per caption cue, for videos without a curated chapter list. */
export function chaptersFromVtt(v: VideoMeta): Chapter[] {
  return readVtt(v).map((c) => ({ time: Math.floor(c.start), label: c.text }));
}

/**
 * VideoObject node for a page graph. `pageUrl` is the canonical URL of the
 * page that embeds it; the node's @id is `${pageUrl}#video-${slug}` so a
 * WebPage can reference it via `video`.
 */
export function videoObject(key: VideoKey, pageUrl: string, about?: { "@id": string }) {
  const v: VideoMeta = VIDEOS[key];
  return {
    "@type": "VideoObject",
    "@id": `${pageUrl}#video-${v.slug}`,
    name: v.name,
    description: v.description,
    thumbnailUrl: `${SITE}${videoPoster(v)}`,
    contentUrl: `${SITE}${videoSrc(v)}`,
    embedUrl: `${pageUrl}#video`,
    uploadDate: v.uploadDate,
    duration: isoDuration(v.seconds),
    inLanguage: "en-US",
    transcript: transcript(v),
    publisher: ORG,
    ...(about ? { about } : {}),
  };
}

/** Sitemap `videos` entry for a page (next-sitemap video extension shape). */
export function sitemapVideo(key: VideoKey) {
  const v: VideoMeta = VIDEOS[key];
  return {
    title: v.name,
    thumbnail_loc: `${SITE}${videoPoster(v)}`,
    description: v.description,
    content_loc: `${SITE}${videoSrc(v)}`,
    duration: v.seconds,
    publication_date: v.uploadDate,
  };
}
