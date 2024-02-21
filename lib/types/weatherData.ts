import { z } from 'zod'

const AlertSchema = z.object({
  description: z.string(),
  end: z.number(),
  event: z.string(),
  sender_name: z.string(),
  start: z.number(),
  tags: z.array(z.string()),
})

const WeatherSchema = z.object({
  description: z.string(),
  icon: z.string(),
  id: z.number(),
  main: z.string(),
})

const PrecipitationSchema = z.union([z.number(), z.object({ '1h': z.number() })]).optional()

const BaseWeatherDataSchema = z.object({
  clouds: z.number(),
  dew_point: z.number(),
  dt: z.number(),
  humidity: z.number(),
  pressure: z.number(),
  weather: z.array(WeatherSchema),
  wind_deg: z.number(),
  wind_gust: z.number().optional(),
  wind_speed: z.number(),
  rain: PrecipitationSchema,
  snow: PrecipitationSchema,
})

const FeelsLikeSchema = z.object({
  day: z.number(),
  eve: z.number(),
  morn: z.number(),
  night: z.number(),
})

const TemperatureSchema = FeelsLikeSchema.extend({
  max: z.number(),
  min: z.number(),
})

const CurrentWeatherSchema = BaseWeatherDataSchema.extend({
  feels_like: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  temp: z.number(),
  uvi: z.number(),
  visibility: z.number(),
})

const DailyEntrySchema = BaseWeatherDataSchema.extend({
  feels_like: FeelsLikeSchema,
  moon_phase: z.number(),
  moonrise: z.number(),
  moonset: z.number(),
  pop: z.number(),
  temp: TemperatureSchema,
})

const HourlyEntrySchema = BaseWeatherDataSchema.extend({
  feels_like: z.number(),
  pop: z.number(),
  temp: z.number(),
  visibility: z.number().optional(),
})

const WeatherDataSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  current: CurrentWeatherSchema,
  hourly: z.array(HourlyEntrySchema),
  daily: z.array(DailyEntrySchema),
  alerts: z.array(AlertSchema).optional(),
})

type WeatherData = z.infer<typeof WeatherDataSchema>
type Weather = z.infer<typeof WeatherSchema>
type Precipitation = z.infer<typeof PrecipitationSchema>
type BaseWeatherData = z.infer<typeof BaseWeatherDataSchema>
type FeelsLike = z.infer<typeof FeelsLikeSchema>
type Temperature = z.infer<typeof TemperatureSchema>
type CurrentWeather = z.infer<typeof CurrentWeatherSchema>
type DailyEntry = z.infer<typeof DailyEntrySchema>
type HourlyEntry = z.infer<typeof HourlyEntrySchema>
type Alert = z.infer<typeof AlertSchema>

export {
  WeatherDataSchema,
  WeatherSchema,
  PrecipitationSchema,
  BaseWeatherDataSchema,
  FeelsLikeSchema,
  TemperatureSchema,
  CurrentWeatherSchema,
  DailyEntrySchema,
  HourlyEntrySchema,
  AlertSchema
}

export type {
  WeatherData,
  Weather,
  Precipitation,
  BaseWeatherData,
  FeelsLike,
  Temperature,
  CurrentWeather,
  DailyEntry,
  HourlyEntry,
  Alert
}
