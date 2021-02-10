import Head from "next/head";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header(props) {
  return (
    <div className="container">
      <Head>
        <title>Gol de Trader</title>
        <link rel="icon" href="/logo.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className={styles.navbar + " " + props}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <a href="/">
              <img src="/logo.svg" alt="Logo" />
            </a>
            <div className={styles.links}>
              <ul>
                <li>
                  <Link href="/#hero">Home</Link>
                </li>
                <li>
                  <Link href="/#content">Content</Link>
                </li>
                <li>
                  <Link href="/#singup">Sing up</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.login}>
            <Link href="/user">
              <h1>Login</h1>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
