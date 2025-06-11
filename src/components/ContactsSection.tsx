import { useState } from "react";

const ContactsSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Давай Вместе!
        </h2>

        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-orange-500/30 mb-12">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-montserrat mb-8">
            Это только начало. С системой ты вырастешь до{" "}
            <span className="text-orange-400 font-semibold">1000+</span> и
            большего дохода. Подписывайся на{" "}
            <a
              href="https://t.me/sergeizapuskaet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-orange-400 transition-colors duration-300 font-semibold underline"
            >
              Telegram-канал
            </a>
            , пиши вопросы. Следующий раз — "Масштабирование продаж"!
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Твой email"
                className="flex-1 px-6 py-4 bg-slate-800/80 border border-orange-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 font-montserrat"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 hover:from-yellow-600 hover:via-orange-600 hover:to-yellow-700 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-montserrat"
              >
                Подписаться
              </button>
            </div>
            {isSubscribed && (
              <p className="text-green-400 mt-4 font-semibold">
                ✅ Спасибо! Ты подписан на обновления
              </p>
            )}
          </form>

          <div className="flex justify-center">
            <a
              href="https://t.me/sergeizapuskaet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-orange-400 hover:text-yellow-400 transition-colors duration-300 text-lg font-semibold"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.378 2.618-1.409 3.074-2.904 1.911l-3.657-2.692-1.963 1.875c-.357.357-.673.673-1.371.673l.485-6.744 11.751-10.423c.51-.447-.108-.7-.793-.253L8.359 14.11l-3.715-1.136c-.809-.251-.826-.808.169-1.19l14.468-5.461c.674-.251 1.267.157 1.053 1.191l-.226 1.001z" />
              </svg>
              <span>@sergeizapuskaet</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
