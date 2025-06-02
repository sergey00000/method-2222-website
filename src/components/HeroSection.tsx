import { useState, useEffect } from "react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-06T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-montserrat">
            🔥 Метод 2222
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Закрытый чат
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            ⏰ До запуска осталось:
          </h2>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-4 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-orange-600">
                  {timeLeft.days}
                </span>
              </div>
              <span className="text-sm text-gray-600">дней</span>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-4 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-orange-600">
                  {timeLeft.hours}
                </span>
              </div>
              <span className="text-sm text-gray-600">часов</span>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-4 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-orange-600">
                  {timeLeft.minutes}
                </span>
              </div>
              <span className="text-sm text-gray-600">минут</span>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-lg p-4 mb-2 animate-pulse">
                <span className="text-2xl md:text-3xl font-bold text-orange-600">
                  {timeLeft.seconds}
                </span>
              </div>
              <span className="text-sm text-gray-600">секунд</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
