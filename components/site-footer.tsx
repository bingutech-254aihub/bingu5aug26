const footerLinks = [
  { label: "Enterprise AI", href: "#solutions" },
  { label: "Bingu AI Academy", href: "#ecosystem" },
  { label: "254 AI Hub", href: "#ecosystem" },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            {/* Sovereign Brand Mark */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-lg shadow-[0_0_15px_rgba(255,69,0,0.4)]">
                b
              </div>
              <span className="text-base font-bold tracking-[0.25em] text-foreground">
                BINGU<span className="text-primary">TECH</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Bingu Tech ICT Consultancy &amp; Solution Providers. Sovereign AI Swarms, localized RAG pipelines, and edge compute engineered in Kenya since 1996.
            </p>
            <a
              href="mailto:hello@bingutech.co.ke"
              className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-[#ff1a00] hover:shadow-[0_0_20px_rgba(255,69,0,0.6)]"
            >
              Book Technical Audit
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">EXPLORE</p>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Bingu Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}