"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();

  return (
    <header style={{direction:"ltr"}} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl font-bold flex items-center gap-2 text-slate-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 shadow-sm border border-indigo-500">
            <span className="text-white text-sm font-bold">SI</span>
          </span>
         Amine
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Language Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Globe size={16} strokeWidth={2} />
            {t.header.switchLang}
          </button>
          <Button href="#contact" variant="primary" showArrow className="px-5 py-2">
            {t.header.cta}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={20} strokeWidth={2} />
          ) : (
            <Menu size={20} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-slate-100 bg-white px-6 py-6 shadow-lg absolute w-full"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {t.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-lg font-semibold text-slate-700 hover:text-indigo-600 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="h-px w-full bg-slate-100 my-2" />
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 w-full mb-2"
            >
              <Globe size={16} strokeWidth={2} />
              {t.header.switchLang}
            </button>
            <Button
              href="#contact"
              onClick={() => setMobileOpen(false)}
              variant="primary"
              showArrow
              className="w-full justify-center"
            >
              {t.header.cta}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
