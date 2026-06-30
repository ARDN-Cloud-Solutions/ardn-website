"use client";

import Link from "next/link";

export default function LicenseGuardContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">License Guard</span>
              <h1 className="display reveal">Stop paying for <em>inactive Salesforce users.</em></h1>
              <p className="lede reveal reveal-d2">A Salesforce-native watchdog that detects inactivity, warns the user, and deactivates per your rules — without writing a line of code.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                <span className="badge is-emerald">AppExchange installable</span>
                <span className="badge">No code required</span>
                <span className="badge is-canvas">Pays for itself in Q1</span>
              </div>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="#install" className="btn btn-primary btn-lg btn-arrow">Get License Guard</Link>
                <Link href="#math" className="btn btn-secondary btn-lg">See the math</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">What it does</div>
                <ul className="features mt-3">
                  <li>Detects inactive users by your rules</li>
                  <li>Sends pre-warning emails before action</li>
                  <li>Deactivates per your policy</li>
                  <li>Writes a full audit trail</li>
                  <li>Handles exemptions for VIPs, contractors</li>
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
            <div className="metric"><div className="number">22-34%</div><div className="label">share of paid Salesforce seats sitting dormant for 90+ days in the average mid-market org.</div></div>
            <div className="metric"><div className="number">$1,500</div><div className="label">a year — typical loaded cost of a single inactive Salesforce Enterprise seat.</div></div>
            <div className="metric"><div className="number">1Q</div><div className="label">typical payback period for License Guard. Often faster.</div></div>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="section" id="math">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">The math</span>
              <h2 className="h1 mt-3">Run the numbers <em>on your org.</em></h2>
            </div>
            <div>
              <p className="lede">Most mid-market orgs find six figures of waste on the first scan. Here is a representative example.</p>
            </div>
          </div>

          <div className="estimate">
            <div className="kicker">License Guard ROI — 250-seat Salesforce org</div>
            <div className="row"><span className="label">Total paid seats</span><span className="value">250</span></div>
            <div className="row"><span className="label">90+ day inactive (28% — typical)</span><span className="value">70 seats</span></div>
            <div className="row"><span className="label">Annual cost per seat</span><span className="value">$1,500</span></div>
            <div className="row"><span className="label">Reclaimable spend (year one)</span><span className="value">$105,000</span></div>
            <div className="total"><span className="label">Net first-year savings</span><span className="value">~$100K</span></div>
            <p className="small mt-3">Illustrative numbers based on Enterprise edition pricing. We will run yours for free.</p>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Want a free license scan?</h2>
              <p className="body mt-2">30 minutes. We will show you what License Guard would flag and what it would save.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="btn btn-primary btn-lg btn-arrow">Run a free scan</Link>
              <Link href="/our-products" className="btn btn-secondary btn-lg">Browse other products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Features</span>
              <h2 className="h1 mt-3">Smarter license management <em>starts here.</em></h2>
            </div>
            <div>
              <p className="lede">Identify inactive users, warn them, deactivate them — automatically and on schedule.</p>
            </div>
          </div>
          <div className="grid-4">
            <div className="card"><div className="card-icon">$</div><h3 className="h3">Save costs instantly</h3><p className="body">Stop paying for licenses no one is using.</p></div>
            <div className="card"><div className="card-icon">T</div><h3 className="h3">Fully automated</h3><p className="body">Set your inactivity rules once. Daily, weekly, or monthly scans.</p></div>
            <div className="card"><div className="card-icon">S</div><h3 className="h3">Secure &amp; configurable</h3><p className="body">Admin-defined rules, audit logs, permission-based exceptions.</p></div>
            <div className="card"><div className="card-icon">E</div><h3 className="h3">Pre-warning emails</h3><p className="body">Notify users before deactivation. No surprises.</p></div>
          </div>
        </div>
      </section>

      {/* SETUP */}
      <section className="section is-canvas" id="install">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Setup</span>
              <h2 className="h1 mt-3">Live in <em>four steps.</em></h2>
            </div>
            <div>
              <p className="lede">Most customers complete setup in under 30 minutes. First flagged users show up on the very next scan.</p>
            </div>
          </div>
          <div className="steps">
            <div className="step"><h3>Install from AppExchange</h3><p>A few clicks. No package customization required.</p></div>
            <div className="step"><h3>Configure your rules</h3><p>Inactivity thresholds, warning periods, exemptions — all in a friendly admin UI.</p></div>
            <div className="step"><h3>Schedule monitoring</h3><p>Daily, weekly, or monthly scans. Runs in the background.</p></div>
            <div className="step"><h3>Done</h3><p>License Guard handles warnings, deactivations, and the audit log.</p></div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Who it is for</span>
              <h2 className="h1 mt-3">IT, finance, or compliance — <em>License Guard works for all three.</em></h2>
            </div>
            <div>
              <p className="lede">One product. Three audiences. Same outcome: fewer wasted licenses, cleaner audits.</p>
            </div>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-num">01</div><h3 className="h3">IT &amp; Salesforce admins</h3><p className="body">Eliminate manual cleanup. Stop running quarterly audits in spreadsheets.</p></div>
            <div className="card"><div className="card-num">02</div><h3 className="h3">Finance &amp; procurement</h3><p className="body">Walk into renewals knowing exactly which seats you need and which to drop.</p></div>
            <div className="card"><div className="card-num">03</div><h3 className="h3">Compliance officers</h3><p className="body">Generate the audit trail automatically. Satisfy auditors and security reviewers.</p></div>
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
          <h2 className="h1 mt-3">License Guard <em>questions.</em></h2>
          <div className="mt-6">
            <details className="faq-item" open>
              <summary>What is License Guard?</summary>
              <div className="answer">A Salesforce-native tool that tracks inactive users, sends warning emails, and deactivates them based on your rules. Runs entirely inside your Salesforce environment.</div>
            </details>
            <details className="faq-item">
              <summary>How does it detect inactive users?</summary>
              <div className="answer">By login history and (optionally) record activity. You define what counts as inactive. Different rules can apply to different roles, profiles, or permission sets.</div>
            </details>
            <details className="faq-item">
              <summary>Can I warn users before deactivation?</summary>
              <div className="answer">Yes. Configure how many warnings, how far apart, and what they say. Users get a chance to stay active before any deactivation.</div>
            </details>
            <details className="faq-item">
              <summary>What if I want to exclude certain users?</summary>
              <div className="answer">Exempt by user, role, profile, permission set, or custom field. Use it for VIPs, executives, contractors, or integration users.</div>
            </details>
            <details className="faq-item">
              <summary>Is it native to Salesforce?</summary>
              <div className="answer">Yes. Installs from AppExchange. Runs entirely inside your Salesforce environment. No external data movement.</div>
            </details>
            <details className="faq-item">
              <summary>Will users lose data when deactivated?</summary>
              <div className="answer">No. Deactivation releases the license but preserves the user record, ownership, and history. Reactivating later restores access.</div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="final-cta">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4">Reclaim your <em>Salesforce budget.</em></h2>
            <p className="lede">Free 30-minute scan of your inactive-user posture. We will show you what License Guard would flag, what it would save, and how fast it would pay back.</p>
            <div className="hero-ctas">
              <a href="/contact-us" className="btn btn-on-dark btn-lg btn-arrow">Run a free scan</a>
              <Link href="/our-products" className="btn btn-outline-light btn-lg">See the suite</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
