import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
// import ResponsiveCarousel from '@/effects/Carousel';

export default function Home() {
  return (
    <main className="overflow-hidden text-white text-xl">
      <NavBar />
      <Hero />
      <div className='sm:px-10'>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
