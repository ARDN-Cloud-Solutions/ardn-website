"use client";

import TypingText from "../ui/TypingText";
import Button from "../ui/Button";

export default function BecomePartnerSection() {
    return (
        <section 
            className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/images/laptop-and-phone-screen.png')" }}
        >
            {/* Overlay for better readability if needed, though the box is opaque */}
            <div className="absolute inset-0 bg-black/5" />

            <div className="container relative z-10">
                <div className="max-w-lg bg-[#D9D8D7] px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-20 shadow-2xl">
                    <TypingText 
                        text="Become an Ardn <br />Implementation <br />Partner"
                        as="h2"
                        className="leading-[1.2] font-medium mb-6 text-heading-dark font-heading"
                    />
                    
                    <p className="text-paragraph leading-relaxed mb-6 font-heading max-w-lg">
                        If you think our products could help your customers let&apos;s partner, 
                        you will find us super easy to work with.
                    </p>

                    <div className="h-[1px] bg-black w-full mb-6" />

                    <div className="flex">
                        <Button
                            variant="primary"
                            size="lg"
                            href="/contact-us"
                        >
                            Connect Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
