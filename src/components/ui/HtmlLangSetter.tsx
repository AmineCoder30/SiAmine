"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

export function HtmlLangSetter({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return null;
}
