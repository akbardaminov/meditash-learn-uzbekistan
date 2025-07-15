import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();
  
  const stats = [
    {
      icon: Users,
      label: t('stats.activeStudents'),
      value: "12,000+",
      description: t('stats.activeStudentsDesc')
    },
    {
      icon: BookOpen,
      label: t('stats.diseasesCovered'),
      value: "500+",
      description: t('stats.diseasesCoveredDesc')
    },
    {
      icon: Award,
      label: t('stats.successRate'),
      value: "94%",
      description: t('stats.successRateDesc')
    },
    {
      icon: TrendingUp,
      label: t('stats.studyEfficiency'),
      value: "3x Faster",
      description: t('stats.studyEfficiencyDesc')
    }
  ];

  return (
    <section className="py-16 bg-gradient-feature">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('stats.subtitle')}
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