"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface TypingTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    as?: React.ElementType;
    once?: boolean;
}

export default function TypingText({
    text,
    className = "",
    speed = 0.02,
    delay = 0.2,
    as: Component = "span",
    once = true
}: TypingTextProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Helper to parse HTML string to a list of React elements
    const renderedContent = useMemo(() => {
        // Need to check window for DOMParser
        if (typeof window === "undefined" || !isMounted) return null;

        const parser = new DOMParser();
        const doc = parser.parseFromString(`<div>${text}</div>`, "text/html");
        const root = doc.querySelector("div");

        let charCounter = 0;

        const letterVariants = {
            hidden: { opacity: 0, y: 5 },
            visible: (i: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                    delay: delay + i * speed,
                    duration: 0.1,
                },
            }),
        };

        const renderNodes = (nodes: NodeList): React.ReactNode[] => {
            return Array.from(nodes).map((node, nodeIdx) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const content = node.textContent || "";
                    // Split into words and whitespace while preserving both
                    const parts = content.split(/(\s+)/);
                    
                    return parts.map((part, partIdx) => {
                        if (part === "") return null;
                        
                        // If it's whitespace, render characters directly without word-wrap protection
                        if (/^\s+$/.test(part)) {
                            return part.split("").map((char, charIdx) => {
                                const currentIdx = charCounter++;
                                return (
                                    <motion.span
                                        key={`char-${currentIdx}-${charIdx}`}
                                        variants={letterVariants}
                                        custom={currentIdx}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                );
                            });
                        }

                        // If it's a word, wrap in an atomic container to prevent mid-word breaking
                        return (
                            <span key={`word-${partIdx}`} className="inline-block whitespace-nowrap">
                                {part.split("").map((char, charIdx) => {
                                    const currentIdx = charCounter++;
                                    return (
                                        <motion.span
                                            key={`char-${currentIdx}-${charIdx}`}
                                            variants={letterVariants}
                                            custom={currentIdx}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once }}
                                            className="inline-block"
                                        >
                                            {char}
                                        </motion.span>
                                    );
                                })}
                            </span>
                        );
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const element = node as HTMLElement;
                    const Tag = element.tagName.toLowerCase();
                    
                    // Convert attributes to React props
                    const attributes: Record<string, string> = {};
                    Array.from(element.attributes).forEach(attr => {
                        const name = attr.name === "class" ? "className" : attr.name;
                        attributes[name] = attr.value;
                    });

                    // Special case for br
                    if (Tag === "br") {
                        return <br key={`br-${nodeIdx}`} {...attributes} />;
                    }

                    // For other elements, recursively render children
                    const MotionTag = motion.create(Tag as React.ElementType);
                    
                    return (
                        <MotionTag key={`${Tag}-${nodeIdx}`} {...attributes}>
                            {renderNodes(element.childNodes)}
                        </MotionTag>
                    );
                }
                return null;
            }).filter((node) => node !== null) as React.ReactNode[];
        };

        return root ? renderNodes(root.childNodes) : null;
    }, [text, speed, delay, once, isMounted]);

    const MotionComponent = motion.create(Component as React.ElementType);

    // Initial render (SSR) or while parsing
    if (!isMounted) {
        return (
            <Component 
                className={className} 
                dangerouslySetInnerHTML={{ __html: text }} 
            />
        );
    }

    return (
        <MotionComponent className={className}>
            {renderedContent}
        </MotionComponent>
    );
}
