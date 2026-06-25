// Homepage FAQ data — single source of truth shared by the visible FAQ
// section (LandingPageContent) and the FAQPage JSON-LD (page.tsx). Google
// requires the rendered Q&A and the structured data to match exactly, so both
// import from here. Answers are written to be quotable by AI search engines
// (GEO) — concise, factual, and self-contained.
export const HOME_FAQS = [
  {
    q: "What does Ardn Cloud Solutions do?",
    a: "Ardn Cloud Solutions is an Orlando, Florida-based team that builds custom AI applications with our proprietary AI Forge Framework, ships a suite of Salesforce-native cloud products, and provides Salesforce consulting and managed services — backed by 30+ years of combined Salesforce experience. We design, build, host, and operate software for one predictable monthly fee.",
  },
  {
    q: "Where are you based, and do you work with clients outside Florida?",
    a: "We're based in Orlando, Florida. While we're proud to be a local Florida team, we work with clients across the United States and globally — engagements are remote-friendly from first call through implementation and ongoing support.",
  },
  {
    q: "What products and services do you offer?",
    a: "Six products: AI Forge (custom AI apps built and run for you), Storefronts (Salesforce-native ecommerce), Salesforce Payments (quote-to-cash inside Salesforce), License Guard (reclaim unused Salesforce licenses), AI-Powered Support / ReplyCX (no-code AI customer support), and Membership Management (for gyms, YMCAs, clubs, and associations). We also offer Salesforce consulting and managed services.",
  },
  {
    q: "Do I have to use Salesforce to work with you?",
    a: "No. AI Forge and Membership Management are standalone and integrate with whatever stack you run — Salesforce, HubSpot, or other tools. Products like Storefronts, Salesforce Payments, and License Guard are Salesforce-native. We meet you wherever your business already runs.",
  },
  {
    q: "How does pricing work?",
    a: "Our products run on predictable monthly subscriptions that include building, hosting, and ongoing iteration — so there are no surprise bills. Salesforce consulting and managed services are scoped per engagement. The fastest way to get an exact quote is to book a free 30-minute demo.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 30-minute demo. We'll walk through your stack, map the highest-leverage opportunity, and give you a clear, fixed quote — no slides, no obligation. You can reach us at contactus@ardncloudsolutions.com or +1 (407) 815-5303.",
  },
];
