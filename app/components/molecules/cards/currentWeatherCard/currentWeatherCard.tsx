import style from './currentWeatherCard.module.css'

export default function CurrentWeatherCard() {
  return (
    <div className={style.currentWeatherCard}>
      <div className={style.textColumn}>

        <div className={style.location}>Utrecht</div>
        <div className={style.chanceOfRain}>Chance of rain: 0%</div>
        <div className={style.temperature}>20°C</div>
      </div>
      <div className={style.statusIcon}>
        <i className="fi fi-rr-cloud"></i>
      </div>
    </div>
  )
}
