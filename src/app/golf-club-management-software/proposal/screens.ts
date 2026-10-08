/**
 * Real product screens for each app, shown when an app is opened on the
 * coverage grid. One app can have several, one per piece of functionality.
 * Files live in public/images/golf; `file` is the name only, so a copy of
 * this page hosted elsewhere can serve them from its own folder.
 * Every screen is rebranded: no client, real club or vendor names.
 */

/** Where the screens are served; a copy of this page elsewhere maps the folder. */
export function screenSrc(file: string) {
  return `/images/golf/${file}`;
}

export interface Screen {
  file: string;
  /** What the screen is, in a few words; shown under it. */
  title: string;
  alt: string;
}

export const SCREENS: Record<string, Screen[]> = {
  marketing: [
    {
      file: "marketing-journeys.webp",
      title: "Journeys",
      alt: "An automation builder showing a program-enrollment journey: a trigger, a welcome email, a one-day wait and a reminder email, with the clubs it runs at",
    },
    {
      file: "marketing-campaign-email.webp",
      title: "Email in the club's brand",
      alt: "An email template editor with name, team, subject and greeting beside a live preview of a tee-time booking confirmation",
    },
  ],
  service: [
    {
      file: "service-console.webp",
      title: "Service dashboard",
      alt: "A service dashboard with chat and case numbers: answered by the assistant, average wait, first-answer time, cases opened and satisfaction",
    },
    {
      file: "service-cases.webp",
      title: "Cases",
      alt: "A list of open service cases with case number, club, subject, person, team, status and priority",
    },
  ],
  people: [
    {
      file: "people-hiring.webp",
      title: "Hiring with AI match",
      alt: "A line cook job posting with 25 applicants ranked by an AI match score broken down by experience, skills, certifications and availability",
    },
    {
      file: "people-shifts.webp",
      title: "Shifts and labor cost",
      alt: "A weekly staff schedule summary: shifts, open shifts, labor cost against forecast revenue, and time-off requests waiting for approval",
    },
    {
      file: "people-payroll.webp",
      title: "Timesheets for payroll",
      alt: "Timesheets for a pay period with regular and overtime hours per employee, punch problems to fix, and approve buttons",
    },
  ],
  sales: [
    { file: "sales-pipeline.webp", title: "Sales pipeline", alt: "Membership sales pipeline with opportunities by stage" },
    {
      file: "online-join-plans.webp",
      title: "Online join",
      alt: "Six-step online join showing membership categories, what each plan includes, and director-sold plans offered after a visit with a director",
    },
    {
      file: "contracts-esign.webp",
      title: "Contracts and signing",
      alt: "Contracts list tracked through awaiting signature, awaiting countersignature and signed",
    },
  ],
  member: [
    {
      file: "member-home.webp",
      title: "Member home and card",
      alt: "Member portal home with digital membership card, plan details, benefits and quick actions",
    },
    {
      file: "member-benefits.webp",
      title: "Benefits used and left",
      alt: "Member portal showing each benefit with used, remaining and reset date, shared across the household",
    },
    {
      file: "member-billing.webp",
      title: "Member billing",
      alt: "Member portal billing page with monthly dues, autopay status, last payment and saved payment method",
    },
  ],
  golf: [
    { file: "tee-sheet.webp", title: "Tee sheet", alt: "Tee sheet of booked times for today and tomorrow across every course, with players, items, what is still owed and check-in status" },
    { file: "cart-sheet.webp", title: "Cart sheet", alt: "Cart sheet for a day with fleet counts and the groups still waiting for a cart, ready for auto-assign" },
    {
      file: "golf-performance.webp",
      title: "Golf performance",
      alt: "Golf performance dashboard with utilization, average ticket, revenue per available tee time, rounds, no-show rate and an occupancy calendar",
    },
  ],
  pos: [
    {
      file: "pos-register.webp",
      title: "Close the day",
      alt: "The register's end-of-day close for the whole club: sales, tax, tips, card fee and member charges by outlet, how it was paid, and the checks still blocking the close",
    },
    {
      file: "dining-reservations.webp",
      title: "Host stand floor plan",
      alt: "A host stand floor plan of the dining room and patio with table status, and a seated party's details in the side panel",
    },
    {
      file: "dining-menu.webp",
      title: "Tonight's menu",
      alt: "Tonight's grill room menu with prices and allergens, next to a form for adding a nightly special",
    },
    {
      file: "pro-shop-tee-time.webp",
      title: "Pro shop: ready at your tee time",
      alt: "Club online pro shop section 'Ready at your tee time' with golf balls, range balls and a leather glove to pre-order with a round",
    },
  ],
  events: [
    {
      file: "events-plan.webp",
      title: "Plan this event",
      alt: "A wedding event record showing days to the event, guests against room capacity, room holds and the planning checklist",
    },
    {
      file: "private-events.webp",
      title: "Room calendar and holds",
      alt: "Private events room calendar with first- and second-option holds",
    },
  ],
  finance: [
    {
      file: "dues-standing.webp",
      title: "Dues and standing",
      alt: "Dues and standing view showing past-due, retrying and autopay-off members",
    },
    {
      file: "books-overview.webp",
      title: "Each club's books",
      alt: "One club's books: a 12-month revenue, expense and budget chart, member account aging, and results by department",
    },
    {
      file: "books-statements.webp",
      title: "Balance sheet",
      alt: "A balance sheet as of September 30 with operating and capital columns and an in-balance check",
    },
  ],
  platform: [
    {
      file: "platform-ai-helper.webp",
      title: "Ask, the AI helper",
      alt: "The built-in AI helper answering how many active memberships the club has, with a total and a breakdown by plan",
    },
    {
      file: "corporate-dashboard.webp",
      title: "Every club side by side",
      alt: "Corporate dashboard comparing every club side by side: inquiries, new members, conversion, response times and pipeline value",
    },
    {
      file: "report-library.webp",
      title: "Report library",
      alt: "Report library with governed datasets, saved reports and scheduled delivery",
    },
    {
      file: "permissions.webp",
      title: "Who can do what",
      alt: "Who Can Do What screen showing which people hold a given permission across every club",
    },
  ],
};
