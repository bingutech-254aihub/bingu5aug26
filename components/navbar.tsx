"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Send, CheckCircle2 } from "lucide-react"

const links = [
  { label: "Enterprise AI", href: "#solutions" },
  { label: "Bingu AI Academy", href: "#ecosystem" },
  { label: "254 AI Hub", href: "#ecosystem" },
  { label: "Contact", href: "#footer" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setModalOpen(false)
    }, 2500)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3 group" aria-label="Bingu Tech Home">
            <Image
              src="/bingu-tech-logo.png"
              alt="Bingu Tech Logo"
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

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

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-[#ff1a00] hover:shadow-[0_0_20px_rgba(255,69,0,0.6)] sm:inline-flex"
            >
              Book Technical Audit
            </button>
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
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  setModalOpen(true)
                }}
                className="mt-2 inline-flex justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Book Technical Audit
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spam-Protected Interactive Technical Audit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-md rounded-xl border border-border bg-card p-6 md:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary animate-bounce" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">Audit Request Received</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Our lead AI architect will review your parameters and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="text-left">
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">BINGU TECH CONSULTANCY</span>
                  <h3 className="mt-1 text-xl font-bold text-foreground">Request Enterprise Technical Audit</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Evaluate sovereign AI Swarms, private RAG, and edge compute for your organization.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 text-left">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Organization / SACCO / SME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Coast Teachers SACCO"
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@organization.co.ke"
                      className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">Primary Technical Need</label>
                    <select className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none">
                      <option>Autonomous Multi-Agent Swarms</option>
                      <option>Sovereign RAG &amp; Data Security</option>
                      <option>Edge AI &amp; Offline Hardware Deployment</option>
                      <option>Bingu AI Academy Corporate Training</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-[#ff1a00] hover:shadow-[0_0_20px_rgba(255,69,0,0.6)]"
                  >
                    Submit Audit Request
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}