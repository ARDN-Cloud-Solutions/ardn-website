import { readProposalFile, writeProposalFile } from "./store";

/**
 * The add-on rates on a proposal's services-team slide: what one more onshore
 * lead or one more offshore developer costs a month. Ardn staff set them and
 * everyone viewing the proposal sees what was saved.
 *
 * Kept as one document per proposal beside the proposal's own copy
 * (proposal_docs, slug "<slug>--rates"), the same way as the comment thread
 * (comments.ts). listProposals() leaves these out.
 */

export const RATES_SUFFIX = "--rates";
export const MIN_RATE = 1000;
export const MAX_RATE = 100000;

export type AddOnRates = {
  /** Dollars per onshore functional lead per month. */
  onshore: number;
  /** Dollars per offshore developer per month. */
  offshore: number;
  updatedBy: string;
  updatedAt: string;
};

export const DEFAULT_RATES: AddOnRates = { onshore: 28000, offshore: 9600, updatedBy: "", updatedAt: "" };

const docSlug = (slug: string) => slug + RATES_SUFFIX;

/** A whole-dollar rate inside the allowed range, or null. */
export function validRate(n: unknown): number | null {
  return typeof n === "number" && Number.isInteger(n) && n >= MIN_RATE && n <= MAX_RATE ? n : null;
}

export async function getRates(slug: string): Promise<AddOnRates> {
  const doc = (await readProposalFile(docSlug(slug))) as Partial<AddOnRates> | null;
  const onshore = validRate(doc?.onshore);
  const offshore = validRate(doc?.offshore);
  if (onshore === null || offshore === null) return DEFAULT_RATES;
  return { onshore, offshore, updatedBy: String(doc?.updatedBy || ""), updatedAt: String(doc?.updatedAt || "") };
}

export async function saveRates(slug: string, email: string, input: { onshore: number; offshore: number }): Promise<AddOnRates> {
  const rates: AddOnRates = { onshore: input.onshore, offshore: input.offshore, updatedBy: email.trim().toLowerCase(), updatedAt: new Date().toISOString() };
  await writeProposalFile(docSlug(slug), rates);
  return rates;
}
