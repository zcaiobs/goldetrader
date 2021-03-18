import { Doughnut } from "react-chartjs-2";
import styles from '../styles/chart.module.css'

export default function Chart2() {
  const data = {
    labels: ["Win", "Loser"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#37e66e", "#f22e57"],
        hoverBackgroundColor: ["#00e66f", "#ff0a3e"],
      },
    ],
  };

  return (
    <div className={styles.chart2}>
      <h2>Desempenho</h2>
      <Doughnut data={data} />
    </div>
  );
}
