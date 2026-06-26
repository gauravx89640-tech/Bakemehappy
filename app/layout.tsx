import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Mulish, Caveat } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})
const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin'],
  display: 'swap',
})
const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bake Me Happy | From-Scratch Bakery in Victorville, CA',
  description:
    'Bake Me Happy is a family-owned, made-to-order Mexican-American bakery in Victorville, CA. Organic, unbleached, real-ingredient churros, cinnamon rolls, dessert focaccias, cookies and cakes — baked fresh from scratch in the High Desert.',
  generator: 'v0.app',
  keywords: [
    'bakery Victorville',
    'Mexican bakery High Desert',
    'dessert focaccia',
    'churros',
    'cinnamon rolls',
    'made to order cakes',
    'organic bakery',
    'panaderia Victorville',
  ],
  openGraph: {
    title: 'Bake Me Happy | From-Scratch Bakery in Victorville, CA',
    description:
      'Organic, unbleached, made-to-order pastries — churros, cinnamon rolls, dessert focaccias and cakes in Victorville and the High Desert.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#3E2A1E',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${mulish.variable} ${caveat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
