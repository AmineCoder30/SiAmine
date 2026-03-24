"use client";

import { Heart, ArrowUp } from "lucide-react";
import ShapeDecoration from "@/components/ui/ShapeDecoration";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/amine.png";
import Image from "next/image";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-heading text-xl font-bold  text-slate-900"
            >
              <Image src={logo} alt="Amine Logo" width={100} />
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.brandDescription}
            </p>
          </div>

          {/* Link columns */}
          {t.footer.groups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-800 pt-8 gap-6">
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            {t.footer.madeWith}{" "}
            <Heart size={14} className="text-indigo-500 fill-indigo-500" />{" "}
            {t.footer.andCoffee}
          </p>
          <a
            href="#"
            onClick={scrollToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-800/50 text-slate-400 hover:border-indigo-500 hover:bg-slate-800 hover:text-indigo-400 transition-all duration-300 cursor-pointer"
            aria-label={t.footer.backToTop}
          >
            <ArrowUp size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Decorative shapes */}
      <ShapeDecoration
        shape="primary"
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-10"
      />
      <ShapeDecoration
        shape="secondary"
        className="absolute top-20 right-12 w-80 h-80 opacity-10"
      />
    </footer>
  );
}
