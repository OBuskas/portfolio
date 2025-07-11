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
      <body className={`${inter.className} scrollbar-gutter-stable`}>{children}</body>
    </html>
  )
}
