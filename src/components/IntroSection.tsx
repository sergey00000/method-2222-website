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
            Привет! Сегодня я раскрою, как превратить{" "}
            <span className="text-orange-400 font-semibold">
              300 подписчиков в Telegram
            </span>{" "}
            в реальный заработок. Это бесплатная информация для закрытого чата,
            где ты найдёшь ещё больше советов и поддержку. Даже с небольшой
            аудиторией можно выйти на доход от{" "}
            <span className="text-yellow-400 font-bold">
              10к до 50к рублей в месяц
            </span>
            , если знать секреты, разобраться с типичными проблемами и выстроить
            чёткий план. Готов{" "}
            <span className="text-yellow-400 font-semibold">
              ломать систему
            </span>{" "}
            и начать зарабатывать?{" "}
            <span className="text-orange-500 font-bold">Погнали!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
