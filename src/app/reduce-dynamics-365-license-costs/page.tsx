import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SPOKE page extending the per-seat cost-reduction wedge to Microsoft
// Dynamics 365 — a high-value per-user platform with zero prior coverage in
// the cluster. Mirrors the /reduce-crm-licensing-costs decision-framework
// structure (reclaim → right-size → move light users to a flat-fee portal),
// but anchored to the Dynamics licensing model (full app seats, the low-cost
// Team Members tier, and how a custom portal removes the seat entirely for
// read-mostly users). Pricing figures are Microsoft's publicly listed list
// prices, explicitly labeled illustrative; the calculator is offered for real
// numbers. No fabricated client names or metrics.
export const metadata: Metadata = {
  title: "Reduce Dynamics 365 License Costs | Ardn",
  description:
    "Cut Microsoft Dynamics 365 per-user license costs: reclaim unused seats, right-size to Team Members, or move light users to a flat-fee custom portal.",
  keywords: [
    "reduce Dynamics 365 license costs",
    "Dynamics 365 per user license cost",
    "Dynamics 365 Team Members license",
    "cut Dynamics 365 licensing costs",
    "Dynamics 365 license optimization",
    "Dynamics 365 seat cost reduction",
    "custom portal to reduce Dynamics 365 seats",
    "Dynamics 365 light user license",
    "Dynamics 365 cost reduction",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
    },
  },
  openGraph: {
    title: "Reduce Dynamics 365 License Costs — Keep Dynamics | Ardn",
    description:
      "Three honest ways to cut Microsoft Dynamics 365 per-user costs without switching platforms: reclaim unused seats, right-size to Team Members, or move light users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to cut Microsoft Dynamics 365 license costs without switching platforms — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce Dynamics 365 License Costs | Ardn",
    description:
      "Three honest ways to cut Dynamics 365 per-user costs — reclaim, right-size to Team Members, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the fastest way to reduce Dynamics 365 license costs?",
    a: "Reclaiming seats nobody uses. Most Dynamics orgs carry dormant or duplicate licenses from role changes, departures, and 'just in case' provisioning. Pull last-activity data, flag anyone inactive for 60+ days, and deactivate or reassign at your renewal or true-up. It's the fastest, lowest-risk saving because it changes nothing for active users.",
  },
  {
    q: "How does the Dynamics 365 Team Members license fit in?",
    a: "Team Members is Microsoft's low-cost, limited-use tier — it lets people read most data and perform a narrow set of write actions, but it can't run the full sales, service, or field workflows a full app license covers. Moving genuinely light users from a full Sales or Customer Service Enterprise seat down to Team Members is a real saving. But note two things: Team Members is still a paid per-seat license that scales with headcount, and Microsoft restricts what it can do, so it doesn't fit every light user. For users who only need a focused slice of Dynamics, a custom portal removes the seat entirely.",
  },
  {
    q: "How do I cut costs for users who log in but barely use Dynamics 365?",
    a: "That's the group a license reclaim can't help — the seats are genuinely in use, just lightly. Field techs updating a work order, ops staff checking a case, partners submitting a request. Your options are to right-size them to a cheaper tier like Team Members where the license restrictions allow it, or to give them a purpose-built custom portal wired into Dynamics through its API that runs on one flat fee no matter how many users you add. The portal is usually the bigger, more durable saving because it breaks the link between cost and headcount.",
  },
  {
    q: "Do I have to leave Microsoft Dynamics 365 to save money?",
    a: "No. Every lever here keeps Dynamics as your system of record. A license audit right-sizes your existing agreement; a custom portal sits alongside Dynamics and syncs through the Dataverse / Web API. A full migration off Dynamics is a separate, much larger decision that only makes sense if the platform no longer fits your power users — not something to take on just to trim seat cost.",
  },
  {
    q: "How much does a full Dynamics 365 seat cost versus a portal?",
    a: "Microsoft lists full app licenses in the roughly $65–$210/user/month range depending on the app and tier — for example Sales Professional around $65, Sales or Customer Service Enterprise around $105, and Field Service around $95 (confirm your own rate, since Microsoft updates pricing and enterprise agreements vary). Team Members lists far lower but is still per-seat and capped in capability. A flat-fee custom portal costs the same whether you put 10 light users or 400 on it, so the more light users you have, the wider the gap. Run the savings calculator with your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim seats nobody uses",
    body: "Dormant, duplicate, and 'just in case' Dynamics licenses are the fastest win — deactivating or reassigning them at renewal or true-up changes nothing for active users. Start with last-activity data.",
    best: "Best for: inactive or forgotten full-app seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Move users to Team Members",
    body: "Microsoft's Team Members tier is far cheaper than a full Sales or Customer Service seat — but it's still per-seat, still scales with headcount, and Microsoft caps what it can do, so it only fits some light users.",
    best: "Best for: read-mostly users whose tasks fit Team Members limits.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need a sliver of Dynamics a purpose-built portal wired into it through the Dataverse API, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: field, ops, partners & customers using Dynamics lightly.",
  },
];

export default function ReduceDynamics365LicenseCostsPage() {
  const url =
    "https://ardncloudsolutions.com/reduce-dynamics-365-license-costs";

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
                  Cut your Dynamics 365 bill — <em>without switching platforms.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Dynamics 365 prices a full app seat for someone who lives in
                  the platform, so the cost piles up on everyone lighter than
                  that — the field techs, ops staff, partners, and customers who
                  touch it for a handful of tasks. There are three honest ways to
                  cut that bill, and only one of them requires building anything.
                  Here&apos;s how to decide which lever fits which problem.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Dynamics 365</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Syncs via Dataverse API</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The three levers</div>
                  <ul className="features mt-3">
                    <li>Reclaim seats nobody uses</li>
                    <li>Right-size users to Team Members</li>
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
                <h2 className="h1 mt-3">Why full app seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">A Dynamics 365 app license is priced for someone who runs the whole workflow. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A dispatcher who runs Field Service all day and a tech who updates one work order twice a day can carry the same full seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring seat — permanently, unless something changes the model. Even Team Members bills per head.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most mid-market Dynamics orgs, the people who need a sliver of the platform outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: Microsoft lists full Dynamics 365 app seats in roughly the
              $65–$210/user/month range (Sales Professional ~$65, Sales or Customer
              Service Enterprise ~$105, Field Service ~$95), with the Team Members
              tier far lower but capped in capability. A flat-fee portal costs the
              same at 10 light users or 400. (List prices shown for illustration
              only —{" "}
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
                <p className="lede">A quick way to route each group to the right saving. Most companies use more than one lever at once.</p>
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
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Read-mostly, fits Team Members limits</td><td>Right-size to Team Members</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — field, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Power user running the full app</td><td>Keep the full seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">seat-cost math worked out</Link>.
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
                  Your power users keep working exactly as they do today. All that
                  changes is that the users who need less stop paying for a license
                  built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Dormant seats are free money — audit last-activity data and right-size at your renewal or true-up.</p>
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
                      <p className="fl-body">The portal reads and writes the same Dynamics records in real time through the Dataverse API — no second database drifting out of sync.</p>
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
                <h2 className="h1 mt-3">The tools <em>behind each lever.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The same three-lever framework for Salesforce, HubSpot, and any per-seat CRM.</p>
                <span className="link">See the CRM guide →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off Dynamics seats onto a flat-fee portal wired into your data.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-servicenow-license-costs" className="link">Reduce ServiceNow license costs →</Link>
              <Link href="/custom-software-development" className="link">All custom software &amp; platform builds →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Custom software vs. SaaS: total cost →</Link>
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
                <p className="lede">The fastest saving, Team Members, light users, migration risk, and cost.</p>
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

        <LeadForm source="Reduce Dynamics 365 Licensing Costs page" heading="See where your Dynamics bill is leaking" showSeatQualifiers sub="Tell us roughly how many Dynamics 365 users you have and which apps. We'll come back with which levers cut your cost the most — and a fixed quote." />

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
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Also cutting Salesforce or HubSpot costs? Start here →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
