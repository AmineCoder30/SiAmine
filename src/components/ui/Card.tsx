import { type ReactNode } from "react";

interface CardProps {
  icon?: ReactNode;
  iconColor?: string;
  title: string;
  children: ReactNode;
  featured?: boolean;
  className?: string;
}

export default function Card({
  icon,
  iconColor = "text-indigo-600 bg-indigo-50",
  title,
  children,
  featured = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`relative rounded-xl border border-slate-100 bg-white p-6 pt-10 transition-card hover:-translate-y-1 ${
        featured ? "shadow-soft-hover ring-1 ring-indigo-500/10 z-10 scale-[1.02]" : "shadow-soft hover:shadow-soft-hover"
      } ${className}`}
    >
      {icon && (
        <div
          className={`absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm ${iconColor}`}
        >
          {icon}
        </div>
      )}
      <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2 mt-2">{title}</h3>
      <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
