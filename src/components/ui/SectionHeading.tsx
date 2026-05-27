interface SectionHeadingProps {
    title: string;
    description?: string;
    subtitle?: string;
    className?: string;
    titleClassName?: string;
    subtitleClassName?: string;
    descriptionClassName?: string;
}

export default function SectionHeading({
    title,
    description,
    subtitle,
    className = "",
    titleClassName = "",
    subtitleClassName = "",
    descriptionClassName = "",
}: SectionHeadingProps) {

    return (
        <div className={`mb-2 sm:mb-10 lg:mb-6 ${className} text-center justify-items-center`}>
            {subtitle && (
                <p className={`mb-4 ${subtitleClassName}`}>
                    {subtitle}
                </p>
            )}
            <div className="relative inline-block">
                <h2 className={`mb-5 ${titleClassName}`}>
                    {title}
                </h2>
            </div>
            {description && (
                <p className={`max-w-3xl ${descriptionClassName}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
