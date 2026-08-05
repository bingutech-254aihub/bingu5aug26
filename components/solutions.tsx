import { Network, Database, Cpu } from "lucide-react"

const solutions = [
  {
    icon: Network,
    title: "Autonomous Multi-Agent Swarms",
    description:
      "Self-hosted reasoning agents integrated directly into local ERP networks, coordinating tasks without human bottlenecks.",
  },
  {
    icon: Database,
    title: "Sovereign RAG & Data Systems",
    description:
      "Local vector databases ensuring 100% data sovereignty — retrieval-augmented intelligence with zero foreign API leakage.",
  },
  {
    icon: Cpu,
    title: "Edge AI & Offline Compute",
    description:
      "Quantized open-weight model deployments running on local server infrastructure, resilient to connectivity gaps.",
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.15em] text-primary">CORE ENTERPRISE SOLUTIONS</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Infrastructure built for autonomy, not dependency.
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {solutions.map((s) => (
          <article
            key={s.title}
            className="group relative rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
