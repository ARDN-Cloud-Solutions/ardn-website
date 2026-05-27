"use client";

import React, { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import type { WPPost, WPTerm } from "@/lib/wordpress/types";
import { getFeaturedImageUrl, getExcerptText } from "@/lib/wordpress/utils";

interface SuccessStoriesProps {
  posts: WPPost[];
  categories: WPTerm[];
}

export default function SuccessStories({ posts, categories }: SuccessStoriesProps) {
  const [activeTab, setActiveTab] = useState<number | "all">("all");
  const filteredStories = posts.filter(
    (post) => activeTab === "all" || post["case-study-categories"]?.includes(activeTab as number)
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: filteredStories.length > 4,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", (api) => {
      onSelect();
      setScrollSnaps(api.scrollSnapList());
    });
  }, [emblaApi, onSelect, filteredStories]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="bg-white overflow-hidden relative">
      <div className="bg-primary pt-24 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-sm font-bold uppercase tracking-[0.4em] text-white/50 mb-2">
            Our Featured Insights
          </span>
          <h2 className="font-medium text-white mb-4 tracking-tight">
            Success Stories
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
            <button
              onClick={() => setActiveTab("all")}
              className={`group relative pb-2 text-lg transition-colors duration-300 ${activeTab === "all" ? "text-white" : "text-white/50 hover:text-white"}`}
            >
              <span className="font-medium">All Case</span>
              <sup className="ml-1 text-xs opacity-80">{posts.length}</sup>
              {activeTab !== "all" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              )}
              {activeTab === "all" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>

            {categories.map((cat) => {
              const count = posts.filter((p) => p["case-study-categories"]?.includes(cat.id)).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`group relative pb-2 text-lg transition-colors duration-300 ${activeTab === cat.id ? "text-white" : "text-white/50 hover:text-white"}`}
                >
                  <span className="font-medium">{cat.name}</span>
                  <sup className="ml-1 text-xs opacity-80">{count}</sup>
                  {activeTab !== cat.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                  {activeTab === cat.id && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-8 group/carousel">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -ml-4">
              {filteredStories.map((post) => {
                const image = getFeaturedImageUrl(post);
                const title = post.title.rendered.replace(/<[^>]+>/g, "");
                const description = getExcerptText(post.excerpt?.rendered ?? "", 140);
                return (
                  <div
                    key={post.id}
                    className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="group relative h-[450px] overflow-hidden cursor-pointer"
                    >
                      {image ? (
                        <Image
                          src={image}
                          alt={title}
                          fill
                          className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-800" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20 text-center pointer-events-none">
                        <div className="transition-all duration-500 transform translate-y-[130px] group-hover:translate-y-0 h-32 flex items-end justify-center">
                          <h6 className="text-[20px] font-medium text-white leading-tight drop-shadow-lg px-4">
                            {title}
                          </h6>
                        </div>

                        <div className="max-h-0 group-hover:max-h-40 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-10 group-hover:translate-y-0 max-w-[300px] group-hover:mb-8">
                          <p className="text-white/90 text-[14px]">
                            {description}
                          </p>
                        </div>

                        <div className="max-h-0 group-hover:max-h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 pointer-events-auto">
                          <Link href={`/case-studies/${post.slug}`}>
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                              <ArrowRight className="w-6 h-6" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
      <div className="px-4 lg:px-[60px] flex justify-center lg:justify-end mt-12 gap-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full flex items-center justify-center ${
              index === selectedIndex
                ? "w-2.5 h-2.5 lg:w-3 lg:h-3 border border-heading-dark bg-transparent"
                : "w-2.5 h-2.5 lg:w-3 lg:h-3 bg-heading-dark self-center"
            } flex-shrink-0`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
