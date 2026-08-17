import { FiCheck } from 'react-icons/fi'

const features = [
  'Experienced team',
  'Transparent pricing',
  'Quality materials',
  'Timely completion',
  'Professional advice',
  'Customer-first approach',
]

const whyImage =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85'

function WhyChooseUs() {
  return (
    <section className="bg-lightGrey py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
        <div className="fade-up grid grid-cols-2 gap-4">
          <img
            src={whyImage}
            alt="Construction workers coordinating at a building site"
            className="h-full min-h-80 rounded-3xl object-cover shadow-lg"
          />
          <div className="grid gap-4">
            <div className="rounded-3xl bg-darkGrey p-8 text-white shadow-lg">
              <p className="text-4xl font-extrabold">500+</p>
              <p className="mt-2 font-medium text-lightGrey">Projects Completed</p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <p className="text-4xl font-extrabold text-accentOrange">98%</p>
              <p className="mt-2 font-semibold text-primaryGrey">Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="fade-up">
          <h2 className="text-4xl font-extrabold leading-tight text-darkGrey sm:text-5xl">
            Why Clients Choose Better the Best
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 rounded-3xl bg-white p-5 font-semibold text-darkGrey shadow-lg">
                <span className="inline-flex shrink-0 rounded-full bg-accentOrange p-1 text-white">
                  <FiCheck size={18} aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
