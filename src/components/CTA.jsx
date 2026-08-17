import ctaImage from '../assets/btc/gallery-08.jpg'

function CTA() {
  return (
    <section className="bg-darkGrey py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="fade-up relative overflow-hidden rounded-[32px] px-6 py-20 text-center shadow-2xl sm:px-12">
          <img src={ctaImage} alt="Completed homes ready for construction quotation" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-darkGrey/80" />
          <div className="relative">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Ready to Start Your Construction Project?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-lightGrey">
              Get professional advice and a free quotation today.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-accentOrange px-7 py-4 text-center font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-darkGrey"
              >
                Request a Quote
              </a>
              <a
                href="https://wa.me/"
                className="rounded-2xl bg-white px-7 py-4 text-center font-semibold text-darkGrey shadow-lg transition hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-darkGrey"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
