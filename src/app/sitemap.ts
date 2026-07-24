import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { cityRouteSlug, rawCities } from "./cities/data";
import { authors } from "../data/authors";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const baseUrls: MetadataRoute.Sitemap = [
    // Russian Main Pages
    {
      url: `${SITE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contacts`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog/beginners`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/intermediate`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/professional`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/cities`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/authors`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/risk-disclosure`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // English Main Pages
    {
      url: `${SITE_URL}/en`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/en/portfolio`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/en/partners`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/en/contacts`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/en/blog`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/en/blog/beginners`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/blog/intermediate`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/blog/professional`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/en/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/authors`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/en/risk-disclosure`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/en/cities`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const citiesUrlsRu: MetadataRoute.Sitemap = rawCities.map((city) => ({
    url: `${SITE_URL}/cities/${cityRouteSlug(city)}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.55,
  }));

  const citiesUrlsEn: MetadataRoute.Sitemap = rawCities.map((city) => ({
    url: `${SITE_URL}/en/cities/${cityRouteSlug(city)}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.55,
  }));

  const articlesPath = path.join(process.cwd(), "src/data/articles.json");
  const articlesData = JSON.parse(
    fs.readFileSync(articlesPath, "utf8"),
  ) as Array<{ slug: string }>;

  const articleUrlsRu: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const articleUrlsEn: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${SITE_URL}/en/blog/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const authorUrlsRu: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${SITE_URL}/authors/${author.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const authorUrlsEn: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${SITE_URL}/en/authors/${author.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...baseUrls, ...citiesUrlsRu, ...citiesUrlsEn, ...articleUrlsRu, ...articleUrlsEn, ...authorUrlsRu, ...authorUrlsEn];
}

