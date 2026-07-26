import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Salesforce-SPECIFIC spoke for the per-seat cost-reduction wedge. Distinct from
// the CRM-agnostic pillar (/reduce-crm-licensing-costs): this page owns the
// high-intent money query "reduce Salesforce license costs" / "Salesforce
// license optimization" / "move light users off Salesforce" — where the whole
// SERP is license-audit SAM vendors and consultancies that stop at "reclaim
// seats / right-size to Platform." ARDN's unclaimed angle: keep Salesforce as
// the system of record and OFFLOAD light users to a custom portal so they stop
// consuming a seat at all. Honest: license figures are Salesforce's publicly
// listed list ranges, explicitly labeled illustrative (matching the seat-cost
// compare page); no fabricated client names, metrics, or savings numbers.
export const metadata: Metadata = {
  title: "How to Reduce Salesforce License Costs | Ardn",
  description:
    "Three ways to cut Salesforce license costs without leaving Salesforce: reclaim inactive seats, right-size to Platform licenses, or move light users to a portal.",
  keywords: [
    "reduce Salesforce license costs",
    "cut Salesforce licensing costs",
    "Salesforce license optimization",
    "too many Salesforce licenses",
    "Salesforce cost reduction",
    "move light users off Salesforce",
    "Salesforce Platform license vs full license",
    "reduce Salesforce seats",
    "Salesforce license audit",
    "custom portal to reduce Salesforce seats",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    },
  },
  openGraph: {
    title: "How to Reduce Salesforce License Costs — Keep Salesforce | Ardn",
    description:
      "Cut Salesforce license costs without a migration: reclaim inactive seats, right-size to Platform licenses, or move light users to a flat-fee custom portal.",
    url: "https://ardncloudsolutions.com/reduce-salesforce-license-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to reduce Salesforce license costs without switching off Salesforce — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Reduce Salesforce License Costs | Ardn",
    description:
      "Three ways to cut Salesforce license costs without leaving Salesforce — reclaim, right-size, or move light users to a flat-fee custom portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "How can I reduce Salesforce license costs without dropping features?",
    a: "Don't cut features — cut the seats you overpay for. Most of a Salesforce bill isn't the power users who run pipeline all day; it's the larger group of light users who touch one screen. You reclaim inactive seats, right-size occasional users to a cheaper Platform license, and move genuinely light users onto a custom portal that reads and writes Salesforce through its API without consuming a seat. Your power users keep every feature they have today.",
  },
  {
    q: "How much does a Salesforce seat cost per user?",
    a: "As a rough anchor from Salesforce's publicly listed list prices: a full Sales or Service Cloud Enterprise seat runs about $150–$165/user/month, a limited-access Salesforce Platform license about $25–$30/user/month, and login-based Experience Cloud access roughly $2–$10 per login. Actual pricing varies by edition, region, and your negotiated contract — confirm current numbers with Salesforce. The point is the spread: a light user on a full seat is the most overpaid unit in the org.",
  },
  {
    q: "Can I move users off Salesforce licenses but keep their data in Salesforce?",
    a: "Yes. A custom portal connects to your Salesforce org through its API and reads and writes the same records in real time. The light user works in the portal; the data lives in Salesforce. No seat is consumed because they never log into Salesforce directly — and there's no second database to drift out of sync.",
  },
  {
    q: "Platform license vs full Enterprise license — which do my users need?",
    a: "A full Enterprise seat is for people who need the whole platform: pipeline, reports, automation, the standard objects. A Platform license is cheaper but limited — it drops the CRM sales/service objects, so it fits users who only need custom apps and data, still billed per person. For users lighter than that — sellers checking a status, ops updating a record, partners submitting a request — a portal is usually cheaper still, because it stops billing per person entirely.",
  },
  {
    q: "Do I have to migrate off Salesforce to cut the bill?",
    a: "No — and you shouldn't confuse the two decisions. Cutting license cost keeps Salesforce as your system of record. Migrating to a different CRM is a separate, far larger project that only makes sense if the platform itself no longer fits your power users. Every lever on this page keeps Salesforce exactly where it is.",
  },
  {
    q: "How long does a portal take to stand up, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000 to $12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim inactive Salesforce seats",
    body: "Dormant, duplicate, and 'just in case' logins are the fastest win — deactivating them changes nothing for active users. License Guard automates the scan, warnings, and deactivation inside your org.",
    best: "Best for: seats nobody logs into.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Move users to a Platform license",
    body: "Occasional users who still need to log into Salesforce can drop from a full Enterprise seat to a cheaper Platform license. Lower per head — but still per head, and still capped in what you can give them.",
    best: "Best for: occasional users who need native Salesforce access.",
  },
  {
    tag: "Lever 3 — Offload the seat",
    title: "Move light users to a custom portal",
    body: "Give the users who need a sliver of Salesforce a purpose-built portal wired into your org, on one flat fee no matter how many you add. They stop consuming a seat entirely — cost stops scaling with headcount.",
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
        headline: "How to Reduce Salesforce License Costs Without Leaving Salesforce",
        name: "How to Reduce Salesforce License Costs Without Leaving Salesforce",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce license cost reduction" },
          { "@type": "Thing", name: "Salesforce per-seat pricing" },
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
                  Cut your Salesforce license bill — <em>without leaving Salesforce.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Salesforce prices every seat for a power user, so the overpayment
                  piles up on everyone lighter than that — the sellers, ops staff,
                  partners, and customers who touch it for a handful of tasks. You
                  can cut that bill three ways, and only one of them requires
                  building anything. Salesforce stays your system of record through
                  all of them.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Salesforce</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Reclaim, right-size &amp; offload</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Three levers, Salesforce-specific</div>
                  <ul className="features mt-3">
                    <li>Reclaim inactive seats (License Guard)</li>
                    <li>Right-size to a Platform license</li>
                    <li>Move light users to a flat-fee portal</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Only the third breaks the link between cost and headcount.
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
                <h2 className="h1 mt-3">Why Salesforce <em>overcharges light users.</em></h2>
              </div>
              <div>
                <p className="lede">A Salesforce seat is priced for someone who lives in the platform. Most seats don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">One seat price, very different use</h3>
                <p className="body">A rep running pipeline all day and a seller checking one screen twice a day can carry the same full seat. The lighter the use, the worse the value.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire, partner, or customer segment that needs access adds another recurring seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">Light users are the majority</h3>
                <p className="body">In most orgs the people who need a sliver of Salesforce outnumber the power users, so the overpayment is spread across most of the seat count.</p>
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
                <p className="lede">Start with the cheapest, lowest-risk lever and work down. Each addresses a different kind of overpayment.</p>
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

        {/* LICENSE-TIER TABLE */}
        <section className="section" id="tiers">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">What each option costs</span>
                <h2 className="h1 mt-3">Full seat, Platform seat, <em>login license, or portal.</em></h2>
              </div>
              <div>
                <p className="lede">The cheaper Salesforce tiers still bill per person. A portal is the only option where the cost stops scaling with headcount.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Access option</th>
                    <th>Typical list price</th>
                    <th>Still per person?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Full Sales/Service Cloud Enterprise seat</td><td>~$150–$165/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Salesforce Platform (limited-access) license</td><td>~$25–$30/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Login-based / Experience Cloud license</td><td>~$2–$10 per login (list)</td><td className="is-no">Yes — per login/user</td></tr>
                  <tr><td className="feat">Custom portal wired into Salesforce</td><td>Flat monthly fee, any headcount</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — flat, not per-seat</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed Salesforce ranges as of this writing — not a quote. Actual pricing varies by edition, region, and negotiated contract; confirm current numbers with Salesforce. Run the{" "}
              <Link href="/savings-calculator" className="link">savings calculator</Link> for your own seat count and rate, or see the{" "}
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
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
                  users who need less stop paying for a platform built for someone
                  who needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim first</div>
                      <p className="fl-body">Dormant seats are free money — <Link href="/license-guard" className="link">License Guard</Link> automates the scan, warnings, and deactivation inside your org.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then offload the light users</div>
                      <p className="fl-body">The seats that are used, but lightly, are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
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
                <p className="body">Move light users off Salesforce seats onto a flat-fee portal wired into your org.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Experience Cloud vs. Portal</h3>
                <p className="body">Why a built-and-run custom portal beats per-login Experience Cloud for light users.</p>
                <span className="link">See the comparison →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">On HubSpot or another CRM too? The full CRM cost guide →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
              <Link href="/custom-software-development" className="link">All custom software &amp; platform builds →</Link>
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
                <p className="lede">Cutting cost without dropping features, seat pricing, keeping data in Salesforce, and migration risk.</p>
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

        <LeadForm source="Reduce Salesforce License Costs page" heading="See where your Salesforce bill is leaking" sub="Tell us roughly how many Salesforce users you run and how many barely touch it. We'll come back with which levers cut the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full Salesforce seats <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Salesforce, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Not just Salesforce? See the full CRM licensing-cost guide →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
