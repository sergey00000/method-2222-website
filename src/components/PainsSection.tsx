const PainsSection = () => {
  const pains = [
    {
      problem: "Не знаю, как продавать?",
      solution: "Продавай через кейсы и отзывы.",
      icon: "💡",
    },
    {
      problem: "Мало подписчиков?",
      solution: "Бери трафик из чатов и ВП.",
      icon: "📈",
    },
    {
      problem: "Нет идей?",
      solution: "Опроси ЦА.",
      icon: "🔓",
    },
    {
      problem: "Боюсь начать?",
      solution: "Сделай первый пост сегодня!",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-blue-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Боли Новичков и Как Их Побороть
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{pain.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-3">
                    {pain.problem}
                  </h3>
                  <p className="text-gray-300">
                    <span className="text-yellow-400 font-semibold">
                      Решение:
                    </span>{" "}
                    {pain.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainsSection;
