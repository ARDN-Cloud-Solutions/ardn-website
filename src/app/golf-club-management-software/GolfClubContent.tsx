"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/common/LeadForm";
import TrustBar from "@/components/common/TrustBar";

/**
 * Golf & private club vertical landing page.
 *
 * Positioning: this is the SAME multi-tenant membership platform documented in
 * ARDN-Cloud-Solutions/membership (docs/REQUIREMENTS.md), re-told for the golf /
 * private club buyer. Every feature claim on this page traces back to a real
 * FR-* requirement in that spec — households with split payers (FR-HH-004),
 * versioned plans with grandfathered pricing (FR-SUB-001/003), programs and
 * waitlists (FR-PROG-*), events with QR ticketing (FR-EVT-*), barcode check-in
 * with block rules (FR-CHK-*), payments via Payment Cloud (NMI) into the club's own
 * merchant account, the
 * 9-step workflow builder (FR-WF-003), the report builder (FR-REP-*), waivers
 * bound to signed versions (FR-WAV-001/002), per-tenant branding (FR-BRAND-*).
 *
 * DO NOT add client names or client metrics to this page. "Invited Clubs" is a
 * real customer under contract and nothing has been cleared for public use.
 * Keep everything capability-framed.
 *
 * CRO: single conversion path is the inline LeadForm (posts /api/contact, fires
 * GA4 generate_lead) with Calendly as the secondary CTA, matching the other
 * vertical pages.
 */

const CALENDLY = "https://calendly.com/deep-ardncloudsolutions/30min";

/* ---------------------------------------------------------------------------
   Cost model
   ------------------------------------------------------------------------ */

// Typical published list price for a mid-tier seat-based CRM. Used only as the
// slider's starting position — the visitor overwrites it with their own number,
// so we never publish a cost claim of our own that we'd have to defend.
const DEFAULT_PER_SEAT = 165;

// Seat-based vendors raise list price over a renewal cycle. 7%/yr is the
// conservative end of what clubs actually see. Disclosed under the chart.
const ANNUAL_UPLIFT = 0.07;

const usd = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

const usdCompact = (n: number) =>
  n >= 1_000_000
    ? "$" + (n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1) + "M"
    : "$" + Math.round(n / 1000) + "k";

/* ---------------------------------------------------------------------------
   Static content
   ------------------------------------------------------------------------ */

const PAINS = [
  {
    label: "Membership",
    text: "Dues, categories and roster live in one system. Nobody outside the office can see them.",
  },
  {
    label: "Billing",
    text: "Statements are assembled by hand every month because no tool understands a family account.",
  },
  {
    label: "Events",
    text: "Tournament signups run on a form, a spreadsheet and three follow-up emails.",
  },
  {
    label: "Comms",
    text: "A separate marketing tool that has never once matched the roster it is emailing.",
  },
  {
    label: "Reporting",
    text: "The board asks for retention by category. It takes four days and two people.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Membership categories & dues",
    body: "Full Golf, Social, Corporate, Junior, Non-Resident — each its own category with its own price, eligibility rules, included benefits and billing frequency. Categories are versioned: change the rate and existing members keep the price they joined on until you explicitly migrate them.",
  },
  {
    n: "02",
    title: "Family accounts that bill correctly",
    body: "A household holds any number of people and any number of payers. Single payer, split by percentage, alternating months, or an explicit month-by-month schedule. Each payer keeps their own cards and their own statement history.",
  },
  {
    n: "03",
    title: "Dues, minimums & statements",
    body: "Per-club sequential invoice numbering, line items that trace to a subscription period, an event ticket, a clinic enrollment or a manual charge, plus full and partial refunds against specific lines. Statements are viewable by the member and the office, and generate as PDF on demand.",
  },
  {
    n: "04",
    title: "Tournaments & club events",
    body: "Ticket types with per-household caps and member-only tiers, capacity enforced atomically so you cannot oversell a field, QR tickets emailed on purchase, and a check-in view with a scanner and walk-in add.",
  },
  {
    n: "05",
    title: "Clinics, leagues & junior programs",
    body: "Sessions and seasons with age ranges, prerequisites, early-bird windows, capacity and waitlists. Waitlist promotion can charge a saved card automatically. Guests can register and pay without creating an account.",
  },
  {
    n: "06",
    title: "Lesson booking & packs",
    body: "Recurring templates with per-occurrence instructor substitution, configurable cancellation windows with late-cancel and no-show policy, and lesson packs that carry a remaining balance and an expiry and decrement on attendance.",
  },
  {
    n: "07",
    title: "Gate & pro shop check-in",
    body: "Barcode, QR or manual lookup. The moment a member resolves, staff see photo, category, status and any hold — and check them in with one tap. Check-in blocks on an expired waiver, a lapsed category or an unpaid balance, with a reason-logged staff override.",
  },
  {
    n: "08",
    title: "Member CRM, not a bolt-on",
    body: "Every member and prospect has one timeline: emails opened, forms submitted, payments, enrollments, attendance, notes and logged calls. Smart lists re-evaluate themselves — members with no attendance in 30 days is a rule, not a monthly export.",
  },
  {
    n: "09",
    title: "Email & SMS from the roster",
    body: "Campaigns target a list or a live filter, merge tags resolve from the member record with fallbacks, suppression for unsubscribed and bounced is automatic, and quiet hours are enforced on SMS. Consent updates in real time.",
  },
  {
    n: "10",
    title: "Automation you can actually see",
    body: "A visual builder with nine step types — email, SMS, wait, update a property, add or remove from a list, create a staff task, branch on a condition, emit an event. Triggered by a payment failing, a category changing, a form landing or a schedule. Every run keeps a log.",
  },
  {
    n: "11",
    title: "Waivers bound to what was signed",
    body: "Versioned templates. Editing the text creates a new version and old signatures stay attached to the version they signed, captured with signer, timestamp, IP and a hash of the consent text. Expiring waivers surface at check-in as a block until re-signed.",
  },
  {
    n: "12",
    title: "Reporting without a SQL request",
    body: "Fifteen governed datasets — members, invoices, payments, subscriptions, enrollments, attendance, events and more. Build a report by picking columns, filters and grouping; render it as a table, chart or KPI tile; compose tiles into a dashboard. Every list exports to CSV with your filters applied.",
  },
];

const COMPARE = [
  {
    feat: "How it is priced",
    them: "Per staff seat, per month",
    suite: "Per module, individually negotiated",
    ardn: "One flat monthly fee for the club",
  },
  {
    feat: "Published price you can compare",
    them: "Yes — per seat",
    suite: "Typically no public rate card",
    ardn: "Fixed written quote before you commit",
  },
  {
    feat: "Cost of adding 20 front-desk staff",
    them: "20 × seat price × 12, every year",
    suite: "Varies with the licence model",
    ardn: "Nothing",
  },
  {
    feat: "Adding a capability in year two",
    them: "An add-on SKU or more licences",
    suite: "A separately negotiated module",
    ardn: "Part of the managed service",
  },
  {
    feat: "Renewal increases",
    them: "At the vendor's discretion",
    suite: "Negotiated at renewal",
    ardn: "Capped at CPI, maximum 4%, in the agreement",
  },
  {
    feat: "Family accounts with multiple payers",
    them: "Custom objects and a consultant",
    suite: "Depends on the modules you licence",
    ardn: "Native — four billing arrangements",
  },
  {
    feat: "Grandfathered dues rates",
    them: "Custom build",
    suite: "Depends on the modules you licence",
    ardn: "Versioned plans, price snapshot per member",
  },
  {
    feat: "Member portal on your brand",
    them: "Separate product, separate licence",
    suite: "Often a separate module",
    ardn: "Included, themed from your logo and colours",
  },
  {
    feat: "Who runs it day to day",
    them: "Your admin, or a partner on retainer",
    suite: "Your admin, plus vendor support",
    ardn: "We do — it is a managed service",
  },
  {
    feat: "If it is not working",
    them: "You are in the term",
    suite: "You are in the term",
    ardn: "60-day go-live guarantee — exit, fees for that period refunded",
  },
];

const STEPS = [
  {
    title: "Roster & money audit",
    body: "We take an export of your current members, categories, balances and payment methods, and reconcile it before anything moves. You get a written gap list — duplicates, broken households, dues that do not match the category.",
  },
  {
    title: "Your club, configured",
    body: "Categories, dues rates, billing arrangements, waiver text, refund and freeze policy, staff roles by department. The portal and the admin console are themed from your logo, colours and typeface — no Ardn branding in front of your members.",
  },
  {
    title: "Parallel run",
    body: "One full billing cycle runs in both systems. We reconcile line by line and show you the difference before you rely on it. Nothing is cut over on a promise.",
  },
  {
    title: "Cutover & we run it",
    body: "Members are invited to the portal on your domain. After go-live it stays a managed service: we operate it, patch it, and build what you ask for next — inside the same flat fee.",
  },
];

const FAQS = [
  {
    q: "We are on Salesforce today. Is this a rip-and-replace?",
    a: "Not necessarily. Plenty of clubs keep Salesforce where it genuinely earns its licence — usually a small finance or development team — and move the hundred-plus front-desk, pro shop and food-and-beverage staff onto this platform, where they cost nothing per head. That alone is usually where the savings are. We are a Salesforce consultancy as well, so we are not talking you out of it for sport.",
  },
  {
    q: "What happens to our historical member data?",
    a: "It migrates. Members, households, categories, subscription history, invoices, payments and status history all come across, and the lifecycle history stays queryable and exportable per member. We reconcile the migration against your current system for a full billing cycle before cutover.",
  },
  {
    q: "Is it really no per-user fee?",
    a: "Yes. The commercial model is one flat monthly fee for the club. Front desk, pro shop, starters, F&B, instructors, the GM and the board can all have their own logins with their own permissions, and none of them change the invoice.",
  },
  {
    q: "How is member data kept separate from other clubs?",
    a: "Every record carries a tenant identifier and isolation is enforced in the database itself with Postgres row-level security, running under a role that cannot bypass it. It is not application logic that a bug can step around. Every create, update and delete is also written to an immutable audit log.",
  },
  {
    q: "Can members pay by card and bank transfer?",
    a: "Both. Card and ACH, saved per payer, captured inline on your branded pages rather than bouncing the member out to a third-party checkout. Payments run through Payment Cloud into your club's own merchant account, so the processing relationship and the money stay yours — they never pass through us.",
  },
  {
    q: "What does it cost, and what is the contract?",
    a: "One flat monthly subscription plus a one-time implementation, quoted in writing before you commit — never a percentage of your club's revenue and never a per-member or per-seat fee. The standard agreement is a 12-month term with annual increases capped at CPI (maximum 4%), so renewals do not surprise the finance committee. If your board would rather not commit, a month-to-month option is available at a higher monthly rate.",
  },
  {
    q: "What if it does not work out?",
    a: "There is a 60-day go-live guarantee. If it is not working in the first 60 days after go-live, you can exit and have your subscription fees for that period refunded. That is in the agreement, not a sales promise.",
  },
  {
    q: "How does this compare to Jonas or Clubessential?",
    a: "Those suites cover a genuinely wide surface and are well established in the category. The difference is how you buy. Neither publishes a rate card, and capability tends to arrive as separately negotiated modules — accounting, booking, dining POS, member CRM, mobile — so a club that adds one thing a year is negotiating each addition without a published ceiling to negotiate against. Our model is the opposite: one flat fee, a fixed written quote up front, and new capability built as part of the managed service rather than sold as the next module.",
  },
  {
    q: "Who supports it after launch?",
    a: "We do. This is sold as a managed service, not a licence with a support portal. The same team that builds it runs it, and ongoing changes are part of the monthly fee rather than a change order.",
  },
];

/* ---------------------------------------------------------------------------
   Five-year cost chart — grouped bars, two series
   Palette: indigo #4840E0 / heritage green #0F9870.
   Validated (light surface): deutan ΔE 26.3, normal-vision ΔE 31.7, both
   series ≥ 3:1 against the surface. All six checks pass.
   ------------------------------------------------------------------------ */

type YearRow = { label: string; current: number; ardn: number };

function CostChart({ rows }: { rows: YearRow[] }) {
  const [hover, setHover] = useState<{ i: number; s: "current" | "ardn" } | null>(
    null
  );

  const W = 720;
  const H = 300;
  const PAD_L = 58;
  const PAD_R = 14;
  const PAD_T = 26;
  const PAD_B = 38;

  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;

  const max = Math.max(...rows.map((r) => Math.max(r.current, r.ardn)), 1);
  // Round the scale ceiling up to a clean step so gridline labels read well.
  const step = Math.pow(10, Math.floor(Math.log10(max))) / 2;
  const ceil = Math.ceil(max / step) * step;

  const groupW = plotW / rows.length;
  const barW = Math.min(46, (groupW - 26) / 2);
  const y = (v: number) => PAD_T + plotH - (v / ceil) * plotH;

  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => f * ceil);

  return (
    <figure className="gc-figure">
      <figcaption className="gc-figcap">
        <span className="gc-figtitle">Five-year cost of ownership</span>
        <span className="gc-legend">
          <span className="gc-key">
            <i style={{ background: "#4840E0" }} aria-hidden="true" />
            Per-seat licensing
          </span>
          <span className="gc-key">
            <i style={{ background: "#0F9870" }} aria-hidden="true" />
            Ardn flat fee
          </span>
        </span>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="gc-svg"
        role="img"
        aria-label={`Grouped bar chart comparing five years of per-seat licensing cost against a flat monthly fee. Per-seat licensing rises from ${usd(
          rows[0].current
        )} in year one to ${usd(
          rows[rows.length - 1].current
        )} in year five, while the flat fee stays at ${usd(rows[0].ardn)}.`}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={PAD_L}
              x2={W - PAD_R}
              y1={y(t)}
              y2={y(t)}
              stroke="#E6E8F2"
              strokeWidth={1}
            />
            <text
              x={PAD_L - 10}
              y={y(t) + 4}
              textAnchor="end"
              className="gc-tick"
            >
              {t === 0 ? "0" : usdCompact(t)}
            </text>
          </g>
        ))}

        {rows.map((r, i) => {
          const gx = PAD_L + i * groupW;
          // 2px surface gap between the two adjacent fills.
          const x1 = gx + groupW / 2 - barW - 1;
          const x2 = gx + groupW / 2 + 1;
          const isLast = i === rows.length - 1;
          const showLabel = i === 0 || isLast;

          return (
            <g key={r.label}>
              <rect
                x={x1}
                y={y(r.current)}
                width={barW}
                height={Math.max(PAD_T + plotH - y(r.current), 2)}
                rx={4}
                fill="#4840E0"
                opacity={hover && !(hover.i === i && hover.s === "current") ? 0.45 : 1}
                onMouseEnter={() => setHover({ i, s: "current" })}
                onMouseLeave={() => setHover(null)}
              />
              <rect
                x={x2}
                y={y(r.ardn)}
                width={barW}
                height={Math.max(PAD_T + plotH - y(r.ardn), 2)}
                rx={4}
                fill="#0F9870"
                opacity={hover && !(hover.i === i && hover.s === "ardn") ? 0.45 : 1}
                onMouseEnter={() => setHover({ i, s: "ardn" })}
                onMouseLeave={() => setHover(null)}
              />

              {showLabel && (
                <>
                  <text
                    x={x1 + barW / 2}
                    y={y(r.current) - 8}
                    textAnchor="middle"
                    className="gc-vallabel"
                  >
                    {usdCompact(r.current)}
                  </text>
                  <text
                    x={x2 + barW / 2}
                    y={y(r.ardn) - 8}
                    textAnchor="middle"
                    className="gc-vallabel"
                  >
                    {usdCompact(r.ardn)}
                  </text>
                </>
              )}

              <text
                x={gx + groupW / 2}
                y={H - 14}
                textAnchor="middle"
                className="gc-axlabel"
              >
                {r.label}
              </text>
            </g>
          );
        })}

        <line
          x1={PAD_L}
          x2={W - PAD_R}
          y1={PAD_T + plotH}
          y2={PAD_T + plotH}
          stroke="#D8DBE8"
          strokeWidth={1}
        />
      </svg>

      <div className="gc-hoverline" role="status" aria-live="polite">
        {hover ? (
          <>
            <strong>{rows[hover.i].label}</strong>
            <span className="gc-dot" style={{ background: hover.s === "current" ? "#4840E0" : "#0F9870" }} aria-hidden="true" />
            {hover.s === "current" ? "Per-seat licensing" : "Ardn flat fee"}
            <strong>
              {usd(hover.s === "current" ? rows[hover.i].current : rows[hover.i].ardn)}
            </strong>
          </>
        ) : (
          <span className="gc-hoverhint">Tap or hover a bar for the exact figure</span>
        )}
      </div>

      <details className="gc-table">
        <summary>View as a table</summary>
        <table>
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Per-seat licensing</th>
              <th scope="col">Ardn flat fee</th>
              <th scope="col">Difference</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                <td>{usd(r.current)}</td>
                <td>{usd(r.ardn)}</td>
                <td>{usd(r.current - r.ardn)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}

/* ---------------------------------------------------------------------------
   Page
   ------------------------------------------------------------------------ */

export default function GolfClubContent() {
  const [members, setMembers] = useState(2200);
  const [seats, setSeats] = useState(45);
  const [perSeat, setPerSeat] = useState(DEFAULT_PER_SEAT);
  const [retainer, setRetainer] = useState(60000);
  const [flatMonthly, setFlatMonthly] = useState(4500);

  const model = useMemo(() => {
    const licenceY1 = seats * perSeat * 12;
    const currentY1 = licenceY1 + retainer;
    const ardnY1 = flatMonthly * 12;

    const rows: YearRow[] = Array.from({ length: 5 }, (_, i) => ({
      label: `Year ${i + 1}`,
      current: currentY1 * Math.pow(1 + ANNUAL_UPLIFT, i),
      ardn: ardnY1,
    }));

    const currentTotal = rows.reduce((s, r) => s + r.current, 0);
    const ardnTotal = rows.reduce((s, r) => s + r.ardn, 0);

    return {
      rows,
      licenceY1,
      currentY1,
      ardnY1,
      currentTotal,
      ardnTotal,
      delta: currentTotal - ardnTotal,
      perMember: members > 0 ? currentY1 / members : 0,
    };
  }, [members, seats, perSeat, retainer, flatMonthly]);

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
              <span className="gc-eyebrow">Golf &amp; private club</span>
              <h1 className="gc-display">
                Your club is not a{" "}
                <em>sales pipeline</em>.
                <br />
                Stop paying for one.
              </h1>
              <p className="gc-lede">
                One platform for membership, dues, families, tournaments,
                clinics, check-in and member communications — built for how a
                club actually runs, on your brand, for one flat monthly fee. No
                per-seat licence. Renewal increases capped at CPI in the
                agreement. Built and run by us.
              </p>

              <div className="gc-ctas">
                <a className="gc-btn gc-btn-gold" href="#estimate">
                  See what per-seat is costing you
                </a>
                <a
                  className="gc-btn gc-btn-ghost"
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 30-minute walkthrough
                </a>
              </div>

              <ul className="gc-hero-proof">
                <li>Unlimited staff logins</li>
                <li>Funds settle to your own merchant account</li>
                <li>Migration reconciled before cutover</li>
              </ul>
            </div>

            {/* Member-360 mock. Illustrative UI, not a screenshot — no real
                club, member or balance is depicted. */}
            <div className="gc-hero-visual" aria-hidden="true">
              <div className="gc-mock">
                <div className="gc-mock-bar">
                  <span className="gc-mock-dot" />
                  <span className="gc-mock-dot" />
                  <span className="gc-mock-dot" />
                  <span className="gc-mock-url">members.yourclub.com</span>
                </div>
                <div className="gc-mock-body">
                  <div className="gc-mock-head">
                    <div className="gc-mock-avatar">MH</div>
                    <div>
                      <div className="gc-mock-name">Household — Hargrove</div>
                      <div className="gc-mock-sub">Full Golf · Member since 2011</div>
                    </div>
                    <span className="gc-chip gc-chip-green">Active</span>
                  </div>

                  <div className="gc-mock-rows">
                    <div className="gc-mock-row">
                      <span>Dues rate</span>
                      <b>
                        Grandfathered
                        <i className="gc-chip gc-chip-gold">2011 rate</i>
                      </b>
                    </div>
                    <div className="gc-mock-row">
                      <span>Billing</span>
                      <b>Split 60 / 40 · two payers</b>
                    </div>
                    <div className="gc-mock-row">
                      <span>Waiver</span>
                      <b>Signed · v4</b>
                    </div>
                    <div className="gc-mock-row">
                      <span>Last check-in</span>
                      <b>Gate · 2 days ago</b>
                    </div>
                  </div>

                  <div className="gc-mock-foot">
                    <div className="gc-mock-stat">
                      <span>Household members</span>
                      <b>4</b>
                    </div>
                    <div className="gc-mock-stat">
                      <span>Open balance</span>
                      <b>$0</b>
                    </div>
                    <div className="gc-mock-stat">
                      <span>Staff seats billed</span>
                      <b className="gc-zero">0</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar
        signals={[
          "US-based team",
          "30+ yrs building software",
          "4-hour response SLA",
          "60-day go-live guarantee",
        ]}
      />

      {/* ---------------------------------------------------------------
          PROBLEM
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">The real cost</span>
            <h2 className="gc-h2">
              Most clubs are running five systems that were never designed for a
              club.
            </h2>
            <p className="gc-sub">
              A general-purpose CRM can be bent into a club system. It takes a
              consultant, a year, and a per-seat bill that grows every time you
              hire a starter. Meanwhile the parts a club actually needs —
              families, dues, minimums, a portal members will use — are the parts
              you end up building yourself.
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
          ESTIMATE / CALCULATOR
          --------------------------------------------------------------- */}
      <section className="gc-section" id="estimate">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">Your numbers</span>
            <h2 className="gc-h2">
              What is per-seat licensing actually costing your club?
            </h2>
            <p className="gc-sub">
              Set the sliders to your club. Nothing is sent anywhere and
              nothing is stored — this runs entirely in your browser.
            </p>
          </div>

          <div className="gc-calc">
            <div className="gc-calc-inputs">
              <Slider
                label="Members"
                value={members}
                min={300}
                max={8000}
                step={50}
                onChange={setMembers}
                display={members.toLocaleString("en-US")}
              />
              <Slider
                label="Staff who need a login"
                value={seats}
                min={5}
                max={250}
                step={1}
                onChange={setSeats}
                display={String(seats)}
                hint="Front desk, pro shop, starters, F&B, instructors, management, board."
              />
              <Slider
                label="Cost per seat, per month"
                value={perSeat}
                min={25}
                max={400}
                step={5}
                onChange={setPerSeat}
                display={usd(perSeat)}
                hint="Your CRM's list price per user. Starting value is a typical mid-tier seat."
              />
              <Slider
                label="Annual admin / consultant retainer"
                value={retainer}
                min={0}
                max={250000}
                step={5000}
                onChange={setRetainer}
                display={usd(retainer)}
                hint="What you pay a partner or in-house admin to keep it configured."
              />

              <div className="gc-calc-divider" />

              <Slider
                label="Ardn flat fee, per month"
                value={flatMonthly}
                min={699}
                max={25000}
                step={100}
                onChange={setFlatMonthly}
                display={usd(flatMonthly)}
                hint="Illustrative until we scope your club — the real number is a fixed written quote, and it is never per member or per seat. Set it to your quote to see your true position."
                accent
              />
            </div>

            <div className="gc-calc-out">
              <div className="gc-readout">
                <span className="gc-readout-label">
                  Five-year difference at these numbers
                </span>
                <span
                  className={
                    model.delta >= 0 ? "gc-readout-value" : "gc-readout-value gc-neg"
                  }
                >
                  {model.delta >= 0 ? usd(model.delta) : "−" + usd(Math.abs(model.delta))}
                </span>
                <span className="gc-readout-note">
                  {model.delta >= 0
                    ? "Stays with the club instead of going to licences."
                    : "At this flat fee you would be paying more — worth a conversation before anything else."}
                </span>
              </div>

              <div className="gc-stats">
                <div className="gc-stat">
                  <span>Seat licences, year one</span>
                  <b>{usd(model.licenceY1)}</b>
                </div>
                <div className="gc-stat">
                  <span>All-in, year one</span>
                  <b>{usd(model.currentY1)}</b>
                </div>
                <div className="gc-stat">
                  <span>Per member, per year</span>
                  <b>{usd(model.perMember)}</b>
                </div>
                <div className="gc-stat">
                  <span>Cost of your next 10 hires</span>
                  <b>{usd(perSeat * 12 * 10)}</b>
                </div>
              </div>

              <CostChart rows={model.rows} />

              <p className="gc-footnote">
                Per-seat column compounds at {Math.round(ANNUAL_UPLIFT * 100)}% a
                year, the conservative end of typical renewal uplift. The flat
                fee is held constant. Figures are your inputs, not a quote —
                the only way to get a real number is to scope the club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          CAPABILITIES
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">What you get</span>
            <h2 className="gc-h2">
              Twelve things a club needs, in one platform, on your brand.
            </h2>
            <p className="gc-sub">
              Not a CRM with a club-shaped hat on it. These are the primitives
              the platform is built from.
            </p>
          </div>

          <div className="gc-cards">
            {CAPABILITIES.map((c) => (
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
          PORTAL / BRAND
          --------------------------------------------------------------- */}
      <section className="gc-section gc-dark">
        <div className="container">
          <div className="gc-split">
            <div>
              <span className="gc-kicker gc-on-dark">Member experience</span>
              <h2 className="gc-h2">
                A portal your members will actually use — and it says your name,
                not ours.
              </h2>
              <p className="gc-sub gc-on-dark">
                Logo, favicon, colours, typeface and hero imagery are per-club
                tokens. No component in the system carries a hard-coded colour,
                so the admin console your staff use and the portal your members
                see are both your club&rsquo;s. It runs on your own domain with
                SSL issued automatically once DNS verifies, and it is built to
                WCAG 2.2 AA.
              </p>
              <ul className="gc-ticks">
                <li>Member dashboard — bookings, statements, category, household, saved cards</li>
                <li>Join and signup flow with the waiver captured inline</li>
                <li>Events, clinics and lessons browsable and bookable</li>
                <li>Household management and payment methods per payer</li>
                <li>Responsive on mobile web — no app store, no download</li>
              </ul>
            </div>
            <div className="gc-portal-mock" aria-hidden="true">
              <div className="gc-portal-nav">
                <span className="gc-portal-logo">YOUR CLUB</span>
                <span className="gc-portal-links">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="gc-portal-hero">
                <span className="gc-chip gc-chip-gold">Member portal</span>
                <h4>Good afternoon, Marcus</h4>
                <p>Your next event is the Member-Guest on Saturday.</p>
              </div>
              <div className="gc-portal-tiles">
                <div>
                  <span>Statement</span>
                  <b>Paid</b>
                </div>
                <div>
                  <span>Lesson pack</span>
                  <b>6 left</b>
                </div>
                <div>
                  <span>Household</span>
                  <b>4 members</b>
                </div>
                <div>
                  <span>Waiver</span>
                  <b>Current</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          ON-PROPERTY SYSTEMS

          ⚠️  PENDING CONFIRMATION FROM DEEP — DO NOT PUBLISH CLAIMS HERE
          WITHOUT IT. The canonical spec (ARDN-Cloud-Solutions/membership,
          docs/REQUIREMENTS.md) contains NO tee sheet, NO GHIN / handicap
          sync and NO F&B minimum-spend tracking. The copy below is written
          to be true as it stands — it positions the platform as the member
          and revenue layer that sits ALONGSIDE those systems.

          If Deep confirms any of the three are built, replace that card's
          `body` with the real capability and move it into CAPABILITIES
          above. If he confirms they are roadmap, say so explicitly with no
          date. Until then this section ships as written and claims nothing
          that is not in the spec.
          --------------------------------------------------------------- */}
      <section className="gc-section">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">On property</span>
            <h2 className="gc-h2">
              The member and revenue layer — alongside what is already on
              property.
            </h2>
            <p className="gc-sub">
              We are deliberate about this. The platform owns membership, money
              and the member relationship. Where you already run a system that
              your staff know and your members like, the answer is usually to
              connect to it, not to rip it out in year one.
            </p>
          </div>

          <div className="gc-onprop">
            <article>
              <h3>Tee sheet</h3>
              <p>
                Keep the tee sheet your pro shop already runs. What the platform
                supplies is the authoritative member record behind it — who is
                current, what category they hold, and whether there is a hold on
                the account.
              </p>
            </article>
            <article>
              <h3>Handicap &amp; scoring</h3>
              <p>
                Handicap computation is a governing-body service and stays
                there. The platform is the membership system of record that
                tells it who is an active member of your club.
              </p>
            </article>
            <article>
              <h3>Food &amp; beverage</h3>
              <p>
                Your F&amp;B point of sale keeps taking orders. Member identity,
                household and account standing come from the platform, so the
                dining room is looking at the same roster as the office.
              </p>
            </article>
          </div>

          <p className="gc-onprop-note">
            Scoping a specific integration is part of the discovery call — bring
            the names of what you run today and we will tell you plainly what
            connects, what we would build, and what we would not.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          COMPARISON
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">Side by side</span>
            <h2 className="gc-h2">
              Coming off a seat-based CRM — or a module-priced club suite
            </h2>
            <p className="gc-sub">
              Clubs overpay in two different ways. A seat-based CRM charges you
              for every person who needs a login. A club suite charges you for
              every capability, one negotiated module at a time, with no
              published ceiling to negotiate against. We build on Salesforce
              ourselves, so read this as a fit question rather than a takedown —
              both are good products, bought on terms that work against a club.
            </p>
          </div>

          <div className="gc-table-wrap">
            <table className="gc-compare">
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">Seat-based CRM</th>
                  <th scope="col">Club suite, module-priced</th>
                  <th scope="col" className="is-ardn">
                    Ardn club platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((r) => (
                  <tr key={r.feat}>
                    <th scope="row">{r.feat}</th>
                    <td>{r.them}</td>
                    <td>{r.suite}</td>
                    <td className="is-ardn">{r.ardn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          MIGRATION
          --------------------------------------------------------------- */}
      <section className="gc-section">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">Getting there</span>
            <h2 className="gc-h2">Nobody cuts a club over on a promise.</h2>
            <p className="gc-sub">
              Dues are the club&rsquo;s revenue. The migration is designed so
              that you see it reconcile before you depend on it.
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
            <h2 className="gc-h2">What GMs ask us first</h2>
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
            heading="Get a club-specific scope and a flat-fee quote"
            sub="Tell us your club size, what you run today and what hurts most. We reply within 4 business hours with a written scope and a fixed monthly number — no obligation."
            showSeatQualifiers
            submitLabel="Get my club quote"
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
            One platform. One flat fee. <em>Every</em> login included.
          </h2>
          <p className="gc-lede">
            Bring your roster, your dues structure and your current bill. We will
            show you exactly what moves, what it costs, and what your club stops
            paying for.
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
              Send us your numbers instead
            </a>
          </div>
          <p className="gc-final-links">
            Related:{" "}
            <Link href="/membership-management">Membership management platform</Link>{" "}
            ·{" "}
            <Link href="/ai-for-membership-organizations">
              AI for membership organizations
            </Link>{" "}
            · <Link href="/reduce-crm-licensing-costs">Reduce CRM licensing costs</Link>{" "}
            · <Link href="/custom-portal-development">Custom portal development</Link>{" "}
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

/* ---------------------------------------------------------------------------
   Slider
   ------------------------------------------------------------------------ */

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  hint,
  accent,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  display: string;
  hint?: string;
  accent?: boolean;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={accent ? "gc-slider gc-slider-accent" : "gc-slider"}>
      <div className="gc-slider-top">
        <label htmlFor={`s-${label}`}>{label}</label>
        <output htmlFor={`s-${label}`}>{display}</output>
      </div>
      <input
        id={`s-${label}`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ ["--pct" as string]: `${pct}%` }}
      />
      {hint && <p className="gc-slider-hint">{hint}</p>}
    </div>
  );
}
