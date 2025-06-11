const PainsSection = () => {
  const pains = [
    {
      problem: "Не знаю, как продавать?",
      solution:
        "Многие боятся предложить продукт, думая, что их засмеют. Решение: начни с мягкого подхода. Делись кейсами («Как я сделал 10к с 200 подписчиков») и собирай отзывы. Например, предложи бесплатный мини-гайд, а потом мягко предложи платный.",
      icon: "💡",
    },
    {
      problem: "Мало подписчиков?",
      solution:
        "Это частая отговорка. Решение: используй бесплатные источники трафика. Входи в тематические чаты, отвечай на вопросы, договаривайся о взаимном пиаре с другими каналами. Мой совет: запусти опрос («Что вам нужно?») — это привлечёт людей.",
      icon: "📈",
    },
    {
      problem: "Нет идей для контента?",
      solution:
        "Бывает, сидишь и думаешь: «О чём писать?» Решение: спроси у своей аудитории через пост или комментарии. Дополни это анализом конкурентов — посмотри топ-10 каналов в нише и адаптируй их подходы. Пример: если они дают гайды, сделай свой с уникальным углом.",
      icon: "🔓",
    },
    {
      problem: "Боюсь начать?",
      solution:
        "Страх парализует. Решение: начни с малого — напиши первый пост сегодня. Даже если он не идеален, действие важнее. Мой первый пост был кривым, но он дал 50 подписчиков за неделю.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Боли Новичков и Как Их Побороть
        </h2>

        <p className="text-lg text-gray-300 text-center mb-16 font-montserrat">
          Каждый, кто начинает, сталкивается с барьерами. Давай разберём их и
          найдём решения:
        </p>

        <div className="grid md:grid-cols-1 gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{pain.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">
                    {pain.problem}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {pain.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-300 text-center mt-12 font-montserrat">
          Эти боли решаемы, если действовать шаг за шагом. Не жди идеального
          момента — он не придёт.
        </p>
      </div>
    </section>
  );
};

export default PainsSection;
