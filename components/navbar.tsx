"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Enterprise AI", href: "#solutions" },
  { label: "Bingu AI Academy", href: "#ecosystem" },
  { label: "254 AI Hub", href: "#ecosystem" },
  { label: "Contact", href: "#footer" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Bingu Tech home">
          <Image
            src="/bingu-tech-logo.png"
            alt="Bingu Tech logo"
            width={52}
            height={70}
            className="h-7 w-auto"
            priority
          />
          <span className="text-sm font-semibold tracking-[0.2em] text-foreground">BINGU TECH</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@bingutech.co.ke"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book Technical Audit
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@bingutech.co.ke"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Book Technical Audit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}