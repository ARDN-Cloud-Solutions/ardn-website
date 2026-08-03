import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// WEDGE spoke for the per-seat cost-reduction play, applied to HubSpot — the
// site's second CRM audience (previously ZERO HubSpot-targeted coverage). Mirrors
// the /reduce-crm-licensing-costs pillar structure but is HubSpot-accurate: it is
// honest that HubSpot already gives FREE unlimited view-only seats, and positions
// the portal only where HubSpot's own model can't help — light users who must ACT
// (paid Core/Sales/Service seats) and EXTERNAL partners/customers HubSpot was never
// built to serve as a portal. No fabricated pricing: HubSpot list prices are
// publicly listed, labeled illustrative, and the calculator is offered for real
// numbers. GEO-structured (H2/H3, decision table, FAQ + FAQPage schema).
export const metadata: Metadata = {
  title: "How to Cut HubSpot Seat Costs | Ardn",
  description:
    "Cut HubSpot per-seat costs without switching CRMs: reclaim seats, use free view-only seats, or move light & external users to a flat-fee custom portal.",
  keywords: [
    "reduce HubSpot costs",
    "cut HubSpot seat costs",
    "HubSpot per seat pricing alternative",
    "reduce HubSpot licensing costs",
    "HubSpot core seat cost",
    "custom portal to replace HubSpot seats",
    "HubSpot customer portal",
    "HubSpot partner portal",
    "light user HubSpot seat",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-hubspot-costs",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-hubspot-costs",
      "x-default": "https://ardncloudsolutions.com/reduce-hubspot-costs",
    },
  },
  openGraph: {
    title: "How to Cut HubSpot Seat Costs — Keep HubSpot | Ardn",
    description:
      "Three honest ways to reduce HubSpot per-seat costs without a migration: reclaim paid seats, use free view-only seats, or move light & external users to a flat-fee portal.",
    url: "https://ardncloudsolutions.com/reduce-hubspot-costs",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "How to cut HubSpot seat costs without switching CRMs — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Cut HubSpot Seat Costs | Ardn",
    description:
      "Three honest ways to reduce HubSpot per-seat costs — reclaim seats, use free view-only seats, or move light & external users to a flat-fee portal.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Does HubSpot charge per seat?",
    a: "Yes, for anyone who needs to work in it. HubSpot's paid seats — Core seats, plus role-specific Sales and Service seats — are billed per user. HubSpot does give unlimited free view-only seats on paid accounts, which is a genuine lever for people who only need to look at data or dashboards. The cost concentrates on the users who need to do more than look but far less than a power user does.",
  },
  {
    q: "What is the fastest way to reduce HubSpot costs?",
    a: "Two quick, no-build wins first. Reclaim paid seats nobody actively uses — people who left, changed roles, or were provisioned 'just in case.' Then move anyone who only needs to view records or reports onto HubSpot's free view-only seats instead of a paid Core seat. Both change nothing for your power users and cost nothing to do. What's left after that is the group a portal addresses.",
  },
  {
    q: "How do I cut costs for users who need more than view-only but aren't power users?",
    a: "That's the expensive middle. A free view-only seat can't submit, edit, log activity, or run a process, so the moment a light user needs to act, HubSpot puts them on a paid Core (or Sales/Service) seat billed the same whether they use one feature or fifty. The durable fix is to give those users a purpose-built portal wired into HubSpot through its API — they get exactly the actions they need on one flat fee, no matter how many of them you add, while HubSpot stays the system of record.",
  },
  {
    q: "Can I give partners or customers access to HubSpot without buying them seats?",
    a: "Not cleanly — HubSpot was built as an internal CRM, not an external portal, so partners, vendors, and customers either get left out or end up on paid seats by default. A custom portal solves exactly this: external users log into a branded portal that reads and writes your HubSpot records in real time, on one flat fee, with no seat per partner or customer.",
  },
  {
    q: "Do I have to leave HubSpot to save money?",
    a: "No. Every lever on this page keeps HubSpot as your system of record. Reclaiming seats and using free view-only seats right-size your existing account; a custom portal sits alongside HubSpot and syncs through its API. Switching CRMs is a separate, larger decision that only makes sense if the platform itself no longer fits your core team — not something to take on just to trim seat cost.",
  },
  {
    q: "How much can a custom portal save versus HubSpot seats?",
    a: "It depends on how many light and external users you have and what you pay per seat, so we won't quote a fixed number. The mechanism is simple: paid seats recur and grow with headcount, while a flat-fee portal costs the same at 10 users or 400. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "How long does it take to stand up a portal, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const levers = [
  {
    tag: "Lever 1 — Reclaim",
    title: "Reclaim paid seats nobody uses",
    body: "Dormant, duplicate, and 'just in case' Core/Sales/Service seats are the fastest win because deactivating them changes nothing for active users. Audit usage and right-size at renewal.",
    best: "Best for: inactive or forgotten paid seats.",
  },
  {
    tag: "Lever 2 — Right-size",
    title: "Move viewers to free view-only seats",
    body: "HubSpot gives unlimited free view-only seats on paid accounts. Anyone who only reads records or dashboards doesn't need a paid Core seat — this lever costs nothing and HubSpot supports it natively.",
    best: "Best for: users who only look, never edit.",
  },
  {
    tag: "Lever 3 — Replace the seat",
    title: "Move light & external users to a flat-fee portal",
    body: "For users who must act — and for partners and customers HubSpot can't serve as a portal — a custom portal wired into HubSpot gives them exactly what they need on one flat fee. Cost stops scaling with headcount.",
    best: "Best for: light internal users who act, plus partners & customers.",
  },
];

export default function ReduceHubspotCostsPage() {
  const url = "https://ardncloudsolutions.com/reduce-hubspot-costs";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Cut HubSpot Seat Costs Without Switching CRMs",
        name: "How to Cut HubSpot Seat Costs Without Switching CRMs",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "HubSpot cost reduction" },
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
          { "@type": "ListItem", position: 2, name: "Reduce HubSpot Costs", item: url },
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
                <span className="eyebrow">Reduce HubSpot Costs</span>
                <h1 className="display reveal">
                  Cut your HubSpot seat bill — <em>without switching CRMs.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  HubSpot seats are priced for people who work in the platform, so
                  the cost piles up on everyone lighter than that — the users who
                  just need to submit or check one thing, and the partners and
                  customers HubSpot was never built to serve. There are three
                  honest ways to cut that bill, and only one of them requires
                  building anything. Here&apos;s how to decide which lever fits
                  which problem.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep HubSpot</span>
                  <span className="badge is-emerald">No migration</span>
                  <span className="badge is-canvas">Two-way API sync</span>
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
                    <li>Reclaim paid seats nobody uses</li>
                    <li>Move viewers to free view-only seats</li>
                    <li>Move light &amp; external users to a flat-fee portal</li>
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
                <h2 className="h1 mt-3">Why HubSpot seats <em>overcharge light users.</em></h2>
              </div>
              <div>
                <p className="lede">A paid HubSpot seat is priced for someone who works in the platform. Most of your users don&apos;t — and that gap is where the overpayment sits.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Free view-only only goes so far</h3>
                <p className="body">HubSpot&apos;s free view-only seats are great for people who just look. But the moment a user needs to submit, edit, or log activity, they need a paid seat — priced the same whether they use one feature or fifty.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">The bill grows with headcount</h3>
                <p className="body">Every new hire or team that needs to act in HubSpot adds another recurring paid seat — permanently, unless something changes the model.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">External users have no good seat</h3>
                <p className="body">HubSpot is an internal CRM, not an external portal. Partners, vendors, and customers either get locked out or end up consuming paid seats meant for staff.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              For scale: HubSpot lists paid Core seats around $50/user/month on
              Professional, with role-specific Sales and Service seats around
              $100/user/month, while view-only seats are free. A flat-fee portal
              costs the same at 10 light users or 400. (List prices shown for
              illustration only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own plan and rate.)
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
                <p className="lede">Start with the free, no-build levers and work down. Each one addresses a different kind of overpayment.</p>
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
                  <tr><td className="feat">Inactive / left the company</td><td>Reclaim the paid seat (audit)</td><td className="is-yes">$0 — seat removed</td></tr>
                  <tr><td className="feat">Only views records or dashboards</td><td>Move to a free view-only seat</td><td className="is-yes">$0 — HubSpot&apos;s free tier</td></tr>
                  <tr><td className="feat">Light — must submit or edit a little</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, same at any headcount</td></tr>
                  <tr><td className="feat">External — partner, vendor, customer</td><td>Move to a flat-fee custom portal</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee, no seat per partner</td></tr>
                  <tr><td className="feat">Power user living in HubSpot</td><td>Keep the full seat</td><td className="is-no">Full seat — and worth it</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              This is a framework, not a quote. The savings on the portal rows depend on how many light and external users you have and your negotiated seat rate — run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">full seat-cost math</Link>.
            </p>
          </div>
        </section>

        {/* NOT A MIGRATION */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep what works</span>
                <h2 className="h1 mt-3">This isn&apos;t <em>&ldquo;rip out HubSpot.&rdquo;</em></h2>
                <p className="body mt-4">
                  Cutting seat cost and replacing your CRM are two different
                  decisions, and the internet tends to blur them. HubSpot stays
                  your system of record on every option here. Your power users keep
                  working exactly as they do today. All that changes is that the
                  users who need less — and the partners and customers HubSpot was
                  never built for — stop consuming seats built for someone who
                  needs everything.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Free levers first</div>
                      <p className="fl-body">Reclaim dormant paid seats, then move pure viewers to HubSpot&apos;s free view-only seats. No build required.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then move the rest</div>
                      <p className="fl-body">Light users who must act — and every external partner or customer — are where a <Link href="/custom-portal-development" className="link">custom portal</Link> makes the biggest, most durable dent.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep one source of truth</div>
                      <p className="fl-body">The portal reads and writes the same HubSpot records in real time through its API — no second database drifting out of sync.</p>
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
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The big lever</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light and external users off paid HubSpot seats onto a flat-fee portal wired into HubSpot.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/custom-partner-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Partner Portals</h3>
                <p className="body">Give partners, dealers, and vendors a branded portal instead of a paid seat they should never have.</p>
                <span className="link">Explore partner portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/reduce-crm-licensing-costs" className="link">The full guide: how to cut CRM licensing costs →</Link>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full custom-vs-SaaS cost breakdown →</Link>
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
                <p className="lede">Seat pricing, free view-only seats, external users, migration risk, and cost.</p>
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

        <LeadForm source="Reduce HubSpot Costs page" heading="See where your HubSpot bill is leaking" showSeatQualifiers sub="Tell us which CRM you run and roughly how many users. We'll come back with which levers cut your cost the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying full price <em>for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use HubSpot, show which levers cut the most, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-portal-development" className="btn btn-outline-light btn-lg">Explore custom portals</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/reduce-crm-licensing-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>On Salesforce or another CRM? See the full CRM cost guide →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
