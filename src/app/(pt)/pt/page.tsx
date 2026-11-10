import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { getDictionary } from "@/lib/dictionaries";
import { absoluteUrl, alternatePaths } from "@/lib/i18n";
import { JsonLd, profilePageSchema } from "@/lib/jsonld";

const dict = getDictionary("pt");
const alts = alternatePaths("/");

export const metadata: Metadata = {
  alternates: {
    canonical: absoluteUrl(alts["pt-BR"]),
    languages: { en: absoluteUrl(alts.en), "pt-BR": absoluteUrl(alts["pt-BR"]), "x-default": absoluteUrl(alts["x-default"]) },
  },
};

export default function HomePt() {
  return (
    <>
      <JsonLd data={profilePageSchema("pt", dict.meta.homeDescription)} />
      <HomePage locale="pt" dict={dict} />
    </>
  );
}
