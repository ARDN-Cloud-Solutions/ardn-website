/* YMCA of Greater St. Petersburg — the estate, and what happens to each system.
 *
 * SOURCE OF TRUTH. Every row is checked against code, not against a vendor's
 * marketing or our own memory. Two products were read on 2026-10-16:
 *
 *   YMCA     ARDN-Cloud-Solutions/membership            (26 feature modules)
 *   Club    the club platform (~100 modules)
 *
 * The club platform was built on the YMCA codebase, so what is in it can come back.
 * Where a row says a capability exists, the file count and line count that
 * prove it are in `evidence`. Where nothing exists in either product, the row
 * says so plainly and becomes a build item — those are the honest gaps and
 * they are the ones that set the date.
 *
 * Row shape:
 *   [vendor, area, fate, "what it does today", "what replaces it", "why it stays"]
 *
 * fate: retire | partial | connect | keep
 *   retire  — the contract can end; we carry the whole job
 *   partial — most of it moves; a named piece stays or must be sourced
 *   connect — the Y keeps the tool and we feed it
 *   keep    — the Y keeps it and we leave it alone
 */

export const AREAS = [
  "Membership & Billing",
  "Programs & Camp",
  "Childcare",
  "Finance & Giving",
  "Marketing & Web",
  "Operations & IT",
];

export const FATE = {
  retire:  ["var(--brass)", "rgba(var(--goldrgb),.14)",  "Retire"],
  partial: ["var(--sand)",  "rgba(var(--goldrgb),.10)",  "Retire in Part"],
  connect: ["var(--teal)",  "rgba(var(--bluergb),.12)",  "Connect"],
  keep:    ["var(--slate)", "rgba(var(--slatergb),.12)", "Keep"],
};

/* The 24 capability rows from "YMCA of Greater St. Petersburg: what you use
 * today vs. Ardn" (15 October 2026), each carried forward with the Ardn side
 * re-checked against both codebases. `d1` marks the Y's Day 1 list. */
export const SYS = [
  // ── Membership & Billing ──────────────────────────────────────────────
  ["Daxko Operations · membership", "Membership & Billing", "retire", true,
    "Family records, dues on a draft day, holds, check-in, POS, staff permissions",
    "Members, Households, Memberships, Billing, Check-in, Roles — all live in both products today",
    "",
    "YMCA: members, households, memberships, billing, checkin, roles. Strongest area we have."],

  ["Daxko Operations · program and camp registration", "Programs & Camp", "partial", true,
    "Parent registers kids online, member and early-bird price, waitlists, required waivers",
    "Programs and Classes exist in both. Our club platform adds Waitlist (319 lines) and Membership Applications (902 lines) to bring across",
    "A parent cannot yet register a child online, early-bird price is not charged, and waivers are not enforced. Those three are a build, not a port.",
    "Club platform: waitlist 319 ln, membership-applications 902 ln. Online child registration absent in both."],

  ["Daxko Operations · reports", "Membership & Billing", "partial", true,
    "Daxko reports plus the Y's own Excel tracker for daily sales and joins against goal",
    "Report builder, datasets and dashboards shipped on the Y product 2026-10-15 — plain-English report builder, 20 standard reports, filter-value pickers",
    "The daily sales-and-joins tracker is not built, and the Y has not yet named which 19 reports it needs.",
    "YMCA: reporting module + 16 commits of reporting work merged 2026-10-15."],

  ["Daxko app", "Membership & Billing", "retire", true,
    "Member mobile app: barcode check-in, schedules, booking, payments, membership card",
    "Our installable member app — service worker, web-push and a wallet card — brought across",
    "",
    "Club platform: member-portal-web/src/app/sw.js, _shared/web-push-crypto.ts, worker-push-dispatch, wallet 297 ln. Not yet tested on phones; no app-store build."],

  ["Daxko · sex-offender screening", "Operations & IT", "partial", true,
    "Screens every new person, re-checks monthly, covers staff and volunteers",
    "Our background-check logs (392 lines) carry the workflow and the audit trail",
    "The workflow exists; the national registry data source does not. That is a vendor feed to buy, not code to write.",
    "Club platform: background-check-logs 392 ln. No registry data source in either product."],

  ["Daxko · PT packages", "Programs & Camp", "partial", true,
    "Sell personal-training packages, redeem sessions, track balances and expiry",
    "Selling, booking and redeeming work today; Our Appointments (456 lines) and Benefits engine come across",
    "No expiry, no refunds, and no desk-or-trainer balance view yet.",
    "Club platform: appointments 456 ln, benefits module. Expiry/refund/balance absent."],

  ["Daxko · data migration", "Membership & Billing", "partial", true,
    "Members, families, barcodes, stored cards and history have to move off Daxko",
    "Nothing yet. This is tooling we write once we have Daxko export access and an NDA",
    "No import tooling exists in either product. Our club platform's 'Moves' module is fundraising moves-management, not data migration — it does not help here. Stored cards move processor-to-processor, never through us.",
    "Verified: the club platform's 'moves' 2,053 ln = donor cultivation pipeline (US-RE-005), not migration."],

  // ── Childcare ─────────────────────────────────────────────────────────
  ["Daxko · Kid Zone child watch", "Childcare", "retire", false,
    "Check in and out, PIN pickup, time limits",
    "Check-in is live on the Y product and the Y has confirmed it works. Our Play Center (1,843 lines) is the richer version",
    "",
    "YMCA: checkin module. Club platform: play-center 1,843 ln, self-check-in 178 ln."],

  ["Daxko Attendance Tracker · licensed childcare", "Childcare", "partial", true,
    "Parent sign in and out, staff-to-child ratios, incidents, health records, ELC reimbursement reporting",
    "Nothing. This is the largest build in the programme and it is the one thing holding the Daxko contract open",
    "Checked both codebases for staff-to-child ratios, licensing packets, classroom ratios and school-readiness reporting: zero matches in either. This is net-new work, and it is the critical path to retiring Daxko completely.",
    "VERIFIED ABSENT in both: staff-to-child 0, licensing packet 0, classroom ratio 0, school readiness 0."],

  ["Tadpoles", "Childcare", "connect", false,
    "Daily logs, photos, naps and meals sent to preschool parents",
    "The Y keeps Tadpoles on Day 1. We sync the class roster to it by file",
    "No public API was found, so the roster goes across as a file. Asilo is free but small and also has no API. Later, daily logs can move onto our classroom check-in.",
    ""],

  ["DocuSign", "Operations & IT", "retire", true,
    "Licensing packets, prefilled forms, reminders, signed PDFs",
    "Our Contracts (2,317 lines), Acknowledgments (604 lines), Forms (4,742 lines) and My Signature — templates, prefill, reminders, signed PDF",
    "",
    "Club platform: contracts 2,317 + forms 4,742 + acknowledgments 604 + my-signature. Needs state-PDF field filling added. DocuSign contract ends end of April — this one has a date on it."],

  // ── Programs, tours, leads ────────────────────────────────────────────
  ["Appointment King", "Programs & Camp", "retire", false,
    "One calendar for tours, wellness consults and PT; staff availability",
    "Our Appointments (456 lines) and Tours (357 lines) — round-robin host, calendar invite, public booking",
    "",
    "Club platform: appointments 456 ln, tours 357 ln. Small gaps: staff reschedule, booking window."],

  ["Salesforce", "Marketing & Web", "retire", false,
    "Prospect capture, follow-up and pipeline",
    "Our Leads (2,822 lines) and Sales Pipeline (4,221 lines), plus three working Salesforce importers with 886 lines of tests behind them",
    "",
    "CORRECTS THE 15 OCT SHEET, which said the importer was still needed. The club platform has salesforce-club-import.ts, salesforce-list-view-import.ts and salesforce-staff-import.ts, with 402 + 484 lines of tests."],

  ["TeamSideline", "Programs & Camp", "keep", false,
    "Sports leagues: teams, schedules, rosters, parent pages, alerts",
    "Nothing today, and TeamSideline cannot integrate",
    "Buildable for what the Y actually uses, but not on Day 1. Run it alongside for one season and build against a real league in flight.",
    "Absent in both products."],

  ["Listen360", "Marketing & Web", "retire", false,
    "Member surveys, NPS and alerts",
    "Our survey engine — five shipped survey types, an exit survey that asks four real questions, public survey links, and a 644-line test suite",
    "",
    "Club platform: 5 survey migrations + surveys.test.ts 644 ln + exit-survey-questions.test.ts 112 ln. The 15 Oct sheet listed this as a port; it is further along than that."],

  ["Daxko · financial assistance (and FA Check)", "Finance & Giving", "partial", false,
    "Apply, verify, and get the discount onto the membership",
    "Our Financial Assistance module (450 lines); the staff side works and the discount reaches the card today",
    "Online application by the family is the missing piece.",
    "Club platform: financial-assistance 450 ln. Online apply absent."],

  ["Welld", "Operations & IT", "connect", false,
    "Daily member usage sent to insurers for reimbursement",
    "A usage feed we build once Welld gives us its file format",
    "The Y keeps Welld. We send it the daily usage file. We cannot write the feed until Welld tells us the shape.",
    "Absent in both; blocked on a vendor spec, not on engineering."],

  // ── Finance & Giving ──────────────────────────────────────────────────
  ["Raiser's Edge", "Finance & Giving", "connect", false,
    "Donor records held alongside member records",
    "A connector is built and waiting to be tested on the Y's own account. Separately, our club platform carries a full fundraising suite — Pledges (880), Grants (1,024), Soft Credits (522), Gift Batches (2,055) and Moves Management (2,053)",
    "Connect on Day 1. Worth a second conversation later: our fundraising suite is close to what Raiser's Edge is being paid for, so this may be a retire rather than a connect once the Y has seen it.",
    "Club platform: pledges 880 + grants 1,024 + soft-credits 522 + gift-batches 2,055 + moves 2,053 = 6,534 ln of fundraising."],

  ["SGA", "Finance & Giving", "connect", false,
    "The Y's accounting system of record: revenue posted to general-ledger codes",
    "Two real options. CONNECT: a journal-entry export in SGA's format, posting revenue nightly, alongside the Feeds Out channel that already ships to warehouses and BI tools. REPLACE: Our Books engine — 207 files and 53,190 lines of double-entry accounting covering ledger, journal, close, reconcile, payables, receivables, budgets, assets and depreciation, leases, debt, cash forecast and multi-entity consolidation, with History Import to bring prior years across",
    "Connect is the Day 1 path and the export is not yet written. Replace is a genuine option rather than a courtesy — Books is a working system, not a reporting layer — but swapping the Y's system of record is a decision about finance operations and audit, not a feature toggle. We recommend connecting first, running Books alongside on one fund or one branch, and letting the Y's finance team decide from evidence.",
    "Club platform: books 207 files / 53,190 ln (engine: posting, subledger, close, consolidate, reconciliation, receivables, payables, depreciation, deferral, recurring, aging, collections, periods), accounting 1,154 ln, finance 371 ln, plus history-import and feeds-out."],

  ["Mailchimp", "Marketing & Web", "connect", false,
    "Email campaigns and segments",
    "Campaigns, audiences and templates exist in both products",
    "Keep Mailchimp while the Y's texting opt-out handling is built; moving email is easy, moving text without opt-out handling is not.",
    "Both products have a marketing module."],

  // ── Operations & IT ───────────────────────────────────────────────────
  ["Volgistics", "Operations & IT", "keep", false,
    "Volunteers, Level 2 screening, hours",
    "A volunteers module exists in both products",
    "The Y has said this is not critical. Leave it alone; revisit after the Daxko work lands.",
    "Both products have volunteers."],

  ["Operate.Fit", "Operations & IT", "connect", false,
    "Facility contracts and incident reports that carry member data",
    "Our Assets (388 lines) and Issues (530 lines) cover the shape of this",
    "Requirements are still pending from the Y. Nothing should be promised here until we have them.",
    "Club platform: assets 388 ln, issues 530 ln, club-conditions. Requirements outstanding."],

  ["Clarissa", "Operations & IT", "connect", false,
    "AI call-centre agent that recognises members",
    "Member identification by phone number, and chat on the record",
    "We need the vendor's integration details before this can be scoped at all.",
    "Club platform: chat 175 ln, my-help-center. Vendor detail needed."],

  ["Accrisoft · Wufoo · Planable", "Marketing & Web", "partial", false,
    "Public website, web forms, social posting",
    "Our Website CMS (3,456 lines) and Forms (4,742 lines) can take over the site and replace Wufoo outright",
    "This is the Y's call. Social posting stays where it is — posting belongs in each network's own tools.",
    "Club platform: website 3,456 ln, forms 4,742 ln. Wufoo is replaceable today; the site is a choice, not a need."],
];

/* Counts, derived rather than typed, so the page can never disagree with the table. */
export const TALLY = SYS.reduce((a, r) => ((a[r[2]] = (a[r[2]] || 0) + 1), a), {});
export const D1 = SYS.filter((r) => r[3]);
