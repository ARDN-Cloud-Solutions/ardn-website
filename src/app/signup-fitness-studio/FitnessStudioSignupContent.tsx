"use client";

export default function FitnessStudioSignupContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="lp-hero" style={{ background: "radial-gradient(900px 450px at 90% -10%, #E5F5EE, transparent 60%), radial-gradient(800px 500px at -5% 110%, #F0EEFC, transparent 60%), var(--paper)" }}>
        <div className="container">
          <div className="lp-hero-grid">
            <div className="hero-copy">
              <span className="badge-vertical" style={{ background: "#E5F5EE", color: "#0F9870" }}>Fitness Studio Software</span>
              <h1 className="display reveal" style={{ marginTop: "16px" }}>Fitness studio software, <em style={{ color: "#0F9870" }}>without the Mindbody bloat.</em></h1>
              <p className="lede reveal reveal-d2" style={{ marginTop: "20px" }}>Class scheduling, recurring billing, member check-in, attendance — one platform. Built for CrossFit boxes, yoga studios, pilates, and boutique gyms.</p>
              <ul className="lp-proof reveal reveal-d3">
                <li>Drop-ins, class packs, unlimited memberships — all native</li>
                <li>Tablet check-in, member self check-in, instructor roster</li>
                <li>Set up in 48 hours. Free migration from Mindbody, Pike13, or Zen Planner.</li>
                <li>Free trial. No credit card. Cancel anytime.</li>
              </ul>
            </div>
            <aside id="signup" className="signup-card reveal reveal-d4">
              <h2>Start your free trial</h2>
              <p className="form-sub">No credit card. Set up in 48 hours. Free onboarding.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thanks — check your inbox for your trial setup link."); }}>
                <label>
                  <span className="lbl">Your name</span>
                  <input type="text" name="name" required placeholder="Alex Rivera" />
                </label>
                <label>
                  <span className="lbl">Work email</span>
                  <input type="email" name="email" required placeholder="alex@yourstudio.com" />
                </label>
                <label>
                  <span className="lbl">Studio name</span>
                  <input type="text" name="studio" required placeholder="Your Fitness Studio" />
                </label>
                <label>
                  <span className="lbl">Studio size</span>
                  <select name="size" required>
                    <option value="">Select members</option>
                    <option>Under 100 members</option>
                    <option>100-300 members</option>
                    <option>300-600 members</option>
                    <option>600+ members</option>
                  </select>
                </label>
                <button type="submit" className="btn btn-lg submit btn-arrow" style={{ background: "#0F9870" }}>Start free trial</button>
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
            <div className="metric"><div className="number">48 hrs</div><div className="label">typical time from sign-up to first paid class. We migrate; you keep coaching.</div></div>
            <div className="metric"><div className="number">5+</div><div className="label">payment methods built in: cards, ACH, Apple Pay, Google Pay, Venmo.</div></div>
            <div className="metric"><div className="number">24/7</div><div className="label">member portal — book, pay, manage from any phone.</div></div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "#0F9870" }}>If this sounds familiar</span>
              <h2 className="h1 mt-3">Your software <em>fights</em> the way you actually run the studio.</h2>
            </div>
            <div>
              <p className="lede">Most studio owners we talk to are paying for a platform built for a 100-location chain — and using 30% of it. The rest is friction.</p>
            </div>
          </div>
          <div className="pain-row">
            <div className="pain-card" style={{ borderLeft: "3px solid #0F9870" }}>
              <div className="label" style={{ color: "#0F9870" }}>Booking chaos</div>
              <div className="text">Drop-ins waitlisted but never booked. Class packs that expire silently. Members confused about what they are allowed to book.</div>
            </div>
            <div className="pain-card" style={{ borderLeft: "3px solid #0F9870" }}>
              <div className="label" style={{ color: "#0F9870" }}>Billing leakage</div>
              <div className="text">Failed cards, lapsed memberships, lapsed dues — nobody notices until the bank statement.</div>
            </div>
            <div className="pain-card" style={{ borderLeft: "3px solid #0F9870" }}>
              <div className="label" style={{ color: "#0F9870" }}>Check-in friction</div>
              <div className="text">Front-desk lines, tablet that crashes, instructors checking phones for the roster.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section is-canvas">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "#0F9870" }}>What you get</span>
              <h2 className="h1 mt-3">One platform. <em>Every fitness studio job.</em></h2>
            </div>
            <div>
              <p className="lede">Class scheduling, billing, check-in, attendance, member portal — all native, all reportable, all in one workspace.</p>
            </div>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-num" style={{ color: "#0F9870" }}>01</div><h3 className="h3">Class scheduling</h3><p className="body">Recurring class blocks, drop-ins, waitlists, instructor swaps — all on one calendar with capacity rules.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#0F9870" }}>02</div><h3 className="h3">Recurring billing</h3><p className="body">Monthly memberships, unlimited plans, class packs, drop-ins, day passes. Autopay, dunning, retries built in.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#0F9870" }}>03</div><h3 className="h3">Member check-in</h3><p className="body">Tablet check-in, member self check-in, no-show flagging, instructor roster — all in one flow.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#0F9870" }}>04</div><h3 className="h3">Class packs &amp; unlimited</h3><p className="body">Punch cards, 10-class packs, unlimited, hybrid plans — all native. Expiration rules and rollover built in.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#0F9870" }}>05</div><h3 className="h3">Member portal</h3><p className="body">Branded self-service for members to book, pay, view history. Mobile-first. 24/7.</p></div>
            <div className="card"><div className="card-num" style={{ color: "#0F9870" }}>06</div><h3 className="h3">Retention reports</h3><p className="body">See who is lapsing before they lapse. Re-engagement campaigns and dunning — built in.</p></div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap", padding: "28px 32px", background: "linear-gradient(135deg, #E5F5EE 0%, #FFF 100%)", border: "1px solid #E5F5EE", borderRadius: "var(--r-lg)" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Try it free for your studio.</h2>
              <p className="body mt-2">Set up in 48 hours. No credit card. Free migration from Mindbody, Pike13, or Zen Planner.</p>
            </div>
            <a href="#signup" className="btn btn-lg btn-arrow" style={{ background: "#0F9870", color: "#fff" }}>Start free trial</a>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ color: "#0F9870" }}>Switching from Mindbody?</span>
              <h2 className="h1 mt-3">Same features. <em>Built for boutique owners.</em></h2>
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
                  <th style={{ background: "#0F9870", color: "#fff" }}>Ardn</th>
                  <th>Mindbody</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="feat">Class scheduling &amp; rosters</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Recurring billing &amp; autopay</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Class packs, unlimited, drop-ins</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Tablet check-in</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>Yes</td><td className="is-yes">Yes</td></tr>
                <tr><td className="feat">Mobile-first member portal</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>Yes — clean &amp; fast</td><td className="is-no">Yes, but heavy</td></tr>
                <tr><td className="feat">Setup time</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>48 hours</td><td className="is-no">Weeks</td></tr>
                <tr><td className="feat">Free migration support</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>Included</td><td className="is-no">Add-on</td></tr>
                <tr><td className="feat">Transparent pricing by member count</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>Yes — see during signup</td><td className="is-no">Quote-based &amp; tiered</td></tr>
                <tr><td className="feat">Pricing fits boutique scale</td><td className="is-yes" style={{ background: "rgba(15,152,112,0.05)" }}>Yes</td><td className="is-no">Built for chains</td></tr>
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
              <span className="eyebrow" style={{ color: "#0F9870" }}>How it works</span>
              <h2 className="h1 mt-3">Live in <em>three steps.</em></h2>
            </div>
            <div>
              <p className="lede">Most studios sign up on Monday and run their first paid class by Wednesday. We do the heavy lifting on migration.</p>
            </div>
          </div>
          <div className="steps" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="step"><h3>Sign up &amp; configure</h3><p>Set up your studio in 48 hours. Class catalog, membership plans, payment processor.</p></div>
            <div className="step"><h3>We migrate</h3><p>From Mindbody, Pike13, Zen Planner, or any spreadsheet. Members, payments, history — all moved. Free.</p></div>
            <div className="step"><h3>Go live</h3><p>Send the new portal to members. Start booking. Keep coaching.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section is-canvas">
        <div className="container-narrow">
          <span className="eyebrow" style={{ color: "#0F9870" }}>Common questions</span>
          <h2 className="h1 mt-3">Quick <em>answers.</em></h2>
          <div className="mt-6">
            <details className="faq-item" open>
              <summary>How fast can we go live?</summary>
              <div className="answer">Most studios are live within 48 hours. We handle migration — you keep coaching.</div>
            </details>
            <details className="faq-item">
              <summary>Can you migrate us from Mindbody (or Pike13 / Zen Planner)?</summary>
              <div className="answer">Yes — for free. We move your members, payment methods, class schedules, and attendance history.</div>
            </details>
            <details className="faq-item">
              <summary>Do you handle drop-ins, class packs, and unlimited memberships?</summary>
              <div className="answer">Yes — all native. Punch cards, 10-class packs, unlimited, hybrid plans, day passes. Expiration rules and rollover built in.</div>
            </details>
            <details className="faq-item">
              <summary>What payment methods do you support?</summary>
              <div className="answer">Cards, ACH, Apple Pay, Google Pay, and Venmo. Bring your processor or use ours for lower rates.</div>
            </details>
            <details className="faq-item">
              <summary>Tablet check-in for front desk?</summary>
              <div className="answer">Yes. Tablet check-in, member self check-in, no-show flagging, and instructor roster — all in one flow.</div>
            </details>
            <details className="faq-item">
              <summary>Does it work for multiple locations?</summary>
              <div className="answer">Yes. Multi-location, multi-instructor, multi-program from day one. Roll up reporting at the brand level.</div>
            </details>
            <details className="faq-item">
              <summary>What does pricing look like?</summary>
              <div className="answer">Transparent monthly pricing based on your member count. No setup fees. You will see your plan during trial signup.</div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="final-cta" style={{ background: "radial-gradient(800px 400px at 80% 0%, rgba(15,152,112,0.5), transparent 50%), radial-gradient(700px 400px at 0% 100%, rgba(72,64,224,0.25), transparent 50%), var(--navy)" }}>
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4" style={{ color: "#fff" }}>Start your free trial <em style={{ color: "#E5F5EE" }}>today.</em></h2>
            <p className="lede" style={{ color: "rgba(255,255,255,0.85)" }}>No credit card. Live in 48 hours. Free migration from Mindbody, Pike13, or Zen Planner. Cancel anytime.</p>
            <div className="hero-ctas">
              <a href="#signup" className="btn btn-on-dark btn-lg btn-arrow" style={{ color: "#0F9870" }}>Start free trial</a>
              <a href="mailto:contactus@ardncloudsolutions.com" className="btn btn-outline-light btn-lg">Talk to a human first</a>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
