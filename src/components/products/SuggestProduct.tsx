"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import TypingText from "@/components/ui/TypingText";

const steps = [
  {
    title: "Submit Your Idea",
    description: "Complete the form to provide details about your concept for a Salesforce product or solution. Share the problem it solves and any specific goals or features you envision."
  },
  {
    title: "Receive Our Feedback",
    description: "Our team will reach out to review your submission, answer questions, and schedule a call to discuss your idea in detail."
  },
  {
    title: "Feasibility & Development",
    description: "We&apos;ll explore the feasibility of your concept. If it&apos;s a fit, we&apos;ll dive into development, keeping you updated as we bring your idea to life."
  }
];

export default function SuggestProduct() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section id="suggest" className="pt-6 lg:pt-10 pb-12 lg:pb-20 bg-white">
      <div className="container">
        <div className="max-w-3xl">
          {/* Header */}
          <motion.div {...fadeIn}>
            <div className="text-[13px] font-medium uppercase tracking-[3.8px] text-paragraph mb-2">
              SHAPE THE FUTURE OF SALESFORCE PRODUCTS
            </div>
            <TypingText 
              text={`Suggest a <span class="text-heading-dark">New Product</span>`}
              as="h2"
              className="text-heading font-semibold font-heading leading-tight mb-6"
            />
            <p className="text-paragraph text-sm lg:text-[17px] leading-relaxed mb-5 max-w-3xl">
              Help us build the next Salesforce innovation. If you suggest a product we develop, you could qualify for free licensing and even royalties. Let&apos;s build something great together!
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-slate-200 my-6" />

          {/* How It Works Section */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <h6 className="font-semibold font-heading text-heading-dark mb-4">How It Works</h6>
            
            <div className="flex flex-col gap-5">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start group">
                  {/* Icon */}
                  <div className="mt-1 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <ArrowRight size={16} />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <p className="font-bold text-heading-dark mb-1">
                      {step.title}
                    </p>
                    <p className="text-heading-dark text-sm lg:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <Button
              variant="primary"
              size="lg"
              rounded="full"
              href="/contact-us"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
