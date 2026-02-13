import { z } from 'zod';

// Schema para fechas del torneo
export const tournamentDatesSchema = z.object({
  start: z.string(),
  end: z.string(),
  registrationOpen: z.string(),
  registrationClose: z.string(),
});

// Schema para ubicación
export const locationSchema = z.object({
  city: z.string(),
  region: z.string(),
  country: z.string(),
  address: z.string(),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
});

// Schema para organizador
export const organizerSchema = z.object({
  name: z.string(),
  fullName: z.string(),
  region: z.string(),
  coordinator: z.string(),
  role: z.string(),
});

// Schema para categoría
export const categorySchema = z.object({
  name: z.string(),
  ageGroup: z.string(),
  gender: z.string(),
});

// Schema para estadísticas
export const statsSchema = z.object({
  maxTeams: z.number(),
  currentTeams: z.number(),
  expectedPlayers: z.number(),
  matchDays: z.number(),
  venues: z.number(),
});

// Schema para formato del torneo
export const formatSchema = z.object({
  type: z.string(),
  groups: z.number(),
  teamsPerGroup: z.number(),
  matchDuration: z.string(),
});

// Schema para fases
export const phaseSchema = z.object({
  name: z.string(),
  description: z.string(),
  startTime: z.string().optional(),
  dates: z.object({
    start: z.string(),
    end: z.string(),
  }),
});

// Schema para premios
export const prizeSchema = z.object({
  position: z.number().optional(),
  name: z.string(),
  award: z.string(),
});

// Schema para contacto
export const contactSchema = z.object({
  email: z.string().email(),
  phone: z.string(),
  whatsapp: z.string().optional(),
  coordinator: z.string(),
  website: z.string().url(),
  social: z.object({
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    facebook: z.string().optional(),
  }),
});

// Schema para inscripción
export const registrationSchema = z.object({
  fee: z.number(),
  includes: z.array(z.string()),
  requirements: z.array(z.string()),
});

// Schema completo del torneo
export const tournamentSchema = z.object({
  name: z.string(),
  edition: z.number(),
  year: z.number(),
  tagline: z.string(),
  description: z.string(),
  organizer: organizerSchema,
  category: categorySchema,
  dates: tournamentDatesSchema,
  location: locationSchema,
  stats: statsSchema,
  format: formatSchema,
  phases: z.array(phaseSchema),
  prizes: z.array(prizeSchema).optional(),
  contact: contactSchema,
  registration: registrationSchema,
  features: z.array(z.string()).optional(),
});

export type Tournament = z.infer<typeof tournamentSchema>;
export type TournamentDates = z.infer<typeof tournamentDatesSchema>;
export type Location = z.infer<typeof locationSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Stats = z.infer<typeof statsSchema>;
export type Format = z.infer<typeof formatSchema>;
export type Phase = z.infer<typeof phaseSchema>;
export type Prize = z.infer<typeof prizeSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type Registration = z.infer<typeof registrationSchema>;
