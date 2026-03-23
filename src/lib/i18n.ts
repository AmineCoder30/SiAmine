import { translations } from "./translations";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function getDictionary(locale: Locale) {
  return translations[locale];
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
