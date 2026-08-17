import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a href="#home" className="text-lg font-extrabold text-darkGrey sm:text-xl">
          Better the Best Construction
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-primaryGrey transition hover:text-accentOrange focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-2xl bg-accentOrange px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4 sm:inline-flex"
        >
          Get Quote
        </a>

        <button
          type="button"
          className="inline-flex rounded-2xl p-3 text-darkGrey transition hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4 lg:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FiX size={26} aria-hidden="true" /> : <FiMenu size={26} aria-hidden="true" />}
        </button>
      </nav>

      <div
        className={`fixed inset-x-0 top-[72px] z-40 min-h-[calc(100vh-72px)] bg-white px-6 py-10 transition-all duration-300 lg:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-4 text-2xl font-bold text-darkGrey transition hover:bg-lightGrey hover:text-accentOrange focus:outline-none focus:ring-2 focus:ring-accentOrange"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-2xl bg-accentOrange px-6 py-4 text-center font-semibold text-white shadow-lg transition hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
