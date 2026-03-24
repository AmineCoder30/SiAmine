"use client";

import { useState } from "react";
import { Check, Smartphone, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ShapeDecoration from "@/components/ui/ShapeDecoration";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/ui/LeadModal";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type PricingType = "website" | "mobile";
type PlanType = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  badge?: string;
};

export default function Pricing() {
  const [activeType, setActiveType] = useState<PricingType>("website");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const { t } = useLanguage();
  const sectionRef = useScrollReveal(0.08);

  const plans = t.pricing.plans[activeType];

  const handleWhatsApp = (plan: PlanType) => {
    const message = `سلام، مهتم ب Plan ${plan.name} من الموقع ديالك. بغيت نعرف التفاصيل والثمن.`;

    const url = `https://wa.me/212651167495?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="pricing"
      className="relative py-24 overflow-hidden bg-slate-50/60"
    >
      <ShapeDecoration
        shape="primary"
        className="absolute -left-14 top-20 w-80 h-80"
      />
      <ShapeDecoration
        shape="secondary"
        className="absolute -right-12 bottom-10 w-72 h-72"
      />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6 z-10">
        <div data-reveal className="invisible">
          <SectionHeading
            label={t.pricing.label}
            title={t.pricing.title}
            highlightWord={t.pricing.highlightWord}
            highlightColor="text-indigo-600"
            description={t.pricing.description}
          />
        </div>

        <div
          data-reveal
          className="mx-auto mb-12 flex w-full max-w-md items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm invisible"
        >
          <button
            type="button"
            onClick={() => setActiveType("website")}
            className={`flex w-1/2 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
              activeType === "website"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Globe size={16} strokeWidth={2.2} />
            {t.pricing.switcher.website}
          </button>
          <button
            type="button"
            onClick={() => setActiveType("mobile")}
            className={`flex w-1/2 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
              activeType === "mobile"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Smartphone size={16} strokeWidth={2.2} />
            {t.pricing.switcher.mobile}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={plan.name}
                data-reveal
                className={`group relative rounded-3xl border p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                  isFeatured
                    ? "bg-slate-900 border-indigo-500/30 text-white shadow-[0_20px_50px_-12px_rgba(99,102,241,0.4)] ring-1 ring-indigo-500/20 z-10"
                    : "bg-white border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-100 z-0"
                }`}
              >
                {isFeatured && (
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 rounded-3xl pointer-events-none" />
                )}
                {plan.badge && (
                  <span className={`mb-5 inline-flex rounded-full px-3 py-1 text-xs font-bold tracking-wide ${
                    isFeatured 
                      ? "bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/30 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                      : "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
                  }`}>
                    {plan.badge}
                  </span>
                )}

                <h3 className={`font-heading text-2xl font-bold mb-2 ${isFeatured ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 leading-relaxed min-h-[3rem] ${isFeatured ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.description}
                </p>

                <div className="mb-7 flex items-end gap-1">
                  <span className={`font-heading text-4xl font-bold ${isFeatured ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`pb-1 text-sm font-medium ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="mb-8 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        isFeatured ? "bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/30" : "bg-indigo-50 text-indigo-600"
                      }`}>
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className={`text-sm leading-relaxed ${isFeatured ? "text-slate-300" : "text-slate-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={isFeatured ? "primary" : "secondary"}
                  className="w-full justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlan(plan);
                    setIsModalOpen(true);
                  }}
                >
                  {plan.cta}
                </Button>
              </article>
            );
          })}
        </div>
      </div>

      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        plan={selectedPlan}
        onWhatsAppRedirect={() => selectedPlan && handleWhatsApp(selectedPlan)}
      />
    </section>
  );
}
