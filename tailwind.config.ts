import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-light': 'var(--color-primary-light)',
                heading: 'var(--color-heading)',
                'heading-dark': 'var(--color-heading-dark)',
                paragraph: 'var(--color-paragraph)',
                muted: 'var(--color-muted)',
                foreground: 'var(--color-foreground)',
                background: 'var(--color-background)',
                'btn-primary': 'var(--color-button)',
                'btn-primary-hover': 'var(--color-button-hover)',
            },
            fontFamily: {
                sans: ["var(--font-public-sans)", "Public Sans", "system-ui", "sans-serif"],
                heading: ["GT Walsheim Pro", "var(--font-public-sans)", "system-ui", "sans-serif"],
                walsheim: ["GT Walsheim Pro", "var(--font-public-sans)", "system-ui", "sans-serif"],
                poppins: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
                mono: ["monospace"],
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
                "slide-down": "slideDown 0.3s ease-out",
                "marquee": "marquee 20s linear infinite",
                "ring": "ring 1.8s ease-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                slideDown: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                ring: {
                    "0%":   { transform: "rotate(0deg)" },
                    "8%":   { transform: "rotate(18deg)" },
                    "16%":  { transform: "rotate(-14deg)" },
                    "24%":  { transform: "rotate(12deg)" },
                    "32%":  { transform: "rotate(-9deg)" },
                    "40%":  { transform: "rotate(6deg)" },
                    "48%":  { transform: "rotate(-3deg)" },
                    "56%":  { transform: "rotate(2deg)" },
                    "64%":  { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;