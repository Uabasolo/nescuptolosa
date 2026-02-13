import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { faqsDataSchema, type FAQ, type FAQsData } from '@/lib/validators/faq';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Carga y valida las FAQs desde faqs.yml
 */
export async function loadFAQs(): Promise<FAQsData> {
  const filePath = path.join(DATA_DIR, 'faqs.yml');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = YAML.parse(fileContents);
    
    // Validar con Zod
    const validated = faqsDataSchema.parse(data);
    
    return validated;
  } catch (error) {
    console.error('Error loading FAQs data:', error);
    throw new Error(`Failed to load FAQs data: ${error}`);
  }
}

/**
 * Obtiene todas las FAQs ordenadas por categoría y orden
 */
export async function getAllFAQs(): Promise<FAQ[]> {
  const faqsData = await loadFAQs();
  return faqsData.faqs.sort((a, b) => {
    if (a.category !== b.category) {
      const catA = faqsData.categories[a.category];
      const catB = faqsData.categories[b.category];
      return catA.order - catB.order;
    }
    return a.order - b.order;
  });
}

/**
 * Obtiene FAQs por categoría
 */
export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
  const faqsData = await loadFAQs();
  return faqsData.faqs
    .filter(faq => faq.category === category)
    .sort((a, b) => a.order - b.order);
}

/**
 * Obtiene FAQs organizadas por categoría
 */
export async function getFAQsGroupedByCategory() {
  const faqsData = await loadFAQs();
  const grouped: Record<string, FAQ[]> = {};
  
  Object.keys(faqsData.categories).forEach(categoryId => {
    grouped[categoryId] = faqsData.faqs
      .filter(faq => faq.category === categoryId)
      .sort((a, b) => a.order - b.order);
  });
  
  return {
    faqs: grouped,
    categories: faqsData.categories,
  };
}

/**
 * Busca FAQs por palabra clave
 */
export async function searchFAQs(query: string): Promise<FAQ[]> {
  const faqsData = await loadFAQs();
  const lowercaseQuery = query.toLowerCase();
  
  return faqsData.faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(lowercaseQuery) ||
      faq.answer.toLowerCase().includes(lowercaseQuery)
  );
}
