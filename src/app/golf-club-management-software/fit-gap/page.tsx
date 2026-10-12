import { Metadata } from "next";
import Link from "next/link";
import { APPS } from "../proposal/features";
import { COMPETITORS, RESEARCHED } from "../proposal/competitors";
import FitGapTable from "../proposal/FitGapTable";
import "../golf.css";
import "../proposal/proposal.css";

/**
 * /golf-club-management-software/fit-gap — the fit-gap in one expandable
 * table: a summary row per app rolled up across every product compared, and
 * the features underneath. Same data and guardrails as the proposal page;
 * kept out of search the same way, since it is shared as a link.
 */

export const metadata: Metadata = {
  title: "Club Steward Fit-Gap",
  description:
    "How much of each club app Club Steward covers, next to the other club software, in summary and feature by feature.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function FitGapPage() {
  return (
    <main className="ardn-page gc cp">
      <section className="gc-section">
        <div className="container">
          <div className="gc-head">
            <p className="gc-kicker">Club Steward · Fit-gap</p>
            <h1 className="gc-h2">What fits today, and where the gaps are</h1>
            <p className="gc-sub">
              Every app in one table, next to the other club software. The summary rolls each app up; open an app, or
              choose Detail, for every feature and the source behind each rating.
            </p>
          </div>
          <FitGapTable apps={APPS} competitors={COMPETITORS} researched={RESEARCHED} />
          <p className="cp-purpose-note">
            <Link href="/golf-club-management-software/proposal#proposal">Build your proposal</Link> with today&apos;s
            costs and the Club Steward ones.
          </p>
        </div>
      </section>
    </main>
  );
}
