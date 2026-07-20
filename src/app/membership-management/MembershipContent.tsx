"use client";

import Link from "next/link";
import TrustBar from "@/components/common/TrustBar";

/*
 * COPYWRITING / POSITIONING NOTES (Category 2 — AI-built, CRM-agnostic):
 *
 * 1. All "Salesforce-native" and "inside Salesforce" framing has been
 *    grammatically rewritten — not just deleted. Membership Management is now
 *    positioned as a standalone, AI-built platform for the YMCA / gym / studio /
 *    club / association operating model.
 * 2. The product runs independently of any specific CRM, and "works alongside"
 *    whatever stack the customer already runs. This is the durable Cat 2 message.
 * 3. Local trust signal: an "Orlando-based development team" mention is woven
 *    naturally into the "Why Ardn" section, supporting the GEO/Local SEO goal
 *    without coming across as a hard-coded keyword stuff.
 * 4. The FAQ that previously asked "Is it native to Salesforce?" is replaced
 *    with a question that addresses the actual buyer concern — whether the
 *    platform integrates with their existing tools and CRM.
 */

export default function MembershipContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Membership Management</span>
              {/* H1 now includes the primary "Membership Management" route
                  keyword for explicit on-page relevance, in addition to the
                  Cat-2 standalone-platform framing. */}
              <h1 className="display reveal">Membership Management — run your members on <em>one flexible platform.</em></h1>
              {/* Lede now names Salesforce + HubSpot explicitly as supported
                  integration targets. This keeps Cat 2 positioning (standalone,
                  AI-built) but preserves SF buyer-intent traffic and signals
                  to prospects that the platform plugs into their existing CRM. */}
              <p className="lede reveal reveal-d2">A standalone, AI-built membership platform for YMCAs, gyms, studios, clubs, and associations. Sign-ups, recurring billing, class scheduling, attendance, and a self-service portal — all in one system that integrates cleanly with Salesforce, HubSpot, and the rest of the stack you already run.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "22px" }}>
                {/* Badges: standalone framing + explicit Salesforce-capable
                    badge to retain SF SEO signal alongside the Cat 2 lead. */}
                <span className="badge">Standalone &amp; flexible</span>
                <span className="badge is-emerald">Salesforce &amp; HubSpot ready</span>
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
                  <li>YMCAs &amp; community organisations</li>
                  <li>Fitness studios &amp; gyms</li>
                  <li>Yoga &amp; dance studios</li>
                  <li>Associations &amp; member clubs</li>
                  <li>Any subscription-driven business</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CRO: thin trust signal strip directly under the hero so social-proof
          and GEO cues are visible the moment a visitor lands. Lifts conversion
          on existing traffic without disrupting the hero CTA. */}
      <TrustBar />

      {/* METRICS */}
      <section className="section-tight">
        <div className="container">
          <div className="metric-row">
            {/* Stat copy pivoted: the original referenced "your existing
                Salesforce objects" — that's gone. We lead with the operational
                outcome (one platform, no data silos) instead of the underlying
                tech. */}
            <div className="metric"><div className="number">1</div><div className="label">unified system for members, payments, classes, and attendance — no spreadsheets, no parallel tools.</div></div>
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
              {/* Subhead rewritten to drop "Salesforce environment" framing and
                  lead with the buyer benefit: end-to-end coverage on one
                  platform. */}
              <p className="lede">From sign-up to renewal, from billing to class scheduling — every part of the member lifecycle on one platform, with reporting that covers it all.</p>
            </div>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-num">01</div><h3 className="h3">Sign-up &amp; onboarding</h3><p className="body">Branded sign-up flows with custom fields, waivers, and payment collection on day one.</p></div>
            <div className="card"><div className="card-num">02</div><h3 className="h3">Recurring billing</h3><p className="body">Automated billing cycles, proration, failed-payment retries, and automatic late-payment recovery — all built in.</p></div>
            <div className="card"><div className="card-num">03</div><h3 className="h3">Renewals &amp; retention</h3><p className="body">Automated renewal sequences and membership pause, cancel, and reactivation workflows.</p></div>
            <div className="card"><div className="card-num">04</div><h3 className="h3">Classes &amp; sessions</h3><p className="body">Schedule classes, manage capacity, and let members book — all from one admin screen.</p></div>
            <div className="card"><div className="card-num">05</div><h3 className="h3">Member portal</h3><p className="body">Self-service portal. Members join, update payment, pause, or cancel without contacting staff.</p></div>
            {/* Reports card no longer references "native Salesforce reports". */}
            <div className="card"><div className="card-num">06</div><h3 className="h3">Reports &amp; analytics</h3><p className="body">MRR, churn, attendance, retention — built-in dashboards, plus exportable data for whatever BI tool you already run.</p></div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="section-tight is-canvas">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 className="h2">Want to see it on your data?</h2>
              {/* Mid-page CTA: explicit mention of Salesforce as a supported
                  environment so SF buyers see themselves in the demo offer. */}
              <p className="body mt-2">30-minute demo using your membership model and your existing tools — whether that&apos;s Salesforce, HubSpot, or whatever else you happen to run today.</p>
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
              {/* Subhead now leads with the operational pattern (recurring fees +
                  member lifecycle), not the CRM. */}
              <p className="lede">If you charge recurring fees and need one system to run the entire member lifecycle, this was built for you.</p>
            </div>
          </div>
          {/* YMCA model is now the lead card per the new Category 2 positioning.
              Decorative emoji removed from semantic content; if you want icons,
              swap in proper SVGs with descriptive aria-labels later. */}
          <div className="grid-4">
            <div className="card"><div className="card-icon" aria-hidden>🏛️</div><h3 className="h3">YMCAs &amp; community organisations</h3><p className="body">Multi-program memberships, scholarships, family billing, and community-event tracking.</p></div>
            <div className="card"><div className="card-icon" aria-hidden>💪</div><h3 className="h3">Fitness &amp; gyms</h3><p className="body">Monthly memberships, PT sessions, class packs, and multi-location operations.</p></div>
            <div className="card"><div className="card-icon" aria-hidden>🕺</div><h3 className="h3">Yoga &amp; dance studios</h3><p className="body">Class scheduling, recurring billing, waitlists, and attendance tracking.</p></div>
            <div className="card"><div className="card-icon" aria-hidden>🤝</div><h3 className="h3">Clubs &amp; associations</h3><p className="body">Tiered memberships, annual renewals, member-only content, and event registration.</p></div>
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
              {/* "Rebuilding your CRM from scratch" framing dropped — replaced
                  with a benefit-led subhead about clean migration. */}
              <p className="lede">Most customers go live within a single sprint. Existing member data migrates cleanly — you do not start from zero.</p>
            </div>
          </div>
          <div className="steps">
            <div className="step"><h3>Configure</h3><p>Set up your membership plans, billing cycles, and class structure.</p></div>
            <div className="step"><h3>Brand</h3><p>Customise your sign-up flow and member portal to match your brand.</p></div>
            <div className="step"><h3>Onboard</h3><p>Migrate existing members or go live with new sign-ups. The portal is ready on day one.</p></div>
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
              {/* Headline pivot: from "Built by Salesforce people" to a Florida-
                  based team identity — supports both the Cat 2 positioning and
                  the Local/GEO SEO goal. The supporting paragraph explicitly
                  surfaces Ardn's 30+ years of Salesforce expertise as a
                  credibility asset (and SEO signal) without making the product
                  itself a Salesforce-native one. */}
              <h2 className="h1 mt-3">Built by a <em>Florida-based team.</em></h2>
              <p className="body mt-4">We built Membership Management because we were tired of watching YMCAs, studios, and associations pay for three tools to do the job of one. Our Orlando-based development team engineered it on the AI Forge Framework — backed by Ardn&apos;s 30+ years of Salesforce expertise and managed-services experience, so the integrations into your CRM, billing, and reporting tools are battle-tested from day one.</p>
            </div>
            <div>
              <ul className="fl">
                <li>
                  <div className="fl-num !text-black">A</div>
                  <div>
                    {/* "Native — not integrated" framing dropped (it was a
                        Salesforce-specific selling angle). Replaced with the
                        true Cat 2 message: one unified platform, no patchwork. */}
                    <div className="fl-head !text-black">One platform — not three</div>
                    <p className="fl-body">Members, payments, classes, and reporting live in a single system. No middleware, no sync delays, no duplicate records to reconcile.</p>
                  </div>
                </li>
                <li>
                  <div className="fl-num !text-black">B</div>
                  <div>
                    <div className="fl-head !text-black">Self-funding</div>
                    <p className="fl-body">Most customers save the cost of the platform in admin time and churn reduction within one quarter.</p>
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
            <span className="eyebrow">What clients say</span>
            <p className="quote mt-4">Ardn Cloud Solutions went beyond our expectations, implementing a hands-on, cost-saving approach that has been invaluable to our business.</p>
            <div className="attribution">
              <div className="avatar">JV</div>
              <div>
                <div className="who">Jay Vashi</div>
                {/* Customer role generalised — the original copy referenced a
                    Salesforce-specific title, which on a Cat 2 page implied
                    Salesforce association we do not want. */}
                <div className="role">Senior Delivery Manager, Fortune 500 insurance company</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <span className="eyebrow">FAQ</span>
          <h2 className="h1 mt-3">Membership Management <em>questions.</em></h2>
          <div className="mt-6">
            {/* Lead FAQ: hybrid. Answer leads with Salesforce explicitly so
                SF-buyer searches land on a confident yes, then lists the rest
                of the integration surface so it still reads as a flexible,
                CRM-agnostic platform. */}
            <details className="faq-item" open>
              <summary>Does it integrate with Salesforce and other CRMs?</summary>
              <div className="answer">Yes. Membership Management runs standalone, and it integrates cleanly with Salesforce, HubSpot, Microsoft Dynamics, your accounting and marketing tools, and your reporting tools. Ardn has 30+ years of Salesforce expertise, so the Salesforce integration in particular is deep and well-tested — you keep your existing CRM as your main system if you want to.</div>
            </details>
            <details className="faq-item">
              <summary>Can it replace our current membership software?</summary>
              <div className="answer">For most YMCAs, studios, and associations, yes. It handles sign-up, billing, scheduling, the member portal, and analytics in one platform. We will map your requirements against the product before you buy.</div>
            </details>
            <details className="faq-item">
              <summary>What payment methods are supported?</summary>
              <div className="answer">Cards, ACH, Apple Pay, Google Pay, and Venmo. Bring your own processor or use ours. Recurring billing and automatic late-payment recovery are built in.</div>
            </details>
            <details className="faq-item">
              <summary>Can members manage their own accounts?</summary>
              <div className="answer">Yes. The member portal lets members update payment, change plans, pause, cancel, and view their history — without contacting staff.</div>
            </details>
            <details className="faq-item">
              <summary>How long does implementation take?</summary>
              <div className="answer">Most customers go live in 2–4 weeks. Complex migrations with large member databases typically take 4–8 weeks end to end.</div>
            </details>
            <details className="faq-item">
              <summary>Can we migrate our existing member data?</summary>
              <div className="answer">Yes. We map your existing data into the platform and migrate it cleanly. You do not start from zero, and you keep historical context.</div>
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
            <p className="lede">30-minute demo. We will walk through your current stack, map the gaps, and show exactly what Membership Management replaces.</p>
            <div className="hero-ctas">
              <a href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-on-dark btn-lg btn-arrow">Request a demo</a>
              <Link href="/our-products" className="btn btn-outline-light btn-lg">See the full suite</Link>
            </div>
            <p style={{ marginTop: "20px" }}>
              Running a fraternity, chapter, or dues-based org instead? See{" "}
              <Link href="/chapter-management-software" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Chapter &amp; Dues Management →</Link>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
