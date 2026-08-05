import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SPOKE page extending the per-seat cost-reduction wedge to ServiceNow — a
// high-value per-fulfiller platform with zero prior coverage in the cluster.
// The single biggest ServiceNow cost lever is the fulfiller-vs-requester split,
// so the framework here is: reclaim inactive fulfiller seats → move stakeholders
// to requester/self-service where it fits → move the light "fulfiller in name
// only" users to a flat-fee custom portal. ServiceNow does NOT publish list
// prices, so this page deliberately avoids invented dollar figures and speaks in
// terms of the licensing MODEL (premium per-agent fulfiller seats). No fabricated
// client names, metrics, or prices.
export const metadata: Metadata = {
  title: "Reduce ServiceNow License Costs | Ardn",
  description:
    "Cut ServiceNow per-fulfiller license costs: reclaim inactive agent seats, split fulfillers from requesters, or move light users to a flat-fee custom portal.",
  keywords: [
    "reduce ServiceNow license costs",
    "ServiceNow fulfiller license cost",
    "ServiceNow requester vs fulfiller",
    "cut ServiceNow licensing costs",
    "ServiceNow license optimization",
    "ServiceNow seat cost reduction",
    "custom portal to reduce ServiceNow seats",
    "ServiceNow agent license cost",
    "ServiceNow cost reduction",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-servicenow-license-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-servicenow-license-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-servicenow-license-costs",
    },
  },
  openGraph: {
    title: "Reduce ServiceNow License Costs — Keep ServiceNow | Ardn",
    description:
      "Three honest ways to cut ServiceNow per-fulfiller costs without switching platforms: reclaim inactive seats, split fulfillers from requesters, or move light users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-servicenow-license-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to cut ServiceNow license costs without switching platforms — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce ServiceNow License Costs | Ardn",
    description:
      "Three honest ways to cut ServiceNow per-fulfiller costs — reclaim, split requesters, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the single biggest lever on ServiceNow license cost?",
    a: "The fulfiller-versus-requester split. ServiceNow bills its premium per-user cost for fulfillers — the agents who work records — while requesters who only raise and track requests are covered very differently. The most common overspend is people carried on full fulfiller seats who, in practice, only submit, approve, or check on requests. Mapping who is genuinely a fulfiller versus a requester or stakeholder is where most of the saving lives, and it's the first thing to get right before a renewal.",
  },
  {
    q: "How do I cut costs for people who have a fulfiller seat but barely work records?",
    a: "That's the classic ServiceNow overpayment: approvers, stakeholders, and occasional contributors sitting on premium fulfiller licenses because it was the easy way to give them access. Two options: move them to requester / self-service access where that genuinely covers their needs, or give them a purpose-built custom portal wired into ServiceNow through its Table / REST API that runs on one flat fee no matter how many users you add. The portal is usually the bigger, more durable saving because it breaks the link between cost and headcount.",
  },
  {
    q: "What is the fastest way to reduce ServiceNow license costs?",
    a: "Reclaiming inactive and duplicate fulfiller seats. Pull last-activity data, flag agents who haven't worked a record in 60+ days, and clean up accounts left over from role changes and departures. It's the fastest, lowest-risk saving because it changes nothing for active agents — and because fulfiller seats carry the premium cost, each one you reclaim is worth more than a light-tier seat elsewhere.",
  },
  {
    q: "Do I have to leave ServiceNow to save money?",
    a: "No. Every lever here keeps ServiceNow as your system of record. A seat audit and requester/fulfiller re-mapping right-size your existing subscription; a custom portal sits alongside ServiceNow and syncs through its API. A full migration off ServiceNow is a separate, much larger decision that only makes sense if the platform no longer fits your agents — not something to take on just to trim seat cost.",
  },
  {
    q: "Why is a custom portal cheaper than adding more ServiceNow seats?",
    a: "ServiceNow's fulfiller licensing is priced for a full agent working the platform all day. When you extend that seat to people who only submit, approve, or view, you pay a premium for a fraction of the use — and the bill grows every time you add one. A custom portal gives those users exactly the screens they need, synced live to ServiceNow, on one flat monthly fee that stays the same at 20 users or 500. We won't quote a fixed saving here because it depends on your fulfiller rate and how many light users you have — run the savings calculator with your own numbers.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim inactive fulfiller seats",
    body: "Dormant and duplicate agent licenses are the fastest win, and each one is premium-priced — deactivating them at renewal changes nothing for active agents. Start with last-activity data.",
    best: "Best for: inactive or forgotten fulfiller seats.",
  },
  {
    tag: "Lever 2 — Re-map",
    title: "Split fulfillers from requesters",
    body: "Approvers, stakeholders, and occasional contributors often sit on full fulfiller seats they don't need. Move them to requester / self-service access where it genuinely covers the work.",
    best: "Best for: users who submit, approve, or view but rarely work records.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need a sliver of ServiceNow a purpose-built portal wired into it through the API, on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: field, ops, partners & customers using ServiceNow lightly.",
  },
];

export default function ReduceServiceNowLicenseCostsPage() {
  const url =
    "https://ardncloudsolutions.com/reduce-servicenow-license-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce ServiceNow License Costs",
        name: "How to Reduce ServiceNow License Costs",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "ServiceNow license cost reduction" },
          { "@type": "Thing", name: "Fulfiller and requester licensing" },
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
          { "@type": "ListItem", position: 2, name: "Reduce ServiceNow License Costs", item: url },
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
                <span className="eyebrow">Reduce ServiceNow License Costs</span>
                <h1 className="display reveal">
                  Cut your ServiceNow bill — <em>without switching platforms.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  ServiceNow prices a full fulfiller seat for an agent who works
                  records all day, so the cost piles up on everyone lighter than
                  that — the approvers, stakeholders, and occasional contributors
                  carried on premium seats they barely use. There are three honest
                  ways to cut that bill, and only one of them requires building
                  anything. Here&apos;s how to decide which lever fits which
                  problem.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep ServiceNow</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Syncs via API</span>
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
                    <li>Reclaim inactive fulfiller seats</li>
                    <li>Split fulfillers from requesters</li>
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
                <h2 className="h1 mt-3">Why fulfiller seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">A ServiceNow fulfiller license is priced for an agent who works the platform all day. Most of the people on fulfiller seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One premium price for very different use</h3>
                <p className="body">An agent resolving tickets all day and an approver who clicks &ldquo;approve&rdquo; twice a week can carry the same fulfiller seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new approver, stakeholder, or team that gets a fulfiller seat adds another recurring premium license — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Fulfiller-in-name-only is common</h3>
                <p className="body">In most mid-market ServiceNow orgs, a large share of fulfiller seats belong to people who really only submit, approve, or view — so the overpayment is spread across much of the seat count.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              ServiceNow doesn&apos;t publish standard list prices — fulfiller
              rates are negotiated and vary widely — so we won&apos;t print a
              seat number here. What&apos;s consistent is the shape: fulfiller
              seats carry a premium per-user cost, and a flat-fee portal costs the
              same at 20 light users or 500.{" "}
              <Link href="/savings-calculator" className="link">Run the calculator</Link> with your own fulfiller rate to see the gap.
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
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the fulfiller seat</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Only submits, approves, or views</td><td>Move to requester / self-service</td><td className="is-no">Lower tier, still per-user</td></tr>
                  <tr><td className="feat">Light — field, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">Agent working records all day</td><td>Keep the full fulfiller seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the third row depend on how many light users you have and your negotiated fulfiller rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see how the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">per-seat math works out</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out ServiceNow.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting licensing cost and replacing your platform are two
                  different decisions, and the internet tends to blur them.
                  ServiceNow stays the system of record on every option here.
                  Your agents keep working exactly as they do today. All that
                  changes is that the users who need less stop paying a fulfiller
                  premium for a tool built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Dormant fulfiller seats are premium-priced free money — audit last-activity data and right-size at renewal.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the light users</div>
                      <p className="fl-body">The fulfiller-in-name-only users are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same ServiceNow records in real time through its API — no second database drifting out of sync.</p>
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
                <p className="body">Move light users off fulfiller seats onto a flat-fee portal wired into your data.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-dynamics-365-license-costs" className="link">Reduce Dynamics 365 license costs →</Link>
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
                <p className="lede">The biggest lever, light users, the fastest saving, migration risk, and cost.</p>
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

        <LeadForm source="Reduce ServiceNow Licensing Costs page" heading="See where your ServiceNow bill is leaking" showSeatQualifiers sub="Tell us roughly how many fulfiller seats you have and how many are light users. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying a fulfiller premium <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use ServiceNow, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
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
