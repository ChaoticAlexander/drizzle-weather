## Description

This is a simple weather forecast application created using Next.js and Tailwind CSS.  
The application uses the OpenWeatherMap API to fetch the weather data.  
The application is deployed on Netlify and can be accessed [here](https://drizzle-weather.netlify.app/).

## Getting Started

First you need to make sure you have Node.js installed on your machine.  
You can download it from [here](https://nodejs.org/en/download/).

You can also use [pnpm](https://pnpm.io/) as an alternative to npm.

### Installation

First, clone the repository:

```bash
git clone https://github.com/ChaoticAlexander/drizzle-weather.git
```

Then, navigate to the project directory and install the dependencies:

```bash
npm install
# or
pnpm install
```

### Running the Development Server

Make sure you have a `.env` file in the root of the project with the following content:

```env
OPENWEATHER_API_KEY=your_openweathermap_api_key
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the page.
