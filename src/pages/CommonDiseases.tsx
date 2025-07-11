import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddDiseaseSection from "@/components/AddDiseaseSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Clock, Users, BookOpen, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useDiseasesStorage, Disease } from "@/hooks/useDiseasesStorage";

const CommonDiseases = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const { getDiseasesOfType } = useDiseasesStorage();

  const defaultDiseases: Disease[] = [
    {
      id: "default-1",
      name: "Hypertension",
      category: "Cardiovascular",
      prevalence: "High",
      studyTime: "2 weeks",
      students: 1240,
      difficulty: "Intermediate",
      description: "Essential hypertension and its management in primary care settings.",
      tags: ["Cardiovascular", "Chronic", "Primary Care"],
      type: "common",
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "default-2",
      name: "Diabetes Mellitus Type 2",
      category: "Endocrine",
      prevalence: "High",
      studyTime: "3 weeks",
      students: 980,
      difficulty: "Advanced",
      description: "Comprehensive approach to T2DM diagnosis, management, and complications.",
      tags: ["Endocrine", "Chronic", "Metabolism"],
      type: "common",
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "default-3",
      name: "Pneumonia",
      category: "Respiratory",
      prevalence: "High",
      studyTime: "1 week",
      students: 1100,
      difficulty: "Intermediate",
      description: "Community-acquired pneumonia diagnosis and treatment protocols.",
      tags: ["Respiratory", "Acute", "Infectious"],
      type: "common",
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "default-4",
      name: "Gastroenteritis",
      category: "Gastrointestinal",
      prevalence: "Very High",
      studyTime: "1 week",
      students: 850,
      difficulty: "Beginner",
      description: "Acute gastroenteritis management and prevention strategies.",
      tags: ["GI", "Acute", "Infectious"],
      type: "common",
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "default-5",
      name: "Urinary Tract Infection",
      category: "Genitourinary",
      prevalence: "High",
      studyTime: "1 week",
      students: 720,
      difficulty: "Beginner",
      description: "UTI diagnosis, treatment, and recurrence prevention.",
      tags: ["Genitourinary", "Infectious", "Primary Care"],
      type: "common",
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "default-6",
      name: "Asthma",
      category: "Respiratory",
      prevalence: "High",
      studyTime: "2 weeks",
      students: 900,
      difficulty: "Intermediate",
      description: "Asthma management, triggers, and emergency protocols.",
      tags: ["Respiratory", "Chronic", "Allergic"],
      type: "common",
      createdAt: "2024-01-01T00:00:00.000Z"
    }
  ];

  const [allDiseases, setAllDiseases] = useState<Disease[]>(defaultDiseases);

  useEffect(() => {
    const userDiseases = getDiseasesOfType('common');
    setAllDiseases([...defaultDiseases, ...userDiseases]);
  }, [refreshTrigger, getDiseasesOfType]);

  const filteredDiseases = allDiseases.filter(disease =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const visibleDiseases = filteredDiseases.slice(0, visibleCount);
  const hasMoreDiseases = filteredDiseases.length > visibleCount;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  const handleDiseaseAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-feature">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Common Diseases
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Master the most prevalent diseases with comprehensive study materials, 
            real student experiences, and AI-powered learning tools.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search diseases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Add Disease Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AddDiseaseSection type="common" onDiseaseAdded={handleDiseaseAdded} />
        </div>
      </section>

      {/* Diseases Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleDiseases.map((disease, index) => (
              <Card key={disease.id} className="hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {disease.category}
                    </Badge>
                    <Badge className={getDifficultyColor(disease.difficulty)}>
                      {disease.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {disease.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {disease.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {disease.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{disease.studyTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{disease.students.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {hasMoreDiseases && (
            <div className="text-center mt-8">
              <Button 
                onClick={handleLoadMore}
                variant="outline" 
                size="lg"
                className="min-w-40"
              >
                <ChevronDown className="w-4 h-4 mr-2" />
                Show More ({filteredDiseases.length - visibleCount} remaining)
              </Button>
            </div>
          )}
          
          {filteredDiseases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No diseases found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommonDiseases;