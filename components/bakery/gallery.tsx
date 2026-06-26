import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

const PHOTOS = [
  { src: '/images/g-cupcakes.jpg', alt: 'Gourmet cupcakes piled high with buttercream' },
  { src: '/images/bigbatchcookies.jpg', alt: 'Trays of fresh-baked gourmet cookies' },
  { src: '/images/g-coldbrew.jpg', alt: 'House cold brew with fresh chocolate-chip cookies' },
  { src: '/images/g-cinnamon-bites.jpg', alt: 'Family-size cinnamon churro cheesecake bites' },
  { src: '/images/g-cookies-cupcakes.jpg', alt: 'A box of assorted cookies and cupcakes' },
  { src: '/images/pumpkinpecanbreadbudding.jpg', alt: 'Pumpkin pecan bread pudding' },
  { src: '/images/g-garlic-parmesan.jpg', alt: 'Garlic parmesan sourdough loaf' },
  { src: '/images/sourdoughloaf.jpg', alt: 'A golden artisan sourdough loaf' },
  { src: '/images/g-blueberry-lemon.jpg', alt: 'Blueberry lemon sourdough loaf' },
  { src: '/images/g-branded-box.jpg', alt: 'A signature Bake Me Happy pastry box' },
  { src: '/images/g-treatbox.jpg', alt: 'An assorted box of cookies and treats' },
  { src: '/images/whitechocolatesourdough.jpg', alt: 'White chocolate sourdough loaf' },
]

export function Gallery() {
  return (
    <section className="bg-background pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
            From Our Kitchen
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground md:text-5xl">
            Freshly <span className="italic text-terracotta">Baked.</span>
          </h2>
          <span className="mx-auto mt-3 block h-1 w-20 rounded-full bg-marigold" />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {PHOTOS.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 100}
              className="group overflow-hidden rounded-2xl shadow-sm ring-1 ring-border"
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.src || '/placeholder.svg'}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="https://www.facebook.com/profile.php?id=61557775020667"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans font-bold text-talavera transition-colors hover:text-terracotta"
          >
            See more on Facebook
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
