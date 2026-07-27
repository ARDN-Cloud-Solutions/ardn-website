import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";

// SPOKE / broader-wedge pillar: extends the per-seat cost-reduction wedge from
// "your CRM" up to "your whole stack" — the CFO/RevOps budget problem. Targets
// consolidation / reduce-SaaS-spend commercial intent, where ARDN's
// "replace or connect your tools, built and run for you, one flat fee" model is
// literally the consolidation pitch. Honest framing only: no fabricated
// percentages or app-count statistics; the argument is the mechanism, not a
// made-up number. Funnels the CRM-seat slice to /reduce-crm-licensing-costs and
// the build to the hub / portal pages.
export const metadata: Metadata = {
  title: "Reduce SaaS Spend & Consolidate Your Tech Stack | Ardn",
  description:
    "Cut SaaS spend by consolidating overlapping, per-seat tools into one custom platform — built and run for you on a flat monthly fee. Keep what works.",
  keywords: [
    "reduce SaaS spend",
    "tech stack consolidation",
    "consolidate tech stack",
    "reduce software licensing costs",
    "too many software tools",
    "SaaS sprawl",
    "reduce per-seat software costs",
    "replace SaaS with custom software",
    "flat-fee software",
    "custom platform to consolidate tools",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/reduce-saas-spend",
    languages: {
      "en-US": "https://ardncloudsolutions.com/reduce-saas-spend",
      "x-default": "https://ardncloudsolutions.com/reduce-saas-spend",
    },
  },
  openGraph: {
    title: "Reduce SaaS Spend & Consolidate Your Tech Stack | Ardn",
    description:
      "Consolidate overlapping, per-seat tools into one custom platform — built and run for you on a flat monthly fee. Keep what works, cut the rest.",
    url: "https://ardncloudsolutions.com/reduce-saas-spend",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Reduce SaaS spend by consolidating your tech stack — Ardn Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reduce SaaS Spend & Consolidate Your Tech Stack | Ardn",
    description:
      "Consolidate overlapping, per-seat tools into one custom platform — built and run for you on a flat monthly fee.",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What does it mean to consolidate your tech stack?",
    a: "It means replacing several overlapping tools — each with its own per-seat bill, admin overhead, and integration to maintain — with fewer systems that do more, ideally one platform shaped to how you actually work. The goal isn't fewer logos for their own sake; it's less recurring cost, fewer seams between tools, and one source of truth instead of data scattered across silos.",
  },
  {
    q: "How does consolidating tools actually reduce cost?",
    a: "Three ways. First, most SaaS bills scale per user, so overlapping tools each charge for the same people — collapse them and the seat count drops. Second, you stop paying for features you never use just to get the one feature you need. Third, the hidden cost of stitching tools together (integrations, admin time, error-chasing) shrinks when the work happens in one system. A custom platform runs on one flat fee instead of a stack of subscriptions that each climb as you grow.",
  },
  {
    q: "Do we have to rip out everything we use?",
    a: "No. The right move is usually surgical, not scorched-earth. Keep the systems that genuinely fit — your CRM, your accounting, your email — and connect them. Replace only the tools you've outgrown or that overlap, where a purpose-built alternative is cheaper and fits better. We start with the highest-cost, worst-fit tool and work down, so every change pays for itself.",
  },
  {
    q: "Isn't a custom platform riskier than just buying more SaaS?",
    a: "It used to be — expensive, slow, and the team vanished after launch. Our model removes all three: a fixed quote in 48 hours, a production-ready first version in 2–6 weeks via the AI Forge Framework, and one team that builds it AND runs it under a flat monthly fee. You own the IP and data, with a full export if you ever leave. The bigger risk for most mid-market teams is the SaaS bill that quietly compounds every year.",
  },
  {
    q: "Where do most companies start?",
    a: "With the tool that costs the most for the least fit — very often per-seat CRM licenses being paid for light users who barely touch the platform. That single move is usually the fastest, most defensible saving, which is why it's our most common first project. From there, overlapping point tools and manual, multi-tool workflows are the next targets.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "Most first builds go live in 2–6 weeks, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — that covers the build, hosting, and ongoing changes. New customers pay nothing for the one-time build; the recurring subscription is designed to come in below the stack it replaces.",
  },
];

const moves = [
  {
    tag: "Move 1 — Collapse",
    title: "Consolidate overlapping tools",
    body: "When three tools each do a slice of one job — and each bills per user — you're paying three times for one workflow. Collapse them into one platform built to that workflow and the duplicate seats disappear.",
    best: "Best for: overlapping point tools with per-seat pricing.",
  },
  {
    tag: "Move 2 — Replace",
    title: "Replace the tools you've outgrown",
    body: "A platform you have to heavily customize to fit is a platform you've outgrown. Rebuild it as software you own, on a flat fee — usually cheaper over time than the subscription plus the workarounds it demands.",
    best: "Best for: expensive, ill-fitting tools you fight daily.",
  },
  {
    tag: "Move 3 — Connect",
    title: "Connect what genuinely fits",
    body: "Keep the systems that work — CRM, billing, support — and integrate them so data stays in one place. Consolidation isn't ripping everything out; it's ending the silos and the manual re-keying between them.",
    best: "Best for: core systems worth keeping but poorly connected.",
  },
];

export default function ReduceSaasSpendPage() {
  const url = "https://ardncloudsolutions.com/reduce-saas-spend";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "How to Reduce SaaS Spend by Consolidating Your Tech Stack",
        name: "How to Reduce SaaS Spend by Consolidating Your Tech Stack",
        url,
        mainEntityOfPage: { "@id": url },
        inLanguage: "en-US",
        datePublished: "2026-07-27",
        dateModified: "2026-07-27",
        image: "https://ardncloudsolutions.com/images/ardn-home-hero.webp",
        author: { "@id": "https://ardncloudsolutions.com/#organization" },
        publisher: { "@id": "https://ardncloudsolutions.com/#organization" },
        about: [
          { "@type": "Thing", name: "SaaS spend reduction" },
          { "@type": "Thing", name: "Tech stack consolidation" },
          { "@type": "Thing", name: "Custom software development" },
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
          { "@type": "ListItem", position: 2, name: "Reduce SaaS Spend", item: url },
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
                <span className="eyebrow">Reduce SaaS Spend</span>
                <h1 className="display reveal">
                  Fewer tools, one flat fee — <em>cut the SaaS bill.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Every tool you add bills per user and needs to be integrated,
                  administered, and paid for again next year. The result is a
                  stack that quietly compounds. We consolidate the overlapping,
                  per-seat tools into one custom platform &mdash; built and run
                  for you on a flat monthly fee &mdash; while keeping the systems
                  that genuinely fit. Cut the spend without losing what works.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">Flat fee, not per-seat</span>
                  <span className="badge is-emerald">Keep what works</span>
                  <span className="badge is-canvas">Built and run for you</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Run your own numbers →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Where the spend hides</div>
                  <ul className="features mt-3">
                    <li>Per-seat licenses for light users</li>
                    <li>Overlapping tools doing one job</li>
                    <li>Features you pay for but never use</li>
                    <li>The integration &amp; admin tax</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    One platform, one flat fee &mdash; instead of a stack that climbs.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* WHERE THE SPEND HIDES */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Why the stack costs so much</span>
                <h2 className="h1 mt-3">The bill isn&apos;t one line &mdash; <em>it&apos;s a hundred.</em></h2>
              </div>
              <div>
                <p className="lede">SaaS sprawl rarely shows up as one big number. It hides across many subscriptions, each small enough to ignore and each growing with your headcount.</p>
              </div>
            </div>
            <div className="grid-3">
              <div className="card">
                <div className="card-num">01</div>
                <h3 className="h3">Per-seat pricing on every tool</h3>
                <p className="body">Each app bills for every user, so the same person is paid for again and again across your stack &mdash; and the total climbs every time you hire.</p>
              </div>
              <div className="card">
                <div className="card-num">02</div>
                <h3 className="h3">Overlap you&apos;re paying for twice</h3>
                <p className="body">Tools accumulate. Two or three end up doing slices of the same job, each with its own license, and nobody owns the decision to collapse them.</p>
              </div>
              <div className="card">
                <div className="card-num">03</div>
                <h3 className="h3">The integration &amp; admin tax</h3>
                <p className="body">Every tool has to be connected, administered, and kept in sync. That time and the errors between systems are a real cost that never shows on an invoice.</p>
              </div>
            </div>
          </div>
        </section>

        {/* THREE MOVES */}
        <section className="section is-canvas" id="moves">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">How consolidation works</span>
                <h2 className="h1 mt-3">Three moves. <em>Keep what fits, cut the rest.</em></h2>
              </div>
              <div>
                <p className="lede">Consolidation isn&apos;t a rip-and-replace. It&apos;s a surgical set of moves that each pay for themselves — start with the worst-fit, highest-cost tool and work down.</p>
              </div>
            </div>
            <div className="grid-3">
              {moves.map((m) => (
                <div className="card" key={m.title}>
                  <span className="eyebrow" style={{ color: "var(--indigo)" }}>{m.tag}</span>
                  <h3 className="h3 mt-2">{m.title}</h3>
                  <p className="body">{m.body}</p>
                  <p className="body" style={{ marginTop: "12px", fontWeight: 600, color: "#475467" }}>{m.best}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUY MORE SAAS VS ONE PLATFORM */}
        <section className="section" id="compare">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Buy more SaaS vs. one custom platform</span>
                <h2 className="h1 mt-3">Where the two models <em>diverge.</em></h2>
              </div>
              <div>
                <p className="lede">Both get you working software. Only one stops the cost from scaling with every hire and every new tool.</p>
              </div>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table className="compare compare-vertical">
                <thead>
                  <tr>
                    <th></th>
                    <th>More SaaS subscriptions</th>
                    <th>One custom platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feat">Cost model</td>
                    <td className="is-no">Per seat, per tool</td>
                    <td className="is-yes">One flat monthly fee</td>
                  </tr>
                  <tr>
                    <td className="feat">Scales with headcount?</td>
                    <td className="is-no">Yes &mdash; the bill climbs</td>
                    <td className="is-yes">No &mdash; flat at any size</td>
                  </tr>
                  <tr>
                    <td className="feat">Fit to your process</td>
                    <td className="is-no">Bend your process to the tool</td>
                    <td className="is-yes">Built to how you work</td>
                  </tr>
                  <tr>
                    <td className="feat">Who maintains &amp; runs it</td>
                    <td className="is-no">You, plus each vendor</td>
                    <td className="is-yes">We build it AND run it</td>
                  </tr>
                  <tr>
                    <td className="feat">Ownership</td>
                    <td className="is-no">You rent it, forever</td>
                    <td className="is-yes">You own the IP &amp; data</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="body mt-4" style={{ fontSize: "13px", color: "#6b7280" }}>
              Not every tool should be replaced &mdash; the point is to consolidate the ones that overlap or don&apos;t fit. Run the <Link href="/savings-calculator" className="link">savings calculator</Link> for your own numbers, or see the full <Link href="/compare/custom-software-vs-saas" className="link">custom-vs-SaaS cost breakdown</Link>.
            </p>
          </div>
        </section>

        {/* START WITH CRM SEATS */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">The most common first move</span>
                <h2 className="h1 mt-3">Start where the money is: <em>per-seat CRM licenses.</em></h2>
                <p className="body mt-4">
                  For most mid-market teams, the single biggest overpayment in the
                  stack is full-price CRM seats for people who barely use the CRM
                  &mdash; sellers, ops staff, partners, customers. Moving those
                  light users to a flat-fee portal that syncs with your CRM is
                  usually the fastest, most defensible saving, which is why it&apos;s
                  our most common first project. From there, overlapping point
                  tools are the next target.
                </p>
                <p className="body mt-4">
                  <Link href="/reduce-crm-licensing-costs" className="link">Read the full guide to cutting CRM licensing costs &rarr;</Link>
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Reclaim &amp; right-size first</div>
                      <p className="fl-body">Cut dormant seats and downgrade light users where a cheaper tier fits. Fast, low-risk.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Move light users to a portal</div>
                      <p className="fl-body">A <Link href="/custom-portal-development" className="link">custom portal</Link> on a flat fee ends per-seat cost for the users who need a sliver of the CRM.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">Then consolidate the rest</div>
                      <p className="fl-body">Overlapping and ill-fitting tools fold into the same platform &mdash; one flat fee, one source of truth.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CLUSTER LINKS */}
        <section className="section" id="explore">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Go deeper</span>
                <h2 className="h1 mt-3">The builds <em>behind the savings.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Start here</span>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The biggest, fastest line item in most stacks: per-seat CRM licenses for light users.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/custom-software-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Software Development</h3>
                <p className="body">One platform that replaces or connects your tools — built and run for you, in weeks.</p>
                <span className="link">Explore the hub →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
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
                <p className="lede">What consolidation means, how it saves, what stays, and what it costs.</p>
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

        <LeadForm source="Reduce SaaS Spend page" heading="See where your stack is leaking" sub="Tell us roughly what you run and how many users. We'll come back with where consolidation cuts the most — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop paying for a stack <em>you&rsquo;ve outgrown.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll map where your spend concentrates, show what consolidates cleanly, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/custom-software-development" className="btn btn-outline-light btn-lg">See all custom builds</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
