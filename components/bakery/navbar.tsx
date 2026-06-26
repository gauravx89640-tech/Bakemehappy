'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SunMark } from './decorations'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Order', href: '#order' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'inset-x-0 top-0 z-50 transition-colors duration-300',
        solid
          ? 'fixed bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80'
          : 'absolute bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        {/* Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <SunMark className="h-8 w-8 shrink-0" />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-heading text-xl font-bold tracking-tight md:text-2xl',
                solid ? 'text-foreground' : 'text-cream drop-shadow-md',
              )}
            >
              Bake Me Happy
            </span>
            <span
              className={cn(
                'font-script text-base leading-none',
                solid ? 'text-terracotta' : 'text-marigold drop-shadow',
              )}
            >
              panadería
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'group relative font-sans text-sm font-semibold transition-colors',
                  solid
                    ? 'text-foreground hover:text-terracotta'
                    : 'text-cream drop-shadow-md hover:text-marigold',
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#order"
            className="hidden rounded-full bg-terracotta px-5 py-2.5 font-sans text-sm font-bold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b14e30] hover:shadow-md md:inline-block"
          >
            Order Now
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex items-center justify-center rounded-md p-2 md:hidden',
              solid ? 'text-terracotta' : 'text-cream drop-shadow-md',
            )}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-sans text-base font-semibold text-foreground hover:text-terracotta"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <a
                href="#order"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-terracotta px-5 py-3 text-center font-sans text-sm font-bold text-primary-foreground"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
