import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas Barbosa - Front-end Developer Portfolio",
  description:
    "Passionate front-end developer specializing in React, TypeScript, and modern web technologies. View my projects, experience, and get in touch.",
  keywords: "front-end developer, react, typescript, next.js, web development, portfolio",
  authors: [{ name: "Lucas Barbosa" }],
  creator: "Lucas Barbosa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucasbarbosa.dev",
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
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#020617" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#020617" />
      <body className={`${inter.className} scrollbar-gutter-stable`}>{children}</body>
    </html>
  )
}
