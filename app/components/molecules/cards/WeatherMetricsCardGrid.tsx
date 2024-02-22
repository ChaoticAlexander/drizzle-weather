import MetricsCard from "@/app/components/molecules/cards/metricsCard/MetricsCard"
import useCurrentWeatherMetrics from "@/lib/hooks/currentWeatherMetrics";

export function WeatherMetricsCardGrid() {
    const metrics = useCurrentWeatherMetrics()

    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 h-full">
            {metrics.map((metric) => {
                return <MetricsCard
                    key={metric.title}
                    title={metric.title}
                    value={metric.value}
                    icon={metric.icon}
                />
            })}
        </div>
    )
}