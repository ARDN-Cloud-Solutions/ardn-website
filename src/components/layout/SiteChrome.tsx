"use client";

import { usePathname } from "next/navigation";

/** Hides the marketing header, footer and floating CTAs on private client
 *  proposals (/proposals/*), which carry their own navigation. */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/proposals")) return null;
  return <>{children}</>;
}
