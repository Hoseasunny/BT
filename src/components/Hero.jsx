import heroImage from '../assets/btc/hero-house.jpg'
import heroDetailOne from '../assets/btc/gallery-02.jpg'
import heroDetailTwo from '../assets/btc/gallery-06.jpg'

const trustPoints = ['Quality Workmanship', 'Free Site Advice', 'Fast Quotation']

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-gradient-to-br from-white via-lightGrey to-white pt-24 sm:pt-28">
      <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-[1280px] items-center gap-12 px-6 pb-20 pt-2 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-24 lg:pt-4">
        <div className="fade-up">
          <p className="mb-5 inline-flex rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-accentOrange shadow-lg">
            Trusted Construction & Renovation Experts
          </p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight text-darkGrey sm:text-6xl lg:text-[76px]">
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
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-3xl border border-white bg-white/80 px-4 py-4 shadow-lg backdrop-blur">
                <p className="text-sm font-bold text-darkGrey">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up relative min-h-[520px]">
          <div className="absolute -right-10 top-6 h-56 w-56 rounded-full bg-accentOrange/10" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Completed modern residential construction by Better the Best Construction"
            className="absolute right-0 top-0 h-[420px] w-[82%] animate-float rounded-[32px] object-cover shadow-2xl"
          />
          <img
            src={heroDetailOne}
            alt="Foundation preparation work at a construction site"
            className="absolute bottom-12 left-0 h-64 w-[46%] rounded-[32px] border-8 border-white object-cover shadow-2xl"
          />
          <img
            src={heroDetailTwo}
            alt="Finished home exterior with modern roof"
            className="absolute bottom-0 right-8 h-44 w-[38%] rounded-[32px] border-8 border-white object-cover shadow-2xl"
          />
          <div className="absolute left-8 top-12 rounded-3xl bg-darkGrey/95 p-6 text-white shadow-2xl">
            <p className="text-4xl font-extrabold">10+</p>
            <p className="mt-1 text-sm font-semibold text-lightGrey">Years of trusted work</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
