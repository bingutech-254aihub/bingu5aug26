"use client"

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Sovereign Brand Mark & Wordmark — Pure CSS/SVG (Never Breaks) */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Bingu Tech Home">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-xl tracking-tighter shadow-[0_0_15px_rgba(255,69,0,0.4)] transition-transform group-hover:scale-105">
            b
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-[0.25em] text-foreground font-sans">
              BINGU<span className="text-primary">TECH</span>
            </span>
            <span className="text-[9px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
              AI Consultancy &amp; Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@bingutech.co.ke"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-[#ff1a00] hover:shadow-[0_0_20px_rgba(255,69,0,0.6)] sm:inline-flex"
          >
            Book Technical Audit
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@bingutech.co.ke"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Book Technical Audit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}