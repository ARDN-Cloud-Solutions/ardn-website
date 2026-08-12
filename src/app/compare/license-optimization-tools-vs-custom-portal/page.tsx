import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// Comparison SPOKE filling an unoccupied SERP: "license optimization tools vs
// custom portal." The page-one field for "reduce Salesforce license costs" is
// split between (a) license-optimization SaaS (Zylo, Zluri, Sonar, Flexera,
// CloudEagle) that only REPORT waste and (b) consultancies that only ADVISE —
// none REMOVE the seat. This page owns ARDN's differentiator: reporting tools
// tell you what's wasted; a flat-fee custom portal removes the seat entirely
// for light users. Not anti-tool — it says plainly that optimization software
// is the right fit for the reclaim/right-size lever (and points to Ardn's own
// License Guard for that), then shows where a portal is the structural fix.
// No fabricated metrics; competitor products described by their public category
// (visibility/SAM), pricing framed as illustrative.
export const metadata: Metadata = {
  title: "License Optimization Tools vs. Custom Portal | Ardn",
  description:
    "License-optimization tools report seat waste — they don't remove it. See how a flat-fee custom portal moves light users off per-seat licenses for good.",
  keywords: [
    "Salesforce license optimization tools",
    "license optimization software vs custom portal",
    "reduce Salesforce license costs software",
    "SaaS license optimization",
    "Zylo alternative for Salesforce cost",
    "license management tool alternative",
    "cut CRM licensing costs",
    "custom portal to reduce CRM seats",
    "eliminate per-seat licenses",
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
      "Reporting tools surface wasted seats; you still pay per seat for everyone who stays. A flat-fee custom portal removes the seat for light users entirely.",
    url: "https://ardncloudsolutions.com/compare/license-optimization-tools-vs-custom-portal",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "License optimization tools vs. a flat-fee custom portal — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "License Optimization Tools vs. Custom Portal | Ardn",
    description:
      "Optimization tools report seat waste. A flat-fee custom portal removes the seat for light users. See the difference.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What do license-optimization tools actually do?",
    a: "Tools like Zylo, Zluri, Sonar, Flexera, and CloudEagle give you visibility: they scan your CRM and SaaS estate, flag inactive or duplicate seats, show utilization, and surface renewals. That's genuinely useful — you can't cut what you can't see. But the output is a report. The actions it enables are limited to reclaim (deactivate the seat), right-size (move to a cheaper tier), or cancel. For anyone who stays on the platform, you keep paying per seat.",
  },
  {
    q: "So how is a custom portal different?",
    a: "A portal doesn't report the waste — it removes it. For the users who genuinely use your CRM but only lightly (sellers checking one screen, ops updating a status, partners submitting a request), a custom portal wired into your CRM gives them exactly what they need on one flat monthly fee, no matter how many of them there are. The seat isn't downgraded; it's gone. Reporting tools can't do that because they don't build anything — they only tell you where the cost is.",
  },
  {
    q: "Do I need both a reporting tool and a portal?",
    a: "Often, yes — they solve different parts of the same problem. A reporting tool (or Ardn's own free License Guard for Salesforce) is the right first move to reclaim dormant and duplicate seats. Once the dead seats are gone, what's left is the used-but-light segment, and that's where a flat-fee portal makes the biggest, most durable dent. One finds the waste; the other structurally removes the largest piece of it.",
  },
  {
    q: "How is this different from hiring a Salesforce consultant to cut costs?",
    a: "Consultancies bill hourly to advise on the same three levers — reclaim, right-size, negotiate — and then hand you a plan you still have to execute and maintain. Ardn delivers the outcome and runs it: we build the portal, integrate it with your CRM, host it, and iterate on it, all under one flat monthly fee. No hourly meter, and no 'now go implement this yourself.'",
  },
  {
    q: "Is moving light users to a portal against Salesforce's licensing terms?",
    a: "No. A custom portal reads and writes your CRM data through its API using a properly licensed integration — the same standard, supported mechanism every ISV and AppExchange integration uses. Your CRM stays the system of record and each user's access follows the permissions you already define there. We build the portal around a compliant integration layer, not a workaround. If your situation has any unusual entitlement constraints, we'll flag it honestly on the first call.",
  },
  {
    q: "How long does a portal take to build, and what does it cost?",
    a: "Most portals go live in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — covering the build, hosting, and ongoing changes. New customers pay nothing for the one-time build, and the recurring seat savings typically dwarf the subscription.",
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
          { "@type": "Thing", name: "CRM license cost reduction" },
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
                <span className="eyebrow">License Optimization Tools vs. Custom Portal</span>
                <h1 className="display reveal">
                  Reporting your waste, <em>or removing it?</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  License-optimization software — Zylo, Zluri, Sonar, Flexera,
                  CloudEagle — is good at one thing: showing you which CRM seats
                  are wasted. But visibility is where it stops. Once the report is
                  in, your only moves are reclaim, right-size, or cancel — and for
                  every light user who stays, you keep paying per seat. A custom
                  portal takes the next step those tools can&apos;t: it removes the
                  seat entirely. Here&apos;s the honest difference.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Keep your CRM as source of truth</span>
                  <span className="badge is-emerald">Remove the seat, not just report it</span>
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
                    Optimization tools tell you what you&apos;re overpaying.
                    Consultants advise you on it by the hour. A custom portal
                    removes the largest piece of it — the used-but-light seats —
                    and we build and run it for a flat fee.
                  </p>
                  <p className="body" style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    Not anti-tool. Use a reporting tool (or our free{" "}
                    <Link href="/license-guard" className="link">License Guard</Link>) to
                    reclaim dead seats first.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* REPORTING VS REMOVING */}
        <section className="section" id="reporting-vs-removing">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Three approaches, one bill</span>
                <h2 className="h1 mt-3">Report it, advise on it — <em>or remove it.</em></h2>
              </div>
              <div>
                <p className="lede">All three tackle the same overspend, but only one changes what you pay per user for good. Here&apos;s who does what.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th>Approach</th>
                    <th>What it does</th>
                    <th>What you pay after</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="feat">License-optimization tools<br /><span style={{ fontWeight: 400, color: "#6b7280", fontSize: "13px" }}>Zylo, Zluri, Sonar, Flexera, CloudEagle</span></td><td>Report waste; flag inactive, duplicate &amp; under-used seats</td><td className="is-no">Still per seat for everyone who stays</td></tr>
                  <tr><td className="feat">Cost-reduction consultancies</td><td>Advise on reclaim / right-size / negotiate, by the hour</td><td className="is-no">Still per seat — plus the consulting fee</td></tr>
                  <tr><td className="feat">Custom portal (Ardn)</td><td>Build &amp; run a portal that replaces the seat for light users</td><td className="is-yes" style={{ background: "rgba(27,111,201,0.06)" }}>Flat fee — the light-user seat is gone</td></tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Product names are used here to describe the license-optimization
              software category (visibility / software asset management) and are
              the trademarks of their respective owners. This is a category
              comparison, not a knock on any specific tool — reporting is a real,
              useful job. Run the <Link href="/savings-calculator" className="link">savings calculator</Link> to
              see what removing the light-user seat is worth for your own numbers.
            </p>
          </div>
        </section>

        {/* WHY REPORTING CAPS OUT */}
        <section className="section is-canvas" id="why">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Where visibility runs out</span>
                <h2 className="h1 mt-3">A report can&apos;t cut <em>a seat that&apos;s in use.</em></h2>
                <p className="body mt-4">
                  Optimization tools are excellent at the first lever: finding the
                  dormant and duplicate seats nobody uses. But most of the
                  overpayment isn&apos;t in dead seats — it&apos;s in the
                  used-but-light ones: the sellers, ops staff, partners, and
                  customers who log in for a sliver of the platform and get billed
                  like power users. A report can only recommend downgrading those
                  to a cheaper tier, which is still per seat, still capped, and
                  still climbs with headcount. Removing the seat is a build job,
                  not a reporting job.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim the dead seats first</div>
                      <p className="fl-body">A reporting tool — or our free <Link href="/license-guard" className="link">License Guard</Link> for Salesforce — clears inactive and duplicate licenses. Fastest, lowest-risk lever.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Then remove the light-user seats</div>
                      <p className="fl-body">The used-but-light segment is the biggest line, and it can&apos;t be reported away — a <Link href="/custom-portal-development" className="link">custom portal</Link> replaces it with a flat fee.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Cost stops scaling with headcount</div>
                      <p className="fl-body">Per-seat fees recur and grow forever. A flat-fee portal costs the same at 10 light users or 400 — the same fee at any headcount.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We build it AND run it</div>
                      <p className="fl-body">No new tool for your team to operate. We build, integrate, host, and iterate under one subscription — you own the result.</p>
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
                <p className="body">The full decision framework — reclaim, right-size, or remove the seat.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/license-guard" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">License Guard</h3>
                <p className="body">Our free Salesforce tool for the reclaim lever — find and deactivate dormant seats.</p>
                <span className="link">Explore License Guard →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off per-seat licenses onto a flat-fee portal wired into your CRM.</p>
                <span className="link">Explore portals →</span>
              </Link>
            </div>
            <p className="body mt-4" style={{ textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce &amp; HubSpot seat-cost math →</Link>
              <Link href="/compare/salesforce-experience-cloud-vs-custom-portal" className="link">Experience Cloud vs. a custom portal →</Link>
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
                <p className="lede">Reporting vs. removing, using both, consultants, and licensing compliance.</p>
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

        <LeadForm source="License Optimization Tools vs Custom Portal page" heading="See what removing the seat is worth" showSeatQualifiers sub="Tell us which CRM you run and roughly how many light users you have. We'll show where a portal removes cost a reporting tool can only flag — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying to be told <em>you&apos;re overpaying.</em></h2>
              <p className="lede">30-minute free call. We&apos;ll look at how your users actually use the CRM, show which seats a portal can remove entirely, and give you a fixed quote in 48 hours.</p>
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
