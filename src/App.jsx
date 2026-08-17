import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FiMessageCircle } from 'react-icons/fi'

function App() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    animatedElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <a
        href="https://wa.me/"
        className="fixed bottom-5 right-5 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accentOrange text-white shadow-2xl transition hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4"
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle size={28} aria-hidden="true" />
      </a>
      <Footer />
    </>
  )
}

export default App
