"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Phone, ArrowRight, Check } from "lucide-react";
import styles from "./contact-page.module.css";

const INTEREST_OPTIONS = [
  "Membership",
  "Storefronts",
  "AI Forge",
  "AI Support",
  "Payments",
  "License Guard",
  "Consulting",
  "Not sure yet",
];

const TESTIMONIALS = [
  {
    quote:
      "Hands-on, cost-saving approach that's been invaluable to our business. Strategic focus on high-impact efficiencies.",
    initials: "JV",
    name: "Jay Vashi",
    title: "Salesforce Delivery Manager, Fortune 500 Insurance",
  },
  {
    quote:
      "A game-changer for our sales team. They're more than a vendor — they're a trusted partner.",
    initials: "CL",
    name: "Client Lead",
    title: "Sales Operations",
  },
  {
    quote:
      "Seamless experience. Innovative approach and keen understanding of our needs — directly enhanced our business outcomes.",
    initials: "PM",
    name: "Partner Manager",
    title: "Operations",
  },
];

const PARTNERS = [
  "Salesforce",
  "Stripe",
  "Paymentus",
  "AWS",
  "Apple Pay",
  "Google Pay",
  "Venmo",
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
}

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });
  const [interests, setInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePill = (option: string) => {
    setInterests((prev) =>
      prev.includes(option)
        ? prev.filter((i) => i !== option)
        : [...prev, option]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      next.name = "Please enter your full name";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      next.email = "Please enter a valid email";
    }
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 10) {
      next.phone = "Please enter a valid phone number";
    }
    if (!formData.company.trim()) {
      next.company = "Please enter your company name";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Booking your call...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, interests }),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success("Thanks — we'll reach out within 4 business hours.", {
          id: toastId,
        });
        setFormData({ name: "", email: "", phone: "", company: "" });
        setInterests([]);
        setErrors({});
      } else {
        toast.error(result.error || "Something went wrong. Please try again.", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to send. Please check your connection.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* HERO */}
      <main className={styles.hero}>
        <section>
          <span className={styles.eyebrow}>Free Strategy Call</span>
          <h1 className={`${styles.display} ${styles.headline}`}>
            Technology that
            <br />
            <em>pays for itself.</em>
          </h1>
          <p className={styles.subhead}>
            Tell us where your business is stuck. We&apos;ll show you the
            fastest path to fix it — standalone, alongside Salesforce, or
            wherever your business runs.
          </p>

          <ul className={styles.benefits}>
            <li>
              <span className={styles.check} aria-hidden>
                <Check size={11} strokeWidth={3} />
              </span>
              <span>
                <strong>30 minutes.</strong> No SOW, no slides — a working
                answer.
              </span>
            </li>
            <li>
              <span className={styles.check} aria-hidden>
                <Check size={11} strokeWidth={3} />
              </span>
              <span>
                <strong>Talk to a co-founder</strong>, not an SDR.
              </span>
            </li>
            <li>
              <span className={styles.check} aria-hidden>
                <Check size={11} strokeWidth={3} />
              </span>
              <span>
                <strong>4-hour response</strong> SLA, guaranteed.
              </span>
            </li>
            <li>
              <span className={styles.check} aria-hidden>
                <Check size={11} strokeWidth={3} />
              </span>
              <span>
                <strong>Zero commitment.</strong> Walk away with a clear next
                step.
              </span>
            </li>
          </ul>

          <div className={styles.statRow}>
            <div>
              <div className={styles.statNum}>6</div>
              <div className={styles.statLabel}>Products in market</div>
            </div>
            <div>
              <div className={styles.statNum}>30+</div>
              <div className={styles.statLabel}>Yrs experience</div>
            </div>
            <div>
              <div className={styles.statNum}>4 hrs</div>
              <div className={styles.statLabel}>Response SLA</div>
            </div>
          </div>
        </section>

        {/* FORM */}
        <aside>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Book your free call</h2>
            <p className={styles.formSub}>
              Takes 30 seconds. Reply within 4 business hours.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  autoComplete="name"
                  className={errors.name ? styles.invalid : ""}
                />
                {errors.name && (
                  <span className={styles.errorText}>{errors.name}</span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                  inputMode="email"
                  className={errors.email ? styles.invalid : ""}
                />
                {errors.email && (
                  <span className={styles.errorText}>{errors.email}</span>
                )}
              </div>

              <div className={styles.row2}>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    inputMode="tel"
                    className={errors.phone ? styles.invalid : ""}
                  />
                  {errors.phone && (
                    <span className={styles.errorText}>{errors.phone}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    autoComplete="organization"
                    className={errors.company ? styles.invalid : ""}
                  />
                  {errors.company && (
                    <span className={styles.errorText}>{errors.company}</span>
                  )}
                </div>
              </div>

              <span className={styles.pillLabel}>What brings you here?</span>
              <div className={styles.pills} role="group" aria-label="Interests">
                {INTEREST_OPTIONS.map((option) => {
                  const active = interests.includes(option);
                  return (
                    <button
                      type="button"
                      key={option}
                      onClick={() => togglePill(option)}
                      className={`${styles.pill} ${
                        active ? styles.pillActive : ""
                      }`}
                      aria-pressed={active}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <button
                className={styles.cta}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Book My Free Call"}{" "}
                <ArrowRight
                  size={16}
                  style={{ display: "inline", verticalAlign: "-3px" }}
                  aria-hidden
                />
              </button>
              <p className={styles.ctaSub}>
                <strong>No spam.</strong> Used only to schedule your call.
              </p>

              <div className={styles.orDivider}>or</div>
              <a href="tel:+14078155303" className={styles.phoneCta}>
                <Phone size={16} aria-hidden />
                Call (407) 815-5303
              </a>
            </form>
          </div>
        </aside>
      </main>

      {/* TRUST BAND */}
      <section className={styles.trustBand}>
        <div className={styles.trustInner}>
          <div className={styles.trustLabel}>Trusted by teams that ship</div>

          <div className={styles.testimonials}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.testimonial}>
                <p className={styles.tQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.tAuthor}>
                  <div className={styles.tAvatar}>{t.initials}</div>
                  <div>
                    <div className={styles.tName}>{t.name}</div>
                    <div className={styles.tTitle}>{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.partnersLabel}>Built on &amp; integrated with</div>
          <div className={styles.partners}>
            {PARTNERS.map((p) => (
              <span key={p} className={styles.partnerLogo}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
