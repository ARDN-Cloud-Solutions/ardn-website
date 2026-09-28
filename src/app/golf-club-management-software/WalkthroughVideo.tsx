"use client";

import { useRef } from "react";
import { Play, X } from "lucide-react";
import { track } from "./TrackedLink";

const SRC = "/videos/clubhouse360-walkthrough.mp4";
const POSTER = "/videos/clubhouse360-walkthrough-poster.webp";

/**
 * Hero "watch the walkthrough" button and its modal player. The video is
 * built from the real product screens with on-screen captions and a
 * voiceover (scripts/clubhouse360-video). It plays with sound because it
 * only starts from the visitor's click; captions carry it if they mute.
 * preload="none" keeps the ~19 MB file off the network until someone asks.
 */
export default function WalkthroughVideo({ className }: { className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  function open() {
    dialog.current?.showModal();
    video.current?.play().catch(() => {});
    track("video_play", { video: "clubhouse360-walkthrough", page: "golf-club-management-software" });
  }

  function close() {
    video.current?.pause();
    dialog.current?.close();
  }

  return (
    <>
      <button type="button" className={className} onClick={open}>
        <Play size={16} strokeWidth={2.25} aria-hidden="true" />
        Watch the walkthrough · 1:23
      </button>
      <dialog
        ref={dialog}
        className="gc-video-dialog"
        aria-label="Clubhouse360 walkthrough video"
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
            <track
              kind="captions"
              src="/videos/clubhouse360-walkthrough.vtt"
              srcLang="en"
              label="English"
            />
          </video>
        </div>
      </dialog>
    </>
  );
}
