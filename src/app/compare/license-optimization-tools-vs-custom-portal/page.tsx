import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: fills a validated SERP gap. The "Salesforce license optimization tools"
// / "SaaS license management" space is owned by spend-visibility platforms
// (SaaS management / license-optimization tools such as Zylo, Flexera,
// Sastrify, CloudEagle) that REPORT on wasted seats and stop at the
// recommendation. Nobody ranking for these terms offers to BUILD the system
// those light users move onto. This page targets that intent honestly:
// "these tools tell you which seats are wasted; a custom portal removes them."
// No fabricated competitor pricing or metrics — competitors are described by
// their real, publicly-known category function only, and all cost math points
// to /savings-calculator for the reader's own numbers.
export const metadata: Metadata = {
  title: "License Optimization Tools vs. Custom Portal | Ardn",
  description:
    "License-optimization tools tell you which CRM seats are wasted. A custom portal removes them — move light users off per-seat licenses onto a flat fee.",
  keywords: [
    "Salesforce license optimization tools",
    "SaaS license management",
    "license optimization software",
    "reduce Salesforce seats",
    "SaaS spend optimization",
    "seat sprawl audit",
    "cut CRM licensing costs",
    "custom portal to reduce Salesforce seats",
    "Zylo alternative",
    "Flexera license optimization alternative",
  ],
  alternates: {
    canonical:
      "https://ardncloudsolutions.com/compare/license-optimization-tools-vs-custom-portal",
    languages: {
      "en-US":
        "https://ardncloudsolutions.com/compare/license-optimization-tools-vs-custom-portal",
      "x-default":
        "https://ardncloudsolutions.com/compare/license-optimization-tools-vs-custom-portal",
    },
  },
  openGraph: {
    title: "License Optimization Tools vs. a Custom Portal | Ardn",
    description:
      "SaaS license-optimization tools report which CRM seats are wasted. A custom portal removes them — move light users off per-seat licenses onto one flat fee.",
    url: "https://ardncloudsolutions.com/compare/license-optimization-tools-vs-custom-portal",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "License optimization tools report wasted seats; a custom portal removes them — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "License Optimization Tools vs. a Custom Portal | Ardn",
    description:
      "Reporting tools find your wasted CRM seats. A custom portal removes them — light users on a flat fee, not a license each.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Do license-optimization tools reduce my CRM bill on their own?",
    a: "Indirectly, and only up to a point. SaaS-management and license-optimization tools are excellent at visibility — they show which seats are dormant, which are underused, and when renewals are coming. That surfaces the waste, but the tool itself doesn't change your licensing model. You still have to act on the report: reclaim dead seats, downgrade tiers, or give light users somewhere else to work. This page is about that last step.",
  },
  {
    q: "So is a custom portal a replacement for a tool like Zylo or Flexera?",
    a: "No — they solve different halves of the same problem, and they work well together. A SaaS-management tool tells you a seat is being used lightly. A custom portal is where that light user actually goes instead: a purpose-built tool wired into your CRM, on a flat fee, so you can remove the seat rather than just flag it. Run the audit first, then build the portal for the users the audit identifies.",
  },
  {
    q: "Why can't the optimization tool just downgrade the seat for me?",
    a: "It can recommend a cheaper tier, and downgrading is a real lever for occasional users who still need native CRM access. But a cheaper tier is still a per-seat license — the bill still scales with every head you add. A custom portal is the only option that breaks the link between cost and user count entirely: it costs the same whether 10 light users are on it or 400.",
  },
  {
    q: "Which users should move to a portal instead of just being right-sized?",
    a: "Light users — anyone who touches the CRM for a narrow slice of work but doesn't need the full platform. Field sellers, ops staff, partners, vendors, and customers are the usual examples. They're the users a full per-seat license overpays for the most, and the ones a reporting tool will flag but can't rehome.",
  },
  {
    q: "Does this work with HubSpot and other CRMs, not just Salesforce?",
    a: "Yes. The pattern is CRM-agnostic — Salesforce, HubSpot, Microsoft Dynamics, or something else. The portal integrates with whatever system of record you already run, through its API, and keeps that CRM as the single source of truth.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const gaps = [
  {
    title: "They report; they don't rehome",
    body: "A SaaS-management tool flags that a seat is underused. It has no way to give that user a cheaper place to work — so the flagged seat usually stays, because nobody wants to cut off access.",
  },
  {
    title: "Right-sizing still bills per head",
    body: "The best a report can recommend for an active-but-light user is a cheaper tier. That helps, but it's still a per-seat license — the bill keeps climbing with every hire, partner, and customer.",
  },
  {
    title: "External users don't belong on internal seats",
    body: "Partners, vendors, and customers often sit on internal CRM licenses by default. A report can spot it; only a purpose-built portal actually gives them somewhere else to go.",
  },
  {
    title: "Dashboards are a recurring cost too",
    body: "License-optimization platforms are themselves a subscription. They pay off through savings you then have to execute — the visibility is the start of the work, not the end of it.",
  },
  {
    title: "A portal breaks the link to headcount",
    body: "A custom portal costs the same whether 10 light users are on it or 400. Once light users move, growth stops being a licensing event — the thing no report can change for you.",
  },
  {
    title: "One source of truth, kept intact",
    body: "The portal reads and writes the same CRM records in real time. Your system of record — and the audit trail your optimization tool watches — stays exactly where it is.",
  },
];

export default function LicenseOptimizationToolsVsCustomPortalPage() {
  const url =
    "https://ardncloudsolutions.com/compare/license-optimization-tools-vs-custom-portal";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "License Optimization Tools vs. a Custom Portal",
        name: "License Optimization Tools vs. a Custom Portal",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "SaaS license optimization" },
          { "@type": "Thing", name: "Salesforce license cost reduction" },
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
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://ardncloudsolutions.com/compare" },
          { "@type": "ListItem", position: 3, name: "License Optimization Tools vs. Custom Portal", item: url },
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
                <span className="eyebrow">License Optimization vs. Custom Portal</span>
                <h1 className="display reveal">
                  Reporting finds the waste. <em>A portal removes it.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  SaaS-management and license-optimization tools are great at one
                  thing: showing you which CRM seats are dormant, underused, or up
                  for renewal. But they stop at the recommendation. For the light
                  users they flag, a custom portal is where those users actually
                  go — a purpose-built tool wired into your CRM, on one flat fee
                  instead of a license each. One finds the seat; the other lets
                  you delete it.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep your CRM</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Salesforce, HubSpot &amp; more</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Two halves of one problem</div>
                  <ul className="features mt-3">
                    <li><strong>Optimization tools:</strong> find &amp; report wasted seats</li>
                    <li><strong>A custom portal:</strong> gives light users somewhere cheaper to go</li>
                    <li>Run the audit first — then rehome what it flags</li>
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

        {/* WHERE REPORTING STOPS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where the report stops</span>
                <h2 className="h1 mt-3">Visibility isn&apos;t the same as <em>the fix.</em></h2>
              </div>
              <div>
                <p className="lede">License-optimization tools (Zylo, Flexera, Sastrify, CloudEagle and the like) are strong at surfacing waste. The savings still depend on what you do next.</p>
              </div>
            </div>
            <div className="grid-3">
              {gaps.map((r, i) => (
                <div className="card" key={r.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{r.title}</h3>
                  <p className="body">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SIDE-BY-SIDE TABLE */}
        <section className="section is-canvas" id="comparison">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Side by side</span>
                <h2 className="h1 mt-3">What each one <em>actually does.</em></h2>
              </div>
              <div>
                <p className="lede">They&apos;re complementary, not competing. Here&apos;s which job belongs to which.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>The job to be done</th>
                    <th>License-optimization tool</th>
                    <th>Custom portal (Ardn)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Find dormant &amp; underused seats</td><td className="is-yes">Yes — its core strength</td><td className="is-no">Not its job</td></tr>
                  <tr><td className="feat">Flag renewals &amp; benchmark spend</td><td className="is-yes">Yes</td><td className="is-no">No</td></tr>
                  <tr><td className="feat">Reclaim a seat nobody uses</td><td className="is-yes">Recommends it</td><td className="is-no">Use an audit / License Guard</td></tr>
                  <tr><td className="feat">Give an active light user a cheaper home</td><td className="is-no">Can only suggest a lower tier</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Yes — a purpose-built portal</td></tr>
                  <tr><td className="feat">Remove the seat entirely</td><td className="is-no">No — the user still needs access</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Yes — the portal replaces it</td></tr>
                  <tr><td className="feat">Cost that doesn&apos;t scale with headcount</td><td className="is-no">Per-seat model is unchanged</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee at any headcount</td></tr>
                  <tr><td className="feat">Keep your CRM as system of record</td><td className="is-yes">Yes</td><td className="is-yes">Yes — two-way sync</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Tool names above are well-known examples of the SaaS-management / license-optimization category, referenced for comparison only — this is not a knock on any of them. They do the visibility job well; a custom portal does the rehoming job they can&apos;t. The two are best used together.
            </p>
          </div>
        </section>

        {/* THE SEQUENCE */}
        <section className="section">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Use them in order</span>
                <h2 className="h1 mt-3">Audit first. <em>Then rehome.</em></h2>
                <p className="body mt-4">
                  The fastest path to a lower CRM bill isn&apos;t choosing between
                  a reporting tool and a portal — it&apos;s using them in sequence.
                  Let the optimization tool (or a Salesforce-specific audit) find
                  the waste. Reclaim the dead seats. Then, for the users who log in
                  but only need a sliver of the platform, build the portal that
                  lets you drop the seat instead of just downgrading it.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim dormant seats</div>
                      <p className="fl-body">The easiest win — <Link href="/license-guard" className="link">License Guard</Link> automates that scan for Salesforce orgs; SaaS-management tools do it across your stack.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Rehome the light users</div>
                      <p className="fl-body">For seats that are used but lightly, a <Link href="/custom-portal-development" className="link">custom portal</Link> removes the need for the license entirely.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Keep the power users</div>
                      <p className="fl-body">Anyone who lives in the platform keeps their full seat — and it&apos;s worth it. The savings come from everyone lighter than that.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER */}
        <section className="section is-canvas">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where this goes next</span>
                <h2 className="h1 mt-3">From the report <em>to the build.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to your CRM, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework: reclaim, right-size, or rehome light users to a portal.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your current tool spend and see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/license-guard" className="link">Reclaim dormant Salesforce seats with License Guard →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Full per-seat vs. flat-fee breakdown →</Link>
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
                <p className="lede">Reporting vs. removing, right-sizing, light users, and cost.</p>
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

        <LeadForm source="License Optimization Tools vs Custom Portal page" heading="Turn the audit into savings" showSeatQualifiers sub="Already know which seats are wasted? Tell us which CRM you run and roughly how many light users, and we'll show where a portal removes the seat — plus a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">You found the waste. <em>Now cut it.</em></h2>
              <p className="lede">30-minute free call. Bring the seats your audit flagged — we&apos;ll show which light users a portal can rehome, and give you a fixed quote in 48 hours.</p>
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
