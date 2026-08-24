import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Wedge SPOKE extending the per-seat cost-reduction cluster to the THIRD major
// CRM — Microsoft Dynamics 365. Keyword gap validated by research: a blog post
// on D365 per-user licensing already draws traffic, but there was no conversion
// page. Mirrors /reduce-crm-licensing-costs and the Salesforce/HubSpot seat-cost
// pages: same honest framing (keep the platform, move light users to a flat-fee
// portal), same illustrative-list-price disclaimer (no fabricated quotes), same
// GEO structure (H2/H3, decision table, FAQ + FAQPage schema).
export const metadata: Metadata = {
  title: "Reduce Dynamics 365 License Costs | Ardn",
  description:
    "Cut Dynamics 365 per-user costs without leaving Dynamics: reclaim unused seats, right-size license tiers, or move light users to a flat-fee custom portal.",
  keywords: [
    "reduce Dynamics 365 license costs",
    "Dynamics 365 per user cost",
    "Dynamics 365 seat cost",
    "cut Dynamics 365 licensing costs",
    "Dynamics 365 license optimization",
    "Dynamics 365 portal",
    "custom portal to reduce Dynamics 365 seats",
    "Dynamics 365 alternative for light users",
    "reduce per-seat license costs",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    },
  },
  openGraph: {
    title: "Reduce Dynamics 365 License Costs — Keep Dynamics | Ardn",
    description:
      "Three honest ways to cut Dynamics 365 per-user costs without a migration: reclaim unused seats, right-size tiers, or move light users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-dynamics-365-licensing-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce Microsoft Dynamics 365 license costs without switching — Ardn",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce Dynamics 365 License Costs | Ardn",
    description:
      "Three honest ways to cut Dynamics 365 per-user costs — reclaim, right-size, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do we have to leave Dynamics 365 to cut licensing costs?",
    a: "No. Every lever here keeps Dynamics 365 as your system of record. Reclaiming unused seats right-sizes your existing agreement; a custom portal sits alongside Dynamics and syncs through the Dataverse/Web API. Your power users keep working in Dynamics exactly as they do today — only the users who need a sliver of it stop paying a full per-user license.",
  },
  {
    q: "Which Dynamics 365 users are we overpaying for?",
    a: "The light ones. Dynamics per-user licensing is built around the person who lives in Sales, Customer Service, or Finance all day. But most orgs have far more people who touch it narrowly — field sellers checking an account, ops staff updating an order, partners or customers submitting a request. They get billed like a power user for a fraction of the use. That gap is where the overpayment concentrates.",
  },
  {
    q: "How does a custom portal reduce Dynamics 365 seat costs?",
    a: "We build those light users a purpose-built portal that gives them exactly the slice of Dynamics they need — read a record, update a status, submit a request — integrated live with Dynamics through its API. It runs on one flat monthly fee no matter how many users you add, so the cost stops scaling with headcount. Dynamics stays the single source of truth; the portal is a tailored window into it, not a second copy.",
  },
  {
    q: "What about cheaper Dynamics 365 tiers like Team Members?",
    a: "The Team Members license is a real, cheaper option for occasional users who still need light native access, and it is worth using where it fits. But it is still per-user, still capped in what those users can do, and its use rights are narrow. A custom portal is the bigger, more durable saving when you have many light users or need workflows the restricted license won't allow — because it breaks the link between cost and headcount entirely.",
  },
  {
    q: "How much can we actually save?",
    a: "It depends on how many light users you have and your negotiated per-user rate, so we won't quote a fixed number. For scale, full Dynamics 365 apps list in the roughly $95–$210/user/month range and lighter licenses below that (list prices, shown for illustration only). A flat-fee portal costs the same at 20 light users or 400. Run our savings calculator with your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does a Dynamics 365 portal take to build, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim seats nobody uses",
    body: "Dormant, duplicate, and 'just in case' Dynamics licenses are the fastest win because removing them changes nothing for active users. Audit usage and right-size at your renewal.",
    best: "Best for: inactive or forgotten seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Move users to a cheaper license",
    body: "Dynamics sells lighter licenses (like Team Members) and app-specific SKUs below a full seat. Cheaper per head — but still per head, and still capped in what that user can do.",
    best: "Best for: occasional users who still need light native access.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need a sliver of Dynamics a purpose-built portal wired into it, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: sellers, ops, partners & customers using Dynamics lightly.",
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
        headline: "How to Reduce Microsoft Dynamics 365 License Costs",
        name: "How to Reduce Microsoft Dynamics 365 License Costs",
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
          { "@type": "ListItem", position: 2, name: "Reduce Dynamics 365 License Costs", item: url },
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
                  Dynamics 365 per-user pricing is built around the people who
                  live in Sales, Service, or Finance all day. The cost piles up
                  on everyone lighter than that — the sellers, ops staff,
                  partners, and customers who touch it for a handful of tasks.
                  There are three honest ways to cut that bill, and only one of
                  them requires building anything. Here&apos;s how to decide
                  which lever fits which problem.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Dynamics 365</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Flat fee, not per-user</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free Dynamics cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Reclaim seats nobody uses</li>
                    <li>Right-size users to cheaper licenses</li>
                    <li>Move light users to a flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the third one breaks the link between cost and headcount.
                  </p>
                  <p className="body" style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
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
                <h2 className="h1 mt-3">Why per-user pricing <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">A Dynamics 365 license is priced for someone who lives in the platform. Most of your users don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A rep who runs pipeline all day and a seller who checks one screen twice a day often carry the same full app license. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring per-user license — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market orgs, the people who need a sliver of Dynamics outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: full Dynamics 365 apps such as Sales Enterprise and
              Customer Service Enterprise list in roughly the $95–$105/user/month
              range, with premium and Finance/Supply Chain apps higher, and
              lighter licenses below that. A flat-fee portal costs the same at 20
              light users or 400. (List prices shown for illustration only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own negotiated rate.)
            </p>
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

        {/* DECISION TABLE */}
        <section className="section" id="decision">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Which lever, which problem</span>
                <h2 className="h1 mt-3">Match the fix <em>to the user.</em></h2>
              </div>
              <div>
                <p className="lede">A quick way to route each Dynamics group to the right saving. Most companies use more than one lever at once.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the user is…</th>
                    <th>The right lever</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the license (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Occasional, but needs native Dynamics</td><td>Right-size to a lighter license</td><td className="is-no">Lower per-user, still per-user</td></tr>
                  <tr><td className="feat">Light — a seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Keep the full license</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your negotiated per-user rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the wider <Link href="/reduce-crm-licensing-costs" className="link">CRM licensing-cost playbook</Link>.
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
                  different decisions, and the internet tends to blur them.
                  Dynamics 365 stays the system of record on every option here.
                  Your power users keep working exactly as they do today. All
                  that changes is that the users who need less stop paying for a
                  license built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Dormant licenses are free money — audit usage and remove them at your next renewal.</p>
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
                      <p className="fl-body">The portal reads and writes the same Dynamics records in real time — no second database drifting out of sync.</p>
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
                <h2 className="h1 mt-3">More on <em>cutting per-seat costs.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off per-user licenses onto a flat-fee portal wired into Dynamics.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The full playbook for reducing per-seat CRM costs across any platform.</p>
                <span className="link">Read the playbook →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">On Salesforce? See the seat-cost math →</Link>
              <Link href="/compare/hubspot-seat-cost-vs-custom-portal" className="link">On HubSpot? See the seat-cost math →</Link>
              <Link href="/custom-partner-portal-development" className="link">Replace per-login partner portal seats →</Link>
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
                <p className="lede">Migration risk, light users, cheaper tiers, savings, and cost.</p>
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

        <LeadForm source="Reduce Dynamics 365 Licensing Costs page" heading="See where your Dynamics bill is leaking" showSeatQualifiers submitLabel="Show me my savings" sub="Tell us roughly how many Dynamics users you run and how they use it. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Dynamics 365, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See the full CRM licensing-cost playbook →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
