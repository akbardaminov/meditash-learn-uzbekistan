import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const CTASection = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper variant="cta">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          {t('cta.title')}
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {[
            t('cta.feature1'),
            t('cta.feature2'),
            t('cta.feature3'),
            t('cta.feature4')
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-foreground">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant="hero" 
          size="xl" 
          className="text-lg px-10 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        >
          {t('hero.getStarted')}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <p className="text-sm text-muted-foreground mt-4">
          Completely Free
        </p>
      </div>
    </SectionWrapper>
  );
};

export default CTASection;