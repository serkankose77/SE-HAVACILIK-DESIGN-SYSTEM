import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
            >
              SE Havacılık & Makina
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Hakkımızda
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Hizmetlerimiz
            </button>
            <button
              onClick={() => scrollToSection('machinery')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Makinelerimiz
            </button>
            <button
              onClick={() => scrollToSection('quality')}
              className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              Kalite Politikası
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              İletişim
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
              >
                Hizmetlerimiz
              </button>
              <button
                onClick={() => scrollToSection('machinery')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
              >
                Makinelerimiz
              </button>
              <button
                onClick={() => scrollToSection('quality')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
              >
                Kalite Politikası
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                İletişim
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
