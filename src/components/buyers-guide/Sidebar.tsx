"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface ToCItem {
  id: string;
  text: string;
}

export default function Sidebar() {
  const [headings, setHeadings] = useState<ToCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [thumbStyle, setThumbStyle] = useState({ top: 0, height: 40 });

  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const findHeadings = () => {
      const headingElements = Array.from(document.querySelectorAll("main h2"));
      const items = headingElements.map((el) => ({
        id: el.id,
        text: el.textContent || "",
      })).filter(item => item.id);

      setHeadings(items);

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        {
          rootMargin: "0px 0px -80% 0px",
          threshold: 0.1
        }
      );

      headingElements.forEach((el) => observerRef.current?.observe(el));
    };

    findHeadings();
    const timer = setTimeout(findHeadings, 1000);

    return () => {
      clearTimeout(timer);
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  // Scroll the sidebar list to keep the active item centred
  useEffect(() => {
    if (!activeId || !scrollContainerRef.current) return;
    const activeLink = scrollContainerRef.current.querySelector(`[href="#${activeId}"]`) as HTMLElement | null;
    if (activeLink) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        top: activeLink.offsetTop - container.clientHeight / 2 + activeLink.clientHeight / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  // Real scrollbar: thumb mirrors the ToC list scroll position
  useEffect(() => {
    const list = scrollContainerRef.current;
    const track = trackRef.current;
    if (!list || !track) return;

    const updateThumb = () => {
      const trackHeight = track.clientHeight;
      if (trackHeight === 0) return;

      const { scrollTop, scrollHeight, clientHeight } = list;

      const thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 30);
      const maxScroll = scrollHeight - clientHeight;
      const top = maxScroll > 0 ? (scrollTop / maxScroll) * (trackHeight - thumbHeight) : 0;
      setThumbStyle({ top, height: thumbHeight });
    };

    updateThumb();

    // Re-run when track gets a real height (e.g. after sticky layout resolves)
    const ro = new ResizeObserver(updateThumb);
    ro.observe(track);

    list.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb, { passive: true });
    return () => {
      ro.disconnect();
      list.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [headings]);

  return (
    <aside className="h-full">
      <div className="lg:sticky lg:top-[90px] flex flex-col gap-2 h-auto pb-4 mb-10 overflow-visible">

        {/* Table of Contents Section */}
        <div className="rounded-[12px] py-2 px-3 flex flex-col min-h-[250px]">
          <h2 className="text-xl lg:text-2xl font-bold text-black mb-4 font-poppins">Contents</h2>

          <div className="relative flex flex-row h-full flex-1 max-h-[250px]">

            {/* Single continuous vertical track */}
            <div ref={trackRef} className="absolute left-0 top-0 bottom-0 w-[1.7px] shrink-0">
              {/* Black base */}
              <div className="absolute inset-0 bg-black" />
              {/* Orange thumb that moves to the active item */}
              <div
                className="absolute left-0 w-full bg-[#FF7A00] transition-all duration-300 ease-in-out"
                style={{ top: `${thumbStyle.top}px`, height: `${thumbStyle.height}px` }}
              />
            </div>

            {/* Scrollable List */}
            <ul
              ref={scrollContainerRef}
              className="flex-1 flex flex-col pl-4 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ maxHeight: "100%" }}
            >
              {headings.map((item) => (
                <li key={item.id} className="text-black mb-3 last:mb-0">
                  <a
                    href={`#${item.id}`}
                    className={`block no-underline text-sm font-normal leading-snug transition-colors duration-200 hover:text-[#FF7A00] ${
                      activeId === item.id ? "text-[#FF7A00] font-medium" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.id);
                      if (element) {
                        const offset = 120;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                      }
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Card Section */}
        <div className="bg-[#4D5562] rounded-md p-4 lg:p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] mt-2 lg:mt-2">
          <div className="flex flex-col gap-3 lg:gap-4">
            <h4 className="font-bold text-white m-0">Let&apos;s Talk!</h4>
            <p className="text-white text-sm lg:text-base leading-[1.4] m-0 opacity-90">
              Want to discuss your needs or ideas with one of our Salesforce professionals?
            </p>
            <Button
              href="/contact-us"
              variant="orange"
              size="lg"
              className="w-full lg:w-fit font-bold"
              rightIcon={<ArrowRight size={20} />}
            >
              Get In Touch!
            </Button>
          </div>
        </div>

        {/* Wedge cross-link — surfaces the per-seat cost-reduction angle to
            every buyer's-guide reader, most of whom are already evaluating
            Salesforce-native tooling and are the exact ICP for this pitch. */}
        <div className="rounded-md p-4 lg:p-5 border border-[#e5e7eb] bg-white flex flex-col gap-2">
          <p className="text-[#1c2045] text-sm leading-snug m-0">
            Paying per-seat for Salesforce licenses?{" "}
            <Link
              href="/reduce-crm-licensing-costs"
              className="text-[#FF7A00] font-semibold no-underline hover:underline"
            >
              Keep your CRM, cut the per-seat bill →
            </Link>
          </p>
          <p className="text-[#1c2045] text-sm leading-snug m-0">
            <Link
              href="/custom-portal-development"
              className="text-[#FF7A00] font-semibold no-underline hover:underline"
            >
              Replace paid seats with a custom portal →
            </Link>
          </p>
          <p className="text-[#1c2045] text-sm leading-snug m-0">
            <Link
              href="/compare/salesforce-seat-cost-vs-custom-portal"
              className="text-[#FF7A00] font-semibold no-underline hover:underline"
            >
              See the seat-cost math →
            </Link>
          </p>
        </div>
      </div>
    </aside>
  );
}
