import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

// ─── Data ───────────────────────────────────────────────────────────────────

// Footer product list now reflects the full 6-product suite (was missing
// Membership Management and AI Forge). Ordered by Cat 2 first (the newer
// products that need internal-link weight), then Cat 1.
const ourProducts = [
  { label: "AI Forge — Custom AI Development", href: "/ai-forge" },
  { label: "Membership Management", href: "/membership-management" },
  { label: "Storefronts: All-in-one Ecommerce Solution", href: "/storefronts" },
  { label: "Salesforce Payments", href: "/salesforce-payments" },
  { label: "License Guard", href: "/license-guard" },
  { label: "AI-Powered Support (ReplyCX)", href: "/ai-powered-support" },
];

// AI Forge solution + vertical landing pages. Surfacing them in the footer
// gives every page on the site an internal link to each — accelerating
// discovery/indexing and passing link equity from established pages.
const solutions = [
  { label: "Custom Software Development", href: "/custom-software-development" },
  { label: "Custom AI App Development", href: "/ai-app-development" },
  { label: "Custom Portal Development", href: "/custom-portal-development" },
  { label: "Custom Partner Portal Development", href: "/custom-partner-portal-development" },
  { label: "Custom Ecommerce Development", href: "/custom-ecommerce-development" },
  { label: "GLP-1 & Telehealth Ecommerce", href: "/glp-1-ecommerce" },
  { label: "Chapter & Dues Management", href: "/chapter-management-software" },
  { label: "AI for Insurance", href: "/ai-for-insurance" },
  { label: "AI for Hospitality", href: "/ai-for-hospitality" },
  { label: "AI for Membership Orgs", href: "/ai-for-membership-organizations" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// Quick Links expanded to include:
//   - /savings-calculator (lead-magnet free tool)
//   - /salesforce-consulting-orlando + /ai-app-development-florida
//     (local-intent landing pages — internal links boost crawl + ranking)
const quickLinks = [
  { label: "About Us", href: "/about-ardn" },
  { label: "Our Products", href: "/our-products" },
  { label: "Free Savings Calculator", href: "/savings-calculator" },
  { label: "Salesforce Consulting (Orlando)", href: "/salesforce-consulting-orlando" },
  { label: "Salesforce Consulting (Miami)", href: "/salesforce-consulting-miami" },
  { label: "Salesforce Consulting (Tampa)", href: "/salesforce-consulting-tampa" },
  { label: "Salesforce Consulting (Jacksonville)", href: "/salesforce-consulting-jacksonville" },
  { label: "AI App Development (Florida)", href: "/ai-app-development-florida" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Careers", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
];

const buyerGuides = [
  { label: "Salesforce E-commerce Solutions", href: "/buyers-guide/salesforce-ecommerce-solutions" },
  { label: "Salesforce Membership Management Solutions", href: "/buyers-guide/salesforce-membership-management-tools" },
  { label: "Salesforce Subscription Management Tools", href: "/buyers-guide/salesforce-subscription-management-software" },
  { label: "Salesforce Event and Ticketing Platforms", href: "/buyers-guide/salesforce-event-ticketing-platform" },
  { label: "Salesforce Commerce AppExchange Solutions", href: "/buyers-guide/salesforce-commerce-appexchange-solutions" },
  { label: "Salesforce Workflow Automation Tools", href: "/buyers-guide/salesforce-workflow-automation-tools" },
  { label: "AI App Development", href: "/buyers-guide/ai-app-development" },
  { label: "Salesforce Commerce Cloud Alternatives", href: "/compare/salesforce-commerce-cloud-alternatives" },
  { label: "How to Cut CRM Licensing Costs", href: "/reduce-crm-licensing-costs" },
  { label: "Cut Salesforce/HubSpot Seat Costs", href: "/compare/salesforce-seat-cost-vs-custom-portal" },
  { label: "Experience Cloud vs. Custom Portal", href: "/compare/salesforce-experience-cloud-vs-custom-portal" },
  { label: "License Tools vs. Custom Portal", href: "/compare/license-optimization-tools-vs-custom-portal" },
  { label: "Custom Software vs. SaaS Cost", href: "/compare/custom-software-vs-saas" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61569012437188", label: "Facebook" },
  { icon: Twitter, href:"https://x.com/ardn_cloud_sol", label: "Twitter" },
  { icon: Instagram, href:"https://www.instagram.com/ardncloudsolutions/", label: "Instagram" },
  { icon: Linkedin, href:"https://www.linkedin.com/company/ardn-cloud-solutions/", label: "LinkedIn" },
  { icon: Youtube, href:"https://www.youtube.com/@ardn_cloud_solutions", label: "YouTube" },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-white font-semibold font-poppins text-lg mb-5 tracking-wide">
      {children}
    </h4>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-0 hover:gap-2 text-[#c4c4c4] hover:text-white font-poppins text-[15px] leading-tight transition-all duration-200"
      >
        <ArrowRight
          size={14}
          strokeWidth={2.5}
          className="flex-shrink-0 w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-200"
        />
        <span>{children}</span>
      </Link>
    </li>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-primary w-full">
      {/* ── Main footer body ── */}
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:pr-16 xl:pr-24 flex flex-col gap-8 pt-5 lg:py-20">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/logo/ardn_logo_white.svg"
                alt="ARDN Cloud Solutions"
                width={180}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Description rewritten as hybrid identity. Lead pillar:
                custom AI / development practice powered by the AI Forge
                Framework. Supporting pillar: Salesforce consulting and
                managed services backed by 30+ years of expertise. */}
            <p className="text-white font-poppins text-[15px] leading-[1.6] ]">
              Ardn Cloud Solutions is an Orlando, Florida custom AI and
              software development team. We build AI-powered products and
              bespoke applications using our proprietary AI Forge Framework,
              ship a suite of Salesforce-native cloud products, and provide
              Salesforce consulting and managed services backed by 30+ years
              of expertise.
            </p>

            {/* Company Info — Orlando, FL address now visible in footer to
                reinforce the LocalBusiness schema NAP and support local-SEO
                ranking signals. */}
            <div className="flex flex-col gap-3">
              <h6 className="text-white font-medium font-poppins">
                Company Information
              </h6>
              <p className="text-[#c4c4c4] font-poppins text-sm">
                <span className="text-white">Headquarters:</span>{" "}
                Orlando, Florida — serving customers globally
              </p>
              <p className="text-[#c4c4c4] font-poppins text-sm">
                <span className="text-white">Send mail:</span>{" "}
                <a
                  href="mailto:contactus@ardncloudsolutions.com"
                  className="hover:text-white transition-colors"
                >
                  contactus@ardncloudsolutions.com
                </a>
              </p>
              <p className="text-[#c4c4c4] font-poppins text-sm">
                <span className="text-white">Contact:</span>{" "}
                <a
                  href="tel:+14078155303"
                  className="hover:text-white transition-colors"
                >
                  +1 (407) 815-5303
                </a>
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
                >
                  <Icon size={24} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* ── VERTICAL DIVIDER ── */}
          <div className="hidden lg:block w-px bg-white/10 self-stretch" />

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:pl-4 xl:pl-8 flex flex-col gap-10 pb-5 lg:py-20">
            {/* Link columns grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Our Products + Legal */}
              <div className="flex flex-col gap-8">
                <div>
                  <FooterHeading>Our Products</FooterHeading>
                  <ul className="flex flex-col gap-3">
                    {ourProducts.map((item) => (
                      <FooterLink key={item.href} href={item.href}>
                        {item.label}
                      </FooterLink>
                    ))}
                  </ul>
                </div>
                <div>
                  <FooterHeading>Legal</FooterHeading>
                  <ul className="flex flex-col gap-3">
                    {legal.map((item) => (
                      <FooterLink key={item.href} href={item.href}>
                        {item.label}
                      </FooterLink>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Solutions — AI Forge solution & vertical landing pages */}
              <div>
                <FooterHeading>Solutions</FooterHeading>
                <ul className="flex flex-col gap-3">
                  {solutions.map((item) => (
                    <FooterLink key={item.href} href={item.href}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <FooterHeading>Quick Links</FooterHeading>
                <ul className="flex flex-col gap-3">
                  {quickLinks.map((item) => (
                    <FooterLink key={item.href} href={item.href}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Buyer Guides */}
              <div>
                <FooterHeading>Buyer Guides</FooterHeading>
                <ul className="flex flex-col gap-3">
                  {buyerGuides.map((item) => (
                    <FooterLink key={item.href} href={item.href}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-white/10">
        <div className="container flex items-center lg:items-start justify-between h-14 lg:h-25">
          <p className="text-[#c4c4c4] font-poppins lg:pt-6 text-[15px]">
            Copyright © {new Date().getFullYear()}, ARDN Cloud Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
