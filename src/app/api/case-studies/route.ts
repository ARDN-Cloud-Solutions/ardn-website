import { NextRequest, NextResponse } from "next/server";
import { fetchCaseStudies } from "@/lib/wordpress/case-studies";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
    const perPage = Math.min(100, Math.max(1, Number(searchParams.get("per_page") ?? "9")));

    const termIdParam = searchParams.get("term_id");
    const termId = termIdParam ? Number(termIdParam) : undefined;

    if (termIdParam && (!Number.isFinite(termId) || termId! < 1)) {
        return NextResponse.json({ error: "Invalid term_id" }, { status: 400 });
    }

    try {
        const result = await fetchCaseStudies(page, perPage, termId);
        return NextResponse.json(result);
    } catch {
        return NextResponse.json({ error: "Failed to fetch case studies" }, { status: 500 });
    }
}
