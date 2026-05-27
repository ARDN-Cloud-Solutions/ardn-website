import Link from "next/link";
import type { WPPost } from "@/lib/wordpress/types";
import { Phone, Mail, Clock } from "lucide-react";

interface CaseStudySidebarProps {
    latestCaseStudies: WPPost[];
}

export default function CaseStudySidebar({
    latestCaseStudies,
}: CaseStudySidebarProps) {
    return (
        <aside className="space-y-6 lg:sticky lg:top-28 self-start">
            {/* Case Details */}
            {latestCaseStudies.filter((p) => p["case-study-categories"]?.length > 0).length > 0 && (
                <div className="overflow-hidden border border-gray-200 rounded-sm">
                    <div className="bg-heading-dark px-5 py-4">
                        <h3 className="text-white text-base font-semibold tracking-wide">Case Details</h3>
                    </div>
                    <ul className="divide-y divide-gray-100 bg-white">
                        {latestCaseStudies.filter((p) => p["case-study-categories"]?.length > 0).map((post) => {
                            const title = post.title.rendered.replace(/<[^>]+>/g, "");
                            return (
                                <li key={post.id}>
                                    <Link
                                        href={`/case-studies/${post.slug}`}
                                        className="block px-5 py-3.5 text-sm text-primary hover:underline transition-colors duration-200"
                                    >
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            {/* Let's Work Together */}
            <div className="bg-heading-dark rounded-sm overflow-hidden px-6 py-8 text-white space-y-6">
                <h3 className="text-xl text-white font-bold leading-snug">
                    Let&apos;s Work Together for Development
                </h3>

                {/* Contact With Us */}
                <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                        Contact With Us
                    </p>
                    <a
                        href="tel:+14078155303"
                        className="flex items-start gap-3 text-sm text-white/90 hover:text-white transition-colors"
                    >
                        <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                        <span>+1 (407) 815-5303</span>
                    </a>
                    <a
                        href="mailto:contactus@ardncloudsolutions.com"
                        className="flex items-start gap-3 text-sm text-white/90 hover:text-white transition-colors break-all"
                    >
                        <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                        <span>contactus@ardncloudsolutions.com</span>
                    </a>
                </div>

                {/* Working Time */}
                <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                        Working Time
                    </p>
                    <div className="flex items-start gap-3 text-sm text-white/90">
                        <Clock className="w-4 h-4 mt-0.5 shrink-0 " />
                        <div>
                            <p className="text-white/90">Mon-Sat: 8:00am – 10:00pm</p>
                            <p className="text-white/90">Sunday Closed</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Link
                    href="/contact-us"
                    className="block w-full text-center bg-white text-heading-dark text-sm font-semibold py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                    Get in Touch With Us
                </Link>
            </div>
        </aside>
    );
}
