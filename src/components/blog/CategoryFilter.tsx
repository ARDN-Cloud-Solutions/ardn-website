"use client";

import { useRouter } from "next/navigation";
import type { WPCategory } from "@/lib/wordpress/types";

interface CategoryFilterProps {
    categories: WPCategory[];
    activeCategorySlug?: string;
}

export default function CategoryFilter({
    categories,
    activeCategorySlug,
}: CategoryFilterProps) {
    const router = useRouter();

    function handleSelect(categorySlug?: string) {
        router.push(categorySlug ? `/blog/category/${categorySlug}` : "/blog");
    }

    if (!categories.length) return null;

    const btnBase =
        "px-3 py-1.5 rounded-full text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap";
    const active = "bg-primary text-white border-primary";
    const idle =
        "bg-white text-paragraph border-gray-200 hover:border-primary hover:text-primary";

    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="hidden sm:inline text-sm font-medium text-muted mr-1">
                Filter:
            </span>

            <button
                onClick={() => handleSelect(undefined)}
                className={`${btnBase} ${!activeCategorySlug ? active : idle}`}
            >
                All
            </button>

            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => handleSelect(cat.slug)}
                    className={`${btnBase} ${activeCategorySlug === cat.slug ? active : idle}`}
                >
                    {cat.name}
                    <span className="ml-1 opacity-60 text-xs">({cat.count})</span>
                </button>
            ))}
        </div>
    );
}
