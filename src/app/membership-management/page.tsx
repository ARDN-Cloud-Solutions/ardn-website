import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// CANONICAL product page for Ardn Membership Management — rebuilt 2026-08 on
// the current landing-page skeleton (reduce-crm-licensing-costs pattern):
// server component, real product screenshots, LeadForm, risk-reversal strip.
//
// Positioning: Category 2 — AI-built, CRM-agnostic, all-in-one membership
// platform for community centers, gyms, studios, clubs, and associations.
// Salesforce/HubSpot remain integration targets only (SEO intent), never
// "Salesforce-native".
//
// Keyword split (deliberate, 2026-08): this page OWNS "membership management
// software/platform", gym/studio/club terms. It CEDES all YMCA terms to
// /ymca-management-software — do not re-add "YMCA membership software" here.
//
// Offer (owner-approved 2026-08-24): free pilot sandbox in the org's branding
// + money-back guarantee. NOT promised: free migration, month-to-month terms.
// Pricing (owner decision 2026-08-24): general page holds the $699/mo anchor;
// the YMCA page carries the $9,000/mo + $9,500 partnership pricing.
// Guarantee: 60-day go-live money-back, subscription fees only.
// Truth guardrails: no POS/day-pass, childcare-compliance, dunning, SMS, or
// mobile-app claims. Screenshots are real product UI on a seeded demo tenant.
export const metadata: Metadata = {
  title: "Membership Management Platform for Gyms & Clubs | Ardn",
  description:
    "One platform for memberships, recurring billing, classes, events, fundraising, and a branded member portal — flat monthly fee. Try a free pilot in your branding.",
  keywords: [
    "membership management software",
    "membership management platform",
    "gym membership management",
    "studio membership software",
    "club membership platform",
    "community center software",
    "recurring billing membership",
    "membership portal",
    "Mindbody alternative",
    "Salesforce membership management",
    "Salesforce membership integration",
    "Ardn Membership Management",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/membership-management",
    languages: {
      "en-US": "https://ardncloudsolutions.com/membership-management",
      "x-default": "https://ardncloudsolutions.com/membership-management",
    },
  },
  openGraph: {
    title: "Membership Management — One Platform, One Flat Fee | Ardn",
    description:
      "Memberships, billing, classes, events, fundraising, and a branded member portal in one system. Flat monthly fee — try a free pilot in your branding.",
    url: "https://ardncloudsolutions.com/membership-management",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/membership/membership-plans.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Membership Management plan catalog with versioned pricing and per-location plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Management Platform | Ardn",
    description:
      "Memberships, billing, classes, events, fundraising, and a branded member portal — one platform, one flat monthly fee.",
    images: ["/images/membership/membership-plans.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Who is Ardn Membership Management for?",
    a: "Membership organizations that have outgrown spreadsheets and point tools: community centers, gyms and fitness studios, swim schools, sports clubs, associations, and multi-location nonprofits. If your organization is a YMCA, JCC, or Boys & Girls Club, we built a dedicated page for you — see YMCA management software — but it's the same platform underneath.",
  },
  {
    q: "What does the free pilot look like?",
    a: "We provision a private sandbox themed to your organization — our tooling reads your public website and applies your logo, colors, and fonts automatically — loaded with your locations and plan structure plus demo people to click through. Your team explores their own workspaces before you sign anything. No charge, no obligation.",
  },
  {
    q: "How is it priced?",
    a: "One flat monthly subscription — starting around $699/month depending on locations and modules — with a fixed written quote before you commit. There are no per-member fees, no per-seat fees, and no commission on bookings or sales made through your portal. Payments run through Payment Cloud into your own merchant account, so your processing relationship and your money stay yours.",
  },
  {
    q: "What is the money-back guarantee?",
    a: "If the platform isn't working for your team, cancel within 60 days of go-live and we refund the subscription fees paid for that period. It excludes third-party costs such as payment processing, and the exact terms are written into your agreement before you sign.",
  },
  {
    q: "Does it integrate with the tools we already run?",
    a: "Yes. Payment Cloud (NMI) powers payments into your own merchant account; email connects through SendGrid, Postmark, Resend, or Mailchimp; Google Analytics is built in; and the integration store includes HubSpot, QuickBooks Online, Google Calendar, Zoom, Blackbaud Raiser's Edge NXT, and more. Each connection is configured per organization with credentials stored encrypted — the platform is CRM-agnostic by design, so Salesforce and HubSpot stay systems you connect to, not systems you're locked into.",
  },
  {
    q: "What are the contract terms?",
    a: "The standard agreement is a 12-month term with annual increases capped at CPI (maximum 4%) — no surprise renewal hikes. Prefer not to commit? A month-to-month option is available at a higher monthly rate. Either way, the 60-day go-live guarantee applies: if it isn't working in the first 60 days after go-live, you can exit with your subscription fees for that period refunded.",
  },
  {
    q: "Who owns our data?",
    a: "You do. Every record lives in your own tenant, isolated at the database layer with Postgres row-level security, and exports to CSV from the app. We will never charge an exit fee for your own data.",
  },
  {
    q: "How is this different from Mindbody or other studio software?",
    a: "Three ways. Price structure: a flat monthly fee instead of per-location tiers plus marketplace commissions on your own customers. Scope: fundraising, volunteers, events, forms, and workflow automation are part of the platform, not missing or extra. Ownership: your branding on the portal, your own merchant account for the money, your data exportable any time.",
  },
];

const MODULES = [
  {
    title: "Memberships & recurring billing",
    body: "Versioned plans with per-location pricing, households and split billing, mid-term plan changes with automatic proration, saved cards, autopay, and finance-only refunds.",
  },
  {
    title: "Classes, programs & appointments",
    body: "Recurring class schedules, program sessions with capacity and self-promoting waitlists, rosters and attendance, personal-training appointments, and prepaid session packages.",
  },
  {
    title: "Branded member portal",
    body: "Members join, book, register, give, and manage payment methods on a portal carrying your logo, colors, and voice — guest checkout included, no app download required.",
  },
  {
    title: "Front-desk check-in",
    body: "One scan screen for barcodes, guest passes, and name lookup, with a live who's-in-the-building roster and one-step walk-in registration.",
  },
  {
    title: "Events, volunteers & fundraising",
    body: "Public event pages with RSVP, volunteer opportunities with shifts and hour logging, and a full giving suite — campaigns, donations, pledges, and acknowledgments.",
  },
  {
    title: "Marketing, forms & workflows",
    body: "A contact CRM with timelines, segmented lists, email campaigns, multi-page forms with conditional logic, and no-code automation triggered by real events.",
  },
  {
    title: "Reporting & dashboards",
    body: "A saved-report builder over certified datasets, charts, dashboards, and revenue rollups by location — role-scoped so people see exactly their slice.",
  },
  {
    title: "Roles & permissions",
    body: "Granular staff roles scoped by location, separation of duties on money, TOTP multi-factor sign-in, and a per-tenant audit log of sensitive actions.",
  },
  {
    title: "Integration store",
    body: "Payment Cloud, SendGrid, Postmark, Resend, Mailchimp, and Google Analytics ready to connect — plus HubSpot, QuickBooks, Zoom, Raiser's Edge NXT, and a growing catalog.",
  },
];

export default function MembershipManagementPage() {
  const url = "https://ardncloudsolutions.com/membership-management";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Ardn Membership Management",
        serviceType: "Membership management software",
        description:
          "All-in-one membership platform: recurring billing, classes and programs, events, fundraising, marketing, and a branded member portal, priced as a flat monthly fee.",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        audience: {
          "@type": "Audience",
          audienceType:
            "Community centers, gyms, fitness studios, clubs, associations, nonprofits",
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
          { "@type": "ListItem", position: 2, name: "Membership Management", item: url },
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
        {/* HERO */}
        <section className="hero-editorial">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">Ardn Membership Management</span>
                <h1 className="display reveal">
                  Run your members on one platform — <em>for one flat fee.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most membership organizations run five tools that don&apos;t
                  talk: one for billing, one for classes, one for email, a
                  spreadsheet for volunteers, and a portal members hate. Ardn
                  Membership Management replaces the stack — memberships,
                  recurring billing, classes and programs, events, fundraising,
                  marketing, and a member portal in your branding — for a flat
                  monthly fee that never takes a cut of your revenue.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "22px",
                  }}
                >
                  <span className="badge">All-in-one — 9 modules</span>
                  <span className="badge is-emerald">
                    Flat fee — no per-member pricing
                  </span>
                  <span className="badge is-canvas">Your brand, your merchant account</span>
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
                    src="/images/membership/membership-plans.webp"
                    alt="Membership plan catalog with versioned pricing, discount variants, and per-location availability"
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
                    🎁 Try it in your own branding — free pilot sandbox, no
                    signature required.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar signals={["US-based team", "30+ yrs building software", "4-hour response SLA", "60-day go-live guarantee"]} />

        {/* RISK REVERSAL */}
        <section className="section-tight section">
          <div className="container">
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Free pilot, in your branding</h3>
                <p className="body">
                  Before you sign, we stand up a private sandbox with your
                  logo, colors, locations, and plan structure — so your whole
                  team can try their own workspace first.
                </p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">60-day money-back guarantee</h3>
                <p className="body">
                  If it isn&apos;t working for your team, cancel within 60
                  days of go-live and we refund the subscription fees for that
                  period — terms in writing before you commit.
                </p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">No commission, no per-member tax</h3>
                <p className="body">
                  One flat monthly fee. No per-member pricing, no per-seat
                  pricing, no marketplace commission on your own customers —
                  and payments run through Payment Cloud into your own
                  merchant account.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section is-canvas" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The problem</span>
                <h2 className="h1 mt-3">
                  The tool stack is <em>eating the margin.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Membership software pricing has drifted somewhere strange:
                  per-location tiers, per-member fees, add-ons for texting and
                  branding, and commissions on bookings you earned yourself.
                </p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Costs that scale against you</h3>
                <p className="body">
                  Per-location tiers, per-member fees, and marketplace
                  commissions mean the better you do, the more you pay — the
                  incumbent studio platforms&apos; published tiers run from $99
                  to $699+ per month per location before add-ons.
                </p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Five tools, zero shared truth</h3>
                <p className="body">
                  Billing here, classes there, email somewhere else. The same
                  member exists in every tool with a different balance, and
                  your staff are the integration layer.
                </p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Someone else&apos;s brand on your members</h3>
                <p className="body">
                  Your members book through a marketplace app that upsells them
                  your competitors, on a portal that looks like the vendor —
                  not like the organization they actually belong to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT TOUR */}
        <section className="section" id="tour">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">See it, don&apos;t take our word</span>
                <h2 className="h1 mt-3">
                  The real product, <em>not a mockup.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Every screenshot below is the actual platform running a
                  multi-location demo organization. This is what your team
                  would live in every day.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <span className="eyebrow">Operations</span>
              <h3 className="h2 mt-2">
                Today&apos;s numbers, <em>at a glance.</em>
              </h3>
              <p className="body mt-3" style={{ maxWidth: "760px" }}>
                Active members, revenue run-rate, new joins, donations,
                check-ins, and a 90-day forecast — live, per location, with
                quick actions for the things staff reach for most.
              </p>
              <Image
                src="/images/membership/ops-overview.webp"
                alt="Operations dashboard with active members, revenue by location, and quick actions"
                width={1920}
                height={1200}
                style={{ ...shotFrame, marginTop: "24px" }}
              />
            </div>

            <div className="mt-7">
              <span className="eyebrow">Front desk</span>
              <h3 className="h2 mt-2">
                Arrivals in seconds, <em>not clicks.</em>
              </h3>
              <p className="body mt-3" style={{ maxWidth: "760px" }}>
                Scan a barcode or type a name; staff see the member&apos;s
                photo, status, and every valid destination in one popup —
                plus a live who&apos;s-in-the-building roster and one-step
                walk-in registration.
              </p>
              <Image
                src="/images/membership/front-desk-checkin.webp"
                alt="Front-desk check-in screen with barcode scan and live in-building roster"
                width={1920}
                height={1200}
                style={{ ...shotFrame, marginTop: "24px" }}
              />
            </div>

            <div className="mt-7">
              <span className="eyebrow">Member portal</span>
              <h3 className="h2 mt-2">
                Your brand, <em>your members, your money.</em>
              </h3>
              <p className="body mt-3" style={{ maxWidth: "760px" }}>
                Members join, register, book trainers, buy session packs,
                give, and RSVP on a portal themed to your organization — our
                provisioning tool reads your website and matches your logo,
                colors, and fonts automatically.
              </p>
              <Image
                src="/images/membership/member-portal.webp"
                alt="Branded public member portal with joining, program registration, and giving"
                width={1920}
                height={1200}
                style={{ ...shotFrame, marginTop: "24px" }}
              />
            </div>

            <div className="mt-7">
              <span className="eyebrow">Reporting</span>
              <h3 className="h2 mt-2">
                Answers <em>without exports.</em>
              </h3>
              <p className="body mt-3" style={{ maxWidth: "760px" }}>
                A report builder over certified datasets — attendance by
                program, revenue by location, donations by campaign — with
                dashboards and role-scoped KPIs, so the person asked the
                question can answer it.
              </p>
              <Image
                src="/images/membership/reporting.webp"
                alt="Reports and analytics library with attendance, revenue, and donation reports"
                width={1920}
                height={1200}
                style={{ ...shotFrame, marginTop: "24px" }}
              />
            </div>
          </div>
        </section>

        {/* MODULES */}
        <section className="section is-canvas" id="features">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What&apos;s inside</span>
                <h2 className="h1 mt-3">
                  Nine modules. <em>One system of record.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Every module reads and writes the same records — a member, a
                  donor, a volunteer, and a class registrant are one person,
                  on one timeline.
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

        {/* MORE VISUALS — 2x2 screenshot grid (owner request 2026-08-24: more visuals) */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">More of the platform</span>
                <h2 className="h1 mt-3">
                  Four more screens <em>your team will live in.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Same demo organization, no mockups — programs, the class
                  calendar, giving, and the major-gift pipeline.
                </p>
              </div>
            </div>
            <div className="grid-2 mt-5">
              <div className="card" style={{ padding: "16px" }}>
                <Image
                  src="/images/membership/classes.webp"
                  alt="Weekly class calendar across locations with color-coded categories"
                  width={1920}
                  height={1200}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--r-md)", border: "1px solid var(--line-2)" }}
                />
                <p className="small mt-3" style={{ color: "var(--slate-2)" }}>
                  <strong>Classes</strong> — the whole week&apos;s schedule
                  across every location, with rosters and attendance a click
                  away.
                </p>
              </div>
              <div className="card" style={{ padding: "16px" }}>
                <Image
                  src="/images/membership/programs.webp"
                  alt="Programs catalog with leagues and clinics, member and non-member pricing, and status"
                  width={1920}
                  height={1200}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--r-md)", border: "1px solid var(--line-2)" }}
                />
                <p className="small mt-3" style={{ color: "var(--slate-2)" }}>
                  <strong>Programs</strong> — camps, leagues, and clinics with
                  member/non-member pricing, capacity, and self-promoting
                  waitlists.
                </p>
              </div>
              <div className="card" style={{ padding: "16px" }}>
                <Image
                  src="/images/membership/donations.webp"
                  alt="Donations workspace with collected totals, campaign filters, receipts, and refunds"
                  width={1920}
                  height={1200}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--r-md)", border: "1px solid var(--line-2)" }}
                />
                <p className="small mt-3" style={{ color: "var(--slate-2)" }}>
                  <strong>Giving</strong> — donations recorded, receipted, and
                  refunded by location and campaign, in the same system as
                  memberships.
                </p>
              </div>
              <div className="card" style={{ padding: "16px" }}>
                <Image
                  src="/images/membership/gift-pipeline.webp"
                  alt="Major-gift opportunities pipeline with weighted portfolio value and stages"
                  width={1920}
                  height={1200}
                  style={{ width: "100%", height: "auto", borderRadius: "var(--r-md)", border: "1px solid var(--line-2)" }}
                />
                <p className="small mt-3" style={{ color: "var(--slate-2)" }}>
                  <strong>Major gifts</strong> — a weighted cultivation
                  pipeline for the big asks, without buying a second CRM.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE / TRUST */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Under the hood</span>
                <h2 className="h1 mt-3">
                  Built like software you can <em>bet the org on.</em>
                </h2>
                <p className="body mt-4">
                  This isn&apos;t a page builder with a payments plugin.
                  It&apos;s a multi-tenant platform where isolation is enforced
                  in the database itself, money is handled with accounting
                  discipline, and every organization gets its own branded
                  portal without a rebuild.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <span className="n">1</span>
                    <div>
                    <h4>Database-level tenant isolation</h4>
                    <p>
                      Postgres row-level security separates every
                      organization&apos;s data structurally — the application
                      cannot cross tenants, even by mistake.
                    </p>
                    </div>
                  </li>
                  <li>
                    <span className="n">2</span>
                    <div>
                    <h4>Money handled like money</h4>
                    <p>
                      Integer-cent accounting, signature-verified idempotent
                      webhooks, refunds gated behind finance-only permissions,
                      and a per-tenant audit log.
                    </p>
                    </div>
                  </li>
                  <li>
                    <span className="n">3</span>
                    <div>
                    <h4>Provisioned, not implemented</h4>
                    <p>
                      New organizations are provisioned from the control plane
                      — branding applied from your website, locations and plans
                      configured — in days, not consulting quarters.
                    </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING ANCHOR */}
        <section className="section is-canvas" id="pricing">
          <div className="container container-narrow" style={{ textAlign: "center" }}>
            <span className="eyebrow">Pricing</span>
            <h2 className="h1 mt-3">
              One flat fee. <em>Every module.</em>
            </h2>
            <p className="lede mx-auto mt-4">
              A flat monthly subscription starting around{" "}
              <strong>$699/month</strong>, sized by locations and modules, with
              a fixed written quote before you commit. No per-member fees, no
              per-seat fees, no commissions — and payments run through Payment
              Cloud into your own merchant account.
            </p>
            <p className="body mt-4" style={{ color: "var(--slate-2)" }}>
              Standard agreements run 12 months with annual increases capped
              at CPI (maximum 4%) — or choose a month-to-month option at a
              higher monthly rate.
            </p>
            <p className="small mt-4" style={{ color: "var(--slate-3)" }}>
              60-day go-live guarantee: if the platform isn&apos;t working for
              your team, cancel within 60 days of go-live and we refund the
              subscription fees paid for that period. Excludes third-party
              costs such as payment processing. Full terms in your agreement.
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
              <Link href="/ymca-management-software" className="link">
                Running a YMCA, JCC, or community center? See the Y edition →
              </Link>
              <Link href="/ai-for-membership-organizations" className="link">
                AI for membership organizations →
              </Link>
              <Link href="/chapter-management-software" className="link">
                Chapter &amp; dues management →
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
                  Membership Management <em>questions.</em>
                </h2>
              </div>
              <div>
                <p className="lede">
                  Who it&apos;s for, the free pilot, pricing, integrations, and
                  data ownership.
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
          source="Membership Management page"
          heading="Start with a free pilot in your branding"
          sub="Tell us about your organization — locations, current tools, what hurts most. We'll reply within 4 business hours with pilot next steps and a fixed quote."
          submitLabel="Request my free pilot"
        />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">
                Run your members <em>without juggling tools.</em>
              </h2>
              <p className="lede">
                Book a 15-minute demo. If it looks right, we&apos;ll stand up a
                free pilot in your branding — and you decide with your whole
                team, on your timeline.
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
                  href="/ymca-management-software"
                  style={{
                    color: "rgba(255,255,255,0.78)",
                    textDecoration: "underline",
                  }}
                >
                  Running a YMCA or community nonprofit? Start here instead →
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
