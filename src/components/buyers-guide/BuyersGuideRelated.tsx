import Link from "next/link";

/**
 * Related-resources block for the buyers-guide pages.
 *
 * SEO / internal-linking rationale: the buyers-guide pages rank for bottom-of-
 * funnel Salesforce queries but historically dead-ended at /contact-us with no
 * links into the hub/spoke/wedge cluster. This block routes that high-intent
 * traffic into the cost-reduction wedge and the custom-software hub with
 * descriptive, money-keyword anchor text. Links are passed per guide so the
 * anchors stay contextually relevant to the page's topic.
 */
export default function BuyersGuideRelated({
  heading = "Keep reading",
  links,
}: {
  heading?: string;
  links: { href: string; label: string }[];
}) {
  return (
    <section className="container">
      <div className="border-t border-gray-200 py-10 lg:py-14">
        <h2 className="text-2xl font-bold text-[#0D121F] mb-6">{heading}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 text-[#0D121F] font-semibold transition-colors hover:border-[#1B6FC9] hover:text-[#1B6FC9]"
              >
                <span>{l.label}</span>
                <span aria-hidden className="text-[#1B6FC9]">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
