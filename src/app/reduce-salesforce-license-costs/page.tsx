import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Salesforce-BRANDED money page for the per-seat cost-reduction wedge. Both
// the keyword and SERP research flagged the same gap: the head term "reduce
// Salesforce license costs" / "Salesforce license optimization" is the
// highest-volume commercial query in the wedge, and the SERP is entirely
// consultancies selling audits that keep users INSIDE Salesforce. Nobody
// sells the outcome ARDN owns: keep Salesforce as the system of record for
// power users, and move light users OFF a Salesforce seat entirely onto a
// flat-fee custom portal that syncs live through the API.
//
// This is distinct from /reduce-crm-licensing-costs (the generic, multi-CRM
// pillar) — this page is Salesforce-specific: it walks the actual Salesforce
// cost ladder (Enterprise seat → Platform/limited tier → flat-fee portal →
// $0 seat) and the Experience Cloud external-user angle. Positioning stays
// "keep your CRM, cut the bill," NOT "rip out Salesforce."
//
// No fabricated pricing: the only figures cited are Salesforce's own publicly
// listed list prices, explicitly labeled illustrative, with the calculator
// offered for a reader's own negotiated numbers. No invented client names,
// metrics, or certifications.
export const metadata: Metadata = {
  title: "Reduce Salesforce License Costs | Ardn",
  description:
    "Cut Salesforce license costs without leaving Salesforce: reclaim unused seats, down-tier to Platform, or move light users to a flat-fee custom portal.",
  keywords: [
    "reduce Salesforce license costs",
    "Salesforce license optimization",
    "cut Salesforce licensing costs",
    "lower Salesforce license cost",
    "Salesforce seat cost reduction",
    "Salesforce Platform license vs full license",
    "move light users off Salesforce",
    "custom portal to reduce Salesforce seats",
    "Salesforce Experience Cloud alternative",
    "reduce per-seat license costs",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    },
  },
  openGraph: {
    title: "Reduce Salesforce License Costs — Keep Salesforce | Ardn",
    description:
      "Cut Salesforce license costs without a migration: reclaim unused seats, down-tier to Platform, or move light users to a flat-fee custom portal that syncs live.",
    url: "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce Salesforce license costs without switching CRMs — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce Salesforce License Costs | Ardn",
    description:
      "Cut Salesforce license costs without leaving Salesforce — reclaim seats, down-tier, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How can I reduce Salesforce license costs without leaving Salesforce?",
    a: "There are three levers, and none of them is a migration. First, reclaim the seats nobody uses — dormant, duplicate, and 'just in case' licenses you can deactivate at renewal. Second, down-tier the users who need less native access to a cheaper Salesforce edition or a Platform license. Third — the biggest and most durable saving — move your light users off a Salesforce seat entirely and onto a custom portal that syncs with your org through the API. Salesforce stays the system of record for your power users the whole time.",
  },
  {
    q: "What is the floor on Salesforce license optimization?",
    a: "Optimization inside Salesforce has a hard floor: even after you down-tier, a Platform or limited-access license is still a recurring per-seat fee, and it still caps what that user can do. You can shrink the number, but you can't get it to zero as long as the user holds a Salesforce seat. The only way past the floor is to remove the seat — give that light user a purpose-built portal wired into Salesforce instead, on one flat fee no matter how many users you add.",
  },
  {
    q: "Which Salesforce users are worth moving to a portal?",
    a: "Light users — the people who touch Salesforce for a narrow slice of work but get billed like someone who lives in it. Field sellers checking an order, ops staff updating a status, partners submitting a request, customers viewing their account. They don't need the full platform; they need a focused tool. Power users who run pipeline and build reports all day keep their full seats — those are worth it.",
  },
  {
    q: "Do we lose our Salesforce data or reporting if light users move to a portal?",
    a: "No. The portal reads and writes the same Salesforce records in real time through the API, so there is one source of truth — Salesforce stays the system of record and your reporting is unaffected. Every portal user's access follows the permissions you already define in Salesforce. Nothing is copied into a second database that can drift out of sync.",
  },
  {
    q: "What about Experience Cloud external users — partners and customers?",
    a: "External users are often the sharpest saving of all. Experience Cloud bills per login or per member on top of your internal seats, so partner, dealer, and customer communities add a recurring external-license line that grows with every new login. A custom partner or customer portal re-homes those users onto one flat fee and still syncs live with Salesforce.",
  },
  {
    q: "How fast can a portal be live, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build. The recurring seat savings typically dwarf the subscription.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim Salesforce seats nobody uses",
    body: "Dormant, duplicate, and 'just in case' licenses are the fastest win because deactivating them changes nothing for active users. License Guard automates the scan for Salesforce orgs.",
    best: "Best for: inactive or forgotten seats.",
  },
  {
    tag: "Lever 2 — Down-tier",
    title: "Move users to a cheaper Salesforce tier",
    body: "Salesforce sells Platform and limited-access licenses below a full Sales/Service Cloud seat. Cheaper per head — but still per head, still recurring, and still capped in what you can build for that user.",
    best: "Best for: occasional users who still need native Salesforce access.",
  },
  {
    tag: "Lever 3 — Remove the seat",
    title: "Move light users to a flat-fee portal",
    body: "Give the users who need a sliver of Salesforce a purpose-built portal wired into your org, on one flat fee no matter how many you add. This is the only lever that takes seat cost to zero.",
    best: "Best for: sellers, ops, partners & customers using Salesforce lightly.",
  },
];

export default function ReduceSalesforceLicenseCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-salesforce-license-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce Salesforce License Costs Without Switching CRMs",
        name: "How to Reduce Salesforce License Costs Without Switching CRMs",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce license cost reduction" },
          { "@type": "Thing", name: "Salesforce license optimization" },
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
          { "@type": "ListItem", position: 2, name: "Reduce Salesforce License Costs", item: url },
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
                <span className="eyebrow">Reduce Salesforce License Costs</span>
                <h1 className="display reveal">
                  Cut your Salesforce license bill — <em>keep Salesforce.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Salesforce prices every seat for a power user, so the cost piles
                  up on everyone lighter than that — the sellers, ops staff,
                  partners, and customers who touch it for a handful of tasks.
                  Auditing and down-tiering shrink the bill, but they have a floor:
                  a seat is a seat. The only way past it is to move light users off
                  a Salesforce license entirely — onto a flat-fee portal that still
                  syncs live with your org. Here&apos;s how to decide which lever
                  fits which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Salesforce</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Salesforce stays system of record</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="#quote" className="btn btn-secondary btn-lg">Get a free quote →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The Salesforce cost ladder</div>
                  <ul className="features mt-3">
                    <li>Full Sales/Service Cloud seat — most expensive</li>
                    <li>Platform / limited-access tier — cheaper, still per-seat</li>
                    <li>Flat-fee custom portal — seat cost goes to $0</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the last rung breaks the link between cost and headcount.
                  </p>
                  <p className="body" style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/savings-calculator" className="link">Run your own Salesforce seat-savings numbers →</Link>
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
                <h2 className="h1 mt-3">Why Salesforce seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">A Salesforce seat is priced for someone who lives in the platform. Most of your seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One price for very different use</h3>
                <p className="body">A rep who runs pipeline all day and a seller who checks one screen twice a day usually cost the same per seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring Salesforce seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">External users cost extra</h3>
                <p className="body">Partner and customer communities bill per login or per member through Experience Cloud, stacked on top of internal seats — a separate meter that also grows with use.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: a full Salesforce Sales Cloud Enterprise seat lists at
              roughly $165/user/month, a Platform license lists lower but still
              bills per user every month, and Experience Cloud external users bill
              per login or per member on top. A flat-fee portal costs the same at
              10 light users or 400. (List prices shown for illustration only —{" "}
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
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each one addresses a different kind of overpayment — and only the last one gets to zero.</p>
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
                <span className="eyebrow">Which lever, which user</span>
                <h2 className="h1 mt-3">Match the fix <em>to the Salesforce user.</em></h2>
              </div>
              <div>
                <p className="lede">A quick way to route each group to the right saving. Most companies use more than one lever at once.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>If the Salesforce user is…</th>
                    <th>The right lever</th>
                    <th>Cost after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the seat (License Guard)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Occasional, but needs native Salesforce</td><td>Down-tier to Platform / limited access</td><td className="is-no">Lower per-seat, still per-seat</td></tr>
                  <tr><td className="feat">Light — a seller, ops, partner, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">External partner / customer (Experience Cloud)</td><td>Move to a flat-fee partner/customer portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee — no per-login meter</td></tr>
                  <tr><td className="feat">Power user living in the platform</td><td>Keep the full Salesforce seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings depend on how many light users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full Salesforce seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out Salesforce.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting license cost and replacing Salesforce are two different
                  decisions, and the internet tends to blur them. Salesforce stays
                  the system of record on every option here. Your power users keep
                  working exactly as they do today. All that changes is that the
                  users who need less stop paying full Salesforce price for a tool
                  built for someone who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Dormant seats are free money — <Link href="/license-guard" className="link">License Guard</Link> automates the scan for Salesforce orgs.</p>
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
                      <div className="fl-head !text-black">Re-home external users too</div>
                      <p className="fl-body">Partner and customer communities move to a <Link href="/custom-partner-portal-development" className="link">flat-fee partner portal</Link> instead of a per-login Experience Cloud meter.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same Salesforce records in real time — no second database drifting out of sync.</p>
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
              <Link href="/license-guard" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">License Guard</h3>
                <p className="body">Reclaim dormant Salesforce seats automatically — the fastest, lowest-risk lever.</p>
                <span className="link">Explore License Guard →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light Salesforce users off per-seat licenses onto a flat-fee portal wired into your org.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your Salesforce seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
              <Link href="/reduce-crm-licensing-costs" className="link">On HubSpot or another CRM? Cut CRM licensing costs →</Link>
              <Link href="/custom-partner-portal-development" className="link">Replace per-login partner licenses →</Link>
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
                <p className="lede">The fastest saving, the optimization floor, light users, data, and cost.</p>
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

        <LeadForm source="Reduce Salesforce License Costs page" heading="See where your Salesforce bill is leaking" showSeatQualifiers sub="Tell us roughly how many Salesforce seats you run and how many are light users. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full Salesforce price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Salesforce, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Not on Salesforce? See how to cut any CRM&rsquo;s licensing costs →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
