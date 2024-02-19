import { z } from 'zod';

const GeolocationResultItemSchema = z.object({
  name: z.string(),
  local_names: z.record(z.string()).optional(),
  lat: z.number(),
  lon: z.number(),
  country: z.string(),
  state: z.string().optional(),
});

const GeolocationResultsSchema = z.array(GeolocationResultItemSchema);

// Types

type GeolocationResultItem = z.infer<typeof GeolocationResultItemSchema>;
type GeolocationResults = z.infer<typeof GeolocationResultsSchema>;

export {
  GeolocationResultItemSchema,
  GeolocationResultsSchema,
}

export type {
  GeolocationResultItem,
  GeolocationResults,
}