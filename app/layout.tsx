import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteUrl } from "@/lib/site"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas Barbosa - Front-end Developer Portfolio",
  description:
    "Passionate front-end developer specializing in React, TypeScript, and modern web technologies. View my projects, experience, and get in touch.",
  keywords: "front-end developer, react, typescript, next.js, web development, portfolio",
  authors: [{ name: "Lucas Barbosa" }],
  creator: "Lucas Barbosa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Lucas Barbosa - Front-end Developer Portfolio",
    description: "Passionate front-end developer specializing in React, TypeScript, and modern web technologies.",
    siteName: "Lucas Barbosa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Barbosa - Front-end Developer Portfolio",
    description: "Passionate front-end developer specializing in React, TypeScript, and modern web technologies.",
    creator: "@lucasbarbosa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": "#020617",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "theme-color": "#020617",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} scrollbar-gutter-stable`}>{children}</body>
    </html>
  )
}
