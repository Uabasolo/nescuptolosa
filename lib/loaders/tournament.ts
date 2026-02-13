import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { tournamentSchema, type Tournament } from '@/lib/validators/tournament';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Carga y valida los datos del torneo desde tournament.yml
 */
export async function loadTournament(): Promise<Tournament> {
  const filePath = path.join(DATA_DIR, 'tournament.yml');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = YAML.parse(fileContents);
    
    // Validar con Zod
    const validated = tournamentSchema.parse(data);
    
    return validated;
  } catch (error) {
    console.error('Error loading tournament data:', error);
    throw new Error(`Failed to load tournament data: ${error}`);
  }
}

/**
 * Obtiene las estadísticas del torneo
 */
export async function getTournamentStats() {
  const tournament = await loadTournament();
  return tournament.stats;
}

/**
 * Obtiene las fechas del torneo
 */
export async function getTournamentDates() {
  const tournament = await loadTournament();
  return tournament.dates;
}

/**
 * Obtiene información de contacto
 */
export async function getTournamentContact() {
  const tournament = await loadTournament();
  return tournament.contact;
}

/**
 * Obtiene información de inscripción
 */
export async function getTournamentRegistration() {
  const tournament = await loadTournament();
  return tournament.registration;
}
