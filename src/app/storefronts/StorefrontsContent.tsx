"use client";

import Link from "next/link";

export default function StorefrontsContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Storefronts</span>
              <h1 className="display reveal">Run your store <em>inside Salesforce.</em></h1>
              <p className="lede reveal reveal-d2">Products, memberships, subscriptions, events, appointments, payments — one platform, native to the CRM you already own.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                <span className="badge">Salesforce native</span>
                <span className="badge is-emerald">Memberships · subscriptions · events</span>
                <span className="badge is-canvas">Launch in days</span>
              </div>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Request a demo</Link>
                <Link href="#compare" className="btn btn-secondary btn-lg">See the comparison</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">What you can sell</div>
                <ul className="features mt-3">
                  <li>Physical &amp; digital products</li>
                  <li>Memberships and subscriptions</li>
                  <li>Events &amp; ticketing</li>
                  <li>Appointments &amp; services</li>
                  <li>B2B catalogs &amp; custom objects</li>
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
            <div className="metric"><div className="number">1</div><div className="label">data layer. Storefronts uses your existing Salesforce objects as the commerce schema.</div></div>
            <div className="metric"><div className="number">5+</div><div className="label">payment providers built in: Stripe, Paymentus, Apple Pay, Google Pay, Venmo.</div></div>
            <div className="metric"><div className="number">72h</div><div className="label">typical configure-to-live time for customers replacing an existing stack.</div></div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What you get</span>
              <h2 className="h1 mt-3">Everything you need to <em>run the business.</em></h2>
            </div>
            <div>
              <p className="lede">Catalog, cart, checkout, inventory, promotions, orders, appointments — all native, all reportable, all in one place.</p>
            </div>
          </div>

          <div className="grid-3">
            <div className="card"><div className="card-num">01</div><h3 className="h3">Pricebook management</h3><p className="body">Catalog, pricing tiers, and variants — managed natively in Salesforce.</p></div>
            <div className="card"><div className="card-num">02</div><h3 className="h3">Inventory management</h3><p className="body">Real-time stock, warehouse operations, and forecasts.</p></div>
            <div className="card"><div className="card-num">03</div><h3 className="h3">Payments</h3><p className="body">Cards, ACH, Apple Pay, Google Pay, Venmo. Bring your processor or use ours.</p></div>
            <div className="card"><div className="card-num">04</div><h3 className="h3">Promotions</h3><p className="body">Customizable rules, discount codes, segment-specific offers.</p></div>
            <div className="card"><div className="card-num">05</div><h3 className="h3">Order management</h3><p className="body">Placement to fulfillment to delivery — every state visible in Salesforce.</p></div>
            <div className="card"><div className="card-num">06</div><h3 className="h3">Appointment booking</h3><p className="body">Team schedules and bookings managed directly through your CRM.</p></div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Want to see it on your data?</h2>
              <p className="body mt-2">30-minute demo using your industry, your data model, your stack.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Request a demo</Link>
              <Link href="/our-products" className="btn btn-secondary btn-lg">Browse other products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 STEPS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Launch path</span>
              <h2 className="h1 mt-3">Live in <em>four steps.</em></h2>
            </div>
            <div>
              <p className="lede">Configure inside Salesforce. Customize the brand. Go live. Optimize with built-in analytics. Most customers ship in a single sprint.</p>
            </div>
          </div>
          <div className="steps">
            <div className="step"><h3>Configure</h3><p>Set up Storefronts in your Salesforce environment. No Apex required.</p></div>
            <div className="step"><h3>Customize</h3><p>Theme the storefront to your brand using Lightning components or our API.</p></div>
            <div className="step"><h3>Launch</h3><p>Go live and start selling — all from inside Salesforce.</p></div>
            <div className="step"><h3>Optimize</h3><p>Use built-in analytics to refine performance and customer experience.</p></div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section is-canvas">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Who it is for</span>
              <h2 className="h1 mt-3">Built for <em>service-heavy</em> commerce.</h2>
            </div>
            <div>
              <p className="lede">If your model includes memberships, subscriptions, services, events, or studios, Storefronts was built for you.</p>
            </div>
          </div>
          <div className="grid-4">
            <div className="card"><div className="card-icon">S</div><h3 className="h3">E-commerce</h3><p className="body">Physical, digital, or service goods.</p></div>
            <div className="card"><div className="card-icon">M</div><h3 className="h3">Memberships</h3><p className="body">Renewals, tiers, recurring billing.</p></div>
            <div className="card"><div className="card-icon">A</div><h3 className="h3">Appointments</h3><p className="body">Booking and billing for services.</p></div>
            <div className="card"><div className="card-icon">E</div><h3 className="h3">Events &amp; tickets</h3><p className="body">Registration, sales, ticketing — all native.</p></div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section" id="compare">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How it compares</span>
              <h2 className="h1 mt-3">Storefronts vs <em>the alternatives.</em></h2>
            </div>
            <div>
              <p className="lede">A native commerce platform sized for the mid-market and service-heavy businesses — not the F500 budget of Commerce Cloud, and not the disconnected stack of Shopify or CPQ.</p>
            </div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className="compare">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="is-ardn">Storefronts</th>
                  <th>Commerce Cloud</th>
                  <th>Shopify</th>
                  <th>CPQ</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="feat">Works natively with Salesforce CRM</td><td className="is-ardn is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-no">No</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Unlimited pricebooks</td><td className="is-ardn is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Unlimited products</td><td className="is-ardn is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Sell from any object</td><td className="is-ardn is-yes">Yes</td><td className="is-no">No</td><td className="is-no">No</td><td className="is-no">No</td></tr>
                <tr><td className="feat">Configurable product flows</td><td className="is-ardn is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-no">No</td></tr>
                <tr><td className="feat">Payments through Salesforce</td><td className="is-ardn is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-no">No</td><td className="is-no">No</td></tr>
                <tr><td className="feat">Error capturing &amp; logging</td><td className="is-ardn is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-no">No</td><td className="is-no">No</td></tr>
                <tr><td className="feat">3rd-party processing in your system</td><td className="is-ardn is-yes">Yes</td><td className="is-yes">Yes</td><td className="is-no">No</td><td className="is-no">No</td></tr>
                <tr><td className="feat">Appointments, webinars, event bookings</td><td className="is-ardn is-yes">Yes</td><td className="is-no">No</td><td className="is-no">No</td><td className="is-no">No</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section is-canvas">
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
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">FAQ</span>
          <h2 className="h1 mt-3">Storefronts <em>questions.</em></h2>
          <div className="mt-6">
            <details className="faq-item" open>
              <summary>How does Storefronts integrate with Salesforce?</summary>
              <div className="answer">It is installed directly into your Salesforce instance and uses your existing data and processes. No sync, no glue.</div>
            </details>
            <details className="faq-item">
              <summary>Can I customize my store?</summary>
              <div className="answer">Yes — theme via Lightning components for fast brand customization, or use our component and API layer for fully bespoke front ends.</div>
            </details>
            <details className="faq-item">
              <summary>What payment methods are supported?</summary>
              <div className="answer">Cards, ACH, Apple Pay, Google Pay, Venmo, plus major providers like Stripe and Paymentus. Bring your own processor — we will wire it.</div>
            </details>
            <details className="faq-item">
              <summary>Is Storefronts scalable?</summary>
              <div className="answer">Yes. It inherits Salesforce platform scale — built for high-volume, multi-location commerce including memberships and services.</div>
            </details>
            <details className="faq-item">
              <summary>How long does it take to launch?</summary>
              <div className="answer">Most customers configure within a single sprint and go live within 2-4 weeks. Stack replacements typically run 4-8 weeks end to end.</div>
            </details>
            <details className="faq-item">
              <summary>Can I sell subscriptions, memberships, and events?</summary>
              <div className="answer">Yes — recurring billing, membership tiers, appointment scheduling, and event ticketing all ship native.</div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* Cross-link to the off-Salesforce custom ecommerce options for
           visitors who aren't on Salesforce. Passes equity to newer pages. */}
      <section className="section-tight is-canvas">
        <div className="container">
          <p className="body" style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
            Not building on Salesforce? We also build{" "}
            <Link href="/custom-ecommerce-development" style={{ color: "var(--indigo)", fontWeight: 600 }}>custom ecommerce stores</Link>{" "}
            off-platform — including{" "}
            <Link href="/glp-1-ecommerce" style={{ color: "var(--indigo)", fontWeight: 600 }}>GLP-1 &amp; telehealth ecommerce</Link>. Comparing{" "}
            <Link href="/compare/salesforce-commerce-cloud-alternatives" style={{ color: "var(--indigo)", fontWeight: 600 }}>Salesforce Commerce Cloud alternatives</Link>? See how Storefronts stacks up.
          </p>
          <p className="body" style={{ textAlign: "center", maxWidth: "720px", margin: "18px auto 0" }}>
            Also on Salesforce and paying per-seat for light users? See how a{" "}
            <Link href="/custom-portal-development" style={{ color: "var(--indigo)", fontWeight: 600 }}>custom portal cuts CRM licensing costs</Link>{" "}
            without a migration.
          </p>
        </div>
      </section>

      <section className="section" id="demo">
        <div className="container">
          <div className="final-cta">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4">Request a <em>Storefronts demo.</em></h2>
            <p className="lede">30 minutes, no slides. We will walk through your data model and show how Storefronts handles your hardest commerce edge case.</p>
            <div className="hero-ctas">
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Request a demo</a>
              <Link href="/our-products" className="btn btn-outline-light btn-lg">See the rest of the suite</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
