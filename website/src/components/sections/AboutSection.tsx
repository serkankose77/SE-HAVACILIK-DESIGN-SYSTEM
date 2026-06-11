import { Users, Award, Clock, Factory } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hakkımızda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Havacılık endüstrisinde yüksek kaliteli hassas işleme hizmetleri sunarak, 
            deneyimli ekibimiz ve ileri teknoloji ile kritik havacılık bileşenlerinin üretiminde öncü konumdayız.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-gray-900">
                SE Aerospace & Precision Machining
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide high-quality precision machining services for the aviation industry. 
                Our experienced team combines advanced technology with deep industry expertise to 
                produce critical aviation components that meet the strictest quality standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our state-of-the-art HAAS equipment and commitment to excellence, we specialize 
                in complex geometry processing, large part capabilities, and maintaining aviation 
                quality compliance throughout all our processes.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                <div className="text-gray-600">Yıllık Deneyim</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Kalite Uyumluluğu</div>
              </div>
            </div>
          </div>

          {/* Right content - Company highlights */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">İleri Teknoloji</h4>
                  <p className="text-gray-600 leading-relaxed">
                    En son HAAS teknolojisi ile donatılmış tesisimizde, 
                    5-eksen işleme kapasitesi ve yüksek hassasiyetli üretim imkanları sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Zamanında Teslimat</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Proje planlamasından teslimata kadar her aşamada mükemmellik anlayışımızla, 
                    müşteri beklentilerini aşmayı hedefliyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Sertifikalı Kalite</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Havacılık sektörünün sıkı gerekliliklerini karşılayan kalite sistemi ve 
                    deneyimli kalite kontrol ekibimiz ile güvenilir ürünler üretiyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
