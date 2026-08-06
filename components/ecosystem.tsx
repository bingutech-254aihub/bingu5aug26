import { GraduationCap, HeartHandshake, ExternalLink } from "lucide-react"

const boxes = [
  {
    icon: GraduationCap,
    label: "BINGU AI ACADEMY (COMMERCIAL ARM)",
    title: "Enterprise Systems Architecture & AI Workforce Upskilling.",
    description:
      "Operating as a specialized sub-brand of Bingu Tech, the Academy trains professional teams and developers in agentic system design, prompt orchestration, and secure RAG deployment.",
  },
  {
    icon: HeartHandshake,
    label: "254 AI HUB (PRO BONO COMMUNITY INITIATIVE)",
    title: "Grassroots AI Education & Youth Upskilling Platform.",
    description:
      "A community service initiative architected and supported by Bingu Tech to provide free daily AI upskilling, localized model blueprints, and hands-on guidance for youth across the Kenyan Coast.",
  },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.15em] text-primary">ECOSYSTEM &amp; COMMUNITY</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          A talent engine and education funnel for East Africa&apos;s AI future.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {boxes.map((box) => (
          <article
            key={box.label}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40 md:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity opacity-60 group-hover:opacity-100"
            />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                <box.icon className="h-6 w-6" />
              </div>
              <p className="mt-6 text-xs font-medium tracking-[0.15em] text-primary">{box.label}</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{box.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{box.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Synchronized glowing Ecosystem Leadership Callout */}
      <div className="group relative overflow-hidden mt-8 rounded-xl border border-border bg-card/50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors hover:border-primary/40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity opacity-60 group-hover:opacity-100"
        />
        <div className="relative">
          <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">ECOSYSTEM LEADERSHIP</span>
          <h4 className="text-lg font-semibold text-foreground mt-1">AI Tinkerers — Mombasa Chapter</h4>
          <p className="text-xs leading-relaxed text-muted-foreground mt-1 max-w-2xl">
            Bingu Tech Founder Muhammad Kasmani serves as the City Organizer for AI Tinkerers Mombasa — an independent, non-profit global technical network dedicated to code-only, live terminal executions with foundation models.
          </p>
        </div>
        <a
          href="https://mombasa.aitinkerers.org"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground shrink-0"
        >
          Visit Chapter Platform
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}