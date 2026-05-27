"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export default function BlogSearch() {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const q = query.trim();
        if (q) router.push(`/blog/search?q=${encodeURIComponent(q)}`);
    }

    function clearQuery() {
        setQuery("");
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={handleSubmit} role="search" className="relative flex items-center">
            <label htmlFor="blog-search" className="sr-only">
                Search articles
            </label>
            <Search className="absolute left-2.5 w-4 h-4 text-muted pointer-events-none" />
            <input
                ref={inputRef}
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-52 md:w-64 h-9 pl-9 pr-8 rounded-lg border border-gray-200 text-sm text-paragraph placeholder:text-muted/60 bg-white focus:outline-none focus:border-primary transition-colors"
            />
            {query && (
                <button
                    type="button"
                    onClick={clearQuery}
                    aria-label="Clear search"
                    className="absolute right-2.5 text-muted hover:text-paragraph transition-colors"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            )}
        </form>
    );
}
