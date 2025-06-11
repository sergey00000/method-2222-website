const ConclusionSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-4 h-4 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Действуй — Это Твой Шанс!
        </h2>

        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-orange-500/30 mb-12">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-montserrat mb-8">
            Хватит мечтать и ныть! С{" "}
            <span className="text-orange-400 font-semibold">
              300 подписчиками
            </span>{" "}
            ты можешь зарабатывать, если начнёшь сегодня. Меняй мышление: каждый
            день пробуй новое — новый формат поста, связка трафика, идея
            продукта. Я сам начинал с нуля и вышел на{" "}
            <span className="text-yellow-400 font-bold">100к</span> благодаря
            действиям и четко выстроенной системе.
          </p>

          <a
            href="https://t.me/sergeizapuskaet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 hover:from-yellow-600 hover:via-orange-600 hover:to-yellow-700 text-black font-bold text-lg px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/50 font-montserrat"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.378 2.618-1.409 3.074-2.904 1.911l-3.657-2.692-1.963 1.875c-.357.357-.673.673-1.371.673l.485-6.744 11.751-10.423c.51-.447-.108-.7-.793-.253L8.359 14.11l-3.715-1.136c-.809-.251-.826-.808.169-1.19l14.468-5.461c.674-.251 1.267.157 1.053 1.191l-.226 1.001z" />
            </svg>
            <span>Читать канал</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
