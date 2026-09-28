"use client";

import type { Cta } from "./types";

type Gtag = (...args: unknown[]) => void;

/** A CTA link that reports its click to GA4 (cta_click) before navigating.
 *  External links open in a new tab; in-page anchors scroll as normal. */
export default function TrackedCta({
  cta,
  page,
  location,
  className,
}: {
  cta: Cta;
  page: string;
  location: string;
  className?: string;
}) {
  const external = /^https?:\/\//.test(cta.href);
  return (
    <a
      className={className}
      href={cta.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={() => {
        const gtag = (window as unknown as { gtag?: Gtag }).gtag;
        if (typeof gtag === "function") gtag("event", "cta_click", { page, location, label: cta.label });
      }}
    >
      {cta.label}
    </a>
  );
}
