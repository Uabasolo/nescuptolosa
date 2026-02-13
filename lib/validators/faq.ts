import { z } from 'zod';

// Schema para FAQ individual
export const faqSchema = z.object({
  id: z.string(),
  category: z.string(),
  question: z.string(),
  answer: z.string(),
  order: z.number(),
});

// Schema para categoría de FAQ
export const faqCategorySchema = z.object({
  name: z.string(),
  icon: z.string(),
  order: z.number(),
});

// Schema para la estructura completa de FAQs
export const faqsDataSchema = z.object({
  faqs: z.array(faqSchema),
  categories: z.record(z.string(), faqCategorySchema),
});

export type FAQ = z.infer<typeof faqSchema>;
export type FAQCategory = z.infer<typeof faqCategorySchema>;
export type FAQsData = z.infer<typeof faqsDataSchema>;
