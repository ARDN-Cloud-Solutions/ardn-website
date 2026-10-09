"use client";

import { Fragment, useMemo, useState } from "react";
import { ChevronDown, ExternalLink, Search } from "lucide-react";
import type { AppArea, Feature } from "./features";
import type { Competitor, Rating } from "./competitors";
import { AiMark, StatusPill } from "./CoverageExplorer";

/**
 * Every feature side by side with other club software: search, narrow by app
 * or by what to show, pick the products to compare, and open a row for the
 * note behind each rating and the vendor page it was read from.
 */

type Show = "all" | "lead" | "ai" | "Gap";

const RATING_WORD: Record<Rating, string> = {
  Yes: "Yes",
  Partial: "Partly",
  No: "No",
  Unknown: "Not found",
};

const SHOWS: [Show, string][] = [
  ["all", "Everything"],
  ["lead", "Only Club Steward"],
  ["ai", "Uses AI"],
  ["Gap", "Our gaps"],
];

interface Row extends Feature {
  app: string;
}

function RatingCell({ r }: { r: Rating | undefined }) {
  const rating = r ?? "Unknown";
  return (
    <span className={`cp-rate cp-rate-${rating.toLowerCase()}`}>
      <span className="cp-rate-dot" aria-hidden="true" />
      {RATING_WORD[rating]}
    </span>
  );
}

export default function CompareTable({
  apps,
  competitors,
  researched,
}: {
  apps: AppArea[];
  competitors: Competitor[];
  researched: string;
}) {
  const [query, setQuery] = useState("");
  const [app, setApp] = useState<string>("all");
  const [show, setShow] = useState<Show>("all");
  const [picked, setPicked] = useState<string[]>(() => competitors.map((c) => c.name));
  const [open, setOpen] = useState<string | null>(null);

  const rows = useMemo<Row[]>(() => apps.flatMap((a) => a.features.map((f) => ({ ...f, app: a.name }))), [apps]);
  const shownVendors = useMemo(() => competitors.filter((c) => picked.includes(c.name)), [competitors, picked]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    // "Only Club Steward": we have it, and none of the products compared advertise it, even partly.
    const nobodyElse = (f: Row) =>
      f.status !== "Gap" && shownVendors.every((c) => !["Yes", "Partial"].includes(c.ratings[f.id]?.r ?? "Unknown"));
    return rows.filter(
      (f) =>
        (app === "all" || f.app === app) &&
        (!q || `${f.name} ${f.note} ${f.app}`.toLowerCase().includes(q)) &&
        (show === "all" || (show === "ai" ? f.ai : show === "Gap" ? f.status === "Gap" : nobodyElse(f))),
    );
  }, [rows, query, app, show, shownVendors]);

  const ours = shown.filter((f) => f.status !== "Gap").length;
  const tally = (c: Competitor) => {
    let yes = 0;
    let partly = 0;
    for (const f of shown) {
      const r = c.ratings[f.id]?.r;
      if (r === "Yes") yes++;
      else if (r === "Partial") partly++;
    }
    return { yes, partly };
  };

  function togglePick(name: string) {
    setPicked((p) => (p.includes(name) ? (p.length > 1 ? p.filter((n) => n !== name) : p) : [...p, name]));
  }

  const cols = 2 + shownVendors.length;

  return (
    <div className="cp-compare">
      <div className="cp-compare-tools">
        <label className="cp-search">
          <Search size={16} aria-hidden="true" />
          <span className="cp-sr">Search features</span>
          <input
            type="search"
            value={query}
            placeholder="Search features, like waitlist or payroll"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="cp-filters" role="group" aria-label="Show">
          {SHOWS.map(([k, label]) => (
            <button
              key={k}
              type="button"
              className={`cp-chip${show === k ? " cp-chip-on" : ""}`}
              aria-pressed={show === k}
              onClick={() => setShow(k)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="cp-filters cp-compare-apps" role="group" aria-label="App">
        {[{ key: "all", name: "All apps" }, ...apps].map((a) => {
          const value = a.key === "all" ? "all" : a.name;
          return (
            <button
              key={a.key}
              type="button"
              className={`cp-chip${app === value ? " cp-chip-on" : ""}`}
              aria-pressed={app === value}
              onClick={() => setApp(value)}
            >
              {a.name}
            </button>
          );
        })}
      </div>

      <fieldset className="cp-compare-pick">
        <legend>Compare with</legend>
        {competitors.map((c) => (
          <label key={c.name} className={`cp-pick${picked.includes(c.name) ? " cp-pick-on" : ""}`}>
            <input type="checkbox" checked={picked.includes(c.name)} onChange={() => togglePick(c.name)} />
            {c.name}
          </label>
        ))}
      </fieldset>

      <p className="cp-muted cp-compare-count" aria-live="polite">
        {shown.length} {shown.length === 1 ? "feature" : "features"}{" "}
        shown. Select a feature to see each rating&rsquo;s
        note and source.
      </p>

      <div className="cp-compare-scroll" tabIndex={0} role="region" aria-label="Feature comparison">
        <table className="cp-compare-table">
          <thead>
            <tr>
              <th scope="col" className="cp-compare-feature">
                Feature
              </th>
              <th scope="col" className="cp-compare-us">
                Club Steward
                <span className="cp-compare-tally">{ours} of {shown.length}</span>
              </th>
              {shownVendors.map((c) => {
                const t = tally(c);
                return (
                  <th scope="col" key={c.name}>
                    {c.name}
                    <span className="cp-compare-tally">
                      {t.yes} yes · {t.partly} partly
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {shown.length === 0 && (
              <tr>
                <td colSpan={cols} className="cp-muted cp-empty">
                  No features match. Clear the search or choose Everything.
                </td>
              </tr>
            )}
            {shown.map((f) => {
              const isOpen = open === f.id;
              return (
                <Fragment key={f.id}>
                  <tr className={isOpen ? "cp-compare-open" : undefined}>
                    <th scope="row" className="cp-compare-feature">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`cp-why-${f.id}`}
                        onClick={() => setOpen(isOpen ? null : f.id)}
                      >
                        <span>
                          {f.name} {f.ai && <AiMark />}
                          <span className="cp-compare-app">{f.app}</span>
                        </span>
                        <ChevronDown size={15} aria-hidden="true" className={isOpen ? "cp-flip" : ""} />
                      </button>
                    </th>
                    <td className="cp-compare-us">
                      <StatusPill status={f.status} />
                    </td>
                    {shownVendors.map((c) => (
                      <td key={c.name}>
                        <RatingCell r={c.ratings[f.id]?.r} />
                      </td>
                    ))}
                  </tr>
                  {isOpen && (
                    <tr className="cp-compare-why" id={`cp-why-${f.id}`}>
                      <td colSpan={cols}>
                        <dl>
                          <div>
                            <dt>Club Steward</dt>
                            <dd>
                              <StatusPill status={f.status} /> {f.note || "Works end to end today."}
                            </dd>
                          </div>
                          {shownVendors.map((c) => {
                            const r = c.ratings[f.id];
                            return (
                              <div key={c.name}>
                                <dt>{c.name}</dt>
                                <dd>
                                  <RatingCell r={r?.r} />{" "}
                                  {r?.note || (r?.r === "Unknown" || !r ? "No mention found on their public pages." : "")}
                                  {r?.src && (
                                    <>
                                      {" "}
                                      <a href={r.src} target="_blank" rel="noopener noreferrer nofollow">
                                        Source <ExternalLink size={12} aria-hidden="true" />
                                      </a>
                                    </>
                                  )}
                                </dd>
                              </div>
                            );
                          })}
                        </dl>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="cp-muted cp-compare-fine">
        Other products are rated from their own public websites, read in {researched}. Yes means the feature is
        advertised, Partly means part of it is, and Not found means we found no public mention, which does not mean the
        product lacks it. Club Steward is rated from its code. Product names belong to their owners.
      </p>
    </div>
  );
}
