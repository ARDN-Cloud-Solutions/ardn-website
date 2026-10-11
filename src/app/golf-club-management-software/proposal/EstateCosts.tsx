"use client";

import {
  ESTATE_ROWS,
  dollars,
  estateFieldId,
  formatDollars,
  typedDollars,
  type Estate,
  type EstateKey,
  type EstateSide,
} from "./proposal";

/**
 * The costs no one app owns, today and after the move: one row each, typed
 * the same way as the app costs. See ESTATE_ROWS for when a row counts.
 */
export default function EstateCosts({
  estate,
  missingIds,
  shown,
  onChange,
  onLeave,
}: {
  estate: Estate;
  /** Field ids still missing, from missingEstate. */
  missingIds: Set<string>;
  /** Whether a missing field should show its error yet (touched, or the person asked to check). */
  shown: (id: string) => boolean;
  onChange: (key: EstateKey, side: EstateSide, value: string) => void;
  onLeave: (key: EstateKey, side: EstateSide) => void;
}) {
  return (
    <div className="cp-ptable-scroll cp-estate" tabIndex={0} role="region" aria-label="Costs across the estate">
      <table className="cp-ptable">
        <caption className="cp-sr">Costs that belong to no one app, today and with Club Steward</caption>
        <thead>
          <tr>
            <th scope="col" className="cp-ptable-app">
              Across the estate
            </th>
            <th scope="col" className="cp-ptable-money">
              Today, per year
            </th>
            <th scope="col" className="cp-ptable-money cp-ptable-future cp-ptable-side">
              After the move, per year
            </th>
            <th scope="col" className="cp-ptable-num cp-ptable-future">
              Difference
            </th>
          </tr>
        </thead>
        <tbody>
          {ESTATE_ROWS.map((r) => {
            const today = dollars(estate[r.key].today);
            const future = dollars(estate[r.key].future);
            const input = (side: EstateSide) => {
              const id = estateFieldId(r.key, side);
              const showError = missingIds.has(id) && shown(id);
              return (
                <div className="cp-cost">
                  <span className={`cp-money${showError ? " cp-money-error" : ""}`}>
                    <span aria-hidden="true">$</span>
                    <input
                      id={id}
                      className="cp-input"
                      inputMode="numeric"
                      autoComplete="off"
                      aria-label={`${r.name}: ${side === "today" ? "today" : "after the move"}, per year`}
                      aria-invalid={showError}
                      aria-describedby={showError ? `${id}-error` : undefined}
                      value={typedDollars(estate[r.key][side])}
                      placeholder="Optional"
                      onChange={(e) => onChange(r.key, side, e.target.value)}
                      onBlur={() => onLeave(r.key, side)}
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
            const diff = today !== null && future !== null ? today - future : null;
            return (
              <tr key={r.key}>
                <th scope="row" className="cp-ptable-app">
                  <span className="cp-estate-name">{r.name}</span>
                  <span className="cp-app-cov">{r.hint}</span>
                </th>
                <td className="cp-ptable-money">{input("today")}</td>
                <td className="cp-ptable-money cp-ptable-future cp-ptable-side">{input("future")}</td>
                <td className="cp-ptable-num cp-ptable-future cp-ptable-sum">
                  {diff === null ? (
                    <span className="cp-ptable-kept">—</span>
                  ) : (
                    <b className={diff < 0 ? "cp-more" : "cp-less"}>
                      {diff < 0 ? "+" : "−"}
                      {formatDollars(Math.abs(diff))}
                    </b>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
