import { Metadata } from "next";
import AiForgeContent from "./AiForgeContent";

export const metadata: Metadata = {
  title: "AI Forge by Ardn — Custom AI Apps Built and Run for Your Business",
  description:
    "Ardn AI Forge builds custom AI applications for your business and runs them as a monthly service. Three tiers for small, mid-market, and enterprise. From discovery to production in 2–6 weeks.",
  keywords: [
    "AI app development",
    "custom AI applications",
    "AI for business",
    "AI as a service",
    "AI development agency",
    "AI implementation",
    "Salesforce AI",
    "Ardn AI Forge",
  ],
  alternates: {
    canonical: "https://ardncloudsolutions.com/ai-forge",
    languages: {
      "en-US": "https://ardncloudsolutions.com/ai-forge",
      "x-default": "https://ardncloudsolutions.com/ai-forge",
    },
  },
  openGraph: {
    title: "AI Forge by Ardn — Custom AI Apps Built and Run for Your Business",
    description:
      "80% of AI projects fail. Ours don't — because we build them AND run them. Three-tier monthly subscriptions for small, mid-market, and enterprise.",
    url: "https://ardncloudsolutions.com/ai-forge",
    siteName: "Ardn Cloud Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Forge by Ardn — Custom AI Apps Built and Run for Your Business",
    description:
      "80% of AI projects fail. Ours don't — because we build them AND run them.",
    site: "@ardn_cloud_sol",
  },
};

export default function AiForgePage() {
  return <AiForgeContent />;
}
