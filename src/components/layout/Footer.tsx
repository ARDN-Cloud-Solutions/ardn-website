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

// Footer columns follow the products + services split used in the header
// menu. Salesforce-specific pages are grouped behind one "Salesforce
// solutions" link (and the Orlando consulting page) instead of being listed
// individually, so the footer doesn't read as a Salesforce shop.
const ourProducts = [
  { label: "Club Steward", href: "/golf-club-management-software" },
  { label: "Nonprofit Management", href: "/nonprofit-management-software" },
  { label: "Membership Management", href: "/membership-management" },
  { label: "Construction CRM", href: "/construction-crm" },
  { label: "All products", href: "/our-products" },
];

const services = [
  { label: "AI Forge", href: "/ai-forge" },
  { label: "Custom Software Development", href: "/custom-software-development" },
  { label: "Custom AI App Development", href: "/ai-app-development" },
  { label: "Custom Portal Development", href: "/custom-portal-development" },
  { label: "Partner Portal Development", href: "/custom-partner-portal-development" },
  { label: "Custom Ecommerce Development", href: "/custom-ecommerce-development" },
  { label: "Salesforce Solutions", href: "/our-products#salesforce" },
];

const industries = [
  { label: "Golf & Country Clubs", href: "/golf-club-management-software" },
  { label: "Nonprofits & Community Centers", href: "/nonprofit-management-software" },
  { label: "GLP-1 & Telehealth", href: "/glp-1-ecommerce" },
  { label: "Chapters & Associations", href: "/chapter-management-software" },
  { label: "AI for Insurance", href: "/ai-for-insurance" },
  { label: "AI for Hospitality", href: "/ai-for-hospitality" },
  { label: "AI for Membership Orgs", href: "/ai-for-membership-organizations" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const company = [
  { label: "About Ardn", href: "/about-ardn" },
  { label: "Our Work", href: "/work" },
  { label: "Our Approach", href: "/approach" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Software Cost Comparisons", href: "/blog/topics/software-cost-comparisons" },
  { label: "Salesforce E-commerce Guides", href: "/blog/topics/salesforce-ecommerce" },
  { label: "Free Savings Calculator", href: "/savings-calculator" },
  { label: "Custom Software vs. SaaS", href: "/compare/custom-software-vs-saas" },
  { label: "Orlando, FL", href: "/salesforce-consulting-orlando" },
  { label: "Careers", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61569012437188", label: "Facebook" },
  { icon: Twitter, href:"https://x.com/ardn_cloud_sol", label: "Twitter" },
  { icon: Instagram, href:"https://www.instagram.com/ardncloudsolutions/", label: "Instagram" },
  { icon: Linkedin, href:"https://www.linkedin.com/company/ardn-cloud-solutions/", label: "LinkedIn" },
  { icon: Youtube, href:"https://www.youtube.com/@ardncloudsolutions", label: "YouTube" },
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

            <p className="text-white font-poppins text-[15px] leading-[1.6]">
              Ardn Cloud Solutions builds software products for the
              industries we know, and runs them for you as a managed service.
              A US-based team with 30+ years of technology and consulting
              experience, from AI applications to enterprise platforms.
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

              {/* Services */}
              <div>
                <FooterHeading>Services</FooterHeading>
                <ul className="flex flex-col gap-3">
                  {services.map((item) => (
                    <FooterLink key={item.href} href={item.href}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <FooterHeading>Industries</FooterHeading>
                <ul className="flex flex-col gap-3">
                  {industries.map((item) => (
                    <FooterLink key={item.href} href={item.href}>
                      {item.label}
                    </FooterLink>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <FooterHeading>Company</FooterHeading>
                <ul className="flex flex-col gap-3">
                  {company.map((item) => (
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
