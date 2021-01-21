import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/footer";
import styles from "../styles/forgot.module.css";

export default function Forgot() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

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
    auth(user)
      .then((res) => {
        alert(res.data)
      })
      .catch((err) => {
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
          <button>Send</button>
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
