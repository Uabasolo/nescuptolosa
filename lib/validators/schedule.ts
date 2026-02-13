import { z } from 'zod';

// Schema para resultado del partido
export const matchResultSchema = z.object({
  homeScore: z.number().nullable(),
  awayScore: z.number().nullable(),
  status: z.enum(['scheduled', 'live', 'finished', 'postponed', 'cancelled']),
});

// Schema para partido individual
export const matchSchema = z.object({
  id: z.string(),
  phase: z.string(),
  group: z.string().optional(),
  matchNumber: z.number(),
  date: z.string(),
  time: z.string(),
  venue: z.string(),
  homeTeam: z.string(),
  awayTeam: z.string(),
  result: matchResultSchema,
  referee: z.string().optional(),
  notes: z.string().optional(),
});

// Schema para ronda
export const roundSchema = z.object({
  id: z.string(),
  name: z.string(),
  date: z.string(),
  matches: z.array(z.string()),
});

// Schema para la estructura completa del calendario
export const scheduleDataSchema = z.object({
  matches: z.array(matchSchema),
  rounds: z.array(roundSchema),
});

export type Match = z.infer<typeof matchSchema>;
export type MatchResult = z.infer<typeof matchResultSchema>;
export type Round = z.infer<typeof roundSchema>;
export type ScheduleData = z.infer<typeof scheduleDataSchema>;
