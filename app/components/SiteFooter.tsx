export function SiteFooter() {
  return (
    <footer className="border-t border-cf-border bg-cf-surface">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-12 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <p className="text-[14px] font-medium tracking-tight text-cf-text">
            UCSC Notes
          </p>
          <p className="max-w-lg text-[13px] leading-relaxed text-cf-text-muted">
            Compiled from lecture notes, exercises, tutorials and lab sheets with
            Claude Opus 5 on high/xhigh effort. Organised by year and semester;
            files are served from Vercel Blob storage.
          </p>
        </div>
        <p className="max-w-3xl text-[12px] leading-relaxed text-cf-text-muted">
          This site is not affiliated with, endorsed by, or officially connected
          to the University of Colombo School of Computing (UCSC). Course codes
          and titles are used only for student reference.
        </p>
        <div className="flex items-center justify-between border-t border-cf-border pt-6">
          <p className="font-mono text-[11px] text-cf-text-muted">
            Personal archive
          </p>
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
    </footer>
  );
}
