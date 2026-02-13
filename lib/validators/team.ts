import { z } from 'zod';

// Schema para colores del equipo
export const teamColorsSchema = z.object({
  primary: z.string(),
  secondary: z.string(),
});

// Schema para contacto del equipo
export const teamContactSchema = z.object({
  coach: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional(),
});

// Schema para estadísticas del equipo
export const teamStatsSchema = z.object({
  played: z.number(),
  won: z.number(),
  drawn: z.number(),
  lost: z.number(),
  goalsFor: z.number(),
  goalsAgainst: z.number(),
  points: z.number(),
});

// Schema para jugadora (opcional)
export const playerSchema = z.object({
  number: z.number(),
  name: z.string(),
  position: z.string(),
});

// Schema para equipo individual
export const teamSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  club: z.string(),
  city: z.string(),
  region: z.string(),
  group: z.string(),
  founded: z.number().optional(),
  colors: teamColorsSchema,
  logo: z.string(),
  contact: teamContactSchema,
  stats: teamStatsSchema,
  players: z.array(playerSchema).optional(),
});

// Schema para grupo
export const groupSchema = z.object({
  name: z.string(),
  teams: z.array(z.string()),
});

// Schema para la estructura completa de equipos
export const teamsDataSchema = z.object({
  teams: z.array(teamSchema),
  groups: z.record(z.string(), groupSchema),
});

export type Team = z.infer<typeof teamSchema>;
export type TeamColors = z.infer<typeof teamColorsSchema>;
export type TeamContact = z.infer<typeof teamContactSchema>;
export type TeamStats = z.infer<typeof teamStatsSchema>;
export type Player = z.infer<typeof playerSchema>;
export type Group = z.infer<typeof groupSchema>;
export type TeamsData = z.infer<typeof teamsDataSchema>;
