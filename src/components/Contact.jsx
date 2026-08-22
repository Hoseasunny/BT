import { FiClock, FiMail, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi'

const details = [
  { icon: FiPhone, label: 'Phone', value: '0714108413' },
  { icon: FiMessageCircle, label: 'WhatsApp', value: '0714108413' },
  { icon: FiMail, label: 'Email', value: 'thomasmbui37@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Nairobi, Kenya' },
  { icon: FiClock, label: 'Working hours', value: 'Monday - Saturday, 8:00 AM - 6:00 PM' },
]

function Contact() {
  return (
    <section id="contact" className="bg-lightGrey py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div className="fade-up">
          <h2 className="text-4xl font-extrabold text-darkGrey sm:text-5xl">Contact Us</h2>
          <p className="mt-5 max-w-xl font-medium leading-8 text-primaryGrey">
            Tell us what you want to build, renovate, or improve. Better the Best Construction is
            ready to advise, quote, and guide your next project.
          </p>
          <div className="mt-8 grid gap-4">
            {details.map((detail) => {
              const Icon = detail.icon
              return (
                <div key={detail.label} className="rounded-3xl bg-white p-5 shadow-lg">
                  <div className="flex gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accentOrange text-white">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-darkGrey">{detail.label}</h3>
                      <p className="mt-1 font-medium text-primaryGrey">{detail.value}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <form className="fade-up rounded-3xl bg-white p-6 shadow-lg sm:p-8">
          <div className="grid gap-5">
            <label className="grid gap-2 font-semibold text-darkGrey">
              Full Name
              <input
                type="text"
                name="fullName"
                className="rounded-2xl border border-mediumGrey px-4 py-3 font-medium text-primaryGrey outline-none transition focus:border-accentOrange focus:ring-2 focus:ring-accentOrange/30"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2 font-semibold text-darkGrey">
              Phone Number
              <input
                type="tel"
                name="phone"
                className="rounded-2xl border border-mediumGrey px-4 py-3 font-medium text-primaryGrey outline-none transition focus:border-accentOrange focus:ring-2 focus:ring-accentOrange/30"
                autoComplete="tel"
              />
            </label>
            <label className="grid gap-2 font-semibold text-darkGrey">
              Email
              <input
                type="email"
                name="email"
                className="rounded-2xl border border-mediumGrey px-4 py-3 font-medium text-primaryGrey outline-none transition focus:border-accentOrange focus:ring-2 focus:ring-accentOrange/30"
                autoComplete="email"
              />
            </label>
            <label className="grid gap-2 font-semibold text-darkGrey">
              Service Needed
              <select
                name="service"
                className="rounded-2xl border border-mediumGrey bg-white px-4 py-3 font-medium text-primaryGrey outline-none transition focus:border-accentOrange focus:ring-2 focus:ring-accentOrange/30"
              >
                <option>Residential Construction</option>
                <option>Commercial Construction</option>
                <option>Renovation & Remodeling</option>
                <option>Construction Advisory</option>
                <option>Interior & Exterior Finishing</option>
                <option>Site Supervision</option>
              </select>
            </label>
            <label className="grid gap-2 font-semibold text-darkGrey">
              Message
              <textarea
                name="message"
                rows="5"
                className="resize-none rounded-2xl border border-mediumGrey px-4 py-3 font-medium text-primaryGrey outline-none transition focus:border-accentOrange focus:ring-2 focus:ring-accentOrange/30"
              />
            </label>
            <button
              type="button"
              className="rounded-2xl bg-accentOrange px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accentOrange focus:ring-offset-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
