import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import FunnelForm from "@/components/ads/FunnelForm";
import ProductVideo from "@/components/media/ProductVideo";
import { videoProps } from "@/components/media/videos";
import type { LandingHook } from "./productHooks";
import type { ProductPage } from "./productPages";
import PlatformStage from "./PlatformStage";
import AppGrid from "./AppGrid";
import TrustLink from "./TrustLink";

// A product funnel's ad page (Club Steward, Ardn CRM): the same frame as the
// AI consulting page (top bar, hero with the form, footer) around one
// product's real screens, apps, video, steps and FAQ.

export default function ProductLanding({ hook, page }: { hook: LandingHook; page: ProductPage }) {
  const proof = hook.proof ?? page.proof;
  return (
    <div className="lnd">
      <header className="lnd-bar">
        <div className="lnd-wrap">
          <TrustLink target="logo" className="lnd-logo-link" ariaLabel="Ardn Cloud Solutions — see our work (opens in a new tab)">
            <Image src="/logo/ardn_logo_white.min.svg" alt="" width={124} height={32} loading="eager" className="lnd-logo" />
          </TrustLink>
          <div className="lnd-bar-links">
            <TrustLink target="see_work" className="lnd-bar-work" ariaLabel="See our work (opens in a new tab)">
              See our work <span aria-hidden="true">↗</span>
            </TrustLink>
            <a className="lnd-bar-phone" href="tel:+14078155303">
              (407) 815-5303
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="lnd-hero">
          <div className="lnd-wrap lnd-hero-grid">
            {/* Phones: the lead, then the form, then the rest of the copy. */}
            <div className="lnd-hero-lead">
              <p className="lnd-eyebrow">{hook.eyebrow}</p>
              <h1 className="lnd-h1">
                <span className="lnd-h1-full">{hook.headline}</span>
                <span className="lnd-h1-short">{hook.mobileHeadline}</span>
              </h1>
            </div>
            <div className="lnd-hero-copy">
              <p className="lnd-sub">{hook.subhead}</p>
              <ul className="lnd-proof">
                {proof.map((p) => (
                  <li key={p}>
                    <Check size={18} strokeWidth={3} aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {page.fit ? <p className="lnd-fit">{page.fit}</p> : null}
            </div>
            <div className="lnd-form" id="form">
              <FunnelForm hook={hook.slug} funnel={page.funnel} />
            </div>
          </div>
        </section>

        <PlatformStage platforms={page.stage.platforms} intro={page.stage} />

        <section className="lnd-appsec" aria-labelledby="lnd-apps-title">
          <div className="lnd-wrap">
            <div className="lnd-apps-intro">
              <span className="lnd-kicker lnd-kicker-ink">{page.apps.kicker}</span>
              <h2 id="lnd-apps-title" className="lnd-display">
                {page.apps.title}
              </h2>
              <p className="lnd-intro-text lnd-intro-ink">{page.apps.intro}</p>
            </div>
            <AppGrid apps={page.apps.items} own={false} ctaLabel={page.apps.cta} />
          </div>
        </section>

        <section className="lnd-section lnd-alt" aria-labelledby="lnd-video-title">
          <div className="lnd-wrap lnd-video">
            <div className="lnd-apps-intro">
              <span className="lnd-kicker lnd-kicker-ink">{page.video.kicker}</span>
              <h2 id="lnd-video-title" className="lnd-h2">
                {page.video.title}
              </h2>
              <p className="lnd-lede">{page.video.sub}</p>
            </div>
            <div className="lnd-video-stage">
              <ProductVideo {...videoProps(page.video.meta)} page={`start/${hook.slug}`} />
            </div>
          </div>
        </section>

        <section className="lnd-section">
          <div className="lnd-wrap">
            <h2 className="lnd-h2">{page.steps.title}</h2>
            <ol className={`lnd-steps lnd-steps-${page.steps.items.length}`}>
              {page.steps.items.map((s, i) => (
                <li key={s.title}>
                  <span className="lnd-step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="lnd-section lnd-alt">
          <div className="lnd-wrap lnd-narrow">
            <h2 className="lnd-h2">Questions</h2>
            <div className="lnd-faqs">
              {page.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="lnd-cta">
          <div className="lnd-wrap lnd-narrow">
            <h2 className="lnd-h2">{page.final.title}</h2>
            <p className="lnd-lede">{page.final.lede}</p>
            <a className="lnd-btn" href="#form">
              {page.final.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="lnd-foot">
        <div className="lnd-wrap">
          <Image src="/logo/ardn_logo_white.min.svg" alt="Ardn Cloud Solutions" width={93} height={24} className="lnd-logo" />
          <span>Orlando, Florida</span>
          <a href="tel:+14078155303">(407) 815-5303</a>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  );
}
