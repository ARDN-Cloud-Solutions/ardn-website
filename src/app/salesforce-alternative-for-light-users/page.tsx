import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";
import Testimonial from "@/components/common/Testimonial";

// WEDGE spoke targeting the "Salesforce alternative" query family with the
// honest COUNTER-FRAME the rip-and-replace listicles (Zoho/Pipedrive/Freshsales)
// won't make: most people searching "Salesforce alternative" don't need a new
// CRM at all — they're overpaying for LIGHT users. The move is to keep
// Salesforce for the reps who live in it and offload read-only / occasional /
// external users to a flat-fee custom portal. This intent is thin and un-owned
// in the SERP and maps exactly to ARDN's per-seat cost-reduction wedge.
// Distinct from /reduce-crm-licensing-costs (the 3-lever framework) and
// /custom-portal-development (the product) — this page owns the "alternative
// for light users" phrasing specifically. No fabricated pricing: list prices
// are public, labeled illustrative, and route to the calculator for real math.
export const metadata: Metadata = {
  title: "Salesforce Alternative for Light Users | Ardn",
  description:
    "The best Salesforce alternative for light users isn't a new CRM — it's moving read-only and occasional users to a flat-fee custom portal. Keep Salesforce.",
  keywords: [
    "Salesforce alternative for light users",
    "Salesforce alternative without switching CRM",
    "cheaper than Salesforce for read-only users",
    "Salesforce alternative for occasional users",
    "reduce Salesforce seats for light users",
    "move light users off Salesforce",
    "custom portal instead of Salesforce license",
    "Salesforce read-only user cost",
    "reduce per-seat license costs",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/salesforce-alternative-for-light-users",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/salesforce-alternative-for-light-users",
      "x-default":
        "https://ardncloudsolutions.com/salesforce-alternative-for-light-users",
    },
  },
  openGraph: {
    title: "Salesforce Alternative for Light Users — Keep Salesforce | Ardn",
    description:
      "Don't migrate to a new CRM to save money. Move read-only and occasional users off Salesforce seats onto a flat-fee custom portal — and keep Salesforce.",
    url: "https://ardncloudsolutions.com/salesforce-alternative-for-light-users",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Salesforce alternative for light users — move them to a flat-fee custom portal, keep Salesforce — Ardn",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Alternative for Light Users | Ardn",
    description:
      "The smartest Salesforce alternative for light users isn't a new CRM — it's a flat-fee custom portal. Keep Salesforce for the reps who need it.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is the best Salesforce alternative for light users?",
    a: "For users who only touch the CRM lightly — checking a record, updating a status, submitting a request — the best alternative usually isn't another CRM at all. It's a purpose-built portal wired into Salesforce that gives those users exactly what they need on one flat fee, while Salesforce stays the system of record for the reps who live in it. You avoid a migration and stop paying full seats for light use.",
  },
  {
    q: "Do light users really need a full Salesforce license?",
    a: "Almost never. Per-seat pricing is built around the power user who runs pipeline all day. Light users — sellers checking inventory, ops staff updating orders, partners and customers submitting requests — get billed the same (or nearly the same) for a fraction of the value. That gap is exactly where the overpayment sits, and it's usually spread across the majority of your seat count.",
  },
  {
    q: "Can read-only or external users see Salesforce data without a full seat?",
    a: "Yes. A custom portal reads and writes the same Salesforce records in real time through the API, with every user's access following the permissions you already define in Salesforce. There's no second copy of the data drifting out of sync — the portal is a tailored window into your Salesforce org, so read-only and external users get what they need without a named-user seat.",
  },
  {
    q: "Isn't a Salesforce alternative just another CRM I have to migrate to?",
    a: "That's the assumption most 'Salesforce alternative' lists make — and for light users it's the wrong one. Migrating your whole org to Zoho, Pipedrive, or HubSpot to save on seats trades one per-seat bill for another and forces a painful data move. Keeping Salesforce and moving only the light users to a flat-fee portal gets the savings without the migration risk.",
  },
  {
    q: "How much does moving light users to a portal actually save?",
    a: "It depends on how many light users you have and your negotiated seat rate, so we won't quote a fixed number. The mechanism is what matters: per-seat fees recur and grow with headcount, while a flat-fee portal costs the same at 10 light users or 400. Our savings calculator lets you plug in your own seat count and rate to see the comparison for your situation.",
  },
  {
    q: "Which users should stay in Salesforce?",
    a: "Your power users — the reps and admins who live in the platform all day and use its full depth. Keep their full seats; they're worth it. The portal is for everyone lighter than that. Most companies run both side by side: Salesforce for the power users, a flat-fee portal for the long tail of light and external users.",
  },
];

export default function SalesforceAlternativeForLightUsersPage() {
  const url =
    "https://ardncloudsolutions.com/salesforce-alternative-for-light-users";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline:
          "Salesforce Alternative for Light Users: Keep Salesforce, Move Light Users to a Portal",
        name: "Salesforce Alternative for Light Users",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce alternative" },
          { "@type": "Thing", name: "CRM light users" },
          { "@type": "Thing", name: "Per-seat license cost reduction" },
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
          { "@type": "ListItem", position: 2, name: "Salesforce Alternative for Light Users", item: url },
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
                <span className="eyebrow">Salesforce Alternative for Light Users</span>
                <h1 className="display reveal">
                  The best Salesforce alternative for light users <em>isn&rsquo;t a new CRM.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Most people searching for a &ldquo;Salesforce alternative&rdquo;
                  don&apos;t actually need a different CRM — they&apos;re
                  overpaying full per-seat prices for users who barely touch it.
                  The smarter move is to keep Salesforce for the reps who live in
                  it, and move your read-only, occasional, and external users to a
                  flat-fee custom portal wired straight into your org. No
                  migration. No second CRM. Just a far smaller bill.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Salesforce</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">No migration</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free CRM cost review</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The counter-frame</div>
                  <ul className="features mt-3">
                    <li>Don&apos;t migrate the whole org</li>
                    <li>Keep Salesforce for power users</li>
                    <li>Move light users to a flat-fee portal</li>
                    <li>Two-way sync, one source of truth</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build the portal free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* WHY THE USUAL ADVICE IS WRONG */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Why the usual advice misses</span>
                <h2 className="h1 mt-3">&ldquo;Switch CRMs&rdquo; solves <em>the wrong problem.</em></h2>
              </div>
              <div>
                <p className="lede">Most &ldquo;Salesforce alternative&rdquo; lists push you to migrate the whole org to another per-seat CRM. For light users, that trades one bill for another — and adds migration risk you don&apos;t need.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">A new CRM is still per-seat</h3>
                <p className="body">Zoho, Pipedrive, or HubSpot still bill per user. You&apos;d move the same light users to a cheaper seat — the cost still scales with headcount.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Migration is the real cost</h3>
                <p className="body">Ripping out Salesforce means moving data, rebuilding integrations, and retraining power users — a big, risky project to trim a seat bill.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The overpayment is the light users</h3>
                <p className="body">The savings you&apos;re after live in the long tail of light users. Target them directly and you keep Salesforce and cut the bill.</p>
              </div>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280", maxWidth: "760px" }}>
              For scale: a full Salesforce Sales Cloud Enterprise seat lists at
              roughly $165/user/month, and Experience Cloud external users bill
              per login or per member on top — while a flat-fee portal costs the
              same at 10 light users or 400. (List prices shown for illustration
              only —{" "}
              <Link href="/savings-calculator" className="link">run the calculator</Link> for your own negotiated rate.)
            </p>
          </div>
        </section>

        {/* WHO IS A LIGHT USER */}
        <section className="section is-canvas" id="who">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Who moves to the portal</span>
                <h2 className="h1 mt-3">The users <em>who don&rsquo;t need a full seat.</em></h2>
              </div>
              <div>
                <p className="lede">If a user touches Salesforce for a narrow slice of work, they&apos;re a candidate. Power users stay put.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>User type</th>
                    <th>What they actually do</th>
                    <th>Where they belong</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Read-only / reporting users</td><td>View records and dashboards, rarely edit</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat-fee portal</td></tr>
                  <tr><td className="feat">Sellers &amp; field staff</td><td>Check inventory, update a status, log a note</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat-fee portal</td></tr>
                  <tr><td className="feat">Ops &amp; back-office</td><td>Update orders and cases through a set workflow</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat-fee portal</td></tr>
                  <tr><td className="feat">Partners &amp; customers</td><td>Submit, track, and self-serve requests</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat-fee portal</td></tr>
                  <tr><td className="feat">Reps &amp; admins (power users)</td><td>Live in the platform, use its full depth</td><td className="is-no">Keep the full Salesforce seat</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Not sure how your seats split? The{" "}
              <Link href="/reduce-crm-licensing-costs" className="link">CRM cost-reduction framework</Link> walks through reclaiming, right-sizing, and offloading light users — and the <Link href="/savings-calculator" className="link">savings calculator</Link> puts a number on it.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS — keep Salesforce */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Keep Salesforce. Cut the bill.</span>
                <h2 className="h1 mt-3">An alternative <em>for the users, not the CRM.</em></h2>
                <p className="body mt-4">
                  Salesforce stays your system of record. We build a custom portal
                  that connects to it through the API and stays in sync both ways,
                  so light users get a clean, focused tool for exactly what they
                  do — and you stop paying premium seats for it. Your power users
                  never notice a thing. Your finance team notices immediately.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Salesforce stays put</div>
                      <p className="fl-body">No data migration, no rebuild, no retraining. The portal runs alongside your org.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Light users get a better tool</div>
                      <p className="fl-body">A purpose-built portal beats a stripped-down Salesforce view — faster for them, cheaper for you.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Cost stops scaling with headcount</div>
                      <p className="fl-body">One flat fee covers the portal at any number of users — add people without the bill climbing.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We build it AND run it</div>
                      <p className="fl-body">Hosting, monitoring, and changes under one flat subscription — new customers pay nothing to build it.</p>
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
                <h2 className="h1 mt-3">The full <em>cost-reduction toolkit.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>The solution</span>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">The flat-fee portal light users move to — wired into Salesforce, built and run for you.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Reduce CRM Licensing Costs</h3>
                <p className="body">The full framework: reclaim unused seats, right-size tiers, and offload light users.</p>
                <span className="link">See the framework →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
              <Link href="/license-guard" className="link">Reclaim dormant Salesforce seats first →</Link>
              <Link href="/custom-partner-portal-development" className="link">Move partners off per-login seats →</Link>
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
                <p className="lede">Light users, read-only access, migration, and savings.</p>
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

        <Testimonial />

        <LeadForm source="Salesforce Alternative for Light Users page" heading="See what your light users are costing you" showSeatQualifiers submitLabel="Show me my savings" sub="Tell us you run Salesforce and roughly how many users. We'll come back with where a portal cuts your per-seat costs — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Keep Salesforce. <em>Stop overpaying for light use.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use Salesforce, show where a portal cuts the per-seat bill, and give you a fixed quote in 48 hours.</p>
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
