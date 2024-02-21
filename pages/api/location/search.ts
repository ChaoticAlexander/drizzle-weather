import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

/**
 * Search for a location by name
 * @param req
 * @param res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const searchTerm = z.string().parse(req.query.q)
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${process.env.OPENWEATHER_API_KEY}`)
    if (!response.ok) {
      res.status(response.status).json({ message: response.statusText })
    }
    const data = await response.json()
    res.status(200).json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.format() })
  }
}
