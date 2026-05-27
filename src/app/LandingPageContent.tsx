import Link from "next/link";
export default function LandingPageContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Cloud products · Consulting · Managed services</span>
              <h1 className="display reveal">Technology that <em>pays for itself.</em></h1>
              <p className="lede reveal reveal-d2">We build and integrate cloud products that cut costs, simplify operations, and unlock growth — standalone, alongside Salesforce, or wherever your business runs.</p>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="#products" className="btn btn-primary btn-lg btn-arrow">Explore our products</Link>
                <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-secondary btn-lg">Book a free demo</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">The Ardn product suite</div>
                <ul className="features mt-3">
                  <li>Membership Management — studios, gyms, clubs</li>
                  <li>Storefronts — Salesforce-native commerce</li>
                  <li>License Guard — reclaim unused licenses</li>
                  <li>Salesforce Payments — quote to cash inside SF</li>
                  <li>AI-Powered Support — ReplyCX</li>
                </ul>
                <Link href="#products" className="link" style={{ marginTop: "18px", color: "var(--indigo)", fontWeight: 600, display: "inline-block" }}>See each →</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* QUICK KPI BAR */}
      <section className="section-tight">
        <div className="container">
          <div className="metric-row">
            <div className="metric">
              <div className="number">30+</div>
              <div className="label">years of combined Salesforce design, build, and deployment experience.</div>
            </div>
            <div className="metric">
              <div className="number">100%</div>
              <div className="label">customer-focused — every engagement measured against an outcome, not an hour count.</div>
            </div>
            <div className="metric">
              <div className="number">5</div>
              <div className="label">products in market today, each replacing a category of third-party tooling.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SUITE */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our suite of solutions</span>
              <h2 className="h1 mt-3">The Ardn <em>product suite.</em></h2>
            </div>
            <div>
              <p className="lede">Five products. Each one solves a specific problem and pays for itself. Start with one, stack them all — your call.</p>
            </div>
          </div>

          <div className="grid-2">

            <article className="product-card" style={{ "--accent": "#C2185B" } as React.CSSProperties}>
              <span className="pill" style={{ background: "#FCE4EC", color: "#C2185B" }}>Flagship · Membership</span>
              <h3 className="h3">Membership Management</h3>
              <p className="body">Salesforce-native membership platform. Sign-ups, dues, renewals, classes, attendance, retention — one system for studios, gyms, clubs, and associations.</p>
              <ul className="features">
                <li>Recurring billing &amp; dunning out of the box</li>
                <li>Class scheduling &amp; attendance tracking</li>
                <li>Branded member self-service portal</li>
                <li>Native Salesforce reports &amp; dashboards</li>
              </ul>
              <Link href="/membership-management" className="link">Explore Membership Management</Link>
            </article>

            <article className="product-card" style={{ "--accent": "#4840E0" } as React.CSSProperties}>
              <span className="pill">Flagship · Commerce</span>
              <h3 className="h3">Storefronts</h3>
              <p className="body">Salesforce-native ecommerce. Run your store — products, memberships, subscriptions, events, appointments — without leaving Salesforce.</p>
              <ul className="features">
                <li>Memberships, subscriptions, events, ticketing</li>
                <li>Stripe, Paymentus, Apple Pay, Google Pay, Venmo</li>
                <li>Launch in days, not quarters</li>
              </ul>
              <Link href="/storefronts" className="link">Explore Storefronts</Link>
            </article>

            <article className="product-card" style={{ "--accent": "#0F9870" } as React.CSSProperties}>
              <span className="pill" style={{ background: "#E5F5EE", color: "#0F9870" }}>Pays for itself</span>
              <h3 className="h3">License Guard</h3>
              <p className="body">Salesforce-native watchdog for unused licenses. Detects inactivity, warns the user, deactivates per your rules — no code.</p>
              <ul className="features">
                <li>Inactivity rules by role, profile, permission set</li>
                <li>Pre-warning emails before any action</li>
                <li>Typically pays back its annual cost in one quarter</li>
              </ul>
              <Link href="/license-guard" className="link">Explore License Guard</Link>
            </article>

            <article className="product-card" style={{ "--accent": "#38A0F8" } as React.CSSProperties}>
              <span className="pill" style={{ background: "#E4F1FF", color: "#1B6FC9" }}>Payments</span>
              <h3 className="h3">Salesforce Payments</h3>
              <p className="body">From quote to cash inside Salesforce. Branded checkout, real-time status, automated reconciliation — no tab-switching.</p>
              <ul className="features">
                <li>Cards, ACH, digital wallets out of the box</li>
                <li>Bring your processor or use ours for lower rates</li>
                <li>PCI-compliant, audit-ready</li>
              </ul>
              <Link href="/salesforce-payments" className="link">Explore Payments</Link>
            </article>

            <article className="product-card" style={{ "--accent": "#B45309" } as React.CSSProperties}>
              <span className="pill" style={{ background: "#FEF3E2", color: "#B45309" }}>Customer service</span>
              <h3 className="h3">AI-Powered Support</h3>
              <p className="body">ReplyCX automates ~70% of routine queries across WhatsApp, email, chat, and social — in one no-code workspace.</p>
              <ul className="features">
                <li>No-code AI agents from your existing docs</li>
                <li>One inbox: WhatsApp, SMS, email, social, live chat</li>
                <li>Auto-routing, priority logic, CRM sync</li>
              </ul>
              <Link href="/ai-powered-support" className="link">Explore AI Support</Link>
            </article>

          </div>
        </div>
      </section>

      {/* MID-PAGE CTA STRIP */}
       <section className="section-tight is-canvas">        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">See it in your environment.</h2>
              <p className="body mt-2">Book a 30-minute demo. We will walk through your stack and show exactly where Ardn fits.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link  href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free demo</Link>
              <Link href="/our-products" className="btn btn-secondary btn-lg">See all products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ARDN MINI */}
       <section className="section">        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Who we are</span>
              <h2 className="h1 mt-3">A small team. <em>Big Salesforce experience.</em></h2>
              <p className="body mt-4">Ardn Cloud Solutions builds products that extend Salesforce — and a consulting practice that focuses on cost savings, simpler workflows, and faster outcomes. Same team from first call through implementation.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
                <Link href="/about-ardn" className="btn btn-secondary btn-arrow">About Ardn</Link>
                <Link href="/our-products" className="btn btn-ghost btn-arrow">Browse products</Link>
              </div>
            </div>
            <div>
              <ul className="fl">
                <li><span className="n">01</span><div><h4>Innovative products</h4><p>Four Salesforce-native products in market, each replacing a third-party tool category.</p></div></li>
                <li><span className="n">02</span><div><h4>Strategy &amp; consulting</h4><p>Decades of Salesforce expertise focused on the cheapest, fastest path to your outcome.</p></div></li>
                <li><span className="n">03</span><div><h4>Implementation &amp; integration</h4><p>We collaborate with your team or run the build ourselves — your call.</p></div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
       <section className="section is-canvas">        <div className="container">
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
       <section className="section" id="contact">        <div className="container">
          <div className="final-cta">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4">Let us talk about <em>what to ship first.</em></h2>
            <p className="lede">30 minutes. No SOW, no slides. Just a working answer to where Ardn can save you time, money, or both.</p>
            <div className="hero-ctas">
              <a  href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book a free demo</a>
              <Link href="/our-products" className="btn btn-outline-light btn-lg">Browse products</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
