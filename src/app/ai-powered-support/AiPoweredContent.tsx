"use client";

import Link from "next/link";

export default function AiPoweredContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">ReplyCX</span>
              <h1 className="display reveal">All-in-one AI support that <em>feels human.</em></h1>
              <p className="lede reveal reveal-d2">Automate up to 70% of customer queries across WhatsApp, email, and chat — in one unified, no-code workspace.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                <span className="badge">No-code AI agents</span>
                <span className="badge is-emerald">Omnichannel inbox</span>
                <span className="badge is-canvas">CRM-native</span>
              </div>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Book your free demo</Link>
                <Link href="#pillars" className="btn btn-secondary btn-lg">See what it does</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">What ReplyCX does</div>
                <ul className="features mt-3">
                  <li>Resolves ~70% of routine queries</li>
                  <li>Unifies WhatsApp, SMS, email, social, chat</li>
                  <li>Auto-routes and prioritizes tickets</li>
                  <li>Syncs with Salesforce, HubSpot + 5,000 apps</li>
                  <li>Multilingual, contextual, brand-safe</li>
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
            <div className="metric"><div className="number">70%</div><div className="label">queries resolved by AI — order status, password resets, refund checks.</div></div>
            <div className="metric"><div className="number">64%</div><div className="label">faster resolution. One unified inbox across chat, email, and social.</div></div>
            <div className="metric"><div className="number">30%+</div><div className="label">CSAT lift. AI works alongside humans to deliver empathetic support.</div></div>
          </div>
        </div>
      </section>

      {/* 3 CORE PILLARS */}
      <section className="section" id="pillars">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">What you get</span>
              <h2 className="h1 mt-3">Three pillars. <em>One workspace.</em></h2>
            </div>
            <div>
              <p className="lede">Unified channels. Automated routine. Human-grade escalations. Everything your support stack should do — in one place.</p>
            </div>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-num">01 / Pillar</div>
              <h3 className="h3">Agentic AI Studio</h3>
              <p className="body mt-2">Build, train, and ship AI agents grounded in your docs and CRM data — no code.</p>
              <ul className="features mt-3 !text-black">
                <li>No-code knowledge upload</li>
                <li>Contextual &amp; multilingual</li>
                <li>Automates routine tasks (orders, bookings, discounts)</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-num">02 / Pillar</div>
              <h3 className="h3">Omnichannel Inbox</h3>
              <p className="body mt-2">Every conversation, every channel, in one workspace.</p>
              <ul className="features mt-3 !text-black">
                <li>WhatsApp, SMS, email, social, live chat</li>
                <li>Auto-routing by urgency, skill, workload</li>
                <li>Native Salesforce &amp; HubSpot sync (5,000+ apps)</li>
              </ul>
            </div>
            <div className="card">
              <div className="card-num">03 / Pillar</div>
              <h3 className="h3">No-Code Bot Builder</h3>
              <p className="body mt-2">Drag-and-drop builder for non-technical teams.</p>
              <ul className="features mt-3 !text-black">
                <li>Visual workflow design</li>
                <li>Behavior-triggered live chat</li>
                <li>Marketing &amp; support ship updates in seconds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Want to see ReplyCX live?</h2>
              <p className="body mt-2">30 minutes. We will show the AI grounded in your real docs and customer data.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-primary btn-lg btn-arrow">Book a free demo</Link>
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
              <span className="eyebrow">Built for the whole team</span>
              <h2 className="h1 mt-3">Three teams. <em>One workspace.</em></h2>
            </div>
            <div>
              <p className="lede">Where customer conversations live — for support, sales, and marketing.</p>
            </div>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-num">Support</div><h3 className="h3">Customer support</h3><p className="body">Resolve more tickets, faster. AI handles routine. Humans handle the hard ones.</p></div>
            <div className="card"><div className="card-num">Sales</div><h3 className="h3">Sales &amp; revenue</h3><p className="body">Trigger AI at high-intent moments. Route qualified leads with full context.</p></div>
            <div className="card"><div className="card-num">Marketing</div><h3 className="h3">Marketing &amp; ops</h3><p className="body">Ship campaign bot flows without a developer ticket.</p></div>
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
          <h2 className="h1 mt-3">ReplyCX <em>questions.</em></h2>
          <div className="mt-6">
            <details className="faq-item" open>
              <summary>How fast can we go live?</summary>
              <div className="answer">Most teams have an AI agent grounded in their docs within a single sprint. Full omnichannel rollout typically takes 2-4 weeks.</div>
            </details>
            <details className="faq-item">
              <summary>Do we need engineers to build the agents?</summary>
              <div className="answer">No. No-code knowledge upload and a drag-and-drop bot builder. Marketing and support teams ship flows themselves.</div>
            </details>
            <details className="faq-item">
              <summary>Which channels does ReplyCX support?</summary>
              <div className="answer">WhatsApp, SMS, email, social (X, Facebook, Instagram), live chat. API available for custom channels.</div>
            </details>
            <details className="faq-item">
              <summary>Does it integrate with Salesforce and other CRMs?</summary>
              <div className="answer">Yes. Native Salesforce and HubSpot sync, plus 5,000+ apps via standard integration platforms.</div>
            </details>
            <details className="faq-item">
              <summary>How do you keep the AI on-brand?</summary>
              <div className="answer">Agents are grounded in your documentation and CRM data. Tone, topic, and escalation guardrails are first-class settings.</div>
            </details>
            <details className="faq-item">
              <summary>What happens when a customer needs a human?</summary>
              <div className="answer">The AI escalates with full conversation history and the customer CRM record. Your agent walks in informed.</div>
            </details>
            <details className="faq-item">
              <summary>Is ReplyCX multilingual?</summary>
              <div className="answer">Yes. Detects the customer language, responds in it, routes to bilingual humans when appropriate.</div>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" id="demo">
        <div className="container">
          <div className="final-cta">
            <span className="eyebrow on-dark">Get started</span>
            <h2 className="display mt-4">See the AI <em>in action.</em></h2>
            <p className="lede">Schedule a quick call. We will show exactly how ReplyCX can automate, accelerate, and manage your support and lead funnel.</p>
            <div className="hero-ctas">
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Book a free demo</a>
              <Link href="/our-products" className="btn btn-outline-light btn-lg">Explore the suite</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
