/**
 * Which self-hosted Club Steward video (public/videos) plays for each demo
 * button in a proposal, and where in it to start. Chapters come from
 * src/components/media/videos.ts.
 */
export type DemoVideo = { slug: string; start: number; name: string };

const OVERVIEW = "club-steward-run-the-whole-club";
const EVENTS = "club-steward-events-catering";
const POS = "club-steward-point-of-sale";
const SERVICE = "club-steward-member-service-hr";

const d = (slug: string, start: number, name: string): DemoVideo => ({ slug, start, name });

export const DEMO_VIDEOS: Record<string, DemoVideo> = {
  V01: d(OVERVIEW, 31, "Membership sales pipeline"),
  V02: d(OVERVIEW, 15, "Website inquiries and tours"),
  V03: d(OVERVIEW, 31, "Membership sales"),
  V04: d(OVERVIEW, 36, "Contracts signed in the platform"),
  V05: d(OVERVIEW, 59, "Billing and payments"),
  V06: d(OVERVIEW, 15, "Applications land in the pipeline"),
  V07: d(OVERVIEW, 40, "The members app"),
  V08: d(OVERVIEW, 40, "One member record"),
  V09: d(OVERVIEW, 59, "Dues and plan changes"),
  V10: d(OVERVIEW, 40, "Members and households"),
  V11: d(OVERVIEW, 40, "Benefits in the members app"),
  V12: d(OVERVIEW, 95, "Active AI: ask in plain English"),
  V13: d(OVERVIEW, 95, "Active AI and retention"),
  V14: d(OVERVIEW, 15, "Website and marketing"),
  V15: d(SERVICE, 0, "Member service with chatbot"),
  V16: d(OVERVIEW, 95, "Active AI and reporting"),
  V17: d(OVERVIEW, 59, "Subscription billing and dues"),
  V18: d(POS, 27, "Charges on the statement, instantly"),
  V19: d(OVERVIEW, 47, "Tee times, carts and the pro shop"),
  V20: d(OVERVIEW, 47, "Bookings from one member record"),
  V21: d(EVENTS, 15, "Booking events"),
  V22: d(EVENTS, 0, "Events and catering, start to finish"),
  V23: d(EVENTS, 66, "Event day on the captain's phone"),
  V24: d(POS, 0, "One checkout for every outlet"),
  V25: d(POS, 13, "Pro shop and charging members"),
  V26: d(OVERVIEW, 40, "Member card and check-in"),
  V27: d(OVERVIEW, 106, "Security and staff access"),
  V28: d(OVERVIEW, 15, "Club websites"),
  V29: d(EVENTS, 66, "Vendors and event day"),
};
