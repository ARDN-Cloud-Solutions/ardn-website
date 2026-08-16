import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke — HubSpot-specific cost-reduction landing page. Every other
// commercial wedge page on the site is Salesforce-centric; HubSpot's move to
// seat-based pricing (paid Core seats + limited view-only seats) creates active
// buyer confusion and real per-seat pain, and a blog post already ranks for the
// term with no conversion-grade landing page behind it. Positioning mirrors the
// Salesforce wedge: "keep HubSpot as your system of record, move light users to
// a flat-fee custom portal wired into it." No fabricated HubSpot pricing — seat
// mechanics are described generally and real numbers are handed to the
// calculator. Same honest 3-lever framework as the pillar, HubSpot-flavored.
export const metadata: Metadata = {
  title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
  description:
    "Reduce HubSpot per-seat licensing costs without leaving HubSpot: move light users to a flat-fee custom portal synced to your CRM. New customers: free build.",
  keywords: [
    "cut HubSpot seat costs",
    "reduce HubSpot licensing costs",
    "reduce HubSpot seat costs",
    "HubSpot per-seat alternative",
    "HubSpot seat cost reduction",
    "reduce per-seat license costs",
    "HubSpot view-only seat limits",
    "custom portal to reduce HubSpot seats",
    "HubSpot cost reduction",
    "light user HubSpot license",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Reduce HubSpot per-seat costs without switching CRMs: move light users to a flat-fee custom portal synced to HubSpot. New customers: free build.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cut HubSpot per-seat costs while keeping HubSpot as your CRM — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Move light users off per-seat HubSpot licenses onto a flat-fee custom portal synced to HubSpot — no CRM switch. New customers: free build.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do I reduce HubSpot costs without leaving HubSpot?",
    a: "HubSpot bills paid Core seats per user, and its free view-only seats are limited to reporting and dashboards — they can't do real work. The durable saving is to give the users who only need a narrow slice of HubSpot a purpose-built portal wired into it through the API, on one flat fee no matter how many you add. HubSpot stays your system of record; you simply stop buying full Core seats for light users.",
  },
  {
    q: "Aren't HubSpot's free view-only seats enough for light users?",
    a: "Rarely. View-only seats can look at records, reports, and dashboards, but they can't create or edit — so the moment a light user needs to update a deal stage, log an interaction, submit a request, or check inventory, they need a paid Core seat. A custom portal gives those users exactly the create/edit actions they need against your HubSpot data, without a paid seat each.",
  },
  {
    q: "What kinds of HubSpot users are cheapest to move to a portal?",
    a: "The same light-user groups that overpay on any CRM: sales reps or resellers who touch a handful of screens, operations and back-office staff updating status, partners submitting requests, and customers checking their own records. Power users who live in HubSpot all day keep their seats — those are worth it.",
  },
  {
    q: "Does the portal stay in sync with HubSpot?",
    a: "Yes. The portal reads and writes your HubSpot records in real time through its API, so there's one source of truth — the portal is a tailored window into your HubSpot data, not a second database that drifts out of sync.",
  },
  {
    q: "Is this the same as HubSpot's own customer or partner portals?",
    a: "No. HubSpot's built-in portal features still sit inside its seat and tier model and are shaped to HubSpot's templates. A custom portal is yours, runs on one flat monthly fee regardless of how many users you add, and is built to your exact workflow — while still syncing back to HubSpot as the system of record.",
  },
  {
    q: "How much can I actually save versus HubSpot Core seats?",
    a: "It depends entirely on how many light users you have and your negotiated per-seat rate, so we won't quote a fixed number. The mechanism is simple: per-seat fees recur and grow with headcount, while a flat-fee portal costs the same at 10 light users or 400. Our savings calculator lets you plug in your own seat count and rate to see the comparison.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring seat savings typically dwarf the subscription.",
  },
];

const features = [
  {
    title: "Keep HubSpot as your CRM",
    body: "No migration, no data move, no retraining your power users. The portal syncs to HubSpot through its API and runs alongside it.",
  },
  {
    title: "Move light users off Core seats",
    body: "Sellers, ops staff, partners, and customers who touch a sliver of HubSpot get a focused tool instead of a full paid seat each.",
  },
  {
    title: "Past what view-only seats allow",
    body: "Free view-only seats can't create or edit. The portal gives light users the exact create/edit actions they need — without a Core seat.",
  },
  {
    title: "Two-way HubSpot sync",
    body: "Live, bidirectional sync with HubSpot. One source of truth — the portal reads and writes the same records your team already trusts.",
  },
  {
    title: "Flat fee, not per-seat",
    body: "Add as many portal users as you want without the bill climbing. One monthly subscription covers the build, hosting, and iteration.",
  },
  {
    title: "Built and run for you",
    body: "We build the portal and operate it — hosting, monitoring, and changes under one flat fee as your needs evolve.",
  },
];

export default function ReduceHubspotSeatCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-seat-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "HubSpot Seat Cost Reduction via Custom Portal",
        serviceType: "Custom Portal Development & HubSpot Integration",
        description:
          "Ardn builds and operates custom portals that integrate with HubSpot and move light users off per-seat Core licenses onto a flat-fee portal — cutting cost without replacing HubSpot. Built via the AI Forge Framework under one monthly subscription.",
        url,
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
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
          { "@type": "ListItem", position: 2, name: "Cut HubSpot Seat Costs", item: url },
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
                <span className="eyebrow">Reduce HubSpot Seat Costs</span>
                <h1 className="display reveal">
                  Cut your HubSpot seat bill — <em>keep HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot bills a paid Core seat for every user who needs to do
                  real work, and its free view-only seats can&rsquo;t create or
                  edit anything. So the cost piles up on light users — sellers,
                  ops staff, partners, customers — who only need a sliver of it.
                  We build a custom portal wired into HubSpot that gives those
                  users exactly what they need, on one flat fee instead of a seat
                  each. HubSpot stays your system of record.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Syncs with HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No rip-and-replace</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your savings numbers →</Link>
                </div>
                <p className="reveal reveal-d3" style={{ marginTop: "14px", fontSize: "13px", color: "#6b7280", fontWeight: 500 }}>
                  Fixed quote in 48 hrs &middot; We reply within 4 business hours &middot; No lock-in — cancel in 30 days
                </p>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep HubSpot &amp; your data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way HubSpot sync, one source of truth</li>
                    <li>Seller, ops, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/savings-calculator" className="link">Run your own per-seat savings numbers →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* WHY THE BILL CLIMBS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the money goes</span>
                <h2 className="h1 mt-3">Why HubSpot seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&rsquo;s seat model is priced for the user who lives in the platform. Most of your users don&rsquo;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Core seats bill per real user</h3>
                <p className="body">Anyone who needs to create or edit — a deal, a ticket, a record — needs a paid Core seat, whether they use HubSpot all day or twice a week.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">View-only seats can&rsquo;t do the work</h3>
                <p className="body">Free view-only seats are capped at looking at reports and dashboards. The moment a light user needs to act, they get pushed to a paid seat.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs the people who need a sliver of the CRM outnumber the power users — so the overpayment is spread across most of the seat count.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              A flat-fee portal costs the same at 10 light users or 400, while
              per-seat fees keep climbing with headcount.{" "}
              <Link href="/savings-calculator" className="link">Run the calculator</Link> for your own seat count and negotiated rate.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section is-canvas" id="features">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What we build</span>
                <h2 className="h1 mt-3">A portal for the users <em>who don&apos;t need a full seat.</em></h2>
              </div>
              <div>
                <p className="lede">Built to one group&rsquo;s workflow and wired into HubSpot — so the data stays in one place and the seat bill stops climbing.</p>
              </div>
            </div>
            <div className="grid-3">
              {features.map((s, i) => (
                <div className="card" key={s.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{s.title}</h3>
                  <p className="body">{s.body}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">New here? Start with how to cut CRM licensing costs →</Link>
              <Link href="/custom-portal-development" className="link">See how custom portals work →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the seat-cost math →</Link>
            </div>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;leave HubSpot.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting seat cost and switching CRMs are two different decisions.
                  HubSpot stays your system of record on every option here. Your
                  power users keep working exactly as they do today. All that
                  changes is that the users who need less stop paying for a full
                  seat built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">HubSpot stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining. The portal syncs alongside HubSpot through its API.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a locked-down seat — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Per-seat fees recur forever. A flat-fee portal turns that into a fixed, predictable line item.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your needs evolve.</p>
                    </div>
                  </li>
                </ul>
              </div>
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
                <p className="lede">How the savings work, view-only limits, HubSpot sync, and cost.</p>
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

        {/* TESTIMONIAL — real client, cost-savings focused (shared site asset) */}
        <section className="section">
          <div className="container">
            <div className="testimonial">
              <span className="eyebrow">What clients say</span>
              <p className="quote mt-4">Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business.</p>
              <div className="attribution">
                <div className="avatar">JV</div>
                <div>
                  <div className="who">Jay Vashi</div>
                  <div className="role">Senior Delivery Manager, Fortune 500 insurance company</div>
                </div>
              </div>
              <p className="body mt-4">
                <Link href="/case-studies" style={{ color: "var(--indigo)", fontWeight: 600 }}>See how we&rsquo;ve delivered for clients — read our case studies →</Link>
              </p>
            </div>
          </div>
        </section>

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See what you could save on HubSpot" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and how many are light users. We'll come back with where a portal cuts your per-seat costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop buying full seats <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll look at how your users actually use HubSpot, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all three ways to cut CRM licensing costs →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
