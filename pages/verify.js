import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/verify.module.css";
import { useEffect } from "react";
import Footer from "../components/footer";

export default function Verify() {
  const router = useRouter();
  const token = router.query.key;
  const verified = async (token) => {
    const options = {
      method: "PUT",
      headers: { key: token },
      data: { verification: "Yes" },
      url: "http://localhost:8080",
    };

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    return await axios.request(options).then((res) => {
      setTimeout(() => {
        router.push("/user");
      }, 3000);
    });
  };

  useEffect(() => {
    if (token !== undefined) {
      verified(token);
    }
    }, [token]);

  return (
    <div className={styles.verify}>
      <img src="/hero-light.svg" alt="logo" />
      <div className={styles.container}>
        <h1>Thanks, your account has been verified</h1>
      </div>
      <Footer />
    </div>
  );
}
