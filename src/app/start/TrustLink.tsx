"use client";

import type { ReactNode } from "react";

// Links in the landing-page top bar that let a curious visitor check who we
// are without losing the form: they open /work in a new tab. Each click sends
// GA4 `lnd_trust_click` with which link it was.

const WORK_URL = "https://ardncloudsolutions.com/work";

type Gtag = (...a: unknown[]) => void;

export default function TrustLink({
  target,
  className,
  ariaLabel,
  children,
}: {
  target: "logo" | "see_work";
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  const onClick = () => {
    const g = (window as unknown as { gtag?: Gtag }).gtag;
    if (typeof g === "function") g("event", "lnd_trust_click", { target });
  };
  return (
    <a href={WORK_URL} target="_blank" rel="noopener" className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </a>
  );
}
