"use client";

import { motion } from "framer-motion";


export default function AboutVisionSection() {
    return (
        <section className="pt-16 lg:pt-24 pb-16 lg:pb-24 bg-white">
            <div className="container">
                {/* Two-column layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="grid lg:grid-cols-[25%_1fr] gap-6 lg:gap-16 items-start"
                    >
                        <p className="text-[12px] md:text-[13px] font-medium uppercase tracking-[3px] md:tracking-[4px] text-paragraph lg:pt-3">
                            Where Efficiency Meets Innovation
                        </p>

                        {/* Right — Heading + Description */}
                        <div>
                            <h2 className="text-heading-dark font-semibold leading-tight mb-4">
                                <span className="text-heading-dark">A Vision for a </span>
                                <span className="text-heading">Smarter Salesforce Experience</span>
                            </h2>
                            <p className="text-paragraph text-base lg:text-[17px    ] leading-relaxed">
                                Founded by a team of Salesforce enthusiasts, Ardn Cloud Solutions emerged
                                from a passion for creating products that empower businesses to do more with
                                less cost. We&apos;ve seen firsthand how complex CRM environments can become,
                                and we&apos;re on a mission to make Salesforce work smarter for you. Our
                                approach is rooted in lean, agile thinking—developing solutions that cut
                                costs, simplify processes, and help companies unlock new growth opportunities.
                            </p>
                        </div>
                    </motion.div>

                </div>

        </section>
    );
}
