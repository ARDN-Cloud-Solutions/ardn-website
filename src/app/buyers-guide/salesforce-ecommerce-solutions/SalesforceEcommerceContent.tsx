"use client";

import GuideHero from "@/components/buyers-guide/GuideHero";
import Sidebar from "@/components/buyers-guide/Sidebar";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export default function SalesforceEcommerceContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  return (
    <>
      <GuideHero
        title="Best Salesforce e-commerce Solutions: A Buyer's Guide"
        buttonText="Connect with Us"
      />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 py-8 lg:py-16">
          <Sidebar />

          <motion.main
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <section className="mb-12">
              <div className="max-w-none text-black font-poppins space-y-4">
                <p className="text-heading-dark text-sm lg:text-base">
                  Scattered data is the number one thing that slows down e-commerce teams. And honestly, it shows.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  Your store’s on one platform, your data’s in another, support can’t see orders, marketing can’t trust purchase data, and ops spends half the week reconciling “the other system.”
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  Salesforce-native solutions are changing that, bringing storefront, service, and marketing under one roof that actually works.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  But once you start looking into “native” options, things get messy fast. Some promise quick setups, others rely on heavy customization, and it’s tough to tell which ones truly fit your scale, your products, or your timeline.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  More importantly, you have to think about how well it plays with the rest of your Salesforce ecosystem and how much complexity your team can realistically take on.
                </p>
                <p className="text-heading-dark text-sm lg:text-base">
                  This guide lays out the best Salesforce-native ecommerce solutions side by side, with a clear look at what each offers, where it shines, and when it might be too much (or too little) for your team.
                </p>
              </div>
            </section>

            <h2 id="the-must-check-criteria" className="block lg:text-xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]">
              The Must-Check Criteria for Any Salesforce-Native E-Commerce Solution
            </h2>

            <p className="text-heading-dark text-sm lg:text-base">
              Before comparing tools, it helps to know what really separates a good fit from a painful one. Every platform sounds excellent on paper until you look at it closely and see how “native” it actually is and how quickly you can get from setup to selling.
            </p>

            <p className="text-heading-dark text-sm lg:text-base mt-4">Here’s a quick breakdown of what to look for and why it matters:</p>

            <div className="my-8 overflow-x-auto rounded-xl shadow-lg border border-gray-200">
              <div className="min-w-[800px]">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#4D5562]">
                      <th className="text-white font-bold text-left px-6 py-5 border-r border-[#ffffff20]">Criterion</th>
                      <th className="text-white font-bold text-center px-6 py-5 border-r border-[#ffffff20]">What to Look For</th>
                      <th className="text-white font-bold text-center px-6 py-5">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-5 border border-gray-100 text-[#1c2045] font-bold">Integration depth</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Native Salesforce setup or real-time, first-class connectors</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Prevents data silos and keeps storefront, service, and marketing aligned.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 border border-gray-100 text-[#1c2045] font-bold">Go-to-market speed</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Low-code builders, prebuilt checkout</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Helps you launch faster and cut implementation risk.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 border border-gray-100 text-[#1c2045] font-bold">B2B vs. B2C fit</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">
                        <span className="font-bold">B2B:</span> pricing, approvals, reorders.<br />
                        <span className="font-bold">B2C:</span> merchandising, promos, checkout
                      </td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Ensures core workflows are built-in, not custom add-ons.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 border border-gray-100 text-[#1c2045] font-bold">Customization ceiling</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">APIs, flows, or flexible page components</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Lets you extend as you grow without needing a rebuild.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 border border-gray-100 text-[#1c2045] font-bold">Scalability</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Proven uptime, elastic traffic handling, multi-site support</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Keeps performance steady during peaks and supports global growth.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-5 border border-gray-100 text-[#1c2045] font-bold">AI &amp; personalization</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Search, recommendations, and targeting tied to CRM data</td>
                      <td className="px-6 py-5 border border-gray-100 text-center text-[#4B535D]">Boosts conversions and keeps experiences consistent across teams.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              Start small. Shortlist a few tools that fit your budget and Salesforce setup. Then see them in action. A quick demo tells you more than any feature list. Loop in your Salesforce admin early, and talk to teams already using the tool if you can.
            </p>

            <p className="mt-4">
              Once you’ve done that, you’ll have a clearer sense of what really matters for your team and which Salesforce-native e-commerce solutions are worth a closer look.
            </p>

            <h2 id="best-salesforce-native" className="block lg:text-xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]">
              Best Salesforce Native E-commerce Solutions
            </h2>

            <p>Let’s get started with the first one in the lot:</p>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #1 ARDN Storefront: The All-in-One Native Salesforce Commerce Solution
            </strong>
            <Image
              src="/buyers-guide/ARDN-Storefronts-as-the-all-in-one-Salesforce-native.webp"
              alt="ARDN Storefronts as the all-in-one Salesforce native solution for e-commerce."
              width={1400}
              height={1400}
              className="w-full rounded-2xl my-8"
            />

            <p>
              ARDN Storefronts is a fully native Salesforce e-commerce solution that lets you manage products, subscriptions, memberships, appointments, and event ticketing directly within Salesforce. It eliminates the need for separate platforms, reducing integration complexity and keeping all customer data in one place.
            </p>

            <h2 id="what-makes-ardn-storefronts" className="block lg:text-xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]">
              What makes ARDN Storefronts stand out?
            </h2>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6 text-heading-dark">
              <li><strong>Native Salesforce Ecommerce:</strong> You can customize it and make it your own. Everything runs inside Salesforce, removing the need for middleware or separate platforms. Orders, customer info, and product data are all connected, simplifying operations and reporting.</li>
              <li><strong>Products &amp; Pricebook Management:</strong> You can manage unlimited SKUs, multiple pricebooks, and even sell from custom Salesforce objects.</li>
              <li><strong>Checkout &amp; Payments:</strong> It integrates with Stripe, Paymentus, and payment types like ACH, credit card, GPay, Apple Pay, and PayPal.</li>
              <li><strong>Inventory &amp; Order Management:</strong> You get real-time stock updates, and automated order processing reduces errors and manual reconciliation, letting teams manage warehouses and fulfillment from the CRM.</li>
              <li><strong>Subscriptions &amp; Memberships:</strong> Recurring billing and membership renewals are fully automated within Salesforce. Track engagement and renewals without needing a separate subscription platform.</li>
              <li><strong>Promotions &amp; Workflows:</strong> The tool lets you create and manage discount codes, rules, and campaign logic using Salesforce-native automations. Workflows can mirror real business processes without extra coding.</li>
            </ul>
            <p className="mt-4">
              Most Salesforce-native commerce apps stop at lightweight use cases. Storefronts go much further. You get a 360-degree customer view! It handles products, subscriptions, events, appointments, memberships, and full order flows in one place.
            </p>
            <p className="mt-4">
              And because it lives natively in your CRM, your team isn’t guessing where data lives or waiting on external connectors to behave. Everything is already in the system you trust!
            </p>
            <p className="mt-4">
              If you rely on Salesforce every day, Storefronts feels like the version of commerce that should have existed all along.
            </p>

            <section className="bg-[#0D121F] rounded-2xl p-8 lg:p-12 my-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <h3 className="text-white text-xl lg:text-2xl font-bold m-0 max-w-xl leading-tight">
                Ready to see how it fits your business?
              </h3>
              <Button variant="orange" size="lg" rounded="full" className="whitespace-nowrap px-10">
                Get In Touch!
              </Button>
            </section>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #2. Commerce Studio by 1440: For Multi-Channel Order &amp; Inventory Orchestration
            </strong>

            <Image
              src="/buyers-guide/ardn-commerce-studio.webp"
              alt="Commerce Studio, the native ecommerce solution by 1440"
              className="w-full rounded-2xl my-8"
              width={1400}
              height={1400}
            />

            <p>
              Commerce Studio by 1440 is a Salesforce-native managed package built specifically for multi-channel ecommerce operations. It was originally launched as Cloud Conversion in 2009 and later merged into 1440 Inc.
            </p>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Real-Time Multi-Channel Inventory Sync:</strong> When inventory moves (warehouse, marketplace, or store), every connected channel updates.</li>
              <li><strong>Returns Management:</strong> Processing a return becomes a consistent workflow without multiple return portals. It automates messaging and warehouse processing.</li>
              <li><strong>Payment Processing Inside Salesforce:</strong> You get PCI-compliant payment handling tied directly to orders.</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>It is not a storefront builder (You still need Shopify, Magento, etc.)</li>
              <li>Might not be a good fit if you’re a brand selling only on one channel</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing :</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>The starting price is $300/month for the Essentials Plan</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #3. StoreConnect: For Vertical-Specific Businesses and POS for Multi-Location
            </strong>

            <Image
              src="/buyers-guide/ardn-getstoreconnect.webp"
              alt="Storeconnect a unified e-commerce solution on Salesforce"
              className="w-full rounded-2xl my-8"
              width={1400}
              height={1400}
            />

            <p>
              Founded by Mikel Lindsaar in 2018, StoreConnect leans heavily into its philosophy of customer commerce. It is the idea that all your customer touchpoints should live inside Salesforce, instead of being scattered across external apps and APIs.
            </p>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Integrated POS:</strong> Salesforce instantly reflects in-store orders, returns, payments, and customer profiles.</li>
              <li><strong>Multi-Currency &amp; Regional Logic:</strong> Local pricing, tax rules, and regional storefronts are all automatically handled.</li>
              <li><strong>Agentic AI via Salesforce Agentforce:</strong> The AI agents trained on your Salesforce data handle customer questions, look up orders, update records, and reduce manual support load!</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>A bit more expensive than the other storefront tools</li>
              <li>Transaction fees (0.2%-0.6%) add up for high-volume brands.</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing :</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>There is a 90-day free trial.</li>
              <li>Pricing starts with the Boutique Plan for $995/month</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #4. Fonteva eCommerce: for Membership-Driven Organizations
            </strong>

            <Image
              className="w-full rounded-2xl my-8"
              src="/buyers-guide/ardn-fonteva-ecommerce.webp"
              alt="Fonteva e-commerce, a Salesforce native solution"
              width={1400}
              height={1400}
            />

            <p>
              Unlike general e-commerce tools, Fonteva is designed for associations, nonprofits, and professional societies that depend on renewals, dues, events, donations, and courses.
            </p>
            <p className="mt-4">
              Because everything runs natively on Salesforce, your team never has to jump across disconnected systems again. Memberships, purchases, payments, CE credits, donations, and event registrations all land in a single member record.
            </p>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Membership Management:</strong> You get automated join/renew workflows, membership tiers, grace periods, and self-service upgrades.</li>
              <li><strong>Integrated eCommerce:</strong> You can sell memberships, merchandise, tickets, courses, and donations without needing a separate storefront.</li>
              <li><strong>Reports & Drag-and-Drop Dashboards:</strong> Use the reporting engine to build financial dashboards, engagement scores, and membership KPIs.</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Are there any cons?</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Users share that the initial setup is complex and time-consuming.</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing :</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>The membership starts at $30,000/company/year.</li>
            </ul>

            <h2 id="other-salesforce-ecommerce" className="block text-3xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]">
              Other Salesforce E-commerce Solutions
            </h2>

            <p>Here are a few third-party (non-native) tools that you can integrate into your Salesforce e-commerce system:</p>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #5. Nexternal Solutions: For B2B Brands That Need Procurement-Ready Ordering
            </strong>

            <Image
              className="w-full rounded-2xl my-8"
              src="/buyers-guide/ardn-true-commerce.webp"
              alt="Nexternal Solutions by TrueCommerce for B2B brands"
              width={1400}
              height={1400}
            />
            <p>
              Nexternal, now a part of TrueCommerce, is made for B2B teams managing volume pricing, custom catalogs, and ERP workflows. Instead of relying on custom builds or duct-taped processes, Nexternal gives you structure from day one.
            </p>
            <p className="mt-4">
              It is directly available on AppExchange but is not a native tool.
            </p>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Punchout Procurement Integration:</strong> It lets buyers use their procurement system (e.g., Oracle, SAP, or Ariba) to place orders on your site, then send the order back into their system. Reduces manual entry and improves accuracy.</li>
              <li><strong>B2B Order Management:</strong> The tool easily handles complex B2B workflows like CSV bulk orders, phone or fax orders, and structured order routing based on account logic.</li>
              <li><strong>ERP & Back-Office Integration:</strong> You get deep integration with SAP, Oracle, NetSuite, Sage, Microsoft Dynamics, and more to keep order, customer, and inventory data synchronized.</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing :</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>Pricing is custom</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #6 Shopify Plus: For High-Growth D2C &amp; Omnichannel Brands
            </strong>

            <Image
              className="w-full rounded-2xl my-8"
              src="/buyers-guide/ardn-shopify-in-plus.webp"
              alt="Shopify Plus as a Salesforce e-commerce solution"
              width={1400}
              height={1400}
            />
            <p>
              Shopify Plus runs outside Salesforce, so it doesn’t behave like a native CRM-first platform. Instead, it gives you a powerful storefront, industry-leading checkout performance (thanks to Shop Pay), and the ability to launch quickly without the heavy lift of a traditional enterprise build.
            </p>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>ShopPay Checkout:</strong> ShopPay is quick, trusted, and helps boost conversions, especially for returning buyers.</li>
              <li><strong>Social selling:</strong> You can sell in the channels and marketplaces exactly where your customers are.</li>
              <li><strong>Wholesale Tools:</strong> You get account-based pricing, custom catalogs, and bulk order workflows.</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing :</strong>
            <p className="text-heading-dark">Shopify Plus goes by a subscription model:</p>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>$2,300/month (3-year contract)</li>
              <li>$2,500/month (1-year contract)</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">
              #7. Adobe Commerce (Magento): for Enterprise-Scale B2B &amp; B2C Brands
            </strong>

            <Image
              className="w-full rounded-2xl my-8"
              src="/buyers-guide/ardn-adobe-bussiness-commerce.webp"
              alt="Adobe Commerce as a salesforce e-commerce tool for enterprise-level brands"
              width={1400}
              height={1400}
            />
            <p>
              Adobe Commerce (formerly Magento) sits in a very specific corner of the ecommerce world. It’s built for large, technical teams that want full control, from front-end to back-end, integrations, everything.
            </p>
            <p className="mt-4">
              It’s not native to Salesforce, but if your team already works heavily with APIs and you prefer an environment you can mold exactly the way you want, Adobe Commerce gives you that room.
            </p>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Key Features:</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li><strong>Two-way customer syncing:</strong> Your customer accounts and contacts stay updated on both sides. If someone changes something in Adobe Commerce, it quietly updates in Salesforce too.</li>
              <li><strong>Real-time lead syncing:</strong> Every inquiry, from contact forms to product questions, shows up in Salesforce instantly.</li>
              <li><strong>Product, category & order mapping:</strong> Each item gets a Salesforce ID so you can match everything easily. Orders go back to Salesforce with full details, including billing, shipping, tax, and freight. And you get massive catalog support (1M+ SKUs)</li>
            </ul>

            <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pricing :</strong>
            <ul className="list-disc pl-6 text-heading-dark space-y-3 my-6">
              <li>You can request the team for a quote.</li>
            </ul>

            <h2 id="lets-compare-the-best-salesforce" className="block lg:text-xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]">
              Let’s Compare the Best Salesforce Ecommerce Solutions!
            </h2>

            <div className="my-8 overflow-x-auto rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#f1f5f9]">
              <div className="min-w-[800px]">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr>
                      <th className="bg-[#f8fafc] text-[#1e293b] font-semibold text-left px-6 py-4 border-b-2 border-[#e2e8f0]">Tool name</th>
                      <th className="bg-[#f8fafc] text-[#1e293b] font-semibold text-left px-6 py-4 border-b-2 border-[#e2e8f0]">Best feature</th>
                      <th className="bg-[#f8fafc] text-[#1e293b] font-semibold text-left px-6 py-4 border-b-2 border-[#e2e8f0]">Who it’s for</th>
                      <th className="bg-[#f8fafc] text-[#1e293b] font-semibold text-left px-6 py-4 border-b-2 border-[#e2e8f0]">Scalability</th>
                      <th className="bg-[#f8fafc] text-[#1e293b] font-semibold text-left px-6 py-4 border-b-2 border-[#e2e8f0]">Starting price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "ARDN Storefronts", feature: "Native all-in-one commerce", for: "Retail Chains, multi-location, manufacturing, memberships", scale: "High", price: "Custom pricing. Approx. $2500/year" },
                      { name: "Commerce Studio by 1440", feature: "Multi-channel order sync", for: "Retailers on 3–7 channels", scale: "Medium-High", price: "$300/mo" },
                      { name: "StoreConnect", feature: "Native ecommerce + POS", for: "Multi-location retail, nonprofits, healthcare, education", scale: "Medium-High", price: "$995/mo (+0.2–0.6% fee)" },
                      { name: "Fonteva eCommerce", feature: "Membership + events ecommerce", for: "Associations, nonprofits, societies", scale: "High", price: "$30,000/year" },
                      { name: "Nexternal (TrueCommerce)", feature: "Punchout procurement", for: "B2B manufacturers, distributors", scale: "High", price: "Custom" },
                      { name: "Shopify Plus", feature: "Shop Pay checkout", for: "High-growth D2C, omnichannel", scale: "High", price: "$2,300–$2,500/mo" },
                      { name: "Adobe Commerce (Magento)", feature: "Enterprise composable architecture", for: "Enterprise B2B/B2C, custom builds, 1M+ SKUs", scale: "High", price: "Custom" },
                    ].map((tool) => (
                      <tr key={tool.name}>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{tool.name}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{tool.feature}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{tool.for}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{tool.scale}</td>
                        <td className="px-6 py-4 border-b border-[#f1f5f9] text-[#475569]">{tool.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4">
              When you stack platforms side by side, the numbers help… but they never tell the full story. You start asking yourself the real questions: How hard will this be for my team? Will it scale the way we need? Are we choosing something that feels manageable, not overwhelming?
            </p>
            <p className="mt-4">
              So before you decide what makes the most sense for your business, it helps to look a little closer at how the tool actually supports your operations.
            </p>


            <h2 id="common-pitfalls" className="block lg:text-xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]">
              Common Pitfalls: Mistakes Brands Make When Choosing Salesforce Ecommerce Solutions
            </h2>
            <p>When you’ve seen enough teams go through this decision, you start noticing the same things happening again and again. It’s rarely a “bad platform” problem but usually a misunderstanding of what the business actually needs or what the platform realistically takes to run. These are the things brands almost always overlook.</p>

            <div className="space-y-8 my-8">
              <div>
                <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pitfall 1: Choosing Commerce Cloud just because it feels safe</strong>
                <p>A lot of teams default to Commerce Cloud because it’s the big, enterprise name. And yes, it’s powerful. But many brands end up paying for features they never use. You’d be surprised how often companies only use 20-30% of the features they paid for.</p>
                <p className="mt-4"><strong>The Fix:</strong> Step back and look at what you actually need right now. If you’re not dealing with massive catalog complexity or global operations, Storefronts might fit better.</p>
              </div>
              <div>
                <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pitfall 2: Picking Shopify or Magento, then realizing CRM integration is a battle</strong>
                <p>This one stings because everything feels smooth at the start. Then the data sync issues start: orders missing, refunds not matching, and marketing events drifting.</p>
                <p className="mt-4"><strong>The Fix:</strong> If Salesforce is your customer system of record, it’s easier (and cheaper long-term) to keep e-commerce aligned with it from the beginning.</p>
              </div>
              <div>
                <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pitfall 3: Underestimating implementation time on Commerce Cloud</strong>
                <p>Everyone wants a quick launch. And yes, some teams do pull off impressive timelines, but realistically, large Salesforce builds do take time (a lot!) There’s data, design, dev, QA, integrations… and it all adds up.</p>
                <p className="mt-4"><strong>The Fix:</strong> Plan for a 6-month runway at minimum. A clear SOW makes a huge difference in keeping things predictable.</p>
              </div>
              <div>
                <strong className="block text-2xl font-semibold text-heading-dark mt-8 mb-4">Pitfall 4: Letting e-commerce data live outside Salesforce</strong>
                <p>Here, customer visibility breaks down. When e-commerce data lives in separate systems, the customer record becomes patchy. Marketing can’t see what customers bought, support can’t check order history, and your reports don’t line up.</p>
                <p className="mt-4"><strong>The Fix:</strong> Keep data flowing into Service Cloud and Marketing Cloud cleanly. Native solutions naturally do this better than connectors.</p>
              </div>
            </div>

            <h2 id="questions-you-must-ask" className="block lg:text-xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]">
              Questions You Must Ask Before You Buy!
            </h2>
            <p>Before you hit “add to cart” and take the final call, it helps to pause for a minute and check a few basics. Just think of it like a quick gut-check so you don’t end up with something that looks great online but doesn’t work for your setup.</p>

            <p className="mt-4">Here are a few easy questions to ask yourself:</p>

            <ul className="space-y-4 my-2">
              {[
                {
                  question: "Does this actually solve the problem I have right now?",
                  description:
                    "Sometimes a product looks good, but if it doesn’t fix your specific issue, it’s not worth it.",
                },
                {
                  question: "Is it compatible with the gear I already own?",
                  description:
                    "No one wants to buy something only to realize it doesn’t fit or won’t work with their current setup.",
                },
                {
                  question: "Will it last, or will I end up replacing it soon?",
                  description:
                    "A slightly better-built option can save money in the long run.",
                },
                {
                  question: "Do the reviews mention anything I care about?",
                  description: "Just skim for the things that matter to you.",
                },
                {
                  question: "Is the brand known for decent customer support?",
                  description:
                    "Not exciting, but very useful if things go wrong.",
                },
                {
                  question: "Does the price feel fair for what you’re getting?",
                  description:
                    "Trust your instinct here. If something feels off, it usually is.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-0.5">
                  <li className="flex gap-4 items-start">
                    <Check className="w-6 h-6 flex-shrink-0 text-green-700 bg-green-200 rounded-full p-1 mt-1" />
                    <p className="m-0 font-semibold">{item.question}</p>
                  </li>
                  <p className="pl-10 text-gray-600">{item.description}</p>
                </div>
              ))}
            </ul>

            <h2 id="its-time-to-pick-the-right" className="block lg:text-xl text-2xl font-bold text-heading-dark mt-12 mb-6 leading-tight scroll-mt-[120px]">
              It’s Time to Pick the Right Salesforce Ecommerce Fit
            </h2>

            <p>
              As long as you’re clear about what you actually need, how you want your store to run, and the kind of support you expect, the decision becomes a lot easier. Just stay focused on what works for your business right now instead of getting distracted by features you’ll probably never use.</p>

            <p className="mt-4">
              If you want a Salesforce e-commerce solution that’s clean, easy to manage, and doesn’t overcomplicate your life, <strong>ARDN storefronts</strong> fit that sweet spot. You get everything you truly need to run your store smoothly, without piling on tools you’ll never touch.
            </p>
            <p className="mt-4">
              No pressure to decide now. Just explore it when you’re ready. If it makes your day a little easier, great. If not, you’ll at least have more clarity on what you actually need!
            </p>
          </motion.main>
        </div>
      </div>
    </>
  );
}
