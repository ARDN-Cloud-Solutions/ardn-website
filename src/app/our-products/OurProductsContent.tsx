"use client";

import Link from "next/link";

export default function OurProductsContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Products</span>
              <h1 className="display reveal">The Ardn <em>product suite.</em></h1>
              <p className="lede reveal reveal-d2">Five focused products. One mission: technology that pays for itself inside Salesforce.</p>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="#suite" className="btn btn-primary btn-lg btn-arrow">Explore the suite</Link>
                <Link href="#roadmap" className="btn btn-secondary btn-lg">See what is coming</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">Suite at a glance</div>
                <ul className="features mt-3">
                  <li>Membership Platform — run members inside Salesforce</li>
                  <li>Storefronts — native commerce for any business model</li>
                  <li>License Guard — detect and reclaim inactive seats</li>
                  <li>Salesforce Payments — take payments without leaving your CRM</li>
                  <li>ReplyCX — AI support across every channel</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* PRODUCT SUITE */}
      <section className="section" id="suite">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">The suite</span>
              <h2 className="h1 mt-3">Five products. <em>One philosophy.</em></h2>
            </div>
            <div>
              <p className="lede">Every product is Salesforce-native, self-funding, and built to be live within a sprint. Not enterprise shelfware.</p>
            </div>
          </div>

          <div className="grid-2">
            <article className="product-card" style={{ "--accent": "#C2185B" } as React.CSSProperties}>
              <div className="product-eyebrow">Membership Platform</div>
              <h3 className="h2">Run your members inside Salesforce.</h3>
              <p className="body">Sign-up, recurring billing, member portal, class scheduling — all native. Built for studios, gyms, associations, and clubs.</p>
              <Link href="/membership-management" className="btn btn-primary btn-arrow mt-auto">Explore Membership Platform</Link>
            </article>
            <article className="product-card" style={{ "--accent": "#4840E0" } as React.CSSProperties}>
              <div className="product-eyebrow">Storefronts</div>
              <h3 className="h2">Run your store inside Salesforce.</h3>
              <p className="body">Catalog, inventory, checkout, orders, appointments, events — all native commerce without leaving your CRM.</p>
              <Link href="/storefronts" className="btn btn-primary btn-arrow mt-auto">Explore Storefronts</Link>
            </article>
            <article className="product-card" style={{ "--accent": "#0F9870" } as React.CSSProperties}>
              <div className="product-eyebrow">License Guard</div>
              <h3 className="h2">Stop paying for inactive users.</h3>
              <p className="body">Detect dormant seats, warn users, and deactivate per policy — automatically. ROI in one quarter.</p>
              <Link href="/license-guard" className="btn btn-primary btn-arrow mt-auto">Explore License Guard</Link>
            </article>
            <article className="product-card" style={{ "--accent": "#38A0F8" } as React.CSSProperties}>
              <div className="product-eyebrow">Salesforce Payments</div>
              <h3 className="h2">Take payments inside Salesforce.</h3>
              <p className="body">Cards, ACH, digital wallets. Bring your processor or use ours. PCI compliant, fully native.</p>
              <Link href="/salesforce-payments" className="btn btn-primary btn-arrow mt-auto">Explore Salesforce Payments</Link>
            </article>
            <article className="product-card" style={{ "--accent": "#B45309" } as React.CSSProperties}>
              <div className="product-eyebrow">ReplyCX</div>
              <h3 className="h2">AI support that feels human.</h3>
              <p className="body">70% of queries automated. Omnichannel inbox. No-code bot builder. CRM-native and live in one sprint.</p>
              <Link href="/ai-powered-support" className="btn btn-primary btn-arrow mt-auto">Explore ReplyCX</Link>
            </article>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Not sure where to start?</h2>
              <p className="body mt-2">Book a free 30-minute discovery call. We will map the right product to your biggest current pain.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a discovery call</a>
              <Link href="/about-ardn" className="btn btn-secondary btn-lg">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section" id="roadmap">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Coming soon</span>
              <h2 className="h1 mt-3">What is on <em>the roadmap.</em></h2>
            </div>
            <div>
              <p className="lede">Six more products in development. All Salesforce-native. All self-funding. All designed to pay back within one quarter.</p>
            </div>
          </div>

          <div className="grid-2">
            <article className="product-card" style={{ "--accent": "#6F4ED7" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">FlexiStore</h3>
              <p className="body">Multi-location inventory management native to Salesforce. Real-time visibility, transfers, and stock-level automation.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#D94A6A" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">StageGuard</h3>
              <p className="body">Enforce stage-gate rules on Opportunities, Cases, and custom objects. Compliance before progression.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#0F9870" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">SmartLicense</h3>
              <p className="body">ML-powered license demand forecasting. Know what you need before renewal — not after.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#B45309" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">FlowForward</h3>
              <p className="body">One-click Flow health checks and performance scoring. Ship faster, break nothing.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#38A0F8" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">KnowledgeBuilder</h3>
              <p className="body">Auto-generates Salesforce Knowledge articles from closed Cases. Documentation that writes itself.</p>
            </article>
            <article className="product-card" style={{ "--accent": "#4840E0" } as React.CSSProperties}>
              <div className="product-eyebrow">Coming soon</div>
              <h3 className="h2">PageAlert</h3>
              <p className="body">In-app system announcements and banners native to Salesforce. No email needed for critical comms.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SUGGEST A PRODUCT */}
      <section className="section is-indigo" id="suggest">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow on-dark">Shape what we build</span>
              <h2 className="h1 mt-3">Got a Salesforce problem <em>we have not solved yet?</em></h2>
              <p className="body mt-4">Tell us what you need. Our shortest path from suggestion to AppExchange listing has been six weeks.</p>
            </div>
            <div>
              <ul className="fl">
                <li>
                  <div className="fl-num">01</div>
                  <div>
                    <div className="fl-head">Submit your idea</div>
                    <p className="fl-body !text-white ">Short form. Describe the pain, not the solution. We take it from there.</p>
                  </div>
                </li>
                <li>
                  <div className="fl-num">02</div>
                  <div>
                    <div className="fl-head">We review and scope</div>
                    <p className="fl-body !text-white ">Our product team evaluates technical fit, timeline, and commercial model.</p>
                  </div>
                </li>
                <li>
                  <div className="fl-num">03</div>
                  <div>
                    <div className="fl-head">We build it</div>
                    <p className="fl-body !text-white ">If the idea fits our philosophy — Salesforce-native, self-funding, fast ROI — it gets scheduled.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <a href="/contact-us" className="btn btn-on-dark btn-lg btn-arrow">Suggest a product</a>
              </div>
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
                <div className="role">Salesforce Delivery Manager, Fortune 500 insurance company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" id="contact">
        <div className="container">
          <div className="final-cta">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4">Tell us what <em>you need.</em></h2>
            <p className="lede">30-minute discovery call. We will map the right product — or combination — to your team is biggest Salesforce pain point today.</p>
            <div className="hero-ctas">
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book a discovery call</a>
              <Link href="/about-ardn" className="btn btn-outline-light btn-lg">Meet the Ardn team</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
