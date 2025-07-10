import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import AIMessagingSection from "@/components/AIMessagingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark-bg dark:bg-gradient-dark-bg bg-gradient-mesh">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <AIMessagingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;