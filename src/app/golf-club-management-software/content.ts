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
  ShoppingBag,
  Smartphone,
  Tag,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Club Steward page content, shared by the focused landing page
 * (GolfClubContent) and the full detail page (features/FeaturesContent).
 *
 * Moved here verbatim from GolfClubContent on 2026-10-14 when the landing
 * page was cut down for decision makers: nothing was deleted, the long-form
 * sections now render on /golf-club-management-software/features. The truth
 * guardrails in GolfClubContent's header comment apply to every line here.
 */

export const CALENDLY = "https://calendly.com/deep-ardncloudsolutions/30min";

export const STATS = [
  { value: "1", label: "member record shared by every module and every club" },
  { value: "6", label: "steps from “Choose a plan” to a signed, paid, active membership" },
  { value: "550+", label: "permissions, grantable per role or per person, per club" },
  { value: "0", label: "data re-keyed between sales, contracts, billing and the member record" },
];

export const PAINS = [
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

export const PROMISES: { icon: LucideIcon; title: string; body: string }[] = [
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

export const TOUR = [
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

export type Tier = "core" | "addon" | "soon";
export const TIER_LABEL: Record<Tier, string> = { core: "Core", addon: "Add-on", soon: "Coming soon" };

// Owner's capability list and order (2026-09-30). Core = Membership Sales and
// Members App; everything else is an add-on module. No prices on this page.
// The landing page calls these "apps" and shows only `short` (one line, drawn
// from `body` and `points`); the features page shows everything, anchored by
// `slug` so each landing-page card links straight to its detail.
// `points` are short, buyer-facing bullets of shipped capability (verified in
// the product code 2026-10-07) — keep them outcomes-first and brief.
export const MODULES: {
  icon: LucideIcon;
  slug: string;
  title: string;
  short: string;
  body: string;
  points?: string[];
  tier: Tier;
  tag?: string;
}[] = [
  {
    icon: Globe,
    slug: "website-marketing",
    title: "Website & Marketing",
    short: "A branded site for every club and a six-step online join with e-signature and payment.",
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
    slug: "hr",
    title: "HR",
    short: "Hire, onboard, schedule and pay staff without a second system.",
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
    slug: "membership-sales",
    title: "Membership Sales",
    short: "Shared lead pool, pipeline and tours, e-signed contracts, and onboarding the moment they pay.",
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
    slug: "members-app",
    title: "Members App",
    short: "A per-club app in the club's own brand: member card, benefits remaining, bills and bookings.",
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
    slug: "tee-times",
    title: "Tee-Times",
    short: "Rate grids, booking windows by tier, member allowances live while booking, and the cart fleet.",
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
    slug: "events-catering",
    title: "Events & Catering",
    short: "Inquiry to invoice: room holds, instant online quotes, banquet event orders and seating.",
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
    slug: "point-of-sale",
    title: "Point of Sale",
    short: "A register for every outlet, charged to the member's account, with gift cards.",
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
    slug: "e-commerce",
    title: "e-Commerce",
    short: "An online pro shop with member prices and pre-orders waiting on the cart at tee time.",
    tier: "addon",
    body: "An online pro shop with member prices and pre-orders waiting on the member's cart at tee time, with inventory tracked across clubs.",
  },
  {
    icon: CreditCard,
    slug: "billing-dues",
    title: "Subscription Billing & Dues",
    short: "Card and ACH autopay, prorated first periods, and retries that never charge twice.",
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
    slug: "member-service",
    title: "Member Service with Chatbot",
    short: "An AI assistant that answers with the member's own account, then hands off to a person.",
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
    slug: "accounting",
    title: "Accounting Suite",
    short: "Each club keeps its own books, fed by its own transactions, per club or consolidated.",
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
    slug: "property-management",
    title: "Property Management",
    short: "Club-owned residences and commercial space, on the same member and billing records.",
    tier: "soon",
    body: "Club-owned residences and commercial space managed alongside the club, on the same member and billing records.",
  },
];

export const GALLERY = [
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

export const SECURITY: { icon: LucideIcon; title: string; body: string }[] = [
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

export const STEPS = [
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

export const SAFEGUARDS: { icon: LucideIcon; title: string; body: string }[] = [
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
