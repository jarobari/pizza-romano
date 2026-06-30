const pizzas = [
  {
    name: 'Margherita',
    ingredients: 'Mozzarella, paradajková omáčka, bazalka, olivový olej',
    price: '9.90',
    popular: true,
  },
  {
    name: 'Pepperoni',
    ingredients: 'Mozzarella, pepperoni, paradajková omáčka, oregano',
    price: '11.90',
    popular: true,
  },
  {
    name: 'Prosciutto',
    ingredients: 'Mozzarella, prosciutto crudo, rukola, parmezán',
    price: '13.50',
    popular: false,
  },
  {
    name: 'Quattro Formaggi',
    ingredients: 'Mozzarella, gorgonzola, parmezán, ricotta',
    price: '14.00',
    popular: false,
  },
  {
    name: 'Funghi',
    ingredients: 'Mozzarella, čerstvé hríby, tymian, cesnakový olej',
    price: '12.50',
    popular: false,
  },
  {
    name: 'Capricciosa',
    ingredients: 'Mozzarella, šunka, artičoky, olivy, huby',
    price: '13.00',
    popular: false,
  },
  {
    name: 'Diavola',
    ingredients: 'Mozzarella, salami piccante, chilli, paradajková omáčka',
    price: '12.90',
    popular: true,
  },
  {
    name: 'Vegetariana',
    ingredients: 'Mozzarella, paprika, cuketa, baklažán, cherry paradajky',
    price: '11.50',
    popular: false,
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Naše menu
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pizze pečené s láskou
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-lg mx-auto text-lg">
            Každá pizza je pripravená z čerstvých surovín a pečená v kamennej peci na 450 °C
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pizzas.map((pizza) => (
            <div
              key={pizza.name}
              className="group relative bg-cream rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              {pizza.popular && (
                <span className="absolute top-3 right-3 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
                  Najpredávanejšia
                </span>
              )}
              <div className="h-40 bg-gradient-to-br from-brand-200 to-brand-300 flex items-center justify-center overflow-hidden">
                <svg className="w-20 h-20 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg font-bold text-gray-900">{pizza.name}</h3>
                  <span className="text-brand-500 font-bold text-lg">{pizza.price} €</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{pizza.ingredients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
