"use client";

export default function DanceStudioSignupPage() {
  return (
    <div className="ardn-page">


      {/* HERO */}
      <section className="lp-hero" style={{ background: "radial-gradient(900px 450px at 90% -10%, #FCE4EC, transparent 60%), radial-gradient(800px 500px at -5% 110%, #F0EEFC, transparent 60%), var(--paper)" }}>
        <div className="container">
          <div className="lp-hero-grid">
            <div className="hero-copy">
              <span className="badge-vertical" style={{ background: "#FCE4EC", color: "#C2185B" }}>Dance Studio Software</span>
              <h1 className="display reveal" style={{ marginTop: "16px" }}>The dance studio software that handles <em style={{ color: "#C2185B" }}>the boring stuff.</em></h1>
              <p className="lede reveal reveal-d2" style={{ marginTop: "20px" }}>Class scheduling, recurring tuition, recital management, family accounts — automated. Built for ballet, jazz, hip-hop, and cheer studios.</p>
              <ul className="lp-proof reveal reveal-d3">
                <li>Recital management, costumes, and ticket sales — first-class</li>
                <li>Recurring tuition with autopay, dunning, and household billing</li>
                <li>Set up in under an hour. Free migration from Jackrabbit.</li>
                <li>Free trial. No credit card. Cancel anytime.</li>
              </ul>
            </div>
            <aside id="signup" className="signup-card reveal reveal-d4">
              <h2>Start your free trial</h2>
              <p className="form-sub">No credit card. Set up in under an hour. Free onboarding.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks — check your inbox for your trial setup link."); }}>
                <label>
                  <span className="lbl">Your name</span>
                  <input type="text" name="name" required placeholder="Jane Smith" />
                </label>
                <label>
                  <span className="lbl">Work email</span>
                  <input type="email" name="email" required placeholder="jane@youracademy.com" />
                </label>
                <label>
                  <span className="lbl">Studio name</span>
                  <input type="text" name="studio" required placeholder="Your Dance Academy" />
                </label>
                <label>
                  <span className="lbl">Studio size</span>
                  <select name="size" required>
                    <option value="">Select members</option>
                    <option>Under 50 dancers</option>
                    <option>50-200 dancers</option>
                    <option>200-500 dancers</option>
                    <option>500+ dancers</option>
                  </select>
                </label>
                <button type="submit" className="btn btn-lg submit btn-arrow" style={{ background: "#C2185B" }}>Start free trial</button>
                <p className="trust">No credit card · Cancel anytime · US-based support</p>
              </form>
            </aside>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section-tight" style={{ background: "var(--canvas)" }}>
        <div className="container">
          <div className="metric-row" style={{ background: "var(--paper)", borderRadius: "var(--r-md)", padding: "8px 0" }}>
            <div className="metric"><div className="number">1 hr</div><div className="label">typical setup time. Catalog, tuition plans, payment processor — done in one sitting.</div></div>
            <div className="metric"><div className="number">5+</div><div className="label">payment methods built in: cards, ACH, Apple Pay, Google Pay, Venmo.</div></div>
            <div className="metric"><div className="number">24/7</div><div className="label">parent portal — sign up, pay, register, manage from any phone.</div></div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "#C2185B" }}>If this sounds familiar</span>
              <h2 className="h1 mt-3">Your studio runs <em>despite</em> your software, not because of it.</h2>
            </div>
            <div>
              <p className="lede">Most studio owners we talk to are still stitching together a registration form, a billing spreadsheet, a paper sign-in sheet, and a parent group chat.</p>
            </div>
          </div>
          <div className="pain-row">
            <div className="pain-card" style={{ borderLeft: "3px solid #C2185B" }}>
              <div className="label" style={{ color: "#C2185B" }}>Registration chaos</div>
              <div className="text">Google Forms for sign-ups, manual roster updates, parents asking did my kid get into the Tuesday class?</div>
            </div>
            <div className="pain-card" style={{ borderLeft: "3px solid #C2185B" }}>
              <div className="label" style={{ color: "#C2185B" }}>Billing overhead</div>
              <div className="text">Chasing tuition, tracking who paid, issuing refunds, reconciling at month-end. Hours every week.</div>
            </div>
            <div className="pain-card" style={{ borderLeft: "3px solid #C2185B" }}>
              <div className="label" style={{ color: "#C2185B" }}>Recital scramble</div>
              <div className="text">Costume orders, recital fees, ticket sales, dress rehearsal schedules — all in different tools.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section is-canvas">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "#C2185B" }}>What you get</span>
              <h2 className="h1 mt-3">One platform. <em>Every dance studio job.</em></h2>
            </div>
            <div>
              <p className="lede">Class scheduling, tuition, recitals, registration, family accounts — all native, all reportable, all in one workspace.</p>
            </div>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-num" style={{ color: "#C2185B" }}>01</div><h3 className="h3">Class scheduling</h3><p className="body">Recurring weekly classes, drop-ins, summer intensives, masterclasses — all on one calendar with capacity rules.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#C2185B" }}>02</div><h3 className="h3">Recurring tuition</h3><p className="body">Auto-bill monthly, term, or annual plans. Dunning, retries, sibling discounts — built in.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#C2185B" }}>03</div><h3 className="h3">Recital management</h3><p className="body">Costume orders, recital fees, dress rehearsal slots, ticket sales — handled in one place.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#C2185B" }}>04</div><h3 className="h3">Family accounts</h3><p className="body">One household, multiple dancers, one payment method, shared schedule. Parents stop emailing the front desk.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#C2185B" }}>05</div><h3 className="h3">Front-desk check-in</h3><p className="body">Tablet check-in for class attendance. No more paper sign-in sheets.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#C2185B" }}>06</div><h3 className="h3">Parent portal</h3><p className="body">Branded self-service for parents to register, pay, view schedules — from any phone, 24/7.</p></div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap", padding: "28px 32px", background: "linear-gradient(135deg, #FCE4EC 0%, #FFF 100%)", border: "1px solid #FCE4EC", borderRadius: "var(--r-lg)" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Try it free for your studio.</h2>
              <p className="body mt-2">Set up in under an hour. No credit card. Free migration from Jackrabbit.</p>
            </div>
            <a href="#signup" className="btn btn-lg btn-arrow" style={{ background: "#C2185B", color: "#fff" }}>Start free trial</a>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "#C2185B" }}>Switching from Jackrabbit?</span>
              <h2 className="h1 mt-3">Same features. <em>Built for this decade.</em></h2>
            </div>
            <div>
              <p className="lede">Free migration — we move your members, payment methods, and class history.</p>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="compare compare-vertical">
              <thead>
                <tr>
                  <th>What matters</th>
                  <th style={{ background: "#C2185B", color: "#fff" }}>Ardn</th>
                  <th>Jackrabbit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="feat">Class scheduling &amp; rosters</td><td className="is-yes" style={{ background: "rgba(194,24,91,0.04)" }}>Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Recurring tuition &amp; autopay</td><td className="is-yes" style={{ background: "rgba(194,24,91,0.04)" }}>Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Recital, costume &amp; ticket management</td><td className="is-yes" style={{ background: "rgba(194,24,91,0.04)" }}>Yes — native</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Family / household accounts</td><td className="is-yes" style={{ background: "rgba(194,24,91,0.04)" }}>Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Modern, mobile-first parent portal</td><td className="is-yes" style={{ background: "rgba(194,24,91,0.04)" }}>Yes</td><td className="is-no">Limited</td></tr>
                <tr><td className="feat">Setup time</td><td className="is-yes" style={{ background: "rgba(194,24,91,0.04)" }}>Under an hour</td><td className="is-no">Days to weeks</td></tr>
                <tr><td className="feat">Free migration support</td><td className="is-yes" style={{ background: "rgba(194,24,91,0.04)" }}>Included</td><td className="is-no">Add-on</td></tr>
                <tr><td className="feat">Transparent monthly pricing</td><td className="is-yes" style={{ background: "rgba(194,24,91,0.04)" }}>Yes — see during signup</td><td className="is-no">Quote-based</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section is-canvas">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "#C2185B" }}>How it works</span>
              <h2 className="h1 mt-3">Live in <em>three steps.</em></h2>
            </div>
            <div>
              <p className="lede">Most studios sign up Monday and are taking registrations by Wednesday. We help you move; you keep teaching.</p>
            </div>
          </div>
          <div className="steps" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="step"><h3>Sign up &amp; configure</h3><p>Spin up your studio in under an hour. Class catalog, tuition plans, payment processor.</p></div>
            <div className="step"><h3>We migrate</h3><p>If you are on Jackrabbit or similar, we move your members, payment methods, and class history. Free.</p></div>
            <div className="step"><h3>Go live</h3><p>Send the new portal to parents. Start taking registrations. Keep teaching.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section is-canvas">
        <div className="container-narrow">
          <span className="eyebrow" style={{ color: "#C2185B" }}>Common questions</span>
          <h2 className="h1 mt-3">Quick <em>answers.</em></h2>
          <div className="mt-6">
            <details className="faq-item" open>
              <summary>How fast can we go live?</summary>
              <div className="answer">Most studios are live in 24-48 hours. Setup takes under an hour. We migrate your data, you keep teaching.</div>
            </details>
            <details className="faq-item">
              <summary>Can you migrate us from Jackrabbit?</summary>
              <div className="answer">Yes — for free. We move your members, payment methods, class catalog, and attendance history.</div>
            </details>
            <details className="faq-item">
              <summary>Do you handle recitals, costumes, and ticket sales?</summary>
              <div className="answer">Yes. Recital management is first-class — costume orders, recital fees, dress rehearsal schedules, and ticket sales all in one place.</div>
            </details>
            <details className="faq-item">
              <summary>What payment methods do you support?</summary>
              <div className="answer">Cards, ACH, Apple Pay, Google Pay, and Venmo. Bring your processor or use ours for lower rates.</div>
            </details>
            <details className="faq-item">
              <summary>Do you support family / household accounts?</summary>
              <div className="answer">Yes. One household, multiple dancers, one payment method, shared scheduling. Sibling discounts built in.</div>
            </details>
            <details className="faq-item">
              <summary>What does pricing look like?</summary>
              <div className="answer">Transparent monthly pricing based on your member count. No setup fees, no per-feature gotchas. You will see your plan during trial signup.</div>
            </details>
            <details className="faq-item">
              <summary>Is it mobile-friendly for parents?</summary>
              <div className="answer">Yes. The parent portal is mobile-first. Parents register, pay, and manage their family from any phone, 24/7.</div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="final-cta" style={{ background: "radial-gradient(800px 400px at 80% 0%, rgba(194,24,91,0.5), transparent 50%), radial-gradient(700px 400px at 0% 100%, rgba(72,64,224,0.25), transparent 50%), var(--navy)" }}>
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4" style={{ color: "#fff" }}>Start your free trial <em style={{ color: "#FCE4EC" }}>today.</em></h2>
            <p className="lede" style={{ color: "rgba(255,255,255,0.85)" }}>No credit card. Set up in under an hour. Free migration from Jackrabbit. Cancel anytime.</p>
            <div className="hero-ctas">
              <a href="#signup" className="btn btn-on-dark btn-lg btn-arrow" style={{ color: "#C2185B" }}>Start free trial</a>
              <a href="mailto:contactus@ardncloudsolutions.com" className="btn btn-outline-light btn-lg">Talk to a human first</a>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
