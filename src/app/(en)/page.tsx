import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { getDictionary } from "@/lib/dictionaries";
import { absoluteUrl, alternatePaths } from "@/lib/i18n";
import { JsonLd, profilePageSchema } from "@/lib/jsonld";

const dict = getDictionary("en");
const alts = alternatePaths("/");

export const metadata: Metadata = {
  alternates: {
    canonical: absoluteUrl(alts.en),
    languages: { en: absoluteUrl(alts.en), "pt-BR": absoluteUrl(alts["pt-BR"]), "x-default": absoluteUrl(alts["x-default"]) },
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={profilePageSchema("en", dict.meta.homeDescription)} />
      <HomePage locale="en" dict={dict} />
    </>
  );
}
