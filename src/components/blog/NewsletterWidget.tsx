"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function NewsletterWidget() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const trimmed = email.trim();
        if (!trimmed || !trimmed.includes("@")) {
            toast.error("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        // Simulate subscription (replace with real endpoint when available)
        setTimeout(() => {
            setLoading(false);
            setEmail("");
            toast.success("You're subscribed! Thank you.");
        }, 900);
    }

    return (
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <p className="text-sm text-paragraph leading-relaxed">
                Sign up to receive notifications about the latest news and events from us.
            </p>
            <label htmlFor="newsletter-email" className="sr-only">
                Email address
            </label>
            <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address..."
                required
                className="w-full h-10 px-3 text-sm border border-gray-200 rounded focus:outline-none focus:border-primary transition-colors"
            />
            <button
                type="submit"
                disabled={loading}
                className="w-full h-10 bg-primary text-white text-sm font-semibold rounded hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
                {loading ? "Subscribing…" : "Subscribe Now!"}
            </button>
        </form>
    );
}
