"use client";

import { useEffect, useRef } from "react";
import { Play, X } from "lucide-react";
import { track } from "./TrackedLink";
import { VIDEOS, runtime, videoCaptions, videoPoster, videoSrc } from "@/components/media/videos";

// The hero's modal plays the same overview cut that sits inline in #video.
const VIDEO = VIDEOS.clubStewardOverview;
const SRC = videoSrc(VIDEO);
const POSTER = videoPoster(VIDEO);
const CAPTIONS = videoCaptions(VIDEO);
const OPEN_EVENT = "cs:open-walkthrough";
export const RUNTIME = runtime(VIDEO.seconds);

/**
 * Walkthrough video: one modal player (mounted once, by the hero) and any
 * number of triggers. Triggers dispatch OPEN_EVENT, so the player and the
 * buttons can live anywhere on the page. The video has captions, a
 * voiceover and music (scripts/club-steward-video); it plays with sound
 * because it only starts from a click. preload="none" keeps the file off
 * the network until someone asks.
 */
export function WalkthroughPlayer() {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const open = (e: Event) => {
      dialog.current?.showModal();
      video.current?.play().catch(() => {});
      const from = (e as CustomEvent<string>).detail ?? "unknown";
      track("video_play", {
        video: VIDEO.slug,
        location: from,
        page: "golf-club-management-software",
      });
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  function close() {
    video.current?.pause();
    dialog.current?.close();
  }

  return (
    <dialog
      ref={dialog}
      className="gc-video-dialog"
      aria-label="Club Steward walkthrough video"
      onClose={() => video.current?.pause()}
      onClick={(e) => {
        if (e.target === dialog.current) close();
      }}
    >
      <div className="gc-video-frame">
        <button type="button" className="gc-video-close" onClick={close} aria-label="Close video">
          <X size={20} strokeWidth={2} />
        </button>
        <video
          ref={video}
          src={SRC}
          poster={POSTER}
          controls
          playsInline
          preload="none"
          width={1920}
          height={1080}
        >
          <track kind="captions" src={CAPTIONS} srcLang="en" label="English" />
        </video>
      </div>
    </dialog>
  );
}

const openWalkthrough = (location: string) =>
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: location }));

/** Text button with a play icon, for CTA rows. */
export function WalkthroughButton({ className, location }: { className?: string; location: string }) {
  return (
    <button type="button" className={className} onClick={() => openWalkthrough(location)}>
      <span className="gc-play-dot" aria-hidden="true">
        <Play size={12} strokeWidth={0} fill="currentColor" />
      </span>
      Watch the walkthrough · {RUNTIME}
    </button>
  );
}

/** Large centred play button laid over a screenshot. */
export function WalkthroughOverlay({ location }: { location: string }) {
  return (
    <button
      type="button"
      className="gc-play-overlay"
      onClick={() => openWalkthrough(location)}
      aria-label={`Play the ${RUNTIME} Club Steward walkthrough video`}
    >
      <span className="gc-play-ring" aria-hidden="true">
        <Play size={30} strokeWidth={0} fill="currentColor" />
      </span>
      <span className="gc-play-label">Watch the walkthrough · {RUNTIME}</span>
    </button>
  );
}
