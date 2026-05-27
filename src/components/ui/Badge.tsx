"use client";

import { ReactNode, ElementType } from "react";

type BadgeVariant = 'primary' | 'secondary' | 'outline' | 'vermilion' | 'glass' | 'success' | 'warning' | 'error' | 'info' | 'sky' | 'amber';
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

interface BadgeProps {
    variant?: BadgeVariant;
    size?: BadgeSize;
    icon?: ElementType;
    children: ReactNode;
    className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
    primary: 'bg-primary text-white border-transparent',
    secondary: 'bg-secondary text-white border-transparent',
    outline: 'bg-transparent text-primary border-primary',
    vermilion: 'bg-vermilion text-white border-transparent',
    glass: 'bg-white/10 backdrop-blur-md text-white border-white/20',
    success: 'bg-green-50 text-green-600 border-green-100',
    warning: 'bg-amber-50 text-amber-600 border-amber-100',
    error: 'bg-red-50 text-red-600 border-red-100',
    info: 'bg-blue-50 text-blue-600 border-blue-100',
    sky: 'bg-sky-50 text-sky-600 border-sky-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100',
};

const sizeStyles: Record<BadgeSize, string> = {
    xs: 'px-2 py-0.5 text-[8px]',
    sm: 'px-2.5 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-[11px]',
    lg: 'px-4 py-1.5 text-xs',
};

export default function Badge({ 
    variant = 'primary', 
    size = 'md', 
    icon: Icon,
    children, 
    className = "" 
}: BadgeProps) {
    return (
        <div className={`
            inline-flex items-center justify-center gap-1.5
            rounded-full font-bold uppercase tracking-tight
            border transition-all duration-300 shadow-sm w-fit
            ${variantStyles[variant]} 
            ${sizeStyles[size]} 
            ${className}
        `.replace(/\s+/g, " ").trim()}>
            {Icon && <Icon size={size === 'xs' ? 10 : 12} />}
            {children}
        </div>
    );
}
