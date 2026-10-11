"use client";

import { CheckCircle2 } from "lucide-react";
import { formatDollars, type Outlook, type WhatIf } from "./proposal";

/**
 * The whole picture: today against the future over the years the person
 * picks, with two levers of their own. Bars are drawn to the larger side so
 * the difference reads at a glance.
 */
export default function ProposalOutlook({
  result,
  whatIf,
  ready,
  onChange,
  onSettle,
}: {
  result: Outlook;
  whatIf: WhatIf;
  /** Every cost needed for the difference is in. */
  ready: boolean;
  onChange: (w: WhatIf) => void;
  /** A lever was let go: the moment to count the what-if. */
  onSettle: (w: WhatIf) => void;
}) {
  const top = Math.max(result.today, result.future, 1);
  const kept = result.future - result.steward;
  const span = whatIf.years === 1 ? "a year" : `over ${whatIf.years} years`;
  const pct = (n: number) => `${Math.max(0, Math.min(100, (n / top) * 100))}%`;

  return (
    <section className="cp-outlook" aria-labelledby="cp-outlook-title">
      <div className="cp-outlook-head">
        <h3 id="cp-outlook-title" className="cp-outlook-title">
          The whole picture
        </h3>
        <div className="cp-years" role="radiogroup" aria-label="Years to add up">
          {([1, 3, 5] as const).map((y) => (
            <button
              key={y}
              type="button"
              role="radio"
              aria-checked={whatIf.years === y}
              className={whatIf.years === y ? "cp-year cp-year-on" : "cp-year"}
              onClick={() => {
                const w = { ...whatIf, years: y };
                onChange(w);
                onSettle(w);
              }}
            >
              {y === 1 ? "1 year" : `${y} years`}
            </button>
          ))}
        </div>
      </div>

      <div className="cp-bars" aria-hidden="true">
        <div className="cp-bar-row">
          <span className="cp-bar-label">Today</span>
          <span className="cp-bar-track">
            <span className="cp-bar cp-bar-today" style={{ width: pct(result.today) }} />
          </span>
          <b>{formatDollars(result.today)}</b>
        </div>
        <div className="cp-bar-row">
          <span className="cp-bar-label">With Club Steward</span>
          <span className="cp-bar-track">
            <span className="cp-bar cp-bar-steward" style={{ width: pct(result.steward) }} />
            <span className="cp-bar cp-bar-kept" style={{ width: pct(kept) }} />
          </span>
          <b>{formatDollars(result.future)}</b>
        </div>
        <p className="cp-bar-key">
          <span>
            <span className="cp-key cp-key-steward" /> Club Steward
          </span>
          <span>
            <span className="cp-key cp-key-kept" /> Staying on today&apos;s systems, and the estate after the move
          </span>
        </p>
      </div>

      <p className="cp-sr" aria-live="polite">
        Today {formatDollars(result.today)}, with Club Steward {formatDollars(result.future)}, {span}.
      </p>

      {ready ? (
        <p className={`cp-verdict cp-outlook-verdict${result.saving < 0 ? " cp-saving-more" : ""}`}>
          <CheckCircle2 size={16} aria-hidden="true" />
          {result.saving >= 0 ? `Saved ${span}: ` : `Added ${span}: `}
          <b>{formatDollars(Math.abs(result.saving))}</b>
        </p>
      ) : (
        <p className="cp-muted cp-outlook-verdict">The difference shows once every cost it needs is in.</p>
      )}

      <div className="cp-levers">
        <label className="cp-lever">
          <span className="cp-label">
            Today&apos;s costs rise each year by <output>{whatIf.rise}%</output>
          </span>
          <input
            type="range"
            min={0}
            max={15}
            step={1}
            value={whatIf.rise}
            onChange={(e) => onChange({ ...whatIf, rise: Number(e.target.value) })}
            onPointerUp={() => onSettle(whatIf)}
            onKeyUp={() => onSettle(whatIf)}
          />
          <span className="cp-muted cp-lever-note">
            Applies to today&apos;s systems on both sides, from the second year. Club Steward costs stay as typed.
          </span>
        </label>
        <label className="cp-lever">
          <span className="cp-label">
            Club Steward costs land{" "}
            <output>
              {whatIf.adjust === 0 ? "as typed" : `${whatIf.adjust > 0 ? "+" : ""}${whatIf.adjust}%`}
            </output>
          </span>
          <input
            type="range"
            min={-30}
            max={30}
            step={5}
            value={whatIf.adjust}
            onChange={(e) => onChange({ ...whatIf, adjust: Number(e.target.value) })}
            onPointerUp={() => onSettle(whatIf)}
            onKeyUp={() => onSettle(whatIf)}
          />
          <span className="cp-muted cp-lever-note">Test how much room the decision has if the costs come in higher or lower.</span>
        </label>
      </div>
    </section>
  );
}
