import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SEO: fills a content gap identified in July 2026 keyword research — buyers
// searching "custom software vs SaaS" / "build vs buy" total-cost comparisons.
// No fabricated stats: the cost illustration below is explicitly labeled as
// illustrative math, not a client case study, and points to the existing
// /savings-calculator tool for a reader's own numbers.
export const metadata: Metadata = {
  title: "Custom Software vs. SaaS: Total Cost | Ardn",
  description:
    "Per-seat SaaS fees climb every time you hire. A flat monthly fee doesn't. See how the total cost compares, and where custom software wins.",
  keywords: [
    "custom software vs SaaS",
    "build vs buy software",
    "total cost of ownership custom software",
    "per-seat pricing vs flat fee",
    "replace SaaS with custom software",
    "custom software cost comparison",
    "off-the-shelf software vs custom",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/compare/custom-software-vs-saas",
    languages: {
      "en-US": "https://ardncloudsolutions.com/compare/custom-software-vs-saas",
      "x-default": "https://ardncloudsolutions.com/compare/custom-software-vs-saas",
    },
  },
  openGraph: {
    title: "Custom Software vs. SaaS: Total Cost Compared | Ardn",
    description:
      "Per-seat SaaS fees climb every time you hire. A flat monthly fee doesn't. See how the total cost compares over time.",
    url: "https://ardncloudsolutions.com/compare/custom-software-vs-saas",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom software vs. SaaS total cost comparison — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software vs. SaaS: Total Cost Compared | Ardn",
    description:
      "Per-seat SaaS fees climb every time you hire. A flat monthly fee doesn't.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "Is custom software actually cheaper than SaaS long-term?",
    a: "It depends on your growth and fit. SaaS pricing is usually per seat, per location, or per transaction, so the bill climbs every time you hire, open a location, or process more volume — with no ceiling. A custom build on a flat monthly fee stays the same regardless of headcount. The more your usage scales, the more the math tips toward custom. For a small, stable team on a tool that already fits well, SaaS can still be the cheaper, simpler choice.",
  },
  {
    q: "What happens if we outgrow our SaaS platform?",
    a: "You renegotiate, upgrade tiers, buy add-ons, or migrate — usually all three over a few years, each with its own cost and disruption. A custom system doesn't have tiers to outgrow; we extend it as your workflow changes, under the same flat subscription.",
  },
  {
    q: "Do we own custom software the way we'd own... nothing with SaaS?",
    a: "Correct — with SaaS you're renting access and your data lives in someone else's system. With a custom build, you own the IP and your data outright. We retain rights only to the underlying frameworks and tooling we reuse across clients; if you ever leave, you get a full export and documentation.",
  },
  {
    q: "How long does custom take compared to standing up a SaaS tool?",
    a: "A SaaS signup is instant, but real rollout — configuration, integrations, data migration, training — often takes weeks to months anyway, especially for anything beyond a simple tool. Most of our builds reach a production-ready first version in 2–6 weeks via the AI Forge Framework, with a fixed quote within 48 hours of the first call.",
  },
  {
    q: "What about maintenance, hosting, and support?",
    a: "That's included in the flat monthly fee. We build it and run it — hosting, monitoring, and ongoing changes — so you're not comparing a SaaS subscription against a one-time build with no support plan. It's subscription vs. subscription; the difference is what you own and whether the price climbs with headcount.",
  },
  {
    q: "Is this against using SaaS at all?",
    a: "No. Generic, horizontal tools — email, calendaring, video calls — are usually cheaper to buy than build. Custom makes sense when the software runs a core part of your business, when off-the-shelf forces you to bend your process to fit it, or when the per-seat bill scales with your growth instead of staying flat.",
  },
];

const reasons = [
  {
    title: "Per-seat pricing compounds",
    body: "Most SaaS platforms bill per user, per location, or per transaction. Every hire, every new location, every busy month adds to the bill — permanently.",
  },
  {
    title: "Off-the-shelf rarely fits exactly",
    body: "When a tool doesn't match your workflow, teams pay for the seats anyway and then build spreadsheets and workarounds around the gaps — paying twice.",
  },
  {
    title: "You rent it, you don't own it",
    body: "Cancel a SaaS subscription and you're left with an export file, not a system. Custom software is yours — the IP and the data.",
  },
  {
    title: "A flat fee doesn't care about headcount",
    body: "One monthly subscription covers the build, hosting, and ongoing changes, whether you have 10 users or 400.",
  },
  {
    title: "Weeks, not a multi-quarter rollout",
    body: "Real SaaS rollouts — configuration, integrations, migration, training — often take as long as a focused custom build, without the years of compounding fees after.",
  },
  {
    title: "One partner builds it and runs it",
    body: "No separate implementation vendor, support contract, and renewal cycle to juggle. We build it and keep it running under the same fee.",
  },
];

export default function CustomSoftwareVsSaasPage() {
  const url = "https://ardncloudsolutions.com/compare/custom-software-vs-saas";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Custom Software vs. SaaS: Total Cost Compared",
        name: "Custom Software vs. SaaS: Total Cost Compared",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Custom software development" },
          { "@type": "Thing", name: "SaaS total cost of ownership" },
          { "@type": "Thing", name: "Per-seat pricing" },
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
          { "@type": "ListItem", position: 3, name: "Custom Software vs. SaaS", item: url },
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
                <span className="eyebrow">Custom Software vs. SaaS</span>
                <h1 className="display reveal">
                  Custom software vs. SaaS: <em>do the math before you renew.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Per-seat SaaS pricing climbs every time you hire, open a
                  location, or process more volume. A flat monthly fee
                  doesn&apos;t. We build and run custom software, portals, and
                  platforms that replace the tools that charge you more the
                  more you grow — live in weeks, on one predictable bill.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Flat fee, not per-seat</span>
                  <span className="badge is-emerald">You own what we build</span>
                  <span className="badge is-canvas">Built &amp; run for you</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The math, illustrated</div>
                  <p className="body mt-3">
                    Example: 40 users on a mid-market SaaS plan at $70/seat a
                    month runs about $33,600/year — and climbs every time you
                    add a person. A flat monthly subscription for a
                    custom-built alternative costs the same whether you have
                    10 users or 400.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    This is an illustration, not a quote — your numbers depend
                    on your tools and headcount. Use the free calculator to
                    run your own.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* REASONS */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Why the math shifts</span>
                <h2 className="h1 mt-3">Where custom <em>wins on total cost.</em></h2>
              </div>
              <div>
                <p className="lede">Not every tool should be replaced. But when the bill scales with your growth, it&apos;s worth doing the comparison.</p>
              </div>
            </div>
            <div className="grid-3">
              {reasons.map((r, i) => (
                <div className="card" key={r.title}>
                  <div className="card-num">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="h3">{r.title}</h3>
                  <p className="body">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NUANCE */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Not anti-SaaS. Anti-overpaying.</span>
                <h2 className="h1 mt-3">Some tools are <em>right to buy.</em></h2>
                <p className="body mt-4">
                  Generic, horizontal software — email, calendaring, video
                  calls — is usually cheaper to buy than build, and we&apos;ll
                  tell you so. Custom makes sense when the software runs a
                  core part of how your business operates, when off-the-shelf
                  forces you to bend your process to fit a template, or when
                  the per-seat bill scales with your growth instead of
                  staying flat.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">It&apos;s core to your business</div>
                      <p className="fl-body">Portals, member/dues management, ecommerce, and workflow automation are common places the math tips toward custom.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">You&apos;re bending to fit a template</div>
                      <p className="fl-body">If your team maintains workarounds around a tool&apos;s gaps, you&apos;re already paying for two systems.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">The bill scales with headcount</div>
                      <p className="fl-body">Per-seat, per-location, or per-transaction pricing is the clearest signal it&apos;s worth comparing.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER — where this shows up */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Where this shows up</span>
                <h2 className="h1 mt-3">Common places <em>the math tips toward custom.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portals</h3>
                <p className="body">Move light users off per-seat CRM licenses onto a flat-fee portal.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/membership-management" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Membership Management</h3>
                <p className="body">Replace per-member SaaS fees with one flat platform for the whole org.</p>
                <span className="link">Explore membership →</span>
              </Link>
              <Link href="/custom-software-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">All Custom Builds</h3>
                <p className="body">See every shape of custom software, platform &amp; portal we build.</p>
                <span className="link">Explore the hub →</span>
              </Link>
            </div>
            <p className="body mt-4" style={{ textAlign: "center" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">Paying per-seat Salesforce or HubSpot fees? See the seat-cost math →</Link>
            </p>
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
                <p className="lede">Cost, ownership, timeline, and when SaaS is still the right call.</p>
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

        <LeadForm source="Custom Software vs SaaS page" heading="Get your own comparison" showSeatQualifiers sub="Tell us what you're paying for today and roughly how many users. We'll reply within 4 business hours with a fixed quote for the custom alternative." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying more <em>every time you grow.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at what you&apos;re paying for today and give you a fixed quote for a flat-fee custom alternative within 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/savings-calculator" className="btn btn-outline-light btn-lg">Run your own numbers</Link>
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
