import { Cog, Zap, Wrench, CheckCircle, Layers, Settings } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Precision Machining",
      description: "Havacılık parçaları için yüksek hassasiyetli işleme hizmetleri",
      features: [
        "CNC 3-axis ve 5-axis işleme",
        "Mikrometrik hassasiyet",
        "Yüksek kaliteli yüzey bitirme",
        "Prototip üretimi"
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Complex Geometry Processing",
      description: "Karmaşık geometrilerin hassas işlenmesi ve üretimi",
      features: [
        "5-eksen simultane işleme",
        "CAD/CAM programlama",
        "Reverse engineering",
        "Özel fikstür tasarımı"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Large Part Capabilities",
      description: "Büyük boyutlu parçaların işlenmesi ve üretim kapasitesi",
      features: [
        "1600x700 mm işleme alanı",
        "Ağır parça işleme",
        "Çoklu setup işlemleri",
        "Taşlama ve bitirme işlemleri"
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Aviation Quality Compliance",
      description: "Havacılık kalite standartlarına uygun üretim süreçleri",
      features: [
        "AS9100 kalite sistemi",
        "Malzeme sertifikaları",
        "İz takip sistemi",
        "Detaylı dokümantasyon"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Critical Aviation Components",
      description: "Kritik havacılık bileşenlerinin güvenli üretimi",
      features: [
        "Motor parçaları",
        "Yapısal bileşenler",
        "Hidrolik parçalar",
        "Aviyonik muhafazalar"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Advanced Measuring",
      description: "İleri ölçme teknolojileri ile kalite güvencesi",
      features: [
        "CMM koordinat ölçme",
        "3D tarama teknolojisi",
        "İstatistiksel proses kontrolü",
        "Detaylı raporlama"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hizmetlerimiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Havacılık endüstrisi için kapsamlı hassas işleme çözümleri sunuyoruz. 
            Modern teknoloji ve deneyimli ekibimizle en yüksek kalite standartlarını garanti ediyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 rounded-2xl text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Projenizi Tartışalım
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Hassas işleme ihtiyaçlarınız için bizimle iletişime geçin. 
              Uzman ekibimiz size en uygun çözümü sunacaktır.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Ücretsiz Teklif Alın
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
