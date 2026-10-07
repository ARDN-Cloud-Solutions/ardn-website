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
    { file: "tee-sheet.webp", title: "Tee sheet", alt: "Day tee sheet for a course with booked groups and open times" },
    { file: "cart-sheet.webp", title: "Cart sheet", alt: "Cart sheet with numbered carts and assigned riders" },
    {
      file: "golf-performance.webp",
      title: "Golf performance",
      alt: "Golf performance dashboard with utilization, average ticket, revenue per available tee time, rounds, no-show rate and an occupancy calendar",
    },
  ],
  pos: [
    {
      file: "pro-shop-tee-time.webp",
      title: "Pro shop: ready at your tee time",
      alt: "Club online pro shop section 'Ready at your tee time' with golf balls, range balls and a leather glove to pre-order with a round",
    },
  ],
  events: [
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
      file: "accounting-overview.webp",
      title: "Each club's books",
      alt: "Accounting overview consolidated across all clubs, with revenue against budget, operating margin, cash and receivables",
    },
    {
      file: "financial-statements.webp",
      title: "Financial statements",
      alt: "Profit and loss by department with month columns against budget and prior year",
    },
  ],
  platform: [
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
