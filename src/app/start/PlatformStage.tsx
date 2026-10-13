"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import type { Platform } from "./hooks";

// "Platforms we've built and run" as a scroll story. Without JS (and on
// phones) every platform is a full card with its own screenshot. With JS on
// a wide screen, the screenshots move into one sticky browser frame that
// crossfades as each platform's copy scrolls past its middle.

export default function PlatformStage({ platforms }: { platforms: Platform[] }) {
  const [active, setActive] = useState(0);
  // true once hydrated in a browser that can run the scroll stage
  const live = useSyncExternalStore(
    noop,
    () => typeof IntersectionObserver !== "undefined",
    () => false,
  );
  const steps = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = steps.current.indexOf(e.target as HTMLLIElement);
          if (i >= 0) setActive(i);
        }
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );
    steps.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const jumpTo = (i: number) => {
    const el = steps.current[i];
    if (!el) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const y = el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2 - window.innerHeight / 2;
    window.scrollTo({ top: y, behavior: calm ? "auto" : "smooth" });
  };

  const current = platforms[active];

  return (
    <section className="lnd-stage" aria-labelledby="lnd-stage-title">
      <div className="lnd-stage-light" aria-hidden="true" />
      <div className="lnd-wrap">
        <div className="lnd-stage-intro">
          <span className="lnd-kicker">What we&apos;ve shipped</span>
          <h2 id="lnd-stage-title" className="lnd-display lnd-display-dark">
            Platforms we&apos;ve built and&nbsp;run.
          </h2>
          <p className="lnd-intro-text">
            These are the kinds of organizations we&apos;ve built platforms for. Real screens from software our team designed, launched and still runs every
            day.
          </p>
        </div>

        <div className={`lnd-stage-grid${live ? " is-live" : ""}`}>
          <ol className="lnd-stage-steps">
            {platforms.map((p, i) => (
              <li
                key={p.name}
                ref={(el) => {
                  steps.current[i] = el;
                }}
                className={`lnd-stage-step${i === active ? " is-on" : ""}`}
              >
                <article className="lnd-step-card">
                  <span className="lnd-step-count" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                    <span> / {String(platforms.length).padStart(2, "0")}</span>
                  </span>
                  <p className="lnd-step-for">{p.audience}</p>
                  <h3 className="lnd-step-name">{p.name}</h3>
                  <p className="lnd-step-outcome">{p.outcome}</p>
                  <figure className={`lnd-frame lnd-step-shot lnd-tone-${p.tone}`}>
                    <FrameBar label={p.name} />
                    <div className="lnd-frame-screen">
                      <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="(max-width: 1023px) calc(100vw - 32px), 560px" />
                    </div>
                  </figure>
                  <ul className="lnd-step-points">
                    {p.points.map((pt) => (
                      <li key={pt}>
                        <Check size={16} strokeWidth={2.6} aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <a className="lnd-step-link" href={p.href} target="_blank" rel="noopener">
                    See {p.name}
                    <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
                    <span className="lnd-sr"> (opens in a new tab)</span>
                  </a>
                </article>
              </li>
            ))}
          </ol>

          <div className="lnd-stage-view">
            <div className="lnd-stage-sticky">
              <div className={`lnd-stage-glow lnd-tone-${current.tone}`} aria-hidden="true" />
              <div className="lnd-frame lnd-frame-big" aria-hidden="true">
                <FrameBar label={current.name} />
                <div className="lnd-frame-screen">
                  {platforms.map((p, i) => (
                    <Image
                      key={p.src}
                      src={p.src}
                      alt=""
                      width={p.width}
                      height={p.height}
                      sizes="(max-width: 1023px) 10px, 720px"
                      className={i === active ? "is-on" : undefined}
                    />
                  ))}
                </div>
              </div>
              <div className="lnd-stage-tabs" role="group" aria-label="Jump to a platform">
                {platforms.map((p, i) => (
                  <button key={p.name} type="button" className={i === active ? "is-on" : undefined} aria-current={i === active ? "true" : undefined} onClick={() => jumpTo(i)}>
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function noop() {
  return () => {};
}

function FrameBar({ label }: { label: string }) {
  return (
    <div className="lnd-frame-bar">
      <span className="lnd-frame-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="lnd-frame-url">{label}</span>
    </div>
  );
}
