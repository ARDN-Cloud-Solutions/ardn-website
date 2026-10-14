import Link from "next/link";
import GuideHero from "@/components/buyers-guide/GuideHero";
import Sidebar from "@/components/buyers-guide/Sidebar";
import type { ComparisonGuideData } from "./types";

// Server-rendered buyer's-guide layout shared by the vendor comparison
// guides (quick answer, comparison table, criteria, per-vendor sections,
// how to choose, FAQ, sources). Every competitor fact in the data files must
// come from that vendor's own public page, listed in `sources`.

const linkCls = "text-heading-dark underline decoration-[#FB7103] underline-offset-4";
const h2Cls = "block lg:text-4xl text-2xl font-bold text-heading-dark mt-14 mb-6 scroll-mt-[120px]";
const pCls = "text-heading-dark text-sm lg:text-base";

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function SmartLink({ href, children }: { href: string; children: React.ReactNode }) {
  if (isExternal(href)) {
    return (
      <a href={href} className={linkCls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={linkCls}>
      {children}
    </Link>
  );
}

export default function ComparisonGuide({ guide }: { guide: ComparisonGuideData }) {
  return (
    <>
      <GuideHero title={guide.h1} buttonText={guide.heroCta.label} buttonLink={guide.heroCta.href} />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 py-8 lg:py-16">
          <Sidebar />

          <main className="min-w-0">
            <p className="text-sm text-[#475569] mb-6">
              <strong>Updated {guide.updated}</strong> · {guide.byline}
            </p>

            {/* Quick answer */}
            <section className="rounded-2xl border-2 border-[#FB7103] bg-[#FFF7F0] p-6 lg:p-8 mb-10">
              <h2 id="quick-answer" className="text-xl lg:text-2xl font-bold text-heading-dark mb-4 scroll-mt-[120px]">
                Quick answer
              </h2>
              <p className={`${pCls} mb-4`}>{guide.quickAnswer.lead}</p>
              <ul className="list-disc pl-6 space-y-2 text-heading-dark text-sm lg:text-base">
                {guide.quickAnswer.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>

            <div className="space-y-4">
              {guide.intro.map((p) => (
                <p key={p} className={pCls}>
                  {p}
                </p>
              ))}
            </div>

            {/* Comparison table */}
            <h2 id="comparison-table" className={h2Cls}>
              {guide.table.heading}
            </h2>
            <p className={`${pCls} mb-4`}>{guide.table.note}</p>
            <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[960px] border-collapse bg-white text-sm">
                <thead>
                  <tr className="bg-[#4D5562]">
                    <th scope="col" className="text-white font-bold text-left px-4 py-4">
                      Product
                    </th>
                    {guide.table.columns.map((c) => (
                      <th key={c} scope="col" className="text-white font-bold text-left px-4 py-4">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {guide.table.rows.map((row, i) => (
                    <tr key={row.product} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
                      <th scope="row" className="px-4 py-4 border-b border-[#f1f5f9] text-[#1c2045] font-semibold text-left align-top">
                        {row.product}
                      </th>
                      {row.cells.map((cell, j) => (
                        <td key={j} className="px-4 py-4 border-b border-[#f1f5f9] text-[#334155] align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Evaluation criteria */}
            <h2 id="evaluation-criteria" className={h2Cls}>
              {guide.criteria.heading}
            </h2>
            <p className={`${pCls} mb-4`}>{guide.criteria.lead}</p>
            <ol className="list-decimal pl-6 space-y-4 text-heading-dark text-sm lg:text-base">
              {guide.criteria.items.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}.</strong> {c.body}
                </li>
              ))}
            </ol>

            {/* Vendors */}
            <h2 id="options-compared" className={h2Cls}>
              {guide.vendorsHeading}
            </h2>
            {guide.vendors.map((v, i) => (
              <section key={v.id} id={v.id} className="mb-12 scroll-mt-[120px]">
                <h3 className="text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-2">
                  {i + 1}. {v.name}
                </h3>
                <p className="text-sm text-[#475569] mb-4">{v.maker}</p>
                <p className={`${pCls} mb-4`}>
                  <strong>Best fit if:</strong> {v.bestFor}
                </p>
                <p className={`${pCls} mb-4`}>{v.summary}</p>
                <ul className="list-disc pl-6 space-y-2 text-heading-dark text-sm lg:text-base mb-4">
                  {v.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                {v.limits && v.limits.length > 0 && (
                  <>
                    <p className={`${pCls} font-semibold mb-2`}>{v.limitsLabel ?? "Worth knowing"}</p>
                    <ul className="list-disc pl-6 space-y-2 text-heading-dark text-sm lg:text-base mb-4">
                      {v.limits.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p className={`${pCls} mb-2`}>
                  <strong>Pricing:</strong> {v.pricing}
                </p>
                <p className="text-xs lg:text-sm text-[#475569]">
                  Source{v.sources.length > 1 ? "s" : ""}:{" "}
                  {v.sources.map((s, k) => (
                    <span key={s.url}>
                      {k > 0 && " · "}
                      <SmartLink href={s.url}>{s.label}</SmartLink>
                    </span>
                  ))}
                </p>
              </section>
            ))}

            {/* How to choose */}
            <h2 id="how-to-choose" className={h2Cls}>
              {guide.howToChoose.heading}
            </h2>
            <p className={`${pCls} mb-4`}>{guide.howToChoose.lead}</p>
            <ul className="list-disc pl-6 space-y-3 text-heading-dark text-sm lg:text-base">
              {guide.howToChoose.items.map((h) => (
                <li key={h.if}>
                  <strong>{h.if}</strong> {h.then}
                </li>
              ))}
            </ul>
            {guide.howToChoose.questions.length > 0 && (
              <>
                <p className={`${pCls} font-semibold mt-8 mb-2`}>Questions to ask every vendor on the demo</p>
                <ul className="list-disc pl-6 space-y-2 text-heading-dark text-sm lg:text-base">
                  {guide.howToChoose.questions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </>
            )}

            {/* FAQ */}
            <h2 id="faq" className={h2Cls}>
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {guide.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-lg font-semibold text-heading-dark mb-2">{f.q}</h3>
                  <p className={pCls}>{f.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <section className="bg-[#0D121F] rounded-2xl p-8 lg:p-12 my-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <p className="text-white text-xl lg:text-2xl font-bold m-0 max-w-xl">{guide.cta.text}</p>
              <Link
                href={guide.cta.href}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#FB7103] px-8 py-4 font-semibold text-white hover:bg-[#e66500]"
              >
                {guide.cta.label}
              </Link>
            </section>

            {/* Sources */}
            <h2 id="sources" className={h2Cls}>
              Sources
            </h2>
            <p className={`${pCls} mb-4`}>
              Every vendor fact above comes from that vendor&apos;s own public website, pricing or help pages, checked in{" "}
              {guide.updated}. Features and prices change; confirm current details with each vendor before you buy.
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-heading-dark break-words">
              {guide.sources.map((s) => (
                <li key={s.url}>
                  {s.label}: <SmartLink href={s.url}>{s.url.replace(/^https?:\/\//, "")}</SmartLink>
                </li>
              ))}
            </ol>

            <p className={`${pCls} mt-10`}>
              Related:{" "}
              {guide.related.map((r, k) => (
                <span key={r.href}>
                  {k > 0 && " · "}
                  <SmartLink href={r.href}>{r.label}</SmartLink>
                </span>
              ))}
            </p>

            {guide.disclaimers.map((d) => (
              <p key={d} className="text-xs text-[#64748b] mt-6">
                {d}
              </p>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
