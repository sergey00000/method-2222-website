const IntroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop"
            alt="Разрывая цепи к успеху"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl mb-8"
          />
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-orange-500/20">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-montserrat">
            Привет! Сегодня я покажу, как превратить{" "}
            <span className="text-orange-400 font-semibold">
              300 подписчиков
            </span>{" "}
            в Telegram в реальный заработок. Это бесплатная инфа для закрытого
            чата. Мы разберём типичные боли новичков, раскроем секреты и
            создадим стратегию. Готовы{" "}
            <span className="text-yellow-400 font-semibold">
              ломать систему
            </span>
            ?<span className="text-orange-500 font-bold"> Погнали!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
