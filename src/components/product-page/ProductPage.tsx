import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import type { CSSProperties } from "react";
import LeadForm from "@/components/common/LeadForm";
import TrustBar from "@/components/common/TrustBar";
import ProductVideo from "@/components/media/ProductVideo";
import LoopClip from "@/components/media/LoopClip";
import { VIDEOS, loopClip, videoProps } from "@/components/media/videos";
import TrackedCta from "./TrackedCta";
import type { ProductPageContent, Shot as ShotData, VideoSection } from "./types";
import "./product-page.css";

// Shared product/service page, built from the Club Steward page. One content
// object in, one page out; sections are skipped when their content is absent.

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--pp-serif",
  display: "swap",
});

function Shot({ shot, priority, tilt, sizes = "(max-width: 1040px) 100vw, 60vw" }: {
  shot: ShotData;
  priority?: boolean;
  tilt?: boolean;
  sizes?: string;
}) {
  return (
    <div className={tilt ? "pp-mock pp-shot" : "pp-mock pp-shot pp-shot-flat"}>
      <div className="pp-mock-bar">
        <span className="pp-mock-dot" />
        <span className="pp-mock-dot" />
        <span className="pp-mock-dot" />
        <span className="pp-mock-url">{shot.url}</span>
      </div>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={2880}
        height={1800}
        priority={priority}
        quality={90}
        sizes={sizes}
        className="pp-shot-img"
      />
    </div>
  );
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

/** A self-hosted product video with its own heading; anchor defaults to #video. */
function VideoBand({ s, slug, canvas }: { s: VideoSection; slug: string; canvas?: boolean }) {
  return (
    <section className={canvas ? "pp-section pp-canvas" : "pp-section"} id={s.id ?? "video"}>
      <div className="container">
        <Head kicker={s.kicker} title={s.title} sub={s.sub} />
        <div className="mv-stage">
          <ProductVideo {...videoProps(VIDEOS[s.video])} page={slug} />
        </div>
      </div>
    </section>
  );
}

export default function ProductPage({ content: c }: { content: ProductPageContent }) {
  const t = c.theme;
  const themeVars = {
    "--pp-accent": t.accent,
    "--pp-accent-soft": t.accentSoft,
    "--pp-accent-rgb": t.accentRgb,
    "--pp-accent-ink": t.accentInk,
    "--pp-accent-2": t.accent2,
    "--pp-accent-2-deep": t.accent2Deep,
    "--pp-accent-2-rgb": t.accent2Rgb,
  } as CSSProperties;

  return (
    <main className={`ardn-page pp ${serif.variable}`} style={themeVars}>
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
                <Shot shot={c.hero.shot} priority tilt />
              </div>
              {c.hero.float && (
                <div className="pp-hero-float" aria-hidden="true">
                  <span className="pp-float-label">{c.hero.float.label}</span>
                  <div className="pp-float-row">
                    {c.hero.float.stats.map((s) => (
                      <div key={s.label}>
                        <b>{s.value}</b>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {c.hero.caption && <p className="pp-hero-caption">{c.hero.caption}</p>}
            </div>
          </div>
        </div>
      </section>

      <TrustBar signals={c.trust} />

      {c.video && <VideoBand s={c.video} slug={c.slug} />}

      {c.figures && (
        <section className="pp-figures-band">
          <div className="container">
            <div className="pp-figures">
              {c.figures.map((s) => (
                <div className="pp-figure-stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {c.pains && (
        <section className="pp-section pp-canvas">
          <div className="container">
            <Head kicker={c.pains.kicker} title={c.pains.title} sub={c.pains.sub} />
            <div className="pp-pains">
              {c.pains.items.map((p) => (
                <div className="pp-pain" key={p.label}>
                  <span className="pp-pain-label">{p.label}</span>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {c.promises && (
        <section className="pp-section">
          <div className="container">
            <Head kicker={c.promises.kicker} title={c.promises.title} sub={c.promises.sub} />
            <div className="pp-onprop pp-promises">
              {c.promises.items.map((p) => (
                <article key={p.title}>
                  <span className="pp-icon" aria-hidden="true">
                    <p.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {c.tour && (
        <section className="pp-section pp-canvas" id="tour">
          <div className="container pp-wide">
            <Head kicker={c.tour.kicker} title={c.tour.title} sub={c.tour.sub} />
            <div className="pp-tour">
              {c.tour.rows.map((r) => (
                <div className="pp-tour-row" key={r.kicker}>
                  <div className="pp-tour-copy">
                    <div>
                      <span className="pp-kicker">{r.kicker}</span>
                      <h3 className="pp-h3">{r.title}</h3>
                    </div>
                    <div>
                      <p>{r.body}</p>
                      <ul className="pp-ticks pp-ticks-light">
                        {r.points.map((pt) => (
                          <li key={pt}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Shot shot={r.shot} sizes="(max-width: 1400px) 100vw, 1320px" />
                </div>
              ))}
            </div>
            {c.sampleNote && <p className="pp-sample-note">{c.sampleNote}</p>}
            {c.tour.cta && (
              <div className="pp-inline-cta">
                <p>{c.tour.cta.text}</p>
                <TrackedCta className="pp-btn pp-btn-gold" cta={c.tour.cta.action} page={c.slug} location="after-tour" />
              </div>
            )}
          </div>
        </section>
      )}

      {c.loops && (
        <section className="pp-section" id="loops">
          <div className="container">
            <Head kicker={c.loops.kicker} title={c.loops.title} sub={c.loops.sub} />
            <div className="mv-row">
              {c.loops.items.map((l, i) => (
                <LoopClip key={l.clip} step={i + 1} {...loopClip(l.clip)} caption={l.caption} />
              ))}
            </div>
          </div>
        </section>
      )}

      {c.feature && (
        <section className="pp-section pp-dark">
          <div className="container">
            <div className="pp-split">
              <div>
                <Head kicker={c.feature.kicker} title={c.feature.title} sub={c.feature.sub} dark />
                <ul className="pp-ticks">
                  {c.feature.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <Shot shot={c.feature.shot} sizes="(max-width: 1040px) 100vw, 55vw" />
            </div>
          </div>
        </section>
      )}

      {c.modules && (
        <section className="pp-section" id="modules">
          <div className="container">
            <Head kicker={c.modules.kicker} title={c.modules.title} sub={c.modules.sub} />
            <div className="pp-cards">
              {c.modules.items.map((m) => (
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
      )}

      {c.videoLower && <VideoBand s={c.videoLower} slug={c.slug} canvas={!c.gallery} />}

      {c.gallery && (
        <section className="pp-section pp-canvas">
          <div className="container">
            <Head kicker={c.gallery.kicker} title={c.gallery.title} />
            <div className="pp-gallery">
              {c.gallery.items.map((g) => (
                <figure className="pp-gallery-item" key={g.title}>
                  <Image src={g.img} alt={g.alt} width={2880} height={1800} quality={90} sizes="(max-width: 700px) 100vw, 50vw" />
                  <figcaption>
                    <strong>{g.title}</strong>
                    <span>{g.body}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {c.security && (
        <section className="pp-section">
          <div className="container">
            <div className={c.security.shot ? "pp-split pp-split-top" : ""}>
              <div>
                <Head kicker={c.security.kicker} title={c.security.title} sub={c.security.sub} />
                {c.security.shot && <Shot shot={c.security.shot} />}
              </div>
              <div className={c.security.shot ? "pp-onprop pp-onprop-stack" : "pp-onprop pp-promises"}>
                {c.security.items.map((s) => (
                  <article key={s.title}>
                    <span className="pp-icon" aria-hidden="true">
                      <s.icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {c.steps && (
        <section className={c.security ? "pp-section pp-canvas" : "pp-section"}>
          <div className="container">
            <Head kicker={c.steps.kicker} title={c.steps.title} sub={c.steps.sub} />
            <ol className="pp-steps">
              {c.steps.items.map((s, i) => (
                <li key={s.title}>
                  <span className="pp-step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {c.compare && (
        <section className="pp-section">
          <div className="container">
            <Head kicker={c.compare.kicker} title={c.compare.title} sub={c.compare.sub} />
            <div className="pp-compare-wrap">
              <table className="pp-compare">
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    {c.compare.cols.map((col) => (
                      <th scope="col" key={col}>{col}</th>
                    ))}
                    <th scope="col" className="is-ours">{c.compare.ours}</th>
                  </tr>
                </thead>
                <tbody>
                  {c.compare.rows.map((r) => (
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
      )}

      {c.plans && (
        <section className="pp-section pp-dark" id="pricing">
          <div className="container">
            <Head kicker={c.plans.kicker} title={c.plans.title} sub={c.plans.sub} dark />
            <div className="pp-plans">
              {c.plans.items.map((p) => (
                <article key={p.name} className={p.featured ? "pp-plan is-featured" : "pp-plan"}>
                  {p.featured && <span className="pp-plan-flag">Most popular</span>}
                  <h3>{p.name}</h3>
                  <p className="pp-plan-for">{p.for}</p>
                  <div className="pp-plan-price">
                    <b>{p.price}</b>
                    <span>{p.priceNote}</span>
                  </div>
                  {p.extra && <p className="pp-plan-extra">{p.extra}</p>}
                  <ul className="pp-ticks">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <TrackedCta className={p.featured ? "pp-btn pp-btn-gold" : "pp-btn pp-btn-ghost"} cta={p.cta} page={c.slug} location={`plan-${p.name.toLowerCase()}`} />
                </article>
              ))}
            </div>
            {c.plans.note && <p className="pp-plan-note">{c.plans.note}</p>}
          </div>
        </section>
      )}

      {c.readMore && (
        <section className="pp-section pp-readmore-section">
          <div className="container pp-narrow">
            <div className="pp-head">
              <span className="pp-kicker">{c.readMore.kicker}</span>
              <h2 className="pp-h2">{c.readMore.title}</h2>
            </div>
            <ul className="pp-readmore">
              {c.readMore.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            {c.readMore.more && (
              <p className="pp-readmore-more">
                <Link href={c.readMore.more.href}>{c.readMore.more.label} →</Link>
              </p>
            )}
          </div>
        </section>
      )}

      <section className="pp-section pp-canvas">
        <div className="container pp-narrow">
          <div className="pp-head">
            <span className="pp-kicker">Questions</span>
            <h2 className="pp-h2">What people ask us first</h2>
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

      <section className="pp-section" id="talk">
        <div className="container pp-narrow">
          <LeadForm
            source={c.slug}
            heading={c.form.heading}
            sub={c.form.sub}
            submitLabel={c.form.submitLabel}
            messageLabel={c.form.messageLabel ?? "What should we know?"}
            footnote="We reply within 4 business hours · No obligation"
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
          {c.final.links && (
            <p className="pp-final-links">
              Related:{" "}
              {c.final.links.map((l, i) => (
                <span key={l.href}>
                  {i > 0 && " · "}
                  <Link href={l.href}>{l.label}</Link>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
