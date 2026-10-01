import type { MetadataRoute } from "next";

// Uses NEXT_PUBLIC_SITE_URL env var (set in Vercel dashboard) → falls back to
// VERCEL_URL (auto-set by Vercel on every deployment) → local fallback
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
