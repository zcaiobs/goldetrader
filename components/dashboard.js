import styles from "../styles/dashboard.module.css";
import CreateBet from './createbet'
import Result from './result'
import FindBet from './findbet'

export default function Dashboard(props) {
  switch (props.select) {
    case "a":
      return (
        <div className={styles.dashboard}>
          <Result />
        </div>
      );
    case "b":
      return (
        <div className={styles.dashboard}>
          <CreateBet trader={props.trader}/>
        </div>
      );
    case "c":
      return (
        <div className={styles.dashboard}>
          <FindBet trader={props.trader}/>
        </div>
      );
    case "d":
      return (
        <div className={styles.dashboard}>
          <h1>Option 4</h1>
        </div>
      );
    case "e":
      return (
        <div className={styles.dashboard}>
          <h1>Option 5</h1>
        </div>
      );
    default:
      return (
        <div className={styles.dashboard}>
          <h1>Option 1</h1>
        </div>
      );
  }
}
