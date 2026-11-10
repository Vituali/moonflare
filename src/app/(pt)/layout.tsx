import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { site } from "@/lib/content";
import { getDictionary } from "@/lib/dictionaries";
import { absoluteUrl, alternatePaths } from "@/lib/i18n";
import { JsonLd, personSchema, websiteSchema } from "@/lib/jsonld";

const sans = IBM_Plex_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

const dict = getDictionary("pt");
const alts = alternatePaths("/");

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: dict.meta.homeTitle, template: `%s — ${site.name}` },
  description: dict.meta.homeDescription,
  alternates: {
    canonical: absoluteUrl(alts["pt-BR"]),
    languages: { en: absoluteUrl(alts.en), "pt-BR": absoluteUrl(alts["pt-BR"]), "x-default": absoluteUrl(alts["x-default"]) },
  },
  openGraph: {
    type: "website",
    url: absoluteUrl(alts["pt-BR"]),
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    siteName: site.name,
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    images: [{ url: absoluteUrl("/og.svg"), width: 1200, height: 630, alt: "Moonflare Development" }],
  },
  twitter: { card: "summary_large_image", title: dict.meta.homeTitle, description: dict.meta.homeDescription, images: [absoluteUrl("/og.svg")] },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#0A0A0C", colorScheme: "dark" };

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-bg text-text antialiased">
        <JsonLd data={[personSchema(), websiteSchema("pt")]} />
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-4 focus:py-2 focus:text-text">
          {dict.ui.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
