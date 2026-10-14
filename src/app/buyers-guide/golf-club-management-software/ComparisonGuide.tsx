// Shared layout for Ardn's sourced comparison guides (golf club management and
// contractor CRM). Server component: every word is in the HTML that answer
// engines and Google fetch. Structure mirrors /compare/salesforce-commerce-
// cloud-alternatives: quick answer, comparison table, criteria, per-vendor
// sections, how to choose, FAQ, sources.
import Link from "next/link";
import type { ReactNode } from "react";
import GuideHero from "@/components/buyers-guide/GuideHero";
import Sidebar from "@/components/buyers-guide/Sidebar";

export interface GuideVendor {
  id: string;
  name: string;
  bestFit: string;
  summary: string;
  facts: string[];
  watch: string;
  pricing: string;
  sources: { label: string; href: string }[];
}

export interface ComparisonGuideProps {
  h1: string;
  updated: string;
  quickAnswer: ReactNode;
  intro: ReactNode;
  tableCaption: string;
  tableColumns: readonly string[];
  table: { vendor: string; cells: string[] }[];
  criteriaIntro: string;
  criteria: { title: string; body: string }[];
  vendors: GuideVendor[];
  howToChoose: { if: string; then: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  methodology: string;
  ctaText: string;
  ctaHref: string;
}

const H2 = "block lg:text-4xl text-2xl font-bold text-heading-dark mt-14 mb-6 leading-tight scroll-mt-[120px]";
const P = "text-heading-dark text-sm lg:text-base mt-4 leading-relaxed";
const A = "text-heading-dark underline decoration-[#FB7103] underline-offset-4";

export default function ComparisonGuide(props: ComparisonGuideProps) {
  return (
    <>
      <GuideHero title={props.h1} buttonText={props.ctaText} buttonLink={props.ctaHref} />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 py-8 lg:py-16 min-w-0">
          <Sidebar />

          <main className="min-w-0 font-poppins">
            <nav aria-label="Breadcrumb" className="text-sm text-[#475569] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog/topics/software-cost-comparisons" className="hover:underline">Software cost comparisons</Link>
              <span className="mx-2">/</span>
              <span>Buyer&apos;s guide</span>
            </nav>
            <p className="text-sm text-[#475569] m-0">
              <time dateTime="2026-10-14">{props.updated}</time> · By Ardn Cloud Solutions
            </p>

            {/* Quick answer */}
            <section className="mt-6 rounded-xl border-l-4 border-[#FB7103] bg-[#f8fafc] p-6" aria-labelledby="quick-answer">
              <h2 id="quick-answer" className="text-xl lg:text-2xl font-bold text-heading-dark m-0 scroll-mt-[120px]">
                Quick answer
              </h2>
              <div className="text-heading-dark text-sm lg:text-base mt-3 leading-relaxed space-y-3">{props.quickAnswer}</div>
            </section>

            <div className="mt-8 space-y-4">{props.intro}</div>

            {/* Comparison table */}
            <h2 id="comparison-table" className={H2}>Comparison table</h2>
            <div className="my-6 overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <table className="w-full min-w-[860px] border-collapse bg-white text-sm">
                <caption className="text-left px-6 py-3 text-[#475569] text-xs">{props.tableCaption}</caption>
                <thead>
                  <tr className="bg-[#4D5562]">
                    <th scope="col" className="text-white font-bold text-left px-4 py-4">Vendor</th>
                    {props.tableColumns.map((c) => (
                      <th scope="col" key={c} className="text-white font-bold text-left px-4 py-4">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {props.table.map((row, i) => (
                    <tr key={row.vendor} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
                      <th scope="row" className="px-4 py-3 border-b border-[#f1f5f9] text-[#1c2045] font-semibold text-left align-top">{row.vendor}</th>
                      {row.cells.map((cell, j) => (
                        <td key={j} className="px-4 py-3 border-b border-[#f1f5f9] text-[#475569] align-top">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Criteria */}
            <h2 id="evaluation-criteria" className={H2}>Evaluation criteria</h2>
            <p className={P}>{props.criteriaIntro}</p>
            <dl className="mt-6 grid gap-4 md:grid-cols-2">
              {props.criteria.map((c) => (
                <div key={c.title} className="rounded-lg border border-[#e5e7eb] p-4">
                  <dt className="font-semibold text-[#1c2045]">{c.title}</dt>
                  <dd className="text-sm text-[#475569] mt-1 ml-0">{c.body}</dd>
                </div>
              ))}
            </dl>

            {/* Vendors */}
            <h2 id="vendors" className={H2}>The vendors, one by one</h2>
            {props.vendors.map((v) => (
              <section key={v.id} id={v.id} className="mt-10 scroll-mt-[120px]" aria-labelledby={`${v.id}-h`}>
                <h3 id={`${v.id}-h`} className="text-xl lg:text-2xl font-semibold text-heading-dark">{v.name}</h3>
                <p className={`${P} font-medium`}>{v.bestFit}</p>
                <p className={P}>{v.summary}</p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-heading-dark text-sm lg:text-base">
                  {v.facts.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className={P}><strong>Worth checking:</strong> {v.watch}</p>
                <p className={P}><strong>Pricing:</strong> {v.pricing}</p>
                <p className="text-xs text-[#64748b] mt-3">
                  Source{v.sources.length > 1 ? "s" : ""}:{" "}
                  {v.sources.map((s, i) => (
                    <span key={s.href}>
                      {i > 0 && " · "}
                      <a href={s.href} className="underline" target="_blank" rel="noopener noreferrer">{s.label}</a>
                    </span>
                  ))}
                </p>
              </section>
            ))}

            {/* How to choose */}
            <h2 id="how-to-choose" className={H2}>How to choose</h2>
            <ul className="space-y-4 mt-6">
              {props.howToChoose.map((h) => (
                <li key={h.if} className="rounded-lg bg-[#f8fafc] p-4 text-sm lg:text-base text-heading-dark">
                  <strong>If</strong> {h.if}: {h.then}
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <h2 id="faq" className={H2}>Frequently asked questions</h2>
            <div className="space-y-6">
              {props.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-lg font-semibold text-heading-dark">{f.q}</h3>
                  <p className="text-heading-dark text-sm lg:text-base mt-2 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            {/* Related */}
            <h2 id="related" className={H2}>Related reading</h2>
            <ul className="list-disc pl-6 space-y-2 text-heading-dark text-sm lg:text-base">
              {props.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className={A}>{r.label}</Link>
                </li>
              ))}
            </ul>

            {/* Sources */}
            <h2 id="sources" className={H2}>Sources and methodology</h2>
            <p className={P}>{props.methodology}</p>
            <ul className="list-disc pl-6 space-y-1 mt-4 text-sm text-[#475569] break-words">
              {props.vendors.flatMap((v) =>
                v.sources.map((s) => (
                  <li key={`${v.id}-${s.href}`}>
                    {v.name}: <a href={s.href} className="underline" target="_blank" rel="noopener noreferrer">{s.label}</a>{" "}
                    <span className="text-[#94a3b8]">({s.href.replace(/^https?:\/\//, "")})</span>
                  </li>
                )),
              )}
            </ul>

            <section className="bg-[#0D121F] rounded-2xl p-8 lg:p-10 my-12 text-center md:text-left">
              <p className="text-white text-xl lg:text-2xl font-bold m-0 leading-tight">Want a second opinion on your shortlist?</p>
              <p className="text-white/80 text-sm lg:text-base mt-3">
                Tell us what you run today and what has to change. We&apos;ll reply within 4 business hours.
              </p>
              <Link href={props.ctaHref} className="inline-block mt-5 rounded-full bg-[#FB7103] px-8 py-3 font-semibold text-white no-underline hover:opacity-90">
                {props.ctaText} →
              </Link>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
