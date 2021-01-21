import { useRouter } from "next/router";
import styles from "../styles/config.module.css";

export default function Config(props) {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className={styles.config}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/logo.svg" alt="Logo" />
        </a>
      </div>
      <div className={styles.logout}>
        <h1>{props.user}</h1>
        <button onClick={logout}>
          <img src="/exit.svg" alt="Logout" />
        </button>
      </div>
    </div>
  );
}
