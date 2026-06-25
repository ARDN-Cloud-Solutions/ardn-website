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
} from "lucide-react";
import Button from "@/components/ui/Button";

// ─── Data ───────────────────────────────────────────────────────────────────

const products = [
  { label: "AI Forge", href: "/ai-forge" },
  {
    label: "Storefronts: All-In-One ECommerce Solution",
    href: "/storefronts",
  },
  { label: "Salesforce Payments", href: "/salesforce-payments" },
  { label: "Licence Guard", href: "/license-guard" },
  { label: "Ai-powered Support", href: "/ai-powered-support" },
  { label: "Membership Management", href: "/membership-management" },
  // { label: "Signup Dance Studio", href: "/signup-dance-studio" },
  // { label: "Signup Fitness Studio", href: "/signup-fitness-studio" },
];

const navLinks = [
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
      if (e.key === "Escape") setSearchOpen(false);
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
          <div className="container flex items-center justify-between h-[72px] md:h-[80px] lg:h-[90px]">
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
              {/* Our Products dropdown trigger */}
              <div className="relative" ref={dropdownRef}>
                                  
                {/* BUTTON */}
                <Link
                  href="/our-products"
                  onMouseEnter={() => setProductsOpen(true)}
                  className="flex items-center text-heading-dark gap-1.5 text-base font-poppins hover:text-primary transition-colors cursor-pointer"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                >
                  Our Products
                  {productsOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </Link>

                {/* Dropdown */}
                {productsOpen && (
                  <div
                    className="absolute left-0 top-full mt-8 w-[340px] bg-heading-dark shadow-2xl py-3 border border-white/5 z-50"
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    {products.map((product) => (
                      <Link
                        key={product.label}
                        href={product.href}
                        onClick={() => setProductsOpen(false)}
                        className="group flex items-center gap-3 px-4 py-2 text-sm text-white/80 hover:text-white transition-all"
                      >
                        <span className="w-0 group-hover:w-5 h-[2px] bg-white transition-all duration-300" />
                        {product.label}
                      </Link>
                    ))}
                  </div>
                )}
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
              className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileProductsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <div className="pl-4 pb-3 flex flex-col gap-0.5">
                {products.map((product) => (
                  <Link
                    key={product.label}
                    href={product.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block px-3 py-3 text-[13px] font-medium font-poppins text-heading-dark hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {product.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other links */}
          {[...navLinks, { label: "Contact Us", href: "/contact-us" }].map(
            (link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center px-2 py-4 text-sm font-semibold font-poppins text-heading-dark hover:text-primary transition-colors border-b border-slate-100"
              >
                {link.label}
              </Link>
            )
          )}
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
