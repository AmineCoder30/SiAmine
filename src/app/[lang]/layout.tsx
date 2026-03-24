import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import { HtmlLangSetter } from "@/components/ui/HtmlLangSetter";
import { locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const metadataByLocale: Record<Locale, Metadata> = {
  ar: {
    title: "أمين | مطور ويب وتطبيقات الجوال في المغرب | مطور Full Stack",
    description:
      "أمين هو مطور برمجيات إبداعي مقيم في المغرب، متخصص في تطوير مواقع الويب وتطبيقات الجوال عالية الأداء. يقدم حلولًا رقمية قابلة للتوسع، سهلة الاستخدام، ومحسّنة لمحركات البحث. استكشف أعمال أمين في تطوير الويب وتطبيقات الموبايل وحلول البرمجيات المخصصة.",
    keywords:
      "مطور ويب المغرب، مطور تطبيقات الجوال المغرب، مطور فول ستاك المغرب، تطوير مواقع، تطوير تطبيقات، مبرمج المغرب، خدمات برمجة، مواقع متوافقة مع SEO",

    robots: "index, follow",
  },
  en: {
    title:
      "Amine | Web & Mobile App Developer in Morocco | Full-Stack Developer",
    description:
      "Amine is a creative full-stack developer based in Morocco, specializing in building high-performance web and mobile applications. He creates scalable, user-friendly, and SEO-optimized digital solutions for businesses worldwide. Explore Amine’s portfolio for professional web development, mobile app development, and custom software solutions.",
    keywords:
      "web developer Morocco, mobile app developer Morocco, full stack developer Morocco, web development services, mobile app development, MERN stack developer, freelance developer Morocco, software developer Morocco, SEO optimized websites",

    robots: "index, follow",
  },
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    return metadataByLocale.en;
  }

  return metadataByLocale[lang as Locale];
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
