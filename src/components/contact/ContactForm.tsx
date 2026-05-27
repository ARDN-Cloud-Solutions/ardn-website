"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { SendHorizontal, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          "Message sent successfully! We'll get back to you soon.",
          { id: toastId }
        );
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        toast.error(result.error || "Something went wrong. Please try again.", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to send message. Please check your connection.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (error?: string) => {
    const baseClass =
      "w-full px-6 py-4 rounded-full border bg-[#F8F9FA] outline-none text-base transition-all duration-200";
    return `${baseClass} ${
      error
        ? "border-red-500 bg-red-50/10"
        : "border-transparent focus:border-primary/30"
    }`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="*Full Name"
            className={getInputClassName(errors.fullName)}
          />
          {errors.fullName && (
            <span className="text-red-500 text-xs px-4">{errors.fullName}</span>
          )}
        </div>

        {/* Email Address */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="*Email Address"
            className={getInputClassName(errors.email)}
          />
          {errors.email && (
            <span className="text-red-500 text-xs px-4">{errors.email}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone Number */}
        <div className="flex flex-col gap-1">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="*Phone Number"
            className={getInputClassName(errors.phone)}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs px-4">{errors.phone}</span>
          )}
        </div>

        {/* Subject Dropdown */}
        <div className="flex flex-col gap-1">
          <div className="relative">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`${getInputClassName(
                errors.subject
              )} appearance-none pr-12`}
            >
              <option value="" disabled hidden>
                — Please choose an option —
              </option>
              <option value="sales">Sales Inquiry</option>
              <option value="support">Support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
            <ChevronDown
              size={18}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-paragraph pointer-events-none"
            />
          </div>
          {errors.subject && (
            <span className="text-red-500 text-xs px-4">{errors.subject}</span>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write Messeage...."
          className="w-full px-8 py-8 rounded-[32px] border border-transparent bg-[#F8F9FA] outline-none text-base min-h-[220px] resize-none focus:border-primary/40 focus:bg-white focus:shadow-sm transition-all duration-200"
        />
        {errors.message && (
          <span className="text-red-500 text-xs px-6">{errors.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          rounded="full"
          isLoading={isSubmitting}
          rightIcon={SendHorizontal}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
