import Link from "next/link";

/**
 * "Related reading" block — surfaces the cost-reduction blog cluster from the
 * high-authority money / wedge pages.
 *
 * SEO rationale: the ~88 cost-angle blog posts link OUT to the money pages but
 * previously received NO inbound links back from any service/wedge page — a
 * one-way street that left the cluster starved of link equity. This reusable
 * block reciprocates those links, distributes page authority down into the
 * supporting content, and gives buyers a clear next read. Anchor text is the
 * post's keyword-rich title (the whole card is the link), matching the existing
 * cluster-card pattern used across the solution pages.
 */
export default function RelatedReading({
  heading = "Go deeper on cutting per-seat costs",
  sub = "Practical, no-fluff guides from our team on where the CRM bill hides and how to cut it.",
  posts,
  canvas = false,
}: {
  heading?: string;
  sub?: string;
  posts: { href: string; label: string }[];
  canvas?: boolean;
}) {
  return (
    <section className={`section${canvas ? " is-canvas" : ""}`}>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">From the blog</span>
            <h2 className="h1 mt-3">{heading}</h2>
          </div>
          <div>
            <p className="lede">{sub}</p>
          </div>
        </div>
        <div className="grid-3">
          {posts.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="card"
              style={{ textDecoration: "none" }}
            >
              <h3 className="h3">{p.label}</h3>
              <span className="link">Read the guide &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
