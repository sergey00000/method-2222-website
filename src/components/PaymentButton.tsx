import { Button } from "@/components/ui/button";

interface PaymentButtonProps {
  price?: string;
  onClick?: () => void;
}

const PaymentButton = ({ price = "1.499₽", onClick }: PaymentButtonProps) => {
  const handleClick = () => {
    // Переход на форму оплаты Продамус
    window.open("https://sergeizapuskaet.payform.ru/", "_blank");
    if (onClick) {
      onClick();
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-100">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              🔥 Получить доступ
            </h3>
            <p className="text-gray-600">Ограниченное предложение</p>
          </div>

          <div className="mb-8">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {price}
            </div>
            <div className="text-sm text-gray-500 line-through">2.999₽</div>
          </div>

          <Button
            onClick={handleClick}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            size="lg"
          >
            💳 Оплатить {price}
          </Button>

          <p className="text-xs text-gray-500 mt-4">
            Безопасная оплата через Продамус
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentButton;
