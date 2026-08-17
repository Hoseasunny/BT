const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Construction Advice' },
]

function Stats() {
  return (
    <section className="bg-lightGrey py-24">
      <div className="mx-auto grid max-w-[1280px] gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <article key={stat.label} className="fade-up rounded-3xl bg-white p-8 text-center shadow-lg">
            <h2 className="text-4xl font-extrabold text-darkGrey">{stat.value}</h2>
            <p className="mt-3 font-semibold text-primaryGrey">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Stats
