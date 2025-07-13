import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Common diseases list for categorization
const commonDiseases = [
  'flu', 'common cold', 'migraine', 'headache', 'diabetes', 'hypertension', 
  'bronchitis', 'pneumonia', 'gastritis', 'allergies', 'arthritis', 'asthma',
  'depression', 'anxiety', 'obesity', 'osteoporosis', 'anemia', 'eczema',
  'acne', 'insomnia', 'back pain', 'heart disease', 'stroke', 'cancer',
  'kidney disease', 'liver disease', 'gallstones', 'appendicitis',
  'food poisoning', 'urinary tract infection', 'sinusitis', 'tonsillitis'
];

interface Disease {
  id: string;
  name: string;
  description?: string;
  category: 'common' | 'rare';
}

function categorizeDiseases(diseases: any[]): Disease[] {
  return diseases.map(disease => {
    const diseaseName = disease.name || disease.Name || '';
    const isCommon = commonDiseases.some(common => 
      diseaseName.toLowerCase().includes(common.toLowerCase()) ||
      common.toLowerCase().includes(diseaseName.toLowerCase())
    );
    
    return {
      id: disease.id || disease.ID || Math.random().toString(36).substr(2, 9),
      name: diseaseName,
      description: disease.description || disease.Description || '',
      category: isCommon ? 'common' : 'rare'
    };
  });
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query, category } = await req.json();
    
    if (!query) {
      return new Response(
        JSON.stringify({ error: 'Search query is required' }), 
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // For now, we'll create a mock response since we need to implement proper ApiMedic integration
    // In a real implementation, you would need ApiMedic credentials and make actual API calls
    const mockDiseases = [
      { id: '1', name: 'Influenza', description: 'Viral infection affecting the respiratory system' },
      { id: '2', name: 'Migraine', description: 'Severe headache often accompanied by nausea' },
      { id: '3', name: 'Pneumonia', description: 'Infection that inflames air sacs in lungs' },
      { id: '4', name: 'Diabetes Type 2', description: 'Condition affecting blood sugar regulation' },
      { id: '5', name: 'Hypertension', description: 'High blood pressure condition' },
      { id: '6', name: 'Fibromyalgia', description: 'Chronic condition causing widespread pain' },
      { id: '7', name: 'Lupus', description: 'Autoimmune disease affecting various organs' },
      { id: '8', name: 'Crohn\'s Disease', description: 'Inflammatory bowel disease' }
    ].filter(disease => 
      disease.name.toLowerCase().includes(query.toLowerCase()) ||
      disease.description.toLowerCase().includes(query.toLowerCase())
    );

    const categorizedDiseases = categorizeDiseases(mockDiseases);
    
    // Filter by category if specified
    const filteredDiseases = category 
      ? categorizedDiseases.filter(disease => disease.category === category)
      : categorizedDiseases;

    return new Response(
      JSON.stringify({ 
        diseases: filteredDiseases,
        total: filteredDiseases.length,
        query: query,
        category: category || 'all'
      }), 
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in search-diseases function:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});