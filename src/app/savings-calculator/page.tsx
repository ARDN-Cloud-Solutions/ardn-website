import { Metadata } from "next";
import SavingsCalculatorContent from "./SavingsCalculatorContent";

export const metadata: Metadata = {
  title: "Stop Overpaying for Software — Ardn Cloud Solutions",
  description:
    "Find out exactly how much your business overpays for Mindbody, Zenoti, or Salesforce. Ardn Cloud Solutions builds custom platforms at flat monthly rates. Calculate your savings now.",
  alternates: {
    canonical: "https://ardncloudsolutions.com/savings-calculator",
    languages: {
      "en-US": "https://ardncloudsolutions.com/savings-calculator",
      "x-default": "https://ardncloudsolutions.com/savings-calculator",
    },
  },
  openGraph: {
    title: "Stop Overpaying for Software — Ardn Cloud Solutions",
    description:
      "Calculate exactly what you'd save replacing your software stack with a custom Ardn platform. Flat monthly rate. No per-user fees. You own it.",
    url: "https://ardncloudsolutions.com/savings-calculator",
    siteName: "Ardn Cloud Solutions",
    images: [
      {
        url: "/images/ardn-home-hero.webp",
        width: 1200,
        height: 630,
        alt: "Ardn Cloud Solutions — Savings Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Overpaying for Software — Ardn Cloud Solutions",
    description:
      "Calculate exactly what you'd save replacing your software stack with a custom Ardn platform. Flat monthly rate. No per-user fees. You own it.",
    site: "@ardn_cloud_sol",
  },
};

export default function SavingsCalculatorPage() {
  return <SavingsCalculatorContent />;
}
