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

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-cf-border bg-cf-bg/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a
          href="#top"
          className="text-[15px] font-medium tracking-tight text-cf-text"
        >
          UCSC Notes
        </a>
        <div className="flex items-center gap-4 text-[13px] text-cf-text-muted md:gap-6">
          <a
            href="#compilations"
            className="hidden transition-colors duration-200 hover:text-cf-text sm:inline"
          >
            Compilations
          </a>
          <a
            href="#archive"
            className="rounded-sm bg-cf-primary px-3 py-2 font-medium text-cf-on-primary transition-colors duration-200 hover:bg-cf-primary-hover"
          >
            Archive
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
