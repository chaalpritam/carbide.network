import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Instrument_Sans } from "next/font/google"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
})

export const metadata: Metadata = {
  title: "Carbide Network | Decentralized Consumer Storage",
  description: "Redefine how you store your data. Encrypted, distributed, and priced by the market not a corporation. Save up to 80% on storage costs with Carbide.",
  keywords: ["decentralized storage", "solana", "depin", "web3", "usdc", "encryption", "privacy", "cloud storage", "carbide network"],
  openGraph: {
    locale: "en_US",
    siteName: "Carbide Network",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbide Network | Decentralized Storage Marketplace",
    description: "Storage that you control. Save 60-80% compared to traditional cloud.",
    creator: "@carbidenetwork",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className="font-sans antialiased text-black bg-white">
        {children}
      </body>
    </html>
  )
}
