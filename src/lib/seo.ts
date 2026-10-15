import type { Metadata } from "next";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function pageMetadata({ title, description, path, absoluteTitle }: PageMeta): Metadata {
  const url = `${getSiteUrl()}${path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
