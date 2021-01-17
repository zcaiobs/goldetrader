import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import styles from "../styles/register.module.css";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [repwd, setRepwd] = useState("");
  const [error, setError] = useState("");

  const handleValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const repwdValue = (event) => {
    setRepwd(event.target.value);
  };

  const register = async (user) => {
    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(user),
      url: "http://localhost:8080",
    };
    return await axios.request(options);
  };

  const enter = (event) => {
    if (user.password === repwd) {
      register(user).then((result) => {
        alert("User registered")
        reset();
        router.push("/login")
      }).catch(err => setError("" + err))
    } 
    event.preventDefault();
  };

  const reset = () => {
    document.getElementById("form").reset();
  };

  return (
    <div className="login">
      <div className={styles.input}>
        <div className={styles.backHome}>
          <Link href="/">
            <img src="/hero-light.svg" alt="Back home" />
          </Link>
        </div>
        <form id="form" className={styles.form} onSubmit={enter}>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              onChange={handleValue}
              required
              placeholder="You name"
            />
          </label>
          <label>
            Email
            <br />
            <input
              type="email"
              name="email"
              onChange={handleValue}
              required
              placeholder="user@email.com"
            />
          </label>
          <label>
            Password
            <br />
            <input
              type="password"
              name="password"
              onChange={handleValue}
              required
              minLength="5"
              placeholder="*****"
            />
          </label>
          <label>
            Reapet password
            <br />
            <input
              type="password"
              name="repwd"
              onChange={repwdValue}
              required
              minLength="5"
              pattern={"[" + user.password + "]+"}
              title="Password does not match"
              placeholder="*****"
            />
          </label>
          <button>Register</button>
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
