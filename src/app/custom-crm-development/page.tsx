import { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";
import LeadForm from "@/components/common/LeadForm";
import CostReductionTestimonial from "@/components/common/CostReductionTestimonial";

// Wedge SPOKE for the "custom CRM development / build your own CRM" head term —
// a distinct commercial query the generic /custom-software-development hub is
// too broad to rank for. Positioning stays inside the per-seat cost wedge:
// most companies don't need to rip out Salesforce/HubSpot, they need to stop
// paying per-seat for light users — so this page frames a "custom CRM" as
// either (a) a portal layer over the CRM you keep, or (b) a full owned CRM
// when the platform itself no longer fits. Answers the recurring build-vs-buy
// objections the SERP plants ("who maintains it?", "isn't a build risky?")
// with ARDN's built-AND-run, flat-fee model. No fabricated clients/metrics.
export const metadata: Metadata = {
  title: "Custom CRM Development — End Per-Seat Fees | Ardn",
  description:
    "Custom CRM development, built and run for you on one flat fee — no per-seat licenses. Own the system; keep or replace your CRM. New customers build free.",
  keywords: [
    "custom CRM development",
    "custom CRM development company",
    "build your own CRM",
    "bespoke CRM software",
    "custom CRM software",
    "replace Salesforce with custom CRM",
    "flat-fee CRM",
    "CRM without per-seat licenses",
    "custom CRM to reduce seats",
    "own your CRM",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/custom-crm-development",
    languages: {
      "en-US": "https://ardncloudsolutions.com/custom-crm-development",
      "x-default": "https://ardncloudsolutions.com/custom-crm-development",
    },
  },
  openGraph: {
    title: "Custom CRM Development — Own It, End Per-Seat Fees | Ardn",
    description:
      "Custom CRM development built and run for you on one flat fee — no per-seat licenses. Keep the CRM you have or replace it. Live in weeks; new customers build free.",
    url: "https://ardncloudsolutions.com/custom-crm-development",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Custom CRM development — own your CRM and end per-seat fees, by Ardn",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM Development — End Per-Seat Fees | Ardn",
    description:
      "Custom CRM development, built and run for you on one flat fee — no per-seat licenses. Keep or replace your CRM.",
    site: "@ardn_cloud_sol",
    images: ["/images/ardn-home-hero.webp"],
  },
};

const CALENDLY =
  "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

const FAQS = [
  {
    q: "What does 'custom CRM development' mean — do I have to replace Salesforce or HubSpot?",
    a: "Not necessarily. There are two shapes, and we help you pick the one that costs less. The first keeps your CRM as the system of record and builds a custom layer — a portal and workflows — around it so light users stop needing per-seat licenses. The second replaces a platform you've genuinely outgrown with a CRM you own outright. Most mid-market companies start with the first because it captures the savings without the risk of a migration.",
  },
  {
    q: "How is a custom CRM cheaper than Salesforce or HubSpot?",
    a: "Off-the-shelf CRMs bill per seat, so the cost climbs with every user you add — forever. A custom CRM runs on one flat monthly fee regardless of headcount, and you own the software instead of renting access. The more users you have, and the lighter their use, the wider the gap. We won't quote a fixed number here because it depends on your seat count and rate — the savings calculator lets you run your own.",
  },
  {
    q: "Who maintains and runs the custom CRM after it's built?",
    a: "We do. This is the objection most build-vs-buy advice never resolves — 'a custom build becomes your problem to run.' It isn't with us. One flat monthly subscription covers the build, hosting, monitoring, and ongoing changes. You don't hire developers, stand up infrastructure, or chase a vendor for fixes. We build it AND run it.",
  },
  {
    q: "Do we own the CRM and our data?",
    a: "Yes. You own the IP and the data outright. We retain rights only to the underlying frameworks and tooling we reuse across clients. If you ever leave, you get a full export and complete documentation — no lock-in, no hostage data.",
  },
  {
    q: "Can a custom CRM connect to the tools we already use?",
    a: "Yes. It integrates with your billing, support, marketing, and back-office systems through their APIs so data stays in one place and in sync — whether the custom CRM sits alongside your existing platform or takes over from it.",
  },
  {
    q: "How long does it take, and what does it cost?",
    a: "Most builds reach a production-ready first version in 2–6 weeks via our AI Forge Framework, with a fixed quote within 48 hours of the first call. It runs on one flat monthly subscription — tiers from $3,000–$12,000+/month depending on scope — covering the build, hosting, and ongoing changes. New customers pay nothing for the one-time build.",
  },
];

const paths = [
  {
    tag: "Path A — Keep your CRM",
    title: "A custom layer over the CRM you have",
    body: "Keep Salesforce, HubSpot, or your current CRM as the system of record and build a custom portal and workflows around it. Light users get exactly what they need on a flat fee instead of a per-seat license each — no migration.",
    best: "Best for: cutting per-seat cost without switching platforms.",
  },
  {
    tag: "Path B — Own it outright",
    title: "A full custom CRM you own",
    body: "Outgrown a platform that charges per seat and still doesn't fit how you work? We rebuild it as a CRM shaped to your exact process, owned by you, on one flat fee — and we run it after launch.",
    best: "Best for: teams the off-the-shelf platform no longer fits.",
  },
];

export default function CustomCrmDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://ardncloudsolutions.com/custom-crm-development#service",
        name: "Custom CRM Development",
        serviceType: "Custom CRM Software Development & Managed Operation",
        description:
          "Ardn designs, builds, and operates custom CRM software — either as a flat-fee custom layer over your existing CRM that moves light users off per-seat licenses, or as a full CRM you own outright. Production-ready in 2–6 weeks via the AI Forge Framework, run under one flat monthly subscription with no per-seat fees.",
        url: "https://ardncloudsolutions.com/custom-crm-development",
        provider: { "@id": "https://ardncloudsolutions.com/#organization" },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Place", name: "Global" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://ardncloudsolutions.com/custom-crm-development#faq",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ardncloudsolutions.com/custom-crm-development#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ardncloudsolutions.com" },
          { "@type": "ListItem", position: 2, name: "Custom CRM Development", item: "https://ardncloudsolutions.com/custom-crm-development" },
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
                <span className="eyebrow">Custom CRM Development</span>
                <h1 className="display reveal">
                  Custom CRM development: <em>own it, end per-seat fees.</em>
                </h1>
                <p className="lede reveal reveal-d2">
                  Off-the-shelf CRMs bill you per seat forever — the cost climbs
                  with every user you add. A custom CRM flips that: one flat fee,
                  built to your exact process, and software you own instead of
                  access you rent. Keep the CRM you have and build a custom layer
                  over it, or replace one you&rsquo;ve outgrown. Either way, we
                  build it AND run it.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                  <span className="badge">You own it</span>
                  <span className="badge is-emerald">Flat fee, not per-seat</span>
                  <span className="badge is-canvas">Built &amp; run for you</span>
                </div>
                <div className="hero-ctas reveal reveal-d3">
                  <Link href={CALENDLY} target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free 30-min call</Link>
                  <Link href="/savings-calculator" className="btn btn-secondary btn-lg">Calculate your per-seat savings →</Link>
                </div>
              </div>
              <aside className="hero-aside reveal reveal-d4">
                <div className="card" style={{ padding: "28px" }}>
                  <div className="kicker">Two ways to build</div>
                  <ul className="features mt-3">
                    <li>Keep your CRM, add a custom layer</li>
                    <li>Or own a full custom CRM</li>
                    <li>Flat fee — no per-seat licenses</li>
                    <li>You own the IP &amp; your data</li>
                    <li>We build it AND run it</li>
                  </ul>
                  <p className="body" style={{ marginTop: "18px", paddingTop: "16px", borderTop: "1px solid #eceef5", fontWeight: 600, color: "var(--indigo)" }}>
                    🎁 New customers: we build it free. Flat-fee tiers from $3,000/mo — no per-seat pricing.
                  </p>
                  <p className="body" style={{ marginTop: "14px" }}>
                    <Link href="/reduce-crm-licensing-costs" className="link">New here? Start with how to cut CRM licensing costs →</Link>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* TWO PATHS */}
        <section className="section" id="paths">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Two ways to build</span>
                <h2 className="h1 mt-3">Keep your CRM, <em>or own a new one.</em></h2>
              </div>
              <div>
                <p className="lede">&ldquo;Custom CRM&rdquo; doesn&rsquo;t have to mean ripping out Salesforce. We help you pick the path that costs less for how your team actually works.</p>
              </div>
            </div>
            <div className="grid-2">
              {paths.map((p) => (
                <div className="card" key={p.title}>
                  <span className="eyebrow" style={{ color: "var(--indigo)" }}>{p.tag}</span>
                  <h3 className="h3 mt-2">{p.title}</h3>
                  <p className="body">{p.body}</p>
                  <p className="body" style={{ marginTop: "12px", fontWeight: 600, color: "#475467" }}>{p.best}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/custom-portal-development" className="link">Path A in depth: custom portals that cut CRM seats →</Link>
              <Link href="/compare/custom-software-vs-saas" className="link">Custom vs. SaaS: the total-cost math →</Link>
            </div>
          </div>
        </section>

        {/* WHY FLAT FEE WINS */}
        <section className="section is-canvas">
          <div className="container">
            <div className="split">
              <div>
                <span className="eyebrow">Why a custom CRM pays off</span>
                <h2 className="h1 mt-3">Break the link <em>between cost and headcount.</em></h2>
                <p className="body mt-4">
                  Per-seat pricing means your CRM bill grows every time you hire,
                  onboard a partner, or add a customer segment. A custom CRM costs
                  the same whether 20 people use it or 2,000 — so the savings
                  compound as you grow. And because you own it, there&rsquo;s no
                  renewal leverage held over you at contract time.
                </p>
              </div>
              <div>
                <ul className="fl">
                  <li>
                    <div className="fl-num !text-black">A</div>
                    <div>
                      <div className="fl-head !text-black">Flat fee, not per-seat</div>
                      <p className="fl-body">One monthly subscription covers build, hosting, and changes — it doesn&rsquo;t climb as you grow.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">B</div>
                    <div>
                      <div className="fl-head !text-black">Built to your process</div>
                      <p className="fl-body">Shaped to how you actually work, not a vendor&rsquo;s template you bend your business around.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">C</div>
                    <div>
                      <div className="fl-head !text-black">You own it, no lock-in</div>
                      <p className="fl-body">You own the IP and the data; full export and documentation if you ever leave.</p>
                    </div>
                  </li>
                  <li>
                    <div className="fl-num !text-black">D</div>
                    <div>
                      <div className="fl-head !text-black">We run it after launch</div>
                      <p className="fl-body">Hosting, monitoring, and iteration under one team — the build never becomes your burden.</p>
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
                <h2 className="h1 mt-3">The rest of <em>the cost-cutting toolkit.</em></h2>
              </div>
            </div>
            <div className="grid-3">
              <Link href="/reduce-crm-licensing-costs" className="card" style={{ textDecoration: "none", borderColor: "var(--indigo)" }}>
                <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9", marginBottom: "10px", display: "inline-block" }}>Start here</span>
                <h3 className="h3">Cut CRM Licensing Costs</h3>
                <p className="body">The decision framework — reclaim, right-size, or replace the seat.</p>
                <span className="link">Read the guide →</span>
              </Link>
              <Link href="/custom-portal-development" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Custom Portal Development</h3>
                <p className="body">Move light users off per-seat licenses onto a flat-fee portal wired into your CRM.</p>
                <span className="link">Explore portals →</span>
              </Link>
              <Link href="/savings-calculator" className="card" style={{ textDecoration: "none" }}>
                <h3 className="h3">Savings Calculator</h3>
                <p className="body">Plug in your seat count and rate to see the flat-fee comparison in 30 seconds.</p>
                <span className="link">Run the numbers →</span>
              </Link>
            </div>
            <div style={{ marginTop: "32px", textAlign: "center", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="link">See the Salesforce seat-cost math →</Link>
              <Link href="/compare/hubspot-seat-cost-vs-custom-portal" className="link">See the HubSpot seat-cost math →</Link>
              <Link href="/custom-software-development" className="link">Explore all custom software &amp; platform builds →</Link>
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
                <p className="lede">Replace or keep your CRM, how the savings work, who runs it, and what you own.</p>
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

        <CostReductionTestimonial />

        <LeadForm source="Custom CRM Development page" heading="Scope your custom CRM" showSeatQualifiers submitLabel="Show me my savings" sub="Tell us which CRM you run today and roughly how many users. We'll come back with whether a custom layer or a full build saves more — and a fixed quote." />

        {/* FINAL CTA */}
        <section className="section" id="book">
          <div className="container">
            <div className="final-cta">
              <span className="eyebrow on-dark">Get started</span>
              <h2 className="display mt-4">Stop renting seats. <em>Own your CRM.</em></h2>
              <p className="lede">30-minute free call. We&rsquo;ll look at how your team uses the CRM today, tell you whether a custom layer or a full build saves more, and give you a fixed quote in 48 hours.</p>
              <div className="hero-ctas">
                <a href={CALENDLY} target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book your free call</a>
                <Link href="/ai-forge#pricing" className="btn btn-outline-light btn-lg">See flat-fee pricing tiers</Link>
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
