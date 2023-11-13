import Hero from '@/components/Hero'
import About from '@/components/About'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />
      <About />
      <About />
    </main>
  )
}
