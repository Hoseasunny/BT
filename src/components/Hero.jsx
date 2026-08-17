import heroImage from '../assets/btc/hero-house.jpg'

function Hero() {
  return (
    <section id="home" className="bg-white pt-32 sm:pt-36">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-2 lg:px-8 lg:pb-24">
        <div className="fade-up">
          <p className="mb-5 inline-flex rounded-2xl bg-lightGrey px-5 py-2 text-sm font-semibold text-accentOrange">
            Trusted Construction & Renovation Experts
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-darkGrey sm:text-6xl lg:text-7xl">
            Build, Renovate and Transform with Confidence
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-primaryGrey sm:text-lg">
            Better the Best Construction offers dependable construction, renovation, and advisory
            services for residential and commercial projects, helping every client move from idea to
            completed space with clarity and confidence.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-2xl bg-accentOrange px-7 py-4 text-center font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4"
            >
              Get a Free Quote
            </a>
            <a
              href="#projects"
              className="rounded-2xl border border-primaryGrey px-7 py-4 text-center font-semibold text-darkGrey transition hover:scale-[1.03] hover:bg-lightGrey focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="fade-up">
          <img
            src={heroImage}
            alt="Construction workers reviewing architectural plans at a modern building site"
            className="animate-float rounded-[32px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
