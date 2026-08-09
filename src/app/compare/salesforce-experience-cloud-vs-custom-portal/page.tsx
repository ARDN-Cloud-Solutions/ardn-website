import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Comparison SPOKE in the cost-reduction cluster. Targets the buyer already
// evaluating Salesforce Experience Cloud (formerly Community Cloud) as their
// light-user cost fix — a distinct intent from /compare/salesforce-seat-cost-
// vs-custom-portal (general per-seat math). Honest, not anti-Salesforce: it
// says plainly when Experience Cloud is the right call and when a custom portal
// wins. Pricing is publicly listed list-price ranges, labeled illustrative;
// no fabricated quotes. GEO-structured (H2/H3, comparison table, FAQ schema).
export const metadata: Metadata = {
  title: "Salesforce Experience Cloud vs. Custom Portal | Ardn",
  description:
    "Weighing Salesforce Experience Cloud licenses against a flat-fee custom portal for light users? See the cost and feature tradeoffs, and when each one wins.",
  keywords: [
    "Salesforce Experience Cloud vs custom portal",
    "Experience Cloud alternative",
    "Experience Cloud cost",
    "Salesforce Community Cloud alternative",
    "Experience Cloud login license cost",
    "Salesforce partner portal alternative",
    "Salesforce customer portal cost",
    "reduce Experience Cloud costs",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/compare/salesforce-experience-cloud-vs-custom-portal",
    languages: {
      "en-US": "https://ardncloudsolutions.com/compare/salesforce-experience-cloud-vs-custom-portal",
      "x-default": "https://ardncloudsolutions.com/compare/salesforce-experience-cloud-vs-custom-portal",
    },
  },
  openGraph: {
    title: "Salesforce Experience Cloud vs. a Custom Portal | Ardn",
    description:
      "Experience Cloud still bills per login or per member. See how a flat-fee custom portal compares for light users — and when each option is the right call.",
    url: "https://ardncloudsolutions.com/compare/salesforce-experience-cloud-vs-custom-portal",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Salesforce Experience Cloud vs. a flat-fee custom portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salesforce Experience Cloud vs. Custom Portal | Ardn",
    description:
      "Experience Cloud bills per login or member. See how a flat-fee custom portal compares for light users.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What is Salesforce Experience Cloud and how is it priced?",
    a: "Experience Cloud (formerly Community Cloud) is Salesforce's way to give external users — partners, customers, members — a branded portal built on top of your Salesforce data. It's typically sold on either a login-based model (you pay per login, in blocks) or a member-based model (a monthly price per active external user). Either way, the cost still scales with how many people use it.",
  },
  {
    q: "Is Experience Cloud cheaper than full Salesforce seats?",
    a: "Yes — for external users, it's usually much cheaper than putting them on full internal Sales or Service Cloud licenses, and that's exactly what it's designed for. If your only alternative is full seats for partners and customers, Experience Cloud is a legitimate saving. The question this page answers is what happens beyond that: when the login or member fees themselves start to add up at scale.",
  },
  {
    q: "When does a custom portal beat Experience Cloud?",
    a: "When user counts are high and growing, when you want a very specific workflow rather than a templated community, or when you'd rather own the portal outright than rent access per head. A custom portal runs on one flat monthly fee regardless of how many users log in, so the more light users you have, the more the flat-fee model tends to win. It also isn't limited to Salesforce's component set — it's built to your exact process.",
  },
  {
    q: "When is Experience Cloud the better choice?",
    a: "When you want something live quickly using Salesforce's out-of-the-box components, your external user count is modest and stable, and staying fully inside the Salesforce ecosystem (including its admin model and AppExchange) matters more to you than escaping per-user pricing. We'll tell you honestly if that's your situation — we're not here to talk you out of a tool that fits.",
  },
  {
    q: "Does a custom portal keep my Salesforce data in sync?",
    a: "Yes. The portal integrates with Salesforce through its API and reads and writes the same records in real time, so Salesforce stays the single source of truth. Your power users keep working in Salesforce exactly as they do now; the portal is just a tailored, flat-fee front end for the users who need less.",
  },
  {
    q: "How long does a custom portal take to build, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — covering the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

export default function ExperienceCloudVsCustomPortalPage() {
  const url =
    "https://ardncloudsolutions.com/compare/salesforce-experience-cloud-vs-custom-portal";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Salesforce Experience Cloud vs. a Custom Portal",
        name: "Salesforce Experience Cloud vs. a Custom Portal",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "Salesforce Experience Cloud" },
          { "@type": "Thing", name: "Custom portal development" },
          { "@type": "Thing", name: "CRM per-seat pricing" },
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
          { "@type": "ListItem", position: 3, name: "Experience Cloud vs. Custom Portal", item: url },
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
                <span className="eyebrow">Experience Cloud vs. Custom Portal</span>
                <h1 className="display reveal">
                  Experience Cloud, <em>or a portal you own?</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Salesforce Experience Cloud is a real, sensible way to get
                  external users off full internal seats — it&apos;s built for
                  exactly that. But it still bills per login or per member, so the
                  cost keeps climbing with usage. A custom portal is the other
                  path: one flat fee, your exact workflow, still wired live into
                  Salesforce. Here&apos;s an honest read on when each one wins.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep Salesforce as your source of truth</span>
                  <span className="badge is-emerald">Flat fee, not per login</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">The short version</div>
                  <p className="body mt-3">
                    Experience Cloud is often the right first step for external
                    users. A custom portal tends to win once the login or member
                    fees themselves get large — because a flat fee costs the same
                    whether 50 users log in or 5,000.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Not anti-Salesforce. We&apos;ll tell you when Experience Cloud
                    is the better call.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* HOW EXPERIENCE CLOUD PRICES */}
        <section className="section" id="pricing-model">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">How the two models differ</span>
                <h2 className="h1 mt-3">Per login, per member — <em>or flat.</em></h2>
              </div>
              <div>
                <p className="lede">Experience Cloud is far cheaper than full seats for external users. The difference here is what happens to the bill as usage grows.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>How it&apos;s billed</th>
                    <th>Scales with usage?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">Full Sales/Service Cloud seat</td><td>~$150–$165/user/mo (list)</td><td className="is-no">Yes — per user</td></tr>
                  <tr><td className="feat">Experience Cloud — login-based</td><td>~per-login blocks (list)</td><td className="is-no">Yes — per login</td></tr>
                  <tr><td className="feat">Experience Cloud — member-based</td><td>monthly per active member (list)</td><td className="is-no">Yes — per member</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Flat monthly fee</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>No — same fee at any headcount</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Prices above are typical, publicly listed ranges as of this writing — not a quote. Salesforce sells Experience Cloud on both login- and member-based models; the exact rate depends on edition, volume, and negotiated contract. Confirm current numbers with Salesforce, and use our <Link href="/savings-calculator" className="link">calculator</Link> to compare against a flat-fee portal for your own user counts.
            </p>
          </div>
        </section>

        {/* WHEN EACH WINS */}
        <section className="section is-canvas" id="when">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">An honest split</span>
                <h2 className="h1 mt-3">When each one <em>is the right call.</em></h2>
              </div>
              <div>
                <p className="lede">Neither is universally better. It comes down to user count, how custom the workflow needs to be, and whether you&apos;d rather rent or own.</p>
              </div>
            </div>
            <div className="split">
              <div>
                <h3 className="h3">Experience Cloud wins when…</h3>
                <ul className="fl mt-3">
                  <li>
                    <div className="fl-num !text-black">1</div>
                    <div>
                      <div className="fl-head !text-black">You want it live fast, out of the box</div>
                      <p className="fl-body">Salesforce&apos;s templated components get a basic community stood up quickly with admin-level effort.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">2</div>
                    <div>
                      <div className="fl-head !text-black">External user count is modest and stable</div>
                      <p className="fl-body">If per-login or per-member fees stay small, there&apos;s little to save by moving off them.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">3</div>
                    <div>
                      <div className="fl-head !text-black">Staying 100% inside Salesforce matters most</div>
                      <p className="fl-body">Same admin model, same AppExchange, one vendor — a real advantage for some teams.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="h3">A custom portal wins when…</h3>
                <ul className="fl mt-3">
                  <li>
                    <div className="fl-num !text-black">1</div>
                    <div>
                      <div className="fl-head !text-black">User counts are high and growing</div>
                      <p className="fl-body">A flat fee costs the same at 50 users or 5,000 — the more logins, the more it wins.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">2</div>
                    <div>
                      <div className="fl-head !text-black">The workflow is specific</div>
                      <p className="fl-body">Built to your exact process, not assembled from a fixed component set.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">3</div>
                    <div>
                      <div className="fl-head !text-black">You&apos;d rather own than rent</div>
                      <p className="fl-body">You own the portal and the IP; it still syncs live with Salesforce as the source of truth.</p>
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
                <span className="eyebrow">Keep reading</span>
                <h2 className="h1 mt-3">More on <em>cutting CRM cost.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Start here</span>
                <h3 className="h3">How to Cut CRM Licensing Costs</h3>
                <p className="body">The full decision framework — reclaim, right-size, or replace the seat.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Seller, ops, partner &amp; customer portals synced to Salesforce, on one flat fee.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Compare Experience Cloud fees against a flat-fee portal for your user counts.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <p className="body mt-4" style={{ textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the full Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/custom-partner-portal-development" className="link">Cut per-login Partner Community costs →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">The broader custom-vs-SaaS cost breakdown →</Link>
              <Link href="/custom-software-development" className="link">Explore custom software development →</Link>
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
                <p className="lede">Pricing models, when each wins, data sync, and cost.</p>
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

        <LeadForm source="Experience Cloud vs Custom Portal page" heading="Not sure which fits your users?" showSeatQualifiers sub="Tell us roughly how many external users you have and how they use Salesforce. We'll give you an honest read on Experience Cloud vs. a portal — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Rent access, <em>or own the portal?</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at your external user counts, tell you honestly whether Experience Cloud or a custom portal saves more, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/reduce-crm-licensing-costs" className="btn btn-outline-light btn-lg">Read the cost-cutting guide</Link>
              </div>
              <p style={{ marginTop: "20px" }}>
                <Link href="/custom-portal-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Explore custom portal development →</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
