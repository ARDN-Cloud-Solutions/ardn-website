"use client";

import { usePathname } from "next/navigation";

/** Hides the marketing header, footer and floating CTAs on private client
 *  proposals (/proposals/*), which carry their own navigation, and on the
 *  Google Ads landing pages (/start/*), which stay focused on one form. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/proposals") || pathname?.startsWith("/start/")) return null;
  return <>{children}</>;
}
