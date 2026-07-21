import { Metadata } from "next";
import DanceStudioSignupContent from "./DanceStudioSignupContent";

// Orphaned duplicate landing page — not in main nav, not in sitemap.ts.
// noindex so it doesn't compete with or dilute the indexed cluster pages.
export const metadata: Metadata = {
  title: "Dance Studio Software Signup - Ardn Cloud Solutions",
  description: "Start a free trial of Ardn's dance studio management software.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function DanceStudioSignupPage() {
  return <DanceStudioSignupContent />;
}
