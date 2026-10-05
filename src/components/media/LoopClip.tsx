"use client";

import { useEffect, useRef, useState } from "react";
import "./media.css";

export type LoopClipProps = {
  src: string;
  poster: string;
  /** One line under the clip. */
  caption: string;
  /** Step number shown before the caption, e.g. in a 3-up "see it move" row. */
  step?: number;
};

/**
 * A short, silent product clip (6-10 s, no audio track). It stays a poster
 * until it scrolls into view, then loads and loops muted; it pauses again
 * off-screen. Users who prefer reduced motion only ever see the poster.
 */
export default function LoopClip({ src, poster, caption, step }: LoopClipProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setStill(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = video.current;
    if (!el || still) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!el.src) el.src = el.dataset.src ?? "";
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [still]);

  return (
    <figure className="lc">
      <div className="lc-frame">
        {still ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" width={1280} height={720} loading="lazy" />
        ) : (
          <video ref={video} data-src={src} poster={poster} muted loop playsInline preload="none" width={1280} height={720} aria-hidden="true" />
        )}
      </div>
      <figcaption className="lc-caption">
        {step !== undefined && <span className="lc-step">{step}</span>}
        {caption}
      </figcaption>
    </figure>
  );
}
