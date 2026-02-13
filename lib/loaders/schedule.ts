import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { scheduleDataSchema, type Match, type ScheduleData } from '@/lib/validators/schedule';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Carga y valida el calendario desde schedule.yml
 */
export async function loadSchedule(): Promise<ScheduleData> {
  const filePath = path.join(DATA_DIR, 'schedule.yml');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = YAML.parse(fileContents);
    
    // Validar con Zod
    const validated = scheduleDataSchema.parse(data);
    
    return validated;
  } catch (error) {
    console.error('Error loading schedule data:', error);
    throw new Error(`Failed to load schedule data: ${error}`);
  }
}

/**
 * Obtiene un partido por su ID
 */
export async function getMatchById(matchId: string): Promise<Match | undefined> {
  const schedule = await loadSchedule();
  return schedule.matches.find(match => match.id === matchId);
}

/**
 * Obtiene todos los partidos de una fecha específica
 */
export async function getMatchesByDate(date: string): Promise<Match[]> {
  const schedule = await loadSchedule();
  return schedule.matches.filter(match => match.date === date);
}

/**
 * Obtiene todos los partidos de un equipo
 */
export async function getMatchesByTeam(teamId: string): Promise<Match[]> {
  const schedule = await loadSchedule();
  return schedule.matches.filter(
    match => match.homeTeam === teamId || match.awayTeam === teamId
  );
}

/**
 * Obtiene todos los partidos de una fase
 */
export async function getMatchesByPhase(phase: string): Promise<Match[]> {
  const schedule = await loadSchedule();
  return schedule.matches.filter(match => match.phase === phase);
}

/**
 * Obtiene todos los partidos de un grupo
 */
export async function getMatchesByGroup(groupId: string): Promise<Match[]> {
  const schedule = await loadSchedule();
  return schedule.matches.filter(match => match.group === groupId);
}

/**
 * Obtiene los próximos partidos (status: scheduled)
 */
export async function getUpcomingMatches(limit?: number): Promise<Match[]> {
  const schedule = await loadSchedule();
  const upcoming = schedule.matches.filter(
    match => match.result.status === 'scheduled'
  );
  
  return limit ? upcoming.slice(0, limit) : upcoming;
}

/**
 * Obtiene los partidos finalizados
 */
export async function getFinishedMatches(): Promise<Match[]> {
  const schedule = await loadSchedule();
  return schedule.matches.filter(
    match => match.result.status === 'finished'
  );
}

/**
 * Obtiene el calendario organizado por rondas
 */
export async function getScheduleByRounds() {
  const schedule = await loadSchedule();
  
  return schedule.rounds.map(round => ({
    ...round,
    matches: schedule.matches.filter(match => round.matches.includes(match.id)),
  }));
}
