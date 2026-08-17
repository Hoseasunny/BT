import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Grace Wanjiku',
    type: 'House Renovation',
    review:
      'Better the Best Construction transformed our house beautifully. Their renovation advice and workmanship were outstanding.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85',
  },
  {
    name: 'Daniel Otieno',
    type: 'Commercial Construction',
    review:
      'The team handled our shop build with professionalism, transparent pricing, and dependable site supervision from start to finish.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85',
  },
  {
    name: 'Miriam Achieng',
    type: 'Apartment Finishing',
    review:
      'Their finishing work was neat, timely, and exactly what we needed. The advice they gave helped us avoid costly mistakes.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=85',
  },
]

function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="fade-up text-center">
          <h2 className="text-4xl font-extrabold text-darkGrey sm:text-5xl">Client Reviews</h2>
          <p className="mx-auto mt-5 max-w-2xl font-medium leading-8 text-primaryGrey">
            Trusted by homeowners, landlords, and business owners who expect clear guidance and
            dependable workmanship.
          </p>
        </div>
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="fade-up rounded-3xl bg-lightGrey p-8 shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} client portrait`}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-darkGrey">{testimonial.name}</h3>
                  <p className="font-semibold text-accentOrange">{testimonial.type}</p>
                </div>
              </div>
              <div className="mt-5 flex gap-1 text-accentOrange" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} className="fill-current" size={20} aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 font-medium leading-8 text-primaryGrey">"{testimonial.review}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
