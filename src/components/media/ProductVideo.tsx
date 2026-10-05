"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { runtime as fmt, type Chapter } from "./videos";
import "./media.css";

type Gtag = (...args: unknown[]) => void;

export type ProductVideoProps = {
  src: string;
  poster: string;
  /** WebVTT captions, served beside the mp4. */
  captions?: string;
  title: string;
  /** Length in seconds, shown on the play button. */
  seconds: number;
  /** Optional chapter list rendered under the player; clicking seeks. */
  chapters?: readonly Chapter[];
  /** Analytics page id (video_play event). */
  page: string;
  /** Smaller card treatment for "more walkthroughs" rows. */
  compact?: boolean;
  /** Shown under compact cards. */
  caption?: string;
  className?: string;
};

/**
 * Self-hosted product video. Renders the poster with a play button and no
 * network cost (preload="none"); on the first click it hands over to the
 * native controls with sound, since playback only ever starts from a click.
 * The 16/9 box is reserved up front so nothing shifts when it mounts.
 */
export default function ProductVideo({
  src,
  poster,
  captions,
  title,
  seconds,
  chapters,
  page,
  compact,
  caption,
  className,
}: ProductVideoProps) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function start(at?: number) {
    const el = video.current;
    if (!el) return;
    if (!playing) {
      setPlaying(true);
      const gtag = (window as unknown as { gtag?: Gtag }).gtag;
      if (typeof gtag === "function") gtag("event", "video_play", { video: title, page, location: at === undefined ? "poster" : "chapter" });
    }
    const go = () => {
      if (at !== undefined) el.currentTime = at;
      el.play().catch(() => {});
    };
    if (at !== undefined && el.readyState === 0) {
      el.addEventListener("loadedmetadata", go, { once: true });
      el.load();
    } else {
      go();
    }
  }

  return (
    <figure className={`mv${compact ? " mv-compact" : ""}${className ? ` ${className}` : ""}`}>
      <div className="mv-frame">
        <video
          ref={video}
          src={src}
          poster={poster}
          controls={playing}
          playsInline
          preload="none"
          width={1920}
          height={1080}
          onPlay={() => setPlaying(true)}
        >
          {captions && <track kind="captions" src={captions} srcLang="en" label="English" />}
        </video>
        {!playing && (
          <button type="button" className="mv-play" onClick={() => start()} aria-label={`Play ${title} (${fmt(seconds)})`}>
            <span className="mv-ring" aria-hidden="true">
              <Play size={compact ? 18 : 28} strokeWidth={0} fill="currentColor" />
            </span>
            <span className="mv-label">
              {compact ? title : "Watch"} · {fmt(seconds)}
            </span>
          </button>
        )}
      </div>
      {caption && <figcaption className="mv-caption">{caption}</figcaption>}
      {chapters && chapters.length > 0 && (
        <ol className="mv-chapters" aria-label={`${title} chapters`}>
          {chapters.map((c) => (
            <li key={c.time}>
              <button type="button" onClick={() => start(c.time)}>
                <span className="mv-time">{fmt(c.time)}</span>
                {c.label}
              </button>
            </li>
          ))}
        </ol>
      )}
    </figure>
  );
}
