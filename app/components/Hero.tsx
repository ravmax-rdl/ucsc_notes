"use client";

import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] overflow-hidden border-b border-cf-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(255, 94, 31, 0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 15% 80%, rgba(255, 112, 56, 0.12), transparent 50%), linear-gradient(180deg, var(--color-cf-bg) 0%, var(--color-cf-surface) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--color-cf-text) 8%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-cf-text) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 65% 40%, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-center px-4 pb-20 pt-10 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 font-mono text-[12px] tracking-wide text-cf-primary">
            UCSC Notes
          </p>
          <h1 className="text-4xl font-medium tracking-[-0.04em] text-cf-text md:text-5xl lg:text-6xl leading-[1.05]">
            Course compilations archive
          </h1>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-cf-text-muted md:text-[17px]">
            Compiled from lecture notes, exercises, tutorials and lab sheets,
            with sample papers alongside each subject, using Claude Opus 5 on
            high/xhigh effort. Organised by year and semester in a shared
            archive.
          </p>
          <div className="mt-8">
            <a
              href="#archive"
              className="inline-flex min-h-11 items-center rounded-sm bg-cf-primary px-5 py-3 text-[14px] font-medium text-cf-on-primary transition-colors duration-200 hover:bg-cf-primary-hover active:scale-[0.98]"
            >
              Browse archive
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
