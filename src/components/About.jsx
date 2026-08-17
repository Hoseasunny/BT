import { FiCheckCircle } from 'react-icons/fi'
import aboutImage from '../assets/btc/about-site.jpg'
import aboutDetail from '../assets/btc/gallery-11.jpg'
import ZoomableImage from './ZoomableImage'

const bullets = [
  'Residential construction',
  'Commercial construction',
  'Renovation & remodeling',
  'Construction consultation',
  'Quality workmanship',
]

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
        <div className="fade-up relative pb-10 pr-8">
          <ZoomableImage
            src={aboutImage}
            alt="Construction team working safely on a building structure"
            className="h-[520px] w-full rounded-3xl shadow-2xl"
            imageClassName="h-full w-full object-cover"
          />
          <ZoomableImage
            src={aboutDetail}
            alt="Block wall construction materials and masonry progress"
            className="absolute bottom-0 right-0 h-56 w-56 rounded-3xl border-8 border-white shadow-2xl"
            imageClassName="h-full w-full object-cover"
          />
        </div>
        <div className="fade-up">
          <h2 className="text-4xl font-extrabold leading-tight text-darkGrey sm:text-5xl">
            About Better the Best Construction
          </h2>
          <p className="mt-6 text-base font-medium leading-8 text-primaryGrey">
            Better the Best Construction brings practical experience, renovation expertise, and
            professional construction advisory services to every project. Our team is committed to
            quality workmanship, safe site practices, transparent guidance, and a polished finish
            that supports lasting value for homes, commercial spaces, and investment properties.
          </p>
          <ul className="mt-8 grid gap-4">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold text-darkGrey">
                <FiCheckCircle className="shrink-0 text-accentOrange" size={22} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
