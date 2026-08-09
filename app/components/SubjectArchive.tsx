"use client";

import { ArrowUpRight, FilePdf } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import type { CompilationWithPdfs } from "../data/catalog";
import { SubjectIllustration } from "./SubjectIllustration";

function formatSize(bytes: number | null): string | null {
  if (bytes == null) return null;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function SubjectArchive({
  compilations,
}: {
  compilations: CompilationWithPdfs[];
}) {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(compilations[0]?.id ?? "");

  const active = useMemo(
    () => compilations.find((c) => c.id === activeId) ?? compilations[0],
    [activeId, compilations],
  );

  if (!active) return null;

  return (
    <section id="subjects" className="border-b border-cf-border bg-cf-bg">
      <div id="archive" className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <div id="compilations">
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-cf-text md:text-4xl">
            Compilation archive
          </h2>
          <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-cf-text-muted">
            Compiled from lecture notes, exercises, tutorials and lab sheets with
            Claude Opus 5 on high/xhigh effort. Browse by year and semester; more
            compilations can be added as storage folders grow.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {compilations.map((compilation) => {
              const selected = compilation.id === active.id;
              return (
                <button
                  key={compilation.id}
                  type="button"
                  onClick={() => setActiveId(compilation.id)}
                  className={`min-h-10 rounded-sm border px-3 py-2 font-mono text-[12px] transition-colors duration-200 ${
                    selected
                      ? "border-cf-primary bg-cf-primary text-cf-on-primary"
                      : "border-cf-border bg-cf-surface text-cf-text-muted hover:border-cf-primary hover:text-cf-text"
                  }`}
                >
                  {compilation.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-10 font-mono text-[12px] tracking-wide text-cf-primary">
          {active.label}
        </p>

        <ul className="mt-6 divide-y divide-cf-border border-t border-cf-border">
          {active.subjects.map((subject, i) => {
            const sizeLabel = formatSize(subject.size);
            const available = Boolean(subject.url);

            return (
              <motion.li
                key={subject.slug}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: reduce ? 0 : i * 0.04,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="grid gap-6 py-10 md:grid-cols-[120px_minmax(0,1fr)_minmax(0,1.2fr)_auto] md:items-center md:gap-8"
              >
                <SubjectIllustration
                  id={subject.illustration}
                  title={`${subject.title} illustration`}
                />

                <div>
                  {subject.code ? (
                    <p className="font-mono text-[11px] tracking-wide text-cf-primary">
                      {subject.code}
                    </p>
                  ) : (
                    <p className="font-mono text-[11px] tracking-wide text-cf-text-muted">
                      {active.shortLabel}
                    </p>
                  )}
                  <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] text-cf-text md:text-2xl">
                    {subject.title}
                  </h3>
                  {sizeLabel ? (
                    <p className="mt-2 font-mono text-[11px] text-cf-text-muted">
                      {sizeLabel}
                    </p>
                  ) : null}
                </div>

                <div>
                  <p className="text-[15px] leading-relaxed text-cf-text-muted">
                    {subject.overview}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {subject.topics.map((topic) => (
                      <li
                        key={topic}
                        className="rounded-sm border border-cf-border bg-cf-surface px-2.5 py-1 font-mono text-[11px] text-cf-text"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:justify-self-end">
                  {available && subject.url ? (
                    <a
                      href={subject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-cf-primary px-4 py-2.5 text-[13px] font-medium text-cf-on-primary transition-colors duration-200 hover:bg-cf-primary-hover active:scale-[0.98]"
                    >
                      <FilePdf size={18} weight="bold" aria-hidden />
                      Open PDF
                      <ArrowUpRight size={16} weight="bold" aria-hidden />
                    </a>
                  ) : (
                    <span className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-cf-border px-4 py-2.5 text-[13px] text-cf-text-muted">
                      <FilePdf size={18} aria-hidden />
                      Coming soon
                    </span>
                  )}
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
