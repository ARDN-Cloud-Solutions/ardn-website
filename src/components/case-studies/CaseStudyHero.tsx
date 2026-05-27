"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

interface CaseStudyHeroProps {
    title?: string;
}

export default function CaseStudyHero({ title: titleProp }: CaseStudyHeroProps) {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    };

    const title = titleProp ?? "ARDN Client Case Studies & Success Stories";

    return (
        <section className="relative w-full h-100 lg:h-100 flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/blog-hero-bg.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="container relative z-10 text-white">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={{
                        animate: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="max-w-3xl"
                >
                    <motion.h1
                        variants={fadeIn}
                        className="font-medium mb-2 text-white"
                    >
                        {title}
                    </motion.h1>

                    <div className="relative flex items-center mb-8">
                        <motion.div
                            variants={fadeIn}
                            className="w-20 h-0.75 bg-white relative z-10"
                        />
                        <motion.div
                            variants={fadeIn}
                            className="w-75 md:w-150 h-px bg-white/50 absolute left-0 bottom-0"
                        />
                    </div>

                    <motion.div
                        variants={fadeIn}
                        className="flex items-center gap-4 text-sm md:text-base font-medium"
                    >
                        <Link
                            href="/"
                            className="hover:text-primary-light transition-colors"
                        >
                            Homepage
                        </Link>
                        <MoveRight size={18} className="text-white/60" />
                        <Link
                            href="/case-studies"
                            className="text-white/80"
                        >
                            Case Studies
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
