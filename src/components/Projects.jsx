import projectHouse from '../assets/btc/project-house.jpg'
import projectOffice from '../assets/btc/project-office.jpg'
import projectApartment from '../assets/btc/project-apartment.jpg'
import gallery01 from '../assets/btc/gallery-01.jpg'
import gallery02 from '../assets/btc/gallery-02.jpg'
import gallery03 from '../assets/btc/gallery-03.jpg'
import gallery04 from '../assets/btc/gallery-04.jpg'
import gallery05 from '../assets/btc/gallery-05.jpg'
import gallery06 from '../assets/btc/gallery-06.jpg'
import gallery07 from '../assets/btc/gallery-07.jpg'
import gallery08 from '../assets/btc/gallery-08.jpg'
import gallery09 from '../assets/btc/gallery-09.jpg'
import gallery10 from '../assets/btc/gallery-10.jpg'
import gallery11 from '../assets/btc/gallery-11.jpg'
import gallery12 from '../assets/btc/gallery-12.jpg'

const projects = [
  {
    title: 'Modern Family House',
    location: 'Residential Estate',
    description: 'A clean modern home build with strong structural planning and premium finishes.',
    image: projectHouse,
  },
  {
    title: 'Office Renovation',
    location: 'Business District',
    description: 'A commercial office upgrade focused on better workflow, lighting, and durability.',
    image: projectOffice,
  },
  {
    title: 'Apartment Finishing',
    location: 'Urban Apartments',
    description: 'Interior and exterior finishing completed with careful supervision and neat detail.',
    image: projectApartment,
  },
]

const galleryImages = [
  { src: gallery01, alt: 'Concrete slab preparation at a construction site' },
  { src: gallery02, alt: 'Foundation bedding and site preparation work' },
  { src: gallery03, alt: 'Stone walling and plumbing installation work' },
  { src: gallery04, alt: 'Completed residential house exterior' },
  { src: gallery05, alt: 'Circular masonry structure in progress' },
  { src: gallery06, alt: 'Finished residential building with red roof' },
  { src: gallery07, alt: 'Gravel base preparation for a building foundation' },
  { src: gallery08, alt: 'Completed family homes with modern roofing' },
  { src: gallery09, alt: 'Interior finishing and partition construction' },
  { src: gallery10, alt: 'Concrete drainage and structural site work' },
  { src: gallery11, alt: 'Block wall construction with materials on site' },
  { src: gallery12, alt: 'Small completed residential building exterior' },
]

function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="fade-up flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-extrabold text-darkGrey sm:text-5xl">Recent Projects</h2>
            <p className="mt-5 max-w-2xl font-medium leading-8 text-primaryGrey">
              A selection of construction and renovation work shaped by practical advice,
              disciplined supervision, and reliable delivery.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="fade-up group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-[6px] hover:shadow-2xl">
              <div className="relative h-96 overflow-hidden">
                <img src={project.image} alt={`${project.title} construction project`} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-darkGrey/90 via-darkGrey/25 to-transparent" />
                <span className="absolute left-5 top-5 rounded-2xl bg-accentOrange px-4 py-2 text-sm font-bold text-white shadow-lg">
                  Completed Project
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 font-semibold text-accentOrange">{project.location}</p>
                </div>
              </div>
              <div className="p-7">
                <p className="font-medium leading-7 text-primaryGrey">{project.description}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-2xl border border-primaryGrey px-5 py-3 font-semibold text-darkGrey transition hover:scale-[1.03] hover:bg-lightGrey focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4"
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.alt}
              className={`fade-up overflow-hidden rounded-3xl shadow-lg ${
                index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img src={image.src} alt={image.alt} className={`${index === 0 || index === 7 ? 'h-full min-h-[460px]' : 'h-56'} w-full object-cover transition duration-300 hover:scale-105`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
