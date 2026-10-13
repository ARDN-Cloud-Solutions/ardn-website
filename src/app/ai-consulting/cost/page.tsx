import { Metadata } from "next";
import Link from "next/link";
import { ppSerif as serif } from "@/fonts";
import TrustBar from "@/components/common/TrustBar";
import TrackedCta from "@/components/product-page/TrackedCta";
import { themeVars } from "@/components/ai-consulting/AiConsultingPage";
import { CALL, SITE, THEME, TRUST } from "@/components/ai-consulting/shared";
import "@/components/product-page/product-page.css";
import "@/components/ai-consulting/ai-consulting.css";

// Buyer guide: "How much does an AI consultant cost?" Explains cost drivers
// and engagement types without quoting Ardn prices or market figures.
// Linked from /ai-consulting and the software cost comparisons topic hub.

const PATH = "/ai-consulting/cost";
const URL = `${SITE}${PATH}`;
const TITLE = "How Much Does AI Consulting Cost? What You Should Get | Ardn";
const H1 = "How much does AI consulting cost?";
const DESC =
  "What drives AI consulting and AI consultant cost, how assessments, pilots, builds and managed services differ, red flags to avoid and questions to ask before you hire.";
const PUBLISHED = "2026-10-12";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "how much does AI consulting cost",
    "AI consulting cost",
    "AI consultant cost",
    "how much does an AI consultant cost",
    "AI consulting pricing",
    "AI consulting rates",
    "cost of AI implementation",
    "hire an AI consultant",
  ],
  alternates: { canonical: URL, languages: { "en-US": URL, "x-default": URL } },
  openGraph: {
    title: "How much does AI consulting cost? (and what you should get for it)",
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [{ url: "/images/ardn-share.jpg", width: 1200, height: 630, alt: "How much does AI consulting cost? A buyer's guide by Ardn" }],
    locale: "en_US",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, site: "@ardn_cloud_sol", images: ["/images/ardn-share.jpg"] },
};

const FAQS = [
  {
    q: "How much does AI consulting cost?",
    a: "There is no single price, because an assessment, a pilot, a production build and an ongoing managed service are different purchases. The price is driven mostly by how many workflows are in scope, how ready your data is, how many systems must be connected, your security and compliance requirements, and who runs the AI after launch. Ask for a fixed quote against a written scope rather than an open-ended hourly estimate.",
  },
  {
    q: "Is it better to pay hourly or a fixed price for AI consulting?",
    a: "For most small and mid-size businesses, a fixed price for a clearly defined scope is safer: you know the cost before work starts and the consultant carries the risk of their own estimate. Hourly billing can make sense for open-ended advisory work, but it should come with a cap.",
  },
  {
    q: "What should an AI assessment include?",
    a: "A map of how the work gets done today, a ranked list of AI opportunities with the effort and payoff of each, the data and systems each one depends on, the risks, and a phased roadmap. It should end with a recommendation you can act on, not just a slide deck.",
  },
  {
    q: "What ongoing costs come with AI after it's built?",
    a: "Hosting, AI model usage, monitoring, security updates, model upgrades, support and improvements as your business changes. Ask who is responsible for each of these, and whether they're included in a single monthly fee or billed separately.",
  },
  {
    q: "Does Ardn publish its AI consulting prices?",
    a: "No. Every engagement is scoped to the business, so we give a fixed quote after a free 30-minute call. After launch, the service continues on a flat monthly fee that covers hosting, support and ongoing improvements.",
  },
];

const TOC = [
  ["drivers", "What drives the cost"],
  ["types", "The four types of AI engagement"],
  ["hidden", "Costs people forget"],
  ["red-flags", "Red flags"],
  ["questions", "Questions to ask before you hire"],
  ["ardn", "What Ardn includes"],
  ["faq", "FAQ"],
];

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${URL}#article`,
        headline: "How much does AI consulting cost? (and what you should get for it)",
        description: DESC,
        url: URL,
        mainEntityOfPage: URL,
        image: `${SITE}/images/ardn-share.jpg`,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        inLanguage: "en-US",
        author: { "@id": `${SITE}/#organization` },
        publisher: { "@id": `${SITE}/#organization` },
        about: { "@id": `${SITE}/ai-consulting#service` },
      },
      {
        "@type": "FAQPage",
        "@id": `${URL}#faq`,
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "AI Consulting", item: `${SITE}/ai-consulting` },
          { "@type": "ListItem", position: 3, name: "AI consulting cost", item: URL },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className={`ardn-page pp ${serif.variable}`} style={themeVars(THEME)}>
        <section className="pp-hero ac-hero-short">
          <div className="pp-hero-glow" aria-hidden="true" />
          <div className="pp-hero-grain" aria-hidden="true" />
          <div className="container">
            <div className="pp-hero-grid">
              <div className="pp-hero-copy">
                <h1 className="pp-h1">
                  <span className="pp-eyebrow">AI consulting · Buyer&rsquo;s guide</span>
                  <span className="pp-display">
                    {H1} <em>And what you should get for it.</em>
                  </span>
                </h1>
                <p className="pp-lede">
                  Whether you&rsquo;re pricing a project or comparing AI consultant cost across firms, the honest answer is
                  &ldquo;it depends&rdquo;, so this guide explains what it depends on: the cost drivers, the four kinds of AI
                  engagement, the costs people forget, and how to tell a good consultant from an expensive one.
                </p>
                <div className="pp-ctas">
                  <TrackedCta className="pp-btn pp-btn-gold" cta={{ label: "Get a fixed quote after a free call", href: CALL }} page="ai-consulting-cost" location="hero" />
                  <TrackedCta className="pp-btn pp-btn-light" cta={{ label: "AI consulting services", href: "/ai-consulting" }} page="ai-consulting-cost" location="hero-secondary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar signals={TRUST} />

        <section className="pp-section">
          <div className="container pp-narrow">
            <article className="ac-article">
              <nav className="ac-toc" aria-label="Contents">
                <b>In this guide</b>
                <ol>
                  {TOC.map(([id, label]) => (
                    <li key={id}>
                      <a href={`#${id}`}>{label}</a>
                    </li>
                  ))}
                </ol>
              </nav>

              <p style={{ marginTop: 32 }}>
                If you&rsquo;ve searched for what an AI consultant costs, you&rsquo;ve probably found numbers that range so widely they&rsquo;re
                useless. That&rsquo;s because &ldquo;AI consultant&rdquo; covers very different work: a two-week assessment, a pilot, a production
                system connected to your CRM, or a team that runs that system for years. Comparing them by price alone is like comparing the
                cost of an architect&rsquo;s sketch with the cost of the finished building.
              </p>
              <p>
                A better question is: <b>what am I buying, and what will I have when it&rsquo;s done?</b> The rest of this guide helps you answer
                that before you sign anything.
              </p>

              <h2 id="drivers">What drives AI consultant cost</h2>
              <p>Whatever the quote, these are the factors that move it most:</p>
              <ul>
                <li>
                  <b>Scope.</b> One workflow (say, invoice intake) costs far less than a program spanning sales, service and finance. Good
                  consultants push you to start narrow.
                </li>
                <li>
                  <b>Data readiness.</b> AI working on clean records in one system is cheaper than AI that first needs scattered spreadsheets,
                  inboxes and scanned files pulled together.
                </li>
                <li>
                  <b>Integrations.</b> Every system the AI must read from or write to (CRM, ERP, accounting, scheduling, document storage) adds
                  work, and older systems without good APIs add more.
                </li>
                <li>
                  <b>Accuracy and review requirements.</b> A draft a person always checks is simpler than an automation that acts on its own.
                  The higher the stakes, the more testing, review steps and audit trails are needed.
                </li>
                <li>
                  <b>Security and compliance.</b> Healthcare, insurance and financial data bring requirements like HIPAA, access controls and
                  retention rules that must be designed in from the start.
                </li>
                <li>
                  <b>Usage volume.</b> AI models are billed by usage. A tool that handles a hundred requests a month costs less to run than one
                  that handles a hundred thousand.
                </li>
                <li>
                  <b>Who runs it after launch.</b> The biggest hidden variable. Someone has to host, monitor, update and improve the AI. If
                  that&rsquo;s you, budget for the people; if it&rsquo;s the consultant, it should be in the price.
                </li>
                <li>
                  <b>Training and change.</b> AI nobody uses is the most expensive kind. Time to train staff and adjust processes belongs in the
                  plan.
                </li>
              </ul>

              <h2 id="types">The four types of AI engagement</h2>
              <p>Most AI consulting work falls into one of four types. Know which one you&rsquo;re being quoted for.</p>

              <h3>1. Assessment and roadmap</h3>
              <p>
                The consultant studies how your business works, identifies where AI would pay off, and produces a prioritized, phased plan. It
                is the cheapest stage and the one that saves the most money later, because it stops you building the wrong thing.{" "}
                <b>You should get:</b> a process map, a ranked list of opportunities with effort and payoff, the data and systems each depends
                on, risks, and a recommended first phase.
              </p>

              <h3>2. Pilot or proof of concept</h3>
              <p>
                A small, time-boxed build to prove one use case works on your real data. Useful, but pilots are where many AI projects stall.{" "}
                <b>You should get:</b> clear success criteria agreed up front, results measured against them, and a defined path to production if
                it works.
              </p>

              <h3>3. Production build</h3>
              <p>
                The real thing: AI connected to your systems, tested, secured and rolled out to your team. This is usually the largest single
                cost. <b>You should get:</b> a written scope, a fixed quote and timeline, regular demos, documentation, training, and clarity on
                who owns the code and data.
              </p>

              <h3>4. Managed service</h3>
              <p>
                Ongoing operation after launch: hosting, monitoring, model and security updates, support, and improvements as your business
                changes. Often billed monthly. <b>You should get:</b> a clear list of what&rsquo;s included, response times, regular reporting, and
                a way to leave with your data.
              </p>

              <div className="ac-callout">
                <p>
                  <b>Tip:</b> if a proposal doesn&rsquo;t say which of these four it covers, ask. A low quote for an assessment and a high quote for
                  a build aren&rsquo;t comparable, and a build quote with no plan for stage four isn&rsquo;t complete.
                </p>
              </div>

              <h2 id="hidden">Costs people forget</h2>
              <ul>
                <li>
                  <b>AI model usage.</b> Ongoing charges from the model provider, which grow with volume.
                </li>
                <li>
                  <b>Hosting and monitoring.</b> Somewhere for the software to run, and someone watching it.
                </li>
                <li>
                  <b>Model changes.</b> Models are updated and retired; prompts and integrations need maintenance when they are.
                </li>
                <li>
                  <b>Staff time.</b> Your people&rsquo;s time in workshops, testing and training.
                </li>
                <li>
                  <b>Licenses.</b> Some approaches add per-seat software licenses on top of the consulting fee.
                </li>
              </ul>

              <h2 id="red-flags">Red flags when hiring an AI consultant</h2>
              <ul>
                <li>
                  <b>Open-ended hourly billing with no cap</b> and no written scope.
                </li>
                <li>
                  <b>Guaranteed savings figures before they&rsquo;ve seen your workflow.</b> Nobody can promise a percentage without looking.
                </li>
                <li>
                  <b>A strategy deck as the only deliverable</b>, with no path to working software.
                </li>
                <li>
                  <b>No plan for after launch.</b> If nobody is responsible for running it, it will quietly stop working.
                </li>
                <li>
                  <b>Unclear ownership.</b> You should own your data, and know exactly what happens to the code if you part ways.
                </li>
                <li>
                  <b>One tool for every problem.</b> A consultant who recommends the same product regardless of your business may be reselling,
                  not advising.
                </li>
                <li>
                  <b>The senior people disappear after the sale</b> and the work is handed to someone you&rsquo;ve never met.
                </li>
              </ul>

              <h2 id="questions">Questions to ask before you hire</h2>
              <ol>
                <li>Which of the four engagement types does this proposal cover, and what does the next stage cost to scope?</li>
                <li>Is the price fixed for a written scope? What happens if the scope changes?</li>
                <li>What will we have in production at the end, and when will our team start using it?</li>
                <li>Which of our systems will it connect to, and what data does it need?</li>
                <li>How will accuracy be tested, and where do people review the AI&rsquo;s work?</li>
                <li>Who hosts, monitors and updates it after launch, and what does that cost each month?</li>
                <li>Who owns the code and the data? What do we get if we leave?</li>
                <li>Can you show us things you&rsquo;ve built that are running in production today?</li>
              </ol>

              <h2 id="ardn">What Ardn includes</h2>
              <p>
                Ardn is an Orlando, Florida-based US team with 30+ years of technology and consulting experience. We don&rsquo;t publish a rate
                card because every business is different, but here&rsquo;s what you can count on:
              </p>
              <ul>
                <li>
                  <b>A free 30-minute call</b> to talk through where AI fits, followed by a <b>fixed quote</b> for a clearly defined scope.
                </li>
                <li>
                  <b>Phased delivery:</b> assessment, roadmap, build and run, so each phase ships something your team uses.
                </li>
                <li>
                  <b>A flat monthly fee after launch</b> for hosting, monitoring, updates, support and ongoing improvements.
                </li>
                <li>
                  <b>One team throughout.</b> The people who scope it build it and run it.
                </li>
                <li>
                  <b>Proof you can check:</b> Club Steward, Ardn CRM, a membership and fundraising platform, Rx-Dr (built and launched by Ardn)
                  and a compliance-first e-commerce store, all built and run by us. See <Link href="/work">our work</Link>.
                </li>
                <li>
                  <b>Replies within 4 business hours.</b>
                </li>
              </ul>
              <p>
                Read more about our <Link href="/ai-consulting">AI consulting services</Link>, or see local pages for{" "}
                <Link href="/ai-consulting-orlando">Orlando</Link>, <Link href="/ai-consulting-tampa">Tampa</Link>,{" "}
                <Link href="/ai-consulting-miami">Miami</Link> and <Link href="/ai-consulting-jacksonville">Jacksonville</Link>. For software
                pricing more broadly, browse our <Link href="/blog/topics/software-cost-comparisons">software cost comparisons</Link>.
              </p>
            </article>
          </div>
        </section>

        <section className="pp-section pp-canvas" id="faq">
          <div className="container pp-narrow">
            <div className="pp-head">
              <span className="pp-kicker">FAQ</span>
              <h2 className="pp-h2">AI consulting cost questions</h2>
            </div>
            <div className="pp-faqs">
              {FAQS.map((f) => (
                <details className="pp-faq" key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="pp-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pp-final">
          <div className="pp-hero-glow" aria-hidden="true" />
          <div className="container pp-narrow">
            <h2 className="pp-display pp-display-sm">
              Get a real number <em>for your project.</em>
            </h2>
            <p className="pp-lede">Book a free 30-minute call. We&rsquo;ll scope the first phase with you and follow up with a fixed quote.</p>
            <div className="pp-ctas pp-ctas-center">
              <TrackedCta className="pp-btn pp-btn-gold" cta={{ label: "Book a free 30-min AI assessment call", href: CALL }} page="ai-consulting-cost" location="final" />
              <Link className="pp-btn pp-btn-ghost" href="/contact-us">
                Or send a message
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
