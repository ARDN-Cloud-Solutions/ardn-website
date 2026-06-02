"use client";

import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";

/*
 * COPYWRITING / POSITIONING NOTES:
 *
 * About Ardn is the hybrid identity page. It anchors both pillars:
 *   1. Florida-based custom AI / development practice powered by the
 *      proprietary AI Forge Framework (Cat 2).
 *   2. 30+ years of Salesforce consulting, implementation, integration, and
 *      managed services (Cat 1 + consulting line).
 *
 * The hero, "Three doors in" section, and CTA all surface BOTH pillars so the
 * page wins traffic from both buyer intents and converts whichever pillar the
 * visitor is interested in.
 *
 * The page-level TrustBar reinforces the Orlando/FL local signal directly under
 * the hero — supports the LocalBusiness schema on /contact-us and the
 * Organization NAP in the site-wide layout.
 */

export default function AboutContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">About Ardn · Orlando, FL</span>
              {/* Hero headline now leads with both pillars: small Florida team,
                  big experience. The "experience" framing is broad enough to
                  cover both SF expertise and AI Forge custom-dev capability. */}
              <h1 className="display reveal">A small Florida team. <em>Big experience.</em></h1>
              <p className="lede reveal reveal-d2">Ardn Cloud Solutions is an Orlando-based development team. We build custom AI applications using our proprietary AI Forge Framework, ship a focused suite of Salesforce-native cloud products, and provide Salesforce consulting and managed services backed by 30+ years of expertise.</p>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="#approach" className="btn btn-primary btn-lg btn-arrow">How we work</Link>
                <Link href="#leadership" className="btn btn-secondary btn-lg">Meet the team</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">At a glance</div>
                {/* Updated facts: 6 products (AI Forge added), 30+ years SF
                    expertise kept as a credibility signal alongside the AI
                    Forge Framework brand. */}
                <ul className="features mt-3">
                  <li>Orlando, FL · serving the US &amp; globally</li>
                  <li>30+ years of Salesforce expertise</li>
                  <li>6 products live in market — Cat 1 SF-native + Cat 2 AI-built</li>
                  <li>AI Forge Framework — production in 2–6 weeks</li>
                  <li>Same partners from first call through delivery</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust bar reinforces Orlando/FL signal under the hero. */}
      <TrustBar />

      {/* METRICS */}
      <section className="section-tight">
        <div className="container">
          <div className="metric-row">
            <div className="metric"><div className="number">30+</div><div className="label">years of combined Salesforce design, build, and deployment experience.</div></div>
            <div className="metric"><div className="number">100%</div><div className="label">customer-focused — every engagement measured against an outcome.</div></div>
            {/* Stat updated: 6 products (added AI Forge). Framing now covers
                both Salesforce-native AND AI-built / Salesforce-capable
                product categories. */}
            <div className="metric"><div className="number">6</div><div className="label">products in market — Salesforce-native and AI-built, Salesforce-capable.</div></div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" id="approach">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How we work</span>
              <h2 className="h1 mt-3">Focused on <em>cost savings.</em></h2>
            </div>
            <div>
              <p className="lede">Every engagement starts with one question: where is the money going, and where can we cut it without hurting the business?</p>
            </div>
          </div>

          <div className="grid-2">
            {/* "Native by default" reframed: we still build on the right
                platform for the job (often Salesforce for SF customers) but the
                principle is "build where the leverage is highest," not "always
                inside Salesforce." */}
            <ul className="fl">
              <li><span className="n">01</span><div><h4>Critical, never reflexive</h4><p>We start by questioning the premise. Most engagements begin with subtractions.</p></div></li>
              <li><span className="n">02</span><div><h4>Build where the leverage is highest</h4><p>Salesforce-native when you live in Salesforce. AI Forge Framework when a custom AI build will move the needle faster.</p></div></li>
              <li><span className="n">03</span><div><h4>Small team, full ownership</h4><p>The person scoping the work is the person delivering it. Florida-based, Eastern Time, no offshore handoff.</p></div></li>
              <li><span className="n">04</span><div><h4>Outcome over hours</h4><p>Success is measured in dollars saved and steps removed.</p></div></li>
            </ul>
            <div>
              <p className="thesis">&ldquo;Build cost-effective, high-impact products and applications that help businesses simplify complexity and unlock growth — whether that lives inside Salesforce or runs alongside it.&rdquo;</p>
              <p className="kicker mt-4">— Ardn Mission</p>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              {/* CTA now offers BOTH audit types (Salesforce + AI readiness)
                  so both pillars can convert from this page. */}
              <h2 className="h2">Free Salesforce audit or AI readiness call?</h2>
              <p className="body mt-2">45 minutes. We will surface the highest-ROI cuts to your stack or scope the highest-leverage AI opportunity — your call. You leave with a written punch list either way.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free call</Link>
              <Link href="/our-products" className="btn btn-secondary btn-lg">See our products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="h1 mt-3">Three doors in. <em>One outcome.</em></h2>
            </div>
            <div>
              <p className="lede">Whether you arrive with an AI idea, a Salesforce environment to clean up, or a business problem we have not seen before — same destination.</p>
            </div>
          </div>

          <div className="grid-3">
            {/* Products card updated: AI Forge added; Membership Management
                positioning corrected (no longer "native to Salesforce"). The
                framing now covers both Cat 1 (SF-native) and Cat 2 (AI-built,
                SF-capable) products. */}
            <div className="card">
              <div className="card-num">01 / Products</div>
              <h3 className="h3">Six-product line</h3>
              <p className="body">AI Forge (custom AI development), Membership Management (AI-built platform for YMCAs, gyms, clubs), Storefronts, License Guard, Salesforce Payments, and ReplyCX — Salesforce-native where it counts, flexible where it does not.</p>
            </div>
            <div className="card">
              <div className="card-num">02 / Consulting</div>
              <h3 className="h3">Salesforce &amp; AI strategy</h3>
              <p className="body">30+ years of Salesforce expertise plus the AI Forge Framework. Implementation, license audits, integrations, managed services — and AI applications that work inside the systems you already run.</p>
            </div>
            <div className="card">
              <div className="card-num">03 / Custom builds</div>
              <h3 className="h3">Implementation &amp; AI Forge builds</h3>
              <p className="body">We collaborate with your team or run the whole build ourselves. Salesforce implementations, custom AI apps, or both — your call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section is-canvas" id="leadership">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Leadership</span>
              <h2 className="h1 mt-3">Meet the <em>team.</em></h2>
            </div>
            <div>
              <p className="lede">Every senior person you meet on day one is the same person you will talk to in year two. All Florida-based.</p>
            </div>
          </div>

          <div className="grid-3">
            <div className="card" style={{ textAlign: "left" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "999px", background: "linear-gradient(135deg, var(--indigo), var(--indigo-deep))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "18px", marginBottom: "18px" }}>DP</div>
              <h3 className="h3">Deep Patel</h3>
              <p className="kicker mt-2">Partner</p>
              <p className="body mt-3">Architects the product roadmap. Leads commerce, payments, platform engineering, and the AI Forge Framework.</p>
            </div>
            <div className="card" style={{ textAlign: "left" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "999px", background: "linear-gradient(135deg, var(--indigo), var(--indigo-deep))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "18px", marginBottom: "18px" }}>JP</div>
              <h3 className="h3">Jaimin Patel</h3>
              <p className="kicker mt-2">Partner</p>
              <p className="body mt-3">Owns delivery and customer outcomes. Two decades scoping and running enterprise CRM and custom-application programs.</p>
            </div>
            <div className="card" style={{ textAlign: "left" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "999px", background: "linear-gradient(135deg, var(--indigo), var(--indigo-deep))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "18px", marginBottom: "18px" }}>DB</div>
              <h3 className="h3">Dan Brennan</h3>
              <p className="kicker mt-2">Executive Advisor</p>
              <p className="body mt-3">Three decades of operator and advisory experience across cloud, SaaS, and enterprise transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="container">
          <div className="testimonial">
            <span className="eyebrow">100% happy customers</span>
            <p className="quote mt-4">Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business.</p>
            <div className="attribution">
              <div className="avatar">JV</div>
              <div>
                <div className="who">Jay Vashi</div>
                {/* Role generalised to match the hybrid identity. */}
                <div className="role">Senior Delivery Manager, Fortune 500 insurance company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BECOME A PARTNER */}
      <section className="section is-indigo">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow on-dark">Partners</span>
              {/* Partner pitch broadened: if you implement Salesforce OR you
                  sell custom software / AI services, our products and AI Forge
                  builds can land with your customers. */}
              <h2 className="h1 mt-3" style={{ color: "#fff" }}>Bring Ardn to <em style={{ color: "#fff" }}>your customers.</em></h2>
              <p className="lede" style={{ color: "rgba(255,255,255,0.85)", marginTop: "16px" }}>If you implement Salesforce, sell custom software, or run an AI services practice — and our products or AI Forge builds would land with your customers — let us talk.</p>
            </div>
            <div>
              <ul className="fl" style={{ color: "#fff" }}>
                <li style={{ borderColor: "rgba(255,255,255,0.15)" }}><span className="n" style={{ color: "#fff" }}>01</span><div><h4 style={{ color: "#fff" }}>Co-sell economics</h4><p style={{ color: "rgba(255,255,255,0.78)" }}>Direct revenue share, protected deal registration.</p></div></li>
                <li style={{ borderColor: "rgba(255,255,255,0.15)" }}><span className="n" style={{ color: "#fff" }}>02</span><div><h4 style={{ color: "#fff" }}>Hands-on enablement</h4><p style={{ color: "rgba(255,255,255,0.78)" }}>Real product training, real architectures, real humans.</p></div></li>
                <li style={{ borderColor: "rgba(255,255,255,0.15)" }}><span className="n" style={{ color: "#fff" }}>03</span><div><h4 style={{ color: "#fff" }}>Roadmap influence</h4><p style={{ color: "rgba(255,255,255,0.78)" }}>Quarterly roadmap reviews with our product team.</p></div></li>
              </ul>
              <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-arrow mt-5">Become a partner</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
