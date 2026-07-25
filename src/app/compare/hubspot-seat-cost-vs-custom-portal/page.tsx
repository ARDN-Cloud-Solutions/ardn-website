import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: mirror-spoke of /compare/salesforce-seat-cost-vs-custom-portal, aimed at
// the HubSpot seat-cost buyer ("reduce HubSpot seat costs", "HubSpot per-user
// pricing", "HubSpot Sales/Service seat cost"). HubSpot's seat-based model
// makes paid Sales/Service/Enterprise seats the pain point — free view-only
// seats already cover pure readers, so this page targets the paid seat-holders
// who only run a narrow workflow. No fabricated pricing: all HubSpot numbers
// are typical published list ranges, explicitly labeled illustrative, and the
// page points to /savings-calculator for a reader's own numbers.
export const metadata: Metadata = {
  title: "HubSpot Seat Costs vs. a Custom Portal | Ardn",
  description:
    "Paying full HubSpot Sales or Service seats for light users? See the cost math for moving them to a flat-fee custom portal — no CRM switch required.",
  keywords: [
    "reduce HubSpot seat costs",
    "HubSpot per-user pricing",
    "HubSpot Sales seat cost",
    "HubSpot Service seat cost",
    "cut HubSpot licensing costs",
    "custom portal to reduce HubSpot seats",
    "HubSpot view-only seats",
    "reduce per-seat license costs",
    "HubSpot cost reduction",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
    languages: {
      "en-US": "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
      "x-default": "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
    },
  },
  openGraph: {
    title: "HubSpot Seat Costs vs. a Custom Portal | Ardn",
    description:
      "Full HubSpot seats for light users add up fast. See the cost math for moving them to a flat-fee custom portal — no CRM switch required.",
    url: "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "HubSpot seat costs vs. a custom portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "HubSpot Seat Costs vs. a Custom Portal | Ardn",
    description:
      "Full HubSpot seats for light users add up fast. See the cost math for a flat-fee custom portal instead.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to save money?",
    a: "No. Your HubSpot stays exactly where it is, as the system of record. A custom portal sits alongside it, integrated through HubSpot's API, and gives your light users a purpose-built tool instead of a full paid seat. Your power users keep working in HubSpot exactly as they do today.",
  },
  {
    q: "Aren't HubSpot's view-only seats already free?",
    a: "Yes — and if a user only needs to read records, keep them on a free view-only seat. This page is about the users who need to do a narrow slice of work — update a deal stage, log a ticket, submit a request — and therefore get put on a paid Sales or Service seat they barely use. Those paid seats are where a flat-fee portal saves money; the free readers already cost nothing.",
  },
  {
    q: "Which HubSpot users are worth moving to a portal?",
    a: "Paid Sales or Service seat-holders with a repetitive, narrow workflow — field reps, onboarding coordinators, partners, and back-office staff who touch two or three screens but don't need the full CRM. A purpose-built portal gives them exactly that workflow, wired into HubSpot in real time, without a per-seat license each.",
  },
  {
    q: "How is this different from HubSpot's own seat tiers?",
    a: "HubSpot's Core, Sales, and Service seats still bill per user and cap what you can build for that user. A custom portal is yours outright, runs on one flat monthly fee no matter how many users you add, and is shaped to your exact workflow instead of a vendor's template.",
  },
  {
    q: "Does the portal keep our HubSpot data in sync?",
    a: "Yes. The portal reads and writes the same HubSpot records in real time through the API, so there's one source of truth — the portal is a tailored window into your HubSpot data, not a separate copy that drifts out of sync.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const costDrivers = [
  {
    title: "Paid seats get billed for partial use",
    body: "A HubSpot Sales or Service seat is priced for someone running deals or tickets all day. A user who updates one field a few times a day usually pays the same seat price anyway.",
  },
  {
    title: "Seats compound as you add tiers",
    body: "Move a team from Core to Sales or Service Professional and each seat jumps. Enterprise seats climb again. Every light user on a paid tier multiplies that jump across headcount.",
  },
  {
    title: "External users often shouldn't be seats at all",
    body: "Partners, vendors, and customers frequently end up on paid HubSpot seats by default, simply because nothing else was built for them to log into.",
  },
  {
    title: "The bill grows with headcount",
    body: "Every new hire or partner segment that needs a workflow adds another recurring paid seat — permanently, unless something changes the model.",
  },
  {
    title: "A flat-fee portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Growth stops being a licensing event.",
  },
  {
    title: "You still keep one source of truth",
    body: "The portal reads and writes the same HubSpot records in real time — there's no second database drifting out of sync, just a better front end for the users who need less.",
  },
];

export default function HubspotSeatCostVsCustomPortalPage() {
  const url =
    "https://ardncloudsolutions.com/compare/hubspot-seat-cost-vs-custom-portal";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "HubSpot Seat Costs vs. a Custom Portal",
        name: "HubSpot Seat Costs vs. a Custom Portal",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot license cost reduction" },
          { "@type": "Thing", name: "CRM per-seat pricing" },
          { "@type": "Thing", name: "Custom portal development" },
        ],
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
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://ardncloudsolutions.com/compare" },
          { "@type": "ListItem", position: 3, name: "HubSpot Seat Cost vs. Custom Portal", item: url },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="ardn-page">
        {/* HERO */}
        <section className="hero-editorial">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                <span className="eyebrow">HubSpot Seat Costs</span>
                <h1 className="display reveal">
                  Keep HubSpot. <em>Cut the paid seats you don&apos;t need.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot&apos;s free view-only seats already cover users who just
                  read. The cost piles up on the paid Sales and Service seats
                  handed to people who only run a narrow workflow — updating a
                  deal, logging a ticket, submitting a request. A custom portal
                  gives those light users exactly what they need, wired into
                  HubSpot in real time, on one flat fee instead of a paid seat each.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No rip-and-replace</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The math, illustrated</div>
                  <p className="body mt-3">
                    Example: 30 light users on paid Sales Professional seats at a
                    typical list rate runs well into five figures a year — and
                    grows every time headcount does. A flat-fee custom portal for
                    those same users costs the same whether there are 10 of them
                    or 300.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. This is an illustration,
                    not a quote — use the free calculator to run your own.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* COST DRIVERS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the bill comes from</span>
                <h2 className="h1 mt-3">Why paid seats <em>hit light users hardest.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&apos;s paid seats are built around the power user. Everyone lighter than that is where the overpayment concentrates.</p>
              </div>
            </div>
            <div className="grid-3">
              {costDrivers.map((r, i) => (
                <div className="card" key={r.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{r.title}</h3>
                  <p className="body">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEAT TIER BREAKDOWN */}
        <section className="section is-canvas" id="seat-tiers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">HubSpot seat types</span>
                <h2 className="h1 mt-3">Free view-only, Core, Sales/Service, <em>or a portal.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot already gives readers free seats. Here&apos;s how the paid tiers typically compare to a flat-fee custom portal for light workflow users.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Seat type</th>
                    <th>Typical published price</th>
                    <th>Scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">View-only / free seat</td><td>$0 — included</td><td className="is-yes">Keep these — already free</td></tr>
                  <tr><td className="feat">Core seat</td><td>~$20–$50/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Sales / Service Professional seat</td><td>~$90–$100/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Sales / Service Enterprise seat</td><td>~$150/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Actual HubSpot pricing varies by tier, contract, and discount; confirm current numbers with HubSpot. Keep pure readers on free view-only seats; the gap a custom portal closes is the paid Sales/Service seats given to users who only run a narrow workflow.
            </p>
          </div>
        </section>

        {/* NOT ANTI-CRM */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not a migration. Not an audit.</span>
                <h2 className="h1 mt-3">A third option, <em>next to the other two.</em></h2>
                <p className="body mt-4">
                  Most cost-reduction advice for HubSpot falls into two camps:
                  shuffle users onto cheaper or free seats, or move off HubSpot
                  entirely. The first has a floor — free view-only seats can&apos;t
                  cover users who need to <em>do</em> something. The second is a
                  bigger decision than seat cost warrants. A custom portal is the
                  option for the middle group: it doesn&apos;t touch your HubSpot
                  contract or your data, it just gives the users who need less a
                  tool that costs less.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Move pure readers to free seats first</div>
                      <p className="fl-body">If a user only needs to view records, HubSpot&apos;s free view-only seat already covers them — no portal needed.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then cut paid seats used lightly</div>
                      <p className="fl-body">The paid Sales/Service seat-holders who run a narrow workflow are where a <Link href="/custom-portal-development" className="link">custom portal</Link> cuts the bill.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time — no second database drifting out of sync.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER — where this shows up */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The rest of <em>the cost-cutting playbook.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to your CRM, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Start here</span>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework for reducing per-seat CRM costs — for any CRM.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your current seat spend and see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce instead? See the Salesforce seat-cost math →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full per-seat vs. flat-fee breakdown →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section is-canvas" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Common <em>questions.</em></h2>
              </div>
              <div>
                <p className="lede">Free vs. paid seats, which users to move, data sync, and cost.</p>
              </div>
            </div>
            <div style={{ display: "grid", gap: "14px", marginTop: "32px" }}>
              {FAQS.map((faq) => (
                <details key={faq.q} className="card" style={{ padding: "22px 26px" }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "18px", color: "#14142B" }}>{faq.q}</summary>
                  <p style={{ marginTop: "14px", color: "#475467", fontSize: "16px", lineHeight: 1.6 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <LeadForm source="HubSpot Seat Cost vs Custom Portal page" heading="See what your HubSpot seats are costing" sub="Tell us roughly how many paid HubSpot seats go to light-workflow users. We'll come back with where a portal cuts the bill — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep HubSpot. <em>Stop paying full seats for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your light users actually use HubSpot, show where a portal cuts the bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/custom-software-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all custom software &amp; platform builds →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
