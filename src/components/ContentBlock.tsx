const ContentBlock = () => {
  const features = [
    {
      icon: "🎧",
      title: "2 подкаста",
      description: "Путь к 320к и рост в ТГ",
    },
    {
      icon: "🗺️",
      title: "2 майндкарты",
      description: "Канал и монетизация",
    },
    {
      icon: "📖",
      title: "2 статьи",
      description: "Ошибки продаж",
    },
    {
      icon: "📊",
      title: "2 презентации",
      description: "Рост до 1к, заработок с 300",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💎 Что внутри
          </h2>
          <p className="text-xl text-gray-600">
            Комплексные материалы для изучения методики
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-orange-50 rounded-xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-orange-800 mb-2">
              🚀 Метод 2222
            </h3>
            <p className="text-orange-700 max-w-lg">
              Уникальная система, которая поможет вам достичь результатов
              используя проверенные техники и подходы
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
