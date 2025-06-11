const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Анимированные искры */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
          Заработок с 300 подписчиков
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-montserrat">
          Секреты, Боли и План Дохода
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
