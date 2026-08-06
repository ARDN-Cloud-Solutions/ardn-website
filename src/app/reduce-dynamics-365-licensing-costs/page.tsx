import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge SPOKE page — Microsoft Dynamics 365 seat-cost reduction. Mirrors the
// /reduce-crm-licensing-costs pillar pattern for a distinct, uncovered ecosystem
// (Dynamics 365 Sales/Customer Service full seats vs. the deliberately limited
// Team Member license). Targets high-commercial-intent Dynamics cost terms with
// the "keep Dynamics, cut the bill" wedge: power users stay in Dynamics, light
// users move to a flat-fee custom portal synced to Dataverse. No fabricated
// pricing — dollar figures are avoided; the calculator is offered for real
// numbers. GEO-structured (H2/H3, decision table, FAQ + FAQPage schema).
export const metadata: Metadata = {
  title: "Cut Microsoft Dynamics 365 License Costs | Ardn",
  description:
    "Reduce Dynamics 365 per-user license costs without leaving Dynamics. Move light users off full seats onto a flat-fee custom portal synced to Dataverse.",
  keywords: [
    "reduce Dynamics 365 license cost",
    "cut Dynamics 365 licensing costs",
    "Dynamics 365 per user cost",
    "Dynamics 365 Team Member license alternative",
    "Dynamics 365 too expensive",
    "Dynamics 365 custom portal",
    "reduce per-seat license costs",
    "custom portal to reduce Dynamics seats",
    "light user Dynamics 365 license",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    },
  },
  openGraph: {
    title: "Cut Microsoft Dynamics 365 License Costs — Keep Dynamics | Ardn",
    description:
      "Reduce Dynamics 365 per-user costs without a migration: move light users off full seats onto a flat-fee custom portal synced live to Dataverse.",
    url: "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cut Microsoft Dynamics 365 license costs without switching platforms — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cut Microsoft Dynamics 365 License Costs | Ardn",
    description:
      "Move Dynamics 365 light users off full per-user seats onto a flat-fee custom portal synced to Dataverse — keep Dynamics, cut the bill.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How do I reduce Dynamics 365 license costs without leaving Dynamics?",
    a: "Start by separating your users by how heavily they actually use Dynamics. Power users on Sales or Customer Service Enterprise seats keep those seats. The savings come from everyone lighter than that — people who only read records, check a status, or submit the occasional update. Those users rarely need a full Dynamics 365 seat at all; a custom portal wired into Dataverse gives them exactly what they need on one flat fee, while Dynamics stays your system of record.",
  },
  {
    q: "Isn't the Dynamics 365 Team Member license already the cheap option for light users?",
    a: "It is cheaper per head, but it is deliberately limited — read-mostly access, capped write scenarios, and no room to shape the experience around a specific workflow. It is still a per-user license, so the bill still grows with every person you add, and light users often hit its restrictions and get bumped back up to a full seat. A custom portal removes that ceiling: it is built to the exact task those users do, and it costs the same whether you put 20 or 400 people on it.",
  },
  {
    q: "What happens to our Dataverse data — does the portal keep it in sync?",
    a: "Yes. The portal reads and writes the same Dataverse records through the Dynamics API in real time, so there is one source of truth. It is a tailored window into the data you already trust, not a second database that drifts out of sync. Every user's access follows the permissions you already define in Dynamics.",
  },
  {
    q: "Which Dynamics 365 users are the best candidates to move to a portal?",
    a: "Field sellers and dealers who check one or two screens, operations and back-office staff who update orders or cases, partners and vendors submitting requests, and customers who need self-service. These are the light users per-user pricing overcharges the most, because they pay near-full price for a sliver of the platform.",
  },
  {
    q: "How much can we save versus full Dynamics 365 seats?",
    a: "It depends entirely on how many light users you have and your negotiated per-user rate, so we won't quote a fixed number. The mechanism is simple: per-user fees recur and grow with headcount, while a flat-fee portal costs the same at any user count. Our savings calculator lets you plug in your seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does it take and what does it cost to build the portal?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription that covers the build, hosting, and ongoing changes — and new customers pay nothing for the one-time build. The recurring seat savings typically dwarf the subscription.",
  },
];

const steps = [
  {
    tag: "Step 1 — Audit",
    title: "Find your light users",
    body: "Pull Dynamics usage by user. Most orgs discover a large share of full Sales/Customer Service seats belong to people who only read or lightly touch a few records.",
    best: "Best for: seeing where the overpayment actually sits.",
  },
  {
    tag: "Step 2 — Right-size",
    title: "Weigh the Team Member tier",
    body: "The Team Member license is cheaper but capped and still per-user. It fits a narrow band of users; for the rest, its limits push them back to a full seat.",
    best: "Best for: a small set of occasional users who still need native access.",
  },
  {
    tag: "Step 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give sellers, ops, partners, and customers a purpose-built portal synced to Dataverse, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: the majority — everyone using Dynamics lightly.",
  },
];

export default function ReduceDynamics365LicensingCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Cut Microsoft Dynamics 365 License Costs Without Leaving Dynamics",
        name: "Cut Microsoft Dynamics 365 License Costs Without Leaving Dynamics",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Dynamics 365 license cost reduction" },
          { "@type": "Thing", name: "Per-user pricing" },
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
          { "@type": "ListItem", position: 2, name: "Custom Software Development", item: "https://ardncloudsolutions.com/custom-software-development" },
          { "@type": "ListItem", position: 3, name: "Reduce Dynamics 365 License Costs", item: url },
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
                <span className="eyebrow">Reduce Dynamics 365 License Costs</span>
                <h1 className="display reveal">
                  Cut your Dynamics 365 bill — <em>without leaving Dynamics.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Dynamics 365 per-user pricing is built around the power user who
                  lives in Sales or Customer Service all day. Most of your seats
                  don&apos;t — they belong to sellers, ops staff, partners, and
                  customers who touch it for a handful of tasks. Keep Dynamics as
                  your system of record and move those light users to a flat-fee
                  portal synced to Dataverse. Nothing gets ripped out.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Dynamics 365</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The cost-reduction play</div>
                  <ul className="features mt-3">
                    <li>Keep Dynamics &amp; your Dataverse data</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way Dataverse sync, one source of truth</li>
                    <li>Seller, ops, partner &amp; customer portals</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">Not on Dynamics? See the CRM-wide playbook →</Link>
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
                <h2 className="h1 mt-3">Why Dynamics per-user pricing <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">A Dynamics 365 seat is priced for someone who lives in the platform. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Full seats built for power users</h3>
                <p className="body">Sales and Customer Service Enterprise seats are priced for people running deals or cases all day. A user who reads one screen twice a day pays for capability they never open.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Team Member is capped, not free</h3>
                <p className="body">The cheaper Team Member tier is deliberately limited and still per-user — light users hit its restrictions and get bumped back to a full seat, so the saving quietly evaporates.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring per-user license — permanently, unless something changes the model.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              A flat-fee portal costs the same at 10 light users or 400, while
              per-user Dynamics licenses recur and grow with every seat.{" "}
              <Link href="/savings-calculator" className="link">Run the calculator</Link> with your own seat count and negotiated rate to see the gap.
            </p>
          </div>
        </section>

        {/* THE STEPS */}
        <section className="section is-canvas" id="steps">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The approach</span>
                <h2 className="h1 mt-3">Three moves to cut the bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the lowest-risk move and work down. Each one addresses a different kind of overpayment.</p>
              </div>
            </div>
            <div className="grid-3">
              {steps.map((l) => (
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

        {/* DECISION TABLE */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Which fix, which user</span>
                <h2 className="h1 mt-3">Match the fix <em>to the user.</em></h2>
              </div>
              <div>
                <p className="lede">A quick way to route each group to the right saving. Most companies use more than one at once.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the user is…</th>
                    <th>The right move</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Inactive / left the company</td><td>Deactivate the seat</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Occasional, still needs native Dynamics</td><td>Weigh a Team Member license</td><td className="is-no">Lower per-user, still per-user</td></tr>
                  <tr><td className="feat">Light — a seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in Dynamics</td><td>Keep the full seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your negotiated per-user rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out Dynamics.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting licensing cost and replacing your platform are two
                  different decisions. Dynamics 365 stays the system of record on
                  every option here. Your power users keep working exactly as they
                  do today. All that changes is that the users who need less stop
                  paying for a platform built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Your Dataverse stays put</div>
                      <p className="fl-body">No migration, no data move, no retraining your power users. The portal integrates alongside Dynamics through its API.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A focused <Link href="/custom-portal-development" className="link">custom portal</Link> beats a stripped-down Team Member view — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Savings that compound</div>
                      <p className="fl-body">Per-user fees recur forever. A flat-fee portal turns that into a fixed, predictable line item.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section">
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
                <p className="body">Move light users off per-user seats onto a flat-fee portal wired into Dynamics.</p>
                <span className="link">Explore custom portal development →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The vendor-neutral decision framework behind this Dynamics playbook.</p>
                <span className="link">See the full playbook →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the per-seat savings calculator →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-partner-portal-development" className="link">Paying for external partner seats? Build a partner portal →</Link>
              <Link href="/custom-software-development" className="link">See all custom software &amp; platform builds →</Link>
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
                <p className="lede">Team Member limits, Dataverse sync, which users to move, and cost.</p>
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

        <LeadForm source="Reduce Dynamics 365 Licensing Costs page" heading="See where your Dynamics bill is leaking" showSeatQualifiers sub="Tell us roughly how many Dynamics 365 users you run and how many are light users. We'll come back with where a portal cuts your per-user costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Dynamics, show where a portal cuts the per-user bill, and give you a fixed quote in 48 hours.</p>
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
