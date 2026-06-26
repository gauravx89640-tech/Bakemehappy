import { Reveal } from './reveal'
import { TalaveraStrip } from './decorations'

const FAVORITES = [
  ['13R Baker’s Dozen Cookies', '$20'],
  ['13 XL Baker’s Dozen B.B. Cookies', '$40'],
  ['Dozen Gourmet Cupcakes', '$40'],
  ['Dozen XL Danishes', '$40'],
  ['Focaccia Flight (4 piece)', '$12'],
  ['XL Focaccia 8×8 Square', '$20'],
  ['Halfsies (2 items / 6 piece each)', '$40'],
  ['XL Family-Size Pastry Box (3–4 items)', '$80'],
  ['8-inch Gourmet Cake', '$80'],
  ['Loaded Brownies', '$40'],
  ['Fruit Cobbler', '$40'],
  ['Banana Bread Loaf', '$15'],
  ['Keto Cupcakes', '$40'],
]

const CINNAMON = [
  ['Cinnamon Roll 6XL', '$30'],
  ['30 pc. Mini Churro Box', '$30'],
  ['Cinnamon Roll Focaccia', '$20'],
  ['Pineapple Upside-Down Focaccia', '$20'],
  ['Peach Cobbler Focaccia', '$25'],
  ['Apple Fritter Focaccia', '$25'],
  ['Buñuelo Chips (Family Size)', '$15'],
  ['Snickerdoodle Cookies (Dozen)', '$20'],
  ['Cinnamon Swirl Cupcakes', '$40'],
  ['Ground Café de Olla Blend', '$12'],
]

function MenuList({
  heading,
  items,
}: {
  heading: string
  items: string[][]
}) {
  return (
    <div>
      <h3 className="font-heading text-2xl font-bold text-foreground">
        {heading}
      </h3>
      <ul className="mt-6 flex flex-col gap-3.5">
        {items.map(([name, price]) => (
          <li key={name} className="flex items-end gap-2">
            <span className="font-sans text-[15px] leading-snug text-foreground">
              {name}
            </span>
            <span
              aria-hidden="true"
              className="mb-1 min-w-6 flex-1 border-b-2 border-dotted border-border"
            />
            <span className="font-sans font-bold text-terracotta">{price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Menu() {
  return (
    <section id="menu" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-terracotta">
            The Menu
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-foreground md:text-5xl">
            Made Fresh,{' '}
            <span className="italic text-terracotta">Just for You.</span>
          </h2>
          <p className="mt-4 font-sans leading-relaxed text-muted-foreground">
            Made to order — please allow time. Call, message, or email to place
            an order.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <MenuList heading="Bakery Favorites" items={FAVORITES} />
          </Reveal>
          <Reveal delay={120}>
            <MenuList heading="Cinnamon Lovers 🌀" items={CINNAMON} />
          </Reveal>
        </div>

        <TalaveraStrip className="mt-16 rounded-full" />
      </div>
    </section>
  )
}
