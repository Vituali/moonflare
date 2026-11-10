import Link from "next/link";
import { SiteHeaderI18n } from "@/components/site-header-i18n";
import { SiteFooterI18n } from "@/components/site-footer-i18n";
import type { Locale } from "@/lib/i18n";
import { homePath } from "@/lib/i18n";
import type { Dictionary, Project } from "@/lib/dictionaries";

function Block({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <h2 className="text-lg font-semibold text-text">{title}</h2>
      <ul className="prose-list mt-3 space-y-2 text-sm text-muted">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

export function ProjectPageContent({ locale, dict, project }: { locale: Locale; dict: Dictionary; project: Project }) {
  const t = dict.ui;
  return (
    <>
      <SiteHeaderI18n locale={locale} dict={dict} />
      <main id="content" className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Link href={`${homePath(locale)}#projects`} className="text-sm text-muted hover:text-text">{t.backToProjects}</Link>
        <div className="mt-6 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-border px-2.5 py-1 text-muted">{project.statusLabel}</span>
          <span className="rounded-full border border-border px-2.5 py-1 text-muted">{project.visibilityLabel}</span>
          {project.domains.map((d) => (
            <span key={d} className="rounded-full border border-border px-2.5 py-1 text-muted">{d}</span>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted">{project.summary}</p>

        {project.links && project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">
                {l.label} →
              </a>
            ))}
          </div>
        )}

        {project.evidenceNote && (
          <p className="mt-6 rounded-lg border border-border bg-surface/40 p-4 text-sm text-muted">
            <span className="font-medium text-text">{t.evidenceNote}</span> {project.evidenceNote}
          </p>
        )}

        <div className="mt-12 grid gap-10">
          <section>
            <h2 className="text-lg font-semibold text-text">{t.context}</h2>
            <p className="mt-3 text-sm text-muted">{project.context}</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-text">{t.problem}</h2>
            <p className="mt-3 text-sm text-muted">{project.problem}</p>
          </section>
          <Block title={t.constraints} items={project.constraints} />
          <Block title={t.architecture} items={project.architecture} />
          <Block title={t.decisions} items={project.decisions} />
          <Block title={t.implementation} items={project.implementation} />
          <Block title={t.challenges} items={project.challenges} />
          <Block title={t.outcomes} items={project.outcomes} />
          <Block title={t.lessons} items={project.lessons} />
          <section>
            <h2 className="text-lg font-semibold text-text">{t.stack}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className="rounded bg-surface-2 px-2.5 py-1.5 font-mono text-xs text-muted">{s}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooterI18n locale={locale} dict={dict} />
    </>
  );
}
