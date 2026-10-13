import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import FunnelForm from "@/components/ads/FunnelForm";
import { FAQS, HOOK_SLUGS, PROOF, SHOTS, STEPS, getHook } from "../hooks";
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
    <div className="ads">
      <header className="ads-bar">
        <div className="ads-wrap">
          <Image src="/logo/ardn_logo_white.svg" alt="Ardn Cloud Solutions" width={124} height={32} priority className="ads-logo" />
          <a className="ads-bar-phone" href="tel:+14078155303">
            (407) 815-5303
          </a>
        </div>
      </header>

      <main>
        <section className="ads-hero">
          <div className="ads-wrap ads-hero-grid">
            <div className="ads-hero-copy">
              <span className="ads-eyebrow">{h.eyebrow}</span>
              <h1 className="ads-h1">{h.headline}</h1>
              <p className="ads-sub">{h.subhead}</p>
              <ul className="ads-proof">
                {proof.map((p) => (
                  <li key={p}>
                    <Check size={18} strokeWidth={3} aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ads-form" id="form">
              <FunnelForm hook={h.slug} />
            </div>
          </div>
        </section>

        <section className="ads-section">
          <div className="ads-wrap">
            <h2 className="ads-h2">How it works</h2>
            <ol className="ads-steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="ads-step-n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ads-section ads-alt">
          <div className="ads-wrap">
            <h2 className="ads-h2">Platforms we&apos;ve built and run</h2>
            <p className="ads-lede">Real screens from products our team designed, launched and keeps running.</p>
            <div className="ads-shots">
              {SHOTS.map((s) => (
                <figure key={s.src}>
                  <Image src={s.src} alt={s.alt} width={2880} height={1800} sizes="(max-width: 760px) 100vw, 380px" />
                  <figcaption>{s.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="ads-section">
          <div className="ads-wrap ads-narrow">
            <h2 className="ads-h2">Questions</h2>
            <div className="ads-faqs">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="ads-cta">
          <div className="ads-wrap ads-narrow">
            <h2 className="ads-h2">Find out in a minute if we&apos;re a fit</h2>
            <p className="ads-lede">A few quick questions, then a free 30-minute call and a fixed quote after it.</p>
            <a className="ads-btn" href="#form">
              {h.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="ads-foot">
        <div className="ads-wrap">
          <Image src="/logo/ardn_logo_white.svg" alt="Ardn Cloud Solutions" width={93} height={24} className="ads-logo" />
          <span>Orlando, Florida</span>
          <a href="tel:+14078155303">(407) 815-5303</a>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  );
}
