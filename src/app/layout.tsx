import type { Metadata } from "next";
import Script from "next/script";
import { Public_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCta from "@/components/layout/FloatingCta";
import { BookingQualifierHost } from "@/components/booking/BookingQualifier";
import { Toaster } from "react-hot-toast";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// SEO: site-wide defaults. Since 2026-09-28 Ardn presents as products +
// managed services: named industry products first, then custom software/AI.
// Salesforce stays in the keywords (consulting is still a service line) but
// out of the title and description.
export const metadata: Metadata = {
  metadataBase: new URL("https://ardncloudsolutions.com"),
  title:
    "Ardn Cloud Solutions | Industry Software, Custom AI & Managed Services",
  description:
    "Industry software like Club Steward and Nonprofit Management, plus custom software and AI, all run for you by a US team with 30+ years of experience.",
  keywords: [
    // Cat 2 — custom AI / dev agency intents
    "custom AI app development",
    "AI development agency",
    "custom software development",
    "AI-built products",
    "AI Forge Framework",
    "membership management platform",
    // Cat 1 + managed services — preserved Salesforce SEO surface
    "Salesforce managed services",
    "Salesforce consulting",
    "Salesforce implementation partner",
    "Salesforce-native cloud products",
    "Salesforce integration services",
    // GEO/Local
    "cloud solutions Orlando",
    "Florida software development",
    "Ardn Cloud Solutions",
  ],
  authors: [{ name: "Ardn Cloud Solutions" }],
  verification: {
    google: "hTRXgKOROx8dmiPgKzpZEZOw0fg6wuv8_skJW9LPUuQ",
  },
  openGraph: {
    title:
      "Ardn Cloud Solutions | Industry Software, Custom AI & Managed Services",
    description:
      "Industry software like Club Steward and Nonprofit Management, plus custom software and AI, all run for you by a US team with 30+ years of experience.",
    url: "https://ardncloudsolutions.com",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-share.jpg",
        width: 1200,
        height: 630,
        // SEO: outcome-focused alt covering both pillars of the business.
        alt: "Ardn Cloud Solutions — industry software products, custom AI and managed services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    // Self-referencing canonical at site root.
    canonical: "https://ardncloudsolutions.com",
    languages: {
      "en-US": "https://ardncloudsolutions.com",
      "x-default": "https://ardncloudsolutions.com",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    site: "@ardn_cloud_sol",
    title:
      "Ardn Cloud Solutions | Industry Software, Custom AI & Managed Services",
    description:
      "Industry software like Club Steward and Nonprofit Management, plus custom software and AI, all run for you by a US team with 30+ years of experience.",
    images: ["/images/ardn-share.jpg"],
  },
  icons: {
    icon: "/logo/favicon.jpeg",
  },
};

// GEO/Local SEO: Site-wide Organization schema with hard-coded NAP. Lives at
// root so every page carries a consistent business identity for search engines
// and inherits the Orlando, FL local signal. Page-level schemas (SoftwareApplication,
// WebPage, BreadcrumbList) supplement this on individual routes.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ardncloudsolutions.com/#organization",
  name: "Ardn Cloud Solutions",
  legalName: "Ardn Cloud Solutions",
  url: "https://ardncloudsolutions.com",
  logo: {
    "@type": "ImageObject",
    url: "https://ardncloudsolutions.com/logo/favicon.jpeg",
  },
  description:
    "Orlando-based software company. Ardn builds products for specific industries (Club Steward for golf and country clubs, Nonprofit Management and Membership Management), designs custom software and AI with its AI Forge Framework, and runs them as managed services, backed by 30+ years of technology and consulting experience.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Orlando",
    addressRegion: "FL",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "Global" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-407-815-5303",
      contactType: "sales",
      email: "contactus@ardncloudsolutions.com",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  ],
  // Full social profile set — kept in sync with the homepage Organization node
  // (src/app/page.tsx) so the shared @id #organization doesn't send conflicting
  // sameAs signals to search engines / knowledge-graph.
  sameAs: [
    "https://www.linkedin.com/company/ardn-cloud-solutions/",
    "https://www.facebook.com/profile.php?id=61569012437188",
    "https://x.com/ardn_cloud_sol",
    "https://www.instagram.com/ardncloudsolutions/",
    "https://www.youtube.com/@ardn_cloud_solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GEO/Local SEO: site-wide Organization JSON-LD with Orlando NAP. */}
        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RTHTZK8BNJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RTHTZK8BNJ');
            // Google Ads — enables remarketing audiences + conversion tracking.
            // The 'generate_lead' / 'book_call_click' events fired in the app
            // become Ads conversions once a conversion action + label is set up.
            gtag('config', 'AW-16551257913');
          `}
        </Script>
        {/* Microsoft Clarity — session replay + heatmaps + UX analytics. The
            standard Clarity loader runs after interactive so it does not
            block initial render. Replace the project ID below if a new one
            is provisioned. */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r8a2qh178u");
          `}
        </Script>
      </head>
      <body
        className={`${publicSans.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        <Header />
        {children}
        <Footer />
        {/* CRO: persistent Book-a-Free-Call CTA appears after the hero on every
            page except /contact-us. Drives Calendly bookings without requiring
            users to scroll back to the header. */}
        <FloatingCta />
        <BookingQualifierHost />
        <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { borderRadius: '10px', padding: '16px 24px', fontSize: '14px', fontWeight: 500, color: '#1e293b', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' } }} />
      </body>
    </html>
  );
}
