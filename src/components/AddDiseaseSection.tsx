import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Save } from "lucide-react";
import { useDiseasesStorage } from "@/hooks/useDiseasesStorage";
import { useToast } from "@/hooks/use-toast";

interface AddDiseaseSectionProps {
  type: "common" | "rare";
  onDiseaseAdded?: () => void;
}

const AddDiseaseSection = ({ type, onDiseaseAdded }: AddDiseaseSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { addDisease } = useDiseasesStorage();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    difficulty: "",
    description: "",
    prevalence: "",
    studyTime: "",
    tags: [] as string[],
    newTag: ""
  });

  const categories = [
    { key: "respiratory", label: t('categories.respiratory') },
    { key: "cardiovascular", label: t('categories.cardiovascular') },
    { key: "neurological", label: t('categories.neurological') },
    { key: "gastrointestinal", label: t('categories.gastrointestinal') },
    { key: "endocrine", label: t('categories.endocrine') },
    { key: "musculoskeletal", label: t('categories.musculoskeletal') },
    { key: "dermatological", label: t('categories.dermatological') },
    { key: "hematological", label: t('categories.hematological') },
    { key: "oncological", label: t('categories.oncological') },
    { key: "infectious", label: t('categories.infectious') },
    { key: "other", label: t('categories.other') },
  ];

  const difficulties = [
    { key: "beginner", label: t('difficulty.beginner') },
    { key: "intermediate", label: t('difficulty.intermediate') },
    { key: "advanced", label: t('difficulty.advanced') },
  ];

  const handleAddTag = () => {
    if (formData.newTag.trim() && !formData.tags.includes(formData.newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, formData.newTag.trim()],
        newTag: ""
      });
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.category || !formData.difficulty) {
      toast({
        title: t('addDisease.error'),
        description: t('addDisease.required'),
        variant: "destructive",
      });
      return;
    }

    try {
      const newDisease = addDisease({
        name: formData.name,
        category: formData.category,
        difficulty: formData.difficulty,
        description: formData.description,
        prevalence: formData.prevalence || (type === "common" ? "High" : "Very Rare"),
        studyTime: formData.studyTime || "2 weeks",
        tags: formData.tags,
        type,
        rarity: type === "rare" ? formData.prevalence || "Very Rare" : undefined,
      });

      toast({
        title: t('addDisease.success'),
        description: t('addDisease.successDescription', { 
          name: newDisease.name, 
          type: type === 'common' ? t('nav.commonDiseases').toLowerCase() : t('nav.rareIllnesses').toLowerCase()
        }),
      });

      // Reset form
      setFormData({
        name: "",
        category: "",
        difficulty: "",
        description: "",
        prevalence: "",
        studyTime: "",
        tags: [],
        newTag: ""
      });
      setIsOpen(false);
      
      // Notify parent component
      onDiseaseAdded?.();
    } catch (error) {
      toast({
        title: t('addDisease.error'),
        description: t('addDisease.errorDescription'),
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="hero"
          size="lg"
          className="shadow-glow hover:shadow-large transition-spring"
        >
          <Plus className="mr-2 h-5 w-5" />
          {t('addDisease.title', { type: type === 'common' ? t('nav.commonDiseases') : t('nav.rareIllnesses') })}
        </Button>
      </div>

      {isOpen && (
        <Card className="max-w-4xl mx-auto bg-gradient-card shadow-large border-primary/20 animate-fade-in">
          <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              <Plus className="h-6 w-6" />
              {t('addDisease.title', { type: type === 'common' ? t('nav.commonDiseases') : t('nav.rareIllnesses') })}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">{t('addDisease.name')} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('addDisease.namePlaceholder')}
                    required
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">{t('addDisease.category')} *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger className="focus:ring-primary focus:border-primary">
                      <SelectValue placeholder={t('addDisease.categoryPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.key} value={category.key}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="difficulty" className="text-sm font-medium">{t('addDisease.difficulty')} *</Label>
                  <Select value={formData.difficulty} onValueChange={(value) => setFormData({ ...formData, difficulty: value })}>
                    <SelectTrigger className="focus:ring-primary focus:border-primary">
                      <SelectValue placeholder={t('addDisease.difficultyPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map((difficulty) => (
                        <SelectItem key={difficulty.key} value={difficulty.key}>
                          {difficulty.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prevalence" className="text-sm font-medium">
                    {type === "common" ? "Prevalence" : "Rarity"}
                  </Label>
                  <Input
                    id="prevalence"
                    value={formData.prevalence}
                    onChange={(e) => setFormData({ ...formData, prevalence: e.target.value })}
                    placeholder={type === "common" ? "e.g., 1 in 100" : "e.g., 1 in 10,000"}
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studyTime" className="text-sm font-medium">Estimated Study Time</Label>
                  <Input
                    id="studyTime"
                    value={formData.studyTime}
                    onChange={(e) => setFormData({ ...formData, studyTime: e.target.value })}
                    placeholder="e.g., 2 hours"
                    className="focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide a detailed description of the disease..."
                  rows={4}
                  className="focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Tags</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={formData.newTag}
                    onChange={(e) => setFormData({ ...formData, newTag: e.target.value })}
                    placeholder="Add a tag..."
                    className="flex-1 focus:ring-primary focus:border-primary"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  />
                  <Button type="button" onClick={handleAddTag} variant="outline" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-2 text-xs hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  type="submit"
                  variant="hero"
                  className="flex-1 shadow-glow hover:shadow-large transition-spring"
                >
                  <Save className="mr-2 h-5 w-5" />
                  {t('addDisease.save')}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  {t('addDisease.cancel')}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AddDiseaseSection;