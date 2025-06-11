const PlanSection = () => {
  const steps = [
    {
      title: "Анализ:",
      description:
        "Оцени свою аудиторию. Из 300 подписчиков 10-20% активны (30-60 человек). Это твоя база. Проведи опрос, чтобы понять их нужды.",
    },
    {
      title: "Продукт:",
      description:
        "Выбери предложение. Например, гайд «Первые продажи в Telegram» за 1000 рублей. Если продашь 30 копий — это 30к. Начни с малого: 5-10 продаж.",
    },
    {
      title: "Прогрев:",
      description:
        "Раздели на этапы. Неделя 1 — знакомство (кто ты), неделя 2 — польза (советы), неделя 3 — запуск (предложение). Мой прогрев дал рост продаж на 25%.",
    },
    {
      title: "Трафик:",
      description:
        "Добавь 50-100 подписчиков. Используй чаты, взаимный пиар, посты в других каналах. Я набрал 80 человек за месяц таким способом.",
    },
    {
      title: "Контроль:",
      description:
        "Веди таблицу: сколько постов, реакций, продаж. Если не идёт — меняй подход. Я корректировал план каждые 2 недели.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900/50 to-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          План Дохода Шаг за Шагом
        </h2>

        <p className="text-lg text-gray-300 text-center mb-16 font-montserrat">
          Теперь давай построим систему:
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-2xl p-6 border border-orange-500/20"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-300 text-center mt-12 font-montserrat">
          Этот план работает, если ты следуешь ему дисциплинированно. Начни с
          одного шага сегодня!
        </p>
      </div>
    </section>
  );
};

export default PlanSection;
