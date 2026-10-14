import localFont from "next/font/local";

// Imported only by the pages that use a display serif, so the rest of the
// site (and the Google Ads landing pages) does not preload these files.

/** Display serif for the product pages, home and /work (CSS variable --pp-serif). */
export const ppSerif = localFont({
  src: [
    { path: "./CormorantGaramond-latin-var.woff2", weight: "500 600", style: "normal" },
    { path: "./CormorantGaramond-italic-latin-var.woff2", weight: "500 600", style: "italic" },
  ],
  variable: "--pp-serif",
  display: "swap",
});

/** Display serif for the Club Steward page (CSS variable --gc-serif). */
export const gcSerif = localFont({
  src: [
    { path: "./CormorantGaramond-latin-var.woff2", weight: "500 600", style: "normal" },
    { path: "./CormorantGaramond-italic-latin-var.woff2", weight: "500 600", style: "italic" },
  ],
  variable: "--gc-serif",
  display: "swap",
});
