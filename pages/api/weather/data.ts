import {NextApiRequest, NextApiResponse} from "next";
import {z} from "zod";

const params = z.object({
    lat: z.string(),
    lon: z.string(),
});

/**
 * Fetches weather data from the server
 * @param req
 * @param res
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        res.status(405).json({error: 'Method Not Allowed'});
    }

    try {
        const { lat, lon } = params.parse(req.query);
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
        if (!response.ok) {
            res.status(response.status).json({message: response.statusText})
        }
        const data = await response.json();
        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({message: error.format()});
    }
}