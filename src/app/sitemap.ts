import type { MetadataRoute } from "next";

const BASE_URL = "https://arpanshah.vercel.app"; // 🔁 Update to your actual domain

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
