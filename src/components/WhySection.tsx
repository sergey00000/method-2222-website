const WhySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          300 — Это Начало, а Не Предел
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              С{" "}
              <span className="text-orange-400 font-semibold">
                300 активных подписчиков
              </span>{" "}
              можно зарабатывать от
              <span className="text-yellow-400 font-bold">
                {" "}
                100к до 1млн рублей
              </span>{" "}
              в месяц. Качество важнее количества.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Мой кейс: с{" "}
              <span className="text-orange-400">320 подписками</span> я сделал
              первые
              <span className="text-yellow-400 font-semibold"> 20к</span>, а
              потом масштабировал. Секрет в фокусе на{" "}
              <span className="text-orange-500 font-semibold">ценности</span>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 border border-orange-400/30">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
              alt="График роста"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
