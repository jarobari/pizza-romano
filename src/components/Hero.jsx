import { useState, useEffect } from 'react'

const navItems = ['Menu', 'O nás', 'Kontakt']

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header id="hero" className="relative h-screen flex flex-col">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className={`font-heading text-2xl font-bold transition-colors ${scrolled ? 'text-brand-600' : 'text-white'}`}>
            Pizza Romano
          </span>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item === 'O nás' ? 'about' : item === 'Kontakt' ? 'contact' : item.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${scrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white/80 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
            <a
              href="#menu"
              className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:scale-105"
            >
              Objednať
            </a>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80)`,
        }}
      />

      <div className="relative z-20 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <p className="text-brand-400 font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Tradičná talianska pizzeria
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow-lg">
            Chuť <span className="text-brand-400">Talianska</span>
            <br />
            v každom súste
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Pravé talianske pizze pečené v kamennej peci z čerstvých surovín. 
            Precíťte atmosféru Neapola priamo v srdci mesta.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="bg-brand-500 hover:bg-brand-600 text-white px-10 py-3.5 rounded-full text-base font-semibold transition-all hover:shadow-xl hover:shadow-brand-500/30 hover:scale-105"
            >
              Pozrieť menu
            </a>
            <a
              href="#contact"
              className="border-2 border-white/30 hover:border-white text-white px-10 py-3.5 rounded-full text-base font-semibold transition-all hover:bg-white/10"
            >
              Rezervácia
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  )
}
