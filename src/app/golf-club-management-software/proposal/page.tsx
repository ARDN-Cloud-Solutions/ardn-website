import { Metadata } from "next";
import ProposalPageBody from "./ProposalPageBody";
import "../golf.css";
import "./proposal.css";

/**
 * /golf-club-management-software/proposal — Club Steward coverage by app and a
 * keep-or-move proposal with today's and future costs.
 *
 * Kept out of search for now (noindex, not in the sitemap): it is shared with
 * a club as a link while the owner reviews it. The guardrails in
 * GolfClubContent's header apply here too: no client, vendor, partner or
 * integration names, and no Club Steward pricing — the costs on this page are
 * the ones the club types in.
 *
 * Feature rows and their statuses are generated (features.ts); see its header.
 */

export const metadata: Metadata = {
  title: "Club Steward Coverage & Proposal",
  description:
    "What Club Steward covers in each app, where AI does the work, and a proposal of what your club keeps and what it moves, with today's and future costs.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function ClubProposalPage() {
  return <ProposalPageBody />;
}
