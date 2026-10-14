import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flag, Globe, Layers, LifeBuoy, ListChecks, Sparkles, type LucideIcon } from "lucide-react";
import LeadForm from "@/components/common/LeadForm";
import TrackedLink from "./TrackedLink";
import BriefForm from "./BriefForm";
import Shot from "./Shot";
import LazyDetails from "./LazyDetails";
import { WalkthroughButton, WalkthroughOverlay, WalkthroughPlayer } from "./WalkthroughVideo";
import ProductVideo from "@/components/media/ProductVideo";
import { VIDEOS, videoProps } from "@/components/media/videos";
import { FAQS } from "./faqs";
import { CALENDLY, MODULES, STATS, TIER_LABEL, type Tier } from "./content";

/**
 * Golf & country club vertical landing page — Club Steward.
 *
 * Rebuilt 2026-09-26 on the Club Steward Marketing Kit (product overview,
 * competitive comparison and INTERNAL claims guardrails, dated 2026-09-25).
 * The kit supersedes the earlier version of this page, which was written
 * from the generic membership spec — Club Steward DOES ship a tee sheet,
 * carts, pro shop and golf performance reporting, so the old "On property:
 * keep your tee sheet" positioning is gone. Brand name approved by the owner
 * 2026-09-26.
 *
 * Truth guardrails (owner, 2026-10-07: "the code is what matters"):
 * - Claim what the product's code does. The feature catalog on this page and
 *   on /proposal is features.ts, generated from the product's own feature
 *   list and checked against its code; regenerate it rather than hand-writing
 *   claims. Built = works end to end; Configure = built, needs the club's own
 *   account or hardware; Gap = not built (shown only on /proposal).
 * - Nothing is in production yet: "built and demonstrable", never "live at N
 *   clubs". No customer names, logos, metrics or testimonials.
 * - Not built (never claim): property management (stays "Coming soon"),
 *   integrated tap-to-pay card readers, lodging, spa, marina, door access,
 *   loyalty points, tee-time marketplaces and dynamic pricing. The full list
 *   is the Gap rows on /proposal.
 * - Never "only all-in-one", "only multi-club" or "only cloud"; never claim
 *   competitors lack a CRM. Competitors are NOT named on this page; they
 *   appear only in the sourced side-by-side on proposal/ (competitors.ts).
 * - "A standard report library", not a report count. Don't list integrations.
 * - No Club Steward pricing, quotes or cost claims yet: pricing hasn't been
 *   decided (owner, 2026-09-28). Also no guarantee or contract-term claims.
 * - Name NO payment provider in customer-facing copy (8a76690 / 6ea8cef).
 *
 * DO NOT add client names or client metrics. Screenshots are real product UI
 * from the verification environment, rebranded at capture time; every club,
 * person and figure in them is sample data.
 *
 * CRO: single conversion path is the inline LeadForm (posts /api/contact,
 * fires GA4 generate_lead) with Calendly as the secondary CTA.
 *
 * Focus pass 2026-10-14: real visitors were leaving in under a minute without
 * a click, so this page is now only what a club decision maker scans in about
 * 60 seconds (hero, proof, the apps, one video, the multi-club view, why clubs
 * switch, the brief, FAQ, the form). Everything else MOVED, unchanged, to
 * /golf-club-management-software/features (features/FeaturesContent.tsx);
 * the shared copy and data live in content.ts. Add depth there, not here.
 * Anchors other pages link to: #video (/work, llms.txt), #brief (proposal/).
 */

const FEATURES = "/golf-club-management-software/features";
const VISIBLE_FAQS = 6;

// The hero's proof points and the site TrustBar's signals, in one strip.
const PROOF = [
  "Built for multi-club operators",
  "Contracts & e-signature built in",
  "Benefits that follow the member",
  "Club-level data isolation",
  "US-based team",
  "30+ yrs building software",
  "4-hour response SLA",
];

// Why clubs switch: each line condensed from a section that now lives in
// full on the features page (the patchwork, the switching safeguards) or
// from the site-wide promise in the footer (run as a managed service).
const SWITCH: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Layers,
    title: "One system instead of a patchwork",
    body: "Tee sheet, point of sale, back office, club websites, sales CRM and e-signature share one member record, so nothing is re-keyed between them.",
  },
  {
    icon: LifeBuoy,
    title: "Run for you as a managed service",
    body: "Ardn builds Club Steward and runs it for you, with a US-based team and a 4-hour response SLA.",
  },
  {
    icon: ListChecks,
    title: "Rolled out club by club",
    body: "Apps turn on per club and every club goes live on a readiness checklist, so one club can go live while the rest carry on as today.",
  },
  {
    icon: Globe,
    title: "Rankings and data carry over",
    body: "Old web addresses redirect so search rankings follow, and reports and lists export to CSV from the first day.",
  },
];

// Core first, then add-ons, then coming soon — the order a buyer reads tiers.
const TIER_ORDER: Record<Tier, number> = { core: 0, addon: 1, soon: 2 };
const APPS_BY_TIER = [...MODULES].sort((a, b) => TIER_ORDER[a.tier] - TIER_ORDER[b.tier]);

export default function GolfClubContent() {
  return (
    <main className="ardn-page gc">
      {/* ---------------------------------------------------------------
          HERO
          --------------------------------------------------------------- */}
      <section className="gc-hero">
        <div className="gc-hero-glow" aria-hidden="true" />
        <div className="gc-hero-grain" aria-hidden="true" />
        <div className="container">
          <div className="gc-hero-grid">
            <div className="gc-hero-copy">
              {/* The eyebrow sits inside the H1 so the heading carries the
                  target query ("golf & country club management software")
                  without changing the design. */}
              <h1 className="gc-h1">
                <span className="gc-eyebrow">
                  Club Steward · Golf &amp; country club management software
                </span>
                <span className="gc-display">
                  Every club in your portfolio. <em>One member record.</em>
                </span>
              </h1>
              <p className="gc-lede">
                Club Steward runs a multi-club golf and country club operation
                on one platform, from the first website visit to the 18th green.
              </p>

              <div className="gc-ctas">
                <TrackedLink
                  className="gc-btn gc-btn-gold"
                  href={CALENDLY}
                  event="book_walkthrough_click"
                  location="hero"
                >
                  Book a 30-minute walkthrough
                </TrackedLink>
                <WalkthroughButton className="gc-btn gc-btn-light" location="hero-button" />
              </div>
            </div>

            <div className="gc-hero-visual">
              <div className="gc-hero-shot">
                <Shot
                  src="/images/golf/corporate-dashboard.webp"
                  alt="Club Steward corporate dashboard comparing every club side by side — inquiries, new members, conversion, SLA compliance and pipeline value"
                  url="Club Steward · Corporate · All clubs"
                  priority
                  tilt
                />
                <WalkthroughOverlay location="hero-overlay" />
              </div>
              <div className="gc-hero-float" aria-hidden="true">
                <span className="gc-float-label">
                  <Flag size={13} strokeWidth={2} /> Golf performance · this month
                </span>
                <div className="gc-float-row">
                  <div>
                    <b>46%</b>
                    <span>Tee-sheet utilization</span>
                  </div>
                  <div>
                    <b>$170</b>
                    <span>Revenue per available tee time</span>
                  </div>
                </div>
              </div>
              <p className="gc-hero-caption">
                Real screens from a sample multi-club portfolio. The corporate
                view scopes itself to each regional VP and GM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WalkthroughPlayer />

      {/* ---------------------------------------------------------------
          PROOF — verifiable product facts and team facts only
          --------------------------------------------------------------- */}
      <section className="gc-figures-band gc-proof" aria-label="Club Steward at a glance">
        <div className="container">
          <div className="gc-figures">
            {STATS.map((s) => (
              <div className="gc-figure-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <ul className="gc-proof-list">
            {PROOF.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          WHAT IT RUNS — the apps, one line each; full detail per app on
          the features page (each card links to its anchor there)
          --------------------------------------------------------------- */}
      <section className="gc-section gc-section-tight" id="apps">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">What it runs</span>
            <h2 className="gc-h2">Every department, one login.</h2>
            <p className="gc-sub">
              Start with the core, Membership Sales and the Members App, then add
              the apps each club needs. Every app switches on or off per club.
            </p>
          </div>

          <ul className="gc-apps">
            {APPS_BY_TIER.map((a) => (
              <li key={a.slug}>
                <Link className={`gc-app gc-tier-${a.tier}`} href={`${FEATURES}#${a.slug}`}>
                  <span className="gc-icon" aria-hidden="true">
                    <a.icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="gc-app-text">
                    <span className="gc-app-name">
                      {a.title}
                      <span className={`gc-tier gc-tier-tag-${a.tier}`}>{TIER_LABEL[a.tier]}</span>
                    </span>
                    <span className="gc-app-line">{a.short}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="gc-also">
            <Sparkles size={14} strokeWidth={2} aria-hidden="true" className="gc-also-icon" />{" "}
            <strong>Optional Active AI:</strong> the assistant answers members first, inquiries
            arrive sorted and applicants arrive ranked with names hidden.{" "}
            <strong>Also included:</strong> multi-club rollups by region, a report builder with
            scheduled reports, and Microsoft sign-in.
          </p>
          <div className="gc-apps-more">
            <Link className="gc-btn gc-btn-ghost" href={FEATURES}>
              See all Club Steward features, app by app <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          WATCH IT RUN — the overview inline (the hero's buttons open the
          same file in a modal); the three module walkthroughs collapsed.
          /work's "Watch" link lands on #video.
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas gc-section-tight" id="video">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">Watch it run</span>
            <h2 className="gc-h2">Two minutes, the whole club.</h2>
            <p className="gc-sub">
              The product on a sample club: the membership sales and members app
              core, then every add-on app. Captions are built in.
            </p>
          </div>
          <div className="mv-stage">
            <ProductVideo {...videoProps(VIDEOS.clubStewardOverview)} page="golf-club-management-software" />
          </div>

          <LazyDetails
            className="gc-more"
            summary="Three short walkthroughs: events, point of sale and member service"
          >
            <div className="mv-row">
              {[VIDEOS.clubStewardEvents, VIDEOS.clubStewardPos, VIDEOS.clubStewardService].map((v) => (
                <ProductVideo
                  key={v.slug}
                  {...videoProps(v)}
                  chapters={undefined}
                  compact
                  caption={v.name}
                  page="golf-club-management-software"
                />
              ))}
            </div>
          </LazyDetails>
          <p className="gc-footnote">Screens show a sample club with fictional people and figures.</p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          MULTI-CLUB — the differentiator, short. Long form: features#security
          --------------------------------------------------------------- */}
      <section className="gc-section gc-dark gc-section-tight" id="multi-club">
        <div className="container">
          <div className="gc-split">
            <div>
              <span className="gc-kicker gc-on-dark">Built for the portfolio</span>
              <h2 className="gc-h2">One corporate view. Every club, every region, every GM.</h2>
              <p className="gc-sub gc-on-dark">
                Corporate sees every club with region subtotals. Regional VPs get
                the same reports limited to their region, growing as clubs are
                added. GMs get their club&rsquo;s home.
              </p>
              <ul className="gc-ticks">
                <li>Every club keeps its own branded website, settings and books, consolidated when you need them</li>
                <li>Benefits and reciprocal access capped per club, per network of clubs, or both</li>
                <li>Club-level data isolation enforced in the database, with 550+ permissions per role and club</li>
                <li>New clubs stood up from a template club, so rollout is a repeatable process</li>
              </ul>
              <p className="gc-dark-link">
                <Link href={`${FEATURES}#security`}>
                  Roles, security and reporting in detail <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </p>
            </div>
            <Shot
              src="/images/golf/report-library.webp"
              alt="Report library with governed datasets, saved reports and scheduled delivery: a GM sees their club, a VP their region, corporate every club"
              url="Reports · Library"
              sizes="(max-width: 1040px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          WHY CLUBS SWITCH — and how it is run. Long form: features#rollout
          --------------------------------------------------------------- */}
      <section className="gc-section gc-section-tight" id="switching">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">Why clubs switch</span>
            <h2 className="gc-h2">Fewer systems, and a team that runs it for you.</h2>
          </div>
          <div className="gc-onprop gc-promises gc-switch-grid">
            {SWITCH.map((g) => (
              <article key={g.title}>
                <span className="gc-icon" aria-hidden="true">
                  <g.icon size={20} strokeWidth={1.75} />
                </span>
                <h3>{g.title}</h3>
                <p>{g.body}</p>
              </article>
            ))}
          </div>
          <p className="gc-also">
            <Link href={`${FEATURES}#rollout`}>How a portfolio rolls out, step by step</Link>
            {" · "}
            <Link href={`${FEATURES}#one-flow`}>What one member record changes</Link>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          EXECUTIVE BRIEF — soft-gated PDF for execs who won't book a call
          yet. PDF source: scripts/club-steward-brief (regenerate after copy
          changes so it never contradicts the page). proposal/ links #brief.
          --------------------------------------------------------------- */}
      <section className="gc-section gc-dark gc-section-tight" id="brief">
        <div className="container">
          <div className="gc-brief">
            <div className="gc-brief-copy">
              <span className="gc-kicker gc-on-dark">Executive brief</span>
              <h2 className="gc-h2">Take it to your CFO and your board.</h2>
              <p className="gc-sub gc-on-dark">
                Four pages covering the platform, the rollout and the controls,
                with real product screens. Ready to forward before anyone books
                a call.
              </p>
              <Image
                src="/images/golf/brief-cover.webp"
                alt="Cover of the Club Steward executive brief"
                width={900}
                height={1165}
                className="gc-brief-cover"
                sizes="(max-width: 1040px) 60vw, 280px"
              />
            </div>
            <BriefForm />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          FAQ — every Q&A stays in the FAQPage JSON-LD (page.tsx) and in
          the markup; only the first few are shown before "More questions".
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas gc-section-tight" id="faq">
        <div className="container gc-narrow">
          <div className="gc-head">
            <span className="gc-kicker">Questions</span>
            <h2 className="gc-h2">What club operators ask us first</h2>
          </div>
          <div className="gc-faqs">
            {FAQS.slice(0, VISIBLE_FAQS).map((f) => (
              <details className="gc-faq" key={f.q}>
                <summary>{f.q}</summary>
                <div className="gc-faq-a">{f.a}</div>
              </details>
            ))}
          </div>
          {FAQS.length > VISIBLE_FAQS && (
            <details className="gc-more gc-more-faq">
              <summary>More questions ({FAQS.length - VISIBLE_FAQS})</summary>
              <div className="gc-faqs">
                {FAQS.slice(VISIBLE_FAQS).map((f) => (
                  <details className="gc-faq" key={f.q}>
                    <summary>{f.q}</summary>
                    <div className="gc-faq-a">{f.a}</div>
                  </details>
                ))}
              </div>
            </details>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------------------
          LEAD FORM
          --------------------------------------------------------------- */}
      <section className="gc-section gc-section-tight" id="talk">
        <div className="container gc-narrow">
          <LeadForm
            source="golf-club-management-software"
            heading="See Club Steward on a live multi-club portfolio"
            sub="Tell us how many clubs you run, what you use today and what hurts most. We reply within 4 business hours to set up your walkthrough."
            submitLabel="Request my walkthrough"
            footnote="We reply within 4 business hours · No obligation"
            qualifiers={[
              { name: "clubs", label: "How many clubs do you operate?", placeholder: "e.g. 12", numeric: true },
              { name: "system", label: "What do you run today?", placeholder: "Club software, tee sheet, CRM…" },
            ]}
            messageLabel="What would you most like to fix first?"
            successMessage={
              <p className="body">
                We&rsquo;ll reply within 4 business hours to set up your
                walkthrough on a live multi-club portfolio. Want to pick a
                time now?{" "}
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--indigo)", fontWeight: 600 }}
                >
                  Book a 30-minute walkthrough →
                </a>
              </p>
            }
          />
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
            <TrackedLink
              className="gc-btn gc-btn-gold"
              href={CALENDLY}
              event="book_walkthrough_click"
              location="final"
            >
              Book a 30-minute walkthrough
            </TrackedLink>
            <a className="gc-btn gc-btn-ghost" href="#talk">
              Send us your details instead
            </a>
          </div>
          <p className="gc-final-links">
            Related:{" "}
            <Link href={FEATURES}>All Club Steward features</Link>{" "}
            · <Link href="/case-studies/club-steward-multi-club-golf-platform">Case study: Club Steward for multi-club operators</Link>{" "}
            · <Link href="/work">Everything we&rsquo;ve launched</Link>{" "}
            · <Link href="/membership-management">Membership management platform</Link>{" "}
            · <Link href="/buyers-guide/club-pos-and-gift-shop-pos">Club and gift shop POS compared</Link>{" "}
            · <Link href="/ai-for-hospitality">AI for hospitality</Link>{" "}
            · <Link href="/blog/country-club-management-software-cost">Why country club software pricing is hard to compare</Link>{" "}
            · <Link href="/buyers-guide/golf-club-management-software">Buyer&rsquo;s guide: club software for multi-club operators</Link>{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
