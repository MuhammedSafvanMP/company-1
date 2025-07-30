import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mishaj Advertising Agency - Premium Signage Solutions",
  description:
    "Leading advertising agency in the Middle East specializing in neon lights, LED solutions, steel boards, glass engraving, and premium printing services.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Footer />
      </body>
    </html>
  )
}
