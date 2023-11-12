import Hero from '@/components/Hero'
import About from '@/components/About'
import NavBar from '@/components/NavBar'
import Image from 'next/image'

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
