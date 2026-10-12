"use client";

import { useRef } from "react";
import { DEMO_VIDEOS } from "@/content/proposals/videos";

/** Plays the matching self-hosted Club Steward video from the right moment.
 *  Falls back to a plain panel when a demo has no video yet. */
export default function VideoPlayer({ id, title }: { id?: string; title?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const v = id ? DEMO_VIDEOS[id] : undefined;
  if (!v) {
    return (
      <div style={{ aspectRatio: "16 / 9", background: "#0A1226", color: "#EEF1FB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
        Demo coming soon
      </div>
    );
  }
  const src = `/videos/${v.slug}.mp4#t=${v.start}`;
  return (
    <div style={{ background: "#000" }}>
      <video
        ref={ref}
        key={src}
        controls
        autoPlay
        playsInline
        preload="metadata"
        poster={`/videos/${v.slug}-poster.webp`}
        aria-label={title || v.name}
        onLoadedMetadata={(e) => {
          const el = e.currentTarget;
          if (v.start > 0 && el.currentTime < v.start) el.currentTime = v.start;
        }}
        style={{ display: "block", width: "100%", aspectRatio: "16 / 9", background: "#000" }}
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" srcLang="en" label="English" src={`/videos/${v.slug}.vtt`} default />
      </video>
    </div>
  );
}
