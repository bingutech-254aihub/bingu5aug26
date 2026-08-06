import { GraduationCap, Code2, ArrowUpRight } from "lucide-react"

const boxes = [
  {
    icon: GraduationCap,
    label: "BINGU AI ACADEMY",
    title: "Bridging Enterprise Systems with Advanced AI Execution.",
    description:
      "Upskilling professional teams and developers in agentic system architecture — from prompt orchestration to production-grade autonomous pipelines.",
  },
  {
    icon: Code2,
    label: "254 AI HUB & AI TINKERERS MOMBASA",
    title: "Zero-hype, code-only technical crucibles.",
    description:
      "Organizing hands-on developer sessions and daily engineering resources across the Kenyan Coast — where builders ship real systems, not slideware.",
  },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.15em] text-primary">ECOSYSTEM &amp; COMMUNITY</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          A talent engine feeding the region&apos;s AI future.
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
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-60"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                  <box.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="mt-6 text-xs font-medium tracking-[0.15em] text-primary">{box.label}</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{box.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{box.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
