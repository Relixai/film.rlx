import type { MetadataRoute } from "next";
import { projects } from "./_data/projects";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://film.relix.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/work", "/services", "/process", "/studio", "/insights", "/contact"];
  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: `${baseUrl}/work/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
