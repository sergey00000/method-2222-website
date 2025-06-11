const PlanSection = () => {
  const steps = [
    "Анализ: Оцени аудиторию — из 300 подписчиков 30-60 активны.",
    "Продукт: Гайд за 1000 руб. (30 продаж = 30к рублей).",
    "Прогрев: 3 недели — знакомство, польза, запуск.",
    "Трафик: Добавь 50-100 подписчиков через чаты и пиар.",
    "Контроль: Веди таблицу постов, реакций и продаж.",
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          План Дохода Шаг за Шагом
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-2xl p-6 border border-orange-500/20"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                {index + 1}
              </div>
              <p className="text-lg text-gray-300 pt-2">{step}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
            alt="План развития"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
