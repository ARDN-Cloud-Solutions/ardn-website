"use client";

import React, { useCallback } from "react";
import TypingText from "../ui/TypingText";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { WPPost } from "@/lib/wordpress/types";
import { getFeaturedImageUrl, getFeaturedImageAlt } from "@/lib/wordpress/utils";

interface InsightsCarouselProps {
  posts: WPPost[];
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }),
  };
}

export default function InsightsCarousel({ posts }: InsightsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-paragraph mb-4">
            Read the Latest Insights
          </span>
          <TypingText
            text={`Stay Updated on <span class="text-heading">Salesforce Innovations</span>`}
            as="h2"
            className="text-heading-dark mb-6 max-w-6xl mx-auto font-medium font-heading"
          />
          <div className="w-64 h-[1px] bg-gray-200 relative flex items-center justify-center">
            <div className="w-24 h-[3px] bg-heading-dark"></div>
          </div>
        </div>

        <div className="relative flex items-center px-4 md:px-12">
          {/* Prev Button Far Left */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 md:left-[-12px] lg:left-[-24px] z-40 w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary text-heading-dark hover:text-white transition-all duration-300 group cursor-pointer top-1/2 -translate-y-1/2 bg-white shadow"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform" />
          </button>

          <div className="embla cursor-grab active:cursor-grabbing w-full overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -mx-3">
              {posts.map((post) => {
                const { day, month } = formatDate(post.date);
                const imageUrl = getFeaturedImageUrl(post);
                const imageAlt = getFeaturedImageAlt(post);
                const title = post.title.rendered.replace(/<[^>]+>/g, "");
                return (
                <div
                  key={post.id}
                  className="embla__slide px-3 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0"
                >
                  <Link href={`/blog/${post.slug}`} className="block group/link group relative h-[500px] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col bg-white border border-gray-100">
                    {/* Date Badge */}
                    <div className="absolute top-6 left-6 z-30 p-3 rounded-[4px] flex flex-col items-center min-w-[65px] shadow-lg transition-transform duration-300 group-hover:scale-105 bg-heading-dark text-white group-hover:bg-[#353e47]">
                      <span className="text-2xl font-bold leading-none">{day}</span>
                      <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest mt-1">{month}</span>
                    </div>

                    {/* Image Container */}
                    {imageUrl ? (
                      <div className="relative h-full w-full overflow-hidden bg-heading-dark featured-image-gradient">
                        <Image
                          src={imageUrl}
                          alt={imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-40"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Hover BG Overlay */}
                        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-heading-dark" />
                      </div>
                    ) : (
                      <div className="relative h-full w-full flex items-center justify-center p-12 text-center overflow-hidden bg-heading-dark featured-image-gradient">
                        {/* <span className="text-gray-400 text-lg">No Image</span> */}
                        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-heading-dark" />
                      </div>
                    )}

                    {/* Bottom heading always visible, hides on hover */}
                    <h4 className="absolute left-0 right-0 bottom-0 text-[22px] p-10 font-bold leading-tight text-white z-30 transition-opacity duration-300 group-hover:opacity-0">
                      {title}
                    </h4>

                    {/* Hover Overlay: Centered Heading */}
                    <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <h4 className="px-6 text-[22px] font-bold leading-tight text-white text-center w-full drop-shadow-lg">
                        {title}
                      </h4>
                    </div>

                    {/* Hover Overlay: Bottom Button */}
                    <div className="absolute inset-x-0 bottom-10 z-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex items-center gap-2 justify-center text-white">
                        <span className="text-[17px] font-semibold">Continue Reading</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
                );
              })}
            </div>
          </div>

          {/* Next Button Far Right */}
          <button
            onClick={scrollNext}
            className="absolute right-0 md:right-[-12px] lg:right-[-24px] z-40 w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary text-heading-dark hover:text-white transition-all duration-300 group cursor-pointer top-1/2 -translate-y-1/2 bg-white shadow"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
