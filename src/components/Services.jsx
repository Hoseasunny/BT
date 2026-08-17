import {
  FiBriefcase,
  FiClipboard,
  FiHome,
  FiLayers,
  FiPenTool,
  FiTool,
} from 'react-icons/fi'

const services = [
  {
    icon: FiHome,
    name: 'Residential Construction',
    description: 'Homes, apartments, and residential projects.',
  },
  {
    icon: FiBriefcase,
    name: 'Commercial Construction',
    description: 'Shops, offices, and commercial buildings.',
  },
  {
    icon: FiTool,
    name: 'Renovation & Remodeling',
    description: 'Upgrade and transform existing spaces.',
  },
  {
    icon: FiClipboard,
    name: 'Construction Advisory',
    description: 'Professional guidance for your project.',
  },
  {
    icon: FiPenTool,
    name: 'Interior & Exterior Finishing',
    description: 'Painting, flooring, ceilings, and finishing.',
  },
  {
    icon: FiLayers,
    name: 'Site Supervision',
    description: 'Ensure quality, safety, and timely delivery.',
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
                className="fade-up rounded-3xl border border-transparent bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-[6px] hover:border-accentOrange hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-lightGrey p-4 text-accentOrange">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-darkGrey">{service.name}</h3>
                <p className="mt-3 font-medium leading-7 text-primaryGrey">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
