import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChartColumn,
  CreditCard,
  Database,
  EyeOff,
  Flag,
  Globe,
  History,
  Inbox,
  KeyRound,
  LayoutGrid,
  ListChecks,
  MessageSquareText,
  PenLine,
  ShoppingBag,
  Smartphone,
  Tag,
  Users,
  type LucideIcon,
} from "lucide-react";
import LeadForm from "@/components/common/LeadForm";
import TrackedLink from "./TrackedLink";
import BriefForm from "./BriefForm";
import { WalkthroughButton, WalkthroughOverlay, WalkthroughPlayer } from "./WalkthroughVideo";
import TrustBar from "@/components/common/TrustBar";
import { FAQS } from "./faqs";

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
 * - No Club Steward pricing, quotes or cost claims yet: pricing hasn't been
 *   decided (owner, 2026-09-28). Add it once it is. Also no guarantee or
 *   contract-term claims until approved.
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

const PROMISES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Tag,
    title: "The price on the website is the price in the back office",
    body: "Promotions, director-sold plans and online plans are all read from one price book by the website, the join flow and the Director's product builder.",
  },
  {
    icon: PenLine,
    title: "Nobody pays before they sign",
    body: "The contract is signed against the exact version shown, and the server refuses payment until it is — online and in a Director's in-person checkout.",
  },
  {
    icon: Flag,
    title: "A benefit is used up when it is used",
    body: "Booking a tee time draws down the allowance the member saw while booking, across every club they can play.",
  },
  {
    icon: Inbox,
    title: "A lead cannot be lost",
    body: "Unclaimed inquiries escalate, idle deals return to the pool, nurtures come back on their date, and guest rounds turn into leads.",
  },
];

const TOUR = [
  {
    kicker: "Club websites & online join",
    title: "From the website to a signed, paid membership, without a phone call.",
    body: "Every club gets its own branded site with live prices from the back office. Plans sold online show “Join Online”; director-sold plans show “Talk to a Membership Director” instead. The six-step join runs in the club's own look, and a waitlist replaces “Join” when a plan reaches its cap.",
    points: ["Plan, household, dues & add-ons, sign, autopay, pay", "Prorated first period and promotions", "Old web addresses redirect — rankings carry over"],
    img: "/images/golf/online-join-plans.webp",
    url: "yourclub.com/join",
    alt: "Six-step online join showing membership categories, what each plan includes, and director-sold plans offered after a visit with a director",
  },
  {
    kicker: "Membership sales desk",
    title: "A real sales desk, inside the system that runs the club.",
    body: "Inquiries land in a per-club shared pool with first-claim-wins routing; unclaimed leads get a due-dated task and escalate to the GM or VP. Directors see their own remaining discount authority as they sell, anything over it routes for approval, and the customer only ever sees the approved price.",
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
    title: "What a membership includes, enforced across every club.",
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

const MODULES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Globe,
    title: "Club websites & online join",
    body: "A branded microsite for every club from one system, 39 content blocks and 17 templates, a new-club wizard, and a six-step join with e-signature and payment.",
  },
  {
    icon: Users,
    title: "Membership sales CRM",
    body: "Shared lead pool with SLA escalation, pipeline by stage, tour board, product builder with discount authority, approvals, and in-person tablet checkout.",
  },
  {
    icon: PenLine,
    title: "Contracts & e-signature",
    body: "Versioned templates, state-based clauses, signer roles and countersignature, word-level version comparison, and payment blocked until signed.",
  },
  {
    icon: CreditCard,
    title: "Dues, billing & payments",
    body: "Card and ACH autopay, prorated first periods, step-up promotional dues, automatic retries, a compliant credit-only card fee, and staff refunds with a reason.",
  },
  {
    icon: ListChecks,
    title: "Onboarding",
    body: "Active the moment they pay. Up to seven setup steps, reminders at days 2, 5 and 10, and a task for the GM and Director at day 12 if a member stalls.",
  },
  {
    icon: Smartphone,
    title: "Member portal & golf app",
    body: "Digital card with QR code for every household member, benefits remaining, bills, bookings, and a per-club installable golf app with digital scorecards.",
  },
  {
    icon: Flag,
    title: "Tee sheet & golf operations",
    body: "Rate grids, booking windows, cart sheet and fleet, and seven golf staff roles — head pro, shop, superintendent, member services, bag room, caddie, concierge.",
  },
  {
    icon: ShoppingBag,
    title: "Pro shop & online store",
    body: "Shelf, pre-order and member prices, inventory kept as a ledger of movements across clubs, reorder lists, and orders waiting on the member's cart.",
  },
  {
    icon: CalendarDays,
    title: "Events & private events",
    body: "Club events with RSVP, plus a private-events sales pool with room calendars and first- and second-option holds that promote automatically.",
  },
  {
    icon: ChartColumn,
    title: "Reporting & the corporate view",
    body: "A standard report library over governed datasets that runs as the viewer, scheduled email delivery, 13-month trends, and every club side by side.",
  },
  {
    icon: MessageSquareText,
    title: "Ask, in plain English",
    body: "Staff type a question and get the number back with a citation that opens as a normal report — read-only, run as the signed-in user, and audited.",
  },
  {
    icon: LayoutGrid,
    title: "Built for many clubs",
    body: "Switch modules on or off per club, stand up a new club from a template with a preview first, and go live against a pass-or-fail readiness checklist.",
  },
];

const GALLERY = [
  {
    img: "/images/golf/cart-sheet.webp",
    title: "Cart sheet",
    body: "Numbered carts, seats priced at assignment, auto-assignment and rider swaps.",
    alt: "Cart sheet with numbered carts and assigned riders",
  },
  {
    img: "/images/golf/dues-standing.webp",
    title: "Dues & standing",
    body: "Past due, retrying, autopay off, fee terms pending and next charge — across the membership.",
    alt: "Dues and standing view showing past-due, retrying and autopay-off members",
  },
  {
    img: "/images/golf/pro-shop-tee-time.webp",
    title: "Pro shop: ready at your tee time",
    body: "Members order balls, gloves and tees with their round, and they're waiting on the cart when they arrive.",
    alt: "Club online pro shop section 'Ready at your tee time' with golf balls, range balls and a leather glove to pre-order with a round",
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

const SECURITY: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Database,
    title: "Isolation enforced in the database",
    body: "Row-level security on every table — a club's staff cannot query another club's records. Enforced by the database, not by hiding rows on a screen.",
  },
  {
    icon: KeyRound,
    title: "A permission for every capability",
    body: "400+ permissions granted per role and per club, individual grants or denials with an expiry and a reason, and a “Who Can Do What” view across every club.",
  },
  {
    icon: EyeOff,
    title: "Money fields disappear, not blur",
    body: "Anyone without permission to see money gets reports with money fields left out entirely — not masked.",
  },
  {
    icon: History,
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

const SAFEGUARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: LayoutGrid,
    title: "Nothing switches all at once",
    body: "Modules turn on per club, so each club moves at the pace you set. One club can go live while the rest of the portfolio carries on as it is today.",
  },
  {
    icon: ListChecks,
    title: "No club goes live on a guess",
    body: "Every club passes a go-live readiness checklist, item by item, with a link to fix anything that fails. Portfolio defaults are previewed before they apply, and they never overwrite what a club has customised.",
  },
  {
    icon: Globe,
    title: "Search rankings carry over",
    body: "Permanent redirects from each club's old web addresses mean the traffic and rankings your sites have earned follow them to the new ones.",
  },
  {
    icon: Database,
    title: "Your data stays yours",
    body: "Reports and lists export to CSV, scheduled reports arrive by email, and every staff action is in the audit log from the first day.",
  },
];

/** A real screenshot inside the page's browser-frame chrome. */
function Shot({
  src,
  alt,
  url,
  priority,
  tilt,
  sizes = "(max-width: 1040px) 100vw, 60vw",
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  tilt?: boolean;
  sizes?: string;
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
        width={2880}
        height={1800}
        priority={priority}
        quality={90}
        sizes={sizes}
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
                from the first website visit to the 18th green — club websites,
                online join, membership sales, e-signed contracts, dues,
                onboarding, the member app, the tee sheet, the pro shop, events
                and reporting. One price book, one set of permissions, one audit
                trail, across every club.
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

              <ul className="gc-hero-proof">
                <li>Built for multi-club operators</li>
                <li>Contracts &amp; e-signature built in</li>
                <li>Benefits that follow the member</li>
              </ul>
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
          PRODUCT TOUR — real UI, alternating rows
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas" id="tour">
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
              <WalkthroughButton className="gc-btn gc-btn-ghost" location="after-tour" />
              <TrackedLink
              className="gc-btn gc-btn-gold"
              href={CALENDLY}
              event="book_walkthrough_click"
              location="after-tour"
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
      <section className="gc-section gc-dark">
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
              sizes="(max-width: 1040px) 100vw, 55vw"
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
              <article className="gc-card" key={c.title}>
                <span className="gc-icon" aria-hidden="true">
                  <c.icon size={20} strokeWidth={1.75} />
                </span>
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
      <section className="gc-section">
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
                width={2880}
                height={1800}
                quality={90}
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
          EXECUTIVE BRIEF — soft-gated PDF for execs who won't book a call
          yet. PDF source: scripts/club-steward-brief (regenerate after copy
          changes so it never contradicts the page).
          --------------------------------------------------------------- */}
      <section className="gc-section gc-dark" id="brief">
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
            <Link href="/membership-management">Membership management platform</Link>{" "}
            · <Link href="/ai-for-hospitality">AI for hospitality</Link>{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
