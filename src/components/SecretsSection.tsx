const SecretsSection = () => {
  const secrets = [
    {
      title: "Секрет 1:",
      description: "Делай контент с ценностью (гайды, кейсы).",
      icon: "💎",
    },
    {
      title: "Секрет 2:",
      description: "Прогревай 5-7 постами перед продажей.",
      icon: "🔥",
    },
    {
      title: "Секрет 3:",
      description: "Продавай простой продукт (гайд за 500 руб.).",
      icon: "💰",
    },
    {
      title: "Секрет 4:",
      description: "Будь активен — опросы и ответы.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Секреты Заработка с 300 Подписчиков
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {secrets.map((secret, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {secret.icon}
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">
                {secret.title}
              </h3>
              <p className="text-gray-300 text-lg">{secret.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecretsSection;
