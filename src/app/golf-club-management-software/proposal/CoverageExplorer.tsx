"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Sparkles, X } from "lucide-react";
import type { AppArea, Feature, FeatureStatus } from "./features";
import { coverageOf } from "./proposal";
import { SCREENS, screenSrc } from "./screens";
import { GUIDES, guideSrc, type FeatureGuide } from "./featureGuides";

/** A screen to enlarge: where it is served from, and its words. */
interface Zoomed {
  src: string;
  title: string;
  alt: string;
}

/**
 * Coverage by app: one card per app with its percent covered, and the
 * breakdown of its features under the grid when a card is opened.
 */

const STATUS_WORDS: Record<FeatureStatus, string> = {
  Built: "Built",
  Configure: "Configure",
  Gap: "Gap",
};

type Filter = "all" | "ai" | "Configure" | "Gap";

/** The AI mark; with a count it reads "2 AI" (two features use AI). */
export function AiMark({ count }: { count?: number }) {
  return (
    <span className="cp-ai" title={count === undefined ? "Uses AI" : `${count} ${count === 1 ? "feature uses" : "features use"} AI`}>
      <Sparkles size={13} aria-hidden="true" />
      {count === undefined ? "AI" : `${count} AI`}
    </span>
  );
}

/** One screen at full width over the page; Escape, the button or the backdrop closes it. */
function ScreenZoom({ screen, onClose }: { screen: Zoomed; onClose: () => void }) {
  const close = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const back = document.activeElement as HTMLElement | null;
    close.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      back?.focus();
    };
  }, [onClose]);
  return (
    <div className="cp-zoom" role="dialog" aria-modal="true" aria-label={screen.title} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <Image src={screen.src} alt={screen.alt} width={2880} height={1800} sizes="95vw" />
        <figcaption>
          <b>{screen.title}</b> {screen.alt}
        </figcaption>
      </figure>
      <button ref={close} type="button" className="cp-zoom-close" onClick={onClose} aria-label="Close">
        <X size={20} aria-hidden="true" />
      </button>
    </div>
  );
}

export function StatusPill({ status }: { status: FeatureStatus }) {
  return <span className={`cp-status cp-status-${status.toLowerCase()}`}>{STATUS_WORDS[status]}</span>;
}

export function CoverageBar({ features }: { features: Feature[] }) {
  const c = coverageOf(features);
  const pct = (n: number) => (c.total ? (n / c.total) * 100 : 0);
  return (
    <span className="cp-bar" aria-hidden="true">
      <span className="cp-bar-built" style={{ width: `${pct(c.built)}%` }} />
      <span className="cp-bar-configure" style={{ width: `${pct(c.configure)}%` }} />
    </span>
  );
}

/** A guide line, with the app's own labels (written **Label**) in bold. */
function Labels({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))}
    </>
  );
}

/** How a feature is done: who does it, the steps, and what they see when it worked. */
function HowItsDone({ guide }: { guide: FeatureGuide }) {
  return (
    <details className="cp-how">
      <summary>How it&rsquo;s done</summary>
      {guide.who && (
        <p className="cp-how-who">
          <b>Who:</b> <Labels text={guide.who} />
        </p>
      )}
      <ol>
        {guide.steps.map((s, i) => (
          <li key={i}>
            <Labels text={s} />
          </li>
        ))}
      </ol>
      {guide.result && (
        <p className="cp-how-result">
          <b>When it worked:</b> <Labels text={guide.result} />
        </p>
      )}
    </details>
  );
}

/**
 * `catalog` is the marketing page's view: only what is built (Built and
 * Configure), each card showing how many features it has instead of a percent.
 * `guides` is the proposal page's view: each feature carries its own screen and
 * how it is done, in place of the app's handful of screens.
 */
export default function CoverageExplorer({
  apps: allApps,
  catalog = false,
  guides = false,
}: {
  apps: AppArea[];
  catalog?: boolean;
  guides?: boolean;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [zoom, setZoom] = useState<Zoomed | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const apps = useMemo(
    () => (catalog ? allApps.map((a) => ({ ...a, features: a.features.filter((f) => f.status !== "Gap") })) : allApps),
    [allApps, catalog],
  );
  const app = apps.find((a) => a.key === open) ?? null;

  const shown = useMemo(() => {
    if (!app) return [];
    if (filter === "all") return app.features;
    if (filter === "ai") return app.features.filter((f) => f.ai);
    return app.features.filter((f) => f.status === filter);
  }, [app, filter]);

  function toggle(key: string) {
    const next = open === key ? null : key;
    setOpen(next);
    setFilter("all");
    if (next) requestAnimationFrame(() => panel.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  const counts = app ? coverageOf(app.features) : null;
  const screens = app && !guides ? (SCREENS[app.key] ?? []) : [];

  return (
    <>
      <ul className="cp-grid" role="list">
        {apps.map((a) => {
          const c = coverageOf(a.features);
          const isOpen = open === a.key;
          return (
            <li key={a.key}>
              <button
                type="button"
                className={`cp-card${isOpen ? " cp-card-open" : ""}`}
                aria-expanded={isOpen}
                aria-controls="cp-breakdown"
                onClick={() => toggle(a.key)}
              >
                <span className="cp-card-top">
                  <span className="cp-card-name">{a.name}</span>
                  <span className="cp-card-pct">{catalog ? c.total : `${c.percent}%`}</span>
                </span>
                {catalog ? <span className="cp-card-meta">{a.blurb}</span> : <CoverageBar features={a.features} />}
                {/* The catalog's count is already the big number, so its meta line is only the AI mark. */}
                {(!catalog || c.ai > 0) && (
                  <span className="cp-card-meta">
                    {!catalog && `${c.built + c.configure} of ${c.total} covered`}
                    {c.ai > 0 && (
                      <>
                        {!catalog && " · "}
                        <AiMark count={c.ai} />
                      </>
                    )}
                  </span>
                )}
                <span className="cp-card-more">
                  {isOpen ? "Hide features" : "See features"}
                  <ChevronDown size={15} aria-hidden="true" className={isOpen ? "cp-flip" : ""} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div id="cp-breakdown" ref={panel} className="cp-breakdown" hidden={!app}>
        {app && counts && (
          <>
            <div className="cp-breakdown-head">
              <div>
                <h3 className="cp-h3">{app.name}</h3>
                <p className="cp-muted">{app.blurb}</p>
              </div>
              <p className="cp-breakdown-pct">
                {catalog ? (
                  <>
                    <b>{counts.total}</b> features
                  </>
                ) : (
                  <>
                    <b>{counts.percent}%</b> covered
                  </>
                )}
              </p>
            </div>
            {screens.length > 0 && (
              <ul className="cp-shots" role="list" aria-label={`${app.name} screens`}>
                {screens.map((s) => (
                  <li key={s.file}>
                    <figure className="cp-shot">
                      <button type="button" onClick={() => setZoom({ src: screenSrc(s.file), title: s.title, alt: s.alt })} aria-label={`Enlarge: ${s.title}`}>
                        <Image
                          src={screenSrc(s.file)}
                          alt={s.alt}
                          width={2880}
                          height={1800}
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      </button>
                      <figcaption>{s.title}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            )}
            <div className="cp-filters" role="group" aria-label="Show">
              {(
                [
                  ["all", `All ${counts.total}`],
                  ["ai", `AI ${counts.ai}`],
                  ["Configure", `Configure ${counts.configure}`],
                  ["Gap", `Gap ${counts.gap}`],
                ] as [Filter, string][]
              )
                // A filter with nothing behind it is not offered.
                .filter(([k]) => k === "all" || (k === "ai" ? counts.ai : k === "Configure" ? counts.configure : counts.gap) > 0)
                .map(([k, label]) => (
                <button
                  key={k}
                  type="button"
                  className={`cp-chip${filter === k ? " cp-chip-on" : ""}`}
                  aria-pressed={filter === k}
                  onClick={() => setFilter(k)}
                >
                  {label}
                </button>
              ))}
            </div>
            {shown.length === 0 ? (
              <p className="cp-muted cp-empty">Nothing in {app.name} for this filter.</p>
            ) : (
              <ul className="cp-features" role="list">
                {shown.map((f) => {
                  const guide = guides ? GUIDES[f.id] : undefined;
                  return (
                    <li key={f.id} className={`cp-feature${guide?.shots.length ? " cp-feature-shot" : ""}`}>
                      <StatusPill status={f.status} />
                      <div>
                        <p className="cp-feature-name">
                          {f.name} {f.ai && <AiMark />}
                        </p>
                        {f.note && <p className="cp-feature-note">{f.note}</p>}
                        {guide && guide.steps.length > 0 && <HowItsDone guide={guide} />}
                      </div>
                      {guide && guide.shots.length > 0 && (
                        <div className="cp-feature-shots">
                          {guide.shots.map((s) => (
                            <figure key={s.file} className="cp-shot">
                              <button
                                type="button"
                                onClick={() => setZoom({ src: guideSrc(s.file), title: s.title, alt: s.alt })}
                                aria-label={`Enlarge: ${s.title}`}
                              >
                                <Image src={guideSrc(s.file)} alt={s.alt} width={2880} height={1800} sizes="(max-width: 900px) 100vw, 340px" />
                              </button>
                              <figcaption>{s.title}</figcaption>
                            </figure>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </div>
      {zoom && <ScreenZoom screen={zoom} onClose={() => setZoom(null)} />}
    </>
  );
}
