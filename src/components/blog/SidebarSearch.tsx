"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SidebarSearch() {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const q = query.trim();
        if (q) router.push(`/blog/search?q=${encodeURIComponent(q)}`);
    }

    return (
        <form onSubmit={handleSubmit} role="search" className="flex items-stretch border border-gray-200 rounded overflow-hidden mb-6">
            <label htmlFor="sidebar-search" className="sr-only">Search articles</label>
            <input
                ref={inputRef}
                id="sidebar-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 h-11 px-4 text-sm text-paragraph placeholder:text-muted/60 bg-white focus:outline-none"
            />
            <button
                type="submit"
                aria-label="Search"
                className="w-11 h-11 flex items-center justify-center bg-primary text-white hover:bg-primary/90 transition-colors shrink-0"
            >
                <Search className="w-4 h-4" />
            </button>
        </form>
    );
}
