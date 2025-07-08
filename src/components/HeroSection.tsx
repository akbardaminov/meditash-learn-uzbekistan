import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Medical Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80 dark:from-primary/70 dark:to-primary-glow/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Master Medicine with
          <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
            MediTash
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Revolutionize your medical education with AI-powered quizzes and real student experiences. 
          Learn from the best medical minds in Uzbekistan and beyond.
        </p>
        
        <Button 
          variant="accent" 
          size="xl" 
          className="text-lg px-8 py-4 shadow-glow hover:shadow-large transition-spring hover:scale-105 hover:-translate-y-1"
        >
          Start Learning Today
        </Button>
      </div>
      
      {/* Floating Medical Icons */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md animate-pulse shadow-glow">
        <div className="w-8 h-8 bg-accent rounded-full shadow-medium"></div>
      </div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md animate-pulse delay-300 shadow-glow">
        <div className="w-10 h-10 bg-accent rounded-full shadow-medium"></div>
      </div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-md animate-pulse delay-500">
        <div className="w-6 h-6 bg-primary rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;