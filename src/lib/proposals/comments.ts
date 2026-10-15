import crypto from "node:crypto";
import { isArdnStaff } from "@/content/proposals";
import { readProposalFile, writeProposalFile } from "./store";

/**
 * The comment thread on a proposal: the client asks, Ardn answers, and both
 * sides see the whole back and forth on the proposal itself.
 *
 * Kept as one document per proposal beside the proposal's own copy
 * (proposal_docs, slug "<slug>--comments"), through the same proposals_db()
 * call, so the thread needs no new table. listProposals() leaves these out.
 */

export const COMMENTS_SUFFIX = "--comments";
export const MAX_COMMENT = 4000;

export type ProposalComment = {
  id: string;
  /** The comment this one answers; empty for a new thread. */
  parentId: string;
  email: string;
  /** "ardn" when an Ardn person wrote it. */
  side: "client" | "ardn";
  text: string;
  /** Where the writer was: the tab, and the chapter when it was the detail. */
  where: string;
  createdAt: string;
};

type Thread = { comments: ProposalComment[] };

const docSlug = (slug: string) => slug + COMMENTS_SUFFIX;

export async function listComments(slug: string): Promise<ProposalComment[]> {
  const doc = (await readProposalFile(docSlug(slug))) as Thread | null;
  return Array.isArray(doc?.comments) ? doc.comments : [];
}

export async function addComment(slug: string, email: string, input: { text: string; parentId?: string; where?: string }): Promise<ProposalComment> {
  const comments = await listComments(slug);
  const parentId = String(input.parentId || "");
  const c: ProposalComment = {
    id: crypto.randomUUID(),
    // One level of replies: an answer to an answer joins the same thread.
    parentId: parentId ? comments.find((x) => x.id === parentId)?.parentId || (comments.some((x) => x.id === parentId) ? parentId : "") : "",
    email: email.trim().toLowerCase(),
    side: isArdnStaff(email) ? "ardn" : "client",
    text: input.text.trim().slice(0, MAX_COMMENT),
    where: String(input.where || "").slice(0, 120),
    createdAt: new Date().toISOString(),
  };
  await writeProposalFile(docSlug(slug), { comments: [...comments, c] } satisfies Thread);
  return c;
}

/** A display name from an address: jane.doe@x.com becomes Jane Doe. */
export function nameFromEmail(email: string): string {
  const local = email.split("@")[0] || email;
  return local.split(/[._-]+/).filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(" ") || email;
}
