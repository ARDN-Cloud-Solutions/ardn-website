import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke for the HubSpot side of the per-seat cost-reduction message.
// Mirrors the Salesforce pillar (/reduce-crm-licensing-costs) but targets the
// HubSpot-specific problem intent ("reduce HubSpot licensing costs", "cut
// HubSpot seat costs", "HubSpot seat pricing for light users"). HubSpot moved
// to a seats-based model — paid Core Seats vs free View-Only Seats — so the
// wedge is precise: view-only is read-only, and the moment a light user needs
// to submit or update something they need a paid Core Seat. A custom portal
// lets those users act on HubSpot data on one flat fee instead.
// NO fabricated pricing: we describe HubSpot's publicly documented seat model
// (Core vs View-Only) in mechanism terms and send buyers to the calculator for
// their own numbers. Positioning: keep HubSpot, cut the seat bill.
export const metadata: Metadata = {
  title: "Reduce HubSpot Licensing Costs — Keep HubSpot | Ardn",
  description:
    "Cut HubSpot seat costs without leaving HubSpot. Move light, view-only users to a flat-fee custom portal wired into HubSpot — keep it as your system of record.",
  keywords: [
    "reduce HubSpot licensing costs",
    "cut HubSpot seat costs",
    "HubSpot seat pricing",
    "HubSpot Core Seat cost",
    "HubSpot view-only seat",
    "HubSpot alternative for light users",
    "reduce per-seat license costs",
    "custom portal to reduce HubSpot seats",
    "HubSpot portal integration",
    "light user HubSpot license",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-licensing-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-licensing-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-licensing-costs",
    },
  },
  openGraph: {
    title: "Reduce HubSpot Licensing Costs — Keep HubSpot | Ardn",
    description:
      "Cut HubSpot seat costs without a migration: move light, view-only users to a flat-fee custom portal wired into HubSpot. Keep HubSpot as your system of record.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-licensing-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce HubSpot licensing costs without switching CRMs — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce HubSpot Licensing Costs — Keep HubSpot | Ardn",
    description:
      "Move light, view-only users off paid HubSpot Core Seats onto a flat-fee custom portal — without leaving HubSpot.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How does HubSpot seat pricing work, and why does it overcharge light users?",
    a: "HubSpot bills on a seats model: paid Core Seats for anyone who needs to act in the CRM, and free View-Only Seats for people who only need to look. The catch is that view-only is read-only — the moment a light user has to submit a request, update a record, or move a deal, they need a paid Core Seat priced for a full user. So the overpayment lands on exactly the people who touch HubSpot the least: occasional submitters, partners, and back-office staff who do one or two things but can't do them from a free seat.",
  },
  {
    q: "What is the fastest way to reduce HubSpot licensing costs?",
    a: "Start by auditing seats. Deactivate Core Seats for people who have left or no longer log in, and move anyone who genuinely only reads data down to a free View-Only Seat. That costs nothing and changes nothing for active users. The harder group — light users who need to do a small amount of writing — is where a custom portal makes the biggest, most durable dent, because it lets them act on HubSpot data without a paid seat each.",
  },
  {
    q: "Do I have to leave HubSpot to save money?",
    a: "No. Every lever here keeps HubSpot as the system of record. A seat audit right-sizes your existing subscription; a custom portal sits alongside HubSpot and syncs through its API in real time. Switching CRMs is a separate, much larger decision that only makes sense if HubSpot itself no longer fits your power users — not something to take on just to trim seat cost.",
  },
  {
    q: "How does a custom portal cut HubSpot seat costs without breaking the data?",
    a: "The portal integrates two-way with HubSpot through its API, so it reads and writes the same records your team already trusts. Light users get a focused tool for the handful of things they actually do — submit, update, check status — and those actions land straight in HubSpot. There is one source of truth; the portal is a tailored window into HubSpot, not a second database that drifts out of sync. And it runs on one flat monthly fee no matter how many users you add.",
  },
  {
    q: "Which HubSpot users are the best candidates to move to a portal?",
    a: "The users who need a sliver of HubSpot but can't work from a free view-only seat: sales support and ops staff updating records, partners or vendors submitting requests, field or service teams checking and changing status, and customers who need self-service. Your power users — the reps and marketers who live in HubSpot all day — keep their Core Seats. It is worth it for them; it usually isn't for everyone lighter.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build. Because a flat fee doesn't scale with headcount, the recurring seat savings typically dwarf the subscription.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim seats nobody uses",
    body: "Deactivate Core Seats for people who left or stopped logging in, and drop pure readers to a free View-Only Seat. The fastest, lowest-risk win — it changes nothing for active users.",
    best: "Best for: inactive seats and read-only users.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Match the seat to the edition",
    body: "HubSpot's Starter, Professional, and Enterprise editions carry very different per-seat costs. Make sure light users aren't sitting on a premium edition's Core Seat they don't need.",
    best: "Best for: users on a richer edition than their work requires.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need to act in HubSpot but not live in it a purpose-built portal wired into it, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: sellers, ops, partners & customers using HubSpot lightly.",
  },
];

export default function ReduceHubspotLicensingCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-licensing-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce HubSpot Licensing Costs Without Leaving HubSpot",
        name: "How to Reduce HubSpot Licensing Costs Without Leaving HubSpot",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot license cost reduction" },
          { "@type": "Thing", name: "Per-seat pricing" },
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
          { "@type": "ListItem", position: 2, name: "Reduce HubSpot Licensing Costs", item: url },
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
                <span className="eyebrow">Reduce HubSpot Licensing Costs</span>
                <h1 className="display reveal">
                  Cut your HubSpot seat bill — <em>without leaving HubSpot.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot bills a paid Core Seat for anyone who needs to act in
                  the CRM, and gives view-only users a free seat that can look but
                  not touch. So the cost piles up on the light users caught in
                  between — the ones who submit a request, update a record, or
                  check status a few times a week. Here&apos;s how to cut that bill
                  without a migration, and where a flat-fee portal fits.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Flat fee, not per-seat</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
                <p className="body reveal reveal-d3" style={{ marginTop: "12px", fontSize: "13px", color: "#6b7280" }}>
                  Fixed quote in 48 hours. No lock-in — cancel in 30 days.
                </p>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Reclaim unused &amp; read-only seats</li>
                    <li>Match the seat to the edition</li>
                    <li>Move light users to a flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the third one breaks the link between cost and headcount.
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
                <h2 className="h1 mt-3">Why the free seat <em>doesn&apos;t cover light users.</em></h2>
              </div>
              <div>
                <p className="lede">HubSpot&apos;s free View-Only Seat is read-only. The instant a light user needs to <em>do</em> something, they need a paid Core Seat — and that&apos;s where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">View-only can&apos;t act</h3>
                <p className="body">A free seat lets someone read records and reports. But submitting, editing, or moving a deal requires a paid Core Seat priced for a full user.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs to act in HubSpot adds another recurring Core Seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need to touch HubSpot lightly outnumber the power users — so the overpayment is spread across most of the paid seats, not a corner of them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* THE THREE LEVERS */}
        <section className="section is-canvas" id="levers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The decision framework</span>
                <h2 className="h1 mt-3">Three ways to cut the bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each one addresses a different kind of overpayment.</p>
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
                  decisions. HubSpot stays the system of record on every option
                  here. Your marketers and reps keep working exactly as they do
                  today. All that changes is that the users who need less stop
                  paying for a Core Seat built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Deactivate dead seats and move pure readers to free view-only — no build required.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The seats that are used, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
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

        {/* CLUSTER LINKS */}
        <section className="section is-canvas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The tools <em>behind each lever.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off paid Core Seats onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">On Salesforce too?</h3>
                <p className="body">The same wedge applies to Salesforce seats — see the full CRM cost-cutting guide.</p>
                <span className="link">Cut CRM licensing costs →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the seat-cost vs. flat-fee math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full custom-vs-SaaS cost breakdown →</Link>
              <Link href="/custom-software-development" className="link">All custom software &amp; platform builds →</Link>
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
                <p className="lede">How HubSpot seats work, the fastest saving, migration risk, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Licensing Costs page" heading="See where your HubSpot bill is leaking" messageLabel="Which HubSpot edition do you run, and roughly how many users?" sub="Tell us your HubSpot edition and roughly how many users. We'll come back with which levers cut your seat cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying a Core Seat <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
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
