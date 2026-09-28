// Single source for the golf page FAQ. GolfClubContent renders it and
// page.tsx emits it as FAQPage JSON-LD, so the markup always matches the
// visible content (Google penalises FAQ markup that doesn't).
//
// Customer-facing copy names NO payment provider (per 8a76690 / 6ea8cef) —
// keep payments capability-framed.
export const FAQS = [
  {
    q: "What is Club Steward?",
    a: "Club Steward is golf and country club management software from Ardn Cloud Solutions, a software company based in Orlando, Florida. It runs a multi-club operation on one platform and one member record: club websites and online join, membership sales, e-signed contracts, dues and payments, onboarding, the member portal and golf app, benefits and reciprocal access, the tee sheet and carts, the pro shop, events, and reporting from a single club up to the whole portfolio.",
  },
  {
    q: "Who is Club Steward built for?",
    a: "Operators who run many golf and country clubs — ownership groups, management companies and multi-club portfolios. It was designed from day one around a portfolio: every club gets its own branded website and settings, while corporate, regional VPs and general managers each see the same reports automatically scoped to the clubs they are responsible for. A single club runs on exactly the same platform.",
  },
  {
    q: "How do reciprocal access and cross-club benefits work?",
    a: "What a membership includes is modelled as quantified benefits — golf rounds, guest passes, dining discounts, room hours — each with its own reset period (monthly, yearly or on the membership anniversary) and caps per club, per network of clubs, or both. Benefits are granted automatically when a membership is approved, shared across the household where they should be, and drawn down automatically: booking a tee time uses the golf allowance the member saw while booking.",
  },
  {
    q: "Do we still need a separate CRM, website agency or e-signature tool?",
    a: "No. The membership sales desk (lead pool, pipeline, tours, product builder and approvals), each club's website and online join, and contracts with built-in e-signature are all part of Club Steward and share one member record. A website visitor can go from choosing a plan to a signed, paid, active membership without talking to anyone — or a Membership Director can close the same deal in person on a tablet.",
  },
  {
    q: "How are dues and payments handled?",
    a: "Dues run on autopay by card or US bank account (ACH), with a prorated first period, promotional dues that step up on a set date, card-expiry warnings, and automatic retries of failed payments at 3, 5 and 7 days — never charging twice. If you pass on a credit-card fee, it applies to credit cards only, is disclosed on its own line before payment, requires explicit consent, and follows state-by-state rules with the statute cited.",
  },
  {
    q: "Does it include accounting?",
    a: "A full general ledger, accounts receivable and payable, bank reconciliation, budgets, period close and financial statements are in Preview: the interface is complete and the accounting engine is being merged into the platform. Every charge in Club Steward already carries its general-ledger account, department, revenue centre and club, so the ledger is fed by the club rather than re-keyed from it.",
  },
  {
    q: "What about point of sale and court booking?",
    a: "Both are on the roadmap. A point-of-sale till is planned, starting with integration to a club's existing POS. Court booking for tennis, pickleball and padel is planned on the same booking engine as the tee sheet. We walk through the roadmap in the demo so nothing is assumed.",
  },
  {
    q: "How is our data kept separate and secure?",
    a: "Club-level isolation is enforced inside the database with row-level security on every table, so one club's staff cannot query another club's records. On top of that are more than 400 individual permissions, per-person grants or denials with an expiry and a reason, field history on every tracked field, an audit log of staff actions, and a 30-day recycle bin. Members and anything with money, signatures or attendance behind it can never be deleted.",
  },
  {
    q: "Will our club websites lose their search rankings?",
    a: "Club Steward sets up permanent redirects from each club's old web addresses so existing rankings carry over. Each club's site is then managed without an agency: a block-based page editor, menus, media, and brand and theme settings, with editing and publishing as separate permissions so a GM can edit without publishing.",
  },
];
