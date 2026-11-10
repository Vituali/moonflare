import type { MetadataRoute } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { absoluteUrl, projectPath, homePath } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const slugs = getDictionary("en").projects.map((p) => p.slug);
  const entries: MetadataRoute.Sitemap = [];

  const homeAlts = { languages: { en: absoluteUrl(homePath("en")), "pt-BR": absoluteUrl(homePath("pt")) } };
  entries.push({ url: absoluteUrl(homePath("en")), lastModified: now, changeFrequency: "monthly", priority: 1, alternates: homeAlts });
  entries.push({ url: absoluteUrl(homePath("pt")), lastModified: now, changeFrequency: "monthly", priority: 0.9, alternates: homeAlts });

  for (const slug of slugs) {
    const alts = { languages: { en: absoluteUrl(projectPath("en", slug)), "pt-BR": absoluteUrl(projectPath("pt", slug)) } };
    entries.push({ url: absoluteUrl(projectPath("en", slug)), lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: alts });
    entries.push({ url: absoluteUrl(projectPath("pt", slug)), lastModified: now, changeFrequency: "monthly", priority: 0.8, alternates: alts });
  }

  return entries;
}
