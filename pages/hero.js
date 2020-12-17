import styles from '../styles/hero.module.css'

export default function Hero() {
    return(
        <div className={styles.hero}>
          <div className={styles.preview}>
            <h1>Text</h1>
          </div>
          <div className={styles.brand}>
            <img src="/hero.svg" alt="Hero"/>
          </div>
        </div>
    )
}