import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CaseStudyPaginationProps {
    currentPage: number;
    totalPages: number;
}

function buildHref(page: number): string {
    return page === 1 ? "/case-studies" : `/case-studies/page/${page}`;
}

function buildPageRange(current: number, total: number): (number | "ellipsis")[] {
    const pages: (number | "ellipsis")[] = [];

    if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i);
        return pages;
    }

    pages.push(1);
    if (current > 3) pages.push("ellipsis");

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    if (current < total - 2) pages.push("ellipsis");
    pages.push(total);
    return pages;
}

export default function CaseStudyPagination({
    currentPage,
    totalPages,
}: CaseStudyPaginationProps) {
    if (totalPages <= 1) return null;

    const pages = buildPageRange(currentPage, totalPages);
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;

    const baseBtn =
        "inline-flex items-center justify-center h-10 w-10 rounded-lg border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
    const activeBtn = "bg-primary border-primary text-white";
    const idleBtn =
        "border-gray-200 text-paragraph bg-white hover:border-primary hover:text-primary";
    const disabledBtn = "border-gray-100 text-muted/40 bg-white pointer-events-none";

    return (
        <nav aria-label="Case studies pagination" className="flex items-center justify-center flex-wrap gap-1 md:gap-2">
            {isFirst ? (
                <span aria-disabled="true" aria-label="Previous page" className={`${baseBtn} ${disabledBtn}`}>
                    <ChevronLeft className="w-4 h-4" />
                </span>
            ) : (
                <Link href={buildHref(currentPage - 1)} aria-label="Previous page" rel="prev" className={`${baseBtn} ${idleBtn}`}>
                    <ChevronLeft className="w-4 h-4" />
                </Link>
            )}

            {pages.map((p, i) =>
                p === "ellipsis" ? (
                    <span key={`ell-${i}`} className="inline-flex items-center justify-center h-10 w-6 text-muted text-sm select-none">
                        &hellip;
                    </span>
                ) : (
                    <Link
                        key={p}
                        href={buildHref(p)}
                        aria-label={`Page ${p}`}
                        aria-current={currentPage === p ? "page" : undefined}
                        className={`${baseBtn} ${currentPage === p ? activeBtn : idleBtn}`}
                    >
                        {p}
                    </Link>
                )
            )}

            {isLast ? (
                <span aria-disabled="true" aria-label="Next page" className={`${baseBtn} ${disabledBtn}`}>
                    <ChevronRight className="w-4 h-4" />
                </span>
            ) : (
                <Link href={buildHref(currentPage + 1)} aria-label="Next page" rel="next" className={`${baseBtn} ${idleBtn}`}>
                    <ChevronRight className="w-4 h-4" />
                </Link>
            )}
        </nav>
    );
}
