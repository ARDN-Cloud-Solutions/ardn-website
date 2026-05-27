"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import TypingText from "@/components/ui/TypingText";

const upcomingProducts = [
  {
    title: "Salesforce FlexiStore: Expand Your Storage, Cut Costs",
    description: "FlexiStore provides integration with major file storage providers like Amazon S3, Google Drive, and Box. This feature enables flexible file storage management and helps in reducing storage costs by leveraging multiple providers."
  },
  {
    title: "Salesforce StageGuard: Process Compliance with Record Locking",
    description: "StageGuard locks records in Salesforce based on custom criteria, ensuring users follow the required sequence in processes like the Opportunity sales path."
  },
  {
    title: "SmartLicense: Track Usage, Optimize Licenses, Save Costs",
    description: "SmartLicense monitors user logins and activity to identify inactive accounts, allowing organizations to deactivate or reassign licenses. This feature helps reduce unnecessary licensing costs and ensures that all licenses are used efficiently."
  },
  {
    title: "FlowForward: Modernize Automation, Reduce Training Needs",
    description: "FlowForward assists administrators in converting older Workflows and Process Builders to more advanced Flows and Apex, modernizing automation and reducing the need for extensive training on outdated systems."
  },
  {
    title: "KnowledgeBuilder: Create In-Context Help for Better Self-Service",
    description: "KnowledgeBuilder allows the creation of FAQ-style help documents and Knowledge Articles that can be embedded in Salesforce Lightning Record Pages. This feature offers users accessible, in-context support to improve self-service capabilities."
  },
  {
    title: "PageAlert: Timely Notifications for Better Engagement",
    description: "PageAlert provides customizable, time-based alerts and banners on Lightning Record Pages, enabling administrators to communicate important updates and reminders effectively within Salesforce."
  }
];

export default function NewSolutionsHorizon() {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-16">
          <TypingText 
              text={`New Solutions <span class="text-heading-dark">on the Horizon</span>`}
              as="h2"
              className="text-heading font-semibold font-heading leading-tight mb-6"
            />
          <p className="text-paragraph text-sm lg:text-[15px] leading-relaxed font-poppins">
            We believe in pushing boundaries. Whether you have a product idea to enhance Salesforce or need expert advice on optimizing your current system, we&apos;re here to help. At Ardn, we&apos;re passionate about extending and improving Salesforce to fit your business needs. We offer you two ways to take action:
          </p>
        </div>

        {/* Banner with Action Button */}
        <div className="relative mb-6 lg:mb-10 flex flex-col items-center">
          <div className="w-full relative lg:aspect-[21/6] aspect-[21/12] overflow-hidden mb-6 lg:mb-12 shadow-lg">
            <Image 
              src="/images/New-Solutions-on-the-Horizon.webp"
              alt="Team discussing project on the horizon"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {upcomingProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#F3F3F3] p-6 h-full flex flex-col"
            >
              <h4 className="font-semibold font-heading text-heading-dark mb-6 leading-tight">
                {product.title}
              </h4>
              <p className="text-heading-dark text-sm lg:text-[15px] leading-relaxed font-poppins">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
          
          <div className="pt-10 lg:pt-12 text-center">
            <Button
              variant="primary"
              size="lg"
              rounded="full"
              href="/contact-us"
            >
              Get a Free Salesforce Consultation
            </Button>
          </div>
      </div>
    </section>
  );
}
