import type { Metadata } from "next"
import "@fontsource-variable/inter"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Decree Ltd - Water, Power & Tank Solutions",
  description: "Complete water drilling, power installation, tank construction, and solar pump services. From ground to grid - reliable solutions for residential, commercial, and industrial projects.",
  keywords: ["water drilling", "boreholes", "power installation", "tank construction", "solar pumps", "water services"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
