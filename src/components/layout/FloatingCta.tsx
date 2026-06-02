"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";

/**
 * Floating Book-A-Free-Call CTA.
 *
 * CRO rationale: every page visitor sees a persistent, high-contrast CTA
 * without scrolling back to the header. Appears once the user has scrolled
 * past the hero (≈ 400px) so it does not compete with the in-hero CTA. Links
 * directly to Calendly to skip the form-fill friction for the hottest leads.
 *
 * Hidden on /contact-us because the page is itself the conversion destination
 * and a floating button would be redundant.
 *
 * Implementation notes — React 19 / Next 16:
 *   - `usePathname()` is reactive in App Router, so the contact-page check
 *     does not need its own state + effect. This avoids the
 *     `react-hooks/set-state-in-effect` lint error.
 *   - All setState calls inside the effect happen inside the `onScroll`
 *     event-handler callback (allowed pattern), not in the effect body.
 */
export default function FloatingCta() {
  const pathname = usePathname();
  const hideOnContact = pathname?.startsWith("/contact-us") ?? false;

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // No listener needed on the contact page — early-return to avoid
    // attaching a scroll handler we will immediately tear down.
    if (hideOnContact) return;

    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideOnContact]);

  if (hideOnContact) return null;

  return (
    <a
      href="https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a free 30-minute strategy call"
      className={`fixed z-[60] flex items-center gap-2 font-semibold text-white shadow-2xl transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }
        bottom-4 right-4 px-5 py-3 rounded-full bg-[#4f43e5] hover:bg-[#6b5dff] hover:scale-105
        text-sm md:text-base
        max-md:left-4 max-md:right-4 max-md:bottom-4 max-md:justify-center max-md:rounded-full`}
      style={{ boxShadow: "0 16px 32px -8px rgba(79, 67, 229, 0.5)" }}
    >
      <Calendar size={18} strokeWidth={2.5} aria-hidden />
      <span>Book a Free Call</span>
    </a>
  );
}
