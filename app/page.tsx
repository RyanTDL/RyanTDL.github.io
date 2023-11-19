import Hero from '@/components/Hero'
import About from '@/components/About'
import NavBar from '@/components/NavBar'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <NavBar />
      <Hero />
      <About />
      <About />
      <About />
      <Contact />
    </main>
  )
}
