"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ShapeDecoration from "@/components/ui/ShapeDecoration";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();
  const sectionRef = useScrollReveal(0.08);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-white">
      <ShapeDecoration shape="secondary" className="absolute right-8 top-20 w-80 h-80" />
      <ShapeDecoration shape="primary" className="absolute -left-16 bottom-16 w-[500px] h-[500px]" />

      <div ref={sectionRef} className="relative mx-auto max-w-5xl px-6">
        <div data-reveal className="invisible">
          <SectionHeading
            label={t.faq.label}
            title={t.faq.title}
            highlightWord={t.faq.highlightWord}
            highlightColor="text-indigo-600"
            description={t.faq.description}
          />
        </div>

        <div className="mx-auto max-w-3xl space-y-4 relative z-10">
          {t.faq.items.map((faq, index) => (
            <div
              data-reveal
              key={index}
              className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 invisible ${
                openIndex === index 
                  ? "border-indigo-100 shadow-soft ring-1 ring-indigo-500/10" 
                  : "border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:bg-slate-50"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      openIndex === index ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    <MessageCircle size={18} strokeWidth={2} />
                  </span>
                  <span className="font-heading text-[1.05rem] font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  strokeWidth={2}
                  className={`text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-indigo-600" : ""}`}
                />
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0 ps-[4.5rem]">
                    <p className="text-[0.95rem] text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
