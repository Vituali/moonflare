import { site } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl, homePath, projectPath } from "@/lib/i18n";
import type { Project } from "@/lib/dictionaries";

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
    </>
  );
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Victor Henrique",
    jobTitle: "IT Solutions Analyst",
    worksFor: { "@type": "Organization", name: "ATI Internet" },
    url: absoluteUrl("/"),
    sameAs: [site.github, site.linkedin],
    address: { "@type": "PostalAddress", addressLocality: "Teresópolis", addressRegion: "RJ", addressCountry: "BR" },
    knowsAbout: ["Software Engineering", "Systems Architecture", "Networking", "Infrastructure", "Automation", "Mechatronics"],
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl(homePath(locale)),
    inLanguage: locale === "en" ? "en" : "pt-BR",
    author: { "@type": "Person", name: "Victor Henrique" },
  };
}

export function profilePageSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: locale === "en" ? "Victor Henrique — Engineering Portfolio" : "Victor Henrique — Portfólio de Engenharia",
    url: absoluteUrl(homePath(locale)),
    inLanguage: locale === "en" ? "en" : "pt-BR",
    mainEntity: { "@type": "Person", name: "Victor Henrique", url: absoluteUrl(homePath(locale)) },
    description,
  };
}

export function projectSchema(locale: Locale, project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(projectPath(locale, project.slug)),
    inLanguage: locale === "en" ? "en" : "pt-BR",
    author: { "@type": "Person", name: "Victor Henrique" },
    keywords: project.stack.join(", "),
  };
}
