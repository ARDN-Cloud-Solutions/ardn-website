"use client";

import type { ReactNode } from "react";

type Gtag = (...args: unknown[]) => void;

/** Fire a GA4 event if gtag is loaded; a no-op otherwise. */
export function track(event: string, params: Record<string, string>) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", event, params);
}

/**
 * An outbound link that reports its click to GA4 before navigating. Used for
 * the Calendly buttons so each placement (hero, mid-page, final CTA) shows up
 * separately in analytics alongside the LeadForm's `generate_lead`.
 */
export default function TrackedLink({
  href,
  event,
  location,
  className,
  children,
}: {
  href: string;
  event: string;
  location: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(event, { location, page: "golf-club-management-software" })}
    >
      {children}
    </a>
  );
}
