import { BadgePercent, Boxes, CalendarCheck, CreditCard, FileSignature, LayoutGrid, PackageCheck, ShoppingCart, Tags } from "lucide-react";
import type { ProductPageContent } from "@/components/product-page/types";

// Storefronts page content. Claims are limited to what the Storefronts
// packages do (repos storefronts, storefronts-ecommerce): catalog and
// pricebooks, cart and checkout, memberships, appointments, promotions,
// inventory, orders, card/ACH/wallet payments, e-signature. NOT claimed:
// events/ticketing, launch-time promises. Name no single processor.
// Screens are mockups with sample data (scripts/product-mockups).

const CALL = "https://calendly.com/ardncloudsolutions/ardn-cloud-solutions-bespoke-ai";

export const STOREFRONTS: ProductPageContent = {
  slug: "storefronts",
  theme: {
    accent: "#8fd3b6",
    accentSoft: "#c4ecdb",
    accentRgb: "143, 211, 182",
    accentInk: "#0b2a1f",
    accent2: "#1d6b52",
    accent2Deep: "#0f3d2e",
    accent2Rgb: "29, 107, 82",
  },
  hero: {
    eyebrow: "Storefronts · Commerce inside Salesforce",
    title: "Your online store,",
    titleEm: "inside Salesforce.",
    lede: "Sell products, memberships and appointments from a store in your own brand. Every order, member and booking lands on the customer record your team already uses, with no sync and no second system.",
    primaryCta: { label: "Book a demo", href: CALL },
    secondaryCta: { label: "See it working", href: "#tour" },
    proof: ["Installs in your Salesforce org", "Products, memberships and appointments", "Card, ACH and digital wallets"],
    shot: { src: "/images/storefronts/store.webp", alt: "Branded online store built with Storefronts selling gear, memberships and appointments", url: "shop.harborandpine.com" },
    float: { label: "Sample store · this month", stats: [{ value: "612", label: "Orders" }, { value: "1,284", label: "Active memberships" }] },
    caption: "Screens show a sample store with fictional products and customers.",
  },
  trust: ["US-based team", "30+ yrs building software", "4-hour response SLA", "Native to Salesforce"],
  figures: [
    { value: "1", label: "customer record for orders, members and bookings" },
    { value: "0", label: "sync jobs between your store and your CRM" },
    { value: "3", label: "ways to sell: products, memberships, appointments" },
    { value: "100%", label: "of orders reportable in Salesforce" },
  ],
  pains: {
    kicker: "The disconnected store",
    title: "Your store and your CRM shouldn't disagree about your customers.",
    sub: "Most businesses on Salesforce sell through a separate platform, then spend time and money keeping the two in step.",
    items: [
      { label: "Two records", text: "Customers exist once in the store and again in Salesforce." },
      { label: "Sync breaks", text: "Integrations drop orders, duplicate contacts and need constant fixing." },
      { label: "Blind spots", text: "Sales and service can't see what a customer bought or booked." },
      { label: "Extra fees", text: "Another platform subscription, app fees, and the integration on top." },
    ],
  },
  promises: {
    kicker: "Why Storefronts",
    title: "One system for selling and for knowing your customer.",
    sub: "Because the store runs inside Salesforce, every team works from the same up-to-date record.",
    items: [
      { icon: ShoppingCart, title: "A store your brand owns", body: "Catalog, cart and checkout themed to your brand and hosted in your org." },
      { icon: CalendarCheck, title: "More than products", body: "Sell memberships that renew and appointments that book staff time." },
      { icon: LayoutGrid, title: "Orders where your team works", body: "Every order, payment and fulfilment status is a Salesforce record." },
      { icon: BadgePercent, title: "Promotions that know your customer", body: "Member pricing, discount codes and segment offers from CRM data." },
    ],
  },
  tour: {
    kicker: "See it working",
    title: "From the storefront to the order record.",
    sub: "What your customers see, and what your team sees in Salesforce a second later.",
    rows: [
      {
        kicker: "Your store",
        title: "A modern store in your own brand.",
        body: "Products with variants, memberships and bookable appointments side by side, with member pricing applied automatically when customers sign in.",
        points: ["Themed to your brand", "Member pricing and promotions", "Products, memberships and appointments"],
        shot: { src: "/images/storefronts/store.webp", alt: "Storefront home page with featured products, a membership and a bookable fitting", url: "shop.harborandpine.com" },
      },
      {
        kicker: "Checkout",
        title: "One checkout for everything in the cart.",
        body: "A product, a membership and an appointment in a single order, paid by card, bank transfer or digital wallet, with delivery or in-store pickup.",
        points: ["Card, ACH and Apple Pay", "Shipping or pickup", "Member discounts applied at checkout"],
        shot: { src: "/images/storefronts/checkout.webp", alt: "Storefronts checkout with contact, delivery, payment options and order summary", url: "shop.harborandpine.com/checkout" },
      },
      {
        kicker: "Inside Salesforce",
        title: "Orders, payments and fulfilment on one screen.",
        body: "Revenue, orders, active memberships and low-stock alerts, with every order showing its channel, payment and fulfilment status.",
        points: ["Web, front-desk and invoice orders", "Payment and fulfilment status", "Low-stock and reorder alerts"],
        shot: { src: "/images/storefronts/orders.webp", alt: "Storefronts orders view inside Salesforce with revenue, orders and fulfilment statuses", url: "Storefronts · Orders" },
      },
    ],
    cta: { text: "Want to see Storefronts on your own products and data? We'll set up a 30-minute demo.", action: { label: "Book a demo", href: CALL } },
  },
  sampleNote: "Screens show a sample store with fictional products, customers and figures.",
  modules: {
    kicker: "Everything included",
    title: "Everything the store runs on.",
    sub: "Built on Salesforce objects, so it's all reportable and extendable by your admins.",
    items: [
      { icon: Tags, title: "Catalog & pricebooks", body: "Products, variants and pricing tiers, including B2B pricebooks per customer." },
      { icon: Boxes, title: "Inventory", body: "Stock levels, warehouse views and low-stock alerts." },
      { icon: CreditCard, title: "Payments", body: "Card, ACH and digital wallets through the processor you choose." },
      { icon: BadgePercent, title: "Promotions", body: "Discount codes, rules and member-only offers." },
      { icon: PackageCheck, title: "Order management", body: "From checkout to fulfilment, with every status visible in Salesforce." },
      { icon: FileSignature, title: "E-signature", body: "Capture agreements at checkout with a full audit trail." },
    ],
  },
  steps: {
    kicker: "Getting started",
    title: "Live in four steps.",
    sub: "Our team configures Storefronts with you, inside your own Salesforce org.",
    items: [
      { title: "Install", body: "Install Storefronts into your Salesforce environment." },
      { title: "Configure", body: "Set up your catalog, pricebooks, memberships and appointment types." },
      { title: "Brand", body: "Theme the store to your brand and connect your payment processor." },
      { title: "Launch", body: "Go live and track orders, members and bookings in Salesforce." },
    ],
  },
  faqs: [
    { q: "How does Storefronts work with Salesforce?", a: "It installs directly into your Salesforce org and uses your existing records. Customers, orders and bookings are Salesforce data, so there's nothing to sync." },
    { q: "Can we customize the store?", a: "Yes. The store is themed to your brand, and your team or ours can extend it with Salesforce components for a fully custom front end." },
    { q: "What can we sell?", a: "Physical and digital products, memberships that renew, and appointments that book staff time, plus B2B catalogs with customer-specific pricebooks." },
    { q: "Which payment methods are supported?", a: "Cards, ACH bank payments and digital wallets such as Apple Pay, through the payment processor you choose." },
    { q: "Do we need to change how our team works?", a: "No. Sales, service and finance keep working in Salesforce. Orders and payments simply show up on the records they already use." },
  ],
  form: {
    heading: "See Storefronts on your data",
    sub: "Tell us what you sell and how you use Salesforce today. We'll reply within 4 business hours to set up a demo.",
    submitLabel: "Request a demo",
    messageLabel: "What would you like to sell online?",
  },
  final: {
    title: "One customer record.",
    titleEm: "One place to sell.",
    lede: "Run your store inside Salesforce and give every team the full picture of every customer.",
    cta: { label: "Book a demo", href: CALL },
    links: [
      { label: "Salesforce solutions", href: "/our-products#salesforce" },
      { label: "Custom ecommerce development", href: "/custom-ecommerce-development" },
      { label: "License Guard", href: "/license-guard" },
    ],
  },
};
