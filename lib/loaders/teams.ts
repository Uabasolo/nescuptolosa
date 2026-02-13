import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { teamsDataSchema, type Team, type TeamsData } from '@/lib/validators/team';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Carga y valida todos los equipos desde teams.yml
 */
export async function loadTeams(): Promise<TeamsData> {
  const filePath = path.join(DATA_DIR, 'teams.yml');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = YAML.parse(fileContents);
    
    // Validar con Zod
    const validated = teamsDataSchema.parse(data);
    
    return validated;
  } catch (error) {
    console.error('Error loading teams data:', error);
    throw new Error(`Failed to load teams data: ${error}`);
  }
}

/**
 * Obtiene un equipo por su ID
 */
export async function getTeamById(teamId: string): Promise<Team | undefined> {
  const teamsData = await loadTeams();
  return teamsData.teams.find(team => team.id === teamId);
}

/**
 * Obtiene todos los equipos de un grupo específico
 */
export async function getTeamsByGroup(groupId: string): Promise<Team[]> {
  const teamsData = await loadTeams();
  return teamsData.teams.filter(team => team.group === groupId);
}

/**
 * Obtiene todos los equipos ordenados por grupo
 */
export async function getTeamsByGroups(): Promise<Record<string, Team[]>> {
  const teamsData = await loadTeams();
  const groupedTeams: Record<string, Team[]> = {};
  
  Object.keys(teamsData.groups).forEach(groupId => {
    groupedTeams[groupId] = teamsData.teams.filter(team => team.group === groupId);
  });
  
  return groupedTeams;
}

/**
 * Obtiene la clasificación de un grupo ordenada por puntos
 */
export async function getGroupStandings(groupId: string): Promise<Team[]> {
  const teams = await getTeamsByGroup(groupId);
  
  // Ordenar por puntos, diferencia de goles, goles a favor
  return teams.sort((a, b) => {
    if (b.stats.points !== a.stats.points) {
      return b.stats.points - a.stats.points;
    }
    const diffA = a.stats.goalsFor - a.stats.goalsAgainst;
    const diffB = b.stats.goalsFor - b.stats.goalsAgainst;
    if (diffB !== diffA) {
      return diffB - diffA;
    }
    return b.stats.goalsFor - a.stats.goalsFor;
  });
}

/**
 * Cuenta el número total de equipos
 */
export async function getTotalTeamsCount(): Promise<number> {
  const teamsData = await loadTeams();
  return teamsData.teams.length;
}
