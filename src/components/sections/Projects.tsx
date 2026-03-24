"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ShapeDecoration from "@/components/ui/ShapeDecoration";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import projectsData from "@/projectsData";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ProjectFilter = "all" | string;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const { t } = useLanguage();
  const sectionRef = useScrollReveal(0.06);

  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-white">
      <ShapeDecoration
        shape="primary"
        className="absolute right-12 top-12 w-64 h-64"
      />
      <ShapeDecoration
        shape="secondary"
        className="absolute -left-12 bottom-24 w-80 h-80"
      />

      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-6">
        <div data-reveal className="invisible">
          <SectionHeading
            label={t.projects.label}
            title={t.projects.title}
            highlightWord={t.projects.highlightWord}
            highlightColor="gradient-text"
            description={t.projects.description}
          />
        </div>

        {/* Filter buttons */}
        <div
          data-reveal
          className="flex flex-wrap justify-center gap-3 mb-16 invisible"
        >
          {t.projects.filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-slate-900 text-white shadow-md ring-1 ring-slate-900/10"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => {
            const originalIndex = projectsData.findIndex(
              (p) => p.id === project.id,
            );
            const translatedItem = t.projects.items[originalIndex];

            return (
              <article
                data-reveal
                key={project.id}
                className="group relative rounded-3xl border border-slate-200/60 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.15)] hover:border-indigo-100 flex flex-col invisible"
              >
                {/* Preview area */}
                <div className="relative aspect-video overflow-hidden border-b border-slate-100 flex items-center justify-center bg-gradient-to-tr from-slate-50 to-slate-100/80">
                  <div className="absolute inset-0 bg-slate-900/5 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={project.imgSrc}
                    alt={project.altText}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-heading text-xl font-bold text-slate-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                      {translatedItem?.title || project.title}
                    </h3>
                    <div className="flex gap-2 shrink-0 relative z-20">
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors shadow-sm"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github size={16} strokeWidth={2.5} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <ExternalLink size={16} strokeWidth={2.5} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p
                    className="text-sm text-slate-600 mb-7 line-clamp-3 leading-relaxed"
                    dir="auto"
                  >
                    {translatedItem?.description || project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-slate-100/60">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-indigo-50/50 border border-indigo-100/50 px-3 py-1 text-[11px] font-semibold text-indigo-600 tracking-wide transition-colors group-hover:bg-indigo-50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="rounded-full bg-indigo-50/50 border border-indigo-100/50 px-3 py-1 text-[11px] font-semibold text-indigo-600 tracking-wide transition-colors group-hover:bg-indigo-50">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
