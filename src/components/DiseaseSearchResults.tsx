import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Loader2 } from "lucide-react";
import { SearchedDisease } from "@/hooks/useDiseaseSearch";

interface DiseaseSearchResultsProps {
  diseases: SearchedDisease[];
  loading: boolean;
  error: string | null;
  query: string;
  onDiseaseSelect?: (disease: SearchedDisease) => void;
}

const DiseaseSearchResults: React.FC<DiseaseSearchResultsProps> = ({
  diseases,
  loading,
  error,
  query,
  onDiseaseSelect
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin mr-2" />
        <span className="text-muted-foreground">Searching diseases...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive text-lg mb-2">Search Error</p>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!query) {
    return null;
  }

  if (diseases.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No diseases found for "{query}"
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Try different search terms or check the spelling
        </p>
      </div>
    );
  }

  const getCategoryColor = (category: 'common' | 'rare') => {
    return category === 'common' 
      ? 'bg-primary/20 text-primary border-primary'
      : 'bg-destructive/20 text-destructive border-destructive';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Search Results for "{query}"
        </h3>
        <Badge variant="outline">
          {diseases.length} result{diseases.length !== 1 ? 's' : ''}
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {diseases.map((disease) => (
          <Card 
            key={disease.id} 
            className="hover:shadow-medium transition-all duration-300 cursor-pointer group"
            onClick={() => onDiseaseSelect?.(disease)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getCategoryColor(disease.category)}`}
                >
                  {disease.category === 'common' ? 'Common Disease' : 'Rare Illness'}
                </Badge>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {disease.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              {disease.description && (
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {disease.description}
                </p>
              )}
              
              <Button 
                size="sm" 
                className="w-full group-hover:bg-primary/90 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onDiseaseSelect?.(disease);
                }}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiseaseSearchResults;