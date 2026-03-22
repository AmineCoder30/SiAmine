"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  showArrow?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:from-indigo-500 hover:to-violet-500 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_0_rgba(79,70,229,0.4)]",
  secondary:
    "bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-300",
};

export default function Button({
  variant = "primary",
  children,
  showArrow = false,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const { lang } = useLanguage();
  
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`font-body inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-card cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${variantStyles[variant]} ${className}`}
      {...(props as any)}
    >
      {children}
      {showArrow && (
        <span className="flex h-5 w-5 items-center justify-center transition-transform group-hover:translate-x-1">
          {lang === "ar" ? (
            <ArrowLeft size={16} strokeWidth={2.5} />
          ) : (
            <ArrowRight size={16} strokeWidth={2.5} />
          )}
        </span>
      )}
    </Component>
  );
}
