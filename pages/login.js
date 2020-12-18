import Header from "../components/header";
import Footer from "../components/footer";
import styles from '../styles/login.module.css'

export default function Login() {
  return (
    <div className='login'>
      <Header />
      <div className={styles.imput}>
        <h1>Login</h1>
      </div>
      <Footer />
    </div>
  );
}
