"use client";

import ContactForm from "./ContactForm";
import ContactStatsInfo from "./ContactStatsInfo";

export default function ContactFormSection() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
      {/* Decorative Vector Lines */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-20 z-0">
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform translate-x-1/4 translate-y-1/4"
        >
          <path
            d="M500 100C350 100 250 250 100 250M500 150C380 150 300 280 150 280M500 200C410 200 350 310 200 310"
            stroke="url(#gradient)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="gradient" x1="500" y1="100" x2="100" y2="310" gradientUnits="userSpaceOnUse">
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-4 items-start">
          {/* Left Column: Info */}
          <ContactStatsInfo />

          {/* Right Column: Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
