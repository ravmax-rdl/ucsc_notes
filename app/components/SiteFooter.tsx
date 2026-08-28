"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {
    /* ignore */
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current =
      (document.documentElement.dataset.theme as Theme | undefined) ?? "dark";
    setTheme(current);
  }, []);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} mode`}
      onClick={() => {
        applyTheme(next);
        setTheme(next);
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-cf-border text-cf-text transition-colors duration-200 hover:border-cf-primary hover:text-cf-primary"
    >
      {theme === "dark" ? (
        <Sun size={18} weight="bold" aria-hidden />
      ) : (
        <Moon size={18} weight="bold" aria-hidden />
      )}
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-cf-border bg-cf-surface">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-12 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <p className="text-[14px] font-medium tracking-tight text-cf-text">
            UCSC Notes
          </p>
          <p className="max-w-lg text-[13px] leading-relaxed text-cf-text-muted">
            Compiled from lecture notes, exercises, tutorials and lab sheets,
            with sample papers alongside each subject, using Claude Opus 5 on
            high/xhigh effort. Organised by year and semester; files are
            served from Vercel Blob storage.
          </p>
        </div>
        <p className="max-w-3xl text-[12px] leading-relaxed text-cf-text-muted">
          This site is not affiliated with, endorsed by, or officially connected
          to the University of Colombo School of Computing (UCSC). Course codes
          and titles are used only for student reference.
        </p>
        <div className="flex items-center justify-between gap-4 border-t border-cf-border pt-6">
          <p className="font-mono text-[11px] text-cf-text-muted">
            Personal archive
          </p>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://ravmax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-wide text-cf-text-muted transition-colors duration-200 hover:text-cf-primary"
            >
              ravmax
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
