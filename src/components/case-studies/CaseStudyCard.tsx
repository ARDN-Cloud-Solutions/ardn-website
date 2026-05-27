import Image from "next/image";
import Link from "next/link";
import type { WPPost } from "@/lib/wordpress/types";
import { getFeaturedImageUrl, getFeaturedImageAlt } from "@/lib/wordpress/utils";

interface CaseStudyCardProps {
    post: WPPost;
}

export default function CaseStudyCard({ post }: CaseStudyCardProps) {
    const featuredImage = getFeaturedImageUrl(post);
    const imageAlt = getFeaturedImageAlt(post);
    const title = post.title.rendered.replace(/<[^>]+>/g, "");
    const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? null;

    return (
        <Link
            href={`/case-studies/${post.slug}`}
            className="group flex flex-col bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                {featuredImage ? (
                    <Image
                        src={featuredImage}
                        alt={imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-4xl font-bold">A</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h6 className="font-medium text-heading-dark leading-snug text-center group-hover:text-primary transition-colors duration-200">
                    {title}
                </h6>
                {category && (
                    <p className="mt-2 text-xs text-muted text-center">{category}</p>
                )}
            </div>
        </Link>
    );
}
