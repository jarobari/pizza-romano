const highlights = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Kamenná pec',
    description: 'Pečieme na 450 °C v pravej kamennej peci pre dokonalú chuť a chrumkavosť.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Čerstvé suroviny',
    description: 'Mozzarella di bufala, talianske salámy a sezónna zelenina z lokálnych fariem.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Rodinná atmosféra',
    description: 'Príjemné prostredie s talianskou hudbou a usmievavým personálom.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-500 font-medium tracking-[0.3em] uppercase text-sm mb-4">
              O nás
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Príbeh <span className="text-brand-500">Pizzy Romano</span>
            </h2>
            <div className="w-20 h-1 bg-brand-500 rounded-full mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Pizza Romano vznikla z lásky k talianskej gastronómii. Náš šéfkuchár Marco 
              sa vyučil priamo v Neapole a priniesol so sebou recepty staré niekoľko generácií.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Každé cesto nechávame kysnúť 48 hodín, používame výhradne taliansku 
              múku typu 00 a paradajky San Marzano. Veríme, že skutočná pizza nie je 
              len jedlo — je to zážitok.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&q=80"
                alt="Šéfkuchár Marco"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Marco Rossi</p>
                <p className="text-sm text-gray-500">Šéfkuchár a zakladateľ</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80"
                alt="Pizza"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=400&q=80"
                alt="Pizza prísady"
                className="rounded-2xl w-full h-48 object-cover shadow-lg"
              />
            </div>
            <div className="space-y-6 pt-8">
              <img
                src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&q=80"
                alt="Príprava pizze"
                className="rounded-2xl w-full h-48 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                alt="Interiér reštaurácie"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
