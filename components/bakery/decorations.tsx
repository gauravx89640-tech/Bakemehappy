import { cn } from '@/lib/utils'

/**
 * Papel picado — a cut-paper bunting banner. Renders a repeating row of
 * scalloped pennants with decorative cut-outs, alternating colors.
 */
export function PapelPicado({
  className,
  flip = false,
}: {
  className?: string
  flip?: boolean
}) {
  // Two-color alternating pennants
  const colors = ['var(--terracotta)', 'var(--marigold)', 'var(--talavera)']
  const count = 24
  const w = 40
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none w-full overflow-hidden', className)}
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <svg
        viewBox={`0 0 ${count * w} 34`}
        width="100%"
        height="34"
        preserveAspectRatio="none"
        className="block"
      >
        {Array.from({ length: count }).map((_, i) => {
          const x = i * w
          const fill = colors[i % colors.length]
          return (
            <g key={i} fill={fill}>
              {/* Pennant: top bar + scalloped triangle */}
              <path d={`M${x} 0 H${x + w} V6 L${x + w / 2} 30 L${x} 6 Z`} />
              {/* decorative cut-outs */}
              <circle cx={x + w / 2} cy={11} r={2.4} fill="var(--mole)" />
              <circle cx={x + w / 2 - 7} cy={9} r={1.5} fill="var(--mole)" />
              <circle cx={x + w / 2 + 7} cy={9} r={1.5} fill="var(--mole)" />
              <circle cx={x + w / 2} cy={18} r={1.4} fill="var(--mole)" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}

/**
 * Talavera tile strip — a horizontal divider of repeating tile motifs.
 */
export function TalaveraStrip({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('w-full overflow-hidden', className)}
      style={{ height: 28 }}
    >
      <svg width="100%" height="28" className="block">
        <defs>
          <pattern
            id="talavera-tile"
            width="56"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <rect width="56" height="28" fill="var(--talavera)" />
            <rect
              x="1"
              y="1"
              width="54"
              height="26"
              fill="none"
              stroke="var(--marigold)"
              strokeWidth="1.5"
            />
            <path
              d="M28 4 L34 14 L28 24 L22 14 Z"
              fill="var(--marigold)"
              opacity="0.9"
            />
            <circle cx="28" cy="14" r="3" fill="var(--cream)" />
            <circle cx="6" cy="14" r="2.4" fill="var(--cream)" />
            <circle cx="50" cy="14" r="2.4" fill="var(--cream)" />
          </pattern>
        </defs>
        <rect width="100%" height="28" fill="url(#talavera-tile)" />
      </svg>
    </div>
  )
}

/** A small sun / pan-dulce style mark used near the wordmark. */
export function SunMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="none"
    >
      <circle cx="16" cy="16" r="7" fill="var(--marigold)" />
      <path
        d="M16 1v5M16 26v5M1 16h5M26 16h5M5 5l3.5 3.5M23.5 23.5L27 27M27 5l-3.5 3.5M8.5 23.5L5 27"
        stroke="var(--terracotta)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
