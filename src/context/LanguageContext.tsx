"use client";

import { createContext, useContext, type ReactNode } from "react";
import { translations } from "@/lib/translations";
import type { Locale } from "@/lib/i18n";

interface LanguageContextType {
  lang: Locale;
  t: typeof translations.ar;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  lang,
  children,
}: {
  lang: Locale;
  children: ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
