import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Solutions } from "@/components/solutions"
import { Ecosystem } from "@/components/ecosystem"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Ecosystem />
      </main>
      <SiteFooter />
    </div>
  )
}
