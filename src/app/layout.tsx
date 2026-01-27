import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Carbide Network | Decentralized Storage Marketplace",
  description: "The decentralized storage network where you choose your replication, control your costs, and own your data. Save 60-80% compared to traditional cloud storage.",
  keywords: ["decentralized storage", "DePIN", "blockchain", "cloud storage", "Web3", "data privacy", "storage marketplace"],
  authors: [{ name: "Carbide Network" }],
  openGraph: {
    title: "Carbide Network | Decentralized Storage Marketplace",
    description: "Storage that you control. Save 60-80% compared to traditional cloud. Choose your replication (1-10 copies), earn by providing storage.",
    type: "website",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
