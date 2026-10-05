import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "./data";


const title = "Nwadiaro Miracle Chukwuma | AI/ML Engineer";
const description =
  "I build AI agents, RAG systems, voice agents and computer vision models, with checks in code where a prompt is not enough.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: "Ciphez", title, description, locale: "en_NG", images: [{ url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/og.png`, width: 1200, height: 630, alt: "Nwadiaro Miracle Chukwuma, AI/ML Engineer", type: "image/png" }] },
  twitter: { card: "summary_large_image", title, description, images: [`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/og.png`] },
};

export const viewport: Viewport = { themeColor: "#000000", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans text-white antialiased">{children}</body>
    </html>
  );
}
