import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Platform - Ardn Cloud Solutions",
  description: "Ardn Cloud Solutions Membership Platform details.",
  // Noindex duplicate of /membership-management — point the canonical at the
  // indexed page so no ambiguous self-reference competes with it.
  alternates: {
    canonical: "https://ardncloudsolutions.com/membership-management",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/*hero  */}
      <section className="bg-gradient-to-b from-[#0A1F44] to-[#071835] text-white py-20 pt-30 md:pt-[140px] lg:pt-60">
        <div className="container grid lg:grid-cols-2 gap-30 items-center ">
          <div>
            <span className="inline-block border border-transparent px-[12px] py-[6px] rounded-full text-sky-300 text-[14px] bg-white/10">
              MODERN OPS FOR NONPROFITS & STUDIOS
            </span>

            <h1 className="mt-8 leading-[1.30] tracking-[-0.03em] text-white text-[36px] md:text-4xl lg:text-[58px] font-poppins font-bold">
              You&apos;ve outgrown Daxko.
              <br />
              You can&apos;t afford Mindbody.
              <br />
              <span className="text-[#3EA2FF]">Now what?</span>
            </h1>

            <p className="mt-7 text-xl text-slate-300">
              One multi-tenant platform for YMCAs, community centers, wellness
              studios, and gyms.Memberships, classes, POS and facility booking,
              and member portals — on your brands, from day one.Way more
              capability for way less cost.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <button className="bg-sky-400 text-black px-7 py-3 rounded-full font-semibold hover:bg-sky-300 transition">
                Book a 20-min demo
              </button>

              <button className="border border-white/30 px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                See the product
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-white">&lt; 2 min</h3>
                <p className="text-slate-400">Tenant provisioning, branded</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">1 DB</h3>
                <p className="text-slate-400">Postgres RLS isolation</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">2 planes</h3>
                <p className="text-slate-400 ">Staff + member, on brand</p>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="bg-[#12346F] rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="flex items-center border-b border-white/10  mb-3 justify-between px-6 py-3">
              {/* Title */}
              <h3 className="text-base font-semibold text-white">
                Demo YMCA — Sandbox
              </h3>

              {/* Live Badge */}
              <span className="bg-blue-500/10 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
                Live
              </span>
            </div>
            {[
              {
                title: "Jane Doe — Family Plan",
                sub: "Checked in · 8:42 AM",
                right: "$49 / mo",
              },
              {
                title: "6am HIIT — 14 / 20 booked",
                sub: "Studio B · Instructor: Miles",
                right: "Auto-waitlist",
              },
              {
                title: "Day pass sold",
                sub: "POS · Front desk #2",
                right: "+$15.00",
              },
              {
                title: "Waiver signed — Sam R.",
                sub: "Program enrollment · Kids Swim",
                right: "e-Sig ✓",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 rounded-xl p-5 mb-4 flex items-center justify-between"
              >
                {/* Left Content */}
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {item.title}
                  </h4>
                  <p className="text-white/60 text-sm mt-1">{item.sub}</p>
                </div>

                {/* Right Content */}
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-white/70 text-sm font-medium">
                    {item.right}
                  </span>
                </div>
              </div>
            ))}

            <div className="border-t border-white/10 pt-5 flex justify-between text-sm text-slate-300">
              <span>MRR today- $4,218</span>
              <span> Active members-1,284 </span>
            </div>
          </div>
        </div>
      </section>

      {/* */}
      <section className="py-8 border-b border-gray-300 bg-slate-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-10 font-bold text-slate-600 text-center">
          <span className="w-full md:w-auto">BUILT FOR</span>

          <span>YMCAs</span>
          <span>Community Centers</span>
          <span>Wellness Studios</span>
          <span>Boutique Gyms</span>
          <span>Rec Departments</span>
        </div>
      </section>

      {/* Reality */}
      <section id="problem" className="py-16 md:py-24 bg-slate-100">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-sky-500 font-semibold uppercase text-[14px] border border-transparent px-[12px] py-[6px] rounded-full bg-white/10 inline-block">
              THE REALITY
            </span>

            <h2 className="text-[28px] md:text-5xl font-bold mt-5 leading-tight text-gray-900 font-poppins">
              Your Current member system is
              <span className="text-sky-500"> bleeding you -</span> in money,
              time, and member experience.
            </h2>

            <p className="mt-6 text-slate-500 text-lg">
              Legacy platforms charge enterprise prices for 2010-era UX. Point
              tools pile up integration bills. Custom builds never finish. We&apos;ve
              packaged every core workflow — and the plumbing underneath — into
              one platform you can stand up this week.
            </p>

            <ul className="list-none space-y-4 mt-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-[4px] border-[#3ca2ff]  flex-shrink-0"></span>
                <span>
                  Memberships, classes, POS and facility booking in one schema
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-[4px] border-[#3ca2ff]  flex-shrink-0"></span>
                <span>
                  Staff and member portals themed to your brand automatically
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-[4px] border-[#3ca2ff]  flex-shrink-0"></span>
                <span>
                  Stripe billing wired in — tiers, seats, and metered usage
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-[4px] border-[#3ca2ff]  flex-shrink-0"></span>
                <span>
                  Row-Level Security so a bug can&apos;t leak another org&apos;s data
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-[4px] border-[#3ca2ff]  flex-shrink-0"></span>
                <span>
                  No per-seat hostage pricing. No 6-month implementation.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span>Legacy SMS + class + POS stack</span>
                <strong>
                  $2,400/mo{" "}
                  <span className="text-sm text-red-500 font-medium">
                    baseline
                  </span>
                </strong>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span>Integration / custom dev, annualized</span>
                <strong>
                  $1,100/mo{" "}
                  <span className="text-sm text-red-500 font-medium">
                    ongoing
                  </span>
                </strong>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-4">
                <span>Membership Platform (Growth tier)</span>
                <strong>
                  $699/mo
                  <span className="text-sm text-green-500 font-medium">
                    all-in
                  </span>
                </strong>
              </div>

              <div className="flex justify-between ">
                <span> Average annual savings</span>
                <strong>
                  $33,612
                  <span className="text-sm text-green-500 font-medium">
                    +staff hours
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-6">
            <span className="text-sky-500 text-sm font-semibold border border-sky-200 px-4 py-1 rounded-full">
              ONE PLATFORM, EVERY WORKFLOW
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[28px] md:text-5xl font-bold text-gray-900 leading-tight font-poppins">
              The operating system for your members.
            </h2>
            <p className="text-gray-500 mt-6 text-lg">
              Daxko&apos;s depth for nonprofits. Mindbody&apos;s fluency with classes and
              payments. Priced for the real world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Memberships & households",
                desc: "Plans, family groups, pro-rated upgrades, waivers, auto-renewals. Dunning handled, paused memberships tracked, lifecycle emails built in.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" x2="19" y1="8" y2="14" />
                    <line x1="16" x2="22" y1="11" y2="11" />
                  </svg>
                ),
              },
              {
                title: "Classes & appointments",
                desc: "Schedules, capacities, waitlists, instructor payroll exports. Members book in the portal or native-feeling web app-no third-party plugin.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                ),
              },
              {
                title: "Point of Sale",
                desc: "Front desk sells day passes, merch, and program fees. Stripe Elements with Setupintents - no raw card data ever touching you.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                ),
              },
              {
                title: "Facility & program booking",
                desc: "Courts, pools, program sessions, summer camps. Inventory-level availability, capacity rules, and refund policies you actually control.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                ),
              },
              {
                title: "Branded member portal",
                desc: "Paste a URL. The branding scraper pulls your logo, colors, and fonts and themes the member portal+staff admin automatically.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Workflow automation",
                desc: "Rule engine triggers events lifecycle event -  late payment, unchecked-in for 30 days, waivers expiring.Notifications, tasks, tags.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-[#3ca2ff] transition-all duration-300"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 bg-sky-100 text-sky-500 rounded-xl mb-6 flex items-center justify-center">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-[#0A1F44] text-white py-16 md:py-24">
        <div className="container text-center">
          <div className="mb-6">
            <span className="text-[14px] tracking-widest text-sky-300 border border-transparent px-[12px] py-[6px] rounded-full bg-white/10">
              ARCHITECTURE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-white mb-6 font-poppins">
            Two planes. One database. Zero leaks.
          </h2>

          {/* Sub text */}
          <p className="text-slate-300 max-w-2xl mx-auto mb-16">
            We split the platform the way SaaS really works — so you run the
            business while your customers run their members, and nobody crosses
            streams.
          </p>

          {/* Cards */}
          <div className="grid lg:grid-cols-2 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-[#12346F] rounded-2xl p-10 border border-white/10">
              <p className="text-xs  text-sky-300 mb-3">CONTROL PLANE — YOU</p>

              <h3 className="text-2xl font-bold mb-4 text-white">
                Run the platform business
              </h3>

              <p className="text-slate-300 mb-6">
                Provision customers in under two minutes. Tier + seat + metered
                billing via Stripe, daily usage snapshots, and support tooling
                built in.
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>
                  <span className="text-[#3ca2ff]">→</span> Onboarding wizard
                  with auto-branding
                </li>
                <li>
                  <span className="text-[#3ca2ff]">→</span> Stripe tiers, seats,
                  and usage overage
                </li>
                <li>
                  <span className="text-[#3ca2ff]">→</span> Per-tenant seat +
                  active-member tracking
                </li>
                <li>
                  <span className="text-[#3ca2ff]">→</span> Support
                  impersonation with audit trail
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-[#12346F] rounded-2xl p-10 border border-white/10">
              <p className="text-xs text-sky-300 mb-3">
                DATA PLANE — YOUR CUSTOMERS
              </p>

              <h3 className="text-2xl font-bold mb-4 text-white">
                Run their members, their brand
              </h3>

              <p className="text-slate-300 mb-6">
                Tenant-scoped admin and a themed member portal. Every query runs
                through Postgres Row-Level security - a buggy endpoint can&apos;t
                leak another tenant&apos;s data.
              </p>

              <ul className="space-y-3 text-slate-300">
                <li>
                  <span className="text-[#3ca2ff]">→</span> Themed tenant admin
                  + member portal
                </li>
                <li>
                  <span className="text-[#3ca2ff]">→</span> Roles: admin, front
                  desk, instructor, finance, PM
                </li>
                <li>
                  <span className="text-[#3ca2ff]">→</span> Seeded plans, waiver
                  templates, branches
                </li>
                <li>
                  <span className="text-[#3ca2ff]">→</span> Per-tenant data
                  residency-ready
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Go live*/}
      <section id="how" className="py-16 md:py-24">
        <div className="container text-center">
          <div className="mb-6">
            <span className="text-bold text-sky-300 border bg-sky-100 border-sky-400/30 px-[12px] py-[6px] rounded-full">
              Go Live
            </span>
          </div>
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-gray-900 mb-6 font-poppins">
            From signed contract to live members - in a week.
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-6">
            No war rooms. No 90-pages kickiff doc. You and your customer both
            move faster.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Paste a URL",
                desc: "Branding scraper pulls logo, colors, and fonts. Edit anything off.",
              },
              {
                title: "Provision",
                desc: "Prod + sandbox, branches, roles, plans, and waiver seeded in one transaction.",
              },
              {
                title: "Invite admin",
                desc: "Tenant admin gets an invite token, accepts, and is running their org.",
              },
              {
                title: "Members in",
                desc: "Members check in, book classes, buy day passes — you collect revenue.",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="bg-slate-50 rounded-3xl p-8 border border-gray-300  text-left"
              >
                <h3 className="text-4xl font-bold text-sky-500">0{i + 1}</h3>
                <h4 className="font-bold text-black mt-5 text-lg">{step.title}</h4>
                <p className="mt-3 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="bg-slate-100 py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sky-500 font-semibold uppercase text-[14px] border border-transparent px-[12px] py-[6px] rounded-full bg-white/10 inline-block">
              SECURITY POSTURE
            </span>

            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] text-gray-900 font-bold mt-4 font-poppins leading-tight">
              Built for the org that says &quot;we take security seriously&quot; — and
              means it.
            </h2>

            <p className="mt-6 text-slate-500 text-lg">
              Tenant isolation isn&apos;t a policy. It&apos;s enforced by Postgres itself.
              The app runs as a low-privilege role that cannot bypass RLS — so
              even a buggy query cannot leak across tenants.
            </p>

            <button className="mt-8 bg-[#0A1F44] text-white px-6 py-3 rounded-xl font-semibold  ">
              See the security brief
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: "Postgres RLS",
                desc: "Row-level policies on every tenant-scoped table",
              },
              {
                title: "Scrypt hashing",
                desc: "Modern, memory-hard password hashing",
              },
              {
                title: "Rotating tokens",
                desc: "Opaque refresh tokens, SHA-256 at rest",
              },
              {
                title: "Short-TTL JWTs",
                desc: "HS256 access tokens, 15-minute default",
              },
              {
                title: "Rate limiting",
                desc: "Auth endpoints throttled per IP + email",
              },
              {
                title: "MFA-ready",
                desc: "TOTP schema in place, roll out per tenant",
              },
              {
                title: "Audit log",
                desc: "Every mutation, traceable across both planes",
              },
              {
                title: "No card data",
                desc: "Stripe Elements + SetupIntents only",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-gray-300  p-8  shadow-sm"
              >
                <h3 className="text-gray-900 text-lg  font-extrabold">
                  {item.title}
                </h3>
                <p className="text-slate-500 mt-2 ">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-[#0A1F44] text-white rounded-[40px] p-4 md:p-8 lg:p-16 text-center">
            <span className="text-sky-300 uppercase font-semibold text-[14px] tracking-wide border border-transparent px-[12px] py-[6px] rounded-full bg-white/10 inline-block">
              READY WHEN YOU ARE
            </span>

            <h2 className="text-white font-bold mt-4">
              Get a live walkthrough — in your branding.
            </h2>

            <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
              Send us your URL. We&apos;ll stand up a branded sandbox in under two
              minutes and walk you through memberships, classes, POS, and
              billing — on the phone in 20 minutes.
            </p>

            <div className="mt-10 flex justify-center gap-5 flex-wrap">
              <button className="bg-sky-400 text-black px-7 py-3 rounded-full font-semibold hover:bg-sky-300 transition">
                Book a 20-min demo
              </button>

              <button className="border border-white/30 px-7 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                Email the team
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
