import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteSettings } from "@/content";
import { buildMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: `${siteSettings.brandName} | Discover the River Coast`,
  description: siteSettings.description
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sand text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
