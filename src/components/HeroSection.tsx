import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg px-8 py-4"
            >
              {t('hero.getStarted')}
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="text-lg px-8 py-4 border-2 hover:bg-primary/10 hover:border-primary hover:text-primary"
            >
              {t('hero.seeExamples')}
            </Button>
          </div>
        </div>
        
        {/* Right Content - Learning Dashboard Mockup */}
        <div className="hidden lg:block">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-large">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground ml-4">Medical Learning Dashboard</span>
              </div>
              
              <div className="space-y-3">
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold text-primary mb-2">Current Topic:</h3>
                  <p className="text-sm text-muted-foreground">Cardiovascular System - Heart Anatomy</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Problem: Students struggling with complex anatomy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Solution: AI-generated visual flashcards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <span className="text-sm">Progress: 85% completion rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;