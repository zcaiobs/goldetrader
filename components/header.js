import Head from "next/head";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <div className="container">
      <Head>
        <title>Gol de Trader</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="Logo" />
          </div>
          <div className={styles.login}>
            <h1>Login</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
