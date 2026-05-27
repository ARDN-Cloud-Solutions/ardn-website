"use client";

import Button from "../ui/Button";
import TypingText from "../ui/TypingText";

export default function TransformYourSalesforce() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-[#E6E6E6]">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-14">
                    <TypingText 
                        text={`Transform Your Salesforce with <span class="text-heading">Ardn Cloud Solutions</span>`} 
                        as="h2"
                        className="text-heading-dark mb-6 max-w-6xl mx-auto font-medium font-heading"
                    />
                    <p className="max-w-4xl mx-auto text-paragraph text-sm lg:text-[17px] leading-relaxed">
                        We believe in pushing boundaries. Whether you have a product idea to enhance Salesforce or need
                        expert advice on optimizing your current system, we&apos;re here to help. At Ardn, we&apos;re passionate about
                        extending and improving Salesforce to fit your business needs. We offer you two ways to take action:
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-32">
                    {/* Card 1 — Got a Product Idea? */}
                    <div className="bg-white p-8 md:p-10 flex flex-col gap-5">
                        <h2 className="font-medium text-heading-dark">Got a Product Idea?</h2>
                        <div className="flex flex-col gap-4 flex-1">
                            <p className="text-sm lg:text-[17px]">If you&apos;ve ever thought, &quot;Salesforce would be even better if...&quot;</p>
                            <p className="text-sm lg:text-[17px]">
                                Now&apos;s your chance! Share your idea for a product that could simplify or
                                enhance Salesforce. If we build it, you could qualify for free licensing
                                and royalties!
                            </p>
                        </div>
                        <div className="mt-2">
                            <Button
                                variant="primary"
                                size="lg"
                                href="/our-products"
                            >
                                Suggest a Product
                            </Button>
                        </div>
                    </div>

                    {/* Card 2 — Need Expert Advice? */}
                    <div className="bg-white p-8 md:p-10 flex flex-col gap-5">
                        <h2 className="font-medium text-heading-dark">Need Expert Advice?</h2>
                        <div className="flex flex-col gap-4 flex-1">
                            <p className="text-sm lg:text-[17px]">
                                Not sure how to make Salesforce work harder for your business? Book a
                                free consultation with our team of experts. We&apos;ll review your Salesforce
                                environment and offer actionable recommendations to drive efficiency
                                and growth.
                            </p>
                            <p className="text-sm lg:text-[17px]">Let&apos;s talk!</p>
                        </div>
                        <div className="mt-2">
                            <Button
                                variant="primary"
                                size="lg"
                                href="/contact-us"
                            >
                                Get a Free Salesforce Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
