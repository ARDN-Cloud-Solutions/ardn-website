"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import Button from "./Button";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    isLoading?: boolean;
    variant?: "danger" | "primary";
}

export default function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    isLoading = false,
    variant = "danger",
}: ConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-6 sm:p-8">
                            {/* Close Icon (Optional) */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-50 rounded-full transition-all cursor-pointer"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                {/* Icon Header */}
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                                    variant === "danger" ? "bg-red-50 text-red-500" : "bg-primary/10 text-primary"
                                }`}>
                                    <AlertTriangle size={32} />
                                </div>

                                <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed mb-8">
                                    {message}
                                </p>

                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <Button
                                        variant="outline"
                                        onClick={onClose}
                                        rounded="xl"
                                        disabled={isLoading}
                                    >
                                        {cancelText}
                                    </Button>
                                    <Button
                                        variant={variant === "danger" ? "primary" : variant}
                                        onClick={onConfirm}
                                        rounded="xl"
                                        isLoading={isLoading}
                                        className={variant === "danger" ? "!bg-red-500 hover:!bg-red-600 border-none" : ""}
                                    >
                                        {confirmText}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
