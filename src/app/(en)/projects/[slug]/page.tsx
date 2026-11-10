import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPageContent } from "@/components/project-page";
import { getDictionary } from "@/lib/dictionaries";
import { absoluteUrl, alternatePaths, projectPath } from "@/lib/i18n";
import { JsonLd, projectSchema } from "@/lib/jsonld";

type Props = { params: Promise<{ slug: string }> };
const dict = getDictionary("en");

export function generateStaticParams() {
  return dict.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = dict.projects.find((p) => p.slug === slug);
  if (!project) return {};
  const path = projectPath("en", slug);
  const alts = alternatePaths(`/projects/${slug}/`);
  const url = absoluteUrl(path);
  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: url,
      languages: { en: absoluteUrl(alts.en), "pt-BR": absoluteUrl(alts["pt-BR"]), "x-default": absoluteUrl(alts["x-default"]) },
    },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.summary,
      siteName: "Moonflare Development",
      locale: "en_US",
      alternateLocale: ["pt_BR"],
      images: [{ url: absoluteUrl("/og.svg"), width: 1200, height: 630, alt: "Moonflare Development" }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.summary, images: [absoluteUrl("/og.svg")] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = dict.projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <>
      <JsonLd data={projectSchema("en", project)} />
      <ProjectPageContent locale="en" dict={dict} project={project} />
    </>
  );
}
