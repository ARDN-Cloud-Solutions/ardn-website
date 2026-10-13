import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import FunnelForm from "@/components/ads/FunnelForm";
import { APPS, FAQS, HOOK_SLUGS, PLATFORMS, PROOF, STEPS, getHook } from "../hooks";
import PlatformStage from "../PlatformStage";
import AppGrid from "../AppGrid";
import "../start.css";

// Google Ads landing pages. Focused: no site header/footer (SiteChrome hides
// them on /start), noindex so they never compete with the SEO pages, and not
// in the sitemap. Not disallowed in robots.txt: Google Ads must crawl them.

type Props = { params: Promise<{ hook: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return HOOK_SLUGS.map((hook) => ({ hook }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { hook } = await params;
  const h = getHook(hook);
  if (!h) return {};
  const url = `https://ardncloudsolutions.com/start/${h.slug}`;
  return {
    title: { absolute: h.title },
    description: h.description,
    robots: { index: false, follow: false },
    alternates: { canonical: url, languages: {} },
    openGraph: { title: h.title, description: h.description, url, siteName: "Ardn Cloud Solutions", images: ["/images/ardn-share.jpg"], type: "website" },
  };
}

export default async function StartPage({ params }: Props) {
  const { hook } = await params;
  const h = getHook(hook);
  if (!h) notFound();
  const proof = h.proof ?? PROOF;

  return (
    <div className="lnd">
      <header className="lnd-bar">
        <div className="lnd-wrap">
          <Image src="/logo/ardn_logo_white.svg" alt="Ardn Cloud Solutions" width={124} height={32} priority className="lnd-logo" />
          <a className="lnd-bar-phone" href="tel:+14078155303">
            (407) 815-5303
          </a>
        </div>
      </header>

      <main>
        <section className="lnd-hero">
          <div className="lnd-wrap lnd-hero-grid">
            <div className="lnd-hero-copy">
              <span className="lnd-eyebrow">{h.eyebrow}</span>
              <h1 className="lnd-h1">{h.headline}</h1>
              <p className="lnd-sub">{h.subhead}</p>
              <ul className="lnd-proof">
                {proof.map((p) => (
                  <li key={p}>
                    <Check size={18} strokeWidth={3} aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lnd-form" id="form">
              <FunnelForm hook={h.slug} />
            </div>
          </div>
        </section>

        <section className="lnd-section">
          <div className="lnd-wrap">
            <h2 className="lnd-h2">How it works</h2>
            <ol className="lnd-steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="lnd-step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <PlatformStage platforms={PLATFORMS} />

        <section className="lnd-appsec" aria-labelledby="lnd-apps-title">
          <div className="lnd-wrap">
            <div className="lnd-apps-intro">
              <span className="lnd-kicker lnd-kicker-ink">One record, many apps</span>
              <h2 id="lnd-apps-title" className="lnd-display">
                Apps your team can start&nbsp;with.
              </h2>
              <p className="lnd-intro-text lnd-intro-ink">Each app works on its own, and they all share one record when you use more than one.</p>
            </div>
            <AppGrid apps={APPS} />
          </div>
        </section>

        <section className="lnd-section">
          <div className="lnd-wrap lnd-narrow">
            <h2 className="lnd-h2">Questions</h2>
            <div className="lnd-faqs">
              {FAQS.map((f) => (
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
            <h2 className="lnd-h2">Find out in a minute if we&apos;re a fit</h2>
            <p className="lnd-lede">A few quick questions, then a free 30-minute call and a fixed quote after it.</p>
            <a className="lnd-btn" href="#form">
              {h.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="lnd-foot">
        <div className="lnd-wrap">
          <Image src="/logo/ardn_logo_white.svg" alt="Ardn Cloud Solutions" width={93} height={24} className="lnd-logo" />
          <span>Orlando, Florida</span>
          <a href="tel:+14078155303">(407) 815-5303</a>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  );
}
