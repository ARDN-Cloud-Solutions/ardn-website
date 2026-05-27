import type { Metadata } from "next";
import Script from "next/script";
import { Public_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ardncloudsolutions.com"),
  title: "Ardn Cloud Solutions | Empowering Digital Excellence",
  description: "ARDN Cloud Solutions offers expert Salesforce services — storefronts, integrations, optimisation, and support. See what we can build for your business.",
  keywords: ["Salesforce Storefronts", "Salesforce Integrations", "Salesforce Optimization", "Managed Services", "Digital Transformation", "Ardn Cloud Solutions"],
  authors: [{ name: "Ardn Cloud Solutions" }],
  verification: {
    google: "hTRXgKOROx8dmiPgKzpZEZOw0fg6wuv8_skJW9LPUuQ",
  },
  openGraph: {
    title: "Ardn Cloud Solutions",
    description: "Expert Salesforce services — storefronts, integrations, optimisation, and support.",
    url: "https://ardncloudsolutions.com",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Cloud Solutions - Salesforce Expertise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
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
    title: "Ardn Cloud Solutions",
    description: "Expert Salesforce services — storefronts, integrations, optimisation, and support.",
    images: ["/images/ardn-home-hero.webp"],
  },
  icons: {
    icon: "/logo/favicon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
          `}
        </Script>
      </head>
      <body
        className={`${publicSans.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { borderRadius: '10px', padding: '16px 24px', fontSize: '14px', fontWeight: 500, color: '#1e293b', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' } }} />
      </body>
    </html>
  );
}
