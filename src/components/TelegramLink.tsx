const TelegramLink = () => {
  const telegramHandle = "SergeiZapuskaet";

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            💬 Остались вопросы?
          </h3>
          <p className="text-gray-600 mb-6">
            Свяжитесь с автором проекта напрямую
          </p>

          <a
            href={`https://t.me/${telegramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.378 2.618-1.409 3.074-2.904 1.911l-3.657-2.692-1.963 1.875c-.357.357-.673.673-1.371.673l.485-6.744 11.751-10.423c.51-.447-.108-.7-.793-.253L8.359 14.11l-3.715-1.136c-.809-.251-.826-.808.169-1.19l14.468-5.461c.674-.251 1.267.157 1.053 1.191l-.226 1.001z" />
            </svg>
            <span>@{telegramHandle}</span>
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Обычно отвечаю в течение часа
          </p>
        </div>
      </div>
    </section>
  );
};

export default TelegramLink;
