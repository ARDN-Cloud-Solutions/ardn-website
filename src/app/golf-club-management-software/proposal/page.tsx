import { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { APPS } from "./features";
import { coverageOf } from "./proposal";
import CoverageExplorer, { StatusPill } from "./CoverageExplorer";
import ProposalBuilder from "./ProposalBuilder";
import CompareTable from "./CompareTable";
import { COMPETITORS, RESEARCHED } from "./competitors";
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
  const all = coverageOf(APPS.flatMap((a) => a.features));
  return (
    <main className="ardn-page gc cp">
      <section className="cp-hero">
        <div className="container">
          <p className="gc-kicker gc-on-dark">Club Steward · Coverage &amp; proposal</p>
          <h1 className="cp-h1">See what Club Steward covers, then choose what your club moves.</h1>
          <p className="gc-sub gc-on-dark cp-lede">
            Every app, with how much of it is ready today and where AI does the work. Turn on the apps you want
            to move and enter today&apos;s costs and the future ones to see the difference.
          </p>
          <ul className="cp-stats" role="list">
            <li>
              <b>{all.percent}%</b>
              <span>
                of {all.total} features covered across {APPS.length} apps
              </span>
            </li>
            <li>
              <b>{all.built}</b>
              <span>built and working end to end</span>
            </li>
            <li>
              <b>{all.configure}</b>
              <span>built, and need only your account or hardware</span>
            </li>
            <li>
              <b className="cp-stat-ai">
                <Sparkles size={22} aria-hidden="true" />
                {all.ai}
              </b>
              <span>features where AI does the work</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="gc-section" id="coverage">
        <div className="container">
          <div className="gc-head">
            <p className="gc-kicker">Coverage by app</p>
            <h2 className="gc-h2">How much of each app is ready</h2>
            <p className="gc-sub">Open an app to see every feature in it.</p>
          </div>
          <ul className="cp-legend" role="list">
            <li>
              <StatusPill status="Built" /> Works end to end
            </li>
            <li>
              <StatusPill status="Configure" /> Built; needs your account, key or hardware
            </li>
            <li>
              <StatusPill status="Gap" /> Not built yet
            </li>
            <li>
              <span className="cp-ai">
                <Sparkles size={13} aria-hidden="true" />
                AI
              </span>{" "}
              Uses an AI model
            </li>
          </ul>
          <CoverageExplorer apps={APPS} />
        </div>
      </section>

      <section className="gc-section" id="compare">
        <div className="container">
          <div className="gc-head">
            <p className="gc-kicker">Side by side</p>
            <h2 className="gc-h2">Every feature, next to the other club software</h2>
            <p className="gc-sub">
              Search, narrow to one app, choose which products to compare, and open any feature to see the note
              behind each rating and the page it came from.
            </p>
          </div>
          <CompareTable apps={APPS} competitors={COMPETITORS} researched={RESEARCHED} />
        </div>
      </section>

      <section className="gc-section gc-canvas" id="proposal">
        <div className="container">
          <div className="gc-head">
            <p className="gc-kicker">Your proposal</p>
            <h2 className="gc-h2">Keep it or move it, app by app</h2>
            <p className="gc-sub">
              Turn an app on to move it to Club Steward, then enter yearly costs for the platform and for support,
              today and on Club Steward. Every cost is required for an app you move. What you enter stays in this
              browser.
            </p>
          </div>
          <ProposalBuilder apps={APPS} />
        </div>
      </section>

      <section className="gc-section cp-close no-print">
        <div className="container gc-narrow">
          <h2 className="gc-h2">Want us to fill in the Club Steward side?</h2>
          <p className="gc-sub">
            Tell us which apps you&apos;re moving and we&apos;ll come back with platform and support costs for each.
          </p>
          <p className="cp-close-cta">
            <Link className="gc-btn gc-btn-gold" href="/golf-club-management-software#brief">
              Talk to us
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
