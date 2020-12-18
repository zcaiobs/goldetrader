import Head from "next/head";
import Link from 'next/link'
import styles from "../styles/header.module.css";

export default function Header() {
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
      <nav className={styles.navbar}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="Logo" />
            <div className={styles.links}>
              <ul>
                <li><a href='#hero'>Home</a></li>
                <li><a href='#content'>Content</a></li>
                <li><a href='#singup'>Sing up</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.login}>
            <Link href='/login'><h1>Login</h1></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
