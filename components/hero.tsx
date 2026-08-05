import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Subtle grid + glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-[0.15em] text-primary">
          EST. 1996 — PIONEERING KENYA&apos;S DIGITAL &amp; AI LEAP
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
          From the Foundation of Code to the Future of{" "}
          <span className="text-primary">Autonomous Action.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          We design and deploy sovereign, self-hosted AI Swarms, localized RAG pipelines, and enterprise automation
          networks for regional SACCOs, SMEs, and corporates.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#solutions"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Explore Solutions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#footer"
            className="inline-flex w-full items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 sm:w-auto"
          >
            Talk to an Architect
          </a>
        </div>
      </div>
    </section>
  )
}
