import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond, Inter, Manrope } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-subheading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-button",
  display: "swap",
})

export const metadata: Metadata = {
  title: "21Pooch | Luxury Pet Grooming for Dogs & Cats",
  description:
    "Premium pet grooming salon offering luxury spa experiences for dogs and cats. Certified groomers, organic products, and stress-free care in Beverly Hills.",
  keywords: [
    "pet grooming",
    "dog grooming",
    "cat grooming",
    "luxury pet spa",
    "pet salon",
    "Beverly Hills pet grooming",
  ],
  openGraph: {
    title: "21Pooch | Luxury Pet Grooming for Dogs & Cats",
    description:
      "Premium pet grooming salon offering luxury spa experiences for dogs and cats. Certified groomers, organic products, and stress-free care.",
    type: "website",
    locale: "en_US",
    siteName: "21Pooch",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-body text-accent-dark">
        {children}
      </body>
    </html>
  )
}
