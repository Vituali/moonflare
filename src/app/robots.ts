import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://moonflare.com.br/sitemap.xml",
    host: "https://moonflare.com.br",
  };
}
