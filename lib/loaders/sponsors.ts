import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { sponsorsDataSchema, type Sponsor, type SponsorsData } from '@/lib/validators/sponsor';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Carga y valida los patrocinadores desde sponsors.yml
 */
export async function loadSponsors(): Promise<SponsorsData> {
  const filePath = path.join(DATA_DIR, 'sponsors.yml');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = YAML.parse(fileContents);
    
    // Validar con Zod
    const validated = sponsorsDataSchema.parse(data);
    
    return validated;
  } catch (error) {
    console.error('Error loading sponsors data:', error);
    throw new Error(`Failed to load sponsors data: ${error}`);
  }
}

/**
 * Obtiene todos los patrocinadores activos
 */
export async function getActiveSponsors(): Promise<Sponsor[]> {
  const sponsorsData = await loadSponsors();
  return sponsorsData.sponsors
    .filter(sponsor => sponsor.active)
    .sort((a, b) => a.order - b.order);
}

/**
 * Obtiene patrocinadores por tier
 */
export async function getSponsorsByTier(tier: string): Promise<Sponsor[]> {
  const sponsorsData = await loadSponsors();
  return sponsorsData.sponsors
    .filter(sponsor => sponsor.tier === tier && sponsor.active)
    .sort((a, b) => a.order - b.order);
}

/**
 * Obtiene patrocinadores organizados por tier
 */
export async function getSponsorsGroupedByTier() {
  const sponsorsData = await loadSponsors();
  const grouped: Record<string, Sponsor[]> = {};
  
  const tiers = ['principal', 'gold', 'silver', 'bronze', 'colaborador'];
  
  tiers.forEach(tier => {
    grouped[tier] = sponsorsData.sponsors
      .filter(sponsor => sponsor.tier === tier && sponsor.active)
      .sort((a, b) => a.order - b.order);
  });
  
  return {
    sponsors: grouped,
    tiers: sponsorsData.tiers,
  };
}
