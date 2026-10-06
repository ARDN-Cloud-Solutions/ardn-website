// Homepage FAQ data — single source of truth shared by the visible FAQ
// section (HomeContent) and the FAQPage JSON-LD (page.tsx). Google
// requires the rendered Q&A and the structured data to match exactly, so both
// import from here. Answers are written to be quotable by AI search engines
// (GEO) — concise, factual, and self-contained.
export const HOME_FAQS = [
  {
    q: "What does Ardn Cloud Solutions do?",
    a: "Ardn Cloud Solutions is an Orlando, Florida-based software company. We build products for specific industries (Club Steward for golf and country clubs, Nonprofit Management and Membership Management), design custom software and AI with our AI Forge Framework, and run everything we build as a managed service. The team brings 30+ years of technology and consulting experience.",
  },
  {
    q: "Where are you based, and do you work with clients outside Florida?",
    a: "We're based in Orlando, Florida. While we're proud to be a local Florida team, we work with clients across the United States and globally — engagements are remote-friendly from first call through implementation and ongoing support.",
  },
  {
    q: "What products and services do you offer?",
    a: "Three products: Club Steward (golf and country club management), Nonprofit Management (members and donors in one record for community centers, faith-based community centers and youth and family nonprofits) and Membership Management (gyms, studios, clubs and associations). Alongside them we build custom software and AI applications with AI Forge. Teams that run on Salesforce can also use Storefronts and License Guard.",
  },
  {
    q: "Do I have to use Salesforce to work with you?",
    a: "No. Our products and custom builds are standalone and connect to whatever you already run, including Salesforce, HubSpot and other tools. Storefronts and License Guard are the only offerings that require Salesforce.",
  },
  {
    q: "How does pricing work?",
    a: "Our products run on predictable monthly subscriptions that include building, hosting, and ongoing iteration — so there are no surprise bills. Consulting and managed services are scoped per engagement. The fastest way to get an exact quote is to book a free 30-minute demo.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 30-minute demo. We'll walk through your stack, map the highest-leverage opportunity, and give you a clear, fixed quote — no slides, no obligation. You can reach us at contactus@ardncloudsolutions.com or +1 (407) 815-5303.",
  },
];
