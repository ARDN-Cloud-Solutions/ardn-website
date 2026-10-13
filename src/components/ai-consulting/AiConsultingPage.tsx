import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ppSerif as serif } from "@/fonts";
import LeadForm from "@/components/common/LeadForm";
import TrustBar from "@/components/common/TrustBar";
import TrackedCta from "@/components/product-page/TrackedCta";
import type { Theme } from "@/components/product-page/types";
import type { AiConsultingContent } from "./types";
import "@/components/product-page/product-page.css";
import "./ai-consulting.css";

// AI consulting hub and city pages, built on the product page kit's styles.
// One content object in, one page out; city pages add the industries block.

export function themeVars(t: Theme) {
  return {
    "--pp-accent": t.accent,
    "--pp-accent-soft": t.accentSoft,
    "--pp-accent-rgb": t.accentRgb,
    "--pp-accent-ink": t.accentInk,
    "--pp-accent-2": t.accent2,
    "--pp-accent-2-deep": t.accent2Deep,
    "--pp-accent-2-rgb": t.accent2Rgb,
  } as CSSProperties;
}

function Head({ kicker, title, sub, dark }: { kicker: string; title: string; sub?: string; dark?: boolean }) {
  return (
    <div className="pp-head">
      <span className={dark ? "pp-kicker pp-on-dark" : "pp-kicker"}>{kicker}</span>
      <h2 className="pp-h2">{title}</h2>
      {sub && <p className={dark ? "pp-sub pp-on-dark" : "pp-sub"}>{sub}</p>}
    </div>
  );
}

export default function AiConsultingPage({ content: c }: { content: AiConsultingContent }) {
  return (
    <main className={`ardn-page pp ${serif.variable}`} style={themeVars(c.theme)}>
      {/* HERO */}
      <section className="pp-hero">
        <div className="pp-hero-glow" aria-hidden="true" />
        <div className="pp-hero-grain" aria-hidden="true" />
        <div className="container">
          <div className="pp-hero-grid">
            <div className="pp-hero-copy">
              <h1 className="pp-h1">
                <span className="pp-eyebrow">{c.hero.eyebrow}</span>
                <span className="pp-display">
                  {c.hero.title} <em>{c.hero.titleEm}</em>
                </span>
              </h1>
              <p className="pp-lede">{c.hero.lede}</p>
              <div className="pp-ctas">
                <TrackedCta className="pp-btn pp-btn-gold" cta={c.hero.primaryCta} page={c.slug} location="hero" />
                {c.hero.secondaryCta && (
                  <TrackedCta className="pp-btn pp-btn-light" cta={c.hero.secondaryCta} page={c.slug} location="hero-secondary" />
                )}
              </div>
              <ul className="pp-hero-proof">
                {c.hero.proof.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="pp-hero-visual">
              <div className="pp-hero-shot">
                <div className="pp-mock pp-shot">
                  <div className="pp-mock-bar">
                    <span className="pp-mock-dot" />
                    <span className="pp-mock-dot" />
                    <span className="pp-mock-dot" />
                    <span className="pp-mock-url">{c.hero.shot.url}</span>
                  </div>
                  <Image
                    src={c.hero.shot.src}
                    alt={c.hero.shot.alt}
                    width={2880}
                    height={1800}
                    priority
                    quality={90}
                    sizes="(max-width: 1040px) 100vw, 60vw"
                    className="pp-shot-img"
                  />
                </div>
              </div>
              {c.hero.caption && <p className="pp-hero-caption">{c.hero.caption}</p>}
            </div>
          </div>
        </div>
      </section>

      <TrustBar signals={c.trust} />

      {/* WHO IT'S FOR / LOCAL */}
      <section className="pp-section pp-canvas" id="intro">
        <div className="container">
          <Head kicker={c.intro.kicker} title={c.intro.title} sub={c.intro.sub} />
          <div className="pp-pains">
            {c.intro.items.map((p) => (
              <div className="pp-pain" key={p.label}>
                <span className="pp-pain-label">{p.label}</span>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          {c.intro.links && (
            <div className="ac-intro-links">
              {c.intro.links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label} <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* INDUSTRIES (city pages) */}
      {c.industries && (
        <section className="pp-section" id="use-cases">
          <div className="container">
            <Head kicker={c.industries.kicker} title={c.industries.title} sub={c.industries.sub} />
            <div className="ac-industries">
              {c.industries.items.map((ind) => (
                <article className="ac-industry" key={ind.name}>
                  <h3>{ind.name}</h3>
                  <p className="ac-industry-why">{ind.why}</p>
                  <ul className="ac-uses">
                    {ind.uses.map((u) => (
                      <li key={u.title}>
                        <b>{u.title}</b>
                        <span>{u.body}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            {c.sampleNote && <p className="pp-sample-note">{c.sampleNote}</p>}
          </div>
        </section>
      )}

      {/* WHAT YOU GET */}
      <section className={c.industries ? "pp-section pp-canvas" : "pp-section"} id="services">
        <div className="container">
          <Head kicker={c.offer.kicker} title={c.offer.title} sub={c.offer.sub} />
          <div className="pp-cards">
            {c.offer.items.map((m) => (
              <article className="pp-card" key={m.title}>
                <span className="pp-icon" aria-hidden="true">
                  <m.icon size={20} strokeWidth={1.75} />
                </span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW ENGAGEMENTS WORK */}
      <section className={c.industries ? "pp-section" : "pp-section pp-canvas"} id="how-it-works">
        <div className="container">
          <Head kicker={c.steps.kicker} title={c.steps.title} sub={c.steps.sub} />
          <ol className="ac-steps">
            {c.steps.items.map((s, i) => (
              <li key={s.title}>
                <span className="pp-icon" aria-hidden="true">
                  <s.icon size={20} strokeWidth={1.75} />
                </span>
                <span className="ac-step-n">Step {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
          <div className="pp-inline-cta">
            <p>Not sure where AI fits yet? That&rsquo;s what the free 30-minute assessment call is for.</p>
            <TrackedCta className="pp-btn pp-btn-gold" cta={c.hero.primaryCta} page={c.slug} location="after-steps" />
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="pp-section pp-dark" id="proof">
        <div className="container">
          <Head kicker={c.proof.kicker} title={c.proof.title} sub={c.proof.sub} dark />
          <div className="ac-proof">
            {c.proof.items.map((p) => (
              <figure className="ac-proof-item" key={p.href}>
                <Image src={p.image} alt={p.imageAlt} width={1440} height={900} quality={80} sizes="(max-width: 700px) 100vw, (max-width: 1040px) 50vw, 33vw" />
                <figcaption>
                  <span className="ac-proof-ind">{p.industry}</span>
                  <strong>{p.name}</strong>
                  <span>{p.outcome}</span>
                  <span className="ac-proof-links">
                    <Link href={p.href}>Product</Link>
                    <Link href={p.caseStudyHref}>Case study</Link>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="ac-proof-more">
            <Link href="/work">See everything we&rsquo;ve launched →</Link>
            <Link href="/case-studies">Read the case studies →</Link>
          </p>
        </div>
      </section>

      {/* WHY BUILD + RUN */}
      <section className="pp-section" id="why">
        <div className="container">
          <Head kicker={c.why.kicker} title={c.why.title} sub={c.why.sub} />
          <div className="pp-compare-wrap">
            <table className="pp-compare">
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  {c.why.cols.map((col) => (
                    <th scope="col" key={col}>
                      {col}
                    </th>
                  ))}
                  <th scope="col" className="is-ours">
                    {c.why.ours}
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.why.rows.map((r) => (
                  <tr key={r.feature}>
                    <th scope="row">{r.feature}</th>
                    {r.cells.map((cell, i) => (
                      <td key={i}>{cell}</td>
                    ))}
                    <td className="is-ours">{r.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pp-section pp-canvas" id="faq">
        <div className="container pp-narrow">
          <div className="pp-head">
            <span className="pp-kicker">Questions</span>
            <h2 className="pp-h2">What buyers ask us first</h2>
          </div>
          <div className="pp-faqs">
            {c.faqs.map((f) => (
              <details className="pp-faq" key={f.q}>
                <summary>{f.q}</summary>
                <div className="pp-faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="pp-section pp-readmore-section">
        <div className="container pp-narrow">
          <div className="pp-head">
            <span className="pp-kicker">{c.related.kicker}</span>
            <h2 className="pp-h2">{c.related.title}</h2>
          </div>
          <ul className="pp-readmore">
            {c.related.links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pp-section pp-canvas" id="talk">
        <div className="container pp-narrow">
          <LeadForm
            source={c.slug}
            heading={c.form.heading}
            sub={c.form.sub}
            submitLabel={c.form.submitLabel}
            messageLabel={c.form.messageLabel}
            footnote="We reply within 4 business hours · Free 30-minute call · No obligation"
          />
        </div>
      </section>

      <section className="pp-final">
        <div className="pp-hero-glow" aria-hidden="true" />
        <div className="container pp-narrow">
          <h2 className="pp-display pp-display-sm">
            {c.final.title} <em>{c.final.titleEm}</em>
          </h2>
          <p className="pp-lede">{c.final.lede}</p>
          <div className="pp-ctas pp-ctas-center">
            <TrackedCta className="pp-btn pp-btn-gold" cta={c.final.cta} page={c.slug} location="final" />
            <a className="pp-btn pp-btn-ghost" href="#talk">
              Send us your details instead
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
