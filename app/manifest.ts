import type { MetadataRoute } from "next";
import { siteCopy } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  const site = siteCopy("en");
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0064ab",
    lang: "en",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

