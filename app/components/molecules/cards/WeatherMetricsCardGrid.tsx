import style from "@/app/styles/homepage.module.css";
import MetricsCard from "@/app/components/molecules/cards/metricsCard/MetricsCard";
import { Metric } from "@/lib/types/common";

interface Props {
    statuses: Metric[];
}
export function WeatherMetricsCardGrid({ statuses }: Readonly<Props>) {
    return (
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 h-full">
            {statuses.map((status) => {
                return <MetricsCard
                    key={status.title}
                    title={status.title}
                    value={status.value}
                    icon={status.icon}
                />
            })}
        </div>
    );
}