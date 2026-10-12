"use client";

import { track } from "../TrackedLink";
import type { AppArea } from "./features";
import { ESTATE_ROWS, dollars, type Choices, type Estate, type Outlook, type WhatIf } from "./proposal";

/**
 * What the proposal tells Ardn about the figures people try.
 *
 * Two channels, both carrying figures only, never a name or an email unless
 * the person sends the proposal to us themselves:
 *
 * - GA4 events, through the page's own gtag (track), as each figure is
 *   entered and as the totals settle. This is how the figures are counted in
 *   aggregate.
 * - A snapshot of the whole proposal posted to /api/proposal, which emails it
 *   to the team: when the person prints it, and when they send it to us. Only
 *   a sent snapshot carries the person's name, email and "prepared for".
 *
 * The page copy says this in plain words; keep the two in step.
 */

export type SnapshotReason = "printed" | "sent";

export interface Snapshot {
  apps: { key: string; name: string; move: boolean; systems: string; costs: Record<string, number | null> }[];
  estate: { key: string; name: string; today: number | null; future: number | null }[];
  whatIf: WhatIf;
  outlook: Outlook;
  yearly: { today: number; future: number };
}

export interface SentBy {
  name: string;
  email: string;
  preparedFor: string;
  note: string;
}

export function snapshotOf(
  apps: AppArea[],
  choices: Choices,
  estate: Estate,
  whatIf: WhatIf,
  result: Outlook,
  yearly: { today: number; future: number },
): Snapshot {
  return {
    apps: apps.map((a) => {
      const c = choices[a.key];
      return {
        key: a.key,
        name: a.name,
        move: c.move,
        systems: c.systems,
        costs: Object.fromEntries(Object.entries(c.costs).map(([k, v]) => [k, dollars(v)])),
      };
    }),
    estate: ESTATE_ROWS.map((r) => ({
      key: r.key,
      name: r.name,
      today: dollars(estate[r.key].today),
      future: dollars(estate[r.key].future),
    })),
    whatIf,
    outlook: result,
    yearly,
  };
}

/** One figure, as the person leaves the field. Blank is not a figure, so it is not counted. */
export function trackFigure(area: string, field: string, text: string) {
  const value = dollars(text);
  if (value === null) return;
  track("proposal_figure", { area, field, value: String(value) });
}

export function trackProposal(event: string, params: Record<string, string> = {}) {
  track(event, params);
}

/** Post a snapshot. Resolves true once the server has it; a failure is reported to the caller, never hidden. */
export async function sendSnapshot(
  reason: SnapshotReason,
  snapshot: Snapshot,
  sentBy?: SentBy,
  website = "",
): Promise<boolean> {
  const res = await fetch("/api/proposal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reason, snapshot, sentBy, website, page: window.location.pathname }),
    keepalive: reason === "printed",
  });
  return res.ok;
}
