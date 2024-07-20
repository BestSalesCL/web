import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy", "/terms-and-conditions"],
    },
    sitemap: "https://thebestsales.co/sitemap.xml",
  };
}
