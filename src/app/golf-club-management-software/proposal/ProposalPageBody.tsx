import Link from "next/link";
import { Sparkles } from "lucide-react";
import { APPS } from "./features";
import { coverageOf, type ProposalPreset } from "./proposal";
import CoverageExplorer, { StatusPill } from "./CoverageExplorer";
import ProposalBuilder from "./ProposalBuilder";
import CompareTable from "./CompareTable";
import { COMPETITORS, RESEARCHED } from "./competitors";

/**
 * The proposal page's content. page.tsx renders it for the public site with
 * no preset; a club's own copy renders it with that club's name and current
 * systems, which never go into this repo.
 */

export default function ProposalPageBody({ preset }: { preset?: ProposalPreset }) {
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
            <h2 className="gc-h2">Today on one side, Club Steward on the other</h2>
            <p className="gc-sub">
              Enter what each app costs today. Turn an app on in Club Steward and enter its platform and support
              costs; an app you leave off keeps today&apos;s cost. Every cost is required for an app you turn on.
              What you enter stays in this browser.
            </p>
          </div>
          <ProposalBuilder apps={APPS} preset={preset} />
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
