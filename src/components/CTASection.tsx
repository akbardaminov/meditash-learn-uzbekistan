import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Start Your Medical Mastery Today
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of medical students who are already advancing their careers with MediTash
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {[
            "AI-Powered Learning",
            "Student Experiences",
            "Progress Tracking",
            "Free to Start"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant="accent" 
          size="xl" 
          className="text-lg px-10 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        >
          Get Started Now
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <p className="text-sm text-white/70 mt-4">
          No credit card required • Start learning in minutes
        </p>
      </div>
    </section>
  );
};

export default CTASection;