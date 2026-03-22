"use client";

import Button from "@/components/ui/Button";
import ShapeDecoration from "@/components/ui/ShapeDecoration";
import { Rocket, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CallToAction() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal(0.12);

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-slate-50">
      <div ref={sectionRef} className="relative mx-auto max-w-6xl px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden shadow-2xl">
          {/* Background decorations */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" aria-hidden="true">
            <ShapeDecoration shape="primary" className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white opacity-20 blur-3xl" />
            <ShapeDecoration shape="secondary" className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-500 opacity-20 blur-3xl" />
          </div>

          <div className="relative px-8 py-20 md:py-24 text-center z-10">
            {/* Floating icon */}
            <div data-reveal className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-md invisible">
              <Rocket size={32} strokeWidth={2} className="text-amber-400" />
            </div>

            <h2 data-reveal className="font-heading text-3xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight max-w-3xl mx-auto leading-tight invisible">
              {t.cta.title}
            </h2>
            <p data-reveal className="mx-auto max-w-xl text-indigo-100/80 text-lg md:text-xl mb-12 leading-relaxed invisible">
              {t.cta.description}
            </p>

            <div data-reveal className="flex flex-wrap justify-center gap-4 invisible">
              <Button
                variant="primary"
                showArrow
                className="bg-white text-slate-900 shadow-[0_8px_20px_rgba(255,255,255,0.2)] hover:bg-slate-50 hover:shadow-[0_12px_25px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <Mail size={18} strokeWidth={2} className="text-slate-900 mr-2" />
                {t.cta.primaryBtn}
              </Button>
              <Button
                variant="secondary"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                {t.cta.secondaryBtn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
