"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Data ──────────────────────────────────────────────────────────────────

const TOOLS_DATA: Record<string, { name: string; cost: number }[]> = {
  medspa: [
    { name: "Zenoti / AestheticsPro", cost: 800 },
    { name: "EMR / Clinical Notes", cost: 300 },
    { name: "Email & SMS Marketing", cost: 200 },
    { name: "Inventory Management", cost: 150 },
    { name: "Payment Processing (est.)", cost: 500 },
  ],
  fitness: [
    { name: "Mindbody", cost: 699 },
    { name: "Branded App Add-on", cost: 299 },
    { name: "Email Marketing", cost: 200 },
    { name: "CRM / HubSpot", cost: 400 },
    { name: "Marketplace Commissions (est.)", cost: 800 },
  ],
  healthcare: [
    { name: "Telehealth Video Platform", cost: 1200 },
    { name: "Medical Billing Software", cost: 800 },
    { name: "Scheduling & Patient Booking", cost: 500 },
    { name: "Patient CRM & Engagement", cost: 600 },
    { name: "Compliance & Security Tools", cost: 400 },
  ],
  nonprofit: [
    { name: "Daxko Operations", cost: 1500 },
    { name: "HubSpot Professional", cost: 800 },
    { name: "Donor Management", cost: 400 },
    { name: "Email Marketing", cost: 200 },
    { name: "Facility Booking", cost: 300 },
  ],
  agency: [
    { name: "Monday.com", cost: 600 },
    { name: "HubSpot", cost: 800 },
    { name: "Salesforce", cost: 1200 },
    { name: "Project Tools", cost: 300 },
  ],
  proservices: [
    { name: "Salesforce / HubSpot CRM", cost: 1500 },
    { name: "Monday.com / Project Mgmt", cost: 600 },
    { name: "Billing & Time Tracking", cost: 400 },
    { name: "Email Marketing & Automation", cost: 300 },
    { name: "Document Management", cost: 200 },
  ],
  other: [
    { name: "Primary Platform", cost: 800 },
    { name: "CRM / Marketing", cost: 500 },
    { name: "Other Tools", cost: 300 },
  ],
};

const INDUSTRIES = [
  { id: "medspa", icon: "💉", name: "Med Spa" },
  { id: "fitness", icon: "🧘", name: "Fitness Studio" },
  { id: "healthcare", icon: "🏥", name: "Telehealth & Clinics" },
  { id: "nonprofit", icon: "🏢", name: "Membership / Nonprofits" },
  { id: "proservices", icon: "💼", name: "Professional Services" },
  { id: "agency", icon: "⚡", name: "Agency / SaaS" },
  { id: "other", icon: "🏭", name: "Other Business" },
];

function fmt(n: number): string {
  return "$" + Math.abs(Math.round(n)).toLocaleString();
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function SavingsCalculatorContent() {
  const [selectedIndustry, setSelectedIndustry] = useState("medspa");
  const [budget, setBudget] = useState(4500);
  const [modalOpen, setModalOpen] = useState(false);

  const currentTools = TOOLS_DATA[selectedIndustry];
  const toolTotal = currentTools.reduce((s, t) => s + t.cost, 0);
  const total = Math.max(toolTotal, budget);
  // When the user enters a budget that exceeds the preset tool stack, the
  // difference is surfaced as an "Additional tools / overhead" line so the
  // visible line items add up to the same total shown at the bottom.
  // Without this, the line items would still sum to the preset (~$1,950 for
  // medspa) while the total displays the user's actual $50,000 budget.
  const additionalSpend = Math.max(0, budget - toolTotal);
  // Baseline scales with the visitor's own spend so the comparison uses the
  // tier they'd realistically land in (see /ai-forge#pricing), instead of
  // always comparing against the cheapest Launch price regardless of scope.
  const baseline = total <= 6000 ? 3000 : total <= 15000 ? 4500 : 12000;
  const monthly = total - baseline;
  const yr1 = monthly * 12;
  const yr2 = monthly * 24;
  const yr3 = monthly * 36;

  return (
    <div className="sc-page">

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="sc-hero">
        <div className="sc-hero-inner">
          <div>
            <div className="sc-hero-eyebrow">Maximum Business Impact</div>
            <h1 className="sc-h1">
              Stop Paying Per Seat.<br />
              <em>Own Your Stack.</em>
            </h1>
            <p className="sc-hero-sub">
              Ardn Cloud Solutions replaces Mindbody, Zenoti, Salesforce, and your entire
              fragmented software stack with one custom platform. Flat monthly rate. No
              per-user fees. You own it forever.
            </p>
            <div className="sc-hero-checks">
              {[
                "No per-user, per-seat, or per-location fees",
                "Built in 3–4 weeks · Fixed quote within 48 hours",
                "HIPAA-ready architecture included",
                "30+ years enterprise software experience",
                "You own the IP and data outright",
              ].map((item) => (
                <div key={item} className="sc-hero-check">
                  <div className="sc-check-dot" />
                  {item}
                </div>
              ))}
            </div>
            <div className="sc-hero-ctas">
              <button
                className="sc-btn-cta"
                onClick={() =>
                  document.getElementById("sc-calculator")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Calculate My Savings →
              </button>
              <Link
                href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
                target="_blank"
                className="sc-btn-outline"
              >
                Book Free Discovery Call
              </Link>
            </div>
          </div>

          {/* CALCULATOR CARD */}
          <div id="sc-calculator" className="sc-calc-card">
            <div className="sc-calc-header">
              <div className="sc-calc-header-title">See Your Savings in 30 Seconds</div>
              <div className="sc-calc-header-badge">Free</div>
            </div>
            <div className="sc-calc-body">
              {/* Industry selector */}
              <div className="sc-calc-field">
                <label className="sc-calc-label">Select your industry</label>
                <div className="sc-industry-grid">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      className={`sc-industry-btn${selectedIndustry === ind.id ? " sc-industry-btn--active" : ""}`}
                      onClick={() => setSelectedIndustry(ind.id)}
                    >
                      <span className="sc-industry-icon">{ind.icon}</span>
                      <span className="sc-industry-name">{ind.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget input */}
              <div className="sc-calc-row">
                <div className="sc-calc-field">
                  <label className="sc-calc-label">Monthly spend (est.)</label>
                  <input
                    type="number"
                    className="sc-calc-input"
                    value={budget}
                    min={500}
                    step={500}
                    onChange={(e) => setBudget(parseInt(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div className="sc-calc-sep" />

              <div className="sc-calc-tools-label">Estimated current tool costs</div>
              <div>
                {currentTools.map((t) => (
                  <div key={t.name} className="sc-calc-tool">
                    <span className="sc-calc-tool-name">{t.name}</span>
                    <span className="sc-calc-tool-cost">${t.cost.toLocaleString()}/mo</span>
                  </div>
                ))}
                {/* Surface the gap between the user-entered monthly spend and
                    the preset stack so line items sum to the displayed total. */}
                {additionalSpend > 0 && (
                  <div className="sc-calc-tool">
                    <span className="sc-calc-tool-name">Additional tools / overhead</span>
                    <span className="sc-calc-tool-cost">${additionalSpend.toLocaleString()}/mo</span>
                  </div>
                )}
              </div>
              <div className="sc-calc-total">
                <span style={{ color: "var(--sc-text-2)" }}>Total monthly spend</span>
                <span style={{ color: "var(--sc-text)", fontWeight: 700 }}>
                  ${total.toLocaleString()}/mo
                </span>
              </div>
              <button className="sc-calc-submit" onClick={() => setModalOpen(true)}>
                Calculate My Savings →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ROW ───────────────────────────────────────────────── */}
      <div className="sc-stats-row">
        <div className="sc-stats-inner">
          {[
            { val: "30", em: "+", label: "Years enterprise experience" },
            { val: "0", em: "", label: "Per-seat or per-user fees" },
            { val: "3", em: "–4", label: "Weeks from spec to live" },
            { val: "48", em: " hrs", label: "Fixed quote turnaround" },
          ].map((s) => (
            <div key={s.label} className="sc-stat-item">
              <div className="sc-stat-val">
                {s.val}<em>{s.em}</em>
              </div>
              <div className="sc-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="sc-section sc-section--offwhite">
        <div className="sc-section-inner">
          <div className="sc-section-eyebrow">How it works</div>
          <h2 className="sc-section-title">
            From first call to live platform<br />in under 30 days.
          </h2>
          <p className="sc-section-sub">
            No 6-month implementations. No surprise invoices. No 24-month lock-in contracts.
          </p>
          <div className="sc-steps-grid">
            {[
              {
                num: "Step 01",
                title: "Discovery Call",
                desc: "We map your workflows, identify what to replace, and deliver a fixed quote within 48 hours. No obligation.",
              },
              {
                num: "Step 02",
                title: "Build",
                desc: "Our team builds your custom platform in 3–4 weeks with weekly demos. You're never in the dark.",
              },
              {
                num: "Step 03",
                title: "Deploy",
                desc: "Live deployment with security review and staff training. Subscription starts at go-live — not before.",
              },
              {
                num: "Step 04",
                title: "Operate",
                desc: "Hosting, updates, security, and new features — all inside your flat monthly subscription. Forever.",
              },
            ].map((step) => (
              <div key={step.num} className="sc-step">
                <div className="sc-step-line" />
                <div className="sc-step-num">{step.num}</div>
                <div className="sc-step-title">{step.title}</div>
                <div className="sc-step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN SECTION ────────────────────────────────────────────── */}
      <section className="sc-pain-section">
        <div className="sc-pain-inner">
          <div className="sc-pain-grid">
            <div>
              <div className="sc-pain-eyebrow">The Problem</div>
              <h2 className="sc-pain-title">
                You&apos;re renting software<br /><em>that should be yours.</em>
              </h2>
              <p className="sc-pain-sub">
                Most businesses pay $5,000–$15,000/month across 5–8 disconnected tools —
                each charging per seat, per location, or per transaction. Every time you
                grow, your bill grows with it.
              </p>
            </div>
            <div className="sc-pain-cards">
              {[
                {
                  icon: "📈",
                  title: "Per-location fees that never stop",
                  desc: "Mindbody charges $699/month per location. Zenoti $300–$500/month per location. Open a new location — your bill grows automatically.",
                },
                {
                  icon: "🔒",
                  title: "12–24 month contract lock-ins",
                  desc: "Most platforms require annual or multi-year commitments. Want to leave before expiry? You're still paying.",
                },
                {
                  icon: "🧩",
                  title: "5 tools that don't talk to each other",
                  desc: "Booking, CRM, marketing, billing, and reporting live in separate platforms. Staff waste hours reconciling data every week.",
                },
                {
                  icon: "💸",
                  title: "23.5% marketplace commissions",
                  desc: "Mindbody app bookings cost 20% commission + 3.5% processing. On $50K/month in bookings that's $11,750 gone every month.",
                },
              ].map((card) => (
                <div key={card.title} className="sc-pain-card">
                  <div className="sc-pain-icon">{card.icon}</div>
                  <div>
                    <div className="sc-pain-card-title">{card.title}</div>
                    <div className="sc-pain-card-desc">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKETS ─────────────────────────────────────────────────── */}
      <section className="sc-section sc-section--white">
        <div className="sc-section-inner">
          <div className="sc-section-eyebrow">Who we serve</div>
          <h2 className="sc-section-title">
            Built for businesses paying<br /><em>too much for software.</em>
          </h2>
          <p className="sc-section-sub">
            We&apos;ve replaced the most expensive, most frustrating platforms across these
            industries.
          </p>
          <div className="sc-markets-grid">
            {[
              {
                icon: "💉",
                name: "Med Spas",
                replaces: "Replaces: Zenoti, AestheticsPro, Nextech",
                desc: "Multi-location aesthetic clinics paying $6,000–$15,000/month across EMR, booking, marketing, and inventory tools.",
                savings: "Save $3,000–$8,000/month",
              },
              {
                icon: "🧘",
                name: "Yoga & Fitness Studios",
                replaces: "Replaces: Mindbody, ClassPass fees",
                desc: "Studios paying $38,940–$44,940/year in Mindbody base fees before marketplace commissions and add-ons.",
                savings: "Save $15,000–$40,000/year",
              },
              {
                icon: "🏢",
                name: "Membership Organizations",
                replaces: "Replaces: Daxko, HubSpot, Bloomerang",
                desc: "Membership organizations spending $48,000–$120,000/year across Daxko, donor tools, and marketing.",
                savings: "Save $40,000–$100,000/year",
              },
              {
                icon: "🏥",
                name: "Telehealth & Multi-Provider Clinics",
                replaces: "Replaces: Scheduling, billing, CRM, telehealth platform, patient engagement",
                desc: "Multi-provider groups and telehealth practices paying $3,000–$9,000/month across fragmented scheduling, billing, CRM, video platforms, and patient engagement tools.",
                savings: "Save $2,000–$7,000/month",
              },
              {
                icon: "💼",
                name: "Professional Services",
                replaces: "Replaces: Salesforce, HubSpot, Monday.com, tools",
                desc: "Law firms, consultancies, and service businesses paying $50–$300/user/month across CRM, project management, billing, and automation tools.",
                savings: "Save $5,000–$15,000/month",
              },
              {
                icon: "⚡",
                name: "Growing Companies",
                replaces: "Replaces: Salesforce, Monday.com, HubSpot",
                desc: "50–500 person companies where per-seat SaaS costs scale automatically with every new hire added.",
                savings: "Save $60,000–$200,000/year",
              },
            ].map((m) => (
              <div key={m.name} className="sc-market-card">
                <div className="sc-market-icon">{m.icon}</div>
                <div className="sc-market-name">{m.name}</div>
                <div className="sc-market-replaces">{m.replaces}</div>
                <div className="sc-market-desc">{m.desc}</div>
                <div className="sc-market-savings">{m.savings}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--sc-text-3)", marginTop: "1.5rem" }}>
            Figures above are illustrative ranges based on typical published vendor pricing for these categories, not a quote or a client result — use the calculator above for your own numbers.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────────────── */}
      <section className="sc-testimonial-section">
        <div className="sc-testimonial-inner">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="sc-section-eyebrow">What our clients are saying</div>
            <h2 className="sc-section-title" style={{ maxWidth: 560, margin: "0 auto" }}>
              Trusted by enterprise.<br /><em>Loved by operators.</em>
            </h2>
          </div>
          <div className="sc-trust-stats">
            {[
              {
                num: "",
                em: "30 +",
                desc: "Years designing, building & deploying enterprise-class solutions",
              },
              {
                num: "",
                em: "$0",
                desc: "Per-seat or per-user fees — flat monthly rate, always",
              },
              {
                num: "",
                em: "Built & Run",
                desc: "We build the platform and operate it for you long-term",
              },
            ].map((s) => (
              <div key={s.desc}>
                <div className="sc-trust-stat-num">
                  {s.num}<em>{s.em}</em>
                </div>
                <div className="sc-trust-stat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="sc-testimonial-card">
            <Image
              src="/images/testimonial-jay-vashi.webp"
              alt="Jay Vashi"
              width={72}
              height={72}
              className="sc-testimonial-avatar"
            />
            <div>
              <p className="sc-testimonial-quote">
                Ardn Cloud Solutions went beyond our expectations, implementing a hands-on,
                cost-saving approach that has been invaluable to our business. Their strategic
                focus on high-impact efficiencies transformed our operations, delivering
                substantial cost reductions and measurable improvements throughout our processes.
              </p>
              <div className="sc-testimonial-name">Jay Vashi</div>
              <div className="sc-testimonial-role">
                Salesforce Delivery Manager — Fortune 500 Insurance Company
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────── */}
      <section className="sc-pricing-section">
        <div className="sc-section-inner">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="sc-section-eyebrow">Simple pricing</div>
            <h2 className="sc-section-title">One flat rate. Everything included.</h2>
            <p className="sc-section-sub" style={{ margin: "0.5rem auto 0", maxWidth: 480 }}>
              No add-ons. No per-user fees. No surprises. Ever.
            </p>
          </div>
          <div className="sc-pricing-card">
            <div>
              <div className="sc-pricing-eyebrow">Custom Platform</div>
              <div className="sc-pricing-title">
                Built for you.<br />Owned by you.
              </div>
              <div className="sc-pricing-desc">
                Tiers run from $3,000–$12,000+/month depending on scope. New
                customers pay nothing for the one-time build — you only pay
                the monthly subscription once you&apos;re live.
              </div>
              <div className="sc-pricing-amount">
                <div className="sc-pricing-num">$3,000</div>
                <div className="sc-pricing-per">/month flat, starting at</div>
              </div>
              <div className="sc-pricing-note">
                🎁 Build fee free for new customers · Fixed quote within 48 hours
              </div>
              <Link
                href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
                target="_blank"
                className="sc-pricing-cta"
              >
                Book Free Discovery Call →
              </Link>
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                  Salesforce Partner · 30+ years enterprise experience
                </span>
              </div>
            </div>
            <div className="sc-pricing-feats">
              {[
                "All locations covered — no per-location fees ever",
                "Unlimited users — no per-seat charges",
                "HIPAA-ready architecture built in",
                "Built in 3–4 weeks from signed agreement",
                "Weekly demos — never a month of silence",
                "Hosting, updates & security all included",
                "You own the IP and all your data outright",
                "No long-term contracts required",
                "Fixed quote delivered within 48 hours",
                "Subscription starts at go-live — not before",
              ].map((feat) => (
                <div key={feat} className="sc-pricing-feat">
                  <div className="sc-feat-check">✓</div>
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────────── */}
      <section className="sc-cta-section">
        <div className="sc-cta-inner">
          <div className="sc-cta-eyebrow">Ready to stop overpaying?</div>
          <h2 className="sc-cta-title">
            See exactly what you&apos;d save<br /><em>in 15 minutes.</em>
          </h2>
          <p className="sc-cta-sub">
            Book a free discovery call. We&apos;ll map your current stack, calculate your
            exact savings, and deliver a fixed quote within 48 hours. No pressure. No deck.
          </p>
          <Link
            href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
            target="_blank"
            className="sc-cta-btn"
          >
            Book Free 15-Minute Discovery Call →
          </Link>
          <p className="sc-cta-note">
            +1 (407) 815-5303 &nbsp;·&nbsp; contactus@ardncloudsolutions.com
          </p>
          <p className="sc-cta-note" style={{ marginTop: "10px" }}>
            <Link href="/custom-portal-development">See how a custom portal replaces those seats →</Link>
            {" · "}
            <Link href="/reduce-crm-licensing-costs">The full CRM cost-reduction playbook →</Link>
            {" · "}
            <Link href="/compare/salesforce-seat-cost-vs-custom-portal">See the Salesforce &amp; HubSpot seat-cost math →</Link>
            {" · "}
            <Link href="/compare/custom-software-vs-saas">Read the full custom-vs-SaaS cost breakdown →</Link>
            {" · "}
            <Link href="/custom-software-development">What we build to replace seats →</Link>
            {" · "}
            <Link href="/license-guard">Reclaim dormant Salesforce seats first →</Link>
          </p>
        </div>
      </section>

      {/* ── RESULTS MODAL ───────────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="sc-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div className="sc-modal" role="dialog" aria-modal="true" aria-label="Your Savings Report">
            <button
              className="sc-modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="sc-modal-header">
              <div className="sc-modal-tag">Your Savings Report</div>
              <div className="sc-modal-headline">
                You could save{" "}
                <span>{yr1 > 0 ? fmt(yr1) : fmt(yr2)}</span>/year
              </div>
              <div className="sc-modal-sub">Based on your estimated current software spend</div>
            </div>
            <div className="sc-modal-body">
              <div className="sc-modal-metrics">
                <div className="sc-modal-metric">
                  <div className="sc-modal-metric-label">Your current cost</div>
                  <div className="sc-modal-metric-val sc-val-red">{fmt(total)}</div>
                  <div style={{ fontSize: 11, color: "var(--sc-text-3)", marginTop: 3 }}>per month</div>
                </div>
                <div className="sc-modal-metric">
                  <div className="sc-modal-metric-label">Ardn platform</div>
                  <div className="sc-modal-metric-val sc-val-blue">{fmt(baseline)}</div>
                  <div style={{ fontSize: 11, color: "var(--sc-text-3)", marginTop: 3 }}>flat / month, at your scope</div>
                </div>
                <div className="sc-modal-metric">
                  <div className="sc-modal-metric-label">Monthly savings</div>
                  <div className="sc-modal-metric-val sc-val-green">
                    {monthly > 0 ? fmt(monthly) : "Break even"}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--sc-text-3)", marginTop: 3 }}>per month</div>
                </div>
              </div>

              <table className="sc-modal-table">
                <thead>
                  <tr>
                    <th>Tool / Service</th>
                    <th>Current Cost</th>
                    <th>With Ardn</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTools.map((t) => (
                    <tr key={t.name}>
                      <td>{t.name}</td>
                      <td style={{ color: "var(--sc-red)", fontWeight: 600 }}>
                        {fmt(t.cost)}/mo
                      </td>
                      <td className="sc-td-inc">Included</td>
                    </tr>
                  ))}
                  {/* Mirror the inline calculator: render an Additional
                      tools / overhead row when the user-entered budget
                      exceeds the preset stack so the Total row math
                      reconciles with the per-row breakdown. */}
                  {additionalSpend > 0 && (
                    <tr>
                      <td>Additional tools / overhead</td>
                      <td style={{ color: "var(--sc-red)", fontWeight: 600 }}>
                        {fmt(additionalSpend)}/mo
                      </td>
                      <td className="sc-td-inc">Included</td>
                    </tr>
                  )}
                  <tr style={{ fontWeight: 700, borderTop: "2px solid var(--sc-border)" }}>
                    <td style={{ color: "var(--sc-text)" }}>Total</td>
                    <td style={{ color: "var(--sc-red)" }}>{fmt(total)}/mo</td>
                    <td style={{ color: "var(--sc-green)", fontWeight: 700 }}>{fmt(baseline)}/mo flat</td>
                  </tr>
                </tbody>
              </table>

              <div className="sc-modal-savings">
                {[
                  { label: "Year 1 Savings", val: yr1 > 0 ? fmt(yr1) : "Break even" },
                  { label: "Year 2 Savings", val: yr2 > 0 ? fmt(yr2) : "—" },
                  { label: "3-Year Total", val: yr3 > 0 ? fmt(yr3) : "—" },
                ].map((s) => (
                  <div key={s.label} className="sc-modal-saving">
                    <div className="sc-modal-saving-label">{s.label}</div>
                    <div className="sc-modal-saving-val">{s.val}</div>
                  </div>
                ))}
              </div>

              <Link
                href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
                target="_blank"
                className="sc-modal-cta"
              >
                Book Free 15-Minute Discovery Call →
              </Link>
              <div className="sc-modal-fine">
                No pressure. No sales deck. Just your actual numbers in 15 minutes.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── PAGE-SCOPED STYLES ───────────────────────────────────────── */}
      <style>{`
        .sc-page {
          --sc-navy:       #0D1B2E;
          --sc-navy-2:     #111827;
          --sc-blue:       #3B5BDB;
          --sc-blue-2:     #4361EE;
          --sc-blue-light: #EEF2FF;
          --sc-blue-mid:   #C5D0FA;
          --sc-cta-btn:    #111827;
          --sc-white:      #FFFFFF;
          --sc-off-white:  #F8FAFC;
          --sc-surface:    #F1F5F9;
          --sc-border:     #E2E8F0;
          --sc-border-2:   #CBD5E1;
          --sc-text:       #0F172A;
          --sc-text-2:     #475569;
          --sc-text-3:     #94A3B8;
          --sc-eyebrow:    #64748B;
          --sc-green:      #059669;
          --sc-green-bg:   #ECFDF5;
          --sc-red:        #DC2626;
          --sc-r:          8px;
          --sc-r-lg:       16px;
          --sc-r-pill:     100px;
          --sc-shadow:     0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05);
          --sc-shadow-lg:  0 8px 32px rgba(0,0,0,0.12);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: var(--sc-text);
          line-height: 1.6;
        }

        /* HERO */
        .sc-hero { background: white; padding: 200px 2rem 60px; }
        .sc-hero-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 480px; gap: 5rem; align-items: center; }
        .sc-hero-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: var(--sc-eyebrow); margin-bottom: 1.25rem; }
        .sc-h1 { font-size: 3rem; font-weight: 700; color: var(--sc-text); line-height: 1.12; letter-spacing: -1px; margin-bottom: 1.25rem; }
        .sc-h1 em { font-style: normal; color: var(--sc-blue); }
        .sc-hero-sub { font-size: 17px; color: var(--sc-text-2); max-width: 520px; line-height: 1.7; margin-bottom: 2rem; font-weight: 400; }
        .sc-hero-checks { display: flex; flex-direction: column; gap: 9px; margin-bottom: 2.5rem; }
        .sc-hero-check { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--sc-text-2); }
        .sc-check-dot { width: 6px; height: 6px; background: var(--sc-blue); border-radius: 50%; flex-shrink: 0; }
        .sc-hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }

        /* BUTTONS */
        .sc-btn-cta { display: inline-flex; align-items: center; gap: 8px; background: var(--sc-cta-btn); color: white; font-size: 15px; font-weight: 600; padding: 13px 26px; border-radius: var(--sc-r-pill); border: none; cursor: pointer; transition: background 0.15s; font-family: inherit; letter-spacing: -0.1px; text-decoration: none; }
        .sc-btn-cta:hover { background: #000; }
        .sc-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--sc-text); font-size: 15px; font-weight: 500; padding: 12px 24px; border-radius: var(--sc-r-pill); text-decoration: none; border: 1.5px solid var(--sc-border-2); cursor: pointer; transition: all 0.15s; }
        .sc-btn-outline:hover { border-color: var(--sc-text-2); background: var(--sc-off-white); }

        /* CALC CARD */
        .sc-calc-card { background: white; border: 1.5px solid var(--sc-border); border-radius: var(--sc-r-lg); box-shadow: var(--sc-shadow-lg); overflow: hidden; }
        .sc-calc-header { background: var(--sc-navy); padding: 1.1rem 1.5rem; display: flex; align-items: center; gap: 10px; }
        .sc-calc-header-title { font-size: 13px; font-weight: 600; color: white; letter-spacing: 0.01em; }
        .sc-calc-header-badge { margin-left: auto; background: rgba(255,255,255,0.12); border-radius: 20px; padding: 2px 10px; font-size: 11px; color: rgba(255,255,255,0.6); }
        .sc-calc-body { padding: 1.5rem; }
        .sc-calc-field { margin-bottom: 12px; }
        .sc-calc-label { display: block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--sc-text-3); margin-bottom: 5px; }
        .sc-calc-input { width: 100%; padding: 9px 12px; font-size: 14px; font-family: inherit; border: 1.5px solid var(--sc-border); border-radius: var(--sc-r); background: var(--sc-off-white); color: var(--sc-text); outline: none; transition: border-color 0.15s, box-shadow 0.15s; appearance: none; }
        .sc-calc-input:focus { border-color: var(--sc-blue); box-shadow: 0 0 0 3px rgba(59,91,219,0.1); background: white; }
        .sc-calc-row { display: grid; grid-template-columns: 1fr; gap: 10px; }
        .sc-calc-sep { height: 1px; background: var(--sc-border); margin: 14px 0; }
        .sc-calc-tools-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--sc-text-3); margin-bottom: 8px; }
        .sc-calc-tool { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid var(--sc-border); font-size: 13px; }
        .sc-calc-tool:last-child { border-bottom: none; }
        .sc-calc-tool-name { color: var(--sc-text-2); }
        .sc-calc-tool-cost { color: var(--sc-red); font-weight: 600; }
        .sc-calc-total { display: flex; justify-content: space-between; padding: 10px 0 0; font-size: 14px; border-top: 2px solid var(--sc-border); margin-top: 4px; }
        .sc-calc-submit { width: 100%; background: var(--sc-cta-btn); color: white; font-size: 14px; font-weight: 600; padding: 12px; border-radius: var(--sc-r-pill); border: none; cursor: pointer; font-family: inherit; margin-top: 1.25rem; transition: background 0.15s; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .sc-calc-submit:hover { background: #000; }

        /* INDUSTRY BUTTONS */
        .sc-industry-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 4px; }
        .sc-industry-btn { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 10px 6px; background: var(--sc-off-white); border: 1.5px solid var(--sc-border); border-radius: var(--sc-r); cursor: pointer; transition: all 0.15s; font-family: inherit; text-align: center; }
        .sc-industry-btn:hover { border-color: var(--sc-blue); background: var(--sc-blue-light); }
        .sc-industry-btn--active { border-color: var(--sc-blue); background: var(--sc-blue-light); box-shadow: 0 0 0 3px rgba(59,91,219,0.12); }
        .sc-industry-icon { font-size: 1.4rem; line-height: 1; }
        .sc-industry-name { font-size: 11px; font-weight: 600; color: var(--sc-text-2); line-height: 1.2; text-align: center; }
        .sc-industry-btn--active .sc-industry-name { color: var(--sc-blue); }

        /* STATS ROW */
        .sc-stats-row { background: var(--sc-navy); padding: 2rem; }
        .sc-stats-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1.5rem; }
        .sc-stat-item { text-align: center; }
        .sc-stat-val { font-size: 2rem; font-weight: 700; color: white; line-height: 1; letter-spacing: -1px; }
        .sc-stat-val em { color: var(--sc-blue-mid); font-style: normal; }
        .sc-stat-label { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 4px; }

        /* SECTIONS */
        .sc-section { padding: 5rem 2rem; }
        .sc-section--offwhite { background: var(--sc-off-white); }
        .sc-section--white { background: white; }
        .sc-section-inner { max-width: 1200px; margin: 0 auto; }
        .sc-section-eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: var(--sc-eyebrow); margin-bottom: 10px; }
        .sc-section-title { font-size: 2.25rem; font-weight: 700; color: var(--sc-text); letter-spacing: -0.5px; line-height: 1.15; margin-bottom: 0.75rem; }
        .sc-section-title em { color: var(--sc-blue); font-style: normal; }
        .sc-section-sub { font-size: 16px; color: var(--sc-text-2); max-width: 560px; line-height: 1.7; margin-bottom: 3rem; }

        /* HOW IT WORKS */
        .sc-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        .sc-step-num { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--sc-blue); margin-bottom: 12px; }
        .sc-step-title { font-size: 16px; font-weight: 600; color: var(--sc-text); margin-bottom: 8px; }
        .sc-step-desc { font-size: 14px; color: var(--sc-text-2); line-height: 1.65; }
        .sc-step-line { height: 2px; background: linear-gradient(90deg, var(--sc-blue) 0%, var(--sc-blue-mid) 100%); border-radius: 2px; margin-bottom: 20px; width: 40px; }

        /* PAIN SECTION */
        .sc-pain-section { background: var(--sc-navy); padding: 5rem 2rem; }
        .sc-pain-inner { max-width: 1200px; margin: 0 auto; }
        .sc-pain-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .sc-pain-eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.4); margin-bottom: 10px; }
        .sc-pain-title { font-size: 2.25rem; font-weight: 700; color: white; letter-spacing: -0.5px; line-height: 1.15; margin-bottom: 1rem; }
        .sc-pain-title em { color: var(--sc-blue-mid); font-style: normal; }
        .sc-pain-sub { font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.7; font-weight: 300; }
        .sc-pain-cards { display: flex; flex-direction: column; gap: 12px; }
        .sc-pain-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--sc-r-lg); padding: 1.25rem; display: flex; gap: 14px; align-items: flex-start; transition: border-color 0.2s; }
        .sc-pain-card:hover { border-color: rgba(59,91,219,0.4); }
        .sc-pain-icon { width: 36px; height: 36px; background: rgba(59,91,219,0.15); border-radius: var(--sc-r); display: grid; place-items: center; font-size: 16px; flex-shrink: 0; }
        .sc-pain-card-title { font-size: 14px; font-weight: 600; color: white; margin-bottom: 3px; }
        .sc-pain-card-desc { font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.55; }

        /* MARKETS */
        .sc-markets-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .sc-market-card { background: white; border: 1.5px solid var(--sc-border); border-radius: var(--sc-r-lg); padding: 1.75rem; transition: all 0.2s; }
        .sc-market-card:hover { border-color: var(--sc-blue); box-shadow: 0 4px 20px rgba(59,91,219,0.1); transform: translateY(-2px); }
        .sc-market-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
        .sc-market-name { font-size: 16px; font-weight: 700; color: var(--sc-text); margin-bottom: 4px; }
        .sc-market-replaces { font-size: 12px; color: var(--sc-text-3); font-weight: 500; margin-bottom: 10px; }
        .sc-market-desc { font-size: 13px; color: var(--sc-text-2); line-height: 1.65; margin-bottom: 12px; }
        .sc-market-savings { font-size: 13px; font-weight: 700; color: var(--sc-green); background: var(--sc-green-bg); padding: 4px 10px; border-radius: var(--sc-r); display: inline-block; }

        /* TESTIMONIAL */
        .sc-testimonial-section { background: var(--sc-surface); padding: 5rem 2rem; }
        .sc-testimonial-inner { max-width: 1000px; margin: 0 auto; }
        .sc-trust-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 3rem; text-align: center; }
        .sc-trust-stat-num { font-size: 2.5rem; font-weight: 700; color: var(--sc-text); letter-spacing: -1.5px; line-height: 1; margin-bottom: 6px; }
        .sc-trust-stat-num em { color: var(--sc-blue); font-style: normal; }
        .sc-trust-stat-desc { font-size: 14px; color: var(--sc-text-2); line-height: 1.4; }
        .sc-testimonial-card { background: white; border: 1.5px solid var(--sc-border); border-radius: var(--sc-r-lg); padding: 2.5rem; display: grid; grid-template-columns: 80px 1fr; gap: 2rem; align-items: center; box-shadow: var(--sc-shadow); }
        .sc-testimonial-avatar { border-radius: 50%; border: 3px solid var(--sc-blue-light); object-fit: cover; }
        .sc-testimonial-quote { font-size: 16px; color: var(--sc-text-2); line-height: 1.75; font-style: italic; margin-bottom: 1rem; position: relative; }
        .sc-testimonial-quote::before { content: '"'; font-size: 4rem; color: var(--sc-blue-light); line-height: 0; vertical-align: -0.5em; margin-right: 4px; font-style: normal; font-family: Georgia, serif; }
        .sc-testimonial-name { font-size: 15px; font-weight: 700; color: var(--sc-text); }
        .sc-testimonial-role { font-size: 13px; color: var(--sc-text-3); margin-top: 2px; }

        /* PRICING */
        .sc-pricing-section { background: white; padding: 5rem 2rem; }
        .sc-pricing-card { max-width: 980px; margin: 0 auto; background: var(--sc-navy); border-radius: var(--sc-r-lg); padding: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .sc-pricing-eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.4); margin-bottom: 10px; }
        .sc-pricing-title { font-size: 2rem; font-weight: 700; color: white; letter-spacing: -0.5px; line-height: 1.15; margin-bottom: 0.75rem; }
        .sc-pricing-desc { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.65; font-weight: 300; margin-bottom: 2rem; }
        .sc-pricing-amount { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
        .sc-pricing-num { font-size: 2.8rem; font-weight: 700; color: white; line-height: 1; letter-spacing: -2px; }
        .sc-pricing-per { font-size: 14px; color: rgba(255,255,255,0.4); }
        .sc-pricing-note { font-size: 12px; color: rgba(255,255,255,0.3); margin-bottom: 2rem; }
        .sc-pricing-cta { display: block; text-align: center; background: white; color: var(--sc-navy); font-size: 15px; font-weight: 700; padding: 14px 28px; border-radius: var(--sc-r-pill); text-decoration: none; transition: all 0.15s; }
        .sc-pricing-cta:hover { background: var(--sc-off-white); }
        .sc-pricing-feats { display: flex; flex-direction: column; gap: 12px; }
        .sc-pricing-feat { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: rgba(255,255,255,0.7); }
        .sc-feat-check { width: 20px; height: 20px; background: rgba(59,91,219,0.2); border: 1px solid rgba(59,91,219,0.4); border-radius: 50%; display: grid; place-items: center; font-size: 11px; color: var(--sc-blue-mid); flex-shrink: 0; margin-top: 1px; }

        /* CTA SECTION */
        .sc-cta-section { background: var(--sc-navy); padding: 5rem 2rem; text-align: center; }
        .sc-cta-inner { max-width: 600px; margin: 0 auto; }
        .sc-cta-eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.4); margin-bottom: 1rem; }
        .sc-cta-title { font-size: 2.5rem; font-weight: 700; color: white; letter-spacing: -0.8px; line-height: 1.15; margin-bottom: 1rem; }
        .sc-cta-title em { color: var(--sc-blue-mid); font-style: normal; }
        .sc-cta-sub { font-size: 16px; color: rgba(255,255,255,0.5); line-height: 1.7; font-weight: 300; margin-bottom: 2.5rem; }
        .sc-cta-btn { display: inline-flex; align-items: center; gap: 8px; background: white; color: var(--sc-navy); font-size: 16px; font-weight: 700; padding: 15px 36px; border-radius: var(--sc-r-pill); text-decoration: none; transition: all 0.15s; font-family: inherit; }
        .sc-cta-btn:hover { background: var(--sc-off-white); transform: translateY(-1px); }
        .sc-cta-note { font-size: 13px; color: rgba(255,255,255,0.3); margin-top: 1.25rem; }

        /* MODAL */
        .sc-modal-overlay { position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .sc-modal { background: white; border-radius: var(--sc-r-lg); max-width: 660px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; animation: scModalIn 0.25s ease; box-shadow: var(--sc-shadow-lg); }
        @keyframes scModalIn { from { transform: translateY(20px); opacity: 0; } to { transform: none; opacity: 1; } }
        .sc-modal-close { position: absolute; top: 1rem; right: 1rem; width: 32px; height: 32px; background: var(--sc-surface); border: none; border-radius: 50%; cursor: pointer; font-size: 16px; color: var(--sc-text-2); display: grid; place-items: center; z-index: 1; }
        .sc-modal-close:hover { background: var(--sc-border); }
        .sc-modal-header { background: var(--sc-navy); padding: 2rem; border-radius: var(--sc-r-lg) var(--sc-r-lg) 0 0; }
        .sc-modal-tag { display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--sc-blue-mid); background: rgba(59,91,219,0.2); padding: 3px 10px; border-radius: 20px; margin-bottom: 10px; }
        .sc-modal-headline { font-size: 2rem; font-weight: 700; color: white; letter-spacing: -0.5px; line-height: 1.1; }
        .sc-modal-headline span { color: var(--sc-blue-mid); }
        .sc-modal-sub { font-size: 13px; color: rgba(255,255,255,0.4); margin-top: 4px; }
        .sc-modal-body { padding: 2rem; }
        .sc-modal-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 1.5rem; }
        .sc-modal-metric { background: var(--sc-off-white); border: 1px solid var(--sc-border); border-radius: var(--sc-r-lg); padding: 1rem; text-align: center; }
        .sc-modal-metric-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--sc-text-3); margin-bottom: 4px; }
        .sc-modal-metric-val { font-size: 1.4rem; font-weight: 700; line-height: 1.1; }
        .sc-val-red { color: var(--sc-red); }
        .sc-val-blue { color: var(--sc-blue); }
        .sc-val-green { color: var(--sc-green); }
        .sc-modal-table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 1.5rem; }
        .sc-modal-table th { background: var(--sc-off-white); padding: 8px 12px; text-align: left; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--sc-text-3); border-bottom: 1px solid var(--sc-border); }
        .sc-modal-table td { padding: 8px 12px; border-bottom: 1px solid var(--sc-border); color: var(--sc-text-2); }
        .sc-td-inc { color: var(--sc-green); font-weight: 700; }
        .sc-modal-savings { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 1.5rem; }
        .sc-modal-saving { background: var(--sc-navy); border-radius: var(--sc-r-lg); padding: 1rem; text-align: center; }
        .sc-modal-saving-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: rgba(255,255,255,0.4); margin-bottom: 4px; }
        .sc-modal-saving-val { font-size: 1.25rem; font-weight: 700; color: var(--sc-blue-mid); }
        .sc-modal-cta { display: block; text-align: center; background: var(--sc-cta-btn); color: white; font-size: 16px; font-weight: 700; padding: 15px; border-radius: var(--sc-r-pill); text-decoration: none; transition: background 0.15s; margin-bottom: 8px; font-family: inherit; }
        .sc-modal-cta:hover { background: #000; }
        .sc-modal-fine { font-size: 12px; color: var(--sc-text-3); text-align: center; }

        /* RESPONSIVE */
        @media (max-width: 960px) {
          .sc-hero-inner { grid-template-columns: 1fr; gap: 3rem; }
          .sc-steps-grid { grid-template-columns: 1fr 1fr; }
          .sc-pain-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .sc-markets-grid { grid-template-columns: 1fr 1fr; }
          .sc-pricing-card { grid-template-columns: 1fr; }
          .sc-modal-metrics, .sc-modal-savings { grid-template-columns: 1fr; }
          .sc-trust-stats { grid-template-columns: 1fr; }
          .sc-testimonial-card { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .sc-h1 { font-size: 2.2rem; }
          .sc-section-title { font-size: 1.8rem; }
          .sc-steps-grid { grid-template-columns: 1fr; }
          .sc-markets-grid { grid-template-columns: 1fr; }
          .sc-hero-ctas { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}
