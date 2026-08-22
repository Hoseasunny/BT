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
import ImageLightbox from './components/ImageLightbox'
import { FiMessageCircle } from 'react-icons/fi'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Better the Best Construction',
  description:
    'Construction, renovation and construction advisory services for homes and businesses in Kenya.',
  image: '/favicon.svg',
  telephone: '+254714108413',
  email: 'thomasmbui37@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: ['Kenya', 'Nairobi'],
  openingHours: 'Mo-Sa 08:00-18:00',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254714108413',
    contactType: 'customer service',
  },
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
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
        href="https://wa.me/254714108413"
        className="fixed bottom-5 right-5 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accentOrange text-white shadow-2xl transition hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4"
        aria-label="Chat on WhatsApp"
      >
        <FiMessageCircle size={28} aria-hidden="true" />
      </a>
      <ImageLightbox />
      <Footer />
    </>
  )
}

export default App
