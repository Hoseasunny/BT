const projects = [
  {
    title: 'Modern Family House',
    location: 'Residential Estate',
    description: 'A clean modern home build with strong structural planning and premium finishes.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Office Renovation',
    location: 'Business District',
    description: 'A commercial office upgrade focused on better workflow, lighting, and durability.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Apartment Finishing',
    location: 'Urban Apartments',
    description: 'Interior and exterior finishing completed with careful supervision and neat detail.',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=85',
  },
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
            <article key={project.title} className="fade-up overflow-hidden rounded-3xl bg-white shadow-lg">
              <img src={project.image} alt={`${project.title} construction project`} className="h-72 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-bold text-darkGrey">{project.title}</h3>
                <p className="mt-2 font-semibold text-accentOrange">{project.location}</p>
                <p className="mt-4 font-medium leading-7 text-primaryGrey">{project.description}</p>
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
      </div>
    </section>
  )
}

export default Projects
