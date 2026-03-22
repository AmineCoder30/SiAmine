"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/ui/Button";
import ShapeDecoration from "@/components/ui/ShapeDecoration";
import { Sparkles, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const els = sectionRef.current.querySelectorAll("[data-reveal]");
      if (!els.length) return;

      gsap.set(els, { autoAlpha: 0, y: 30 });

      gsap.to(els, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-slate-50"
    >
      {/* Decorative blobs */}
      <ShapeDecoration shape="primary" className="-left-20 top-1/4 w-[500px] h-[500px]" />
      <ShapeDecoration shape="secondary" className="right-0 top-32 w-[600px] h-[600px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="z-10">
            <div data-reveal className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-2 mb-6 invisible">
              <Sparkles size={16} className="text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700 tracking-wide">
                {t.hero.badge}
              </span>
            </div>

            <h1 data-reveal className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6 invisible">
              {t.hero.titlePart1}{" "}
              <span className="gradient-text relative z-10">
                {t.hero.titleHighlight1}
              </span>{" "}
              {t.hero.titlePart2}{" "}
              <span className="text-indigo-600">{t.hero.titleHighlight2}</span>{" "}
              {t.hero.titlePart3}
            </h1>

            <p data-reveal className="text-slate-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed invisible">
              {t.hero.description}
            </p>

            <div data-reveal className="flex flex-wrap gap-4 invisible">
              <Button href="#projects" variant="primary" showArrow>
                {t.hero.ctaPrimary}
              </Button>
              <Button href="/resume.pdf" variant="secondary">
                <Download size={16} strokeWidth={2.5} />
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Stats */}
            <div data-reveal className="flex gap-10 mt-12 pt-8 border-t border-slate-200 invisible">
              {t.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-heading text-3xl font-bold text-slate-900 block mb-1">
                    {stat.value}
                  </span>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder with isometric mask */}
          <div data-reveal className="relative flex justify-center lg:justify-end invisible">
            <div className="relative perspective-[2000px] w-full max-w-lg">
              {/* Soft glow behind */}
              <ShapeDecoration shape="primary" className="absolute -inset-10 w-full h-full" />
              
              {/* Image container with isometric transform */}
              <div
                className="relative aspect-square w-full rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-soft transition-transform duration-700 hover:rotate-x-[2deg] hover:rotate-y-[-8deg] rotate-x-[5deg] rotate-y-[-12deg]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-violet-50 flex items-center justify-center">
                  <span className="font-heading text-8xl shadow-sm rounded-2xl bg-white p-8">👨‍💻</span>
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -left-6 -bottom-6 flex h-28 w-28 items-center justify-center rounded-2xl border border-white bg-indigo-600 shadow-lg transition-transform duration-500 hover:-translate-y-2 z-20">
                <span className="font-heading text-sm font-bold text-center text-white leading-tight">
                  {t.hero.available}
                  <br />
                  {t.hero.forWork}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
