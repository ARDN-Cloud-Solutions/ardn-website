import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/common/LeadForm";
import TrustBar from "@/components/common/TrustBar";
import { FAQS } from "./faqs";

/**
 * Golf & country club vertical landing page — Clubhouse360.
 *
 * Rebuilt 2026-09-26 on the Clubhouse360 Marketing Kit (product overview,
 * competitive comparison and INTERNAL claims guardrails, dated 2026-09-25).
 * The kit supersedes the earlier version of this page, which was written
 * from the generic membership spec — Clubhouse360 DOES ship a tee sheet,
 * carts, pro shop and golf performance reporting, so the old "On property:
 * keep your tee sheet" positioning is gone. Brand name approved by the owner
 * 2026-09-26.
 *
 * Truth guardrails (from the kit — re-check it before loosening any of this):
 * - Nothing is in production yet: "built and demonstrable", never "live at N
 *   clubs". No customer names, logos, metrics or testimonials.
 * - Accounting is PREVIEW (interface complete, engine merging, sample
 *   figures). POS till, court booking, member statements, Wallet passes,
 *   F&B minimums and gift cards are ROADMAP.
 * - Never "only all-in-one", "only multi-club" or "only cloud"; never claim
 *   competitors lack a CRM. Competitors are NOT named — several comparison
 *   rows are still marked "verify before publishing".
 * - "A standard report library", not a report count. Don't list integrations.
 * - No pricing, flat-fee, guarantee or contract-term claims: none has been
 *   approved for Clubhouse360 (those belonged to the generic platform).
 * - Name NO payment provider in customer-facing copy (8a76690 / 6ea8cef).
 *
 * DO NOT add client names or client metrics. Screenshots are real product UI
 * from the verification environment, rebranded at capture time; every club,
 * person and figure in them is sample data.
 *
 * CRO: single conversion path is the inline LeadForm (posts /api/contact,
 * fires GA4 generate_lead) with Calendly as the secondary CTA.
 */

const CALENDLY = "https://calendly.com/deep-ardncloudsolutions/30min";

const STATS = [
  { value: "1", label: "member record shared by every module and every club" },
  { value: "6", label: "steps from “Choose a plan” to a signed, paid, active membership" },
  { value: "400+", label: "permissions, grantable per role or per person, per club" },
  { value: "0", label: "data re-keyed between sales, contracts, billing and the member record" },
];

const PAINS = [
  {
    label: "Tee sheet & POS",
    text: "From one vendor, with its own member list that has to be kept in step with everything else.",
  },
  {
    label: "Back office",
    text: "From another — often a different product generation from the same parent company.",
  },
  {
    label: "Websites",
    text: "An agency per club, with prices on the site that drift from the prices in the back office.",
  },
  {
    label: "Sales & contracts",
    text: "A separate CRM for membership sales and a separate e-signature tool for the agreement.",
  },
  {
    label: "The portfolio",
    text: "Reciprocal access in a spreadsheet, and a nightly export to the accounting package.",
  },
];

const PROMISES = [
  {
    title: "The price on the website is the price in the back office",
    body: "Promotions, director pricing and “Inquire for Pricing” plans are read from one price book by the website, the join flow and the Director's product builder.",
  },
  {
    title: "Nobody pays before they sign",
    body: "The contract is signed against the exact version shown, and the server refuses payment until it is — online and in a Director's in-person checkout.",
  },
  {
    title: "A benefit is used up when it is used",
    body: "Booking a tee time draws down the allowance the member saw while booking, across every club they can play.",
  },
  {
    title: "A lead cannot be lost",
    body: "Unclaimed enquiries escalate, idle deals return to the pool, nurtures come back on their date, and guest rounds turn into leads.",
  },
];

const TOUR = [
  {
    kicker: "Club websites & online join",
    title: "From the website to a signed, paid membership — without a phone call.",
    body: "Every club gets its own branded site with live prices from the back office. Plans sold online show “Join Online”; director-sold plans show “Inquire for Pricing” and the price never reaches the browser. The six-step join runs in the club's own look, and a waitlist replaces “Join” when a plan reaches its cap.",
    points: ["Plan, household, dues & add-ons, sign, autopay, pay", "Prorated first period and promotions", "Old web addresses redirect — rankings carry over"],
    img: "/images/golf/online-join-plans.webp",
    url: "yourclub.com/join",
    alt: "Six-step online join showing membership categories, what each plan includes, and director-sold plans marked Inquire for Pricing",
  },
  {
    kicker: "Membership sales desk",
    title: "A real sales desk, inside the system that runs the club.",
    body: "Enquiries land in a per-club shared pool with first-claim-wins routing; unclaimed leads get a due-dated task and escalate to the GM or VP. Directors see their own remaining discount authority as they sell, anything over it routes for approval, and the customer only ever sees the approved price.",
    points: ["Pipeline by stage with guidance at every stage", "Tour board and nurture follow-ups", "“Present to Customer” tablet checkout"],
    img: "/images/golf/sales-pipeline.webp",
    url: "Membership sales · Pipeline",
    alt: "Membership sales pipeline with opportunities by stage",
  },
  {
    kicker: "Contracts & e-signature",
    title: "Signed before money moves. No third-party signing tool.",
    body: "A versioned template library with clauses that switch on by the club's state, configurable signers and an optional club countersignature. A fingerprint of the exact text signed is recorded, and publishing a new version never invalidates old signatures.",
    points: ["Created from your Word or PDF agreements", "Sent → signed → countersigned tracking", "Signed documents in the member's portal"],
    img: "/images/golf/contracts-esign.webp",
    url: "Contracts · Envelopes",
    alt: "Contracts list tracked through awaiting signature, awaiting countersignature and signed",
  },
  {
    kicker: "Benefits & reciprocal access",
    title: "What a membership includes — enforced across every club.",
    body: "Benefits are quantified, not bullet points. Each resets monthly, yearly or on the anniversary, can be capped per club, per network of clubs, or both, and applies at home, when travelling, or both. Members see used and remaining for every benefit, shared across the household.",
    points: ["Granted automatically on approval", "Tee-time bookings draw down the golf allowance", "Utilization reporting per club and benefit"],
    img: "/images/golf/member-benefits.webp",
    url: "members.yourclub.com/benefits",
    alt: "Member portal showing each benefit with used, remaining and reset date, shared across the household",
  },
  {
    kicker: "Tee sheet & carts",
    title: "A full tee sheet, with the member's allowance live while booking.",
    body: "A day tee sheet per course with block times, moves and party edits; rate grids for peak, off-peak, guest, twilight, member and public; booking windows by tier; cancellation and no-show policies; and a numbered cart fleet with seats priced at assignment.",
    points: ["Members-only windows and holds", "Suspended members refused automatically", "Pro-shop items pre-ordered to the tee time"],
    img: "/images/golf/tee-sheet.webp",
    url: "Golf · Tee sheet",
    alt: "Day tee sheet for a course with booked groups and open times",
  },
  {
    kicker: "Golf performance",
    title: "The numbers a golf operator actually runs on.",
    body: "Tee-sheet utilization, average ticket per round, revenue per available tee time, no-show rate, member/guest/public mix, booking lead time and cart attach rate — calculated from the bookings themselves, with an occupancy calendar that shows where each day landed.",
    points: ["By course, month and rate type", "Needs-attention list for no-shows", "CSV export for the finance team"],
    img: "/images/golf/golf-performance.webp",
    url: "Golf · Performance",
    alt: "Golf performance dashboard with utilization, average ticket, revenue per available tee time, rounds, no-show rate and an occupancy calendar",
  },
];

const MODULES = [
  {
    n: "01",
    title: "Club websites & online join",
    body: "A branded microsite for every club from one system, 39 content blocks and 17 templates, a new-club wizard, and a six-step join with e-signature and payment.",
  },
  {
    n: "02",
    title: "Membership sales CRM",
    body: "Shared lead pool with SLA escalation, pipeline by stage, tour board, product builder with discount authority, approvals, and in-person tablet checkout.",
  },
  {
    n: "03",
    title: "Contracts & e-signature",
    body: "Versioned templates, state-based clauses, signer roles and countersignature, word-level version comparison, and payment blocked until signed.",
  },
  {
    n: "04",
    title: "Dues, billing & payments",
    body: "Card and ACH autopay, prorated first periods, step-up promotional dues, automatic retries, a compliant credit-only card fee, and staff refunds with a reason.",
  },
  {
    n: "05",
    title: "Onboarding",
    body: "Active the moment they pay. Up to seven setup steps, reminders at days 2, 5 and 10, and a task for the GM and Director at day 12 if a member stalls.",
  },
  {
    n: "06",
    title: "Member portal & golf app",
    body: "Digital card with QR code for every household member, benefits remaining, bills, bookings, and a per-club installable golf app with digital scorecards.",
  },
  {
    n: "07",
    title: "Tee sheet & golf operations",
    body: "Rate grids, booking windows, cart sheet and fleet, and seven golf staff roles — head pro, shop, superintendent, member services, bag room, caddie, concierge.",
  },
  {
    n: "08",
    title: "Pro shop & online store",
    body: "Shelf, pre-order and member prices, inventory kept as a ledger of movements across clubs, reorder lists, and orders waiting on the member's cart.",
  },
  {
    n: "09",
    title: "Events & private events",
    body: "Club events with RSVP, plus a private-events sales pool with room calendars and first- and second-option holds that promote automatically.",
  },
  {
    n: "10",
    title: "Reporting & the corporate view",
    body: "A standard report library over governed datasets that runs as the viewer, scheduled email delivery, 13-month trends, and every club side by side.",
  },
  {
    n: "11",
    title: "Ask, in plain English",
    body: "Staff type a question and get the number back with a citation that opens as a normal report — read-only, run as the signed-in user, and audited.",
  },
  {
    n: "12",
    title: "Built for many clubs",
    body: "Switch modules on or off per club, stand up a new club from a template with a preview first, and go live against a pass-or-fail readiness checklist.",
  },
];

const GALLERY = [
  {
    img: "/images/golf/cart-sheet.webp",
    title: "Cart sheet",
    body: "Numbered carts, seats priced at assignment, auto-assignment and rider swaps.",
    alt: "Cart sheet with numbered carts, assigned riders and seat pricing",
  },
  {
    img: "/images/golf/dues-standing.webp",
    title: "Dues & standing",
    body: "Past due, retrying, autopay off, fee terms pending and next charge — across the membership.",
    alt: "Dues and standing view showing past-due, retrying and autopay-off members",
  },
  {
    img: "/images/golf/pro-shop.webp",
    title: "Pro shop",
    body: "An online store per club — collect at the counter or find it waiting on your cart.",
    alt: "Club online pro shop with products, member pricing and basket",
  },
  {
    img: "/images/golf/private-events.webp",
    title: "Private events",
    body: "Room calendar with first- and second-option holds that promote automatically.",
    alt: "Private events room calendar with first- and second-option holds",
  },
  {
    img: "/images/golf/report-library.webp",
    title: "Report library",
    body: "One library: a GM sees their club, a VP their region, corporate every club.",
    alt: "Report library with governed datasets, saved reports and scheduled delivery",
  },
  {
    img: "/images/golf/member-billing.webp",
    title: "Member billing",
    body: "Dues, autopay, next charge and receipts — in the member's own club-branded account.",
    alt: "Member portal billing page with monthly dues, autopay status, last payment and saved payment method",
  },
];

const SECURITY = [
  {
    title: "Isolation enforced in the database",
    body: "Row-level security on every table — a club's staff cannot query another club's records. Enforced by the database, not by hiding rows on a screen.",
  },
  {
    title: "A permission for every capability",
    body: "400+ permissions granted per role and per club, individual grants or denials with an expiry and a reason, and a “Who Can Do What” view across every club.",
  },
  {
    title: "Money fields disappear, not blur",
    body: "Anyone without permission to see money gets reports with money fields left out entirely — not masked.",
  },
  {
    title: "Nothing important can vanish",
    body: "Field history on every tracked field, an audit log of staff actions, and a 30-day recycle bin. Members and anything with money or signatures behind it can never be deleted.",
  },
];

const STEPS = [
  {
    title: "A 30-minute walkthrough",
    body: "We take your leadership through a live multi-club demo portfolio — website and join, sales, contracts, tee sheet, benefits and the corporate view — mapped to how your clubs run today.",
  },
  {
    title: "Map your portfolio",
    body: "Clubs, regions, plans, benefits and reciprocal rules, roles and approval authority — configured in settings, not code, with a preview before any defaults are applied.",
  },
  {
    title: "Stand up each club",
    body: "A new club's site, roles, routing and settings come from a template club, so rolling out across a portfolio is a repeatable process, not a new project each time.",
  },
  {
    title: "Go live on a checklist",
    body: "Each club goes live against a readiness checklist with pass or fail for every item and a link to fix it, and old web addresses redirect so rankings carry over.",
  },
];

/** A real screenshot inside the page's browser-frame chrome. */
function Shot({
  src,
  alt,
  url,
  priority,
  tilt,
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  tilt?: boolean;
}) {
  return (
    <div className={tilt ? "gc-mock gc-shot" : "gc-mock gc-shot gc-shot-flat"}>
      <div className="gc-mock-bar">
        <span className="gc-mock-dot" />
        <span className="gc-mock-dot" />
        <span className="gc-mock-dot" />
        <span className="gc-mock-url">{url}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1200}
        priority={priority}
        sizes="(max-width: 900px) 100vw, 60vw"
        className="gc-shot-img"
      />
    </div>
  );
}

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
              <span className="gc-eyebrow">Clubhouse360 · Golf &amp; country clubs</span>
              <h1 className="gc-display">
                Every club in your portfolio. <em>One member record.</em>
              </h1>
              <p className="gc-lede">
                Clubhouse360 runs a multi-club golf and country club operation
                from the first website visit to the 18th green — club websites,
                online join, membership sales, e-signed contracts, dues,
                onboarding, the member app, the tee sheet, the pro shop, events
                and reporting. One price book, one set of permissions, one audit
                trail, across every club.
              </p>

              <div className="gc-ctas">
                <a
                  className="gc-btn gc-btn-gold"
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 30-minute walkthrough
                </a>
                <a className="gc-btn gc-btn-ghost" href="#tour">
                  See the product first
                </a>
              </div>

              <ul className="gc-hero-proof">
                <li>Built for multi-club operators</li>
                <li>Contracts &amp; e-signature built in</li>
                <li>Benefits that follow the member</li>
              </ul>
            </div>

            <div className="gc-hero-visual">
              <Shot
                src="/images/golf/corporate-dashboard.webp"
                alt="Clubhouse360 corporate dashboard comparing every club side by side — enquiries, new members, conversion, SLA compliance and pipeline value"
                url="Clubhouse360 · Corporate · All clubs"
                priority
                tilt
              />
              <p className="gc-hero-caption">
                The corporate view: every club side by side. The same report
                scopes itself to each regional VP and GM.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar
        signals={[
          "US-based team",
          "30+ yrs building software",
          "4-hour response SLA",
          "Club-level data isolation",
        ]}
      />

      {/* ---------------------------------------------------------------
          AT A GLANCE
          --------------------------------------------------------------- */}
      <section className="gc-figures-band">
        <div className="container">
          <div className="gc-figures">
            {STATS.map((s) => (
              <div className="gc-figure-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
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
      <section className="gc-section">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">One flow</span>
            <h2 className="gc-h2">
              From first enquiry to first round, on one member record.
            </h2>
            <p className="gc-sub">
              In Clubhouse360 the website, the lead, the tour, the product
              builder, the signed contract, the payment and onboarding happen in
              one system. That changes what an operator can promise.
            </p>
          </div>

          <div className="gc-onprop gc-promises">
            {PROMISES.map((p) => (
              <article key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          PRODUCT TOUR — real UI, alternating rows
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas" id="tour">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">See it, don&rsquo;t take our word</span>
            <h2 className="gc-h2">The real product, running a portfolio of clubs.</h2>
            <p className="gc-sub">
              Every screen on this page is the actual platform running a
              multi-club demo portfolio — sample clubs and people, no mockups.
            </p>
          </div>

          <div className="gc-tour">
            {TOUR.map((t, i) => (
              <div className={i % 2 ? "gc-tour-row is-flip" : "gc-tour-row"} key={t.kicker}>
                <div className="gc-tour-copy">
                  <span className="gc-kicker">{t.kicker}</span>
                  <h3 className="gc-h3">{t.title}</h3>
                  <p>{t.body}</p>
                  <ul className="gc-ticks gc-ticks-light">
                    {t.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
                <Shot src={t.img} alt={t.alt} url={t.url} />
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
            <a
              className="gc-btn gc-btn-gold"
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a walkthrough
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          MEMBER EXPERIENCE
          --------------------------------------------------------------- */}
      <section className="gc-section gc-dark">
        <div className="container">
          <div className="gc-split">
            <div>
              <span className="gc-kicker gc-on-dark">Member experience</span>
              <h2 className="gc-h2">
                A portal and golf app your members will actually open — in each
                club&rsquo;s brand.
              </h2>
              <p className="gc-sub gc-on-dark">
                Members are active the moment they pay, and onboarding walks them
                through the rest with reminders. From then on, everything about
                their membership is in one club-branded account.
              </p>
              <ul className="gc-ticks">
                <li>Digital membership card with QR code for every household member</li>
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
            />
          </div>
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
              Around 250 purpose-built screens across the staff back office, the
              member portal and platform administration — each module switchable
              on or off per club.
            </p>
          </div>

          <div className="gc-cards">
            {MODULES.map((c) => (
              <article className="gc-card" key={c.n}>
                <span className="gc-card-n">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          GALLERY
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas">
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
                  width={1920}
                  height={1200}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
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
      <section className="gc-section">
        <div className="container">
          <div className="gc-split gc-split-top">
            <div>
              <div className="gc-head">
                <span className="gc-kicker">From ownership to the bag room</span>
                <h2 className="gc-h2">
                  Everyone sees exactly their slice — enforced by the database.
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
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          ACCOUNTING — PREVIEW. Keep the Preview label and the sample-figures
          note until the accounting engine is merged into the platform.
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas" id="accounting">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">
              Accounting &amp; financial reporting
              <span className="gc-chip gc-chip-gold">Preview</span>
            </span>
            <h2 className="gc-h2">A general ledger fed by the club, not re-keyed from it.</h2>
            <p className="gc-sub">
              Dues billing, tee-time fees, pro-shop sales, events and payroll
              imports post with their account, department, revenue centre and
              club already attached — per club, or consolidated across all of
              them.
            </p>
          </div>

          <div className="gc-gallery gc-gallery-2">
            <figure className="gc-gallery-item">
              <Image
                src="/images/golf/accounting-overview.webp"
                alt="Accounting overview consolidated across all clubs, with revenue against budget, operating margin, cash and receivables"
                width={1920}
                height={1200}
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <figcaption>
                <strong>Accounting overview</strong>
                <span>Revenue against budget, margin, cash, receivables and deferred dues — any club or all clubs.</span>
              </figcaption>
            </figure>
            <figure className="gc-gallery-item">
              <Image
                src="/images/golf/financial-statements.webp"
                alt="Profit and loss by department with month columns against budget and prior year"
                width={1920}
                height={1200}
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <figcaption>
                <strong>Financial statements</strong>
                <span>P&amp;L by department against budget and prior year, balance sheet and cash flow, PDF and CSV export.</span>
              </figcaption>
            </figure>
          </div>

          <p className="gc-onprop-note">
            Preview: the accounting interface — general ledger, AR/AP, bank
            reconciliation with payout matching, budgets and period close — is
            complete, and the engine is being merged into the platform. Screens
            show sample figures.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          HOW IT WORKS
          --------------------------------------------------------------- */}
      <section className="gc-section">
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
        </div>
      </section>

      {/* ---------------------------------------------------------------
          FAQ
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas">
        <div className="container gc-narrow">
          <div className="gc-head">
            <span className="gc-kicker">Questions</span>
            <h2 className="gc-h2">What club operators ask us first</h2>
          </div>
          <div className="gc-faqs">
            {FAQS.map((f) => (
              <details className="gc-faq" key={f.q}>
                <summary>{f.q}</summary>
                <div className="gc-faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          LEAD FORM
          --------------------------------------------------------------- */}
      <section className="gc-section" id="talk">
        <div className="container gc-narrow">
          <LeadForm
            source="golf-club-management-software"
            heading="See Clubhouse360 on a live multi-club portfolio"
            sub="Tell us how many clubs you run, what you use today and what hurts most. We reply within 4 business hours to set up your walkthrough."
            submitLabel="Request my walkthrough"
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
            <a
              className="gc-btn gc-btn-gold"
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 30-minute walkthrough
            </a>
            <a className="gc-btn gc-btn-ghost" href="#talk">
              Send us your details instead
            </a>
          </div>
          <p className="gc-final-links">
            Related:{" "}
            <Link href="/membership-management">Membership management platform</Link>{" "}
            · <Link href="/ai-for-hospitality">AI for hospitality</Link>{" "}
            ·{" "}
            <Link href="/blog/country-club-management-software-cost">
              Why club software pricing is so opaque
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
