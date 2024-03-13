import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
// import ResponsiveCarousel from '@/effects/Carousel'

export default function Home() {
  return (
    <main className="overflow-hidden text-white">
      <NavBar />
      <Hero />
      {/* <About /> */}
      <Experience />
      <Projects />
      {/* <ResponsiveCarousel/> */}
      <Contact />
    </main>
  )
}
