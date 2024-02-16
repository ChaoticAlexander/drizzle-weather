import Card from '@/app/components/atoms/card';
import style from './weeklyForecastCard.module.css';

interface WeeklyForecastItem {
  day: string;
  status: string;
  icon: string;
  temperature: string;
}

interface Props {
  weeklyForecastData: WeeklyForecastItem[];
}

export default function WeeklyForecastCard({ weeklyForecastData }: Readonly<Props>) {
  return (
    <Card className={style.WeeklyForecastCard}>
      <div className={style.header}>7-Day Forecast</div>
      <div className={style.content}>
        { weeklyForecastData.map((item) => (
          <div key={item.day} className={style.forecastRow}>
            <div className={style.day}>{item.day}</div>
            <div className={style.status}>
              <i className={`fi ${item.icon} ${style.statusIcon}`}></i>
              <span className={style.statusName}>{item.status}</span>
            </div>
            <div className={style.temperature}>{item.temperature}</div>
          </div>
          )
        )}
      </div>
    </Card>
  )
}
