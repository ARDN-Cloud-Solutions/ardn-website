import localFont from "next/font/local";

// Self-hosted copies of the Google Fonts the site uses (latin subset, woff2).
// next/font/google downloads fonts at build time, and Hostinger's build server
// can't always reach Google, which failed the 2026-10-09 deploy. Local files
// make the build independent of the network.

export const publicSans = localFont({
  src: "./PublicSans-latin-var.woff2",
  weight: "300 800",
  style: "normal",
  variable: "--font-public-sans",
  display: "swap",
});

export const poppins = localFont({
  src: [
    { path: "./Poppins-300-latin.woff2", weight: "300", style: "normal" },
    { path: "./Poppins-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./Poppins-500-latin.woff2", weight: "500", style: "normal" },
    { path: "./Poppins-600-latin.woff2", weight: "600", style: "normal" },
    { path: "./Poppins-700-latin.woff2", weight: "700", style: "normal" },
    { path: "./Poppins-800-latin.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

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
