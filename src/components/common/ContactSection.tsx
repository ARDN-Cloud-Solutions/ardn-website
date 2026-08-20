"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import Button from '../ui/Button';
import { SendHorizontal, ChevronDown, Mail, Linkedin } from 'lucide-react';
import TypingText from '../ui/TypingText';

interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
}

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (formData.fullName.trim().length < 3) {
            newErrors.fullName = "Name must be at least 3 characters";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Phone is optional — only validate format if the visitor provides one.
        // Requiring a phone number is a well-known conversion killer, and the
        // inline LeadForm used across the site already captures leads on name +
        // email alone, so this keeps the primary contact form consistent.
        if (formData.phone.trim() && formData.phone.trim().length < 10) {
            newErrors.phone = "Enter at least 10 digits";
        }

        if (!formData.subject) {
            newErrors.subject = "Please select a subject";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
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
                toast.success("Message sent successfully! We'll get back to you soon.", { id: toastId });
                setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
                setErrors({});
            } else {
                toast.error(result.error || "Something went wrong. Please try again.", { id: toastId });
                if (result.error?.toLowerCase().includes("email")) setErrors(prev => ({...prev, email: result.error}));
                if (result.error?.toLowerCase().includes("name")) setErrors(prev => ({...prev, fullName: result.error}));
            }
        } catch (error) {
            console.error("Submission Error:", error);
            toast.error("Failed to send message. Please check your connection.", { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

    const getInputClassName = (error?: string) => {
        const baseClass = "text-heading-dark flex-1 p-3 rounded-full border bg-white/40 outline-none text-base font-normal transition-all duration-200 w-full";
        return `${baseClass} ${error ? 'border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30'}`;
    };

    return (
        <section
            className="relative w-full"
            style={{
                backgroundImage: "url('/images/contact-banner.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'left top',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="p-8 py-20 ml-auto md:w-[840px] lg:w-[50%] w-full relative backdrop-blur-lg bg-[#FFFFFF7D]">
                <div className="w-full flex flex-col gap-8">
                    <TypingText 
                        text="Let’s Talk!"
                        as="h2"
                        className="font-bold mb-2 text-heading-dark"
                    />
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-2">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                                <Mail size={22} />
                            </span>
                            <div>
                                <h5 className="font-medium text-heading-dark">Email:</h5>
                                <p className="text-heading-dark">
                                    <a href="mailto:contactus@ardncloudsolutions.com" target="_blank" rel="noopener noreferrer">
                                        contactus@ardncloudsolutions.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                                <Linkedin size={22} fill="white" />
                            </span>
                            <div>
                                <h5 className="font-medium text-heading-dark">Linkedin</h5>
                                <p className="text-heading-dark">
                                    <a href="https://www.linkedin.com/company/ardn-cloud-solutions" target="_blank" rel="noopener noreferrer">
                                        @ardn-cloud-solutions
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2" noValidate>
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <div className="flex-1 flex flex-col relative pb-7">
                                <input 
                                    type="text" 
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="*Full Name" 
                                    className={getInputClassName(errors.fullName) + " placeholder-heading-dark"} 
                                />
                                {errors.fullName && <span className="absolute bottom-1 left-4 text-red-500 text-xs font-medium">{errors.fullName}</span>}
                            </div>
                            <div className="flex-1 flex flex-col relative pb-7">
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="*Email Address" 
                                    className={getInputClassName(errors.email) + " placeholder-heading-dark"} 
                                />
                                {errors.email && <span className="absolute bottom-1 left-4 text-red-500 text-xs font-medium">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <div className="flex-1 flex flex-col relative pb-7">
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number (optional)"
                                    className={getInputClassName(errors.phone) + " placeholder-heading-dark"} 
                                />
                                {errors.phone && <span className="absolute bottom-1 left-4 text-red-500 text-xs font-medium">{errors.phone}</span>}
                            </div>

                            <div className="flex-1 flex flex-col relative pb-7">
                                <div className="relative">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full text-heading-dark p-3 pr-12 rounded-full bg-white/40 border outline-none focus:outline-none focus:ring-0 appearance-none transition-all duration-200 ${errors.subject ? 'border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30'} placeholder-heading-dark`}
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
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-heading-dark pointer-events-none"
                                    />
                                </div>
                                {errors.subject && <span className="absolute bottom-1 left-4 text-red-500 text-xs font-medium">{errors.subject}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col relative pb-7">
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write Message...." 
                                className={`text-heading-dark p-4 rounded-2xl border bg-white/40 outline-none min-h-[180px] resize-none transition-all duration-200 w-full ${errors.message ? 'border-red-500 bg-red-50/10' : 'border-transparent focus:border-primary/30'} placeholder-heading-dark`}
                            />
                            {errors.message && <span className="absolute bottom-1 left-4 text-red-500 text-xs font-medium">{errors.message}</span>}
                        </div>
                        <div className="mt-2">
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                rounded="full"
                                isLoading={isSubmitting}
                                rightIcon={SendHorizontal}
                                className="w-[180px]"
                            >
                                {isSubmitting ? "Sending..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
