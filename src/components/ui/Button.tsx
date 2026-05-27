import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

// Button variants
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "success" | "glass" | "banner" | "white" | "orange";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: "xl" | "full";
    fullWidth?: boolean;
    isLoading?: boolean;
    leftIcon?: React.ElementType | React.ReactNode;
    rightIcon?: React.ElementType | React.ReactNode;
    className?: string;
    children: React.ReactNode;
}

// For regular button
interface ButtonAsButton extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
    href?: never;
    external?: never;
}

// For link button
interface ButtonAsLink extends ButtonBaseProps {
    href: string;
    external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

// Variant styles
const variantStyles: Record<ButtonVariant, string> = {
    primary: `
        bg-btn-primary text-white border-btn-primary
        hover:bg-btn-primary-hover hover:border-btn-primary-hover
        active:bg-btn-primary/80
    `,
    secondary: `
        bg-[#3ca2ff] text-white border-[#3ca2ff]
        hover:bg-btn-primary hover:border-btn-primary
        active:bg-[#3ca2ff]/60
    `,
    outline: `
        bg-transparent text-btn-primary border-btn-primary
        hover:bg-btn-primary hover:text-white
        active:bg-btn-primary/90
    `,
    ghost: `
        bg-transparent text-foreground border-transparent
        hover:bg-foreground/8 hover:text-heading-dark
        active:bg-foreground/15
    `,
    danger: `
        bg-red-600 text-white border-transparent
        hover:bg-red-700
        active:bg-red-800
    `,
    success: `
        bg-green-600 text-white border-transparent
        hover:bg-green-700
        active:bg-green-800
    `,
    banner: `
        bg-[#E79D17] text-white border-transparent
        hover:bg-[#E79D17]/80
        active:bg-[#E79D17]/60 rounded-full
    `,
    glass: `
        bg-white/10 backdrop-blur-md text-white border-white/20
        hover:bg-white/20
    `,
    white: `
        bg-white text-heading-dark border-white
        hover:bg-btn-primary hover:text-white hover:border-btn-primary
        active:bg-white/60
    `,
    orange: `
        bg-[#FF7A00] text-white border-[#FF7A00]
        hover:bg-[#E66D00] hover:border-[#E66D00]
        active:bg-[#FF7A00]/80
    `,
};

// Size styles
const sizeStyles: Record<ButtonSize, string> = {
    xs: "px-2 py-1 text-xs gap-1",
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2",
    xl: "px-8 py-4 text-lg gap-3",
};

// Base styles
const baseStyles = `
    inline-flex items-center justify-center
    font-medium border-2
    transition-all duration-200 ease-in-out cursor-pointer
    focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
`;

// Helper to render icon
const renderIcon = (icon: React.ElementType | React.ReactNode, size: ButtonSize) => {
    if (!icon) return null;

    // If it's a component (function or object with render property)
    if (typeof icon === 'function' || (typeof icon === 'object' && icon !== null && 'render' in icon)) {
        const IconComponent = icon as React.ElementType;
        const iconSizes = {
            xs: 12,
            sm: 16,
            md: 18,
            lg: 20,
            xl: 22,
        };
        return <IconComponent size={iconSizes[size]} />;
    }

    return icon;
};

// Loading spinner component
const LoadingSpinner = ({ size }: { size: ButtonSize }) => {
    const spinnerSizes = {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7",
    };

    return (
        <svg
            className={`animate-spin ${spinnerSizes[size]}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
    );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            rounded = "xl",
            fullWidth = false,
            isLoading = false,
            leftIcon,
            rightIcon,
            className = "",
            children,
            ...props
        },
        ref
    ) => {
        const combinedStyles = `
            ${baseStyles}
            ${variantStyles[variant]}
            ${sizeStyles[size]}
            ${rounded === "full" ? "rounded-full" : "rounded-xl"}
            ${fullWidth ? "w-full" : ""}
            ${className}
        `.replace(/\s+/g, " ").trim();

        const content = (
            <>
                {isLoading && <LoadingSpinner size={size} />}
                {!isLoading && leftIcon && (
                    <span className="flex-shrink-0">
                        {renderIcon(leftIcon, size)}
                    </span>
                )}
                <span>{children}</span>
                {!isLoading && rightIcon && (
                    <span className="flex-shrink-0">
                        {renderIcon(rightIcon, size)}
                    </span>
                )}
            </>
        );

        // If href is provided, render as a Link
        if ("href" in props && props.href) {
            const { href, external, ...linkProps } = props as ButtonAsLink;

            if (external) {
                return (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={combinedStyles}
                        {...(linkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                    >
                        {content}
                    </a>
                );
            }

            return (
                <Link href={href} className={combinedStyles}>
                    {content}
                </Link>
            );
        }

        // Render as button
        const buttonProps = props as ButtonAsButton;
        return (
            <button
                ref={ref}
                className={combinedStyles}
                disabled={isLoading || buttonProps.disabled}
                {...buttonProps}
            >
                {content}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;

// Icon button component for icon-only buttons
interface IconButtonProps extends Omit<ButtonAsButton, "children" | "leftIcon" | "rightIcon"> {
    icon: React.ReactNode;
    "aria-label": string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, size = "md", className = "", ...props }, ref) => {
        const iconSizeStyles: Record<ButtonSize, string> = {
            xs: "p-1",
            sm: "p-1.5",
            md: "p-2",
            lg: "p-3",
            xl: "p-4",
        };

        return (
            <Button
                ref={ref}
                size={size}
                className={`${iconSizeStyles[size]} !px-0 ${className}`}
                {...props}
            >
                {icon}
            </Button>
        );
    }
);

IconButton.displayName = "IconButton";
