import Image from 'next/image'
import { PapelPicado } from './decorations'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/images/hero-pan-dulce.png"
        alt="A warm spread of fresh-baked Mexican-American pan dulce, churros and cinnamon rolls"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Brown scrim, darker on the left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(62,42,30,0.88) 0%, rgba(62,42,30,0.66) 38%, rgba(62,42,30,0.30) 100%)',
        }}
      />

      {/* Papel picado across the very top */}
      <PapelPicado className="absolute inset-x-0 top-0 z-10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-20 md:px-8">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-marigold md:text-sm">
            Victorville, CA · From Scratch · Made to Order
          </p>
          <h1 className="mt-4 text-balance font-heading text-5xl font-bold leading-[1.02] text-cream md:text-7xl">
            Baked from scratch,
            <br />
            made with{' '}
            <span className="font-script text-marigold [font-weight:400]">
              amor.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty font-sans text-base leading-relaxed text-cream/90 md:text-lg">
            Organic, unbleached, real-ingredient pastries — churros, cinnamon
            rolls, our famous dessert focaccias, cakes and more, all made fresh
            to order. Come taste the difference.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#order"
              className="rounded-full bg-terracotta px-7 py-3.5 font-sans text-sm font-bold text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b14e30]"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="rounded-full border-2 border-cream/80 px-7 py-3.5 font-sans text-sm font-bold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-cream hover:text-mole"
            >
              See the Menu
            </a>
          </div>

          <p className="mt-7 font-sans text-sm text-cream/80">
            Organic &amp; unbleached · Made fresh to order · Family-owned in the
            High Desert
          </p>
        </div>
      </div>
    </section>
  )
}
