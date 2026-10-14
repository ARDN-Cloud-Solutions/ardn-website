import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import TrackedLink from "../TrackedLink";
import Shot from "../Shot";
import LoopClip from "@/components/media/LoopClip";
import { loopClip } from "@/components/media/videos";
import CoverageExplorer from "../proposal/CoverageExplorer";
import { APPS } from "../proposal/features";
import {
  CALENDLY,
  GALLERY,
  MODULES,
  PAINS,
  PROMISES,
  SAFEGUARDS,
  SECURITY,
  STEPS,
  TIER_LABEL,
  TOUR,
} from "../content";

const HOME = "/golf-club-management-software";

/**
 * /golf-club-management-software/features — "All Club Steward features".
 *
 * The long-form half of the Club Steward page. On 2026-10-14 the landing page
 * was cut down to what a club decision maker scans in under a minute; every
 * section below was MOVED here from GolfClubContent unchanged (same copy,
 * same data in ../content.ts), so nothing true was lost and the long-tail
 * search terms still have a page. Same truth guardrails as GolfClubContent.
 *
 * The per-feature catalog (CoverageExplorer) lives only here, which keeps its
 * data and code off the landing page.
 */
export default function FeaturesContent() {
  return (
    <main className="ardn-page gc">
      <section className="gc-hero gc-hero-slim">
        <div className="gc-hero-glow" aria-hidden="true" />
        <div className="container">
          <nav className="gc-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> <span aria-hidden="true">/</span>{" "}
            <Link href={HOME}>Club Steward</Link> <span aria-hidden="true">/</span>{" "}
            <span aria-current="page">All features</span>
          </nav>
          <h1 className="gc-h1">
            <span className="gc-eyebrow">Club Steward · Golf &amp; country club management software</span>
            <span className="gc-display gc-display-sm">
              All Club Steward features, <em>app by app.</em>
            </span>
          </h1>
          <p className="gc-lede">
            Everything Club Steward does for a multi-club golf and country club operation, in
            detail: every app and what it includes, the real screens, roles and security,
            accounting, and how a portfolio rolls out club by club.
          </p>
          <div className="gc-ctas">
            <TrackedLink className="gc-btn gc-btn-gold" href={CALENDLY} event="book_walkthrough_click" location="features-hero">
              Book a 30-minute walkthrough
            </TrackedLink>
            <Link className="gc-btn gc-btn-light" href={`${HOME}#video`}>
              Watch the walkthrough
            </Link>
          </div>
          <ul className="gc-jump" aria-label="On this page">
            <li><a href="#modules">Apps</a></li>
            <li><a href="#catalog">Every feature</a></li>
            <li><a href="#tour">Product tour</a></li>
            <li><a href="#member-experience">Member experience</a></li>
            <li><a href="#security">Roles &amp; security</a></li>
            <li><a href="#accounting">Accounting</a></li>
            <li><a href="#one-flow">One flow</a></li>
            <li><a href="#rollout">Rollout &amp; switching</a></li>
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          MODULES
          --------------------------------------------------------------- */}
      <section className="gc-section" id="modules">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">One platform, every department</span>
            <h2 className="gc-h2">Everything the club runs on, in one login.</h2>
            <p className="gc-sub">
              Start with the core, Membership Sales and the Members App, then add the
              modules each club needs. Every module switches on or off per club.
            </p>
          </div>

          <div className="gc-cards">
            {MODULES.map((c) => (
              <article className={`gc-card gc-tier-${c.tier}`} key={c.title} id={c.slug}>
                <div className="gc-card-top">
                  <span className="gc-icon" aria-hidden="true">
                    <c.icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className={`gc-tier gc-tier-tag-${c.tier}`}>{TIER_LABEL[c.tier]}</span>
                  {c.tag && <span className="gc-tier gc-tier-tag-preview">{c.tag}</span>}
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                {c.points && (
                  <ul className="gc-card-points">
                    {c.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <p className="gc-also">
            <strong>Also included:</strong> multi-club rollups by region, a report
            builder with scheduled reports, guided step-by-step workflows on every
            record, a plain-words explainer for every permission, person merge with a
            preview, an audit trail on every record, and Microsoft sign-in.
          </p>

          <div className="gc-ai">
            <span className="gc-icon" aria-hidden="true">
              <Sparkles size={22} strokeWidth={1.75} />
            </span>
            <div>
              <span className="gc-kicker">Active AI</span>
              <h3>AI that does the work, not a chat window bolted on.</h3>
              <p>
                The assistant answers members and visitors first and hands off to a person.
                Staff ask questions about the club in plain English and get answers with their
                sources, limited to what they&rsquo;re allowed to see. New inquiries arrive
                sorted by topic, applicants arrive ranked with names hidden, a photo of a floor
                plan becomes a room layout, a receipt becomes an expense, an asset label becomes
                an asset record, and the time clock knows faces. Bring your own AI provider for
                chat; usage runs on your own account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          EVERY FEATURE. The catalog is proposal/features.ts, generated from
          the product's code; catalog mode shows only what is built.
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas cp" id="catalog">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">Every feature, app by app</span>
            <h2 className="gc-h2">Open any app to see everything it does.</h2>
            <p className="gc-sub">
              Features marked AI use an AI model. Configure means the feature is built and
              needs only the club&rsquo;s own account, key or hardware.
            </p>
          </div>
          <CoverageExplorer apps={APPS} catalog />
          <p className="gc-also">
            Comparing with what your club runs today?{" "}
            <Link href="/golf-club-management-software/proposal">
              See coverage, compare side by side, and build a proposal with your costs
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          PRODUCT TOUR — real UI, alternating rows
          --------------------------------------------------------------- */}
      <section className="gc-section" id="tour">
        <div className="container gc-wide">
          <div className="gc-head">
            <span className="gc-kicker">See it, don&rsquo;t take our word</span>
            <h2 className="gc-h2">The real product, running a portfolio of clubs.</h2>
            <p className="gc-sub">
              Every screen on this page is the actual platform running a
              multi-club demo portfolio — sample clubs and people, no mockups.
            </p>
          </div>

          <div className="gc-tour">
            {TOUR.map((t) => (
              <div className="gc-tour-row" key={t.kicker}>
                <div className="gc-tour-copy">
                  <div>
                    <span className="gc-kicker">{t.kicker}</span>
                    <h3 className="gc-h3">{t.title}</h3>
                  </div>
                  <div>
                    <p>{t.body}</p>
                    <ul className="gc-ticks gc-ticks-light">
                      {t.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Shot
                  src={t.img}
                  alt={t.alt}
                  url={t.url}
                  sizes="(max-width: 1400px) 100vw, 1320px"
                />
              </div>
            ))}
          </div>

          <div className="gc-inline-cta">
            <p>
              <strong>Want to see it on a portfolio like yours?</strong>{" "}
              We&rsquo;ll
              walk through the whole flow — website to first tee time — in 30
              minutes.
            </p>
            <div className="gc-inline-actions">
              <Link className="gc-btn gc-btn-ghost" href={`${HOME}#video`}>Watch the walkthrough</Link>
              <TrackedLink
              className="gc-btn gc-btn-gold"
              href={CALENDLY}
              event="book_walkthrough_click"
              location="features-after-tour"
            >
              Book a walkthrough
            </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          MEMBER EXPERIENCE
          --------------------------------------------------------------- */}
      <section className="gc-section gc-dark" id="member-experience">
        <div className="container">
          <div className="gc-split">
            <div>
              <span className="gc-kicker gc-on-dark">Member experience</span>
              <h2 className="gc-h2">
                A portal and golf app your members will actually open.
              </h2>
              <p className="gc-sub gc-on-dark">
                Members are active the moment they pay, and onboarding walks them
                through the rest with reminders. From then on, everything about
                their membership is in one club-branded account.
              </p>
              <ul className="gc-ticks">
                <li>Digital membership card with QR code for every household member, also in Apple Wallet</li>
                <li>Benefits used and remaining, with reset dates</li>
                <li>Dues, next charge, autopay status and the signed agreement</li>
                <li>Hold, cancel or change plan — billing follows automatically</li>
                <li>A per-club installable golf app with tee times and digital scorecards</li>
              </ul>
            </div>
            <Shot
              src="/images/golf/member-home.webp"
              alt="Member portal home with digital membership card, plan details, benefits and quick actions"
              url="members.yourclub.com"
              sizes="(max-width: 1040px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          SEE IT MOVE — the three silent loops (moved from the landing
          page's video section)
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas" id="see-it-move">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">See it move</span>
            <h2 className="gc-h2">Three flows, start to finish.</h2>
          </div>
                    <div className="mv-row">
            <LoopClip
              step={1}
              {...loopClip("club-steward-tee-sheet")}
              caption="The tee sheet: booking windows by membership tier, carts assigned from the same booking."
            />
            <LoopClip
              step={2}
              {...loopClip("club-steward-events")}
              caption="An inquiry becomes an event with the room held; the final bill posts to the member's house account."
            />
            <LoopClip
              step={3}
              {...loopClip("club-steward-pos")}
              caption="Point of sale: find the member, charge it to their account, and it lands on their statement."
            />
          </div>
          <p className="gc-footnote">Screens show a sample club with fictional people and figures.</p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          GALLERY
          --------------------------------------------------------------- */}
      <section className="gc-section" id="gallery">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">More of the platform</span>
            <h2 className="gc-h2">Six more screens your team will live in.</h2>
          </div>

          <div className="gc-gallery">
            {GALLERY.map((g) => (
              <figure className="gc-gallery-item" key={g.title}>
                <Image
                  src={g.img}
                  alt={g.alt}
                  width={2880}
                  height={1800}
                  quality={90}
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
                <figcaption>
                  <strong>{g.title}</strong>
                  <span>{g.body}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          ROLES & SECURITY
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas" id="security">
        <div className="container">
          <div className="gc-split gc-split-top">
            <div>
              <div className="gc-head">
                <span className="gc-kicker">From ownership to the bag room</span>
                <h2 className="gc-h2">
                  Everyone sees exactly their slice, enforced by the database.
                </h2>
                <p className="gc-sub">
                  Corporate sees every club with region subtotals. Regional VPs
                  get the same reports limited to their region, growing as clubs
                  are added. GMs get their club&rsquo;s home. Membership
                  directors, controllers, events directors and seven golf roles
                  each get their own workspace.
                </p>
              </div>
              <Shot
                src="/images/golf/permissions.webp"
                alt="Who Can Do What screen showing which people hold a given permission across every club"
                url="Settings · Who can do what"
              />
            </div>
            <div className="gc-onprop gc-onprop-stack">
              {SECURITY.map((s) => (
                <article key={s.title}>
                  <span className="gc-icon" aria-hidden="true">
                    <s.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          ACCOUNTING. Built: each club keeps its own books. The screenshots
          use sample figures, so keep that note.
          --------------------------------------------------------------- */}
      <section className="gc-section" id="accounting">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">
              Accounting &amp; financial reporting
            </span>
            <h2 className="gc-h2">A general ledger fed by the club, not re-keyed from it.</h2>
            <p className="gc-sub">
              Dues billing, tee-time fees, pro-shop sales, events and payroll
              post with their account, department, revenue centre and
              club already attached — per club, or consolidated across all of
              them.
            </p>
          </div>

          <div className="gc-gallery gc-gallery-2">
            <figure className="gc-gallery-item">
              <Image
                src="/images/golf/accounting-overview.webp"
                alt="Books for all clubs together: a six-month revenue, expense and budget chart, member account aging and results by department"
                width={2880}
                height={1800}
                quality={90}
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <figcaption>
                <strong>Accounting overview</strong>
                <span>Revenue and expenses against budget, member account aging and results by department — any club or all clubs.</span>
              </figcaption>
            </figure>
            <figure className="gc-gallery-item">
              <Image
                src="/images/golf/financial-statements.webp"
                alt="Profit and loss by department for a month against the same month a year earlier, with variance"
                width={2880}
                height={1800}
                quality={90}
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <figcaption>
                <strong>Financial statements</strong>
                <span>P&amp;L by department against budget and prior year, balance sheet and cash flow, PDF and CSV export.</span>
              </figcaption>
            </figure>
          </div>

          <p className="gc-onprop-note">
            Included: general ledger, payables and receivables, bank
            reconciliation with payout matching, budgets, period close,
            purchasing with three-way match, a 13-week cash forecast, debt,
            leases and the fixed-asset register. Screens show sample figures.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          PROBLEM
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">The patchwork</span>
            <h2 className="gc-h2">
              Club technology was assembled one club at a time. Multi-club
              operators inherit the result.
            </h2>
            <p className="gc-sub">
              Every hand-off between these systems is a place where data is
              re-keyed, prices drift, prospects fall through the cracks, and the
              controller spends the first week of every month reconciling.
            </p>
          </div>

          <div className="gc-pains">
            {PAINS.map((p) => (
              <div className="gc-pain" key={p.label}>
                <span className="gc-pain-label">{p.label}</span>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          THE CONNECTED DIFFERENCE
          --------------------------------------------------------------- */}
      <section className="gc-section" id="one-flow">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">One flow</span>
            <h2 className="gc-h2">
              From first inquiry to first round, on one member record.
            </h2>
            <p className="gc-sub">
              In Club Steward the website, the lead, the tour, the product
              builder, the signed contract, the payment and onboarding happen in
              one system. That changes what an operator can promise.
            </p>
          </div>

          <div className="gc-onprop gc-promises">
            {PROMISES.map((p) => (
              <article key={p.title}>
                <span className="gc-icon" aria-hidden="true">
                  <p.icon size={20} strokeWidth={1.75} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          HOW IT WORKS
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas" id="rollout">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">Getting there</span>
            <h2 className="gc-h2">Rolled out club by club, on a checklist.</h2>
            <p className="gc-sub">
              A portfolio rollout should be a repeatable process. Every step is
              configured in settings and previewed before it changes anything.
            </p>
          </div>

          <ol className="gc-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="gc-step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="gc-switch" id="switching">
            <div className="gc-head">
              <span className="gc-kicker">Switching without risk</span>
              <h2 className="gc-h2">The migration is the part executives worry about. So it is designed around control.</h2>
            </div>
            <div className="gc-onprop gc-promises">
              {SAFEGUARDS.map((g) => (
                <article key={g.title}>
                  <span className="gc-icon" aria-hidden="true">
                    <g.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3>{g.title}</h3>
                  <p>{g.body}</p>
                </article>
              ))}
            </div>
            <p className="gc-onprop-note">
              Bring an export of your current members and plans to the
              walkthrough, and we&rsquo;ll show you how it maps into
              Club Steward, club by club.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          FINAL CTA
          --------------------------------------------------------------- */}
      <section className="gc-final">
        <div className="gc-hero-glow" aria-hidden="true" />
        <div className="container gc-narrow">
          <h2 className="gc-display gc-display-sm">
            More clubs. <em>Not more systems.</em>
          </h2>
          <p className="gc-lede">
            See one member record carry a prospect from your website to a
            signed, paid membership — and on to their first tee time.
          </p>
          <div className="gc-ctas gc-ctas-center">
            <TrackedLink className="gc-btn gc-btn-gold" href={CALENDLY} event="book_walkthrough_click" location="features-final">
              Book a 30-minute walkthrough
            </TrackedLink>
            <Link className="gc-btn gc-btn-light" href={`${HOME}#brief`}>
              Get the executive brief
            </Link>
          </div>
          <p className="gc-final-links">
            <Link href={HOME}>Club Steward overview</Link>{" "}
            · <Link href={`${HOME}#faq`}>Questions club operators ask</Link>{" "}
            · <Link href="/buyers-guide/golf-club-management-software">Buyer&rsquo;s guide: club software for multi-club operators</Link>{" "}
            · <Link href="/case-studies/club-steward-multi-club-golf-platform">Case study: Club Steward for multi-club operators</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
