function Footer() {
  return (
    <footer className="bg-darkGrey text-lightGrey">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white">Better the Best Construction</h2>
          <p className="mt-4 font-semibold text-accentOrange">
            We renovate and advise on all construction areas
          </p>
          <p className="mt-4 font-medium leading-7 text-mediumGrey">
            A professional construction and renovation company delivering quality workmanship,
            reliable advice, and modern building solutions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Quick Links</h2>
          <ul className="mt-5 grid gap-3">
            <li><a className="font-medium transition hover:text-accentOrange" href="#about">About</a></li>
            <li><a className="font-medium transition hover:text-accentOrange" href="#services">Services</a></li>
            <li><a className="font-medium transition hover:text-accentOrange" href="#projects">Projects</a></li>
            <li><a className="font-medium transition hover:text-accentOrange" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Contact Info</h2>
          <ul className="mt-5 grid gap-3 font-medium text-mediumGrey">
            <li>Phone: 0714108413</li>
            <li>Email: thomasmbui37@gmail.com</li>
            <li>WhatsApp: 0714108413</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center font-medium text-mediumGrey">
        © 2026 Better the Best Construction. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
