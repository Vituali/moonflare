import { site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export function SiteFooterI18n({ dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. {dict.ui.footerBuiltBy}</p>
        <div className="flex gap-5">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-text">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-text">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
