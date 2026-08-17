import {
  FiBriefcase,
  FiClipboard,
  FiHome,
  FiLayers,
  FiPenTool,
  FiTool,
} from 'react-icons/fi'
import serviceResidential from '../assets/btc/project-house.jpg'
import serviceCommercial from '../assets/btc/project-office.jpg'
import serviceRenovation from '../assets/btc/gallery-04.jpg'
import serviceAdvisory from '../assets/btc/about-site.jpg'
import serviceFinishing from '../assets/btc/why-interior.jpg'
import serviceSupervision from '../assets/btc/gallery-01.jpg'

const services = [
  {
    icon: FiHome,
    name: 'Residential Construction',
    description: 'Homes, apartments, and residential projects.',
    image: serviceResidential,
  },
  {
    icon: FiBriefcase,
    name: 'Commercial Construction',
    description: 'Shops, offices, and commercial buildings.',
    image: serviceCommercial,
  },
  {
    icon: FiTool,
    name: 'Renovation & Remodeling',
    description: 'Upgrade and transform existing spaces.',
    image: serviceRenovation,
  },
  {
    icon: FiClipboard,
    name: 'Construction Advisory',
    description: 'Professional guidance for your project.',
    image: serviceAdvisory,
  },
  {
    icon: FiPenTool,
    name: 'Interior & Exterior Finishing',
    description: 'Painting, flooring, ceilings, and finishing.',
    image: serviceFinishing,
  },
  {
    icon: FiLayers,
    name: 'Site Supervision',
    description: 'Ensure quality, safety, and timely delivery.',
    image: serviceSupervision,
  },
]

function Services() {
  return (
    <section id="services" className="bg-lightGrey py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="fade-up max-w-3xl">
          <h2 className="text-4xl font-extrabold text-darkGrey sm:text-5xl">Construction Services</h2>
          <p className="mt-5 text-base font-medium leading-8 text-primaryGrey">
            Complete building, renovation, finishing, and advisory support for projects that need
            dependable planning and strong execution.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.name}
                className="fade-up group overflow-hidden rounded-3xl border border-transparent bg-white shadow-lg transition duration-300 hover:-translate-y-[6px] hover:border-accentOrange hover:shadow-2xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={service.image} alt={`${service.name} service example`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkGrey/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex rounded-2xl bg-white p-4 text-accentOrange shadow-lg">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-darkGrey">{service.name}</h3>
                  <p className="mt-3 font-medium leading-7 text-primaryGrey">{service.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
