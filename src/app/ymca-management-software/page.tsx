import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// VERTICAL page for the YMCA / community-nonprofit wedge of Ardn Membership
// Management. This page OWNS the "YMCA management software" / "YMCA membership
// software" / "Daxko alternative" keyword set — /membership-management (the
// general product page) deliberately cedes those terms to avoid cannibalization.
//
// Positioning is evidence-led, verified against the product KT docs (2026-07):
// - The wedge: the incumbent Y platform (Daxko) prices as a PERCENTAGE OF THE
//   ORGANIZATION'S TOTAL REVENUE per its own public Billing FAQ, with a
//   single integrated payment processor. We sell the opposite: flat monthly
//   fee, your own Stripe merchant account, your data.
// - The unmatched demo: a member and a donor are the SAME RECORD. Ys running
//   Daxko for operations + Raiser's Edge for fundraising reconcile the two by
//   hand; our fundraising module (pledges, gift batches with control totals,
//   tiered acknowledgments, major-gift pipeline, grants, soft credits) is the
//   deepest part of the build.
// - Offer (owner-approved 2026-08-24): free pilot sandbox in the Y's own
//   branding + money-back guarantee. Deliberately NOT promised: free data
//   migration, month-to-month contract.
// - Truth guardrails: no claims of POS/day passes, childcare compliance,
//   dunning/returned drafts, SilverSneakers, SMS, Nationwide reciprocity,
//   GL export, mobile app, or production customers.
// - $699/mo anchor: carried over from prior site copy; confirm before launch.
// All screenshots are real product UI from the seeded multi-branch demo
// association (synthetic data only).
export const metadata: Metadata = {
  title: "YMCA Management Software | Ardn",
  description:
    "Membership, programs, check-in, and fundraising for multi-branch YMCAs in one platform — flat monthly fee, never a percentage of your revenue. Free pilot in your Y's branding.",
  keywords: [
    "YMCA management software",
    "YMCA membership software",
    "Daxko alternative",
    "Daxko Operations alternative",
    "YMCA software",
    "community center management software",
    "JCC management software",
    "nonprofit membership software",
    "YMCA fundraising software",
    "membership and donor management in one system",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/ymca-management-software",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ymca-management-software",
      "x-default": "https://ardncloudsolutions.com/ymca-management-software",
    },
  },
  openGraph: {
    title: "YMCA Management Software — Members & Donors in One System | Ardn",
    description:
      "One platform for multi-branch YMCAs: membership, billing, check-in, programs, and a full fundraising CRM. Flat monthly fee — never a percentage of your revenue.",
    url: "https://ardncloudsolutions.com/ymca-management-software",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/membership/ops-overview.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Membership Management operations dashboard for a multi-branch YMCA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YMCA Management Software | Ardn",
    description:
      "Membership, programs, check-in, and fundraising for multi-branch YMCAs — flat monthly fee, never a percentage of your revenue.",
    images: ["/images/membership/ops-overview.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What does the free pilot actually look like?",
    a: "We stand up a private sandbox of the platform themed to your Y — our provisioning tool reads your public website and applies your logo, colors, and fonts automatically. You get your branches, your membership plan structure, and demo people to click through, so your front desk, membership director, and development office can each try their own workspace before anyone signs anything. There is no charge and no obligation for the pilot.",
  },
  {
    q: "How is this priced?",
    a: "A flat monthly subscription for your whole association — starting around $699/month depending on branches and modules — with a fixed quote in writing before you commit. It is never a percentage of your organization's revenue, and payments run through your own Stripe merchant account, so your processing relationship belongs to you, not to your software vendor. For most associations that puts the annual cost inside the range an executive director can approve without a full RFP cycle.",
  },
  {
    q: "What is the money-back guarantee?",
    a: "If the platform isn't working for your team in the first months after go-live, we refund your subscription fees for that period. Exact terms are written into your agreement before you sign — we'd rather put the risk on us than ask a nonprofit board to take it on faith.",
  },
  {
    q: "We budget on a July–June fiscal year. When should we start looking?",
    a: "Most Ys approve next year's budget in late spring, which makes February–May the natural evaluation window for a July start. But because the pilot is free and the fee is flat, many teams start the pilot earlier and simply hold go-live until the new fiscal year. We'll match your timeline either way.",
  },
  {
    q: "Do we have to leave Raiser's Edge or our accounting system?",
    a: "No. The platform has its own full fundraising CRM — campaigns, pledges, gift batches, acknowledgments, grants, major-gift pipeline — but it also connects to Blackbaud Raiser's Edge NXT for constituent sync if your development office keeps it, and the integration store includes QuickBooks Online, Mailchimp, HubSpot, and more. You choose what stays.",
  },
  {
    q: "Who owns our data?",
    a: "You do, unambiguously. Every record lives in your tenant, exportable to CSV from the app, and we'll never charge you a fee to take your own data with you. Tenant isolation is enforced at the database layer with row-level security, so your association's data is structurally separated from anyone else's.",
  },
  {
    q: "Does it cover everything our current system does on day one?",
    a: "The core is deep: membership lifecycle and billing, households and split billing, front-desk check-in, programs, classes and camps registration with waitlists, events and volunteers, forms, workflow automation, reporting, a branded member portal — and a fundraising suite that goes beyond what Y operations platforms offer. If your association depends on something outside that core, we scope it explicitly during the pilot so there are no surprises at go-live. That honesty is the point of the pilot.",
  },
];

const MODULES = [
  {
    title: "Membership & billing",
    body: "Plans with versioned pricing, households, split billing between payers, mid-term plan changes with automatic proration, financial-assistance rates applied at every charge point.",
  },
  {
    title: "Front-desk check-in",
    body: "One scan screen for barcodes, guest passes, and name lookup — with photo, membership status, and every valid destination (facility, class, program, volunteer shift) in a single popup.",
  },
  {
    title: "Programs, classes & camps",
    body: "Catalog with per-branch pricing, capacity and waitlists with automatic promotion, rosters and attendance, recurring class schedules, personal-training appointments, session packages.",
  },
  {
    title: "Fundraising CRM",
    body: "Campaigns, donations, multi-year pledges, gift batches keyed against control totals, tiered acknowledgments, soft credits, tributes, grants with deliverables, and a weighted major-gift pipeline.",
  },
  {
    title: "Marketing, forms & workflows",
    body: "Contact CRM with activity timelines, segmented lists, email campaigns, multi-page forms with conditional logic, and if-this-then-that automation your staff configure without code.",
  },
  {
    title: "Reporting & dashboards",
    body: "Certified datasets, a saved-report builder with charts, revenue rollups by branch and region, and role-scoped KPIs — the answers your board asks for, without a SQL developer.",
  },
];

export default function YmcaManagementSoftwarePage() {
  const url = "https://ardncloudsolutions.com/ymca-management-software";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Ardn Membership Management for YMCAs",
        serviceType: "YMCA management software",
        description:
          "All-in-one membership, billing, check-in, program, and fundraising platform for multi-branch YMCAs, JCCs, and community centers, priced as a flat monthly fee.",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        audience: {
          "@type": "Audience",
          audienceType:
            "YMCA associations, JCCs, Boys & Girls Clubs, community centers",
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://ardncloudsolutions.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Membership Management",
            item: "https://ardncloudsolutions.com/membership-management",
          },
          { "@type": "ListItem", position: 3, name: "YMCA Management Software", item: url },
        ],
      },
    ],
  };

  const shotFrame: React.CSSProperties = {
    width: "100%",
    height: "auto",
    borderRadius: "var(--r-lg)",
    border: "1px solid var(--line-2)",
    boxShadow: "var(--shadow-lg)",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="ardn-page">
        {/* HERO — persona-named, personal-stake headline; real product UI above the fold */}
        <section className="hero-editorial">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">YMCA Management Software</span>
                <h1 className="display reveal">
                  Membership software your front desk won&apos;t fight —{" "}
                  <em>and your board can approve.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most Ys run one system for members and another for donors, pay
                  their software vendor a percentage of everything the Y earns,
                  and ask part-time front-desk staff to wrestle click-heavy
                  screens at peak hours. Ardn Membership Management is the other
                  way: membership, billing, check-in, programs, and a full
                  fundraising CRM in one platform, for one flat monthly fee —
                  and you can try it in your own branding before you sign.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "22px",
                  }}
                >
                  <span className="badge">Members &amp; donors — one record</span>
                  <span className="badge is-emerald">
                    Flat fee — never a % of your revenue
                  </span>
                  <span className="badge is-canvas">Built for multi-branch Ys</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link
                    href={CALENDLY}
                    target="_blank"
                    className="btn btn-primary btn-lg btn-arrow"
                  >
                    Book a 15-minute demo
                  </Link>
                  <Link href="#tour" className="btn btn-secondary btn-lg">
                    See the product first →
                  </Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "16px" }}>
                  <Image
                    src="/images/membership/ops-overview.webp"
                    alt="Operations dashboard for a multi-branch YMCA — active members, revenue by branch, donations, and check-ins in one live view"
                    width={1920}
                    height={1200}
                    priority
                    style={shotFrame}
                  />
                  <p
                    className="body"
                    style={{
                      marginTop: "14px",
                      paddingTop: "14px",
                      borderTop: "1px solid #eceef5",
                      fontWeight: 600,
                      color: "var(--indigo)",
                    }}
                  >
                    🎁 See it in your own branding — we&apos;ll stand up a free
                    pilot themed to your Y, no signature required.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* RISK REVERSAL — replaces the customer-logo bar */}
        <section className="section-tight section">
          <div className="container">
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Free pilot, in your branding</h3>
                <p className="body">
                  Before you sign anything, we provision a private sandbox
                  themed to your Y — your logo, your colors, your branch
                  structure — so every director can try their own workspace.
                </p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Money-back guarantee</h3>
                <p className="body">
                  If it isn&apos;t working for your team after go-live, we
                  refund the subscription for that period. The terms go in
                  writing before you commit — the risk sits with us.
                </p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Flat fee. Your Stripe account.</h3>
                <p className="body">
                  One flat monthly subscription — never a percentage of your
                  organization&apos;s revenue. Member and donor payments settle
                  into your own Stripe merchant account, not ours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM — built from documented incumbent pain, stated factually */}
        <section className="section is-canvas" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The problem</span>
                <h2 className="h1 mt-3">
                  The way Y software is sold today <em>works against the Y.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  None of this is your team&apos;s fault. It&apos;s the standard
                  operating model of legacy Y platforms — and every piece of it
                  is a choice a vendor made.
                </p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">A cut of your mission&apos;s growth</h3>
                <p className="body">
                  The dominant Y platform&apos;s own billing FAQ describes fees
                  as a percentage of the organization&apos;s total revenue,
                  drafted from your bank account — so every campaign your team
                  wins raises your software bill with it.
                </p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Two systems, one truth — reconciled by hand</h3>
                <p className="body">
                  Operations lives in one platform, donors in another. The same
                  family shows up in both, and someone in your business office
                  spends real hours every month making the two agree.
                </p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Screens built for the vendor, not the desk</h3>
                <p className="body">
                  Public reviews of incumbent Y systems repeat the same themes:
                  excessive clicks and re-entry, lag at peak hours, reports
                  staff can&apos;t find. Your front desk is mostly part-time —
                  the software should carry them, not test them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE ONE-RECORD DIFFERENTIATOR */}
        <section className="section" id="one-record">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">The difference</span>
                <h2 className="h1 mt-3">
                  A member and a donor are <em>the same record.</em>
                </h2>
                <p className="body mt-4">
                  The parent who pays for swim lessons, volunteers at the gala,
                  and gives $500 to the annual campaign is one person. In a Y
                  running separate operations and fundraising systems,
                  she&apos;s three database rows that never meet. Here she is
                  one record — her memberships, registrations, check-ins,
                  gifts, pledges, and volunteer hours on one timeline your
                  membership team and your development office both see.
                </p>
                <p className="body mt-4">
                  That&apos;s the demo neither an operations-only platform nor
                  a fundraising-only CRM can give — and it&apos;s why the
                  fundraising side here isn&apos;t a bolt-on: campaigns,
                  multi-year pledges, gift batches keyed against control
                  totals, tiered acknowledgments, soft credits, tributes,
                  grants, and a weighted major-gift pipeline.
                </p>
              </div>
              <div>
                <Image
                  src="/images/membership/gift-pipeline.webp"
                  alt="Major-gift opportunities pipeline with weighted portfolio value, cultivation stages, and ask amounts"
                  width={1920}
                  height={1200}
                  style={shotFrame}
                />
                <p
                  className="small"
                  style={{ marginTop: "10px", color: "var(--slate-2)" }}
                >
                  The development office&apos;s major-gift pipeline — weighted
                  portfolio value, cultivation stages, and asks — inside the
                  same platform the front desk uses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT TOUR — real UI, captioned; the emotional "oh wow" section */}
        <section className="section is-canvas" id="tour">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">See it, don&apos;t take our word</span>
                <h2 className="h1 mt-3">
                  The real product, <em>doing real Y work.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Every screenshot below is the actual platform running a
                  multi-branch demo association — not a mockup. This is what
                  your team would live in.
                </p>
              </div>
            </div>

            <div className="split mt-6">
              <div>
                <span className="eyebrow">Front desk</span>
                <h3 className="h2 mt-2">
                  Arrivals in seconds, <em>not clicks.</em>
                </h3>
                <p className="body mt-3">
                  One scan screen handles barcodes, guest passes, and name
                  lookup. Staff see the member&apos;s photo, status, and every
                  valid destination — facility, the class starting now,
                  today&apos;s program, a volunteer shift — plus a live
                  who&apos;s-in-the-building roster for emergency headcounts.
                </p>
              </div>
              <div>
                <Image
                  src="/images/membership/front-desk-checkin.webp"
                  alt="Front-desk check-in screen with barcode scan, today's schedule, and a live in-building roster"
                  width={1920}
                  height={1200}
                  style={shotFrame}
                />
              </div>
            </div>

            <div className="split mt-7">
              <div>
                <Image
                  src="/images/membership/membership-plans.webp"
                  alt="Membership plan catalog with per-branch pricing, discount variants, financial assistance, and locked historical pricing"
                  width={1920}
                  height={1200}
                  style={shotFrame}
                />
              </div>
              <div>
                <span className="eyebrow">Membership &amp; billing</span>
                <h3 className="h2 mt-2">
                  Real Y pricing, <em>without the spreadsheet.</em>
                </h3>
                <p className="body mt-3">
                  Family, age-banded, and per-branch plans with versioned
                  pricing — existing members keep the rate they enrolled at
                  when you raise prices. Households, split billing between
                  payers, mid-term plan changes with automatic proration, and
                  financial-assistance rates that follow the member to every
                  charge point.
                </p>
              </div>
            </div>

            <div className="split mt-7">
              <div>
                <span className="eyebrow">Reporting</span>
                <h3 className="h2 mt-2">
                  Board answers <em>without a SQL developer.</em>
                </h3>
                <p className="body mt-3">
                  Certified datasets, a saved-report builder with charts,
                  dashboards, and revenue rollups by branch and region.
                  Attendance by program, donations by campaign, check-in volume
                  by branch — the questions your board actually asks, answered
                  by the person they ask.
                </p>
              </div>
              <div>
                <Image
                  src="/images/membership/reporting.webp"
                  alt="Reports and analytics library with attendance, donations, and check-in volume reports"
                  width={1920}
                  height={1200}
                  style={shotFrame}
                />
              </div>
            </div>

            <div className="split mt-7">
              <div>
                <Image
                  src="/images/membership/member-portal.webp"
                  alt="Branded public member portal with membership join, program browsing, and camp registration"
                  width={1920}
                  height={1200}
                  style={shotFrame}
                />
              </div>
              <div>
                <span className="eyebrow">Member portal</span>
                <h3 className="h2 mt-2">
                  Your brand, <em>not ours.</em>
                </h3>
                <p className="body mt-3">
                  Members join, register for programs and camps, book trainers,
                  give, RSVP, and sign waivers on a portal that carries your
                  Y&apos;s logo, colors, and voice. Theming is applied per
                  tenant at provisioning — our tool reads your existing website
                  and matches it, usually in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FULL MODULE GRID */}
        <section className="section" id="modules">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">One platform, every workspace</span>
                <h2 className="h1 mt-3">
                  Everything the association runs on, <em>in one login.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Five permission-gated workspaces — Operations, Fundraising,
                  Marketing &amp; Revenue, and Administration — each showing a
                  person exactly what their job needs and nothing it
                  doesn&apos;t.
                </p>
              </div>
            </div>
            <div className="grid-3">
              {MODULES.map((m, i) => (
                <div className="card" key={m.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{m.title}</h3>
                  <p className="body">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROLES + SECURITY — the "built for a real Y workforce" argument */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Built for a real Y workforce</span>
                <h2 className="h1 mt-3">
                  From executive director <em>to lifeguard.</em>
                </h2>
                <p className="body mt-4">
                  A Y runs on a handful of full-time power users and hundreds
                  of part-timers who need one narrow screen. The platform ships
                  with roles modeled on the jobs a Y actually hires — front
                  desk, membership director, aquatics director, camp director,
                  development director, finance, HR, volunteer coordinator —
                  each seeing exactly their slice, scoped to their branch.
                </p>
                <p className="body mt-4">
                  Separation of duties is built in: the front desk can charge
                  but never refund, finance can refund but every action lands
                  in a tenant audit log, and a development officer never sees
                  another officer&apos;s pipeline.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <span className="n">1</span>
                    <div>
                    <h4>Isolation enforced in the database</h4>
                    <p>
                      Your association&apos;s data is separated with Postgres
                      row-level security — the application literally cannot
                      query across tenants, even if it tried.
                    </p>
                    </div>
                  </li>
                  <li>
                    <span className="n">2</span>
                    <div>
                    <h4>MFA, audit log, least privilege</h4>
                    <p>
                      Staff sign-in supports TOTP multi-factor, every sensitive
                      action is logged per tenant, and permissions are granted
                      by role and branch — never all-or-nothing.
                    </p>
                    </div>
                  </li>
                  <li>
                    <span className="n">3</span>
                    <div>
                    <h4>Money handled like money</h4>
                    <p>
                      Integer-cent accounting end to end, idempotent
                      Stripe-verified webhooks, immutable posted gift batches,
                      and refunds locked behind finance-only permissions.
                    </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* HOW SWITCHING WORKS */}
        <section className="section" id="how">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">How it works</span>
                <h2 className="h1 mt-3">
                  Three steps, <em>zero leaps of faith.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Y platform switches fail on surprise, not software. The pilot
                  exists so every stakeholder — front desk to board — has seen
                  their own workflow before anyone commits.
                </p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">A 15-minute demo</h3>
                <p className="body">
                  We walk your leadership through the platform on a live
                  multi-branch demo association — membership, front desk,
                  fundraising, reporting — and map it to how your Y runs today.
                </p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">A free pilot in your branding</h3>
                <p className="body">
                  We provision your private sandbox — your logo, colors,
                  branches, and plan structure — and hand logins to each
                  director. They try their own workspace on their own time.
                </p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Guided go-live, guaranteed</h3>
                <p className="body">
                  When your team says yes, we plan the cutover around your
                  program calendar, train your staff role by role, and back the
                  go-live with a written money-back guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING ANCHOR */}
        <section className="section is-canvas" id="pricing">
          <div className="container container-narrow" style={{ textAlign: "center" }}>
            <span className="eyebrow">Pricing</span>
            <h2 className="h1 mt-3">
              Flat. Predictable. <em>Board-approvable.</em>
            </h2>
            <p className="lede mx-auto mt-4">
              One flat monthly subscription for the whole association —
              starting around <strong>$699/month</strong>, sized by branches
              and modules, with a fixed quote in writing before you commit.
              Never a percentage of your revenue. Never a per-member tax on
              growth. Payments settle in your own Stripe account.
            </p>
            <p className="body mt-4" style={{ color: "var(--slate-2)" }}>
              For most associations that&apos;s inside the range an executive
              director can approve without a full RFP — and we&apos;ll give you
              a board-ready summary of the numbers to make that conversation
              easy.
            </p>
            <div className="hero-ctas mt-5" style={{ justifyContent: "center" }}>
              <Link
                href={CALENDLY}
                target="_blank"
                className="btn btn-primary btn-lg btn-arrow"
              >
                Get your fixed quote
              </Link>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section-tight section">
          <div className="container">
            <div
              style={{
                textAlign: "center",
                display: "flex",
                gap: "24px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/membership-management" className="link">
                The full Membership Management platform →
              </Link>
              <Link href="/ai-for-membership-organizations" className="link">
                AI for membership organizations →
              </Link>
              <Link href="/our-products" className="link">
                Explore the Ardn product suite →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section is-canvas" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">
                  Questions Ys <em>actually ask.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  The pilot, pricing, budget timing, data ownership, and what
                  happens if it doesn&apos;t work out.
                </p>
              </div>
            </div>
            <div style={{ display: "grid", gap: "14px", marginTop: "32px" }}>
              {FAQS.map((faq) => (
                <details key={faq.q} className="card" style={{ padding: "22px 26px" }}>
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#14142B",
                    }}
                  >
                    {faq.q}
                  </summary>
                  <p
                    style={{
                      marginTop: "14px",
                      color: "#475467",
                      fontSize: "16px",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <LeadForm
          source="YMCA Management Software page"
          heading="Start with a free pilot in your Y's branding"
          sub="Tell us about your association — branches, current system, what hurts most. We'll reply within 4 business hours with pilot next steps and a fixed quote."
          submitLabel="Request my free pilot"
        />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Your mission grows. <em>Your software bill shouldn&apos;t.</em>
              </h2>
              <p className="lede">
                Book a 15-minute demo. If it looks right, we&apos;ll stand up a
                free pilot in your Y&apos;s branding — and you decide with your
                whole team, on your timeline.
              </p>
              <div className="hero-ctas">
                <a
                  href={CALENDLY}
                  target="_blank"
                  className="btn btn-on-dark btn-lg btn-arrow"
                >
                  Book a 15-minute demo
                </a>
                <Link href="#tour" className="btn btn-outline-light btn-lg">
                  See the product again
                </Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link
                  href="/membership-management"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    textDecoration: "underline",
                  }}
                >
                  Not a Y? See the full membership platform →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
