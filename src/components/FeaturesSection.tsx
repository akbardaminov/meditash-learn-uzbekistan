import { Card, CardContent } from "@/components/ui/card";
import flashcardsImage from "@/assets/feature-flashcards.jpg";
import learningImage from "@/assets/feature-learning.jpg";
import progressImage from "@/assets/feature-progress.jpg";
const FeaturesSection = () => {
  const features = [{
    title: "Smart AI-Powered Flashcards",
    description: "Master medical concepts with intelligent flashcards that adapt to your learning style. Our AI analyzes your performance to focus on areas that need improvement, helping you memorize disease facts quickly and efficiently.",
    image: flashcardsImage,
    imagePosition: "left"
  }, {
    title: "Personalized Learning Paths",
    description: "Experience tailored education that adapts to your medical field and study pace. Whether you're studying cardiology, pediatrics, or any other specialty, MediTash creates a customized learning journey just for you.",
    image: learningImage,
    imagePosition: "right"
  }, {
    title: "Track Your Progress",
    description: "Monitor your medical knowledge growth with comprehensive progress tracking. View detailed quiz statistics, identify knowledge gaps, and celebrate your achievements as you advance through your medical education.",
    image: progressImage,
    imagePosition: "left"
  }];
  return <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose MediTash?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced features designed specifically for medical education
          </p>
        </div>
        
        <div className="space-y-20">
          {features.map((feature, index) => <Card key={index} className="overflow-hidden shadow-medium hover:shadow-glow transition-spring hover:scale-[1.02] bg-card/80 backdrop-blur-md border border-border/30">
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
            </Card>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;