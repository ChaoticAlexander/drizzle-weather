import Card from "@/app/components/atoms/card"
import style from './dailyForecastCard.module.css'

export default function DailyForecastCard() {

  const data = [
    {
      hour: '6:00 AM',
      icon: 'fi-rr-cloud',
      temperature: '25°C'
    },
    {
      hour: '9:00 AM',
      icon: 'fi-rr-cloud',
      temperature: '28°C'
    },
    {
      hour: '12:00 PM',
      icon: 'fi-rr-cloud',
      temperature: '30°C'
    },
  ]

  return (
    <Card className={style.dailyForecastCard}>
      <div className={style.header}>{"Today's Forecast"}</div>
      <div className={style.content}>
        { data.map((item) => (
          <div key={item.hour} className={style.forecastColumn}>
            <div className={style.hour}>{item.hour}</div>
            <div className={style.statusIcon}>
              <i className={`fi ${item.icon}`}></i>
            </div>
            <div className={style.temperature}>{item.temperature}</div>
          </div>
          )
        )}
      </div>
    </Card>
  )
}
