import type { Metadata } from "next";

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { htmlLang: string; hreflang: string; ogLocale: string; label: string; flag: string }> = {
  en: { htmlLang: "en", hreflang: "en", ogLocale: "en_US", label: "English", flag: "🇺🇸" },
  pt: { htmlLang: "pt-BR", hreflang: "pt-BR", ogLocale: "pt_BR", label: "Português (BR)", flag: "🇧🇷" },
};

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

export function homePath(locale: Locale) {
  return locale === "en" ? "/" : "/pt/";
}

export function projectPath(locale: Locale, slug: string) {
  return locale === "en" ? `/projects/${slug}/` : `/pt/projects/${slug}/`;
}

export function localizedPath(locale: Locale, path: string) {
  // path like "/" or "/projects/slug/"
  if (locale === "en") return path;
  if (path === "/") return "/pt/";
  return `/pt${path}`;
}

export function alternatePaths(path: string) {
  // path is the en path: "/" or "/projects/slug/"
  return {
    en: path,
    "pt-BR": path === "/" ? "/pt/" : `/pt${path}`,
    "x-default": path,
  } as const;
}

export function absoluteUrl(path: string) {
  return `https://moonflare.com.br${path}`;
}

export function baseMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const alts = alternatePaths(path);
  const url = absoluteUrl(alts[locale === "pt" ? "pt-BR" : "en"]);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(alts.en),
        "pt-BR": absoluteUrl(alts["pt-BR"]),
        "x-default": absoluteUrl(alts["x-default"]),
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Moonflare Development",
      locale: localeMeta[locale].ogLocale,
      alternateLocale: locale === "en" ? [localeMeta.pt.ogLocale] : [localeMeta.en.ogLocale],
      images: [{ url: absoluteUrl("/og.png"), width: 1200, height: 630, alt: "Moonflare Development" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og.png")],
    },
  };
}
