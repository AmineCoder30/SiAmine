"use client";

import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import ShapeDecoration from "@/components/ui/ShapeDecoration";
import { Code, Palette, Smartphone, Globe, Zap, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const iconProps = { size: 24, strokeWidth: 2, className: "text-indigo-600" } as const;
const iconPropsFeatured = { size: 24, strokeWidth: 2, className: "text-white" } as const;

const icons = [
  <Code key="code" {...iconProps} />,
  <Palette key="palette" {...iconPropsFeatured} />,
  <Smartphone key="smartphone" {...iconProps} />,
  <Globe key="globe" {...iconProps} />,
  <Zap key="zap" {...iconProps} />,
  <Layers key="layers" {...iconProps} />,
];

const iconColors = [
  "bg-indigo-50 text-indigo-600",
  "gradient-primary text-white", // Featured
  "bg-violet-50 text-violet-600",
  "bg-indigo-50 text-indigo-600",
  "bg-violet-50 text-violet-600",
  "bg-indigo-50 text-indigo-600",
];

export default function Services() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal(0.08);

  return (
    <section
      id="services"
      className="relative py-24 bg-slate-50/50 overflow-hidden"
    >
      <ShapeDecoration shape="primary" className="absolute left-8 top-16 w-64 h-64" />
      <ShapeDecoration shape="secondary" className="absolute -right-16 bottom-20 w-80 h-80" />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6">
        <div data-reveal className="invisible">
          <SectionHeading
            label={t.services.label}
            title={t.services.title}
            highlightWord={t.services.highlightWord}
            highlightColor="text-indigo-600"
            description={t.services.description}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((item, i) => (
            <div data-reveal key={i} className="invisible">
              <Card
                icon={icons[i]}
                iconColor={iconColors[i]}
                title={item.title}
                featured={i === 1}
              >
                {item.description}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
