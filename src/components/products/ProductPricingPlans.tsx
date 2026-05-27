"use client";

import { motion } from "framer-motion";
import TypingText from "@/components/ui/TypingText";

const columns = ["Storefronts", "Commerce Cloud", "Shopify", "CPQ"];
const featuredColumnIndex = 0;

const rows = [
  {
    feature: "Works Natively with Salesforce CRM",
    values: ["Included", "Included", "Not Included", "Included"],
  },
  {
    feature: "Unlimited Pricebooks",
    values: ["Included", "Included", "Included", "Included"],
  },
  {
    feature: "Unlimited Products",
    values: ["Included", "Included", "Included", "Included"],
  },
  {
    feature: "Customizable data model (sell from any object)",
    values: ["Included", "Not Included", "Not Included", "Not Included"],
  },
  {
    feature: "Customizable & configurable products and process flows",
    values: ["Included", "Included", "Included", "Not Included"],
  },
  {
    feature: "Process Payments through Salesforce",
    values: ["Included", "Included", "Not Included", "Not Included"],
  },
  {
    feature: "Robust Error Capturing & logging",
    values: ["Included", "Included", "Not Included", "Not Included"],
  },
  {
    feature: "3rd party processing all done in your system",
    values: ["Included", "Included", "Not Included", "Not Included"],
  },
  {
    feature: "Flexible Appointments/Webinar & events Bookings",
    values: ["Included", "Not Included", "Not Included", "Not Included"],
  },
];

export default function ProductPricingPlans({ className = "" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-10">
          {/* Heading */}
          <TypingText
            text="Comparison Across Apps"
            as="h2"
            className="text-heading-dark font-semibold leading-tight mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-paragraph text-sm lg:text-[15px] leading-relaxed"
          >
            Native integration with full-featured CRM
          </motion.p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto border border-[#E5E7EB] rounded-t-[20px]"
        >
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-[#3b4289] text-white">
                {/* Functionality column header */}
                <th className="text-left px-4 lg:px-6 py-6 lg:py-8 text-base lg:text-lg font-medium align-middle w-[200px] sm:w-[280px] lg:w-[420px] border border-[#4a529e]">
                  Functionality
                </th>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className={`text-center px-3 lg:px-4 py-6 lg:py-8 text-sm lg:text-lg font-medium align-middle whitespace-nowrap border border-[#4a529e] ${i === featuredColumnIndex ? "bg-[#3da2ff]" : ""
                      }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIndex) => (
                <tr
                  key={rIndex}
                  className="border-b border-[#E5E7EB] last:border-0 hover:bg-[#F9F9FD] transition-colors"
                >
                  {/* Feature label */}
                  <td className="px-4 lg:px-6 text-sm lg:text-base text-[#212529] font-normal h-[70px] lg:h-[90px] align-middle border border-[#E5E7EB]">
                    {row.feature}
                  </td>
                  {/* Value cells */}
                  {row.values.map((val, vIndex) => (
                    <td
                      key={vIndex}
                      className="px-2 lg:px-3 h-[70px] lg:h-[90px] align-middle whitespace-nowrap border border-[#E5E7EB]"
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <p className={`m-0 text-base font-medium ${val.toLowerCase().includes("not")
                            ? "text-paragraph"
                            : "text-[#212529]"
                          }`}>
                          {val}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
