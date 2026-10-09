import Image from "next/image";
import Link from "next/link";
import { ppSerif as serif } from "@/fonts";
import type { CSSProperties } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import TrackedCta from "@/components/product-page/TrackedCta";
import { LAUNCHES, STEPS, CALL } from "./launches";
import "@/components/product-page/product-page.css";
import "./work.css";

// /work: the launches hub. Built on the product-page kit (.pp classes) with a
// small card grid of its own. Ardn designs, builds and runs these products;
// it never owns the companies behind the external product sites.


const THEME = {
  "--pp-accent": "#b8b2ff",
  "--pp-accent-soft": "#d9d6ff",
  "--pp-accent-rgb": "184, 178, 255",
  "--pp-accent-ink": "#15104a",
  "--pp-accent-2": "#4840e0",
  "--pp-accent-2-deep": "#2d24b0",
  "--pp-accent-2-rgb": "72, 64, 224",
} as CSSProperties;

export default function WorkContent() {
  return (
    <main className={`ardn-page pp wk ${serif.variable}`} style={THEME}>
      {/* HERO */}
      <section className="pp-hero wk-hero">
        <div className="pp-hero-glow" aria-hidden="true" />
        <div className="pp-hero-grain" aria-hidden="true" />
        <div className="container">
          <div className="pp-hero-grid wk-hero-grid">
            <div className="pp-hero-copy wk-hero-copy">
              <h1 className="pp-h1">
                <span className="pp-eyebrow">Our work</span>
                <span className="pp-display">
                  Products we&rsquo;ve built <em>and launched.</em>
                </span>
              </h1>
              <p className="pp-lede">
                Ardn builds industry software and runs it as a managed service. Each product below is live: designed, built and operated
                by the same team, for a specific kind of organization. Here is what&rsquo;s running today.
              </p>
              <ul className="pp-hero-proof">
                <li>Five launched products</li>
                <li>Real screens, not mockups</li>
                <li>Built and run by one accountable team</li>
              </ul>
            </div>
            <div className="wk-hero-visual">
              {/* Montage of the five launches on device frames; composed from
                  the same product screens the cards below use. */}
              <Image
                src="/images/work/work-montage.webp"
                alt="Five products built and launched by Ardn, shown on laptop and phone screens"
                width={2400}
                height={1350}
                priority
                quality={85}
                sizes="(max-width: 1040px) 100vw, 60vw"
                className="wk-montage"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LAUNCHES */}
      <section className="pp-section" id="launches">
        <div className="container">
          <div className="pp-head">
            <span className="pp-kicker">What&rsquo;s live</span>
            <h2 className="pp-h2">Five products, five industries, one way of working.</h2>
            <p className="pp-sub">Click through to the product page for what each one does, or the case study for how it was built.</p>
          </div>
          <ul className="wk-grid">
            {LAUNCHES.map((l) => (
              <li key={l.slug} className="pp-card wk-card">
                <Link href={l.productHref} className="wk-shot" aria-label={`${l.name}: product page`}>
                  <Image src={l.image} alt={l.imageAlt} width={1440} height={900} quality={85} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                </Link>
                <div className="wk-body">
                  <span className="wk-industry">{l.industry}</span>
                  <h3>{l.name}</h3>
                  <p>{l.outcome}</p>
                  <ul className="wk-chips" aria-label="Capabilities">
                    {l.chips.map((c) => (
                      <li key={c} className="pp-chip wk-chip">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="wk-links">
                    <Link href={l.productHref} className="wk-link">
                      Product page &rarr;
                    </Link>
                    <Link href={l.caseStudyHref} className="wk-link">
                      Case study &rarr;
                    </Link>
                    {l.videoHref && (
                      <Link href={l.videoHref} className="wk-link wk-link-watch">
                        <Play size={12} strokeWidth={0} fill="currentColor" aria-hidden="true" /> Watch
                      </Link>
                    )}
                    {l.externalHref && (
                      <a href={l.externalHref} target="_blank" rel="noopener noreferrer" className="wk-link wk-link-ext">
                        {l.externalLabel} <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="pp-sample-note wk-note">Screens show demo organizations with fictional people and figures.</p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="pp-section pp-canvas">
        <div className="container">
          <div className="pp-head">
            <span className="pp-kicker">How we work</span>
            <h2 className="pp-h2">The same four steps, every launch.</h2>
            <p className="pp-sub">
              Every product above went through the same path. Read more on <Link href="/approach">our approach</Link>.
            </p>
          </div>
          <ol className="pp-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="pp-step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="wk-more">
            <Link href="/approach" className="wk-link">
              See how we work &rarr;
            </Link>
            <Link href="/case-studies" className="wk-link">
              Read every case study &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* FINAL */}
      <section className="pp-final">
        <div className="pp-hero-glow" aria-hidden="true" />
        <div className="container pp-narrow">
          <h2 className="pp-display pp-display-sm">
            Have something that <em>should exist?</em>
          </h2>
          <p className="pp-lede">Tell us about the organization and the work. If it fits one of these products we&rsquo;ll show you; if it doesn&rsquo;t, we&rsquo;ll talk about building it.</p>
          <div className="pp-ctas pp-ctas-center">
            <TrackedCta className="pp-btn pp-btn-gold" cta={{ label: "Talk to us", href: "/contact-us" }} page="work" location="final" />
            <TrackedCta className="pp-btn pp-btn-ghost" cta={{ label: "Book a call", href: CALL }} page="work" location="final-call" />
          </div>
          <p className="pp-final-links">
            Related: <Link href="/our-products">All products</Link> · <Link href="/approach">Our approach</Link> · <Link href="/case-studies">Case studies</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
