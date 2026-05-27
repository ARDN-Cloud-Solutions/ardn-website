"use client";

import GuideHero from "@/components/buyers-guide/GuideHero";
import Sidebar from "@/components/buyers-guide/Sidebar";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function SalesforceMembershipContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  return (
    <>
      <GuideHero
        title="Best Salesforce Membership Management Tools for Associations & Organizations"
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
            {/* Intro Section */}
            <section className="mb-12">
              <div className="max-w-none text-black font-poppins space-y-4">
                <p className="text-heading-dark text-sm lg:text-base">
                  You might be losing members right now and not even know it! And, you won&apos;t know who&apos;s slipping away until it&apos;s too late. You miss the signs because their renewal email&apos;s in spam, their engagement data&apos;s scattered across platforms, and no one&apos;s tracking attendance drops.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  By the time you notice, they&apos;re gone!
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  This happens because the systems don&apos;t talk to each other. Data&apos;s fragmented, renewals are manual, and insights come too late.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  Tools like Salesforce Revenue Cloud are excellent for SaaS companies, but somewhere&hellip; they don&apos;t understand how associations work. So...you don&apos;t need generic subscription software.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  What you need is a Salesforce-native tool that understands complex membership tiers, engagement scoring, renewals, and self-service experiences that lighten your team&apos;s load.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  Before we take a look at the best Membership management tools, here&apos;s something to think about...
                </p>
              </div>
            </section>

            {/* What is Salesforce Membership Management? */}
            <h2
              id="what-is-salesforce-membership"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              What is Salesforce Membership Management?
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Salesforce has become the go-to foundation for membership organizations, and that&apos;s for a good reason. It&apos;s flexible, secure, and built to scale, giving teams a single platform to manage every aspect of the member relationship.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Salesforce membership management is all about using Salesforce&apos;s CRM to run every part of your member experience from the moment someone joins to renewals, events, and ongoing engagement.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Instead of switching between disconnected tools, everything lives in one place. You can see your members, their purchases, event attendance, renewal dates, and their engagement.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              But while Salesforce gives you the foundation to understand and engage your members, it doesn&apos;t include all the specialized tools you need to manage them day to day.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">
              So, what is Salesforce Membership Management software?
            </strong>

            <p className="text-heading-dark text-sm lg:text-base">
              A membership management tool takes that idea a bit further. It&apos;s a Salesforce-based solution that builds on the CRM&apos;s strengths, adding key features like automated renewals, recurring payments, event registration, member portals, directories, and engagement scoring.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              While Salesforce provides the core CRM structure, membership software, like ARDN&apos;s Storefront, layers on everything needed to actually manage and grow a thriving member community.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Now that we know what Salesforce membership management is and how it works, let&apos;s look at some of the top platforms that help teams put it into action.
            </p>

            {/* Best Tools Section */}
            <h2
              id="best-salesforce-membership"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Best Salesforce Membership Management Tools
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              To help you find the best fit, we&apos;ve reviewed leading Salesforce-native platforms based on factors like functionality, ease of setup, scalability, and real-world performance.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Over to the first tool in the lot!
            </p>

            {/* Tool #1 */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #1 ARDN Storefront: The All-in-One Native Salesforce Commerce Solution
            </strong>

            <Image
              src="/buyers-guide/ardn-all-in-one-ecommerce.webp"
              alt="ARDN Storefronts as the best Salesforce membership management tool"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              ARDN Cloud Solutions&apos; flagship product, ARDN Storefronts, gives you the ability to sell memberships, products, subscriptions, and event tickets, all without leaving Salesforce.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Because Storefronts is built directly on Salesforce, everything from renewals to event ticketing happens inside one ecosystem without the need for middleware, APIs, or third-party platforms to maintain.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">
              Core Features:
            </strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Native Membership Storefronts:</strong> A self-service portal for renewals, upgrades, and benefit access.</li>
              <li><strong>Automated Renewals &amp; Billing:</strong> Handles reminders, recurring payments, and membership updates automatically.</li>
              <li><strong>Event Management Integration:</strong> Lets you sell tickets, book appointments, manage attendance, and sync event data to member records.</li>
              <li><strong>One-Click Setup &amp; Customization:</strong> You don&apos;t need a coder&apos;s brain! Everything can be set up with just a few clicks.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">
              Why It Stands Out:
            </strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Storefronts takes away the integration headaches while combining e-commerce, membership management, and event ticketing in a single Salesforce-native environment.</li>
              <li>You get a 360° view of every member (from purchases and renewals to engagement data) without handling multiple systems.</li>
            </ul>

            <p className="text-heading-dark text-sm lg:text-base">
              Unlike other platforms, which rely on connectors and custom builds, Storefronts launches in days using drag-and-drop templates. Your entire storefront, inventory, and member data live in Salesforce from day one!
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              And if you&apos;re already running your operations on Salesforce, this one just makes sense!
            </p>

            {/* CTA Block */}
            <section className="bg-[#0D121F] rounded-2xl p-8 lg:p-12 my-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <h3 className="text-white text-xl lg:text-2xl font-bold m-0 max-w-xl leading-tight">
                Ready to see how it fits your business?
              </h3>
              <Button href="/contact-us" variant="orange" size="lg" rounded="full" className="whitespace-nowrap px-10">
                Take a Closer Look &rarr;
              </Button>
            </section>

            {/* Tool #2 */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #2 Nimble AMS: The Upgrade-Proof Platform for Growing Associations
            </strong>

            <Image
              src="/buyers-guide/ardn-nimble-ams.webp"
              alt="Nimble AMS as one of the Salesforce membership management tools"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Nimble AMS has long been the go-to choice for large associations that expect their technology to evolve with them. As a Salesforce-native AMS, it connects every part of your member experience, from onboarding and renewals to events and communities, within one secure platform.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">
              Core Features:
            </strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>360-degree member view:</strong> Every interaction, including transactions, event attendance, and certifications, is all tied to a single member record.</li>
              <li><strong>Detailed membership structures:</strong> There are individual, organization-wide, and family-tier plans, with role-based access and benefits.</li>
              <li><strong>Member self-service portal:</strong> Profile updates, renewals, event registration, and access to communities.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pros</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Express Pay &amp; One-Payment links</li>
              <li>Automated renewal workflows via Salesforce Flows</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Cons</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Higher upfront cost and TCO</li>
              <li>Can be complex for beginners</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>You can request the team for a quote</li>
              <li>The starting price is $180/user/month (staff licenses)</li>
            </ul>

            {/* Tool #3 */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #3 Fonteva: Enterprise-Level Flexibility and Event Power
            </strong>

            <Image
              src="/buyers-guide/ardn-fonteva.webp"
              alt="Fonteva — the membership management software for associations"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Built natively on Salesforce, Fonteva offers a complete membership, events, and payments ecosystem. After joining Togetherwork in 2021, Fonteva added deep native payment capabilities and enterprise-grade scalability, making it one of the most complete AMS options for large organizations.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">
              Core Capabilities:
            </strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Fonteva Membership:</strong> You get a centralized member database with portals, renewals, directories, and engagement tracking.</li>
              <li><strong>Fonteva Events:</strong> The platform offers complete event management, registration, ticketing, sponsorships, speakers, and hybrid event support.</li>
              <li><strong>Automation &amp; Reporting:</strong> Click-not-code workflows for renewals, approvals, and lifecycle triggers, plus real-time dashboards and Salesforce CRM Analytics.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pros</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>You can accept ACH, Apple Pay, or Google Pay</li>
              <li>Manage multicurrency transactions and detect fraud automatically</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Cons</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Includes extensive AMS features that may be unnecessary overhead for smaller organizations</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Starting at $145/user/month</li>
            </ul>

            {/* Tool #4 */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #4 AC MemberSmart: The Unified Platform for Member Engagement and Community
            </strong>

            <Image
              src="/buyers-guide/ardn-advanced-communities-acmembersmart.webp"
              alt="AC MemberSmart by Advanced Communities — the Salesforce member management app"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              AC MemberSmart is the flagship product by Advanced Communities. It is a Salesforce-native, all-in-one membership management platform that unifies member portals and event management. The platform combines community engagement, e-commerce, and payment processing all in one place.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">
              Core Capabilities:
            </strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Member Portal:</strong> Branded, customizable portal for member profiles, renewals, event registration, and resource access.</li>
              <li><strong>Control engagement scoring:</strong> You can measure how engaged your members are using the Engagement Scores metric.</li>
              <li><strong>Advanced Member Directory:</strong> With the Google Maps integration, you can easily find associations nearby.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pros</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Jobs board with career postings and professional development opportunities for the members</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Cons</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Requires Salesforce Experience Cloud License</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Starting at $119/user/month</li>
              <li>You can request a custom quote</li>
            </ul>

            {/* Tool #5 */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #5 SubscriptionFlow: Smarter Billing and Retention with AI Insights
            </strong>

            <Image
              src="/buyers-guide/ardn-subscription-flow.webp"
              alt="Salesforce membership management platform — SubscriptionFlow"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              SubscriptionFlow addresses the challenge of recurring memberships directly. Designed as an AI-native subscription management platform, it brings predictive intelligence to billing and retention while maintaining a secure integration with Salesforce CRM.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">
              Core Capabilities:
            </strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>AI Billing:</strong> You can manage your bills with output-based pricing based on AI-generated results.</li>
              <li><strong>Predictive Churn Management:</strong> It uses behavioral and transactional data to identify members at risk of cancellation.</li>
              <li><strong>Global Payment Gateway:</strong> Integrates with multiple gateways for secure and PCI-compliant transactions.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pros:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>One-click trial extension from the admin dashboard</li>
              <li>Automated dunning management</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Cons:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Separate from Salesforce. It is not a native platform.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Starts at $99/month</li>
            </ul>

            {/* Comparison Table */}
            <h2
              id="let's-comparethe-best-salesforce"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Let&apos;s Compare the Best Salesforce Membership Management Tools!
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">Here&apos;s a table for a quick recap:</p>

            <div className="my-8 overflow-x-auto rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#f1f5f9]">
              <div className="min-w-[700px]">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#4D5562]">
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Tool</th>
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Best For</th>
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Starting Price</th>
                      <th className="text-white font-bold text-left px-6 py-5">Salesforce Native</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "ARDN Storefronts", bestFor: "All-in-one Salesforce-native commerce and membership solution", price: "Custom (avg. $2K–$10K/yr)", native: "Yes" },
                      { tool: "Nimble AMS", bestFor: "Automatic Salesforce updates and zero downtime", price: "$180/user/month", native: "Yes" },
                      { tool: "Fonteva for Associations", bestFor: "Enterprise-grade customization and advanced event management", price: "$145/user/month", native: "Yes" },
                      { tool: "AC MemberSmart", bestFor: "Built-in community engagement", price: "$119/user/month", native: "Yes" },
                      { tool: "SubscriptionFlow", bestFor: "AI-powered recurring billing and churn prevention for Salesforce users", price: "From $99/month", native: "Integrates (not native)" },
                    ].map((row) => (
                      <tr key={row.tool}>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#1c2045] font-semibold">{row.tool}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.bestFor}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.price}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.native}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-heading-dark text-sm lg:text-base">
              Each tool brings something different to the table. Instead of looking for the &ldquo;best,&rdquo; focus on what fits your needs. List your must-haves, see how each platform measures up, and choose the one that truly works for your team. Here are a few things to keep in mind before you decide.
            </p>

            {/* What to Look For */}
            <h2
              id="what-to-look-for-in-a-salesforce"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-2 leading-tight scroll-mt-[120px]"
            >
              What to Look for in a Salesforce Membership Platform
            </h2>
            <p className="text-sm lg:text-base mb-6">
              It&apos;s important to consider more than just what appears attractive on paper!
            </p>

            <div className="space-y-8 my-8">
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">1. Unified Member Database</strong>
                <ul className="list-disc pl-6 text-heading-dark space-y-3">
                  <li>Keep every member&apos;s details, like contact info, preferences, renewals, events, and payments, in one central record.</li>
                  <li><strong>Why it matters:</strong> A single source of truth means fewer data errors and faster, smarter decisions.</li>
                </ul>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">2. Automated Renewals</strong>
                <ul className="list-disc pl-6 text-heading-dark space-y-3">
                  <li>Set up reminders, renewal links, and flexible tiers for individuals or organizations.</li>
                  <li><strong>Why it matters:</strong> Automation cuts manual work and helps prevent those quiet, unnoticed lapses in membership.</li>
                </ul>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">3. Native Payment Processing</strong>
                <ul className="list-disc pl-6 text-heading-dark space-y-3">
                  <li>Choose a tool that processes payments directly inside Salesforce, supporting cards, ACH, and digital wallets.</li>
                  <li><strong>Why it matters:</strong> Your financial data stays clean and current.</li>
                </ul>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">4. Built-In Event Management</strong>
                <ul className="list-disc pl-6 text-heading-dark space-y-3">
                  <li>It must manage registrations, speakers, and attendance, which should all be synced to member records.</li>
                  <li><strong>Why it matters:</strong> Events drive engagement, and when that data lives in Salesforce, you can actually track who&apos;s most involved.</li>
                </ul>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">5. Member Self-Service Portal</strong>
                <ul className="list-disc pl-6 text-heading-dark space-y-3">
                  <li>Give members a branded space to update profiles, renew, and register.</li>
                  <li><strong>Why it matters:</strong> Self-service tools improve retention and make your team&apos;s day a whole lot easier.</li>
                </ul>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">6. Reporting &amp; Insights</strong>
                <ul className="list-disc pl-6 text-heading-dark space-y-3">
                  <li>Dashboards that track renewals, churn, and engagement scores in real time.</li>
                  <li><strong>Why it matters:</strong> Seeing trends early lets you act before a member drifts away.</li>
                </ul>
              </div>
            </div>

            {/* Common Mistakes */}
            <h2
              id="Common-mistakes-you-must-avoid"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Common Mistakes You Must Avoid!
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Even with the best intentions, some membership projects hit the same snags again and again. Here are a few of the most common ones and how you can avoid them:
            </p>

            <ul className="list-disc pl-6 text-heading-dark space-y-6 my-6">
              <li>
                <strong>Choosing a tool just because it&apos;s cheaper.</strong>
                <p className="mt-2">It&apos;s tempting to go with the lower price tag, but the hidden costs of extra integrations, manual work, or limited support usually show up later. A slightly higher upfront investment often pays off in stability and peace of mind.</p>
              </li>
              <li>
                <strong>Assuming &ldquo;Salesforce-compatible&rdquo; means &ldquo;Salesforce-native.&rdquo;</strong>
                <p className="mt-2">This is a common mix-up. A product can integrate with Salesforce but still live outside it, meaning you&apos;ll deal with data sync issues or duplicate records. If you want everything under one roof, look for tools that are 100% native.</p>
              </li>
              <li>
                <strong>Overlooking the user experience.</strong>
                <p className="mt-2">A system might check every feature box but still feel clunky to your staff or members. If renewals or event registrations take too many clicks, people simply stop using it. Always test how it feels to navigate the platform day to day.</p>
              </li>
              <li>
                <strong>Skipping the data cleanup.</strong>
                <p className="mt-2">Most teams often rush into implementation with messy spreadsheets, and it always comes back to bite them. Clean data upfront means fewer migration hiccups and more reliable reports later.</p>
              </li>
              <li>
                <strong>Focusing on features instead of workflows.</strong>
                <p className="mt-2">It&apos;s easy to get caught up in flashy dashboards, but what really matters is how well the tool fits into your actual processes.</p>
              </li>
            </ul>

            {/* Don't Hit 'Buy' Yet! */}
            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">
              Don&apos;t Hit &apos;Buy&apos; Yet! Ask These Questions First
            </strong>
            <p className="text-heading-dark text-sm lg:text-base mb-6">
              Before you decide, here&apos;s a quick checklist that comes in handy!
            </p>

            <ul className="space-y-4 my-2">
              {[
                "Does the tool support your membership structure (individuals, organizations, or both)?",
                "Is it fully native to Salesforce, or does it rely on third-party integrations?",
                "How easily can staff automate renewals, upgrades, and payment reminders without coding?",
                "Does it handle complex billing models like tiered pricing or recurring payments smoothly?",
                "What analytics or dashboards are built-in to track engagement, churn, and renewals?",
                "How strong is the implementation and customer support? Do you get help during setup?",
                "Are there hidden fees (extra licenses, transaction costs, or feature add-ons)?",
              ].map((question, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <Check className="w-6 h-6 flex-shrink-0 text-green-700 bg-green-200 rounded-full p-1 mt-0.5" />
                  <p className="m-0 text-heading-dark text-sm lg:text-base">{question}</p>
                </li>
              ))}
            </ul>

            {/* Finding What Truly Fits */}
            <h2
              id="finding-what-truly-fits"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Finding What Truly Fits!
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Again, choosing the right tool isn&apos;t just about ticking all these boxes. You have to find the system that actually fits your organization.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              The one your team enjoys using. It should be a system that your team members never have to second-guess, simply because it just&hellip;works!
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Because if you&apos;re already working out of Salesforce every day, the last thing you need is another platform slowing you down.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              If that&apos;s what your team&apos;s been looking for, maybe it&apos;s worth taking a closer look at ARDN Storefronts.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              <strong>Simple. Native. Seamless.</strong>
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              Ready to see how it fits your business? We&apos;ll walk you through it.
            </p>
          </motion.main>
        </div>
      </div>
    </>
  );
}
