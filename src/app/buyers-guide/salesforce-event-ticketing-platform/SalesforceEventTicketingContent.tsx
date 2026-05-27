"use client";

import GuideHero from "@/components/buyers-guide/GuideHero";
import Sidebar from "@/components/buyers-guide/Sidebar";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function SalesforceEventTicketingContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  return (
    <>
      <GuideHero
        title="7 Top Salesforce Event and Ticketing Platforms"
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
                  When you spend months planning an event, you can&apos;t just let disorganized data ruin it at the last moment. This can happen when your customer records stay in Salesforce, but you have your tickets sold on one platform, attendee data stored elsewhere, and payments processed through a third tool.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  If you look at the recent stats closely, more than{" "}
                  <a
                    href="https://www.salesforce.com/in/news/press-releases/2021/07/28/new-study-finds-more-than-70-of-automation-initiatives-are-held-back-by-security-concerns-and-data-silos/"
                    style={{ color: "#1a1a1a", textDecoration: "underline", textDecorationColor: "#FB7103" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    70% of teams deal with data silos
                  </a>{" "}
                  regularly, and most of them get stuck while connecting event registration, ticketing, and CRM systems.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  Now, if you try to handle it manually, the error rates for data entry range from 1% to 4%, meaning for every 100 registrations, 1 to 4 entries are wrong. That becomes a lot in the long run! And, when ticketing is not done right, you end up overscheduling and duplicating records.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  You need an event and ticketing platform that has built-in management solutions to eliminate all these errors.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  But yes, choosing one tool can be confusing and time-consuming. So&hellip;to help you decide, we picked 7 of the best event and ticketing platforms for Salesforce, listed their key features and prices, and noted their downsides, so you can make the best choice!
                </p>
              </div>
            </section>

            {/* Native vs API */}
            <h2
              id="native-vs-api"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Native vs. API-Integrated Solutions: What&apos;s the Difference?
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              While it might look obvious, getting this distinction right is crucial for the choice you make.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              A Salesforce native tool is one that is entirely built inside Salesforce. It is made using Salesforce objects, Apex, Lightning components, and Salesforce APIs. There are no external servers, databases, or connectors involved.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              An API-integrated solution is a third-party ticketing platform that is built outside of Salesforce. It connects to your CRM using an API or other middleware.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">Here&apos;s how it works:</p>

            <div className="my-8 overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <div className="min-w-[600px]">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#4D5562]">
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Step</th>
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Native Salesforce</th>
                      <th className="text-white font-bold text-left px-6 py-5">API-Integrated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { step: "Attendee Registers", native: "Registers on ticketing form", api: "Registers on external platform" },
                      { step: "Data Creation", native: "Salesforce record created instantly", api: "Record created on external platform" },
                      { step: "Payment Processing", native: "Payment processed & stored in Salesforce immediately", api: "Payment stored on external platform" },
                      { step: "Salesforce Sync", native: "Already in Salesforce (no sync needed)", api: "The API or middleware syncs data to Salesforce (scheduled or every 15 minutes to hours)" },
                      { step: "Speed", native: "Instant (seconds)", api: "Delayed (15 minutes to several hours)" },
                      { step: "Duplicate Risk", native: "Zero (single record created)", api: "High (sync errors can create duplicates)" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#1c2045] font-semibold align-top">{row.step}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569] align-top">{row.native}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569] align-top">{row.api}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-heading-dark text-sm lg:text-base">
              Your choice must depend on your needs and how your existing system works. That is, if you have fewer registrations or see lesser chances of potential risks and have dedicated help to handle a third-party tool, go for an integration. But if what you need is an effortless, direct solution, then it is best to go native. We&apos;ll discuss a bit of both so you know your options.
            </p>

            {/* Best Platforms */}
            <h2
              id="Best Event"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Best Event and Ticketing Platforms for Salesforce
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">Over to the first one in the lot:</p>

            {/* Tool #1 — ARDN */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #1. ARDN Storefronts: The All-in-one Salesforce-native Solution
            </strong>

            <Image
              src="/buyers-guide/ardn-all-in-one-ecommerce.webp"
              alt="ARDN Storefronts as an all-in-one Salesforce native event and ticketing platform"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              ARDN Storefronts is a fully Salesforce-native e-commerce and event ticketing solution built by ARDN Cloud Solutions. With the platform, you can handle everything in one place and cut integration costs by up to 73%!
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Register users, manage guest lists, sell passes directly with Salesforce CRM sync</li>
              <li>Service booking and appointment scheduling directly in Salesforce</li>
              <li>Customizable appointment booking and scheduling</li>
              <li>Error capturing and logging</li>
              <li>Secure transaction with enterprise-grade encryption</li>
              <li>Multiple gateways are supported, including Paymentus, Apple Pay, Google Pay, Venmo, &amp; more</li>
              <li>Real-time Salesforce dashboards</li>
              <li>Full support for Salesforce Flows, Process Builder, and Apex automation</li>
            </ul>

            <p className="text-heading-dark text-sm lg:text-base">
              And, most importantly, if your business runs on Salesforce, why spend on a stack of tools that can actually slow you down? With ARDN Storefronts, you keep everything in one place, so you&apos;re not jumping between systems or fixing the same billing issues twice.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              And, you&apos;ll suddenly have a ton of time in your hand to focus on what matters!
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              If you want to see how it fits your setup, we can walk through it together. No pressure to choose&hellip; just a simple look at what you&apos;re trying to solve.
            </p>

            {/* CTA Block */}
            <section className="bg-[#0D121F] rounded-2xl p-8 lg:p-12 my-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <h3 className="text-white text-xl lg:text-2xl font-bold m-0 max-w-xl leading-tight">
                Ready to see how it fits your business?
              </h3>
              <Button href="/contact-us" variant="orange" size="lg" rounded="full" className="whitespace-nowrap px-10">
                Get in Touch! &rarr;
              </Button>
            </section>

            {/* Tool #2 — Blackthorn */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #2. Blackthorn.io: For Advanced Analytics and AI-Powered Insights
            </strong>

            <Image
              src="/buyers-guide/ardn-blackthorn.webp"
              alt="Blackthorn as an event management and ticketing tool for Salesforce"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Blackthorn was founded in 2015 by three colleagues to solve the problem of fragmented data. They wanted to put an end to the constant confusion of shifting between Salesforce, spreadsheets, and third-party tools. Interestingly, employees own 75% of the company!
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Drag-and-drop event builder with Event Wizard</li>
              <li>Personalize attendee messaging &amp; experiences</li>
              <li>Set up a waitlist that automatically triggers when your Event reaches capacity</li>
              <li>Secure payment processing via Stripe Checkout</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>
                Users on G2 have reported a steep learning curve. A{" "}
                <a
                  href="https://www.g2.com/products/blackthorn-events/reviews/blackthorn-events-review-11533500"
                  style={{ color: "#1a1a1a", textDecoration: "underline", textDecorationColor: "#FB7103" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  customer shared
                </a>{" "}
                that the platform has &ldquo;...confusing object names...overall challenging to LEARN, even if you&apos;re generally tech-literate.&rdquo;
              </li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Starting at $4,800 per Salesforce organization/year</li>
            </ul>

            {/* Tool #3 — Fonteva Events */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #3. Fonteva Events: For Multi-Track Conferences and Association Events
            </strong>

            <Image
              src="/buyers-guide/ardn-fonteva-events.webp"
              alt="Fonteva Events, a Salesforce-native event ticketing platform"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Fonteva was founded in 2010 by Jerry Huskins, Paul Lundy, and Marc Anderson. It was acquired by Togetherwork in February 2021. You can manage all your events, regardless of their size, for the same annual fee.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Supports all event types including in-person, virtual, and hybrid events</li>
              <li>Build agendas online and enable waitlists</li>
              <li>Event microsites and collaboration communities for year-round engagement</li>
              <li>Advanced registration and access to over 100 payment gateways</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>A single annual license fee for events, leaves no option for trial</li>
              <li>Some reviews report inconsistent support</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>It starts around $8,400/user per year</li>
            </ul>

            {/* Tool #4 — AC Events */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #4. AC Events Enterprise: For Flexible Pricing with Unified Checkout
            </strong>

            <Image
              src="/buyers-guide/ardn-advancedcommunites.webp"
              alt="Advanced Communities Events, a Salesforce native event and ticketing platform"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Advanced Communities (AC) focuses exclusively on building community and service cloud solutions for Salesforce since 2013. You get sophisticated ticketing, flexible pricing models, and unified checkout that supports event tickets, products, and donations in a single cart.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Built-in integrations for Zoom and Microsoft Teams</li>
              <li>User-friendly Event Wizard for quick event creation</li>
              <li>Set up and schedule recurring meetings</li>
              <li>Event packages, such as standard, VIP, post-payment, and paid-with-donation packages. You can also add donations when purchasing tickets</li>
              <li>It works on both the Salesforce Classic and Lightning interfaces</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>User-based pricing can add up for larger enterprises</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Starting at $79/user/month</li>
            </ul>

            {/* Tool #5 — EVA */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #5. EVA Event Registration: For All-in-One Attendee Engagement
            </strong>

            <Image
              src="/buyers-guide/ardn-eva-reg.webp"
              alt="EVA Event as a Salesforce native event management and ticketing platform"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              EVA Event Tech Hub provides an event management platform that is intuitive and easy to use and helps you boost attendee experiences for in-person, virtual, and hybrid events with AI-powered tools.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>&ldquo;Magic Link&rdquo; for easy attendee access (no passwords needed)</li>
              <li>Unlimited events and unlimited attendees included in all tiers</li>
              <li>Customizable event pages for promotion</li>
              <li>Multi-session selection (attendees can register for multiple sessions)</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>While customers are generally pleased with the product, there are a few that ask for more templates and customization options to design both the registration pages and conference site.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>The starter Pro Plan will cost you $5,000/year</li>
            </ul>

            <p className="text-heading-dark text-sm lg:text-base mt-4">Now, over to a couple of connectors&hellip;</p>

            {/* Tool #6 — Ticketbud */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #6. Ticketbud: For Pay-Per-Ticket Pricing and Customer Support
            </strong>

            <Image
              src="/buyers-guide/ardn-ticketbud.webp"
              alt="Ticketbud, a third-party event and ticketing platform for Salesforce"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Ticketbud was created with a vision to make events and ticketing affordable for all. It operates on a pay-per-ticket model with no monthly subscription fees, making it perfect for event organizers trying to minimize upfront costs.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Free mobile check-in app to scan tickets and monitor attendees</li>
              <li>Salesforce, Facebook, Zoom, and Zapier integrations</li>
              <li>Customizable reports and insights</li>
              <li>Custom registration forms and ticket layouts</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Data sync between Ticketbud and Salesforce is not real-time. It may delay 15 minutes to hours.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Free events have zero fees for registration and management</li>
              <li>Paid events are free for organizers. Attendees have to pay 2% + 99c per ticket sold along with a Payment Processor Fee of 2.9% + 30c per ticket</li>
            </ul>

            {/* Tool #7 — Eventbrite */}
            <strong className="block text-2xl lg:text-3xl font-semibold text-heading-dark mt-8 mb-4">
              #7. Eventbrite: For Mass-Market Event Ticketing with Global Reach
            </strong>

            <Image
              src="/buyers-guide/ardn-eventbrite.webp"
              alt="Eventbrite, a Salesforce integration for event and ticket management"
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p className="text-heading-dark text-sm lg:text-base">
              Eventbrite is a self-service ticketing and event marketing platform that operates as a publicly traded two-sided marketplace connecting event creators with consumers globally. It is popular for its massive consumer reach and marketing tools, making it a go-to platform for event organizers.
            </p>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Eventbrite Organizer App to check guests in, sell tickets at the door, and track data</li>
              <li>Email and social media ad tools with smart audiences</li>
              <li>Self-service, and you can create an event in seconds</li>
              <li>Geo-targeted ads to promote your event in over 90 cities in the US, UK, Canada, and Australia</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>While Eventbrite does offer human support, the level of support may vary based on your account and event type.</li>
            </ul>

            <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>You can publish your event for free</li>
              <li>Attendees have to pay ticketing fees, including a service fee and payment processing fee (if applicable)</li>
            </ul>

            {/* Comparison Table */}
            <h2
              id="lets-compare"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Let&apos;s Compare The Best Salesforce Event and Ticketing Platforms!
            </h2>

            <p className="text-heading-dark text-sm lg:text-base mb-6">Here&apos;s a table for a quick recap:</p>

            <div className="my-8 overflow-x-auto rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#f1f5f9]">
              <div className="min-w-[700px]">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#4D5562]">
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Tool</th>
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Key Strength</th>
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Ideal For</th>
                      <th className="text-white font-bold text-left px-6 py-5">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "ARDN Storefronts", strength: "All-in-one native Salesforce commerce", ideal: "Mid-market & enterprise on Salesforce", price: "$2,500/company/month*" },
                      { tool: "Blackthorn.io", strength: "Advanced ticketing + AI analytics", ideal: "Large orgs, nonprofits, big event teams", price: "$4,800/year" },
                      { tool: "Fonteva Events", strength: "Multi-track conferences and member pricing", ideal: "Associations & large nonprofits", price: "$8,400/year" },
                      { tool: "AC Events Enterprise", strength: "Deep customization and unified checkout", ideal: "Global orgs & membership teams", price: "$79/user/month" },
                      { tool: "EVA Registration", strength: "Fast setup and attendee engagement tools", ideal: "Mid-market, nonprofits, planners", price: "$5,000/year" },
                      { tool: "Ticketbud", strength: "Low-cost per-ticket + on-site tools", ideal: "Small/mid events, budget-focused orgs", price: "$0.99 + 2% + fees" },
                      { tool: "Eventbrite", strength: "Huge event discovery marketplace", ideal: "Solo creators & entertainment events", price: "8–10% per paid ticket" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? "bg-[#f8fafc]" : "bg-white"}>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#1c2045] font-semibold">{row.tool}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.strength}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.ideal}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-heading-dark text-sm lg:text-base">
              By the time you reach this stage, you already know what really slows teams down. So when you&apos;re evaluating tools, it helps to look beyond the usual &ldquo;feature list&rdquo; and check whether the platform can actually support the way you run events.
            </p>

            {/* What to Look For */}
            <h2
              id="what-to-look"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              What to Look For and How to Choose a Tool (Without Second-Guessing Later)
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Once you start comparing tools, everything looks the same on the surface. Sometimes, all of it! It&apos;s important to find the finest of details that cause the chaos.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              The easiest way to do that is to look for three things: <strong>how you&apos;ll sell</strong>, <strong>how people will check in</strong>, and <strong>how cleanly everything lands in Salesforce</strong>, because these are exactly the areas where issues usually show up.
            </p>

            <div className="space-y-8 my-8">
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">1. How you sell tickets</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  The tool should make it easy to run different kinds of tickets, adjust pricing without jumping through hoops, and handle capacity automatically. If you&apos;re offering member rates, early-bird pricing, or group discounts, you shouldn&apos;t need extra plug-ins or workarounds.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  And since payments are where most systems break, it&apos;s worth choosing a platform that supports secure gateways natively, without rerouting data through external systems.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">2. How attendees register and check in</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Literally everything depends on this part. This includes everything from collecting the correct attendee details to ensuring that people enter the venue smoothly. You want something that lets you create registration forms for your workflow, supports QR/mobile check-in, and doesn&apos;t require manual intervention for multi-session signups or guests registering on behalf of others.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">3. How it behaves inside Salesforce</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  This is the part that decides whether your event runs cleanly or turns into a duplicate-record storm. A platform that&apos;s native (or synced well enough to feel native) should update data instantly, work with your existing objects, and let your automations run without friction.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  And if you&apos;re using Experience Cloud, the tool should fit right in so attendees can self-register without causing more data cleanup for your team.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">4. How clearly can you read your event</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Your reports should tell you what&apos;s happening right now in terms of ticket sales, attendance, no-shows, and revenue, and not what happened three hours ago because the sync finally completed. And since everything eventually ends up in Salesforce anyway, it saves a lot of time if your dashboards and exports are already built for it.
                </p>
              </div>
            </div>

            {/* Quick Questions */}
            <h2
              id="quick-question"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Quick Questions to Ask Before You Buy
            </h2>

            <ul className="space-y-4 my-2">
              {[
                "Is the solution 100% native to Salesforce, or does it rely on external APIs?",
                "How does ticket and attendee data sync with Salesforce (real-time vs. scheduled)?",
                "Can we customize ticket types, pricing rules, and registration forms?",
                "Does it support waitlisting for sold-out events or sessions?",
                "What payment gateways are supported, and are there any additional fees?",
                "What does the check-in process look like (QR codes, mobile app, manual)?",
                "What reports and dashboards come built-in for sales, attendance, and revenue?",
                "How does pricing scale? Is it per user, per event, per registrant, or per ticket?",
              ].map((question, i) => (
                <li key={i} className="flex gap-4 items-start list-none">
                  <Check className="w-6 h-6 flex-shrink-0 text-green-700 bg-green-200 rounded-full p-1 mt-0.5" />
                  <p className="m-0 text-heading-dark text-sm lg:text-base">{question}</p>
                </li>
              ))}
            </ul>

            {/* Common Mistakes */}
            <h2
              id="most-common"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              The Most Common Mistakes and Best Practices
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Before you decide on a ticketing platform, it helps to know where most teams usually get stuck.
            </p>

            <div className="space-y-8 my-8">
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Mistake #1: Choosing an API-integrated tool without enough IT help</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  It sounds fine in the beginning, but once the sync delays and small errors start piling up, it becomes one more thing your team has to babysit.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  <strong>What to do instead?</strong> Always go with a native Salesforce tool if you don&apos;t have someone who can manage integrations on a regular basis.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Mistake #2: Picking a platform just because it looks less expensive</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  A low monthly cost feels tempting, yes&hellip; but if the tool can&apos;t support your ticketing flow, you&apos;ll end up fixing things manually and losing more time than money.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  Make sure you look at the actual cost of running it every day, not just the sticker price.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Mistake #3: Believing the &ldquo;quick setup&rdquo; timelines</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Most tools say they&apos;ll have you live in two weeks, but real setups take longer when you add ticket types, payments, testing, and approvals on your side.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  Keep some buffers and loops in your Salesforce admin early so nothing gets stuck later.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Mistake #4: Not checking how well the tool handles growth</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  A platform that works perfectly for a small event can get sluggish when your registrations increase.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  Test with numbers that match your busiest seasons, not your current load.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Mistake #5: Overlooking compliance and data safety</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  Ticketing means payments, personal details, and a lot of sensitive data. This part can&apos;t be ignored.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  Do confirm that the tool handles PCI and privacy requirements properly and that your data stays encrypted.
                </p>
              </div>
              <div>
                <strong className="block text-xl lg:text-2xl font-semibold text-heading-dark mb-3">Mistake #6: Looking at features without checking if people can actually use them</strong>
                <p className="text-heading-dark text-sm lg:text-base">
                  A long feature list doesn&apos;t help if your team finds the system confusing or if attendees get stuck during registration.
                </p>
                <p className="text-heading-dark text-sm lg:text-base mt-3">
                  You should let actual users try the registration and check-in flow and see how naturally it works.
                </p>
              </div>
            </div>

            {/* So What Now */}
            <h2
              id="so-what"
              className="block lg:text-4xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]"
            >
              Okay&hellip; So What Now?
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              At the end of the day, it honestly comes down to what you need and how your team works. Some events are simple enough to manage with lighter tools. Others get messy fast, and you can feel every tiny delay when systems refuse to talk to each other.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              When you keep everything inside Salesforce, ticketing stops feeling like a game of balance. Your data stays in one place, workflows actually run the way you planned, and you don&apos;t spend hours fixing sync issues. Native tools simply handle this better because nothing needs to &ldquo;talk&rdquo; to anything else. It&apos;s already there.
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              And if you want a platform that goes beyond just selling tickets, ARDN Storefronts gives you the full setup, including events, memberships, appointments, and payments, all running directly in Salesforce. You need not worry about our data drifting off somewhere else in between...
            </p>
            <p className="text-heading-dark text-sm lg:text-base mt-4">
              If you want to see how it fits into your system, we can walk through it together. Just reach out whenever you&apos;re ready!
            </p>
          </motion.main>
        </div>
      </div>
    </>
  );
}
