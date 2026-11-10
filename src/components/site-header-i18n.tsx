"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { homePath, localeMeta } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

function switchPath(pathname: string, to: Locale): string {
  const normalized = pathname || "/";
  if (to === "pt") {
    if (normalized === "/pt" || normalized.startsWith("/pt/")) return normalized.endsWith("/") ? normalized : `${normalized}/`;
    if (normalized === "/") return "/pt/";
    return `/pt${normalized}`;
  }
  // to en
  if (normalized === "/pt" || normalized === "/pt/") return "/";
  if (normalized.startsWith("/pt/")) return normalized.slice(3) || "/";
  return normalized;
}

export function SiteHeaderI18n({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const navItems = [
    { href: `${homePath(locale)}#projects`, label: dict.ui.nav.projects },
    { href: `${homePath(locale)}#approach`, label: dict.ui.nav.approach },
    { href: `${homePath(locale)}#about`, label: dict.ui.nav.about },
    { href: `${homePath(locale)}#skills`, label: dict.ui.nav.skills },
    { href: `${homePath(locale)}#contact`, label: dict.ui.nav.contact },
  ];
  const otherLocale: Locale = locale === "en" ? "pt" : "en";
  const switchHref = switchPath(pathname, otherLocale);
  const persist = () => {
    try {
      localStorage.setItem("lang", otherLocale);
      document.cookie = `lang=${otherLocale};path=/;max-age=31536000;SameSite=Lax`;
    } catch {}
  };
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href={homePath(locale)} className="flex items-center gap-3" aria-label={dict.ui.homeAria}>
          <Image src="/logo-mark.svg" alt="" width={37} height={50} priority />
          <span className="text-xl font-semibold tracking-tight text-text md:text-2xl">
            moon<span className="text-accent">flare</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm text-muted lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-text">
              {item.label}
            </a>
          ))}
          <a href={site.github} className="transition hover:text-text" target="_blank" rel="noopener noreferrer">
            {dict.ui.nav.github}
          </a>
          <Link href={switchHref} onClick={persist} className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 transition hover:border-muted hover:text-text" aria-label={`${dict.ui.language}: ${localeMeta[otherLocale].label}`}>
            <span aria-hidden="true">{localeMeta[otherLocale].flag}</span>
            <span>{otherLocale.toUpperCase()}</span>
          </Link>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <Link href={switchHref} onClick={persist} className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-sm text-muted transition hover:border-muted hover:text-text" aria-label={`${dict.ui.language}: ${localeMeta[otherLocale].label}`}>
            <span aria-hidden="true">{localeMeta[otherLocale].flag}</span>
            <span>{otherLocale.toUpperCase()}</span>
          </Link>
          <a href={`${homePath(locale)}#contact`} className="text-sm font-medium text-accent hover:underline">{dict.ui.nav.contact}</a>
        </div>
      </div>
    </header>
  );
}
