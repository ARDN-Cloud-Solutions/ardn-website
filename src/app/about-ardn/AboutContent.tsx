"use client";

import Link from "next/link";

export default function AboutContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">About Ardn</span>
              <h1 className="display reveal">A small team. <em>Big Salesforce experience.</em></h1>
              <p className="lede reveal reveal-d2">Ardn Cloud Solutions builds Salesforce-native products and offers consulting focused on cost savings, simpler workflows, and faster outcomes.</p>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="#approach" className="btn btn-primary btn-lg btn-arrow">How we work</Link>
                <Link href="#leadership" className="btn btn-secondary btn-lg">Meet the team</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">At a glance</div>
                <ul className="features mt-3">
                  <li>30+ years of Salesforce experience</li>
                  <li>5 products live in market</li>
                  <li>Cost-focused consulting practice</li>
                  <li>Same team — first call to fifth quarter</li>
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
            <div className="metric"><div className="number">30+</div><div className="label">years of combined Salesforce design, build, and deployment experience.</div></div>
            <div className="metric"><div className="number">100%</div><div className="label">customer-focused — every engagement measured against an outcome.</div></div>
            <div className="metric"><div className="number">5</div><div className="label">Salesforce-native products in market today.</div></div>
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
            <ul className="fl">
              <li><span className="n">01</span><div><h4>Critical, never reflexive</h4><p>We start by questioning the premise. Most engagements begin with subtractions.</p></div></li>
              <li><span className="n">02</span><div><h4>Native by default</h4><p>If Salesforce already does it, or could, we build inside the platform.</p></div></li>
              <li><span className="n">03</span><div><h4>Small team, full ownership</h4><p>The person scoping the work is the person delivering it.</p></div></li>
              <li><span className="n">04</span><div><h4>Outcome over hours</h4><p>Success is measured in dollars saved and steps removed.</p></div></li>
            </ul>
            <div>
              <p className="thesis">&ldquo;To build cost-effective, high-impact Salesforce products that help businesses simplify complexity and unlock growth.&rdquo;</p>
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
              <h2 className="h2">Want a free Salesforce audit?</h2>
              <p className="body mt-2">45 minutes. We will surface the highest-ROI cuts and leave you with a written punch list.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Book the audit</Link>
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
              <p className="lede">Whether you arrive with a problem, an idea, or an existing Salesforce environment we need to clean up — same destination.</p>
            </div>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-num">01 / Products</div>
              <h3 className="h3">Innovative product line</h3>
              <p className="body">Membership Management, Storefronts, License Guard, Salesforce Payments, ReplyCX — native to Salesforce, simple to deploy.</p>
            </div>
            <div className="card">
              <div className="card-num">02 / Strategy</div>
              <h3 className="h3">Consulting &amp; strategy</h3>
              <p className="body">Decades of Salesforce expertise focused on the cheapest, fastest path to your goal.</p>
            </div>
            <div className="card">
              <div className="card-num">03 / Implementation</div>
              <h3 className="h3">Implementation &amp; integration</h3>
              <p className="body">We collaborate with your team or run the whole build — your call.</p>
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
              <p className="lede">Every senior person you meet on day one is the same person you will talk to in year two.</p>
            </div>
          </div>

          <div className="grid-3">
            <div className="card" style={{ textAlign: "left" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "999px", background: "linear-gradient(135deg, var(--indigo), var(--indigo-deep))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "18px", marginBottom: "18px" }}>DP</div>
              <h3 className="h3">Deep Patel</h3>
              <p className="kicker mt-2">Partner</p>
              <p className="body mt-3">Architects the product roadmap. Leads commerce, payments, and platform engineering.</p>
            </div>
            <div className="card" style={{ textAlign: "left" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "999px", background: "linear-gradient(135deg, var(--indigo), var(--indigo-deep))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "18px", marginBottom: "18px" }}>JP</div>
              <h3 className="h3">Jaimin Patel</h3>
              <p className="kicker mt-2">Partner</p>
              <p className="body mt-3">Owns delivery and customer outcomes. Two decades scoping and running enterprise CRM programs.</p>
            </div>
            <div className="card" style={{ textAlign: "left" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "999px", background: "linear-gradient(135deg, var(--indigo), var(--indigo-deep))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "18px", marginBottom: "18px" }}>DB</div>
              <h3 className="h3">Dan Brennan</h3>
              <p className="kicker mt-2">Executive Advisor</p>
              <p className="body mt-3">Three decades of operator and advisory experience across cloud and SaaS.</p>
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

      {/* BECOME A PARTNER */}
      <section className="section is-indigo">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow on-dark">Partners</span>
              <h2 className="h1 mt-3" style={{ color: "#fff" }}>Bring Ardn to <em style={{ color: "#fff" }}>your customers.</em></h2>
              <p className="lede" style={{ color: "rgba(255,255,255,0.85)", marginTop: "16px" }}>If you implement Salesforce — agency, ISV, freelancer, in-house — and our products would land with your customers, let us talk.</p>
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

      {/* CONTACT */}
      {/* <section className="section" id="contact">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Let us talk</span>
              <h2 className="h1 mt-3">Send us <em>a note.</em></h2>
            </div>
            <div>
              <p className="lede">Sales, support, partnerships, or a question — a real human will reply.</p>
            </div>
          </div>

          <div className="grid-2">
            <div>
              <ul className="fl">
                <li><span className="n">@</span><div><h4>Email</h4><p>contactus@ardncloudsolutions.com</p></div></li>
                <li><span className="n">+</span><div><h4>Phone</h4><p>+1 (407) 815-5303</p></div></li>
                <li><span className="n">in</span><div><h4>LinkedIn</h4><p>@ardn-cloud-solutions</p></div></li>
                <li><span className="n">HQ</span><div><h4>Location</h4><p>Orlando, Florida — serving customers globally.</p></div></li>
              </ul>
            </div>
            <form className="card" style={{ padding: "36px" }} onSubmit={(e) => { e.preventDefault(); alert("Thanks — we will be in touch within one business day."); }}>
              <h3 className="h3">Start a conversation</h3>
              <p className="body mt-2">No SDR follow-ups. A real human will reply.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "22px" }}>
                <label><span className="kicker">Name</span><input type="text" required style={{ display: "block", width: "100%", marginTop: "6px", padding: "12px 14px", border: "1px solid var(--line)", borderRadius: "var(--r-sm)", fontFamily: "var(--sans)", fontSize: "14px" }} /></label>
                <label><span className="kicker">Company</span><input type="text" required style={{ display: "block", width: "100%", marginTop: "6px", padding: "12px 14px", border: "1px solid var(--line)", borderRadius: "var(--r-sm)", fontFamily: "var(--sans)", fontSize: "14px" }} /></label>
              </div>
              <label style={{ display: "block", marginTop: "14px" }}><span className="kicker">Work email</span><input type="email" required style={{ display: "block", width: "100%", marginTop: "6px", padding: "12px 14px", border: "1px solid var(--line)", borderRadius: "var(--r-sm)", fontFamily: "var(--sans)", fontSize: "14px" }} /></label>
              <label style={{ display: "block", marginTop: "14px" }}><span className="kicker">What brings you in?</span>
                <select required style={{ display: "block", width: "100%", marginTop: "6px", padding: "12px 14px", border: "1px solid var(--line)", borderRadius: "var(--r-sm)", fontFamily: "var(--sans)", fontSize: "14px", background: "#fff" }}>
                  <option value="">— Choose an option —</option>
                  <option>Sales inquiry</option>
                  <option>Product demo</option>
                  <option>Salesforce audit</option>
                  <option>Implementation help</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </label>
              <label style={{ display: "block", marginTop: "14px" }}><span className="kicker">A few sentences</span><textarea rows={4} required style={{ display: "block", width: "100%", marginTop: "6px", padding: "12px 14px", border: "1px solid var(--line)", borderRadius: "var(--r-sm)", fontFamily: "var(--sans)", fontSize: "14px" }}></textarea></label>
              <button type="submit" className="btn btn-primary btn-lg btn-arrow mt-4" style={{ width: "100%", justifyContent: "center" }}>Send message</button>
            </form>
          </div>
        </div>
      </section> */}

    </div>
  );
}
