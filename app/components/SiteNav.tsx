import { ThemeToggle } from "./ThemeToggle";

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
