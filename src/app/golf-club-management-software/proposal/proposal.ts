import type { AppArea, Feature } from "./features";

/**
 * The proposal's rules, kept apart from the screen so they read in one place.
 *
 * Coverage: a feature counts as covered when it is Built, or built and only
 * waiting on the club's own account or hardware (Configure). Gaps count
 * against coverage.
 *
 * Costs: one side is today, every app on its current system with what it
 * costs; the other side is the future, where each app is either kept (it
 * carries today's cost across unchanged) or turned on in Club Steward (it
 * needs Club Steward's platform and support costs). A turned-on app needs all
 * four yearly costs, because its difference is the saving. A kept app's costs
 * today are optional: they add the same amount to both totals, so they make
 * the totals complete without changing the difference. Zero is an answer (a
 * club may have no system for that app today); blank is not.
 */

export interface Coverage {
  total: number;
  built: number;
  configure: number;
  gap: number;
  ai: number;
  /** Built + Configure, as a whole percent of total. */
  percent: number;
}

export function coverageOf(features: Feature[]): Coverage {
  const built = features.filter((f) => f.status === "Built").length;
  const configure = features.filter((f) => f.status === "Configure").length;
  const total = features.length;
  return {
    total,
    built,
    configure,
    gap: total - built - configure,
    ai: features.filter((f) => f.ai).length,
    percent: total ? Math.round(((built + configure) / total) * 100) : 0,
  };
}

export const COST_FIELDS = [
  { key: "currentPlatform", label: "Platform cost today", short: "Platform cost", when: "current" },
  { key: "currentSupport", label: "Support cost today", short: "Support cost", when: "current" },
  { key: "futurePlatform", label: "Club Steward platform cost", short: "Platform cost", when: "future" },
  { key: "futureSupport", label: "Club Steward support cost", short: "Support cost", when: "future" },
] as const;

export type CostKey = (typeof COST_FIELDS)[number]["key"];

/** Whole dollars per year, as the person typed them; "" until they do. */
export type AppCosts = Record<CostKey, string>;

export interface AppChoice {
  move: boolean;
  costs: AppCosts;
  /** What the club uses for this app today, as typed: names separated by commas. */
  systems: string;
}

/** A system the club uses today, and the business functions it handles in this app. */
export interface CurrentSystem {
  name: string;
  uses: string[];
}

/**
 * A proposal started for a known club: its name and the systems it told us it
 * uses, by app key. The public page has none; a club's own copy is built with one.
 */
export interface ProposalPreset {
  preparedFor: string;
  source?: string;
  systems: Record<string, CurrentSystem[]>;
}

export type Choices = Record<string, AppChoice>;

export const EMPTY_COSTS: AppCosts = { currentPlatform: "", currentSupport: "", futurePlatform: "", futureSupport: "" };

export function startingChoices(apps: AppArea[], preset?: ProposalPreset): Choices {
  return Object.fromEntries(
    apps.map((a) => [
      a.key,
      { move: false, costs: { ...EMPTY_COSTS }, systems: (preset?.systems[a.key] ?? []).map((s) => s.name).join(", ") },
    ]),
  );
}

export function systemNames(text: string): string[] {
  return text
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Digits only, so "$12,500" and "12500" are the same answer. */
export function dollars(text: string): number | null {
  const digits = text.replace(/[^0-9]/g, "");
  return digits === "" ? null : Number(digits);
}

export function formatDollars(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

/** As typed: "12500" shows as "12,500". */
export function typedDollars(text: string): string {
  const n = dollars(text);
  return n === null ? "" : new Intl.NumberFormat("en-US").format(n);
}

export interface MissingCost {
  app: string;
  appName: string;
  key: CostKey;
  label: string;
}

export function missingCosts(apps: AppArea[], choices: Choices): MissingCost[] {
  return apps.flatMap((a) => {
    const c = choices[a.key];
    if (!c?.move) return [];
    return COST_FIELDS.filter((f) => dollars(c.costs[f.key]) === null).map((f) => ({
      app: a.key,
      appName: a.name,
      key: f.key,
      label: f.label,
    }));
  });
}

export interface Totals {
  moved: number;
  /** Kept apps with today's costs left blank, so both totals leave them out. */
  keptBlank: number;
  currentPlatform: number;
  currentSupport: number;
  futurePlatform: number;
  futureSupport: number;
  current: number;
  future: number;
  /** Positive when Club Steward costs less than today. */
  saving: number;
}

export function totalsOf(apps: AppArea[], choices: Choices): Totals {
  const n = (a: AppArea, key: CostKey) => dollars(choices[a.key]?.costs[key] ?? "") ?? 0;
  const sum = (f: (a: AppArea) => number) => apps.reduce((s, a) => s + f(a), 0);
  const moved = (a: AppArea) => Boolean(choices[a.key]?.move);
  const currentPlatform = sum((a) => n(a, "currentPlatform"));
  const currentSupport = sum((a) => n(a, "currentSupport"));
  // A kept app carries today's cost into the future unchanged.
  const futurePlatform = sum((a) => (moved(a) ? n(a, "futurePlatform") : n(a, "currentPlatform")));
  const futureSupport = sum((a) => (moved(a) ? n(a, "futureSupport") : n(a, "currentSupport")));
  const current = currentPlatform + currentSupport;
  const future = futurePlatform + futureSupport;
  return {
    moved: apps.filter(moved).length,
    keptBlank: apps.filter(
      (a) => !moved(a) && (["currentPlatform", "currentSupport"] as const).some((k) => dollars(choices[a.key]?.costs[k] ?? "") === null),
    ).length,
    currentPlatform,
    currentSupport,
    futurePlatform,
    futureSupport,
    current,
    future,
    saving: current - future,
  };
}

export const fieldId = (app: string, key: CostKey) => `cost-${app}-${key}`;

/** One app's yearly difference (today minus Club Steward), or null until all four costs are in. */
export function appSaving(c: AppChoice): number | null {
  const n = COST_FIELDS.map((f) => dollars(c.costs[f.key]));
  if (n.some((v) => v === null)) return null;
  const [cp, cs, fp, fs] = n as number[];
  return cp + cs - (fp + fs);
}

/**
 * Costs that belong to no one app: the people, hosting, testing and syncing
 * that hold today's systems together. Each row has a today and a future
 * amount. A row counts once either side is typed, and then needs both, for
 * the same reason a turned-on app needs all four costs: its difference is the
 * saving. A row left blank on both sides is simply not part of the proposal.
 */
export const ESTATE_ROWS = [
  {
    key: "team",
    name: "In-house build and support team",
    hint: "Salaries and contractors who build, connect and support club systems",
  },
  { key: "hosting", name: "Hosting, infrastructure and security", hint: "Servers, cloud, backups and security tools" },
  { key: "testing", name: "Testing and release", hint: "People and tools that check a change before it goes live" },
  {
    key: "integrations",
    name: "Integrations and data syncing",
    hint: "Connectors, middleware and the work of keeping systems in step",
  },
] as const;

export type EstateKey = (typeof ESTATE_ROWS)[number]["key"];
export type EstateSide = "today" | "future";
export type Estate = Record<EstateKey, Record<EstateSide, string>>;

export const emptyEstate = (): Estate =>
  Object.fromEntries(ESTATE_ROWS.map((r) => [r.key, { today: "", future: "" }])) as Estate;

export const estateFieldId = (key: EstateKey, side: EstateSide) => `estate-${key}-${side}`;

export interface MissingEstate {
  key: EstateKey;
  name: string;
  side: EstateSide;
}

export function missingEstate(estate: Estate): MissingEstate[] {
  return ESTATE_ROWS.flatMap((r): MissingEstate[] => {
    const today = dollars(estate[r.key].today);
    const future = dollars(estate[r.key].future);
    if (today === null && future === null) return [];
    if (today === null) return [{ key: r.key, name: r.name, side: "today" }];
    if (future === null) return [{ key: r.key, name: r.name, side: "future" }];
    return [];
  });
}

export interface EstateTotals {
  /** Rows with both sides typed. */
  counted: number;
  today: number;
  future: number;
}

export function estateTotals(estate: Estate): EstateTotals {
  const rows = ESTATE_ROWS.map((r) => [dollars(estate[r.key].today), dollars(estate[r.key].future)] as const).filter(
    ([t, f]) => t !== null && f !== null,
  ) as [number, number][];
  return {
    counted: rows.length,
    today: rows.reduce((s, [t]) => s + t, 0),
    future: rows.reduce((s, [, f]) => s + f, 0),
  };
}

/** Today's cost of the apps left on their current systems: the part of the future side that is not Club Steward. */
export function keptCost(apps: AppArea[], choices: Choices): number {
  return apps
    .filter((a) => !choices[a.key]?.move)
    .reduce(
      (s, a) => s + (dollars(choices[a.key]?.costs.currentPlatform ?? "") ?? 0) + (dollars(choices[a.key]?.costs.currentSupport ?? "") ?? 0),
      0,
    );
}

/**
 * The what-if levers, all the person's own: how many years to add up, how
 * much today's systems rise in price each year, and how much higher or lower
 * the Club Steward costs they typed might land. Nothing here is a Club
 * Steward price; with the levers at rest the result is exactly what was typed.
 */
export interface WhatIf {
  years: 1 | 3 | 5;
  /** Yearly rise of today's systems and of anything staying on them, in whole percent. */
  rise: number;
  /** Club Steward costs as typed, moved up or down by this whole percent. */
  adjust: number;
}

export const WHAT_IF_AT_REST: WhatIf = { years: 1, rise: 0, adjust: 0 };

export interface Outlook {
  today: number;
  future: number;
  /** The part of the future that is Club Steward (turned-on apps, adjusted). */
  steward: number;
  /** Positive when the future costs less than today. */
  saving: number;
}

/**
 * Sum the years. Today's systems rise by `rise` each year after the first, on
 * both sides (an app that stays carries today's price into the future). Club
 * Steward costs and the estate's future costs are held at what was typed,
 * with `adjust` applied to Club Steward's.
 */
export function outlook(
  yearly: { today: number; kept: number; steward: number; estateFuture: number },
  w: WhatIf,
): Outlook {
  let growth = 0;
  for (let y = 0; y < w.years; y++) growth += Math.pow(1 + w.rise / 100, y);
  const steward = yearly.steward * (1 + w.adjust / 100) * w.years;
  const today = yearly.today * growth;
  const future = yearly.kept * growth + steward + yearly.estateFuture * w.years;
  return { today: Math.round(today), future: Math.round(future), steward: Math.round(steward), saving: Math.round(today - future) };
}
