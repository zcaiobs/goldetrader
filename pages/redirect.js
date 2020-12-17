import styles from "../styles/redirect.module.css";

export default function Redirect() {
  return (
    <div className={styles.container2}>
      <div className={styles.redirect}>
        <div className={styles.info2}>
          <img src="/info2.jpg" alt="Gol" />
        </div>
        <div className={styles.link}>
          <h1>Link</h1>
          <button className={styles.btnLink}>Sing up</button>
        </div>
      </div>
    </div>
  );
}
