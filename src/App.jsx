import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
