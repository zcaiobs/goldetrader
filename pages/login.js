import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/footer";
import styles from "../styles/login.module.css";
import { useRouter } from "next/router";

export default function Login() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const auth = async (user) => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(user),
      url: "http://localhost:8080/auth",
    };
    return await axios.request(options);
  };

  const enter = (event) => {
    auth(user)
      .then((result) => {
        if (result.status === 200) {
          localStorage.removeItem("token");
          localStorage.setItem("token", result.headers.token);
          router.push("/user");
        }
        if (result.status === 202) {
          localStorage.removeItem("token");
          localStorage.setItem("token", result.headers.token);
          router.push("/verification");
        }
      })
      .catch((err) => {
        setError("" + err);
      });
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className={styles.input}>
        <div className={styles.backHome}>
          <Link href="/">
            <img src="/hero-light.svg" alt="Back home" />
          </Link>
        </div>
        <form className={styles.form} onSubmit={enter}>
          <label>
            Email
            <br />
            <input
              type="email"
              name="email"
              placeholder="user@email.com"
              onChange={handleValue}
              required
            />
          </label>
          <label>
            Password
            <br />
            <input
              type="password"
              name="password"
              placeholder="*****"
              onChange={handleValue}
              required
            />
          </label>
          <button>Enter</button>
          <div className={styles.forgot}>
            <Link href="/forgot">Forgot password</Link>
          </div>
          <div className={styles.error}>
            <p>{error}</p>
          </div>
          <hr />
          <h1>New to Gol de Trader?</h1>
          <Link href="/register">Sing Up</Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}
