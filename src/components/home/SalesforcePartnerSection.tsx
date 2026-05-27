"use client";

import Image from "next/image";
import { Package } from "lucide-react";
import Button from "../ui/Button";
import TypingText from "../ui/TypingText";

export default function SalesforcePartnerSection({ className = "py-16 md:py-24" }: { className?: string }) {
    return (
        <section className={`${className} bg-white overflow-hidden`}>
            <div className="container">
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
                    {/* Left: Image Container */}
                    <div className="w-full lg:w-[45%] relative">
                        <div className="relative lg:aspect-[4/5] aspect-[4/3] w-full overflow-hidden">
                            <Image
                                src="/images/salesforce-partners.png"
                                alt="Salesforce Partner"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: Content Container */}
                    <div className="w-full lg:w-[55%] flex flex-col">
                        <TypingText 
                            text={`We're Not Your Average <br /><span class="text-heading">Salesforce Partner</span>`}
                            as="h2"
                            className="leading-[1] font-medium mb-6 text-heading-dark font-heading"
                        />

                        <p className="text-heading-dark text-base md:text-[16px] mb-5 leading-relaxed max-w-2xl font-heading">
                            At Ardn Cloud Solutions, we approach every Salesforce implementation with a critical eye. We love Salesforce&apos;s potential but challenge the ordinary to push for innovation. Our small but agile team brings big ideas that optimize, enhance, and simplify the Salesforce experience for growing businesses. Whether you need custom products or an entirely new strategy, we deliver solutions that make Salesforce work harder for you.
                        </p>

                        <hr className="border-gray-200 mb-5" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                            {/* Mission & Vision */}
                            <div className="space-y-4">
                                <div>
                                    <h6 className="text-heading-dark font-bold">Mission:</h6>
                                    <p className="text-paragraph text-[15px] leading-relaxed font-poppins">
                                        &quot;To build cost-effective, high-impact Salesforce products that help businesses simplify complexity and unlock growth.&quot;
                                    </p>
                                </div>
                                <div>
                                    <h6 className="text-heading-dark font-bold">Vision:</h6>
                                    <p className="text-paragraph text-[15px] leading-relaxed font-poppins">
                                        &quot;We aim to become the go-to innovation partner for Salesforce products, known for transforming the Salesforce ecosystem with critical, forward-thinking solutions.&quot;
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        rounded="full"
                                        href="/about-ardn"
                                    >
                                        More About Us
                                    </Button>
                                </div>
                            </div>

                            {/* Stat Card */}
                            <div className="bg-primary p-8 lg:p-10 flex flex-col items-center justify-center text-center text-white relative min-h-[320px]">
                                <div className="mb-6">
                                    <Package size={48} strokeWidth={1.5} className="text-white" />
                                </div>
                                <div className="text-3xl lg:text-7xl font-normal mb-4">30+</div>
                                <p className="text-sm lg:text-[17px] text-white font-heading">
                                    years of experience designing, building and deploying enterprise-class Salesforce solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
