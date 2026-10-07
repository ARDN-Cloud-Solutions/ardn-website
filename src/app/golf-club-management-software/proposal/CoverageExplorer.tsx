"use client";

import { useMemo, useRef, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import type { AppArea, Feature, FeatureStatus } from "./features";
import { coverageOf } from "./proposal";

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

export default function CoverageExplorer({ apps }: { apps: AppArea[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const panel = useRef<HTMLDivElement>(null);
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
                  <span className="cp-card-pct">{c.percent}%</span>
                </span>
                <CoverageBar features={a.features} />
                <span className="cp-card-meta">
                  {c.built + c.configure} of {c.total} covered
                  {c.ai > 0 && (
                    <>
                      {" · "}
                      <AiMark count={c.ai} />
                    </>
                  )}
                </span>
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
                <b>{counts.percent}%</b> covered
              </p>
            </div>
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
                {shown.map((f) => (
                  <li key={f.id} className="cp-feature">
                    <StatusPill status={f.status} />
                    <div>
                      <p className="cp-feature-name">
                        {f.name} {f.ai && <AiMark />}
                      </p>
                      {f.note && <p className="cp-feature-note">{f.note}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </>
  );
}
