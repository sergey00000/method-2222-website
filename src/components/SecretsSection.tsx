const SecretsSection = () => {
  const secrets = [
    {
      title: "Секрет 1: Контент с ценностью",
      description:
        "Пишите посты, которые решают проблемы. Например, «5 ошибок новичков в Telegram» или «Как набрать 100 подписчиков за 7 дней». Добавь структуру: ввод, суть, вывод. Это удержит читателя.",
      icon: "💎",
    },
    {
      title: "Секрет 2: Прогрев аудитории",
      description:
        "Не продавай сразу. Делай 5-7 постов, где показываешь экспертность: истории успеха, полезные советы, бесплатные чек-листы. Пример: я выложил серию «День 1: Идея канала», и доверие выросло на 30%.",
      icon: "🔥",
    },
    {
      title: "Секрет 3: Продукт для ЦА",
      description:
        "Создай что-то простое — PDF-гайд («Как начать продавать») за 500-1000 рублей или 1-часовую консультацию. Тестируй: предложи 10 людям, посмотри реакцию. Мой первый гайд ушёл 15 копий за неделю.",
      icon: "💰",
    },
    {
      title: "Секрет 4: Активность",
      description:
        "Отвечай на комментарии, запускай опросы («Какой формат вам нравится?»). Это создаёт сообщество. Я добавил опросы — и вовлечённость подскочила на 40%.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Секреты Заработка с 300 Подписчиков
        </h2>

        <p className="text-lg text-gray-300 text-center mb-16 font-montserrat">
          Давай углубимся в то, что реально работает:
        </p>

        <div className="grid md:grid-cols-1 gap-8">
          {secrets.map((secret, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {secret.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    {secret.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {secret.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-300 text-center mt-12 font-montserrat">
          Эти секреты работают, если ты их применяешь. Экспериментируй и
          адаптируй под себя.
        </p>
      </div>
    </section>
  );
};

export default SecretsSection;
