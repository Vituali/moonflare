import Link from "next/link";
import { SiteHeaderI18n } from "@/components/site-header-i18n";
import { SiteFooterI18n } from "@/components/site-footer-i18n";
import type { Locale } from "@/lib/i18n";
import { projectPath } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { site } from "@/lib/content";

function Section({ id, eyebrow, title, intro, children }: { id?: string; eyebrow?: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12 max-w-3xl">
          {eyebrow && <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
          <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const featured = dict.projects.filter((p) => p.featured);
  const t = dict.ui;
  return (
    <>
      <SiteHeaderI18n locale={locale} dict={dict} />
      <main id="content">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(224,90,102,0.18),transparent)]" aria-hidden="true" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-24 md:grid-cols-[1.2fr_0.8fr] md:pb-28 md:pt-36">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.heroEyebrow}</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-text md:text-6xl">
                {locale === "en" ? (<>Engineering systems. <span className="text-muted">Automating complexity.</span></>) : (<>Engenharia de sistemas. <span className="text-muted">Automatizando a complexidade.</span></>)}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{t.heroIntro}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition hover:brightness-110">{t.ctaProjects}</a>
                <a href="#about" className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-text transition hover:border-muted hover:bg-surface">{t.ctaAbout}</a>
              </div>
            </div>
            <div className="flex items-start md:justify-end">
              <div className="w-full max-w-sm rounded-xl border border-border bg-surface/60 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{t.focusTitle}</p>
                <ul className="mt-4 space-y-3 text-sm text-text">
                  {t.focusItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="mt-6 border-t border-border pt-4 text-sm text-muted">
                  <p>{t.role}</p>
                  <p className="mt-1">{t.focusNote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="projects" eyebrow={t.selectedWork} title={t.featuredTitle} intro={t.featuredIntro}>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <article key={p.slug} className="group flex flex-col rounded-xl border border-border bg-surface/40 p-6 transition hover:border-muted/60 hover:bg-surface/70">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full border border-border px-2.5 py-1 text-muted">{p.statusLabel}</span>
                  <span className="rounded-full border border-border px-2.5 py-1 text-muted">{p.visibilityLabel}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-text">
                  <Link href={projectPath(locale, p.slug)} className="hover:text-accent">{p.title}</Link>
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted">{p.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.stack}>
                  {p.stack.slice(0, 6).map((s) => (
                    <li key={s} className="rounded bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted">{s}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <Link href={projectPath(locale, p.slug)} className="font-medium text-accent hover:underline">{t.readCaseStudy}</Link>
                  {p.links?.[0] && (
                    <a href={p.links[0].href} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-text">{t.source}</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="approach" eyebrow={t.approachEyebrow} title={t.approachTitle} intro={t.approachIntro}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.approachItems.map((item) => (
              <div key={item.t} className="rounded-xl border border-border bg-surface/30 p-5">
                <h3 className="text-base font-semibold text-text">{item.t}</h3>
                <p className="mt-2 text-sm text-muted">{item.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="about" eyebrow={t.aboutEyebrow} title={t.aboutTitle} intro={t.aboutIntro}>
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 text-muted">
              {t.aboutParagraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="rounded-xl border border-border bg-surface/40 p-6">
              <h3 className="text-sm font-semibold text-text">{t.verifiedBackground}</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {t.facts.map((f) => (
                  <div key={f.label}><dt className="text-muted">{f.label}</dt><dd className="text-text">{f.value}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow={t.skillsEyebrow} title={t.skillsTitle} intro={t.skillsIntro}>
          <div className="grid gap-6 md:grid-cols-2">
            {dict.skillGroups.map((g) => (
              <div key={g.title} className="rounded-xl border border-border bg-surface/30 p-6">
                <h3 className="text-lg font-semibold text-text">{g.title}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{t.practical}</p>
                    <ul className="prose-list mt-2 space-y-2 text-sm text-muted">
                      {g.practical.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{t.developing}</p>
                    <ul className="prose-list mt-2 space-y-2 text-sm text-muted">
                      {g.learning.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="archive" eyebrow={t.archiveEyebrow} title={t.archiveTitle} intro={t.archiveIntro}>
          <div className="grid gap-4 md:grid-cols-3">
            {dict.archive.map((a) => (
              <article key={a.title} className="rounded-xl border border-border bg-surface/30 p-5">
                <h3 className="font-semibold text-text">{a.title}</h3>
                <p className="mt-2 text-sm text-muted">{a.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {a.stack.map((s) => <li key={s} className="rounded bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted">{s}</li>)}
                </ul>
                {a.note && <p className="mt-3 text-xs text-muted">{a.note}</p>}
                {a.href && <a href={a.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-accent hover:underline">{t.repository}</a>}
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow={t.contactEyebrow} title={t.contactTitle} intro={t.contactIntro}>
          <div className="grid gap-6 md:grid-cols-3">
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-surface/30 p-6 transition hover:border-muted/60 hover:bg-surface/60">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">GitHub</p>
              <p className="mt-2 text-lg font-medium text-text">GitHub</p>
              <p className="mt-1 text-sm text-muted">{t.contactGithubDesc}</p>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-surface/30 p-6 transition hover:border-muted/60 hover:bg-surface/60">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">LinkedIn</p>
              <p className="mt-2 text-lg font-medium text-text">linkedin.com/in/victorhen</p>
              <p className="mt-1 text-sm text-muted">{t.contactLinkedinDesc}</p>
            </a>
            <div className="rounded-xl border border-border bg-surface/30 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{t.contactEmailTitle}</p>
              <p className="mt-2 text-lg font-medium text-text">{t.availableOnRequest}</p>
              <p className="mt-1 text-sm text-muted">{t.contactEmailDesc}</p>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooterI18n locale={locale} dict={dict} />
    </>
  );
}
