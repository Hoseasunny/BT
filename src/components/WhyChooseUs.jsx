import { FiCheck } from 'react-icons/fi'
import whyImage from '../assets/btc/why-interior.jpg'
import galleryFive from '../assets/btc/gallery-05.jpg'
import ZoomableImage from './ZoomableImage'

const features = [
  'Experienced team',
  'Transparent pricing',
  'Quality materials',
  'Timely completion',
  'Professional advice',
  'Customer-first approach',
]

function WhyChooseUs() {
  return (
    <section className="bg-darkGrey py-24">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
        <div className="fade-up grid grid-cols-2 gap-4">
          <ZoomableImage
            src={whyImage}
            alt="Construction workers coordinating at a building site"
            className="h-full min-h-80 rounded-3xl shadow-lg"
            imageClassName="h-full w-full object-cover"
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
            <ZoomableImage
              src={galleryFive}
              alt="Stone masonry construction detail"
              className="hidden h-40 rounded-3xl shadow-lg sm:block"
              imageClassName="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="fade-up">
          <p className="mb-4 inline-flex rounded-2xl bg-white/10 px-5 py-2 text-sm font-semibold text-accentOrange">
            Built for confidence
          </p>
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
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
