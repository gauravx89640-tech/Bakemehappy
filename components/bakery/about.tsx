import Image from 'next/image'
import { Reveal } from './reveal'
import { TalaveraStrip } from './decorations'

export function About() {
  return (
    <section id="about" className="relative bg-accent">
      <TalaveraStrip />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-14 md:px-8 md:py-28">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg ring-1 ring-border">
            <Image
              src="/images/about-real.jpg"
              alt="The baker behind Bake Me Happy with a full spread of from-scratch pastries"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
            Our Story
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-foreground md:text-5xl">
            Baked with heart{' '}
            <span className="italic text-terracotta">in the High Desert.</span>
          </h2>
          <p className="mt-6 text-pretty font-sans leading-relaxed text-foreground/80">
            We&apos;re a family bakery in Victorville baking everything from
            scratch with organic, unbleached, real ingredients. Our roots are in
            Mexican flavors — churros, buñuelos, café de olla and warm canela —
            with a modern twist all our own, like our famous dessert focaccias.
            Every single order is baked fresh, just for you, and sent off with a
            whole lot of love.
          </p>
          <p className="mt-6 font-script text-3xl text-terracotta">
            hecho con amor
          </p>
        </Reveal>
      </div>
    </section>
  )
}
