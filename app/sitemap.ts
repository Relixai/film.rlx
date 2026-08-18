import type { MetadataRoute } from "next";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://relix.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/process", "/studio", "/insights", "/contact"];
  return staticPages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));
}
