"use client";

import Link from "next/link";

export default function MembershipContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Membership Platform</span>
              <h1 className="display reveal">Run your members <em>inside Salesforce.</em></h1>
              <p className="lede reveal reveal-d2">Sign-up, recurring billing, member portal, classes, and analytics — all native to your CRM. No middleware, no spreadsheets, no third-party portals.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                <span className="badge">Salesforce native</span>
                <span className="badge is-emerald">Recurring billing &amp; dunning</span>
                <span className="badge is-canvas">Member portal included</span>
              </div>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Request a demo</Link>
                <Link href="#features" className="btn btn-secondary btn-lg">See what is included</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">Built for</div>
                <ul className="features mt-3">
                  <li>Fitness studios &amp; gyms</li>
                  <li>Yoga &amp; dance studios</li>
                  <li>Associations &amp; clubs</li>
                  <li>Community organisations</li>
                  <li>Any subscription-driven business</li>
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
            <div className="metric"><div className="number">1</div><div className="label">data layer. Members, payments, classes — all on your existing Salesforce objects.</div></div>
            <div className="metric"><div className="number">5+</div><div className="label">payment providers built in: Stripe, Paymentus, Apple Pay, Google Pay, Venmo.</div></div>
            <div className="metric"><div className="number">24/7</div><div className="label">self-service member portal. Members join, update, pause, and cancel without staff help.</div></div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What you get</span>
              <h2 className="h1 mt-3">Every tool you need <em>in one place.</em></h2>
            </div>
            <div>
              <p className="lede">From sign-up to renewal, from billing to class scheduling — all native, all reportable, all in one Salesforce environment.</p>
            </div>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-num">01</div><h3 className="h3">Sign-up &amp; onboarding</h3><p className="body">Branded sign-up flows with custom fields, waivers, and payment collection on day one.</p></div>
            <div className="card"><div className="card-num">02</div><h3 className="h3">Recurring billing</h3><p className="body">Automated billing cycles, proration, failed payment retries, and dunning — all built in.</p></div>
            <div className="card"><div className="card-num">03</div><h3 className="h3">Renewals &amp; retention</h3><p className="body">Automated renewal sequences. Membership pause, cancel, and reactivation workflows.</p></div>
            <div className="card"><div className="card-num">04</div><h3 className="h3">Classes &amp; sessions</h3><p className="body">Schedule classes, manage capacity, and let members book — all from one Salesforce screen.</p></div>
            <div className="card"><div className="card-num">05</div><h3 className="h3">Member portal</h3><p className="body">Self-service portal. Members join, update payment, pause or cancel without contacting staff.</p></div>
            <div className="card"><div className="card-num">06</div><h3 className="h3">Reports &amp; analytics</h3><p className="body">MRR, churn, attendance, retention — all native Salesforce reports. Build your own in minutes.</p></div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Want to see it on your data?</h2>
              <p className="body mt-2">30-minute demo using your membership model and your Salesforce environment.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Request a demo</Link>
              <Link href="/our-products" className="btn btn-secondary btn-lg">Browse other products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Who it is for</span>
              <h2 className="h1 mt-3">Built for <em>any membership model.</em></h2>
            </div>
            <div>
              <p className="lede">If you charge recurring fees and need a CRM to run the member lifecycle, this was built for you.</p>
            </div>
          </div>
          <div className="grid-4">
            <div className="card"><div className="card-icon">💪</div><h3 className="h3">Fitness &amp; gyms</h3><p className="body">Monthly memberships, PT sessions, class packs, multi-location.</p></div>
            <div className="card"><div className="card-icon">🕺</div><h3 className="h3">Yoga &amp; dance studios</h3><p className="body">Class scheduling, recurring billing, waitlists, and attendance tracking.</p></div>
            <div className="card"><div className="card-icon">🏛️</div><h3 className="h3">Associations</h3><p className="body">Tiered memberships, annual renewals, member-only content and events.</p></div>
            <div className="card"><div className="card-icon">🤝</div><h3 className="h3">Clubs &amp; communities</h3><p className="body">Subscriptions, event registration, and member engagement — all in Salesforce.</p></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section is-canvas">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How it works</span>
              <h2 className="h1 mt-3">Live in <em>four steps.</em></h2>
            </div>
            <div>
              <p className="lede">Most customers go live within a single sprint. Existing data migrates cleanly — no rebuilding your CRM from scratch.</p>
            </div>
          </div>
          <div className="steps">
            <div className="step"><h3>Configure</h3><p>Set up your membership plans, billing cycles, and class structure inside Salesforce.</p></div>
            <div className="step"><h3>Brand</h3><p>Customise your sign-up flow and member portal to match your brand.</p></div>
            <div className="step"><h3>Onboard</h3><p>Migrate existing members or go live with new sign-ups. Portal is ready immediately.</p></div>
            <div className="step"><h3>Optimise</h3><p>Use built-in reports to track MRR, retention, and class attendance. Automate the follow-up.</p></div>
          </div>
        </div>
      </section>

      {/* WHY ARDN */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Why Ardn</span>
              <h2 className="h1 mt-3">Built by <em>Salesforce people.</em></h2>
              <p className="body mt-4">We built Membership Platform because we were tired of watching studios and associations pay for three tools to do the job of one. It runs entirely inside Salesforce — so your team works in one place, your data stays in one place, and your reports cover everything.</p>
            </div>
            <div>
              <ul className="fl">
                <li>
                  <div className="fl-num !text-black">A</div>
                  <div>
                    <div className="fl-head !text-black">Native — not integrated</div>
                    <p className="fl-body">No middleware. No sync delays. Your members are Salesforce contacts, not IDs in another system.</p>
                  </div>
                </li>
                <li>
                  <div className="fl-num !text-black">B</div>
                  <div>
                    <div className="fl-head !text-black">Self-funding</div>
                    <p className="fl-body">Most customers save the cost of the platform in admin time savings and churn reduction within one quarter.</p>
                  </div>
                </li>
                <li>
                  <div className="fl-num !text-black">C</div>
                  <div>
                    <div className="fl-head !text-black">Fast to launch</div>
                    <p className="fl-body">Configure, brand, and go live in a single sprint. No year-long implementation.</p>
                  </div>
                </li>
                <li>
                  <div className="fl-num !text-black">D</div>
                  <div>
                    <div className="fl-head !text-black">Scales with you</div>
                    <p className="fl-body">From 50 members to 50,000 — same platform, same admin console, same reporting.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section is-canvas">
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

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">FAQ</span>
          <h2 className="h1 mt-3">Membership Platform <em>questions.</em></h2>
          <div className="mt-6">
            <details className="faq-item" open>
              <summary>Is it native to Salesforce?</summary>
              <div className="answer">Yes. Members are Salesforce contacts. Memberships, plans, and payments are native objects. No external system, no sync, no API glue.</div>
            </details>
            <details className="faq-item">
              <summary>Can it replace our current membership software?</summary>
              <div className="answer">For most studios and associations, yes. It handles sign-up, billing, scheduling, portal, and analytics. We will map your requirements before you buy.</div>
            </details>
            <details className="faq-item">
              <summary>What payment methods are supported?</summary>
              <div className="answer">Cards, ACH, Apple Pay, Google Pay, Venmo. Bring your own processor or use ours. Recurring billing and dunning are built in.</div>
            </details>
            <details className="faq-item">
              <summary>Can members manage their own accounts?</summary>
              <div className="answer">Yes. The member portal lets them update payment, change plans, pause, cancel, and view their history — without contacting staff.</div>
            </details>
            <details className="faq-item">
              <summary>How long does implementation take?</summary>
              <div className="answer">Most customers go live in 2-4 weeks. Complex migrations with large member databases typically take 4-8 weeks end to end.</div>
            </details>
            <details className="faq-item">
              <summary>Can we migrate our existing member data?</summary>
              <div className="answer">Yes. We map your existing data to Salesforce objects and migrate it cleanly. You do not start from zero.</div>
            </details>
            <details className="faq-item">
              <summary>Does it work for multiple locations?</summary>
              <div className="answer">Yes. Multi-location, multi-plan, and multi-currency are all supported. Each location can have its own class schedules and membership tiers.</div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" id="demo">
        <div className="container">
          <div className="final-cta">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4">Run your members <em>without juggling tools.</em></h2>
            <p className="lede">30-minute demo. We will walk through your current stack, map the gaps, and show exactly what Membership Platform replaces.</p>
            <div className="hero-ctas">
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Request a demo</a>
              <Link href="/our-products" className="btn btn-outline-light btn-lg">See the full suite</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
