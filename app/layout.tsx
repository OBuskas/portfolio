import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Developer - Full Stack Developer Portfolio",
  description:
    "Passionate full stack developer specializing in React, TypeScript, and modern web technologies. View my projects, experience, and get in touch.",
  keywords: "full stack developer, react, typescript, next.js, web development, portfolio",
  authors: [{ name: "John Developer" }],
  creator: "John Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndeveloper.dev",
    title: "John Developer - Full Stack Developer Portfolio",
    description: "Passionate full stack developer specializing in React, TypeScript, and modern web technologies.",
    siteName: "John Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Developer - Full Stack Developer Portfolio",
    description: "Passionate full stack developer specializing in React, TypeScript, and modern web technologies.",
    creator: "@johndeveloper",
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
