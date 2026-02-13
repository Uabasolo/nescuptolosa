import { z } from 'zod';

// Schema para patrocinador individual
export const sponsorSchema = z.object({
  id: z.string(),
  name: z.string(),
  tier: z.enum(['principal', 'gold', 'silver', 'bronze', 'colaborador']),
  logo: z.string(),
  website: z.string().url(),
  description: z.string().optional(),
  active: z.boolean(),
  order: z.number(),
});

// Schema para tier de patrocinio
export const sponsorTierSchema = z.object({
  name: z.string(),
  displayName: z.string(),
  logoSize: z.enum(['small', 'medium', 'large']),
  benefits: z.array(z.string()),
});

// Schema para la estructura completa de patrocinadores
export const sponsorsDataSchema = z.object({
  sponsors: z.array(sponsorSchema),
  tiers: z.record(z.string(), sponsorTierSchema),
});

export type Sponsor = z.infer<typeof sponsorSchema>;
export type SponsorTier = z.infer<typeof sponsorTierSchema>;
export type SponsorsData = z.infer<typeof sponsorsDataSchema>;
