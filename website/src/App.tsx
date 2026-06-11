import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import MachinerySection from './components/sections/MachinerySection'
import QualitySection from './components/sections/QualitySection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MachinerySection />
        <QualitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
