import styles from "../styles/verification.module.css";
import Footer from "../components/footer";
import axios from "axios";

export default function Verification() {

  const resent = async () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const options = {
        method: "POST",
        headers: { key: token },
        data: "",
        url: "http://localhost:8080/verification",
      };
      alert("A verification link has been sent to your email account");
      return await axios.request(options);
    }
  };

  return (
    <div className={styles.verification}>
      <img src="hero-light.svg" alt="Logo" />
      <div className={styles.container}>
        <h1>Reenviar um link de verificação</h1>
        <button onClick={resent}>Resent</button>
      </div>
      <Footer />
    </div>
  );
}
