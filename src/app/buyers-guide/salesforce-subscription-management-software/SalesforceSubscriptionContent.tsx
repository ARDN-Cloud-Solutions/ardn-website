"use client";

import GuideHero from "@/components/buyers-guide/GuideHero";
import Sidebar from "@/components/buyers-guide/Sidebar";
import ProductFAQ from "@/components/products/ProductFAQ";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SalesforceSubscriptionContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  return (
    <>
      <GuideHero
        title="Best Salesforce Subscription Management Tools: A Buyer's Guide"
        buttonText="Getting Started with ARDN"
        buttonLink="/contact-us"
      />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 py-8 lg:py-16">
          <Sidebar />

          <motion.main
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            {/* Intro */}
            <section className="mb-12">
              <div className="max-w-none text-black font-poppins space-y-4">
                <p className="text-heading-dark text-sm lg:text-base">
                  A missed renewal can easily take out{" "}
                  <a
                    href="https://www.revenuecat.com/state-of-subscription-apps-2025/"
                    style={{ color: "#1a1a1a", textDecoration: "underline", textDecorationColor: "#FB7103" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5–10% of your annual revenue
                  </a>
                  , and it usually starts with something small. It could be a date that doesn&apos;t match, a payment status that&apos;s out of sync, or even a record that hasn&apos;t updated yet.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  None of it looks serious on its own, but it slows down your team every time they try to get a straight answer. When you&apos;re checking three places for one piece of subscription data, it&apos;s clear the system isn&apos;t working for you anymore.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  That&apos;s usually when Salesforce teams look toward Revenue Cloud. It feels like the clean, native way to get everything in one place. The only thing that makes you pause is the commitment it takes to get there. You have to think about the budget, the setup time, and the resources you need lined up. Yes, not a dealbreaker, but just something you have to seriously account for.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  So you end up looking at the space in between. Maybe the current setup isn&apos;t cutting it. Or&hellip;a full enterprise rollout isn&apos;t realistic this quarter. And somewhere between those two extremes, there are simpler ways to manage subscriptions inside Salesforce without adding more tools or stretching the team thin.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  Why don&apos;t we look at the best of those Salesforce subscription management software, the features that matter and their specifications so you can choose the one that fits the bill (literally!)
                </p>
              </div>
            </section>

            {/* How to Choose */}
            <h2
              id="how-to-choose"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              How to Choose a Subscription Management Software
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Before you compare tools, it helps to know what actually matters for subscription-heavy teams. The goal is to understand which factors genuinely affect your day-to-day operations and which ones are just &ldquo;nice to have.&rdquo;
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              You can use the criteria below as your baseline and prioritize what aligns with how your team works.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">Here&apos;s a quick overview:</p>

            <div className="my-8 overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <div className="min-w-[600px]">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#4D5562]">
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Category</th>
                      <th className="text-white font-bold text-left px-6 py-5">What to Look For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: "Cost Model", what: "Check if you're paying per user, per transaction, or a mix. Make sure there aren't extra fees for integrations, setup, or payment gateways." },
                      { category: "Integration & Data Fragmentation", what: "Native Salesforce tools keep everything in one place. External tools need connectors, which means sync delays and more upkeep." },
                      { category: "Implementation Speed", what: "Some tools go live in a few weeks. Mid-market tools take longer. Big Salesforce builds can take months." },
                      { category: "Subscription Complexity", what: "Simple monthly billing is easy. Usage-based or custom plans need stronger platforms." },
                      { category: "Self-Service Capabilities", what: "Look for a portal where customers can manage plans, update cards, download invoices, and fix payment issues on their own." },
                      { category: "Revenue Recognition & Compliance", what: "Check for ASC 606 / IFRS 15 support, regional tax handling, and proper deferred revenue features." },
                      { category: "Payment Gateway Support", what: "Make sure it supports your gateway, multiple currencies, and smooth refund or chargeback workflows." },
                      { category: "Reporting & Analytics", what: "You should easily see MRR, churn, retention, LTV, and upsell trends." },
                      { category: "Support & Community", what: "Look for fast support, clear documentation, and an active partner ecosystem." },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#1c2045] font-semibold align-top">{row.category}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.what}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-heading-dark text-sm lg:text-base">
              Now, not every box needs a check mark. A better approach is to weigh what matters most to you. For example, if keeping everything native to Salesforce is a priority, that might carry 40% of your scoring. If fast implementation matters more than deep complexity, give that higher weight.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Think of this list as a guide, not a checklist. Pick the criteria that suit your team, and let the rest stay in the background.
            </p>

            {/* Best Tools Intro */}
            <h2
              id="best-salesforce-subscription"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Best Salesforce Subscription Management Software
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              To keep things simple and genuinely useful, we&apos;ve broken the tools into two clear sections based on how they work inside your workflow:
            </p>
            <ol className="list-decimal pl-6 space-y-2 my-4 text-heading-dark text-sm lg:text-base">
              <li><strong>Salesforce-native subscription management tools</strong>, and</li>
              <li><strong>Popular integrations that connect to Salesforce.</strong></li>
            </ol>
            <p className="text-heading-dark text-sm lg:text-base">Let&apos;s start with the Salesforce-native ones.</p>

            {/* Tool #1 — ARDN */}
            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #1. ARDN Storefronts: Your All-in-one Salesforce Native Solution
            </strong>

            <Image
              src="/buyers-guide/ardn-all-in-one-ecommerce.webp"
              alt="ARDN Storefronts, the all-in-one native software for Salesforce subscription management"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              ARDN Storefronts is for teams who want to run subscriptions, memberships, e-commerce, appointments, and ticketing without ever leaving Salesforce. This platform is perfect for you if your entire business already sits inside Salesforce and you don&apos;t want to deal with integrations, connectors, middleware costs, or 6-month implementation cycles. And there are no per-user costs, unlike other platforms.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Native Salesforce Ecommerce:</strong> Your storefront, checkout, orders, and customer data live entirely inside Salesforce.</li>
              <li><strong>Subscription Automation:</strong> You get automated renewals, membership tiers, grace periods, family plans, and tier-based benefits, all driven by Salesforce workflows.</li>
              <li><strong>Product &amp; Pricebook Management:</strong> Unlimited SKUs, multiple pricebooks, dynamic pricing rules, and support for selling from custom Salesforce objects.</li>
              <li><strong>Checkout &amp; Payments:</strong> The platform offers native Stripe and Paymentus support, PCI-compliant processing, and payment types like ACH, credit card, GPay, Apple Pay, and PayPal. Multi-currency support (150+ currencies) and support for 20+ payment gateways.</li>
              <li><strong>Appointments &amp; Event Ticketing:</strong> Everything, including appointment booking, staff availability, event registration, and automated reminders, is integrated directly into CRM records.</li>
            </ul>

            <p className="text-heading-dark text-sm lg:text-base">
              If you already pay for Salesforce, why pay for five more systems to do what Salesforce can do natively?
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              With ARDN Storefronts, you&apos;re walking away with a specialist team known for helping mid-market companies get enterprise-level outcomes without enterprise-level pricing!
            </p>

            {/* CTA Block */}
            <section className="bg-[#0D121F] rounded-2xl p-8 lg:p-12 my-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <h3 className="text-white text-xl lg:text-2xl font-bold m-0 max-w-xl leading-tight">
                Ready to see how it fits your business?
              </h3>
              <Button href="/contact-us" variant="orange" size="lg" rounded="full" className="whitespace-nowrap px-10">
                Get in Touch!
              </Button>
            </section>

            {/* Tool #2 — Fonteva */}
            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #2. Fonteva: For Associations, Nonprofits &amp; Member-Driven Subscriptions
            </strong>

            <Image
              src="/buyers-guide/ardn-fonteva-ecommerce-as-one.webp"
              alt="Fonteva as one of the Salesforce subscription management software"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Fonteva is built for teams that run on memberships, renewals, and events and not just traditional SaaS billing. Since it sits natively inside Salesforce, you get cleaner data and fewer sync headaches.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Membership Subscriptions &amp; Dues Management:</strong> You can create tiered memberships, recurring dues, and flexible pricing for every type of member you manage.</li>
              <li><strong>Auto-Renewal Workflows:</strong> Members can easily turn auto-renew on/off in the portal, and you can configure renewal logic per plan.</li>
              <li><strong>Self-Service Member Portal:</strong> Members can update details and renew and manage subscriptions themselves.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">What to Look Out For:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>It is primarily for membership management. And the per-user licensing becomes expensive at scale.</li>
              <li>Some users find the platform complicated to use.</li>
            </ul>
            <p className="text-heading-dark my-6">
              If per-user licensing is what&apos;s driving your cost, that&apos;s often the bigger problem to solve first.{" "}
              <Link href="/reduce-salesforce-license-costs" className="text-primary font-semibold hover:underline">
                See how to reduce your Salesforce license costs
              </Link>{" "}
              — or{" "}
              <Link href="/compare/salesforce-seat-cost-vs-custom-portal" className="text-primary font-semibold hover:underline">
                the Salesforce seat-cost vs. custom-portal breakdown
              </Link>.
            </p>

            {/* Tool #3 — StoreConnect */}
            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #3. StoreConnect: For Multi-Location Retail, Nonprofits &amp; Unified Commerce
            </strong>

            <Image
              src="/buyers-guide/ardn-store-connect.webp"
              alt="StoreConnect as a native subscription management software for Salesforce"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              StoreConnect is one of the few Salesforce-native platforms that lets you run e-commerce, POS, memberships, and subscriptions from the same place. It works especially well for brands that sell across online and in-store channels or those that mix subscriptions with things like donations, events, or memberships. And it does not need Experience Cloud licenses to operate.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Evergreen &amp; Fixed-Term Subscriptions:</strong> You can run ongoing subscriptions or time-bound memberships without extra plugins.</li>
              <li><strong>Built-In Recurring Billing:</strong> Charge cards on a schedule, manage renewals, and process recurring payments inside Salesforce.</li>
              <li><strong>Subscription Management Without Charging:</strong> If you bill outside of Salesforce but need to keep track of subscriptions over time, you can do so without collecting payments.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">What to Look Out For:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Higher cost than simple subscription tools.</li>
              <li>Transaction fees (0.2%–0.6%) add up for high-volume brands.</li>
            </ul>

            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Next up, let&apos;s look at the best non-native Salesforce subscription management software&hellip;
            </p>

            {/* Tool #4 — Chargebee */}
            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #4. Chargebee: For SaaS, Subscription-First Companies with Usage-Based &amp; Hybrid Billing Models
            </strong>

            <Image
              src="/buyers-guide/ardn-chargebee.webp"
              alt="Chargebee as a non-native subscription management platform for Salesforce"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              If you&apos;re running a SaaS product or a recurring revenue model that shifts between flat-fee, usage-based, and hybrid pricing, Chargebee gives you a lot of flexibility right out of the box.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Everything is in Chargebee and syncs to Salesforce through APIs. So you&apos;ll manage subscriptions inside the platform and push customer/billing data into Salesforce.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Flexible Pricing Models:</strong> You can handle flat-fee, usage-based, hybrid, bundle-based, and legacy &ldquo;grandfathered&rdquo; plans without custom code.</li>
              <li><strong>Subscription Lifecycle Automation:</strong> Easily automate trial conversions, upgrades, downgrades, proration, and renewal workflows.</li>
              <li><strong>Subscription Analytics:</strong> The platform gives you a detailed view of MRR/ARR trends, churn cohorts, and customer LTV and recognizes revenue per ASC 606 / IFRS 15.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">What to Look Out For:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Some G2 users have reported poor user experience and difficulty in initial setup.</li>
            </ul>

            {/* Tool #5 — Stripe */}
            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #5. Stripe Billing: For SaaS Startups &amp; Subscription-First SMBs
            </strong>

            <Image
              src="/buyers-guide/ardn-stripe.webp"
              alt="Stripe Billing as a non-native Salesforce subscription management software"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Stripe Billing is a developer-friendly recurring billing platform. Its no-code tools make it easy to spin up pricing tables, trials, and recurring billing even if you&apos;re still a lean SaaS team. It keeps your billing logic flexible, fast, and scalable as you experiment with pricing.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Flexible Pricing Models:</strong> You can run flat-fee subscriptions, usage-based billing, hybrid pricing, or one-time charges.</li>
              <li><strong>Smart Payment Retries:</strong> Stripe automatically retries failed payments at the best predicted time. This helps to recover revenue you would&apos;ve otherwise lost to card failures.</li>
              <li><strong>Global Payments &amp; Multi-Currency:</strong> You can accept 100+ payment methods in 40+ languages and support customers across 135+ countries.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">What to Look Out For:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>It&apos;s low code, not no code. You might need the help of a developer for customizations.</li>
            </ul>

            {/* Tool #6 — Recurly */}
            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #6. Recurly: For Mid-Market to Enterprise Subscription Businesses with Complex Billing
            </strong>

            <Image
              src="/buyers-guide/ardn-recurly-subscription.webp"
              alt="Recurly as a subscription management tool for businesses"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Recurly is a subscription management tool built to help businesses launch plans quickly, handle billing changes smoothly, and keep recurring revenue predictable. The real-time integration is strong enough that your team can still run an efficient quote-to-cash process right from Salesforce.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Subscriber Lifecycle &amp; Dunning Automation:</strong> You get automated lifecycle emails, customizable dunning workflows, and the ability to tune recovery strategies based on the plan type.</li>
              <li><strong>Automated Billing &amp; Invoicing:</strong> Recurring billing runs on autopilot, but you still have the option for manual charges or credits when you need them.</li>
              <li><strong>AI Growth Assistant (Compass):</strong> You can create plans with natural language, generate API snippets instantly, and get alerts when something looks off.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">What to Look Out For:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>
                <a
                  href="https://www.g2.com/products/recurly/reviews?filters%5Bsentiment_snippet%5D=1071041&qs=pros-and-cons#reviews"
                  style={{ color: "#1a1a1a", textDecoration: "underline", textDecorationColor: "#FB7103" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  G2 users
                </a>{" "}
                mention that they struggle with analytics and reporting. Most teams export data for deeper analysis.
              </li>
            </ul>

            {/* Tool #7 — Zuora */}
            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #7. Zuora: For Enterprise Subscription &amp; Monetization with Complex Billing
            </strong>

            <Image
              src="/buyers-guide/ardn-zuora.webp"
              alt="Zuora as a non-native tool for Salesforce subscription management"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Zuora is a platform for businesses that have to deal with complicated billing, usage-based pricing, and operations around the world. It was made for big teams that need a system that can handle a lot of work, support many markets, and manage complicated revenue workflows without breaking down.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Multi-Gateway and Payment Orchestration:</strong> Connect to more than 40 gateways and 20 payment methods, set up routing logic, and switch to backup providers when necessary.</li>
              <li><strong>Metered Billing:</strong> You can keep track of how much a customer uses in real time, meter it correctly, and charge them based on how much they actually use.</li>
              <li><strong>Flexible Pricing Models:</strong> Zuora supports all kinds of flexible pricing models, including one-time charges, flat subscriptions, usage-based billing, tiered volume models, and custom billing periods.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">What to Look Out For:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>UI can be complex and has a steep learning curve. A G2 user shared that it is a bit overwhelming for those who haven&apos;t worked with complex SaaS systems before.</li>
              <li>Implementation time is massive!</li>
            </ul>

            {/* Tool #8 — Maxio */}
            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #8. Maxio: For Mid-Market SaaS With Complex Billing
            </strong>

            <Image
              src="/buyers-guide/ardn-maxio.webp"
              alt="Maxio as one of the Salesforce subscription management integrations"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Maxio (formerly Chargify) positions itself as billing, revenue recognition, and financial reporting software built for mid-market B2B SaaS. It sits outside and connects via an integration package. The platform processes billions in recurring revenue and serves 1,000+ SaaS companies.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Automated Billing:</strong> You can automate invoice creation and recurring billing in 150+ currencies.</li>
              <li><strong>Customer Self-Service Portal:</strong> Everything is customer-managed, including upgrades, downgrades, cancellations, payment method updates, and proration.</li>
              <li><strong>Real-Time Revenue Metrics:</strong> You get insights into MRR, ARR, churn, renewals, cohorts, and forecasting dashboards.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">What to Look Out For:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Some users have reported confusion in terms of reporting and metric inaccuracies.</li>
            </ul>

            {/* Comparison Table */}
            <h2
              id="let's-compare"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Let&apos;s Compare The Best Salesforce Subscription Management Software!
            </h2>

            <div className="my-8 overflow-x-auto rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#f1f5f9]">
              <div className="min-w-[800px]">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#4D5562]">
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Tool Name</th>
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Best For</th>
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Implementation Time</th>
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Starting Price</th>
                      <th className="text-white font-bold text-left px-6 py-5">Native to Salesforce</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "ARDN Storefronts", bestFor: "Native Salesforce ecommerce + subscriptions + memberships", time: "2–4 weeks", price: "$2,500/comp/month (Custom Pricing)", native: "Yes" },
                      { name: "Fonteva", bestFor: "Purpose-built for nonprofits, associations, memberships", time: "3–6 months", price: "$175/user/month + extra Salesforce license", native: "Yes" },
                      { name: "StoreConnect", bestFor: "Multi-location retail + POS + subscriptions + memberships", time: "4–12 weeks", price: "$995/month + 0.2–0.6% transaction fee", native: "Yes" },
                      { name: "Chargebee", bestFor: "Advanced usage-based & hybrid pricing models", time: "4–8 weeks", price: "$599/month (billed monthly)", native: "No" },
                      { name: "Stripe Billing", bestFor: "Affordable, developer-friendly, fast implementation", time: "1–4 weeks", price: "Pay-as-you-go $0.029 + $0.30/transaction", native: "No" },
                      { name: "Recurly", bestFor: "Best-in-class revenue recovery", time: "4–8 weeks", price: "$1M minimum TPV (custom pricing)", native: "No" },
                      { name: "Zuora", bestFor: "Enterprise-grade usage-based billing & global scale", time: "6–18+ months", price: "Contact sales", native: "No" },
                      { name: "Maxio", bestFor: "Mid-market SaaS with ASC 606 compliance & AR management", time: "3–10 months", price: "$599/month (Grow plan)", native: "No" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#1c2045] font-semibold">{row.name}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.bestFor}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.time}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.price}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.native}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Benefits */}
            <h2
              id="benefits-of-subscription"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Benefits of Subscription Management Software
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Most subscription businesses reach a point where billing starts getting in the way of everything else. And it&apos;s not just about upgrading a tool anymore. It&apos;s about removing all the small, repetitive tasks that slow your team down and pile up as you grow.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Subscription management software keeps the operational side of subscriptions running quietly so your team doesn&apos;t spend half the month fixing the same issues.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Here&apos;s what that actually means in your day-to-day:
            </p>

            <div className="space-y-8 my-8">
              <div>
                <strong className="block text-xl lg:text-2xl  font-semibold text-heading-dark mb-3">It Cuts Manual Billing Work and Prevents Costly Errors</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  When billing sits inside spreadsheets, mistakes are almost guaranteed. Sometimes a renewal doesn&apos;t go out or an invoice amount is wrong. Once the customer count goes up, these errors just multiply.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  A proper subscription system takes over the entire workflow. Invoices get sent on time. Renewals happen automatically.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">It Makes Cash Flow More Predictable</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Revenue becomes unpredictable when a big part of it depends on someone remembering to follow up on failed cards. With automated recovery and smarter retry cycles, most of those payments are fixed before they become a problem.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  You start seeing steadier monthly revenue, and forecasting becomes a lot less stressful. It&apos;s easier to plan when you&apos;re not bracing for surprises at the end of every month.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">It Keeps Your Revenue Recognition Clean and Compliant</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  If you&apos;ve ever handled revenue recognition manually for subscriptions, you already know how quickly it turns into a mess. Between upgrades, usage, discounts, multi-year terms, and performance obligations, the rules get complicated pretty fast.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  Subscription platforms sort all of this out automatically. Month-end becomes faster and cleaner because you&apos;re not rewriting journal entries every time a customer changes something.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">It Lets You Grow Without Adding More Finance Staff</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Manual billing might work with a small base of customers. But, once you cross a certain number, the workload doubles even if your team doesn&apos;t. A subscription system grows with you.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">It Gives You Real-Time Revenue Insights</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Instead of waiting for monthly reports, subscription platforms show you how revenue is shifting in real time. You can see churn, upgrades, downgrades, and MRR the moment they happen.
                </p>
              </div>
            </div>

            <p className="text-heading-dark text-sm lg:text-base">
              In short, with subscription management software, you spend less time fixing billing issues and have a steadier cash flow, and customers churn less. And expansion becomes a lot lighter to manage!
            </p>

            {/* Pitfalls */}
            <h2
              id="most-common-pitfalls"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Most Common Pitfalls and How to Avoid Them
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Even with a solid understanding of subscription platforms, a few mistakes show up again and again. They usually happen when you move fast or choose a tool based on early impressions instead of long-term needs.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Here are the traps most companies fall into and how you can avoid them:
            </p>

            <div className="space-y-8 my-8">
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Choosing something that only looks native</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  A lot of teams pick a tool because it seems native to Salesforce, but the experience falls apart once they start using it. The gaps show up in billing logic, reporting, and integrations. It feels simple in the demo but becomes hard to scale in real life.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  A quick label can&apos;t replace true native abilities. So you need to look deeper at how the product actually works inside Salesforce instead of trusting the surface.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Assuming the implementation will be quick</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Billing setups always take longer than expected. Pricing rules, taxes, data cleanup, and integrations add real complexity. Giving the project more time upfront removes most of the stress later.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Weak integrations between systems</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  When data syncs slowly, every team works with outdated information. Sales misses upsells, finance double-checks everything, and support gets unnecessary tickets. Clean integrations fix most of this.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Picking the cheapest option</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Cheaper tools usually cost more later in fixes, workarounds, and manual effort. What looks affordable at the start often becomes expensive once teams begin using it every day.
                </p>
              </div>
            </div>

            {/* Key Questions */}
            <h2
              id="key-questions"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Key Questions to Ask Before Choosing a Subscription Management Platform for Salesforce
            </h2>

            <p className="text-heading-dark text-sm lg:text-base mb-6">
              You can use this as a yes/no checklist to understand what you actually need before choosing a platform.
            </p>

            <ul className="space-y-4 my-2">
              {[
                "Do you need simple recurring billing or something more complex like usage-based or hybrid pricing?",
                "Are you already running your operations on Salesforce, and does the tool need to work tightly with it?",
                "Do you need revenue recognition that's fully compliant and automated?",
                "Will you be selling in multiple regions with different currencies and tax rules?",
                "How much of your team's time can realistically go into implementation?",
                "Do you have developers available, or do you need something your ops team can run on their own?",
                "Do you need a customer portal your team can customize without heavy engineering work?",
                "How fast are you planning to scale, and can the tool support that without forcing you to rebuild later?",
                "What's your actual budget when you combine subscription fees + implementation + ongoing maintenance?",
                "Do you have existing subscription data that needs clean migration?",
              ].map((question, i) => (
                <li key={i} className="flex gap-4 items-start list-none">
                  <span className="w-6 h-6 flex-shrink-0 rounded-full bg-[#FF7A00] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="m-0 text-heading-dark text-sm lg:text-base">{question}</p>
                </li>
              ))}
            </ul>

            {/* Final Call */}
            <h2
              id="what's-your-final-call"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              What&apos;s Your Final Call?
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              By the time you compare a few Salesforce subscription management tools side by side, you pretty much know what you&apos;re looking for. Something that doesn&apos;t turn everyday billing into a mini-project. A setup that sends what it needs to send, catches half the issues before you notice them, and doesn&apos;t wobble the moment your customer list gets bigger.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              And honestly, when billing stops making noise in the background, everything else feels lighter. Your team won&apos;t be chasing tiny errors. Cash flow won&apos;t be throwing surprises at you. And mainly, you will not be spending half your week wondering, &ldquo;Why did this invoice go out like that?&rdquo;
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              It just&hellip; works the way it should.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              If you&apos;re still figuring out which platform actually fits your business and not just your wish list, ARDN Storefronts is a pretty good place to start. If it clicks, great!
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              And if you ever want to run your setup by someone or sense-check a couple of options, just reach out. No pitch or pressure. Just a quick chat to help you get to the right answer.
            </p>
            

            {/* CTA Block */}
            <section className="bg-[#0D121F] rounded-2xl p-8 lg:p-12 my-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <h3 className="text-white text-xl lg:text-2xl font-bold m-0 max-w-xl leading-tight">
                Ready to see how it fits your business?
              </h3>
              <Button href="/contact-us" variant="orange" size="lg" rounded="full" className="whitespace-nowrap px-10">
                Get in Touch!
              </Button>
            </section>

          </motion.main>
        </div>

      <ProductFAQ
        className="pb-5 md:pb-16 lg:pb-24"
        eyebrow="YOUR QUESTIONS ANSWERED"
        heading="Frequently Asked Questions"
        headingHighlight="About Storefronts"
        faqs={[
          {
            question: "1. What is Salesforce Subscription Management?",
            answer:
              "Salesforce subscription management is how you run all your subscription billing, renewals, and recurring revenue from inside Salesforce instead of using separate billing tools. When a deal closes in Salesforce, the subscription starts, invoices go out, payments sync, and every team sees the same customer info without chasing multiple systems.",
          },
          {
            question: "2. Can I manage subscriptions in Salesforce without Revenue Cloud?",
            answer:
              "Yes, for sure. Revenue Cloud is for huge enterprises. Most companies use a native Salesforce app like ARDN or Fonteva, or an external tool like Chargebee or Recurly. It’s faster, cheaper, and easier than spending months and hundreds of thousands on Revenue Cloud.",
          },
          {
            question: "3. What’s the best subscription tool for nonprofits?",
            answer:
              "If you’re a smaller nonprofit with simple needs, ARDN is a more affordable option. Fonteva is also a good fit but is better suited for membership-focused companies. It handles renewals, events, and community features without workarounds",
          }
        ]}
      />    
      </div>
    </>
  );
}
