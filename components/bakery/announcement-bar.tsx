import { PapelPicado } from './decorations'

export function AnnouncementBar() {
  return (
    <div className="relative bg-mole">
      <p className="mx-auto max-w-7xl px-5 py-2.5 text-center font-sans text-xs font-medium tracking-wide text-cream md:text-sm">
        Hecho a mano{' '}
        <span className="text-marigold" aria-hidden="true">
          ·
        </span>{' '}
        Organic, unbleached, real ingredients{' '}
        <span className="text-marigold" aria-hidden="true">
          ·
        </span>{' '}
        Made to order in Victorville, CA
      </p>
      <PapelPicado className="absolute inset-x-0 top-full -mt-px" />
    </div>
  )
}
