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
            , пиши вопросы.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
