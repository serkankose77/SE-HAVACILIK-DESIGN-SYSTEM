import { ArrowRight, Shield, Cog, Target } from 'lucide-react'

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-blue-400">SE Havacılık</span>
              <br />
              <span className="text-white">& Makina</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 font-medium">
              Havacılık endüstrisi için hassas işleme çözümleri
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Precision machining solutions for the aviation industry with cutting-edge HAAS equipment, 
              delivering exceptional quality and precision for critical aerospace components.
            </p>

            {/* Core Values */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">Quality</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">Safety</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Cog className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium">Excellence</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center group"
              >
                Hizmetlerimizi Keşfedin
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('machinery')}
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                Makinelerimiz
              </button>
            </div>
          </div>

          {/* Right side - Image placeholder with geometric design */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl border border-blue-400/30 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-4 border-blue-400/50 rounded-full flex items-center justify-center">
                  <Cog className="w-24 h-24 text-blue-400 animate-spin" style={{animationDuration: '20s'}} />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-blue-400 rotate-45"></div>
              <div className="absolute top-1/3 left-4 w-2 h-12 bg-gradient-to-b from-blue-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}

export default HeroSection
