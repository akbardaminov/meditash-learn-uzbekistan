import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface SearchedDisease {
  id: string;
  name: string;
  description?: string;
  category: 'common' | 'rare';
}

export interface SearchResult {
  diseases: SearchedDisease[];
  total: number;
  query: string;
  category: string;
}

export const useDiseaseSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchDiseases = useCallback(async (
    query: string, 
    category?: 'common' | 'rare'
  ): Promise<SearchResult | null> => {
    if (!query.trim()) {
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const { data, error: functionError } = await supabase.functions.invoke('search-diseases', {
        body: { query: query.trim(), category }
      });

      if (functionError) {
        throw new Error(functionError.message);
      }

      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while searching';
      setError(errorMessage);
      console.error('Disease search error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    searchDiseases,
    loading,
    error
  };
};