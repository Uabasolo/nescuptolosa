import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { venuesDataSchema, type Venue, type VenuesData } from '@/lib/validators/venue';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Carga y valida las instalaciones desde venues.yml
 */
export async function loadVenues(): Promise<VenuesData> {
  const filePath = path.join(DATA_DIR, 'venues.yml');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = YAML.parse(fileContents);
    
    // Validar con Zod
    const validated = venuesDataSchema.parse(data);
    
    return validated;
  } catch (error) {
    console.error('Error loading venues data:', error);
    throw new Error(`Failed to load venues data: ${error}`);
  }
}

/**
 * Obtiene una instalación por su ID
 */
export async function getVenueById(venueId: string): Promise<Venue | undefined> {
  const venuesData = await loadVenues();
  return venuesData.venues.find(venue => venue.id === venueId);
}

/**
 * Obtiene todas las instalaciones
 */
export async function getAllVenues(): Promise<Venue[]> {
  const venuesData = await loadVenues();
  return venuesData.venues;
}
