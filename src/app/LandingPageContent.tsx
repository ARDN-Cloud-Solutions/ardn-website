import Link from "next/link";
import { HOME_FAQS } from "./homeFaqs";
export default function LandingPageContent() {
  return (
    <div className="ardn-page">

      {/* HERO */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Custom AI apps · Built &amp; run for you</span>
              <h1 className="display reveal">AI that <em>pays for itself.</em></h1>
              <p className="lede reveal reveal-d2">You know AI could help your business — but where do you start, and how do you avoid an expensive build that breaks and a team that vanishes? We take that risk off your plate: a custom AI app built around your exact workflow and run for you — live in 2–6 weeks, for one flat monthly fee. New customers pay nothing to build it.</p>
              <div className="hero-ctas reveal reveal-d3">
                <Link href="/ai-forge" className="btn btn-primary btn-lg btn-arrow">See what we&apos;d build for you</Link>
                <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="btn btn-secondary btn-lg">Book a free 30-min demo</Link>
              </div>
            </div>
            <aside className="hero-aside reveal reveal-d4">
              {/* AI-first hero card: spotlights AI Forge (the flagship) with the
                  free-build offer, then points to the wider suite as secondary
                  so the page reads focused rather than scattered. */}
              <div className="card" style={{ padding: "28px" }}>
                <div className="kicker">Flagship · AI Forge</div>
                <p className="body mt-3" style={{ marginBottom: "12px" }}>A custom AI app built around your exact workflow — designed, built, hosted, and improved for you. Live in 2–6 weeks, one flat monthly fee.</p>
                <p className="body" style={{ fontWeight: 600, color: "var(--indigo)", marginBottom: "18px" }}>🎁 New customers: we build it free.</p>
                <Link href="/ai-forge" className="link" style={{ color: "var(--indigo)", fontWeight: 600, display: "inline-block" }}>Explore AI Forge →</Link>
                <p className="body" style={{ marginTop: "20px", paddingTop: "18px", borderTop: "1px solid #eceef5", fontSize: "13px", color: "#6b7280" }}>
                  Plus a full suite — Storefronts, Payments, License Guard, Membership &amp; ReplyCX. <Link href="#products" style={{ color: "var(--indigo)", fontWeight: 600 }}>See all →</Link>
                </p>
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
              <div className="label">years designing, building, and deploying production software — from AI apps to enterprise software.</div>
            </div>
            <div className="metric">
              <div className="number">100%</div>
              <div className="label">customer-focused — every engagement measured against an outcome, not an hour count.</div>
            </div>
            <div className="metric">
              <div className="number">6</div>
              <div className="label">products in market today, each replacing a category of third-party tooling.</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI FORGE OFFER BANNER — promotes the new-customer free-build offer
          and links straight to the AI Forge page. Whole banner is clickable. */}
      <section className="section-tight">
        <div className="container">
          <Link
            href="/ai-forge"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "28px",
              flexWrap: "wrap",
              textDecoration: "none",
              background: "linear-gradient(135deg, #4840E0 0%, #2A2580 100%)",
              borderRadius: "16px",
              padding: "32px 40px",
              color: "white",
            }}
          >
            <div style={{ maxWidth: "660px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  marginBottom: "14px",
                }}
              >
                NEW CUSTOMER OFFER · AI FORGE
              </span>
              <h2 className="h2" style={{ color: "white", marginBottom: "8px" }}>
                We&apos;ll build your custom AI app — <em>free.</em>
              </h2>
              <p className="body" style={{ color: "rgba(255,255,255,0.85)" }}>
                New customers skip the one-time build fee entirely. You only pay the
                monthly subscription once your app is live.
              </p>
            </div>
            <span className="btn btn-on-dark btn-lg btn-arrow" style={{ flexShrink: 0 }}>
              See the AI Forge offer
            </span>
          </Link>
        </div>
      </section>

      {/* PRODUCT SUITE */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">More ways to grow</span>
              <h2 className="h1 mt-3">Start with AI. <em>Add what you need.</em></h2>
            </div>
            <div>
              <p className="lede">Beyond AI Forge, six focused products — each replacing a category of third-party tooling and paying for itself. No bloated platform, no forced bundle. Add one only when you need it.</p>
            </div>
          </div>

          <div className="grid-2">

            {/* AI Forge leads the suite — the homepage's primary focus. */}
            <article className="product-card" style={{ "--accent": "#7C3AED" } as React.CSSProperties}>
              <span className="pill" style={{ background: "#F3E8FF", color: "#7C3AED" }}>Flagship · AI</span>
              <h3 className="h3">AI Forge</h3>
              <p className="body">Our expert development team uses the proprietary AI Forge Framework to design, build, and ship custom AI applications and business software in weeks, not months — then runs them as a managed service.</p>
              <ul className="features">
                <li>Discovery to production in 2–6 weeks</li>
                <li>Integrates with your stack — Salesforce, HubSpot &amp; more</li>
                <li>One monthly subscription — build, host, and iterate</li>
              </ul>
              <p className="body" style={{ marginTop: "10px", fontWeight: 600, color: "#7C3AED" }}>
                🎁 New customers: we build it free — pay only the monthly subscription.
              </p>
              <Link href="/ai-forge" className="link">Explore AI Forge</Link>
            </article>

            {/* Membership Management — standalone, AI-built; SF/HubSpot capable
                in the feature list to keep buyer-intent traffic. */}
            <article className="product-card" style={{ "--accent": "#C2185B" } as React.CSSProperties}>
              <span className="pill" style={{ background: "#FCE4EC", color: "#C2185B" }}>Membership</span>
              <h3 className="h3">Membership Management</h3>
              <p className="body">A flexible, AI-built membership platform for YMCAs, gyms, studios, clubs, and associations. Run sign-ups, dues, classes, attendance, and retention from one system that integrates cleanly with Salesforce, HubSpot, and your existing back-office tools.</p>
              <ul className="features">
                <li>Recurring billing &amp; dunning out of the box</li>
                <li>Class scheduling &amp; attendance tracking</li>
                <li>Branded member self-service portal</li>
                <li>Salesforce, HubSpot, and CRM-agnostic integrations</li>
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

      {/* ABOUT ARDN MINI — also serves as the on-page internal link hub for
          the high-intent local landing pages. */}
       <section className="section">        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Who we are</span>
              {/* Stale "Big Salesforce experience" replaced with hybrid framing
                  that covers both pillars (AI Forge custom dev + 30+ yrs SF). */}
              <h2 className="h1 mt-3">A small Florida team. <em>Big experience.</em></h2>
              <p className="body mt-4">Ardn Cloud Solutions is a US-based team. We design, build, and run custom AI applications with our proprietary <Link href="/ai-forge" style={{ color: "var(--indigo)", fontWeight: 600 }}>AI Forge Framework</Link> — and back every build with 30+ years of enterprise software expertise, plus a focused suite of cloud products and consulting for teams that run on Salesforce. Same team from first call through implementation.</p>
              {/* Internal link hub — passes homepage authority to the AI
                  landing pages (national hub + verticals) and the local pages.
                  These were orphan pages otherwise (0 inbound body links). */}
              <p className="body mt-3">Explore <Link href="/ai-app-development" style={{ color: "var(--indigo)", fontWeight: 600 }}>custom AI app development</Link>, or see how we build AI for{" "}
                <Link href="/ai-for-insurance" style={{ color: "var(--indigo)", fontWeight: 600 }}>insurance</Link>,{" "}
                <Link href="/ai-for-hospitality" style={{ color: "var(--indigo)", fontWeight: 600 }}>hospitality</Link>, and{" "}
                <Link href="/ai-for-membership-organizations" style={{ color: "var(--indigo)", fontWeight: 600 }}>membership organizations</Link>.
              </p>
              <p className="body mt-3">Solutions we build:{" "}
                <Link href="/custom-portal-development" style={{ color: "var(--indigo)", fontWeight: 600 }}>custom portals that cut CRM costs</Link>,{" "}
                <Link href="/custom-ecommerce-development" style={{ color: "var(--indigo)", fontWeight: 600 }}>custom ecommerce</Link>,{" "}
                <Link href="/glp-1-ecommerce" style={{ color: "var(--indigo)", fontWeight: 600 }}>GLP-1 &amp; telehealth stores</Link>, and{" "}
                <Link href="/chapter-management-software" style={{ color: "var(--indigo)", fontWeight: 600 }}>chapter &amp; dues management</Link>.
              </p>
              <p className="body mt-3">Based in Florida? Talk to a local team:{" "}
                <Link href="/salesforce-consulting-orlando" style={{ color: "var(--indigo)", fontWeight: 600 }}>Salesforce consulting in Orlando</Link>
                {" "}or{" "}
                <Link href="/ai-app-development-florida" style={{ color: "var(--indigo)", fontWeight: 600 }}>custom AI app development in Florida</Link>.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
                <Link href="/about-ardn" className="btn btn-secondary btn-arrow">About Ardn</Link>
                <Link href="/our-products" className="btn btn-ghost btn-arrow">Browse products</Link>
              </div>
            </div>
            <div>
              <ul className="fl">
                {/* Stale "Four" Salesforce-native products updated to the
                    current 6-product hybrid suite. */}
                <li><span className="n">01</span><div><h4>Innovative products</h4><p>Six products in market — AI Forge, Membership Management, Storefronts, License Guard, Salesforce Payments, and ReplyCX.</p></div></li>
                <li><span className="n">02</span><div><h4>Strategy &amp; consulting</h4><p>30+ years of expertise focused on the cheapest, fastest path to your outcome.</p></div></li>
                <li><span className="n">03</span><div><h4>Implementation &amp; AI Forge builds</h4><p>We collaborate with your team or run the entire build with the AI Forge Framework — your call.</p></div></li>
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
                <div className="role">Senior Delivery Manager, Fortune 500 insurance company</div>
              </div>
            </div>
            <p className="body mt-4">
              <Link href="/case-studies" style={{ color: "var(--indigo)", fontWeight: 600 }}>See how we&apos;ve delivered for clients — read our case studies →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — GEO/SEO: quotable, self-contained Q&A. Content mirrors the
          homepage FAQPage JSON-LD in page.tsx (both import HOME_FAQS), so the
          rich result stays valid. Native <details> = collapsible, no JS,
          fully crawlable. */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">FAQ</span>
              <h2 className="h1 mt-3">Common <em>questions.</em></h2>
            </div>
            <div>
              <p className="lede">Quick answers about what we build, how we work, and where we&apos;re based.</p>
            </div>
          </div>
          <div style={{ display: "grid", gap: "14px", marginTop: "32px" }}>
            {HOME_FAQS.map((faq) => (
              <details key={faq.q} className="card" style={{ padding: "22px 26px" }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: "18px", color: "#14142B" }}>
                  {faq.q}
                </summary>
                <p style={{ marginTop: "14px", color: "#475467", fontSize: "16px", lineHeight: 1.6 }}>{faq.a}</p>
              </details>
            ))}
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
