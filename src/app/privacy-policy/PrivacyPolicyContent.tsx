"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl lg:text-4xl font-bold text-heading-dark mt-10 mb-3">
      {children}
    </h2>
  );
}

export default function PrivacyPolicyContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[300px] lg:h-[450px] flex items-center overflow-hidden pt-36 pb-16 lg:pt-48 lg:pb-20 px-4">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/privacy-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container relative z-10  text-white">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeIn} className="font-medium mb-2 text-white">
              Privacy Policy
            </motion.h1>

            <div className="relative flex items-center mb-8">
              <motion.div variants={fadeIn} className="w-20 h-[3px] bg-white relative z-10" />
              <motion.div variants={fadeIn} className="w-[300px] md:w-[600px] h-[1px] bg-white/50 absolute left-0 bottom-0" />
            </div>

            <motion.div
              variants={fadeIn}
              className="flex items-center gap-4 text-sm md:text-base font-medium"
            >
              <Link href="/" className="hover:text-primary-light transition-colors">
                Homepage
              </Link>
              <MoveRight size={18} className="text-white/60" />
              <span className="text-white/80">Privacy Policy</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="bg-[#F5F5F5]">
        <motion.div
          className="container py-2 lg:py-10 px-4"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >

          <SectionTitle>Who we are</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            Our website address is: <a href="https://ardncloudsolutions.com" className="underline" style={{ textDecorationColor: "#FB7103" }}>https://ardncloudsolutions.com</a>.
          </p>

          <SectionTitle>Comments</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&apos;s IP address and browser user agent string to help spam detection.
          </p>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="underline" style={{ textDecorationColor: "#FB7103" }}>https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
          </p>

          <SectionTitle>Media</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
          </p>

          <SectionTitle>Cookies</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            If you leave a comment on our site you may opt in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
          </p>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
          </p>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &ldquo;Remember Me&rdquo;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
          </p>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
          </p>

          <SectionTitle>Embedded content from other websites</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
          </p>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
          </p>

          <SectionTitle>Who we share your data with</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            If you request a password reset, your IP address will be included in the reset email.
          </p>

          <SectionTitle>How long we retain your data</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
          </p>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
          </p>

          <SectionTitle>What rights you have over your data</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
          </p>

          <SectionTitle>Where your data is sent</SectionTitle>
          <p className="text-base lg:text-lg text-[#333] leading-relaxed mb-4">
            Visitor comments may be checked through an automated spam detection service.
          </p>
        </motion.div>
      </div>
    </>
  );
}
