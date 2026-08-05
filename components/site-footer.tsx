import Image from "next/image"

const footerLinks = [
  { label: "Enterprise AI", href: "#solutions" },
  { label: "Bingu AI Academy", href: "#ecosystem" },
  { label: "254 AI Hub", href: "#ecosystem" },
  { label: "AI Tinkerers", href: "#ecosystem" },
]

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/bingu-tech-logo.png"
                alt="Bingu Tech logo"
                width={22}
                height={40}
                className="h-7 w-auto"
              />
              <span className="text-sm font-semibold tracking-[0.2em] text-foreground">BINGU TECH</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Bingu Tech ICT Consultancy &amp; Solution Providers. Sovereign AI, automation, and edge compute
              engineered in Kenya since 1996.
            </p>
            <a
              href="mailto:hello@bingutech.co.ke"
              className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book Technical Audit
            </a>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground">EXPLORE</p>
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
