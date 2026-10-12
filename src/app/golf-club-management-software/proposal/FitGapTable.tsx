"use client";

import { Fragment, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { AppArea, Feature } from "./features";
import type { Competitor } from "./competitors";
import { coverageOf } from "./proposal";
import { AiMark, StatusPill } from "./CoverageExplorer";
import { RatingCell } from "./CompareTable";

/**
 * The fit-gap as one table. Closed, it is the summary: a row for every app
 * and a total, each cell a rollup of how many of that app's features Club
 * Steward has and each other product advertises. Open an app (or choose
 * Detail) for its features, one row each, with the source behind every
 * rating.
 *
 * The two sides are counted the same way but read from different evidence:
 * Club Steward from its code, the others from their own public pages, where
 * "not found" is not the same as missing.
 */

interface Rollup {
  total: number;
  /** Club Steward: Built. Others: advertised in full. */
  full: number;
  /** Club Steward: Configure. Others: advertised in part. */
  part: number;
}

function ours(features: Feature[]): Rollup {
  const c = coverageOf(features);
  return { total: c.total, full: c.built, part: c.configure };
}

function theirs(c: Competitor, features: Feature[]): Rollup {
  let full = 0;
  let part = 0;
  for (const f of features) {
    const r = c.ratings[f.id]?.r;
    if (r === "Yes") full++;
    else if (r === "Partial") part++;
  }
  return { total: features.length, full, part };
}

const pct = (n: number, total: number) => (total ? Math.round((n / total) * 100) : 0);

function RollupCell({ r, us }: { r: Rollup; us?: boolean }) {
  const fit = pct(r.full + r.part, r.total);
  return (
    <span className="cp-fg-roll">
      <span className="cp-fg-bar" aria-hidden="true">
        <span className="cp-fg-full" style={{ width: `${pct(r.full, r.total)}%` }} />
        <span className="cp-fg-part" style={{ width: `${pct(r.part, r.total)}%` }} />
      </span>
      <b>{fit}%</b>
      <span className="cp-fg-count">
        {us
          ? `${r.full} built${r.part ? ` · ${r.part} to connect` : ""} of ${r.total}`
          : `${r.full} yes${r.part ? ` · ${r.part} partly` : ""} of ${r.total}`}
      </span>
    </span>
  );
}

export default function FitGapTable({
  apps,
  competitors,
  researched,
}: {
  apps: AppArea[];
  competitors: Competitor[];
  researched: string;
}) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const all = apps.flatMap((a) => a.features);
  const detail = open.size === apps.length;

  function toggle(key: string) {
    setOpen((o) => {
      const n = new Set(o);
      if (n.has(key)) n.delete(key);
      else n.add(key);
      return n;
    });
  }

  return (
    <div className="cp-fg">
      <div className="cp-fg-tools">
        <div className="cp-years" role="radiogroup" aria-label="View">
          <button
            type="button"
            role="radio"
            aria-checked={open.size === 0}
            className={open.size === 0 ? "cp-year cp-year-on" : "cp-year"}
            onClick={() => setOpen(new Set())}
          >
            Summary
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={detail}
            className={detail ? "cp-year cp-year-on" : "cp-year"}
            onClick={() => setOpen(new Set(apps.map((a) => a.key)))}
          >
            Detail
          </button>
        </div>
        <ul className="cp-legend" role="list">
          <li>
            <span className="cp-fg-key cp-fg-full" /> Club Steward built · others advertise it
          </li>
          <li>
            <span className="cp-fg-key cp-fg-part" /> Club Steward needs your account · others advertise part
          </li>
        </ul>
      </div>

      <div className="cp-compare-scroll cp-fg-scroll" tabIndex={0} role="region" aria-label="Fit-gap by app">
        <table className="cp-compare-table cp-fg-table">
          <caption className="cp-sr">
            Fit-gap: for each app, how many features Club Steward has and each other product advertises. Open an app
            for its features.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="cp-compare-feature">
                App
              </th>
              <th scope="col" className="cp-compare-us">
                Club Steward
              </th>
              {competitors.map((c) => (
                <th scope="col" key={c.name}>
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="cp-fg-total">
              <th scope="row" className="cp-compare-feature">
                All apps
                <span className="cp-compare-app">{all.length} features</span>
              </th>
              <td className="cp-compare-us">
                <RollupCell r={ours(all)} us />
              </td>
              {competitors.map((c) => (
                <td key={c.name}>
                  <RollupCell r={theirs(c, all)} />
                </td>
              ))}
            </tr>
            {apps.map((a) => {
              const isOpen = open.has(a.key);
              return (
                <Fragment key={a.key}>
                  <tr className={`cp-fg-app${isOpen ? " cp-compare-open" : ""}`}>
                    <th scope="row" className="cp-compare-feature">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`cp-fg-${a.key}`}
                        onClick={() => toggle(a.key)}
                      >
                        <span>
                          {a.name}
                          <span className="cp-compare-app">{a.features.length} features</span>
                        </span>
                        <ChevronDown size={15} aria-hidden="true" className={isOpen ? "cp-flip" : ""} />
                      </button>
                    </th>
                    <td className="cp-compare-us">
                      <RollupCell r={ours(a.features)} us />
                    </td>
                    {competitors.map((c) => (
                      <td key={c.name}>
                        <RollupCell r={theirs(c, a.features)} />
                      </td>
                    ))}
                  </tr>
                  {isOpen &&
                    a.features.map((f, i) => (
                      <tr key={f.id} className="cp-fg-feature" id={i === 0 ? `cp-fg-${a.key}` : undefined}>
                        <th scope="row" className="cp-compare-feature">
                          <span className="cp-fg-fname">
                            {f.name} {f.ai && <AiMark />}
                          </span>
                          {f.note && <span className="cp-fg-note">{f.note}</span>}
                        </th>
                        <td className="cp-compare-us">
                          <StatusPill status={f.status} />
                        </td>
                        {competitors.map((c) => {
                          const r = c.ratings[f.id];
                          return (
                            <td key={c.name}>
                              <RatingCell r={r?.r} />
                              {r?.src && (
                                <a
                                  className="cp-fg-src"
                                  href={r.src}
                                  target="_blank"
                                  rel="noopener noreferrer nofollow"
                                  title={r.note}
                                >
                                  Source <ExternalLink size={11} aria-hidden="true" />
                                </a>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="cp-muted cp-compare-fine">
        Club Steward is rated from its code. Other products are rated from their own public websites, read in{" "}
        {researched}: the percentage counts what each advertises in full or in part, and a feature with no public
        mention counts against it even though the product may have it. Product names belong to their owners.
      </p>
    </div>
  );
}
