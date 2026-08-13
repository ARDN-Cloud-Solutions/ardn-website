import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";
import WedgeTestimonial from "@/components/common/WedgeTestimonial";

// WEDGE SPOKE — HubSpot mirror of the Salesforce seat-cost cluster. ARDN already
// ranks for "cut HubSpot seat costs" on blog content alone but had no
// conversion-optimized landing page for HubSpot buyers (~half the ICP). This
// page consolidates that intent: move light HubSpot users (Service viewers, ops,
// partners, field staff) to a flat-fee custom portal synced live to HubSpot's
// API — "keep your HubSpot, cut the bill." Honest framing: HubSpot's own free
// View-Only seats cover pure viewers, so the portal sweet spot is light users
// who need to DO a narrow thing (submit, update, transact) that View-Only can't.
// No fabricated pricing; the savings calculator carries the reader's own numbers.
export const metadata: Metadata = {
  title: "How to Cut HubSpot Seat Costs | Ardn",
  description:
    "Cut HubSpot per-seat license costs without leaving HubSpot — move light users to a flat-fee custom portal synced live to your data. See the seat-cost math.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot seat cost reduction",
    "HubSpot Enterprise seat cost",
    "HubSpot license cost reduction",
    "custom portal to reduce HubSpot seats",
    "HubSpot Sales Hub seat cost",
    "HubSpot Service Hub seat cost",
    "reduce per-seat license costs",
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
    title: "How to Cut HubSpot Seat Costs — Keep Your HubSpot | Ardn",
    description:
      "Reduce HubSpot per-seat license costs without a migration: move light users to a flat-fee custom portal synced live to HubSpot. See the cost math.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to cut HubSpot seat costs without leaving HubSpot — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Cut HubSpot Seat Costs | Ardn",
    description:
      "Reduce HubSpot per-seat license costs — move light users to a flat-fee custom portal synced live to HubSpot. No migration required.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave HubSpot to reduce our seat costs?",
    a: "No — that is the whole point. HubSpot stays your system of record and your power users keep working in it exactly as they do today. We build a custom portal that connects to HubSpot through its API and stays in sync both ways, so lighter users get a focused tool while the CRM data lives in one place. Nothing gets migrated and nothing gets ripped out.",
  },
  {
    q: "Isn't a HubSpot free View-Only seat enough for light users?",
    a: "For someone who only ever looks at data, a View-Only or free seat can be the right answer — and we'll tell you when it is. The portal sweet spot is the larger group who need to do a narrow thing a viewer can't: submit a request, update a status, log an interaction, place or check an order, or collaborate as a partner or customer. Those users don't need a full paid Sales or Service seat, but View-Only can't cover them either. A purpose-built portal gives them exactly that slice on one flat fee.",
  },
  {
    q: "Which HubSpot seats does this actually save money on?",
    a: "Paid Sales Hub and Service Hub seats — the ones billed per user whether someone lives in HubSpot all day or touches it for five minutes. Ops staff, field teams, dealers, partners, and customer-facing self-service users are the most common candidates to move to a portal. Your genuine power users stay on their HubSpot seats.",
  },
  {
    q: "How does the data stay accurate between the portal and HubSpot?",
    a: "The portal integrates two-way with HubSpot's API, so it reads and writes the same records in real time. There is one source of truth — the portal is a tailored window into your HubSpot data, not a separate copy that drifts out of sync.",
  },
  {
    q: "How much can moving light users to a portal actually save?",
    a: "It depends entirely on how many light users you have and what you pay per HubSpot seat, so we won't quote a fixed number here. The mechanism is simple: per-seat fees recur and climb with headcount, while a flat-fee portal costs the same at 10 users or 400. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How is this different from a HubSpot license-tier downgrade?",
    a: "Downgrading a user to a cheaper tier is still per-seat and still capped in what that user can do. A custom portal removes the seat entirely for light users and runs on one flat fee no matter how many you add — so it breaks the link between cost and headcount instead of just trimming it once.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring seat savings typically dwarf the subscription.",
  },
];

const levers = [
  {
    title: "Sales & Service Hub light users",
    body: "Reps, ops staff, and support agents who touch HubSpot for a handful of tasks get a focused portal wired into it — no full paid seat each.",
  },
  {
    title: "Partners, dealers & vendors",
    body: "External users you should never be paying internal HubSpot seats for. A partner portal lets them submit, track, and collaborate on a flat fee.",
  },
  {
    title: "Customer self-service",
    body: "A branded portal where customers check status, make requests, and find answers — deflecting tickets and keeping them out of paid seats entirely.",
  },
  {
    title: "Two-way HubSpot integration",
    body: "Live, bidirectional sync with HubSpot through its API. One source of truth — the portal is a tailored window into the data you already trust.",
  },
  {
    title: "Flat fee, not per-seat",
    body: "Add as many portal users as you want without the bill climbing. One monthly subscription covers the build, hosting, and iteration.",
  },
  {
    title: "Keep your HubSpot power users",
    body: "Marketers and reps who live in HubSpot keep their seats and workflows. You cut cost only where a full license is overkill.",
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
        name: "Cut HubSpot Seat Costs with a Custom Portal",
        serviceType: "HubSpot Seat Cost Reduction & Custom Portal Development",
        description:
          "Ardn builds and operates custom portals that integrate with HubSpot and move light users off paid per-seat licenses onto a flat-fee portal — cutting cost without replacing HubSpot. Built via the AI Forge Framework under one monthly subscription.",
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
                <span className="eyebrow">Cut HubSpot Seat Costs</span>
                <h1 className="display reveal">
                  Cut your HubSpot seat bill — <em>keep your HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most of your paid HubSpot seats are light users paying full
                  price. Sales and Service Hub bill per user whether someone lives
                  in HubSpot all day or touches it for five minutes. We move those
                  light users to a custom portal wired live into HubSpot on one
                  flat fee — so your power users keep their seats and the licensing
                  bill stops climbing with headcount.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Integrates with HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">See what you&apos;d save</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep HubSpot &amp; your data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way integration, one source of truth</li>
                    <li>Sales, Service, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/savings-calculator" className="link">Run your own HubSpot seat-savings numbers →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* WHAT WE MOVE */}
        <section className="section" id="what">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the savings are</span>
                <h2 className="h1 mt-3">The HubSpot users <em>who don&apos;t need a full seat.</em></h2>
              </div>
              <div>
                <p className="lede">Each portal is built to one group&apos;s workflow and wired into HubSpot — so the data stays in one place and the seat bill stops climbing.</p>
              </div>
            </div>
            <div className="grid-3">
              {levers.map((s, i) => (
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
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the full per-seat cost math →</Link>
            </div>
          </div>
        </section>

        {/* WHY — keep HubSpot, cut cost */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep HubSpot. Cut the cost.</span>
                <h2 className="h1 mt-3">Not a switch — <em>a smarter setup.</em></h2>
                <p className="body mt-4">
                  We are not here to pull you off HubSpot. It stays your system of
                  record and your marketers and reps keep working in it. We just
                  stop you from paying full Sales or Service seats for users who
                  need a fraction of it — by giving them a purpose-built portal
                  that talks to HubSpot in real time. You get the savings and the
                  better tool, without the risk of a migration.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">HubSpot stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside it.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a stripped-down CRM view — faster for them, cheaper for you.</p>
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

        <WedgeTestimonial />

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Common <em>questions.</em></h2>
              </div>
              <div>
                <p className="lede">How the HubSpot savings work, integration, data sync, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See what you could save on HubSpot" showSeatQualifiers sub="Tell us you run HubSpot and roughly how many seats. We'll come back with where a portal cuts your per-seat costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">See what you&apos;re overpaying — <em>then keep your HubSpot and cut the bill.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
              </div>
              <p style={{ marginTop: "14px", color: "rgba(255,255,255,0.78)", fontSize: "14px" }}>
                Same three flat-fee tiers power every build — Launch, Scale, and Enterprise. No per-seat pricing, ever.
              </p>
              <p style={{ marginTop: "8px" }}>
                <Link href="/custom-portal-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See all custom portal builds →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
