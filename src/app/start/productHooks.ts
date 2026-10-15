// Ad hooks for the product funnels: Club Steward (/start/club-steward …) and
// Ardn CRM (/start/crm …). Each hook only changes the words at the top of the
// page to match the search; the rest of the page and the questions come from
// the funnel. A new industry for Ardn CRM is one more entry in CRM_HOOKS.
//
// TRUTH RULE (owner): every claim here already exists on the live site.
// Sources are noted per line:
//   [GC]  /golf-club-management-software (GolfClubContent.tsx, content.ts, faqs.ts)
//   [GCF] /golf-club-management-software/features (FeaturesContent.tsx, content.ts)
//   [CRM] /construction-crm (construction-crm/content.ts, incl. its FAQ)
//   [AAI] https://www.ardnai.com and /pricing (Ardn CRM's product site)
// No prices, no client names, no invented numbers.

export type LandingHook = {
  slug: string;
  /** Browser tab title. */
  title: string;
  /** Meta description (the page is noindex; this is for link previews). */
  description: string;
  eyebrow: string;
  headline: string;
  /** Shorter headline for phones, so the form starts above the fold. */
  mobileHeadline: string;
  subhead: string;
  /** Overrides the funnel's default proof bullets when set. */
  proof?: string[];
};

// ── Club Steward ───────────────────────────────────────────────────────────

export const CLUB_HOOKS: LandingHook[] = [
  {
    // "golf club management software", "club management software"
    slug: "club-steward",
    title: "Golf Club Management Software | Club Steward",
    description: "Club Steward runs a golf and country club operation on one platform and one member record. Book a 30-minute walkthrough.",
    eyebrow: "Club Steward · Golf & country club management software", // [GC] hero eyebrow
    headline: "Every club, every outlet, one member record", // [GC] STATS "member record shared by every module and every club"; [GC] POS "a register for every outlet"
    mobileHeadline: "Every club, one member record",
    // [GC] lede "from the first website visit to the 18th green"; apps from [GC] MODULES
    subhead:
      "Club Steward runs a golf and country club operation on one platform, from the first website visit to the 18th green: membership sales, the tee sheet, events, point of sale, dues and the member app.",
  },
  {
    // "country club management software"
    slug: "country-club-software",
    title: "Country Club Management Software | Club Steward",
    description: "Club Steward: membership sales, dues, events, dining point of sale and a members app on one member record. Book a 30-minute walkthrough.",
    eyebrow: "Club Steward · Golf & country club management software", // [GC]
    headline: "Run the whole country club on one platform", // [GC] video "Club Steward: run the whole club on one platform"
    mobileHeadline: "Run the whole club on one platform",
    // [GC] MODULES short lines: Membership Sales, Billing & Dues, Events & Catering, Point of Sale, Members App
    subhead:
      "Membership sales with e-signed contracts, dues on card and ACH autopay, events and catering, a register for every outlet and a members app in the club's own brand, all on one member record.",
  },
  {
    // "golf course management software", "golf tee sheet software", "golf course pos"
    slug: "golf-course-software",
    title: "Golf Course Management Software | Club Steward",
    description: "Club Steward: a full tee sheet, rate grids, the cart fleet and a register for every outlet on one platform. Book a 30-minute walkthrough.",
    eyebrow: "Club Steward · Tee sheet, carts & point of sale", // [GC] MODULES Tee-Times, Point of Sale
    headline: "Tee sheet, carts and point of sale for your golf course, on one platform",
    mobileHeadline: "Tee sheet, carts and POS in one",
    // [GCF] TOUR "Tee sheet & carts"; [GC] MODULES Point of Sale
    subhead:
      "A day tee sheet per course with rate grids for peak, off-peak, guest, twilight, member and public, a numbered cart fleet, and a register for every outlet charged straight to the member's account.",
    proof: [
      "Revenue per available tee time, utilization and no-show rate, from the bookings themselves", // [GCF] TOUR "Golf performance"
      "Pro-shop items pre-ordered to the tee time", // [GCF] TOUR "Tee sheet & carts" points
      "Run for you as a managed service by a US-based team, with a 4-hour response SLA", // [GC] SWITCH
    ],
  },
];

// ── Ardn CRM ───────────────────────────────────────────────────────────────

// Field-service-level copy for trades the product site doesn't name (HVAC,
// landscaping, home services): ardnai.com says "Construction and real
// estate"; /construction-crm says "Construction & field service". So these
// hooks claim only the field-service features, never a trade specialism.
const SERVICE_SUBHEAD =
  "Every service request gets an SLA clock by priority and escalates automatically if it slips. A dispatch board shows crews, work orders and bookings by day and location, and quotes become jobs in one click."; // [CRM] FAQ + tour

export const CRM_HOOKS: LandingHook[] = [
  {
    // generic: "crm", "crm software", "crm without per seat pricing"
    slug: "crm",
    title: "A CRM Never Priced Per Seat | Ardn CRM",
    description: "Ardn CRM is priced by modules and locations, never per seat: pipeline, quotes, jobs, service and dispatch on one record.",
    eyebrow: "Ardn CRM",
    headline: "A CRM priced by modules and locations, never per seat", // [CRM] hero lede "Priced by modules and locations, never per seat."
    mobileHeadline: "A CRM never priced per seat",
    // [CRM] modules + FAQ "Add your whole office and every crew lead without the bill growing."
    subhead:
      "Pipeline, quotes that become jobs, a service desk on an SLA clock, dispatch and reports on one record. Add your whole office and every crew lead without the bill growing.",
  },
  {
    // "construction crm"
    slug: "construction-crm",
    title: "Construction CRM | Ardn CRM",
    description: "Ardn CRM for construction: jobs, work orders, sites, service requests and bookings on one record. Never priced per seat.",
    eyebrow: "Ardn CRM · Construction & field service", // [CRM] hero eyebrow
    headline: "From first call to finished job, on one record", // [CRM] hero title
    mobileHeadline: "First call to finished job, one record",
    // [CRM] hero lede, verbatim
    subhead:
      "A CRM built around jobs, work orders, sites, service requests and bookings for roofing, home improvement, residential and commercial general contractors, and real estate. Priced by modules and locations, never per seat.",
  },
  {
    // "roofing crm", "roofing software"
    slug: "roofing-crm",
    title: "Roofing CRM | Ardn CRM",
    description: "A roofing CRM where an accepted quote becomes the job in one click. Never priced per seat.",
    eyebrow: "Ardn CRM · Roofing", // [CRM] lede "for roofing, …"; [AAI] "We work with Roofing"
    headline: "A roofing CRM where an accepted quote becomes the job in one click", // [CRM] tour "Quotes to jobs"
    mobileHeadline: "Roofing CRM: quote to job in one click",
    // [CRM] tour "Quotes to jobs" body
    subhead:
      "Quotes are built from your own products and services, so pricing is consistent across estimators. When the customer says yes, one click creates the job with line items, site and contact already in place.",
  },
  {
    // "contractor crm", "crm for contractors"
    slug: "contractor-crm",
    title: "Contractor CRM | Ardn CRM",
    description: "A contractor CRM with room for the whole crew: priced by modules and locations, never per seat.",
    eyebrow: "Ardn CRM · Contractors",
    headline: "A contractor CRM with room for the whole crew, never priced per seat", // [CRM] promises "Room for the whole team"
    mobileHeadline: "Contractor CRM, never priced per seat",
    // [CRM] pains "Every crew lead who needs to see a job is another license"; videoLower sub
    subhead:
      "Pricing follows the modules and locations you run, not the people who log in, so every crew lead who needs to see a job can. Pipeline, quotes, jobs, service and dispatch on one record.",
  },
  {
    // "field service crm"
    slug: "field-service-crm",
    title: "Field Service CRM | Ardn CRM",
    description: "Service requests on an SLA clock, crews and work orders on one dispatch board. Never priced per seat.",
    eyebrow: "Ardn CRM · Construction & field service", // [CRM]
    headline: "Service requests on an SLA clock, crews on one dispatch board", // [CRM] promises "Service with a clock", "Dispatch everyone can see"
    mobileHeadline: "Service on the clock, crews on one board",
    subhead: SERVICE_SUBHEAD,
  },
  {
    // "field service management software", "field service software" (largest volume)
    slug: "field-service-software",
    title: "Field Service Management Software | Ardn CRM",
    description: "Service requests, work orders and dispatch on the same record as the customer and the job. Never priced per seat.",
    eyebrow: "Ardn CRM · Construction & field service", // [CRM]
    headline: "Service requests, work orders and dispatch on the same record as the job", // [CRM] modules "Jobs & work orders", "Service desk", "Dispatch & bookings"
    mobileHeadline: "Service, work orders and dispatch in one",
    subhead: SERVICE_SUBHEAD,
  },
  {
    // "hvac crm", "hvac software" — field-service claims only (see above)
    slug: "hvac-crm",
    title: "Field Service CRM | Ardn CRM",
    description: "Service requests on an SLA clock and crews on one dispatch board, priced by modules and locations, never per seat.",
    eyebrow: "Ardn CRM · Field service", // [CRM] "Construction & field service"
    headline: "Service requests on an SLA clock, crews on one dispatch board", // [CRM] tour "Service desk", "Dispatch"
    mobileHeadline: "Service on the clock, crews on one board",
    subhead: SERVICE_SUBHEAD,
  },
  {
    // "landscaping crm", "landscaping software" — field-service claims only
    slug: "landscaping-crm",
    title: "Field Service CRM | Ardn CRM",
    description: "Quotes that become jobs in one click and crews on one dispatch board, never priced per seat.",
    eyebrow: "Ardn CRM · Field service", // [CRM]
    headline: "Quotes that become jobs, and every crew on one dispatch board", // [CRM] promises
    mobileHeadline: "Quote to job, crews on one board",
    // [CRM] tour "Quotes to jobs" + "Dispatch"
    subhead:
      "Quotes built from your own products and services turn into jobs in one click. A dispatch board shows crews, work orders and bookings by day and location, so the office knows who is where without a phone call.",
  },
  {
    // "home services crm", "home service software" — field-service + home improvement claims only
    slug: "home-services-crm",
    title: "Home Improvement & Service CRM | Ardn CRM",
    description: "Quotes, jobs and service calls on one record for home improvement and field service teams. Never priced per seat.",
    eyebrow: "Ardn CRM · Home improvement & field service", // [CRM] lede "home improvement"; eyebrow "field service"
    headline: "Quotes, jobs and service calls, on one record", // [CRM] promises "The customer, the site, the quote, the job and the service call are one story."
    mobileHeadline: "Quotes, jobs and service, one record",
    // [CRM] promises sub + modules
    subhead:
      "The customer, the site, the quote, the job and the service call stay together, so the office and the field work from the same facts. Priced by modules and locations, never per seat.",
  },
];
