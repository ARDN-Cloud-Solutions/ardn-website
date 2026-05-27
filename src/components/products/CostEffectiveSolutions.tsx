"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";
import { Plus, Minus } from "lucide-react";

const features = [
  {
    title: "Storefronts: Setup and run your stores without ever leaving Salesforce",
    description: "Now you can seamlessly run your business from prospects to payments, simplifying your operations and dramatically improving your customer experience.",
    buttonText: "Explore Now !",
    buttonUrl: "/storefronts"
  },
  {
    title: "Salesforce Payments: Seamlessly transition salespeople or customers from buying to paying",
    description: "Now you can process payments online or in store with a few clicks, without ever leaving Salesforce. If your customer is ready to buy let's make it seamless and simple. Use your payment processor or consider one of our industry leading partners to reduce your payment processing costs - maybe reduce them by a lot, contact us for current rates.",
    buttonText: "Explore Now !",
    buttonUrl: "/salesforce-payments"
  }
];

export default function CostEffectiveSolutions() {
  const [openStates, setOpenStates] = useState<boolean[]>(features.map(() => true));

  const toggleAccordion = (index: number) => {
    setOpenStates(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-12 lg:py-28 bg-[#F3F3F3]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-10 items-start">
          {/* Left Column */}
          <motion.div {...fadeIn}>
            <TypingText 
              text={`Cost-Effective <span class="text-heading-dark">Salesforce Solutions</span>`}
              as="h2"
              className="text-heading font-semibold leading-tight mb-6 max-w-2xl"
            />
            <p className="text-heading-dark text-[15px] leading-relaxed mb-8 font-poppins">
              At Ardn Cloud Solutions, we&apos;re more than a Salesforce partner — we&apos;re innovators who look beyond conventional approaches to transform your Salesforce experience. From developing tailored solutions to implementing our own suite of products, we focus on driving efficiency, reducing costs, and expanding Salesforce&apos;s potential for your unique needs.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              rounded="full"
              href="/contact-us"
            >
              Request a Demo
            </Button>
          </motion.div>

          {/* Right Column - Feature Accordion */}
          <div className="flex flex-col gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="flex flex-col border-b border-black/10 pb-6"
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between gap-6 text-left group w-full cursor-pointer"
                >
                  <h5 className="font-semibold font-heading text-heading-dark lg:text-[18px] leading-tight group-hover:text-secondary transition-colors duration-300">
                    {feature.title}
                  </h5>
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center text-heading-dark">
                    {openStates[index] ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {openStates[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 flex flex-col gap-6">
                        <p className="text-heading-dark text-sm leading-relaxed font-poppins">
                          {feature.description}
                        </p>
                        <div className="pt-2">
                          <Button 
                            variant="primary" 
                            size="lg" 
                            rounded="full"
                            href={feature.buttonUrl}
                          >
                            {feature.buttonText}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
