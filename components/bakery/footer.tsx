import { PapelPicado } from './decorations'
import { SunMark } from './decorations'

const QUICK_LINKS = [
  { label: 'Specialties', href: '#specialties' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Order', href: '#order' },
]

export function Footer() {
  return (
    <footer className="relative bg-mole text-cream">
      <PapelPicado className="absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-10 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <SunMark className="h-8 w-8" />
              <span className="font-heading text-2xl font-bold text-cream">
                Bake Me Happy
              </span>
            </div>
            <p className="mt-3 font-script text-xl text-marigold">
              hecho con amor en Victorville
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-marigold">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-cream/80 transition-colors hover:text-marigold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-marigold">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 font-sans text-sm text-cream/80">
              <li>
                <a
                  href="tel:7609987039"
                  className="transition-colors hover:text-marigold"
                >
                  760-998-7039
                </a>
              </li>
              <li>
                <a
                  href="mailto:Quedulce@yahoo.com"
                  className="transition-colors hover:text-marigold"
                >
                  Quedulce@yahoo.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61557775020667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-marigold"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Note */}
          <div>
            <h3 className="font-sans text-sm font-bold uppercase tracking-wide text-marigold">
              From Scratch
            </h3>
            <p className="mt-4 text-pretty font-sans text-sm leading-relaxed text-cream/80">
              Made with organic, unbleached, real ingredients — baked fresh to
              order in the High Desert.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="font-sans text-xs text-cream/70">
            © 2026 Bake Me Happy · Victorville, CA
          </p>
          <p className="font-sans text-xs text-cream/70">
            Designed by{' '}
            <a
              href="https://forgestudio.one"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-terracotta transition-colors hover:text-marigold"
            >
              Forge Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
