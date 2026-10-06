// Registry of the self-hosted product videos in public/videos. One entry per
// file; pages, the VideoObject JSON-LD helper and the sitemap all read from
// here so a runtime or description can never drift between them.
//
// Files are the final YouTube cuts, re-encoded for the web (H.264 high,
// 1920x1080, crf 24-27, AAC 128k, faststart) with the .vtt captions copied
// beside them and a 1920x1080 poster from the YouTube thumbnail. Durations
// come from ffprobe at encode time. No prices or customer names appear in
// any of them; screens show fictional organizations with sample data.

export type Chapter = { time: number; label: string };

export type VideoMeta = {
  /** File stem under /videos (mp4, vtt and -poster.webp share it). */
  slug: string;
  name: string;
  description: string;
  /** Length in whole seconds. */
  seconds: number;
  uploadDate: string;
  chapters: Chapter[];
};

export const VIDEOS = {
  clubStewardOverview: {
    slug: "club-steward-run-the-whole-club",
    name: "Club Steward: run the whole club on one platform",
    description:
      "A two-minute tour of Club Steward golf and country club management software: website and marketing, HR, membership sales and the members app, tee times, events and catering, point of sale, e-commerce, subscription billing and dues, member service with a chatbot, the accounting suite (preview), Active AI and security.",
    seconds: 119,
    uploadDate: "2026-10-05",
    chapters: [
      { time: 0, label: "One club, too many systems" },
      { time: 15, label: "Website & Marketing and HR" },
      { time: 31, label: "Membership Sales and Members App" },
      { time: 47, label: "Tee-Times, Events & Catering" },
      { time: 59, label: "Point of Sale, e-Commerce and Billing" },
      { time: 78, label: "Member Service with Chatbot" },
      { time: 95, label: "Active AI" },
      { time: 106, label: "Security and next steps" },
    ],
  },
  clubStewardEvents: {
    slug: "club-steward-events-catering",
    name: "Events & Catering: every event, start to finish",
    description:
      "Club Steward Events & Catering, from the first inquiry to the final invoice: room holds, instant online quotes, one club-wide menu, the host's own planning portal, kitchen prep and ordering, staffing, vendors, event day on the captain's phone, and the final bill to the member's house account.",
    seconds: 97,
    uploadDate: "2026-10-05",
    chapters: [
      { time: 0, label: "Meet Events & Catering" },
      { time: 15, label: "Booking and instant quotes" },
      { time: 35, label: "One menu and the host portal" },
      { time: 53, label: "Kitchen and staffing" },
      { time: 66, label: "Vendors and event day" },
      { time: 82, label: "Close-out and profit" },
    ],
  },
  clubStewardPos: {
    slug: "club-steward-point-of-sale",
    name: "Point of Sale: one checkout for the whole club",
    description:
      "Club Steward Point of Sale: the dining room, the bar, the pro shop and the halfway house on one checkout, charges straight to the member's account, purchases that travel with tee times and court bookings, and every charge on the member's statement the moment it is made.",
    seconds: 38,
    uploadDate: "2026-10-05",
    chapters: [
      { time: 0, label: "One checkout for every outlet" },
      { time: 13, label: "Charging members and bookings" },
      { time: 27, label: "On the statement, instantly" },
    ],
  },
  clubStewardService: {
    slug: "club-steward-member-service-hr",
    name: "Member Service & HR: every question answered, every role filled",
    description:
      "Club Steward Member Service and HR: a website assistant that answers from the club's own approved answers, live chats matched to the member record, cases with an owner and an answer-by time, a service dashboard for every team, and hiring with applicants ranked against the role while a person makes every decision.",
    seconds: 107,
    uploadDate: "2026-10-05",
    chapters: [
      { time: 0, label: "Meet Member Service & HR" },
      { time: 35, label: "Cases and member records" },
      { time: 62, label: "Ranked applicants and scorecards" },
      { time: 101, label: "Book a walkthrough" },
    ],
  },
  crmLeaveHubspot: {
    slug: "ardn-crm-leave-hubspot",
    name: "Ardn CRM: leave HubSpot, keep everything",
    description:
      "Ardn CRM for contractors and field service teams: business health at a glance, every deal by stage, quotes built from your own product list that become jobs in one click, service requests on an SLA clock with automatic escalation, lifetime value on every account, pricing by modules and locations rather than per seat, and a migration off HubSpot handled by Ardn.",
    seconds: 96,
    uploadDate: "2026-10-05",
    chapters: [
      { time: 0, label: "Since when is growing a penalty?" },
      { time: 20, label: "Meet Ardn CRM" },
      { time: 33, label: "Deals and quote to job" },
      { time: 50, label: "Service on the clock" },
      { time: 69, label: "The difference" },
      { time: 78, label: "Switching" },
    ],
  },
  crmGrowYourTeam: {
    slug: "ardn-crm-grow-your-team",
    name: "Ardn CRM: grow your team, not your CRM bill",
    description:
      "A one-minute look at Ardn CRM: every deal on one board, quotes that turn into jobs in one click, service requests on the clock with customer ratings, pricing by modules and locations so you can hire freely, and data moved off HubSpot for you.",
    seconds: 59,
    uploadDate: "2026-10-05",
    chapters: [
      { time: 0, label: "The per-seat trap" },
      { time: 14, label: "Meet Ardn CRM" },
      { time: 25, label: "Quotes and service" },
      { time: 38, label: "Hire freely" },
    ],
  },
  nonprofitOverview: {
    slug: "ardn-membership-fundraising",
    name: "Ardn Membership & Fundraising: one community, one record",
    description:
      "Ardn's membership and fundraising platform for community nonprofits: members, revenue, donations and check-ins across every branch on one screen, households with split billing, one-scan front-desk check-in, classes and waitlists members book themselves, campaigns beside membership, and board-ready numbers by branch.",
    seconds: 66,
    uploadDate: "2026-10-05",
    chapters: [
      { time: 0, label: "Two systems, one family" },
      { time: 12, label: "Every branch on one screen" },
      { time: 18, label: "Households and split billing" },
      { time: 25, label: "One-scan check-in" },
      { time: 31, label: "Programs and waitlists" },
      { time: 36, label: "Campaigns beside membership" },
      { time: 43, label: "Board-ready reporting" },
      { time: 49, label: "Your own merchant account" },
    ],
  },
  rxDrLaunch: {
    slug: "rx-dr-launch-your-own-telehealth-brand",
    name: "Rx-Dr: launch your own telehealth brand without building a medical stack",
    description:
      "Rx-Dr, the white-label telehealth platform built and launched by Ardn, on a demo brand: a branded storefront and brand setup in minutes, adaptive online intake, licensed clinician review, one-click approval with e-prescribing to partner pharmacies and status synced back, payments, memberships, subscriptions and refills on autopilot, a portal for every role, and HIPAA controls built in with audited access, break-glass and two-person approval.",
    seconds: 69,
    uploadDate: "2026-10-05",
    chapters: [
      { time: 0, label: "Launch under your own brand" },
      { time: 6, label: "Your storefront" },
      { time: 9, label: "Brand setup" },
      { time: 15, label: "Online intake" },
      { time: 18, label: "Clinician review" },
      { time: 25, label: "Approve and e-prescribe" },
      { time: 29, label: "Pharmacy status" },
      { time: 35, label: "Payments and payouts" },
      { time: 41, label: "Patient portal" },
      { time: 47, label: "Every role" },
      { time: 53, label: "HIPAA built in" },
    ],
  },
} as const satisfies Record<string, VideoMeta>;

export type VideoKey = keyof typeof VIDEOS;

export const videoSrc = (v: VideoMeta) => `/videos/${v.slug}.mp4`;
export const videoPoster = (v: VideoMeta) => `/videos/${v.slug}-poster.webp`;
export const videoCaptions = (v: VideoMeta) => `/videos/${v.slug}.vtt`;

/** Props for <ProductVideo> from a registry entry (add `page`). */
export function videoProps(v: VideoMeta) {
  return {
    src: videoSrc(v),
    poster: videoPoster(v),
    captions: videoCaptions(v),
    title: v.name,
    seconds: v.seconds,
    chapters: v.chapters,
  };
}

/** Src and poster for a silent loop clip in public/videos/loops. */
export function loopClip(name: string) {
  return { src: `/videos/loops/${name}.mp4`, poster: `/videos/loops/${name}-poster.webp` };
}

/** "1:59" style runtime for buttons and labels. */
export function runtime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** ISO 8601 duration for VideoObject.duration. */
export function isoDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `PT${m ? `${m}M` : ""}${s}S`;
}
