"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ShapeDecoration from "@/components/ui/ShapeDecoration";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import creative2tg from "@/assets/creative2tg.webp";
import defaultUser from "@/assets/user.png";
import Image from "next/image";
import { MapPin } from "lucide-react";

const testimonialMeta = [
  { rating: 5, accent: "from-indigo-500 to-blue-500" },
  { rating: 5, accent: "from-violet-500 to-purple-500" },
  { rating: 5, accent: "from-indigo-500 to-cyan-500" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();
  const sectionRef = useScrollReveal(0.1);

  const testimonials = testimonialMeta.map((meta, i) => ({
    ...meta,
    ...t.testimonials.items[i],
  }));

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-slate-50/50 overflow-hidden"
    >
      <ShapeDecoration shape="secondary" className="absolute -right-20 top-12 w-[600px] h-[600px]" />
      <ShapeDecoration shape="primary" className="absolute left-16 bottom-16 w-80 h-80" />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6">
        <div data-reveal className="invisible">
          <SectionHeading
            label={t.testimonials.label}
            title={t.testimonials.title}
            highlightWord={t.testimonials.highlightWord}
            highlightColor="text-indigo-600"
            description={t.testimonials.description}
          />
        </div>

        {/* Swiper Card */}
        <div data-reveal className="mx-auto max-w-4xl relative invisible">
          <div
            className="group relative min-h-[340px] flex flex-col rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-10 md:p-14 shadow-soft transition-all duration-500"
          >
            {/* Gradient accent bar */}
            <div
              className={`absolute top-0 left-10 right-10 h-1 rounded-b-full bg-gradient-to-r ${testimonial.accent} opacity-70 transition-all duration-500`}
            />

            {/* Quote icon */}
            <div
              className={`absolute -top-6 left-12 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${testimonial.accent} shadow-lg`}
            >
              <Quote
                size={22}
                strokeWidth={2}
                className="text-white fill-white/20"
              />
            </div>

            <div className="mt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    strokeWidth={2}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="font-heading text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-10 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative h-12 w-12 shrink-0 rounded-full ring-2 ring-slate-100 overflow-hidden">
                  <Image
                    src={
                      testimonial.name === "creative2tg"
                        ? creative2tg
                        : defaultUser
                    }
                    alt={testimonial.name || "User"}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-base font-bold text-slate-900 truncate">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin size={14} strokeWidth={2} />
                    <p className="text-sm font-medium truncate">
                      {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-all duration-200 cursor-pointer"
              aria-label={t.testimonials.prevLabel}
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === current
                      ? "w-8 bg-gradient-to-r from-indigo-500 to-violet-500"
                      : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`${t.testimonials.goToLabel} ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-500 hover:bg-white hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-all duration-200 cursor-pointer"
              aria-label={t.testimonials.nextLabel}
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
