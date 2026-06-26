import Image from 'next/image'
import { Reveal } from './reveal'
import { TalaveraStrip } from './decorations'

const FOCACCIAS = [
  {
    name: 'Cinnamon Roll Focaccia',
    price: '$20',
    img: '/images/focaccia-cinnamon-roll.png',
    alt: 'Golden dessert focaccia topped with cinnamon swirls and icing',
  },
  {
    name: 'Peach Cobbler Focaccia',
    price: '$25',
    img: '/images/focaccia-peach-cobbler.png',
    alt: 'Golden dessert focaccia topped with peaches and cobbler crumble',
  },
  {
    name: 'Apple Fritter Focaccia',
    price: '$25',
    img: '/images/focaccia-apple-fritter.png',
    alt: 'Golden dessert focaccia topped with cinnamon apples and glaze',
  },
  {
    name: 'Pineapple Upside-Down Focaccia',
    price: '$20',
    img: '/images/focaccia-pineapple.png',
    alt: 'Golden dessert focaccia topped with caramelized pineapple and cherries',
  },
]

export function Focaccias() {
  return (
    <section id="specialties" className="relative bg-mole">
      <TalaveraStrip />
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-marigold">
            Our Signature
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-cream md:text-5xl">
            The Famous{' '}
            <span className="italic text-marigold">Dessert Focaccias.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty font-sans leading-relaxed text-cream/80">
            You won&apos;t find these anywhere else — pillowy, golden dessert
            focaccias baked to order in bold flavors.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FOCACCIAS.map((f, i) => (
            <Reveal
              key={f.name}
              as="article"
              delay={i * 100}
              className="group overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-white/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={f.img || '/placeholder.svg'}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <h3 className="font-heading text-lg font-bold leading-snug text-card-foreground">
                  {f.name}
                </h3>
                <span className="shrink-0 rounded-full bg-terracotta px-3 py-1 font-sans text-sm font-bold text-primary-foreground">
                  {f.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="font-sans text-cream/90">
            Try the{' '}
            <span className="font-semibold text-marigold">
              Focaccia Flight (4 piece) — $12
            </span>
            , or go big with an{' '}
            <span className="font-semibold text-marigold">
              XL 8×8 Square — $20.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
