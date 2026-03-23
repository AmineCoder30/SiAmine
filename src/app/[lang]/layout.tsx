import { LanguageProvider } from "@/context/LanguageContext";
import { HtmlLangSetter } from "@/components/ui/HtmlLangSetter";
import { locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <LanguageProvider lang={lang as Locale}>
      <HtmlLangSetter lang={lang as Locale} />
      {children}
    </LanguageProvider>
  );
}
