import Link from 'next/link'
import Footer from "../components/footer";
import styles from '../styles/login.module.css'

export default function Login() {
  const enter = (event) => {
   // alert('Login realizado com sucesso')
    event.preventDefault()
  }

  return (
    <div className='login'>
      <div className={styles.input}>
        <div className={styles.backHome}>
          <Link href="/">
            <img src="/hero-light.svg" alt="Back home"/>
          </Link>
        </div>
        <form className={styles.form} onSubmit={enter}>
          <label>
            User<br/>
            <input type="text"/>
          </label>
          <label>
            Password<br/>
            <input type="password"/>
          </label>
          <button>Enter</button>
          <div className={styles.forgot}>
            <a href="#">Forgot password</a>
          </div>
          <hr/>
          <h1>New to Gol de Trader?</h1><a href='#'>Sing Up</a>
        </form>
      </div>
      <Footer />
    </div>
  );
}
