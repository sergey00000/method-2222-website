import HeroSection from "@/components/HeroSection";
import SpotsCounter from "@/components/SpotsCounter";
import ContentBlock from "@/components/ContentBlock";
import PaymentButton from "@/components/PaymentButton";
import TelegramLink from "@/components/TelegramLink";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SpotsCounter />
      <ContentBlock />
      <PaymentButton />
      <TelegramLink />
    </div>
  );
};

export default Index;
