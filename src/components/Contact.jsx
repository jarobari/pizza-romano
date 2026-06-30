export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Kontakt
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rezervujte si stôl
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-lg mx-auto text-lg">
            Tešíme sa na vašu návštevu. Rezervujte si stôl online alebo nám zavolajte.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-cream rounded-2xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Adresa</h3>
            <p className="text-gray-500">Hlavná 123, 811 01 Bratislava</p>
            <p className="text-gray-400 text-sm mt-2">Pri centrálnom námestí</p>
          </div>

          <div className="bg-cream rounded-2xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Telefón</h3>
            <a href="tel:+421901234567" className="text-brand-500 hover:text-brand-600 font-semibold text-lg">
              +421 901 234 567
            </a>
            <p className="text-gray-400 text-sm mt-2">Po–Ne 11:00 – 22:00</p>
          </div>

          <div className="bg-cream rounded-2xl p-8 border border-gray-100">
            <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">Otváracie hodiny</h3>
            <div className="space-y-1 text-gray-500">
              <p>Pondelok – Piatok: <span className="text-gray-900 font-medium">11:00 – 22:00</span></p>
              <p>Sobota – Nedeľa: <span className="text-gray-900 font-medium">12:00 – 23:00</span></p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <form className="bg-cream rounded-2xl p-8 md:p-10 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Meno"
                className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="date"
                className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              />
              <input
                type="time"
                className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Správa (voliteľné)"
              className="w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all mb-4 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-500/30"
            >
              Odoslať rezerváciu
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
