import type { AppArea, Feature } from "./features";

/**
 * The proposal's rules, kept apart from the screen so they read in one place.
 *
 * Coverage: a feature counts as covered when it is Built, or built and only
 * waiting on the club's own account or hardware (Configure). Gaps count
 * against coverage.
 *
 * Costs: every app is either kept on the club's current system or moved to
 * Club Steward. Only a moved app is part of the comparison, and a moved app
 * needs all four yearly costs: what the club pays today for the platform and
 * for support, and what it will pay on Club Steward for each. Zero is an
 * answer (a club may have no system for that app today); blank is not.
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
}

export type Choices = Record<string, AppChoice>;

export const EMPTY_COSTS: AppCosts = { currentPlatform: "", currentSupport: "", futurePlatform: "", futureSupport: "" };

export function startingChoices(apps: AppArea[]): Choices {
  return Object.fromEntries(apps.map((a) => [a.key, { move: false, costs: { ...EMPTY_COSTS } }]));
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
  const sum = (key: CostKey) =>
    apps.reduce((s, a) => (choices[a.key]?.move ? s + (dollars(choices[a.key].costs[key]) ?? 0) : s), 0);
  const currentPlatform = sum("currentPlatform");
  const currentSupport = sum("currentSupport");
  const futurePlatform = sum("futurePlatform");
  const futureSupport = sum("futureSupport");
  const current = currentPlatform + currentSupport;
  const future = futurePlatform + futureSupport;
  return {
    moved: apps.filter((a) => choices[a.key]?.move).length,
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
