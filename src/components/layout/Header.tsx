"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Phone,
  Search,
  ChevronDown,
  ChevronUp,
  X,
  Menu,
  ArrowRight,
  MailOpen,
  Box,
  Sparkles,
  Code2,
  LayoutDashboard,
  Handshake,
  MessagesSquare,
  Users,
  HeartHandshake,
  Flag,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";

// ─── Data ───────────────────────────────────────────────────────────────────

type ProductLink = {
  label: string;
  href: string;
  blurb: string;
  icon: LucideIcon;
  tag?: string;
};

// Grouped by what the buyer is shopping for. The desktop menu shows the
// groups as columns; the mobile drawer shows them as labelled sections.
const productGroups: { title: string; items: ProductLink[] }[] = [
  {
    title: "Products",
    items: [
      { label: "Club Steward", href: "/golf-club-management-software", blurb: "Golf and country club management", icon: Flag },
      { label: "Nonprofit Management", href: "/nonprofit-management-software", blurb: "Members and donors in one record", icon: HeartHandshake },
      { label: "Membership Management", href: "/membership-management", blurb: "Gyms, studios, clubs and associations", icon: Users },
      { label: "ReplyCX", href: "/ai-powered-support", blurb: "AI agents for routine customer questions", icon: MessagesSquare },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "AI Forge", href: "/ai-forge", blurb: "Custom AI apps, built and run for you", icon: Sparkles, tag: "Flagship" },
      { label: "Custom Software Development", href: "/custom-software-development", blurb: "Software shaped around your workflow", icon: Code2 },
      { label: "Custom Portal Development", href: "/custom-portal-development", blurb: "Customer and member portals", icon: LayoutDashboard },
      { label: "Partner Portal Development", href: "/custom-partner-portal-development", blurb: "Portals for partners and resellers", icon: Handshake },
    ],
  },
];

const navLinks = [
  { label: "Cut CRM Costs", href: "/reduce-crm-licensing-costs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Calculate Savings", href: "/savings-calculator" },
  { label: "About Ardn", href: "/about-ardn" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/career" },
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [overlayQuery, setOverlayQuery] = useState("");
  const overlayInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hover intent: open at once, close after a short grace period so the
  // pointer can travel from the trigger to the panel without it vanishing.
  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const closeProductsSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 220);
  };

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen || searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, searchOpen]);

  // Focus input when overlay opens; clear query when it closes
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => overlayInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) {
      const t = setTimeout(() => setOverlayQuery(""), 300);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  // Close overlay on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setProductsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const handleSearchSubmit = () => {
    const q = overlayQuery.trim();
    if (!q) return;
    setSearchOpen(false);
    router.push(`/blog/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <>
      {/* ════════════════════════════════════════════
          HEADER (fixed, full-width, z-50)
      ════════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* ── TOP BAR ── desktop only, hides on scroll ──────────────── */}
        <div className={`hidden lg:block bg-primary overflow-hidden transition-all duration-300 ease-in-out ${scrolled ? "max-h-0" : "max-h-16"}`}>
          <div className="container flex items-center justify-between h-16">
            <p className="text-[15px] text-[#E6E6E6] tracking-normal font-public-sans">
              <Box size={20} className="inline-block mr-2" /> Contact Us Now To Learn More About Cloud Solutions
            </p>
            <div className="flex items-center gap-6 text-[#E6E6E6] text-[15px] tracking-normal font-public-sans">
              <a
                href="tel:+14078155303"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Phone size={20} strokeWidth={3} />
                <span>+1 (407) 815-5303</span>
              </a>
              <span className="w-px h-4 bg-white/30" />
              <a
                href="mailto:contactus@ardncloudsolutions.com"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <MailOpen size={20} strokeWidth={3} />
                <span>contactus@ardncloudsolutions.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── MAIN NAV ──────────────────────────────── */}
        <nav
          className={`bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"
            }`}
        >
          <div className="container relative flex items-center justify-between h-[72px] md:h-[80px] lg:h-[90px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo/ardn_logo.png"
                alt="ARDN Cloud Solutions"
                width={148}
                height={46}
                className="h-11 w-auto object-contain"
                priority
              />
            </Link>

            {/* ── Desktop right side: nav links + actions ── */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              {/* Our Products — grouped mega menu */}
              <div
                ref={dropdownRef}
                onMouseEnter={openProducts}
                onMouseLeave={closeProductsSoon}
                onFocus={openProducts}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) closeProductsSoon();
                }}
              >
                <Link
                  href="/our-products"
                  className="flex items-center text-heading-dark gap-1.5 text-base font-poppins hover:text-primary transition-colors cursor-pointer"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                  aria-controls="products-menu"
                >
                  Our Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                <div
                  id="products-menu"
                  // Positioned against the nav container (not the trigger) and
                  // centred in it, so the panel never runs off-screen at
                  // narrower desktop widths.
                  className={`absolute inset-x-0 top-full z-50 flex justify-center pt-2 transition-all duration-200 ${
                    productsOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div className="w-[720px] max-w-[calc(100vw-48px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-12px_rgba(20,20,43,0.25)]">
                    <div className="grid grid-cols-2 gap-2 p-5">
                      {productGroups.map((group) => (
                        <div key={group.title}>
                          <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 font-public-sans">
                            {group.title}
                          </p>
                          <ul className="flex flex-col">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setProductsOpen(false)}
                                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:outline-none"
                                >
                                  <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-slate-200 bg-white text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
                                    <item.icon size={17} strokeWidth={1.9} />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="flex items-center gap-2 text-[14px] font-semibold leading-5 text-heading-dark font-poppins">
                                      {item.label}
                                      {item.tag && (
                                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                                          {item.tag}
                                        </span>
                                      )}
                                    </span>
                                    <span className="mt-0.5 block text-[12.5px] leading-[1.35] text-slate-500 font-public-sans">
                                      {item.blurb}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-slate-100 bg-slate-50/70 px-8 py-3.5">
                      <Link
                        href="/our-products"
                        onClick={() => setProductsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-heading-dark hover:text-primary font-poppins"
                      >
                        See all products <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/our-products#salesforce"
                        onClick={() => setProductsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-heading-dark hover:text-primary font-poppins"
                      >
                        Salesforce solutions <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/contact-us"
                        onClick={() => setProductsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline font-poppins"
                      >
                        Not sure which fits? Book a free call <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular nav links */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-poppins text-heading-dark hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* ── Actions ── */}
              <div className="flex items-center gap-3">
                {/* CTA button */}
                <Button
                  href="/contact-us"
                  variant="primary"
                  size="lg"
                  rounded="full"
                  rightIcon={ArrowRight}
                >
                  Book a Free Call
                </Button>

                {/* Search circle button */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#3b4289] hover:text-[#3b4289] transition-colors"
                  aria-label="Search"
                >
                  <Search size={17} strokeWidth={2} />
                </button>

              </div>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 text-slate-700 hover:text-[#3b4289] transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* ════════════════════════════════════════════
          MOBILE DRAWER OVERLAY
      ════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ════════════════════════════════════════════
          MOBILE DRAWER PANEL
      ════════════════════════════════════════════ */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] max-w-[90vw] bg-white z-[70] lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <Link href="/" onClick={() => setDrawerOpen(false)}>
            <Image
              src="/logo/ardn_logo.png"
              alt="ARDN Cloud Solutions"
              width={120}
              height={38}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search bar */}
        <div className="px-5 pt-5 pb-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const q = searchQuery.trim();
              if (!q) return;
              setDrawerOpen(false);
              setSearchQuery("");
              router.push(`/blog/search?q=${encodeURIComponent(q)}`);
            }}
          >
            <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden focus-within:border-[#3b4289] transition-colors bg-slate-50">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 text-sm font-poppins text-slate-700 placeholder-slate-400 outline-none bg-transparent"
              />
              <button
                type="submit"
                className="px-3 py-2.5 text-slate-400 hover:text-[#3b4289] transition-colors"
                aria-label="Submit search"
              >
                <Search size={17} strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto px-4 pb-6">
          {/* Our Products accordion */}
          <div className="border-b border-slate-100">
            <button
              onClick={() => setMobileProductsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-2 py-4 text-sm font-semibold font-poppins text-heading-dark hover:text-primary transition-colors"
              aria-expanded={mobileProductsOpen}
            >
              <span>Our Products</span>
              {mobileProductsOpen ? (
                <ChevronUp size={17} className="text-slate-400" strokeWidth={2} />
              ) : (
                <ChevronDown size={17} className="text-slate-400" strokeWidth={2} />
              )}
            </button>

            {/* Product sub-items */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileProductsOpen ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="pb-3 flex flex-col gap-4">
                {productGroups.map((group) => (
                  <div key={group.title}>
                    <p className="px-3 pb-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400 font-public-sans">
                      {group.title}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setDrawerOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] font-medium font-poppins text-heading-dark hover:text-primary hover:bg-slate-50 transition-colors"
                      >
                        <item.icon size={16} strokeWidth={1.9} className="flex-none text-primary" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  href="/our-products"
                  onClick={() => setDrawerOpen(false)}
                  className="mx-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary font-poppins"
                >
                  See all products <ArrowRight size={14} />
                </Link>
                <Link
                  href="/our-products#salesforce"
                  onClick={() => setDrawerOpen(false)}
                  className="mx-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-heading-dark font-poppins"
                >
                  Salesforce solutions <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Other links */}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className="flex items-center px-2 py-4 text-sm font-semibold font-poppins text-heading-dark hover:text-primary transition-colors border-b border-slate-100"
            >
              {link.label}
            </Link>
          ))}

          {/* Primary CTA — mirrors the desktop header button so the drawer
              always has a clear next step, not just a plain "Contact Us" link.
              (Button forwards only `href`+`className` for link mode, so an
              onClick to close the drawer needs a plain Link here instead.) */}
          <div className="pt-5 pb-2">
            <Link
              href="/contact-us"
              onClick={() => setDrawerOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-base font-medium border-2 rounded-full bg-btn-primary text-white border-btn-primary hover:bg-btn-primary-hover hover:border-btn-primary-hover transition-all duration-200"
            >
              Book a Free Call
              <ArrowRight size={20} />
            </Link>
          </div>
        </nav>
      </div>

      {/* ════════════════════════════════════════════
          SEARCH OVERLAY
      ════════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-[80] flex flex-col transition-opacity duration-300 ${
          searchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred backdrop */}
        <div
          className="absolute inset-0 bg-heading-dark/80 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        />

        {/* Header bar inside overlay */}
        <div className="relative z-10 flex items-center justify-between px-6 h-[72px] md:h-[80px] lg:h-[90px] border-b border-white/10">
          <Link href="/" onClick={() => setSearchOpen(false)}>
            <Image
              src="/logo/ardn_logo_white.svg"
              alt="ARDN Cloud Solutions"
              width={148}
              height={46}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={() => setSearchOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>

        {/* Search input */}
        <div className="relative z-10 container mt-10">
          <div className="flex items-center border-b-2 border-white/30 focus-within:border-white transition-colors pb-2 gap-4">
            <input
              ref={overlayInputRef}
              type="text"
              placeholder="Search..."
              value={overlayQuery}
              onChange={(e) => setOverlayQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              className="flex-1 bg-transparent text-white text-2xl md:text-3xl placeholder-white/40 outline-none font-poppins"
            />
            <button
              onClick={handleSearchSubmit}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Submit search"
            >
              <Search size={28} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="relative z-10 container mt-auto mb-8">
          <div className="flex items-center gap-3 text-sm text-white/60 font-poppins">
            <Link href="/" onClick={() => setSearchOpen(false)} className="hover:text-white transition-colors">
              Homepage
            </Link>
            <ArrowRight size={14} />
            <span className="text-white/80">Search Results</span>
          </div>
        </div>
      </div>
    </>
  );
}
