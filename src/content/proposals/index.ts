import { emptyProposal, type Proposal } from "@/lib/proposals/model";
import { listProposalSlugs, readProposalFile } from "@/lib/proposals/store";
import invited from "./seeds/invited-clubs.json";

/**
 * Proposals live in the database (proposal_docs, see lib/proposals/store.ts),
 * created and edited at /proposals/admin. The seeds below are the starting
 * copies shipped with the code; a saved copy always wins.
 */
export const ARDN_DOMAIN = "ardncloudsolutions.com";

/** The only Ardn people who may sign in, to the admin or to any proposal. */
export const ARDN_PEOPLE = ["deep.patel@ardncloudsolutions.com", "jaimin.patel@ardncloudsolutions.com"];
export const isArdnStaff = (email: string) => ARDN_PEOPLE.includes(email.trim().toLowerCase());

/** Who may open a proposal, fixed in code so a saved copy cannot widen it. */
const LOCKED_ACCESS: Record<string, { domains: string[]; emails: string[] }> = {
  "invited-clubs": { domains: ["invitedclubs.com"], emails: [] },
};

/** Whether this address may hold a session for this slug ("admin" is Ardn only). */
export function lockedAllowed(slug: string, email: string): boolean | null {
  if (isArdnStaff(email)) return true;
  if (slug === "admin") return false;
  const lock = LOCKED_ACCESS[slug];
  if (!lock) return null;
  const e = email.trim().toLowerCase();
  return lock.emails.includes(e) || lock.domains.includes(e.split("@")[1] || "");
}

const SEEDS: Record<string, Proposal> = { "invited-clubs": invited as Proposal };

/**
 * "<slug>--comments" (lib/proposals/comments.ts) and "<slug>--rates"
 * (lib/proposals/rates.ts) are documents kept beside a proposal in the same
 * store. They are never proposals themselves.
 */
const isCompanionDoc = (slug: string) => /--(comments|rates)$/.test(slug);

export async function getProposal(slug: string): Promise<Proposal | null> {
  if (!/^[a-z0-9-]+$/.test(slug) || isCompanionDoc(slug)) return null;
  const saved = (await readProposalFile(slug)) as Proposal | null;
  const p = saved || SEEDS[slug];
  if (!p) return null;
  // Fill any field added after the proposal was saved.
  const base = emptyProposal(p.slug, p.client);
  const merged: Proposal = { ...base, ...p, pricing: { ...base.pricing, ...p.pricing }, memo: { ...base.memo, ...(p.memo || {}) }, risk: { ...base.risk, ...(p.risk || {}) }, compare: { ...base.compare, ...(p.compare || {}) } };
  if (!merged.risk.items?.length) merged.risk.items = base.risk.items;
  if (!merged.compare.rows?.length) merged.compare.rows = base.compare.rows;
  return merged;
}

export async function listProposals(): Promise<Proposal[]> {
  const slugs = Array.from(new Set([...Object.keys(SEEDS), ...(await listProposalSlugs())])).filter((s) => s !== "admin" && !isCompanionDoc(s));
  return (await Promise.all(slugs.map((s) => getProposal(s)))).filter((p): p is Proposal => !!p);
}

export function emailAllowed(p: Proposal, email: string): boolean {
  const e = email.trim().toLowerCase();
  const domain = e.split("@")[1] || "";
  const locked = lockedAllowed(p.slug, e);
  if (locked !== null) return locked;
  if (p.access.emails.map((x) => x.toLowerCase()).includes(e)) return true;
  return p.access.domains.map((d) => d.toLowerCase().replace(/^@/, "")).includes(domain);
}
