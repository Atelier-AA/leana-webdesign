import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.business.url.replace(/\/$/, "");
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/leistungen`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ueber-mich`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/projekte`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = siteConfig.projects.items.map((item) => ({
    url: `${baseUrl}/projekte/${item.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes];
}
