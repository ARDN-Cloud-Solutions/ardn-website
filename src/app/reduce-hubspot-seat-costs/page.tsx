import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge spoke — the HubSpot twin of /reduce-crm-licensing-costs and
// /custom-portal-development. HubSpot's seat model bills a paid Core Seat for
// anyone who edits, while View-Only seats are free — so light users (sellers,
// ops, CS, partners) who only need to see or touch a sliver get forced onto
// full paid seats. Positioning: "keep HubSpot, cut the bill" — move light
// users onto a flat-fee custom portal wired live into the HubSpot API; power
// users keep their HubSpot seats. NOT "leave HubSpot." No fabricated prices:
// the seat mechanics are HubSpot's published model, no hard $ quoted, the
// calculator is offered for real numbers.
export const metadata: Metadata = {
  title: "Cut HubSpot Seat & License Costs | Ardn",
  description:
    "Cut HubSpot licensing costs without leaving HubSpot: move light users off paid Core Seats onto a flat-fee custom portal synced live via the HubSpot API.",
  keywords: [
    "reduce HubSpot seat costs",
    "cut HubSpot licensing costs",
    "HubSpot seat cost reduction",
    "HubSpot custom portal",
    "HubSpot Core Seat cost",
    "HubSpot View-Only seat",
    "reduce HubSpot license costs",
    "HubSpot portal to cut seats",
    "custom portal to reduce CRM seats",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    },
  },
  openGraph: {
    title: "Cut HubSpot Seat & License Costs — Keep HubSpot | Ardn",
    description:
      "Move light users off paid HubSpot Core Seats onto a flat-fee custom portal synced live with HubSpot. Cut the bill without switching CRMs. New customers: free build.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-seat-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cut HubSpot seat and license costs without leaving HubSpot — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut HubSpot Seat & License Costs | Ardn",
    description:
      "Move light HubSpot users off paid Core Seats onto a flat-fee custom portal. Keep HubSpot, cut the bill. New customers: free build.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do we cut HubSpot costs without leaving HubSpot?",
    a: "HubSpot bills a paid Core Seat for anyone who needs to edit or work inside the CRM, while View-Only seats are free but can only look. The problem is the big middle group — sellers, CS reps, ops staff, partners — who need to do a few specific things but get billed a full Core Seat to do them. We build a custom portal that gives those users exactly the actions they need, wired live into HubSpot through its API, on one flat fee. Your power users keep their HubSpot seats; the light users come off paid seats. Nothing gets migrated.",
  },
  {
    q: "Do we have to migrate off HubSpot?",
    a: "No. HubSpot stays your system of record and your power users keep working in it exactly as they do today. The portal sits alongside HubSpot and syncs two-way through the HubSpot API, so there's one source of truth — the portal is a tailored window into your HubSpot data, not a second copy that drifts.",
  },
  {
    q: "Which HubSpot users are worth moving to a portal?",
    a: "Anyone who touches HubSpot for a narrow slice of work but is billed a full Core Seat for it: field and inside sellers who update a handful of deals, service reps working a queue, ops staff changing statuses, and external partners or customers who should never sit on an internal CRM seat at all. Power users who live in HubSpot all day keep their seats — those are worth it.",
  },
  {
    q: "How is this different from HubSpot's free View-Only seats?",
    a: "View-Only seats are perfect for executives and stakeholders who just need to read dashboards. They fall short the moment a user has to do something — log activity, update a record, submit a request — because any edit requires a paid Core Seat. A custom portal closes that gap: light users get write access to exactly the fields and actions they need, synced back to HubSpot, without a paid seat each.",
  },
  {
    q: "How much can moving light users to a portal actually save?",
    a: "It depends entirely on how many paid Core Seats you carry for light users and your negotiated rate, so we won't quote a fixed number. The mechanism is simple: HubSpot Core Seats recur and grow with headcount, while a flat-fee portal costs the same at 10 light users or 400. Our savings calculator lets you model your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "Is our HubSpot data secure, and who owns the portal?",
    a: "The portal reads and writes HubSpot through its API, so there's no second database drifting out of sync, and every user's access follows the permissions you define. You own the portal IP and your data outright; if you ever leave, you get a full export and complete documentation. No lock-in.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring seat savings typically dwarf the subscription.",
  },
];

const levers = [
  {
    tag: "Step 1 — Audit",
    title: "Right-size seats at renewal",
    body: "Reclaim Core Seats assigned to people who left, changed roles, or barely log in. The fastest, lowest-risk win because it changes nothing for active users.",
    best: "Best for: dormant or over-provisioned Core Seats.",
  },
  {
    tag: "Step 2 — Downgrade",
    title: "Move read-only users to View-Only",
    body: "Anyone who only needs to see dashboards and records belongs on a free View-Only seat, not a paid Core Seat. Free — but capped at looking, no edits.",
    best: "Best for: executives & stakeholders who only read.",
  },
  {
    tag: "Step 3 — Replace the seat",
    title: "Move light editors to a flat-fee portal",
    body: "The users who need to do a few specific things get a purpose-built portal wired into HubSpot, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: sellers, CS, ops, partners & customers using HubSpot lightly.",
  },
];

export default function ReduceHubspotSeatCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-seat-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Cut HubSpot Seat & License Costs Without Leaving HubSpot",
        name: "How to Cut HubSpot Seat & License Costs Without Leaving HubSpot",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot license cost reduction" },
          { "@type": "Thing", name: "HubSpot seat pricing" },
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
          { "@type": "ListItem", position: 2, name: "Reduce HubSpot Seat Costs", item: url },
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
                  Cut your HubSpot bill — <em>keep HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot charges a paid Core Seat for anyone who edits, while
                  View-Only seats are free but can only look. That leaves a big
                  group in the middle — sellers, service reps, ops staff, and
                  partners — paying full Core Seats to do a handful of things. We
                  build custom portals that give those users exactly what they
                  need, synced live to HubSpot, on one flat fee instead of a seat
                  each. Your power users keep HubSpot — you just stop overpaying
                  for the light ones.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#quote" className="btn btn-secondary btn-lg">See what you&apos;d save — free quote</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep HubSpot &amp; your data</li>
                    <li>Move light editors off paid Core Seats</li>
                    <li>Two-way HubSpot API sync, one source of truth</li>
                    <li>Sellers, CS, ops, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
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
                <h2 className="h1 mt-3">Why Core Seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&apos;s seat model has two speeds — paid Core Seats that can edit, and free View-Only seats that can&apos;t. Most companies get stuck paying full seats for users who sit between the two.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Editing means a paid seat</h3>
                <p className="body">The moment a user needs to log activity, update a record, or submit a request, a free View-Only seat won&apos;t do — they get billed a full Core Seat, however little they use it.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new rep, ops hire, or partner who needs to touch HubSpot adds another recurring Core Seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light editors are the majority</h3>
                <p className="body">In most mid-market teams, the people who need a sliver of HubSpot outnumber the power users — so the overpayment sits across most of the seat count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              A flat-fee portal costs the same at 10 light users or 400, while
              paid Core Seats recur and grow with every hire.{" "}
              <Link href="/savings-calculator" className="link">Run the calculator</Link> for your own negotiated seat rate.
            </p>
          </div>
        </section>

        {/* THE THREE STEPS */}
        <section className="section is-canvas" id="levers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The decision framework</span>
                <h2 className="h1 mt-3">Three ways to cut the HubSpot bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each addresses a different kind of overpayment — and only the third breaks the link between cost and headcount.</p>
              </div>
            </div>
            <div className="grid-3">
              {levers.map((l) => (
                <div className="card" key={l.title}>
                  <span className="eyebrow" style={{ color: "var(--indigo)" }}>{l.tag}</span>
                  <h3 className="h3 mt-2">{l.title}</h3>
                  <p className="body">{l.body}</p>
                  <p className="body" style={{ marginTop: "12px", fontWeight: 600, color: "#475467" }}>{l.best}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out HubSpot.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting licensing cost and replacing your CRM are two different
                  decisions. HubSpot stays your system of record on every option
                  here. Your power users keep working exactly as they do today.
                  All that changes is that the users who need less stop paying for
                  a full Core Seat built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">HubSpot stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside it through the HubSpot API.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused portal beats a stripped-down CRM view — faster for them, cheaper for you, and it writes straight back to HubSpot.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Per-seat fees recur forever. A flat-fee portal turns that into a fixed, predictable line item — the same at any headcount.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one subscription as your needs evolve. You own the IP, no lock-in.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section is-canvas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The tools <em>behind the play.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off per-seat licenses onto a flat-fee portal wired into HubSpot or your CRM.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Reduce CRM Licensing Costs</h3>
                <p className="body">The full decision framework for cutting per-seat CRM costs — Salesforce, HubSpot &amp; more.</p>
                <span className="link">See the framework →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce too? See the seat-cost math →</Link>
              <Link href="/custom-partner-portal-development" className="link">Partners on per-login seats? Custom partner portals →</Link>
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2 className="h1 mt-3">Common <em>questions.</em></h2>
              </div>
              <div>
                <p className="lede">How the savings work, HubSpot API sync, View-Only seats, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Seat Costs page" heading="See where your HubSpot bill is leaking" showSeatQualifiers sub="Tell us roughly how many HubSpot seats you run and how many are light users. We'll come back with where a portal cuts your cost — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying Core Seats <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your team actually uses HubSpot, show where a portal cuts the seat bill, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See the full CRM cost-reduction framework →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
