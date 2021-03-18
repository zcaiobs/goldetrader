import styles from "../styles/result.module.css";
import Chart from "../components/chart";
import Chart2 from "../components/chart2";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Result() {
  const [result, setResult] = useState();
  const [period, setPeriod] = useState();
  const router = useRouter();

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
          const resultados = res.data.trader.map((item) => item.result);
          setResult([0, ...resultados]);
          setPeriod(
            resultados.reduce(
              (acumulador, valorInicial) => acumulador + valorInicial
            )
          );
        })
        .catch((err) => {
          
        });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <Chart res={result} />
        <div className={styles.values}>
          <div className={styles.period}>
            <h1>$ {period}</h1>
            <h5>Resultado do período</h5>
          </div>
          <div className={styles.average}>
            <h1>$ 2,50</h1>
            <h5>Lucro médio por aposta</h5>
          </div>
          <div className={styles.bank}>
            <h1>$ 20,00</h1>
            <h5>Total em banca</h5>
          </div>
        </div>
      </div>
      <div className={styles.winloser}>
        <Chart2 />
      </div>
    </div>
  );
}
