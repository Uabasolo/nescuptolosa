import { z } from 'zod';

// Schema para instalaciones
export const venueAmenitiesSchema = z.array(z.string());

export const venueFacilitiesSchema = z.object({
  type: z.enum(['outdoor', 'indoor', 'hybrid']),
  surface: z.string(),
  dimensions: z.string(),
  capacity: z.number(),
  lighting: z.boolean(),
  covered: z.boolean(),
});

export const venuePublicTransportSchema = z.object({
  type: z.string(),
  line: z.string().optional(),
  station: z.string().optional(),
  distance: z.string().optional(),
});

export const venueAccessSchema = z.object({
  parking: z.boolean(),
  parkingSpaces: z.number().optional(),
  publicTransport: z.array(venuePublicTransportSchema).optional(),
  wheelchair: z.boolean(),
});

export const venueLocationSchema = z.object({
  address: z.string(),
  city: z.string(),
  region: z.string(),
  postalCode: z.string(),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
});

export const venueContactSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
});

// Schema para venue individual
export const venueSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  location: venueLocationSchema,
  facilities: venueFacilitiesSchema,
  amenities: venueAmenitiesSchema,
  access: venueAccessSchema,
  contact: venueContactSchema,
  mapUrl: z.string().url(),
});

// Schema para la estructura completa de venues
export const venuesDataSchema = z.object({
  venues: z.array(venueSchema),
});

export type Venue = z.infer<typeof venueSchema>;
export type VenueFacilities = z.infer<typeof venueFacilitiesSchema>;
export type VenueAccess = z.infer<typeof venueAccessSchema>;
export type VenueLocation = z.infer<typeof venueLocationSchema>;
export type VenuesData = z.infer<typeof venuesDataSchema>;
