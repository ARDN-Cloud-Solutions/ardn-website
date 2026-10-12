import { emptyProposal, type Proposal } from "@/lib/proposals/model";
import { listProposalSlugs, readProposalFile } from "@/lib/proposals/store";
import invited from "./seeds/invited-clubs.json";

/**
 * Proposals live in the database (proposal_docs, see lib/proposals/store.ts),
 * created and edited at /proposals/admin. The seeds below are the starting
 * copies shipped with the code; a saved copy always wins.
 */
export const ARDN_DOMAIN = "ardncloudsolutions.com";

const SEEDS: Record<string, Proposal> = { "invited-clubs": invited as Proposal };

export async function getProposal(slug: string): Promise<Proposal | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
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
  const slugs = Array.from(new Set([...Object.keys(SEEDS), ...(await listProposalSlugs())])).filter((s) => s !== "admin");
  return (await Promise.all(slugs.map((s) => getProposal(s)))).filter((p): p is Proposal => !!p);
}

export function emailAllowed(p: Proposal, email: string): boolean {
  const e = email.trim().toLowerCase();
  const domain = e.split("@")[1] || "";
  if (domain === ARDN_DOMAIN) return true;
  if (p.access.emails.map((x) => x.toLowerCase()).includes(e)) return true;
  return p.access.domains.map((d) => d.toLowerCase().replace(/^@/, "")).includes(domain);
}
