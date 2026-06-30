export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-6">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <span className="font-heading text-2xl font-bold text-white">Pizza Romano</span>
            <p className="mt-4 max-w-md leading-relaxed">
              Tradičná talianska pizzeria v srdci Bratislavy. Pravé neapolské pizze
              z kamennej pece, čerstvé suroviny a rodinná atmosféra.
            </p>
            <div className="flex gap-4 mt-6">
              {['Facebook', 'Instagram', 'TripAdvisor'].map((name) => (
                <span
                  key={name}
                  className="text-xs font-medium text-gray-500 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 hover:text-gray-300 cursor-pointer transition-all"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigácia</h4>
            <div className="space-y-2.5">
              {[
                { label: 'Menu', href: '#menu' },
                { label: 'O nás', href: '#about' },
                { label: 'Kontakt', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm hover:text-brand-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-2.5 text-sm">
              <p>Hlavná 123, Bratislava</p>
              <a href="tel:+421901234567" className="block hover:text-brand-400 transition-colors">
                +421 901 234 567
              </a>
              <a href="mailto:info@pizzaromano.sk" className="block hover:text-brand-400 transition-colors">
                info@pizzaromano.sk
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; 2026 Pizza Romano. Všetky práva vyhradené.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-brand-400 transition-colors">Ochrana osobných údajov</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Obchodné podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
