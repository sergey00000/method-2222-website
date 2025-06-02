const SpotsCounter = () => {
  const totalSpots = 30;
  const takenSpots = 0;
  const availableSpots = totalSpots - takenSpots;

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-orange-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            🎯 Количество мест
          </h3>

          <div className="mb-6">
            <div className="text-5xl font-bold text-orange-600 mb-2">
              {takenSpots}/{totalSpots}
            </div>
            <p className="text-gray-600 text-lg">
              Свободных мест:{" "}
              <span className="font-semibold text-green-600">
                {availableSpots}
              </span>
            </p>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-4 rounded-full transition-all duration-300"
              style={{ width: `${(takenSpots / totalSpots) * 100}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-500">
            Места заполняются в реальном времени
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpotsCounter;
