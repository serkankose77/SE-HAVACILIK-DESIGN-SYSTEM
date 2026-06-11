import { Mail, Phone, MapPin, Linkedin, ChevronUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                SE Havacılık & Makina
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Havacılık endüstrisi için hassas işleme çözümleri sunan, 
                kalite, güvenlik ve mükemmellik değerlerini benimseyen öncü şirket.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <a 
                  href="mailto:info@sehavacilik.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  info@sehavacilik.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <a 
                  href="tel:+90xxxxxxxxx" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  +90 (XXX) XXX XX XX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-gray-300">
                  Sanayi Mahallesi, Türkiye
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hızlı Linkler</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Hakkımızda
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Hizmetlerimiz
              </button>
              <button
                onClick={() => scrollToSection('machinery')}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Makinelerimiz
              </button>
              <button
                onClick={() => scrollToSection('quality')}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Kalite Politikası
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                İletişim
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Hizmetlerimiz</h4>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">Precision Machining</div>
              <div className="text-gray-300 text-sm">Complex Geometry Processing</div>
              <div className="text-gray-300 text-sm">Large Part Manufacturing</div>
              <div className="text-gray-300 text-sm">Quality Control & CMM</div>
              <div className="text-gray-300 text-sm">Aviation Compliance</div>
              <div className="text-gray-300 text-sm">Engineering Support</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} SE Havacılık & Makina. Tüm hakları saklıdır.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Gizlilik Politikası
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Kullanım Şartları
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Social Media */}
              <a 
                href="#" 
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                aria-label="Yukarı Çık"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
