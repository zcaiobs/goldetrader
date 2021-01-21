import styles from "../styles/dashboard.module.css";

export default function Dashboard(props) {
  switch (props.select) {
    case "a":
      return (
        <div className={styles.dashboard}>
          <h1>Option 1</h1>
        </div>
      );
    case "b":
      return (
        <div className={styles.dashboard}>
          <h1>Option 2</h1>
        </div>
      );
    case "c":
      return (
        <div className={styles.dashboard}>
          <h1>Option 3</h1>
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
