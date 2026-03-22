"use client";

import ShapeDecoration from "@/components/ui/ShapeDecoration";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal(0.1);

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white">
      {/* Decorative */}
      <ShapeDecoration shape="secondary" className="absolute -right-20 top-12 w-80 h-80" />
      <ShapeDecoration shape="primary" className="absolute left-10 bottom-24 w-64 h-64" />

      <div ref={sectionRef} className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual */}
          <div data-reveal className="relative order-2 lg:order-1 perspective-[2000px] invisible">
            <div className="relative rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-soft transition-transform duration-500 hover:rotate-y-[6deg] aspect-square flex items-center justify-center bg-gradient-to-tr from-indigo-50/50 to-slate-50">
              <div className="text-center p-12 bg-white rounded-2xl shadow-sm border border-slate-50">
                <span className="text-7xl block mb-6">🎨</span>
                <p className="font-heading text-xl font-semibold text-slate-800">
                  {t.about.creative}
                </p>
              </div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute -right-6 top-10 rounded-2xl border border-indigo-100 bg-white p-5 shadow-lg flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <span className="font-heading text-2xl font-bold block">{t.about.yearsCount}</span>
              </div>
              <span className="text-sm font-medium text-slate-600 leading-tight w-24">{t.about.yearsLabel}</span>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <span data-reveal className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 ring-1 ring-inset ring-violet-600/10 mb-6 invisible">
              {t.about.badge}
            </span>
            <h2 data-reveal className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 invisible">
              {t.about.titlePart1}
              <span className="text-indigo-600">{t.about.titleHighlight1}</span>
              {t.about.titleMiddle}
              <span className="gradient-text">{t.about.titleHighlight2}</span>
            </h2>
            <p data-reveal className="text-slate-600 text-lg mb-4 leading-relaxed invisible">{t.about.description1}</p>
            <p data-reveal className="text-slate-600 text-lg mb-10 leading-relaxed invisible">{t.about.description2}</p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4">
              {t.about.skills.map((skill) => (
                <div
                  data-reveal
                  key={skill}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3 transition-colors hover:bg-slate-50 hover:border-indigo-100 invisible"
                >
                  <CheckCircle size={20} strokeWidth={2} className="text-indigo-500 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
