import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Salesforce-specific money page for the per-seat cost-reduction wedge. Targets
// the highest-intent branded terms ("reduce Salesforce license costs",
// "Salesforce license optimization", "Salesforce Platform vs full license")
// that the generic /reduce-crm-licensing-costs pillar and the single
// /compare/salesforce-seat-cost-vs-custom-portal page don't own head-on. This
// is the consolidating hub for the ~17 Salesforce cost blog posts.
// Pricing shown is publicly listed Salesforce list price, explicitly labeled
// illustrative (Enterprise ~$175/user/mo post the Aug-2025 increase; Platform
// ~$25; Experience Cloud ~$2-10/login). No fabricated client names or metrics.
export const metadata: Metadata = {
  title: "How to Reduce Salesforce License Costs | Ardn",
  description:
    "Four honest ways to cut Salesforce license costs: reclaim dormant seats, right-size to Platform licenses, or move light users to a flat-fee portal.",
  keywords: [
    "reduce Salesforce license costs",
    "cut Salesforce licensing costs",
    "Salesforce license optimization",
    "Salesforce Platform license vs full license",
    "reduce Salesforce seat costs",
    "Salesforce Experience Cloud cost",
    "custom portal to reduce Salesforce seats",
    "Salesforce license audit",
    "Salesforce cost reduction",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-salesforce-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-salesforce-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-salesforce-costs",
    },
  },
  openGraph: {
    title: "How to Reduce Salesforce License Costs — Keep Salesforce | Ardn",
    description:
      "Four honest ways to reduce Salesforce license costs without a migration: reclaim dormant seats, right-size to Platform licenses, or move light users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-salesforce-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce Salesforce license costs without leaving Salesforce — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reduce Salesforce License Costs | Ardn",
    description:
      "Four honest ways to reduce Salesforce license costs — reclaim, right-size to Platform, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the fastest way to reduce Salesforce license costs?",
    a: "Reclaiming seats nobody uses. Most Salesforce orgs carry dormant, duplicate, and 'just in case' licenses — people who left, changed roles, or were provisioned for a project that ended. Auditing usage and deactivating those at renewal is the quickest, lowest-risk saving because it changes nothing for active users. License Guard automates that scan continuously so seats don't drift back into dormancy between audits.",
  },
  {
    q: "What is the difference between a Salesforce Platform license and a full license?",
    a: "A Platform license gives a user access to custom apps and custom objects but not the standard Sales/Service objects like Leads, Opportunities, and Cases. It lists well below a full Sales or Service Cloud seat, so users who only work inside custom objects — not the standard CRM pipeline — can often move to Platform and keep everything they actually use. Full CRM licenses are only worth it for the power users living in the standard objects all day.",
  },
  {
    q: "How much can you save moving users from Enterprise to Platform licenses?",
    a: "It depends on your negotiated rate and how many users qualify, so we won't quote a fixed number. The mechanism: a full Sales Cloud Enterprise seat lists around $175/user/month while a Platform license lists far lower, so right-sizing the users who don't need standard objects trims a meaningful slice off the bill. But it's still per-seat and still capped in what you can build for that user — for genuinely light users, a flat-fee portal saves more and stops scaling with headcount. Run the savings calculator for your own numbers.",
  },
  {
    q: "How does Experience Cloud pricing work for external users?",
    a: "Salesforce sells Experience Cloud (partner and customer portals) two ways: login-based, where you buy a pool of logins and each session draws from it (publicly listed roughly $2–$10 per login depending on license type), and member-based, a flat rate per named external user below an internal seat. Both are cheaper per person than a full seat, but both still scale with the number of external users or logins — so a partner or customer program that grows becomes a growing line item. A custom portal costs the same flat fee at 10 external users or 400.",
  },
  {
    q: "Do I have to leave Salesforce to cut the cost?",
    a: "No. Every lever here keeps Salesforce as the system of record. A license audit right-sizes your existing contract; a custom portal sits alongside Salesforce and syncs through its API, reading and writing the same records in real time. A full migration is a separate, larger decision that only makes sense if the platform itself no longer fits your power users — not something to take on just to trim seat cost.",
  },
  {
    q: "How long does a portal take to stand up, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes, with no per-seat pricing. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim dormant Salesforce seats",
    body: "Deactivate the licenses nobody uses — people who left, changed roles, or were provisioned 'just in case.' It changes nothing for active users, so it's the fastest, lowest-risk win.",
    best: "Best for: inactive, duplicate, or forgotten seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Move users to Platform licenses",
    body: "Users who only touch custom objects — not standard Leads, Opportunities, or Cases — often don't need a full Sales/Service seat. A Platform license keeps what they use at a lower rate. Still per-seat, still capped.",
    best: "Best for: internal users who never touch the standard CRM pipeline.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light users to a flat-fee portal",
    body: "Sellers, ops staff, partners, and customers who need a sliver of Salesforce get a purpose-built portal wired into it — on one flat fee no matter how many you add. Cost stops scaling with headcount.",
    best: "Best for: light internal users, partners & customers.",
  },
];

export default function ReduceSalesforceCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-salesforce-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce Salesforce License Costs Without Leaving Salesforce",
        name: "How to Reduce Salesforce License Costs Without Leaving Salesforce",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce license cost reduction" },
          { "@type": "Thing", name: "Salesforce Platform license" },
          { "@type": "Thing", name: "Experience Cloud pricing" },
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
                  Cut your Salesforce bill — <em>without leaving Salesforce.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Salesforce per-seat pricing is built around the power user who
                  lives in the platform all day. Most of your seats don&apos;t —
                  the sellers, ops staff, partners, and customers who touch it for
                  a handful of tasks. There are four honest ways to cut that bill,
                  and only one of them requires building anything. Here&apos;s how
                  to decide which lever fits which user.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Salesforce</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Synced through the Salesforce API</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free savings call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">See what you&apos;d save →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The four levers</div>
                  <ul className="features mt-3">
                    <li>Reclaim dormant seats</li>
                    <li>Right-size to Platform licenses</li>
                    <li>Right-size external users on Experience Cloud</li>
                    <li>Move light users to a flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the last one breaks the link between cost and headcount.
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
                <p className="body">A rep who runs pipeline all day and a seller who checks one screen twice a day cost nearly the same per seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">External programs never stop growing</h3>
                <p className="body">Partner and customer portals on Experience Cloud bill per login or per member. Add resellers, brokers, or customer segments and the meter moves — permanently.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most orgs, the people who need a sliver of Salesforce outnumber the power users — so the overpayment is spread across most of the seat count, not a corner of it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SEAT-TIER SAVINGS TABLE */}
        <section className="section is-canvas" id="savings">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The math, illustrated</span>
                <h2 className="h1 mt-3">Three tiers of Salesforce access, <em>three very different costs.</em></h2>
              </div>
              <div>
                <p className="lede">Same user, three ways to give them what they need. The right tier depends on how much of Salesforce they actually touch.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>How the user is served</th>
                    <th>Typical published list price</th>
                    <th>Scales with headcount?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Full Sales/Service Cloud seat</td><td>~$175/user/mo</td><td className="is-no">Yes — per seat</td></tr>
                  <tr><td className="feat">Platform license (custom objects only)</td><td>Far below a full seat</td><td className="is-no">Yes — per seat, but lower</td></tr>
                  <tr><td className="feat">Experience Cloud (external)</td><td>~$2–$10 per login, or flat per member</td><td className="is-no">Yes — per login / per member</td></tr>
                  <tr><td className="feat">Flat-fee custom portal</td><td>One flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              List prices shown for illustration only (Salesforce Enterprise
              lists around $175/user/month after its 2025 increase; Experience
              Cloud external pricing is publicly listed in the ~$2–$10 per-login
              range). Your negotiated rate will differ — run the{" "}
              <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the{" "}
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* THE FOUR LEVERS */}
        <section className="section" id="levers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">The decision framework</span>
                <h2 className="h1 mt-3">Ways to cut the bill. <em>Use them in order.</em></h2>
              </div>
              <div>
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each one addresses a different kind of overpayment — most orgs use more than one.</p>
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
            <p className="body mt-4">
              For external partner and customer programs, the same logic applies to{" "}
              <Link href="/custom-partner-portal-development" className="link">partner portal development</Link> —
              a flat-fee portal replaces the per-login Experience Cloud meter for
              resellers, brokers, and dealers.
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
                  Cutting licensing cost and replacing your CRM are two different
                  decisions, and the internet tends to blur them. Salesforce stays
                  the system of record on every option here. Your power users keep
                  working exactly as they do today. All that changes is that the
                  users who need less stop paying for a tool built for someone who
                  needs everything.
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
                      <div className="fl-head !text-black">Then right-size and move light users</div>
                      <p className="fl-body">The seats that are used, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same Salesforce records in real time through the API — no second database drifting out of sync.</p>
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
                <p className="body">Move light users off per-seat licenses onto a flat-fee portal wired into Salesforce.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">The cross-CRM cost-reduction framework →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
              <Link href="/reduce-hubspot-costs" className="link">On HubSpot instead? Cut HubSpot seat costs →</Link>
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
                <p className="lede">The fastest saving, Platform vs full licenses, Experience Cloud pricing, and migration risk.</p>
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

        <LeadForm source="Reduce Salesforce License Costs page" heading="See where your Salesforce bill is leaking" showSeatQualifiers sub="Tell us roughly how many Salesforce users you have and how they split between power and light use. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Salesforce, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See the full cross-CRM cost-reduction framework →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
