"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import TrustBar from "@/components/common/TrustBar";

// Lightweight gtag accessor (gtag.js is loaded site-wide in layout.tsx for
// GA4 + Google Ads). Avoids `any` so the lint-gated build stays clean.
function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.("event", event, params);
}

// ─── FAQ DATA ───────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What kinds of AI apps do you build?",
    a: "Anything that modern AI can do. Customer-facing chatbots and support agents. Internal workflow automations. Document processing and data extraction. Sales enablement tools. Analytics and forecasting systems. Industry-specific vertical apps. If you can describe the problem, we can scope the build. We don't sell templates — we build to your exact specifications.",
  },
  {
    q: "How is this different from your AI-Powered Support product?",
    a: "AI-Powered Support is a productized, no-code support automation tool. AI Forge is custom development — we build whatever AI application your business needs, from scratch, to your exact specs. Think of AI-Powered Support as 'off-the-shelf' and AI Forge as 'tailor-made'.",
  },
  {
    q: "What's a \"service credit\"?",
    a: "One service credit equals one hour of senior engineering or design work. You use them for new features, change requests, integrations, custom reporting, or anything else that needs human work. Unused credits roll over up to 30% of your monthly allocation. Overages are billed at our standard hourly rate.",
  },
  {
    q: "What if I burn through my AI credits?",
    a: "You get real-time usage dashboards and alerts at 50%, 75%, and 90% of your monthly allocation. If you exceed the pool, overages are passed through at cost (no markup) or you can upgrade your tier mid-cycle and we prorate. We also continuously optimize your prompts to reduce token consumption — usually 30–50% over the first quarter.",
  },
  {
    q: "Do I own the app you build?",
    a: "You own the IP and the data. We retain rights to the underlying frameworks and tooling we use across clients. If you ever leave, you get a complete export of your data and full documentation of your application. We have no interest in lock-in — our model only works if you want to stay.",
  },
  {
    q: "Is there a minimum contract?",
    a: "No long-term contract required on Launch or Scale tiers — month-to-month after the build is delivered. Enterprise engagements typically include a 12-month commitment in exchange for negotiated rates and dedicated capacity. You can upgrade, downgrade, or cancel any tier with 30 days notice.",
  },
  {
    // SEO hybrid: AI Forge headline positioning is Cat 2 (tech-agnostic custom
    // dev), but Salesforce integration is a load-bearing managed-services and
    // SF-buyer search signal we want to keep. This answer leads Salesforce-
    // first (preserves SF ranking + buyer credibility), then lists the rest of
    // the integration surface so it still reads as a flexible custom-dev
    // practice — not a Salesforce-only shop.
    q: "Can you integrate with Salesforce?",
    a: "Yes — Salesforce integration is one of our specialties. Ardn has deep Salesforce experience as a company, so AI Forge applications routinely read from, write to, and orchestrate work inside Salesforce. We also integrate with HubSpot, Microsoft Dynamics, your data warehouse, internal APIs, billing systems, and 5,000+ other tools — whichever stack your business actually runs on.",
  },
  {
    q: "What if my AI needs change?",
    a: "That's the whole point. Models evolve, your business evolves, and your AI app needs to evolve with it. Your monthly subscription includes ongoing iteration — new features, model upgrades, prompt tuning, and integration changes — all drawn from your service credit pool. You won't need a new contract every time something changes.",
  },
];

// ─── TIERS DATA ─────────────────────────────────────────────────────────────

const TIERS = [
  {
    id: "launch",
    label: "TIER 01 · LAUNCH",
    title: "Launch",
    forText: "For small businesses validating their first AI workflow. 1–25 employees.",
    build: "$7,500",
    monthly: "$3,000",
    aiCredits: "500K",
    aiSub: "tokens / month",
    serviceCredits: "10",
    serviceSub: "≈ 10 dev hours",
    features: [
      "1 production AI application",
      "Up to 3 user accounts",
      "Standard hosting & infrastructure",
      "Email support · 48-hour response",
      "Monthly performance report",
      "Quarterly roadmap review",
    ],
    cta: "Start with Launch",
    ctaStyle: "outline",
    featured: false,
    buildWaived: true,
  },
  {
    id: "scale",
    label: "TIER 02 · SCALE",
    title: "Scale",
    forText: "For growing businesses running AI across multiple workflows. 25–250 employees.",
    build: "$25,000",
    monthly: "$4,500",
    aiCredits: "2.5M",
    aiSub: "tokens / month",
    serviceCredits: "40",
    serviceSub: "≈ 40 dev hours",
    features: [
      "Up to 3 production AI applications",
      "Up to 25 user accounts",
      "Priority hosting & autoscaling",
      "Priority support · 24-hour response",
      "Weekly performance & usage reports",
      "Monthly roadmap & feature planning",
      "Integration with your existing stack",
      "Custom domains & branding",
    ],
    cta: "Start with Scale",
    ctaStyle: "filled",
    featured: true,
    buildWaived: true,
  },
  {
    id: "enterprise",
    label: "TIER 03 · ENTERPRISE",
    title: "Enterprise",
    forText: "For mid-market and large organizations with mission-critical AI. 250+ employees.",
    build: "From $75K",
    monthly: "From $12K",
    aiCredits: "10M+",
    aiSub: "tokens / month",
    serviceCredits: "120+",
    serviceSub: "≈ 120 dev hours",
    features: [
      "Unlimited production AI applications",
      "Unlimited user accounts (SSO included)",
      "Dedicated infrastructure & private cloud",
      "Dedicated team · 4-hour SLA · phone support",
      "Real-time dashboards & custom reporting",
      "Weekly engineering syncs",
      "SOC 2 / HIPAA / compliance support",
      "Custom contract terms & procurement",
    ],
    cta: "Talk to Sales",
    ctaStyle: "outline",
    featured: false,
    buildWaived: false,
  },
];

// ─── COMPARISON DATA ─────────────────────────────────────────────────────────

type CellType = "yes" | "no" | "partial";
interface CompCell { type: CellType; text: string }
interface CompRow { feature: string; diy: CompCell; agency: CompCell; inhouse: CompCell; ardn: string }

const COMPARISON_ROWS: CompRow[] = [
  { feature: "Time to launch",            diy: { type: "partial", text: "Days, but limited" },  agency: { type: "no",      text: "3–6 months" },                   inhouse: { type: "no",      text: "6–12 months" },        ardn: "2–6 weeks" },
  { feature: "Built for your workflow",   diy: { type: "no",      text: "Off-the-shelf only" }, agency: { type: "yes",     text: "Custom" },                       inhouse: { type: "yes",     text: "Custom" },             ardn: "Fully custom" },
  { feature: "Who runs it after launch",  diy: { type: "no",      text: "You're on your own" }, agency: { type: "no",      text: "Gone after delivery" },          inhouse: { type: "partial", text: "You hire & train" },    ardn: "We run it — forever" },
  { feature: "What it costs",             diy: { type: "partial", text: "Per-seat + compute" },  agency: { type: "no",      text: "Big upfront + surprise bills" }, inhouse: { type: "no",      text: "$250K+ per engineer" }, ardn: "One flat subscription" },
  { feature: "Keeps improving over time", diy: { type: "no",      text: "You DIY it" },          agency: { type: "no",      text: "New contract each time" },       inhouse: { type: "partial", text: "If they keep up" },     ardn: "Included — we handle it" },
];

function Cell({ c }: { c: CompCell }) {
  const cls = c.type === "yes" ? "af-cell--yes" : c.type === "no" ? "af-cell--no" : "af-cell--partial";
  return <span className={`af-cell ${cls}`}><span className="af-dot" />{c.text}</span>;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function AiForgeContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ── Low-friction "scope & quote" lead form ──
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please add your name, email, and a short note about your project.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "AI Forge — Scope & Quote form" }),
      });
      if (!res.ok) {
        const d = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(d.error || "Something went wrong — please try again.");
      }
      setSent(true);
      toast.success("Got it! We'll reply with your free scope & quote shortly.");
      // GA4 + Google Ads lead conversion
      track("generate_lead", { form_location: "ai_forge_quote", value: 1 });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const onField = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="af-page">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="af-hero">
        <div className="af-container">
          {/* CRO: offer ribbon at the top of the hero (sits inside the hero so
              it clears the site's fixed header). Standard new-customer offer —
              we waive the one-time build fee. Links straight to #pricing. */}
          <Link href="#pricing" className="af-announce">
            <span className="af-announce-tag">NEW</span>
            <span className="af-announce-text">
              <strong>New Customer Offer:</strong> we build your custom AI app{" "}
              <strong>free</strong> — you only pay the monthly subscription.
            </span>
            <span className="af-announce-cta">See the offer →</span>
          </Link>
          <div className="af-hero-grid">
            <div>
              {/* Hero pill leads with the AI Forge Framework brand — the durable,
                  model-agnostic identity we want visitors and search engines to
                  associate with us. */}
              <div className="af-hero-pill">POWERED BY THE AI FORGE FRAMEWORK</div>
              {/* Headline sharpened for clarity: leads with exactly what the
                  buyer gets ("custom AI apps, built and run for you") instead of
                  the abstract "stop guessing" hook. Brand stays in the pill. */}
              <h1 className="af-h1">
                Custom AI Apps, Built and{" "}
                <span className="af-accent">Run For You.</span>
              </h1>
              <p className="af-hero-sub">
                AI Forge is the done-for-you way to launch a custom AI app. Our
                expert team designs, builds, hosts, and continuously
                improves it — for one predictable monthly fee. Most AI projects
                stall because no one runs them after launch. We build yours{" "}
                <em>and</em> keep it running.
              </p>
              <div className="af-hero-offer">
                <span className="af-hero-offer-icon">🎁</span>
                New customers: <strong>$0 build fee</strong> — we build your app free
              </div>
              <div className="af-hero-cta">
                <Link href="#pricing" className="af-btn af-btn-lg">See Pricing &amp; Offer</Link>
                <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="af-btn af-btn-lg af-btn-white" onClick={() => track("book_call_click", { location: "hero" })}>
                  Book a Free Discovery Call →
                </Link>
              </div>
            </div>
            <div className="af-hero-card">
              <div className="af-hero-card-title">AT A GLANCE</div>
              {[
                { num: "2–6", label: "weeks from spec to production" },
                { num: "3", label: "tiers — small, mid, enterprise" },
                { num: "1", label: "monthly bill — everything included" },
              ].map((s) => (
                <div key={s.label} className="af-hero-card-stat">
                  <span className="af-hero-card-num"><span>{s.num}</span></span>
                  <span className="af-hero-card-label">{s.label}</span>
                </div>
              ))}
              <div className="af-hero-card-offer">
                <span className="af-hero-card-offer-num">$0</span>
                <span className="af-hero-card-offer-label">build fee for new customers — we build it free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRO: trust signal strip directly under the hero. Continues the dark
          theme of the AI Forge hero, then transitions cleanly into the light
          PROBLEM section below. */}
      <TrustBar />

      {/* ── PROBLEM ──────────────────────────────────────────────────── */}
      <section className="af-section af-section--soft">
        <div className="af-container">
          <div className="af-section-label">WHY MOST AI STALLS</div>
          <h2 className="af-h2">
            Most AI projects stall.{" "}
            <span className="af-accent">Yours won&apos;t.</span>
          </h2>
          <p className="af-section-sub">
            The technology isn&apos;t the problem. The execution model is. Most businesses are
            stuck between three broken options: DIY tools that don&apos;t fit, agencies that
            disappear after delivery, and in-house hires that take a year to find.
          </p>
          <div className="af-problem-grid">
            {[
              {
                num: "80",
                title: "Of AI Projects Fail",
                desc: "Double the failure rate of traditional IT projects. Most never make it from pilot to production.",
                source: "Source: RAND Corporation",
              },
              {
                num: "88",
                title: "Of Pilots Die in POC",
                desc: "Built in a sandbox, never integrated, never deployed. The 'pilot purgatory' that wastes most enterprise AI budgets.",
                source: "Source: CIO",
              },
              {
                num: "42",
                title: "Scrapped Their AI Initiatives",
                desc: "Up from 17% the year before. Companies are abandoning AI projects faster than they're starting them.",
                source: "Source: S&P Global",
              },
            ].map((s) => (
              <div key={s.title} className="af-problem-card">
                <div className="af-problem-num">
                  <span className="af-accent">{s.num}</span>%
                </div>
                <h3 className="af-problem-card-title">{s.title}</h3>
                <p className="af-problem-card-desc">
                  {s.desc}
                  <small className="af-problem-source">{s.source}</small>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────────────── */}
      <section id="how-it-works" className="af-section">
        <div className="af-container">
          <div className="af-section-label">WHAT IS AI FORGE</div>
          <h2 className="af-h2">
            Custom AI Apps Built for Your Business.{" "}
            <span className="af-accent">Then Run for You. Forever.</span>
          </h2>
          <p className="af-section-sub">
            AI Forge is not an off-the-shelf product. It&apos;s an operating partnership. We
            architect, build, deploy, and run a custom AI application designed around your
            exact workflow — for one predictable monthly fee that includes everything.
          </p>
          <div className="af-pillar-grid">
            {[
              {
                title: "We Build It",
                desc: "Discovery to deployment in 2–6 weeks. Production-grade infrastructure from day one.",
                items: [
                  "Custom AI app to your specs",
                  "Built on the best current models",
                  "Integrated with your existing tools",
                  "Fixed-quote build, fixed timeline",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                ),
              },
              {
                title: "We Run It",
                desc: "Hosting, monitoring, security, and model updates. You never touch the infrastructure.",
                items: [
                  "Production hosting & autoscaling",
                  "Security patches & monitoring",
                  "Model upgrades as new ones ship",
                  "24/7 uptime monitoring",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                    <polyline points="8 17 12 21 16 17" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                  </svg>
                ),
              },
              {
                title: "We Improve It",
                desc: "Continuous iteration. New features, optimizations, and AI compute included in your subscription.",
                items: [
                  "Ongoing feature development",
                  "Prompt optimization (cuts costs 30–50%)",
                  "Transparent AI credit metering",
                  "Direct access to our engineers",
                ],
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
              },
            ].map((p) => (
              <div key={p.title} className="af-pillar-card">
                <div className="af-pillar-icon">{p.icon}</div>
                <h3 className="af-pillar-title">{p.title}</h3>
                <p className="af-pillar-desc">{p.desc}</p>
                <ul className="af-pillar-list">
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ───────────────────────────────────────────────── */}
      <section className="af-comparison-section">
        <div className="af-container">
          <div className="af-section-label af-section-label--light">WHY AI FORGE</div>
          <h2 className="af-h2 af-h2--white">
            Built Different. <span className="af-accent-light">Built to Last.</span>
          </h2>
          <p className="af-section-sub af-section-sub--light">
            The market is full of broken AI options: DIY tools that don&apos;t scale, agencies
            that disappear, in-house teams that cost a fortune. We&apos;re none of those.
          </p>
          <div className="af-cmp">
            <table className="af-cmp-table">
              <thead>
                <tr>
                  <th></th>
                  <th>DIY (ChatGPT, etc.)</th>
                  <th>Traditional AI agency</th>
                  <th>In-house hire</th>
                  <th className="af-col-ardn">
                    <span className="af-col-ardn-badge">★ BEST FIT</span>
                    <span className="af-col-ardn-name">Ardn AI Forge</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="af-cmp-row-label">{row.feature}</td>
                    <td><Cell c={row.diy} /></td>
                    <td><Cell c={row.agency} /></td>
                    <td><Cell c={row.inhouse} /></td>
                    <td className="af-col-ardn">
                      <span className="af-cell af-cell--ardn"><span className="af-check">✓</span>{row.ardn}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section id="process" className="af-section">
        <div className="af-container">
          <div className="af-section-label">FROM DISCOVERY TO DEPLOYMENT</div>
          <h2 className="af-h2">
            Ship AI in Weeks, <span className="af-accent">Not Months.</span>
          </h2>
          <p className="af-section-sub">
            Our four-stage process is designed for speed. Most clients are in production
            inside 30 days, with a clear roadmap for ongoing iteration.
          </p>
          <div className="af-process-grid">
            {[
              {
                week: "WEEK 1",
                num: "STEP 01",
                title: "Discovery",
                desc: "We map your workflow, identify the highest-leverage automation opportunity, and scope the build. You get a fixed quote and delivery date within 48 hours.",
              },
              {
                week: "WEEKS 1–4",
                num: "STEP 02",
                title: "Build",
                desc: "Our team architects, builds, and tests your app on production-grade infrastructure. You see weekly demos, not month-long silence.",
              },
              {
                week: "WEEKS 4–6",
                num: "STEP 03",
                title: "Deploy",
                desc: "Live deployment with monitoring, security review, and team training. Your subscription starts the day your app goes into production — not before.",
              },
              {
                week: "ONGOING",
                num: "STEP 04",
                title: "Operate",
                desc: "We run it. Hosting, model updates, security patches, new features, and support — all inside your monthly subscription and credit allowance.",
              },
            ].map((step) => (
              <div key={step.num} className="af-process-card">
                <div className="af-process-week">{step.week}</div>
                <div className="af-process-num">{step.num}</div>
                <h3 className="af-process-title">{step.title}</h3>
                <p className="af-process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────── */}
      <section className="af-section af-section--soft">
        <div className="af-container">
          <div className="af-section-label">PROVEN TRACK RECORD</div>
          <h2 className="af-h2">
            30+ Years Building{" "}
            <span className="af-accent">Production-Grade Technology.</span>
          </h2>
          <p className="af-section-sub">
            AI Forge is built on Ardn&apos;s three decades of experience designing, building,
            and deploying production technology across industries. The same team that
            earned this trust is now building your AI.
          </p>
          <div className="af-testimonial-box">
            <div className="af-testimonial-stat">
              <div className="af-testimonial-num">30+</div>
              <div className="af-testimonial-stat-label">
                Years designing, building &amp; deploying production technology
              </div>
            </div>
            <div>
              <p className="af-testimonial-quote">
                &ldquo;Ardn Cloud Solutions went beyond our expectations, implementing a
                hands-on, cost-saving approach that has been invaluable. Their strategic focus
                on high-impact efficiencies transformed our operations.&rdquo;
              </p>
              {/* Customer role generalised. The original "Salesforce Delivery
                  Manager" copy associated AI Forge with Salesforce work — not
                  the positioning we want on a Cat 2 page. */}
              <div className="af-testimonial-author">
                <strong>Jay Vashi</strong>
                Senior Delivery Manager · Fortune 500 Insurance Company
              </div>
            </div>
          </div>

          {/* CRO: surface real case studies as proof we ship complex,
              production-grade custom software — directly counters the
              "is this just AI slop?" objection. */}
          <div className="af-casestudies">
            <span className="af-cs-label">See how we&apos;ve delivered complex custom builds:</span>
            <ul className="af-cs-list">
              <li><Link href="/case-studies/revolutionizing-airline-customer-service-with-salesforce-customer360-console">Airline customer-service console &rarr;</Link></li>
              <li><Link href="/case-studies/enhancing-b2b-engagement-with-a-centralized-sales-portal">Centralized B2B sales portal &rarr;</Link></li>
              <li><Link href="/case-studies/transforming-the-timeshare-industry-with-a-digitized-tour-management-platform">Timeshare tour-management platform &rarr;</Link></li>
            </ul>
            <Link href="/case-studies" className="af-cs-all">Browse all case studies &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section id="pricing" className="af-section af-section--bg">
        <div className="af-container">
          <div className="af-section-label">THREE TIERS · ONE OPERATING MODEL</div>
          <h2 className="af-h2">
            Pick Your Scale. <span className="af-accent">We Handle the Rest.</span>
          </h2>
          <p className="af-section-sub">
            Every tier includes a one-time build fee and a monthly operating subscription.
            Subscriptions are metered against two pools:{" "}
            <strong style={{ color: "var(--af-primary)" }}>AI credits</strong> (model
            usage) and{" "}
            <strong style={{ color: "var(--af-primary)" }}>service credits</strong> (our
            engineering time for new features, changes, and support).
          </p>

          {/* CRO: offer banner sits directly above the tiers so the build-fee
              waiver is anchored at the exact moment of price evaluation.
              Standard new-customer offer — no scarcity language. */}
          <div className="af-offer-banner">
            <div className="af-offer-banner-main">
              <div className="af-offer-banner-tag">NEW CUSTOMER OFFER</div>
              <div className="af-offer-banner-title">
                Your custom AI app, <span className="af-accent">built free.</span>
              </div>
              <div className="af-offer-banner-text">
                New customers skip the one-time build fee entirely — we design and
                build your custom AI app at <strong>no upfront cost</strong>. You
                simply start your monthly subscription when it goes live.
              </div>
            </div>
            <Link
              href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank"
              className="af-btn af-btn-lg af-btn-white af-offer-banner-btn"
              onClick={() => track("book_call_click", { location: "offer_banner" })}
            >
              Claim Your Spot →
            </Link>
          </div>

          <div className="af-tier-grid">
            {TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`af-tier${tier.featured ? " af-tier--featured" : ""}`}
              >
                <div className="af-tier-name">{tier.label}</div>
                <div className="af-tier-title">{tier.title}</div>
                <div className="af-tier-for">{tier.forText}</div>
                <div className="af-tier-prices">
                  <div className="af-tier-price-row">
                    <div className="af-tier-price-label">ONE-TIME BUILD</div>
                    {tier.buildWaived ? (
                      <>
                        <div className="af-tier-price-main">
                          <span className="af-tier-price-strike">{tier.build}</span>
                          <span className="af-tier-price-num af-tier-price-free">FREE</span>
                        </div>
                        <div className="af-tier-offer-badge">Build fee waived for new customers</div>
                      </>
                    ) : (
                      <div className="af-tier-price-main">
                        <span className="af-tier-price-num">{tier.build}</span>
                      </div>
                    )}
                  </div>
                  <div className="af-tier-price-row">
                    <div className="af-tier-price-label">MONTHLY SUBSCRIPTION</div>
                    <div className="af-tier-price-main">
                      <span className="af-tier-price-num">{tier.monthly}</span>
                      <span className="af-tier-price-suffix">/ month</span>
                    </div>
                  </div>
                </div>
                <div className="af-tier-credits">
                  <div className="af-credit-block">
                    <div className="af-credit-label">AI CREDITS</div>
                    <div className="af-credit-value">{tier.aiCredits}</div>
                    <div className="af-credit-sub">{tier.aiSub}</div>
                  </div>
                  <div className="af-credit-block">
                    <div className="af-credit-label">SERVICE CREDITS</div>
                    <div className="af-credit-value">{tier.serviceCredits}</div>
                    <div className="af-credit-sub">{tier.serviceSub}</div>
                  </div>
                </div>
                <ul className="af-tier-features">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link
                  href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank"
                  className={`af-btn af-tier-btn${tier.ctaStyle === "outline" ? " af-btn-outline" : ""}`}
                  onClick={() => track("book_call_click", { location: `pricing_${tier.id}` })}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="af-pricing-note">
            OVERAGES BILLED AT COST · ROLL-OVER UP TO 30% OF UNUSED CREDITS · NO
            LONG-TERM CONTRACT REQUIRED
          </p>

          {/* CRO: reassurance strip removes the biggest objections to a custom
              build — "am I locked in?", "what's the catch on price?", and "will
              they go dark for months?". All three are factual statements (no
              financial guarantee). */}
          <div className="af-guarantee-row">
            <div className="af-guarantee">
              <div className="af-guarantee-title">No Lock-In</div>
              <div className="af-guarantee-text">Month-to-month after launch. You own the IP and your data. Cancel with 30 days&apos; notice.</div>
            </div>
            <div className="af-guarantee">
              <div className="af-guarantee-title">Fixed Quote, Fixed Timeline</div>
              <div className="af-guarantee-text">You get a firm price and delivery date within 48 hours of your discovery call. No surprise bills.</div>
            </div>
            <div className="af-guarantee">
              <div className="af-guarantee-title">Weekly Demos, No Black Box</div>
              <div className="af-guarantee-text">You see working demos every week during the build — most clients are live in 2–6 weeks, not months of silence.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCOPE & QUOTE FORM — low-friction lead capture ─────────────
          CRO: every other CTA books a Calendly call (high commitment). This
          gives the larger "interested but not ready to call" segment a way to
          convert. Posts to the existing /api/contact endpoint; fires a GA4 +
          Google Ads lead event on success. */}
      <section id="quote" className="af-section af-section--soft">
        <div className="af-container">
          <div className="af-quote-grid">
            <div className="af-quote-intro">
              <div className="af-section-label">GET STARTED · NO CALL REQUIRED</div>
              <h2 className="af-h2">Tell us what you want to build.</h2>
              <p className="af-section-sub" style={{ marginBottom: "28px" }}>
                Send a few lines about your idea and we&apos;ll reply with a free scope and a
                fixed quote — usually within one business day. No obligation, no sales pressure.
              </p>
              <ul className="af-pillar-list af-quote-perks">
                <li>Free custom build for new customers</li>
                <li>A senior engineer reads every request</li>
                <li>Reply within one business day</li>
              </ul>
              <p className="af-quote-or">
                Prefer to talk now?{" "}
                <Link
                  href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
                  target="_blank"
                  onClick={() => track("book_call_click", { location: "quote_section" })}
                >
                  Book a 30-minute call →
                </Link>
              </p>
            </div>

            {sent ? (
              <div className="af-quote-card af-quote-success">
                <div className="af-quote-success-mark">✓</div>
                <h3>Request received.</h3>
                <p>
                  Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — we&apos;ll reply to{" "}
                  <strong>{form.email}</strong> with your free scope &amp; quote shortly.
                </p>
              </div>
            ) : (
              <form className="af-quote-card" onSubmit={handleQuoteSubmit} noValidate>
                <div className="af-field">
                  <label htmlFor="q-name">Name</label>
                  <input id="q-name" name="name" type="text" value={form.name} onChange={onField("name")} placeholder="Your name" autoComplete="name" />
                </div>
                <div className="af-field">
                  <label htmlFor="q-email">Work email</label>
                  <input id="q-email" name="email" type="email" value={form.email} onChange={onField("email")} placeholder="you@company.com" autoComplete="email" />
                </div>
                <div className="af-field">
                  <label htmlFor="q-company">Company <span className="af-optional">(optional)</span></label>
                  <input id="q-company" name="company" type="text" value={form.company} onChange={onField("company")} placeholder="Company name" autoComplete="organization" />
                </div>
                <div className="af-field">
                  <label htmlFor="q-message">What do you want to build?</label>
                  <textarea id="q-message" name="message" rows={4} value={form.message} onChange={onField("message")} placeholder="e.g. an AI assistant that drafts quotes from our product catalog and emails them to customers." />
                </div>
                <button type="submit" className="af-btn af-btn-lg af-quote-submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Get my free scope & quote →"}
                </button>
                <p className="af-quote-fine">We&apos;ll only use this to reply about your project. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" className="af-section">
        <div className="af-container">
          <div className="af-section-label">COMMON QUESTIONS</div>
          <h2 className="af-h2">
            You Probably <span className="af-accent">Want to Know.</span>
          </h2>
          <div className="af-faq-grid">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`af-faq-item${openFaq === i ? " af-faq-item--open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="af-faq-q">
                  <div className="af-faq-q-text">{faq.q}</div>
                  <div className="af-faq-toggle">{openFaq === i ? "−" : "+"}</div>
                </div>
                <div
                  className="af-faq-a"
                  style={{
                    maxHeight: openFaq === i ? "400px" : "0",
                    marginTop: openFaq === i ? "16px" : "0",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="af-cta-section">
        <div className="af-container af-cta-inner">
          <h2 className="af-h2 af-h2--white">
            Stop Evaluating AI Tools.{" "}
            <span className="af-accent-light">Start Shipping AI.</span>
          </h2>
          <p className="af-cta-sub">
            Book a 30-minute discovery call. We&apos;ll map your highest-leverage AI
            opportunity and give you a fixed quote within 48 hours. No deck, no upsell.{" "}
            <strong>New customers: we build your custom AI app free — you only pay the monthly subscription.</strong>
          </p>
          <div className="af-cta-buttons">
            <Link href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai" target="_blank" className="af-btn af-btn-lg af-btn-white" onClick={() => track("book_call_click", { location: "final_cta" })}>
              Claim Your Spot — Book a Free Call
            </Link>
          </div>
          <p style={{ marginTop: "20px" }}>
            <Link href="/ai-app-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See custom AI app development →</Link>
            {" · "}
            <Link href="/custom-software-development" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>Back to custom software &amp; platforms →</Link>
            {" · "}
            <Link href="/savings-calculator" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "underline" }}>See what per-seat software is costing you →</Link>
          </p>
        </div>
      </section>

      {/* ── SCOPED STYLES ────────────────────────────────────────────── */}
      <style>{`
        .af-page {
          --af-primary:      #0F2D52;
          --af-primary-dark: #0A1F3D;
          --af-accent:       #1E88E5;
          --af-accent-light: #42A5F5;
          --af-teal:         #00BFA6;
          --af-bg:           #FFFFFF;
          --af-bg-soft:      #F5F8FB;
          --af-bg-section:   #EFF3F8;
          --af-text:         #1A2230;
          --af-text-dim:     #5C6B80;
          --af-text-light:   #8A95A8;
          --af-border:       #E3E9F0;
          --af-border-dark:  #1E3D66;
          --af-radius:       10px;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif;
          color: var(--af-text);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        /* LAYOUT */
        .af-container { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
        .af-section { padding: 90px 0; background: var(--af-bg); }
        .af-section--soft { background: var(--af-bg-soft); }
        .af-section--bg { background: var(--af-bg-section); }

        /* TYPOGRAPHY */
        .af-section-label { font-size: 13px; font-weight: 700; color: var(--af-accent); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 16px; }
        .af-section-label--light { color: var(--af-accent-light); }
        .af-h2 { font-size: clamp(32px, 4vw, 46px); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: var(--af-primary); margin-bottom: 20px; }
        .af-h2--white { color: white; }
        .af-accent { color: var(--af-accent); }
        .af-accent-light { color: var(--af-accent-light); }
        .af-section-sub { font-size: 18px; color: var(--af-text-dim); max-width: 720px; line-height: 1.6; margin-bottom: 56px; }
        .af-section-sub--light { color: rgba(255,255,255,0.8); }

        /* BUTTONS */
        .af-btn { display: inline-block; padding: 13px 26px; background: var(--af-accent); color: white; border: none; border-radius: var(--af-radius); font-weight: 600; font-size: 15px; text-decoration: none; cursor: pointer; transition: all 0.2s; }
        .af-btn:hover { background: var(--af-primary); transform: translateY(-1px); box-shadow: 0 8px 20px rgba(30,136,229,0.25); }
        .af-btn-lg { padding: 16px 32px; font-size: 16px; }
        .af-btn-white { background: white; color: var(--af-primary); }
        .af-btn-white:hover { background: var(--af-accent); color: white; }
        .af-btn-outline { background: transparent; color: var(--af-primary); border: 2px solid var(--af-primary); }
        .af-btn-outline:hover { background: var(--af-primary); color: white; }
        .af-btn-outline-white { background: transparent; color: white; border: 2px solid white; }
        .af-btn-outline-white:hover { background: white; color: var(--af-primary); }

        /* HERO */
        .af-hero { background: linear-gradient(135deg, var(--af-primary) 0%, var(--af-primary-dark) 100%); color: white; padding: 200px 0 100px; position: relative; overflow: hidden; }
        .af-hero::before { content: ''; position: absolute; top: -200px; right: -200px; width: 600px; height: 600px; border-radius: 50%; background: radial-gradient(circle, rgba(30,136,229,0.2) 0%, transparent 70%); pointer-events: none; }
        .af-hero::after { content: ''; position: absolute; bottom: -100px; left: -100px; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(0,191,166,0.15) 0%, transparent 70%); pointer-events: none; }
        .af-hero-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 64px; align-items: center; position: relative; z-index: 1; }
        .af-hero-pill { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px; background: rgba(30,136,229,0.15); border: 1px solid rgba(30,136,229,0.4); border-radius: 100px; font-size: 13px; font-weight: 500; color: var(--af-accent-light); margin-bottom: 24px; }
        .af-hero-pill::before { content: ''; width: 8px; height: 8px; background: var(--af-accent-light); border-radius: 50%; box-shadow: 0 0 10px var(--af-accent-light); }
        .af-h1 { font-size: clamp(40px, 5vw, 60px); font-weight: 700; line-height: 1.05; letter-spacing: -0.03em; margin-bottom: 24px; color: white; }
        .af-hero-sub { font-size: 19px; color: rgba(255,255,255,0.85); margin-bottom: 36px; line-height: 1.55; max-width: 560px; }
        .af-hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
        .af-hero-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); border-radius: 16px; padding: 36px; backdrop-filter: blur(10px); }
        .af-hero-card-title { font-size: 14px; font-weight: 600; color: var(--af-accent-light); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; }
        .af-hero-card-stat { display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .af-hero-card-stat:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .af-hero-card-num { font-size: 44px; font-weight: 800; color: white; line-height: 1; letter-spacing: -0.02em; }
        .af-hero-card-num span { color: var(--af-accent-light); }
        .af-hero-card-label { color: rgba(255,255,255,0.75); font-size: 14px; line-height: 1.4; }

        /* PROBLEM */
        .af-problem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .af-problem-card { background: white; border: 1px solid var(--af-border); border-radius: var(--af-radius); padding: 36px 32px; position: relative; overflow: hidden; transition: all 0.3s; }
        .af-problem-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--af-accent); transition: width 0.3s; }
        .af-problem-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px rgba(15,45,82,0.08); }
        .af-problem-card:hover::before { width: 8px; }
        .af-problem-num { font-size: 56px; font-weight: 800; color: var(--af-primary); line-height: 1; letter-spacing: -0.03em; margin-bottom: 16px; }
        .af-problem-card-title { font-size: 20px; font-weight: 700; margin-bottom: 10px; color: var(--af-primary); }
        .af-problem-card-desc { color: var(--af-text-dim); font-size: 15px; }
        .af-problem-source { display: block; color: var(--af-text-light); margin-top: 6px; font-size: 12px; }

        /* PILLARS */
        .af-pillar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 48px; }
        .af-pillar-card { padding: 40px 32px; background: white; border: 1px solid var(--af-border); border-radius: 16px; transition: all 0.3s; }
        .af-pillar-card:hover { border-color: var(--af-accent); transform: translateY(-4px); box-shadow: 0 16px 32px rgba(15,45,82,0.08); }
        .af-pillar-icon { width: 56px; height: 56px; background: linear-gradient(135deg, var(--af-accent) 0%, var(--af-accent-light) 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 24px; }
        .af-pillar-title { font-size: 22px; font-weight: 700; color: var(--af-primary); margin-bottom: 12px; }
        .af-pillar-desc { color: var(--af-text-dim); font-size: 15px; margin-bottom: 20px; }
        .af-pillar-list { list-style: none; padding: 0; }
        .af-pillar-list li { color: var(--af-text); font-size: 14px; padding: 6px 0 6px 24px; position: relative; }
        .af-pillar-list li::before { content: '✓'; position: absolute; left: 0; color: var(--af-accent); font-weight: 700; }

        /* PRICING */
        .af-tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 48px; }
        .af-tier { background: white; border: 1px solid var(--af-border); border-radius: 16px; padding: 40px 32px; display: flex; flex-direction: column; transition: all 0.3s; position: relative; }
        .af-tier:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(15,45,82,0.1); }
        .af-tier--featured { border: 2px solid var(--af-accent); box-shadow: 0 20px 40px rgba(30,136,229,0.15); transform: scale(1.02); }
        .af-tier--featured::before { content: 'MOST POPULAR'; position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--af-accent); color: white; font-size: 11px; font-weight: 700; padding: 6px 16px; letter-spacing: 0.1em; border-radius: 100px; }
        .af-tier-name { font-size: 13px; font-weight: 700; color: var(--af-accent); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; }
        .af-tier-title { font-size: 32px; font-weight: 800; color: var(--af-primary); margin-bottom: 10px; letter-spacing: -0.02em; }
        .af-tier-for { color: var(--af-text-dim); font-size: 14px; margin-bottom: 28px; line-height: 1.5; padding-bottom: 24px; border-bottom: 1px solid var(--af-border); }
        .af-tier-prices { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
        .af-tier-price-row { display: flex; flex-direction: column; }
        .af-tier-price-label { font-size: 11px; color: var(--af-text-light); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 600; margin-bottom: 4px; }
        .af-tier-price-main { display: flex; align-items: baseline; gap: 6px; }
        .af-tier-price-num { font-size: 36px; font-weight: 800; color: var(--af-primary); letter-spacing: -0.02em; line-height: 1; }
        .af-tier--featured .af-tier-price-num { color: var(--af-accent); }
        .af-tier-price-strike { font-size: 22px; font-weight: 700; color: var(--af-text-light); text-decoration: line-through; letter-spacing: -0.02em; }
        .af-tier-price-free { color: #0A8F7C !important; }
        .af-tier-price-suffix { font-size: 14px; color: var(--af-text-dim); }
        .af-tier-credits { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 20px; background: var(--af-bg-soft); border-radius: var(--af-radius); margin-bottom: 24px; }
        .af-credit-block { display: flex; flex-direction: column; }
        .af-credit-label { font-size: 10px; color: var(--af-text-light); font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
        .af-credit-value { font-size: 22px; font-weight: 800; color: var(--af-accent); letter-spacing: -0.02em; line-height: 1.1; }
        .af-credit-sub { font-size: 11px; color: var(--af-text-dim); }
        .af-tier-features { list-style: none; flex-grow: 1; margin-bottom: 28px; padding: 0; }
        .af-tier-features li { padding: 9px 0 9px 30px; font-size: 14px; color: var(--af-text); display: flex; align-items: flex-start; line-height: 1.4; position: relative; }
        .af-tier-features li::before { content: ''; position: absolute; left: 0; top: 12px; flex-shrink: 0; width: 18px; height: 18px; background: rgba(30,136,229,0.12) url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231E88E5' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E") center/11px no-repeat; border-radius: 50%; }
        .af-tier-btn { width: 100%; text-align: center; margin-top: auto; }
        .af-pricing-note { text-align: center; margin-top: 32px; color: var(--af-text-light); font-size: 13px; font-weight: 500; letter-spacing: 0.05em; }

        /* PROCESS */
        .af-process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 48px; }
        .af-process-card { background: white; border: 1px solid var(--af-border); border-radius: var(--af-radius); padding: 28px; transition: all 0.3s; }
        .af-process-card:hover { border-color: var(--af-accent); transform: translateY(-2px); }
        .af-process-week { font-size: 12px; color: var(--af-accent); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; }
        .af-process-num { font-size: 14px; font-weight: 700; color: var(--af-accent); letter-spacing: 0.1em; margin-bottom: 16px; }
        .af-process-title { font-size: 20px; font-weight: 700; color: var(--af-primary); margin-bottom: 12px; }
        .af-process-desc { color: var(--af-text-dim); font-size: 14px; }

        /* COMPARISON */
        .af-comparison-section { background: var(--af-primary); padding: 90px 0; }
        .af-cmp { margin-top: 48px; background: #fff; border-radius: 18px; box-shadow: 0 30px 60px rgba(0,0,0,0.28); overflow-x: auto; }
        .af-cmp-table { width: 100%; border-collapse: separate; border-spacing: 0; min-width: 720px; }
        .af-cmp-table th, .af-cmp-table td { padding: 22px 26px; text-align: left; vertical-align: middle; }
        .af-cmp-table thead th { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--af-text-light); border-bottom: 1px solid var(--af-border); white-space: nowrap; }
        .af-cmp-table thead th:first-child { color: var(--af-primary); }
        .af-cmp-table tbody td { border-bottom: 1px solid var(--af-border); font-size: 14.5px; color: var(--af-text-dim); }
        .af-cmp-table tbody tr:last-child td { border-bottom: none; }
        .af-cmp-table tbody tr:hover td { background: rgba(15,45,82,0.02); }
        .af-cmp-table tbody td.af-cmp-row-label { font-size: 15px; font-weight: 700; color: var(--af-primary); }
        .af-cell { display: inline-flex; align-items: center; gap: 9px; line-height: 1.35; }
        .af-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
        .af-cell--yes .af-dot { background: var(--af-teal); }
        .af-cell--partial .af-dot { background: #ED8936; }
        .af-cell--no .af-dot { background: #E2574C; }
        .af-col-ardn { background: linear-gradient(180deg, rgba(30,136,229,0.08), rgba(0,191,166,0.06)); }
        .af-cmp-table thead th.af-col-ardn { background: var(--af-accent); color: #fff; border-bottom: none; text-transform: none; letter-spacing: 0; }
        .af-col-ardn-badge { display: inline-block; font-size: 10px; font-weight: 800; letter-spacing: 0.12em; background: rgba(255,255,255,0.22); padding: 3px 9px; border-radius: 100px; margin-bottom: 7px; }
        .af-col-ardn-name { display: block; font-size: 15px; font-weight: 800; }
        .af-cmp-table tbody td.af-col-ardn .af-cell { font-weight: 700; color: var(--af-primary); }
        .af-cmp-table tbody tr:hover td.af-col-ardn { background: linear-gradient(180deg, rgba(30,136,229,0.13), rgba(0,191,166,0.10)); }
        .af-check { width: 18px; height: 18px; border-radius: 50%; background: var(--af-teal); color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; flex-shrink: 0; }

        /* TESTIMONIAL */
        .af-testimonial-box { background: white; border-radius: 16px; padding: 56px; display: grid; grid-template-columns: auto 1fr; gap: 40px; align-items: center; box-shadow: 0 8px 24px rgba(15,45,82,0.06); margin-top: 48px; }
        .af-testimonial-stat { text-align: center; border-right: 1px solid var(--af-border); padding-right: 40px; }
        .af-testimonial-num { font-size: 80px; font-weight: 800; color: var(--af-accent); line-height: 1; letter-spacing: -0.04em; margin-bottom: 8px; }
        .af-testimonial-stat-label { color: var(--af-text-dim); font-size: 14px; max-width: 200px; }
        .af-testimonial-quote { font-size: 22px; font-weight: 500; color: var(--af-primary); line-height: 1.5; margin-bottom: 24px; font-style: italic; }
        .af-testimonial-author { color: var(--af-text-dim); font-size: 14px; }
        .af-testimonial-author strong { color: var(--af-primary); display: block; font-style: normal; }

        /* FAQ */
        .af-faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
        .af-faq-item { background: white; border: 1px solid var(--af-border); border-radius: var(--af-radius); padding: 28px 32px; cursor: pointer; transition: all 0.2s; }
        .af-faq-item:hover, .af-faq-item--open { border-color: var(--af-accent); }
        .af-faq-q { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .af-faq-q-text { font-size: 17px; font-weight: 700; color: var(--af-primary); }
        .af-faq-toggle { color: var(--af-accent); font-size: 22px; font-weight: 700; flex-shrink: 0; line-height: 1; width: 24px; text-align: center; }
        .af-faq-a { overflow: hidden; max-height: 0; margin-top: 0; color: var(--af-text-dim); font-size: 14px; line-height: 1.6; transition: max-height 0.3s ease, margin-top 0.3s ease; }

        /* CTA */
        .af-cta-section { background: linear-gradient(135deg, var(--af-primary) 0%, var(--af-primary-dark) 100%); color: white; text-align: center; padding: 100px 0; position: relative; overflow: hidden; }
        .af-cta-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 20% 50%, rgba(30,136,229,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,191,166,0.15) 0%, transparent 50%); pointer-events: none; }
        .af-cta-inner { position: relative; z-index: 1; }
        .af-cta-sub { font-size: 19px; color: rgba(255,255,255,0.85); margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .af-cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        /* OFFER ANNOUNCEMENT RIBBON (inside hero) */
        .af-announce { display: inline-flex; align-items: center; gap: 14px; flex-wrap: wrap; background: linear-gradient(90deg, var(--af-teal) 0%, var(--af-accent) 100%); color: white; text-decoration: none; padding: 12px 22px; font-size: 14.5px; border-radius: 100px; margin-bottom: 32px; box-shadow: 0 8px 24px rgba(0,191,166,0.25); transition: filter 0.2s, transform 0.2s; }
        .af-announce:hover { filter: brightness(1.06); transform: translateY(-1px); }
        .af-announce-tag { background: rgba(255,255,255,0.22); border: 1px solid rgba(255,255,255,0.5); border-radius: 100px; padding: 2px 10px; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; }
        .af-announce-text strong { font-weight: 800; }
        .af-announce-cta { font-weight: 700; text-decoration: underline; text-underline-offset: 3px; white-space: nowrap; }

        /* HERO OFFER CHIP */
        .af-hero-offer { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 28px; padding: 11px 18px; background: rgba(0,191,166,0.14); border: 1px solid rgba(0,191,166,0.45); border-radius: 100px; color: white; font-size: 15px; }
        .af-hero-offer strong { color: var(--af-teal); font-weight: 800; }
        .af-hero-offer-icon { font-size: 17px; }

        /* HERO CARD OFFER ROW */
        .af-hero-card-offer { margin-top: 24px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,0.15); display: flex; align-items: center; gap: 14px; }
        .af-hero-card-offer-num { font-size: 30px; font-weight: 800; color: var(--af-teal); line-height: 1; letter-spacing: -0.02em; white-space: nowrap; }
        .af-hero-card-offer-label { color: rgba(255,255,255,0.78); font-size: 13px; line-height: 1.4; }

        /* PRICING OFFER BANNER */
        .af-offer-banner { display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; margin-top: 8px; margin-bottom: 16px; padding: 32px 40px; background: linear-gradient(135deg, var(--af-primary) 0%, var(--af-primary-dark) 100%); border-radius: 16px; position: relative; overflow: hidden; box-shadow: 0 20px 40px rgba(15,45,82,0.18); }
        .af-offer-banner::before { content: ''; position: absolute; top: -120px; right: -80px; width: 360px; height: 360px; border-radius: 50%; background: radial-gradient(circle, rgba(0,191,166,0.25) 0%, transparent 70%); pointer-events: none; }
        .af-offer-banner-main { position: relative; z-index: 1; max-width: 680px; }
        .af-offer-banner-tag { display: inline-block; background: rgba(0,191,166,0.2); border: 1px solid rgba(0,191,166,0.5); color: var(--af-teal); font-size: 11px; font-weight: 800; letter-spacing: 0.14em; padding: 4px 12px; border-radius: 100px; margin-bottom: 14px; }
        .af-offer-banner-title { font-size: clamp(24px, 3vw, 32px); font-weight: 800; color: white; line-height: 1.15; letter-spacing: -0.02em; margin-bottom: 10px; }
        .af-offer-banner-text { color: rgba(255,255,255,0.85); font-size: 15.5px; line-height: 1.55; }
        .af-offer-banner-text strong { color: white; font-weight: 700; }
        .af-offer-banner-btn { position: relative; z-index: 1; white-space: nowrap; flex-shrink: 0; }

        /* TIER OFFER BADGE */
        .af-tier-offer-badge { display: inline-block; margin-top: 8px; background: rgba(0,191,166,0.12); color: #0A8F7C; border: 1px solid rgba(0,191,166,0.35); border-radius: 6px; padding: 4px 10px; font-size: 12px; font-weight: 700; letter-spacing: 0.02em; }
        .af-tier--featured .af-tier-offer-badge { background: rgba(0,191,166,0.16); }

        /* GUARANTEE / RISK-REVERSAL ROW */
        .af-guarantee-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 36px; }
        .af-guarantee { background: white; border: 1px solid var(--af-border); border-left: 4px solid var(--af-teal); border-radius: var(--af-radius); padding: 24px 26px; }
        .af-guarantee-title { font-size: 16px; font-weight: 800; color: var(--af-primary); margin-bottom: 8px; }
        .af-guarantee-text { font-size: 14px; color: var(--af-text-dim); line-height: 1.55; }

        /* SCOPE & QUOTE FORM */
        .af-quote-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .af-quote-perks { margin-bottom: 24px; }
        .af-quote-or { font-size: 15px; color: var(--af-text-dim); }
        .af-quote-or a { color: var(--af-accent); font-weight: 600; text-decoration: none; }
        .af-quote-or a:hover { text-decoration: underline; }
        .af-quote-card { background: #fff; border: 1px solid var(--af-border); border-radius: 16px; padding: 32px; box-shadow: 0 16px 40px rgba(15,45,82,0.08); display: flex; flex-direction: column; gap: 18px; }
        .af-field { display: flex; flex-direction: column; gap: 7px; }
        .af-field label { font-size: 13px; font-weight: 700; color: var(--af-primary); }
        .af-optional { font-weight: 500; color: var(--af-text-light); }
        .af-field input, .af-field textarea { font: inherit; font-size: 15px; color: var(--af-text); background: var(--af-bg-soft); border: 1px solid var(--af-border); border-radius: 10px; padding: 12px 14px; outline: none; transition: border-color .15s, box-shadow .15s; width: 100%; resize: vertical; }
        .af-field input:focus, .af-field textarea:focus { border-color: var(--af-accent); box-shadow: 0 0 0 3px rgba(30,136,229,0.15); background: #fff; }
        .af-field input::placeholder, .af-field textarea::placeholder { color: var(--af-text-light); }
        .af-quote-submit { width: 100%; text-align: center; margin-top: 4px; }
        .af-quote-submit:disabled { opacity: .6; cursor: not-allowed; }
        .af-quote-fine { font-size: 12px; color: var(--af-text-light); text-align: center; margin: 0; }
        .af-quote-success { align-items: center; text-align: center; justify-content: center; min-height: 300px; }
        .af-quote-success-mark { width: 56px; height: 56px; border-radius: 50%; background: rgba(0,191,166,0.15); color: var(--af-teal); display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 800; margin: 0 auto 8px; }
        .af-quote-success h3 { font-size: 22px; font-weight: 800; color: var(--af-primary); margin: 0; }
        .af-quote-success p { color: var(--af-text-dim); font-size: 15px; margin: 0; max-width: 360px; }

        /* CASE STUDIES PROOF */
        .af-casestudies { margin-top: 36px; padding-top: 28px; border-top: 1px solid var(--af-border); }
        .af-cs-label { display: block; font-size: 14px; font-weight: 700; color: var(--af-primary); margin-bottom: 14px; }
        .af-cs-list { list-style: none; padding: 0; margin: 0 0 16px; display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        .af-cs-list a { display: block; background: #fff; border: 1px solid var(--af-border); border-radius: 10px; padding: 14px 16px; font-size: 14px; font-weight: 600; color: var(--af-primary); text-decoration: none; transition: border-color .15s, transform .15s; }
        .af-cs-list a:hover { border-color: var(--af-accent); transform: translateY(-2px); color: var(--af-accent); }
        .af-cs-all { font-size: 14px; font-weight: 700; color: var(--af-accent); text-decoration: none; }
        .af-cs-all:hover { text-decoration: underline; }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .af-quote-grid { grid-template-columns: 1fr; gap: 32px; }
          .af-cs-list { grid-template-columns: 1fr; }
          .af-hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .af-problem-grid, .af-pillar-grid, .af-tier-grid, .af-faq-grid { grid-template-columns: 1fr; }
          .af-process-grid { grid-template-columns: 1fr 1fr; }
          .af-tier--featured { transform: none; }
          .af-testimonial-box { grid-template-columns: 1fr; padding: 32px; }
          .af-testimonial-stat { border-right: none; border-bottom: 1px solid var(--af-border); padding: 0 0 32px 0; }
          .af-testimonial-num { font-size: 56px; }
          .af-tier-credits { grid-template-columns: 1fr; }
          .af-offer-banner { padding: 28px 28px; }
          .af-guarantee-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .af-section { padding: 56px 0; }
          .af-hero { padding: 100px 0 64px; }
          .af-container { padding: 0 20px; }
          .af-process-grid { grid-template-columns: 1fr; }
          .af-comparison-section { padding: 56px 0; }
          .af-cta-section { padding: 56px 0; }
          .af-announce { font-size: 13px; padding: 10px 16px; gap: 8px; }
          .af-offer-banner-btn { width: 100%; text-align: center; }
        }
      `}</style>
    </div>
  );
}
