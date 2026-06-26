import { AnnouncementBar } from '@/components/bakery/announcement-bar'
import { Navbar } from '@/components/bakery/navbar'
import { Hero } from '@/components/bakery/hero'
import { Promise as PromiseSection } from '@/components/bakery/promise'
import { Videos } from '@/components/bakery/videos'
import { Menu } from '@/components/bakery/menu'
import { Gallery } from '@/components/bakery/gallery'
import { About } from '@/components/bakery/about'
import { Order } from '@/components/bakery/order'
import { Footer } from '@/components/bakery/footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Bake Me Happy',
  description:
    'Family-owned, made-to-order Mexican-American bakery in Victorville, CA. Organic, unbleached, real-ingredient churros, cinnamon rolls, dessert focaccias, cookies and cakes — baked fresh from scratch.',
  telephone: '+1-760-998-7039',
  email: 'Quedulce@yahoo.com',
  servesCuisine: ['Mexican', 'American', 'Bakery', 'Desserts'],
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Victorville',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: 'High Desert, Victorville, CA',
  sameAs: ['https://www.facebook.com/profile.php?id=61557775020667'],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnouncementBar />
      <main>
        <div className="relative">
          <Navbar />
          <Hero />
        </div>
        <PromiseSection />
        <Videos />
        <Menu />
        <Gallery />
        <About />
        <Order />
      </main>
      <Footer />
    </>
  )
}
