"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { AlertCircle, CheckCircle2, Printer, RotateCcw } from "lucide-react";
import type { AppArea } from "./features";
import {
  COST_FIELDS,
  EMPTY_COSTS,
  coverageOf,
  fieldId,
  formatDollars,
  missingCosts,
  startingChoices,
  totalsOf,
  typedDollars,
  type Choices,
  type CostKey,
} from "./proposal";
import { AiMark, CoverageBar } from "./CoverageExplorer";

/**
 * Build a proposal app by app: keep the current system, or move it to Club
 * Steward with today's and the future yearly costs. A moved app needs all four
 * costs; the page says which are missing, beside the field and in a list at
 * the top, once the person has left a field or asked to check.
 *
 * What the person types is kept in this browser only, so a refresh does not
 * lose it. It is never sent anywhere.
 */

const STORE = "club-steward-proposal-v1";

interface Saved {
  preparedFor: string;
  choices: Choices;
}

function readSaved(apps: AppArea[]): Saved | null {
  try {
    const raw = window.localStorage.getItem(STORE);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Saved;
    const choices = startingChoices(apps);
    for (const a of apps) {
      const c = saved.choices?.[a.key];
      if (c) choices[a.key] = { move: Boolean(c.move), costs: { ...EMPTY_COSTS, ...c.costs } };
    }
    return { preparedFor: String(saved.preparedFor ?? ""), choices };
  } catch {
    // Storage blocked or an old shape: start fresh, which is what an empty store means too.
    return null;
  }
}

function writeSaved(saved: Saved) {
  try {
    window.localStorage.setItem(STORE, JSON.stringify(saved));
  } catch {
    // Storage blocked (private window): the proposal still works, it just won't survive a refresh.
  }
}

const noSubscribe = () => () => {};

/**
 * Browser storage exists only once the page reaches the browser, so the form
 * first renders empty (as the server did) and is then started again from what
 * this browser saved.
 */
export default function ProposalBuilder({ apps }: { apps: AppArea[] }) {
  const inBrowser = useSyncExternalStore(noSubscribe, () => true, () => false);
  const saved = useMemo(() => (inBrowser ? readSaved(apps) : null), [inBrowser, apps]);
  // Only the browser's form saves: the first, empty one must not overwrite
  // what was saved before it is read.
  return <ProposalForm key={inBrowser ? "browser" : "server"} apps={apps} saved={saved} persist={inBrowser} />;
}

function ProposalForm({ apps, saved, persist }: { apps: AppArea[]; saved: Saved | null; persist: boolean }) {
  const [choices, setChoices] = useState<Choices>(() => saved?.choices ?? startingChoices(apps));
  const [preparedFor, setPreparedFor] = useState(saved?.preparedFor ?? "");
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [checked, setChecked] = useState(false);
  const summary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (persist) writeSaved({ preparedFor, choices });
  }, [persist, preparedFor, choices]);

  const missing = useMemo(() => missingCosts(apps, choices), [apps, choices]);
  const totals = useMemo(() => totalsOf(apps, choices), [apps, choices]);
  const missingIds = useMemo(() => new Set(missing.map((m) => fieldId(m.app, m.key))), [missing]);
  const shownErrors = missing.filter((m) => checked || touched.has(fieldId(m.app, m.key)));
  const complete = totals.moved > 0 && missing.length === 0;

  function setMove(app: string, move: boolean) {
    setChoices((c) => ({ ...c, [app]: { ...c[app], move } }));
  }

  function setCost(app: string, key: CostKey, value: string) {
    setChoices((c) => ({ ...c, [app]: { ...c[app], costs: { ...c[app].costs, [key]: value.replace(/[^0-9]/g, "") } } }));
  }

  function check() {
    setChecked(true);
    if (missing.length) {
      requestAnimationFrame(() => summary.current?.focus());
      return false;
    }
    return true;
  }

  function print() {
    if (check() && totals.moved > 0) window.print();
  }

  function startOver() {
    setChoices(startingChoices(apps));
    setPreparedFor("");
    setTouched(new Set());
    setChecked(false);
  }

  return (
    <div className="cp-builder">
      <div className="cp-builder-main">
        <label className="cp-field cp-prepared">
          <span className="cp-label">Prepared for</span>
          <input
            className="cp-input"
            type="text"
            value={preparedFor}
            placeholder="Club or company name"
            onChange={(e) => setPreparedFor(e.target.value)}
          />
        </label>

        {shownErrors.length > 0 && (
          <div className="cp-error-summary" role="alert" tabIndex={-1} ref={summary}>
            <p className="cp-error-title">
              <AlertCircle size={18} aria-hidden="true" />
              {shownErrors.length === 1 ? "1 cost is missing" : `${shownErrors.length} costs are missing`}
            </p>
            <ul>
              {shownErrors.map((m) => (
                <li key={fieldId(m.app, m.key)}>
                  <a href={`#${fieldId(m.app, m.key)}`}>
                    {m.appName}: {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="cp-apps" role="list">
          {apps.map((a) => {
            const choice = choices[a.key];
            const c = coverageOf(a.features);
            const switchId = `move-${a.key}`;
            return (
              <li key={a.key} className={`cp-app${choice.move ? " cp-app-on" : ""}`}>
                <div className="cp-app-head">
                  <div className="cp-app-title">
                    <span className="cp-app-name">{a.name}</span>
                    <span className="cp-app-cov">
                      {c.percent}% covered
                      {c.ai > 0 && (
                        <>
                          {" · "}
                          <AiMark count={c.ai} />
                        </>
                      )}
                    </span>
                    <CoverageBar features={a.features} />
                  </div>
                  <div className="cp-switch-wrap">
                    <span className="cp-switch-text" id={`${switchId}-text`}>
                      {choice.move ? "Move to Club Steward" : "Keep current system"}
                    </span>
                    <button
                      id={switchId}
                      type="button"
                      role="switch"
                      aria-checked={choice.move}
                      aria-label={`Move ${a.name} to Club Steward`}
                      className="cp-switch"
                      onClick={() => setMove(a.key, !choice.move)}
                    >
                      <span className="cp-switch-knob" />
                    </button>
                  </div>
                </div>

                {choice.move && (
                  <div className="cp-costs">
                    {(["current", "future"] as const).map((when) => (
                      <fieldset key={when} className="cp-cost-group">
                        <legend>{when === "current" ? "Today, per year" : "On Club Steward, per year"}</legend>
                        {COST_FIELDS.filter((f) => f.when === when).map((f) => {
                          const id = fieldId(a.key, f.key);
                          const showError = missingIds.has(id) && (checked || touched.has(id));
                          return (
                            <div key={f.key} className="cp-field">
                              <label className="cp-label" htmlFor={id}>
                                {f.short}
                                <span className="cp-required" aria-hidden="true"> *</span>
                              </label>
                              <span className={`cp-money${showError ? " cp-money-error" : ""}`}>
                                <span aria-hidden="true">$</span>
                                <input
                                  id={id}
                                  className="cp-input"
                                  inputMode="numeric"
                                  autoComplete="off"
                                  required
                                  aria-required="true"
                                  aria-invalid={showError}
                                  aria-describedby={showError ? `${id}-error` : undefined}
                                  value={typedDollars(choice.costs[f.key])}
                                  placeholder="Yearly amount"
                                  onChange={(e) => setCost(a.key, f.key, e.target.value)}
                                  onBlur={() => setTouched((t) => new Set(t).add(id))}
                                />
                              </span>
                              {showError && (
                                <span id={`${id}-error`} className="cp-field-error">
                                  Enter a yearly amount. Enter 0 if there is none.
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </fieldset>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <aside className="cp-summary" aria-label="Proposal summary">
        <h3 className="cp-h3">{preparedFor ? `Proposal for ${preparedFor}` : "Your proposal"}</h3>
        <p className="cp-muted">
          {totals.moved === 0
            ? "Turn on an app to move it to Club Steward."
            : `${totals.moved} of ${apps.length} apps moving to Club Steward.`}
        </p>
        <table className="cp-totals">
          <thead>
            <tr>
              <th scope="col">Per year</th>
              <th scope="col">Today</th>
              <th scope="col">Club Steward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Platform</th>
              <td>{formatDollars(totals.currentPlatform)}</td>
              <td>{formatDollars(totals.futurePlatform)}</td>
            </tr>
            <tr>
              <th scope="row">Support</th>
              <td>{formatDollars(totals.currentSupport)}</td>
              <td>{formatDollars(totals.futureSupport)}</td>
            </tr>
            <tr className="cp-totals-sum">
              <th scope="row">Total</th>
              <td>{formatDollars(totals.current)}</td>
              <td>{formatDollars(totals.future)}</td>
            </tr>
          </tbody>
        </table>
        {complete ? (
          <div className={`cp-saving${totals.saving < 0 ? " cp-saving-more" : ""}`}>
            <span>{totals.saving >= 0 ? "Saved each year" : "Added each year"}</span>
            <b>{formatDollars(Math.abs(totals.saving))}</b>
            <span className="cp-muted">{formatDollars(Math.abs(totals.saving) * 3)} over three years</span>
          </div>
        ) : (
          totals.moved > 0 && (
            <p className="cp-incomplete">
              <AlertCircle size={15} aria-hidden="true" /> {missing.length}{" "}
              {missing.length === 1 ? "cost is" : "costs are"} missing. The difference shows once every cost is in.
            </p>
          )
        )}
        {checked && complete && (
          <p className="cp-complete">
            <CheckCircle2 size={15} aria-hidden="true" /> Every cost is in.
          </p>
        )}
        <div className="cp-actions no-print">
          <button type="button" className="gc-btn gc-btn-gold" onClick={print} disabled={totals.moved === 0}>
            <Printer size={16} aria-hidden="true" /> Print or save as PDF
          </button>
          <button type="button" className="cp-link-btn" onClick={() => check()}>
            Check for missing costs
          </button>
          <button type="button" className="cp-link-btn" onClick={startOver}>
            <RotateCcw size={14} aria-hidden="true" /> Start over
          </button>
        </div>

        <div className="cp-print-only">
          <table className="cp-totals">
            <thead>
              <tr>
                <th scope="col">App</th>
                <th scope="col">Today</th>
                <th scope="col">Club Steward</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((a) => {
                const ch = choices[a.key];
                if (!ch.move) {
                  return (
                    <tr key={a.key}>
                      <th scope="row">{a.name}</th>
                      <td colSpan={2}>Keep current system</td>
                    </tr>
                  );
                }
                const n = (k: CostKey) => Number(ch.costs[k] || 0);
                return (
                  <tr key={a.key}>
                    <th scope="row">{a.name}</th>
                    <td>{formatDollars(n("currentPlatform") + n("currentSupport"))}</td>
                    <td>{formatDollars(n("futurePlatform") + n("futureSupport"))}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </aside>
    </div>
  );
}
