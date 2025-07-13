import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      label: "Active Students",
      value: "12,000+",
      description: "Learning medical concepts daily"
    },
    {
      icon: BookOpen,
      label: "Diseases Covered",
      value: "500+",
      description: "Comprehensive medical database"
    },
    {
      icon: Award,
      label: "Success Rate",
      value: "94%",
      description: "Students pass their exams"
    },
    {
      icon: TrendingUp,
      label: "Study Efficiency",
      value: "3x Faster",
      description: "Compared to traditional methods"
    }
  ];

  return (
    <section className="py-16 bg-gradient-feature">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Medical Students Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have transformed their medical education with MediTash
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-glow hover:scale-105 transition-all duration-300 bg-gradient-card border-primary/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-hero rounded-full mb-3 shadow-lg">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="font-semibold text-foreground mb-1 text-sm">{stat.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;