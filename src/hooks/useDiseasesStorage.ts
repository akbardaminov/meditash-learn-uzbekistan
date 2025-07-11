import { useState, useEffect } from 'react';

export interface Disease {
  id: string;
  name: string;
  category: string;
  prevalence: string;
  studyTime: string;
  students: number;
  difficulty: string;
  description: string;
  tags: string[];
  type: 'common' | 'rare';
  rarity?: string;
  createdAt: string;
}

const STORAGE_KEY = 'meditash_diseases';

export const useDiseasesStorage = () => {
  const [diseases, setDiseases] = useState<Disease[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setDiseases(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse stored diseases:', error);
      }
    }
  }, []);

  const addDisease = (disease: Omit<Disease, 'id' | 'createdAt' | 'students'>) => {
    const newDisease: Disease = {
      ...disease,
      id: Date.now().toString(),
      students: Math.floor(Math.random() * 500) + 50, // Random student count
      createdAt: new Date().toISOString(),
    };

    const updatedDiseases = [...diseases, newDisease];
    setDiseases(updatedDiseases);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedDiseases));
    
    return newDisease;
  };

  const getDiseasesOfType = (type: 'common' | 'rare') => {
    return diseases.filter(disease => disease.type === type);
  };

  const clearDiseases = () => {
    setDiseases([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    diseases,
    addDisease,
    getDiseasesOfType,
    clearDiseases,
  };
};