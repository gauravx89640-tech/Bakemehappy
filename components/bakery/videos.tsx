import { Reveal } from './reveal'
import { TalaveraStrip } from './decorations'

const VIDEOS = [
  { src: '/images/freshlybakedbread.mp4', label: 'Fresh-Baked Bread' },
  { src: '/images/conchas.mp4', label: 'Conchas' },
  { src: '/images/maplebaconcupcake.mp4', label: 'Maple Bacon Cupcakes' },
  { src: '/images/fresh-baked-loafs.mp4', label: 'Fresh Loaves' },
  { src: '/images/catering-winnie.mp4', label: 'Custom Catering' },
]

export function Videos() {
  return (
    <section id="specialties" className="relative bg-mole">
      <TalaveraStrip />
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-marigold">
            Straight From the Kitchen
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-cream md:text-5xl">
            Watch us <span className="italic text-marigold">bake.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty font-sans leading-relaxed text-cream/80">
            Real bakes, filmed fresh in our kitchen — from sourdough and conchas to
            Mexican sweets and custom treats.
          </p>
        </Reveal>

        <div className="mt-14 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:justify-center md:flex-wrap md:overflow-visible">
          {VIDEOS.map((v, i) => (
            <Reveal
              key={v.src}
              as="article"
              delay={i * 80}
              className="group relative w-56 shrink-0 snap-center overflow-hidden rounded-2xl bg-card shadow-md ring-1 ring-white/10"
            >
              <div className="relative aspect-[9/16]">
                <video
                  src={v.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="font-sans text-sm font-semibold text-white">
                    {v.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="https://instagram.com/bakemehappypastries"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans font-bold text-marigold transition-colors hover:text-terracotta"
          >
            Follow @bakemehappypastries on Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
