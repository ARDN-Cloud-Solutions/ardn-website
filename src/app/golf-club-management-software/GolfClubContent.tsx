import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Calculator,
  CalendarDays,
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
  ReceiptText,
  Sparkles,
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
import ProductVideo from "@/components/media/ProductVideo";
import LoopClip from "@/components/media/LoopClip";
import { VIDEOS, loopClip, videoProps } from "@/components/media/videos";
import { FAQS } from "./faqs";
import CoverageExplorer from "./proposal/CoverageExplorer";
import { APPS } from "./proposal/features";
import "./proposal/proposal.css";

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
 */

const CALENDLY = "https://calendly.com/deep-ardncloudsolutions/30min";

const STATS = [
  { value: "1", label: "member record shared by every module and every club" },
  { value: "6", label: "steps from “Choose a plan” to a signed, paid, active membership" },
  { value: "550+", label: "permissions, grantable per role or per person, per club" },
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

type Tier = "core" | "addon" | "soon";
const TIER_LABEL: Record<Tier, string> = { core: "Core", addon: "Add-on", soon: "Coming soon" };

// Owner's capability list and order (2026-09-30). Core = Membership Sales and
// Members App; everything else is an add-on module. No prices on this page.
// `points` are short, buyer-facing bullets of shipped capability (verified in
// the product code 2026-10-07) — keep them outcomes-first and brief.
const MODULES: {
  icon: LucideIcon;
  title: string;
  body: string;
  points?: string[];
  tier: Tier;
  tag?: string;
}[] = [
  {
    icon: Globe,
    title: "Website & Marketing",
    tier: "addon",
    body: "A branded microsite for every club from one system, 39 content blocks and 17 templates, a new-club wizard, and a six-step online join with e-signature and payment.",
    points: [
      "Journeys with triggers, waits and branches, sent by email, push and the member inbox",
      "Email in each club's own brand, with every email kept on the person's record",
      "Revenue credited back to the campaigns that earned it",
      "Surveys after a visit, with the answers on the member's record",
      "Fundraising: donations, pledges, recurring gifts and gift batches",
      "Text campaigns through the club's own texting account",
    ],
  },
  {
    icon: Briefcase,
    title: "HR",
    tier: "addon",
    body: "Hire, onboard, schedule and pay staff without a second system.",
    points: [
      "AI-ranked applicants, scored with names hidden",
      "Time clock with face check, timesheets, tip pools and commissions",
      "I-9 and new-hire onboarding on the phone, plus background checks",
      "Shifts by place, each person's week on their phone, and time-off requests",
      "Labor-cost what-if before the schedule is published",
      "Every payroll dollar posted to the books, with the payroll provider's file each period",
    ],
  },
  {
    icon: Users,
    title: "Membership Sales",
    tier: "core",
    body: "Shared lead pool with SLA escalation, pipeline by stage and a tour board, with onboarding the moment they pay.",
    points: [
      "One dialog builds the whole sale: plan, household, add-ons and joining fee",
      "E-signed contracts and waivers in one signing, with payment blocked until signed",
      "Plan changes signed as amendments, with the fee difference worked out",
      "Payment plans and financing with a soft credit check",
      "One next step on every record, reassigned when someone leaves",
      "Retention and upsell lists: members likely to cancel, or running out of benefits",
    ],
  },
  {
    icon: Smartphone,
    title: "Members App",
    tier: "core",
    body: "A per-club installable app in the club's own brand, with benefits remaining, bills and bookings.",
    points: [
      "Member card with QR code, ready for Apple and Google Wallet",
      "Book tee times, classes, sessions, dining and events, in one list for the whole household",
      "Push alerts for bookings, day-before reminders, statements and club news",
      "Calendar invites, and changing a booking without calling the club",
      "Club wallet credit that pays anywhere in the club, and gift cards",
      "Refer a friend, with a reward the club sets",
    ],
  },
  {
    icon: Flag,
    title: "Tee-Times",
    tier: "addon",
    body: "Rate grids, booking windows by tier, member allowances live while booking, the cart fleet and revenue per available tee time.",
    points: [
      "Waitlist, standing tee times and a fair weekend lottery",
      "Starter, ranger and bag-room screens, with pace of play",
      "Rain checks and no-show rules applied on their own",
      "Turn-stand ordering and the weather on the sheet",
      "Group scorecard in the member app",
      "Courts, classes, lessons and kids-club check-in on the same booking rules",
      "Handicap and tournament-software sync, and an agronomy log",
    ],
  },
  {
    icon: CalendarDays,
    title: "Events & Catering",
    tier: "addon",
    body: "Inquiry to invoice: room holds, instant online quotes, a host planning portal and the captain's phone on the night.",
    points: [
      "AI floor-plan scan of each room",
      "Banquet event orders, proposals, guest lists, RSVPs and seating charts",
      "One catalog of packages and menus for every club, each club free to set its own price",
      "Booked-but-unpaid dates released after one reminder, with the team told",
      "Kitchen recipes, counts and purchasing",
      "Vendor portal",
    ],
  },
  {
    icon: ReceiptText,
    title: "Point of Sale",
    tier: "addon",
    body: "A register for every outlet (shop, dining, tee desk), charged to the member's account and on their statement the moment it's made.",
    points: [
      "Card, cash and member-account payments, member pricing and promo codes",
      "Barcode and iPad-camera scanning, label printing",
      "Kitchen and bar screens with course hold-and-fire",
      "Dining keeps selling offline on cash and member account",
      "Gift cards, special orders and a credit book",
      "Stock as a ledger, cost by FIFO or LIFO, and profit by item",
      "Close-out with cash counts; receipts by print or email; returns and refunds",
    ],
  },
  {
    icon: ShoppingBag,
    title: "e-Commerce",
    tier: "addon",
    body: "An online pro shop with member prices and pre-orders waiting on the member's cart at tee time, with inventory tracked across clubs.",
  },
  {
    icon: CreditCard,
    title: "Subscription Billing & Dues",
    tier: "addon",
    body: "Autopay, prorated first periods, step-up promotional dues, retries that never charge twice, and a compliant credit-only card fee.",
    points: [
      "Card and bank (ACH) payments",
      "Statements with finance charges and food & beverage minimums",
      "Declined payments retried on a schedule, with card-expiry warnings",
      "Split-payment refunds and refunds on cancellation",
      "Card fee set per card brand",
    ],
  },
  {
    icon: MessageSquareText,
    title: "Member Service with Chatbot",
    tier: "addon",
    body: "Live chat and cases with an owner and an answer-by time.",
    points: [
      "AI assistant that answers first, with the member's own dues, bookings and balance, then hands off to a person",
      "AI sorts and routes new inquiries",
      "Chat on the club website and member portal; a visitor's chat becomes a lead",
      "Two-way texting with members on one thread per person (Unified SMS)",
      "Staff phone alerts for anything that needs action, including a member arriving",
      "Report a Problem with a step recording, and every failure at every club caught automatically",
    ],
  },
  {
    icon: Calculator,
    title: "Accounting Suite",
    tier: "addon",
    body: "Each club keeps its own books, fed by the club's own transactions, with financial statements per club or consolidated.",
    points: [
      "General ledger, payables and receivables, per club or consolidated",
      "Bank reconciliation with payout matching",
      "Budgets, period close and financial statements",
      "Purchasing with approval limits and three-way match",
      "13-week cash forecast, debt, leases and the fixed-asset register",
    ],
  },
  {
    icon: Building2,
    title: "Property Management",
    tier: "soon",
    body: "Club-owned residences and commercial space managed alongside the club, on the same member and billing records.",
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
    body: "550+ permissions granted per role and per club, each explained in plain words, individual grants or denials with an expiry and a reason, and a “Who Can Do What” view across every club.",
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
          WATCH IT RUN — the overview video inline (the hero's buttons open
          the same file in a modal), three module walkthroughs and three
          silent loops. /work's "Watch" link lands on #video.
          --------------------------------------------------------------- */}
      <section className="gc-section" id="video">
        <div className="container">
          <div className="gc-head">
            <span className="gc-kicker">Watch it run</span>
            <h2 className="gc-h2">Two minutes, the whole club.</h2>
            <p className="gc-sub">
              The product on a sample club: the membership sales and members
              app core, then every add-on module. Captions are built in, and
              the chapters below jump straight to a module.
            </p>
          </div>
          <div className="mv-stage">
            <ProductVideo {...videoProps(VIDEOS.clubStewardOverview)} page="golf-club-management-software" />
          </div>

          <p className="mv-row-head">More walkthroughs</p>
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

          <p className="mv-row-head">See it move</p>
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
              <article className={`gc-card gc-tier-${c.tier}`} key={c.title}>
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
      <section className="gc-section cp" id="features">
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
          ACCOUNTING. Built: each club keeps its own books. The screenshots
          use sample figures, so keep that note.
          --------------------------------------------------------------- */}
      <section className="gc-section gc-canvas" id="accounting">
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
            <Link href="/case-studies/club-steward-multi-club-golf-platform">Case study: Club Steward for multi-club operators</Link>{" "}
            · <Link href="/work">Everything we&rsquo;ve launched</Link>{" "}
            · <Link href="/membership-management">Membership management platform</Link>{" "}
            · <Link href="/ai-for-hospitality">AI for hospitality</Link>{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
