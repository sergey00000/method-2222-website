import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WhySection from "@/components/WhySection";
import PainsSection from "@/components/PainsSection";
import SecretsSection from "@/components/SecretsSection";
import PlanSection from "@/components/PlanSection";
import ConclusionSection from "@/components/ConclusionSection";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-900 text-white">
      <HeroSection />
      <IntroSection />
      <WhySection />
      <PainsSection />
      <SecretsSection />
      <PlanSection />
      <ConclusionSection />
      <ContactsSection />
    </div>
  );
};

export default Index;
