"use client";

import { Fragment, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { AlertCircle, ChevronDown, Printer, RotateCcw } from "lucide-react";
import type { AppArea } from "./features";
import {
  COST_FIELDS,
  EMPTY_COSTS,
  ESTATE_ROWS,
  WHAT_IF_AT_REST,
  appSaving,
  coverageOf,
  dollars,
  emptyEstate,
  estateFieldId,
  estateTotals,
  fieldId,
  formatDollars,
  keptCost,
  missingCosts,
  missingEstate,
  outlook,
  startingChoices,
  systemNames,
  totalsOf,
  typedDollars,
  type AppChoice,
  type Choices,
  type CostKey,
  type Estate,
  type EstateKey,
  type EstateSide,
  type ProposalPreset,
  type WhatIf,
} from "./proposal";
import { AiMark, CoverageBar } from "./CoverageExplorer";
import EstateCosts from "./EstateCosts";
import ProposalOutlook from "./ProposalOutlook";
import SendProposal from "./SendProposal";
import { sendSnapshot, snapshotOf, trackFigure, trackProposal, type SentBy } from "./proposalTracking";

/**
 * The proposal as one table, an app to a row. The left side is today: the
 * systems the club uses and what they cost. The right side is the future: turn
 * an app on in Club Steward and enter its costs, or leave it off and today's
 * cost carries across. Totals for both sides and the difference are the foot.
 * Missing costs are named beside the field and in a list above the table,
 * once the person has left a field or asked to check.
 *
 * Below the apps, the costs no one app owns (EstateCosts), then the whole
 * picture over the years the person picks, with their own what-if levers
 * (ProposalOutlook).
 *
 * What the person types is kept in this browser, so a refresh does not lose
 * it. The figures, never the name, are also counted by ARDN: each one as it is
 * entered, and the whole proposal when it is printed. Sending it to ARDN adds
 * the person's name and email. See proposalTracking.ts.
 */

const STORE = "club-steward-proposal-v2";

interface Saved {
  preparedFor: string;
  choices: Choices;
  estate: Estate;
  whatIf: WhatIf;
  /**
   * Set once a save keeps only the systems the person changed. Without it the
   * save is older and its systems are the preset's text of the day, so the
   * current preset wins and a corrected list reaches everyone.
   */
  editedSystemsOnly?: boolean;
}

function storeKey(preset?: ProposalPreset) {
  return preset ? `${STORE}:${preset.preparedFor}` : STORE;
}

function readSaved(apps: AppArea[], preset?: ProposalPreset): Saved | null {
  try {
    const raw = window.localStorage.getItem(storeKey(preset));
    if (!raw) return null;
    const saved = JSON.parse(raw) as Saved;
    const choices = startingChoices(apps, preset);
    for (const a of apps) {
      const c = saved.choices?.[a.key];
      if (c)
        choices[a.key] = {
          move: Boolean(c.move),
          costs: { ...EMPTY_COSTS, ...c.costs },
          systems: saved.editedSystemsOnly && typeof c.systems === "string" ? c.systems : choices[a.key].systems,
        };
    }
    const estate = emptyEstate();
    for (const r of ESTATE_ROWS) {
      const e = saved.estate?.[r.key];
      if (e) estate[r.key] = { today: String(e.today ?? ""), future: String(e.future ?? "") };
    }
    const w = saved.whatIf;
    const whatIf: WhatIf =
      w && [1, 3, 5].includes(w.years) && Number.isFinite(w.rise) && Number.isFinite(w.adjust)
        ? { years: w.years, rise: w.rise, adjust: w.adjust }
        : WHAT_IF_AT_REST;
    return { preparedFor: String(saved.preparedFor ?? ""), choices, estate, whatIf };
  } catch {
    // Storage blocked or an old shape: start fresh, which is what an empty store means too.
    return null;
  }
}

function writeSaved(saved: Saved, apps: AppArea[], preset?: ProposalPreset) {
  const start = startingChoices(apps, preset);
  const choices: Record<string, Partial<AppChoice>> = {};
  for (const [key, c] of Object.entries(saved.choices)) {
    // A systems list the person never touched is not kept, so it follows the preset.
    choices[key] = c.systems === start[key]?.systems ? { move: c.move, costs: c.costs } : c;
  }
  try {
    window.localStorage.setItem(
      storeKey(preset),
      JSON.stringify({
        preparedFor: saved.preparedFor,
        choices,
        estate: saved.estate,
        whatIf: saved.whatIf,
        editedSystemsOnly: true,
      }),
    );
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
export default function ProposalBuilder({ apps, preset }: { apps: AppArea[]; preset?: ProposalPreset }) {
  const inBrowser = useSyncExternalStore(noSubscribe, () => true, () => false);
  const saved = useMemo(() => (inBrowser ? readSaved(apps, preset) : null), [inBrowser, apps, preset]);
  // Only the browser's form saves: the first, empty one must not overwrite
  // what was saved before it is read.
  return (
    <ProposalForm
      key={inBrowser ? "browser" : "server"}
      apps={apps}
      preset={preset}
      saved={saved}
      persist={inBrowser}
    />
  );
}

const SHOWN_SYSTEMS = 3;

function ProposalForm({
  apps,
  preset,
  saved,
  persist,
}: {
  apps: AppArea[];
  preset?: ProposalPreset;
  saved: Saved | null;
  persist: boolean;
}) {
  const [choices, setChoices] = useState<Choices>(() => saved?.choices ?? startingChoices(apps, preset));
  const [preparedFor, setPreparedFor] = useState(saved?.preparedFor ?? preset?.preparedFor ?? "");
  const [estate, setEstate] = useState<Estate>(() => saved?.estate ?? emptyEstate());
  const [whatIf, setWhatIf] = useState<WhatIf>(() => saved?.whatIf ?? WHAT_IF_AT_REST);
  const [printNote, setPrintNote] = useState<string | null>(null);
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const summary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (persist) writeSaved({ preparedFor, choices, estate, whatIf }, apps, preset);
  }, [persist, preparedFor, choices, estate, whatIf, apps, preset]);

  const missing = useMemo(() => missingCosts(apps, choices), [apps, choices]);
  const missingEst = useMemo(() => missingEstate(estate), [estate]);
  const totals = useMemo(() => totalsOf(apps, choices), [apps, choices]);
  const estT = useMemo(() => estateTotals(estate), [estate]);
  const kept = useMemo(() => keptCost(apps, choices), [apps, choices]);
  const missingIds = useMemo(
    () =>
      new Set([
        ...missing.map((m) => fieldId(m.app, m.key)),
        ...missingEst.map((m) => estateFieldId(m.key, m.side)),
      ]),
    [missing, missingEst],
  );
  const isShown = (id: string) => checked || touched.has(id);
  const shownErrors = [
    ...missing.map((m) => ({ id: fieldId(m.app, m.key), text: `${m.appName}: ${m.label}` })),
    ...missingEst.map((m) => ({
      id: estateFieldId(m.key, m.side),
      text: `${m.name}: ${m.side === "today" ? "today" : "after the move"}`,
    })),
  ].filter((m) => isShown(m.id));
  const missingCount = missing.length + missingEst.length;
  const comparing = totals.moved > 0 || estT.counted > 0;
  const complete = comparing && missingCount === 0;
  // missingCosts asks for all four costs on a turned-on app only, and
  // missingEstate for both sides of a row once one is typed; see proposal.ts.
  const yearly = {
    today: totals.current + estT.today,
    future: totals.future + estT.future,
  };
  const result = useMemo(
    () =>
      outlook(
        { today: totals.current + estT.today, kept, steward: totals.future - kept, estateFuture: estT.future },
        whatIf,
      ),
    [totals, estT, kept, whatIf],
  );

  // The totals are counted once the person pauses, not on every keystroke.
  useEffect(() => {
    if (!persist || !complete) return;
    const t = window.setTimeout(
      () =>
        trackProposal("proposal_totals", {
          today: String(yearly.today),
          future: String(yearly.future),
          difference: String(yearly.today - yearly.future),
          apps_on: String(totals.moved),
          estate_rows: String(estT.counted),
        }),
      2500,
    );
    return () => window.clearTimeout(t);
  }, [persist, complete, yearly.today, yearly.future, totals.moved, estT.counted]);

  function setMove(app: string, move: boolean) {
    setChoices((c) => ({ ...c, [app]: { ...c[app], move } }));
    trackProposal("proposal_app_turned", { app, on: String(move) });
  }

  function setEstateCost(key: EstateKey, side: EstateSide, value: string) {
    setEstate((e) => ({ ...e, [key]: { ...e[key], [side]: value.replace(/[^0-9]/g, "") } }));
  }

  function leaveEstate(key: EstateKey, side: EstateSide) {
    setTouched((t) => new Set(t).add(estateFieldId(key, side)));
    trackFigure("estate", `${key}_${side}`, estate[key][side]);
  }

  function leaveCost(app: string, key: CostKey) {
    setTouched((t) => new Set(t).add(fieldId(app, key)));
    trackFigure(app, key, choices[app].costs[key]);
  }

  const snapshot = () => snapshotOf(apps, choices, estate, whatIf, result, yearly);

  async function sendToArdn(by: SentBy, website: string): Promise<string | null> {
    if (!check()) return "Some costs are missing; fill them in or clear them, then send.";
    try {
      const ok = await sendSnapshot("sent", snapshot(), by, website);
      if (!ok) return "We could not send the proposal. Please try again, or use Talk to us below.";
      trackProposal("proposal_sent", { apps_on: String(totals.moved) });
      return null;
    } catch {
      return "We could not reach the server. Check your connection and try again.";
    }
  }

  function setCost(app: string, key: CostKey, value: string) {
    setChoices((c) => ({ ...c, [app]: { ...c[app], costs: { ...c[app].costs, [key]: value.replace(/[^0-9]/g, "") } } }));
  }

  function setSystems(app: string, systems: string) {
    setChoices((c) => ({ ...c, [app]: { ...c[app], systems } }));
  }

  function check() {
    setChecked(true);
    if (missingCount) {
      requestAnimationFrame(() => summary.current?.focus());
      return false;
    }
    return true;
  }

  function print() {
    if (!check() || !comparing) return;
    trackProposal("proposal_printed", { apps_on: String(totals.moved), difference: String(result.saving) });
    // Sent before the print dialog, which blocks the page; a failure only
    // means ARDN misses this copy, so the person still gets their print.
    sendSnapshot("printed", snapshot()).then(
      (ok) => setPrintNote(ok ? null : "Printed. Your figures did not reach ARDN; use Send it to ARDN if you want a reply."),
      () => setPrintNote("Printed. Your figures did not reach ARDN; use Send it to ARDN if you want a reply."),
    );
    window.print();
  }

  function startOver() {
    setChoices(startingChoices(apps, preset));
    setEstate(emptyEstate());
    setWhatIf(WHAT_IF_AT_REST);
    setPrintNote(null);
    trackProposal("proposal_started_over");
    setPreparedFor(preset?.preparedFor ?? "");
    setTouched(new Set());
    setChecked(false);
    setOpen(null);
  }

  function openSystems(app: string) {
    setOpen(app);
    requestAnimationFrame(() => document.getElementById(`systems-${app}`)?.focus());
  }

  return (
    <div className="cp-builder">
      <div className="cp-builder-top">
        <label className="cp-field cp-prepared">
          <span className="cp-label">Prepared for</span>
          <input
            id="prepared-for"
            className="cp-input"
            type="text"
            value={preparedFor}
            placeholder="Club or company name"
            onChange={(e) => setPreparedFor(e.target.value)}
          />
        </label>
        <p className="cp-muted cp-builder-hint">
          {totals.moved === 0
            ? "Enter what each app costs today, then turn on the apps you want in Club Steward and enter their costs."
            : `${totals.moved} of ${apps.length} apps turned on in Club Steward.`}
        </p>
      </div>

      {shownErrors.length > 0 && (
        <div className="cp-error-summary" role="alert" tabIndex={-1} ref={summary}>
          <p className="cp-error-title">
            <AlertCircle size={18} aria-hidden="true" />
            {shownErrors.length === 1 ? "1 cost is missing" : `${shownErrors.length} costs are missing`}
          </p>
          <ul>
            {shownErrors.map((m) => (
              <li key={m.id}>
                <a href={`#${m.id}`}>{m.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="cp-ptable-scroll" tabIndex={0} role="region" aria-label="Proposal by app">
        <table className="cp-ptable">
          <caption className="cp-sr">
            {preparedFor ? `Proposal for ${preparedFor}` : "Proposal"}: each app today, and with Club Steward
          </caption>
          <thead>
            <tr>
              <th scope="col" rowSpan={2} className="cp-ptable-app">
                App
              </th>
              <th scope="colgroup" colSpan={4} className="cp-ptable-group">
                Today, per year
              </th>
              <th scope="colgroup" colSpan={4} className="cp-ptable-group cp-ptable-future cp-ptable-side">
                With Club Steward, per year
              </th>
            </tr>
            <tr>
              <th scope="col" className="cp-ptable-systems">
                Current systems
              </th>
              <th scope="col" className="cp-ptable-money">
                Platform
              </th>
              <th scope="col" className="cp-ptable-money">
                Support
              </th>
              <th scope="col" className="cp-ptable-num">
                Total
              </th>
              <th scope="col" className="cp-ptable-future cp-ptable-side">
                Turn on
              </th>
              <th scope="col" className="cp-ptable-money cp-ptable-future">
                Platform
              </th>
              <th scope="col" className="cp-ptable-money cp-ptable-future">
                Support
              </th>
              <th scope="col" className="cp-ptable-num cp-ptable-future">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {apps.map((a) => {
              const choice = choices[a.key];
              const c = coverageOf(a.features);
              const names = systemNames(choice.systems);
              const known = preset?.systems[a.key] ?? [];
              const isOpen = open === a.key;
              const n = (k: CostKey) => dollars(choice.costs[k]);
              const sumOf = (x: number | null, y: number | null) => (x === null && y === null ? null : (x ?? 0) + (y ?? 0));
              const today = sumOf(n("currentPlatform"), n("currentSupport"));
              const future = choice.move ? sumOf(n("futurePlatform"), n("futureSupport")) : today;
              const saving = choice.move ? appSaving(choice) : null;
              const costInput = (key: CostKey) => {
                const f = COST_FIELDS.find((x) => x.key === key)!;
                const id = fieldId(a.key, key);
                const showError = missingIds.has(id) && (checked || touched.has(id));
                return (
                  <div className="cp-cost">
                    <span className={`cp-money${showError ? " cp-money-error" : ""}`}>
                      <span aria-hidden="true">$</span>
                      <input
                        id={id}
                        className="cp-input"
                        inputMode="numeric"
                        autoComplete="off"
                        required={choice.move}
                        aria-required={choice.move}
                        aria-label={`${a.name}: ${f.label}`}
                        aria-invalid={showError}
                        aria-describedby={showError ? `${id}-error` : undefined}
                        value={typedDollars(choice.costs[key])}
                        placeholder={choice.move ? "Required" : "Optional"}
                        onChange={(e) => setCost(a.key, key, e.target.value)}
                        onBlur={() => leaveCost(a.key, key)}
                      />
                    </span>
                    {showError && (
                      <span id={`${id}-error`} className="cp-field-error">
                        Enter a yearly amount, or 0.
                      </span>
                    )}
                  </div>
                );
              };
              return (
                <Fragment key={a.key}>
                  <tr className={`${choice.move ? "cp-ptable-on" : ""}${isOpen ? " cp-ptable-open" : ""}`}>
                    <th scope="row" className="cp-ptable-app">
                      <button
                        type="button"
                        className="cp-ptable-name"
                        aria-expanded={isOpen}
                        aria-controls={`detail-${a.key}`}
                        onClick={() => setOpen(isOpen ? null : a.key)}
                      >
                        {a.name}
                        <ChevronDown size={15} aria-hidden="true" className={isOpen ? "cp-flip" : ""} />
                      </button>
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
                    </th>
                    <td className="cp-ptable-systems">
                      {names.length === 0 ? (
                        <button type="button" className="cp-link-btn cp-ptable-add" onClick={() => openSystems(a.key)}>
                          Add what you use
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="cp-systems"
                          onClick={() => setOpen(isOpen ? null : a.key)}
                          aria-label={`${a.name} today: ${names.join(", ")}. Show details`}
                        >
                          {names.slice(0, SHOWN_SYSTEMS).map((s) => (
                            <span key={s} className="cp-system">
                              {s}
                            </span>
                          ))}
                          {names.length > SHOWN_SYSTEMS && (
                            <span className="cp-system cp-system-more">+{names.length - SHOWN_SYSTEMS} more</span>
                          )}
                        </button>
                      )}
                    </td>
                    <td className="cp-ptable-money">{costInput("currentPlatform")}</td>
                    <td className="cp-ptable-money">{costInput("currentSupport")}</td>
                    <td className="cp-ptable-num cp-ptable-sum">{today === null ? "—" : formatDollars(today)}</td>
                    <td className="cp-ptable-future cp-ptable-side">
                      <span className="cp-switch-wrap">
                        <button
                          id={`move-${a.key}`}
                          type="button"
                          role="switch"
                          aria-checked={choice.move}
                          aria-label={`Turn on ${a.name} in Club Steward`}
                          className="cp-switch"
                          onClick={() => setMove(a.key, !choice.move)}
                        >
                          <span className="cp-switch-knob" />
                        </button>
                        <span className="cp-switch-text">{choice.move ? "On" : "Off"}</span>
                      </span>
                    </td>
                    {choice.move ? (
                      <>
                        <td className="cp-ptable-money cp-ptable-future">{costInput("futurePlatform")}</td>
                        <td className="cp-ptable-money cp-ptable-future">{costInput("futureSupport")}</td>
                      </>
                    ) : (
                      <td colSpan={2} className="cp-ptable-future cp-ptable-kept cp-ptable-stays">
                        Stays on current system
                      </td>
                    )}
                    <td className="cp-ptable-num cp-ptable-future cp-ptable-sum">
                      <span className={choice.move ? undefined : "cp-ptable-kept"}>
                        {future === null ? "—" : formatDollars(future)}
                      </span>
                      <span className="cp-ptable-diff">
                        {!choice.move ? (
                          <span className="cp-ptable-kept">No change</span>
                        ) : saving === null ? (
                          <span className="cp-ptable-pending">Needs costs</span>
                        ) : (
                          <b className={saving < 0 ? "cp-more" : "cp-less"}>
                            {saving < 0 ? "+" : "−"}
                            {formatDollars(Math.abs(saving))} a year
                          </b>
                        )}
                      </span>
                    </td>
                  </tr>
                  {isOpen && (
                    <tr className="cp-ptable-detail" id={`detail-${a.key}`}>
                      <td colSpan={9}>
                        <div className="cp-ptable-detail-inner">
                          <label className="cp-field">
                            <span className="cp-label">What {a.name} runs on today</span>
                            <input
                              id={`systems-${a.key}`}
                              className="cp-input"
                              type="text"
                              value={choice.systems}
                              placeholder="System names, separated by commas"
                              onChange={(e) => setSystems(a.key, e.target.value)}
                            />
                          </label>
                          {known.some((s) => names.includes(s.name)) && (
                            <div className="cp-uses">
                              <p className="cp-label">What each system does today</p>
                              <dl>
                                {known
                                  .filter((s) => names.includes(s.name))
                                  .map((s) => (
                                    <div key={s.name}>
                                      <dt>{s.name}</dt>
                                      <dd>{s.uses.join(" · ")}</dd>
                                    </div>
                                  ))}
                              </dl>
                              {preset?.source && <p className="cp-muted cp-uses-source">From {preset.source}.</p>}
                            </div>
                          )}
                          <p className="cp-muted">
                            Club Steward covers {c.built + c.configure} of {c.total} {a.name} features
                            {c.configure > 0 && `, ${c.configure} of them once your account or hardware is connected`}.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="cp-ptable-total">
              <th scope="row" colSpan={2} className="cp-ptable-app">
                Total
              </th>
              <td className="cp-ptable-num">{formatDollars(totals.currentPlatform)}</td>
              <td className="cp-ptable-num">{formatDollars(totals.currentSupport)}</td>
              <td className="cp-ptable-num">{formatDollars(totals.current)}</td>
              <td className="cp-ptable-future cp-ptable-side cp-ptable-count">
                {totals.moved} of {apps.length} on
              </td>
              <td className="cp-ptable-num cp-ptable-future">{formatDollars(totals.futurePlatform)}</td>
              <td className="cp-ptable-num cp-ptable-future">{formatDollars(totals.futureSupport)}</td>
              <td className="cp-ptable-num cp-ptable-future">
                {formatDollars(totals.future)}
                <span className="cp-ptable-diff">
                  {totals.moved > 0 && missing.length === 0 ? (
                    <b className={totals.saving < 0 ? "cp-more" : "cp-less"}>
                      {totals.saving < 0 ? "+" : "−"}
                      {formatDollars(Math.abs(totals.saving))} a year
                    </b>
                  ) : (
                    <span className="cp-ptable-kept">—</span>
                  )}
                </span>
              </td>
            </tr>
            <tr className="cp-ptable-verdict">
              <td colSpan={9}>
                {totals.moved > 0 && missing.length > 0 ? (
                  <p className="cp-incomplete">
                    <AlertCircle size={15} aria-hidden="true" /> {missing.length}{" "}
                    {missing.length === 1 ? "cost is" : "costs are"} missing. The difference shows once every cost is
                    in.
                  </p>
                ) : totals.moved === 0 ? (
                  <p className="cp-muted">Turn on an app in Club Steward to see the difference.</p>
                ) : null}
                {totals.keptBlank > 0 && (
                  <p className="cp-muted cp-ptable-note">
                    {totals.keptBlank} {totals.keptBlank === 1 ? "app staying on its" : "apps staying on their"} current
                    system {totals.keptBlank === 1 ? "has" : "have"} no cost entered, so both totals leave{" "}
                    {totals.keptBlank === 1 ? "it" : "them"} out. The difference is not affected.
                  </p>
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <h3 className="cp-builder-sub">Costs no one app owns</h3>
      <p className="cp-muted cp-builder-hint">
        The people, hosting, testing and syncing that hold today&apos;s systems together. Enter a row on both sides, or
        leave it blank to keep it out.
      </p>
      <EstateCosts
        estate={estate}
        missingIds={missingIds}
        shown={isShown}
        onChange={setEstateCost}
        onLeave={leaveEstate}
      />

      <ProposalOutlook
        result={result}
        whatIf={whatIf}
        ready={complete}
        onChange={setWhatIf}
        onSettle={(w) =>
          trackProposal("proposal_what_if", { years: String(w.years), rise: String(w.rise), adjust: String(w.adjust) })
        }
      />

      <div className="cp-live no-print" aria-hidden="true">
        <span>
          Today <b>{formatDollars(yearly.today)}</b>
        </span>
        <span>
          Club Steward <b>{formatDollars(yearly.future)}</b>
        </span>
        <span>
          {complete ? (
            <b className={yearly.today - yearly.future < 0 ? "cp-more" : "cp-less"}>
              {yearly.today - yearly.future < 0 ? "Adds " : "Saves "}
              {formatDollars(Math.abs(yearly.today - yearly.future))} a year
            </b>
          ) : comparing ? (
            `${missingCount} missing`
          ) : (
            "Turn on an app to compare"
          )}
        </span>
      </div>

      <div className="cp-actions no-print">
        <button type="button" className="gc-btn gc-btn-gold" onClick={print} disabled={!comparing}>
          <Printer size={16} aria-hidden="true" /> Print or save as PDF
        </button>
        <button type="button" className="cp-link-btn" onClick={() => check()}>
          Check for missing costs
        </button>
        <button type="button" className="cp-link-btn" onClick={startOver}>
          <RotateCcw size={14} aria-hidden="true" /> Start over
        </button>
      </div>
      {printNote && (
        <p className="cp-muted no-print" role="status">
          {printNote}
        </p>
      )}
      <div className="cp-send-wrap no-print">
        <SendProposal preparedFor={preparedFor} send={sendToArdn} />
      </div>
    </div>
  );
}
