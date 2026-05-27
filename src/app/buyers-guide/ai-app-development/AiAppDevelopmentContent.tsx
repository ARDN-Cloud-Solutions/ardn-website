"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TOC = [
  { href: "#why-now",      label: "1. Why AI Now" },
  { href: "#failure-rate", label: "2. Why 80% of Projects Fail" },
  { href: "#cost",         label: "3. How Much Does It Cost?" },
  { href: "#timeline",     label: "4. How Long Does It Take?" },
  { href: "#build-vs-buy", label: "5. Build vs Buy vs Outsource" },
  { href: "#use-cases",    label: "6. The Best Use Cases" },
  { href: "#pitfalls",     label: "7. Common Pitfalls" },
  { href: "#vendor",       label: "8. How to Choose a Vendor" },
  { href: "#roi",          label: "9. Measuring ROI" },
  { href: "#next-steps",   label: "10. Next Steps" },
];

export default function AiAppDevelopmentContent() {
  const [active, setActive] = useState("");

  useEffect(() => {
    function update() {
      const sections = document.querySelectorAll<HTMLElement>(".aad-content h2[id]");
      let current = "";
      sections.forEach((s) => {
        if (s.getBoundingClientRect().top < 200) current = s.id;
      });
      setActive(current);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="aad-page">

      {/* BREADCRUMBS */}
      <div className="aad-breadcrumbs">
        <div className="aad-container">
          <Link href="/">Home</Link>
          <span className="aad-sep">›</span>
          <Link href="/buyers-guide">Buyer&apos;s Guides</Link>
          <span className="aad-sep">›</span>
          <span>AI App Development for Business</span>
        </div>
      </div>

      {/* HERO */}
      <section className="aad-hero">
        <div className="aad-container">
          <div className="aad-guide-tag">BUYER&apos;S GUIDE · UPDATED MAY 2026</div>
          <h1>
            AI App Development for Business:{" "}
            <span className="aad-accent">The Complete 2026 Buyer&apos;s Guide</span>
          </h1>
          <p>
            Everything decision-makers need to know about building, buying, and operating AI
            applications in 2026 — costs, timelines, vendor selection, common pitfalls, and
            the framework for choosing the right path for your business.
          </p>
          <div className="aad-guide-meta">
            <span>15-minute read</span>
            <span>Updated May 16, 2026</span>
            <span>By Ardn Cloud Solutions</span>
          </div>
        </div>
      </section>

      {/* LAYOUT */}
      <div className="aad-container">
        <div className="aad-layout">

          {/* TOC */}
          <aside className="aad-toc">
            <h3>On This Page</h3>
            <ul>
              {TOC.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={active === item.href.slice(1) ? "aad-toc-active" : ""}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* ARTICLE */}
          <article className="aad-content">

            <h2 id="why-now">1. Why AI, and Why Now?</h2>
            <p>If you run a business in 2026, you have already been asked some version of this question by your board, your team, or yourself: <strong>what&apos;s our AI strategy?</strong></p>
            <p>The pressure is real. Worldwide spending on AI is forecast to total $2.52 trillion in 2026 — a 44% year-over-year increase, according to Gartner. Your competitors are buying tools, hiring engineers, and announcing AI initiatives. And yet, only 12% of CEOs say AI has actually delivered both cost and revenue benefits, according to PwC.</p>
            <p>That gap — between AI ambition and AI execution — is the single biggest opportunity in business technology today. The companies that figure out how to ship working AI applications will pull ahead. The ones that get stuck in evaluation, pilot purgatory, or failed deployments will fall behind.</p>
            <p>This guide is for the second group. It&apos;s a practical, end-to-end framework for evaluating AI app development for your business, whether you&apos;re a 10-person company or a 10,000-person enterprise.</p>

            <h2 id="failure-rate">2. Why 80% of AI Projects Fail</h2>
            <p>Before we talk about how to succeed with AI, you have to understand why most companies fail. According to RAND Corporation research, more than 80% of AI projects fail — double the failure rate of traditional IT projects. The reasons are not what most leaders assume.</p>

            <div className="aad-stat-grid">
              {[
                { num: "80%", label: "of AI projects fail (RAND)" },
                { num: "88%", label: "of pilots never reach production (CIO)" },
                { num: "42%", label: "of companies scrapped their AI initiatives in 2025 (S&P)" },
              ].map((s) => (
                <div key={s.num} className="aad-stat-mini">
                  <div className="aad-stat-num">{s.num}</div>
                  <div className="aad-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <h3>The Top 5 Reasons AI Projects Fail</h3>
            <ol>
              <li><strong>No clear business problem.</strong> Teams start with &ldquo;we need to use AI&rdquo; instead of &ldquo;we need to solve X.&rdquo; The result is a tool looking for a problem.</li>
              <li><strong>Poor data foundation.</strong> 57% of organizations say their data isn&apos;t &ldquo;AI-ready&rdquo; (Gartner). Fragmented, inconsistent, or low-quality data poisons every AI output.</li>
              <li><strong>Pilot purgatory.</strong> POCs get built in sandboxes that never get integrated into production. 88% of pilots die there.</li>
              <li><strong>No ongoing operating model.</strong> An AI app is not a one-time build — it needs continuous tuning, model updates, and feature work. Most teams budget for the build and ignore everything that comes after.</li>
              <li><strong>Wrong talent model.</strong> Senior AI engineers cost $250K+ per role and are in short supply. Most companies cannot hire fast enough to keep up.</li>
            </ol>

            <div className="aad-callout aad-callout-warning">
              <div className="aad-callout-tag">Key insight</div>
              <p>The technology is rarely the reason AI projects fail. The execution model is. When you evaluate AI vendors and approaches, focus more on <em>how</em> the project will be run than <em>what</em> will be built.</p>
            </div>

            <h2 id="cost">3. How Much Does It Cost to Build an AI App?</h2>
            <p>This is the question we hear most. The honest answer: it depends on three things — <strong>complexity, integrations, and operating model.</strong></p>
            <p>Here are the realistic 2026 market ranges for AI app development, based on data from RAND, Gartner, S&P Global, and dozens of vendor pricing pages we&apos;ve reviewed:</p>

            <div className="aad-cost-table">
              <table>
                <thead>
                  <tr>
                    <th>Business Size</th>
                    <th>One-Time Build</th>
                    <th>Monthly Operation</th>
                    <th>Total Year 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Small Business (1–25 employees)</td>
                    <td>$7,500 – $25,000</td>
                    <td>$500 – $5,000</td>
                    <td>$13,500 – $85,000</td>
                  </tr>
                  <tr>
                    <td>Mid-Market (25–250 employees)</td>
                    <td>$25,000 – $120,000</td>
                    <td>$2,500 – $15,000</td>
                    <td>$55,000 – $300,000</td>
                  </tr>
                  <tr>
                    <td>Enterprise (250+ employees)</td>
                    <td>$75,000 – $500,000+</td>
                    <td>$10,000 – $30,000+</td>
                    <td>$195,000 – $860,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>What Drives Cost Up (or Down)</h3>
            <ul>
              <li><strong>Integrations.</strong> Each system your AI app needs to talk to (CRM, ERP, data warehouse, etc.) adds 1–3 weeks of work.</li>
              <li><strong>Compliance.</strong> SOC 2, HIPAA, GDPR, EU AI Act — these add audit trails, data residency, and review cycles. Budget 30–50% more.</li>
              <li><strong>Data readiness.</strong> If your data is messy, expect 20–30% of the build budget to go to data prep before the AI even gets built.</li>
              <li><strong>Model choice.</strong> Off-the-shelf APIs (Claude, GPT, Gemini) are 40–60% cheaper than custom-trained models. For most business apps, off-the-shelf is the right call.</li>
              <li><strong>Operating model.</strong> Build-only is cheap upfront but expensive when it breaks. Build-and-run is more predictable but higher monthly cost.</li>
            </ul>

            <div className="aad-callout">
              <div className="aad-callout-tag">Hidden cost warning</div>
              <p>Most AI app proposals leave out three real costs: <strong>API token usage</strong> (can run $200–$5,000/month or more), <strong>ongoing model updates</strong> (15–25% of build cost per year), and <strong>integration maintenance</strong> when your other systems change. Always ask vendors for a Total Cost of Ownership (TCO) number, not just a build quote.</p>
            </div>

            <div className="aad-inline-cta">
              <h3>Want a real quote for your project?</h3>
              <p>Ardn AI Forge gives you a fixed quote within 48 hours of a 30-minute discovery call. No deck, no upsell — just clear numbers you can take to your CFO.</p>
              <Link href="/contact-us" className="aad-btn">Book a Discovery Call</Link>
            </div>

            <h2 id="timeline">4. How Long Does It Take to Build an AI App?</h2>
            <p>Time-to-production is one of the biggest predictors of whether an AI project succeeds. Long timelines kill momentum, blow budgets, and let competitors catch up. Here&apos;s what realistic timelines look like in 2026:</p>
            <ul>
              <li><strong>2–6 weeks:</strong> Simple AI apps — chatbots, document processors, single-workflow agents, content generation tools.</li>
              <li><strong>6–12 weeks:</strong> Mid-complexity apps with multiple integrations, role-based access, and user-facing dashboards.</li>
              <li><strong>3–6 months:</strong> Enterprise-grade systems with compliance requirements, complex data pipelines, or multi-agent orchestration.</li>
              <li><strong>6–12 months:</strong> Custom-trained models, regulated industries with full audit trails, or company-wide AI platforms.</li>
            </ul>
            <p>If a vendor quotes you longer than this, push back. The AI tooling has matured to the point where most business apps can ship in weeks, not months. Long timelines usually signal either an over-scoped project or an inefficient team.</p>

            <h2 id="build-vs-buy">5. Build vs Buy vs Outsource: Which Is Right for You?</h2>
            <p>This is the most important strategic decision in AI adoption. Three real options exist, each with very different cost and risk profiles:</p>
            <h3>Option 1: DIY with Off-the-Shelf Tools (ChatGPT, Copilot, Notion AI)</h3>
            <p><strong>Best for:</strong> General productivity, content generation, email drafting, knowledge lookup.</p>
            <p><strong>Cost:</strong> $20–$60 per user per month.</p>
            <p><strong>Limitations:</strong> Cannot integrate deeply with your workflow. Doesn&apos;t know your data. Each employee uses it differently. No accountability. Useful as a productivity layer, but not a real business application.</p>
            <h3>Option 2: Build In-House</h3>
            <p><strong>Best for:</strong> Large enterprises with existing engineering teams and strategic AI as a core competitive advantage.</p>
            <p><strong>Cost:</strong> $250K+ per senior AI engineer, $1M+ for a small team. 6–12 months to hire and onboard.</p>
            <p><strong>Limitations:</strong> Hard to attract and retain AI talent. Tooling changes faster than internal teams can adapt. High burn rate before any production deployment.</p>
            <h3>Option 3: Outsource to an Agency</h3>
            <p><strong>Best for:</strong> Project-based work with a clear, finite scope.</p>
            <p><strong>Cost:</strong> $30K–$500K+ for the build. Often ends in a fragile app you can&apos;t maintain.</p>
            <p><strong>Limitations:</strong> Agencies disappear after delivery. Re-engagement for every change. No ongoing operation. This is where most failed AI projects come from.</p>
            <h3>Option 4: Managed AI Service (Build + Run)</h3>
            <p><strong>Best for:</strong> Most businesses from 5 to 5,000 employees that want production AI without building an internal team.</p>
            <p><strong>Cost:</strong> Build fee + monthly subscription that includes hosting, support, AI compute, and ongoing development.</p>
            <p><strong>Limitations:</strong> Slightly more expensive than an agency on Year 1; significantly cheaper than in-house over 3+ years. You don&apos;t own the engineers, but you get an entire team&apos;s worth of work for less than one full-time hire.</p>

            <div className="aad-callout aad-callout-success">
              <div className="aad-callout-tag">Recommendation</div>
              <p>For most businesses under 1,000 employees, a managed AI service is the right answer for the first 1–2 years. It removes the talent gap, eliminates POC purgatory, and creates a single predictable line item in your budget. Once you have proven AI value, you can decide whether to bring some capability in-house.</p>
            </div>

            <h2 id="use-cases">6. The Highest-Leverage Use Cases for Business AI</h2>
            <p>Not every workflow benefits equally from AI. The use cases that consistently deliver ROI in 2026 share three characteristics: <strong>high volume, low complexity per task, and clear right-or-wrong outcomes.</strong></p>
            <h3>Top AI Use Cases by Function</h3>
            <ul>
              <li><strong>Customer Service:</strong> Tier-1 ticket resolution, FAQ automation, ticket routing, post-call summarization.</li>
              <li><strong>Sales:</strong> Lead qualification, email follow-up generation, meeting prep briefings, deal health scoring.</li>
              <li><strong>Marketing:</strong> Content generation at scale, ad copy variants, personalization, campaign analysis.</li>
              <li><strong>Operations:</strong> Invoice processing, contract review, document extraction, scheduling automation.</li>
              <li><strong>HR:</strong> Resume screening, candidate matching, onboarding chatbots, policy Q&amp;A.</li>
              <li><strong>Finance:</strong> Expense categorization, anomaly detection, financial report drafting, forecasting.</li>
              <li><strong>Engineering:</strong> Code review, documentation generation, test case writing, bug triage.</li>
            </ul>
            <p>If you&apos;re not sure where to start, look for workflows where your team currently does the same thing many times per day. Those are the ones AI can dramatically accelerate.</p>

            <h2 id="pitfalls">7. The 7 Most Common Pitfalls (And How to Avoid Them)</h2>
            <ol>
              <li><strong>Starting with the technology, not the problem.</strong> Begin with a clear business outcome — cost reduction, revenue lift, time saved. The technology should be a consequence of the goal, not the starting point.</li>
              <li><strong>Trying to do too much at once.</strong> A chatbot handling 5 core workflows costs 60% less than one trying to handle 20, while capturing 80% of the value. Start narrow.</li>
              <li><strong>Skipping the discovery phase.</strong> Teams that rush to development without a structured discovery produce 2.5x more rework. A $5K–$15K discovery is the cheapest insurance policy you&apos;ll buy.</li>
              <li><strong>Ignoring ongoing costs.</strong> Build cost is rarely more than 40% of Year 1 spend. Budget for API tokens, hosting, model updates, and iteration.</li>
              <li><strong>Choosing a vendor with no operational accountability.</strong> An agency that ships and disappears will leave you with a broken app in 12 months. Choose a partner who runs what they build.</li>
              <li><strong>Not measuring anything.</strong> Define metrics on Day 1 — tickets resolved per hour, time saved per task, conversion lift, accuracy rate. Without metrics, you&apos;ll never know if AI worked.</li>
              <li><strong>Treating AI like traditional software.</strong> AI is probabilistic, not deterministic. Build in human-in-the-loop checkpoints for any task that requires high accuracy or compliance.</li>
            </ol>

            <h2 id="vendor">8. How to Choose an AI Vendor: 8 Questions to Ask</h2>
            <p>The AI agency landscape is crowded with new vendors of varying quality. Use these questions to separate the real partners from the pretenders:</p>
            <ol>
              <li><strong>Can you show me 3 production apps you&apos;ve built in the last 6 months?</strong> If they can&apos;t, they&apos;re learning on your project.</li>
              <li><strong>What happens after you deliver?</strong> If they say &ldquo;we hand it off to your team,&rdquo; walk away. You need an operating partner, not a delivery partner.</li>
              <li><strong>How do you handle AI token costs?</strong> The right answer is transparent metering and at-cost pass-through. Anyone marking up token costs is misaligned.</li>
              <li><strong>Will I own the IP and the data?</strong> The answer must be yes. If they want to retain rights to your data, walk away.</li>
              <li><strong>What&apos;s your approach when the underlying model changes?</strong> New models ship every 3–6 months. Your vendor must have a process for evaluating and upgrading.</li>
              <li><strong>Can I cancel or downgrade?</strong> Long lockups indicate a vendor who needs to trap clients. Healthy vendors offer flexible terms.</li>
              <li><strong>What&apos;s included in the monthly fee?</strong> Get a clear list. Watch for &ldquo;feature requests billed separately&rdquo; — that&apos;s where margins live.</li>
              <li><strong>Who exactly will work on my project?</strong> Senior team or junior team? Onshore or offshore? Real engineers or contractors? Pin this down before signing.</li>
            </ol>

            <div className="aad-inline-cta">
              <h3>Get all 8 answers in writing — in one call.</h3>
              <p>Ardn AI Forge is built specifically to pass every one of the questions above. We&apos;ll send you our written answers within 24 hours of your discovery call.</p>
              <Link href="/ai-forge" className="aad-btn">Learn About AI Forge</Link>
            </div>

            <h2 id="roi">9. How to Measure AI ROI</h2>
            <p>Only 25% of AI initiatives deliver expected ROI, according to IBM. The companies that succeed do one thing differently: <strong>they define ROI metrics before they build, not after.</strong></p>
            <h3>The Three ROI Categories</h3>
            <ul>
              <li><strong>Cost reduction:</strong> Hours saved × loaded labor rate. The most measurable category. AI that handles 70% of support tickets at a fraction of human cost has clear payback.</li>
              <li><strong>Revenue lift:</strong> Conversion improvements, upsell rates, faster sales cycles. Harder to attribute cleanly, but often the biggest impact.</li>
              <li><strong>Risk reduction:</strong> Compliance accuracy, error reduction, audit readiness. Hardest to quantify in dollars, but real.</li>
            </ul>
            <h3>The Right ROI Math</h3>
            <p>A common framework:</p>
            <ul>
              <li>Hours saved per week × loaded cost per hour × 52 = Annual savings</li>
              <li>Annual savings - Annual AI cost = Net Year 1 value</li>
              <li>If net Year 1 value is positive, the project is justified. If payback is under 12 months, it&apos;s a clear winner.</li>
            </ul>
            <p>Most successful AI deployments hit payback within 6–12 months. If a vendor can&apos;t model a clear payback for your specific use case before you sign, that&apos;s a red flag.</p>

            <h2 id="next-steps">10. Next Steps</h2>
            <p>If you&apos;re a decision-maker evaluating AI for your business in 2026, here&apos;s what we recommend doing this quarter:</p>
            <ol>
              <li><strong>Pick one workflow.</strong> Not five. Not ten. One specific, high-volume, repetitive workflow where AI could make an obvious dent.</li>
              <li><strong>Document the current state.</strong> Hours per week, cost per task, error rates, current tools. You need a baseline to measure against.</li>
              <li><strong>Book 2–3 discovery calls with vendors.</strong> Use the 8 questions above. Whichever vendor gives the clearest, most operationally accountable answers is your shortlist.</li>
              <li><strong>Start small.</strong> A single AI app that delivers measurable ROI in 90 days beats a 12-month enterprise transformation every time. Win one, then expand.</li>
              <li><strong>Plan for ongoing.</strong> Whatever you build will need iteration, model updates, and new features. Budget for the operating model, not just the build.</li>
            </ol>

            <div className="aad-callout aad-callout-success">
              <div className="aad-callout-tag">Ready to take the next step?</div>
              <p><strong>Ardn AI Forge</strong> is our managed AI service built specifically to solve everything covered in this guide. We build custom AI apps for your business in 2–6 weeks, then operate them as a monthly service — hosting, AI compute, support, and ongoing iteration all included. Three tiers for small, mid-market, and enterprise. <Link href="/ai-forge">See pricing and details →</Link></p>
            </div>

            <div className="aad-inline-cta">
              <h3>Stop evaluating AI. Start shipping it.</h3>
              <p>Book a 30-minute discovery call. We&apos;ll map your highest-leverage AI opportunity and give you a fixed quote within 48 hours.</p>
              <Link href="/contact-us" className="aad-btn">Book Your Free Discovery Call</Link>
            </div>

          </article>
        </div>
      </div>

      {/* SCOPED STYLES */}
      <style>{`
        .aad-page {
          --primary:      #0F2D52;
          --primary-dark: #0A1F3D;
          --accent:       #1E88E5;
          --accent-light: #42A5F5;
          --teal:         #00BFA6;
          --bg:           #FFFFFF;
          --bg-soft:      #F5F8FB;
          --text:         #1A2230;
          --text-dim:     #5C6B80;
          --text-light:   #8A95A8;
          --border:       #E3E9F0;
          --radius:       10px;
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
          color: var(--text);
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .aad-container { max-width: 1240px; margin: 0 auto; padding: 0 32px; }

        /* BREADCRUMBS */
        .aad-breadcrumbs { background: var(--bg-soft); padding: 16px 0; font-size: 14px; color: var(--text-dim); }
        .aad-breadcrumbs a { color: var(--accent); text-decoration: none; }
        .aad-breadcrumbs a:hover { text-decoration: underline; }
        .aad-sep { margin: 0 10px; color: var(--text-light); }

        /* HERO */
        .aad-hero {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 80px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .aad-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(30,136,229,0.25) 0%, transparent 60%);
          pointer-events: none;
        }
        .aad-hero .aad-container { position: relative; z-index: 1; }
        .aad-guide-tag {
          display: inline-block;
          padding: 6px 14px;
          background: rgba(30,136,229,0.2);
          border: 1px solid rgba(30,136,229,0.4);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-light);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .aad-hero h1 {
          font-weight: 700;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 auto 20px;
          max-width: 900px;
          color: white;
        }
        .aad-accent { color: var(--accent-light); }
        .aad-hero p {
          font-size: 19px;
          color: rgba(255,255,255,0.85);
          max-width: 720px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }
        .aad-guide-meta {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
          font-size: 14px;
          color: rgba(255,255,255,0.7);
        }
        .aad-guide-meta span { display: flex; align-items: center; gap: 8px; }
        .aad-guide-meta span::before { content: '•'; color: var(--accent-light); }
        .aad-guide-meta span:first-child::before { display: none; }

        /* LAYOUT */
        .aad-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 64px;
          padding: 80px 0;
          align-items: start;
        }

        /* TOC */
        .aad-toc {
          position: sticky;
          top: 110px;
          background: var(--bg-soft);
          padding: 28px;
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        .aad-toc h3 {
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .aad-toc ul { list-style: none; padding: 0; margin: 0; }
        .aad-toc li { margin-bottom: 10px; }
        .aad-toc a {
          color: var(--text);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          display: block;
          padding: 4px 0;
          transition: color 0.2s;
        }
        .aad-toc a:hover { color: var(--accent); }
        .aad-toc-active { color: var(--accent) !important; }

        /* CONTENT */
        .aad-content { max-width: 780px; }
        .aad-content h2 {
          font-weight: 700;
          font-size: 34px;
          line-height: 1.2;
          color: var(--primary);
          margin: 56px 0 20px;
          letter-spacing: -0.02em;
          scroll-margin-top: 120px;
        }
        .aad-content h2:first-child { margin-top: 0; }
        .aad-content h3 {
          font-weight: 700;
          font-size: 22px;
          line-height: 1.3;
          color: var(--primary);
          margin: 32px 0 14px;
          letter-spacing: -0.01em;
        }
        .aad-content p {
          color: var(--text);
          font-size: 17px;
          line-height: 1.75;
          margin-bottom: 18px;
        }
        .aad-content ul, .aad-content ol {
          margin: 0 0 24px 24px;
          color: var(--text);
          font-size: 17px;
          line-height: 1.75;
        }
        .aad-content li { margin-bottom: 10px; }
        .aad-content strong { color: var(--primary); font-weight: 700; }
        .aad-content a { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }
        .aad-content a:hover { color: var(--primary); }

        /* CALLOUT BOXES */
        .aad-callout {
          background: var(--bg-soft);
          border-left: 4px solid var(--accent);
          padding: 24px 28px;
          border-radius: 0 var(--radius) var(--radius) 0;
          margin: 28px 0;
        }
        .aad-callout-tag {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .aad-callout-warning { background: #FFF8E1; border-left-color: #FFB300; }
        .aad-callout-warning .aad-callout-tag { color: #F57C00; }
        .aad-callout-success { background: #E8F5E9; border-left-color: var(--teal); }
        .aad-callout-success .aad-callout-tag { color: var(--teal); }
        .aad-callout p { margin-bottom: 0; font-size: 15px; }

        /* COST TABLE */
        .aad-cost-table {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow-x: auto;
          margin: 24px 0;
        }
        .aad-cost-table table { width: 100%; border-collapse: collapse; font-size: 14px; min-width: 500px; }
        .aad-cost-table th, .aad-cost-table td { padding: 14px 18px; text-align: left; border-bottom: 1px solid var(--border); }
        .aad-cost-table thead th { background: var(--primary); color: white; font-weight: 700; font-size: 13px; }
        .aad-cost-table tbody td:first-child { font-weight: 600; color: var(--primary); }
        .aad-cost-table tbody tr:hover { background: var(--bg-soft); }
        .aad-cost-table tr:last-child td { border-bottom: none; }

        /* STAT GRID */
        .aad-stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
        .aad-stat-mini { background: var(--bg-soft); padding: 24px; border-radius: var(--radius); text-align: center; }
        .aad-stat-num { font-size: 36px; font-weight: 800; color: var(--accent); line-height: 1; margin-bottom: 6px; letter-spacing: -0.02em; }
        .aad-stat-label { font-size: 13px; color: var(--text-dim); }

        /* INLINE CTA */
        .aad-inline-cta {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          padding: 36px;
          border-radius: 16px;
          margin: 40px 0;
          position: relative;
          overflow: hidden;
        }
        .aad-inline-cta::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(30,136,229,0.3) 0%, transparent 70%);
          pointer-events: none;
        }
        .aad-inline-cta > * { position: relative; z-index: 1; }
        .aad-inline-cta h3 { color: white; font-size: 22px; font-weight: 700; margin-bottom: 10px; }
        .aad-inline-cta p { color: rgba(255,255,255,0.85); margin-bottom: 20px; font-size: 15px; }
        .aad-btn {
          display: inline-block;
          padding: 13px 26px;
          background: white;
          color: var(--primary);
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .aad-btn:hover { background: var(--accent-light); color: white; }

        /* RESPONSIVE */
        @media (max-width: 980px) {
          .aad-layout { grid-template-columns: 1fr; gap: 32px; }
          .aad-toc { position: static; }
          .aad-stat-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .aad-hero { padding: 56px 0; }
          .aad-container { padding: 0 20px; }
          .aad-layout { padding: 48px 0; }
          .aad-content h2 { font-size: 26px; }
          .aad-content h3 { font-size: 18px; }
          .aad-content p, .aad-content ul, .aad-content ol { font-size: 15px; }
        }
      `}</style>
    </div>
  );
}
