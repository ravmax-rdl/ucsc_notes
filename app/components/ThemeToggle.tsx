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

export function ThemeToggle() {
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
