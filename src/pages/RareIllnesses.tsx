import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Clock, Users, BookOpen, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const RareIllnesses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const rareIllnesses = [
    {
      name: "Huntington's Disease",
      category: "Neurological",
      prevalence: "1 in 10,000",
      studyTime: "4 weeks",
      students: 180,
      difficulty: "Advanced",
      description: "Progressive neurodegenerative disorder affecting movement, cognition, and behavior.",
      tags: ["Neurological", "Genetic", "Degenerative"],
      rarity: "Rare"
    },
    {
      name: "Amyotrophic Lateral Sclerosis (ALS)",
      category: "Neurological",
      prevalence: "1 in 50,000",
      studyTime: "3 weeks",
      students: 145,
      difficulty: "Advanced",
      description: "Progressive motor neuron disease affecting voluntary muscle control.",
      tags: ["Neurological", "Motor", "Progressive"],
      rarity: "Very Rare"
    },
    {
      name: "Fabry Disease",
      category: "Genetic",
      prevalence: "1 in 40,000",
      studyTime: "2 weeks",
      students: 95,
      difficulty: "Advanced",
      description: "X-linked lysosomal storage disorder affecting multiple organ systems.",
      tags: ["Genetic", "Lysosomal", "Multi-system"],
      rarity: "Rare"
    },
    {
      name: "Moyamoya Disease",
      category: "Vascular",
      prevalence: "1 in 100,000",
      studyTime: "3 weeks",
      students: 120,
      difficulty: "Advanced",
      description: "Progressive cerebrovascular disorder causing stenosis of internal carotid arteries.",
      tags: ["Vascular", "Cerebral", "Progressive"],
      rarity: "Very Rare"
    },
    {
      name: "Gaucher Disease",
      category: "Genetic",
      prevalence: "1 in 60,000",
      studyTime: "2 weeks",
      students: 85,
      difficulty: "Advanced",
      description: "Lysosomal storage disorder affecting the liver, spleen, and bone marrow.",
      tags: ["Genetic", "Lysosomal", "Metabolic"],
      rarity: "Rare"
    },
    {
      name: "Marfan Syndrome",
      category: "Genetic",
      prevalence: "1 in 3,000",
      studyTime: "2 weeks",
      students: 220,
      difficulty: "Intermediate",
      description: "Connective tissue disorder affecting cardiovascular, skeletal, and ocular systems.",
      tags: ["Genetic", "Connective Tissue", "Multi-system"],
      rarity: "Uncommon"
    }
  ];

  const filteredIllnesses = rareIllnesses.filter(illness =>
    illness.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    illness.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    illness.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Uncommon": return "bg-accent/20 text-accent-foreground border-accent";
      case "Rare": return "bg-primary/20 text-primary-foreground border-primary";
      case "Very Rare": return "bg-destructive/20 text-destructive-foreground border-destructive";
      default: return "bg-secondary/20 text-secondary-foreground border-secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-feature">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Rare Illnesses
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore comprehensive resources for rare diseases and conditions. 
            Learn from expert cases, student experiences, and specialized medical insights.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search rare illnesses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Educational Note */}
      <section className="py-8 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Rare diseases affect fewer than 1 in 2,000 people. 
              These conditions require specialized knowledge and often involve complex diagnostic approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Illnesses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIllnesses.map((illness, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {illness.category}
                    </Badge>
                    <Badge className={getDifficultyColor(illness.difficulty)}>
                      {illness.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={`text-xs ${getRarityColor(illness.rarity)}`}>
                      {illness.rarity}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {illness.prevalence}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {illness.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {illness.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {illness.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{illness.studyTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{illness.students.toLocaleString()}</span>
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
          
          {filteredIllnesses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No rare illnesses found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RareIllnesses;