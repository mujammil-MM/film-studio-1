import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CineForge Studios | We Create New Milestones",
  description: "CineForge Studios — a premier film production company crafting cinematic stories that inspire, transform, and captivate audiences worldwide.",
  keywords: "film production, cinema, media, TV shows, web series, advertising, content creation",
  openGraph: {
    title: "CineForge Studios | We Create New Milestones",
    description: "Premier film production company crafting cinematic stories.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
