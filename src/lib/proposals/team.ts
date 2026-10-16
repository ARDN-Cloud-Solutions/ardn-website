import crypto from "node:crypto";
import { readProposalFile, writeProposalFile } from "./store";
import { SEED_IMPL, SEED_MS } from "./team-seed";

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

/** One person on one team. Implementation and managed service are two separate rosters; a person can be on one and not the other. */
export type TeamRow = {
  id: number; role: string; name: string; grp: Group; loc: "on" | "off"; cost: number; bill: number; hours: number;
  /** Rollout planning, all optional: older drafts have none of these and still load. FTE is hours / 160, never stored twice. */
  start?: number; end?: number; kind?: PlanKind; section?: PlanSection; systems?: string[];
};
export const PLAN_KINDS = ["Core", "Flex"] as const;
export type PlanKind = (typeof PLAN_KINDS)[number];
export const PLAN_SECTIONS = ["Rollout", "Support"] as const;
export type PlanSection = (typeof PLAN_SECTIONS)[number];
export type RateRow = { id: number; label: string; cost: number; bill: number };
/** The proposal's numbers by key; numbers, except the few keys listed in TEXT_KEYS. */
export type Nums = Record<string, number | string>;
export type TeamDraft = { implTeam: TeamRow[]; msTeam: TeamRow[]; rates: RateRow[]; nums: Nums; hash: string; at: string; by: string };
type DraftInput = { implTeam: TeamRow[]; msTeam: TeamRow[]; rates: RateRow[]; nums: Nums };
/**
 * What the proposal learns of the two teams: for each team (implementation, managed service) and group, each role with the
 * hours of each person on it, plus the two fees the bill rates add up to. People, hours and pods are all counted from it.
 * No cost, no bill rate, no margin.
 */
export type GroupSnap = Record<Group, { role: string; h: number[] }[]>;
export type Snap = { impl: { groups: GroupSnap }; ms: { groups: GroupSnap }; svcMonthly: number; implMonthly: number };
export type TeamPub = { snap: Snap; nums: Nums; hash: string; at: string; by: string };

const TEXT_KEYS = new Set(["priceHold", "redesignDate", "devDate"]);
/** The figures the proposal page reads; the page lists the same keys. Anything else in a save is dropped. */
const NUM_KEYS = new Set(["today", "entities", "entityFee", "cityClubs", "cityFee", "implOther", "spClubPct", "spSharedPct", "retireFrom", "spRet1", "spRet2", "spRet3", "oracleOff", "spLedger", "spStart", "spCity1", "spCity2", "spGolf1", "spGolf2", "spGolf3", "spGolf4", "svcOverride", "implOverride", "hyperMonths", "years", "goLiveFrom", "goLiveTo", "systems", "retire", "partial", "connect", "keep", "inHouse", "leadsDemo", "leadCopies", "rowsBuilt", "rowsTotal", "rowsWaiting", "screens", "memberPages", "dbChanges", "tests", "journeys", "roles", "goals", "pod1Sys", "pod2Sys", "pod3Sys", "pod4Sys", "pod5Sys", "pod6Sys", "feeds", "onshoreRate", "offshoreRate", "podDevs", "noticeDays", "p1RespMin", "p1RestoreH", "p2RespH", "p2FixD", "p3RespD", "p3FixD", "p4RespD", "p1TodayLo", "p1TodayHi", "priceHold", "day1", "day2", "day3", "sinceYear", "yearsTogether", "redesignDate", "devDate", "redesignWeeks", "partnerSince", "saveApp", "saveTeam", "saveQa", "saveDefect", "saveRoadmap", "saveLead", "showFlags", "showHome", "showTeam", "showOrg", "showDetail"]);

/** What a new row and a new rate start from in the staff tab; kept here so no rate is ever written into the page. */
export const NEW_ROW = { cost: 22, bill: 60 };
export const NEW_RATE = { cost: 30, bill: 60 };
const MAX_ROWS = 80;
const MAX_MONTH = 60;
const SYSTEM_ID = /^(sys|stay)\d{2}$/;
const MAX_RATES = 30;

/** Placeholder rates until the real rate card is supplied (README: open item). */
export const DEFAULT_RATE_CARD: RateRow[] = [
  { id: 1, label: "Onshore Lead", cost: 95, bill: 175 },
  { id: 2, label: "Onshore Specialist", cost: 80, bill: 150 },
  { id: 3, label: "Offshore Senior", cost: 30, bill: 60 },
  { id: 4, label: "Offshore Developer", cost: 22, bill: 60 },
  { id: 5, label: "Offshore QA / Support", cost: 18, bill: 45 },
];

/** The team as first drawn: [role, group, location, cost, bill, impl hours per person, managed-service hours per person]. */
const SEED: [string, Group, "on" | "off", number, number, number[], number[]][] = [
  ["Delivery Lead", "lead", "on", 95, 150, [160], [80]],
  ["Solution Architect", "platform", "on", 95, 175, [80], [40]],
  ["Release Manager", "platform", "on", 80, 150, [160], [80]],
  ["QA Automation", "platform", "off", 18, 45, [160, 160], [160, 0]],
  ["Integration & Data Engineer", "platform", "off", 30, 60, [160, 160], [160, 0]],
  ["Second-Line Support Lead", "support", "on", 80, 150, [160], [160]],
  ["L2 Analyst (US Shift)", "support", "off", 18, 45, [160, 160, 160, 160], [160, 160, 0, 0]],
  ["Trainer & Change Lead", "support", "on", 80, 150, [160], [40]],
  ["Members Lead", "pod1", "on", 95, 175, [160], [160]],
  ["Developer", "pod1", "off", 22, 60, [160], [0]],
  ["Developer", "pod2", "off", 22, 60, [160], [160]],
  ["Developer", "pod3", "off", 22, 60, [160], [160]],
  ["Club Ops Lead", "pod4", "on", 95, 175, [160], [160]],
  ["Developer", "pod4", "off", 22, 60, [160], [0]],
  ["Finance Lead", "pod5", "on", 95, 175, [160], [160]],
  ["Developer", "pod6", "off", 22, 60, [160], [160]],
];
/** Both rosters as first drawn: the same seed table, a person on each team where they have hours in that phase. */
export function defaultTeams(): { implTeam: TeamRow[]; msTeam: TeamRow[] } {
  const implTeam: TeamRow[] = [], msTeam: TeamRow[] = [];
  for (const [role, grp, loc, cost, bill, impl, ms] of SEED) {
    impl.forEach((h) => { if (h > 0) implTeam.push({ id: implTeam.length + 1, role, name: "", grp, loc, cost, bill, hours: h }); });
    ms.forEach((h) => { if (h > 0) msTeam.push({ id: msTeam.length + 1, role, name: "", grp, loc, cost, bill, hours: h }); });
  }
  return { implTeam, msTeam };
}

/** The staff tab's first roster: the rollout and support team from the delivery plan, with each person's months, kind and systems. */
export function seedTeams(): { implTeam: TeamRow[]; msTeam: TeamRow[] } {
  const copy = (rows: TeamRow[]) => rows.map((r) => ({ ...r, systems: [...(r.systems ?? [])] }));
  return { implTeam: copy(SEED_IMPL), msTeam: copy(SEED_MS) };
}

const num = (v: unknown, max: number): number | null => (typeof v === "number" && Number.isFinite(v) && v >= 0 && v <= max ? v : null);
const text = (v: unknown, max: number) => String(v ?? "").slice(0, max);

/** The planning fields of a row; each is kept only when valid, so a row without them stays as it was. */
function cleanPlan(r: Record<string, unknown>): Partial<TeamRow> {
  const out: Partial<TeamRow> = {};
  const month = (v: unknown) => (typeof v === "number" && Number.isInteger(v) && v >= 1 && v <= MAX_MONTH ? v : null);
  const start = month(r.start), end = month(r.end);
  if (start !== null && end !== null && end >= start) { out.start = start; out.end = end; }
  if ((PLAN_KINDS as readonly unknown[]).includes(r.kind)) out.kind = r.kind as PlanKind;
  if ((PLAN_SECTIONS as readonly unknown[]).includes(r.section)) out.section = r.section as PlanSection;
  if (Array.isArray(r.systems)) out.systems = [...new Set(r.systems.filter((x): x is string => typeof x === "string" && SYSTEM_ID.test(x)))].slice(0, 60);
  return out;
}

function cleanTeam(list: unknown): TeamRow[] | null {
  if (!Array.isArray(list) || list.length > MAX_ROWS) return null;
  const team: TeamRow[] = [];
  for (const r of list as Record<string, unknown>[]) {
    const id = num(r?.id, 1e15), cost = num(r?.cost, 5000), bill = num(r?.bill, 5000), hours = num(r?.hours, 744);
    if (id === null || cost === null || bill === null || hours === null) return null;
    // a row with a group this page does not know lands in Platform & quality
    const row: TeamRow = { id, role: text(r.role, 80), name: text(r.name, 80), grp: isGroup(r.grp) ? r.grp : "platform", loc: r.loc === "on" ? "on" : "off", cost, bill, hours };
    Object.assign(row, cleanPlan(r));
    team.push(row);
  }
  return team;
}

/** Whole input checked field by field; anything else is dropped, never stored. */
export function cleanDraftInput(body: { implTeam?: unknown; msTeam?: unknown; rates?: unknown; nums?: unknown }): DraftInput | null {
  if (!Array.isArray(body.rates) || !body.nums || typeof body.nums !== "object") return null;
  if (body.rates.length > MAX_RATES) return null;
  const implTeam = cleanTeam(body.implTeam), msTeam = cleanTeam(body.msTeam);
  if (!implTeam || !msTeam) return null;
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
  return { implTeam, msTeam, rates, nums };
}

export const hashOf = (d: DraftInput) => crypto.createHash("sha1").update(JSON.stringify([d.implTeam, d.msTeam, d.rates, d.nums])).digest("hex").slice(0, 16);

const cents = (n: number) => Math.round(n * 100) / 100;

function groupsOf(team: TeamRow[]): GroupSnap {
  const groups = Object.fromEntries(GROUPS.map((g) => [g, [] as GroupSnap[Group]])) as GroupSnap;
  for (const t of team) {
    if (!(t.hours > 0)) continue;
    const list = groups[isGroup(t.grp) ? t.grp : "platform"];
    (list.find((x) => x.role === t.role) || list[list.push({ role: t.role, h: [] }) - 1]).h.push(t.hours);
  }
  return groups;
}

/**
 * Who is on each team, by group, with their hours, and the two fees the bill rates add up to (managed service a month,
 * implementation a month). A row with no hours is not a person. The page's staff tab runs the same sum on the drafts it
 * is editing; keep the two in step.
 */
export function snapOf(implTeam: TeamRow[], msTeam: TeamRow[]): Snap {
  const fee = (t: TeamRow[]) => cents(t.reduce((a, r) => a + r.bill * r.hours, 0));
  return { impl: { groups: groupsOf(implTeam) }, ms: { groups: groupsOf(msTeam) }, svcMonthly: fee(msTeam), implMonthly: fee(implTeam) };
}

type OldRow = { id: number; role: string; name: string; grp?: unknown; loc: "on" | "off"; cost: number; bill: number; impl?: number; ms?: number };

/**
 * A draft saved while the two phases shared one roster ({team} with impl and ms hours on each row) becomes two rosters:
 * a row with implementation hours joins the implementation team, one with managed-service hours joins the managed-service team.
 * The hash is taken again so a save and a publish agree on the migrated draft.
 */
export async function getDraft(slug: string): Promise<TeamDraft | null> {
  const d = (await readProposalFile(slug + TEAM_DRAFT_SUFFIX)) as (Partial<TeamDraft> & { team?: OldRow[] }) | null;
  if (!d || typeof d !== "object") return null;
  const n = (v: unknown) => (typeof v === "number" && Number.isFinite(v) && v >= 0 ? v : 0);
  const fix = (t: TeamRow): TeamRow => ({ ...t, ...cleanPlan(t as unknown as Record<string, unknown>), grp: isGroup(t.grp) ? t.grp : "platform", name: t.name ?? "", loc: t.loc === "on" ? "on" : "off", cost: n(t.cost), bill: n(t.bill), hours: n(t.hours) });
  // every older draft lacked some of these: a missing list or figure becomes the default, never undefined
  const rates = Array.isArray(d.rates) ? d.rates : DEFAULT_RATE_CARD;
  const nums = migrateNums(d.nums);
  if (Array.isArray(d.implTeam) && Array.isArray(d.msTeam)) return { ...(d as TeamDraft), implTeam: d.implTeam.map(fix), msTeam: d.msTeam.map(fix), rates, nums };
  if (!Array.isArray(d.team)) return null;
  const split = (k: "impl" | "ms"): TeamRow[] => d.team!.filter((r) => (r[k] ?? 0) > 0).map((r) => fix({ id: r.id, role: r.role, name: r.name, grp: r.grp as Group, loc: r.loc, cost: r.cost, bill: r.bill, hours: r[k] as number }));
  const input: DraftInput = { implTeam: split("impl"), msTeam: split("ms"), rates, nums };
  return { ...input, hash: hashOf(input), at: d.at ?? "", by: d.by ?? "" };
}

/** The first drafts typed the two fees as svcMo and impl; they are now the overrides. */
function migrateNums(raw: unknown): Nums {
  const o = (raw && typeof raw === "object" ? { ...(raw as Nums) } : {}) as Nums;
  if (typeof o.svcMo === "number" && o.svcOverride === undefined) o.svcOverride = o.svcMo;
  if (typeof o.impl === "number" && o.implOverride === undefined) o.implOverride = o.impl;
  delete o.svcMo; delete o.impl;
  return o;
}

/** null when the stored draft is no longer the one the editor started from (someone else saved, or saved first). */
export async function saveDraft(slug: string, email: string, input: DraftInput, expectedHash: string): Promise<TeamDraft | null> {
  const current = await getDraft(slug);
  if ((current?.hash ?? "") !== expectedHash) return null;
  const draft: TeamDraft = { ...input, hash: hashOf(input), at: new Date().toISOString(), by: email.trim().toLowerCase() };
  await writeProposalFile(slug + TEAM_DRAFT_SUFFIX, draft);
  return draft;
}

/**
 * The published document in the current shape, whichever commit wrote it:
 *  1. {peopleMs, hoursMs, peopleImpl, hoursImpl}           first publish (headcount only)
 *  2. the same plus roles {i, m}                           role hours, no fees
 *  3. {groups: {role, i, m}, svcMonthly, implMonthly}      one roster, both phases on each person
 *  4. {impl: {groups}, ms: {groups}, svcMonthly, implMonthly}  two rosters (current)
 * 3 converts exactly. 1 and 2 hold no roster to draw, so they take the default teams (what the page shows without data).
 * Nums keep their keys; svcMo and impl (typed fees) become the overrides.
 */
export async function getPub(slug: string): Promise<TeamPub | null> {
  const p = (await readProposalFile(slug + TEAM_PUB_SUFFIX)) as (Partial<TeamPub> & { snap?: Record<string, unknown> }) | null;
  if (!p || typeof p !== "object" || !p.snap || typeof p.snap !== "object") return null;
  type Old = { role?: unknown; i?: number[]; m?: number[] };
  const sn = p.snap as { ms?: { groups?: unknown }; impl?: { groups?: unknown }; groups?: Record<string, Old[] | undefined>; svcMonthly?: unknown; implMonthly?: unknown };
  const fee = (v: unknown) => (typeof v === "number" && Number.isFinite(v) && v >= 0 ? v : null);
  let snap: Snap;
  const cur = sn.ms?.groups && sn.impl?.groups;
  if (cur && fee(sn.svcMonthly) !== null && fee(sn.implMonthly) !== null) {
    snap = sn as Snap;
  } else if (sn.groups && typeof sn.groups === "object") {
    const side = (k: "i" | "m") => Object.fromEntries(GROUPS.map((g) => [g, (sn.groups?.[g] ?? []).filter((e) => Array.isArray(e?.[k]) && (e[k] as number[]).length).map((e) => ({ role: String(e.role), h: e[k] as number[] }))])) as GroupSnap;
    const d = defaultTeams(), dflt = snapOf(d.implTeam, d.msTeam);
    snap = { impl: { groups: side("i") }, ms: { groups: side("m") }, svcMonthly: fee(sn.svcMonthly) ?? dflt.svcMonthly, implMonthly: fee(sn.implMonthly) ?? dflt.implMonthly };
  } else {
    const d = defaultTeams();
    snap = snapOf(d.implTeam, d.msTeam);
  }
  return { snap, nums: migrateNums(p.nums), hash: String(p.hash ?? ""), at: String(p.at ?? ""), by: String(p.by ?? "") };
}

/** Publishes what was last saved, so a publish never carries unsaved edits. */
export async function publishDraft(slug: string, email: string, expectedHash: string): Promise<TeamPub | "none" | "conflict"> {
  const d = await getDraft(slug);
  if (!d) return "none";
  if (d.hash !== expectedHash) return "conflict";
  // only figures the page reads go out, even if an older draft stored others
  const nums = Object.fromEntries(Object.entries(d.nums).filter(([k]) => NUM_KEYS.has(k)));
  const pub: TeamPub = { snap: snapOf(d.implTeam, d.msTeam), nums, hash: d.hash, at: new Date().toISOString(), by: email.trim().toLowerCase() };
  await writeProposalFile(slug + TEAM_PUB_SUFFIX, pub);
  return pub;
}
