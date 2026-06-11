import { Settings, Zap, Gauge, Wrench, CheckCircle2 } from 'lucide-react'

const MachinerySection = () => {
  const machines = [
    {
      model: "HAAS UMC750",
      type: "5-Axis VMC",
      capacity: "Ø750 capacity",
      description: "Advanced machine with 5-axis machining capability for precise processing of complex geometries",
      icon: <Settings className="w-12 h-12" />,
      features: [
        "5-eksen simultane işleme",
        "Yüksek hassasiyet",
        "Karmaşık geometri işleme",
        "Otomatik takım değişimi"
      ],
      specs: [
        "X-Y-Z Travel: 762 x 508 x 508 mm",
        "Table Size: 500 x 400 mm",
        "Spindle Speed: 8,100 RPM",
        "Tool Changer: 24 Position"
      ]
    },
    {
      model: "HAAS VF6",
      type: "3-Axis VMC",
      capacity: "1600x700 capacity",
      description: "Ideal for processing large parts with a wide working area",
      icon: <Gauge className="w-12 h-12" />,
      features: [
        "Geniş işleme alanı",
        "Büyük parça kapasitesi",
        "Yüksek rijitlik",
        "Hassas konumlama"
      ],
      specs: [
        "X-Y-Z Travel: 1626 x 762 x 635 mm",
        "Table Size: 1651 x 406 mm",
        "Spindle Speed: 8,100 RPM",
        "Tool Changer: 24 Position"
      ]
    },
    {
      model: "HAAS VF4",
      type: "3-Axis VMC",
      capacity: "1300x600 capacity",
      description: "Precision machining optimized for medium-sized parts",
      icon: <Wrench className="w-12 h-12" />,
      features: [
        "Orta boy parça üretimi",
        "Hassas işleme",
        "Verimli üretim",
        "Esnek programlama"
      ],
      specs: [
        "X-Y-Z Travel: 1321 x 660 x 635 mm",
        "Table Size: 1321 x 356 mm",
        "Spindle Speed: 8,100 RPM",
        "Tool Changer: 24 Position"
      ]
    },
    {
      model: "HAAS ST10",
      type: "CNC Lathe",
      capacity: "305x410 capacity",
      description: "Precision turning capability for cylindrical parts",
      icon: <Zap className="w-12 h-12" />,
      features: [
        "Hassas tornalama",
        "Silindirik parçalar",
        "Yüksek yüzey kalitesi",
        "Otomatik takım sistemi"
      ],
      specs: [
        "Max Swing: Ø305 mm",
        "Max Length: 410 mm",
        "Spindle Speed: 4,000 RPM",
        "Tool Positions: 12"
      ]
    },
    {
      model: "HAAS HMM430",
      type: "CMM",
      capacity: "Coordinate Measuring Machine",
      description: "High-precision coordinate measuring machine for quality control",
      icon: <CheckCircle2 className="w-12 h-12" />,
      features: [
        "3D koordinat ölçme",
        "Mikron hassasiyeti",
        "Otomatik ölçme",
        "Detaylı raporlama"
      ],
      specs: [
        "Measuring Range: 400 x 300 x 300 mm",
        "Accuracy: ±2.5 μm",
        "Resolution: 0.1 μm",
        "Probe System: Touch Trigger"
      ]
    }
  ]

  return (
    <section id="machinery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Makinelerimiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HAAS'ın en ileri teknoloji ürünleri ile donatılmış modern makine parkımız, 
            havacılık endüstrisinin en zorlu gereksinimlerini karşılayacak kapasiteye sahiptir.
          </p>
        </div>

        <div className="space-y-12">
          {machines.map((machine, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Machine Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl">
                    {machine.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {machine.model}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      {machine.type} • {machine.capacity}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {machine.description}
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900">Özellikler:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {machine.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Teknik Özellikler:</h4>
                  <div className="space-y-2">
                    {machine.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0">
                        <span className="text-gray-600 font-medium">
                          {spec.split(':')[0]}:
                        </span>
                        <span className="text-gray-900 font-semibold">
                          {spec.split(':')[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Machine Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        {machine.icon}
                        <div className="text-white">
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800">{machine.model}</h4>
                      <p className="text-gray-600 mt-2">{machine.type}</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 right-6 w-6 h-6 border-2 border-blue-500 rotate-45 opacity-60"></div>
                  <div className="absolute top-1/4 right-8 w-2 h-16 bg-gradient-to-b from-blue-500 to-transparent opacity-40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 p-12 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-6">
              Teknoloji ve Deneyimin Gücü
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              HAAS'ın dünya çapında tanınan teknolojisi ve uzman ekibimizin deneyimi ile 
              havacılık endüstrisinin en karmaşık projelerine çözüm üretiyoruz.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
                <div className="text-gray-300">Modern HAAS Makinesi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Üretim Kapasitesi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">±2.5μm</div>
                <div className="text-gray-300">Ölçme Hassasiyeti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MachinerySection
