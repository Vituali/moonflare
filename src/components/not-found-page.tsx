import Link from "next/link";
import { SiteHeaderI18n } from "@/components/site-header-i18n";
import { SiteFooterI18n } from "@/components/site-footer-i18n";
import type { Locale } from "@/lib/i18n";
import { homePath } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.ui;
  return (
    <>
      <SiteHeaderI18n locale={locale} dict={dict} />
      <main id="content" className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.notFoundCode}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text">{t.notFoundTitle}</h1>
        <p className="mt-4 max-w-xl text-muted">{t.notFoundDesc}</p>
        <Link href={homePath(locale)} className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg hover:brightness-110">{t.backHome}</Link>
      </main>
      <SiteFooterI18n locale={locale} dict={dict} />
    </>
  );
}
