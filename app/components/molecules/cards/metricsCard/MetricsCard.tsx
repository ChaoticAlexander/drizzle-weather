import Card from "@/app/components/atoms/card";
import style from './MetricsCard.module.css';

interface Props {
  title: string;
  value: string | number;
  icon: string;
}

export default function MetricsCard({ title, value, icon }: Readonly<Props>) {
  return (
    <Card className={style.statusCard}>
      <div className={style.container}>
        <div className={style.statusIcon}>
          <i className={`fi ${icon}`}></i>
        </div>
        <div className={style.textColumn}>
          <div className={style.title}>{title}</div>
          <div className={style.value}>{value}</div>
        </div>
      </div>
    </Card>
  )
}
