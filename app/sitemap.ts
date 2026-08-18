import type { MetadataRoute } from "next";
import { projects } from "./_data/projects";

const baseUrl = "https://relix-ai-video-studio.xalebf.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/work", "/services", "/studio", "/contact"];
  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: `${baseUrl}/work/${project.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
