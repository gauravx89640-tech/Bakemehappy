import { Leaf, Clock, Heart } from 'lucide-react'
import { Reveal } from './reveal'

const ITEMS = [
  {
    icon: Leaf,
    title: 'Organic & Unbleached',
    text: 'Real, clean ingredients in everything we bake — no shortcuts.',
  },
  {
    icon: Clock,
    title: 'Made to Order',
    text: 'Baked fresh when you order, never sitting on a shelf.',
  },
  {
    icon: Heart,
    title: 'From Scratch, With Amor',
    text: 'Family recipes and a whole lot of heart in every batch.',
  },
]

export function Promise() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
            Our Promise
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-foreground md:text-5xl">
            Real ingredients,{' '}
            <span className="italic text-terracotta">real flavor.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 120}
              className="flex flex-col items-center text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-terracotta ring-1 ring-border">
                <item.icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 max-w-xs text-pretty font-sans leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
