import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/newpwd.module.css";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/footer";

export default function NewPassword() {
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

  const reset = () => {
    document.getElementById("form").reset();
  };

  const newpwd = (event) => {
    if (user.password === repwd) {
      axios
        .put(
          "http://localhost:8080/newpwd",
          { password: user.password },
          {
            headers: { key: router.query.key },
          }
        )
        .then((res) => {
          reset();
          alert(res.data);
          router.push("/login");
        })
        .catch((err) => setError("" + err));
    }
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
        <form id="form" className={styles.form} onSubmit={newpwd}>
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
