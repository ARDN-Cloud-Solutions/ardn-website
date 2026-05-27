"use client";

import { Mail, Linkedin } from "lucide-react";

export default function ContactStatsInfo() {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <div className="flex flex-col gap-6">
        <h2 className="font-medium text-heading-dark">
          Let&apos;s Talk!
        </h2>
        <p className="font-medium text-paragraph mb-2 max-w-2xl leading-relaxed opacity-90">
          Thank you for your interest. Please fill out the form to inquire about
          our work in Salesforce Consulting.
        </p>
      </div>

      <div className="space-y-5">
        {/* LinkedIn */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2"> */}
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-heading-dark flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
            <Linkedin size={20} className="text-white fill-white" />
          </div>
          <div className="flex flex-col">
            <h6 className="text-heading-dark font-medium">LinkedIn</h6>
            <a 
              href="https://www.linkedin.com/company/ardn-cloud-solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-paragraph hover:text-primary transition-colors font-medium"
            >
              @ardn-cloud-solutions
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-heading-dark flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
            <Mail size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <h6 className="text-heading-dark font-medium">Email Address</h6>
            <a 
              href="mailto:contactus@ardncloudsolutions.com"
              className="text-paragraph hover:text-primary transition-colors font-medium"
            >
              contactus@ardncloudsolutions.com
            </a>
          </div>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
}
