import crypto from "node:crypto";
import { readProposalFile, writeProposalFile } from "./store";

/**
 * The services team behind a proposal and every number the proposal shows.
 *
 * Two documents per proposal, kept beside it the way the comment thread and the
 * add-on rates are (proposal_docs):
 *   "<slug>--team-draft"  Ardn only: the team with cost and bill rates, the
 *                         rate card and the proposal's numbers, as last saved.
 *   "<slug>--team-pub"    What viewers see: headcount and hours, plus the
 *                         client-facing numbers. It never holds a rate or a
 *                         margin, so nothing the public route reads can leak one.
 * listProposals() leaves both out.
 */

export const TEAM_DRAFT_SUFFIX = "--team-draft";
export const TEAM_PUB_SUFFIX = "--team-pub";

export type TeamRow = { id: number; role: string; name: string; loc: "on" | "off"; cost: number; bill: number; impl: number; ms: number };
export type RateRow = { id: number; label: string; cost: number; bill: number };
/** The proposal's numbers by key; numbers, except the few keys listed in TEXT_KEYS. */
export type Nums = Record<string, number | string>;
export type TeamDraft = { team: TeamRow[]; rates: RateRow[]; nums: Nums; hash: string; at: string; by: string };
export type Snap = { peopleMs: number; hoursMs: number; peopleImpl: number; hoursImpl: number };
export type TeamPub = { snap: Snap; nums: Nums; hash: string; at: string; by: string };

const TEXT_KEYS = new Set(["priceHold"]);
const MAX_ROWS = 80;
const MAX_RATES = 30;

/** Placeholder rates until the real rate card is supplied (README: open item). */
export const DEFAULT_RATE_CARD: RateRow[] = [
  { id: 1, label: "Onshore lead", cost: 95, bill: 175 },
  { id: 2, label: "Onshore specialist", cost: 80, bill: 150 },
  { id: 3, label: "Offshore senior", cost: 30, bill: 60 },
  { id: 4, label: "Offshore developer", cost: 22, bill: 60 },
  { id: 5, label: "Offshore QA / support", cost: 18, bill: 45 },
];

/** The team as first drawn: [role, location, cost, bill, impl hours per person, managed-service hours per person]. */
const SEED: [string, "on" | "off", number, number, number[], number[]][] = [
  ["Delivery Lead", "on", 95, 175, [160], [80]],
  ["Solution Architect", "on", 95, 175, [80], [40]],
  ["Release Manager", "on", 80, 150, [160], [80]],
  ["QA Automation", "off", 18, 45, [160, 160], [160, 0]],
  ["Integration & Data Engineer", "off", 30, 60, [160, 160], [160, 0]],
  ["Second-line Support Lead", "on", 80, 150, [160], [160]],
  ["L2 analyst (US shift)", "off", 18, 45, [160, 160, 160, 160], [160, 160, 0, 0]],
  ["Trainer & Change Lead", "on", 80, 150, [160], [40]],
  ["Members lead", "on", 95, 175, [160], [160]],
  ["Club Ops lead", "on", 95, 175, [160], [160]],
  ["Finance lead", "on", 95, 175, [160], [160]],
  ["Developer", "off", 22, 60, [160, 160, 160, 160, 160], [160, 160, 160, 0, 0]],
];
export function defaultTeam(): TeamRow[] {
  const rows: TeamRow[] = [];
  let id = 1;
  for (const [role, loc, cost, bill, impl, ms] of SEED) impl.forEach((h, k) => rows.push({ id: id++, role, name: "", loc, cost, bill, impl: h, ms: ms[k] || 0 }));
  return rows;
}

const num = (v: unknown, max: number): number | null => (typeof v === "number" && Number.isFinite(v) && v >= 0 && v <= max ? v : null);
const text = (v: unknown, max: number) => String(v ?? "").slice(0, max);

/** Whole input checked field by field; anything else is dropped, never stored. */
export function cleanDraftInput(body: { team?: unknown; rates?: unknown; nums?: unknown }): { team: TeamRow[]; rates: RateRow[]; nums: Nums } | null {
  if (!Array.isArray(body.team) || !Array.isArray(body.rates) || !body.nums || typeof body.nums !== "object") return null;
  if (body.team.length > MAX_ROWS || body.rates.length > MAX_RATES) return null;
  const team: TeamRow[] = [];
  for (const r of body.team as Record<string, unknown>[]) {
    const id = num(r?.id, 1e15), cost = num(r?.cost, 5000), bill = num(r?.bill, 5000), impl = num(r?.impl, 744), ms = num(r?.ms, 744);
    if (id === null || cost === null || bill === null || impl === null || ms === null) return null;
    team.push({ id, role: text(r.role, 80), name: text(r.name, 80), loc: r.loc === "on" ? "on" : "off", cost, bill, impl, ms });
  }
  const rates: RateRow[] = [];
  for (const r of body.rates as Record<string, unknown>[]) {
    const id = num(r?.id, 1e15), cost = num(r?.cost, 5000), bill = num(r?.bill, 5000);
    if (id === null || cost === null || bill === null) return null;
    rates.push({ id, label: text(r.label, 60), cost, bill });
  }
  const nums: Nums = {};
  const entries = Object.entries(body.nums as Record<string, unknown>);
  if (entries.length > 300) return null;
  for (const [k, v] of entries) {
    if (!/^[A-Za-z0-9]{1,32}$/.test(k)) continue;
    if (TEXT_KEYS.has(k)) { if (typeof v === "string") nums[k] = text(v, 40); continue; }
    const n = num(v, 1e11);
    if (n === null) return null;
    nums[k] = n;
  }
  return { team, rates, nums };
}

export const hashOf = (d: { team: TeamRow[]; rates: RateRow[]; nums: Nums }) => crypto.createHash("sha1").update(JSON.stringify([d.team, d.rates, d.nums])).digest("hex").slice(0, 16);

/** Headcount and hours only: the one thing a viewer learns about the team table. */
export function snapOf(team: TeamRow[]): Snap {
  const sum = (k: "impl" | "ms") => team.reduce((a, t) => a + t[k], 0);
  return { peopleMs: team.filter((t) => t.ms > 0).length, hoursMs: sum("ms"), peopleImpl: team.filter((t) => t.impl > 0).length, hoursImpl: sum("impl") };
}

export async function getDraft(slug: string): Promise<TeamDraft | null> {
  const d = (await readProposalFile(slug + TEAM_DRAFT_SUFFIX)) as TeamDraft | null;
  return d && Array.isArray(d.team) ? d : null;
}

export async function saveDraft(slug: string, email: string, input: { team: TeamRow[]; rates: RateRow[]; nums: Nums }): Promise<TeamDraft> {
  const draft: TeamDraft = { ...input, hash: hashOf(input), at: new Date().toISOString(), by: email.trim().toLowerCase() };
  await writeProposalFile(slug + TEAM_DRAFT_SUFFIX, draft);
  return draft;
}

export async function getPub(slug: string): Promise<TeamPub | null> {
  const p = (await readProposalFile(slug + TEAM_PUB_SUFFIX)) as TeamPub | null;
  return p && p.snap ? p : null;
}

/** Publishes what was last saved, so a publish never carries unsaved edits. */
export async function publishDraft(slug: string, email: string): Promise<TeamPub | null> {
  const d = await getDraft(slug);
  if (!d) return null;
  const pub: TeamPub = { snap: snapOf(d.team), nums: d.nums, hash: d.hash, at: new Date().toISOString(), by: email.trim().toLowerCase() };
  await writeProposalFile(slug + TEAM_PUB_SUFFIX, pub);
  return pub;
}
