import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { CookieBanner } from "@/components/cookie-banner"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Letivo | Strategic Consulting for Growth & Innovation",
  description:
    "Letivo is a boutique consulting firm helping businesses unlock growth, improve operations, and drive sustainable success through expert strategy, analytics, and innovation.",
  keywords: "consulting, strategy, business growth, innovation, analytics, operational excellence, South Africa",
  authors: [{ name: "Letivo" }],
  creator: "Letivo",
  publisher: "Letivo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.letivo.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.letivo.co.za/",
    title: "Letivo | Strategic Consulting for Growth & Innovation",
    description:
      "Letivo empowers ambitious businesses and public sector organisations with tailored strategy, leadership, and operational consulting for long-term success.",
    siteName: "Letivo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Letivo - Strategic Consulting for Growth & Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letivo | Strategic Consulting for Growth & Innovation",
    description:
      "Unlock growth and drive innovation with Letivo's expert consulting services. We help organisations make smarter decisions and deliver real results.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", manrope.variable)}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
