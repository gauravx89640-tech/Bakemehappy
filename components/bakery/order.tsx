'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MessageCircle, Check } from 'lucide-react'
import { PapelPicado } from './decorations'

const CONTACTS = [
  {
    icon: Phone,
    label: 'Call or text',
    value: '760-998-7039',
    href: 'tel:7609987039',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'Quedulce@yahoo.com',
    href: 'mailto:Quedulce@yahoo.com',
  },
  {
    icon: MessageCircle,
    label: 'Message us',
    value: 'on Facebook',
    href: 'https://www.facebook.com/profile.php?id=61557775020667',
  },
]

export function Order() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="order" className="relative bg-mole">
      <PapelPicado className="absolute inset-x-0 top-0 z-10" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-24 pb-20 md:grid-cols-2 md:gap-16 md:px-8 md:pt-28 md:pb-28">
        {/* Left: intro + contact methods */}
        <div>
          <p className="font-sans text-xs font-bold uppercase tracking-[0.22em] text-marigold">
            Place an Order
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-cream md:text-5xl">
            Let&apos;s get{' '}
            <span className="italic text-marigold">baking.</span>
          </h2>
          <p className="mt-4 max-w-md text-pretty font-sans leading-relaxed text-cream/80">
            Since everything is made to order, the fastest way to start is to
            reach out directly. We&apos;d love to hear what you&apos;re craving.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {CONTACTS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    c.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-terracotta text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-sans text-xs uppercase tracking-wide text-cream/60">
                      {c.label}
                    </span>
                    <span className="font-sans text-lg font-bold text-cream">
                      {c.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: inquiry form */}
        <div className="rounded-3xl bg-card p-6 shadow-xl md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-primary-foreground">
                <Check className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-bold text-card-foreground">
                Order request sent!
              </h3>
              <p className="mt-2 max-w-sm font-sans leading-relaxed text-muted-foreground">
                Thank you — we&apos;ll confirm your order and pickup details
                soon. Made fresh, just for you.
              </p>
              <p className="mt-4 font-script text-2xl text-terracotta">
                ¡buen provecho!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field id="name" label="Name" type="text" autoComplete="name" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  id="phone"
                  label="Phone"
                  type="tel"
                  autoComplete="tel"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="order"
                  className="font-sans text-sm font-semibold text-card-foreground"
                >
                  What would you like to order?
                </label>
                <textarea
                  id="order"
                  name="order"
                  rows={4}
                  required
                  className="rounded-xl border border-input bg-background px-3.5 py-2.5 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
                  placeholder="e.g. 1 Peach Cobbler Focaccia + a dozen snickerdoodles"
                />
              </div>
              <Field
                id="pickup"
                label="Preferred pickup date"
                type="date"
              />
              <button
                type="submit"
                className="mt-2 rounded-full bg-terracotta px-6 py-3.5 font-sans text-sm font-bold text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b14e30]"
              >
                Send My Order Request
              </button>
              <p className="text-center font-sans text-xs leading-relaxed text-muted-foreground">
                We&apos;ll confirm your order and pickup details — made fresh,
                just for you.
              </p>
            </form>
          )}
        </div>
      </div>

      <p className="pb-10 text-center font-sans text-sm text-cream/70">
        Made to order · Victorville, CA &amp; the High Desert
      </p>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  autoComplete,
}: {
  id: string
  label: string
  type: string
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-sans text-sm font-semibold text-card-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        className="rounded-xl border border-input bg-background px-3.5 py-2.5 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-terracotta focus:ring-2 focus:ring-terracotta/30"
      />
    </div>
  )
}
