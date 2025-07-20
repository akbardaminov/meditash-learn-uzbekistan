import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import flashcardsImage from "@/assets/feature-flashcards.jpg";
import learningImage from "@/assets/feature-learning.jpg";
import progressImage from "@/assets/feature-progress.jpg";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [{
    title: t('features.flashcards.title'),
    description: t('features.flashcards.description'),
    image: flashcardsImage,
    imagePosition: "left"
  }, {
    title: t('features.learning.title'),
    description: t('features.learning.description'),
    image: learningImage,
    imagePosition: "right"
  }, {
    title: t('features.progress.title'),
    description: t('features.progress.description'),
    image: progressImage,
    imagePosition: "left"
  }];

  return (
    <SectionWrapper variant="feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-blue-500 text-center md:text-4xl">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="space-y-20">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden shadow-medium hover:shadow-glow transition-spring hover:scale-[1.02] bg-card/80 backdrop-blur-md border border-border/30 max-w-md mx-auto">
              <CardContent className="p-0">
                <div className={`flex flex-col ${feature.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                  <div className="md:w-1/2">
                    <img src={feature.image} alt={feature.title} className="w-full h-64 md:h-80 object-contain" />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;