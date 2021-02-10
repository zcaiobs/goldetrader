import axios from "axios";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import Footer from "../components/footer";
import styles from "../styles/forgot.module.css";

export default function Forgot() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);
  const router = useRouter()

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
      url: "http://localhost:8080/forgot",
    };
    reset();
    return await axios.request(options);
  };

  const reset = () => {
    document.getElementById("form").reset();
  };

  const enter = (event) => {
    setActive(true)
    auth(user)
      .then((res) => {
        alert(res.data)
        router.push("/login")
      })
      .catch((err) => {
        setActive(false)
        setError("" + err) 
      });
    event.preventDefault();
  };

  return (
    <div className="forgot">
      <div className={styles.input}>
        <div className={styles.backHome}>
          <Link href="/">
            <img src="/hero-light.svg" alt="Back home" />
          </Link>
        </div>
        <form id="form" className={styles.form} onSubmit={enter}>
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
          <button disabled={active}>Send</button>
          <div className={styles.error}>
            <p>{error}</p>
          </div>
          <hr />
        </form>
      </div>
      <Footer />
    </div>
  );
}
