import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://relix-ai-video-studio.xalebf.chatgpt.site/sitemap.xml" };
}
