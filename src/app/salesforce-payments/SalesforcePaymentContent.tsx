"use client";

import Link from "next/link";

export default function SalesforcePaymentContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Salesforce Payments</span>
              <h1 className="display reveal">Take payments <em>inside Salesforce.</em></h1>
              <p className="lede reveal reveal-d2">Collect, track, and reconcile payments without leaving your CRM. Cards, ACH, digital wallets — all linked to the records you already manage.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                <span className="badge">Salesforce native</span>
                <span className="badge is-emerald">PCI compliant</span>
                <span className="badge is-canvas">Cards · ACH · digital wallets</span>
              </div>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">See it in action</Link>
                <Link href="#how" className="btn btn-secondary btn-lg">How it works</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">What you get</div>
                <ul className="features mt-3">
                  <li>Multi-processor support out of the box</li>
                  <li>Automatic payment status sync to Salesforce</li>
                  <li>Customizable checkout flows</li>
                  <li>Recurring billing &amp; dunning</li>
                  <li>PCI-compliant — data stays in Salesforce</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section-tight">
        <div className="container">
          <div className="metric-row">
            <div className="metric"><div className="number">100%</div><div className="label">Salesforce-native. Payments live on the records your team already works from.</div></div>
            <div className="metric"><div className="number">PCI</div><div className="label">compliant tokenization. Card data never touches your Salesforce environment.</div></div>
            <div className="metric"><div className="number">All</div><div className="label">major payment methods. Cards, ACH, Apple Pay, Google Pay, Venmo, and more.</div></div>
          </div>
        </div>
      </section>

      {/* WHY NATIVE PAYMENTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Why Salesforce Payments</span>
              <h2 className="h1 mt-3">Six reasons teams <em>stop context-switching.</em></h2>
            </div>
            <div>
              <p className="lede">When your payment data lives next to your customer data, everything downstream improves.</p>
            </div>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-num">01</div><h3 className="h3">Streamlined operations</h3><p className="body">One workspace for payments, invoicing, and CRM. Less manual data entry, fewer systems.</p></div>
            <div className="card"><div className="card-num">02</div><h3 className="h3">Improved cash flow</h3><p className="body">Automate collections, dunning, and reconciliation. Faster time-to-cash on invoices.</p></div>
            <div className="card"><div className="card-num">03</div><h3 className="h3">Better customer experience</h3><p className="body">Branded, embedded checkout wherever your customers transact with you.</p></div>
            <div className="card"><div className="card-num">04</div><h3 className="h3">Data you can act on</h3><p className="body">Payment events live on Salesforce records, ready for automation, reports, and AI.</p></div>
            <div className="card"><div className="card-num">05</div><h3 className="h3">Scales with you</h3><p className="body">From first transaction to enterprise volume — same platform, same admin console.</p></div>
            <div className="card"><div className="card-num">06</div><h3 className="h3">Lower processor fees</h3><p className="body">Bring your own processor. We negotiate on your behalf if you prefer us to.</p></div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Want to see it on your data?</h2>
              <p className="body mt-2">30-minute walkthrough using a live Salesforce environment and your payment types.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">See it in action</Link>
              <Link href="/our-products" className="btn btn-secondary btn-lg">Browse other products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 className="h1 mt-3">From initiation to <em>report — in Salesforce.</em></h2>
            </div>
            <div>
              <p className="lede">Five steps. All inside your CRM. No external reconciliation needed.</p>
            </div>
          </div>
          <div className="steps" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
            <div className="step"><h3>Initiate</h3><p>Sales or customer service triggers a payment request directly from any Salesforce record.</p></div>
            <div className="step"><h3>Checkout</h3><p>Customer pays through your branded, embedded checkout — card, ACH, or digital wallet.</p></div>
            <div className="step"><h3>Process</h3><p>Payment goes through your processor. Tokenized and PCI compliant.</p></div>
            <div className="step"><h3>Status</h3><p>Payment result syncs automatically to the Salesforce record. No manual update.</p></div>
            <div className="step"><h3>Report</h3><p>All payment data lives in Salesforce. Build reports, dashboards, and automations from it.</p></div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section is-canvas">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Who it is for</span>
              <h2 className="h1 mt-3">Works across <em>every industry.</em></h2>
            </div>
            <div>
              <p className="lede">If you collect money and use Salesforce, you can remove every external payment tool from your stack.</p>
            </div>
          </div>
          <div className="grid-4">
            <div className="card"><h3 className="h3">B2B</h3><p className="body">Invoice-to-cash automation for complex payment cycles.</p></div>
            <div className="card"><h3 className="h3">SaaS</h3><p className="body">Recurring subscriptions, upgrades, and dunning — native.</p></div>
            <div className="card"><h3 className="h3">Professional services</h3><p className="body">Milestone billing, retainers, time &amp; materials.</p></div>
            <div className="card"><h3 className="h3">Healthcare</h3><p className="body">Patient billing, copays, and payment plans inside Salesforce Health Cloud.</p></div>
            <div className="card"><h3 className="h3">Education</h3><p className="body">Tuition, course fees, and event registrations.</p></div>
            <div className="card"><h3 className="h3">Non-profit</h3><p className="body">Donations, memberships, and grant disbursements.</p></div>
            <div className="card"><h3 className="h3">Public sector</h3><p className="body">Permit fees, fines, and licensing — compliant and auditable.</p></div>
            <div className="card"><h3 className="h3">Retail</h3><p className="body">In-store, online, and hybrid order payments.</p></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="container">
          <div className="testimonial">
            <span className="eyebrow">What clients say</span>
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

      {/* FAQ */}
      <section className="section is-canvas">
        <div className="container-narrow">
          <span className="eyebrow">FAQ</span>
          <h2 className="h1 mt-3">Salesforce Payments <em>questions.</em></h2>
          <div className="mt-6">
            <details className="faq-item" open>
              <summary>Which Salesforce editions are compatible?</summary>
              <div className="answer">Professional, Enterprise, Unlimited, and Developer editions. Works with Health Cloud, Nonprofit Cloud, and other industry clouds.</div>
            </details>
            <details className="faq-item">
              <summary>Can I customize the checkout experience?</summary>
              <div className="answer">Yes. Checkout flows are fully branded and configurable. You control what fields appear, the UX flow, and the confirmation experience.</div>
            </details>
            <details className="faq-item">
              <summary>What payment methods are supported?</summary>
              <div className="answer">Cards (Visa, Mastercard, Amex, Discover), ACH, Apple Pay, Google Pay, Venmo. Custom methods available via API.</div>
            </details>
            <details className="faq-item">
              <summary>Is it PCI compliant?</summary>
              <div className="answer">Yes. Card data is tokenized at capture, never stored in Salesforce. PCI DSS Level 1 compliant through certified payment processors.</div>
            </details>
            <details className="faq-item">
              <summary>Can I bring my own payment processor?</summary>
              <div className="answer">Yes. Ardn is processor-agnostic. We support Stripe, Paymentus, and custom integrations. Use your existing rates and contracts.</div>
            </details>
            <details className="faq-item">
              <summary>Will Ardn assist with implementation?</summary>
              <div className="answer">Yes. Ardn&apos;s team handles the integration, configuration, and go-live support. Most go-lives happen within a single sprint.</div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" id="trial">
        <div className="container">
          <div className="final-cta">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4">See it in <em>your environment.</em></h2>
            <p className="lede">We will bring a Salesforce sandbox, your data model, and a live checkout flow — and walk you through exactly how Salesforce Payments changes your ops.</p>
            <div className="hero-ctas">
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Request your trial</a>
              <Link href="/our-products" className="btn btn-outline-light btn-lg">See the full suite</Link>
            </div>
            <p style={{ marginTop: "20px" }}>
              <Link href="/reduce-salesforce-license-costs" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Also cutting Salesforce costs? See how to reduce your license bill &rarr;</Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
