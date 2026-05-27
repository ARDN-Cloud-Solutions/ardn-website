export default function SkeletonCard() {
    return (
        <div
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm animate-pulse"
            aria-hidden="true"
        >
            {/* Image placeholder */}
            <div className="aspect-[16/9] bg-gray-100" />

            {/* Content placeholder */}
            <div className="p-5 md:p-6 space-y-3">
                {/* Category badge */}
                <div className="h-4 w-20 bg-gray-100 rounded-full" />

                {/* Title lines */}
                <div className="space-y-2">
                    <div className="h-5 bg-gray-100 rounded-lg" />
                    <div className="h-5 bg-gray-100 rounded-lg w-4/5" />
                </div>

                {/* Excerpt lines */}
                <div className="space-y-2 pt-1">
                    <div className="h-4 bg-gray-100 rounded-lg" />
                    <div className="h-4 bg-gray-100 rounded-lg w-5/6" />
                    <div className="h-4 bg-gray-100 rounded-lg w-2/3" />
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                    <div className="h-3.5 w-24 bg-gray-100 rounded-full" />
                    <div className="h-3.5 w-16 bg-gray-100 rounded-full" />
                </div>
            </div>
        </div>
    );
}
