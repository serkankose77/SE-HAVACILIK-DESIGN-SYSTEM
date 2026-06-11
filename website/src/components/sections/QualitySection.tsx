import { Shield, Award, CheckCircle, Eye, FileText, Users, Target, Zap } from 'lucide-react'

const QualitySection = () => {
  const qualityPrinciples = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Havacılık Kalite Standartları",
      description: "Havacılık üretiminde en yüksek kalite standartlarına bağlılık gösteriyoruz."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proses Uyumluluğu",
      description: "Tüm süreçlerimizde havacılık kalite uyumluluğunu sağlayarak güvenilir üretim gerçekleştiriyoruz."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Detaylı İnceleme ve Test",
      description: "Her aşamada detaylı inceleme ve test işlemleri ile kaliteyi garanti altına alıyoruz."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Deneyimli Kalite Ekibi",
      description: "Modern ölçme ekipmanları ve deneyimli kalite kontrol ekibimiz ile mükemmelliği hedefliyoruz."
    }
  ]

  const qualityFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Güvenli ve Güvenilir Ürünler",
      description: "Güvenli ve güvenilir ürünler üretmeye odaklanarak müşteri memnuniyetini ön planda tutuyoruz."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Sıkı Havacılık Gereklilikleri",
      description: "Havacılık sektörünün sıkı gerekliliklerini karşılayarak sektör standartlarını aşıyoruz."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Sürekli İyileştirme",
      description: "Kalite yönetim sistemimizle sürekli iyileştirme anlayışını benimsiyor ve uyguluyoruz."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hızlı ve Hassas Kontrol",
      description: "Gelişmiş ölçme teknolojileri ile hızlı ve hassas kalite kontrol süreçleri yürütüyoruz."
    }
  ]

  return (
    <section id="quality" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kalite Politikamız
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SE Havacılık & Makina olarak, havacılık endüstrisinin en yüksek kalite standartlarını karşılamak ve 
            müşterilerimize güvenilir, hassas ve güvenli ürünler sunmak misyonumuzun temelini oluşturur.
          </p>
        </div>

        {/* Main Quality Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {qualityPrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl mb-6">
                {principle.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Commitment Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Kalite Taahhüdümüz
            </h3>
            
            <div className="space-y-6">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Standards Visual */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Kalite Standartlarımız
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <span className="font-semibold text-gray-900">AS9100 Kalite Sistemi</span>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <span className="font-semibold text-gray-900">ISO 9001 Sertifikasyonu</span>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                  <span className="font-semibold text-gray-900">Havacılık Uyumluluk</span>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                  <span className="font-semibold text-gray-900">CMM Doğrulama</span>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>

              {/* Quality metrics */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Kalite Kontrolü</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">±2.5μm</div>
                    <div className="text-sm text-gray-600">Ölçme Hassasiyeti</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Kalite İzleme</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-12 rounded-2xl text-white">
            <Shield className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h3 className="text-3xl font-bold mb-6">
              Kalite, Güvenlik ve Mükemmellik
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Müşteri beklentilerini aşmak ve havacılık endüstrisinde güvenilir bir partner olmak 
              için kalite politikamızı sürekli geliştirmekte ve uygulamaktayız.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <Award className="w-8 h-8 mx-auto mb-4 text-blue-300" />
                <div className="text-lg font-semibold mb-2">Quality</div>
                <div className="text-blue-200">En yüksek kalite standartları</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <Shield className="w-8 h-8 mx-auto mb-4 text-blue-300" />
                <div className="text-lg font-semibold mb-2">Safety</div>
                <div className="text-blue-200">Güvenli ve güvenilir üretim</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-xl">
                <Target className="w-8 h-8 mx-auto mb-4 text-blue-300" />
                <div className="text-lg font-semibold mb-2">Excellence</div>
                <div className="text-blue-200">Mükemmellik arayışında</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QualitySection
