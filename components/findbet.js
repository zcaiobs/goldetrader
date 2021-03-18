import styles from "../styles/findbet.module.css";
import FindTableBet from "./findtablebet";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FindBet() {
  const [list, setList] = useState([]);

  const comp = async () => {
    try {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");

        const options = {
          method: "GET",
          headers: { token: token },
          data: null,
          url: "http://localhost:8080/page",
        };
        return await axios.request(options);
      }
    } catch (err) {
      router.push("/login");
    }
  };

  useEffect(() => {
    comp()
      .then((res) => {
        setList(res.data.trader.reverse());
      })
      .catch((err) => console.log("Error " + err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.findbet}>
        <h1>Bets</h1>
        <FindTableBet bet={list} att={(att) => setList(att)} />
      </div>
    </div>
  );
}
