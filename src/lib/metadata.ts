import type { Metadata } from "next";

import { siteSettings } from "@/content";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = siteSettings.defaultOgImage
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteSettings.metadataBase).toString();

  return {
    title,
    description,
    metadataBase: new URL(siteSettings.metadataBase),
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteSettings.brandName,
      images: [
        {
          url: image,
          width: 1600,
          height: 900,
          alt: title
        }
      ],
      locale: "en_AU",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
