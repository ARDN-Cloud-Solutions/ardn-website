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

/** Where a person sits on the proposal: the delivery lead, the shared platform and support teams, or one of the six pods. */
export const GROUPS = ["lead", "platform", "support", "pod1", "pod2", "pod3", "pod4", "pod5", "pod6"] as const;
export type Group = (typeof GROUPS)[number];
const isGroup = (v: unknown): v is Group => (GROUPS as readonly unknown[]).includes(v);

export type TeamRow = { id: number; role: string; name: string; grp: Group; loc: "on" | "off"; cost: number; bill: number; impl: number; ms: number };
export type RateRow = { id: number; label: string; cost: number; bill: number };
/** The proposal's numbers by key; numbers, except the few keys listed in TEXT_KEYS. */
export type Nums = Record<string, number | string>;
export type TeamDraft = { team: TeamRow[]; rates: RateRow[]; nums: Nums; hash: string; at: string; by: string };
/**
 * What the proposal learns of the team table: for each group, each role with the hours of each person at go-live (i)
 * and after rollout (m), plus the two fees the bill rates add up to. People, hours and step-ups are all counted from it.
 * No cost, no bill rate, no margin.
 */
export type Snap = { groups: Record<Group, { role: string; i: number[]; m: number[] }[]>; svcMonthly: number; implMonthly: number };
export type TeamPub = { snap: Snap; nums: Nums; hash: string; at: string; by: string };

const TEXT_KEYS = new Set(["priceHold", "redesignDate", "devDate"]);
/** The figures the proposal page reads; the page lists the same keys. Anything else in a save is dropped. */
const NUM_KEYS = new Set(["today", "entities", "entityFee", "cityClubs", "cityFee", "implOther", "svcOverride", "implOverride", "hyperMonths", "years", "goLiveFrom", "goLiveTo", "systems", "retire", "partial", "connect", "keep", "inHouse", "leadsDemo", "leadCopies", "rowsBuilt", "rowsTotal", "rowsWaiting", "screens", "memberPages", "dbChanges", "tests", "journeys", "roles", "goals", "pod1Sys", "pod2Sys", "pod3Sys", "pod4Sys", "pod5Sys", "pod6Sys", "feeds", "onshoreRate", "offshoreRate", "podDevs", "noticeDays", "p1RespMin", "p1RestoreH", "p2RespH", "p2FixD", "p3RespD", "p3FixD", "p4RespD", "p1TodayLo", "p1TodayHi", "priceHold", "day1", "day2", "day3", "sinceYear", "yearsTogether", "redesignDate", "devDate", "redesignWeeks", "partnerSince", "saveApp", "saveTeam", "saveQa", "saveDefect", "saveRoadmap", "saveLead", "showFlags"]);

/** What a new row and a new rate start from in the staff tab; kept here so no rate is ever written into the page. */
export const NEW_ROW = { cost: 22, bill: 60 };
export const NEW_RATE = { cost: 30, bill: 60 };
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

/** The team as first drawn: [role, group, location, cost, bill, impl hours per person, managed-service hours per person]. */
const SEED: [string, Group, "on" | "off", number, number, number[], number[]][] = [
  ["Delivery Lead", "lead", "on", 95, 150, [160], [80]],
  ["Solution Architect", "platform", "on", 95, 175, [80], [40]],
  ["Release Manager", "platform", "on", 80, 150, [160], [80]],
  ["QA Automation", "platform", "off", 18, 45, [160, 160], [160, 0]],
  ["Integration & Data Engineer", "platform", "off", 30, 60, [160, 160], [160, 0]],
  ["Second-line Support Lead", "support", "on", 80, 150, [160], [160]],
  ["L2 Analyst (US shift)", "support", "off", 18, 45, [160, 160, 160, 160], [160, 160, 0, 0]],
  ["Trainer & Change Lead", "support", "on", 80, 150, [160], [40]],
  ["Members lead", "pod1", "on", 95, 175, [160], [160]],
  ["Developer", "pod1", "off", 22, 60, [160], [0]],
  ["Developer", "pod2", "off", 22, 60, [160], [160]],
  ["Developer", "pod3", "off", 22, 60, [160], [160]],
  ["Club Ops lead", "pod4", "on", 95, 175, [160], [160]],
  ["Developer", "pod4", "off", 22, 60, [160], [0]],
  ["Finance lead", "pod5", "on", 95, 175, [160], [160]],
  ["Developer", "pod6", "off", 22, 60, [160], [160]],
];
export function defaultTeam(): TeamRow[] {
  const rows: TeamRow[] = [];
  let id = 1;
  for (const [role, grp, loc, cost, bill, impl, ms] of SEED) impl.forEach((h, k) => rows.push({ id: id++, role, name: "", grp, loc, cost, bill, impl: h, ms: ms[k] || 0 }));
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
    // a row from before groups existed (or with a group this page does not know) lands in Platform & quality
    team.push({ id, role: text(r.role, 80), name: text(r.name, 80), grp: isGroup(r.grp) ? r.grp : "platform", loc: r.loc === "on" ? "on" : "off", cost, bill, impl, ms });
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
    if (!NUM_KEYS.has(k)) continue;
    if (TEXT_KEYS.has(k)) { if (typeof v === "string") nums[k] = text(v, 40); continue; }
    const n = num(v, 1e11);
    if (n === null) return null;
    nums[k] = n;
  }
  return { team, rates, nums };
}

export const hashOf = (d: { team: TeamRow[]; rates: RateRow[]; nums: Nums }) => crypto.createHash("sha1").update(JSON.stringify([d.team, d.rates, d.nums])).digest("hex").slice(0, 16);

const cents = (n: number) => Math.round(n * 100) / 100;

/**
 * Who is in each group, with their hours, and the two fees the bill rates add up to (managed service a month,
 * implementation a month). A row with no hours in either phase is not a person. The page's staff tab runs the same sum
 * on the draft it is editing; keep the two in step.
 */
export function snapOf(team: TeamRow[]): Snap {
  const groups = Object.fromEntries(GROUPS.map((g) => [g, [] as Snap["groups"][Group]])) as Snap["groups"];
  for (const t of team) {
    if (!(t.impl > 0) && !(t.ms > 0)) continue;
    const list = groups[isGroup(t.grp) ? t.grp : "platform"];
    const e = list.find((x) => x.role === t.role) || list[list.push({ role: t.role, i: [], m: [] }) - 1];
    if (t.impl > 0) e.i.push(t.impl);
    if (t.ms > 0) e.m.push(t.ms);
  }
  return { groups, svcMonthly: cents(team.reduce((a, t) => a + t.bill * t.ms, 0)), implMonthly: cents(team.reduce((a, t) => a + t.bill * t.impl, 0)) };
}

export async function getDraft(slug: string): Promise<TeamDraft | null> {
  const d = (await readProposalFile(slug + TEAM_DRAFT_SUFFIX)) as TeamDraft | null;
  if (!d || !Array.isArray(d.team)) return null;
  d.team = d.team.map((t) => ({ ...t, grp: isGroup(t.grp) ? t.grp : "platform" }));
  return d;
}

/** null when the stored draft is no longer the one the editor started from (someone else saved, or saved first). */
export async function saveDraft(slug: string, email: string, input: { team: TeamRow[]; rates: RateRow[]; nums: Nums }, expectedHash: string): Promise<TeamDraft | null> {
  const current = await getDraft(slug);
  if ((current?.hash ?? "") !== expectedHash) return null;
  const draft: TeamDraft = { ...input, hash: hashOf(input), at: new Date().toISOString(), by: email.trim().toLowerCase() };
  await writeProposalFile(slug + TEAM_DRAFT_SUFFIX, draft);
  return draft;
}

export async function getPub(slug: string): Promise<TeamPub | null> {
  const p = (await readProposalFile(slug + TEAM_PUB_SUFFIX)) as TeamPub | null;
  // a document published before the snapshot carried groups cannot be drawn: the page falls back to its own defaults
  return p && p.snap && p.snap.groups ? p : null;
}

/** Publishes what was last saved, so a publish never carries unsaved edits. */
export async function publishDraft(slug: string, email: string, expectedHash: string): Promise<TeamPub | "none" | "conflict"> {
  const d = await getDraft(slug);
  if (!d) return "none";
  if (d.hash !== expectedHash) return "conflict";
  // only figures the page reads go out, even if an older draft stored others
  const nums = Object.fromEntries(Object.entries(d.nums).filter(([k]) => NUM_KEYS.has(k)));
  const pub: TeamPub = { snap: snapOf(d.team), nums, hash: d.hash, at: new Date().toISOString(), by: email.trim().toLowerCase() };
  await writeProposalFile(slug + TEAM_PUB_SUFFIX, pub);
  return pub;
}
